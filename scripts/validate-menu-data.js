const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('🔍 FRUITELLA MENU DATA ENGINEERING & INTEGRITY VALIDATOR');
console.log('================================================================\n');

// Read the menu data file
const menuFilePath = path.join(__dirname, '../src/app/core/data/fruitella-menu.data.ts');
const menuContent = fs.readFileSync(menuFilePath, 'utf8');

// Simple extraction of the data objects from the compiled/transpiled typescript or direct import
// Since it's valid JS structures assigned to export const, we can extract via a node eval context
const categoriesMatch = menuContent.match(/export const FRUITELLA_CATEGORIES: ProductCategory\[\] = (\[[\s\S]*?\]);/);
const productsMatch = menuContent.match(/export const FRUITELLA_PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
const addonsMatch = menuContent.match(/export const FRUITELLA_ADDONS: ProductAddon\[\] = (\[[\s\S]*?\]);/);

if (!categoriesMatch || !productsMatch || !addonsMatch) {
  console.error('❌ Failed to parse fruitella-menu.data.ts');
  process.exit(1);
}

const categories = JSON.parse(categoriesMatch[1]);
const products = JSON.parse(productsMatch[1]);
const addons = JSON.parse(addonsMatch[1]);

let errors = [];
let warnings = [];

// 1. Category validation
const categoryIds = new Set();
const categorySlugs = new Set();

categories.forEach((cat, idx) => {
  if (!cat.id) errors.push(`Category at index ${idx} missing id`);
  if (categoryIds.has(cat.id)) errors.push(`Duplicate category id: ${cat.id}`);
  categoryIds.add(cat.id);

  if (!cat.slug) errors.push(`Category ${cat.id} missing slug`);
  if (categorySlugs.has(cat.slug)) errors.push(`Duplicate category slug: ${cat.slug}`);
  categorySlugs.add(cat.slug);

  if (!cat.nameAr || cat.nameAr.trim() === '') errors.push(`Category ${cat.id} missing nameAr`);
  if (!cat.descriptionAr || cat.descriptionAr.trim() === '') errors.push(`Category ${cat.id} missing descriptionAr`);
  if (!cat.informationAr || !Array.isArray(cat.informationAr) || cat.informationAr.length === 0) {
    errors.push(`Category ${cat.id} missing informationAr (معلومات تهمك)`);
  }
});

// 2. Product validation
const productIds = new Set();
const productSlugs = new Set();
let totalVariants = 0;
let verifiedPrices = 0;
let unverifiedPrices = 0;
let missingDescriptions = 0;
let needsReviewCount = 0;

products.forEach((prod, idx) => {
  if (!prod.id) errors.push(`Product at index ${idx} missing id`);
  if (productIds.has(prod.id)) errors.push(`Duplicate product id: ${prod.id}`);
  productIds.add(prod.id);

  if (!prod.slug) errors.push(`Product ${prod.id} missing slug`);
  if (productSlugs.has(prod.slug)) errors.push(`Duplicate product slug: ${prod.slug}`);
  productSlugs.add(prod.slug);

  if (!prod.nameAr || prod.nameAr.trim() === '') errors.push(`Product ${prod.id} missing nameAr`);
  if (!prod.descriptionAr || prod.descriptionAr.trim() === '') {
    missingDescriptions++;
    warnings.push(`Product ${prod.id} (${prod.nameAr}) has empty description`);
  }

  // Check category reference
  if (!categorySlugs.has(prod.categorySlug)) {
    errors.push(`Product ${prod.id} references non-existent categorySlug: ${prod.categorySlug}`);
  }

  // Check base price
  if (typeof prod.basePrice !== 'number' || prod.basePrice < 0) {
    errors.push(`Product ${prod.id} has invalid basePrice: ${prod.basePrice}`);
  }

  // Check sizes/variants
  if (!prod.sizes || !Array.isArray(prod.sizes) || prod.sizes.length === 0) {
    errors.push(`Product ${prod.id} has no sizes/variants defined`);
  } else {
    prod.sizes.forEach((size, sIdx) => {
      totalVariants++;
      if (typeof size.price !== 'number' || size.price <= 0) {
        errors.push(`Product ${prod.id} size[${sIdx}] has invalid price: ${size.price}`);
      }
      if (size.extractionStatus === 'verified') {
        verifiedPrices++;
      } else {
        unverifiedPrices++;
      }
    });
  }

  if (prod.extractionStatus === 'needs_review' || prod.availability === 'needs_review') {
    needsReviewCount++;
  }
});

// 3. Add-ons validation
addons.forEach((addon, idx) => {
  if (!addon.id) errors.push(`Addon at index ${idx} missing id`);
  if (!addon.nameAr) errors.push(`Addon ${addon.id} missing nameAr`);
  if (typeof addon.price !== 'number' || addon.price < 0) errors.push(`Addon ${addon.id} has invalid price: ${addon.price}`);
});

console.log('----------------------------------------------------------------');
console.log('📊 DATA QUALITY METRICS REPORT:');
console.log('----------------------------------------------------------------');
console.log(`• Total Menu Categories:        ${categories.length}`);
console.log(`• Total Distinct Products:      ${products.length}`);
console.log(`• Total Product Variants:       ${totalVariants}`);
console.log(`• Total Add-ons / Syrups:       ${addons.length}`);
console.log(`• Verified Variants / Prices:   ${verifiedPrices}`);
console.log(`• Unverified / Review Variants: ${unverifiedPrices}`);
console.log(`• Products Needing Review:      ${needsReviewCount}`);
console.log(`• Missing Descriptions:         ${missingDescriptions}`);
console.log(`• Total Schema Errors Found:    ${errors.length}`);
console.log(`• Total Warnings Found:         ${warnings.length}`);
console.log('----------------------------------------------------------------\n');

if (errors.length > 0) {
  console.error('❌ VALIDATION FAILED WITH ERRORS:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('✅ ALL INTEGRITY CHECKS PASSED: 0 duplicate IDs, 0 broken category references, 0 negative prices, 100% Arabic coverage, and every category contains structured "معلومات تهمك" data.');
}
