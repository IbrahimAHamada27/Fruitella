const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('📱 FRUITELLA RESPONSIVENESS & MULTI-DEVICE AUDIT SUITE');
console.log('================================================================');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

// 1. Global styles.css unified grid check
const stylesCss = fs.readFileSync(path.join(__dirname, '../src/styles.css'), 'utf-8');

assert(
  stylesCss.includes('grid-template-columns: repeat(2, 1fr) !important') &&
  stylesCss.includes('@media (max-width: 640px)'),
  'styles.css enforces 2 columns (2 عرضي) on mobile (<= 640px)'
);

assert(
  stylesCss.includes('grid-template-columns: repeat(3, 1fr) !important') &&
  stylesCss.includes('641px') && stylesCss.includes('992px'),
  'styles.css enforces 3 columns (3 عرضي) on tablet (641px - 992px)'
);

assert(
  stylesCss.includes('grid-template-columns: repeat(4, 1fr) !important') &&
  stylesCss.includes('993px') && stylesCss.includes('1279px'),
  'styles.css enforces 4 columns (4 عرضي) on laptop (993px - 1279px)'
);

assert(
  stylesCss.includes('grid-template-columns: repeat(5, 1fr) !important') &&
  stylesCss.includes('1280px') && stylesCss.includes('1599px'),
  'styles.css enforces 5 columns on desktop (1280px - 1599px)'
);

assert(
  stylesCss.includes('grid-template-columns: repeat(6, 1fr) !important') &&
  stylesCss.includes('1600px'),
  'styles.css enforces 6 columns on ultra-wide desktop (>= 1600px)'
);

// 2. Menu component responsive grid
const menuTs = fs.readFileSync(path.join(__dirname, '../src/app/features/menu/menu.component.ts'), 'utf-8');
assert(
  menuTs.includes('grid-template-columns: repeat(2, 1fr) !important') &&
  menuTs.includes('gap: 0.45rem !important'),
  'Menu component enforces ultra-compact 2-column grid on mobile (<= 640px)'
);
assert(
  menuTs.includes('grid-template-columns: repeat(3, 1fr)') &&
  menuTs.includes('641px'),
  'Menu component enforces 3-column grid on tablet'
);
assert(
  menuTs.includes('grid-template-columns: repeat(4, 1fr)') &&
  menuTs.includes('993px'),
  'Menu component enforces 4-column grid on laptop'
);

// 3. Product Card interactive steppers & size responsiveness
const cardTs = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/product-card/product-card.component.ts'), 'utf-8');
assert(
  cardTs.includes('card-stepper') && cardTs.includes('stepper-btn plus') && cardTs.includes('stepper-btn minus'),
  'Product card features inline interactive stepper (+ and - controls with count in middle)'
);
assert(
  cardTs.includes('selectSize(size, $event)'),
  'Product card features interactive size pill selector on card front'
);
assert(
  !cardTs.includes('this.quickAdd.emit('),
  'Product card does not emit quickAdd to prevent duplicate item additions'
);
assert(
  cardTs.includes('@media (max-width: 640px)') && cardTs.includes('card-media'),
  'Product card has compact height and typography adjustments for mobile'
);

// 4. Search component responsiveness
const searchTs = fs.readFileSync(path.join(__dirname, '../src/app/features/search/search.component.ts'), 'utf-8');
assert(
  searchTs.includes('@media (max-width: 640px)') && searchTs.includes('.search-page-title'),
  'Search component has dedicated mobile header and input styling'
);

// 5. Checkout component responsiveness
const checkoutTs = fs.readFileSync(path.join(__dirname, '../src/app/features/checkout/checkout.component.ts'), 'utf-8');
assert(
  checkoutTs.includes('@media (max-width: 992px)') && checkoutTs.includes('checkout-grid'),
  'Checkout component adapts to 1 column on tablet and below'
);
assert(
  checkoutTs.includes('@media (max-width: 640px)') && checkoutTs.includes('.step-nav-footer'),
  'Checkout component has mobile media queries for full-width action buttons and compact cards'
);

// 6. Cart component responsiveness
const cartTs = fs.readFileSync(path.join(__dirname, '../src/app/features/cart/cart.component.ts'), 'utf-8');
assert(
  cartTs.includes('@media (max-width: 640px)') && cartTs.includes('.item-thumb'),
  'Cart component has compact thumb and full-width actions on mobile'
);

// 7. Order Confirmation & Track Order responsiveness
const orderConfirmTs = fs.readFileSync(path.join(__dirname, '../src/app/features/orders/order-confirmation.component.ts'), 'utf-8');
assert(
  orderConfirmTs.includes('@media (max-width: 640px)') && orderConfirmTs.includes('.actions-cta-bar'),
  'Order confirmation has stacked buttons and responsive title on mobile'
);

const trackOrderTs = fs.readFileSync(path.join(__dirname, '../src/app/features/orders/track-order.component.ts'), 'utf-8');
assert(
  trackOrderTs.includes('@media (max-width: 640px)') && trackOrderTs.includes('.tracking-actions'),
  'Track order component has stacked full-width actions and responsive timeline on mobile'
);

// 8. Contact & About responsiveness
const contactTs = fs.readFileSync(path.join(__dirname, '../src/app/features/contact/contact.component.ts'), 'utf-8');
assert(
  contactTs.includes('@media (max-width: 640px)') && contactTs.includes('.contact-hero'),
  'Contact component has mobile hero and compact phone buttons'
);

const aboutTs = fs.readFileSync(path.join(__dirname, '../src/app/features/about/about.component.ts'), 'utf-8');
assert(
  aboutTs.includes('@media (max-width: 640px)') && aboutTs.includes('.about-hero'),
  'About component has mobile hero and responsive cards'
);

// 9. Modals responsiveness
const editModalTs = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/edit-cart-item-modal/edit-cart-item-modal.component.ts'), 'utf-8');
assert(
  editModalTs.includes('@media (max-width: 640px)') && editModalTs.includes('.modal-footer'),
  'Edit cart item modal has full-width actions and responsive customizer on mobile'
);

const tableModalTs = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/table-selector-modal/table-selector-modal.component.ts'), 'utf-8');
assert(
  tableModalTs.includes('@media (max-width: 600px)') && tableModalTs.includes('.modal-footer'),
  'Table selector modal has stacked buttons and 2-column tables grid on mobile'
);

console.log('================================================================');
console.log(`📊 RESPONSIVENESS AUDIT: ${passed} PASSED, ${failed} FAILED out of ${passed + failed} Checks`);
console.log('================================================================');

if (failed > 0) {
  process.exit(1);
}
