export type FulfillmentType = 'table' | 'car' | 'takeaway' | 'delivery';

export type DiningArea = 'indoor' | 'outdoor';

export interface RestaurantTable {
  id: string;
  tableNumber: number;
  area: DiningArea;
  capacity: number;
  areaNameAr: string;
  areaNameEn: string;
  descriptionAr: string;
  isAvailable: boolean;
}

export interface TableServiceDetails {
  area: DiningArea;
  tableNumber: number;
  tableNameAr: string;
  areaNameAr: string;
  detectedFromQr: boolean;
}

export interface CarServiceDetails {
  parkingSpot?: string;
  vehiclePlate: string;
  vehicleModelColor: string;
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
