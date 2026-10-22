import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  template: `
    <div class="quantity-wrapper" [class.size-sm]="size() === 'sm'">
      <button 
        type="button" 
        class="qty-btn" 
        (click)="decrement()"
        [disabled]="quantity() <= min()"
        aria-label="تقليل الكمية">
        <i class="fa-solid fa-minus"></i>
      </button>
      <span class="qty-display">{{ quantity() }}</span>
      <button 
        type="button" 
        class="qty-btn" 
        (click)="increment()"
        [disabled]="quantity() >= max()"
        aria-label="زيادة الكمية">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  `,
  styles: [`
    .quantity-wrapper {
      display: inline-flex;
      align-items: center;
      background: #f1f5f2;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-full);
      padding: 0.2rem;
      gap: 0.35rem;
      box-shadow: inset 0 1px 2px rgba(13, 41, 20, 0.05);
    }
    .qty-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #ffffff;
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 1px 3px rgba(0,0,0,0.06);
      cursor: pointer;
      user-select: none;
    }
    .qty-btn:hover:not(:disabled) {
      background: var(--fruitella-green-700);
      color: #ffffff;
      transform: scale(1.08);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 6px rgba(29, 77, 41, 0.25);
    }
    .qty-btn:active:not(:disabled) {
      transform: scale(0.9) !important;
    }
    .qty-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .qty-display {
      min-width: 28px;
      text-align: center;
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--fruitella-green-900);
      font-family: var(--font-heading);
      font-variant-numeric: tabular-nums;
      user-select: none;
    }
    .size-sm .qty-btn {
      width: 26px;
      height: 26px;
      font-size: 0.7rem;
    }
    .size-sm .qty-display {
      min-width: 20px;
      font-size: 0.85rem;
    }
  `]
})
export class QuantitySelectorComponent {
  readonly quantity = input<number>(1);
  readonly min = input<number>(1);
  readonly max = input<number>(99);
  readonly size = input<'sm' | 'md'>('md');
  readonly quantityChange = output<number>();

  decrement(): void {
    if (this.quantity() > this.min()) {
      this.quantityChange.emit(this.quantity() - 1);
    }
  }

  increment(): void {
    if (this.quantity() < this.max()) {
      this.quantityChange.emit(this.quantity() + 1);
    }
  }
}
