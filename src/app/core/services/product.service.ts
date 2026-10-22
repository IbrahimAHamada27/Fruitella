import { Injectable, computed, signal } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';
import { FRUITELLA_CATEGORIES, FRUITELLA_PRODUCTS } from '../data/fruitella-menu.data';

function normalizeArabic(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[\u064B-\u065F]/g, '') // Remove Arabic diacritics / tashkeel
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[ؤئ]/g, 'ء');
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _products = signal<Product[]>(FRUITELLA_PRODUCTS);
  private readonly _categories = signal<ProductCategory[]>(FRUITELLA_CATEGORIES);

  readonly products = this._products.asReadonly();
  readonly categories = this._categories.asReadonly();

  readonly featuredProducts = computed(() => 
    this._products().filter(p => p.isFeatured)
  );

  readonly bestSellers = computed(() => 
    this._products().filter(p => p.isBestSeller)
  );

  getProductBySlug(slug: string): Product | undefined {
    return this._products().find(p => p.slug === slug);
  }

  getProductById(id: string): Product | undefined {
    return this._products().find(p => p.id === id);
  }

  getCategoryBySlug(slug: string): ProductCategory | undefined {
    return this._categories().find(c => c.slug === slug);
  }

  getProductsByCategory(categorySlug: string): Product[] {
    return this._products().filter(p => p.categorySlug === categorySlug);
  }

  getRelatedProducts(productId: string, categorySlug: string, limit = 4): Product[] {
    return this._products()
      .filter(p => p.categorySlug === categorySlug && p.id !== productId)
      .slice(0, limit);
  }

  searchProducts(query: string, categorySlug?: string): Product[] {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery && !categorySlug) return this._products();
    if (!cleanQuery && categorySlug) return this.getProductsByCategory(categorySlug);

    const normQuery = normalizeArabic(cleanQuery);

    return this._products().filter(p => {
      const matchesCategory = !categorySlug || p.categorySlug === categorySlug;
      if (!matchesCategory) return false;

      const normNameAr = normalizeArabic(p.nameAr);
      const matchesNameAr = p.nameAr.toLowerCase().includes(cleanQuery) || normNameAr.includes(normQuery);
      const matchesNameEn = p.nameEn.toLowerCase().includes(cleanQuery);
      const matchesDesc = p.descriptionAr.toLowerCase().includes(cleanQuery) || normalizeArabic(p.descriptionAr).includes(normQuery);
      const matchesCatName = normalizeArabic(p.categoryNameAr).includes(normQuery);
      const matchesTags = p.tags.some(tag => tag.toLowerCase().includes(cleanQuery) || normalizeArabic(tag).includes(normQuery));
      const matchesIngredients = (p.ingredientsAr || []).some(ing => normalizeArabic(ing).includes(normQuery));

      return matchesNameAr || matchesNameEn || matchesDesc || matchesCatName || matchesTags || matchesIngredients;
    });
  }
}
