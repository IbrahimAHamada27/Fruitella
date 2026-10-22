import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="main-footer">
      <!-- Main Footer Content -->
      <div class="container footer-grid">
        <!-- Col 1: Brand Info -->
        <div class="footer-col brand-col">
          <div class="footer-brand">
            <img src="/images/brand/fruitella-logo.jpg" alt="فروتيلا" class="footer-logo" />
            <div>
              <h3 class="footer-brand-title">فروتيلا</h3>
              <p class="footer-brand-sub">{{ business().taglineAr }}</p>
            </div>
          </div>
          <p class="brand-desc">
            نقدم لكم تجربة العصائر الطبيعية الطازجة، السموذي الاستوائي، خلطات الأفوكادو الملكية بالمكسرات، والحلويات الفاخرة بأعلى معايير الجودة والنظافة في مدينة العبور.
          </p>
          <div class="management-badge">
            <i class="fa-solid fa-crown"></i> {{ business().management }}
          </div>
          <div class="social-links">
            <a [href]="business().contacts.facebookUrl" target="_blank" rel="noopener noreferrer" class="social-btn facebook" aria-label="صفحة فيسبوك">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a [href]="'https://wa.me/' + business().contacts.whatsapp" target="_blank" rel="noopener noreferrer" class="social-btn whatsapp" aria-label="مراسلة واتساب">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="social-btn map" aria-label="موقعنا على جوجل مابس">
              <i class="fa-solid fa-location-dot"></i>
            </a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div class="footer-col">
          <h4 class="col-title">أقسام المنيو</h4>
          <ul class="footer-links">
            <li><a routerLink="/menu/power-fruitella"><i class="fa-solid fa-bolt link-bullet"></i> باور فروتيلا وأفوكادو</a></li>
            <li><a routerLink="/menu/mango-world"><i class="fa-solid fa-lemon link-bullet"></i> عالم المانجو</a></li>
            <li><a routerLink="/menu/fresh-juices"><i class="fa-solid fa-glass-water link-bullet"></i> عصائر طبيعية فريش</a></li>
            <li><a routerLink="/menu/sweets-desserts"><i class="fa-solid fa-ice-cream link-bullet"></i> وافل وقشطوطة وحلويات</a></li>
            <li><a routerLink="/menu/mojitos"><i class="fa-solid fa-champagne-glasses link-bullet"></i> عالم الموهيتو المنعش</a></li>
            <li><a routerLink="/menu/family-packs"><i class="fa-solid fa-bottle-droplet link-bullet"></i> عبوات عائلية وحفلات</a></li>
          </ul>
        </div>

        <!-- Col 3: Hours & Service Area -->
        <div class="footer-col">
          <h4 class="col-title">مواعيد العمل والتوصيل</h4>
          <div class="hours-card">
            <div class="hours-row">
              <i class="fa-solid fa-clock"></i>
              <div>
                <strong>{{ business().hours.daysAr }}</strong>
                <p>من {{ business().hours.openTime }} حتى {{ business().hours.closeTime }}</p>
              </div>
            </div>
            <div class="status-indicator">
              <span class="status-dot"></span> مفتوح الآن لاستقبال طلباتكم
            </div>
          </div>
          <p class="service-area">
            <i class="fa-solid fa-motorcycle"></i> خدمة التوصيل السريع متاحة لكافة أحياء مدينة العبور والمناطق المحيطة.
          </p>
        </div>

        <!-- Col 4: Location & Contacts -->
        <div class="footer-col">
          <h4 class="col-title">تفضل بزيارتنا</h4>
          <div class="location-box">
            <p class="address-text">
              <i class="fa-solid fa-map-pin"></i> {{ business().addressAr }}
            </p>
            <a [href]="business().contacts.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="maps-btn">
              <i class="fa-solid fa-map-location-dot"></i> فتح الموقع على خرائط Google
            </a>
          </div>

          <div class="contacts-box">
            <span class="contacts-label">أرقام الطلبات والتوصيل:</span>
            <div class="phone-buttons">
              <a [href]="'tel:' + business().contacts.phone1" class="phone-btn">
                <i class="fa-solid fa-phone"></i> {{ business().contacts.phone1 }}
              </a>
              <a [href]="'tel:' + business().contacts.phone2" class="phone-btn">
                <i class="fa-solid fa-phone"></i> {{ business().contacts.phone2 }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container bottom-inner">
          <p class="copyright">
            جميع الحقوق محفوظة © {{ currentYear }} لمحل <strong>فروتيلا (Fruitella)</strong> — العبور.
          </p>
          <div class="legal-links">
            <a routerLink="/privacy">سياسة الخصوصية</a>
            <span class="sep">•</span>
            <a routerLink="/terms">الشروط والأحكام</a>
            <span class="sep">•</span>
            <a routerLink="/about">قصة علامتنا</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .main-footer {
      background: var(--fruitella-green-900);
      color: rgba(255, 255, 255, 0.85);
      border-top: 4px solid var(--fruitella-lime);
      padding-top: 4rem;
      margin-top: auto;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
      gap: 2.5rem;
      padding-bottom: 3.5rem;
    }
    .footer-col {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
    .footer-brand {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }
    .footer-logo {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      border: 2px solid var(--fruitella-lime);
      object-fit: cover;
    }
    .footer-brand-title {
      color: #ffffff;
      font-size: 1.5rem;
      line-height: 1.1;
      font-weight: 800;
    }
    .footer-brand-sub {
      color: var(--fruitella-lime-light);
      font-size: 0.8rem;
      font-weight: 600;
    }
    .brand-desc {
      font-size: 0.88rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      text-wrap: pretty;
    }
    .management-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-full);
      font-size: 0.82rem;
      color: var(--fruitella-lime-light);
      font-weight: 600;
      width: fit-content;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .social-links {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.25rem;
    }
    .social-btn {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      font-size: 0.95rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    .social-btn:hover {
      background: var(--fruitella-lime);
      color: #ffffff;
      transform: translateY(-3px);
    }
    .social-btn:active {
      transform: scale(0.92);
    }
    .col-title {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 700;
      position: relative;
      padding-bottom: 0.5rem;
      text-wrap: balance;
    }
    .col-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 36px;
      height: 3px;
      background: var(--fruitella-lime);
      border-radius: var(--radius-full);
    }
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .footer-links a {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.75);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all var(--transition-fast) ease;
    }
    .footer-links a:hover {
      color: var(--fruitella-lime-light);
      transform: translateX(-4px);
    }
    .link-bullet {
      font-size: 0.75rem;
      color: var(--fruitella-lime);
    }
    .hours-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 1rem;
      border-radius: var(--radius-md);
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }
    .hours-row {
      display: flex;
      gap: 0.75rem;
      font-size: 0.88rem;
    }
    .hours-row i {
      color: var(--fruitella-lime-light);
      margin-top: 0.25rem;
    }
    .hours-row strong {
      color: #ffffff;
    }
    .hours-row p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.8rem;
      font-variant-numeric: tabular-nums;
    }
    .status-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.82rem;
      color: #86efac;
      font-weight: 600;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
      animation: pulse 2s infinite;
    }
    .service-area {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.5;
      text-wrap: pretty;
    }
    .location-box {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .address-text {
      font-size: 0.88rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      text-wrap: pretty;
    }
    .address-text i {
      color: var(--fruitella-lime-light);
    }
    .maps-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 0.95rem;
      border-radius: var(--radius-full);
      background: rgba(118, 164, 34, 0.2);
      border: 1px solid var(--fruitella-lime);
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 600;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      width: fit-content;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    .maps-btn:hover {
      background: var(--fruitella-lime);
      transform: translateY(-2px);
    }
    .maps-btn:active {
      transform: scale(0.96);
    }
    .contacts-box {
      margin-top: 0.5rem;
    }
    .contacts-label {
      font-size: 0.82rem;
      color: rgba(255, 255, 255, 0.6);
      display: block;
      margin-bottom: 0.5rem;
    }
    .phone-buttons {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .phone-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.85rem;
      border-radius: var(--radius-sm);
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
      font-weight: 700;
      font-size: 0.88rem;
      direction: ltr;
      width: fit-content;
      font-variant-numeric: tabular-nums;
      transition: all var(--transition-fast) ease;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .phone-btn:hover {
      background: rgba(255, 255, 255, 0.16);
      color: var(--fruitella-lime-light);
      transform: translateX(2px);
    }
    .phone-btn:active {
      transform: scale(0.97);
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-block: 1.5rem;
      font-size: 0.82rem;
      color: rgba(255, 255, 255, 0.55);
    }
    .bottom-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .legal-links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .legal-links a {
      color: rgba(255, 255, 255, 0.6);
      transition: color var(--transition-fast) ease;
    }
    .legal-links a:hover {
      color: var(--fruitella-lime-light);
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }

    @media (max-width: 992px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      .bottom-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  private configService = inject(ConfigService);
  readonly business = this.configService.business;
  readonly currentYear = new Date().getFullYear();
}
