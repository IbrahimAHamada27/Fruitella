const fs = require('fs');
const content = fs.readFileSync('src/app/core/data/fruitella-menu.data.ts', 'utf8');

const prodIndex = content.indexOf('export const FRUITELLA_PRODUCTS: Product[] = [');
const prodEndIndex = content.indexOf('export const FRUITELLA_ADDONS');
const prodJsonStr = content.slice(prodIndex + 'export const FRUITELLA_PRODUCTS: Product[] = '.length, prodEndIndex).trim().replace(/;$/, '');
const products = JSON.parse(prodJsonStr);

const prefixes = ['fs-', 'bb-', 'ch-', 'ms-'];
const filtered = products.filter(p => prefixes.some(pr => p.id.startsWith(pr)));
filtered.forEach(p => console.log(`${p.id} | ${p.slug} | ${p.nameAr} | ${p.image}`));
