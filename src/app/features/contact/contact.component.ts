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
      <!-- Contact Hero -->
      <section class="contact-hero">
        <div class="container hero-content">
          <span class="badge badge-brand">نسعد بتواصلكم وزيارتكم</span>
          <h1 class="hero-title">تواصل مع فرع فروتيلا — العبور</h1>
          <p class="hero-sub">
            سواء كنت ترغب في الاستفسار عن الأصناف، طلب توصيل للمنزل، أو حجز كميات للمناسبات والحفلات، فريقنا جاهز لخدمتكم يومياً.
          </p>
        </div>
      </section>

      <section class="section-padding container">
        <div class="contact-grid">
          <!-- Information Cards Column -->
          <div class="info-column">
            <!-- Location Card -->
            <div class="info-card">
              <div class="card-icon"><i class="fa-solid fa-map-location-dot"></i></div>
              <div class="card-content">
                <h3>موقع الفرع في العبور</h3>
                <p>{{ business().addressAr }}</p>
                <div class="map-links">
                  <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    <i class="fa-solid fa-location-arrow"></i> فتح في Google Maps
                  </a>
                  <a [href]="business().contacts.googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-review-sm btn-sm">
                    <i class="fa-solid fa-star"></i> قيّمنا على Google ⭐
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone Numbers Card -->
            <div class="info-card">
              <div class="card-icon"><i class="fa-solid fa-phone-volume"></i></div>
              <div class="card-content">
                <h3>أرقام التوصيل والاستفسار</h3>
                <p>يمكنك الاتصال المباشر على الخطوط التالية:</p>
                <div class="phones-list">
                  <a [href]="'tel:' + business().contacts.phone1" class="phone-link">
                    <i class="fa-solid fa-phone"></i> {{ business().contacts.phone1 }}
                  </a>
                  <a [href]="'tel:' + business().contacts.phone2" class="phone-link">
                    <i class="fa-solid fa-phone"></i> {{ business().contacts.phone2 }}
                  </a>
                </div>
              </div>
            </div>

            <!-- WhatsApp Card -->
            <div class="info-card">
              <div class="card-icon whatsapp-icon"><i class="fa-brands fa-whatsapp"></i></div>
              <div class="card-content">
                <h3>الطلب السريع عبر واتساب</h3>
                <p>راسلنا مباشرة على واتساب لإرسال اللوكيشن أو الاستفسار عن العروض:</p>
                <a [href]="'https://wa.me/' + business().contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                  <i class="fa-brands fa-whatsapp"></i> بدء محادثة واتساب
                </a>
              </div>
            </div>

            <!-- Working Hours Card -->
            <div class="info-card">
              <div class="card-icon"><i class="fa-solid fa-clock"></i></div>
              <div class="card-content">
                <h3>مواعيد العمل</h3>
                <p><strong>{{ business().hours.daysAr }}</strong></p>
                <p>من الساعة <strong>{{ business().hours.openTime }}</strong> حتى <strong>{{ business().hours.closeTime }}</strong></p>
                <span class="open-status">مفتوح الآن لاستقبالكم</span>
              </div>
            </div>
          </div>

          <!-- Contact Form Column -->
          <div class="form-column">
            <div class="contact-form-card">
              <h2 class="form-title">أرسل لنا استفسارك أو اقتراحك</h2>
              <p class="form-sub">رأيك يهمنا دائماً لتطوير تجربة فروتيلا في العبور</p>

              <form (ngSubmit)="onSubmitMessage()" class="inquiry-form">
                <div class="form-field">
                  <label for="senderName">الاسم الكريم *</label>
                  <input 
                    id="senderName" 
                    type="text" 
                    [(ngModel)]="name" 
                    name="senderName" 
                    placeholder="مثال: محمد علي" 
                    required 
                    class="form-input" />
                </div>

                <div class="form-field">
                  <label for="senderPhone">رقم الهاتف *</label>
                  <input 
                    id="senderPhone" 
                    type="tel" 
                    [(ngModel)]="phone" 
                    name="senderPhone" 
                    placeholder="مثال: 010xxxxxxxx" 
                    required 
                    class="form-input" 
                    dir="ltr" />
                </div>

                <div class="form-field">
                  <label for="subject">نوع الرسالة</label>
                  <select id="subject" [(ngModel)]="subject" name="subject" class="form-input">
                    <option value="استفسار عام">استفسار عام</option>
                    <option value="حجز كميات وحفلات">حجز كميات وحفلات</option>
                    <option value="اقتراح أو ملاحظة">اقتراح أو ملاحظة</option>
                    <option value="خدمة التوصيل">خدمة التوصيل</option>
                  </select>
                </div>

                <div class="form-field">
                  <label for="msgContent">نص الرسالة *</label>
                  <textarea 
                    id="msgContent" 
                    rows="4" 
                    [(ngModel)]="message" 
                    name="msgContent" 
                    placeholder="اكتب رسالتك أو استفسارك هنا..." 
                    required 
                    class="form-textarea">
                  </textarea>
                </div>

                <button type="submit" class="btn btn-primary submit-btn">
                  <i class="fa-solid fa-paper-plane"></i> إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Interactive Google Maps & Reviews Card -->
        <div class="map-embed-container">
          <div class="map-card-header">
            <div>
              <span class="badge badge-brand"><i class="fa-solid fa-map-pin"></i> الموقع التفاعلي</span>
              <h2 class="map-title">موقع فرع فروتيلا في مول حياة تاون (مدينة العبور)</h2>
              <p class="map-desc">الحي السادس، مدخل 2، مول حياة تاون — متاح أماكن انتظار وخدمة تسليم للسيارة (Car Service).</p>
            </div>
            <div class="map-quick-actions">
              <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                <i class="fa-solid fa-diamond-turn-right"></i> الاتجاهات
              </a>
              <a [href]="business().contacts.googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-review-primary btn-sm">
                <i class="fa-solid fa-star"></i> قيّمنا 5 نجوم على Google
              </a>
            </div>
          </div>

          <!-- Exact Google Maps Embed Iframe -->
          <div class="map-iframe-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14123050.285309974!2d49.9156581!3d30.2082528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581b0071997395%3A0xfe3bf1186790e9a9!2sFruitela!5e0!3m2!1sar!2seg!4v1793128351162!5m2!1sar!2seg" 
              width="100%" 
              height="420" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="strict-origin-when-cross-origin"
              title="موقع فروتيلا على خرائط جوجل">
            </iframe>
          </div>

          <!-- Subtle Google Reviews Feedback Banner -->
          <div class="reviews-feedback-banner">
            <div class="stars-badge">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="feedback-text">
              <h4>يسعدنا رأيك وتقييمك على Google Maps</h4>
              <p>رأيك وتجربتك تهمنا وتساعدنا دائماً في تقديم أفضل وألذ عصائر طبيعية في مدينة العبور.</p>
            </div>
            <a [href]="business().contacts.googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-review-cta">
              <i class="fa-solid fa-pen-to-square"></i> كتابة تقييم في Google
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-hero {
      background: linear-gradient(135deg, var(--fruitella-green-900) 0%, #15381d 100%);
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
      font-size: 2.5rem;
      color: #ffffff;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .hero-sub {
      font-size: 1.05rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
      text-wrap: pretty;
    }

    /* Grid */
    .contact-grid {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 2.5rem;
      align-items: flex-start;
    }
    .info-column {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .info-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      display: flex;
      gap: 1.25rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-sm);
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
    }
    .info-card:hover {
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .card-icon {
      width: 52px;
      height: 52px;
      border-radius: var(--radius-md);
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-700);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.35rem;
      flex-shrink: 0;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .card-icon.whatsapp-icon {
      background: #dcfce7;
      color: #16a34a;
    }
    .card-content {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .card-content h3 {
      font-size: 1.15rem;
      color: var(--fruitella-green-900);
      text-wrap: balance;
    }
    .card-content p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.5;
      text-wrap: pretty;
    }
    .btn-sm {
      padding: 0.45rem 1rem;
      font-size: 0.82rem;
      margin-top: 0.4rem;
      width: fit-content;
    }
    .map-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .btn-review-sm {
      background: rgba(251, 191, 36, 0.15);
      border: 1px solid rgba(251, 191, 36, 0.4);
      color: #b45309;
      font-weight: 600;
    }
    .btn-review-sm:hover {
      background: #fbbf24;
      color: #1f2937;
    }
    .map-embed-container {
      margin-top: 2.75rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .map-card-header {
      padding: 1.5rem 1.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;
      border-bottom: 1px solid var(--border-subtle);
    }
    .map-title {
      font-size: 1.35rem;
      color: var(--fruitella-green-900);
      margin-block: 0.35rem 0.2rem;
    }
    .map-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    .map-quick-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .btn-review-primary {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: #ffffff;
      border: none;
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3);
    }
    .btn-review-primary:hover {
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #ffffff;
      transform: translateY(-2px);
    }
    .map-iframe-wrapper {
      position: relative;
      width: 100%;
      height: 420px;
      line-height: 0;
    }
    .map-iframe-wrapper iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }
    .reviews-feedback-banner {
      padding: 1.25rem 1.75rem;
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border-top: 1px solid #fde68a;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .stars-badge {
      display: flex;
      gap: 0.25rem;
      color: #f59e0b;
      font-size: 1.1rem;
    }
    .feedback-text h4 {
      font-size: 1.05rem;
      color: #92400e;
      margin-bottom: 0.2rem;
    }
    .feedback-text p {
      font-size: 0.86rem;
      color: #b45309;
    }
    .btn-review-cta {
      background: #d97706;
      color: #ffffff;
      font-weight: 700;
      padding: 0.55rem 1.2rem;
      font-size: 0.88rem;
      border-radius: var(--radius-md);
      transition: all var(--transition-fast) ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    .btn-review-cta:hover {
      background: #b45309;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.25);
    }
    .phones-list {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.4rem;
      flex-wrap: wrap;
    }
    .phone-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: #f1f5f2;
      padding: 0.45rem 0.85rem;
      border-radius: var(--radius-full);
      font-weight: 700;
      color: var(--fruitella-green-800);
      font-size: 0.9rem;
      direction: ltr;
      font-variant-numeric: tabular-nums;
      box-shadow: var(--shadow-antigravity-xs);
      transition: all var(--transition-fast) ease;
    }
    .phone-link:hover {
      background: var(--fruitella-lime-bg);
      color: #3b5710;
      transform: translateY(-1px);
    }
    .phone-link:active {
      transform: scale(0.97);
    }
    .open-status {
      display: inline-block;
      margin-top: 0.4rem;
      background: #dcfce7;
      color: #15803d;
      font-weight: 700;
      font-size: 0.78rem;
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-full);
      width: fit-content;
      box-shadow: var(--shadow-antigravity-xs);
    }

    /* Form Column */
    .contact-form-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 2.25rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .form-title {
      font-size: 1.5rem;
      color: var(--fruitella-green-900);
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .form-sub {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      text-wrap: pretty;
    }
    .inquiry-form {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
    }
    .form-field {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .form-field label {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .form-input {
      height: 46px;
      padding-inline: 1rem;
      border-radius: var(--radius-md);
      border: 1.5px solid var(--border-subtle);
      font-size: 0.92rem;
      outline: none;
      transition: all var(--transition-fast) ease;
      font-family: inherit;
    }
    .form-input:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.12);
    }
    .form-textarea {
      padding: 0.85rem 1rem;
      border-radius: var(--radius-md);
      border: 1.5px solid var(--border-subtle);
      font-size: 0.92rem;
      outline: none;
      resize: vertical;
      font-family: inherit;
      transition: all var(--transition-fast) ease;
    }
    .form-textarea:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.12);
    }
    .submit-btn {
      width: 100%;
      padding: 0.9rem;
      font-size: 1rem;
      margin-top: 0.5rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), var(--shadow-antigravity-sm);
    }

    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 640px) {
      .contact-hero {
        padding-block: 2.5rem 2rem;
      }
      .hero-title {
        font-size: 1.75rem;
      }
      .hero-sub {
        font-size: 0.92rem;
      }
      .contact-form-card {
        padding: 1.25rem 1rem;
      }
      .info-card {
        padding: 1.15rem 1rem;
      }
      .phones-list {
        flex-direction: column;
        gap: 0.4rem;
      }
      .phone-link {
        justify-content: center;
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
