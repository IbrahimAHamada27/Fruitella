import { Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  template: `
    <aside class="toast-wrapper" aria-live="polite">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast-card" [class]="'toast-' + toast.type">
          @if (toast.icon) {
            <i [class]="toast.icon + ' toast-icon'"></i>
          }
          <div class="toast-text">{{ toast.message }}</div>
          <button 
            type="button" 
            class="toast-close" 
            (click)="toastService.remove(toast.id)"
            aria-label="إغلاق التنبيه">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      }
    </aside>
  `,
  styles: [`
    .toast-wrapper {
      position: fixed;
      bottom: 1.5rem;
      left: 1.5rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      pointer-events: none;
      max-width: 380px;
      width: calc(100% - 3rem);
    }
    .toast-card {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.85rem 1.15rem;
      border-radius: var(--radius-lg);
      background: rgba(13, 41, 20, 0.95);
      backdrop-filter: blur(16px);
      color: #ffffff;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), var(--shadow-antigravity-floating);
      font-size: 0.9rem;
      font-weight: 500;
      animation: toastIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-right: 4px solid var(--fruitella-lime);
    }
    .toast-success {
      border-right-color: var(--fruitella-lime);
    }
    .toast-error {
      border-right-color: var(--fruitella-berry);
    }
    .toast-info {
      border-right-color: #38bdf8;
    }
    .toast-warning {
      border-right-color: var(--fruitella-mango);
    }
    .toast-icon {
      font-size: 1.1rem;
      color: var(--fruitella-lime-light);
    }
    .toast-text {
      flex: 1;
      line-height: 1.4;
      text-wrap: pretty;
    }
    .toast-close {
      color: rgba(255, 255, 255, 0.6);
      padding: 0.25rem;
      font-size: 0.85rem;
      background: none;
      border: none;
      cursor: pointer;
      transition: all var(--transition-fast) ease;
    }
    .toast-close:hover {
      color: #ffffff;
      transform: scale(1.1);
    }
    .toast-close:active {
      transform: scale(0.9);
    }
    @keyframes toastIn {
      from { opacity: 0; transform: translateY(16px) scale(0.94); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `]
})
export class ToastContainerComponent {
  readonly toastService = inject(ToastService);
}
