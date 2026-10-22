import { Component, computed, inject, signal, viewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { Product, ProductCategory } from '../../core/models/product.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { CategoryChipComponent } from '../../shared/components/category-chip/category-chip.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { CategoryInformationComponent } from '../../shared/components/category-information/category-information.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FormsModule, 
    ProductCardComponent, 
    CategoryChipComponent, 
    EmptyStateComponent, 
    CategoryInformationComponent
  ],
  template: `
    <div class="menu-page">
      <!-- 1. Sleek, App-Style Top Search & Filter Bar (Zero Bloated AI Banners) -->
      <section class="menu-top-bar" aria-label="البحث والفرز">
        <div class="container top-bar-inner">
          <!-- Search Field -->
          <div class="search-field">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input 
              type="text" 
              [(ngModel)]="searchQuery" 
              placeholder="ابحث بالاسم أو المكونات (مانجو، أفوكادو، لوتس)..." 
              class="menu-search-input" />
            @if (searchQuery) {
              <button type="button" class="clear-btn" (click)="searchQuery = ''" aria-label="مسح البحث">
                <i class="fa-solid fa-xmark"></i>
              </button>
            }
          </div>

          <!-- Sort Selector Dropdown -->
          <div class="sort-selector">
            <i class="fa-solid fa-arrow-down-short-wide sort-icon"></i>
            <select id="sortSelect" [(ngModel)]="sortBy" class="sort-select" aria-label="ترتيب حسب">
              <option value="default">الافتراضي</option>
              <option value="price-asc">الأقل سعراً</option>
              <option value="price-desc">الأعلى سعراً</option>
              <option value="popular">الأكثر طلباً</option>
            </select>
          </div>
        </div>
      </section>

      <!-- 2. Sticky Category Chips Bar -->
      <nav class="category-nav-bar" aria-label="أقسام المنيو">
        <div class="container category-nav-wrapper">
          <button 
            type="button" 
            class="chips-scroll-btn scroll-prev" 
            (click)="scrollChips('prev')" 
            aria-label="تمرير للأمام">
            <i class="fa-solid fa-chevron-right"></i>
          </button>

          <div class="chips-scroll-container" #chipsContainer>
            <button 
              type="button" 
              class="all-chip" 
              [class.active]="!activeCategorySlug()"
              (click)="selectCategory('')">
              <i class="fa-solid fa-border-all"></i>
              <span>الكل</span>
              <span class="count-pill">{{ allProducts().length }}</span>
            </button>

            @for (cat of categories(); track cat.id) {
              <app-category-chip 
                [category]="cat" 
                [isActive]="activeCategorySlug() === cat.slug"
                (selected)="selectCategory($event.slug)">
              </app-category-chip>
            }
          </div>

          <button 
            type="button" 
            class="chips-scroll-btn scroll-next" 
            (click)="scrollChips('next')" 
            aria-label="تمرير للخلف">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
      </nav>

      <!-- 3. Main Menu Content Grid -->
      <main class="container menu-main-content">
        <!-- Scenario A: Specific Category Selected OR Search Active -->
        @if (activeCategorySlug() || searchQuery) {
          <div class="active-filter-header">
            <div class="active-filter-title">
              <h2>{{ currentCategoryName() }}</h2>
              <span class="filter-count">{{ filteredProducts().length }} صنف</span>
            </div>
            <button type="button" class="reset-filter-btn" (click)="resetFilters()">
              <i class="fa-solid fa-rotate-left"></i> عرض كافة الأقسام
            </button>
          </div>

          @if (filteredProducts().length > 0) {
            <div class="products-grid">
              @for (prod of filteredProducts(); track prod.id) {
                <app-product-card 
                  [product]="prod">
                </app-product-card>
              }
            </div>

            <!-- Category Information at end of active category -->
            @if (activeCategory(); as activeCat) {
              <app-category-information
                [information]="activeCat.informationAr || []"
                [categoryName]="activeCat.nameAr"
                [themeColor]="activeCat.themeColor || ''">
              </app-category-information>
            }
          } @else {
            <app-empty-state 
              icon="fa-solid fa-magnifying-glass"
              title="لم نتمكن من العثور على أصناف مطابقة"
              description="جرب البحث بكلمات مختلفة أو قم بإعادة ضبط التصنيف لاستعراض كافة أقسام فروتيلا."
              actionLabel="عرض كافة الأصناف"
              (click)="resetFilters()">
            </app-empty-state>
          }
        } 
        <!-- Scenario B: All Categories Overview (Compact sections, each concluding with 'معلومات تهمك') -->
        @else {
          <div class="category-sections-wrapper">
            @for (sec of categorySections(); track sec.category.id) {
              <section class="menu-category-section" [id]="'cat-section-' + sec.category.slug">
                <div class="cat-section-header">
                  <div class="cat-title-cluster">
                    <span class="cat-icon-badge" [style.color]="sec.category.themeColor" [style.border-color]="sec.category.themeColor">
                      <i [class]="sec.category.icon"></i>
                    </span>
                    <h2 class="sec-cat-title">{{ sec.category.nameAr }}</h2>
                    <span class="sec-cat-count">{{ sec.products.length }}</span>
                  </div>
                  <button type="button" class="view-cat-link" (click)="selectCategory(sec.category.slug)">
                    عرض القسم فقط ←
                  </button>
                </div>

                <div class="products-grid">
                  @for (prod of sec.products; track prod.id) {
                    <app-product-card 
                      [product]="prod">
                    </app-product-card>
                  }
                </div>

                <!-- Dedicated 'معلومات تهمك' at the end of every category -->
                <app-category-information
                  [information]="sec.category.informationAr || []"
                  [categoryName]="sec.category.nameAr"
                  [themeColor]="sec.category.themeColor || ''">
                </app-category-information>
              </section>
            }
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .menu-page {
      min-height: 80vh;
      background: var(--fruitella-cream);
    }

    /* 1. Sleek Top Search & Filter Bar (Compact & Native App Feel) */
    .menu-top-bar {
      background: var(--fruitella-green-900);
      padding-block: 0.65rem;
      border-bottom: 2px solid var(--fruitella-lime);
    }
    .top-bar-inner {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .search-field {
      position: relative;
      flex: 1;
    }
    .menu-search-input {
      width: 100%;
      height: 40px;
      padding: 0 2.25rem 0 2.25rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(255, 255, 255, 0.22);
      background: rgba(255, 255, 255, 0.14);
      color: #ffffff;
      font-size: 0.88rem;
      outline: none;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    }
    .menu-search-input::placeholder {
      color: rgba(255, 255, 255, 0.72);
    }
    .menu-search-input:focus {
      background: #ffffff;
      color: var(--text-primary);
      border-color: var(--fruitella-lime);
      box-shadow: 0 0 0 3px rgba(118, 164, 34, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .menu-search-input:focus ~ .search-icon {
      color: var(--fruitella-green-700);
    }
    .search-icon {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.88rem;
      pointer-events: none;
    }
    .clear-btn {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.82rem;
      background: none;
      border: none;
      cursor: pointer;
    }
    .menu-search-input:focus ~ .clear-btn {
      color: var(--text-muted);
    }

    /* Sort Box */
    .sort-selector {
      position: relative;
      display: flex;
      align-items: center;
      height: 40px;
      background: rgba(255, 255, 255, 0.14);
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: var(--radius-full);
      padding: 0 0.85rem 0 0.5rem;
      flex-shrink: 0;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    }
    .sort-icon {
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.82rem;
      margin-left: 0.4rem;
      pointer-events: none;
    }
    .sort-select {
      background: transparent;
      border: none;
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 600;
      outline: none;
      cursor: pointer;
    }
    .sort-select option {
      background: var(--fruitella-green-900);
      color: #ffffff;
    }

    /* 2. Sticky Category Navigation Chips (Flush with Header, Opaque Background) */
    .category-nav-bar {
      position: sticky;
      top: var(--header-height, 56px);
      z-index: 990;
      background: #ffffff;
      border-bottom: 1px solid rgba(13, 41, 20, 0.08);
      padding-block: 0.55rem;
      box-shadow: 0 4px 14px rgba(13, 41, 20, 0.05);
      transition: top var(--transition-fast);
    }
    .category-nav-wrapper {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      position: relative;
    }
    .chips-scroll-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      box-shadow: var(--shadow-xs);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      cursor: pointer;
      transition: all var(--transition-fast);
      font-size: 0.75rem;
    }
    .chips-scroll-btn:hover {
      background: var(--fruitella-lime-bg);
      border-color: var(--fruitella-lime);
      color: var(--fruitella-green-900);
    }
    .chips-scroll-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      overflow-x: auto;
      padding-block: 0.15rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      flex: 1;
    }
    .chips-scroll-container::-webkit-scrollbar {
      display: none;
    }
    .all-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 0.95rem;
      border-radius: var(--radius-full);
      background: var(--fruitella-surface);
      border: 1px solid var(--border-subtle);
      color: var(--text-primary);
      font-weight: 700;
      font-size: 0.84rem;
      cursor: pointer;
      white-space: nowrap;
      transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
      flex-shrink: 0;
      user-select: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
    }
    .all-chip:hover {
      border-color: var(--fruitella-lime);
      background: var(--fruitella-lime-bg);
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-sm);
    }
    .all-chip:active {
      transform: scale(0.95) !important;
    }
    .all-chip.active {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      color: #ffffff;
      border-color: var(--fruitella-green-700);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 14px rgba(29, 77, 41, 0.3);
    }
    .count-pill {
      background: #f1f5f2;
      color: var(--text-muted);
      font-size: 0.72rem;
      padding: 0.1rem 0.4rem;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }
    .all-chip.active .count-pill {
      background: rgba(255, 255, 255, 0.22);
      color: #ffffff;
    }

    /* 3. Main Menu Content */
    .menu-main-content {
      padding-top: 1rem;
      padding-bottom: 3.5rem;
    }

    /* Active Filter Header */
    .active-filter-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-subtle);
      gap: 0.5rem;
    }
    .active-filter-title {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }
    .active-filter-title h2 {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .filter-count {
      font-size: 0.78rem;
      color: var(--text-muted);
    }
    .reset-filter-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      background: #f1f5f2;
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-full);
      border: none;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .reset-filter-btn:hover {
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-900);
    }

    /* Category Section Block in All View */
    .category-sections-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2.25rem;
    }
    .menu-category-section {
      scroll-margin-top: 110px;
    }
    .cat-section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      padding-bottom: 0.4rem;
      border-bottom: 1.5px solid var(--border-subtle);
    }
    .cat-title-cluster {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .cat-icon-badge {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: 1px solid currentColor;
      background: var(--fruitella-lime-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .sec-cat-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .sec-cat-count {
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
      font-size: 0.72rem;
      font-weight: 700;
    }
    .view-cat-link {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.2rem 0.4rem;
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast);
    }
    .view-cat-link:hover {
      color: var(--fruitella-lime);
      text-decoration: underline;
    }

    /* ========================================================
       RESPONSIVE PRODUCTS GRID: 
       • Mobile (<= 640px): Exactly 2 Columns (عرضي) with ultra-compact height (3 Rows = 6 products visible!)
       • Tablet (641px - 992px): 3 Columns (3 عرضي)
       • Laptop (993px - 1279px): 4 Columns (4 عرضي)
       • Desktop (1280px - 1599px): 5 Columns (5 عرضي)
       • Ultra-Wide (>= 1600px): 6 Columns (6 عرضي)
       ======================================================== */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }

    /* Ultra-Wide Desktop (>= 1600px) */
    @media (min-width: 1600px) {
      .products-grid {
        grid-template-columns: repeat(6, 1fr);
        gap: 1.15rem;
      }
    }

    /* Laptop (993px to 1279px) */
    @media (max-width: 1279px) and (min-width: 993px) {
      .products-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.85rem;
      }
    }

    /* Tablet (641px to 992px) */
    @media (max-width: 992px) and (min-width: 641px) {
      .products-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
      }
      .menu-top-bar {
        padding-block: 0.5rem;
      }
      .menu-search-input {
        height: 38px;
        font-size: 0.84rem;
      }
      .sort-selector {
        height: 38px;
      }
    }

    /* Mobile Phones (<= 640px): 2 Columns × 3 Rows Visible */
    @media (max-width: 640px) {
      .menu-top-bar {
        padding-block: 0.35rem;
      }
      .top-bar-inner {
        gap: 0.4rem;
      }
      .menu-search-input {
        height: 34px;
        font-size: 0.76rem;
        padding: 0 1.8rem 0 1.8rem;
      }
      .search-icon {
        right: 10px;
        font-size: 0.74rem;
      }
      .sort-selector {
        height: 34px;
        padding: 0 0.5rem 0 0.35rem;
      }
      .sort-select {
        font-size: 0.72rem;
      }
      .category-nav-bar {
        padding-block: 0.45rem;
        background: #ffffff;
        box-shadow: 0 3px 10px rgba(13, 41, 20, 0.07);
      }
      .chips-scroll-btn {
        display: none; /* Native finger swipe touch scrolling on mobile */
      }
      .all-chip {
        padding: 0.35rem 0.75rem;
        font-size: 0.78rem;
        gap: 0.35rem;
      }
      .menu-main-content {
        padding-top: 0.85rem;
        padding-bottom: 2rem;
      }
      .category-sections-wrapper {
        gap: 1.25rem;
      }
      .cat-section-header {
        margin-bottom: 0.35rem;
        padding-bottom: 0.25rem;
      }
      .cat-icon-badge {
        width: 22px;
        height: 22px;
        font-size: 0.72rem;
        border-radius: 6px;
      }
      .sec-cat-title {
        font-size: 0.92rem;
      }
      .sec-cat-count {
        font-size: 0.65rem;
        padding: 0.05rem 0.35rem;
      }
      .view-cat-link {
        display: none;
      }
      .active-filter-header {
        margin-bottom: 0.45rem;
        padding-bottom: 0.3rem;
      }
      .active-filter-title h2 {
        font-size: 1.05rem;
      }

      /* EXACTLY 2 COLUMNS (2 عرضي) AND COMPACT SO 3 ROWS (6 PRODUCTS) ARE COMFORTABLY VISIBLE */
      .products-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 0.45rem !important;
      }
    }
  `]
})
export class MenuComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  readonly allProducts = this.productService.products;
  readonly categories = this.productService.categories;

  readonly activeCategorySlug = signal<string>('');
  searchQuery = '';
  sortBy = 'default';

  readonly chipsContainer = viewChild<ElementRef<HTMLDivElement>>('chipsContainer');

  scrollChips(direction: 'prev' | 'next'): void {
    const el = this.chipsContainer()?.nativeElement;
    if (el) {
      const amount = direction === 'prev' ? 240 : -240;
      el.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('categorySlug');
      this.activeCategorySlug.set(slug || '');
    });
  }

  readonly activeCategory = computed(() => {
    const slug = this.activeCategorySlug();
    if (!slug) return undefined;
    return this.categories().find(c => c.slug === slug);
  });

  readonly currentCategoryName = computed(() => {
    const cat = this.activeCategory();
    if (cat) return cat.nameAr;
    if (this.searchQuery) return `نتائج البحث عن: "${this.searchQuery}"`;
    return 'كافة مشروبات وحلويات المنيو';
  });

  readonly filteredProducts = computed(() => {
    let list = this.productService.searchProducts(this.searchQuery, this.activeCategorySlug() || undefined);

    if (this.sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.basePrice - b.basePrice);
    } else if (this.sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.basePrice - a.basePrice);
    } else if (this.sortBy === 'popular') {
      list = [...list].sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return list;
  });

  readonly categorySections = computed(() => {
    if (this.activeCategorySlug() || this.searchQuery) return [];
    return this.categories().map(cat => ({
      category: cat,
      products: this.allProducts().filter(p => p.categorySlug === cat.slug)
    })).filter(sec => sec.products.length > 0);
  });

  selectCategory(slug: string): void {
    this.activeCategorySlug.set(slug);
    if (slug) {
      this.router.navigate(['/menu', slug]);
    } else {
      this.router.navigate(['/menu']);
    }
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.sortBy = 'default';
    this.selectCategory('');
  }

  onQuickAdd(product: Product): void {
    // Handled internally by ProductCardComponent for exact selected size
  }
}
