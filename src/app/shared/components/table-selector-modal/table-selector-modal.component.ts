import { Component, HostListener, inject, signal } from '@angular/core';
import { FulfillmentService } from '../../../core/services/fulfillment.service';
import { DiningArea, RestaurantTable } from '../../../core/models/fulfillment.model';
import { getTablesByArea } from '../../../core/data/restaurant-layout.config';

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
              <h2 id="tableModalTitle" class="modal-title">اختر رقم الترابيزة والمنطقة</h2>
            </div>
            <button type="button" class="btn-close" (click)="close()" aria-label="إغلاق">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Area Toggle: Indoor vs Outdoor -->
          <div class="area-toggle">
            <button 
              type="button" 
              class="area-btn" 
              [class.active]="selectedArea() === 'indoor'"
              (click)="selectedArea.set('indoor')">
              <i class="fa-solid fa-couch"></i>
              <div>
                <strong>الصالة الداخلية</strong>
                <span>مكيفة بإطلالة على بار الفواكه</span>
              </div>
            </button>

            <button 
              type="button" 
              class="area-btn" 
              [class.active]="selectedArea() === 'outdoor'"
              (click)="selectedArea.set('outdoor')">
              <i class="fa-solid fa-cloud-sun"></i>
              <div>
                <strong>الجلسات الخارجية</strong>
                <span>إطلالة على ممشى حياة تاون</span>
              </div>
            </button>
          </div>

          <!-- Table Grid for Selected Area -->
          <div class="tables-section">
            <p class="tables-hint">اختر رقم الطاولة التي تجلس عليها حالياً:</p>
            <div class="tables-grid">
              @for (tbl of currentAreaTables(); track tbl.id) {
                <button 
                  type="button" 
                  class="table-tile" 
                  [class.selected]="selectedTable()?.id === tbl.id"
                  (click)="selectTable(tbl)">
                  <span class="t-num">#{{ tbl.tableNumber }}</span>
                  <span class="t-cap">
                    <i class="fa-solid fa-user-group"></i> {{ tbl.capacity }} أفراد
                  </span>
                  <span class="t-desc">{{ tbl.descriptionAr }}</span>
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
              <i class="fa-solid fa-check"></i> تأكيد اختيار الترابيزة
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
      max-width: 650px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-floating);
      border: 1px solid rgba(13, 41, 20, 0.08);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1rem;
    }
    .modal-title {
      font-size: 1.5rem;
      color: var(--fruitella-green-900);
      margin-top: 0.35rem;
    }
    .btn-close {
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
      cursor: pointer;
      user-select: none;
    }
    .btn-close:hover {
      background: var(--fruitella-berry-bg);
      color: var(--fruitella-berry);
      transform: scale(1.08);
    }
    .btn-close:active {
      transform: scale(0.92) !important;
    }
    .area-toggle {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .area-btn {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 1rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      background: #fafbfa;
      cursor: pointer;
      text-align: right;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
      user-select: none;
    }
    .area-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-sm);
    }
    .area-btn:active {
      transform: scale(0.97) !important;
    }
    .area-btn i {
      font-size: 1.6rem;
      color: var(--fruitella-green-700);
    }
    .area-btn strong {
      display: block;
      color: var(--fruitella-green-900);
      font-size: 0.95rem;
    }
    .area-btn span {
      display: block;
      color: var(--text-muted);
      font-size: 0.78rem;
    }
    .area-btn.active {
      border-color: var(--fruitella-green-700);
      background: var(--fruitella-lime-bg);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 4px 14px rgba(29, 77, 41, 0.16);
    }
    .tables-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .tables-hint {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--text-secondary);
    }
    .tables-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 0.85rem;
      max-height: 280px;
      overflow-y: auto;
      padding: 0.25rem;
    }
    .table-tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem 0.5rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      background: #ffffff;
      cursor: pointer;
      gap: 0.25rem;
      transition: all var(--transition-fast);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-xs);
      user-select: none;
    }
    .table-tile:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-sm);
    }
    .table-tile:active {
      transform: scale(0.95) !important;
    }
    .table-tile.selected {
      border-color: var(--fruitella-green-700);
      background: var(--fruitella-lime-bg);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 2px var(--fruitella-green-700);
    }
    .t-num {
      font-size: 1.35rem;
      font-weight: 900;
      color: var(--fruitella-green-900);
      font-family: var(--font-heading);
      font-variant-numeric: tabular-nums;
    }
    .t-cap {
      font-size: 0.75rem;
      color: var(--fruitella-green-700);
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .t-desc {
      font-size: 0.7rem;
      color: var(--text-muted);
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 110px;
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-subtle);
    }

    @media (max-width: 600px) {
      .modal-card {
        padding: 1.25rem 1rem;
        gap: 1rem;
      }
      .modal-title {
        font-size: 1.25rem;
      }
      .area-toggle {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      .tables-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
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
  readonly selectedArea = signal<DiningArea>('indoor');
  readonly selectedTable = signal<RestaurantTable | undefined>(undefined);

  currentAreaTables(): RestaurantTable[] {
    return getTablesByArea(this.selectedArea());
  }

  open(initialArea?: DiningArea): void {
    if (initialArea) {
      this.selectedArea.set(initialArea);
    } else if (this.fulfillmentService.tableDetails()?.area) {
      this.selectedArea.set(this.fulfillmentService.tableDetails()!.area);
    }
    this.selectedTable.set(undefined);
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
      this.fulfillmentService.setTable(tbl.tableNumber, tbl.area, false);
      this.close();
    }
  }
}
