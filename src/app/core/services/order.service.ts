import { Injectable, signal } from '@angular/core';
import { CustomerInfo, Order, OrderStatus, OrderTrackingStep, PaymentMethod } from '../models/order.model';
import { CartItem, CartSummary } from '../models/cart.model';
import { 
  CarServiceDetails, 
  DeliveryDetails, 
  FulfillmentType, 
  TableServiceDetails, 
  TakeawayDetails 
} from '../models/fulfillment.model';

const ORDERS_STORAGE_KEY = 'fruitella_demo_orders_v2';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly orders = signal<Order[]>(this.loadOrders());

  createOrder(
    customer: CustomerInfo,
    fulfillmentType: FulfillmentType,
    paymentMethod: PaymentMethod,
    items: CartItem[],
    summary: CartSummary,
    details?: {
      tableDetails?: TableServiceDetails;
      carDetails?: CarServiceDetails;
      takeawayDetails?: TakeawayDetails;
      deliveryDetails?: DeliveryDetails;
    }
  ): Order {
    const timestamp = Date.now();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `FRU-${randomSuffix}`;
    const orderId = `order_${timestamp}_${randomSuffix}`;

    let estimatedMinutes = 20;
    if (fulfillmentType === 'table') estimatedMinutes = 10;
    else if (fulfillmentType === 'car') estimatedMinutes = 12;
    else if (fulfillmentType === 'takeaway') estimatedMinutes = 15;
    else if (fulfillmentType === 'delivery') estimatedMinutes = 35;

    const newOrder: Order = {
      orderId,
      orderNumber,
      createdAt: new Date().toISOString(),
      status: 'pending', // Initial status required by Prompt 2
      fulfillmentType,
      paymentMethod,
      customer,
      tableDetails: details?.tableDetails,
      carDetails: details?.carDetails,
      takeawayDetails: details?.takeawayDetails,
      deliveryDetails: details?.deliveryDetails,
      items: [...items],
      summary: { ...summary },
      estimatedMinutes,
      isDemo: true // Explicitly marked as demo for Phase 1/2
    };

    this.orders.update(list => [newOrder, ...list]);
    this.saveOrders();

    return newOrder;
  }

  getOrderById(orderId: string): Order | undefined {
    return this.orders().find(o => o.orderId === orderId);
  }

  getTrackingSteps(order: Order): OrderTrackingStep[] {
    const sequence: OrderStatus[] = ['pending', 'confirmed', 'preparing', 'ready', 'completed'];
    const currentIndex = sequence.indexOf(order.status);
    const isCancelled = order.status === 'cancelled';

    let readyLabel = 'الطلب جاهز للاستلام';
    let readyDesc = 'طلبك جاهز تماماً للاستلام';
    let completedDesc = 'بالهناء والشفاء! نتمنى لك تجربة منعشة مع فروتيلا.';

    if (order.fulfillmentType === 'table') {
      const tNum = order.tableDetails?.tableNumber ? `#${order.tableDetails.tableNumber}` : '';
      readyLabel = `الطلب جاهز ويتم تقديمه لترابيزة ${tNum}`;
      readyDesc = `الويتر يقدم لك المشروبات والحلويات طازجة على ترابيزتك`;
      completedDesc = `نتمنى لك وقتاً ممتعاً في فروتيلا! بالهناء والشفاء.`;
    } else if (order.fulfillmentType === 'car') {
      readyLabel = 'الطلب جاهز وجاري تسليمه لسيارتك';
      readyDesc = `أحد أفراد فريقنا في طريقه لسيارتك (${order.carDetails?.vehiclePlate || ''})`;
      completedDesc = `تم تسليم الطلب لعربيتك، طريق السلامة وبالهناء والشفاء!`;
    } else if (order.fulfillmentType === 'takeaway') {
      readyLabel = 'طلبك جاهز على كاونتر الاستلام';
      readyDesc = 'تفضل باستلام طلبك مغلفاً بعناية من كاونتر فرع حياة تاون';
    } else if (order.fulfillmentType === 'delivery') {
      readyLabel = 'الطيار استلم الطلب وهو في الطريق لعنوانك';
      readyDesc = `مندوب التوصيل في الطريق إلى ${order.deliveryDetails?.district || 'عنوانك'}`;
      completedDesc = `تم توصيل الطلب بنجاح. شكراً لطلبك من فروتيلا!`;
    }

    if (isCancelled) {
      return [
        {
          status: 'cancelled',
          labelAr: 'تم إلغاء الطلب (تجريبي)',
          descriptionAr: 'تم إلغاء هذا الطلب التجريبي بناءً على اختيارك.',
          timeEstimatedMinutes: 0,
          isCompleted: true,
          isCurrent: true
        }
      ];
    }

    return [
      {
        status: 'pending',
        labelAr: 'في انتظار المراجعة (طلب تجريبي)',
        descriptionAr: 'تم تسجيل طلبك بنجاح في الواجهة التجريبية بانتظار التأكيد',
        timeEstimatedMinutes: 2,
        isCompleted: currentIndex >= 0,
        isCurrent: currentIndex === 0
      },
      {
        status: 'confirmed',
        labelAr: 'تم تأكيد الطلب',
        descriptionAr: 'تمت مراجعة الأصناف وإرسال تفاصيل التجهيز للبار',
        timeEstimatedMinutes: 5,
        isCompleted: currentIndex >= 1,
        isCurrent: currentIndex === 1
      },
      {
        status: 'preparing',
        labelAr: 'جاري التحضير والخفق بالبار',
        descriptionAr: 'يتم عصر الفواكه الطازجة وتزيين الوافل والحلويات بعناية',
        timeEstimatedMinutes: 12,
        isCompleted: currentIndex >= 2,
        isCurrent: currentIndex === 2
      },
      {
        status: 'ready',
        labelAr: readyLabel,
        descriptionAr: readyDesc,
        timeEstimatedMinutes: order.estimatedMinutes - 5,
        isCompleted: currentIndex >= 3,
        isCurrent: currentIndex === 3
      },
      {
        status: 'completed',
        labelAr: 'تم التسليم بنجاح',
        descriptionAr: completedDesc,
        timeEstimatedMinutes: order.estimatedMinutes,
        isCompleted: currentIndex >= 4,
        isCurrent: currentIndex === 4
      }
    ];
  }

  advanceDemoStatus(orderId: string): OrderStatus {
    const target = this.getOrderById(orderId);
    if (!target) return 'pending';

    const sequence: OrderStatus[] = ['pending', 'confirmed', 'preparing', 'ready', 'completed'];
    const currentIndex = sequence.indexOf(target.status);
    const nextStatus = currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : sequence[0];

    this.orders.update(list => 
      list.map(o => o.orderId === orderId ? { ...o, status: nextStatus } : o)
    );
    this.saveOrders();

    return nextStatus;
  }

  cancelDemoOrder(orderId: string): void {
    this.orders.update(list => 
      list.map(o => o.orderId === orderId ? { ...o, status: 'cancelled' } : o)
    );
    this.saveOrders();
  }

  private saveOrders(): void {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this.orders()));
    } catch (err) {
      console.warn('Could not save orders to localStorage', err);
    }
  }

  private loadOrders(): Order[] {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as Order[];
      }
    } catch (err) {
      console.warn('Could not load orders from localStorage', err);
    }
    return [];
  }
}
