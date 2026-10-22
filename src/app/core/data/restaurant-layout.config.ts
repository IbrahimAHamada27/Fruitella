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
  // --- Indoor Tables (صالة المحل الداخلية المكيفة) ---
  { id: 'in-1', tableNumber: 1, area: 'indoor', capacity: 2, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة ثنائية بجوار بار العصائر', isAvailable: true },
  { id: 'in-2', tableNumber: 2, area: 'indoor', capacity: 2, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة ثنائية هادئة', isAvailable: true },
  { id: 'in-3', tableNumber: 3, area: 'indoor', capacity: 4, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة عائلية وسط الصالة', isAvailable: true },
  { id: 'in-4', tableNumber: 4, area: 'indoor', capacity: 4, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة عائلية مريحة', isAvailable: true },
  { id: 'in-5', tableNumber: 5, area: 'indoor', capacity: 6, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'كنبة عائلية كبيرة', isAvailable: true },
  { id: 'in-6', tableNumber: 6, area: 'indoor', capacity: 4, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة رباعية بإطلالة زجاجية', isAvailable: true },
  { id: 'in-7', tableNumber: 7, area: 'indoor', capacity: 2, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة ثنائية سريعة', isAvailable: true },
  { id: 'in-8', tableNumber: 8, area: 'indoor', capacity: 6, areaNameAr: 'الصالة الداخلية', areaNameEn: 'Indoor Area', descriptionAr: 'طاولة ركنية واسعة للمجموعات', isAvailable: true },

  // --- Outdoor Tables (الجلسات الخارجية في ممشى مول حياة تاون) ---
  { id: 'out-11', tableNumber: 11, area: 'outdoor', capacity: 4, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'جلسة خارجية أمام نافورة المول', isAvailable: true },
  { id: 'out-12', tableNumber: 12, area: 'outdoor', capacity: 4, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'جلسة خارجية مميزة في الهواء الطلق', isAvailable: true },
  { id: 'out-13', tableNumber: 13, area: 'outdoor', capacity: 4, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'جلسة مظللة مريحة', isAvailable: true },
  { id: 'out-14', tableNumber: 14, area: 'outdoor', capacity: 6, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'جلسة عائلية كبيرة بالخارج', isAvailable: true },
  { id: 'out-15', tableNumber: 15, area: 'outdoor', capacity: 2, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'طاولة ثنائية خارجية', isAvailable: true },
  { id: 'out-16', tableNumber: 16, area: 'outdoor', capacity: 4, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'جلسة خارجية بجوار مدخل 2', isAvailable: true },
  { id: 'out-17', tableNumber: 17, area: 'outdoor', capacity: 4, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'جلسة خارجية مسائية هادئة', isAvailable: true },
  { id: 'out-18', tableNumber: 18, area: 'outdoor', capacity: 6, areaNameAr: 'الجلسات الخارجية', areaNameEn: 'Outdoor Patio', descriptionAr: 'طاولة عائلية واسعة', isAvailable: true }
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
  estimatedMinutes: 30,
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
  estimatedMinutes: 12,
  pickupCounterAr: 'كاونتر الاستلام السريع بفرع مول حياة تاون (مدخل 2)'
};

export function isValidTable(tableNumber: number, area?: DiningArea): boolean {
  if (isNaN(tableNumber)) return false;
  return RESTAURANT_TABLES.some(t => {
    const matchesNum = t.tableNumber === tableNumber;
    return area ? matchesNum && t.area === area : matchesNum;
  });
}

export function findTable(tableNumber: number, area?: DiningArea): RestaurantTable | undefined {
  if (isNaN(tableNumber)) return undefined;
  return RESTAURANT_TABLES.find(t => {
    const matchesNum = t.tableNumber === tableNumber;
    return area ? matchesNum && t.area === area : matchesNum;
  });
}

export function getTablesByArea(area: DiningArea): RestaurantTable[] {
  return RESTAURANT_TABLES.filter(t => t.area === area);
}
