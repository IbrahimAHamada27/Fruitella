import { Component, computed, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { FulfillmentService } from '../../core/services/fulfillment.service';
import { CartItem } from '../../core/models/cart.model';
import { PriceDisplayComponent } from '../../shared/components/price-display/price-display.component';
import { QuantitySelectorComponent } from '../../shared/components/quantity-selector/quantity-selector.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { ClearCartModalComponent } from '../../shared/components/clear-cart-modal/clear-cart-modal.component';
import { EditCartItemModalComponent } from '../../shared/components/edit-cart-item-modal/edit-cart-item-modal.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink, 
    FormsModule, 
    PriceDisplayComponent, 
    QuantitySelectorComponent, 
    EmptyStateComponent,
    ClearCartModalComponent,
    EditCartItemModalComponent
  ],
  template: `
    <div class="cart-page container section-padding">
      <div class="cart-header">
        <h1 class="cart-title">سلة المشتريات</h1>
        @if (items().length > 0) {
          <span class="cart-count-badge">({{ itemCount() }} أصناف)</span>
        }
      </div>

      @if (items().length > 0) {
        <div class="cart-grid">
          <!-- Items List Column -->
          <div class="cart-items-column">
            <div class="items-card">
              @for (item of items(); track item.cartItemId) {
                <div class="cart-item-row">
                  <!-- Thumbnail -->
                  <img [src]="item.image" [alt]="item.nameAr" class="item-thumb" />

                  <!-- Details -->
                  <div class="item-details">
                    <div class="item-title-row">
                      <h3 class="item-name">
                        <a [routerLink]="['/product', item.productSlug]">{{ item.nameAr }}</a>
                      </h3>
                      <div class="item-top-actions">
                        <button 
                          type="button" 
                          class="edit-action-btn" 
                          (click)="openEditModal(item)"
                          title="تعديل الحجم والإضافات">
                          <i class="fa-solid fa-pen-to-square"></i>
                          <span>تعديل</span>
                        </button>
                        <button 
                          type="button" 
                          class="delete-btn" 
                          (click)="removeItem(item.cartItemId)"
                          title="حذف من السلة"
                          aria-label="حذف">
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>

                    <div class="item-meta">
                      <span class="meta-pill"><i class="fa-solid fa-glass-water"></i> {{ item.selectedSize.nameAr }}</span>
                      @if (item.customization; as c) {
                        <span class="meta-pill custom-blend-pill"><i class="fa-solid fa-blender"></i> {{ getBlendLabel(c.blendType) }}</span>
                        <span class="meta-pill custom-sweet-pill"><i class="fa-solid fa-jar"></i> {{ getSweetenerLabel(c.sweetenerType) }}</span>
                        @if (c.sweetenerType !== 'none' && c.sugarLevel) {
                          <span class="meta-pill"><i class="fa-solid fa-cubes-stacked"></i> {{ getSugarLabel(c.sugarLevel) }}</span>
                        }
                        <span class="meta-pill"><i class="fa-solid fa-snowflake"></i> {{ getIceLabel(c.iceLevel) }}</span>
                      }
                      @for (addon of item.selectedAddons; track addon.id) {
                        <span class="meta-pill addon-pill">+ {{ addon.nameAr }}</span>
                      }
                    </div>

                    @if (item.specialInstructions) {
                      <p class="special-note">
                        <i class="fa-solid fa-pen-nib"></i> ملاحظات: {{ item.specialInstructions }}
                      </p>
                    }

                    <div class="item-bottom-row">
                      <app-quantity-selector 
                        [quantity]="item.quantity" 
                        size="sm"
                        (quantityChange)="updateQuantity(item.cartItemId, $event)">
                      </app-quantity-selector>

                      <div class="item-total">
                        <app-price-display [amount]="item.totalPrice" size="md"></app-price-display>
                      </div>
                    </div>
                  </div>
                </div>
              }

              <div class="cart-actions-row">
                <button type="button" class="clear-cart-btn" (click)="confirmClearCart()">
                  <i class="fa-solid fa-trash"></i> إفراغ السلة بالكامل
                </button>
                <a routerLink="/menu" class="continue-shopping-link">
                  <i class="fa-solid fa-plus"></i> إضافة أصناف أخرى من المنيو
                </a>
              </div>
            </div>
          </div>

          <!-- Order Summary Column -->
          <div class="cart-summary-column">
            <div class="summary-card">
              <h2 class="summary-title">ملخص الحساب</h2>

              <!-- Current Fulfillment Indicator -->
              <div class="fulfillment-indicator-box">
                <div class="indicator-header">
                  <span class="indicator-label">طريقة الاستلام المحددة:</span>
                  <a routerLink="/checkout" class="change-method-link">تغيير</a>
                </div>
                <div class="indicator-pill" [class]="'pill-' + fulfillmentService.activeType()">
                  @switch (fulfillmentService.activeType()) {
                    @case ('table') {
                      <i class="fa-solid fa-chair"></i>
                      @if (fulfillmentService.tableDetails(); as t) {
                        <span>طلب من ترابيزة <strong>#{{ t.tableNumber }}</strong> ({{ t.areaNameAr }})</span>
                      } @else {
                        <span>طلب ترابيزة داخل الفرع</span>
                      }
                    }
                    @case ('car') {
                      <i class="fa-solid fa-car-side"></i>
                      <span>طلب من العربية (استلام أمام المدخل)</span>
                    }
                    @case ('takeaway') {
                      <i class="fa-solid fa-bag-shopping"></i>
                      <span>استلام تيك أواي من الفرع</span>
                    }
                    @case ('delivery') {
                      <i class="fa-solid fa-motorcycle"></i>
                      <span>توصيل دليفري لمدينة العبور</span>
                    }
                  }
                </div>
              </div>

              <!-- Delivery Minimum Order Warning if applicable -->
              @if (isDeliveryBelowMinimum()) {
                <div class="delivery-min-alert">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <div>
                    <strong>الحد الأدنى للتوصيل 50 ج.م:</strong>
                    <span> متبقي {{ minOrderShortfall() }} ج.م لتتمكن من إتمام طلب الدليفري.</span>
                  </div>
                </div>
              }

              <!-- Calculation Details -->
              <div class="calculation-rows">
                <div class="calc-row">
                  <span>إجمالي الأصناف:</span>
                  <span class="calc-val">{{ subtotal() }} ج.م</span>
                </div>

                <div class="calc-row">
                  <span>رسوم التوصيل:</span>
                  @if (fulfillmentService.activeType() === 'delivery') {
                    @if (deliveryFee() === 0) {
                      <span class="free-delivery-badge">مجاناً (عرض طلب أكبر من 250 ج.م)</span>
                    } @else {
                      <span class="calc-val">{{ deliveryFee() }} ج.م</span>
                    }
                  } @else {
                    <span class="zero-fee-badge">0 ج.م (طلب داخلي / استلام)</span>
                  }
                </div>

                <hr class="summary-divider" />

                <div class="calc-row total-row">
                  <span>المبلغ الإجمالي:</span>
                  <div class="final-total">
                    <app-price-display [amount]="total()" size="lg"></app-price-display>
                  </div>
                </div>
              </div>

              <!-- Checkout CTA -->
              @if (isDeliveryBelowMinimum()) {
                <button type="button" disabled class="btn btn-primary checkout-btn disabled-btn">
                  <i class="fa-solid fa-ban"></i> الحد الأدنى للدليفري 50 ج.م
                </button>
              } @else {
                <a routerLink="/checkout" class="btn btn-primary checkout-btn">
                  <i class="fa-solid fa-clipboard-check"></i> متابعة لإتمام الطلب
                </a>
              }

              <div class="guarantee-box">
                <i class="fa-solid fa-shield-check"></i>
                <p>طلب تجريبي لفرع مول حياة تاون بالعبور | لا يتطلب دفعاً إلكترونياً فعلياً</p>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <app-empty-state 
          icon="fa-solid fa-basket-shopping"
          title="سلة مشترياتك فارغة حالياً"
          description="لم تقم بإضافة أي عصائر أو حلويات بعد. تصفح قائمتنا الغنية واطلب الآن!"
          actionUrl="/menu"
          actionLabel="تصفح قائمة المنيو واطلب">
        </app-empty-state>
      }
    </div>

    <!-- Modals -->
    <app-clear-cart-modal #clearCartModal (confirmed)="onClearCartConfirmed()"></app-clear-cart-modal>
    <app-edit-cart-item-modal #editCartModal></app-edit-cart-item-modal>
  `,
  styles: [`
    .cart-header {
      display: flex;
      align-items: baseline;
      gap: 0.75rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1rem;
    }
    .cart-title {
      font-size: 2.2rem;
      color: var(--fruitella-green-900);
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .cart-count-badge {
      font-size: 1.1rem;
      color: var(--fruitella-green-700);
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    .cart-grid {
      display: grid;
      grid-template-columns: 1.35fr 0.85fr;
      gap: 2.5rem;
      align-items: flex-start;
    }

    /* Items Column */
    .items-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 1.75rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .cart-item-row {
      display: flex;
      gap: 1.25rem;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-subtle);
    }
    .cart-item-row:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .item-thumb {
      width: 100px;
      height: 100px;
      border-radius: var(--radius-md);
      object-fit: cover;
      flex-shrink: 0;
      border: 1px solid var(--border-subtle);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .item-details {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      flex: 1;
    }
    .item-title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }
    .item-name {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .item-name a:hover {
      color: var(--fruitella-lime);
    }
    .item-top-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .edit-action-btn {
      color: var(--fruitella-green-800);
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.25rem 0.6rem;
      background: #f1f5f2;
      border-radius: var(--radius-full);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      border: 1px solid var(--border-subtle);
    }
    .edit-action-btn:hover {
      background: var(--fruitella-lime-bg);
      color: #3b5710;
      border-color: var(--fruitella-lime);
      transform: translateY(-1px);
    }
    .edit-action-btn:active {
      transform: scale(0.95);
    }
    .delete-btn {
      color: #94a3b8;
      font-size: 0.95rem;
      transition: all var(--transition-fast) ease;
      padding: 0.25rem;
      background: none;
      border: none;
      cursor: pointer;
    }
    .delete-btn:hover {
      color: var(--fruitella-berry);
      transform: scale(1.1);
    }
    .delete-btn:active {
      transform: scale(0.9);
    }
    .item-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .meta-pill {
      background: #f1f5f2;
      color: var(--fruitella-green-800);
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .addon-pill {
      background: var(--fruitella-lime-bg);
      color: #3b5710;
    }
    .custom-blend-pill {
      background: #eef7f0;
      color: #1b5e20;
      border: 1px solid #c8e6c9;
    }
    .custom-sweet-pill {
      background: #fff8e1;
      color: #8c6403;
      border: 1px solid #ffe082;
    }
    .special-note {
      font-size: 0.82rem;
      color: var(--text-muted);
      font-style: italic;
    }
    .item-bottom-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
    }
    .cart-actions-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      border-top: 1px dashed var(--border-subtle);
      margin-top: 1.5rem;
    }
    .clear-cart-btn {
      font-size: 0.85rem;
      color: var(--fruitella-berry);
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem 0.6rem;
      border-radius: var(--radius-md);
      transition: all var(--transition-fast) ease;
    }
    .clear-cart-btn:hover {
      background: #fee2e2;
    }
    .clear-cart-btn:active {
      transform: scale(0.96);
    }
    .continue-shopping-link {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: all var(--transition-fast) ease;
    }
    .continue-shopping-link:hover {
      color: var(--fruitella-lime);
      transform: translateX(-2px);
    }

    /* Summary Column */
    .summary-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 1.75rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .summary-title {
      font-size: 1.4rem;
      color: var(--fruitella-green-900);
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-subtle);
      text-wrap: balance;
    }

    /* Fulfillment Indicator in Cart */
    .fulfillment-indicator-box {
      background: rgba(250, 251, 250, 0.85);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 0.85rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .indicator-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.78rem;
    }
    .indicator-label {
      color: var(--text-muted);
      font-weight: 600;
    }
    .change-method-link {
      color: var(--fruitella-green-700);
      font-weight: 700;
      text-decoration: underline;
    }
    .indicator-pill {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 700;
      padding: 0.45rem 0.75rem;
      border-radius: var(--radius-md);
    }
    .pill-table {
      background: #f0fdf4;
      color: #14532d;
    }
    .pill-car {
      background: #eff6ff;
      color: #1e3a8a;
    }
    .pill-takeaway {
      background: #fffbeb;
      color: #78350f;
    }
    .pill-delivery {
      background: #fdf2f8;
      color: #831843;
    }

    .delivery-min-alert {
      background: rgba(254, 242, 242, 0.85);
      border: 1.5px solid #fecaca;
      border-radius: var(--radius-md);
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.82rem;
      color: #991b1b;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .delivery-min-alert i {
      font-size: 1.1rem;
      color: #dc2626;
      flex-shrink: 0;
    }

    .calculation-rows {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .calc-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.95rem;
      color: var(--text-secondary);
    }
    .calc-val {
      font-weight: 700;
      color: var(--text-primary);
      font-variant-numeric: tabular-nums;
    }
    .free-delivery-badge {
      font-size: 0.78rem;
      font-weight: 700;
      color: #15803d;
      background: #dcfce7;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
    }
    .zero-fee-badge {
      font-size: 0.78rem;
      font-weight: 700;
      color: #0369a1;
      background: #e0f2fe;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
    }
    .summary-divider {
      border: none;
      border-top: 1px dashed var(--border-subtle);
      margin-block: 0.25rem;
    }
    .total-row {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
    }
    .checkout-btn {
      width: 100%;
      padding: 0.95rem;
      font-size: 1.05rem;
      margin-top: 0.5rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), var(--shadow-antigravity-sm);
    }
    .disabled-btn {
      background: #94a3b8;
      border-color: #94a3b8;
      cursor: not-allowed;
      opacity: 0.75;
      box-shadow: none;
    }
    .guarantee-box {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem;
      background: rgba(247, 250, 247, 0.85);
      border-radius: var(--radius-md);
      font-size: 0.78rem;
      color: var(--text-secondary);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .guarantee-box i {
      color: var(--fruitella-lime);
      font-size: 1.1rem;
    }

    @media (max-width: 992px) {
      .cart-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .items-card {
        padding: 1.15rem 0.85rem;
      }
      .cart-item-row {
        gap: 0.75rem;
      }
      .item-thumb {
        width: 72px;
        height: 72px;
      }
      .item-name {
        font-size: 0.98rem;
      }
      .summary-card {
        padding: 1.15rem 0.85rem;
      }
      .cart-actions-row {
        flex-direction: column-reverse;
        gap: 0.75rem;
        align-items: stretch;
        text-align: center;
      }
      .clear-cart-btn, .continue-shopping-link {
        justify-content: center;
      }
    }
  `]
})
export class CartComponent {
  private cartService = inject(CartService);
  readonly fulfillmentService = inject(FulfillmentService);

  private clearCartModal = viewChild(ClearCartModalComponent);
  private editCartModal = viewChild(EditCartItemModalComponent);

  readonly items = this.cartService.items;
  readonly itemCount = this.cartService.itemCount;
  readonly subtotal = this.cartService.subtotal;
  readonly deliveryFee = this.cartService.deliveryFee;
  readonly total = this.cartService.total;

  readonly isDeliveryBelowMinimum = computed(() => {
    return this.fulfillmentService.activeType() === 'delivery' && 
      this.subtotal() < this.fulfillmentService.deliveryConfig.minimumOrderAmount;
  });

  readonly minOrderShortfall = computed(() => {
    return Math.max(0, this.fulfillmentService.deliveryConfig.minimumOrderAmount - this.subtotal());
  });

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

  updateQuantity(cartItemId: string, newQty: number): void {
    this.cartService.updateQuantity(cartItemId, newQty);
  }

  removeItem(cartItemId: string): void {
    this.cartService.removeItem(cartItemId);
  }

  openEditModal(item: CartItem): void {
    this.editCartModal()?.open(item);
  }

  confirmClearCart(): void {
    this.clearCartModal()?.open();
  }

  onClearCartConfirmed(): void {
    this.cartService.clearCart();
  }
}
