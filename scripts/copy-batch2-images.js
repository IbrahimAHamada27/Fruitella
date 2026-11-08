const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../صور');
const destDir = path.join(__dirname, '../public/images/products');

const mapping = {
  // === 7. فروت سالاد (12 صنف) ===
  'Screenshot 2026-11-08 170506.png': 'cocktail-cup',                 // كأس كوكتيل فواكه
  'Screenshot 2026-11-08 170513.png': 'super-cocktail-icecream',     // سوبر كوكتيل بالآيس كريم
  'Screenshot 2026-11-08 170523.png': 'fruit-salad-bowl',            // سلطة فواكه فروتيلا (فروت سالاد)
  'Screenshot 2026-11-08 170533.png': 'kiwi-chunks-cup',             // كوب كيوي قطع
  'Screenshot 2026-11-08 170541.png': 'super-fruitella-bomb',        // سوبر قنبلة فروتيلا رويال
  'Screenshot 2026-11-08 170548.png': 'fruitella-bomb',              // قنبلة فروتيلا الكلاسيكية
  'Screenshot 2026-11-08 170602.png': 'fruit-salad-icecream',        // فروت سالاد بالآيس كريم
  'Screenshot 2026-11-08 170609.png': 'watermelon-chunks-cup',       // كوب بطيخ قطع مبرد
  'Screenshot 2026-11-08 170620.png': 'pomegranate-seeds-cup',       // كوب رمان حب فريش
  'Screenshot 2026-11-08 170628.png': 'pineapple-chunks-seasonal',   // كوب أناناس قطع طبيعي
  'Screenshot 2026-11-08 170637.png': 'mixed-fruits-chunks',         // كوب فواكه مشكلة قطع
  'Screenshot 2026-11-08 170646.png': 'special-banana-plate',        // موز اسبيشال بالصوص والمكسرات

  // === 8. بوبا فروتيلا (10 أصناف) ===
  'Screenshot 2026-11-08 170806.png': 'boba-milkshake-blueberry',    // بوبا ميلك شيك بلو بيري
  'Screenshot 2026-11-08 170812.png': 'boba-milkshake-coffee',       // بوبا ميلك شيك كوفي
  'Screenshot 2026-11-08 170820.png': 'boba-milkshake-mix-berry',    // بوبا ميلك شيك ميكس بيري
  'Screenshot 2026-11-08 170831.png': 'boba-milkshake-mango',        // بوبا ميلك شيك مانجو
  'Screenshot 2026-11-08 170839.png': 'boba-milkshake-strawberry',   // بوبا ميلك شيك فراولة
  'Screenshot 2026-11-08 170850.png': 'boba-mojito-green-apple',     // بوبا موخيتو تفاح أخضر
  'Screenshot 2026-11-08 170859.png': 'boba-mojito-blueberry',       // بوبا موخيتو بلو بيري
  'Screenshot 2026-11-08 170908.png': 'boba-mojito-lemon-mint',      // بوبا موخيتو ليمون نعناع
  'Screenshot 2026-11-08 170917.png': 'boba-mojito-passion-fruit',   // بوبا موخيتو باشون فروت
  'Screenshot 2026-11-08 170926.png': 'boba-mojito-jelly-cola',      // بوبا موخيتو جيلي كولا

  // === 9. عشاق الشوكولاتة (9 أصناف) ===
  'Screenshot 2026-11-08 171030.png': 'oreo-drink',                  // مشروب أوريو كلاسيك
  'Screenshot 2026-11-08 171040.png': 'borio-drink',                 // مشروب بوريو
  'Screenshot 2026-11-08 171053.png': 'galaxy-drink',                // مشروب جلاكسي حريري
  'Screenshot 2026-11-08 171100.png': 'twinkies-drink',              // مشروب توينكز
  'Screenshot 2026-11-08 171106.png': 'hohos-drink',                 // مشروب هوهوز
  'Screenshot 2026-11-08 171115.png': 'twix-drink',                  // مشروب تويكس أصابع
  'Screenshot 2026-11-08 171121.png': 'maltesers-drink',             // مشروب مالتيزرز المقرمش
  'Screenshot 2026-11-08 171131.png': 'mars-drink',                  // مشروب مارس بالكراميل
  'Screenshot 2026-11-08 171138.png': 'snickers-drink',              // مشروب سنيكرز كراميل وفول

  // === 11. عالم الميلك شيك (17 صنف) ===
  'Screenshot 2026-11-08 171735.png': 'vanilla-milkshake',           // ميلك شيك فانيليا
  'Screenshot 2026-11-08 171744.png': 'chocolate-milkshake',         // ميلك شيك شوكولاتة
  'Screenshot 2026-11-08 171758.png': 'mango-milkshake',             // ميلك شيك مانجو
  'Screenshot 2026-11-08 171805.png': 'mocha-milkshake',             // ميلك شيك موكا
  'Screenshot 2026-11-08 171812.png': 'caramel-milkshake',           // ميلك شيك كراميل
  'Screenshot 2026-11-08 171822.png': 'oreo-milkshake',              // ميلك شيك أوريو
  'Screenshot 2026-11-08 171834.png': 'kiwi-milkshake',              // ميلك شيك كيوي
  'Screenshot 2026-11-08 171843.png': 'twinkies-milkshake',          // ميلك شيك توينكز
  'Screenshot 2026-11-08 171853.png': 'mix-berry-milkshake',         // ميلك شيك ميكس بيري
  'Screenshot 2026-11-08 171905.png': 'lotus-milkshake',             // ميلك شيك لوتس
  'Screenshot 2026-11-08 171913.png': 'blueberry-milkshake',         // ميلك شيك توت أزرق
  'Screenshot 2026-11-08 171921.png': 'borio-milkshake',             // ميلك شيك بوريو
  'Screenshot 2026-11-08 171932.png': 'raspberry-milkshake',         // ميلك شيك توت أحمر
  'Screenshot 2026-11-08 171940.png': 'nutella-milkshake',           // ميلك شيك نوتيلا
  'Screenshot 2026-11-08 171949.png': 'pistachio-milkshake',         // ميلك شيك بيستاشيو
  'Screenshot 2026-11-08 171957.png': 'cerelac-milkshake',           // ميلك شيك سيريلاك زمان
  'Screenshot 2026-11-08 172007.png': 'strawberry-milkshake'         // ميلك شيك فراولة
};

let copied = 0;
for (const [file, slug] of Object.entries(mapping)) {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, `${slug}.png`);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    copied++;
    console.log(`Copied ${file} -> ${slug}.png`);
  } else {
    console.warn(`File not found: ${srcFile}`);
  }
}

console.log(`\nSuccessfully copied and named ${copied} images!`);
