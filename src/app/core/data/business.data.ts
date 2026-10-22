import { BusinessInfo } from '../models/business.model';

export const FRUITELLA_BUSINESS_INFO: BusinessInfo = {
  nameAr: 'فروتيلا',
  nameEn: 'Fruitella',
  taglineAr: 'فروتيلا.. غيرنا مفهوم العصير',
  taglineEn: 'Fruitella.. We Redefined Juice',
  secondaryTaglineAr: 'طبيعي .. منعش .. صحي',
  addressAr: 'العبور، الحي السادس، مدخل 2، مول حياة تاون، مصر',
  addressEn: 'Hayah Town Mall, Entrance 2, 6th District, El Obour, Egypt',
  management: 'إدارة / فؤاد السمنودي',
  contacts: {
    phone1: '01037221133',
    phone2: '01104606760',
    whatsapp: '201037221133',
    googleMapsUrl: 'https://www.google.com/maps/place/Fruitela/@30.2082528,31.4586269,17z/',
    facebookUrl: 'https://web.facebook.com/profile.php?id=61565010939100'
  },
  hours: {
    daysAr: 'يومياً طوال أيام الأسبوع',
    daysEn: 'Daily all week',
    openTime: '09:00 ص',
    closeTime: '02:00 ص (بعد منتصف الليل)',
    isOpenNow: true
  },
  currencyAr: 'ج.م',
  currencyEn: 'EGP',
  deliveryEstimatedMinutes: 35
};

export const FRUITELLA_ANNOUNCEMENTS = [
  '⚡ توصيل سريع لجميع أحياء مدينة العبور | اطلب الآن واستمتع بالعصائر الفريش',
  '🥑 جرب مشروب الأفوكادو بالمكسرات والعسل الطبيعي الحصري من فروتيلا',
  '🥭 موسم المانجو الفاخر مستمر — عصائر وسموذي وقطع مانجو طازجة يومياً'
];
