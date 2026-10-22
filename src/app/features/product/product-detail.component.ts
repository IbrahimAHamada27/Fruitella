import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';
import { Product, ProductAddon, ProductSizeOption } from '../../core/models/product.model';
import { BlendType, SweetenerType, SugarLevel, IceLevel, FRUITELLA_ICE_CREAM_FLAVORS, IceCreamCustomization } from '../../core/models/cart.model';
import { PriceDisplayComponent } from '../../shared/components/price-display/price-display.component';
import { QuantitySelectorComponent } from '../../shared/components/quantity-selector/quantity-selector.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { CategoryInformationComponent } from '../../shared/components/category-information/category-information.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    RouterLink, 
    FormsModule, 
    QuantitySelectorComponent, 
    ProductCardComponent, 
    EmptyStateComponent,
    CategoryInformationComponent
  ],
  template: `
    @if (product(); as prod) {
      <div class="product-detail-page container">
        <!-- Breadcrumbs Navigation -->
        <nav class="breadcrumb-nav" aria-label="مسار التصفح">
          <a routerLink="/">الرئيسية</a>
          <i class="fa-solid fa-chevron-left sep"></i>
          <a routerLink="/menu">المنيو</a>
          <i class="fa-solid fa-chevron-left sep"></i>
          <a [routerLink]="['/menu', prod.categorySlug]">{{ prod.categoryNameAr }}</a>
          <i class="fa-solid fa-chevron-left sep"></i>
          <span class="active-crumb">{{ prod.nameAr }}</span>
        </nav>

        <!-- Main Product Layout Grid -->
        <div class="product-layout">
          <!-- Column 1: Product Media Gallery -->
          <div class="product-gallery">
            <div class="main-image-frame">
              <img 
                [src]="activeImage() || prod.image" 
                [alt]="prod.nameAr" 
                (error)="onImageError($event)"
                class="main-image" />
            </div>

            <!-- Thumbnail Gallery Strip -->
            <div class="gallery-thumbs-row">
              <button 
                type="button" 
                class="gallery-thumb-btn" 
                [class.active]="(activeImage() || prod.image) === prod.image"
                (click)="activeImage.set(prod.image)"
                aria-label="عرض صورة المشروب">
                <img [src]="prod.image" [alt]="prod.nameAr" (error)="onImageError($event)" />
                <span class="thumb-label">المشروب</span>
              </button>
              <button 
                type="button" 
                class="gallery-thumb-btn" 
                [class.active]="activeImage() === '/images/brand/store-counter-fruits.jpg'"
                (click)="activeImage.set('/images/brand/store-counter-fruits.jpg')"
                aria-label="عرض بار الفواكه بالفرع">
                <img src="/images/brand/store-counter-fruits.jpg" alt="بار الفواكه بالفرع" />
                <span class="thumb-label">بار الفواكه</span>
              </button>
              <button 
                type="button" 
                class="gallery-thumb-btn" 
                [class.active]="activeImage() === '/images/brand/storefront-night.jpg'"
                (click)="activeImage.set('/images/brand/storefront-night.jpg')"
                aria-label="عرض فرع حياة تاون">
                <img src="/images/brand/storefront-night.jpg" alt="فرع حياة تاون" />
                <span class="thumb-label">فرع العبور</span>
              </button>
            </div>

            <!-- Authentic Branch Highlight Info -->
            <div class="branch-quality-card">
              <div class="bqc-icon"><i class="fa-solid fa-leaf"></i></div>
              <div class="bqc-text">
                <strong>عصير طبيعي 100% طازج يومياً</strong>
                <span>يُحضر فورياً عند طلبك داخل فرع فروتيلا بمول حياة تاون بالعبور</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Configuration & Interactive Customizations Form -->
          <div class="product-config-panel">
            <!-- Header Info -->
            <div class="prod-header-box">
              <div class="category-meta-row">
                <span class="cat-pill">{{ prod.categoryNameAr }}</span>
                <button type="button" class="prod-share-btn" (click)="shareProduct(prod)" title="مشاركة رابط المشروب وصورته">
                  <i class="fa-solid fa-share-nodes"></i>
                  <span>مشاركة الرابط</span>
                </button>
              </div>

              <h1 class="prod-title">{{ prod.nameAr }}</h1>
              @if (prod.nameEn) {
                <p class="prod-title-en">{{ prod.nameEn }}</p>
              }

              <!-- الجملة التعريفية للمشروب (High Visibility Callout) -->
              <div class="description-card">
                <i class="fa-solid fa-quote-right quote-icon"></i>
                <p class="prod-description">{{ prod.descriptionAr }}</p>
              </div>

              @if (prod.ingredientsAr && prod.ingredientsAr.length > 0) {
                <div class="ingredients-box">
                  <span class="box-title"><i class="fa-solid fa-seedling"></i> المكونات الأساسية:</span>
                  <div class="tags-cluster">
                    @for (ing of prod.ingredientsAr; track ing) {
                      <span class="ingredient-pill">{{ ing }}</span>
                    }
                  </div>
                </div>
              }
            </div>

            <!-- 1. Sizes Selection (الأحجام والأسعار) -->
            <div class="config-block sizes-block">
              <div class="block-header">
                <span class="block-title">
                  <i class="fa-solid fa-glass-water"></i> اختر الحجم المطلوب:
                </span>
                <span class="selected-size-indicator">{{ selectedSize()?.nameAr }} • {{ selectedSize()?.price }} ج.م</span>
              </div>

              <div class="sizes-segmented-group">
                @for (size of prod.sizes; track size.id) {
                  <button 
                    type="button" 
                    class="size-pill-btn" 
                    [class.selected]="selectedSize()?.id === size.id"
                    (click)="selectSize(size)">
                    <div class="size-pill-main">
                      <span class="size-name">{{ size.nameAr }}</span>
                      <span class="size-price">{{ size.price }} ج.م</span>
                    </div>
                    @if (selectedSize()?.id === size.id) {
                      <i class="fa-solid fa-circle-check size-check-icon"></i>
                    }
                  </button>
                }
              </div>
            </div>

            <!-- 2. "تخصيص أطعمة ونكهات الآيس كريم" في عالم الآيس كريم -->
            @if (isIceCreamProduct()) {
              <div class="config-block ice-cream-customization-card animate-fade-in">
                <div class="ice-card-header">
                  <div class="ich-title">
                    <i class="fa-solid fa-ice-cream"></i>
                    <div>
                      <h3>اختر أطعمة ونكهات الآيس كريم *</h3>
                      <span class="ich-badge">عالم الآيس كريم — حدد حتى {{ maxIceCreamFlavors() }} أطعمة</span>
                    </div>
                  </div>
                  <div class="ich-counter" [class.complete]="selectedIceCreamFlavors().length === maxIceCreamFlavors()">
                    <span>{{ selectedIceCreamFlavors().length }} / {{ maxIceCreamFlavors() }}</span>
                    <small>أطعمة محددة</small>
                  </div>
                </div>

                <!-- Selected Flavors Preview Tags -->
                @if (selectedIceCreamFlavors().length > 0) {
                  <div class="selected-flavors-bar">
                    <span class="sfb-label">الطعوم المختارة:</span>
                    <div class="sfb-tags">
                      @for (flv of selectedIceCreamFlavors(); track flv) {
                        <span class="flavor-chosen-tag">
                          <i class="fa-solid fa-check"></i> {{ flv }}
                          <button type="button" (click)="toggleIceCreamFlavor(flv)" title="إزالة">×</button>
                        </span>
                      }
                    </div>
                  </div>
                } @else {
                  <div class="no-flavors-warning">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>يرجى اختيار نكهة واحدة على الأقل من القائمة (مانجو، شوكولاتة، فانيليا...)</span>
                  </div>
                }

                <!-- Flavors Grid -->
                <div class="flavors-selection-grid">
                  @for (flv of availableIceCreamFlavors; track flv.id) {
                    <button 
                      type="button" 
                      class="flavor-pick-btn" 
                      [class.active]="isFlavorSelected(flv.nameAr)"
                      (click)="toggleIceCreamFlavor(flv.nameAr)">
                      <span class="flv-icon">{{ flv.icon }}</span>
                      <div class="flv-info">
                        <span class="flv-name">{{ flv.nameAr }}</span>
                        <span class="flv-desc">{{ flv.desc }}</span>
                      </div>
                      <span class="flv-status-badge">
                        @if (isFlavorSelected(flv.nameAr)) {
                          <i class="fa-solid fa-circle-check"></i>
                        } @else {
                          <i class="fa-regular fa-circle"></i>
                        }
                      </span>
                    </button>
                  }
                </div>

                <!-- Serving Style (كاس أو بسكوتة وافل) -->
                <div class="ice-sub-option-row">
                  <span class="iso-title"><i class="fa-solid fa-cookie-bite"></i> طريقة التقديم المفضلة:</span>
                  <div class="iso-pills">
                    <button 
                      type="button" 
                      class="iso-pill-btn" 
                      [class.active]="selectedServingType() === 'كاس كرتون فاخر مع معلقة'"
                      (click)="selectedServingType.set('كاس كرتون فاخر مع معلقة')">
                      <i class="fa-solid fa-bowl-food"></i> كاس كرتون مع معلقة
                    </button>
                    <button 
                      type="button" 
                      class="iso-pill-btn" 
                      [class.active]="selectedServingType() === 'بسكوتة وافل مقرمشة طازجة'"
                      (click)="selectedServingType.set('بسكوتة وافل مقرمشة طازجة')">
                      <i class="fa-solid fa-ice-cream"></i> بسكوتة وافل مقرمشة 🍦
                    </button>
                    <button 
                      type="button" 
                      class="iso-pill-btn" 
                      [class.active]="selectedServingType() === 'علبة تيك أواي محكمة الغلق'"
                      (click)="selectedServingType.set('علبة تيك أواي محكمة الغلق')">
                      <i class="fa-solid fa-box-archive"></i> علبة تيك أواي مغلقة
                    </button>
                  </div>
                </div>

                <!-- Optional Sauce Drizzle -->
                <div class="ice-sub-option-row">
                  <span class="iso-title"><i class="fa-solid fa-wand-magic-sparkles"></i> صوص تزيين إضافي (مجاناً):</span>
                  <div class="iso-pills">
                    @for (sc of ['بدون صوص إضافي', 'صوص شوكولاتة نوتيلا', 'صوص لوتس مكرمل', 'صوص كراميل ذهبي', 'صوص فراولة بيور']; track sc) {
                      <button 
                        type="button" 
                        class="iso-pill-btn" 
                        [class.active]="selectedIceCreamSauce() === sc"
                        (click)="selectedIceCreamSauce.set(sc)">
                        {{ sc }}
                      </button>
                    }
                  </div>
                </div>

                <!-- Special Notes for Ice cream -->
                <div class="ice-sub-option-row">
                  <span class="iso-title"><i class="fa-solid fa-pen-to-square"></i> ملاحظات خاصة لتحضير الآيس كريم:</span>
                  <textarea 
                    [(ngModel)]="specialInstructions"
                    rows="2"
                    placeholder="مثال: وضع البسكوتة جانباً، صوص زيادة، مكسرات على جنب..."
                    class="special-notes-textarea"></textarea>
                </div>
              </div>
            } @else {
              <!-- 2. "خانة التعديلات كـ فورم تفاعلي" (Interactive Customizations Form Accordion) -->
              <div class="config-block customizations-form-card">
                <div class="customizations-form-header">
                  <div class="cfh-title">
                    <i class="fa-solid fa-sliders"></i>
                    <h3>تعديلات وتخصيص الكوب</h3>
                  </div>
                  <p class="cfh-hint">اضغط على أي خانة لتعديل خيارات التحضير وفق ذوقك</p>
                </div>

              <!-- Section A: Sweetener & Sugar Level -->
              <div class="form-accordion-section" [class.is-open]="isSectionOpen('sweetener')">
                <button 
                  type="button" 
                  class="accordion-trigger-btn" 
                  (click)="toggleSection('sweetener')"
                  [attr.aria-expanded]="isSectionOpen('sweetener')">
                  <div class="trigger-label">
                    <span class="section-icon-box"><i class="fa-solid fa-jar"></i></span>
                    <div class="trigger-text">
                      <span class="st-name">التحلية ونوع السكر</span>
                      <span class="st-summary">{{ sweetenerSummary() }}</span>
                    </div>
                  </div>
                  <div class="trigger-action">
                    <span class="edit-btn-pill">
                      {{ isSectionOpen('sweetener') ? 'إغلاق' : 'تعديل' }}
                      <i class="fa-solid fa-chevron-down chevron-icon"></i>
                    </span>
                  </div>
                </button>

                @if (isSectionOpen('sweetener')) {
                  <div class="accordion-content-panel">
                    <span class="content-sub-label">اختر نوع التحلية:</span>
                    <div class="options-pills-row">
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedSweetener() === 'white_sugar'"
                        (click)="selectedSweetener.set('white_sugar')">
                        <span class="op-title">سكر أبيض</span>
                        <span class="op-sub">التقليدي</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedSweetener() === 'honey'"
                        (click)="selectedSweetener.set('honey')">
                        <span class="op-title">عسل نحل طبيعي</span>
                        <span class="op-sub extra-fee">+10 ج.م</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedSweetener() === 'stevia'"
                        (click)="selectedSweetener.set('stevia')">
                        <span class="op-title">سكر ستيفيا</span>
                        <span class="op-sub">خالي السعرات</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedSweetener() === 'none'"
                        (click)="onSelectNoSweetener()">
                        <span class="op-title">بدون سكر</span>
                        <span class="op-sub">فريش بيور 100%</span>
                      </button>
                    </div>

                    @if (selectedSweetener() !== 'none') {
                      <div class="sub-sugar-level-box">
                        <span class="content-sub-label">درجة التحلية:</span>
                        <div class="sugar-degrees-row">
                          <button 
                            type="button" 
                            class="degree-btn" 
                            [class.active]="selectedSugarLevel() === 'light'"
                            (click)="selectedSugarLevel.set('light')">
                            خفيف
                          </button>
                          <button 
                            type="button" 
                            class="degree-btn" 
                            [class.active]="selectedSugarLevel() === 'regular'"
                            (click)="selectedSugarLevel.set('regular')">
                            مضبوط (المعتاد)
                          </button>
                          <button 
                            type="button" 
                            class="degree-btn" 
                            [class.active]="selectedSugarLevel() === 'extra'"
                            (click)="selectedSugarLevel.set('extra')">
                            زيادة
                          </button>
                        </div>
                      </div>
                    }
                  </div>
                }
              </div>

              <!-- Section B: Ice Level -->
              <div class="form-accordion-section" [class.is-open]="isSectionOpen('ice')">
                <button 
                  type="button" 
                  class="accordion-trigger-btn" 
                  (click)="toggleSection('ice')"
                  [attr.aria-expanded]="isSectionOpen('ice')">
                  <div class="trigger-label">
                    <span class="section-icon-box"><i class="fa-solid fa-snowflake"></i></span>
                    <div class="trigger-text">
                      <span class="st-name">درجة البرودة والثلج</span>
                      <span class="st-summary">{{ iceSummary() }}</span>
                    </div>
                  </div>
                  <div class="trigger-action">
                    <span class="edit-btn-pill">
                      {{ isSectionOpen('ice') ? 'إغلاق' : 'تعديل' }}
                      <i class="fa-solid fa-chevron-down chevron-icon"></i>
                    </span>
                  </div>
                </button>

                @if (isSectionOpen('ice')) {
                  <div class="accordion-content-panel">
                    <span class="content-sub-label">اختر كمية الثلج:</span>
                    <div class="options-pills-row">
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedIceLevel() === 'regular'"
                        (click)="selectedIceLevel.set('regular')">
                        <span class="op-title">مثلج طبيعي</span>
                        <span class="op-sub">الانتعاش المعتاد</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedIceLevel() === 'light'"
                        (click)="selectedIceLevel.set('light')">
                        <span class="op-title">ثلج خفيف</span>
                        <span class="op-sub">برودة معتدلة</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedIceLevel() === 'none'"
                        (click)="selectedIceLevel.set('none')">
                        <span class="op-title">بدون ثلج</span>
                        <span class="op-sub">عصير مركز فقط</span>
                      </button>
                    </div>
                  </div>
                }
              </div>

              <!-- Section C: Blend & Texture -->
              <div class="form-accordion-section" [class.is-open]="isSectionOpen('blend')">
                <button 
                  type="button" 
                  class="accordion-trigger-btn" 
                  (click)="toggleSection('blend')"
                  [attr.aria-expanded]="isSectionOpen('blend')">
                  <div class="trigger-label">
                    <span class="section-icon-box"><i class="fa-solid fa-blender"></i></span>
                    <div class="trigger-text">
                      <span class="st-name">طريقة الخفق والقوام</span>
                      <span class="st-summary">{{ blendSummary() }}</span>
                    </div>
                  </div>
                  <div class="trigger-action">
                    <span class="edit-btn-pill">
                      {{ isSectionOpen('blend') ? 'إغلاق' : 'تعديل' }}
                      <i class="fa-solid fa-chevron-down chevron-icon"></i>
                    </span>
                  </div>
                </button>

                @if (isSectionOpen('blend')) {
                  <div class="accordion-content-panel">
                    <span class="content-sub-label">اختر قوام المشروب المطلوب:</span>
                    <div class="options-pills-row">
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedBlend() === 'full'"
                        (click)="selectedBlend.set('full')">
                        <span class="op-title">ضرب كامل</span>
                        <span class="op-sub">بيوريه ناعم وسلس</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedBlend() === 'half'"
                        (click)="selectedBlend.set('half')">
                        <span class="op-title">نص ضربة</span>
                        <span class="op-sub">قطع فواكه ملموسة</span>
                      </button>
                      <button 
                        type="button" 
                        class="option-pill" 
                        [class.active]="selectedBlend() === 'froth'"
                        (click)="selectedBlend.set('froth')">
                        <span class="op-title">وش ضربة</span>
                        <span class="op-sub">رغوة غنية وبيوريه</span>
                      </button>
                    </div>
                  </div>
                }
              </div>

              <!-- Section D: Optional Add-ons -->
              @if (prod.availableAddons && prod.availableAddons.length > 0) {
                <div class="form-accordion-section" [class.is-open]="isSectionOpen('addons')">
                  <button 
                    type="button" 
                    class="accordion-trigger-btn" 
                    (click)="toggleSection('addons')"
                    [attr.aria-expanded]="isSectionOpen('addons')">
                    <div class="trigger-label">
                      <span class="section-icon-box"><i class="fa-solid fa-circle-plus"></i></span>
                      <div class="trigger-text">
                        <span class="st-name">إضافات اختيارية (Add-ons)</span>
                        <span class="st-summary">{{ addonsSummary() }}</span>
                      </div>
                    </div>
                    <div class="trigger-action">
                      <span class="edit-btn-pill">
                        {{ isSectionOpen('addons') ? 'إغلاق' : 'تعديل' }}
                        <i class="fa-solid fa-chevron-down chevron-icon"></i>
                      </span>
                    </div>
                  </button>

                  @if (isSectionOpen('addons')) {
                    <div class="accordion-content-panel">
                      <span class="content-sub-label">حدد الإضافات المفضلة للكوب:</span>
                      <div class="addons-list-grid">
                        @for (addon of prod.availableAddons; track addon.id) {
                          <label class="addon-checkbox-card" [class.checked]="isAddonSelected(addon)">
                            <input 
                              type="checkbox" 
                              [checked]="isAddonSelected(addon)"
                              (change)="toggleAddon(addon)"
                              class="addon-native-check" />
                            <span class="custom-checkbox-marker">
                              <i class="fa-solid fa-check"></i>
                            </span>
                            <span class="addon-title-txt">{{ addon.nameAr }}</span>
                            <span class="addon-extra-badge">+{{ addon.price }} ج.م</span>
                          </label>
                        }
                      </div>
                    </div>
                  }
                </div>
              }

              <!-- Section E: Special Instructions / Barista Notes -->
              <div class="form-accordion-section" [class.is-open]="isSectionOpen('notes')">
                <button 
                  type="button" 
                  class="accordion-trigger-btn" 
                  (click)="toggleSection('notes')"
                  [attr.aria-expanded]="isSectionOpen('notes')">
                  <div class="trigger-label">
                    <span class="section-icon-box"><i class="fa-solid fa-pen-to-square"></i></span>
                    <div class="trigger-text">
                      <span class="st-name">ملاحظات خاصة للتحضير</span>
                      <span class="st-summary">{{ notesSummary() }}</span>
                    </div>
                  </div>
                  <div class="trigger-action">
                    <span class="edit-btn-pill">
                      {{ isSectionOpen('notes') ? 'إغلاق' : 'تعديل' }}
                      <i class="fa-solid fa-chevron-down chevron-icon"></i>
                    </span>
                  </div>
                </button>

                @if (isSectionOpen('notes')) {
                  <div class="accordion-content-panel">
                    <span class="content-sub-label">اكتب أي تعليمات خاصة للباريستا في الفرع:</span>
                    <textarea 
                      [(ngModel)]="specialInstructions"
                      rows="3"
                      placeholder="مثال: وضع المكسرات جانباً، زيادة قطع الفواكه، تغليف سفر محكم..."
                      class="special-notes-textarea"></textarea>
                  </div>
                }
              </div>
            </div>
          }

            <!-- 3. Purchase Action Bar (Sticky, Tactile & High Contrast) -->
            <div class="sticky-purchase-bar">
              <div class="purchase-left-box">
                <div class="quantity-controller">
                  <span class="qty-caption">الكمية:</span>
                  <app-quantity-selector 
                    [quantity]="quantity()" 
                    (quantityChange)="quantity.set($event)">
                  </app-quantity-selector>
                </div>

                <div class="total-summary-box">
                  <span class="total-caption">الإجمالي المطلوب:</span>
                  <div class="total-digits-row">
                    <span class="amount-number">{{ currentTotal() }}</span>
                    <span class="currency-label">ج.م</span>
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                class="btn-primary-add-cart" 
                (click)="addToCart()"
                aria-label="إضافة للطلب">
                <i class="fa-solid fa-cart-plus"></i>
                <span>أضف للطلب • {{ currentTotal() }} ج.م</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Category Information Section -->
        @if (categoryInfo(); as cat) {
          <app-category-information
            [information]="cat.informationAr || []"
            [categoryName]="cat.nameAr"
            [themeColor]="cat.themeColor || ''">
          </app-category-information>
        }

        <!-- Related Products Section -->
        @if (relatedProducts().length > 0) {
          <section class="related-section">
            <h2 class="related-title">أصناف أخرى من قسم {{ prod.categoryNameAr }} قد تعجبك</h2>
            <div class="related-grid products-grid">
              @for (related of relatedProducts(); track related.id) {
                <app-product-card 
                  [product]="related">
                </app-product-card>
              }
            </div>
          </section>
        }
      </div>
    } @else {
      <div class="container section-padding">
        <app-empty-state 
          icon="fa-solid fa-lemon"
          title="عفواً، الصنف غير متوفر"
          description="لم نتمكن من إيجاد هذا المنتج، قد يكون تم تحديث الرابط أو إيقاف الصنف مؤقتاً."
          actionUrl="/menu"
          actionLabel="العودة إلى المنيو">
        </app-empty-state>
      </div>
    }
  `,
  styles: [`
    .product-detail-page {
      padding-block: 1.5rem 3.5rem;
    }

    /* Breadcrumbs */
    .breadcrumb-nav {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.84rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }
    .breadcrumb-nav a {
      color: var(--fruitella-green-700);
      font-weight: 600;
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    .breadcrumb-nav a:hover {
      color: var(--fruitella-lime);
      text-decoration: underline;
    }
    .sep {
      font-size: 0.68rem;
      opacity: 0.45;
    }
    .active-crumb {
      color: var(--text-primary);
      font-weight: 700;
    }

    /* Layout Grid */
    .product-layout {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      gap: 2.5rem;
      align-items: start;
    }

    /* Column 1: Gallery */
    .product-gallery {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: sticky;
      top: calc(var(--header-height, 56px) + 16px);
    }
    .main-image-frame {
      width: 100%;
      aspect-ratio: 4 / 3;
      border-radius: var(--radius-lg, 20px);
      overflow: hidden;
      background: #f4f7f4;
      border: 1px solid rgba(13, 41, 20, 0.1);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-md);
      position: relative;
    }
    .main-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }
    .main-image-frame:hover .main-image {
      transform: scale(1.03);
    }

    .gallery-thumbs-row {
      display: flex;
      gap: 0.65rem;
    }
    .gallery-thumb-btn {
      flex: 1;
      height: 72px;
      border-radius: var(--radius-md, 14px);
      overflow: hidden;
      border: 2px solid var(--border-subtle);
      background: #ffffff;
      cursor: pointer;
      padding: 0;
      position: relative;
      transition: all var(--transition-fast);
      box-shadow: var(--shadow-xs);
    }
    .gallery-thumb-btn img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .gallery-thumb-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
    }
    .gallery-thumb-btn.active {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px var(--fruitella-lime-bg);
    }
    .thumb-label {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(13, 41, 20, 0.85);
      color: #ffffff;
      font-size: 0.65rem;
      font-weight: 700;
      padding: 0.15rem 0.25rem;
      text-align: center;
    }

    .branch-quality-card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: #f7faf7;
      border: 1px dashed rgba(27, 94, 32, 0.25);
      border-radius: var(--radius-md, 14px);
      padding: 0.75rem 1rem;
    }
    .bqc-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      flex-shrink: 0;
    }
    .bqc-text {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .bqc-text strong {
      font-size: 0.82rem;
      color: var(--fruitella-green-900);
    }
    .bqc-text span {
      font-size: 0.74rem;
      color: var(--text-secondary);
      line-height: 1.35;
    }

    /* Column 2: Configuration & Details */
    .product-config-panel {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    /* Header Box */
    .prod-header-box {
      background: var(--fruitella-surface);
      border: 1px solid rgba(13, 41, 20, 0.08);
      border-radius: var(--radius-lg, 20px);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-sm);
    }
    .category-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.65rem;
    }
    .prod-share-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-full);
      background: #ffffff;
      border: 1px solid rgba(13, 41, 20, 0.15);
      color: var(--fruitella-green-800);
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      transition: all var(--transition-fast);
    }
    .prod-share-btn:hover {
      background: var(--fruitella-green-800);
      color: #ffffff;
      border-color: var(--fruitella-green-800);
      transform: translateY(-1px);
      box-shadow: 0 3px 8px rgba(13, 41, 20, 0.15);
    }
    .prod-share-btn:active {
      transform: scale(0.97);
    }
    .cat-pill {
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-900);
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(118, 164, 34, 0.3);
    }
    .prod-title {
      font-size: 1.95rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      line-height: 1.2;
      margin: 0;
    }
    .prod-title-en {
      font-size: 0.92rem;
      color: var(--text-muted);
      direction: ltr;
      text-align: right;
      margin-top: -0.35rem;
    }

    /* الجملة التعريفية للمشروب */
    .description-card {
      position: relative;
      background: #f9fbf9;
      border-right: 4px solid var(--fruitella-lime);
      border-radius: 0 10px 10px 0;
      padding: 0.75rem 1rem 0.75rem 0.85rem;
      margin-top: 0.25rem;
    }
    .quote-icon {
      position: absolute;
      left: 12px;
      top: 10px;
      font-size: 1.1rem;
      color: rgba(118, 164, 34, 0.2);
    }
    .prod-description {
      font-size: 0.94rem;
      line-height: 1.6;
      color: #2c4232;
      font-weight: 500;
      margin: 0;
    }

    .ingredients-box {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding-top: 0.5rem;
      border-top: 1px dashed var(--border-subtle);
    }
    .box-title {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .box-title i {
      color: var(--fruitella-lime);
    }
    .tags-cluster {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
    }
    .ingredient-pill {
      background: #f1f5f2;
      color: var(--fruitella-green-800);
      font-size: 0.76rem;
      font-weight: 600;
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-full);
      border: 1px solid rgba(27, 94, 32, 0.08);
    }

    /* Config Blocks Common */
    .config-block {
      background: var(--fruitella-surface);
      border: 1px solid rgba(13, 41, 20, 0.08);
      border-radius: var(--radius-lg, 20px);
      padding: 1.25rem 1.4rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-sm);
    }

    /* 1. Sizes Segmented Group */
    .block-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.85rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .block-title {
      font-size: 0.96rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }
    .block-title i {
      color: var(--fruitella-lime);
    }
    .selected-size-indicator {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      background: var(--fruitella-lime-bg);
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
      font-variant-numeric: tabular-nums;
    }
    .sizes-segmented-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 0.65rem;
    }
    .size-pill-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.75rem 0.95rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md, 14px);
      background: #ffffff;
      cursor: pointer;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
      user-select: none;
    }
    .size-pill-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-sm);
    }
    .size-pill-btn:active {
      transform: scale(0.97) !important;
    }
    .size-pill-btn.selected {
      border-color: var(--fruitella-green-700);
      background: linear-gradient(135deg, #f2f8f2, #e7f3e8);
      box-shadow: 0 4px 12px rgba(29, 77, 41, 0.14);
    }
    .size-pill-main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.15rem;
    }
    .size-name {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .size-price {
      font-size: 0.98rem;
      font-weight: 800;
      color: var(--fruitella-green-700);
      font-variant-numeric: tabular-nums;
    }
    .size-check-icon {
      color: var(--fruitella-green-700);
      font-size: 1.05rem;
    }

    /* 2. Ice Cream Customization Card */
    .ice-cream-customization-card {
      background: linear-gradient(180deg, #ffffff 0%, #fbfdfb 100%);
      border: 1.5px solid rgba(27, 94, 32, 0.18);
      border-radius: var(--radius-lg, 20px);
      padding: 1.4rem;
      box-shadow: 0 4px 20px rgba(13, 41, 20, 0.05);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .ice-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-bottom: 0.9rem;
      border-bottom: 1.5px solid rgba(13, 41, 20, 0.08);
    }
    .ich-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .ich-title i {
      font-size: 1.6rem;
      color: #e11d48;
      background: #ffe4e6;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ich-title h3 {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0 0 0.2rem 0;
    }
    .ich-badge {
      font-size: 0.76rem;
      color: var(--text-muted);
      font-weight: 600;
    }
    .ich-counter {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f1f5f9;
      padding: 0.35rem 0.75rem;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      min-width: 65px;
    }
    .ich-counter span {
      font-size: 1.1rem;
      font-weight: 900;
      color: var(--fruitella-green-800);
      line-height: 1;
    }
    .ich-counter small {
      font-size: 0.65rem;
      color: var(--text-muted);
      margin-top: 2px;
    }
    .ich-counter.complete {
      background: #ecfdf5;
      border-color: #a7f3d0;
    }
    .ich-counter.complete span {
      color: #059669;
    }

    /* Selected Flavors Bar */
    .selected-flavors-bar {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      flex-wrap: wrap;
      background: #f0fdf4;
      border: 1px dashed #86efac;
      padding: 0.65rem 0.85rem;
      border-radius: 12px;
    }
    .sfb-label {
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
    }
    .sfb-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .flavor-chosen-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: var(--fruitella-green-800);
      color: #ffffff;
      padding: 0.25rem 0.65rem;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      box-shadow: 0 2px 6px rgba(27, 94, 32, 0.2);
    }
    .flavor-chosen-tag button {
      background: rgba(255, 255, 255, 0.25);
      border: none;
      color: #ffffff;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      cursor: pointer;
      line-height: 1;
    }
    .flavor-chosen-tag button:hover {
      background: rgba(255, 255, 255, 0.4);
    }
    .no-flavors-warning {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #fffbeb;
      border: 1px solid #fde68a;
      padding: 0.65rem 0.85rem;
      border-radius: 12px;
      color: #b45309;
      font-size: 0.8rem;
      font-weight: 700;
    }

    /* Flavors Selection Grid */
    .flavors-selection-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
      gap: 0.65rem;
    }
    .flavor-pick-btn {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.65rem 0.75rem;
      border-radius: 14px;
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      cursor: pointer;
      text-align: right;
      transition: all var(--transition-fast);
      position: relative;
    }
    .flavor-pick-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    }
    .flavor-pick-btn.active {
      background: #f0fdf4;
      border-color: var(--fruitella-green-700);
      box-shadow: 0 3px 10px rgba(27, 94, 32, 0.12);
    }
    .flv-icon {
      font-size: 1.45rem;
      flex-shrink: 0;
    }
    .flv-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
    }
    .flv-name {
      font-size: 0.84rem;
      font-weight: 800;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .flavor-pick-btn.active .flv-name {
      color: var(--fruitella-green-900);
    }
    .flv-desc {
      font-size: 0.67rem;
      color: var(--text-muted);
      line-height: 1.25;
      margin-top: 1px;
    }
    .flv-status-badge {
      font-size: 0.95rem;
      color: #94a3b8;
      flex-shrink: 0;
    }
    .flavor-pick-btn.active .flv-status-badge {
      color: var(--fruitella-green-700);
    }

    /* Sub options: serving style & sauces */
    .ice-sub-option-row {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(13, 41, 20, 0.08);
    }
    .iso-title {
      font-size: 0.84rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .iso-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .iso-pill-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.45rem 0.85rem;
      border-radius: 999px;
      background: #ffffff;
      border: 1.5px solid #e2e8f0;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .iso-pill-btn:hover {
      border-color: var(--fruitella-lime);
      color: var(--fruitella-green-900);
    }
    .iso-pill-btn.active {
      background: var(--fruitella-green-800);
      border-color: var(--fruitella-green-800);
      color: #ffffff;
      box-shadow: 0 2px 8px rgba(27, 94, 32, 0.2);
    }

    /* 2. Customizations Form Card (Accordion Style) */
    .customizations-form-card {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .customizations-form-header {
      padding-bottom: 0.5rem;
      border-bottom: 1.5px solid var(--border-subtle);
    }
    .cfh-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .cfh-title i {
      color: var(--fruitella-lime);
      font-size: 1rem;
    }
    .cfh-title h3 {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .cfh-hint {
      font-size: 0.78rem;
      color: var(--text-muted);
      margin: 0.2rem 0 0 0;
    }

    /* Form Accordion Sections */
    .form-accordion-section {
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md, 14px);
      overflow: hidden;
      background: #fafbfa;
      transition: all var(--transition-fast);
    }
    .form-accordion-section.is-open {
      background: #ffffff;
      border-color: rgba(118, 164, 34, 0.45);
      box-shadow: 0 4px 14px rgba(13, 41, 20, 0.05);
    }
    .accordion-trigger-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.85rem 1rem;
      background: transparent;
      border: none;
      cursor: pointer;
      text-align: right;
      transition: background var(--transition-fast);
      user-select: none;
    }
    .accordion-trigger-btn:hover {
      background: rgba(118, 164, 34, 0.05);
    }
    .trigger-label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex: 1;
      min-width: 0;
    }
    .section-icon-box {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .trigger-text {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      min-width: 0;
    }
    .st-name {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .st-summary {
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--fruitella-green-700);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .trigger-action {
      flex-shrink: 0;
    }
    .edit-btn-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      background: #ffffff;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-full);
      padding: 0.25rem 0.65rem;
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--fruitella-green-800);
      box-shadow: var(--shadow-xs);
      transition: all var(--transition-fast);
    }
    .form-accordion-section.is-open .edit-btn-pill {
      background: var(--fruitella-lime-bg);
      border-color: var(--fruitella-lime);
      color: var(--fruitella-green-900);
    }
    .chevron-icon {
      font-size: 0.68rem;
      transition: transform var(--transition-fast);
    }
    .form-accordion-section.is-open .chevron-icon {
      transform: rotate(180deg);
    }

    /* Accordion Content Panel */
    .accordion-content-panel {
      padding: 0.85rem 1rem 1.15rem 1rem;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      background: #fbfdfb;
      animation: fadeIn 0.2s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .content-sub-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }

    /* Options Pills Row */
    .options-pills-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
      gap: 0.5rem;
    }
    .option-pill {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.15rem;
      padding: 0.65rem 0.5rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md, 12px);
      background: #ffffff;
      cursor: pointer;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
      user-select: none;
    }
    .option-pill:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-1px);
    }
    .option-pill:active {
      transform: scale(0.96) !important;
    }
    .option-pill.active {
      border-color: var(--fruitella-green-700);
      background: var(--fruitella-lime-bg);
      box-shadow: 0 3px 10px rgba(29, 77, 41, 0.14);
    }
    .op-title {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      text-align: center;
    }
    .op-sub {
      font-size: 0.72rem;
      color: var(--text-muted);
      text-align: center;
    }
    .extra-fee {
      color: var(--fruitella-green-700);
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }

    /* Sugar Degrees */
    .sub-sugar-level-box {
      margin-top: 0.4rem;
      padding-top: 0.65rem;
      border-top: 1px dashed var(--border-subtle);
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .sugar-degrees-row {
      display: flex;
      gap: 0.45rem;
    }
    .degree-btn {
      flex: 1;
      padding: 0.45rem 0.5rem;
      border-radius: var(--radius-full);
      border: 1.5px solid var(--border-subtle);
      background: #ffffff;
      color: var(--fruitella-green-900);
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: all var(--transition-fast);
      text-align: center;
    }
    .degree-btn:hover {
      border-color: var(--fruitella-lime);
    }
    .degree-btn.active {
      border-color: var(--fruitella-green-700);
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      color: #ffffff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), var(--shadow-xs);
    }

    /* Addons Grid */
    .addons-list-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 0.5rem;
    }
    .addon-checkbox-card {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.6rem 0.75rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md, 12px);
      background: #ffffff;
      cursor: pointer;
      transition: all var(--transition-fast);
      user-select: none;
      box-shadow: var(--shadow-xs);
    }
    .addon-checkbox-card:hover {
      border-color: var(--fruitella-lime);
    }
    .addon-checkbox-card.checked {
      background: var(--fruitella-lime-bg);
      border-color: var(--fruitella-lime);
      box-shadow: 0 3px 8px rgba(118, 164, 34, 0.16);
    }
    .addon-native-check {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
    .custom-checkbox-marker {
      width: 18px;
      height: 18px;
      border-radius: 5px;
      border: 1.5px solid var(--border-subtle);
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.65rem;
      color: transparent;
      transition: all var(--transition-fast);
      flex-shrink: 0;
    }
    .addon-checkbox-card.checked .custom-checkbox-marker {
      background: var(--fruitella-green-700);
      border-color: var(--fruitella-green-700);
      color: #ffffff;
    }
    .addon-title-txt {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--fruitella-green-900);
      flex: 1;
    }
    .addon-extra-badge {
      font-size: 0.76rem;
      font-weight: 800;
      color: var(--fruitella-green-700);
      font-variant-numeric: tabular-nums;
    }

    /* Special Notes Textarea */
    .special-notes-textarea {
      width: 100%;
      border-radius: var(--radius-md, 12px);
      border: 1.5px solid var(--border-subtle);
      background: #ffffff;
      padding: 0.75rem 0.85rem;
      font-family: inherit;
      font-size: 0.85rem;
      outline: none;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      resize: vertical;
    }
    .special-notes-textarea:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(29, 77, 41, 0.15);
    }

    /* 3. Sticky Purchase Action Bar */
    .sticky-purchase-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1.5px solid rgba(27, 94, 32, 0.15);
      border-radius: var(--radius-lg, 20px);
      padding: 1rem 1.4rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 30px rgba(13, 41, 20, 0.08);
      position: sticky;
      bottom: 1rem;
      z-index: 100;
    }
    .purchase-left-box {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      flex-wrap: wrap;
    }
    .quantity-controller {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }
    .qty-caption {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .total-summary-box {
      display: flex;
      flex-direction: column;
    }
    .total-caption {
      font-size: 0.74rem;
      font-weight: 600;
      color: var(--text-muted);
    }
    .total-digits-row {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
    }
    .amount-number {
      font-size: 1.45rem;
      font-weight: 900;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
      line-height: 1;
    }
    .currency-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
    }
    .btn-primary-add-cart {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      padding: 0.85rem 1.85rem;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-900));
      color: #ffffff;
      border: none;
      font-size: 1rem;
      font-weight: 800;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 6px 18px rgba(29, 77, 41, 0.35);
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
    }
    .btn-primary-add-cart:hover {
      background: linear-gradient(135deg, var(--fruitella-lime), var(--fruitella-green-700));
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 8px 24px rgba(29, 77, 41, 0.45);
    }
    .btn-primary-add-cart:active {
      transform: scale(0.96) !important;
    }

    /* Related Products Section */
    .related-section {
      margin-top: 3.5rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border-subtle);
    }
    .related-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin-bottom: 1.5rem;
    }
    .related-grid {
      display: grid;
    }

    /* Responsive Breakpoints */
    @media (max-width: 992px) {
      .product-layout {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .product-gallery {
        position: static;
      }
      .sticky-purchase-bar {
        border-radius: var(--radius-md, 14px);
        padding: 0.85rem 1rem;
      }
    }

    @media (max-width: 640px) {
      .product-detail-page {
        padding-block: 0.75rem 2rem;
      }
      .breadcrumb-nav {
        font-size: 0.76rem;
        margin-bottom: 0.85rem;
      }
      .main-image-frame {
        border-radius: 16px;
      }
      .gallery-thumb-btn {
        height: 60px;
        border-radius: 10px;
      }
      .prod-header-box {
        padding: 1rem;
        border-radius: 16px;
      }
      .prod-title {
        font-size: 1.45rem;
      }
      .prod-title-en {
        font-size: 0.82rem;
      }
      .prod-description {
        font-size: 0.86rem;
      }
      .config-block {
        padding: 1rem;
        border-radius: 16px;
      }
      .sizes-segmented-group {
        grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
        gap: 0.45rem;
      }
      .size-pill-btn {
        padding: 0.6rem 0.65rem;
      }
      .size-name {
        font-size: 0.8rem;
      }
      .size-price {
        font-size: 0.88rem;
      }
      .options-pills-row {
        grid-template-columns: repeat(2, 1fr);
      }
      .addons-list-grid {
        grid-template-columns: 1fr;
      }
      .sticky-purchase-bar {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
        bottom: 0.5rem;
        padding: 0.75rem;
      }
      .purchase-left-box {
        justify-content: space-between;
        gap: 0.5rem;
      }
      .btn-primary-add-cart {
        width: 100%;
        padding: 0.85rem;
        font-size: 0.95rem;
      }
      .related-section {
        margin-top: 2rem;
        padding-top: 1.25rem;
      }
      .related-title {
        font-size: 1.15rem;
        margin-bottom: 1rem;
      }
    }
  `]
})
export class ProductDetailComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private toast = inject(ToastService);
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);

  readonly product = signal<Product | undefined>(undefined);
  readonly selectedSize = signal<ProductSizeOption | undefined>(undefined);
  readonly selectedAddons = signal<ProductAddon[]>([]);
  readonly quantity = signal<number>(1);
  readonly activeImage = signal<string>('');
  specialInstructions = '';

  // Ice cream customizations state
  readonly availableIceCreamFlavors = FRUITELLA_ICE_CREAM_FLAVORS;
  readonly selectedIceCreamFlavors = signal<string[]>(['مانجو فريش طبيعي']);
  readonly selectedServingType = signal<string>('كاس كرتون فاخر مع معلقة');
  readonly selectedIceCreamSauce = signal<string>('بدون صوص إضافي');

  readonly isIceCreamProduct = computed(() => {
    const prod = this.product();
    if (!prod) return false;
    return prod.categorySlug === 'ice-cream' || prod.slug.includes('ice-cream') || prod.nameAr.includes('آيس كريم') || prod.nameAr.includes('ايس كريم');
  });

  readonly maxIceCreamFlavors = computed(() => {
    const prod = this.product();
    if (!prod) return 2;
    if (prod.slug === 'ice-cream-1-scoop') return 1;
    if (prod.slug === 'ice-cream-2-scoops') return 2;
    if (prod.slug === 'ice-cream-3-scoops') return 3;
    if (prod.slug === 'fattet-ice-cream' || prod.slug === 'the-dinosaur-cup') return 4;
    return 3;
  });

  toggleIceCreamFlavor(flavorName: string): void {
    const current = this.selectedIceCreamFlavors();
    const max = this.maxIceCreamFlavors();
    
    if (current.includes(flavorName)) {
      if (current.length === 1) {
        this.toast.show('يجب اختيار نكهة واحدة على الأقل 🍨', 'info');
        return;
      }
      this.selectedIceCreamFlavors.set(current.filter(f => f !== flavorName));
    } else {
      if (current.length < max) {
        this.selectedIceCreamFlavors.set([...current, flavorName]);
      } else {
        if (max === 1) {
          this.selectedIceCreamFlavors.set([flavorName]);
        } else {
          this.toast.show(`يمكنك اختيار حتى ${max} أطعمة فقط لهذا الصنف 🍨`, 'info');
        }
      }
    }
  }

  isFlavorSelected(flavorName: string): boolean {
    return this.selectedIceCreamFlavors().includes(flavorName);
  }

  // Granular beverage customization signals
  readonly selectedBlend = signal<BlendType>('full');
  readonly selectedSweetener = signal<SweetenerType>('white_sugar');
  readonly selectedSugarLevel = signal<SugarLevel>('regular');
  readonly selectedIceLevel = signal<IceLevel>('regular');

  // Accordion form open states
  readonly openSections = signal<Record<string, boolean>>({
    sweetener: false,
    ice: false,
    blend: false,
    addons: false,
    notes: false
  });

  toggleSection(section: string): void {
    this.openSections.update(s => ({
      ...s,
      [section]: !s[section]
    }));
  }

  isSectionOpen(section: string): boolean {
    return !!this.openSections()[section];
  }

  // Live Summary Pills for closed state
  readonly sweetenerSummary = computed(() => {
    const sw = this.selectedSweetener();
    if (sw === 'none') return 'بدون سكر (فريش 100%)';
    const sugarMap: Record<SugarLevel, string> = {
      none: 'بدون سكر',
      zero: 'بدون سكر',
      light: 'سكر خفيف',
      regular: 'مضبوط',
      extra: 'زيادة'
    };
    const levelStr = sugarMap[this.selectedSugarLevel()];
    if (sw === 'honey') return `عسل نحل (+10 ج) • ${levelStr}`;
    if (sw === 'stevia') return `ستيفيا دايت • ${levelStr}`;
    return `سكر أبيض • ${levelStr}`;
  });

  readonly iceSummary = computed(() => {
    const ice = this.selectedIceLevel();
    if (ice === 'regular') return 'مثلج طبيعي';
    if (ice === 'light') return 'ثلج خفيف';
    return 'بدون ثلج';
  });

  readonly blendSummary = computed(() => {
    const blend = this.selectedBlend();
    if (blend === 'half') return 'نص ضربة (قطع فواكه)';
    if (blend === 'froth') return 'وش ضربة (رغوة وبيوريه)';
    return 'ضرب كامل (بيوريه ناعم)';
  });

  readonly addonsSummary = computed(() => {
    const count = this.selectedAddons().length;
    if (count === 0) return 'بدون إضافات';
    const totalExtra = this.selectedAddons().reduce((sum, a) => sum + a.price, 0);
    return `${count} إضافات (+${totalExtra} ج.م)`;
  });

  readonly notesSummary = computed(() => {
    if (!this.specialInstructions || !this.specialInstructions.trim()) {
      return 'لا توجد ملاحظات';
    }
    const txt = this.specialInstructions.trim();
    return txt.length > 18 ? txt.slice(0, 18) + '...' : txt;
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('productSlug');
      if (slug) {
        const prod = this.productService.getProductBySlug(slug);
        this.product.set(prod);
        if (prod) {
          this.seoService.setProductSeo(prod);
        }
        this.activeImage.set(prod?.image || '');
        if (prod && prod.sizes.length > 0) {
          this.selectedSize.set(prod.sizes[0]);
        }
        this.selectedAddons.set([]);
        this.quantity.set(1);
        this.specialInstructions = '';
        this.selectedBlend.set('full');
        this.selectedSweetener.set('white_sugar');
        this.selectedSugarLevel.set('regular');
        this.selectedIceLevel.set('regular');
        this.openSections.set({
          sweetener: false,
          ice: false,
          blend: false,
          addons: false,
          notes: false
        });
      }
    });
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = '/images/brand/fruitella-hero-banner.jpg';
  }

  onSelectNoSweetener(): void {
    this.selectedSweetener.set('none');
    this.selectedSugarLevel.set('none');
  }

  readonly currentUnitPrice = computed(() => {
    const size = this.selectedSize();
    const sizePrice = size ? size.price : (this.product()?.basePrice || 0);
    const addonsPrice = this.selectedAddons().reduce((sum, a) => sum + a.price, 0);
    const sweetenerExtra = this.selectedSweetener() === 'honey' ? 10 : 0;
    return sizePrice + addonsPrice + sweetenerExtra;
  });

  readonly currentTotal = computed(() => {
    return this.currentUnitPrice() * this.quantity();
  });

  readonly relatedProducts = computed(() => {
    const prod = this.product();
    if (!prod) return [];
    return this.productService.getRelatedProducts(prod.id, prod.categorySlug, 4);
  });

  readonly categoryInfo = computed(() => {
    const prod = this.product();
    if (!prod) return undefined;
    return this.productService.getCategoryBySlug(prod.categorySlug);
  });

  selectSize(size: ProductSizeOption): void {
    this.selectedSize.set(size);
  }

  isAddonSelected(addon: ProductAddon): boolean {
    return this.selectedAddons().some(a => a.id === addon.id);
  }

  toggleAddon(addon: ProductAddon): void {
    if (this.isAddonSelected(addon)) {
      this.selectedAddons.update(list => list.filter(a => a.id !== addon.id));
    } else {
      this.selectedAddons.update(list => [...list, addon]);
    }
  }

  addToCart(): void {
    const prod = this.product();
    const size = this.selectedSize();
    if (!prod || !size) return;

    if (this.isIceCreamProduct()) {
      if (this.selectedIceCreamFlavors().length === 0) {
        this.toast.show(`يرجى اختيار أطعمة الآيس كريم المفضلة (مانجو، شوكولاتة، فانيليا...) 🍨`, 'warning');
        return;
      }

      const iceCustom: IceCreamCustomization = {
        selectedFlavors: [...this.selectedIceCreamFlavors()],
        servingType: this.selectedServingType(),
        sauce: this.selectedIceCreamSauce() === 'بدون صوص إضافي' ? undefined : this.selectedIceCreamSauce()
      };

      this.cartService.addItem(
        prod,
        size,
        this.selectedAddons(),
        this.specialInstructions,
        this.quantity(),
        undefined,
        iceCustom
      );
      this.toast.show(`تمت إضافة "${prod.nameAr} (${size.nameAr})" بنكهات (${this.selectedIceCreamFlavors().join('، ')}) بنجاح! 🍨`, 'success');
      return;
    }

    this.cartService.addItem(
      prod,
      size,
      this.selectedAddons(),
      this.specialInstructions,
      this.quantity(),
      {
        blendType: this.selectedBlend(),
        sweetenerType: this.selectedSweetener(),
        sugarLevel: this.selectedSweetener() === 'none' ? 'none' : this.selectedSugarLevel(),
        iceLevel: this.selectedIceLevel()
      }
    );
    this.toast.show(`تمت إضافة "${prod.nameAr} (${size.nameAr})" إلى طلبك بنجاح 🥤`, 'success');
  }

  onQuickAddRelated(product: Product): void {
    const defaultSize = product.sizes[0];
    this.cartService.addItem(product, defaultSize);
    this.toast.show(`تمت إضافة "${product.nameAr}" إلى السلة 🥤`, 'success');
  }

  shareProduct(prod: Product): void {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/product/${prod.slug}` : `https://fruitella-seven.vercel.app/product/${prod.slug}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: `${prod.nameAr} | فروتيلا Fruitella`,
        text: prod.descriptionAr || `اطلب ${prod.nameAr} طازجاً من فروتيلا مول حياة تاون العبور`,
        url: url
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        this.toast.show(`تم نسخ رابط "${prod.nameAr}" بنجاح! جاهز للمشاركة 📋`, 'success');
      }).catch(() => {
        this.toast.show(`الرابط: ${url}`, 'info');
      });
    }
  }
}
