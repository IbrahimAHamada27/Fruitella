import { Component, HostListener, inject, signal } from '@angular/core';
import { FulfillmentService } from '../../../core/services/fulfillment.service';
import { RestaurantTable } from '../../../core/models/fulfillment.model';
import { getAllTables } from '../../../core/data/restaurant-layout.config';

@Component({
  selector: 'app-table-selector-modal',
  standalone: true,
  template: `
    @if (isOpen()) {
      <div 
        class="modal-backdrop animate-fade-in" 
        (click)="close()"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tableModalTitle">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <div class="modal-header">
            <div>
              <span class="badge badge-brand">فرع مول حياة تاون</span>
              <h2 id="tableModalTitle" class="modal-title">اختر رقم طاولتك</h2>
              <p class="modal-subtitle">كل طاولة مزودة بستاند ورقم رسمي لتقديم الطلب مباشرة إليك</p>
            </div>
            <button type="button" class="btn-close" (click)="close()" aria-label="إغلاق">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- All Tables Grid (Unified, no indoor/outdoor barrier) -->
          <div class="tables-section">
            <div class="tables-grid">
              @for (tbl of allTables; track tbl.id) {
                <button 
                  type="button" 
                  class="table-tile" 
                  [class.selected]="selectedTable()?.id === tbl.id"
                  (click)="selectTable(tbl)">
                  <span class="t-num">#{{ tbl.tableNumber }}</span>
                  <span class="t-desc">طاولة رقم {{ tbl.tableNumber }}</span>
                </button>
              }
            </div>
          </div>

          <!-- Modal Actions -->
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" (click)="close()">
              إلغاء
            </button>
            <button 
              type="button" 
              class="btn btn-primary" 
              [disabled]="!selectedTable()"
              (click)="confirmSelection()">
              <i class="fa-solid fa-check"></i>
              @if (selectedTable(); as t) {
                تأكيد اختيار طاولة #{{ t.tableNumber }}
              } @else {
                يرجى اختيار طاولة أولاً
              }
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
      backdrop-filter: blur(8px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
    }
    .modal-card {
      background: #ffffff;
      border-radius: var(--radius-xl);
      max-width: 680px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      border: 1px solid rgba(13, 41, 20, 0.08);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 1.75rem;
      animation: modalPop 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes modalPop {
      from { opacity: 0; transform: scale(0.96) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1rem;
    }
    .modal-title {
      font-size: 1.4rem;
      color: var(--fruitella-green-900);
      margin-top: 0.35rem;
      font-weight: 800;
    }
    .modal-subtitle {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 0.2rem;
    }
    .btn-close {
      background: #f1f5f2;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 1.1rem;
      transition: all var(--transition-fast) ease;
    }
    .btn-close:hover {
      background: #e2ece5;
      color: var(--fruitella-green-900);
      transform: rotate(90deg);
    }

    /* Tables Grid */
    .tables-section {
      max-height: 52vh;
      overflow-y: auto;
      padding-inline-end: 0.25rem;
    }
    .tables-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
      gap: 0.65rem;
    }
    .table-tile {
      background: #fbfdfb;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 0.85rem 0.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.35rem;
      cursor: pointer;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
    }
    .table-tile:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .table-tile.selected {
      background: #eef8ee;
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 2px var(--fruitella-green-700);
    }
    .t-num {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
    }
    .t-cap {
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      background: rgba(29, 77, 41, 0.08);
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-full);
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }
    .t-desc {
      font-size: 0.75rem;
      color: var(--text-muted);
      line-height: 1.3;
      margin-top: 0.2rem;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.85rem;
      border-top: 1px solid var(--border-subtle);
      padding-top: 1rem;
    }

    @media (max-width: 640px) {
      .modal-card {
        padding: 1.25rem 1rem;
      }
      .tables-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.65rem;
      }
      .modal-footer {
        flex-direction: column-reverse;
        gap: 0.5rem;
      }
      .modal-footer .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class TableSelectorModalComponent {
  private fulfillmentService = inject(FulfillmentService);

  readonly isOpen = signal<boolean>(false);
  readonly selectedTable = signal<RestaurantTable | undefined>(undefined);
  readonly allTables = getAllTables();

  open(): void {
    const currentTableNum = this.fulfillmentService.tableDetails()?.tableNumber;
    if (currentTableNum) {
      const match = this.allTables.find(t => t.tableNumber === currentTableNum);
      this.selectedTable.set(match);
    } else {
      this.selectedTable.set(undefined);
    }
    this.isOpen.set(true);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }

  close(): void {
    this.isOpen.set(false);
  }

  selectTable(table: RestaurantTable): void {
    this.selectedTable.set(table);
  }

  confirmSelection(): void {
    const tbl = this.selectedTable();
    if (tbl) {
      this.fulfillmentService.setTable(tbl.tableNumber, undefined, false);
      this.close();
    }
  }
}
