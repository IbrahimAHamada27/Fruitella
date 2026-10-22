import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-floating-cart-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (cartService.itemCount() > 0 && !isCheckoutOrCartPage()) {
      <aside 
        class="floating-cart-container animate-fade-in" 
        role="region" 
        aria-label="شريط ملخص السلة السريع">
        <div class="floating-cart-bar">
          <div class="cart-info">
            <div class="cart-icon-bubble">
              <i class="fa-solid fa-basket-shopping"></i>
              <span class="bubble-count">{{ cartService.itemCount() }}</span>
            </div>
            <div class="cart-text">
              <span class="cart-label">السلة الحالية:</span>
              <strong class="cart-total">{{ cartService.total() }} ج.م</strong>
            </div>
          </div>

          <a routerLink="/cart" class="btn-checkout-link">
            <span>عرض السلة وإتمام الطلب</span>
            <i class="fa-solid fa-arrow-left"></i>
          </a>
        </div>
      </aside>
    }
  `,
  styles: [`
    .floating-cart-container {
      position: fixed;
      bottom: 1.25rem;
      left: 1rem;
      right: 1rem;
      z-index: 1000;
      display: flex;
      justify-content: center;
      pointer-events: none;
    }
    .floating-cart-bar {
      pointer-events: auto;
      background: rgba(13, 41, 20, 0.94);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      color: #ffffff;
      border: 1.5px solid var(--fruitella-lime);
      border-radius: var(--radius-full);
      padding: 0.6rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;
      width: 100%;
      max-width: 580px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), var(--shadow-antigravity-floating);
      transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    }
    .cart-info {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }
    .cart-icon-bubble {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(118, 164, 34, 0.25);
      border: 1.5px solid var(--fruitella-lime);
      color: var(--fruitella-lime-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    .bubble-count {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #e11d48;
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 800;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
      box-shadow: 0 2px 5px rgba(225, 29, 72, 0.4);
    }
    .cart-text {
      display: flex;
      flex-direction: column;
    }
    .cart-label {
      font-size: 0.72rem;
      color: rgba(255, 255, 255, 0.75);
    }
    .cart-total {
      font-size: 1.05rem;
      color: #ffffff;
      font-family: var(--font-heading);
      font-variant-numeric: tabular-nums;
    }
    .btn-checkout-link {
      background: linear-gradient(135deg, var(--fruitella-lime), #6b951e);
      color: #ffffff;
      padding: 0.55rem 1.25rem;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 0.88rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 4px 12px rgba(118, 164, 34, 0.4);
      white-space: nowrap;
      cursor: pointer;
    }
    .btn-checkout-link:hover {
      background: linear-gradient(135deg, var(--fruitella-lime-light), var(--fruitella-lime));
      transform: translateX(-4px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 6px 18px rgba(118, 164, 34, 0.55);
    }
    .btn-checkout-link:active {
      transform: scale(0.96) !important;
    }

    @media (max-width: 480px) {
      .floating-cart-container {
        bottom: 0.85rem;
        left: 0.75rem;
        right: 0.75rem;
      }
      .floating-cart-bar {
        padding: 0.5rem 0.85rem;
        gap: 0.65rem;
      }
      .btn-checkout-link {
        padding: 0.45rem 0.9rem;
        font-size: 0.82rem;
      }
      .btn-checkout-link span {
        display: none;
      }
      .btn-checkout-link::after {
        content: 'إتمام الطلب';
      }
    }
  `]
})
export class FloatingCartBarComponent {
  readonly cartService = inject(CartService);
  private router = inject(Router);

  isCheckoutOrCartPage(): boolean {
    const url = this.router.url;
    return url.includes('/cart') || url.includes('/checkout') || url.includes('/order-confirmation');
  }
}
