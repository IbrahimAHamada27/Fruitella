import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-page container section-padding">
      <div class="not-found-card">
        <div class="emoji-circle">
          <i class="fa-solid fa-lemon"></i>
        </div>
        <span class="code-badge">خطأ 404 • الصفحة غير موجودة</span>
        <h1 class="not-found-title">عفواً، ضللت الطريق إلى العصير!</h1>
        <p class="not-found-desc">
          الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو أن الرابط غير صحيح. لا تدع هذا يفسد يومك، عصائر فروتيلا الطازجة بانتظارك!
        </p>

        <div class="actions-group">
          <a routerLink="/" class="btn btn-primary">
            <i class="fa-solid fa-house"></i> العودة للرئيسية
          </a>
          <a routerLink="/menu" class="btn btn-secondary">
            <i class="fa-solid fa-book-open"></i> استعراض المنيو
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-card {
      background: var(--fruitella-surface);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 4rem 2rem;
      text-align: center;
      max-width: 600px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      box-shadow: var(--shadow-sm);
    }
    .emoji-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-lime);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
    }
    .code-badge {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--fruitella-mango-dark);
      background: var(--fruitella-mango-bg);
      padding: 0.25rem 0.85rem;
      border-radius: var(--radius-full);
    }
    .not-found-title {
      font-size: 2rem;
      color: var(--fruitella-green-900);
    }
    .not-found-desc {
      font-size: 1rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }
    .actions-group {
      display: flex;
      gap: 1rem;
      margin-top: 0.75rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})
export class NotFoundComponent {}
