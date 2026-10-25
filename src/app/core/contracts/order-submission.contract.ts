import { InjectionToken } from '@angular/core';
import { CustomerInfo, Order, OrderStatus, PaymentMethod } from '../models/order.model';
import { CartItem, CartSummary } from '../models/cart.model';
import { 
  CarServiceDetails, 
  DeliveryDetails, 
  FulfillmentType, 
  TableServiceDetails, 
  TakeawayDetails 
} from '../models/fulfillment.model';

export interface OrderSubmissionPayload {
  customer: CustomerInfo;
  fulfillmentType: FulfillmentType;
  paymentMethod: PaymentMethod;
  items: CartItem[];
  summary: CartSummary;
  tableDetails?: TableServiceDetails;
  carDetails?: CarServiceDetails;
  takeawayDetails?: TakeawayDetails;
  deliveryDetails?: DeliveryDetails;
  notes?: string;
}

export interface OrderSubmissionResult {
  success: boolean;
  order: Order;
  orderId: string;
  orderNumber: string;
  submissionMethod: 'whatsapp' | 'central_api';
  /** External redirection URL (e.g. WhatsApp wa.me link) if applicable */
  redirectUrl?: string;
  /** Human-readable status message for user feedback */
  messageAr: string;
  /** Plain text message payload that was encoded */
  formattedMessageText?: string;
}

/**
 * Common interface for submitting customer orders.
 * Strategy pattern enables swapping between WhatsApp handoff (current phase)
 * and the future central restaurant POS/KDS ordering system.
 */
export interface IOrderSubmissionService {
  submitOrder(payload: OrderSubmissionPayload): Promise<OrderSubmissionResult>;
}

export const ORDER_SUBMISSION_SERVICE = new InjectionToken<IOrderSubmissionService>('ORDER_SUBMISSION_SERVICE');
