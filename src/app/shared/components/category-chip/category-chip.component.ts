import { Component, input, output } from '@angular/core';
import { ProductCategory } from '../../../core/models/product.model';

@Component({
  selector: 'app-category-chip',
  standalone: true,
  template: `
    <button 
      type="button" 
      class="cat-chip" 
      [class.active]="isActive()"
      (click)="selected.emit(category())">
      @if (category().icon) {
        <i [class]="category().icon + ' chip-icon'"></i>
      }
      <span class="chip-name">{{ category().nameAr }}</span>
      <span class="chip-count">{{ category().itemCount }}</span>
    </button>
  `,
  styles: [`
    .cat-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1.1rem;
      border-radius: var(--radius-full);
      background: var(--fruitella-surface);
      border: 1px solid var(--border-subtle);
      color: var(--text-primary);
      font-weight: 700;
      font-size: 0.88rem;
      transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
    }
    .cat-chip:hover {
      border-color: var(--fruitella-lime);
      background: var(--fruitella-lime-bg);
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-sm);
    }
    .cat-chip:active {
      transform: scale(0.95) !important;
    }
    .cat-chip.active {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      color: #ffffff;
      border-color: var(--fruitella-green-700);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 14px rgba(29, 77, 41, 0.3);
    }
    .cat-chip.active .chip-icon {
      color: var(--fruitella-lime-light);
    }
    .cat-chip.active .chip-count {
      background: rgba(255, 255, 255, 0.22);
      color: #ffffff;
    }
    .chip-icon {
      font-size: 0.85rem;
      color: var(--fruitella-green-600);
      transition: color var(--transition-fast);
    }
    .chip-count {
      background: #f1f5f2;
      color: var(--text-muted);
      font-size: 0.72rem;
      padding: 0.1rem 0.45rem;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-variant-numeric: tabular-nums;
    }

    @media (max-width: 768px) {
      .cat-chip {
        padding: 0.4rem 0.85rem;
        font-size: 0.82rem;
        gap: 0.35rem;
      }
      .chip-icon {
        font-size: 0.78rem;
      }
      .chip-count {
        font-size: 0.7rem;
        padding: 0.08rem 0.35rem;
      }
    }
  `]
})
export class CategoryChipComponent {
  readonly category = input.required<ProductCategory>();
  readonly isActive = input<boolean>(false);
  readonly selected = output<ProductCategory>();
}
