import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="legal-page container section-padding">
      <div class="legal-card">
        <span class="badge badge-brand">الشروط والأحكام</span>
        <h1 class="legal-title">شروط الخدمة والطلب</h1>
        <p class="update-date">آخر تحديث: أكتوبر 2026</p>

        <div class="legal-content">
          <section>
            <h2>1. عام</h2>
            <p>
              مرحباً بكم في الموقع الإلكتروني لمحل <strong>فروتيلا (Fruitella)</strong> الكائن في مول حياة تاون، الحي السادس، مدينة العبور. يُعد استخدامك لهذا الموقع موافقة على شروط الاستخدام الموضحة أدناه.
            </p>
          </section>

          <section>
            <h2>2. نطاق المرحلة الحالية (Phase 1)</h2>
            <p>
              هذه المرحلة مخصصة لتجربة العملاء واستعراض قائمة المنيو والأسعار الحقيقية ومحاكاة عملية الطلب والتتبع. لا يتم إجراء أي عمليات دفع إلكتروني أو خصم بنكي عبر الموقع في هذه المرحلة.
            </p>
          </section>

          <section>
            <h2>3. خدمة التوصيل</h2>
            <p>
              تغطي خدمة التوصيل كافة أحياء مدينة العبور (الحي الأول وحتى التاسع والمناطق المجاورة). رسوم التوصيل محددة بـ 25 ج.م وتكون مجانية للطلبات التي تتجاوز قيمتها 250 ج.م.
            </p>
          </section>

          <section>
            <h2>4. سياسة الإلغاء والتعديل</h2>
            <p>
              نظراً لأن جميع العصائر تُعصر طازجة وتُحضر فورياً، يرجى التواصل هاتفياً مع الفرع على الرقم <strong>01037221133</strong> فور الرغبة في أي تعديل على الطلب قبل خروجه مع مندوب التوصيل.
            </p>
          </section>
        </div>

        <div class="back-home">
          <a routerLink="/" class="btn btn-primary">
            <i class="fa-solid fa-house"></i> العودة للرئيسية
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-card {
      background: var(--fruitella-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 3rem;
      max-width: 860px;
      margin-inline: auto;
      box-shadow: var(--shadow-sm);
    }
    .legal-title {
      font-size: 2.2rem;
      color: var(--fruitella-green-900);
      margin-block: 0.5rem 0.2rem;
    }
    .update-date {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-subtle);
    }
    .legal-content {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }
    .legal-content section h2 {
      font-size: 1.3rem;
      color: var(--fruitella-green-900);
      margin-bottom: 0.5rem;
    }
    .legal-content p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--text-secondary);
    }
    .back-home {
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px dashed var(--border-subtle);
    }
  `]
})
export class TermsComponent {}
