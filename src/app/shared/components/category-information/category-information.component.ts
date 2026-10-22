import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category-information',
  standalone: true,
  template: `
    @if (information() && information().length > 0) {
      <aside class="category-info-card" [style.--cat-accent]="themeColor() || 'var(--fruitella-green-700)'" aria-labelledby="cat-info-heading">
        <div class="card-header">
          <div class="header-icon-wrap" aria-hidden="true">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div class="header-text">
            <h3 id="cat-info-heading" class="info-title">معلومات تهمك</h3>
            @if (categoryName()) {
              <span class="info-subtitle">إرشادات مفيدة عند طلب أصناف قسم {{ categoryName() }}</span>
            }
          </div>
        </div>

        <ul class="info-list" role="list">
          @for (point of information(); track point) {
            <li class="info-item">
              <span class="bullet-dot" aria-hidden="true"></span>
              <span class="bullet-text">{{ point }}</span>
            </li>
          }
        </ul>
      </aside>
    }
  `,
  styles: [`
    .category-info-card {
      margin-top: 2.25rem;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(246, 250, 246, 0.88) 100%);
      backdrop-filter: var(--glass-blur, blur(14px) saturate(180%));
      -webkit-backdrop-filter: var(--glass-blur, blur(14px) saturate(180%));
      border: 1px solid rgba(29, 77, 41, 0.1);
      border-right: 4px solid var(--cat-accent, var(--fruitella-green-700));
      border-radius: var(--radius-xl, 16px);
      padding: 1.35rem 1.6rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-sm);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }

    .category-info-card:hover {
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
      border-color: rgba(29, 77, 41, 0.2);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px dashed rgba(29, 77, 41, 0.15);
    }

    .header-icon-wrap {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: var(--fruitella-lime-bg, #f1f8ea);
      color: var(--cat-accent, var(--fruitella-green-800));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.15rem;
      flex-shrink: 0;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 8px rgba(29, 77, 41, 0.08);
    }

    .info-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--fruitella-green-900, #0d2914);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-wrap: balance;
    }

    .info-subtitle {
      font-size: 0.8rem;
      color: var(--text-muted, #5f7566);
      margin-top: 0.15rem;
      display: block;
    }

    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary, #2d4133);
    }

    .bullet-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--cat-accent, var(--fruitella-lime, #76a422));
      margin-top: 0.45rem;
      flex-shrink: 0;
      box-shadow: 0 0 0 3px rgba(118, 164, 34, 0.2);
    }

    .bullet-text {
      flex: 1;
      text-wrap: pretty;
    }

    @media (max-width: 768px) {
      .category-info-card {
        margin-top: 1.5rem;
        padding: 1.15rem 1.15rem;
        border-radius: 14px;
      }
      .card-header {
        gap: 0.75rem;
        margin-bottom: 0.85rem;
        padding-bottom: 0.65rem;
      }
      .header-icon-wrap {
        width: 36px;
        height: 36px;
        font-size: 1.05rem;
      }
      .info-title {
        font-size: 1.02rem;
      }
      .info-subtitle {
        font-size: 0.76rem;
      }
      .info-item {
        font-size: 0.85rem;
        line-height: 1.5;
        gap: 0.6rem;
      }
      .bullet-dot {
        margin-top: 0.4rem;
        width: 7px;
        height: 7px;
      }
    }
  `]
})
export class CategoryInformationComponent {
  readonly information = input.required<string[]>();
  readonly categoryName = input<string>('');
  readonly themeColor = input<string>('');
}
