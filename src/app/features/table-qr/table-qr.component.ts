import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FulfillmentService } from '../../core/services/fulfillment.service';
import { findTable, isValidTable } from '../../core/data/restaurant-layout.config';
import { RestaurantTable } from '../../core/models/fulfillment.model';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-table-qr',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="qr-resolver-page container section-padding">
      @if (isResolving()) {
        <div class="loading-card glass-panel animate-fade-in">
          <div class="spinner-bubble">
            <i class="fa-solid fa-qrcode fa-spin"></i>
          </div>
          <h1 class="resolving-title">جاري التعرف على الطاولة...</h1>
          <p class="resolving-desc">نربط طلبك برقم الطاولة المطبوع على الستاند لتجهيز تجربة سريعة ومميزة.</p>
        </div>
      } @else if (invalidTableNumber()) {
        <div class="error-card glass-panel animate-fade-in" role="alert">
          <div class="icon-bubble error-bubble">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <span class="badge badge-special">تنبيه رمز الطاولة</span>
          <h1 class="error-title">رمز الطاولة غير صالح أو غير مسجل</h1>
          <p class="error-desc">
            الرمز الممسوح (<strong>#{{ rawParam() }}</strong>) لا يطابق أي طاولة حالية بالفرع بمول حياة تاون. يرجى التأكد من مسح الرمز المطبوع على ستاند طاولتك أو اختيار رقم الطاولة يدوياً.
          </p>

          <div class="error-actions">
            <a routerLink="/menu" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-book-open"></i> تصفح المنيو واختيار الطاولة
            </a>
            <a routerLink="/" class="btn btn-outline btn-lg">
              <i class="fa-solid fa-house"></i> الصفحة الرئيسية
            </a>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .qr-resolver-page {
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 1rem;
    }
    .loading-card,
    .error-card {
      max-width: 520px;
      width: 100%;
      text-align: center;
      padding: 3rem 2rem;
      border-radius: var(--radius-xl);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }
    .spinner-bubble {
      width: 72px;
      height: 72px;
      border-radius: var(--radius-full);
      background: var(--fruitella-lime-bg);
      color: var(--fruitella-green-800);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      box-shadow: var(--shadow-antigravity-sm);
    }
    .error-bubble {
      width: 72px;
      height: 72px;
      border-radius: var(--radius-full);
      background: #fef2f2;
      color: #dc2626;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
    .resolving-title,
    .error-title {
      font-size: 1.45rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .resolving-desc,
    .error-desc {
      font-size: 0.92rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin: 0;
    }
    .error-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 100%;
      margin-top: 0.5rem;
    }
    .error-actions .btn {
      width: 100%;
      justify-content: center;
    }
  `]
})
export class TableQrComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fulfillmentService = inject(FulfillmentService);
  private toastService = inject(ToastService);

  readonly isResolving = signal<boolean>(true);
  readonly invalidTableNumber = signal<boolean>(false);
  readonly rawParam = signal<string>('');

  ngOnInit(): void {
    const rawId = this.route.snapshot.paramMap.get('tableId') || '';
    this.rawParam.set(rawId);

    // Extract numeric table number (e.g. '5', 'tbl-5', 'table-5')
    const numericMatch = rawId.match(/\d+/);
    const tableNumber = numericMatch ? parseInt(numericMatch[0], 10) : NaN;

    if (!isNaN(tableNumber) && isValidTable(tableNumber)) {
      const table = findTable(tableNumber);
      if (table) {
        // Automatically activate table fulfillment and assign table context
        this.fulfillmentService.setTable(table.tableNumber, undefined, true);

        // Quick visual acknowledgment then seamless transition to menu
        setTimeout(() => {
          this.router.navigate(['/menu'], { replaceUrl: true });
        }, 400);
        return;
      }
    }

    // Invalid table ID provided
    this.isResolving.set(false);
    this.invalidTableNumber.set(true);
    this.toastService.show(`رمز الطاولة (#${rawId}) غير صالح، يرجى اختيار الطاولة يدوياً`, 'warning', 5000);
  }
}
