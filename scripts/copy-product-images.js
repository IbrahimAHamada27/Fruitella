const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../صور');
const destDir = path.join(__dirname, '../public/images/products');

const mapping = {
  // 1. عصائر شرقية (14 صنف)
  'Screenshot 2026-11-08 163636.png': 'sugarcane-pure',
  'Screenshot 2026-11-08 163645.png': 'sugarcane-milk',
  'Screenshot 2026-11-08 163656.png': 'sugarcane-orange',
  'Screenshot 2026-11-08 163709.png': 'sugarcane-ginger',
  'Screenshot 2026-11-08 163718.png': 'sugarcane-pineapple',
  'Screenshot 2026-11-08 163732.png': 'sugarcane-sobia',
  'Screenshot 2026-11-08 163741.png': 'sugarcane-lemon',
  'Screenshot 2026-11-08 163806.png': 'sugarcane-carrot',
  'Screenshot 2026-11-08 163817.png': 'tamarind-natural',
  'Screenshot 2026-11-08 163825.png': 'karkadeh-ennab',
  'Screenshot 2026-11-08 163842.png': 'walnut-drink',
  'Screenshot 2026-11-08 163901.png': 'doum-milk',
  'Screenshot 2026-11-08 163912.png': 'doum-juice',
  'Screenshot 2026-11-08 163922.png': 'carob-kharroub',

  // 2. عصائر فريش (19 صنف)
  'Screenshot 2026-11-08 164004.png': 'orange-juice',
  'Screenshot 2026-11-08 164013.png': 'strawberry-juice',
  'Screenshot 2026-11-08 164019.png': 'guava-juice',
  'Screenshot 2026-11-08 164036.png': 'guava-milk',
  'Screenshot 2026-11-08 164045.png': 'lemon-juice',
  'Screenshot 2026-11-08 164054.png': 'lemon-mint-juice',
  'Screenshot 2026-11-08 164106.png': 'banana-milk',
  'Screenshot 2026-11-08 164114.png': 'dates-milk',
  'Screenshot 2026-11-08 164125.png': 'watermelon-strawberry-mint',
  'Screenshot 2026-11-08 164137.png': 'watermelon-mint',
  'Screenshot 2026-11-08 164145.png': 'watermelon-juice',
  'Screenshot 2026-11-08 164156.png': 'lemon-milk',
  'Screenshot 2026-11-08 164212.png': 'strawberry-milk',
  'Screenshot 2026-11-08 164227.png': 'cantaloupe-juice',
  'Screenshot 2026-11-08 164235.png': 'pomegranate-juice',
  'Screenshot 2026-11-08 164246.png': 'kiwi-juice',
  'Screenshot 2026-11-08 164256.png': 'apple-juice',
  'Screenshot 2026-11-08 164306.png': 'pineapple-juice',
  'Screenshot 2026-11-08 164315.png': 'prickly-pear-juice',

  // 3. عالم السوبيا (9 أصناف)
  'Screenshot 2026-11-08 164751.png': 'sobya-natural',
  'Screenshot 2026-11-08 164805.png': 'sobya-mango',
  'Screenshot 2026-11-08 164812.png': 'sobya-banana',
  'Screenshot 2026-11-08 164824.png': 'sobya-lotus',
  'Screenshot 2026-11-08 164831.png': 'sobya-strawberry',
  'Screenshot 2026-11-08 164843.png': 'sobya-mocha',
  'Screenshot 2026-11-08 164855.png': 'sobya-pistachio',
  'Screenshot 2026-11-08 164903.png': 'sobya-nutella',
  'Screenshot 2026-11-08 164910.png': 'sobya-fruit-chunks',

  // 4. عالم المانجو (13 صنف)
  'Screenshot 2026-11-08 165041.png': 'mango-fruitella-signature',
  'Screenshot 2026-11-08 165050.png': 'mango-icecream',
  'Screenshot 2026-11-08 165100.png': 'mango-banana',
  'Screenshot 2026-11-08 165108.png': 'mango-strawberry',
  'Screenshot 2026-11-08 165119.png': 'mango-apple',
  'Screenshot 2026-11-08 165127.png': 'mango-chunks-cup',
  'Screenshot 2026-11-08 165134.png': 'mango-watermelon',
  'Screenshot 2026-11-08 165145.png': 'mango-kiwi',
  'Screenshot 2026-11-08 165152.png': 'mango-pineapple',
  'Screenshot 2026-11-08 165205.png': 'mango-rocket',
  'Screenshot 2026-11-08 165212.png': 'mango-milk',
  'Screenshot 2026-11-08 165226.png': 'mango-pomegranate',
  'Screenshot 2026-11-08 165235.png': 'mango-yogurt-nuts',

  // 5. عالم الطاقة (10 أصناف)
  'Screenshot 2026-11-08 165510.png': 'beetroot-orange',
  'Screenshot 2026-11-08 165518.png': 'beetroot-pomegranate',
  'Screenshot 2026-11-08 165529.png': 'beetroot-strawberry',
  'Screenshot 2026-11-08 165536.png': 'arugula-milk',
  'Screenshot 2026-11-08 165549.png': 'kiwi-orange',
  'Screenshot 2026-11-08 165600.png': 'super-vitamin-c',
  'Screenshot 2026-11-08 165607.png': 'lemon-ginger',
  'Screenshot 2026-11-08 165615.png': 'orange-ginger',
  'Screenshot 2026-11-08 165622.png': 'pineapple-orange',
  'Screenshot 2026-11-08 165630.png': 'kiwi-pineapple'
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let copied = 0;
for (const [srcFile, slug] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, srcFile);
  const destPath = path.join(destDir, slug + '.png');
  fs.copyFileSync(srcPath, destPath);
  copied++;
}

console.log(`Successfully copied ${copied} product images to ${destDir}`);

