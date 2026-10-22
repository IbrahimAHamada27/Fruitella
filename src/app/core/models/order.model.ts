import { CartItem, CartSummary } from './cart.model';
import { 
  CarServiceDetails, 
  DeliveryDetails, 
  FulfillmentType, 
  TableServiceDetails, 
  TakeawayDetails 
} from './fulfillment.model';

export type PaymentMethod = 'cash' | 'instapay' | 'vodafone_cash';

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';

export interface CustomerInfo {
  fullName: string;
  phone: string;
  notes?: string;
}

export interface OrderTrackingStep {
  status: OrderStatus;
  labelAr: string;
  descriptionAr: string;
  timeEstimatedMinutes: number;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface Order {
  orderId: string;
  orderNumber: string;
  createdAt: string;
  status: OrderStatus;
  fulfillmentType: FulfillmentType;
  paymentMethod: PaymentMethod;
  customer: CustomerInfo;
  tableDetails?: TableServiceDetails;
  carDetails?: CarServiceDetails;
  takeawayDetails?: TakeawayDetails;
  deliveryDetails?: DeliveryDetails;
  items: CartItem[];
  summary: CartSummary;
  estimatedMinutes: number;
  isDemo: true; // Explicit flag confirming this is a frontend demonstration
}
