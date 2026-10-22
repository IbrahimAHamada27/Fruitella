import { ProductAddon, ProductSizeOption } from './product.model';

export type BlendType = 'full' | 'half' | 'froth' | 'top_foam';
export type SweetenerType = 'white_sugar' | 'honey' | 'stevia' | 'no_sugar' | 'none';
export type SugarLevel = 'regular' | 'extra' | 'light' | 'zero' | 'none';
export type IceLevel = 'regular' | 'light' | 'no_ice' | 'none';

export interface BeverageCustomization {
  blendType: BlendType;
  sweetenerType: SweetenerType;
  sugarLevel: SugarLevel;
  iceLevel: IceLevel;
  sweetenerPrice?: number;
  extraNotes?: string;
}

export const BLEND_LABELS: Record<BlendType, string> = {
  full: 'ضرب كامل (ناعم بيوريه)',
  half: 'نص ضربة (قطع فواكه ملموسة)',
  froth: 'وش ضربة (رغوة وبيوريه ثقيل)',
  top_foam: 'وش ضربة (رغوة وبيوريه ثقيل)'
};

export const SWEETENER_LABELS: Record<SweetenerType, string> = {
  white_sugar: 'سكر أبيض',
  honey: 'عسل نحل طبيعي (+10 ج.م)',
  stevia: 'سكر دايت ستيفيا',
  no_sugar: 'بدون سكر (بيور فريش)',
  none: 'بدون سكر (بيور فريش)'
};

export const SUGAR_LEVEL_LABELS: Record<SugarLevel, string> = {
  regular: 'سكر مضبوط',
  extra: 'سكر زيادة',
  light: 'سكر خفيف',
  zero: 'بدون سكر',
  none: 'بدون سكر'
};

export const ICE_LEVEL_LABELS: Record<IceLevel, string> = {
  regular: 'مثلج طبيعي (منعش)',
  light: 'ثلج خفيف',
  no_ice: 'بدون ثلج تماماً',
  none: 'بدون ثلج تماماً'
};

export interface CartItem {
  cartItemId: string;
  productId: string;
  productSlug: string;
  nameAr: string;
  nameEn: string;
  image: string;
  categoryNameAr: string;
  selectedSize: ProductSizeOption;
  selectedAddons: ProductAddon[];
  customization?: BeverageCustomization;
  specialInstructions: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface CartSummary {
  subtotal: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
}
