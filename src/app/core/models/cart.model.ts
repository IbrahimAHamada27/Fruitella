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

export interface IceCreamCustomization {
  selectedFlavors: string[];
  servingType?: string;
  sauce?: string;
}

export const FRUITELLA_ICE_CREAM_FLAVORS = [
  { id: 'mango', nameAr: 'مانجو فريش طبيعي', icon: '🥭', desc: 'قطع مانجو طازجة مع بيوريه مثلج' },
  { id: 'chocolate', nameAr: 'شوكولاتة بلجيكية غنية', icon: '🍫', desc: 'كاكاو خام فاخر وحليب دسم' },
  { id: 'vanilla', nameAr: 'فانيليا مدغشقر بيور', icon: '🍦', desc: 'كريمة فانيليا مخفوقة طبيعية' },
  { id: 'strawberry', nameAr: 'فراولة بلدي طازجة', icon: '🍓', desc: 'حبات فراولة فريش مع الحليب' },
  { id: 'oreo', nameAr: 'أوريو كريم مقرمش', icon: '🍪', desc: 'بسكويت أوريو مكسر مع الكريمة' },
  { id: 'lotus', nameAr: 'لوتس بيسكوف مكرمل', icon: '🥮', desc: 'بسكويت وصوص لوتس أصلي' },
  { id: 'pistachio', nameAr: 'فستق بيستاشيو حلبي', icon: '🌰', desc: 'معجون فستق طبيعي ومكسرات' },
  { id: 'mastic', nameAr: 'مستكة وقشطة بالعسل', icon: '🍯', desc: 'طعم شرقي أصيل بالقشطة والمستكة' },
  { id: 'nutella', nameAr: 'نوتيلا بالبندق', icon: '🍫', desc: 'شوكولاتة نوتيلا أصلية وبندق محمص' },
  { id: 'blueberry', nameAr: 'توت أزرق (بلوبيري)', icon: '🫐', desc: 'توت أزرق منعش قليل السكر' },
  { id: 'lemon_mint', nameAr: 'ليمون نعناع إيطالي', icon: '🍋', desc: 'سوربيه منعش جداً صيفي' },
  { id: 'salted_caramel', nameAr: 'كراميل مملح توفي', icon: '🍬', desc: 'صوص كراميل ناعم مع لمسة ملح خفيف' },
  { id: 'kitkat', nameAr: 'كيت كات كرانتش', icon: '🍫', desc: 'رقائق ويفر كيت كات المقرمشة' },
  { id: 'raffaello', nameAr: 'رافايلو جوز هند بالحليب', icon: '🥥', desc: 'جوز هند ناعم مع وايت كريم' }
];

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
  iceCreamCustomization?: IceCreamCustomization;
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
