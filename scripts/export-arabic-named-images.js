const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/images/products');
const destDir = path.join(__dirname, '../صور_بالأسماء_العربية');
fs.mkdirSync(destDir, { recursive: true });

const copyBatch1 = require('./copy-product-images-list.json'); // or map directly
