import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="legal-page container section-padding">
      <div class="legal-card">
        <span class="badge badge-brand">سياسة الخصوصية</span>
        <h1 class="legal-title">سياسة الخصوصية وسرية البيانات</h1>
        <p class="update-date">آخر تحديث: أكتوبر 2026</p>

        <div class="legal-content">
          <section>
            <h2>1. مقدمة</h2>
            <p>
              نحن في محل <strong>فروتيلا (Fruitella)</strong> بمدينة العبور نلتزم بحماية خصوصية عملائنا وزوار موقعنا الإلكتروني. توضح هذه الوثيقة نوعية البيانات التي يتم جمعها وكيفية استخدامها لخدمتكم بأفضل صورة ممكنة.
            </p>
          </section>

          <section>
            <h2>2. البيانات التي نقوم بجمعها</h2>
            <p>لإتمام وتوصيل طلباتكم داخل مدينة العبور، نقوم بجمع البيانات التالية فقط عند قيامكم بتأكيد الطلب:</p>
            <ul>
              <li>الاسم ورقم الهاتف (للتواصل أثناء التوصيل أو الاستلام).</li>
              <li>عنوان التوصيل (الحي، الشارع، رقم العقار بالعبور).</li>
              <li>ملاحظات العميل الخاصة بإعداد الطلب.</li>
            </ul>
          </section>

          <section>
            <h2>3. سرية وأمان البيانات</h2>
            <p>
              لا نقوم بمشاركة أي من بياناتكم مع أي أطراف ثالثة لأغراض تجارية أو إعلانية. تُستخدم البيانات حصرياً من قِبل طاقم عمل فروتيلا لتجهيز وتوصيل طلباتكم.
            </p>
          </section>

          <section>
            <h2>4. التواصل معنا</h2>
            <p>
              إذا كانت لديكم أي استفسارات تتعلق بسياسة الخصوصية، يمكنكم الاتصال المباشر بإدارة الفرع على الرقم: <strong>01037221133</strong>.
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
    .legal-content p, .legal-content ul {
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--text-secondary);
    }
    .legal-content ul {
      padding-right: 1.5rem;
      margin-top: 0.5rem;
    }
    .back-home {
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px dashed var(--border-subtle);
    }
  `]
})
export class PrivacyComponent {}
