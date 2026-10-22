import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { ConfigService } from '../../core/services/config.service';
import { Order, OrderTrackingStep } from '../../core/models/order.model';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [RouterLink, EmptyStateComponent],
  template: `
    @if (order(); as ord) {
      <div class="tracking-page container section-padding">
        <div class="tracking-card">
          <!-- Card Header -->
          <div class="tracking-header">
            <div>
              <div class="top-meta-row">
                <span class="badge badge-brand">محاكاة التتبع المباشر • Live Demo Tracker</span>
                <span class="status-indicator-badge" [class]="'badge-status-' + ord.status">
                  {{ getStatusBadgeLabel(ord.status) }}
                </span>
              </div>
              <h1 class="tracking-title">تتبع حالة طلبك #{{ ord.orderNumber }}</h1>
              <p class="order-type">
                @switch (ord.fulfillmentType) {
                  @case ('table') {
                    <span><i class="fa-solid fa-chair"></i> طلب من الترابيزة #{{ ord.tableDetails?.tableNumber }} ({{ ord.tableDetails?.areaNameAr }})</span>
                  }
                  @case ('car') {
                    <span><i class="fa-solid fa-car-side"></i> طلب من العربية (لوحة: {{ ord.carDetails?.vehiclePlate }})</span>
                  }
                  @case ('takeaway') {
                    <span><i class="fa-solid fa-bag-shopping"></i> استلام تيك أواي من فرع مول حياة تاون</span>
                  }
                  @case ('delivery') {
                    <span><i class="fa-solid fa-motorcycle"></i> دليفري إلى {{ ord.deliveryDetails?.district }}</span>
                  }
                }
              </p>
            </div>

            <!-- Demo Simulation Controls -->
            <div class="simulation-box">
              <span class="sim-label"><i class="fa-solid fa-flask"></i> تجربة المحاكاة:</span>
              <div class="sim-btn-group">
                @if (ord.status !== 'completed' && ord.status !== 'cancelled') {
                  <button type="button" class="btn btn-secondary sim-btn" (click)="advanceStatus()">
                    <i class="fa-solid fa-forward-step"></i> المرحلة التالية
                  </button>
                  <button type="button" class="btn-cancel-demo" (click)="cancelOrder()">
                    <i class="fa-solid fa-xmark"></i> إلغاء
                  </button>
                } @else if (ord.status === 'completed') {
                  <span class="sim-finished-text"><i class="fa-solid fa-circle-check"></i> اكتمل الطلب التجريبي</span>
                } @else {
                  <span class="sim-cancelled-text"><i class="fa-solid fa-circle-xmark"></i> تم الإلغاء</span>
                }
              </div>
            </div>
          </div>

          <!-- Progress Stepper -->
          <div class="progress-timeline">
            @for (step of trackingSteps(); track step.status; let idx = $index) {
              <div 
                class="timeline-step" 
                [class.completed]="step.isCompleted" 
                [class.current]="step.isCurrent">
                
                <div class="step-indicator">
                  <div class="step-circle">
                    @if (step.isCompleted && !step.isCurrent) {
                      <i class="fa-solid fa-check"></i>
                    } @else if (step.isCurrent) {
                      <i class="fa-solid fa-spinner fa-spin"></i>
                    } @else {
                      <span>{{ idx + 1 }}</span>
                    }
                  </div>
                  @if (idx < trackingSteps().length - 1) {
                    <div class="step-line" [class.filled]="step.isCompleted"></div>
                  }
                </div>

                <div class="step-content">
                  <h3 class="step-title">{{ step.labelAr }}</h3>
                  <p class="step-desc">{{ step.descriptionAr }}</p>
                  @if (step.isCurrent) {
                    <span class="current-badge">الوضع الحالي الآن</span>
                  }
                </div>
              </div>
            }
          </div>

          <!-- Simulation Info Disclaimer -->
          <div class="sim-disclaimer-note">
            <i class="fa-solid fa-circle-info"></i>
            <p>
              هذا الشريط يعرض تسلسل محاكاة حالة الطلب داخل الواجهة الأمامية فقط. استخدم أزرار المحاكاة أعلاه لرؤية كيفية تغير الحالات والرسائل التوضيحية لكل طريقة استلام.
            </p>
          </div>

          <!-- Order Summary Details Card -->
          <div class="order-info-footer">
            <div class="footer-item">
              <span class="label">اسم العميل:</span>
              <span class="val">{{ ord.customer.fullName }}</span>
            </div>
            @if (ord.customer.phone && ord.customer.phone !== 'طلب طاولة بدون هاتف') {
              <div class="footer-item">
                <span class="label">رقم الهاتف:</span>
                <span class="val" dir="ltr">{{ ord.customer.phone }}</span>
              </div>
            }
            <div class="footer-item">
              <span class="label">طريقة السداد:</span>
              <span class="val">
                @switch (ord.paymentMethod) {
                  @case ('cash') { نقداً (كاش) }
                  @case ('instapay') { إنستاباي InstaPay }
                  @case ('vodafone_cash') { فودافون كاش }
                }
              </span>
            </div>
            <div class="footer-item">
              <span class="label">الإجمالي النهائي:</span>
              <span class="val price">{{ ord.summary.total }} ج.م</span>
            </div>
          </div>

          <!-- Actions Bar -->
          <div class="tracking-actions">
            <a [routerLink]="['/order-confirmation', ord.orderId]" class="btn btn-outline">
              <i class="fa-solid fa-file-invoice"></i> عرض الفاتورة وملخص الطلب
            </a>
            <a routerLink="/menu" class="btn btn-primary">
              <i class="fa-solid fa-book-open"></i> استعراض المنيو
            </a>
          </div>
        </div>
      </div>
    } @else {
      <div class="container section-padding">
        <app-empty-state 
          icon="fa-solid fa-route"
          title="عفواً، لم يتم العثور على الطلب"
          description="رقم الطلب المطلوب غير موجود في سجلات المحاكاة على هذا المتصفح."
          actionUrl="/menu"
          actionLabel="العودة للمنيو">
        </app-empty-state>
      </div>
    }
  `,
  styles: [`
    .tracking-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 2.5rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-lg);
    }
    .tracking-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1.5rem;
      margin-bottom: 2.5rem;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .top-meta-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .status-indicator-badge {
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-full);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .badge-status-pending { background: #fef3c7; color: #b45309; }
    .badge-status-confirmed { background: #e0f2fe; color: #0369a1; }
    .badge-status-preparing { background: #fef08a; color: #854d0e; }
    .badge-status-ready { background: #dcfce7; color: #15803d; }
    .badge-status-completed { background: #bbf7d0; color: #14532d; }
    .badge-status-cancelled { background: #fee2e2; color: #991b1b; }

    .tracking-title {
      font-size: 2rem;
      color: var(--fruitella-green-900);
      margin-block: 0.35rem 0.2rem;
      letter-spacing: -0.02em;
      text-wrap: balance;
      font-variant-numeric: tabular-nums;
    }
    .order-type {
      font-size: 0.95rem;
      color: var(--fruitella-green-700);
      font-weight: 600;
    }
    .simulation-box {
      background: rgba(247, 250, 247, 0.85);
      border: 1.5px dashed var(--fruitella-lime);
      padding: 0.75rem 1.25rem;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .sim-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .sim-btn-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .sim-btn {
      padding: 0.45rem 0.95rem;
      font-size: 0.82rem;
    }
    .btn-cancel-demo {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fecaca;
      border-radius: var(--radius-md);
      padding: 0.45rem 0.75rem;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: all var(--transition-fast) ease;
    }
    .btn-cancel-demo:hover {
      background: #ef4444;
      color: #ffffff;
    }
    .btn-cancel-demo:active {
      transform: scale(0.96);
    }
    .sim-finished-text {
      color: #15803d;
      font-weight: 700;
      font-size: 0.85rem;
    }
    .sim-cancelled-text {
      color: #dc2626;
      font-weight: 700;
      font-size: 0.85rem;
    }

    /* Progress Timeline */
    .progress-timeline {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-block: 2rem 2.5rem;
      gap: 1rem;
    }
    .timeline-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex: 1;
      position: relative;
    }
    .step-indicator {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
      margin-bottom: 1rem;
    }
    .step-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #f1f5f2;
      color: var(--text-muted);
      border: 2px solid var(--border-strong);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.1rem;
      margin-inline: auto;
      z-index: 2;
      font-variant-numeric: tabular-nums;
      box-shadow: var(--shadow-antigravity-xs);
      transition: all var(--transition-normal);
    }
    .timeline-step.completed .step-circle {
      background: var(--fruitella-lime);
      color: #ffffff;
      border-color: var(--fruitella-lime);
      box-shadow: var(--shadow-antigravity-sm);
    }
    .timeline-step.current .step-circle {
      background: var(--fruitella-green-700);
      color: #ffffff;
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 6px var(--fruitella-lime-bg), var(--shadow-antigravity-sm);
    }
    .step-line {
      position: absolute;
      top: 50%;
      right: 50%;
      left: -50%;
      height: 3px;
      background: var(--border-strong);
      z-index: 1;
      transform: translateY(-50%);
    }
    .step-line.filled {
      background: var(--fruitella-lime);
    }
    .step-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      max-width: 200px;
    }
    .step-title {
      font-size: 1rem;
      color: var(--fruitella-green-900);
      text-wrap: balance;
    }
    .step-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.4;
      text-wrap: pretty;
    }
    .current-badge {
      display: inline-block;
      margin-top: 0.4rem;
      background: var(--fruitella-lime-bg);
      color: #3b5710;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
      width: fit-content;
      margin-inline: auto;
      box-shadow: var(--shadow-antigravity-xs);
    }

    .sim-disclaimer-note {
      background: rgba(248, 250, 252, 0.85);
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-md);
      padding: 0.85rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.82rem;
      color: var(--text-secondary);
      margin-bottom: 2rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
      text-wrap: pretty;
    }
    .sim-disclaimer-note i {
      color: #64748b;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    /* Footer Info */
    .order-info-footer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      background: rgba(250, 251, 250, 0.85);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1.5rem;
      margin-bottom: 2rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .footer-item {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .label {
      font-size: 0.78rem;
      color: var(--text-muted);
    }
    .val {
      font-weight: 700;
      color: var(--fruitella-green-900);
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }
    .val.price {
      color: var(--fruitella-green-700);
      font-size: 1.1rem;
      font-variant-numeric: tabular-nums;
    }

    .tracking-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      .progress-timeline {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
      }
      .timeline-step {
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        text-align: right;
      }
      .step-indicator {
        width: auto;
        margin: 0;
      }
      .step-line {
        display: none;
      }
      .step-content {
        max-width: 100%;
      }
      .current-badge {
        margin-inline: 0;
      }
    }
    @media (max-width: 640px) {
      .tracking-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .tracking-title {
        font-size: 1.55rem;
      }
      .simulation-box {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
      }
      .sim-btn-group {
        width: 100%;
      }
      .tracking-actions {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
      }
      .tracking-actions .btn {
        width: 100%;
        justify-content: center;
      }
      .order-info-footer {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
    }
  `]
})
export class TrackOrderComponent {
  private orderService = inject(OrderService);
  private configService = inject(ConfigService);
  private route = inject(ActivatedRoute);

  readonly order = signal<Order | undefined>(undefined);
  readonly business = this.configService.business;

  constructor() {
    this.route.paramMap.subscribe(params => {
      const orderId = params.get('orderId');
      if (orderId) {
        this.loadOrder(orderId);
      }
    });
  }

  loadOrder(orderId: string): void {
    this.order.set(this.orderService.getOrderById(orderId));
  }

  readonly trackingSteps = computed<OrderTrackingStep[]>(() => {
    const ord = this.order();
    if (!ord) return [];
    return this.orderService.getTrackingSteps(ord);
  });

  getStatusBadgeLabel(status: string): string {
    switch (status) {
      case 'pending': return 'قيد المراجعة التجريبية';
      case 'confirmed': return 'تم التأكيد';
      case 'preparing': return 'جاري التحضير';
      case 'ready': return 'جاهز للتسليم';
      case 'completed': return 'مكتمل';
      case 'cancelled': return 'ملغي';
      default: return status;
    }
  }

  advanceStatus(): void {
    const ord = this.order();
    if (ord) {
      this.orderService.advanceDemoStatus(ord.orderId);
      this.loadOrder(ord.orderId);
    }
  }

  cancelOrder(): void {
    const ord = this.order();
    if (ord) {
      this.orderService.cancelDemoOrder(ord.orderId);
      this.loadOrder(ord.orderId);
    }
  }
}
