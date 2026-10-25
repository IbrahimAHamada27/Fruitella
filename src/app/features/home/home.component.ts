import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { ConfigService } from '../../core/services/config.service';
import { ToastService } from '../../core/services/toast.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { SeoService } from '../../core/services/seo.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, SectionHeadingComponent],
  template: `
    <!-- 1. Hero Section (Combined Just Juice It + Fruitella Brand) -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text-content">
          <div class="hero-badge animate-fade-in">
            <i class="fa-solid fa-seedling"></i>
            <span>فواكه طبيعية 100% • بدون سكر مضاف • بدون مواد حافظة</span>
          </div>

          <h1 class="hero-title animate-fade-in">
            فروتيلا.. <br />
            <span class="highlight-text">غيرنا مفهوم العصير</span>
          </h1>

          <p class="hero-description animate-fade-in">
            عاش يا انتعاش! استمتع بأفخم خلطات الأفوكادو الملكية الغنية بالمكسرات والعسل الجبلي، والعصائر الطبيعية المعصورة طازجة يومياً، مع أشهى أطباق الوافل البلجيكي والقشطوطة والحلويات في قلب مول حياة تاون — مدينة العبور.
          </p>

          <div class="hero-cta-group animate-fade-in">
            <a routerLink="/menu" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-basket-shopping"></i> اطلب دلوقتي
            </a>
            <a routerLink="/menu" class="btn btn-white btn-lg">
              <i class="fa-solid fa-book-open"></i> استعرض المنيو
            </a>
          </div>

          <!-- Trust Badges (Inspired by 365-day quality guarantee) -->
          <div class="hero-perks animate-fade-in">
            <div class="perk-item">
              <i class="fa-solid fa-bolt perk-icon"></i>
              <div>
                <strong>توصيل سريع</strong>
                <p>لكافة أحياء العبور</p>
              </div>
            </div>
            <div class="perk-item">
              <i class="fa-solid fa-leaf perk-icon"></i>
              <div>
                <strong>طبيعي 100%</strong>
                <p>فواكه فريش يومياً</p>
              </div>
            </div>
            <div class="perk-item">
              <i class="fa-solid fa-award perk-icon"></i>
              <div>
                <strong>جودة استثنائية</strong>
                <p>أعلى معايير الإتقان والنظافة</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Visual Showcase with Spotlight Drink Card (Just Juice It Style) -->
        <div class="hero-visual">
          <div class="hero-card-stack">
            <img 
              src="/images/brand/fruitella-hero-banner.jpg" 
              alt="عصائر فروتيلا الطبيعية المنعشة" 
              class="hero-main-img" />

            <!-- Featured Signature Card (Just Juice It Banner Spotlight Inspired) -->
            <div class="hero-spotlight-card">
              <div class="spotlight-thumb-wrap">
                <img 
                  src="/images/products/avocado-nuts-mango-pair.jpg" 
                  alt="أفوكادو عسل ومكسرات رويال" 
                  class="spotlight-thumb" />
                <span class="spotlight-tag">
                  <i class="fa-solid fa-crown"></i> خلطة رويال خاصة
                </span>
              </div>
              <div class="spotlight-info">
                <span class="spotlight-category">باور فروتيلا الملكي</span>
                <h3 class="spotlight-name">أفوكادو عسل ومكسرات رويال</h3>
                <p class="spotlight-desc">أفوكادو كريمي مع كاجو ولوز وبندق محمص وعسل جبلي طبيعي.</p>
                <div class="spotlight-price-row">
                  <div class="spotlight-prices">
                    <span class="current-price">140 ج.م</span>
                  </div>
                  <button 
                    type="button" 
                    class="btn-spotlight-add" 
                    (click)="addHeroSpotlightItem()"
                    title="أضف للسلة فوراً">
                    <i class="fa-solid fa-plus"></i> أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Horizontal Category Navigation Strip (Smoothie Paradise ss-cat-strip Inspired) -->
    <section class="category-strip-section" aria-label="أقسام المنيو السريعة">
      <div class="container">
        <div class="cat-strip-header">
          <span class="strip-label"><i class="fa-solid fa-layer-group"></i> استكشف حسب الصنف:</span>
          <a routerLink="/menu" class="strip-view-all">عرض المنيو بالكامل ({{ categories().length }} أقسام) ←</a>
        </div>
        <div class="cat-chips-scroll">
          <a routerLink="/menu" class="cat-chip-item active">
            <i class="fa-solid fa-border-all"></i>
            <span>كافة الأصناف</span>
          </a>
          @for (cat of categories(); track cat.id) {
            <a [routerLink]="['/menu', cat.slug]" class="cat-chip-item">
              <i [class]="cat.icon"></i>
              <span>{{ cat.nameAr }}</span>
              <span class="chip-count">{{ cat.itemCount }}</span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- 4. Featured Collections Grid (Just Juice It Visual Tiles Inspired) -->
    <section class="section-padding collections-section">
      <div class="container">
        <app-section-heading 
          title="تشكيلات مميزة لا تفوتك" 
          subtitle="مجموعات حصرية تم ابتكارها لتمنحك أقصى درجات الانتعاش والطاقة"
          badge="مختارات فروتيلا"
          [centered]="true">
        </app-section-heading>

        <div class="collections-grid">
          <!-- Tile 1: Gathering Boxes -->
          <a routerLink="/menu/family-packs" class="collection-tile tile-large">
            <img src="/images/menu/menu-board-2.jpg" alt="بوكسات اللمة والعزومات" class="tile-bg-img" loading="lazy" />
            <div class="tile-overlay"></div>
            <div class="tile-content">
              <span class="tile-badge"><i class="fa-solid fa-users"></i> عائلي وتجمعات</span>
              <h3 class="tile-title">بوكسات اللمة والعزومات</h3>
              <p class="tile-desc">عبوات 1 لتر و 4 لتر تكفي كل الحبايب بأشهى العصائر الطبيعية.</p>
              <span class="tile-link">اكتشف العبوات العائلية <i class="fa-solid fa-arrow-left"></i></span>
            </div>
          </a>

          <!-- Tile 2: Power Fruitella -->
          <a routerLink="/menu/power-fruitella" class="collection-tile">
            <img src="/images/products/avocado-nuts-mango-pair.jpg" alt="باور الأفوكادو الملكي" class="tile-bg-img" loading="lazy" />
            <div class="tile-overlay"></div>
            <div class="tile-content">
              <span class="tile-badge"><i class="fa-solid fa-bolt"></i> خلطات الطاقة</span>
              <h3 class="tile-title">باور فروتيلا والأفوكادو</h3>
              <p class="tile-desc">أفوكادو طبيعي مع عسل النحل والمكسرات المحمصة الفاخرة.</p>
              <span class="tile-link">جرّب الباور <i class="fa-solid fa-arrow-left"></i></span>
            </div>
          </a>

          <!-- Tile 3: Smoothies & Mojitos -->
          <a routerLink="/menu/smoothie-world" class="collection-tile">
            <img src="/images/products/signature-four-drinks.jpg" alt="سموذي استوائي مثلج" class="tile-bg-img" loading="lazy" />
            <div class="tile-overlay"></div>
            <div class="tile-content">
              <span class="tile-badge"><i class="fa-solid fa-snowflake"></i> انتعاش مثلج</span>
              <h3 class="tile-title">السموذي والموهيتو الفوار</h3>
              <p class="tile-desc">بلو بيري، ليمون نعناع، وباشن فروت مثلج يروي عطشك.</p>
              <span class="tile-link">استمتع بالانتعاش <i class="fa-solid fa-arrow-left"></i></span>
            </div>
          </a>

          <!-- Tile 4: Waffles & Desserts -->
          <a routerLink="/menu/sweets-desserts" class="collection-tile tile-wide">
            <img src="/images/products/fruitella-signature-waffle.jpg" alt="الوافل البلجيكي والقشطوطة" class="tile-bg-img" loading="lazy" />
            <div class="tile-overlay"></div>
            <div class="tile-content">
              <span class="tile-badge"><i class="fa-solid fa-ice-cream"></i> الحلو من فروتيلا</span>
              <h3 class="tile-title">الوافل البلجيكي والقشطوطة وأم علي</h3>
              <p class="tile-desc">عجينة وافل مقرمشة وصوصات نوتيلا ولوتس وكيندر مع طواجن سخنة بالفرن.</p>
              <span class="tile-link">اطلب الحلو الآن <i class="fa-solid fa-arrow-left"></i></span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 5. Best Sellers Section (Smoothie Paradise ss-products Inspired) -->
    <section class="section-padding bg-surface-alt">
      <div class="container">
        <app-section-heading 
          title="المشروبات الأكثر طلباً والأعلى مبيعاً" 
          subtitle="الأصناف التي نالت إعجاب زبائن فروتيلا في مول حياة تاون وحققت أعلى التقييمات"
          badge="الأكثر مبيعاً 🔥"
          linkUrl="/menu"
          linkText="مشاهدة المنيو بالكامل">
        </app-section-heading>

        <div class="products-grid">
          @for (prod of bestSellers().slice(0, 8); track prod.id) {
            <app-product-card 
              [product]="prod">
            </app-product-card>
          }
        </div>
      </div>
    </section>

    <!-- 6. Signature Four Drinks Spotlight (Directly from Real Promotional Asset) -->
    <section class="signature-spotlight">
      <div class="container spotlight-grid">
        <div class="spotlight-visual">
          <img 
            src="/images/products/signature-four-drinks.jpg" 
            alt="أقوى أربعة مشروبات توقيع فروتيلا" 
            class="spotlight-img" />
          <div class="spotlight-stamp">
            <span>توقيع فروتيلا</span>
          </div>
        </div>

        <div class="spotlight-content">
          <span class="badge badge-popular"><i class="fa-solid fa-crown"></i> المشروبات التوقيع</span>
          <h2 class="spotlight-title">أربعة إبداعات غيرت مفهوم العصير</h2>
          <p class="spotlight-desc">
            جرب تشكيلة المشروبات الحصرية التي أصبحت أيقونة فروتيلا في العبور:
          </p>

          <ul class="signature-list">
            <li>
              <div class="sig-bullet"><i class="fa-solid fa-check"></i></div>
              <div>
                <strong>موهيتو بلو بيري فوار:</strong>
                <p>صودا مثلجة مع التوت الأزرق المركز والنعناع المنعش والليمون الأخضر.</p>
              </div>
            </li>
            <li>
              <div class="sig-bullet"><i class="fa-solid fa-check"></i></div>
              <div>
                <strong>موهيتو ليمون نعناع كلاسيك:</strong>
                <p>الانتعاش الطبيعي الأمثل بعد يوم طويل، معصور بحرفية متقنة.</p>
              </div>
            </li>
            <li>
              <div class="sig-bullet"><i class="fa-solid fa-check"></i></div>
              <div>
                <strong>سوبر أوريو ميلك شيك غرقان شوكولاتة:</strong>
                <p>بسكويت الأوريو الكامل مع الآيس كريم وصوص الشوكولاتة الذائبة.</p>
              </div>
            </li>
            <li>
              <div class="sig-bullet"><i class="fa-solid fa-check"></i></div>
              <div>
                <strong>مانجو آيس كريم فروتيلا:</strong>
                <p>مانجو سكرية كثيفة مغطاة بسوفت آيس كريم وقطع مكعبات مانجو طازجة.</p>
              </div>
            </li>
          </ul>

          <div class="spotlight-actions">
            <a routerLink="/menu/mojito-world" class="btn btn-primary">
              <i class="fa-solid fa-glass-water"></i> جرب الموهيتو والسموذي
            </a>
            <a routerLink="/menu/milkshakes" class="btn btn-secondary">
              <i class="fa-solid fa-mug-hot"></i> عشاق الميلك شيك
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Weekend Promotion Banner (From Real Asset 814740735) -->
    <section class="section-padding weekend-promo-section">
      <div class="container">
        <div class="weekend-promo-card">
          <div class="promo-text">
            <span class="promo-badge">عرض الويك إند</span>
            <h2 class="promo-title">أحلى Weekend مع فروتيلا</h2>
            <p class="promo-desc">
              استمتع في عطلة نهاية الأسبوع بطبق وافل قطع مغطى بصوص اللوتس والشوكولاتة الفاخرة مع كأس مانجو مثلج منعش بسعر حصري!
            </p>
            <div class="promo-features">
              <span><i class="fa-solid fa-check-double"></i> وافل مقرمش طازج</span>
              <span><i class="fa-solid fa-check-double"></i> مانجو سكرية طبيعية</span>
              <span><i class="fa-solid fa-check-double"></i> متاح للطلب والتوصيل</span>
            </div>
            <a routerLink="/menu/sweets-desserts" class="btn btn-primary promo-btn">
              اطلب عرض الويك إند الآن
            </a>
          </div>
          <div class="promo-visual">
            <img 
              src="/images/products/waffle-weekend-promo.jpg" 
              alt="أحلى ويك إند مع فروتيلا - وافل ومانجو" 
              class="promo-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Storefront & Hayah Town Showcase -->
    <section class="section-padding store-showcase-section">
      <div class="container">
        <app-section-heading 
          title="فرعنا في مول حياة تاون — العبور" 
          subtitle="تجربة استثنائية وأجواء راقية بأحدث التصميمات العصرية"
          badge="زورنا في الفرع"
          [centered]="true">
        </app-section-heading>

        <div class="store-grid">
          <div class="store-card">
            <img src="/images/brand/storefront-night.jpg" alt="واجهة محل فروتيلا في مول حياة تاون" class="store-img" />
            <div class="store-info">
              <h4>الواجهة الرئيسية — مول حياة تاون</h4>
              <p>مبنى زجاجي عصري بإضاءة دافئة، جلسات خارجية راقية ومريحة لقضاء أحلى الأوقات مع العائلة والأصدقاء.</p>
            </div>
          </div>

          <div class="store-card">
            <img src="/images/brand/store-counter-fruits.jpg" alt="بار العصائر وأهرامات الفواكه الطازجة" class="store-img" />
            <div class="store-info">
              <h4>بار الفواكه الطازجة</h4>
              <p>أهرامات من الأناناس، الأفوكادو، المانجو، والتفاح الطازج المنتقى يومياً يتم عصره أمام عينيك بأعلى درجات النظافة.</p>
            </div>
          </div>
        </div>

        <div class="store-actions-bar">
          <div class="store-hours-brief">
            <i class="fa-solid fa-clock"></i>
            <span>نستقبلكم يومياً من الساعة 9:00 صباحاً وحتى 2:00 بعد منتصف الليل</span>
          </div>
          <div class="store-links">
            <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <i class="fa-solid fa-location-arrow"></i> اتجاهات Google Maps
            </a>
            <a [href]="'tel:' + business().contacts.phone1" class="btn btn-primary">
              <i class="fa-solid fa-phone"></i> اتصل بالفرع مباشرة
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`

    /* 2. Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #f7faf7 0%, #edf4ee 100%);
      padding-block: 4rem 3.5rem;
      border-bottom: 1px solid var(--border-subtle);
      position: relative;
      overflow: hidden;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      align-items: center;
      gap: 3rem;
    }
    .hero-text-content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: var(--radius-full);
      background: var(--fruitella-lime-bg);
      color: #3f600e;
      font-weight: 700;
      font-size: 0.88rem;
      width: fit-content;
      max-width: 100%;
      white-space: normal;
      border: 1px solid rgba(118, 164, 34, 0.3);
    }
    .hero-title {
      font-size: 3.25rem;
      font-weight: 900;
      line-height: 1.15;
      color: var(--fruitella-green-900);
      letter-spacing: -0.02em;
    }
    .highlight-text {
      color: var(--fruitella-green-700);
      position: relative;
      display: inline-block;
    }
    .hero-description {
      font-size: 1.12rem;
      line-height: 1.7;
      color: var(--text-secondary);
      max-width: 580px;
    }
    .hero-cta-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }
    .btn-lg {
      padding: 0.95rem 2rem;
      font-size: 1.05rem;
    }
    .hero-perks {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(29, 77, 41, 0.12);
      flex-wrap: wrap;
    }
    .perk-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .perk-icon {
      font-size: 1.4rem;
      color: var(--fruitella-lime);
    }
    .perk-item strong {
      display: block;
      font-size: 0.9rem;
      color: var(--fruitella-green-900);
    }
    .perk-item p {
      font-size: 0.78rem;
      color: var(--text-muted);
      margin: 0;
    }

    /* Hero Visual & Spotlight */
    .hero-visual {
      position: relative;
    }
    .hero-card-stack {
      position: relative;
      border-radius: var(--radius-xl);
    }
    .hero-main-img {
      width: 100%;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      border: 3px solid #ffffff;
      object-fit: cover;
      aspect-ratio: 16 / 10;
    }

    /* Hero Spotlight Card (Just Juice It Banner Spotlight) */
    .hero-spotlight-card {
      position: absolute;
      bottom: -35px;
      left: 10px;
      right: 10px;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      border-radius: var(--radius-lg);
      border: 1.5px solid var(--fruitella-lime);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;
      animation: float 4s ease-in-out infinite;
    }
    .spotlight-thumb-wrap {
      position: relative;
      flex-shrink: 0;
    }
    .spotlight-thumb {
      width: 68px;
      height: 68px;
      border-radius: var(--radius-md);
      object-fit: cover;
      border: 1.5px solid var(--border-subtle);
    }
    .spotlight-tag {
      position: absolute;
      bottom: -6px;
      right: -6px;
      background: var(--fruitella-mango-dark);
      color: #ffffff;
      font-size: 0.65rem;
      font-weight: 800;
      padding: 0.15rem 0.45rem;
      border-radius: var(--radius-full);
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(217, 119, 6, 0.35);
    }
    .spotlight-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 0.2rem;
    }
    .spotlight-category {
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--fruitella-green-600);
      text-transform: uppercase;
    }
    .spotlight-name {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
      line-height: 1.25;
      text-wrap: balance;
    }
    .spotlight-desc {
      font-size: 0.78rem;
      color: var(--text-secondary);
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-wrap: pretty;
    }
    .spotlight-price-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin-top: 0.35rem;
    }
    .spotlight-prices {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
    }
    .current-price {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--fruitella-green-800);
      font-family: var(--font-heading);
      font-variant-numeric: tabular-nums;
    }
    .btn-spotlight-add {
      background: linear-gradient(135deg, var(--fruitella-lime), #6b951e);
      color: #ffffff;
      border: none;
      padding: 0.4rem 0.95rem;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 8px rgba(118, 164, 34, 0.3);
    }
    .btn-spotlight-add:hover {
      background: linear-gradient(135deg, var(--fruitella-lime-light), var(--fruitella-lime));
      transform: scale(1.05);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 4px 12px rgba(118, 164, 34, 0.4);
    }
    .btn-spotlight-add:active {
      transform: scale(0.92) !important;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    /* 3. Horizontal Category Navigation Strip */
    .category-strip-section {
      background: #ffffff;
      border-bottom: 1px solid var(--border-subtle);
      padding-block: 1.25rem;
    }
    .cat-strip-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.85rem;
    }
    .strip-label {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .strip-view-all {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      text-decoration: none;
    }
    .strip-view-all:hover {
      color: var(--fruitella-lime);
    }
    .cat-chips-scroll {
      display: flex;
      gap: 0.65rem;
      overflow-x: auto;
      padding-bottom: 0.5rem;
      scrollbar-width: thin;
    }
    .cat-chip-item {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 1rem;
      border-radius: var(--radius-full);
      background: #f7faf7;
      border: 1.5px solid var(--border-subtle);
      color: var(--text-primary);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 700;
      white-space: nowrap;
      transition: all var(--transition-fast);
      flex-shrink: 0;
    }
    .cat-chip-item:hover {
      background: var(--fruitella-lime-bg);
      border-color: var(--fruitella-lime);
      color: var(--fruitella-green-900);
    }
    .cat-chip-item.active {
      background: var(--fruitella-green-700);
      border-color: var(--fruitella-green-700);
      color: #ffffff;
    }
    .chip-count {
      font-size: 0.72rem;
      background: rgba(0, 0, 0, 0.08);
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
    }
    .cat-chip-item.active .chip-count {
      background: rgba(255, 255, 255, 0.25);
    }

    /* 4. Featured Collections Grid (Just Juice It style) */
    .collections-section {
      background: var(--fruitella-cream);
    }
    .collections-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 240px;
      gap: 1.5rem;
    }
    .collection-tile {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1.75rem;
      text-decoration: none;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-normal);
      border: 1px solid var(--border-subtle);
    }
    .collection-tile:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
    }
    .tile-large {
      grid-column: span 2;
    }
    .tile-wide {
      grid-column: span 3;
      grid-row: span 1;
    }
    .tile-bg-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-smooth);
    }
    .collection-tile:hover .tile-bg-img {
      transform: scale(1.08);
    }
    .tile-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(13, 41, 20, 0.9) 0%, rgba(13, 41, 20, 0.35) 60%, transparent 100%);
    }
    .tile-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .tile-badge {
      background: var(--fruitella-lime);
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 800;
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-full);
      width: fit-content;
      box-shadow: 0 2px 6px rgba(118, 164, 34, 0.4);
    }
    .tile-title {
      font-size: 1.45rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0;
      line-height: 1.25;
    }
    .tile-desc {
      font-size: 0.88rem;
      color: rgba(255, 255, 255, 0.88);
      margin: 0;
      max-width: 480px;
    }
    .tile-link {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--fruitella-lime-light);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      margin-top: 0.35rem;
    }

    /* 5. Products Grid */
    .bg-surface-alt {
      background: #f4f8f4;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
    }
    @media (max-width: 640px) {
      .products-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.65rem;
      }
    }

    /* 6. Signature Spotlight */
    .signature-spotlight {
      background: linear-gradient(135deg, var(--fruitella-green-900) 0%, #15361d 100%);
      color: #ffffff;
      padding-block: 4.5rem;
      overflow: hidden;
      position: relative;
      width: 100%;
    }
    .spotlight-grid {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      align-items: center;
      gap: 3.5rem;
    }
    .spotlight-visual {
      position: relative;
    }
    .spotlight-img {
      width: 100%;
      border-radius: var(--radius-xl);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
      border: 3px solid rgba(255, 255, 255, 0.15);
    }
    .spotlight-stamp {
      position: absolute;
      top: -15px;
      right: -15px;
      background: var(--fruitella-mango);
      color: #ffffff;
      padding: 0.6rem 1.25rem;
      border-radius: var(--radius-full);
      font-weight: 800;
      font-size: 0.9rem;
      box-shadow: var(--shadow-md);
    }
    .spotlight-content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .spotlight-title {
      color: #ffffff;
      font-size: 2.4rem;
      line-height: 1.2;
    }
    .spotlight-desc {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.05rem;
    }
    .signature-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .signature-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
    }
    .sig-bullet {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--fruitella-lime);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      flex-shrink: 0;
      margin-top: 0.2rem;
    }
    .signature-list strong {
      color: #ffffff;
      font-size: 0.95rem;
      display: block;
    }
    .signature-list p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.85rem;
      margin: 0;
    }
    .spotlight-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 0.75rem;
    }

    /* 7. Weekend Promo */
    .weekend-promo-section {
      background: var(--fruitella-cream);
    }
    .weekend-promo-card {
      background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
      border: 2px solid #fed7aa;
      border-radius: var(--radius-xl);
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      overflow: hidden;
      align-items: center;
    }
    .promo-text {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .promo-badge {
      display: inline-block;
      background: var(--fruitella-mango-dark);
      color: #ffffff;
      padding: 0.35rem 0.95rem;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 800;
      width: fit-content;
    }
    .promo-title {
      font-size: 2.3rem;
      color: #7c2d12;
      line-height: 1.2;
    }
    .promo-desc {
      font-size: 1.05rem;
      color: #9a3412;
      line-height: 1.6;
    }
    .promo-features {
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem;
      font-weight: 700;
      color: #7c2d12;
      font-size: 0.9rem;
    }
    .promo-features i {
      color: #ea580c;
    }
    .promo-btn {
      width: fit-content;
      margin-top: 0.5rem;
    }
    .promo-visual {
      height: 100%;
      min-height: 380px;
    }
    .promo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* 8. Store Showcase */
    .store-showcase-section {
      background: #ffffff;
    }
    .store-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-bottom: 2.5rem;
    }
    .store-card {
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      background: var(--fruitella-surface);
      box-shadow: var(--shadow-xs);
    }
    .store-img {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
    }
    .store-info {
      padding: 1.5rem;
    }
    .store-info h4 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--fruitella-green-900);
    }
    .store-info p {
      font-size: 0.9rem;
      line-height: 1.6;
    }
    .store-actions-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f1f7f2;
      border: 1px solid var(--border-subtle);
      padding: 1.5rem 2rem;
      border-radius: var(--radius-lg);
      gap: 1.5rem;
    }
    .store-hours-brief {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      color: var(--fruitella-green-900);
      font-size: 0.95rem;
    }
    .store-hours-brief i {
      color: var(--fruitella-lime);
      font-size: 1.2rem;
    }
    .store-links {
      display: flex;
      gap: 1rem;
    }

    /* Responsive */
    @media (max-width: 992px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .collections-grid {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
      }
      .tile-large, .tile-wide {
        grid-column: span 1;
        min-height: 240px;
      }
      .spotlight-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .spotlight-title {
        font-size: 1.8rem;
      }
      .spotlight-stamp {
        top: 10px;
        right: 10px;
      }
      .weekend-promo-card {
        grid-template-columns: 1fr;
      }
      .promo-visual {
        min-height: 220px;
        max-height: 280px;
      }
      .store-grid {
        grid-template-columns: 1fr;
      }
      .store-actions-bar {
        flex-direction: column;
        text-align: center;
      }
      .store-links {
        flex-direction: column;
        width: 100%;
      }
      .hero-title {
        font-size: 2.4rem;
      }
      .hero-spotlight-card {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: 1rem;
      }
    }

    @media (max-width: 640px) {
      .hero-section {
        padding-block: 2rem 2.25rem;
      }
      .hero-title {
        font-size: 1.85rem;
      }
      .hero-badge {
        font-size: 0.76rem;
        padding: 0.35rem 0.75rem;
        width: 100%;
        justify-content: center;
        text-align: center;
      }
      .hero-description {
        font-size: 0.95rem;
      }
      .hero-cta-group {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
      }
      .hero-cta-group .btn {
        width: 100%;
        justify-content: center;
      }
      .hero-perks {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.85rem;
        margin-top: 1rem;
        padding-top: 1rem;
      }
      .hero-spotlight-card {
        padding: 0.75rem 0.85rem;
        gap: 0.75rem;
      }
      .spotlight-thumb {
        width: 56px;
        height: 56px;
      }
      .spotlight-name {
        font-size: 0.95rem;
      }
      .spotlight-title {
        font-size: 1.5rem;
      }
      .spotlight-desc {
        font-size: 0.9rem;
      }
      .signature-list strong {
        font-size: 0.88rem;
      }
      .signature-list p {
        font-size: 0.8rem;
      }
      .spotlight-actions {
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;
      }
      .spotlight-actions .btn {
        width: 100%;
        justify-content: center;
        white-space: normal;
        text-align: center;
      }
      .promo-text {
        padding: 1.5rem 1rem;
      }
      .promo-title {
        font-size: 1.5rem;
      }
      .promo-features {
        gap: 0.75rem;
        font-size: 0.82rem;
      }
      .promo-btn {
        width: 100%;
        justify-content: center;
      }
      .store-actions-bar {
        padding: 1rem;
      }
    }
  `]
})
export class HomeComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private configService = inject(ConfigService);
  private seoService = inject(SeoService);

  readonly business = this.configService.business;
  readonly categories = this.productService.categories;
  readonly bestSellers = this.productService.bestSellers;

  constructor() {
    this.seoService.setDefaultSeo();
  }

  addHeroSpotlightItem(): void {
    const spotlightItem = this.bestSellers().find(p => p.id === 'p1') || this.bestSellers()[0];
    if (spotlightItem) {
      this.onQuickAdd(spotlightItem);
    }
  }

  onQuickAdd(product: Product): void {
    const defaultSize = product.sizes[0];
    this.cartService.addItem(product, defaultSize);
  }
}
