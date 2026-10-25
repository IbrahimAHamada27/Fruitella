export type FulfillmentType = 'table' | 'car' | 'takeaway' | 'delivery';

export type DiningArea = 'indoor' | 'outdoor';

export interface RestaurantTable {
  id: string;
  tableNumber: number;
  capacity?: number;
  descriptionAr: string;
  isAvailable: boolean;
  qrCodeUrl?: string;
  area?: DiningArea;
  areaNameAr?: string;
  areaNameEn?: string;
}

export interface TableServiceDetails {
  tableNumber: number;
  tableNameAr: string;
  detectedFromQr: boolean;
  area?: DiningArea;
  areaNameAr?: string;
}

export interface CarServiceDetails {
  parkingSpot?: string;
  vehiclePlate?: string;
  vehicleModel?: string;
  vehicleColor?: string;
  vehicleModelColor?: string;
  meetingPointAr?: string;
  notes?: string;
}

export interface TakeawayDetails {
  customerName?: string;
  customerPhone?: string;
  pickupCounterAr?: string;
  pickupTimeEstimateMinutes?: number;
  notes?: string;
}

export interface DeliveryDetails {
  customerName?: string;
  customerPhone?: string;
  alternativePhone?: string;
  governorate?: string;
  city: string;
  district: string;
  street: string;
  building?: string;
  floor?: string;
  apartment?: string;
  landmark?: string;
  notes?: string;
  deliveryFee: number;
  estimatedMinutes?: number;
}

export interface FulfillmentState {
  type: FulfillmentType;
  tableDetails?: TableServiceDetails;
  carDetails?: CarServiceDetails;
  takeawayDetails?: TakeawayDetails;
  deliveryDetails?: DeliveryDetails;
}
