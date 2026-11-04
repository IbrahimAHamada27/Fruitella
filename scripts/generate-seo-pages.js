const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://fruitellajuice.com';
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
  const prodEndIndex = menuContent.indexOf('export const FRUITELLA_ADDONS', prodIndex);
  const endSlice = prodEndIndex !== -1 ? prodEndIndex : menuContent.length;
  const prodJsonStr = menuContent.slice(prodIndex + 'export const FRUITELLA_PRODUCTS: Product[] = '.length, endSlice).trim().replace(/;$/, '');
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
  const { title, description, image, url, jsonLd, extraHead, appRootContent } = options;
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

  // Optional Page-Specific Structured Data
  if (jsonLd) {
    const jsonLdTag = `\n    <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>\n  </head>`;
    html = html.replace(/<\/head>/i, jsonLdTag);
  }

  // Extra head elements (e.g. pre-activating table state in localStorage)
  if (extraHead) {
    html = html.replace(/<\/head>/i, `\n    ${extraHead}\n  </head>`);
  }

  // App-root initial content (e.g. fast branded loader before Angular hydratation)
  if (appRootContent) {
    html = html.replace(/<app-root><\/app-root>/i, `<app-root>${appRootContent}</app-root>`);
  }

  return html;
}

let generatedCount = 0;
const sitemapUrls = [];
const today = new Date().toISOString().split('T')[0];

// Main Static Pages
sitemapUrls.push({ loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' });
sitemapUrls.push({ loc: `${BASE_URL}/menu`, changefreq: 'daily', priority: '0.9' });
sitemapUrls.push({ loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.7' });
sitemapUrls.push({ loc: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.8' });

// 1. Generate pages for products
for (const prod of products) {
  if (!prod.slug) continue;
  const prodDir = path.join(distBrowserDir, 'product', prod.slug);
  fs.mkdirSync(prodDir, { recursive: true });

  const prodTitle = `${prod.nameAr} | ${SITE_NAME}`;
  const prodDesc = prod.descriptionAr
    ? `${prod.descriptionAr} - اطلبه الآن طازجاً من فروتيلا مول حياة تاون بالعبور.`
    : `${prod.nameAr} - عصير طبيعي طازج من فروتيلا مول حياة تاون العبور.`;

  const minPrice = prod.sizes && prod.sizes.length > 0 ? Math.min(...prod.sizes.map(s => s.price)) : 30;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: prod.nameAr,
    alternateName: prod.nameEn,
    description: prodDesc,
    image: prod.image ? (prod.image.startsWith('http') ? prod.image : `${BASE_URL}${prod.image}`) : DEFAULT_LOGO,
    brand: {
      '@type': 'Brand',
      name: 'فروتيلا | Fruitella'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EGP',
      price: minPrice,
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/product/${prod.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Fruitella Juice Bar'
      }
    }
  };

  const prodHtml = generateHtml({
    title: prodTitle,
    description: prodDesc,
    image: prod.image || DEFAULT_LOGO,
    url: `/product/${prod.slug}`,
    jsonLd: productJsonLd
  });

  fs.writeFileSync(path.join(prodDir, 'index.html'), prodHtml, 'utf8');
  sitemapUrls.push({
    loc: `${BASE_URL}/product/${prod.slug}`,
    changefreq: 'weekly',
    priority: '0.8'
  });
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
  sitemapUrls.push({
    loc: `${BASE_URL}/menu/${cat.slug}`,
    changefreq: 'weekly',
    priority: '0.8'
  });
  generatedCount++;
}

// 3. Static main pages
const staticPages = [
  { path: 'menu', title: `منيو وأسعار فروتيلا | أحسن عصير في العبور | ${SITE_NAME}`, desc: 'استعرض منيو وأسعار فروتيلا: أحسن عصير في العبور، عصير قصب فريش، سموذي، خلطات أفوكادو ملكية بالمكسرات، وافل وحلويات في مول حياة تاون العبور.', image: DEFAULT_LOGO },
  { path: 'about', title: `قصة براند فروتيلا | أفضل محل عصير في العبور | ${SITE_NAME}`, desc: 'تعرف على قصة تأسيس فروتيلا في مول حياة تاون العبور وسر تميزنا في تقديم أحسن عصير طبيعي وقصب وحلويات بجودة استثنائية.', image: DEFAULT_LOGO },
  { path: 'contact', title: `تواصل معنا والدليفري | فرع مول حياة تاون | ${SITE_NAME}`, desc: 'أرقام طلبات وتوصيل فروتيلا بالعبور 01037221133 - 01104606760، موقع الفرع مول حياة تاون الحي السادس، دليفري سريع لكافة أحياء العبور.', image: DEFAULT_LOGO }
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

// 4. Generate static standalone QR pages for all 30 restaurant tables (/table/:id and /t/:id)
console.log('[SEO Gen] Pre-generating static stand QR routes for all tables (1 to 30)...');
for (let tNum = 1; tNum <= 30; tNum++) {
  const tableTitle = `طاولة رقم ${tNum} | منيو ${SITE_NAME}`;
  const tableDesc = `طلب صالة مباشر من طاولة رقم ${tNum} بفرع فروتيلا مول حياة تاون العبور. استمتع بأشهى العصائر الطبيعية الطازجة، السموذي، والوافل مع التوصيل لطاولتك.`;
  
  const extraHead = `<script>
    try {
      var raw = localStorage.getItem('fruitella_fulfillment_state_v2');
      var state = raw ? JSON.parse(raw) : {};
      state.type = 'table';
      state.tableDetails = {
        tableNumber: ${tNum},
        tableNameAr: 'طاولة #${tNum}',
        detectedFromQr: true
      };
      localStorage.setItem('fruitella_fulfillment_state_v2', JSON.stringify(state));
    } catch (e) {}
  </script>`;

  const appRootContent = `<div style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; font-family: Alexandria, Cairo, system-ui, sans-serif; text-align: center; padding: 2rem; color: #1d4d29;">
    <div style="width: 72px; height: 72px; border-radius: 50%; background: #e8f5e9; color: #1d4d29; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1.25rem; box-shadow: 0 4px 12px rgba(29,77,41,0.12);">🍹</div>
    <h1 style="font-size: 1.45rem; font-weight: 800; margin: 0 0 0.5rem 0; color: #14361d;">جاري ربط الطلب بطاولة رقم ${tNum}...</h1>
    <p style="font-size: 0.95rem; color: #4b6354; margin: 0; max-width: 420px; line-height: 1.6;">نربط طلبك بـ ترابيزة #${tNum} بمول حياة تاون لتجهيز تجربة سريعة ونقلك للمنيو مباشرة.</p>
  </div>`;

  // Both /table/:id and /t/:id routes
  for (const prefix of ['table', 't']) {
    const tableDir = path.join(distBrowserDir, prefix, String(tNum));
    fs.mkdirSync(tableDir, { recursive: true });

    const tableHtml = generateHtml({
      title: tableTitle,
      description: tableDesc,
      image: DEFAULT_LOGO,
      url: `/${prefix}/${tNum}`,
      extraHead: extraHead,
      appRootContent: appRootContent
    });

    fs.writeFileSync(path.join(tableDir, 'index.html'), tableHtml, 'utf8');
    generatedCount++;
  }
}

// 5. Generate sitemap.xml
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
for (const entry of sitemapUrls) {
  sitemapXml += `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>\n`;
}
sitemapXml += `</urlset>\n`;

// Write sitemap to dist and public
fs.writeFileSync(path.join(distBrowserDir, 'sitemap.xml'), sitemapXml, 'utf8');
const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`[SEO Gen] Successfully generated ${generatedCount} SEO-optimized static Open Graph pages!`);
console.log(`[SEO Gen] Successfully generated sitemap.xml with ${sitemapUrls.length} indexed URLs!`);
