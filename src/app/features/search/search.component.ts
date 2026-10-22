import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, ProductCardComponent, EmptyStateComponent],
  template: `
    <div class="search-page container section-padding">
      <div class="search-header">
        <h1 class="search-page-title">البحث في المنيو</h1>
        
        <div class="search-input-wrapper">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input 
            type="search" 
            [(ngModel)]="query" 
            placeholder="ابحث عن مشروب، صنف، أو مكون (مانجو، أفوكادو، وافل)..." 
            class="main-search-input" />
        </div>
      </div>

      <!-- Results Count -->
      <div class="results-bar">
        <span class="count-text">
          @if (query()) {
            نتائج البحث عن "<strong>{{ query() }}</strong>": ({{ searchResults().length }} صنف)
          } @else {
            جميع الأصناف المتاحة ({{ searchResults().length }} صنف)
          }
        </span>
      </div>

      @if (searchResults().length > 0) {
        <div class="products-grid">
          @for (prod of searchResults(); track prod.id) {
            <app-product-card 
              [product]="prod">
            </app-product-card>
          }
        </div>
      } @else {
        <app-empty-state 
          icon="fa-solid fa-magnifying-glass"
          title="عفواً، لا توجد نتائج مطابقة"
          [description]="'لم نجد أي صنف يطابق البحث: ' + query() + '. جرب البحث بكلمة أخرى مثل مانجو، قشطوطة، أفوكادو.'"
          actionUrl="/menu"
          actionLabel="عرض المنيو بالكامل">
        </app-empty-state>
      }
    </div>
  `,
  styles: [`
    .search-header {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      max-width: 720px;
      margin-inline: auto;
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .search-page-title {
      font-size: 2.4rem;
      color: var(--fruitella-green-900);
      letter-spacing: -0.02em;
      text-wrap: balance;
    }
    .search-input-wrapper {
      position: relative;
      width: 100%;
    }
    .main-search-input {
      width: 100%;
      height: 56px;
      padding: 0 3.5rem 0 1.5rem;
      border-radius: var(--radius-full);
      border: 1.5px solid var(--border-subtle);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      font-size: 1.05rem;
      outline: none;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-sm);
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
    }
    .main-search-input:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 0 0 4px rgba(29, 77, 41, 0.12), var(--shadow-antigravity-md);
    }
    .search-icon {
      position: absolute;
      right: 22px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--fruitella-green-700);
      font-size: 1.25rem;
    }
    .results-bar {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-subtle);
    }
    .count-text {
      font-size: 1rem;
      color: var(--text-secondary);
      font-variant-numeric: tabular-nums;
    }
    .products-grid {
      display: grid;
    }
    @media (max-width: 640px) {
      .search-header {
        margin-bottom: 1.5rem;
        gap: 0.75rem;
      }
      .search-page-title {
        font-size: 1.55rem;
      }
      .main-search-input {
        height: 48px;
        font-size: 0.92rem;
        padding: 0 2.8rem 0 1rem;
      }
      .search-icon {
        right: 14px;
        font-size: 1.05rem;
      }
      .results-bar {
        margin-bottom: 1rem;
      }
      .count-text {
        font-size: 0.88rem;
      }
    }
  `]
})
export class SearchComponent {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  query = signal<string>('');

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.query.set(params['q'] || '');
    });
  }

  readonly searchResults = computed(() => {
    return this.productService.searchProducts(this.query());
  });
}
