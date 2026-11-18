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
   * Builds the formatted WhatsApp order text in clear, courteous Arabic according to Fruitella standards.
   */
  buildWhatsAppMessage(order: { orderNumber: string }, payload: OrderSubmissionPayload): string {
    const lines: string[] = [];

    // Header
    lines.push(`🛍️ *طلب جديد — فروتيلا (Fruitella)*`);
    lines.push(`📋 *رقم الطلب:* ${order.orderNumber}`);
    lines.push(`⏰ *التاريخ:* ${new Date().toLocaleDateString('ar-EG')} — ${new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`);
    lines.push(``);

    // Customer Info Section
    lines.push(`👤 *بيانات العميل:*`);
    lines.push(`الاسم: ${payload.customer.fullName || 'عميل فروتيلا'}`);
    if (payload.customer.phone && payload.customer.phone !== 'طلب طاولة بدون هاتف') {
      lines.push(`رقم الهاتف: ${payload.customer.phone}`);
    }
    if (payload.deliveryDetails?.alternativePhone) {
      lines.push(`رقم الهاتف البديل: ${payload.deliveryDetails.alternativePhone}`);
    }
    lines.push(``);

    // Fulfillment Details Section
    const methodAr = payload.fulfillmentType === 'delivery' 
      ? 'توصيل للمنزل (Delivery)' 
      : payload.fulfillmentType === 'table'
      ? 'طلب صالة (Dine-in Table)'
      : payload.fulfillmentType === 'car'
      ? 'خدمة السيارة (Car Service)'
      : 'استلام من الفرع (Pickup / Takeaway)';

    lines.push(`📍 *تفاصيل الاستلام والتوصيل:*`);
    lines.push(`طريقة الاستلام: ${methodAr}`);

    if (payload.fulfillmentType === 'delivery') {
      const addressParts: string[] = [];
      if (payload.deliveryDetails?.street) addressParts.push(payload.deliveryDetails.street);
      if (payload.deliveryDetails?.building) addressParts.push(payload.deliveryDetails.building);
      if (payload.deliveryDetails?.landmark) addressParts.push(`(علامة مميزة: ${payload.deliveryDetails.landmark})`);
      
      const district = payload.deliveryDetails?.district || 'مدينة العبور';
      const isCustomArea = district.includes('أخرى');
      lines.push(`المنطقة: ${district}`);
      lines.push(`العنوان: ${addressParts.join(' - ') || 'مدينة العبور'}`);
      
      if (isCustomArea) {
        lines.push(`رسوم التوصيل: لم يتم تحديد التوصيل (يحدد مع خدمة العملاء)`);
      } else {
        const deliveryFeeVal = payload.summary.deliveryFee ?? 0;
        lines.push(`رسوم التوصيل: ${deliveryFeeVal === 0 ? 'مجاناً' : deliveryFeeVal + ' EGP'}`);
      }
    } else if (payload.fulfillmentType === 'table') {
      const tableNum = payload.tableDetails?.tableNumber ? `#${payload.tableDetails.tableNumber}` : 'غير محدد';
      const detected = payload.tableDetails?.detectedFromQr ? ' (مسح رمز QR)' : '';
      lines.push(`طاولة رقم: ${tableNum}${detected}`);
    } else if (payload.fulfillmentType === 'car') {
      if (payload.carDetails?.vehiclePlate) lines.push(`رقم لوحة السيارة: ${payload.carDetails.vehiclePlate}`);
      if (payload.carDetails?.vehicleModel || payload.carDetails?.vehicleColor) {
        lines.push(`مواصفات السيارة: ${[payload.carDetails.vehicleModel, payload.carDetails.vehicleColor].filter(Boolean).join(' - ')}`);
      }
      if (payload.carDetails?.parkingSpot) lines.push(`مكان الانتظار: ${payload.carDetails.parkingSpot}`);
    } else if (payload.fulfillmentType === 'takeaway') {
      lines.push(`مكان الاستلام: كاونتر الاستلام السريع بفرع مول حياة تاون (مدخل 2)`);
    }
    lines.push(``);

    // Items Details Section
    lines.push(`🛒 *تفاصيل الطلب:*`);
    payload.items.forEach((item) => {
      lines.push(`- ${item.nameAr} (${item.selectedSize.nameAr}) × ${item.quantity} = ${item.totalPrice} EGP`);

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
          lines.push(`  ↳ التحضير: ${customParts.join(' • ')}`);
        }
      }

      // Ice cream customization
      if (item.iceCreamCustomization) {
        const ic = item.iceCreamCustomization;
        const icParts: string[] = [];
        if (ic.selectedFlavors?.length) icParts.push(`النكهات: ${ic.selectedFlavors.join(' + ')}`);
        if (ic.servingType) icParts.push(`التقديم: ${ic.servingType}`);
        if (ic.sauce) icParts.push(`الصوص: ${ic.sauce}`);
        if (icParts.length > 0) {
          lines.push(`  ↳ ${icParts.join(' • ')}`);
        }
      }

      // Addons
      if (item.selectedAddons && item.selectedAddons.length > 0) {
        const addonsStr = item.selectedAddons.map(a => `${a.nameAr} (+${a.price} ج)`).join(', ');
        lines.push(`  ↳ إضافات: ${addonsStr}`);
      }

      // Special notes
      if (item.specialInstructions) {
        lines.push(`  ↳ ملاحظة خاصة: ${item.specialInstructions}`);
      }
    });

    lines.push(``);
    lines.push(`━━━━━━━━━━━━━━`);
    lines.push(`إجمالي المنتجات: ${payload.summary.subtotal} EGP`);
    if (payload.fulfillmentType === 'delivery') {
      const isCustomArea = (payload.deliveryDetails?.district || '').includes('أخرى');
      if (isCustomArea) {
        lines.push(`رسوم التوصيل: لم يتم تحديد التوصيل`);
      } else {
        const deliveryFeeVal = payload.summary.deliveryFee ?? 0;
        lines.push(`رسوم التوصيل: ${deliveryFeeVal} EGP`);
      }
    } else {
      lines.push(`رسوم التوصيل: 0 EGP`);
    }
    lines.push(`الخصم: 0 EGP`);
    lines.push(``);
    if (payload.fulfillmentType === 'delivery' && (payload.deliveryDetails?.district || '').includes('أخرى')) {
      lines.push(`💰 *الإجمالي النهائي: ${payload.summary.subtotal} EGP + مصاريف التوصيل عند التأكيد*`);
    } else {
      lines.push(`💰 *الإجمالي النهائي: ${payload.summary.total} EGP*`);
    }

    // Payment Method & Notes
    let payText = 'نقداً (كاش عند الاستلام)';
    if (payload.paymentMethod === 'instapay') payText = 'إنستاباي (InstaPay)';
    else if (payload.paymentMethod === 'vodafone_cash') payText = 'فودافون كاش';
    lines.push(`طريقة السداد: ${payText}`);

    if (payload.notes?.trim() || payload.customer.notes?.trim()) {
      const note = (payload.notes || payload.customer.notes || '').trim();
      lines.push(`ملاحظات إضافية: ${note}`);
    }

    // Courteous closing
    lines.push(``);
    lines.push(`شكرًا لطلبكم من فروتيلا ❤️`);

    return lines.join('\n');
  }
}
