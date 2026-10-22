import { Component, inject, viewChild } from '@angular/core';
import { FulfillmentService } from '../../../core/services/fulfillment.service';
import { ToastService } from '../../../core/services/toast.service';
import { FulfillmentType } from '../../../core/models/fulfillment.model';
import { TableSelectorModalComponent } from '../table-selector-modal/table-selector-modal.component';
import { TableQrHelperModalComponent } from '../table-qr-helper-modal/table-qr-helper-modal.component';

@Component({
  selector: 'app-fulfillment-banner',
  standalone: true,
  imports: [TableSelectorModalComponent, TableQrHelperModalComponent],
  template: `
    <section class="fulfillment-strip" [class]="'mode-' + fulfillmentService.activeType()" aria-label="خيارات وطريقة استلام الطلب">
      <div class="container strip-inner">
        <!-- 1. The 4 Mode Switcher Tabs (صالة، سيارة، تيك أواي، دليفري) -->
        <div class="mode-tabs-group" role="tablist" aria-label="تحديد نوع الطلب">
          <!-- Mode 1: Table -->
          <button 
            type="button" 
            role="tab"
            class="mode-tab-btn" 
            [class.active]="fulfillmentService.activeType() === 'table'"
            [attr.aria-selected]="fulfillmentService.activeType() === 'table'"
            (click)="selectMode('table')">
            <i class="fa-solid fa-chair tab-icon"></i>
            <span class="tab-label">طلب صالة</span>
            @if (fulfillmentService.activeType() === 'table' && fulfillmentService.tableDetails()) {
              <span class="table-mini-tag">#{{ fulfillmentService.tableDetails()?.tableNumber }}</span>
            }
          </button>

          <!-- Mode 2: Car -->
          <button 
            type="button" 
            role="tab"
            class="mode-tab-btn" 
            [class.active]="fulfillmentService.activeType() === 'car'"
            [attr.aria-selected]="fulfillmentService.activeType() === 'car'"
            (click)="selectMode('car')">
            <i class="fa-solid fa-car-side tab-icon"></i>
            <span class="tab-label">خدمة السيارة</span>
          </button>

          <!-- Mode 3: Takeaway -->
          <button 
            type="button" 
            role="tab"
            class="mode-tab-btn" 
            [class.active]="fulfillmentService.activeType() === 'takeaway'"
            [attr.aria-selected]="fulfillmentService.activeType() === 'takeaway'"
            (click)="selectMode('takeaway')">
            <i class="fa-solid fa-bag-shopping tab-icon"></i>
            <span class="tab-label">تيك أواي</span>
          </button>

          <!-- Mode 4: Delivery -->
          <button 
            type="button" 
            role="tab"
            class="mode-tab-btn" 
            [class.active]="fulfillmentService.activeType() === 'delivery'"
            [attr.aria-selected]="fulfillmentService.activeType() === 'delivery'"
            (click)="selectMode('delivery')">
            <i class="fa-solid fa-motorcycle tab-icon"></i>
            <span class="tab-label">دليفري العبور</span>
          </button>
        </div>

        <!-- 2. Active Mode Details & Quick Action -->
        <div class="mode-status-bar">
          @switch (fulfillmentService.activeType()) {
            @case ('table') {
              <div class="status-info-wrap">
                <i class="fa-solid fa-chair status-indicator-icon"></i>
                @if (fulfillmentService.tableDetails(); as t) {
                  <span class="status-text">
                    طلب صالة: <strong>ترابيزة #{{ t.tableNumber }}</strong> ({{ t.areaNameAr }})
                  </span>
                } @else {
                  <span class="status-text">
                    طلب صالة بالفرع — <em>لم يتم تحديد الترابيزة بعد</em>
                  </span>
                }
              </div>

              <div class="status-actions-wrap">
                <button type="button" class="btn-status-pill" (click)="openTableModal()">
                  <i class="fa-solid fa-arrows-rotate"></i>
                  <span>{{ fulfillmentService.tableDetails() ? 'تغيير الترابيزة' : 'حدد رقم الترابيزة' }}</span>
                </button>
                <button type="button" class="btn-status-pill qr-pill" (click)="openQrModal()" title="تجربة مسح QR الطاولات">
                  <i class="fa-solid fa-qrcode"></i>
                  <span class="qr-text">مسح QR</span>
                </button>
              </div>
            }

            @case ('car') {
              <div class="status-info-wrap">
                <i class="fa-solid fa-car-side status-indicator-icon"></i>
                <span class="status-text">
                  استلام سيارة أمام <strong>مدخل 2 بمول حياة تاون</strong> (كتابة بيانات السيارة عند التأكيد)
                </span>
              </div>
              <div class="status-actions-wrap">
                <span class="time-est-badge">
                  <i class="fa-regular fa-clock"></i> جاهز خلال 10-12 دقيقة
                </span>
              </div>
            }

            @case ('takeaway') {
              <div class="status-info-wrap">
                <i class="fa-solid fa-bag-shopping status-indicator-icon"></i>
                <span class="status-text">
                  استلام من <strong>كاونتر الاستلام السريع</strong> بفرع مول حياة تاون
                </span>
              </div>
              <div class="status-actions-wrap">
                <span class="time-est-badge">
                  <i class="fa-regular fa-clock"></i> جاهز خلال 12-15 دقيقة
                </span>
              </div>
            }

            @case ('delivery') {
              <div class="status-info-wrap">
                <i class="fa-solid fa-motorcycle status-indicator-icon"></i>
                <span class="status-text">
                  توصيل مثلج ومغلف لكافة <strong>أحياء مدينة العبور</strong> (مجاناً للطلبات فوق 250 ج.م)
                </span>
              </div>
              <div class="status-actions-wrap">
                <span class="time-est-badge delivery-tag">
                  <i class="fa-solid fa-shield-halved"></i> توصيل سريع وآمن
                </span>
              </div>
            }
          }
        </div>
      </div>
    </section>

    <!-- Modals -->
    <app-table-selector-modal #tableModal></app-table-selector-modal>
    <app-table-qr-helper-modal #qrModal></app-table-qr-helper-modal>
  `,
  styles: [`
    .fulfillment-strip {
      background: #ffffff;
      border-bottom: 1.5px solid var(--border-subtle);
      padding-block: 0.6rem 0.55rem;
      transition: all var(--transition-fast) ease;
      box-shadow: 0 2px 8px rgba(13, 41, 20, 0.04);
      position: relative;
      z-index: 995;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    .strip-inner {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    /* ========================================================
       1. The 4 Mode Switcher Tabs
       ======================================================== */
    .mode-tabs-group {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
      background: #f4f7f4;
      padding: 0.25rem;
      border-radius: var(--radius-lg, 14px);
      border: 1px solid rgba(27, 94, 32, 0.1);
    }

    .mode-tab-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      padding: 0.55rem 0.75rem;
      border-radius: var(--radius-md, 10px);
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-secondary);
      font-size: 0.85rem;
      font-weight: 700;
      cursor: pointer;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
      -webkit-user-select: none;
      white-space: nowrap;
    }

    .mode-tab-btn:hover {
      background: rgba(255, 255, 255, 0.8);
      color: var(--fruitella-green-900);
      transform: translateY(-1px);
    }

    .mode-tab-btn:active {
      transform: scale(0.97) !important;
    }

    .tab-icon {
      font-size: 0.95rem;
      transition: transform var(--transition-fast);
    }

    .mode-tab-btn:hover .tab-icon {
      transform: scale(1.1);
    }

    .table-mini-tag {
      background: rgba(255, 255, 255, 0.3);
      padding: 0.1rem 0.35rem;
      border-radius: var(--radius-full);
      font-size: 0.7rem;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }

    /* Mode Active States */
    .mode-tab-btn.active {
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(13, 41, 20, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
      border-color: rgba(27, 94, 32, 0.15);
    }

    /* Mode 1: Table Theme */
    .mode-table .mode-tab-btn.active {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      color: #ffffff;
      border-color: var(--fruitella-green-800);
      box-shadow: 0 3px 10px rgba(27, 94, 32, 0.25);
    }

    /* Mode 2: Car Theme */
    .mode-car .mode-tab-btn.active {
      background: linear-gradient(135deg, #1d4ed8, #1e40af);
      color: #ffffff;
      border-color: #1e40af;
      box-shadow: 0 3px 10px rgba(29, 78, 216, 0.25);
    }

    /* Mode 3: Takeaway Theme */
    .mode-takeaway .mode-tab-btn.active {
      background: linear-gradient(135deg, #d97706, #b45309);
      color: #ffffff;
      border-color: #b45309;
      box-shadow: 0 3px 10px rgba(217, 119, 6, 0.25);
    }

    /* Mode 4: Delivery Theme */
    .mode-delivery .mode-tab-btn.active {
      background: linear-gradient(135deg, #be185d, #9d174d);
      color: #ffffff;
      border-color: #9d174d;
      box-shadow: 0 3px 10px rgba(190, 24, 93, 0.25);
    }

    /* ========================================================
       2. Contextual Sub-Status Bar
       ======================================================== */
    .mode-status-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.4rem 0.65rem;
      border-radius: var(--radius-md, 10px);
      font-size: 0.82rem;
      transition: all var(--transition-fast);
    }

    .mode-table .mode-status-bar {
      background: rgba(240, 253, 244, 0.85);
      border: 1px solid #bbf7d0;
      color: #14532d;
    }

    .mode-car .mode-status-bar {
      background: rgba(239, 246, 255, 0.85);
      border: 1px solid #bfdbfe;
      color: #1e3a8a;
    }

    .mode-takeaway .mode-status-bar {
      background: rgba(255, 251, 235, 0.85);
      border: 1px solid #fde68a;
      color: #78350f;
    }

    .mode-delivery .mode-status-bar {
      background: rgba(253, 242, 248, 0.85);
      border: 1px solid #fbcfe8;
      color: #831843;
    }

    .status-info-wrap {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      flex: 1;
      min-width: 0;
    }

    .status-indicator-icon {
      font-size: 0.95rem;
      flex-shrink: 0;
    }

    .status-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .status-text strong {
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }

    .status-actions-wrap {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      flex-shrink: 0;
    }

    .btn-status-pill {
      background: #ffffff;
      border: 1px solid currentColor;
      color: inherit;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-full);
      font-size: 0.76rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all var(--transition-fast) ease;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      white-space: nowrap;
    }

    .btn-status-pill:hover {
      background: currentColor;
      color: #ffffff;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    }

    .btn-status-pill:active {
      transform: scale(0.95) !important;
    }

    .qr-pill {
      background: rgba(255, 255, 255, 0.8);
      border-style: dashed;
    }

    .time-est-badge {
      font-size: 0.76rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(255, 255, 255, 0.75);
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(0, 0, 0, 0.06);
      white-space: nowrap;
    }

    /* ========================================================
       Responsive Adjustments: Phone (<= 640px)
       ======================================================== */
    @media (max-width: 640px) {
      .fulfillment-strip {
        padding-block: 0.45rem 0.4rem;
      }
      .strip-inner {
        gap: 0.35rem;
      }
      .mode-tabs-group {
        gap: 0.25rem;
        padding: 0.2rem;
      }
      .mode-tab-btn {
        padding: 0.4rem 0.15rem;
        font-size: 0.7rem;
        gap: 0.2rem;
        flex-direction: column;
      }
      .tab-icon {
        font-size: 0.85rem;
      }
      .table-mini-tag {
        font-size: 0.62rem;
        padding: 0.05rem 0.25rem;
      }
      .mode-status-bar {
        padding: 0.35rem 0.5rem;
        font-size: 0.72rem;
        flex-direction: row;
        align-items: center;
      }
      .status-text {
        font-size: 0.72rem;
      }
      .btn-status-pill {
        padding: 0.2rem 0.5rem;
        font-size: 0.7rem;
      }
      .time-est-badge {
        font-size: 0.68rem;
        padding: 0.15rem 0.45rem;
      }
    }

    @media (max-width: 380px) {
      .mode-tab-btn {
        font-size: 0.65rem;
      }
      .qr-text {
        display: none;
      }
    }
  `]
})
export class FulfillmentBannerComponent {
  readonly fulfillmentService = inject(FulfillmentService);
  private toastService = inject(ToastService);
  private tableModal = viewChild(TableSelectorModalComponent);
  private qrModal = viewChild(TableQrHelperModalComponent);

  selectMode(type: FulfillmentType): void {
    const isCurrent = this.fulfillmentService.activeType() === type;
    this.fulfillmentService.setFulfillmentType(type);

    if (type === 'table') {
      if (!this.fulfillmentService.tableDetails() || isCurrent) {
        this.openTableModal();
      } else {
        const t = this.fulfillmentService.tableDetails();
        this.toastService.show(`تم اختيار طلب الصالة (ترابيزة #${t?.tableNumber}) 🍽️`, 'success');
      }
    } else if (type === 'car') {
      this.toastService.show('تم تفعيل خدمة استلام السيارة أمام مدخل 2 🚗', 'info');
    } else if (type === 'takeaway') {
      this.toastService.show('تم تفعيل الاستلام تيك أواي من كاونتر الفرع 🛍️', 'info');
    } else if (type === 'delivery') {
      this.toastService.show('تم تفعيل خدمة توصيل الطلبات لمدينة العبور 🛵', 'info');
    }
  }

  openTableModal(): void {
    this.tableModal()?.open();
  }

  openQrModal(): void {
    this.qrModal()?.open();
  }
}
