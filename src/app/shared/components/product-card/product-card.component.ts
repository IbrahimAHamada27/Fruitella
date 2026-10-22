import { Component, computed, inject, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product, ProductSizeOption } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="product-card" [class.featured-card]="product().isFeatured">
      <!-- Media Section with Favorite Button & Total In Cart Badge -->
      <div class="card-media">
        <a [routerLink]="['/product', product().slug]" class="image-link" [attr.aria-label]="product().nameAr">
          <img 
            [src]="product().image" 
            [alt]="product().nameAr" 
            loading="lazy" 
            (error)="onImageError($event)"
            class="product-image" />
        </a>

        <!-- Category Tag -->
        <span class="category-badge">{{ product().categoryNameAr }}</span>

        <!-- Total In-Cart Badge for this drink (across all sizes) -->
        @if (totalProductInCart() > 0) {
          <span class="in-cart-indicator" title="إجمالي الكمية المضافة من هذا المشروب">
            <i class="fa-solid fa-basket-shopping"></i> {{ totalProductInCart() }}
          </span>
        }

        <!-- Favorite Button -->
        <button 
          type="button" 
          class="fav-btn" 
          [class.active]="isFavorite()"
          (click)="toggleFavorite($event)"
          [attr.aria-label]="isFavorite() ? 'إزالة من المفضلة' : 'إضافة للمفضلة'">
          <i [class]="isFavorite() ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"></i>
        </button>

        <!-- Share Button -->
        <button 
          type="button" 
          class="card-share-btn" 
          (click)="shareProduct($event)"
          title="مشاركة رابط المشروب وصورته"
          aria-label="مشاركة رابط المشروب">
          <i class="fa-solid fa-share-nodes"></i>
        </button>
      </div>

      <!-- Content Section -->
      <div class="card-content">
        <!-- Product Title -->
        <div class="card-header">
          <h3 class="product-title">
            <a [routerLink]="['/product', product().slug]">{{ product().nameAr }}</a>
          </h3>
        </div>

        <!-- الجملة التعريفية للمشروب (Visible across Mobile & Desktop) -->
        <p class="product-desc" [title]="product().descriptionAr">
          {{ product().descriptionAr }}
        </p>

        <!-- شريط اختيار الأحجام التفاعلي من بره (الزبون يضغط ويختار الحجم مباشرة) -->
        <div class="card-sizes-strip" [title]="'اختر حجم ' + product().nameAr">
          @for (size of product().sizes; track size.id) {
            <button 
              type="button" 
              class="size-pill-tag" 
              [class.active-pill]="activeSize().id === size.id"
              (click)="selectSize(size, $event)"
              [attr.aria-label]="'اختيار حجم ' + size.nameAr + ' بسعر ' + size.price + ' جنيه'">
              <span class="s-name">{{ size.nameAr }}</span>
              <span class="s-price">{{ size.price }} ج</span>
              @if (getSizeQuantity(size.id) > 0) {
                <span class="size-count-bubble" title="الكمية المطلوبة من هذا الحجم">
                  {{ getSizeQuantity(size.id) }}
                </span>
              }
            </button>
          }
        </div>

        <!-- Card Footer: Live Price & In-Card Stepper (- [count] +) -->
        <div class="card-footer">
          <div class="price-box">
            <div class="live-price-row">
              <span class="price-val">{{ displayedPrice() }}</span>
              <span class="currency-tag">ج.م</span>
            </div>
            @if (product().sizes.length > 1) {
              <span class="active-size-tag">{{ activeSize().nameAr }}</span>
            }
          </div>

          <!-- العداد السريع (+ و - والأرقام في النص) بدلاً من زرار التخصيص القديم -->
          <div 
            class="card-stepper" 
            [class.has-items]="currentSizeQuantity() > 0" 
            (click)="$event.stopPropagation()">
            <button 
              type="button" 
              class="stepper-btn minus" 
              [disabled]="currentSizeQuantity() === 0"
              (click)="decrement($event)"
              title="إنقاص الكمية للحجم المحدد"
              aria-label="إنقاص الكمية">
              <i class="fa-solid fa-minus"></i>
            </button>

            <span class="stepper-count" [class.nonzero]="currentSizeQuantity() > 0">
              {{ currentSizeQuantity() }}
            </span>

            <button 
              type="button" 
              class="stepper-btn plus" 
              (click)="increment($event)"
              title="زيادة الكمية للحجم المحدد"
              aria-label="زيادة الكمية">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .product-card {
      background: var(--fruitella-surface);
      border: 1px solid rgba(13, 41, 20, 0.08);
      border-radius: var(--radius-md, 14px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-fast);
      height: 100%;
      position: relative;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-sm);
    }
    .product-card:hover {
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
      border-color: rgba(118, 164, 34, 0.4);
      transform: translateY(-3px);
    }
    .featured-card {
      border-color: rgba(118, 164, 34, 0.35);
    }

    .card-media {
      position: relative;
      width: 100%;
      height: 145px;
      background: #f4f7f4;
      overflow: hidden;
    }
    .image-link {
      display: block;
      width: 100%;
      height: 100%;
    }
    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }
    .product-card:hover .product-image {
      transform: scale(1.05);
    }

    /* Category Badge on Image */
    .category-badge {
      position: absolute;
      bottom: 0.4rem;
      right: 0.4rem;
      background: rgba(13, 41, 20, 0.85);
      backdrop-filter: blur(8px);
      color: #ffffff;
      font-size: 0.68rem;
      font-weight: 700;
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-full);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      z-index: 2;
    }

    /* In-Cart Total Indicator on Image */
    .in-cart-indicator {
      position: absolute;
      bottom: 0.4rem;
      left: 0.4rem;
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-900));
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-full);
      box-shadow: 0 2px 8px rgba(13, 41, 20, 0.35);
      display: flex;
      align-items: center;
      gap: 0.25rem;
      z-index: 2;
      font-variant-numeric: tabular-nums;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .in-cart-indicator i {
      font-size: 0.68rem;
      color: var(--fruitella-lime-light);
    }

    /* Favorite Button */
    .fav-btn {
      position: absolute;
      top: 0.45rem;
      left: 0.45rem;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.82rem;
      cursor: pointer;
      z-index: 2;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: transform var(--transition-fast), color var(--transition-fast), background var(--transition-fast);
    }
    .fav-btn:hover {
      background: #ffffff;
      color: #e11d48;
      transform: scale(1.1);
    }
    .fav-btn:active {
      transform: scale(0.9) !important;
    }
    .fav-btn.active {
      color: #e11d48;
      background: #ffffff;
    }

    /* Share Button */
    .card-share-btn {
      position: absolute;
      top: 2.5rem;
      left: 0.45rem;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      cursor: pointer;
      z-index: 2;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: transform var(--transition-fast), color var(--transition-fast), background var(--transition-fast);
    }
    .card-share-btn:hover {
      background: #ffffff;
      color: var(--fruitella-lime);
      transform: scale(1.1);
    }
    .card-share-btn:active {
      transform: scale(0.9) !important;
    }

    /* Card Content */
    .card-content {
      padding: 0.65rem 0.75rem;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 0.35rem;
    }
    .card-header {
      display: flex;
      flex-direction: column;
    }
    .product-title {
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-height: 2.3rem;
    }
    .product-title a {
      color: inherit;
      transition: color var(--transition-fast);
      text-decoration: none;
    }
    .product-title a:hover {
      color: var(--fruitella-lime);
    }

    /* الجملة التعريفية للمشروب */
    .product-desc {
      font-size: 0.76rem;
      color: var(--text-secondary);
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
      min-height: 2.05rem;
    }

    /* شريط الأحجام التفاعلي القابل للضغط */
    .card-sizes-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      margin-block: 0.15rem;
      min-height: 1.45rem;
      align-items: center;
    }
    .size-pill-tag {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      background: #f1f5f2;
      border: 1px solid rgba(27, 94, 32, 0.14);
      border-radius: var(--radius-xs, 4px);
      padding: 0.15rem 0.45rem;
      font-size: 0.68rem;
      color: var(--fruitella-green-900);
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      cursor: pointer;
      transition: all var(--transition-fast);
      user-select: none;
    }
    .size-pill-tag:hover {
      border-color: var(--fruitella-lime);
      background: var(--fruitella-lime-bg);
      transform: translateY(-1px);
    }
    .size-pill-tag:active {
      transform: scale(0.95);
    }
    .size-pill-tag.active-pill {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      border-color: var(--fruitella-green-800);
      color: #ffffff;
      font-weight: 800;
      box-shadow: 0 2px 6px rgba(29, 77, 41, 0.25);
    }
    .size-pill-tag .s-price {
      color: var(--fruitella-green-700);
      font-weight: 700;
    }
    .size-pill-tag.active-pill .s-price {
      color: var(--fruitella-lime-light);
    }
    .size-count-bubble {
      position: absolute;
      top: -7px;
      left: -4px;
      background: var(--fruitella-green-800);
      color: #ffffff;
      font-size: 0.58rem;
      font-weight: 800;
      min-width: 17px;
      height: 17px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid #ffffff;
      box-shadow: 0 1px 4px rgba(0,0,0,0.25);
      line-height: 1;
      z-index: 3;
    }

    /* Card Footer: Live Price & Stepper */
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.4rem;
      margin-top: auto;
      padding-top: 0.45rem;
      border-top: 1px dashed var(--border-subtle);
    }
    .price-box {
      display: flex;
      flex-direction: column;
    }
    .live-price-row {
      display: flex;
      align-items: baseline;
      gap: 0.15rem;
    }
    .price-val {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
      line-height: 1.1;
    }
    .currency-tag {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
    }
    .active-size-tag {
      font-size: 0.68rem;
      font-weight: 600;
      color: var(--text-muted);
      line-height: 1;
      margin-top: 0.1rem;
    }

    /* العداد التفاعلي (+ و - والأرقام في النص) */
    .card-stepper {
      display: inline-flex;
      align-items: center;
      gap: 0.2rem;
      background: #f1f4f1;
      border: 1px solid rgba(27, 94, 32, 0.14);
      border-radius: var(--radius-full);
      padding: 0.15rem;
      transition: all var(--transition-fast);
    }
    .card-stepper.has-items {
      background: var(--fruitella-lime-bg);
      border-color: rgba(118, 164, 34, 0.4);
      box-shadow: 0 2px 6px rgba(118, 164, 34, 0.15);
    }
    .stepper-btn {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all var(--transition-fast);
      user-select: none;
    }
    .stepper-btn.minus {
      background: #ffffff;
      color: var(--fruitella-green-800);
      box-shadow: var(--shadow-xs);
    }
    .stepper-btn.minus:disabled {
      opacity: 0.35;
      cursor: not-allowed;
      background: transparent;
      box-shadow: none;
      color: var(--text-muted);
    }
    .stepper-btn.minus:not(:disabled):hover {
      background: #fee2e2;
      color: #dc2626;
      transform: scale(1.08);
    }
    .stepper-btn.minus:not(:disabled):active {
      transform: scale(0.92);
    }
    .stepper-btn.plus {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-900));
      color: #ffffff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 6px rgba(29, 77, 41, 0.25);
    }
    .stepper-btn.plus:hover {
      background: linear-gradient(135deg, var(--fruitella-lime), var(--fruitella-green-700));
      transform: scale(1.08);
    }
    .stepper-btn.plus:active {
      transform: scale(0.92) !important;
    }
    .stepper-count {
      min-width: 20px;
      text-align: center;
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--text-muted);
      font-variant-numeric: tabular-nums;
      user-select: none;
    }
    .stepper-count.nonzero {
      color: var(--fruitella-green-900);
      font-weight: 900;
    }

    /* Mobile Responsive (<= 640px): Clean 2 Columns */
    @media (max-width: 640px) {
      .product-card {
        border-radius: 12px;
      }
      .card-media {
        height: 110px;
      }
      .card-content {
        padding: 0.5rem 0.55rem;
        gap: 0.25rem;
      }
      .product-title {
        font-size: 0.82rem;
        min-height: 2.1rem;
      }
      .product-desc {
        font-size: 0.7rem;
        min-height: 1.85rem;
      }
      .card-sizes-strip {
        gap: 0.2rem;
        min-height: 1.35rem;
      }
      .size-pill-tag {
        font-size: 0.62rem;
        padding: 0.1rem 0.3rem;
      }
      .price-val {
        font-size: 0.95rem;
      }
      .currency-tag {
        font-size: 0.65rem;
      }
      .active-size-tag {
        font-size: 0.62rem;
      }
      .stepper-btn {
        width: 24px;
        height: 24px;
        font-size: 0.7rem;
      }
      .stepper-count {
        min-width: 17px;
        font-size: 0.76rem;
      }
    }

    /* Small screens (<= 375px) */
    @media (max-width: 375px) {
      .card-media {
        height: 98px;
      }
      .product-title {
        font-size: 0.78rem;
      }
      .product-desc {
        font-size: 0.66rem;
      }
      .card-sizes-strip {
        gap: 0.15rem;
        min-height: 1.2rem;
      }
      .size-pill-tag {
        font-size: 0.58rem;
        padding: 0.08rem 0.25rem;
      }
      .stepper-btn {
        width: 22px;
        height: 22px;
        font-size: 0.65rem;
      }
      .stepper-count {
        min-width: 15px;
        font-size: 0.72rem;
      }
    }
  `]
})
export class ProductCardComponent {
  private cartService = inject(CartService);
  private toast = inject(ToastService);

  readonly product = input.required<Product>();
  readonly quickAdd = output<Product>();

  readonly isFavorite = signal<boolean>(false);
  readonly selectedSize = signal<ProductSizeOption | null>(null);

  readonly activeSize = computed<ProductSizeOption>(() => {
    const cur = this.selectedSize();
    if (cur && this.product().sizes.some(s => s.id === cur.id)) {
      return cur;
    }
    return this.product().sizes[0];
  });

  readonly displayedPrice = computed<number>(() => {
    const size = this.activeSize();
    return size ? size.price : this.product().basePrice;
  });

  readonly currentSizeQuantity = computed<number>(() => {
    const size = this.activeSize();
    if (!size) return 0;
    return this.cartService.items()
      .filter(item => item.productId === this.product().id && item.selectedSize.id === size.id)
      .reduce((sum, item) => sum + item.quantity, 0);
  });

  readonly totalProductInCart = computed<number>(() => {
    return this.cartService.items()
      .filter(item => item.productId === this.product().id)
      .reduce((sum, item) => sum + item.quantity, 0);
  });

  selectSize(size: ProductSizeOption, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.selectedSize.set(size);
  }

  getSizeQuantity(sizeId: string): number {
    return this.cartService.items()
      .filter(item => item.productId === this.product().id && item.selectedSize.id === sizeId)
      .reduce((sum, item) => sum + item.quantity, 0);
  }

  increment(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    const size = this.activeSize();
    if (size) {
      this.cartService.addItem(this.product(), size, [], '', 1);
    }
  }

  decrement(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    const size = this.activeSize();
    if (!size) return;

    const items = this.cartService.items();
    const matching = items.find(
      item => item.productId === this.product().id && item.selectedSize.id === size.id
    );

    if (matching) {
      if (matching.quantity > 1) {
        this.cartService.updateQuantity(matching.cartItemId, matching.quantity - 1);
      } else {
        this.cartService.removeItem(matching.cartItemId);
      }
    }
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.isFavorite.update(v => !v);
    if (this.isFavorite()) {
      this.toast.show(`تمت إضافة "${this.product().nameAr}" إلى المفضلة ❤️`, 'success');
    }
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/brand/fruitella-hero-banner.jpg';
  }

  shareProduct(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    const prod = this.product();
    const url = typeof window !== 'undefined' ? `${window.location.origin}/product/${prod.slug}` : `https://fruitella-seven.vercel.app/product/${prod.slug}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: `${prod.nameAr} | فروتيلا Fruitella`,
        text: prod.descriptionAr || `اطلب ${prod.nameAr} طازجاً من فروتيلا مول حياة تاون بالعبور`,
        url: url
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        this.toast.show(`تم نسخ رابط "${prod.nameAr}" للمشاركة بنجاح! 📋`, 'success');
      }).catch(() => {
        this.toast.show(`الرابط: ${url}`, 'info');
      });
    }
  }
}
