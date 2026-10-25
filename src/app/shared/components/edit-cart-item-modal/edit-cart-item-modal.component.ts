import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem, BlendType, SweetenerType, SugarLevel, IceLevel } from '../../../core/models/cart.model';
import { Product, ProductAddon, ProductSizeOption } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { PriceDisplayComponent } from '../price-display/price-display.component';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

@Component({
  selector: 'app-edit-cart-item-modal',
  standalone: true,
  imports: [FormsModule, PriceDisplayComponent, QuantitySelectorComponent],
  template: `
    @if (isOpen() && item(); as itm) {
      <div 
        class="modal-backdrop animate-fade-in" 
        (click)="close()"
        role="dialog"
        aria-modal="true"
        aria-labelledby="editItemModalTitle">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <div class="header-product">
              <img [src]="itm.image" [alt]="itm.nameAr" class="item-thumb" (error)="onImageError($event)" />
              <div>
                <span class="badge badge-brand">{{ itm.categoryNameAr }}</span>
                <h3 id="editItemModalTitle" class="item-name">{{ itm.nameAr }}</h3>
              </div>
            </div>
            <button type="button" class="btn-close" (click)="close()" aria-label="إغلاق">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="modal-body">
            <!-- Sizes Selection -->
            @if (product()?.sizes && product()!.sizes.length > 1) {
              <div class="edit-section">
                <span class="sec-label"><i class="fa-solid fa-glass-water"></i> تعديل الحجم:</span>
                <div class="sizes-grid">
                  @for (size of product()!.sizes; track size.id) {
                    <label class="size-pill" [class.active]="selectedSize()?.id === size.id">
                      <input 
                        type="radio" 
                        name="editSize" 
                        [value]="size" 
                        [checked]="selectedSize()?.id === size.id"
                        (change)="selectedSize.set(size)"
                        class="sr-only" />
                      <span>{{ size.nameAr }}</span>
                      <strong class="s-price">{{ size.price }} ج.م</strong>
                    </label>
                  }
                </div>
              </div>
            }

            <!-- Add-ons Selection -->
            @if (product()?.availableAddons && product()!.availableAddons!.length > 0) {
              <div class="edit-section">
                <span class="sec-label"><i class="fa-solid fa-circle-plus"></i> تعديل الإضافات:</span>
                <div class="addons-grid">
                  @for (addon of product()!.availableAddons!; track addon.id) {
                    <label class="addon-pill" [class.active]="isAddonChecked(addon)">
                      <input 
                        type="checkbox" 
                        [checked]="isAddonChecked(addon)"
                        (change)="toggleAddon(addon)"
                        class="addon-check" />
                      <span>{{ addon.nameAr }}</span>
                      <strong class="a-price">+{{ addon.price }} ج.م</strong>
                    </label>
                  }
                </div>
              </div>
            }

            <!-- Customization: طريقة الخفق والقوام -->
            <div class="edit-section">
              <span class="sec-label"><i class="fa-solid fa-blender"></i> طريقة الخفق والقوام:</span>
              <div class="custom-pills-row">
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedBlend() === 'half'"
                  (click)="selectedBlend.set('half')">
                  <strong>نص ضربة</strong>
                  <small>قطع فواكه</small>
                </button>
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedBlend() === 'froth'"
                  (click)="selectedBlend.set('froth')">
                  <strong>وش ضربة</strong>
                  <small>رغوة وبيوريه</small>
                </button>
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedBlend() === 'full'"
                  (click)="selectedBlend.set('full')">
                  <strong>ضرب كامل</strong>
                  <small>بيوريه ناعم</small>
                </button>
              </div>
            </div>

            <!-- Customization: نوع التحلية -->
            <div class="edit-section">
              <span class="sec-label"><i class="fa-solid fa-jar"></i> نوع التحلية:</span>
              <div class="custom-pills-row">
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedSweetener() === 'white_sugar'"
                  (click)="selectedSweetener.set('white_sugar')">
                  <strong>سكر أبيض</strong>
                  <small>عادي</small>
                </button>
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedSweetener() === 'honey'"
                  (click)="selectedSweetener.set('honey')">
                  <strong>عسل نحل</strong>
                  <small class="honey-badge">+10 ج.م</small>
                </button>
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedSweetener() === 'stevia'"
                  (click)="selectedSweetener.set('stevia')">
                  <strong>ستيفيا دايت</strong>
                  <small>بدون كالوري</small>
                </button>
                <button 
                  type="button" 
                  class="edit-choice-btn" 
                  [class.active]="selectedSweetener() === 'none'"
                  (click)="onSelectNoSweetener()">
                  <strong>بدون سكر</strong>
                  <small>فريش 100%</small>
                </button>
              </div>
            </div>

            <!-- Customization: درجة التحلية -->
            @if (selectedSweetener() !== 'none') {
              <div class="edit-section">
                <span class="sec-label"><i class="fa-solid fa-cubes-stacked"></i> درجة التحلية:</span>
                <div class="segmented-bar">
                  <button 
                    type="button" 
                    class="seg-btn" 
                    [class.active]="selectedSugarLevel() === 'regular'"
                    (click)="selectedSugarLevel.set('regular')">
                    مضبوط
                  </button>
                  <button 
                    type="button" 
                    class="seg-btn" 
                    [class.active]="selectedSugarLevel() === 'light'"
                    (click)="selectedSugarLevel.set('light')">
                    خفيف
                  </button>
                  <button 
                    type="button" 
                    class="seg-btn" 
                    [class.active]="selectedSugarLevel() === 'extra'"
                    (click)="selectedSugarLevel.set('extra')">
                    زيادة
                  </button>
                </div>
              </div>
            }

            <!-- Customization: درجة الثلج -->
            <div class="edit-section">
              <span class="sec-label"><i class="fa-solid fa-snowflake"></i> درجة الثلج والبرودة:</span>
              <div class="segmented-bar">
                <button 
                  type="button" 
                  class="seg-btn" 
                  [class.active]="selectedIceLevel() === 'regular'"
                  (click)="selectedIceLevel.set('regular')">
                  مثلج طبيعي
                </button>
                <button 
                  type="button" 
                  class="seg-btn" 
                  [class.active]="selectedIceLevel() === 'light'"
                  (click)="selectedIceLevel.set('light')">
                  ثلج خفيف
                </button>
                <button 
                  type="button" 
                  class="seg-btn" 
                  [class.active]="selectedIceLevel() === 'none'"
                  (click)="selectedIceLevel.set('none')">
                  بدون ثلج
                </button>
              </div>
            </div>

            <!-- Special Instructions -->
            <div class="edit-section">
              <label for="editNotes" class="sec-label"><i class="fa-solid fa-pen"></i> الملاحظات والتعليمات:</label>
              <input 
                id="editNotes" 
                type="text" 
                [(ngModel)]="instructions" 
                placeholder="ملاحظات إضافية على التحضير..."
                class="edit-input" />
            </div>

            <!-- Quantity & Total -->
            <div class="edit-footer-bar">
              <div class="qty-box">
                <span class="qty-hint">الكمية:</span>
                <app-quantity-selector 
                  [quantity]="quantity()" 
                  (quantityChange)="quantity.set($event)">
                </app-quantity-selector>
              </div>

              <div class="total-box">
                <span class="total-hint">المجموع المعدل:</span>
                <app-price-display [amount]="currentTotal()" size="lg"></app-price-display>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline" (click)="close()">إلغاء</button>
            <button type="button" class="btn btn-primary" (click)="saveChanges()">
              <i class="fa-solid fa-check"></i> حفظ التعديل على السلة
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(13, 41, 20, 0.6);
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }
    .modal-card {
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(20px);
      border-radius: var(--radius-xl);
      max-width: 550px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      border: 1px solid var(--glass-border);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 2rem;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1rem;
    }
    .header-product {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .item-thumb {
      width: 58px;
      height: 58px;
      border-radius: var(--radius-md);
      object-fit: cover;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .item-name {
      font-size: 1.25rem;
      color: var(--fruitella-green-900);
      margin-top: 0.2rem;
      text-wrap: balance;
    }
    .btn-close {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #f1f5f2;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      transition: all var(--transition-fast) ease;
    }
    .btn-close:hover {
      background: #e2e8e4;
      color: var(--fruitella-green-900);
    }
    .btn-close:active {
      transform: scale(0.9);
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .edit-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .sec-label {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .sec-label i {
      color: var(--fruitella-lime);
    }
    .sizes-grid, .addons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 0.65rem;
    }
    .size-pill, .addon-pill {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.65rem 0.85rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      cursor: pointer;
      font-size: 0.85rem;
      background: #fafbfa;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .size-pill:active, .addon-pill:active {
      transform: scale(0.97);
    }
    .addon-pill {
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
    .size-pill.active, .addon-pill.active {
      border-color: var(--fruitella-green-700);
      background: var(--fruitella-lime-bg);
      box-shadow: 0 0 0 1px var(--fruitella-green-700), var(--shadow-antigravity-xs);
    }
    .s-price, .a-price {
      font-size: 0.82rem;
      color: var(--fruitella-green-700);
      font-weight: 700;
      margin-top: 0.2rem;
      font-variant-numeric: tabular-nums;
    }
    .addon-check {
      accent-color: var(--fruitella-green-700);
    }

    /* Granular Customization Styles */
    .custom-pills-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      gap: 0.5rem;
    }
    .edit-choice-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.15rem;
      padding: 0.6rem 0.75rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      background: #fafbfa;
      cursor: pointer;
      text-align: right;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .edit-choice-btn:active {
      transform: scale(0.97);
    }
    .edit-choice-btn strong {
      font-size: 0.82rem;
      color: var(--fruitella-green-900);
    }
    .edit-choice-btn small {
      font-size: 0.72rem;
      color: var(--text-muted);
    }
    .edit-choice-btn .honey-badge {
      color: var(--fruitella-green-700);
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    .edit-choice-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-1px);
    }
    .edit-choice-btn.active {
      border-color: var(--fruitella-green-700);
      background: var(--fruitella-lime-bg);
      box-shadow: 0 0 0 1px var(--fruitella-green-700), var(--shadow-antigravity-xs);
    }

    .segmented-bar {
      display: flex;
      gap: 0.4rem;
    }
    .seg-btn {
      flex: 1;
      padding: 0.45rem 0.75rem;
      border-radius: var(--radius-full);
      border: 1.5px solid var(--border-subtle);
      background: #fafbfa;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--fruitella-green-900);
      cursor: pointer;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      text-align: center;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .seg-btn:hover {
      border-color: var(--fruitella-lime);
    }
    .seg-btn:active {
      transform: scale(0.96);
    }
    .seg-btn.active {
      border-color: var(--fruitella-green-700);
      background: var(--fruitella-green-700);
      color: #ffffff;
      box-shadow: 0 2px 8px rgba(27, 94, 32, 0.25);
    }

    .edit-input {
      height: 42px;
      padding-inline: 0.85rem;
      border-radius: var(--radius-md);
      border: 1.5px solid var(--border-subtle);
      font-size: 0.88rem;
      outline: none;
      transition: all var(--transition-fast) ease;
    }
    .edit-input:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.12);
    }
    .edit-footer-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(244, 248, 244, 0.9);
      padding: 1rem;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-subtle);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .qty-box {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .qty-hint, .total-hint {
      font-size: 0.78rem;
      color: var(--text-muted);
      font-weight: 600;
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    @media (max-width: 640px) {
      .modal-backdrop {
        padding: 0.5rem;
      }
      .modal-card {
        padding: 1.15rem 0.95rem;
        max-height: 94vh;
        gap: 1rem;
        border-radius: var(--radius-lg);
      }
      .modal-footer {
        flex-direction: column-reverse;
        gap: 0.5rem;
      }
      .modal-footer .btn {
        width: 100%;
        justify-content: center;
      }
      .edit-footer-bar {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
        text-align: center;
      }
      .total-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .qty-box {
        justify-content: space-between;
      }
      .custom-pills-row {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class EditCartItemModalComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  readonly isOpen = signal<boolean>(false);
  readonly item = signal<CartItem | undefined>(undefined);
  readonly product = signal<Product | undefined>(undefined);
  readonly selectedSize = signal<ProductSizeOption | undefined>(undefined);
  readonly selectedAddons = signal<ProductAddon[]>([]);
  readonly quantity = signal<number>(1);
  instructions = '';

  // Customization signals
  readonly selectedBlend = signal<BlendType>('full');
  readonly selectedSweetener = signal<SweetenerType>('white_sugar');
  readonly selectedSugarLevel = signal<SugarLevel>('regular');
  readonly selectedIceLevel = signal<IceLevel>('regular');

  readonly currentUnitPrice = computed(() => {
    const size = this.selectedSize();
    const sizePrice = size ? size.price : 0;
    const addonsPrice = this.selectedAddons().reduce((sum, a) => sum + a.price, 0);
    const sweetenerExtra = this.selectedSweetener() === 'honey' ? 10 : 0;
    return sizePrice + addonsPrice + sweetenerExtra;
  });

  readonly currentTotal = computed(() => {
    return this.currentUnitPrice() * this.quantity();
  });

  open(cartItem: CartItem): void {
    this.item.set(cartItem);
    const prod = this.productService.getProductById(cartItem.productId);
    this.product.set(prod);
    this.selectedSize.set(cartItem.selectedSize);
    this.selectedAddons.set([...cartItem.selectedAddons]);
    this.instructions = cartItem.specialInstructions;
    this.quantity.set(cartItem.quantity);

    // Populate customization options
    this.selectedBlend.set(cartItem.customization?.blendType || 'full');
    this.selectedSweetener.set(cartItem.customization?.sweetenerType || 'white_sugar');
    this.selectedSugarLevel.set(cartItem.customization?.sugarLevel || 'regular');
    this.selectedIceLevel.set(cartItem.customization?.iceLevel || 'regular');

    this.isOpen.set(true);
  }

  onSelectNoSweetener(): void {
    this.selectedSweetener.set('none');
    this.selectedSugarLevel.set('none');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }

  close(): void {
    this.isOpen.set(false);
  }

  isAddonChecked(addon: ProductAddon): boolean {
    return this.selectedAddons().some(a => a.id === addon.id);
  }

  toggleAddon(addon: ProductAddon): void {
    if (this.isAddonChecked(addon)) {
      this.selectedAddons.update(list => list.filter(a => a.id !== addon.id));
    } else {
      this.selectedAddons.update(list => [...list, addon]);
    }
  }

  saveChanges(): void {
    const itm = this.item();
    const prod = this.product();
    const sz = this.selectedSize();
    if (itm && prod && sz) {
      this.cartService.updateItemCustomization(
        itm.cartItemId,
        prod,
        sz,
        this.selectedAddons(),
        this.instructions,
        this.quantity(),
        {
          blendType: this.selectedBlend(),
          sweetenerType: this.selectedSweetener(),
          sugarLevel: this.selectedSweetener() === 'none' ? 'none' : this.selectedSugarLevel(),
          iceLevel: this.selectedIceLevel()
        }
      );
      this.close();
    }
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target.dataset['fallbackApplied']) return;
    target.dataset['fallbackApplied'] = 'true';
    target.src = '/images/brand/fruitella-logo.jpg';
    target.classList.add('fruitella-logo-fallback');
  }
}
