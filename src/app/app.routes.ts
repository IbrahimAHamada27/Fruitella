import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'فروتيلا | Fruitella — غيرنا مفهوم العصير | العبور'
  },
  {
    path: 'menu',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: 'قائمة المنيو | فروتيلا Fruitella'
  },
  {
    path: 'menu/:categorySlug',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
    title: 'قائمة الأصناف | فروتيلا Fruitella'
  },
  {
    path: 't/:tableId',
    loadComponent: () => import('./features/table-qr/table-qr.component').then(m => m.TableQrComponent),
    title: 'التعرف على الطاولة | فروتيلا Fruitella'
  },
  {
    path: 'table/:tableId',
    loadComponent: () => import('./features/table-qr/table-qr.component').then(m => m.TableQrComponent),
    title: 'التعرف على الطاولة | فروتيلا Fruitella'
  },
  {
    path: 'product/:productSlug',
    loadComponent: () => import('./features/product/product-detail.component').then(m => m.ProductDetailComponent),
    title: 'تفاصيل الصنف | فروتيلا Fruitella'
  },
  {
    path: 'search',
    loadComponent: () => import('./features/search/search.component').then(m => m.SearchComponent),
    title: 'نتائج البحث | فروتيلا Fruitella'
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent),
    title: 'سلة المشتريات | فروتيلا Fruitella'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent),
    title: 'إتمام الطلب والتوصيل | فروتيلا Fruitella'
  },
  {
    path: 'order-confirmation/:orderId',
    loadComponent: () => import('./features/orders/order-confirmation.component').then(m => m.OrderConfirmationComponent),
    title: 'تأكيد الطلب | فروتيلا Fruitella'
  },
  {
    path: 'track-order/:orderId',
    loadComponent: () => import('./features/orders/track-order.component').then(m => m.TrackOrderComponent),
    title: 'تتبع حالة الطلب | فروتيلا Fruitella'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'عن فروتيلا وقصتنا | Fruitella'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'موقعنا وتواصل معنا | فروتيلا Fruitella'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/legal/privacy.component').then(m => m.PrivacyComponent),
    title: 'سياسة الخصوصية | فروتيلا Fruitella'
  },
  {
    path: 'terms',
    loadComponent: () => import('./features/legal/terms.component').then(m => m.TermsComponent),
    title: 'الشروط والأحكام | فروتيلا Fruitella'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'الصفحة غير موجودة 404 | فروتيلا Fruitella'
  }
];
