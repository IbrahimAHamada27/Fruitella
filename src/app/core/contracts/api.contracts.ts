/**
 * PROVISIONAL FUTURE BACKEND CONTRACTS & DTOs
 * =========================================================================
 * These interfaces define the proposed contract boundaries for future integration
 * with Fruitella's backend API, POS/Cashier, Kitchen Display System (KDS),
 * and Waiter Tablets.
 * 
 * NOTE: These are strictly provisional proposals and do not represent a final 
 * real API contract. All customer frontend components interact through the
 * Angular service layer (ProductService, CartService, FulfillmentService, OrderService),
 * allowing seamless replacement with HttpClient without modifying UI components.
 */

import { Product, ProductCategory } from '../models/product.model';
import { DiningArea, RestaurantTable, FulfillmentType } from '../models/fulfillment.model';
import { Order, OrderStatus } from '../models/order.model';

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  messageAr: string;
  data: T;
  timestamp: string;
}

// 1. Catalog & Pricing API
export interface IProductCatalogApi {
  getCategories(): Promise<ApiResponse<ProductCategory[]>>;
  getProducts(categorySlug?: string): Promise<ApiResponse<Product[]>>;
  getProductBySlug(slug: string): Promise<ApiResponse<Product | null>>;
  checkProductAvailability(productId: string): Promise<ApiResponse<{ isAvailable: boolean; stockNote?: string }>>;
}

// 2. Table Layout & QR Validation API
export interface ITableLayoutApi {
  getAllTables(): Promise<ApiResponse<RestaurantTable[]>>;
  validateTableQr(tableNumber: number): Promise<ApiResponse<{ isValid: boolean; table?: RestaurantTable }>>;
  getOccupancyStatus(tableNumber: number): Promise<ApiResponse<{ isOccupied: boolean }>>;
}

// 3. Order Submission & Checkout API (For POS & KDS Integration)
export interface CreateOrderRequestDto {
  customer: {
    fullName: string;
    phone: string;
    notes?: string;
  };
  fulfillment: {
    type: FulfillmentType;
    tableDetails?: {
      tableNumber: number;
    };
    carDetails?: {
      vehiclePlate: string;
      vehicleModelColor: string;
      parkingSpot?: string;
    };
    takeawayDetails?: {
      pickupCounterAr?: string;
    };
    deliveryDetails?: {
      city: string;
      district: string;
      street: string;
      building?: string;
      landmark?: string;
    };
  };
  items: Array<{
    productId: string;
    sizeId: string;
    addonIds: string[];
    quantity: number;
    specialInstructions?: string;
    customization?: {
      blendType?: string;
      sweetenerType?: string;
      sugarLevel?: string;
      iceLevel?: string;
    };
  }>;
  paymentMethod: 'cash' | 'instapay' | 'vodafone_cash';
}

export interface CreateOrderResponseDto {
  orderId: string;
  orderNumber: string;
  status: OrderStatus;
  estimatedMinutes: number;
  createdAt: string;
}

export interface IOrderApi {
  submitOrder(dto: CreateOrderRequestDto): Promise<ApiResponse<CreateOrderResponseDto>>;
  getOrderStatus(orderId: string): Promise<ApiResponse<Order>>;
  cancelOrder(orderId: string, reason?: string): Promise<ApiResponse<{ cancelled: boolean }>>;
}

// 4. System Boundaries & Role Interfaces
export interface KitchenDisplayItemDto {
  orderNumber: string;
  tableName?: string;
  carPlate?: string;
  orderType: FulfillmentType;
  items: Array<{
    nameAr: string;
    sizeAr: string;
    addonsAr: string[];
    quantity: number;
    instructions?: string;
    customizationAr?: string;
  }>;
  elapsedMinutes: number;
  status: 'pending' | 'preparing' | 'ready';
}

export interface CashierPosOrderDto {
  orderId: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: string;
  paymentReceived: boolean;
  fulfillmentType: FulfillmentType;
}
