import { Component, input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  standalone: true,
  template: `
    <span class="price-container" [class.price-lg]="size() === 'lg'" [class.price-sm]="size() === 'sm'">
      @if (showPrefix()) {
        <span class="price-prefix">من</span>
      }
      <span class="price-amount">{{ amount() }}</span>
      <span class="price-currency">ج.م</span>
    </span>
  `,
  styles: [`
    .price-container {
      display: inline-flex;
      align-items: baseline;
      gap: 0.25rem;
      font-weight: 800;
      color: var(--fruitella-green-800);
      font-family: var(--font-heading);
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.02em;
    }
    .price-prefix {
      font-size: 0.78em;
      font-weight: 500;
      color: var(--text-muted);
      margin-left: 0.15rem;
    }
    .price-amount {
      font-size: 1.25rem;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }
    .price-currency {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--fruitella-green-600);
    }
    .price-lg .price-amount {
      font-size: 1.85rem;
    }
    .price-lg .price-currency {
      font-size: 0.95rem;
    }
    .price-sm .price-amount {
      font-size: 0.98rem;
    }
    .price-sm .price-currency {
      font-size: 0.72rem;
    }
  `]
})
export class PriceDisplayComponent {
  readonly amount = input.required<number>();
  readonly showPrefix = input<boolean>(false);
  readonly size = input<'sm' | 'md' | 'lg'>('md');
}
