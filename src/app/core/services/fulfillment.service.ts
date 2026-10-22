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
        return t ? `طلب من الترابيزة #${t.tableNumber} (${t.areaNameAr})` : 'طلب من الترابيزة (يرجى اختيار رقم الترابيزة)';
      }
      case 'car': {
        const c = this.carDetails();
        return c ? `الطلب من العربية (لوحة: ${c.vehiclePlate})` : 'الطلب من العربية';
      }
      case 'takeaway':
        return `استلام من المحل (تيك أواي - جاهز خلال ${this.takeawayConfig.estimatedMinutes} دقيقة)`;
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

  setTable(tableNumber: number, area: DiningArea, fromQr = false): boolean {
    const table = findTable(tableNumber, area);
    if (!table) {
      this.toastService.show(`رقم الترابيزة ${tableNumber} غير متاح في ${area === 'indoor' ? 'الصالة الداخلية' : 'الجلسات الخارجية'}`, 'warning');
      return false;
    }

    const details: TableServiceDetails = {
      tableNumber: table.tableNumber,
      area: table.area,
      tableNameAr: `ترابيزة ${table.tableNumber}`,
      areaNameAr: table.areaNameAr,
      detectedFromQr: fromQr
    };

    this.activeType.set('table');
    this.tableDetails.set(details);

    if (fromQr) {
      this.toastService.show(`📍 مرحباً بك في فروتيلا! تم تفعيل الطلب من ترابيزة #${tableNumber} (${table.areaNameAr})`, 'success', 4500);
    } else {
      this.toastService.show(`تم اختيار ترابيزة #${tableNumber} (${table.areaNameAr})`, 'success');
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
   * Parses and validates table & area from URL parameters (e.g. ?table=12&area=outdoor)
   */
  processUrlContext(tableParam: string | null, areaParam: string | null): { handled: boolean; valid: boolean } {
    if (!tableParam) return { handled: false, valid: false };

    const tableNum = parseInt(tableParam, 10);
    if (isNaN(tableNum)) {
      this.toastService.show('رمز QR الخاص بالترابيزة غير صالح', 'error');
      return { handled: true, valid: false };
    }

    let parsedArea: DiningArea | undefined = undefined;
    if (areaParam === 'indoor' || areaParam === 'outdoor') {
      parsedArea = areaParam;
    }

    if (isValidTable(tableNum, parsedArea)) {
      const found = findTable(tableNum, parsedArea);
      if (found) {
        this.setTable(found.tableNumber, found.area, true);
        return { handled: true, valid: true };
      }
    }

    // Invalid table number in QR
    this.toastService.show(`رمز QR يشير لترابيزة غير مسجلة (#${tableParam})، يرجى اختيار الترابيزة يدوياً`, 'warning', 5000);
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
