import { DiningArea, RestaurantTable } from '../models/fulfillment.model';

export interface CarServiceConfig {
  enabled: boolean;
  meetingPointAr: string;
  parkingSpots: string[];
  instructionsAr: string;
}

export interface DeliveryServiceConfig {
  enabled: boolean;
  minimumOrderAmount: number;
  standardFee: number;
  freeDeliveryThreshold: number;
  estimatedMinutes: number;
  cityAr: string;
  districtsAr: string[];
}

export interface TakeawayServiceConfig {
  enabled: boolean;
  estimatedMinutes: number;
  pickupCounterAr: string;
}

export const RESTAURANT_TABLES: RestaurantTable[] = [
  { id: 'tbl-1', tableNumber: 1, descriptionAr: 'طاولة رقم 1', isAvailable: true },
  { id: 'tbl-2', tableNumber: 2, descriptionAr: 'طاولة رقم 2', isAvailable: true },
  { id: 'tbl-3', tableNumber: 3, descriptionAr: 'طاولة رقم 3', isAvailable: true },
  { id: 'tbl-4', tableNumber: 4, descriptionAr: 'طاولة رقم 4', isAvailable: true },
  { id: 'tbl-5', tableNumber: 5, descriptionAr: 'طاولة رقم 5', isAvailable: true },
  { id: 'tbl-6', tableNumber: 6, descriptionAr: 'طاولة رقم 6', isAvailable: true },
  { id: 'tbl-7', tableNumber: 7, descriptionAr: 'طاولة رقم 7', isAvailable: true },
  { id: 'tbl-8', tableNumber: 8, descriptionAr: 'طاولة رقم 8', isAvailable: true },
  { id: 'tbl-9', tableNumber: 9, descriptionAr: 'طاولة رقم 9', isAvailable: true },
  { id: 'tbl-10', tableNumber: 10, descriptionAr: 'طاولة رقم 10', isAvailable: true },
  { id: 'tbl-11', tableNumber: 11, descriptionAr: 'طاولة رقم 11', isAvailable: true },
  { id: 'tbl-12', tableNumber: 12, descriptionAr: 'طاولة رقم 12', isAvailable: true },
  { id: 'tbl-13', tableNumber: 13, descriptionAr: 'طاولة رقم 13', isAvailable: true },
  { id: 'tbl-14', tableNumber: 14, descriptionAr: 'طاولة رقم 14', isAvailable: true },
  { id: 'tbl-15', tableNumber: 15, descriptionAr: 'طاولة رقم 15', isAvailable: true },
  { id: 'tbl-16', tableNumber: 16, descriptionAr: 'طاولة رقم 16', isAvailable: true },
  { id: 'tbl-17', tableNumber: 17, descriptionAr: 'طاولة رقم 17', isAvailable: true },
  { id: 'tbl-18', tableNumber: 18, descriptionAr: 'طاولة رقم 18', isAvailable: true },
  { id: 'tbl-19', tableNumber: 19, descriptionAr: 'طاولة رقم 19', isAvailable: true },
  { id: 'tbl-20', tableNumber: 20, descriptionAr: 'طاولة رقم 20', isAvailable: true },
  { id: 'tbl-21', tableNumber: 21, descriptionAr: 'طاولة رقم 21', isAvailable: true },
  { id: 'tbl-22', tableNumber: 22, descriptionAr: 'طاولة رقم 22', isAvailable: true },
  { id: 'tbl-23', tableNumber: 23, descriptionAr: 'طاولة رقم 23', isAvailable: true },
  { id: 'tbl-24', tableNumber: 24, descriptionAr: 'طاولة رقم 24', isAvailable: true },
  { id: 'tbl-25', tableNumber: 25, descriptionAr: 'طاولة رقم 25', isAvailable: true },
  { id: 'tbl-26', tableNumber: 26, descriptionAr: 'طاولة رقم 26', isAvailable: true },
  { id: 'tbl-27', tableNumber: 27, descriptionAr: 'طاولة رقم 27', isAvailable: true },
  { id: 'tbl-28', tableNumber: 28, descriptionAr: 'طاولة رقم 28', isAvailable: true },
  { id: 'tbl-29', tableNumber: 29, descriptionAr: 'طاولة رقم 29', isAvailable: true },
  { id: 'tbl-30', tableNumber: 30, descriptionAr: 'طاولة رقم 30', isAvailable: true }
];

export const CAR_SERVICE_CONFIG: CarServiceConfig = {
  enabled: true,
  meetingPointAr: 'أمام مدخل 2 — مول حياة تاون، العبور',
  parkingSpots: [
    'موقف أمامي رقم 1 (أمام المحل مباشرة)',
    'موقف أمامي رقم 2',
    'موقف أمامي رقم 3',
    'موقف أمامي رقم 4',
    'موقف جانبي رقم 5',
    'موقف جانبي رقم 6',
    'أخرى (سأذكر تفاصيل السيارة والمكان في الملاحظات)'
  ],
  instructionsAr: 'قم بصف سيارتك أمام المحل أو بمواقف مدخل 2، واكتب رقم السيارة ولونها ليصلك الطلب في عربيتك طازجاً ومثلجاً دون الحاجة للنزول.'
};

export const DELIVERY_SERVICE_CONFIG: DeliveryServiceConfig = {
  enabled: true,
  minimumOrderAmount: 50,
  standardFee: 25,
  freeDeliveryThreshold: 250,
  estimatedMinutes: 6,
  cityAr: 'مدينة العبور',
  districtsAr: [
    'الحي السادس (بجوار مول حياة تاون — التوصيل الأسرع)',
    'الحي السابع',
    'الحي الخامس',
    'الحي الأول (المحليات 5، 6، 8، 12)',
    'الحي الثاني',
    'الحي الثالث',
    'الحي الرابع',
    'الحي الثامن',
    'الحي التاسع',
    'حي الشباب (إسكان 100م و 70م)',
    'حي المستقبل',
    'الإسكان العائلي (1، 2، 3، 4، 5)',
    'كمبوند جنة العبور (Janna)',
    'كمبوند دار مصر العبور',
    'كمبوند سكن مصر العبور',
    'كمبوند الجولف سيتي (Golf City)',
    'حي الفيلات والقصور (الحي الترفيهي)',
    'المنطقة الصناعية الأولى / ب & ج',
    'خط 10 والامتداد الشمالي',
    'أخرى داخل مدينة العبور'
  ]
};

export const TAKEAWAY_SERVICE_CONFIG: TakeawayServiceConfig = {
  enabled: true,
  estimatedMinutes: 6,
  pickupCounterAr: 'كاونتر الاستلام السريع بفرع مول حياة تاون (مدخل 2)'
};

export function isValidTable(tableNumber: number, _area?: DiningArea): boolean {
  if (isNaN(tableNumber)) return false;
  return RESTAURANT_TABLES.some(t => t.tableNumber === tableNumber && t.isAvailable);
}

export function findTable(tableNumber: number, _area?: DiningArea): RestaurantTable | undefined {
  if (isNaN(tableNumber)) return undefined;
  return RESTAURANT_TABLES.find(t => t.tableNumber === tableNumber);
}

export function getAllTables(): RestaurantTable[] {
  return RESTAURANT_TABLES;
}

export function getTablesByArea(_area?: DiningArea): RestaurantTable[] {
  // Indoor/outdoor classification has been unified; returns all available tables
  return RESTAURANT_TABLES;
}

