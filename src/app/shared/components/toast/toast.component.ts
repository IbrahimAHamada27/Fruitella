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
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999999;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      pointer-events: none;
      width: auto;
      max-width: 90vw;
    }
    .toast-card {
      pointer-events: auto;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.38rem 0.95rem;
      border-radius: var(--radius-full);
      background: rgba(13, 41, 20, 0.94);
      color: #ffffff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.28);
      font-size: 0.78rem;
      font-weight: 700;
      animation: toastIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-right: 3px solid var(--fruitella-lime);
      white-space: nowrap;
    }
    .toast-success {
      border-right-color: var(--fruitella-lime-light);
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
      font-size: 0.85rem;
      color: var(--fruitella-lime-light);
    }
    .toast-text {
      line-height: 1.25;
    }
    .toast-close {
      color: rgba(255, 255, 255, 0.6);
      padding: 0.15rem;
      font-size: 0.75rem;
      background: none;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast) ease;
    }
    .toast-close:hover {
      color: #ffffff;
      transform: scale(1.15);
    }
    .toast-close:active {
      transform: scale(0.9);
    }
    @keyframes toastIn {
      from { opacity: 0; transform: translateY(-16px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
  `]
})
export class ToastContainerComponent {
  readonly toastService = inject(ToastService);
}
