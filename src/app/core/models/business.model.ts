export interface BusinessContact {
  phone1: string;
  phone2: string;
  whatsapp: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  googleEmbedMapUrl: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface BusinessHours {
  daysAr: string;
  daysEn: string;
  openTime: string;
  closeTime: string;
  isOpenNow: boolean;
}

export interface BusinessInfo {
  nameAr: string;
  nameEn: string;
  taglineAr: string;
  taglineEn: string;
  secondaryTaglineAr: string;
  addressAr: string;
  addressEn: string;
  management?: string;
  contacts: BusinessContact;
  hours: BusinessHours;
  currencyAr: string;
  currencyEn: string;
  deliveryEstimatedMinutes: number;
}
