import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RESTAURANT_TABLES } from '../../../core/data/restaurant-layout.config';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-table-qr-helper-modal',
  standalone: true,
  template: `
    @if (isOpen()) {
      <div 
        class="modal-backdrop animate-fade-in" 
        (click)="close()"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qrModalTitle">
        
        <div class="modal-card" (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="header-icon-box">
              <i class="fa-solid fa-qrcode"></i>
            </div>
            <div>
              <h2 id="qrModalTitle" class="modal-title">أداة محاكاة وتوليد رموز QR لطاولات الفرع</h2>
              <p class="modal-subtitle">اختبر تجربة مسح رمز الطاولة المطبوع على الستاندات بالفرع</p>
            </div>
            <button type="button" class="btn-close" (click)="close()" aria-label="إغلاق">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="modal-body">
            <div class="helper-notice">
              <i class="fa-solid fa-circle-info"></i>
              <span>
                كل طاولة في الفرع مزودة بستاند فيزيائي يحمل رمز QR مخصص. مسح الرمز ينقل العميل تلقائياً إلى صفحة الطلب مع تفعيل رقم الطاولة دون الحاجة لأي اختيار يدوي.
              </span>
            </div>

            <!-- Table Selector -->
            <div class="filter-group">
              <label class="group-label">اختر رقم الطاولة لتوليد رابط ومحاكاة مسح الـ QR:</label>
              <div class="tables-grid">
                @for (t of allTables; track t.tableNumber) {
                  <button 
                    type="button" 
                    class="table-btn" 
                    [class.selected]="selectedTableNumber() === t.tableNumber"
                    (click)="selectedTableNumber.set(t.tableNumber)">
                    <span class="t-num">#{{ t.tableNumber }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Generated URL Preview & Actions -->
            <div class="generated-url-box">
              <label class="url-label">الرابط المبرمج في رمز الـ QR المطبوع على الستاند:</label>
              <div class="url-input-row">
                <input type="text" readonly [value]="generatedUrl()" class="url-input" dir="ltr" />
                <button type="button" class="btn btn-secondary btn-copy" (click)="copyUrl()">
                  <i class="fa-solid fa-copy"></i> نسخ
                </button>
              </div>
            </div>

            <!-- Test Options -->
            <div class="test-actions-bar">
              <button type="button" class="btn btn-primary" (click)="testValidScan()">
                <i class="fa-solid fa-mobile-screen"></i> محاكاة المسح الآن (طاولة #{{ selectedTableNumber() }})
              </button>
              <button type="button" class="btn btn-outline btn-invalid-test" (click)="testInvalidScan()">
                <i class="fa-solid fa-triangle-exclamation"></i> اختبار مسح QR غير صالح (طاولة #999)
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(13, 41, 20, 0.65);
      backdrop-filter: blur(6px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }
    .modal-card {
      background: #ffffff;
      border-radius: var(--radius-xl);
      border: 1px solid rgba(13, 41, 20, 0.08);
      width: 100%;
      max-width: 640px;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      display: flex;
      flex-direction: column;
      animation: modalPop 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes modalPop {
      from { opacity: 0; transform: scale(0.96) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .modal-header {
      padding: 1.5rem 1.75rem;
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
    }
    .header-icon-box {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-md);
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      flex-shrink: 0;
    }
    .modal-title {
      font-size: 1.25rem;
      color: var(--fruitella-green-900);
      margin: 0;
      font-weight: 800;
    }
    .modal-subtitle {
      font-size: 0.82rem;
      color: var(--text-muted);
      margin-top: 0.2rem;
    }
    .btn-close {
      margin-right: auto;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f1f5f2;
      border: none;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .btn-close:hover {
      background: #fee2e2;
      color: #b91c1c;
      transform: rotate(90deg);
    }
    .modal-body {
      padding: 1.5rem 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .helper-notice {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: var(--radius-md);
      padding: 0.75rem 1rem;
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.82rem;
      color: #166534;
      line-height: 1.5;
    }
    .helper-notice i {
      color: var(--fruitella-lime);
      margin-top: 0.2rem;
      font-size: 1rem;
    }
    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .group-label {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .tables-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
      gap: 0.5rem;
      max-height: 220px;
      overflow-y: auto;
      padding: 0.25rem;
    }
    .table-btn {
      background: #f8faf8;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 0.6rem 0.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .table-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
    }
    .table-btn.selected {
      background: #dcfce7;
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 2px var(--fruitella-green-700);
    }
    .table-btn .t-num {
      font-weight: 800;
      font-size: 1.1rem;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
    }
    .table-btn .t-cap {
      font-size: 0.7rem;
      color: var(--text-muted);
    }
    .generated-url-box {
      background: #f8faf9;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .url-label {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text-secondary);
    }
    .url-input-row {
      display: flex;
      gap: 0.5rem;
    }
    .url-input {
      flex: 1;
      height: 38px;
      padding-inline: 0.75rem;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-subtle);
      font-size: 0.85rem;
      background: #ffffff;
      color: var(--text-primary);
      outline: none;
    }
    .btn-copy {
      padding: 0.45rem 1rem;
      font-size: 0.82rem;
    }
    .test-actions-bar {
      display: flex;
      gap: 0.75rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }
    .btn-invalid-test {
      color: #dc2626;
      border-color: #fca5a5;
    }
    .btn-invalid-test:hover {
      background: #fef2f2;
      color: #991b1b;
    }

    @media (max-width: 640px) {
      .tables-grid {
        grid-template-columns: repeat(4, 1fr);
      }
      .test-actions-bar {
        flex-direction: column;
      }
      .test-actions-bar .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class TableQrHelperModalComponent {
  private router = inject(Router);
  private toastService = inject(ToastService);

  readonly isOpen = signal<boolean>(false);
  readonly selectedTableNumber = signal<number>(1);
  readonly allTables = RESTAURANT_TABLES;

  readonly generatedUrl = computed(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200';
    return `${origin}/t/${this.selectedTableNumber()}`;
  });

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  copyUrl(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.generatedUrl()).then(() => {
        this.toastService.show('تم نسخ رابط الـ QR بنجاح!', 'success');
      });
    }
  }

  testValidScan(): void {
    this.close();
    this.router.navigate(['/t', this.selectedTableNumber()]);
  }

  testInvalidScan(): void {
    this.close();
    this.router.navigate(['/t', 999]);
  }
}
