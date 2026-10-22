const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://fruitella-seven.vercel.app';
const SITE_NAME = 'فروتيلا | Fruitella';
const DEFAULT_LOGO = `${BASE_URL}/images/brand/fruitella-logo.jpg`;

const distBrowserDir = path.join(__dirname, '..', 'dist', 'fruitella-app', 'browser');
const templateHtmlPath = path.join(distBrowserDir, 'index.html');

if (!fs.existsSync(templateHtmlPath)) {
  console.error('[SEO Gen] dist/fruitella-app/browser/index.html not found! Run ng build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templateHtmlPath, 'utf8');

// Load menu data
const menuDataPath = path.join(__dirname, '..', 'src', 'app', 'core', 'data', 'fruitella-menu.data.ts');
const menuContent = fs.readFileSync(menuDataPath, 'utf8');

// Parse Categories
let categories = [];
const catIndex = menuContent.indexOf('export const FRUITELLA_CATEGORIES: ProductCategory[] = [');
if (catIndex !== -1) {
  const catEndIndex = menuContent.indexOf('export const FRUITELLA_PRODUCTS', catIndex);
  const catJsonStr = menuContent.slice(catIndex + 'export const FRUITELLA_CATEGORIES: ProductCategory[] = '.length, catEndIndex).trim().replace(/;$/, '');
  try {
    categories = JSON.parse(catJsonStr);
  } catch (e) {
    console.warn('[SEO Gen] Failed to parse categories JSON:', e.message);
  }
}

// Parse Products
let products = [];
const prodIndex = menuContent.indexOf('export const FRUITELLA_PRODUCTS: Product[] = [');
if (prodIndex !== -1) {
  const prodJsonStr = menuContent.slice(prodIndex + 'export const FRUITELLA_PRODUCTS: Product[] = '.length).trim().replace(/;$/, '');
  try {
    products = JSON.parse(prodJsonStr);
  } catch (e) {
    console.warn('[SEO Gen] Failed to parse products JSON:', e.message);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function generateHtml(options) {
  const { title, description, image, url } = options;
  const escapedTitle = escapeHtml(title);
  const escapedDesc = escapeHtml(description);
  const fullImg = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  let html = templateHtml;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);

  // Meta description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="description" content="${escapedDesc}">`);

  // Open Graph
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:title" content="${escapedTitle}">`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:description" content="${escapedDesc}">`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:url" content="${fullUrl}">`);
  html = html.replace(/<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:image" content="${fullImg}">`);
  html = html.replace(/<meta\s+property=["']og:image:secure_url["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:image:secure_url" content="${fullImg}">`);

  // Twitter
  html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:title" content="${escapedTitle}">`);
  html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:description" content="${escapedDesc}">`);
  html = html.replace(/<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:image" content="${fullImg}">`);

  // Canonical
  html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i, `<link rel="canonical" href="${fullUrl}">`);

  return html;
}

let generatedCount = 0;

// 1. Generate pages for products
for (const prod of products) {
  if (!prod.slug) continue;
  const prodDir = path.join(distBrowserDir, 'product', prod.slug);
  fs.mkdirSync(prodDir, { recursive: true });

  const prodTitle = `${prod.nameAr} | ${SITE_NAME}`;
  const prodDesc = prod.descriptionAr
    ? `${prod.descriptionAr} - اطلبه الآن طازجاً من فروتيلا مول حياة تاون بالعبور.`
    : `${prod.nameAr} - عصير طبيعي طازج من فروتيلا مول حياة تاون العبور.`;

  const prodHtml = generateHtml({
    title: prodTitle,
    description: prodDesc,
    image: prod.image || DEFAULT_LOGO,
    url: `/product/${prod.slug}`
  });

  fs.writeFileSync(path.join(prodDir, 'index.html'), prodHtml, 'utf8');
  generatedCount++;
}

// 2. Generate pages for categories
for (const cat of categories) {
  if (!cat.slug) continue;
  const catDir = path.join(distBrowserDir, 'menu', cat.slug);
  fs.mkdirSync(catDir, { recursive: true });

  const catTitle = `${cat.nameAr} | منيو ${SITE_NAME}`;
  const catDesc = cat.descriptionAr
    ? `${cat.descriptionAr} - استكشف كافة أصناف ${cat.nameAr} من فروتيلا العبور.`
    : `منيو أصناف ${cat.nameAr} من عصائر ومشروبات طبيعية وحلويات في فروتيلا مول حياة تاون العبور.`;

  const catHtml = generateHtml({
    title: catTitle,
    description: catDesc,
    image: cat.image || DEFAULT_LOGO,
    url: `/menu/${cat.slug}`
  });

  fs.writeFileSync(path.join(catDir, 'index.html'), catHtml, 'utf8');
  generatedCount++;
}

// 3. Static main pages
const staticPages = [
  { path: 'menu', title: `قائمة المنيو بالكامل | ${SITE_NAME}`, desc: 'استعرض قائمة منيو فروتيلا الكاملة: عصائر طبيعية، سموذي، أفوكادو بالمكسرات، وافل، وحلويات في مول حياة تاون العبور.', image: DEFAULT_LOGO },
  { path: 'about', title: `قصة فروتيلا وفؤاد السمنودي | ${SITE_NAME}`, desc: 'تعرف على قصة تأسيس فروتيلا في مول حياة تاون العبور، معايير الجودة، وإدارة فؤاد السمنودي.', image: DEFAULT_LOGO },
  { path: 'contact', title: `تواصل معنا والفرع | ${SITE_NAME}`, desc: 'أرقام طلبات وتوصيل فروتيلا بالعبور 01037221133 - 01019183355، مول حياة تاون.', image: DEFAULT_LOGO }
];

for (const sp of staticPages) {
  const pDir = path.join(distBrowserDir, sp.path);
  fs.mkdirSync(pDir, { recursive: true });
  const pHtml = generateHtml({
    title: sp.title,
    description: sp.desc,
    image: sp.image,
    url: `/${sp.path}`
  });
  fs.writeFileSync(path.join(pDir, 'index.html'), pHtml, 'utf8');
  generatedCount++;
}

console.log(`[SEO Gen] Successfully generated ${generatedCount} SEO-optimized static Open Graph pages for WhatsApp/Facebook/Twitter previews!`);
