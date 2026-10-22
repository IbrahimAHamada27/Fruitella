import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { BeverageCustomization, CartItem, CartSummary } from '../models/cart.model';
import { Product, ProductAddon, ProductSizeOption } from '../models/product.model';
import { ToastService } from './toast.service';
import { FulfillmentService } from './fulfillment.service';

const CART_STORAGE_KEY = 'fruitella_customer_cart_v2';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private toastService = inject(ToastService);
  private fulfillmentService = inject(FulfillmentService);

  readonly items = signal<CartItem[]>(this.loadFromStorage());

  readonly itemCount = computed(() => 
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly subtotal = computed(() => 
    this.items().reduce((sum, item) => sum + item.totalPrice, 0)
  );

  readonly deliveryFee = computed(() => {
    // Only charge delivery fee when fulfillment method is 'delivery'
    if (this.fulfillmentService.activeType() !== 'delivery') {
      return 0;
    }
    const sub = this.subtotal();
    if (sub === 0) return 0;
    const config = this.fulfillmentService.deliveryConfig;
    return sub >= config.freeDeliveryThreshold ? 0 : config.standardFee;
  });

  readonly total = computed(() => {
    return Math.max(0, this.subtotal() + this.deliveryFee());
  });

  readonly summary = computed<CartSummary>(() => ({
    subtotal: this.subtotal(),
    deliveryFee: this.deliveryFee(),
    total: this.total(),
    itemCount: this.itemCount()
  }));

  constructor() {
    // Auto sync to localStorage
    effect(() => {
      const current = this.items();
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(current));
      } catch (err) {
        console.warn('Could not save cart to localStorage', err);
      }
    });
  }

  addItem(
    product: Product,
    selectedSize: ProductSizeOption,
    selectedAddons: ProductAddon[] = [],
    specialInstructions = '',
    quantity = 1,
    customization?: BeverageCustomization
  ): void {
    const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const sweetenerExtra = customization?.sweetenerPrice ?? (customization?.sweetenerType === 'honey' ? 10 : 0);
    const unitPrice = selectedSize.price + addonsTotal + sweetenerExtra;
    
    // Create unique signature based on size, addons, customization, and instructions
    const addonsSig = selectedAddons.map(a => a.id).sort().join('-');
    const custSig = customization ? `${customization.blendType}_${customization.sweetenerType}_${customization.sugarLevel}_${customization.iceLevel}` : '';
    const cartItemId = `${product.id}_${selectedSize.id}_${addonsSig}_${custSig}_${specialInstructions.trim()}`;

    const existingIndex = this.items().findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      this.items.update(list => {
        const updated = [...list];
        const existing = updated[existingIndex];
        const newQty = existing.quantity + quantity;
        updated[existingIndex] = {
          ...existing,
          quantity: newQty,
          totalPrice: newQty * existing.unitPrice
        };
        return updated;
      });
    } else {
      const newItem: CartItem = {
        cartItemId,
        productId: product.id,
        productSlug: product.slug,
        nameAr: product.nameAr,
        nameEn: product.nameEn,
        image: product.image,
        categoryNameAr: product.categoryNameAr,
        selectedSize,
        selectedAddons: [...selectedAddons],
        customization: customization ? { ...customization, sweetenerPrice: sweetenerExtra } : undefined,
        specialInstructions: specialInstructions.trim(),
        unitPrice,
        quantity,
        totalPrice: unitPrice * quantity
      };

      this.items.update(list => [...list, newItem]);
    }

    const sizeText = selectedSize ? ` (${selectedSize.nameAr})` : '';
    this.toastService.show(`تمت إضافة "${product.nameAr}${sizeText}" إلى السلة 🛒`, 'success', 2000);
  }

  updateQuantity(cartItemId: string, newQty: number): void {
    if (newQty <= 0) {
      this.removeItem(cartItemId);
      return;
    }

    this.items.update(list => 
      list.map(item => {
        if (item.cartItemId === cartItemId) {
          return {
            ...item,
            quantity: newQty,
            totalPrice: newQty * item.unitPrice
          };
        }
        return item;
      })
    );
  }

  updateItemCustomization(
    oldCartItemId: string,
    product: Product,
    newSize: ProductSizeOption,
    newAddons: ProductAddon[],
    newInstructions: string,
    quantity: number,
    newCustomization?: BeverageCustomization
  ): void {
    this.removeItem(oldCartItemId);
    this.addItem(product, newSize, newAddons, newInstructions, quantity, newCustomization);
  }

  removeItem(cartItemId: string): void {
    const removedItem = this.items().find(i => i.cartItemId === cartItemId);
    this.items.update(list => list.filter(item => item.cartItemId !== cartItemId));
    if (removedItem) {
      this.toastService.show(`تم حذف "${removedItem.nameAr}" من السلة`, 'info');
    }
  }

  clearCart(): void {
    this.items.set([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (err) {
      console.warn('Could not clear cart from localStorage', err);
    }
    this.toastService.show('تم إفراغ سلة المشتريات بالكامل', 'info');
  }

  private loadFromStorage(): CartItem[] {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as CartItem[];
      }
    } catch (err) {
      console.warn('Could not load cart from localStorage', err);
    }
    return [];
  }
}
