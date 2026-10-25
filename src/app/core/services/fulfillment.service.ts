import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { 
  CarServiceDetails, 
  DeliveryDetails, 
  DiningArea, 
  FulfillmentState, 
  FulfillmentType, 
  TableServiceDetails, 
  TakeawayDetails 
} from '../models/fulfillment.model';
import { 
  CAR_SERVICE_CONFIG, 
  DELIVERY_SERVICE_CONFIG, 
  findTable, 
  isValidTable, 
  RESTAURANT_TABLES, 
  TAKEAWAY_SERVICE_CONFIG 
} from '../data/restaurant-layout.config';
import { ToastService } from './toast.service';

const FULFILLMENT_STORAGE_KEY = 'fruitella_fulfillment_state_v2';

@Injectable({
  providedIn: 'root'
})
export class FulfillmentService {
  private toastService = inject(ToastService);

  readonly activeType = signal<FulfillmentType>('table');
  readonly tableDetails = signal<TableServiceDetails | undefined>(undefined);
  readonly carDetails = signal<CarServiceDetails | undefined>(undefined);
  readonly takeawayDetails = signal<TakeawayDetails | undefined>(undefined);
  readonly deliveryDetails = signal<DeliveryDetails | undefined>(undefined);

  // Layout configs
  readonly allTables = RESTAURANT_TABLES;
  readonly carConfig = CAR_SERVICE_CONFIG;
  readonly deliveryConfig = DELIVERY_SERVICE_CONFIG;
  readonly takeawayConfig = TAKEAWAY_SERVICE_CONFIG;

  readonly isTableSelected = computed(() => {
    return this.activeType() === 'table' && !!this.tableDetails();
  });

  readonly fulfillmentSummaryAr = computed(() => {
    const type = this.activeType();
    switch (type) {
      case 'table': {
        const t = this.tableDetails();
        return t ? `طلب من الترابيزة #${t.tableNumber}` : 'طلب صالة (يرجى اختيار رقم الترابيزة)';
      }
      case 'car': {
        const c = this.carDetails();
        return c ? `الطلب من العربية (لوحة: ${c.vehiclePlate || 'مسجلة'})` : 'الطلب من العربية';
      }
      case 'takeaway':
        return `استلام من المحل (تيك أواي - جاهز خلال 4 - 8 دقائق)`;
      case 'delivery': {
        const d = this.deliveryDetails();
        return d ? `توصيل إلى ${d.district}` : `دليفري لمدينة العبور (رسوم ${this.deliveryConfig.standardFee} ج.م)`;
      }
    }
  });

  constructor() {
    this.loadFromStorage();

    // Auto sync to localStorage
    effect(() => {
      const state: FulfillmentState = {
        type: this.activeType(),
        tableDetails: this.tableDetails(),
        carDetails: this.carDetails(),
        takeawayDetails: this.takeawayDetails(),
        deliveryDetails: this.deliveryDetails()
      };

      try {
        localStorage.setItem(FULFILLMENT_STORAGE_KEY, JSON.stringify(state));
      } catch (err) {
        console.warn('Could not save fulfillment state', err);
      }
    });
  }

  setFulfillmentType(type: FulfillmentType): void {
    this.activeType.set(type);
  }

  setTable(tableNumber: number, _area?: DiningArea, fromQr = false): boolean {
    const table = findTable(tableNumber);
    if (!table || !table.isAvailable) {
      this.toastService.show(`رقم الترابيزة #${tableNumber} غير مسجل أو غير متاح حالياً`, 'warning');
      return false;
    }

    const details: TableServiceDetails = {
      tableNumber: table.tableNumber,
      tableNameAr: `ترابيزة #${table.tableNumber}`,
      detectedFromQr: fromQr
    };

    this.activeType.set('table');
    this.tableDetails.set(details);

    if (fromQr) {
      this.toastService.show(`📍 مرحباً بك في فروتيلا! تم تفعيل الطلب من ترابيزة #${tableNumber}`, 'success', 4500);
    } else {
      this.toastService.show(`تم اختيار ترابيزة #${tableNumber}`, 'success');
    }

    return true;
  }

  setCarDetails(details: CarServiceDetails): void {
    this.activeType.set('car');
    this.carDetails.set(details);
  }

  setTakeawayDetails(details: TakeawayDetails): void {
    this.activeType.set('takeaway');
    this.takeawayDetails.set(details);
  }

  setDeliveryDetails(details: DeliveryDetails): void {
    this.activeType.set('delivery');
    this.deliveryDetails.set(details);
  }

  /**
   * Parses and validates table from URL parameters (e.g. ?table=12)
   */
  processUrlContext(tableParam: string | null, _areaParam?: string | null): { handled: boolean; valid: boolean } {
    if (!tableParam) return { handled: false, valid: false };

    const tableNum = parseInt(tableParam, 10);
    if (isNaN(tableNum)) {
      this.toastService.show('رمز QR الخاص بالترابيزة غير صالح', 'error');
      return { handled: true, valid: false };
    }

    if (isValidTable(tableNum)) {
      const found = findTable(tableNum);
      if (found) {
        this.setTable(found.tableNumber, undefined, true);
        return { handled: true, valid: true };
      }
    }

    // Invalid table number in QR
    this.toastService.show(`رمز QR يشير لترابيزة غير مسجلة (#${tableParam})، يرجى اختيار الترابيزة من القائمة`, 'warning', 5000);
    return { handled: true, valid: false };
  }

  private loadFromStorage(): void {
    try {
      const saved = localStorage.getItem(FULFILLMENT_STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved) as FulfillmentState;
        if (state.type) this.activeType.set(state.type);
        if (state.tableDetails) this.tableDetails.set(state.tableDetails);
        if (state.carDetails) this.carDetails.set(state.carDetails);
        if (state.takeawayDetails) this.takeawayDetails.set(state.takeawayDetails);
        if (state.deliveryDetails) this.deliveryDetails.set(state.deliveryDetails);
      }
    } catch (err) {
      console.warn('Could not load fulfillment state from storage', err);
    }
  }
}
