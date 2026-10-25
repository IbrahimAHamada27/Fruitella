import { Injectable, inject } from '@angular/core';
import { 
  IOrderSubmissionService, 
  OrderSubmissionPayload, 
  OrderSubmissionResult 
} from '../contracts/order-submission.contract';
import { OrderService } from './order.service';
import { WHATSAPP_ORDER_CONFIG, normalizeWhatsAppNumber } from '../config/order.config';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppOrderSubmissionService implements IOrderSubmissionService {
  private orderService = inject(OrderService);
  private configService = inject(ConfigService);

  async submitOrder(payload: OrderSubmissionPayload): Promise<OrderSubmissionResult> {
    // 1. Validation: Cart must contain at least 1 item
    if (!payload.items || payload.items.length === 0) {
      throw new Error('لا توجد أصناف في السلة لإتمام الطلب');
    }

    // 2. Validate quantities and prices
    for (const item of payload.items) {
      if (item.quantity <= 0) {
        throw new Error(`كمية الصنف ${item.nameAr} غير صالحة`);
      }
      if (item.totalPrice < 0) {
        throw new Error(`سعر الصنف ${item.nameAr} غير صالح`);
      }
    }

    // 3. Register order record in local storage via OrderService
    const order = this.orderService.createOrder(
      payload.customer,
      payload.fulfillmentType,
      payload.paymentMethod,
      payload.items,
      payload.summary,
      {
        tableDetails: payload.tableDetails,
        carDetails: payload.carDetails,
        takeawayDetails: payload.takeawayDetails,
        deliveryDetails: payload.deliveryDetails
      }
    );

    // 4. Resolve official WhatsApp number
    const businessWhatsApp = this.configService.business().contacts.whatsapp || WHATSAPP_ORDER_CONFIG.phoneNumber;
    const targetPhone = normalizeWhatsAppNumber(businessWhatsApp);

    // 5. Build structured, professional WhatsApp order message
    const messageText = this.buildWhatsAppMessage(order, payload);

    // 6. Encode message for WhatsApp Click-to-Chat URL
    const encodedText = encodeURIComponent(messageText);
    const redirectUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    return {
      success: true,
      order,
      orderId: order.orderId,
      orderNumber: order.orderNumber,
      submissionMethod: 'whatsapp',
      redirectUrl,
      formattedMessageText: messageText,
      messageAr: 'تم تجهيز تفاصيل طلبك للإرسال عبر واتساب.'
    };
  }

  /**
   * Builds the formatted WhatsApp order text in clear, courteous Arabic.
   */
  buildWhatsAppMessage(order: { orderNumber: string }, payload: OrderSubmissionPayload): string {
    const lines: string[] = [];

    // Header
    lines.push(`🥑 *طلب جديد — فروتيلا (Fruitella)* 🥭`);
    lines.push(`📋 *رقم الطلب:* ${order.orderNumber}`);
    lines.push(`⏰ *التاريخ:* ${new Date().toLocaleDateString('ar-EG')} — ${new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`);
    lines.push(`⏳ *وقت الانتظار المتوقع:* 4 - 8 دقائق`);
    lines.push(``);

    // Fulfillment Details
    lines.push(`📍 *طريقة الاستلام:*`);
    switch (payload.fulfillmentType) {
      case 'table': {
        const tableNum = payload.tableDetails?.tableNumber ? `#${payload.tableDetails.tableNumber}` : 'غير محدد';
        const detected = payload.tableDetails?.detectedFromQr ? ' (مسح رمز QR)' : '';
        lines.push(`• صالة الفرع — *ترابيزة ${tableNum}*${detected}`);
        break;
      }
      case 'car': {
        lines.push(`• خدمة السيارة (أمام مدخل 2 بمول حياة تاون)`);
        if (payload.carDetails?.vehiclePlate) {
          lines.push(`  - رقم اللوحة: ${payload.carDetails.vehiclePlate}`);
        }
        if (payload.carDetails?.vehicleModel || payload.carDetails?.vehicleColor) {
          lines.push(`  - مواصفات السيارة: ${[payload.carDetails.vehicleModel, payload.carDetails.vehicleColor].filter(Boolean).join(' - ')}`);
        }
        if (payload.carDetails?.parkingSpot) {
          lines.push(`  - مكان الانتظار: ${payload.carDetails.parkingSpot}`);
        }
        break;
      }
      case 'takeaway': {
        lines.push(`• استلام تيك أواي من كاونتر فرع حياة تاون`);
        break;
      }
      case 'delivery': {
        lines.push(`• دليفري لمدينة العبور:`);
        lines.push(`  - الحي: ${payload.deliveryDetails?.district || ''}`);
        lines.push(`  - الشارع والعقار: ${payload.deliveryDetails?.street || ''}`);
        if (payload.deliveryDetails?.building) {
          lines.push(`  - تفاصيل الشقة/الدور: ${payload.deliveryDetails.building}`);
        }
        if (payload.deliveryDetails?.landmark) {
          lines.push(`  - علامة مميزة: ${payload.deliveryDetails.landmark}`);
        }
        if (payload.deliveryDetails?.alternativePhone) {
          lines.push(`  - رقم بديل: ${payload.deliveryDetails.alternativePhone}`);
        }
        break;
      }
    }
    lines.push(``);

    // Customer Info
    lines.push(`👤 *بيانات العميل:*`);
    lines.push(`• الاسم: ${payload.customer.fullName || 'عميل فروتيلا'}`);
    if (payload.customer.phone && payload.customer.phone !== 'طلب طاولة بدون هاتف') {
      lines.push(`• الهاتف: ${payload.customer.phone}`);
    }

    // Payment Method
    let payText = 'نقداً (كاش عند الاستلام)';
    if (payload.paymentMethod === 'instapay') payText = 'إنستاباي (InstaPay عند الاستلام)';
    else if (payload.paymentMethod === 'vodafone_cash') payText = 'فودافون كاش (عند الاستلام)';
    lines.push(`• طريقة السداد: ${payText}`);
    lines.push(``);

    // Items List
    lines.push(`🛒 *تفاصيل الأصناف المطلوبة (${payload.items.length}):*`);
    payload.items.forEach((item, idx) => {
      lines.push(`${idx + 1}. *${item.nameAr}* (×${item.quantity}) — ${item.totalPrice} ج.م`);
      lines.push(`   الحجم: ${item.selectedSize.nameAr}`);

      // Beverage Customization
      if (item.customization) {
        const c = item.customization;
        const customParts: string[] = [];
        if (c.blendType === 'half') customParts.push('نص ضربة');
        else if (c.blendType === 'froth') customParts.push('وش ضربة');

        if (c.sweetenerType === 'honey') customParts.push('عسل نحل طبيعي');
        else if (c.sweetenerType === 'stevia') customParts.push('ستيفيا دايت');
        else if (c.sweetenerType === 'none') customParts.push('بدون سكر');
        else if (c.sugarLevel) {
          if (c.sugarLevel === 'light') customParts.push('سكر خفيف');
          else if (c.sugarLevel === 'extra') customParts.push('سكر زيادة');
          else customParts.push('سكر مضبوط');
        }

        if (c.iceLevel === 'none') customParts.push('بدون ثلج');
        else if (c.iceLevel === 'light') customParts.push('ثلج خفيف');

        if (customParts.length > 0) {
          lines.push(`   التحضير: ${customParts.join(' • ')}`);
        }
      }

      // Ice cream customization
      if (item.iceCreamCustomization) {
        const ic = item.iceCreamCustomization;
        if (ic.selectedFlavors?.length) {
          lines.push(`   النكهات: ${ic.selectedFlavors.join(' + ')}`);
        }
        if (ic.servingType) {
          lines.push(`   التقديم: ${ic.servingType}`);
        }
        if (ic.sauce) {
          lines.push(`   الصوص: ${ic.sauce}`);
        }
      }

      // Addons
      if (item.selectedAddons && item.selectedAddons.length > 0) {
        const addonsStr = item.selectedAddons.map(a => `${a.nameAr} (+${a.price} ج)`).join(', ');
        lines.push(`   إضافات: ${addonsStr}`);
      }

      // Special notes
      if (item.specialInstructions) {
        lines.push(`   ملاحظة: ${item.specialInstructions}`);
      }
    });
    lines.push(``);

    // Summary & Total
    lines.push(`💰 *الحساب الإجمالي:*`);
    lines.push(`• إجمالي الأصناف: ${payload.summary.subtotal} ج.م`);
    if (payload.fulfillmentType === 'delivery') {
      const fee = payload.summary.deliveryFee ?? (payload.summary.subtotal >= 250 ? 0 : 25);
      lines.push(`• رسوم التوصيل: ${fee === 0 ? 'مجاناً' : fee + ' ج.م'}`);
      lines.push(`• *المبلغ الإجمالي المستحق: ${payload.summary.total} ج.م*`);
    } else {
      lines.push(`• *المبلغ الإجمالي المستحق: ${payload.summary.total} ج.م*`);
    }

    // Overall Customer Notes
    if (payload.notes?.trim() || payload.customer.notes?.trim()) {
      const note = (payload.notes || payload.customer.notes || '').trim();
      lines.push(``);
      lines.push(`📝 *ملاحظات عامة على الطلب:*`);
      lines.push(note);
    }

    // Courteous closing
    lines.push(``);
    lines.push(`يرجى مراجعة الطلب وتأكيد الاستلام والتجهيز. شكراً لكم! ✨`);

    return lines.join('\n');
  }
}
