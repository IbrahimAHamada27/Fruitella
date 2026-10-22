import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { ToastService } from '../../core/services/toast.service';
import { FulfillmentService } from '../../core/services/fulfillment.service';
import { DiningArea, FulfillmentType } from '../../core/models/fulfillment.model';
import { PaymentMethod } from '../../core/models/order.model';
import { PriceDisplayComponent } from '../../shared/components/price-display/price-display.component';
import { TableSelectorModalComponent } from '../../shared/components/table-selector-modal/table-selector-modal.component';
import { getTablesByArea } from '../../core/data/restaurant-layout.config';

type CheckoutStep = 1 | 2 | 3;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, FormsModule, PriceDisplayComponent, TableSelectorModalComponent],
  template: `
    <div class="checkout-page container section-padding">
      <!-- Checkout Header -->
      <div class="checkout-header">
        <h1 class="checkout-title">إتمام الطلب وتحديد الاستلام</h1>
        <p class="checkout-subtitle">تجربة طلب سلسة ومخصصة لمشروبات وحلويات فروتيلا — مول حياة تاون، العبور</p>
      </div>

      <!-- Demo Phase Notice -->
      <div class="demo-banner">
        <div class="demo-banner-content">
          <i class="fa-solid fa-circle-info banner-icon"></i>
          <div>
            <strong>تنبيه تجربة المحاكاة (Phase 2 Demo):</strong>
            <span> هذا النظام هو محاكاة كاملة للواجهة الأمامية لطلب العميل. لن يتم إرسال طلب فعلي لكاشير أو مطبخ حقيقي، ولا يتطلب أي دفع إلكتروني حقيقي.</span>
          </div>
        </div>
      </div>

      @if (items().length > 0) {
        <!-- Stepper Progress Bar -->
        <div class="stepper-nav">
          <button 
            type="button" 
            class="step-item" 
            [class.active]="currentStep() === 1" 
            [class.completed]="currentStep() > 1"
            (click)="goToStep(1)">
            <span class="step-num">
              @if (currentStep() > 1) { <i class="fa-solid fa-check"></i> } @else { 1 }
            </span>
            <span class="step-text">طريقة الاستلام</span>
          </button>

          <div class="stepper-divider" [class.filled]="currentStep() > 1"></div>

          <button 
            type="button" 
            class="step-item" 
            [class.active]="currentStep() === 2" 
            [class.completed]="currentStep() > 2"
            (click)="goToStep(2)">
            <span class="step-num">
              @if (currentStep() > 2) { <i class="fa-solid fa-check"></i> } @else { 2 }
            </span>
            <span class="step-text">بيانات الطلب</span>
          </button>

          <div class="stepper-divider" [class.filled]="currentStep() > 2"></div>

          <button 
            type="button" 
            class="step-item" 
            [class.active]="currentStep() === 3"
            (click)="goToStep(3)">
            <span class="step-num">3</span>
            <span class="step-text">مراجعة وتأكيد</span>
          </button>
        </div>

        <div class="checkout-grid">
          <!-- Main Steps Column -->
          <div class="main-column">
            <!-- ============================================== -->
            <!-- STEP 1: FULFILLMENT METHOD SELECTION           -->
            <!-- ============================================== -->
            @if (currentStep() === 1) {
              <section class="checkout-card animate-fade-in">
                <div class="card-head">
                  <h2 class="card-title">
                    <i class="fa-solid fa-utensils"></i> اختر طريقة استلام طلبك
                  </h2>
                  <p class="card-desc">حدد كيف ترغب في استلام مشروباتك اليوم من فروتيلا:</p>
                </div>

                <div class="fulfillment-cards-grid">
                  <!-- 1. Table Service -->
                  <div 
                    class="f-card" 
                    [class.selected]="selectedType() === 'table'"
                    (click)="selectFulfillment('table')">
                    <div class="f-card-header">
                      <div class="f-icon-box table-theme">
                        <i class="fa-solid fa-chair"></i>
                      </div>
                      <span class="f-badge">داخل الصالة</span>
                    </div>
                    <h3 class="f-card-title">طلب من الترابيزة</h3>
                    <p class="f-card-desc">أنت جالس الآن داخل الفرع وتريد تقديم طلبك مباشرة إلى طاولتك.</p>
                    
                    @if (selectedType() === 'table' && tableDetails(); as t) {
                      <div class="f-card-status active-status">
                        <i class="fa-solid fa-check-circle"></i>
                        <span>ترابيزة #{{ t.tableNumber }} ({{ t.areaNameAr }})</span>
                      </div>
                    } @else if (selectedType() === 'table') {
                      <div class="f-card-status pending-status">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <span>يرجى اختيار رقم الترابيزة</span>
                      </div>
                    }
                  </div>

                  <!-- 2. Car Service -->
                  <div 
                    class="f-card" 
                    [class.selected]="selectedType() === 'car'"
                    (click)="selectFulfillment('car')">
                    <div class="f-card-header">
                      <div class="f-icon-box car-theme">
                        <i class="fa-solid fa-car-side"></i>
                      </div>
                      <span class="f-badge">خدمة سريعة</span>
                    </div>
                    <h3 class="f-card-title">الطلب من العربية</h3>
                    <p class="f-card-desc">استلم طلبك وأنت بسيارتك أمام مدخل 2 بمول حياة تاون بكل راحة.</p>
                    
                    @if (selectedType() === 'car') {
                      <div class="f-card-status active-status">
                        <i class="fa-solid fa-check-circle"></i>
                        <span>تم اختيار خدمة السيارة</span>
                      </div>
                    }
                  </div>

                  <!-- 3. Takeaway -->
                  <div 
                    class="f-card" 
                    [class.selected]="selectedType() === 'takeaway'"
                    (click)="selectFulfillment('takeaway')">
                    <div class="f-card-header">
                      <div class="f-icon-box takeaway-theme">
                        <i class="fa-solid fa-bag-shopping"></i>
                      </div>
                      <span class="f-badge">تيك أواي</span>
                    </div>
                    <h3 class="f-card-title">استلام من المحل</h3>
                    <p class="f-card-desc">استلم طلبك جاهزاً ومغلفاً من كاونتر الاستلام السريع بالفرع.</p>
                    
                    @if (selectedType() === 'takeaway') {
                      <div class="f-card-status active-status">
                        <i class="fa-solid fa-check-circle"></i>
                        <span>جاهز خلال 12-15 دقيقة</span>
                      </div>
                    }
                  </div>

                  <!-- 4. Delivery -->
                  <div 
                    class="f-card" 
                    [class.selected]="selectedType() === 'delivery'"
                    (click)="selectFulfillment('delivery')">
                    <div class="f-card-header">
                      <div class="f-icon-box delivery-theme">
                        <i class="fa-solid fa-motorcycle"></i>
                      </div>
                      <span class="f-badge">توصيل للبيت</span>
                    </div>
                    <h3 class="f-card-title">دليفري (مدينة العبور)</h3>
                    <p class="f-card-desc">توصيل مثلج ومغلف طازج إلى باب منزلك في كافة أحياء العبور.</p>
                    
                    @if (selectedType() === 'delivery') {
                      <div class="f-card-status active-status">
                        <i class="fa-solid fa-check-circle"></i>
                        <span>رسوم التوصيل {{ deliveryFee() === 0 ? 'مجاناً' : deliveryFee() + ' ج.م' }}</span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Sub-step for Table Area & Selection if Table is selected -->
                @if (selectedType() === 'table') {
                  <div class="table-selection-panel animate-fade-in">
                    <h3 class="sub-panel-title">
                      <i class="fa-solid fa-compass"></i> حدد صالة الجلوس ورقم طاولتك:
                    </h3>

                    <!-- Dining Area Toggle -->
                    <div class="area-toggle-group">
                      <button 
                        type="button" 
                        class="btn-area-tab" 
                        [class.active]="diningArea() === 'indoor'"
                        (click)="setDiningArea('indoor')">
                        <i class="fa-solid fa-couch"></i> الصالة الداخلية (مكيفة)
                      </button>
                      <button 
                        type="button" 
                        class="btn-area-tab" 
                        [class.active]="diningArea() === 'outdoor'"
                        (click)="setDiningArea('outdoor')">
                        <i class="fa-solid fa-sun"></i> الجلسات الخارجية (مفتوحة)
                      </button>
                    </div>

                    <!-- Available Tables Grid -->
                    <div class="tables-quick-grid">
                      @for (t of availableTablesForArea(); track t.tableNumber) {
                        <button 
                          type="button" 
                          class="table-cell-btn" 
                          [class.selected]="selectedTableNumber() === t.tableNumber"
                          (click)="selectTableDirectly(t.tableNumber)">
                          <span class="t-number">#{{ t.tableNumber }}</span>
                          <span class="t-seats">{{ t.capacity }} كراسي</span>
                        </button>
                      }
                    </div>

                    @if (selectedTableNumber()) {
                      <div class="selected-table-callout">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>أنت الآن تطلب من <strong>ترابيزة #{{ selectedTableNumber() }}</strong> في {{ diningArea() === 'indoor' ? 'الصالة الداخلية' : 'الجلسات الخارجية' }}.</span>
                      </div>
                    }
                  </div>
                }

                <div class="step-nav-footer">
                  <a routerLink="/cart" class="btn btn-outline">
                    <i class="fa-solid fa-arrow-right"></i> العودة للسلة
                  </a>
                  <button type="button" class="btn btn-primary btn-next" (click)="proceedToStep2()">
                    <span>التالي: إدخال البيانات</span>
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                </div>
              </section>
            }

            <!-- ============================================== -->
            <!-- STEP 2: CONDITIONAL DETAILS FORM               -->
            <!-- ============================================== -->
            @if (currentStep() === 2) {
              <section class="checkout-card animate-fade-in">
                <!-- Header with Selected Fulfillment Indicator -->
                <div class="card-head">
                  <div class="badge-type-pill" [class]="'pill-' + selectedType()">
                    @switch (selectedType()) {
                      @case ('table') { <i class="fa-solid fa-chair"></i> طلب من الترابيزة (#{{ selectedTableNumber() || 'لم تحدد' }}) }
                      @case ('car') { <i class="fa-solid fa-car-side"></i> طلب من العربية }
                      @case ('takeaway') { <i class="fa-solid fa-bag-shopping"></i> استلام تيك أواي }
                      @case ('delivery') { <i class="fa-solid fa-motorcycle"></i> دليفري العبور }
                    }
                  </div>
                  <h2 class="card-title">أدخل بيانات الطلب والتواصل</h2>
                  <p class="card-desc">الحقول المطلوبة مؤشرة بعلامة (*). نحرص على خصوصية بياناتك بالكامل.</p>
                </div>

                <!-- Form Fields based on Fulfillment -->
                <div class="form-container">
                  <!-- Common: Customer Name -->
                  <div class="form-row">
                    <div class="field-group">
                      <label for="cName">
                        الاسم بالكامل *
                        <span class="label-hint">
                          {{ selectedType() === 'table' ? '(لتسجيل الطلب باسمك على الترابيزة)' : '(لتأكيد الاستلام)' }}
                        </span>
                      </label>
                      <input 
                        id="cName" 
                        type="text" 
                        [(ngModel)]="customerName" 
                        placeholder="مثال: أحمد عبد الله" 
                        class="form-input" 
                        [class.input-error]="fieldErrors['customerName']" />
                      @if (fieldErrors['customerName']) {
                        <span class="field-error-msg">{{ fieldErrors['customerName'] }}</span>
                      }
                    </div>

                    <!-- Phone Number (Required for Car, Takeaway, Delivery; Optional for Table) -->
                    <div class="field-group">
                      <label for="cPhone">
                        رقم الهاتف المحمول {{ selectedType() === 'table' ? '(اختياري)' : '*' }}
                        <span class="label-hint">(11 رقماً — فودافون، أورنج، اتصالات، وي)</span>
                      </label>
                      <input 
                        id="cPhone" 
                        type="tel" 
                        [(ngModel)]="customerPhone" 
                        placeholder="مثال: 01012345678" 
                        class="form-input" 
                        dir="ltr"
                        [class.input-error]="fieldErrors['customerPhone']" />
                      @if (fieldErrors['customerPhone']) {
                        <span class="field-error-msg">{{ fieldErrors['customerPhone'] }}</span>
                      }
                    </div>
                  </div>

                  <!-- SPECIFIC TO CAR SERVICE -->
                  @if (selectedType() === 'car') {
                    <div class="specific-fields-box animate-fade-in car-box">
                      <div class="box-badge-header">
                        <h4 class="box-title">
                          <i class="fa-solid fa-car-side"></i> بيانات طلب واستلام السيارة (أمام مول حياة تاون مدخل 2)
                        </h4>
                        <span class="box-badge-pill">اسمك ورقمك إجباريان — بيانات السيارة اختيارية</span>
                      </div>

                      <div class="form-row">
                        <div class="field-group">
                          <label for="carModel">
                            نوع وموديل السيارة <span class="opt-hint">(اختياري)</span>
                          </label>
                          <input 
                            id="carModel" 
                            type="text" 
                            [(ngModel)]="carModel" 
                            placeholder="مثال: كيا سيراتو / هيونداي إلنترا / تويوتا" 
                            class="form-input" />
                        </div>

                        <div class="field-group">
                          <label for="carColor">
                            لون السيارة <span class="opt-hint">(اختياري)</span>
                          </label>
                          <input 
                            id="carColor" 
                            type="text" 
                            [(ngModel)]="carColor" 
                            placeholder="مثال: فضي / أبيض / أسود / رمادي" 
                            class="form-input" />
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="field-group">
                          <label for="carPlate">
                            رقم اللوحة / نمرة العربية <span class="opt-hint">(اختياري)</span>
                          </label>
                          <input 
                            id="carPlate" 
                            type="text" 
                            [(ngModel)]="carPlate" 
                            placeholder="مثال: أ ب ج 1234 أو 1234" 
                            class="form-input" />
                        </div>

                        <div class="field-group">
                          <label for="carSpot">
                            مكان الانتظار أو رقم الباكية <span class="opt-hint">(اختياري)</span>
                          </label>
                          <input 
                            id="carSpot" 
                            type="text" 
                            [(ngModel)]="carSpot" 
                            placeholder="مثال: أمام مدخل 2 مباشرة أو عند الصيدلية" 
                            class="form-input" />
                        </div>
                      </div>
                    </div>
                  }

                  <!-- SPECIFIC TO DELIVERY (EL OBOUR CITY ONLY) -->
                  @if (selectedType() === 'delivery') {
                    <div class="specific-fields-box animate-fade-in delivery-box">
                      <div class="obour-delivery-banner">
                        <div class="odb-icon"><i class="fa-solid fa-motorcycle"></i></div>
                        <div class="odb-text">
                          <strong>دليفري سريع ومثلج داخل نطاق مدينة العبور</strong>
                          <span>يتم تغليف العصائر والآيس كريم بحافظات حرارية مثلجة لتصلك طازجة إلى باب منزلك في كافة أحياء العبور.</span>
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="field-group">
                          <label for="delDistrict">
                            الحي / المنطقة داخل مدينة العبور *
                            <span class="label-hint">(اختر منطقتك بالعبور)</span>
                          </label>
                          <select id="delDistrict" [(ngModel)]="deliveryDistrict" class="form-input">
                            @for (d of districtsList; track d) {
                              <option [value]="d">{{ d }}</option>
                            }
                          </select>
                        </div>

                        <div class="field-group">
                          <label for="delAltPhone">
                            رقم هاتف إضافي / بديل <span class="opt-hint">(اختياري للطوارئ)</span>
                          </label>
                          <input 
                            id="delAltPhone" 
                            type="tel" 
                            [(ngModel)]="deliveryAltPhone" 
                            placeholder="مثال: 01198765432" 
                            class="form-input" 
                            dir="ltr"
                            [class.input-error]="fieldErrors['deliveryAltPhone']" />
                          @if (fieldErrors['deliveryAltPhone']) {
                            <span class="field-error-msg">{{ fieldErrors['deliveryAltPhone'] }}</span>
                          }
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="field-group">
                          <label for="delStreet">
                            اسم الشارع ورقم العمارة / الفيلا *
                          </label>
                          <input 
                            id="delStreet" 
                            type="text" 
                            [(ngModel)]="deliveryStreet" 
                            placeholder="مثال: شارع الجامعة، عمارة 45 أو فيلا 12" 
                            class="form-input"
                            [class.input-error]="fieldErrors['deliveryStreet']" />
                          @if (fieldErrors['deliveryStreet']) {
                            <span class="field-error-msg">{{ fieldErrors['deliveryStreet'] }}</span>
                          }
                        </div>

                        <div class="field-group">
                          <label for="delBuilding">
                            رقم الدور والشقة *
                          </label>
                          <input 
                            id="delBuilding" 
                            type="text" 
                            [(ngModel)]="deliveryBuilding" 
                            placeholder="مثال: الدور 3، شقة 6" 
                            class="form-input"
                            [class.input-error]="fieldErrors['deliveryBuilding']" />
                          @if (fieldErrors['deliveryBuilding']) {
                            <span class="field-error-msg">{{ fieldErrors['deliveryBuilding'] }}</span>
                          }
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="field-group">
                          <label for="delLandmark">
                            أقرب علامة مميزة <span class="opt-hint">(اختياري)</span>
                          </label>
                          <input 
                            id="delLandmark" 
                            type="text" 
                            [(ngModel)]="deliveryLandmark" 
                            placeholder="مثال: بجوار مسجد النور / خلف مدرسة / أمام صيدلية" 
                            class="form-input" />
                        </div>

                        <div class="field-group">
                          <label for="delNotes">
                            تعليمات التوصيل للطيار <span class="opt-hint">(اختياري)</span>
                          </label>
                          <input 
                            id="delNotes" 
                            type="text" 
                            [(ngModel)]="orderNotes" 
                            placeholder="مثال: يرجي رن الجرس / الاتصال عند الوصول للشارع" 
                            class="form-input" />
                        </div>
                      </div>

                      <!-- Delivery Fee & Time Highlights -->
                      <div class="delivery-perks-row">
                        <div class="perk-chip">
                          <i class="fa-solid fa-clock"></i>
                          <span>التوصيل خلال: <strong>25 - 35 دقيقة</strong></span>
                        </div>
                        <div class="perk-chip">
                          <i class="fa-solid fa-coins"></i>
                          <span>رسوم التوصيل: <strong>{{ deliveryFee() === 0 ? 'مجاناً (طلبك أكثر من 250 ج)' : deliveryFee() + ' ج.م' }}</strong></span>
                        </div>
                      </div>
                    </div>
                  }

                  <!-- Payment Method Selection -->
                  <div class="payment-section">
                    <label class="section-sub-label">
                      <i class="fa-solid fa-credit-card"></i> طريقة سداد الحساب:
                    </label>

                    <div class="payment-cards-grid">
                      <label class="pay-card" [class.selected]="selectedPayment() === 'cash'">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="cash" 
                          [checked]="selectedPayment() === 'cash'"
                          (change)="setPayment('cash')"
                          class="sr-only" />
                        <i class="fa-solid fa-money-bill-wave pay-icon"></i>
                        <div class="pay-info">
                          <span class="pay-name">الدفع نقداً (كاش)</span>
                          <span class="pay-desc">الدفع عند الاستلام مع الكاشير أو الطيار</span>
                        </div>
                      </label>

                      <label class="pay-card" [class.selected]="selectedPayment() === 'instapay'">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="instapay" 
                          [checked]="selectedPayment() === 'instapay'"
                          (change)="setPayment('instapay')"
                          class="sr-only" />
                        <i class="fa-solid fa-mobile-screen-button pay-icon"></i>
                        <div class="pay-info">
                          <span class="pay-name">إنستاباي (InstaPay)</span>
                          <span class="pay-desc">تحويل فوري عند الاستلام (محاكاة تجريبية)</span>
                        </div>
                      </label>

                      <label class="pay-card" [class.selected]="selectedPayment() === 'vodafone_cash'">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="vodafone_cash" 
                          [checked]="selectedPayment() === 'vodafone_cash'"
                          (change)="setPayment('vodafone_cash')"
                          class="sr-only" />
                        <i class="fa-solid fa-wallet pay-icon"></i>
                        <div class="pay-info">
                          <span class="pay-name">فودافون كاش</span>
                          <span class="pay-desc">تحويل لمحفظة كاش عند الاستلام (محاكاة)</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <!-- General Special Notes -->
                  <div class="field-group">
                    <label for="orderNotes">
                      <i class="fa-solid fa-pen-fancy"></i> ملاحظات أو تعليمات خاصة بالطلب (اختياري)
                    </label>
                    <textarea 
                      id="orderNotes" 
                      rows="2" 
                      [(ngModel)]="orderNotes" 
                      placeholder="أي توجيهات إضافية بخصوص السكر، التحضير، أو التوصيل..."
                      class="form-textarea">
                    </textarea>
                  </div>
                </div>

                <div class="step-nav-footer">
                  <button type="button" class="btn btn-outline" (click)="goToStep(1)">
                    <i class="fa-solid fa-arrow-right"></i> رجوع لاختيار طريقة الاستلام
                  </button>
                  <button type="button" class="btn btn-primary btn-next" (click)="proceedToStep3()">
                    <span>التالي: مراجعة الطلب</span>
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                </div>
              </section>
            }

            <!-- ============================================== -->
            <!-- STEP 3: ORDER REVIEW & FINAL CONFIRMATION      -->
            <!-- ============================================== -->
            @if (currentStep() === 3) {
              <section class="checkout-card animate-fade-in">
                <div class="card-head">
                  <h2 class="card-title">
                    <i class="fa-solid fa-clipboard-check"></i> مراجعة الطلب قبل التأكيد
                  </h2>
                  <p class="card-desc">يرجى مراجعة الأصناف وبيانات الاستلام بدقة قبل إرسال التأكيد التجريبي:</p>
                </div>

                <!-- Review Section 1: Fulfillment Details Summary -->
                <div class="review-block">
                  <div class="review-block-header">
                    <h3 class="review-block-title">
                      <i class="fa-solid fa-location-crosshairs"></i> بيانات وطريقة الاستلام
                    </h3>
                    <button type="button" class="btn-edit-step" (click)="goToStep(1)">
                      <i class="fa-solid fa-pen"></i> تعديل
                    </button>
                  </div>

                  <div class="review-info-grid">
                    <div class="info-cell">
                      <span class="cell-label">طريقة الاستلام:</span>
                      <span class="cell-value">
                        @switch (selectedType()) {
                          @case ('table') { طلب من الترابيزة داخل الفرع }
                          @case ('car') { الطلب من العربية (أمام مول حياة تاون) }
                          @case ('takeaway') { استلام من المحل (تيك أواي) }
                          @case ('delivery') { دليفري وتوصيل لمدينة العبور }
                        }
                      </span>
                    </div>

                    @if (selectedType() === 'table') {
                      <div class="info-cell">
                        <span class="cell-label">رقم الترابيزة والصالة:</span>
                        <span class="cell-value highlight">
                          ترابيزة #{{ selectedTableNumber() }} ({{ diningArea() === 'indoor' ? 'الصالة الداخلية' : 'الجلسات الخارجية' }})
                        </span>
                      </div>
                    }

                    @if (selectedType() === 'car') {
                      <div class="info-cell">
                        <span class="cell-label">بيانات السيارة:</span>
                        <span class="cell-value highlight">
                          @if (carModel || carColor || carPlate) {
                            {{ carModel || 'سيارة' }} {{ carColor ? '(' + carColor + ')' : '' }} {{ carPlate ? '— نمرة: ' + carPlate : '' }}
                          } @else {
                            استلام بالسيارة (أمام مدخل 2)
                          }
                        </span>
                      </div>
                      @if (carSpot) {
                        <div class="info-cell">
                          <span class="cell-label">مكان الانتظار:</span>
                          <span class="cell-value">{{ carSpot }}</span>
                        </div>
                      }
                    }

                    @if (selectedType() === 'delivery') {
                      <div class="info-cell">
                        <span class="cell-label">عنوان التوصيل بالعبور:</span>
                        <span class="cell-value">
                          {{ deliveryDistrict }} - {{ deliveryStreet }}
                          @if (deliveryBuilding) { ، {{ deliveryBuilding }} }
                          @if (deliveryLandmark) { (علامة: {{ deliveryLandmark }}) }
                        </span>
                      </div>
                      @if (deliveryAltPhone) {
                        <div class="info-cell">
                          <span class="cell-label">رقم هاتف بديل:</span>
                          <span class="cell-value" dir="ltr">{{ deliveryAltPhone }}</span>
                        </div>
                      }
                    }

                    <div class="info-cell">
                      <span class="cell-label">اسم العميل:</span>
                      <span class="cell-value">{{ customerName }}</span>
                    </div>

                    @if (customerPhone) {
                      <div class="info-cell">
                        <span class="cell-label">رقم الهاتف:</span>
                        <span class="cell-value" dir="ltr">{{ customerPhone }}</span>
                      </div>
                    }

                    <div class="info-cell">
                      <span class="cell-label">طريقة السداد:</span>
                      <span class="cell-value">
                        @switch (selectedPayment()) {
                          @case ('cash') { نقداً (كاش) }
                          @case ('instapay') { إنستاباي InstaPay (محاكاة) }
                          @case ('vodafone_cash') { فودافون كاش (محاكاة) }
                        }
                      </span>
                    </div>

                    @if (orderNotes) {
                      <div class="info-cell full-width">
                        <span class="cell-label">ملاحظات الطلب:</span>
                        <span class="cell-value">{{ orderNotes }}</span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Review Section 2: Items Breakdown -->
                <div class="review-block">
                  <div class="review-block-header">
                    <h3 class="review-block-title">
                      <i class="fa-solid fa-list-ol"></i> الأصناف المطلوبة ({{ itemCount() }} أصناف)
                    </h3>
                    <a routerLink="/cart" class="btn-edit-step">
                      <i class="fa-solid fa-pen"></i> تعديل السلة
                    </a>
                  </div>

                  <div class="review-items-list">
                    @for (item of items(); track item.cartItemId) {
                      <div class="review-item-row">
                        <img [src]="item.image" [alt]="item.nameAr" class="r-thumb" />
                        <div class="r-details">
                          <span class="r-name">{{ item.nameAr }} (x{{ item.quantity }})</span>
                          <span class="r-size">{{ item.selectedSize.nameAr }}</span>
                          @if (item.customization; as c) {
                            <div class="r-custom-tags">
                              <span class="r-custom-tag"><i class="fa-solid fa-blender"></i> {{ getBlendLabel(c.blendType) }}</span>
                              <span class="r-custom-tag"><i class="fa-solid fa-jar"></i> {{ getSweetenerLabel(c.sweetenerType) }}</span>
                              @if (c.sweetenerType !== 'none' && c.sugarLevel) {
                                <span class="r-custom-tag"><i class="fa-solid fa-cubes-stacked"></i> {{ getSugarLabel(c.sugarLevel) }}</span>
                              }
                              <span class="r-custom-tag"><i class="fa-solid fa-snowflake"></i> {{ getIceLabel(c.iceLevel) }}</span>
                            </div>
                          }
                          @if (item.iceCreamCustomization; as ic) {
                            <div class="r-custom-tags">
                              <span class="r-custom-tag ice-cream-tag"><i class="fa-solid fa-ice-cream"></i> النكهات: {{ ic.selectedFlavors.join(' • ') }}</span>
                              @if (ic.servingType) {
                                <span class="r-custom-tag"><i class="fa-solid fa-cookie-bite"></i> {{ ic.servingType }}</span>
                              }
                              @if (ic.sauce) {
                                <span class="r-custom-tag"><i class="fa-solid fa-wand-magic-sparkles"></i> {{ ic.sauce }}</span>
                              }
                            </div>
                          }
                          @if (item.selectedAddons.length > 0) {
                            <div class="r-addons">
                              @for (ad of item.selectedAddons; track ad.id) {
                                <span class="r-addon">+ {{ ad.nameAr }}</span>
                              }
                            </div>
                          }
                          @if (item.specialInstructions) {
                            <span class="r-note">ملاحظة: {{ item.specialInstructions }}</span>
                          }
                        </div>
                        <span class="r-price">{{ item.totalPrice }} ج.م</span>
                      </div>
                    }
                  </div>
                </div>

                <!-- Final Demo Confirmation Disclaimer Box -->
                <div class="demo-confirmation-disclaimer">
                  <i class="fa-solid fa-shield-halved"></i>
                  <p>
                    <strong>تأكيد تجريبي:</strong> عند النقر على الزر أدناه، سيتم توليد رقم مرجعي تجريبي للطلب وحفظه في سجلات المتصفح للطلب، ولن يتم إرسال طلب فعلي للمطبخ.
                  </p>
                </div>

                <div class="step-nav-footer">
                  <button type="button" class="btn btn-outline" (click)="goToStep(2)">
                    <i class="fa-solid fa-arrow-right"></i> رجوع لتعديل البيانات
                  </button>
                  <button type="button" class="btn btn-primary btn-confirm-order" (click)="submitFinalOrder()">
                    <i class="fa-solid fa-circle-check"></i> تأكيد الطلب التجريبي الآن
                  </button>
                </div>
              </section>
            }
          </div>

          <!-- Sticky Summary Column -->
          <div class="summary-column">
            <div class="summary-card">
              <h3 class="summary-card-title">ملخص الحساب</h3>

              <div class="calc-list">
                <div class="calc-row">
                  <span>إجمالي الأصناف:</span>
                  <span class="val">{{ subtotal() }} ج.م</span>
                </div>

                <div class="calc-row">
                  <span>طريقة الاستلام:</span>
                  <span class="val">
                    @switch (selectedType()) {
                      @case ('table') { ترابيزة #{{ selectedTableNumber() || '-' }} }
                      @case ('car') { من العربية }
                      @case ('takeaway') { تيك أواي }
                      @case ('delivery') { دليفري }
                    }
                  </span>
                </div>

                <div class="calc-row">
                  <span>رسوم التوصيل:</span>
                  @if (selectedType() === 'delivery') {
                    @if (deliveryFee() === 0) {
                      <span class="free-badge">مجاناً (طلب فوق 250 ج.م)</span>
                    } @else {
                      <span class="val">{{ deliveryFee() }} ج.م</span>
                    }
                  } @else {
                    <span class="free-badge">0 ج.م</span>
                  }
                </div>

                <hr class="summary-hr" />

                <div class="calc-row total-row">
                  <span>الإجمالي المطلوب:</span>
                  <app-price-display [amount]="currentTotalWithFulfillment()" size="lg"></app-price-display>
                </div>
              </div>

              <!-- Time Estimate Box -->
              <div class="time-estimate-box">
                <i class="fa-solid fa-clock"></i>
                <div>
                  <span class="est-label">الوقت التقديري للتجهيز:</span>
                  <span class="est-val">{{ estimatedPrepTime() }} دقيقة</span>
                </div>
              </div>

              <!-- Location Quick Card -->
              <div class="branch-quick-info">
                <div class="branch-icon"><i class="fa-solid fa-store"></i></div>
                <div>
                  <strong>فرع فروتيلا الرئيسي:</strong>
                  <p>مول حياة تاون، الحي السادس، مدخل 2، مدينة العبور</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <div class="empty-checkout animate-fade-in">
          <i class="fa-solid fa-basket-shopping empty-icon"></i>
          <h2>سلة مشترياتك فارغة!</h2>
          <p>يرجى اختيار بعض المشروبات أو الحلويات اللذيذة من المنيو أولاً لمتابعة إتمام الطلب.</p>
          <a routerLink="/menu" class="btn btn-primary btn-lg">
            <i class="fa-solid fa-book-open"></i> استعراض قائمة المنيو
          </a>
        </div>
      }
    </div>

    <!-- Table Selector Modal (Reusable) -->
    <app-table-selector-modal #tableModal></app-table-selector-modal>
  `,
  styles: [`
    .checkout-header {
      margin-bottom: 1.5rem;
    }
    .checkout-title {
      font-size: 2.2rem;
      color: var(--fruitella-green-900);
      text-wrap: balance;
      letter-spacing: -0.02em;
    }
    .checkout-subtitle {
      font-size: 1rem;
      color: var(--text-secondary);
      margin-top: 0.35rem;
      text-wrap: pretty;
    }

    /* Demo Banner */
    .demo-banner {
      background: rgba(239, 246, 255, 0.85);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(191, 219, 254, 0.9);
      border-radius: var(--radius-lg);
      padding: 0.95rem 1.25rem;
      margin-bottom: 2rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-xs);
    }
    .demo-banner-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #1e40af;
      font-size: 0.88rem;
    }
    .banner-icon {
      font-size: 1.35rem;
      color: #3b82f6;
      flex-shrink: 0;
    }

    /* Stepper Navigation */
    .stepper-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2.5rem;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 1rem 2rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-sm);
    }
    .step-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-muted);
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius-full);
    }
    .step-item:active {
      transform: scale(0.96);
    }
    .step-num {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #f1f5f2;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
    }
    .step-item.active {
      color: var(--fruitella-green-900);
    }
    .step-item.active .step-num {
      background: var(--fruitella-green-700);
      color: #ffffff;
      box-shadow: 0 0 0 4px var(--fruitella-lime-bg), var(--shadow-antigravity-xs);
    }
    .step-item.completed {
      color: var(--fruitella-lime);
    }
    .step-item.completed .step-num {
      background: var(--fruitella-lime);
      color: #ffffff;
    }
    .stepper-divider {
      flex: 1;
      max-width: 80px;
      height: 2px;
      background: var(--border-strong);
      transition: background var(--transition-normal);
    }
    .stepper-divider.filled {
      background: var(--fruitella-lime);
    }

    /* Grid Layout */
    .checkout-grid {
      display: grid;
      grid-template-columns: 1.35fr 0.85fr;
      gap: 2.5rem;
      align-items: flex-start;
    }

    /* Checkout Card */
    .checkout-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 2rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }
    .card-head {
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1rem;
    }
    .card-title {
      font-size: 1.4rem;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-wrap: balance;
    }
    .card-title i {
      color: var(--fruitella-lime);
    }
    .card-desc {
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-top: 0.35rem;
      text-wrap: pretty;
    }

    /* Fulfillment Cards Grid */
    .fulfillment-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
    .f-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(8px);
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      cursor: pointer;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      position: relative;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-xs);
    }
    .f-card:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-3px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
    }
    .f-card:active {
      transform: translateY(-1px) scale(0.98);
    }
    .f-card.selected {
      border-color: var(--fruitella-green-700);
      background: rgba(240, 253, 244, 0.85);
      box-shadow: 0 0 0 2px var(--fruitella-green-700), var(--shadow-antigravity-sm);
    }
    .f-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .f-icon-box {
      width: 44px;
      height: 44px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .table-theme { background: #dcfce7; color: #15803d; }
    .car-theme { background: #dbeafe; color: #1d4ed8; }
    .takeaway-theme { background: #fef3c7; color: #b45309; }
    .delivery-theme { background: #fce7f3; color: #be185d; }

    .f-badge {
      font-size: 0.72rem;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      border: 1px solid var(--border-subtle);
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-full);
      color: var(--text-secondary);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .f-card-title {
      font-size: 1.15rem;
      color: var(--fruitella-green-900);
      margin: 0;
    }
    .f-card-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.4;
      flex: 1;
    }
    .f-card-status {
      font-size: 0.78rem;
      font-weight: 700;
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-sm);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.25rem;
      font-variant-numeric: tabular-nums;
    }
    .active-status {
      background: #dcfce7;
      color: #15803d;
    }
    .pending-status {
      background: #fef2f2;
      color: #b91c1c;
    }

    /* Table Selection Panel in Step 1 */
    .table-selection-panel {
      background: rgba(240, 253, 244, 0.8);
      backdrop-filter: blur(12px);
      border: 1.5px solid #bbf7d0;
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-xs);
    }
    .sub-panel-title {
      font-size: 1rem;
      color: #14532d;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .area-toggle-group {
      display: flex;
      gap: 0.75rem;
    }
    .btn-area-tab {
      flex: 1;
      padding: 0.65rem 1rem;
      background: #ffffff;
      border: 1.5px solid #86efac;
      border-radius: var(--radius-md);
      font-size: 0.88rem;
      font-weight: 700;
      color: #166534;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .btn-area-tab:hover {
      transform: translateY(-1px);
    }
    .btn-area-tab:active {
      transform: scale(0.97);
    }
    .btn-area-tab.active {
      background: #15803d;
      color: #ffffff;
      border-color: #15803d;
      box-shadow: 0 4px 12px rgba(21, 128, 61, 0.3);
    }
    .tables-quick-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 0.75rem;
    }
    .table-cell-btn {
      background: #ffffff;
      border: 1.5px solid #bbf7d0;
      border-radius: var(--radius-md);
      padding: 0.65rem 0.4rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: var(--shadow-antigravity-xs);
    }
    .table-cell-btn:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: var(--shadow-antigravity-sm);
    }
    .table-cell-btn:active {
      transform: scale(0.95);
    }
    .table-cell-btn.selected {
      background: #22c55e;
      border-color: #15803d;
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.35);
    }
    .t-number {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.15rem;
      font-variant-numeric: tabular-nums;
    }
    .t-seats {
      font-size: 0.72rem;
      opacity: 0.85;
      font-variant-numeric: tabular-nums;
    }
    .selected-table-callout {
      background: #ffffff;
      border: 1px solid #86efac;
      border-radius: var(--radius-md);
      padding: 0.75rem 1rem;
      font-size: 0.85rem;
      color: #14532d;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-variant-numeric: tabular-nums;
      box-shadow: var(--shadow-antigravity-xs);
    }

    /* Step Navigation Footer */
    .step-nav-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1.5rem;
      border-top: 1px dashed var(--border-subtle);
      margin-top: 0.5rem;
    }
    .btn-next, .btn-confirm-order {
      padding: 0.85rem 1.75rem;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), var(--shadow-antigravity-sm);
    }

    /* STEP 2: FORMS */
    .badge-type-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 0.25rem 0.75rem;
      border-radius: var(--radius-full);
      margin-bottom: 0.5rem;
    }
    .pill-table { background: #dcfce7; color: #15803d; }
    .pill-car { background: #dbeafe; color: #1d4ed8; }
    .pill-takeaway { background: #fef3c7; color: #b45309; }
    .pill-delivery { background: #fce7f3; color: #be185d; }

    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .field-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .field-group label {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .label-hint {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--text-muted);
    }
    .form-input {
      height: 44px;
      padding-inline: 1rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      font-size: 0.92rem;
      background: #ffffff;
      outline: none;
      transition: all var(--transition-fast) ease;
      font-family: inherit;
    }
    .form-input:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.12);
    }
    .input-error {
      border-color: #ef4444 !important;
      background: #fef2f2 !important;
    }
    .field-error-msg {
      font-size: 0.78rem;
      color: #dc2626;
      font-weight: 600;
    }
    .form-textarea {
      padding: 0.85rem 1rem;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      font-size: 0.92rem;
      background: #ffffff;
      outline: none;
      resize: vertical;
      font-family: inherit;
      transition: all var(--transition-fast) ease;
    }
    .form-textarea:focus {
      border-color: var(--fruitella-green-700);
      box-shadow: 0 0 0 3px rgba(27, 94, 32, 0.12);
    }

    /* Specific Boxes */
    .specific-fields-box {
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .car-box {
      background: rgba(239, 246, 255, 0.75);
      backdrop-filter: blur(8px);
      border: 1.5px solid #bfdbfe;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .delivery-box {
      background: rgba(253, 242, 248, 0.75);
      backdrop-filter: blur(8px);
      border: 1.5px solid #fbcfe8;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .box-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
    }
    .box-badge-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .box-badge-pill {
      font-size: 0.72rem;
      font-weight: 700;
      color: #1d4ed8;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 0.2rem 0.65rem;
      border-radius: var(--radius-full);
    }
    .opt-hint {
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--text-muted);
    }
    .obour-delivery-banner {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: #ffffff;
      border: 1px dashed #f472b6;
      border-radius: var(--radius-md);
      padding: 0.75rem 1rem;
    }
    .odb-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fce7f3;
      color: #be185d;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    .odb-text {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .odb-text strong {
      font-size: 0.88rem;
      color: #831843;
    }
    .odb-text span {
      font-size: 0.76rem;
      color: var(--text-secondary);
      line-height: 1.35;
    }
    .delivery-perks-row {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      padding-top: 0.4rem;
    }
    .perk-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.78rem;
      color: #374151;
      background: #ffffff;
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-full);
      border: 1px solid #fbcfe8;
    }
    .perk-chip i {
      color: #db2777;
    }
    .r-custom-tag.ice-cream-tag {
      background: #fdf2f8;
      color: #be185d;
      border: 1px solid #fbcfe8;
      font-weight: 700;
    }

    /* Payment Section */
    .payment-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-top: 0.5rem;
    }
    .section-sub-label {
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .payment-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }
    .pay-card {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all var(--transition-fast) cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-xs);
    }
    .pay-card:hover {
      border-color: var(--fruitella-lime);
      transform: translateY(-2px);
      box-shadow: var(--shadow-antigravity-sm);
    }
    .pay-card:active {
      transform: scale(0.97);
    }
    .pay-card.selected {
      border-color: var(--fruitella-green-700);
      background: rgba(240, 253, 244, 0.9);
      box-shadow: 0 0 0 2px var(--fruitella-green-700), var(--shadow-antigravity-xs);
    }
    .pay-icon {
      font-size: 1.3rem;
      color: var(--fruitella-green-700);
    }
    .pay-info {
      display: flex;
      flex-direction: column;
    }
    .pay-name {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
    }
    .pay-desc {
      font-size: 0.72rem;
      color: var(--text-muted);
    }

    /* STEP 3: REVIEW */
    .review-block {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), var(--shadow-antigravity-xs);
    }
    .review-block-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 0.65rem;
    }
    .review-block-title {
      font-size: 1.05rem;
      color: var(--fruitella-green-900);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .btn-edit-step {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--fruitella-green-700);
      background: none;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: all var(--transition-fast) ease;
    }
    .btn-edit-step:hover {
      text-decoration: underline;
    }
    .btn-edit-step:active {
      transform: scale(0.95);
    }
    .review-info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.85rem;
    }
    .info-cell {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    .info-cell.full-width {
      grid-column: 1 / -1;
    }
    .cell-label {
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .cell-value {
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
    }
    .cell-value.highlight {
      color: var(--fruitella-green-700);
    }

    .review-items-list {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .review-item-row {
      display: flex;
      align-items: center;
      gap: 0.85rem;
    }
    .r-thumb {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-sm);
      object-fit: cover;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .r-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .r-name {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .r-size {
      font-size: 0.78rem;
      color: var(--fruitella-green-700);
    }
    .r-addons, .r-custom-tags {
      display: flex;
      gap: 0.3rem;
      flex-wrap: wrap;
    }
    .r-addon {
      font-size: 0.7rem;
      background: var(--fruitella-lime-bg);
      color: #3b5710;
      padding: 0.1rem 0.35rem;
      border-radius: var(--radius-xs);
    }
    .r-custom-tag {
      font-size: 0.7rem;
      background: #f1f5f2;
      color: var(--fruitella-green-800);
      padding: 0.1rem 0.4rem;
      border-radius: var(--radius-full);
      border: 1px solid var(--border-subtle);
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
    .r-note {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-style: italic;
    }
    .r-price {
      font-weight: 700;
      color: var(--fruitella-green-900);
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }

    .demo-confirmation-disclaimer {
      background: rgba(254, 243, 199, 0.8);
      backdrop-filter: blur(8px);
      border: 1.5px solid #fde68a;
      border-radius: var(--radius-md);
      padding: 0.85rem 1.15rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.85rem;
      color: #92400e;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
    .demo-confirmation-disclaimer i {
      font-size: 1.3rem;
      color: #d97706;
      flex-shrink: 0;
    }

    /* Summary Card Sticky */
    .summary-card {
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-xl);
      padding: 1.75rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-md);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .summary-card-title {
      font-size: 1.3rem;
      color: var(--fruitella-green-900);
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 0.5rem;
      text-wrap: balance;
    }
    .calc-list {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .calc-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.92rem;
      color: var(--text-secondary);
    }
    .calc-row .val {
      font-weight: 700;
      color: var(--text-primary);
      font-variant-numeric: tabular-nums;
    }
    .free-badge {
      font-size: 0.78rem;
      font-weight: 700;
      color: #15803d;
      background: #dcfce7;
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-full);
    }
    .summary-hr {
      border: none;
      border-top: 1px dashed var(--border-subtle);
      margin-block: 0.25rem;
    }
    .total-row {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--fruitella-green-900);
      font-variant-numeric: tabular-nums;
    }
    .time-estimate-box {
      background: rgba(250, 251, 250, 0.9);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.85rem;
      box-shadow: var(--shadow-antigravity-xs);
    }
    .time-estimate-box i {
      color: var(--fruitella-lime);
      font-size: 1.15rem;
    }
    .est-label {
      color: var(--text-muted);
      font-size: 0.78rem;
      display: block;
    }
    .est-val {
      font-weight: 800;
      color: var(--fruitella-green-900);
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }

    .branch-quick-info {
      background: #f7faf7;
      border-radius: var(--radius-md);
      padding: 0.75rem 1rem;
      display: flex;
      gap: 0.65rem;
      font-size: 0.78rem;
      color: var(--text-secondary);
    }
    .branch-icon {
      color: var(--fruitella-green-700);
      font-size: 1rem;
    }
    .branch-quick-info strong {
      color: var(--fruitella-green-900);
      display: block;
      margin-bottom: 0.1rem;
    }

    /* Empty Checkout */
    .empty-checkout {
      text-align: center;
      padding: 4rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(16px);
      border-radius: var(--radius-xl);
      border: 1px solid var(--glass-border);
      max-width: 600px;
      margin-inline: auto;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95), var(--shadow-antigravity-lg);
    }
    .empty-icon {
      font-size: 3.5rem;
      color: #94a3b8;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    @media (max-width: 992px) {
      .checkout-grid {
        grid-template-columns: 1fr;
      }
      .fulfillment-cards-grid {
        grid-template-columns: 1fr;
      }
      .payment-cards-grid {
        grid-template-columns: 1fr;
      }
      .form-row {
        grid-template-columns: 1fr;
      }
      .review-info-grid {
        grid-template-columns: 1fr;
      }
      .stepper-nav {
        padding: 0.75rem 1rem;
      }
      .step-text {
        display: none;
      }
    }
    @media (max-width: 640px) {
      .checkout-title {
        font-size: 1.55rem;
      }
      .checkout-subtitle {
        font-size: 0.88rem;
      }
      .checkout-card {
        padding: 1.15rem 0.85rem;
        border-radius: var(--radius-lg);
        gap: 1.25rem;
      }
      .summary-card {
        padding: 1.15rem 0.85rem;
        border-radius: var(--radius-lg);
      }
      .step-nav-footer {
        flex-direction: column-reverse;
        gap: 0.75rem;
      }
      .step-nav-footer .btn {
        width: 100%;
        justify-content: center;
      }
      .area-toggle-group {
        flex-direction: column;
        gap: 0.5rem;
      }
      .tables-quick-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.4rem;
      }
      .stepper-nav {
        padding: 0.5rem 0.65rem;
        gap: 0.4rem;
      }
      .step-num {
        width: 28px;
        height: 28px;
        font-size: 0.8rem;
      }
      .stepper-divider {
        max-width: 32px;
      }
      .review-item-row {
        flex-wrap: wrap;
      }
    }
  `]
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private orderService = inject(OrderService);
  private toastService = inject(ToastService);
  readonly fulfillmentService = inject(FulfillmentService);
  private router = inject(Router);

  private tableModal = viewChild(TableSelectorModalComponent);

  // Cart signals
  readonly items = this.cartService.items;
  readonly itemCount = this.cartService.itemCount;
  readonly subtotal = this.cartService.subtotal;
  readonly deliveryFee = this.cartService.deliveryFee;
  readonly total = this.cartService.total;

  getBlendLabel(b?: string): string {
    if (b === 'half') return 'نص ضربة';
    if (b === 'froth') return 'وش ضربة';
    return 'ضرب كامل';
  }

  getSweetenerLabel(s?: string): string {
    if (s === 'honey') return 'عسل نحل (+10 ج.م)';
    if (s === 'stevia') return 'ستيفيا دايت';
    if (s === 'none') return 'بدون سكر';
    return 'سكر أبيض';
  }

  getSugarLabel(l?: string): string {
    if (l === 'light') return 'سكر خفيف';
    if (l === 'extra') return 'سكر زيادة';
    if (l === 'none') return 'بدون سكر';
    return 'سكر مضبوط';
  }

  getIceLabel(i?: string): string {
    if (i === 'light') return 'ثلج خفيف';
    if (i === 'none') return 'بدون ثلج';
    return 'مثلج طبيعي';
  }

  // Stepper state
  readonly currentStep = signal<CheckoutStep>(1);

  // Fulfillment signals
  readonly selectedType = signal<FulfillmentType>(this.fulfillmentService.activeType());
  readonly diningArea = signal<DiningArea>(this.fulfillmentService.tableDetails()?.area || 'indoor');
  readonly selectedTableNumber = signal<number | undefined>(this.fulfillmentService.tableDetails()?.tableNumber);
  readonly tableDetails = this.fulfillmentService.tableDetails;

  // Form Models
  customerName = '';
  customerPhone = '';
  orderNotes = '';

  // Car specific
  carPlate = '';
  carModel = '';
  carColor = '';
  carSpot = '';

  // Delivery specific (El Obour city)
  readonly districtsList = this.fulfillmentService.deliveryConfig.districtsAr;
  deliveryDistrict = this.districtsList[0] || 'الحي السادس (بجوار مول حياة تاون — التوصيل الأسرع)';
  deliveryStreet = '';
  deliveryBuilding = '';
  deliveryLandmark = '';
  deliveryAltPhone = '';

  // Payment
  readonly selectedPayment = signal<PaymentMethod>('cash');

  // Inline Validation Errors
  fieldErrors: Record<string, string> = {};

  readonly availableTablesForArea = computed(() => {
    return getTablesByArea(this.diningArea());
  });

  readonly estimatedPrepTime = computed(() => {
    switch (this.selectedType()) {
      case 'table': return 10;
      case 'car': return 12;
      case 'takeaway': return 15;
      case 'delivery': return 35;
    }
  });

  readonly currentTotalWithFulfillment = computed(() => {
    const fee = this.selectedType() === 'delivery' ? this.deliveryFee() : 0;
    return this.subtotal() + fee;
  });

  selectFulfillment(type: FulfillmentType): void {
    this.selectedType.set(type);
    this.fulfillmentService.setFulfillmentType(type);
  }

  setDiningArea(area: DiningArea): void {
    this.diningArea.set(area);
  }

  selectTableDirectly(tableNum: number): void {
    this.selectedTableNumber.set(tableNum);
    this.fulfillmentService.setTable(tableNum, this.diningArea(), false);
  }

  setPayment(method: PaymentMethod): void {
    this.selectedPayment.set(method);
  }

  goToStep(step: CheckoutStep): void {
    if (step === 2 && !this.validateStep1()) return;
    if (step === 3 && (!this.validateStep1() || !this.validateStep2())) return;
    this.currentStep.set(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  proceedToStep2(): void {
    if (this.validateStep1()) {
      this.currentStep.set(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  proceedToStep3(): void {
    if (this.validateStep2()) {
      this.currentStep.set(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private validateStep1(): boolean {
    if (this.selectedType() === 'table' && !this.selectedTableNumber()) {
      this.toastService.show('يرجى تحديد رقم الترابيزة أولاً قبل المتابعة', 'warning');
      return false;
    }

    if (this.selectedType() === 'delivery' && this.subtotal() < this.fulfillmentService.deliveryConfig.minimumOrderAmount) {
      this.toastService.show(`الحد الأدنى لطلب الدليفري هو ${this.fulfillmentService.deliveryConfig.minimumOrderAmount} ج.م`, 'error');
      return false;
    }

    return true;
  }

  private validateStep2(): boolean {
    this.fieldErrors = {};
    let isValid = true;

    // Customer Name required for all
    if (!this.customerName.trim()) {
      this.fieldErrors['customerName'] = 'الاسم مطلوب لإتمام الطلب';
      isValid = false;
    }

    // Phone validation regex for Egyptian mobile numbers: 010, 011, 012, 015 followed by 8 digits
    const egyptPhoneRegex = /^(010|011|012|015)[0-9]{8}$/;

    if (this.selectedType() !== 'table') {
      // Phone is mandatory for Car, Takeaway, and Delivery
      if (!this.customerPhone.trim()) {
        this.fieldErrors['customerPhone'] = 'رقم الهاتف مطلوب للتواصل وتأكيد الاستلام';
        isValid = false;
      } else if (!egyptPhoneRegex.test(this.customerPhone.trim())) {
        this.fieldErrors['customerPhone'] = 'يرجى إدخال رقم محمول مصري صحيح مكون من 11 رقماً (مثال: 01012345678)';
        isValid = false;
      }
    } else {
      // Optional for Table, but if entered, must be valid
      if (this.customerPhone.trim() && !egyptPhoneRegex.test(this.customerPhone.trim())) {
        this.fieldErrors['customerPhone'] = 'رقم المحمول غير صحيح (مثال: 01012345678)';
        isValid = false;
      }
    }

    // Car specific checks: Customer Name & Phone are already validated above as mandatory.
    // Car type/model, color, plate, and spot are OPTIONAL as requested.

    // Delivery specific checks (El Obour city)
    if (this.selectedType() === 'delivery') {
      if (!this.deliveryStreet.trim()) {
        this.fieldErrors['deliveryStreet'] = 'اسم الشارع ورقم العقار مطلوبان لتوصيل الطلب داخل العبور';
        isValid = false;
      }
      if (!this.deliveryBuilding.trim()) {
        this.fieldErrors['deliveryBuilding'] = 'رقم الدور والشقة مطلوبان لتسليم الطلب لباب منزلك';
        isValid = false;
      }
      if (this.deliveryAltPhone.trim() && !egyptPhoneRegex.test(this.deliveryAltPhone.trim())) {
        this.fieldErrors['deliveryAltPhone'] = 'رقم الهاتف البديل غير صحيح (11 رقماً)';
        isValid = false;
      }
    }

    if (!isValid) {
      this.toastService.show('يرجى تصحيح الأخطاء الموضحة في النموذج', 'warning');
    }

    return isValid;
  }

  submitFinalOrder(): void {
    if (!this.validateStep1() || !this.validateStep2()) {
      return;
    }

    // Prepare fulfillment structured details
    let tableServiceDetails = undefined;
    let carServiceDetails = undefined;
    let takeawayDetails = undefined;
    let deliveryDetails = undefined;

    if (this.selectedType() === 'table' && this.selectedTableNumber()) {
      tableServiceDetails = {
        tableNumber: this.selectedTableNumber()!,
        area: this.diningArea(),
        tableNameAr: `ترابيزة ${this.selectedTableNumber()}`,
        areaNameAr: this.diningArea() === 'indoor' ? 'الصالة الداخلية' : 'الجلسات الخارجية',
        detectedFromQr: false
      };
      this.fulfillmentService.setTable(this.selectedTableNumber()!, this.diningArea());
    } else if (this.selectedType() === 'car') {
      const modelColor = [this.carModel.trim(), this.carColor.trim()].filter(Boolean).join(' - ');
      carServiceDetails = {
        vehiclePlate: this.carPlate.trim() || undefined,
        vehicleModel: this.carModel.trim() || undefined,
        vehicleColor: this.carColor.trim() || undefined,
        vehicleModelColor: modelColor || 'استلام بالسيارة (أمام مدخل 2)',
        parkingSpot: this.carSpot.trim() || undefined,
        meetingPointAr: this.fulfillmentService.carConfig.meetingPointAr
      };
      this.fulfillmentService.setCarDetails(carServiceDetails);
    } else if (this.selectedType() === 'takeaway') {
      takeawayDetails = {
        customerName: this.customerName.trim(),
        customerPhone: this.customerPhone.trim(),
        pickupCounterAr: this.fulfillmentService.takeawayConfig.pickupCounterAr,
        pickupTimeEstimateMinutes: this.fulfillmentService.takeawayConfig.estimatedMinutes,
        notes: this.orderNotes.trim() || undefined
      };
      this.fulfillmentService.setTakeawayDetails(takeawayDetails);
    } else if (this.selectedType() === 'delivery') {
      deliveryDetails = {
        customerName: this.customerName.trim(),
        customerPhone: this.customerPhone.trim(),
        alternativePhone: this.deliveryAltPhone.trim() || undefined,
        governorate: 'القليوبية',
        city: 'مدينة العبور',
        district: this.deliveryDistrict,
        street: this.deliveryStreet.trim(),
        building: this.deliveryBuilding.trim() || undefined,
        landmark: this.deliveryLandmark.trim() || undefined,
        notes: this.orderNotes.trim() || undefined,
        deliveryFee: this.deliveryFee(),
        estimatedMinutes: this.fulfillmentService.deliveryConfig.estimatedMinutes
      };
      this.fulfillmentService.setDeliveryDetails(deliveryDetails);
    }

    // Call demo order service
    const order = this.orderService.createOrder(
      {
        fullName: this.customerName.trim(),
        phone: this.customerPhone.trim() || 'طلب طاولة بدون هاتف',
        notes: this.orderNotes.trim() || undefined
      },
      this.selectedType(),
      this.selectedPayment(),
      this.items(),
      {
        ...this.cartService.summary(),
        deliveryFee: this.selectedType() === 'delivery' ? this.deliveryFee() : 0,
        total: this.currentTotalWithFulfillment()
      },
      {
        tableDetails: tableServiceDetails,
        carDetails: carServiceDetails,
        takeawayDetails: takeawayDetails,
        deliveryDetails: deliveryDetails
      }
    );

    // Clear cart
    this.cartService.clearCart();

    this.toastService.show(`تم تأكيد الطلب التجريبي بنجاح! رقم الطلب: ${order.orderNumber}`, 'success', 5000);
    this.router.navigate(['/order-confirmation', order.orderId]);
  }
}
