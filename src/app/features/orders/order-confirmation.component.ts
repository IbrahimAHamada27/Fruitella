import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { ConfigService } from '../../core/services/config.service';
import { Order } from '../../core/models/order.model';
import { PriceDisplayComponent } from '../../shared/components/price-display/price-display.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { WhatsAppOrderSubmissionService } from '../../core/services/whatsapp-order-submission.service';
import { WHATSAPP_ORDER_CONFIG, normalizeWhatsAppNumber } from '../../core/config/order.config';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [RouterLink, PriceDisplayComponent, EmptyStateComponent],
  template: `
    @if (order(); as ord) {
      <div class="confirmation-page container section-padding">
        <!-- Success Card -->
        <div class="success-card">
          <div class="success-icon-bubble">
            <i class="fa-solid fa-circle-check"></i>
          </div>

          <div class="demo-tag-pill whatsapp-pill">
            <i class="fa-brands fa-whatsapp"></i> طلب مجهز للإرسال عبر واتساب
          </div>

          <h1 class="success-title">تم تجهيز طلبك بنجاح!</h1>
          <p class="order-num-text">رقم الطلب المرجعي: <strong class="order-code">{{ ord.orderNumber }}</strong></p>
          
          <div class="whatsapp-handoff-notice">
            <i class="fa-solid fa-circle-check"></i>
            <div>
              <strong>متابعة وتأكيد الطلب مع الفرع:</strong>
              <span> اضغط على الزر الأخضر لفتح محادثة واتساب وإرسال تفاصيل الطلب لفريق فروتيلا العبور لتأكيد التجهيز ووقت الاستلام فوراً.</span>
            </div>
          </div>

          <!-- Tracking Link & WhatsApp CTA -->
          <div class="actions-cta-bar">
            <a [href]="whatsAppShareUrl()" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-action btn-lg">
              <i class="fa-brands fa-whatsapp"></i> إرسال الطلب في واتساب الآن
            </a>
            <a [routerLink]="['/track-order', ord.orderId]" class="btn btn-outline btn-lg">
              <i class="fa-solid fa-route"></i> تتبع مسار الطلب
            </a>
            <a routerLink="/menu" class="btn btn-outline btn-lg">
              <i class="fa-solid fa-book-open"></i> العودة للمنيو
            </a>
          </div>
        </div>

        <!-- Order Details Grid -->
        <div class="order-details-grid">
          <!-- Ordered Items List -->
          <div class="details-card">
            <h2 class="card-heading">
              <i class="fa-solid fa-list-check"></i> الأصناف المطلوبة في الطلب
            </h2>

            <div class="items-list">
              @for (item of ord.items; track item.cartItemId) {
                <div class="item-row">
                  <img [src]="item.image" [alt]="item.nameAr" class="item-img" (error)="onImageError($event)" />
                  <div class="item-info">
                    <h3 class="item-title">{{ item.nameAr }} (x{{ item.quantity }})</h3>
                    <span class="item-size">{{ item.selectedSize.nameAr }}</span>
                    @if (item.customization; as c) {
                      <div class="custom-tags-list">
                        <span class="custom-tag"><i class="fa-solid fa-blender"></i> {{ getBlendLabel(c.blendType) }}</span>
                        <span class="custom-tag"><i class="fa-solid fa-jar"></i> {{ getSweetenerLabel(c.sweetenerType) }}</span>
                        @if (c.sweetenerType !== 'none' && c.sugarLevel) {
                          <span class="custom-tag"><i class="fa-solid fa-cubes-stacked"></i> {{ getSugarLabel(c.sugarLevel) }}</span>
                        }
                        <span class="custom-tag"><i class="fa-solid fa-snowflake"></i> {{ getIceLabel(c.iceLevel) }}</span>
                      </div>
                    }
                    @if (item.iceCreamCustomization; as ic) {
                      <div class="custom-tags-list">
                        <span class="custom-tag ice-cream-tag"><i class="fa-solid fa-ice-cream"></i> النكهات: {{ ic.selectedFlavors.join(' • ') }}</span>
                        @if (ic.servingType) {
                          <span class="custom-tag"><i class="fa-solid fa-cookie-bite"></i> {{ ic.servingType }}</span>
                        }
                        @if (ic.sauce) {
                          <span class="custom-tag"><i class="fa-solid fa-wand-magic-sparkles"></i> {{ ic.sauce }}</span>
                        }
                      </div>
                    }
                    @if (item.selectedAddons.length > 0) {
                      <div class="addons-list">
                        @for (ad of item.selectedAddons; track ad.id) {
                          <span class="addon-tag">+ {{ ad.nameAr }}</span>
                        }
                      </div>
                    }
                    @if (item.specialInstructions) {
                      <span class="note-tag">ملاحظات: {{ item.specialInstructions }}</span>
                    }
                  </div>
                  <span class="item-price">{{ item.totalPrice }} ج.م</span>
                </div>
              }
            </div>

            <hr class="card-divider" />

            <div class="price-breakdown">
              <div class="p-row">
                <span>المجموع الفرعي للأصناف:</span>
                <span>{{ ord.summary.subtotal }} ج.م</span>
              </div>
              <div class="p-row">
                <span>رسوم التوصيل:</span>
                <span>{{ ord.summary.deliveryFee === 0 ? '0 ج.م' : ord.summary.deliveryFee + ' ج.م' }}</span>
              </div>
              <div class="p-row total">
                <span>الإجمالي النهائي:</span>
                <app-price-display [amount]="ord.summary.total" size="lg"></app-price-display>
              </div>
            </div>
          </div>

          <!-- Customer & Fulfillment Information -->
          <div class="details-card">
            <h2 class="card-heading">
              <i class="fa-solid fa-truck-ramp-box"></i> تفاصيل الاستلام والعميل
            </h2>

            <div class="info-blocks">
              <div class="info-block">
                <span class="block-label">طريقة الاستلام:</span>
                <span class="block-value highlight-type">
                  @switch (ord.fulfillmentType) {
                    @case ('table') { <i class="fa-solid fa-chair"></i> طلب من الترابيزة داخل الفرع }
                    @case ('car') { <i class="fa-solid fa-car-side"></i> طلب من العربية }
                    @case ('takeaway') { <i class="fa-solid fa-bag-shopping"></i> استلام تيك أواي من الفرع }
                    @case ('delivery') { <i class="fa-solid fa-motorcycle"></i> دليفري لمدينة العبور }
                  }
                </span>
              </div>

              <!-- Table Details -->
              @if (ord.fulfillmentType === 'table' && ord.tableDetails; as t) {
                <div class="info-block specific-block">
                  <span class="block-label">بيانات الترابيزة والصالة:</span>
                  <span class="block-value">ترابيزة رقم <strong>#{{ t.tableNumber }}</strong> — {{ t.areaNameAr }}</span>
                </div>
              }

              <!-- Car Details -->
              @if (ord.fulfillmentType === 'car' && ord.carDetails; as c) {
                <div class="info-block specific-block">
                  <span class="block-label">بيانات استلام السيارة:</span>
                  @if (c.vehiclePlate || c.vehicleModelColor) {
                    <span class="block-value">
                      @if (c.vehiclePlate) { لوحة: <strong>{{ c.vehiclePlate }}</strong> }
                      @if (c.vehiclePlate && c.vehicleModelColor) { — }
                      @if (c.vehicleModelColor) { {{ c.vehicleModelColor }} }
                    </span>
                  } @else {
                    <span class="block-value">طلب تسليم للسيارة (سيتم التواصل عبر الهاتف عند التجهيز)</span>
                  }
                  <span class="block-subtext">مكان التسليم: {{ c.meetingPointAr }}</span>
                  @if (c.parkingSpot) {
                    <span class="block-subtext">الموقف: {{ c.parkingSpot }}</span>
                  }
                </div>
              }

              <!-- Takeaway Details -->
              @if (ord.fulfillmentType === 'takeaway' && ord.takeawayDetails; as tk) {
                <div class="info-block specific-block">
                  <span class="block-label">كاونتر الاستلام:</span>
                  <span class="block-value">{{ tk.pickupCounterAr }}</span>
                </div>
              }

              <!-- Delivery Details -->
              @if (ord.fulfillmentType === 'delivery' && ord.deliveryDetails; as d) {
                <div class="info-block specific-block">
                  <span class="block-label">عنوان التوصيل في نطاق العبور:</span>
                  <span class="block-value"><strong>{{ d.district }}</strong> - {{ d.street }}</span>
                  @if (d.building) {
                    <span class="block-subtext">العمارة / الشقة: {{ d.building }}</span>
                  }
                  @if (d.landmark) {
                    <span class="block-subtext">علامة مميزة: {{ d.landmark }}</span>
                  }
                  @if (d.alternativePhone) {
                    <span class="block-subtext">رقم هاتف بديل: <strong dir="ltr">{{ d.alternativePhone }}</strong></span>
                  }
                </div>
              }

              <div class="info-block">
                <span class="block-label">اسم العميل:</span>
                <span class="block-value">{{ ord.customer.fullName }}</span>
              </div>

              @if (ord.customer.phone && ord.customer.phone !== 'طلب طاولة بدون هاتف') {
                <div class="info-block">
                  <span class="block-label">رقم الهاتف:</span>
                  <span class="block-value" dir="ltr">{{ ord.customer.phone }}</span>
                </div>
              }

              <div class="info-block">
                <span class="block-label">طريقة السداد:</span>
                <span class="block-value">
                  @switch (ord.paymentMethod) {
                    @case ('cash') { نقداً (كاش) }
                    @case ('instapay') { إنستاباي InstaPay (محاكاة) }
                    @case ('vodafone_cash') { فودافون كاش (محاكاة) }
                  }
                </span>
              </div>

              <div class="info-block">
                <span class="block-label">الوقت التقديري للتجهيز:</span>
                <span class="block-value prep-time">4 - 8 دقائق تقريباً</span>
              </div>

              @if (ord.customer.notes) {
                <div class="info-block">
                  <span class="block-label">ملاحظات العميل:</span>
                  <span class="block-value notes-text">{{ ord.customer.notes }}</span>
                </div>
              }
            </div>

            <!-- Branch Info Box -->
            <div class="support-box">
              <p>لأي استفسار بخصوص هذا الطلب التجريبي تواصل مع فرع حياة تاون:</p>
              <div class="support-phones">
                <a [href]="'tel:' + business().contacts.phone1" class="support-link">
                  <i class="fa-solid fa-phone"></i> {{ business().contacts.phone1 }}
                </a>
                <a [href]="'tel:' + business().contacts.phone2" class="support-link">
                  <i class="fa-solid fa-phone"></i> {{ business().contacts.phone2 }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="container section-padding">
        <app-empty-state 
          icon="fa-solid fa-receipt"
          title="لم يتم العثور على هذا الطلب"
          description="تأكد من صحة رقم الطلب في الرابط أو قم بالعودة إلى قائمة المنيو."
          actionUrl="/menu"
          actionLabel="تصفح قائمة المنيو">
        </app-empty-state>
      </div>
    }
  `,
  styles: [`
    .success-card {
      background: linear-gradient(135deg, rgba(247, 250, 247, 0.95) 0%, rgba(234, 244, 235, 0.9) 100%);
      backdrop-filter: blur(16px);
      border: 1.5px solid #bbf7d0;
      border-radius: var(--radius-xl);
      padding: 3rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2.5rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-lg);
    }
    .success-icon-bubble {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: #22c55e;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);
    }
    .demo-tag-pill {
      font-size: 0.8rem;
      font-weight: 700;
      color: #15803d;
      background: rgba(220, 252, 231, 0.9);
      padding: 0.3rem 0.95rem;
      border-radius: var(--radius-full);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .success-title {
      font-size: 2.4rem;
      color: var(--fruitella-green-900);
      margin: 0;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .order-num-text {
      font-size: 1.15rem;
      color: var(--text-secondary);
    }
    .order-code {
      color: var(--fruitella-green-800);
      font-family: var(--font-heading);
      letter-spacing: 0.05em;
      font-variant-numeric: tabular-nums;
    }
    .whatsapp-pill {
      background: #dcfce7;
      color: #15803d;
      border: 1px solid #86efac;
    }
    .whatsapp-handoff-notice {
      background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
      border: 1.5px solid #a7f3d0;
      border-radius: var(--radius-md);
      padding: 0.95rem 1.25rem;
      color: #065f46;
      font-size: 0.9rem;
      max-width: 620px;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      text-align: right;
      line-height: 1.6;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .whatsapp-handoff-notice i {
      font-size: 1.4rem;
      color: #25d366;
      flex-shrink: 0;
    }
    .btn-whatsapp-action {
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
      color: #ffffff;
      border: none;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
      font-weight: 800;
    }
    .btn-whatsapp-action:hover {
      background: linear-gradient(135deg, #22bf5b 0%, #0e7064 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
    }
    .actions-cta-bar {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    /* Details Grid */
    .order-details-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 2rem;
    }
    .details-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 2rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .card-heading {
      font-size: 1.3rem;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border-subtle);
      text-wrap: balance;
    }
    .card-heading i {
      color: var(--fruitella-lime);
    }
    .items-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .item-row {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .item-img {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-sm);
      object-fit: cover;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .item-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .item-size {
      font-size: 0.8rem;
      color: var(--fruitella-green-700);
    }
    .addons-list, .custom-tags-list {
      display: flex;
      gap: 0.35rem;
      flex-wrap: wrap;
    }
    .addon-tag {
      font-size: 0.72rem;
      background: var(--fruitella-lime-bg);
      color: #3b5710;
      padding: 0.1rem 0.4rem;
      border-radius: var(--radius-xs);
    }
    .custom-tag {
      font-size: 0.72rem;
      background: #f1f5f2;
      color: var(--fruitella-green-800);
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
      border: 1px solid var(--border-subtle);
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
    .note-tag {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-style: italic;
    }
    .item-price {
      font-weight: 700;
      color: var(--fruitella-green-900);
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }
    .card-divider {
      border: none;
      border-top: 1px dashed var(--border-subtle);
      margin-block: 1.25rem;
    }
    .price-breakdown {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    .p-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
    }
    .p-row.total {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      padding-top: 0.5rem;
      border-top: 1px dashed var(--border-subtle);
      font-variant-numeric: tabular-nums;
    }
    .info-blocks {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .info-block {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      background: rgba(250, 251, 250, 0.85);
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-subtle);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .specific-block {
      background: rgba(240, 253, 244, 0.85);
      border-color: #bbf7d0;
    }
    .block-label {
      font-size: 0.78rem;
      color: var(--text-muted);
      font-weight: 600;
    }
    .block-value {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
    }
    .highlight-type {
      color: var(--fruitella-green-800);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    .block-subtext {
      font-size: 0.8rem;
      color: var(--text-secondary);
    }
    .prep-time {
      color: var(--fruitella-lime);
      font-size: 1.1rem;
      font-variant-numeric: tabular-nums;
    }
    .notes-text {
      font-style: italic;
      font-size: 0.85rem;
    }
    .support-box {
      margin-top: 1.5rem;
      background: rgba(241, 245, 242, 0.85);
      padding: 1rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .support-phones {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.5rem;
    }
    .support-link {
      color: var(--fruitella-green-800);
      font-weight: 700;
      direction: ltr;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-variant-numeric: tabular-nums;
      transition: all var(--transition-fast) ease;
    }
    .support-link:hover {
      color: var(--fruitella-lime);
      transform: translateY(-1px);
    }

    @media (max-width: 992px) {
      .order-details-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 640px) {
      .success-card {
        padding: 2rem 1.15rem;
      }
      .success-title {
        font-size: 1.6rem;
      }
      .actions-cta-bar {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
      }
      .actions-cta-bar .btn {
        width: 100%;
        justify-content: center;
      }
      .order-details-card {
        padding: 1.25rem 1rem;
      }
      .support-phones {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class OrderConfirmationComponent {
  private orderService = inject(OrderService);
  private configService = inject(ConfigService);
  private whatsappSubmissionService = inject(WhatsAppOrderSubmissionService);
  private route = inject(ActivatedRoute);

  readonly order = signal<Order | undefined>(undefined);
  readonly business = this.configService.business;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('orderId');
      if (orderId) {
        this.order.set(this.orderService.getOrderById(orderId));
      }
    });
  }

  getBlendLabel(b?: string): string {
    if (b === 'half') return 'نص ضربة';
    if (b === 'froth') return 'وش ضربة';
    return 'ضرب كامل';
  }

  getSweetenerLabel(s?: string): string {
    if (s === 'honey') return 'عسل نحل (+10 ج.م)';
    if (s === 'stevia') return 'ستيفيا دايت';
    if (s === 'none') return 'بدون سكر';
    return 'سكر أبيض';
  }

  getSugarLabel(l?: string): string {
    if (l === 'light') return 'سكر خفيف';
    if (l === 'extra') return 'سكر زيادة';
    if (l === 'none') return 'بدون سكر';
    return 'سكر مضبوط';
  }

  getIceLabel(i?: string): string {
    if (i === 'light') return 'ثلج خفيف';
    if (i === 'none') return 'بدون ثلج';
    return 'مثلج طبيعي';
  }

  whatsAppShareUrl(): string {
    const ord = this.order();
    if (!ord) return '';

    const payload = {
      customer: ord.customer,
      fulfillmentType: ord.fulfillmentType,
      paymentMethod: ord.paymentMethod,
      items: ord.items,
      summary: ord.summary,
      tableDetails: ord.tableDetails,
      carDetails: ord.carDetails,
      takeawayDetails: ord.takeawayDetails,
      deliveryDetails: ord.deliveryDetails,
      notes: ord.customer.notes
    };

    const text = this.whatsappSubmissionService.buildWhatsAppMessage(ord, payload);
    const businessWhatsApp = this.business().contacts.whatsapp || WHATSAPP_ORDER_CONFIG.phoneNumber;
    const targetPhone = normalizeWhatsAppNumber(businessWhatsApp);

    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target.dataset['fallbackApplied']) return;
    target.dataset['fallbackApplied'] = 'true';
    target.src = '/images/brand/fruitella-logo.jpg';
    target.classList.add('fruitella-logo-fallback');
  }
}
