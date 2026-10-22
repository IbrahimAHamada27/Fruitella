import { Component, HostListener, output, signal } from '@angular/core';

@Component({
  selector: 'app-clear-cart-modal',
  standalone: true,
  template: `
    @if (isOpen()) {
      <div 
        class="modal-backdrop animate-fade-in" 
        (click)="cancel()"
        role="dialog"
        aria-modal="true"
        aria-labelledby="clearModalTitle">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <div class="icon-circle">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3 id="clearModalTitle" class="modal-title">إفراغ سلة المشتريات</h3>
          <p class="modal-desc">
            هل أنت متأكد من رغبتك في حذف جميع الأصناف والمشروبات الموجودة في السلة؟ لا يمكن التراجع عن هذا الإجراء.
          </p>

          <div class="modal-actions">
            <button type="button" class="btn btn-outline" (click)="cancel()">
              تراجع والاحتفاظ بالأصناف
            </button>
            <button type="button" class="btn btn-danger" (click)="confirm()">
              <i class="fa-solid fa-trash-can"></i> نعم، إفراغ السلة
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(13, 41, 20, 0.6);
      backdrop-filter: blur(6px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }
    .modal-card {
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(20px);
      border-radius: var(--radius-xl);
      max-width: 440px;
      width: 100%;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      border: 1px solid var(--glass-border);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.25rem;
      padding: 2.25rem 2rem;
    }
    .icon-circle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #fee2e2;
      color: #dc2626;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .modal-title {
      font-size: 1.4rem;
      color: var(--fruitella-green-900);
      margin: 0;
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .modal-desc {
      font-size: 0.92rem;
      color: var(--text-secondary);
      line-height: 1.6;
      text-wrap: pretty;
    }
    .modal-actions {
      display: flex;
      gap: 0.75rem;
      width: 100%;
      margin-top: 0.5rem;
    }
    .modal-actions .btn {
      flex: 1;
      font-size: 0.88rem;
    }
    .btn-danger {
      background: #dc2626;
      color: #ffffff;
      border: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), var(--shadow-antigravity-xs);
    }
    .btn-danger:hover {
      background: #b91c1c;
    }

    @media (max-width: 600px) {
      .modal-card {
        padding: 1.5rem 1.15rem;
      }
      .modal-actions {
        flex-direction: column-reverse;
      }
      .modal-actions .btn {
        width: 100%;
      }
    }
  `]
})
export class ClearCartModalComponent {
  readonly isOpen = signal<boolean>(false);
  readonly confirmed = output<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.cancel();
    }
  }

  open(): void {
    this.isOpen.set(true);
  }

  cancel(): void {
    this.isOpen.set(false);
  }

  confirm(): void {
    this.isOpen.set(false);
    this.confirmed.emit();
  }
}
