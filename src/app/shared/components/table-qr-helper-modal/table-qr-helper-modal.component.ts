import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RESTAURANT_TABLES } from '../../../core/data/restaurant-layout.config';
import { DiningArea } from '../../../core/models/fulfillment.model';
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
              <h2 id="qrModalTitle" class="modal-title">أداة محاكاة وتوليد روابط QR للطاولات</h2>
              <p class="modal-subtitle">خصص واختبر تجربة مسح رمز الطاولة في مول حياة تاون</p>
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
                هذه الأداة مخصصة للعرض وتجربة العميل (Phase 3 Demo). تتيح توليد روابط تحاكي مسح ملصقات الـ QR المثبتة على طاولات الصالة الداخلية وممشى المول.
              </span>
            </div>

            <!-- Area Selector -->
            <div class="filter-group">
              <label class="group-label">1. اختر صالة الجلوس:</label>
              <div class="area-buttons">
                <button 
                  type="button" 
                  class="btn-area" 
                  [class.active]="selectedArea() === 'indoor'"
                  (click)="selectedArea.set('indoor')">
                  <i class="fa-solid fa-couch"></i> الصالة الداخلية (طاولات 1 - 8)
                </button>
                <button 
                  type="button" 
                  class="btn-area" 
                  [class.active]="selectedArea() === 'outdoor'"
                  (click)="selectedArea.set('outdoor')">
                  <i class="fa-solid fa-sun"></i> الجلسات الخارجية (طاولات 11 - 18)
                </button>
              </div>
            </div>

            <!-- Table Selector -->
            <div class="filter-group">
              <label class="group-label">2. اختر رقم الطاولة المراد توليد رابط الـ QR لها:</label>
              <div class="tables-grid">
                @for (t of filteredTables(); track t.tableNumber) {
                  <button 
                    type="button" 
                    class="table-btn" 
                    [class.selected]="selectedTableNumber() === t.tableNumber"
                    (click)="selectedTableNumber.set(t.tableNumber)">
                    <span class="t-num">#{{ t.tableNumber }}</span>
                    <span class="t-cap">{{ t.capacity }} كراسي</span>
                  </button>
                }
              </div>
            </div>

            <!-- Generated URL Preview & Actions -->
            <div class="generated-url-box">
              <label class="url-label">الرابط الناتج (الذي يوجه له رمز الـ QR المطبوع):</label>
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
      max-width: 620px;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      display: flex;
      flex-direction: column;
      overflow: hidden;
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
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: all var(--transition-fast);
    }
    .btn-close:hover {
      background: #fee2e2;
      color: #b91c1c;
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
      gap: 0.5rem;
    }
    .group-label {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .area-buttons {
      display: flex;
      gap: 0.75rem;
    }
    .btn-area {
      flex: 1;
      padding: 0.65rem 1rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      background: #fafbfa;
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
      user-select: none;
    }
    .btn-area:active {
      transform: scale(0.96) !important;
    }
    .btn-area.active {
      background: linear-gradient(135deg, var(--fruitella-green-700), var(--fruitella-green-800));
      color: #ffffff;
      border-color: var(--fruitella-green-700);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 14px rgba(29, 77, 41, 0.25);
    }
    .tables-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));
      gap: 0.5rem;
    }
    .table-btn {
      background: #ffffff;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 0.5rem 0.25rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.15rem;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
      user-select: none;
    }
    .table-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
    }
    .table-btn:active {
      transform: scale(0.94) !important;
    }
    .table-btn.selected {
      background: linear-gradient(135deg, var(--fruitella-lime), #6b951e);
      color: #ffffff;
      border-color: var(--fruitella-lime);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 3px 10px rgba(118, 164, 34, 0.35);
    }
    .t-num {
      font-size: 0.95rem;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
    }
    .t-cap {
      font-size: 0.65rem;
      opacity: 0.85;
      font-variant-numeric: tabular-nums;
    }
    .generated-url-box {
      background: #fafbfa;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 0.85rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .url-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-muted);
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
  `]
})
export class TableQrHelperModalComponent {
  private router = inject(Router);
  private toastService = inject(ToastService);

  readonly isOpen = signal<boolean>(false);
  readonly selectedArea = signal<DiningArea>('indoor');
  readonly selectedTableNumber = signal<number>(1);

  readonly allTables = RESTAURANT_TABLES;

  readonly filteredTables = computed(() => {
    return this.allTables.filter(t => t.area === this.selectedArea());
  });

  readonly generatedUrl = computed(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4300';
    return `${origin}/menu?table=${this.selectedTableNumber()}&area=${this.selectedArea()}`;
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
    this.router.navigate(['/menu'], {
      queryParams: {
        table: this.selectedTableNumber(),
        area: this.selectedArea()
      }
    });
  }

  testInvalidScan(): void {
    this.close();
    this.router.navigate(['/menu'], {
      queryParams: {
        table: 999,
        area: 'indoor'
      }
    });
  }
}
