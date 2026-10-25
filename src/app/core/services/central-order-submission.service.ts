import { Injectable } from '@angular/core';
import { 
  IOrderSubmissionService, 
  OrderSubmissionPayload, 
  OrderSubmissionResult 
} from '../contracts/order-submission.contract';

/**
 * CentralOrderSubmissionService (Future Implementation Staging)
 * ============================================================
 * This service implements the future central restaurant POS / KDS integration.
 * When Fruitella's central backend API is deployed, this service can be activated
 * by swapping the ORDER_SUBMISSION_SERVICE provider in `app.config.ts`.
 *
 * Current Phase: Customers are temporarily directed to WhatsApp via WhatsAppOrderSubmissionService.
 */
@Injectable({
  providedIn: 'root'
})
export class CentralOrderSubmissionService implements IOrderSubmissionService {
  async submitOrder(payload: OrderSubmissionPayload): Promise<OrderSubmissionResult> {
    // When the central backend API is ready:
    // 1. Convert payload to CreateOrderRequestDto
    // 2. Call this.http.post<ApiResponse<CreateOrderResponseDto>>('/api/v1/orders', dto)
    // 3. Return result with confirmed orderNumber and status
    
    throw new Error(
      'نظام الربط المركزي قيد التجهيز حالياً. يتم تقديم الطلبات مؤقتاً عبر واتساب.'
    );
  }
}
