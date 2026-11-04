import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../core/services/config.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="contact-page">
      <!-- 1. Hero Section -->
      <section class="contact-hero">
        <div class="container hero-content">
          <span class="badge hero-pill-badge">
            <i class="fa-solid fa-headset"></i> يسعدنا تواصلكم وخدمتكم دائماً
          </span>
          <h1 class="hero-title">تواصل مع فروتيلا — فرع مول حياة تاون</h1>
          <p class="hero-sub">
            تابع حساباتنا الرسمية على منصات التواصل الاجتماعي، اطلب عصائرك المفضلة دليفري فوري، أو تفضل بزيارتنا في الفرع بالعبور.
          </p>
          <div class="hero-tags-row">
            <span class="hero-tag"><i class="fa-solid fa-bolt"></i> دليفري سريع لكافة أحياء العبور</span>
            <span class="hero-tag"><i class="fa-solid fa-car-side"></i> خدمة استلام بالسيارة (مدخل 2)</span>
            <span class="hero-tag"><i class="fa-solid fa-couch"></i> صالة عائلية مكيفة</span>
          </div>
        </div>
      </section>

      <div class="container main-content-wrapper">
        <!-- 2. SOCIAL MEDIA SHOWCASE (FIRST PRIORITY AS REQUESTED) -->
        <section class="social-showcase-section" aria-label="صفحات التواصل الاجتماعي">
          <div class="section-header">
            <div class="section-title-wrap">
              <span class="sub-badge"><i class="fa-solid fa-fire-flame-curved"></i> قنواتنا الرسمية الأولى</span>
              <h2 class="section-heading">صفحات فروتيلا على السوشيال ميديا</h2>
              <p class="section-subtext">انضم لمجتمعنا وكن أول من يعرف العروض الحصرية، فيديوهات الكواليس، والريلز اليومية</p>
            </div>
          </div>

          <div class="social-grid">
            <!-- 1. TikTok Card -->
            <a 
              [href]="business().contacts.tiktokUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-card tiktok-card"
              aria-label="متابعة حساب تيك توك فروتيلا">
              <div class="card-glow-effect"></div>
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper tiktok-icon">
                    <i class="fa-brands fa-tiktok"></i>
                  </div>
                  <div class="social-tag-pills">
                    <span class="platform-label">TikTok</span>
                    <span class="activity-label">فيديوهات حصرية</span>
                  </div>
                </div>

                <div class="social-text-block">
                  <h3 class="social-platform-title">تيك توك فروتيلا</h3>
                  <div class="handle-row" dir="ltr">
                    <span class="handle-text">@fruitella.10</span>
                    <i class="fa-solid fa-circle-check verified-icon"></i>
                  </div>
                  <p class="social-desc">
                    كواليس تحضير العصائر الفريش، وتحديات الوافل والقشطوطة، وعروض حصرية لمتابعي تيك توك.
                  </p>
                </div>

                <div class="social-cta-btn tiktok-btn">
                  <span>متابعة على TikTok</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </a>

            <!-- 2. Instagram Card -->
            <a 
              [href]="business().contacts.instagramUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-card instagram-card"
              aria-label="زيارة حساب إنستغرام فروتيلا">
              <div class="card-glow-effect"></div>
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper instagram-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                  <div class="social-tag-pills">
                    <span class="platform-label">Instagram</span>
                    <span class="activity-label">ستوريز يومية</span>
                  </div>
                </div>

                <div class="social-text-block">
                  <h3 class="social-platform-title">إنستغرام فروتيلا</h3>
                  <div class="handle-row" dir="ltr">
                    <span class="handle-text">@fruitell.1</span>
                    <i class="fa-solid fa-circle-check verified-icon"></i>
                  </div>
                  <p class="social-desc">
                    صور وأطباق فواكه استوائية، سموذي مثلج، وريلز تغطيات يومية طازجة من داخل فرع العبور.
                  </p>
                </div>

                <div class="social-cta-btn instagram-btn">
                  <span>زيارة حساب Instagram</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </a>

            <!-- 3. Facebook Card -->
            <a 
              [href]="business().contacts.facebookUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-card facebook-card"
              aria-label="متابعة صفحة فيسبوك فروتيلا">
              <div class="card-glow-effect"></div>
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper facebook-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div class="social-tag-pills">
                    <span class="platform-label">Facebook</span>
                    <span class="activity-label">الصفحة الرسمية</span>
                  </div>
                </div>

                <div class="social-text-block">
                  <h3 class="social-platform-title">فيسبوك فروتيلا</h3>
                  <div class="handle-row" dir="ltr">
                    <span class="handle-text">Fruitella Obour</span>
                    <i class="fa-solid fa-circle-check verified-icon"></i>
                  </div>
                  <p class="social-desc">
                    أحدث أخبار الفرع، آراء وتقييمات العملاء، ومسابقات دورية وجوائز للمتابعين.
                  </p>
                </div>

                <div class="social-cta-btn facebook-btn">
                  <span>متابعة الصفحة على Facebook</span>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </a>

            <!-- 4. WhatsApp Card -->
            <a 
              [href]="'https://wa.me/' + business().contacts.whatsapp" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-card whatsapp-card"
              aria-label="بدء محادثة واتساب مع فروتيلا">
              <div class="card-glow-effect"></div>
              <div class="social-card-inner">
                <div class="social-header-row">
                  <div class="social-icon-wrapper whatsapp-icon">
                    <i class="fa-brands fa-whatsapp"></i>
                  </div>
                  <div class="social-tag-pills">
                    <span class="platform-label">WhatsApp</span>
                    <span class="activity-label">رد فوري للطلبات</span>
                  </div>
                </div>

                <div class="social-text-block">
                  <h3 class="social-platform-title">واتساب الطلبات السريعة</h3>
                  <div class="handle-row" dir="ltr">
                    <span class="handle-text">01037221133</span>
                    <i class="fa-solid fa-circle-check verified-icon"></i>
                  </div>
                  <p class="social-desc">
                    راسلنا لإرسال اللوكيشن، الطلب السريع دليفري، وحجز عبوات الحفلات والمناسبات.
                  </p>
                </div>

                <div class="social-cta-btn whatsapp-btn">
                  <span>محادثة واتساب الآن</span>
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
              </div>
            </a>
          </div>
        </section>

        <!-- 3. DIRECT CONTACT & LOCATION HUB -->
        <section class="direct-hub-section">
          <div class="hub-grid">
            <!-- Hub Col 1: Phone Numbers & Delivery -->
            <div class="hub-card phone-hub-card">
              <div class="hub-card-header">
                <div class="hub-icon-bubble phone-bubble">
                  <i class="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <span class="hub-subtitle">اتصال مباشر ودليفري</span>
                  <h3 class="hub-title">أرقام التوصيل والاستفسار</h3>
                </div>
              </div>

              <p class="hub-desc">
                فريق خدمة العملاء جاهز لاستقبال اتصالاتكم طوال ساعات العمل وتوصيل طلبكم فورياً:
              </p>

              <div class="phones-container">
                <!-- Line 1 -->
                <div class="phone-item-box">
                  <div class="phone-meta-side">
                    <span class="carrier-pill vf-pill">
                      <i class="fa-solid fa-sim-card"></i> فودافون / واتساب
                    </span>
                    <span class="phone-display" dir="ltr">{{ business().contacts.phone1 }}</span>
                  </div>
                  <div class="phone-btns-side">
                    <a [href]="'tel:' + business().contacts.phone1" class="btn-call-action" title="اتصال بالرقم الأول">
                      <i class="fa-solid fa-phone"></i>
                      <span>اتصال</span>
                    </a>
                    <button 
                      type="button" 
                      class="btn-copy-action" 
                      (click)="copyPhone(business().contacts.phone1, 'الخط الأول')" 
                      title="نسخ الرقم">
                      <i class="fa-solid fa-copy"></i>
                    </button>
                  </div>
                </div>

                <!-- Line 2 -->
                <div class="phone-item-box">
                  <div class="phone-meta-side">
                    <span class="carrier-pill et-pill">
                      <i class="fa-solid fa-sim-card"></i> إي آند (اتصالات)
                    </span>
                    <span class="phone-display" dir="ltr">{{ business().contacts.phone2 }}</span>
                  </div>
                  <div class="phone-btns-side">
                    <a [href]="'tel:' + business().contacts.phone2" class="btn-call-action" title="اتصال بالرقم الثاني">
                      <i class="fa-solid fa-phone"></i>
                      <span>اتصال</span>
                    </a>
                    <button 
                      type="button" 
                      class="btn-copy-action" 
                      (click)="copyPhone(business().contacts.phone2, 'الخط الثاني')" 
                      title="نسخ الرقم">
                      <i class="fa-solid fa-copy"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="hub-delivery-banner">
                <i class="fa-solid fa-motorcycle"></i>
                <span>توصيل دليفري لجميع أحياء مدينة العبور (الأول إلى التاسع، الشباب، المستقبل والكمبوندات).</span>
              </div>
            </div>

            <!-- Hub Col 2: Location Card -->
            <div class="hub-card location-hub-card">
              <div class="hub-card-header">
                <div class="hub-icon-bubble location-bubble">
                  <i class="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <span class="hub-subtitle">العنوان وتفاصيل الزيارة</span>
                  <h3 class="hub-title">موقع فرع العبور</h3>
                </div>
              </div>

              <div class="address-box">
                <i class="fa-solid fa-location-dot address-pin-icon"></i>
                <div class="address-text-wrap">
                  <strong>{{ business().addressAr }}</strong>
                  <p class="address-note">بجوار كافيهات ومطاعم المول — علامة مميزة وسهلة الوصول.</p>
                </div>
              </div>

              <div class="features-pill-row">
                <span class="feature-tag"><i class="fa-solid fa-square-parking"></i> مواقف سيارات مجانية</span>
                <span class="feature-tag"><i class="fa-solid fa-car-side"></i> تسليم بالسيارة مدخل 2</span>
                <span class="feature-tag"><i class="fa-solid fa-snowflake"></i> صالة داخلية مكيفة</span>
              </div>

              <div class="location-buttons-row">
                <a 
                  [href]="business().contacts.googleMapsUrl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-maps-action">
                  <i class="fa-solid fa-location-arrow"></i>
                  <span>فتح في Google Maps</span>
                </a>
                <a 
                  [href]="business().contacts.googleReviewsUrl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-review-action">
                  <i class="fa-solid fa-star"></i>
                  <span>تقييم 5 نجوم ⭐</span>
                </a>
              </div>
            </div>

            <!-- Hub Col 3: Working Hours Card -->
            <div class="hub-card hours-hub-card">
              <div class="hub-card-header">
                <div class="hub-icon-bubble hours-bubble">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                  <span class="hub-subtitle">التوقيت واستقبال الطلبات</span>
                  <h3 class="hub-title">مواعيد العمل اليومية</h3>
                </div>
              </div>

              <div class="hours-content-wrap">
                <div class="days-badge-line">
                  <i class="fa-solid fa-calendar-check"></i>
                  <span>{{ business().hours.daysAr }}</span>
                </div>

                <div class="hours-clock-display">
                  <div class="time-block">
                    <span class="time-label">من الساعة</span>
                    <strong class="time-val">{{ business().hours.openTime }}</strong>
                  </div>
                  <div class="clock-arrow-wrap">
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </div>
                  <div class="time-block">
                    <span class="time-label">حتى الساعة</span>
                    <strong class="time-val">{{ business().hours.closeTime }}</strong>
                  </div>
                </div>

                <div class="status-pulse-banner">
                  <span class="pulsing-beacon"></span>
                  <div class="status-pulse-text">
                    <strong>الفرع مفتوح الآن</strong>
                    <span>نستقبل طلبات الصالة، السيارة، والدليفري</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 4. INTERACTIVE GOOGLE MAPS & REVIEWS SECTION -->
        <section class="interactive-map-section">
          <div class="map-card-container">
            <div class="map-header-bar">
              <div class="map-header-info">
                <span class="badge badge-brand"><i class="fa-solid fa-map-pin"></i> الخريطة المباشرة</span>
                <h3 class="map-card-title">موقع فروتيلا في مول حياة تاون (العبور)</h3>
                <p class="map-card-desc">الحي السادس، أمام مدخل 2 مباشرة — سهولة الوصول ومواقف للسيارات أمام المحل.</p>
              </div>
              <div class="map-header-actions">
                <a 
                  [href]="business().contacts.googleMapsUrl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-outline btn-sm">
                  <i class="fa-solid fa-diamond-turn-right"></i> احصل على الاتجاهات
                </a>
              </div>
            </div>

            <!-- Google Maps Embed -->
            <div class="map-iframe-frame">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14123050.285309974!2d49.9156581!3d30.2082528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581b0071997395%3A0xfe3bf1186790e9a9!2sFruitela!5e0!3m2!1sar!2seg!4v1793128351162!5m2!1sar!2seg" 
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="strict-origin-when-cross-origin"
                title="موقع فروتيلا على خرائط جوجل">
              </iframe>
            </div>

            <!-- Customer Reviews Feedback Ribbon -->
            <div class="reviews-feedback-ribbon">
              <div class="stars-score-side">
                <div class="golden-stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span class="score-badge">5.0 / 5.0</span>
              </div>

              <div class="ribbon-feedback-text">
                <h4 class="feedback-title">جرّبت عصائر أو حلويات فروتيلا؟ يسعدنا تقييمك!</h4>
                <p class="feedback-sub">رأيك وتجربتك على Google Maps تصنع الفارق وتساعدنا في تقديم الأفضل دائماً لأهل العبور.</p>
              </div>

              <a 
                [href]="business().contacts.googleReviewsUrl" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-gold-review">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>كتابة تقييم على Google</span>
              </a>
            </div>
          </div>
        </section>

        <!-- 5. INQUIRY & FEEDBACK FORM -->
        <section class="inquiry-form-section">
          <div class="form-wrapper-card">
            <div class="form-title-area">
              <span class="sub-badge"><i class="fa-solid fa-envelope"></i> رسائل مباشرة للإدارة</span>
              <h3 class="form-main-heading">أرسل لنا استفسارك أو حجز مناسبتك</h3>
              <p class="form-sub-heading">فريق إدارة فروتيلا يتابع كافة الاستفسارات وطلبات الكميات باهتمام فوري</p>
            </div>

            <form (ngSubmit)="onSubmitMessage()" class="inquiry-actual-form">
              <div class="form-inputs-grid">
                <div class="form-input-group">
                  <label for="senderName" class="form-label">الاسم الكريم *</label>
                  <input 
                    id="senderName" 
                    type="text" 
                    [(ngModel)]="name" 
                    name="senderName" 
                    placeholder="مثال: أحمد مصطفى" 
                    required 
                    class="form-field-input" />
                </div>

                <div class="form-input-group">
                  <label for="senderPhone" class="form-label">رقم الهاتف أو الواتساب *</label>
                  <input 
                    id="senderPhone" 
                    type="tel" 
                    [(ngModel)]="phone" 
                    name="senderPhone" 
                    placeholder="01xxxxxxxxx" 
                    required 
                    class="form-field-input" 
                    dir="ltr" />
                </div>
              </div>

              <div class="form-input-group">
                <label for="subject" class="form-label">نوع الرسالة أو الاستفسار</label>
                <select id="subject" [(ngModel)]="subject" name="subject" class="form-field-input select-field">
                  <option value="استفسار عام">استفسار عام عن الأصناف والمنيو</option>
                  <option value="حجز كميات وحفلات">حجز كميات عبوات عائلية ومناسبات</option>
                  <option value="اقتراح أو ملاحظة">اقتراح لتطوير الخدمة أو التجربة</option>
                  <option value="خدمة التوصيل">استفسار عن مناطق ورسوم التوصيل</option>
                </select>
              </div>

              <div class="form-input-group">
                <label for="msgContent" class="form-label">نص الرسالة أو تفاصيل الطلب *</label>
                <textarea 
                  id="msgContent" 
                  rows="4" 
                  [(ngModel)]="message" 
                  name="msgContent" 
                  placeholder="اكتب رسالتك أو استفسارك هنا..." 
                  required 
                  class="form-field-input textarea-field">
                </textarea>
              </div>

              <button type="submit" class="btn btn-submit-inquiry">
                <i class="fa-solid fa-paper-plane"></i>
                <span>إرسال الرسالة للإدارة</span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    /* ========================================================
       FRUITELLA CONTACT PAGE STYLING (REDESIGNED FOR MOBILE & DESKTOP)
       ======================================================== */
    
    .contact-page {
      background-color: var(--fruitella-cream);
      min-height: 100vh;
      padding-bottom: 4rem;
    }

    /* 1. HERO SECTION */
    .contact-hero {
      background: linear-gradient(135deg, var(--fruitella-green-900) 0%, #153e20 50%, var(--fruitella-green-800) 100%);
      color: #ffffff;
      padding-block: 3.5rem 3rem;
      border-bottom: 4px solid var(--fruitella-lime);
      position: relative;
      overflow: hidden;
    }
    .contact-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 80% 20%, rgba(118, 164, 34, 0.18), transparent 60%);
      pointer-events: none;
    }
    .hero-content {
      max-width: 840px;
      margin-inline: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.15rem;
      position: relative;
      z-index: 1;
    }
    .hero-pill-badge {
      background: rgba(255, 255, 255, 0.15);
      color: #e2fbd3;
      border: 1px solid rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(8px);
      padding: 0.4rem 1.1rem;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .hero-title {
      font-size: 2.4rem;
      font-weight: 900;
      color: #ffffff;
      line-height: 1.25;
      letter-spacing: -0.02em;
      margin: 0;
      text-wrap: balance;
    }
    .hero-sub {
      font-size: 1.05rem;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.65;
      margin: 0;
      max-width: 720px;
      text-wrap: pretty;
    }
    .hero-tags-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      justify-content: center;
      margin-top: 0.5rem;
    }
    .hero-tag {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #eef7ee;
      padding: 0.35rem 0.85rem;
      border-radius: var(--radius-full);
      font-size: 0.82rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    .hero-tag i {
      color: var(--fruitella-lime-light);
    }

    /* Container Spacing */
    .main-content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
      margin-top: 2.5rem;
    }

    /* SECTION HEADINGS */
    .section-header {
      margin-bottom: 1.5rem;
    }
    .section-title-wrap {
      text-align: center;
      max-width: 680px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
    }
    .sub-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.82rem;
      font-weight: 800;
      color: var(--fruitella-green-800);
      background: var(--fruitella-lime-bg);
      border: 1px solid rgba(118, 164, 34, 0.25);
      padding: 0.3rem 0.85rem;
      border-radius: var(--radius-full);
      text-transform: uppercase;
    }
    .sub-badge i {
      color: var(--fruitella-mango-dark);
    }
    .section-heading {
      font-size: 1.9rem;
      font-weight: 900;
      color: var(--fruitella-green-900);
      letter-spacing: -0.01em;
      margin: 0;
    }
    .section-subtext {
      font-size: 0.95rem;
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.6;
    }

    /* ========================================================
       2. SOCIAL SHOWCASE CARDS (FIRST IN ORDER)
       ======================================================== */
    .social-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }

    .social-card {
      position: relative;
      background: #ffffff;
      border-radius: var(--radius-xl);
      border: 1.5px solid var(--border-subtle);
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-normal);
      box-shadow: var(--shadow-sm);
    }
    .social-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-antigravity-lg);
    }
    .social-card-inner {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      position: relative;
      z-index: 2;
    }

    .social-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .social-icon-wrapper {
      width: 58px;
      height: 58px;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.85rem;
      color: #ffffff;
      transition: transform var(--transition-fast);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
    .social-card:hover .social-icon-wrapper {
      transform: scale(1.08) rotate(-4deg);
    }

    .social-tag-pills {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.25rem;
    }
    .platform-label {
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .activity-label {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-full);
      background: #f1f5f2;
      color: var(--text-secondary);
    }

    .social-text-block {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      flex-grow: 1;
    }
    .social-platform-title {
      font-size: 1.18rem;
      font-weight: 800;
      color: var(--text-primary);
      margin: 0;
    }
    .handle-row {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.92rem;
      font-weight: 700;
    }
    .verified-icon {
      font-size: 0.82rem;
    }
    .social-desc {
      font-size: 0.86rem;
      color: var(--text-secondary);
      line-height: 1.55;
      margin: 0.25rem 0 0;
    }

    .social-cta-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.88rem;
      font-weight: 800;
      color: #ffffff;
      transition: all var(--transition-fast);
      margin-top: auto;
    }

    /* TikTok Card Details */
    .tiktok-card {
      border-top: 4px solid #000000;
    }
    .tiktok-card:hover {
      border-color: #000000;
    }
    .tiktok-icon {
      background: #000000;
      color: #ffffff;
      text-shadow: 2px 2px #fe0979, -2px -2px #00f2fe;
    }
    .tiktok-card .handle-text {
      color: #000000;
    }
    .tiktok-card .verified-icon {
      color: #00f2fe;
    }
    .tiktok-btn {
      background: #000000;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
    }
    .tiktok-card:hover .tiktok-btn {
      background: #1a1a1a;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
    }

    /* Instagram Card Details */
    .instagram-card {
      border-top: 4px solid #dc2743;
    }
    .instagram-card:hover {
      border-color: #dc2743;
    }
    .instagram-icon {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }
    .instagram-card .handle-text {
      color: #c13584;
    }
    .instagram-card .verified-icon {
      color: #e1306c;
    }
    .instagram-btn {
      background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      box-shadow: 0 4px 14px rgba(220, 39, 67, 0.25);
    }
    .instagram-card:hover .instagram-btn {
      filter: brightness(1.08);
      box-shadow: 0 6px 20px rgba(220, 39, 67, 0.4);
    }

    /* Facebook Card Details */
    .facebook-card {
      border-top: 4px solid #1877f2;
    }
    .facebook-card:hover {
      border-color: #1877f2;
    }
    .facebook-icon {
      background: #1877f2;
    }
    .facebook-card .handle-text {
      color: #1877f2;
    }
    .facebook-card .verified-icon {
      color: #1877f2;
    }
    .facebook-btn {
      background: #1877f2;
      box-shadow: 0 4px 14px rgba(24, 119, 242, 0.25);
    }
    .facebook-card:hover .facebook-btn {
      background: #1464cc;
      box-shadow: 0 6px 18px rgba(24, 119, 242, 0.35);
    }

    /* WhatsApp Card Details */
    .whatsapp-card {
      border-top: 4px solid #25D366;
    }
    .whatsapp-card:hover {
      border-color: #25D366;
    }
    .whatsapp-icon {
      background: #25D366;
    }
    .whatsapp-card .handle-text {
      color: #128c7e;
    }
    .whatsapp-card .verified-icon {
      color: #25D366;
    }
    .whatsapp-btn {
      background: #25D366;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
    }
    .whatsapp-card:hover .whatsapp-btn {
      background: #20bd5a;
      box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
    }

    /* ========================================================
       3. DIRECT CONTACT & LOCATION HUB (3 COLUMNS)
       ======================================================== */
    .hub-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      align-items: stretch;
    }

    .hub-card {
      background: #ffffff;
      border-radius: var(--radius-xl);
      border: 1.5px solid var(--border-subtle);
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }
    .hub-card:hover {
      border-color: var(--border-strong);
      box-shadow: var(--shadow-md);
    }

    .hub-card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .hub-icon-bubble {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.45rem;
      flex-shrink: 0;
    }
    .phone-bubble {
      background: #eff6ff;
      color: #2563eb;
    }
    .location-bubble {
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
    }
    .hours-bubble {
      background: var(--fruitella-mango-bg);
      color: var(--fruitella-mango-dark);
    }

    .hub-subtitle {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .hub-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .hub-desc {
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.55;
      margin: 0;
    }

    /* Phones Specific */
    .phones-container {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      margin-top: 0.25rem;
    }
    .phone-item-box {
      background: #f8faf8;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 0.85rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      transition: all var(--transition-fast);
    }
    .phone-item-box:hover {
      background: #f0f7f1;
      border-color: var(--fruitella-lime);
    }
    .phone-meta-side {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .carrier-pill {
      font-size: 0.7rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }
    .carrier-pill.vf-pill {
      color: #e11d48;
    }
    .carrier-pill.et-pill {
      color: #059669;
    }
    .phone-display {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--text-primary);
      letter-spacing: 0.04em;
    }

    .phone-btns-side {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .btn-call-action {
      background: var(--fruitella-green-700);
      color: #ffffff;
      padding: 0.5rem 0.9rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: all var(--transition-fast);
      box-shadow: 0 2px 6px rgba(29, 77, 41, 0.2);
    }
    .btn-call-action:hover {
      background: var(--fruitella-green-800);
      transform: translateY(-1px);
    }
    .btn-copy-action {
      background: #ffffff;
      border: 1px solid var(--border-strong);
      color: var(--text-secondary);
      width: 36px;
      height: 36px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .btn-copy-action:hover {
      border-color: var(--fruitella-lime);
      color: var(--fruitella-green-800);
      background: var(--fruitella-lime-bg);
    }

    .hub-delivery-banner {
      background: #f2f8e6;
      border: 1px dashed var(--fruitella-lime);
      border-radius: var(--radius-md);
      padding: 0.75rem 0.9rem;
      font-size: 0.82rem;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.65rem;
      line-height: 1.5;
      margin-top: auto;
    }
    .hub-delivery-banner i {
      font-size: 1.25rem;
      color: var(--fruitella-green-700);
      flex-shrink: 0;
    }

    /* Location Specific */
    .address-box {
      background: #f9fbf9;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1rem;
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
    }
    .address-pin-icon {
      color: var(--fruitella-lime-light);
      font-size: 1.25rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }
    .address-text-wrap strong {
      font-size: 0.98rem;
      color: var(--fruitella-green-900);
      display: block;
      line-height: 1.5;
    }
    .address-note {
      font-size: 0.82rem;
      color: var(--text-muted);
      margin: 0.25rem 0 0;
    }

    .features-pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }
    .feature-tag {
      background: #f1f6f2;
      color: var(--fruitella-green-800);
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0.35rem 0.7rem;
      border-radius: var(--radius-full);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }
    .feature-tag i {
      color: var(--fruitella-lime);
    }

    .location-buttons-row {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      margin-top: auto;
    }
    .btn-maps-action {
      background: var(--fruitella-green-700);
      color: #ffffff;
      padding: 0.8rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.92rem;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      transition: all var(--transition-fast);
      box-shadow: 0 3px 10px rgba(29, 77, 41, 0.2);
    }
    .btn-maps-action:hover {
      background: var(--fruitella-green-800);
      transform: translateY(-2px);
    }
    .btn-review-action {
      background: var(--fruitella-mango-bg);
      border: 1.5px solid var(--fruitella-mango);
      color: var(--fruitella-mango-dark);
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.88rem;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all var(--transition-fast);
    }
    .btn-review-action:hover {
      background: var(--fruitella-mango);
      color: #ffffff;
      transform: translateY(-2px);
    }

    /* Working Hours Specific */
    .hours-content-wrap {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
      height: 100%;
    }
    .days-badge-line {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.92rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      background: #f8faf8;
      padding: 0.65rem 0.85rem;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-subtle);
    }
    .days-badge-line i {
      color: var(--fruitella-lime);
    }

    .hours-clock-display {
      background: linear-gradient(135deg, #fafbf9 0%, #f1f8ed 100%);
      border: 1.5px solid var(--fruitella-lime-bg);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
    }
    .time-block {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .time-label {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 700;
    }
    .time-val {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--fruitella-green-900);
    }
    .clock-arrow-wrap i {
      color: var(--fruitella-lime);
      font-size: 1.25rem;
    }

    .status-pulse-banner {
      background: #ecfdf5;
      border: 1.5px solid #a7f3d0;
      border-radius: var(--radius-lg);
      padding: 0.9rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      margin-top: auto;
    }
    .pulsing-beacon {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      animation: pulse-beacon 1.8s infinite;
      flex-shrink: 0;
    }
    @keyframes pulse-beacon {
      0% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      70% {
        box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
      }
    }
    .status-pulse-text {
      display: flex;
      flex-direction: column;
    }
    .status-pulse-text strong {
      font-size: 0.92rem;
      color: #065f46;
      font-weight: 800;
    }
    .status-pulse-text span {
      font-size: 0.76rem;
      color: #047857;
    }

    /* ========================================================
       4. INTERACTIVE GOOGLE MAPS & REVIEWS RIBBON
       ======================================================== */
    .map-card-container {
      background: #ffffff;
      border-radius: var(--radius-xl);
      border: 1.5px solid var(--border-subtle);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }
    .map-header-bar {
      padding: 1.5rem 1.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      background: #ffffff;
      border-bottom: 1px solid var(--border-subtle);
    }
    .map-header-info {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .map-card-title {
      font-size: 1.45rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .map-card-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin: 0;
    }
    .map-iframe-frame {
      line-height: 0;
    }

    /* Reviews Ribbon */
    .reviews-feedback-ribbon {
      background: linear-gradient(135deg, #fffbeb 0%, #fff7ed 100%);
      border-top: 1.5px solid #fef3c7;
      padding: 1.5rem 1.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }
    .stars-score-side {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      flex-shrink: 0;
    }
    .golden-stars {
      color: #f59e0b;
      font-size: 1.25rem;
      letter-spacing: 0.1em;
    }
    .score-badge {
      font-size: 0.85rem;
      font-weight: 900;
      color: #92400e;
    }
    .ribbon-feedback-text {
      flex-grow: 1;
    }
    .feedback-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #78350f;
      margin: 0 0 0.25rem 0;
    }
    .feedback-sub {
      font-size: 0.88rem;
      color: #92400e;
      margin: 0;
      line-height: 1.5;
    }
    .btn-gold-review {
      background: #f59e0b;
      color: #ffffff;
      padding: 0.85rem 1.4rem;
      border-radius: var(--radius-md);
      font-size: 0.95rem;
      font-weight: 800;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      flex-shrink: 0;
      transition: all var(--transition-fast);
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3);
    }
    .btn-gold-review:hover {
      background: #d97706;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);
    }

    /* ========================================================
       5. INQUIRY & FEEDBACK FORM
       ======================================================== */
    .form-wrapper-card {
      background: #ffffff;
      border-radius: var(--radius-xl);
      border: 1.5px solid var(--border-subtle);
      padding: 2.5rem;
      max-width: 780px;
      margin-inline: auto;
      box-shadow: var(--shadow-sm);
    }
    .form-title-area {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
      margin-bottom: 2rem;
    }
    .form-main-heading {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .form-sub-heading {
      font-size: 0.92rem;
      color: var(--text-secondary);
      margin: 0;
    }

    .inquiry-actual-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .form-inputs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }
    .form-input-group {
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }
    .form-label {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .form-field-input {
      width: 100%;
      height: 48px;
      padding-inline: 1rem;
      border-radius: var(--radius-md);
      border: 1.5px solid var(--border-subtle);
      font-size: 0.94rem;
      color: var(--text-primary);
      background: #fdfefd;
      outline: none;
      transition: all var(--transition-fast);
      font-family: inherit;
    }
    .form-field-input:focus {
      border-color: var(--fruitella-green-700);
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(29, 77, 41, 0.12);
    }
    .select-field {
      cursor: pointer;
    }
    .textarea-field {
      height: auto;
      padding-block: 0.85rem;
      resize: vertical;
    }

    .btn-submit-inquiry {
      width: 100%;
      height: 52px;
      background: var(--fruitella-green-700);
      color: #ffffff;
      border: none;
      border-radius: var(--radius-md);
      font-size: 1.05rem;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      transition: all var(--transition-fast);
      box-shadow: 0 4px 14px rgba(29, 77, 41, 0.25);
      margin-top: 0.5rem;
    }
    .btn-submit-inquiry:hover {
      background: var(--fruitella-green-800);
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(29, 77, 41, 0.35);
    }

    /* ========================================================
       RESPONSIVE DESIGN (PHONE & COMPUTER OPTIMIZATION)
       ======================================================== */
    
    /* Large Tablets & Small Laptops (<= 1100px) */
    @media (max-width: 1100px) {
      .social-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .hub-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .hours-hub-card {
        grid-column: span 2;
      }
    }

    /* Mobile Phones & Small Tablets (<= 768px) */
    @media (max-width: 768px) {
      .contact-hero {
        padding-block: 2.75rem 2.25rem;
      }
      .hero-title {
        font-size: 1.85rem;
      }
      .hero-sub {
        font-size: 0.95rem;
      }
      .hero-tags-row {
        gap: 0.45rem;
      }
      .hero-tag {
        font-size: 0.78rem;
        padding: 0.3rem 0.75rem;
      }

      .main-content-wrapper {
        gap: 2.75rem;
        margin-top: 1.75rem;
      }

      .section-heading {
        font-size: 1.55rem;
      }

      .social-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .social-card-inner {
        padding: 1.25rem;
      }

      .hub-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }
      .hours-hub-card {
        grid-column: span 1;
      }

      .phone-item-box {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }
      .phone-btns-side {
        width: 100%;
      }
      .btn-call-action {
        flex: 1;
        justify-content: center;
        padding-block: 0.65rem;
      }

      .map-header-bar {
        flex-direction: column;
        align-items: flex-start;
        padding: 1.25rem;
      }
      .map-header-actions {
        width: 100%;
      }
      .map-header-actions .btn {
        width: 100%;
        justify-content: center;
      }

      .reviews-feedback-ribbon {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
        padding: 1.25rem;
      }
      .btn-gold-review {
        width: 100%;
        justify-content: center;
      }

      .form-wrapper-card {
        padding: 1.5rem 1.25rem;
      }
      .form-inputs-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Extra Small Devices (<= 480px) */
    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.6rem;
      }
      .social-platform-title {
        font-size: 1.1rem;
      }
      .phone-display {
        font-size: 1.05rem;
      }
    }
  `]
})
export class ContactComponent {
  private configService = inject(ConfigService);
  private toastService = inject(ToastService);

  readonly business = this.configService.business;

  name = '';
  phone = '';
  subject = 'استفسار عام';
  message = '';

  copyPhone(phoneNumber: string, label: string): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        this.toastService.show(`تم نسخ رقم ${label} (${phoneNumber}) بنجاح!`, 'success');
      }).catch(() => {
        this.toastService.show(`رقم الهاتف: ${phoneNumber}`, 'info');
      });
    } else {
      this.toastService.show(`رقم الهاتف: ${phoneNumber}`, 'info');
    }
  }

  onSubmitMessage(): void {
    if (!this.name.trim() || !this.phone.trim() || !this.message.trim()) {
      this.toastService.show('يرجى ملء جميع الحقول المطلوبة', 'warning');
      return;
    }

    this.toastService.show('تم استلام رسالتك بنجاح! سيتواصل معك فريق فروتيلا قريباً.', 'success');
    this.name = '';
    this.phone = '';
    this.message = '';
  }
}
