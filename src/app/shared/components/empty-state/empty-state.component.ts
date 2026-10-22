import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="empty-state-card">
      <div class="icon-circle">
        <i [class]="icon()"></i>
      </div>
      <h3 class="empty-title">{{ title() }}</h3>
      <p class="empty-desc">{{ description() }}</p>

      @if (actionUrl() && actionLabel()) {
        <a [routerLink]="actionUrl()" class="btn btn-primary">
          {{ actionLabel() }}
        </a>
      }
    </div>
  `,
  styles: [`
    .empty-state-card {
      text-align: center;
      padding: 3.5rem 1.5rem;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: var(--glass-blur, blur(14px) saturate(180%));
      -webkit-backdrop-filter: var(--glass-blur, blur(14px) saturate(180%));
      border: 1.5px dashed rgba(29, 77, 41, 0.18);
      border-radius: var(--radius-xl);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-sm);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      max-width: 500px;
      margin: 2rem auto;
      transition: all var(--transition-normal);
    }
    .empty-state-card:hover {
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
      transform: translateY(-2px);
    }
    .icon-circle {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-700);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      box-shadow: 0 0 0 8px rgba(118, 164, 34, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .empty-title {
      font-size: 1.35rem;
      color: var(--fruitella-green-900);
      font-weight: 800;
      text-wrap: balance;
    }
    .empty-desc {
      font-size: 0.95rem;
      color: var(--text-secondary);
      max-width: 360px;
      text-wrap: pretty;
      line-height: 1.6;
    }
  `]
})
export class EmptyStateComponent {
  readonly icon = input<string>('fa-solid fa-lemon');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly actionUrl = input<string>();
  readonly actionLabel = input<string>();
}
