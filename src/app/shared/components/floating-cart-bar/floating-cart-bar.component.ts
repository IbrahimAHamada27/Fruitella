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
        class="floating-cart-fab-wrap animate-fade-in" 
        role="region" 
        aria-label="الوصول السريع للسلة">
        <a routerLink="/cart" class="floating-cart-fab" title="عرض السلة وإتمام الطلب">
          <div class="fab-icon-box">
            <i class="fa-solid fa-basket-shopping"></i>
            <span class="fab-count">{{ cartService.itemCount() }}</span>
          </div>
          <div class="fab-info">
            <span class="fab-total">{{ cartService.total() }} ج.م</span>
            <span class="fab-action">السلة ←</span>
          </div>
        </a>
      </aside>
    }
  `,
  styles: [`
    .floating-cart-fab-wrap {
      position: fixed;
      bottom: 1.5rem;
      left: 1.25rem;
      z-index: 999;
      pointer-events: none;
    }
    .floating-cart-fab {
      pointer-events: auto;
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.45rem 0.95rem 0.45rem 0.65rem;
      background: rgba(13, 41, 20, 0.84);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1.5px solid rgba(118, 164, 34, 0.55);
      border-radius: var(--radius-full);
      color: #ffffff;
      text-decoration: none;
      box-shadow: 0 8px 24px rgba(13, 41, 20, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.25);
      transition: all var(--transition-fast) ease;
      user-select: none;
    }
    .floating-cart-fab:hover {
      background: rgba(13, 41, 20, 0.95);
      border-color: var(--fruitella-lime);
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 12px 28px rgba(13, 41, 20, 0.4);
    }
    .floating-cart-fab:active {
      transform: scale(0.95) !important;
    }
    .fab-icon-box {
      position: relative;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--fruitella-lime), #5e8517);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
    .fab-count {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #e11d48;
      color: #ffffff;
      font-size: 0.65rem;
      font-weight: 800;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(13, 41, 20, 0.9);
      font-variant-numeric: tabular-nums;
    }
    .fab-info {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }
    .fab-total {
      font-size: 0.88rem;
      font-weight: 800;
      color: #ffffff;
      font-variant-numeric: tabular-nums;
    }
    .fab-action {
      font-size: 0.68rem;
      font-weight: 700;
      color: var(--fruitella-lime-light);
    }

    @media (max-width: 480px) {
      .floating-cart-fab-wrap {
        bottom: 1.15rem;
        left: 0.85rem;
      }
      .floating-cart-fab {
        padding: 0.35rem 0.75rem 0.35rem 0.5rem;
        gap: 0.5rem;
        background: rgba(13, 41, 20, 0.88);
      }
      .fab-icon-box {
        width: 32px;
        height: 32px;
        font-size: 0.82rem;
      }
      .fab-total {
        font-size: 0.8rem;
      }
      .fab-action {
        font-size: 0.62rem;
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
