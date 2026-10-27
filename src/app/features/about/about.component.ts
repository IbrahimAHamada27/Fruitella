import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="about-page">
      <!-- About Hero -->
      <section class="about-hero">
        <div class="container hero-content">
          <span class="badge badge-brand">قصة علامتنا التجارية</span>
          <h1 class="hero-title">فروتيلا.. غيرنا مفهوم العصير في العبور</h1>
          <p class="hero-sub">
            انطلقت فروتيلا برؤية واضحة لتقديم مفهوم جديد كلياً للعصائر الطبيعية والحلويات الطازجة: جودة استثنائية، خلطات ملكية فريدة، وأجواء راقية.
          </p>
        </div>
      </section>

      <!-- Story & Management Section -->
      <section class="section-padding container">
        <div class="story-grid">
          <div class="story-text">
            <span class="badge badge-fresh">قصتنا وشغفنا</span>
            <h2 class="section-heading">شغف تقديم الطعم الطبيعي الحقيقي</h2>
            <p>
              في قلب مدينة العبور وتحديداً في <strong>مول حياة تاون بالحي السادس</strong>، افتتحت فروتيلا أبوابها لتكون الوجهة الأولى لكل باحث عن الانتعاش الحقيقي والصحة والمذاق الذي لا يُنسى.
            </p>
            <p>
              نؤمن بأن العصير الطبيعي ليس مجرد مشروب عابر، بل هو مصدر للطاقة والحيوية. لذلك نحرص كل صباح على انتقاء أجود أنواع الفواكه السكرية الطازجة: من المانجو المصرية الممتازة، إلى ثمار الأفوكادو الناضجة، والفراولة، والكيوي، والأناناس الاستوائي.
            </p>
            <p>
              اشتهرت فروتيلا بمشروبها الأيقوني: <strong>الأفوكادو المخفوق بالحليب والعسل الطبيعي والمزين بأهرامات الكاجو والبندق واللوز المحمص</strong>، بالإضافة إلى قائمة الحلويات الغنية مثل الوافل البلجيكي بصوصات النوتيلا واللوتس، وكيكة القشطوطة، وطواجن أم علي الفخارية.
            </p>

            <div class="story-stats">
              <div class="stat-box">
                <span class="stat-num">100%</span>
                <span class="stat-label">فواكه طبيعية نقية</span>
              </div>
              <div class="stat-box">
                <span class="stat-num">+60</span>
                <span class="stat-label">صنف مشروبات وحلويات</span>
              </div>
              <div class="stat-box">
                <span class="stat-num">24/7</span>
                <span class="stat-label">يومياً حتى الفجر</span>
              </div>
            </div>
          </div>

          <div class="story-media">
            <img src="/images/brand/storefront-night.jpg" alt="فرع فروتيلا في مول حياة تاون العبور" class="story-img" />
            <div class="caption-tag">
              <i class="fa-solid fa-location-dot"></i> فرع حياة تاون - العبور
            </div>
          </div>
        </div>
      </section>

      <!-- Store Atmosphere Gallery -->
      <section class="section-padding bg-light">
        <div class="container">
          <div class="text-center heading-block">
            <span class="badge badge-popular">جولة داخل الفرع</span>
            <h2 class="section-heading">عناية بأدق التفاصيل وأجواء عصرية</h2>
            <p class="section-sub">شاهد لمحات حقيقية من فرعنا وتجهيزاتنا في مول حياة تاون</p>
          </div>

          <div class="gallery-grid">
            <div class="gallery-card">
              <img src="/images/brand/store-counter-fruits.jpg" alt="بار الفواكه الطازجة" />
              <div class="gallery-info">
                <h4>بار الفواكه الطازجة</h4>
                <p>يتم عصر الفواكه أمام أعينكم بأعلى درجات التعقيم والنظافة</p>
              </div>
            </div>

            <div class="gallery-card">
              <img src="/images/products/avocado-nuts-mango-pair.jpg" alt="المشروبات الأيقونية" />
              <div class="gallery-info">
                <h4>باور الأفوكادو والمانجو</h4>
                <p>المكس الأشهر في العبور الغني بالمكسرات المقرمشة والعسل</p>
              </div>
            </div>

            <div class="gallery-card">
              <img src="/images/products/fruitella-signature-waffle.jpg" alt="الوافل المقرمش" />
              <div class="gallery-info">
                <h4>وافل فروتيلا والحلويات</h4>
                <p>عجينة وافل مخبوزة عند الطلب مع الفواكه ونوتيلا أصلية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Grid -->
      <section class="section-padding container">
        <div class="values-grid">
          <div class="value-card">
            <div class="v-icon"><i class="fa-solid fa-leaf"></i></div>
            <h3>طبيعي وخالي من المواد الحافظة</h3>
            <p>لا نستخدم أي ملونات اصطناعية أو نكهات معلبة، كل قطرة عصير معصورة من ثمار طازجة نقية.</p>
          </div>

          <div class="value-card">
            <div class="v-icon"><i class="fa-solid fa-pump-medical"></i></div>
            <h3>أعلى معايير النظافة والتعقيم</h3>
            <p>غسيل وتعقيم مستمر للفواكه وأدوات التحضير وموظفون مدربون يرتدون قفازات ومعايير سلامة صحية صارمة.</p>
          </div>

          <div class="value-card">
            <div class="v-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
            <h3>ابتكار خلطات حصرية</h3>
            <p>نبتكر دورياً أصنافاً وتوليفات جديدة مثل رضعات الغابة، ومشروبات الطاقة بالبنجر، وخلطات فيتامين سي.</p>
          </div>
        </div>

        <div class="cta-banner">
          <div>
            <h3>جاهز لتجربة الطعم الحقيقي للعصير؟</h3>
            <p>تفضل بزيارتنا في مول حياة تاون أو اطلب أونلاين الآن لنصلك أينما كنت في العبور.</p>
          </div>
          <div class="cta-banner-actions">
            <a routerLink="/menu" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-basket-shopping"></i> تصفح المنيو واطلب
            </a>
            <a [href]="business().contacts.googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg btn-review-about">
              <i class="fa-solid fa-star"></i> تقييمات Google ⭐
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-hero {
      background: linear-gradient(135deg, var(--fruitella-green-900) 0%, #1a4224 100%);
      color: #ffffff;
      padding-block: 4rem 3rem;
      border-bottom: 4px solid var(--fruitella-lime);
      text-align: center;
    }
    .hero-content {
      max-width: 760px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .hero-title {
      font-size: 2.6rem;
      color: #ffffff;
      line-height: 1.2;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .hero-sub {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
      text-wrap: pretty;
    }

    /* Story Grid */
    .story-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3.5rem;
      align-items: center;
    }
    .story-text {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
    .section-heading {
      font-size: 2rem;
      color: var(--fruitella-green-900);
      line-height: 1.3;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .story-text p {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--text-secondary);
      text-wrap: pretty;
    }
    .story-stats {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;
      padding-top: 1.5rem;
      border-top: 1px dashed var(--border-subtle);
    }
    .stat-box {
      display: flex;
      flex-direction: column;
    }
    .stat-num {
      font-size: 2rem;
      font-weight: 900;
      color: var(--fruitella-green-700);
      font-family: var(--font-heading);
      font-variant-numeric: tabular-nums;
    }
    .stat-label {
      font-size: 0.82rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    /* Story Media */
    .story-media {
      position: relative;
    }
    .story-img {
      width: 100%;
      border-radius: var(--radius-xl);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      border: 3px solid #ffffff;
    }
    .caption-tag {
      position: absolute;
      bottom: 16px;
      right: 16px;
      background: rgba(13, 41, 20, 0.85);
      color: #ffffff;
      padding: 0.4rem 1rem;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      backdrop-filter: blur(8px);
      font-weight: 600;
      box-shadow: var(--shadow-antigravity-xs);
    }

    /* Gallery */
    .bg-light {
      background: #f4f8f4;
    }
    .heading-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2.5rem;
    }
    .section-sub {
      color: var(--text-muted);
      text-wrap: pretty;
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }
    .gallery-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-sm);
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
    }
    .gallery-card:hover {
      transform: translateY(-4px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .gallery-card img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
    }
    .gallery-info {
      padding: 1.25rem;
    }
    .gallery-info h4 {
      font-size: 1.1rem;
      color: var(--fruitella-green-900);
      margin-bottom: 0.35rem;
      text-wrap: balance;
    }
    .gallery-info p {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.5;
      text-wrap: pretty;
    }

    /* Values Grid */
    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 4rem;
    }
    .value-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-sm);
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
    }
    .value-card:hover {
      transform: translateY(-3px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .v-icon {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-md);
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-700);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .value-card h3 {
      font-size: 1.15rem;
      color: var(--fruitella-green-900);
      text-wrap: balance;
    }
    .value-card p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary);
      text-wrap: pretty;
    }

    /* CTA Banner */
    .cta-banner {
      background: linear-gradient(135deg, var(--fruitella-green-800) 0%, var(--fruitella-green-900) 100%);
      color: #ffffff;
      padding: 2.5rem 3rem;
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), var(--shadow-antigravity-lg);
    }
    .cta-banner h3 {
      color: #ffffff;
      font-size: 1.6rem;
      margin-bottom: 0.35rem;
      text-wrap: balance;
    }
    .cta-banner p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.95rem;
      text-wrap: pretty;
    }
    .cta-banner-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
    }
    .btn-review-about {
      border-color: rgba(251, 191, 36, 0.6);
      color: #fbbf24;
      background: rgba(251, 191, 36, 0.1);
    }
    .btn-review-about:hover {
      background: #fbbf24;
      color: #1f2937;
      border-color: #fbbf24;
    }

    @media (max-width: 992px) {
      .story-grid {
        grid-template-columns: 1fr;
      }
      .gallery-grid {
        grid-template-columns: 1fr;
      }
      .values-grid {
        grid-template-columns: 1fr;
      }
      .cta-banner {
        flex-direction: column;
        text-align: center;
      }
    }
    @media (max-width: 640px) {
      .about-hero {
        padding-block: 2.5rem 2rem;
      }
      .hero-title {
        font-size: 1.75rem;
      }
      .hero-sub {
        font-size: 0.92rem;
      }
      .section-heading {
        font-size: 1.55rem;
      }
      .story-stats {
        flex-direction: column;
        gap: 0.75rem;
      }
      .value-card {
        padding: 1.25rem 1rem;
      }
      .cta-banner {
        padding: 1.5rem 1.15rem;
      }
      .cta-banner h3 {
        font-size: 1.35rem;
      }
      .cta-banner .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class AboutComponent {
  private configService = inject(ConfigService);
  readonly business = this.configService.business;
}
