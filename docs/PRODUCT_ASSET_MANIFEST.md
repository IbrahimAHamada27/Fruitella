# بيان أصول وصور منتجات فروتيلا (Fruitella Product Asset Manifest)

تاريخ التدقيق والتحديث: 2026-10-25  
إجمالي عدد الأصناف في القائمة: **301 صنف**

## 1. ملخص التغطية البصرية (Image Coverage Summary)
- **صور موثقة مطابقة للمنتج (Verified Store Photos):** 69 صنف (مانجو، فروت سالاد، باور أفوكادو، حلويات وافل، مولتن، قشطوطة، أم علي، وأرز باللبن).
- **صور توضيحية من عصائر ومشروبات الفرع (Approximate Illustrative Store Photos):** 164 صنف (عصائر فريش، سموذي، ميلك شيك، موخيتو، بوبا، ميكسات).
- **بديل شعار فروتيلا الرسمي (Official Fruitella Logo Fallback):** 68 صنف (المشروبات الساخنة والقهوة، العصائر الشرقية، والعبوات العائلية — مقدمة بتنسيق `object-fit: contain` وخلفية محايدة لتفادي أي تشوه).
- **صور تالفة أو روابط معطلة:** 0 (خالية تماماً بنسبة 100%).
- **صور واجهات خارجية أو لوحات حائط معلقة كصور منتجات:** 0 (تمت إزالتها واستبدالها بالكامل).

## 2. سياسة العرض والبديل العالمي (Universal Fallback Policy)
- في حال تعذر تحميل أي صورة أو انقطاع الاتصال بالشبكة، يتم استدعاء شعار فروتيلا الرسمي (`/images/brand/fruitella-logo.jpg`) تلقائياً عبر المعالج المركزي (`onImageError`) وتطبيق التنسيق الآمن:
  ```css
  img.fruitella-logo-fallback {
    object-fit: contain !important;
    background-color: #f7faf8 !important;
    padding: 0.75rem !important;
    box-sizing: border-box !important;
  }
  ```
- تم تفعيل حماية ضد الحلقات اللانهائية لإعادة التحميل (`dataset.fallbackApplied`).

---

## 3. جدول الأصناف وتصنيف الصور (Product Image Coverage Table)

| كود الصنف | اسم الصنف بالعربية | بالإنجليزية | القسم | مسار الصورة | تصنيف الصورة |
|---|---|---|---|---|---|
| `fj-1` | عصير برتقال فريش | Fresh Orange Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-2` | عصير فراولة طبيعي | Fresh Strawberry Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-3` | عصير جوافة بيور | Pure Guava Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-4` | جوافة باللبن الطبيعي | Guava with Fresh Milk | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-5` | عصير ليمون فريش | Fresh Lemon Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-6` | ليمون نعناع مثلج | Lemon Mint Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-7` | ليمون باللبن | Lemon with Milk | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-8` | عصير بطيخ أحمر | Fresh Watermelon Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-9` | بطيخ بالنعناع | Watermelon with Mint | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-10` | بطيخ فراولة نعناع | Watermelon Strawberry Mint | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-11` | بلح باللبن الطبيعي | Dates with Fresh Milk | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-12` | موز باللبن | Banana with Milk | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-13` | فراولة باللبن | Strawberry with Milk | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-14` | عصير كانتالوب | Fresh Cantaloupe Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-15` | عصير رمان فريش | Fresh Pomegranate Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-16` | عصير كيوي طبيعي | Fresh Kiwi Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-17` | عصير تفاح فريش | Fresh Apple Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-18` | عصير أناناس طبيعي | Fresh Pineapple Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-19` | عصير عنب موسمي | Seasonal Grapes Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-20` | عصير خوخ فريش | Fresh Peach Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-21` | عصير برقوق | Fresh Plum Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fj-22` | عصير تين شوكي | Prickly Pear Juice | `fresh-juices` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `oj-1` | قصب طبيعي صافي | Pure Natural Sugarcane | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-2` | قصب باللبن | Sugarcane with Milk | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-3` | قصب بالبرتقال | Sugarcane with Orange | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-4` | قصب بالزنجبيل | Sugarcane with Ginger | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-5` | قصب بالأناناس | Sugarcane with Pineapple | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-6` | قصب بالسوبيا | Sugarcane with Sobya | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-7` | قصب بالليمون | Sugarcane with Lemon | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-8` | قصب بالجزر | Sugarcane with Carrot | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-9` | تمر هندي طبيعي | Natural Tamarind | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-10` | عناب أسواني مبرد | Aswan Karkadeh Ennab | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-11` | خروب طبيعي مثلج | Natural Carob Kharroub | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-12` | عصير دوم طبيعي | Natural Doum Juice | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-13` | دوم باللبن | Doum with Milk | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `oj-14` | مشروب جوز الهند التراثي | Coconut Walnut Drink | `oriental-juices` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `sb-1` | سوبيا طبيعي كلاسيك | Classic Natural Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-2` | سوبيا مانجو | Mango Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-3` | سوبيا بالموز | Banana Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-4` | سوبيا موكا | Mocha Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-5` | سوبيا فراولة | Strawberry Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-6` | سوبيا لوتس | Lotus Biscoff Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-7` | سوبيا بيستاشيو رويال | Royal Pistachio Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-8` | سوبيا نوتيلا | Nutella Sobya | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sb-9` | سوبيا فواكه قطع | Sobya with Fruit Chunks | `sobya-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mg-1` | مانجو فروتيلا سبيشال | Fruitella Signature Mango | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-2` | مانجو آيس كريم | Mango with Ice Cream | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-3` | مانجو موز عصير أو قطع | Mango Banana Juice or Chunks | `mango-world` | `/images/products/mango-chunks-bowl.jpg` | ✅ موثقة مطابقة |
| `mg-4` | مانجو فراولة طبقات | Layered Mango Strawberry | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-5` | مانجو تفاح | Mango Apple Blend | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-6` | مانجو أناناس | Mango Pineapple Tropical | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-7` | مانجو كيوي | Mango Kiwi Twist | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-8` | مانجو بطيخ | Mango Watermelon Cooler | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-9` | كوب مانجو قطع فريش | Fresh Mango Chunks Cup | `mango-world` | `/images/products/mango-chunks-bowl.jpg` | ✅ موثقة مطابقة |
| `mg-10` | مانجو جرجير | Mango Arugula Twist | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-11` | مانجو باللبن | Mango with Milk | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-12` | مانجو حب رمان | Mango with Pomegranate | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `mg-13` | مانجو زبادي مكسرات | Mango Yogurt Nuts | `mango-world` | `/images/products/mango-cocktail-bar.jpg` | ✅ موثقة مطابقة |
| `sm-1` | سموذي مانجو مثلج | Iced Mango Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sm-2` | سموذي فراولة فريش | Strawberry Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sm-3` | سموذي بطيخ مبرد | Watermelon Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sm-4` | سموذي توت أزرق رويال | Blueberry Royal Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sm-5` | سموذي توت أحمر | Raspberry Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sm-6` | سموذي ليمون نعناع | Lemon Mint Slush Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sm-7` | سموذي كيوي طبيعي | Fresh Kiwi Smoothie | `smoothie-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-1` | بنجر بالبرتقال | Beetroot with Orange | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-2` | بنجر بالرمان | Beetroot with Pomegranate | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-3` | بنجر بالفراولة | Beetroot with Strawberry | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-4` | جرجير باللبن والعسل | Arugula with Milk & Honey | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-5` | كيوي بالبرتقال | Kiwi with Orange Boost | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-6` | كيوي بالأناناس | Kiwi with Pineapple | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-7` | أناناس بالبرتقال | Pineapple with Orange | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-8` | برتقال بالزنجبيل الفريش | Orange with Fresh Ginger | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-9` | ليمون بالزنجبيل | Lemon with Fresh Ginger | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `en-10` | سوبر فيتامين سي | Super Vitamin C Cocktail | `energy-world` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fs-1` | كأس كوكتيل فواكه | Fruit Cocktail Cup | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-2` | سوبر كوكتيل بالآيس كريم | Super Cocktail with Ice Cream | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-3` | سلطة فواكه فروتيلا (فروت سالاد) | Fruitella Fruit Salad | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-4` | فروت سالاد بالآيس كريم | Fruit Salad with Ice Cream | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-5` | قنبلة فروتيلا الكلاسيكية | Fruitella Signature Bomb | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-6` | سوبر قنبلة فروتيلا رويال | Super Fruitella Royal Bomb | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-7` | كوب كيوي قطع | Kiwi Chunks Cup | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-8` | كوب بطيخ قطع مبرد | Watermelon Chunks Cup | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-9` | موز اسبيشال بالصوص والمكسرات | Special Banana Dessert Plate | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-10` | كوب فواكه مشكلة قطع | Mixed Fruit Chunks Cup | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-11` | كوب أناناس قطع طبيعي | Fresh Pineapple Chunks | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `fs-12` | كوب رمان حب فريش | Pomegranate Seeds Cup | `fruit-salad` | `/images/products/fruitella-cocktail-bowl.jpg` | ✅ موثقة مطابقة |
| `bb-1` | بوبا ميلك شيك بلو بيري | Boba Milkshake Blueberry | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-2` | بوبا ميلك شيك كوفي | Boba Milkshake Coffee | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-3` | بوبا ميلك شيك ميكس بيري | Boba Milkshake Mix Berry | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-4` | بوبا ميلك شيك مانجو | Boba Milkshake Mango | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-5` | بوبا ميلك شيك فراولة | Boba Milkshake Strawberry | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-6` | بوبا موخيتو جيلي كولا | Boba Mojito Jelly Cola | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-7` | بوبا موخيتو باشون فروت | Boba Mojito Passion Fruit | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-8` | بوبا موخيتو ليمون نعناع | Boba Mojito Lemon Mint | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-9` | بوبا موخيتو بلو بيري | Boba Mojito Blueberry | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `bb-10` | بوبا موخيتو تفاح أخضر | Boba Mojito Green Apple | `boba-fruitella` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-1` | مشروب أوريو كلاسيك | Oreo Classic Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-2` | مشروب بوريو | Borio Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-3` | مشروب جلاكسي حريري | Smooth Galaxy Chocolate | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-4` | مشروب توينكز | Twinkies Cream Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-5` | مشروب هوهوز | Hohos Chocolate Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-6` | مشروب سنيكرز كراميل وفول | Snickers Caramel Peanut Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-7` | مشروب مارس بالكراميل | Mars Caramel Chocolate Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-8` | مشروب مالتيزرز المقرمش | Maltesers Crispy Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-9` | مشروب تويكس أصابع | Twix Biscuit & Caramel Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-10` | مشروب كادبوري ديري ميلك | Cadbury Dairy Milk Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-11` | مشروب كيت كات ويفر | KitKat Crisp Wafer Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-12` | مشروب فيريرو روشيه الملكي | Ferrero Rocher Royal Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-13` | مشروب كيندر بوينو | Kinder Bueno Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-14` | سوبر أوريو إكسترا | Super Oreo Extra Cookies | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-15` | سوبر بوريو إكسترا | Super Borio Extra | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-16` | سوبر توينكز | Super Twinkies Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-17` | سوبر هوهوز | Super Hohos Shake | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ch-18` | التريبل شوكليت ميكس | The Triple Chocolate Signature | `chocolate-lovers` | `/images/products/kashtouta.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-1` | كاجو فانيليا أو شوكولاتة | Cashew Vanilla or Chocolate | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-2` | بندق فانيليا أو شوكولاتة | Hazelnut Vanilla or Chocolate | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-3` | لوز فانيليا أو شوكولاتة | Almond Vanilla or Chocolate | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-4` | سوداني فانيليا أو شوكولاتة | Peanut Vanilla or Chocolate | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-5` | جوز هند فانيليا أو شوكولاتة | Coconut Vanilla or Chocolate | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-6` | زبادي عسل نحل طبيعي | Yogurt with Pure Honey | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-7` | زبادي فراولة أو مانجو | Yogurt Strawberry or Mango | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-8` | زبادي فواكه مشكلة قطع | Yogurt with Mixed Fruit Chunks | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-9` | زبادي توت أحمر وأزرق | Berry Yogurt Shake | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-10` | زبادي بالكاجو الملكي | Royal Cashew Yogurt | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ny-11` | زبادي فواكه بالعسل | Yogurt Fruits & Honey | `nuts-yogurt` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-1` | ميلك شيك فانيليا | Vanilla Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-2` | ميلك شيك شوكولاتة | Chocolate Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-3` | ميلك شيك مانجو | Mango Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-4` | ميلك شيك موكا | Mocha Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-5` | ميلك شيك كراميل | Caramel Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-6` | ميلك شيك أوريو | Oreo Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-7` | ميلك شيك بوريو | Borio Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-8` | ميلك شيك توت أزرق | Blueberry Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-9` | ميلك شيك لوتس | Lotus Biscoff Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-10` | ميلك شيك ميكس بيري | Mix Berry Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-11` | ميلك شيك توينكز | Twinkies Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-12` | ميلك شيك كيوي | Kiwi Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-13` | ميلك شيك توت أحمر | Raspberry Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-14` | ميلك شيك نوتيلا | Nutella Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-15` | ميلك شيك بيستاشيو | Pistachio Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-16` | ميلك شيك سيريلاك زمان | Cerelac Nostalgia Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ms-17` | ميلك شيك فراولة | Strawberry Milkshake | `milkshakes` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `pw-1` | عصير أفوكادو بيور | Pure Avocado Juice | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-2` | أفوكادو كاجو أو بندق أو لوز | Avocado with Cashew, Hazelnut or Almond | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-3` | أفوكادو مكسرات مشكلة | Avocado Mixed Nuts Royal | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-4` | سوبر أفوكادو فروتيلا | Super Avocado Power | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-5` | أناناس باور الملكي | Royal Pineapple Power | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-6` | مشروب فياجرا طبيعي | Viagra Natural Energy Blend | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-7` | سوبر فياجرا فروتيلا | Super Viagra Signature Blend | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-8` | أفوكادو بالكيوي | Avocado with Kiwi | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-9` | أفوكادو بالمانجو | Avocado with Mango | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-10` | أفوكادو بالبلح والحليب | Avocado with Dates & Milk | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-11` | أفوكادو بالزبادي والعسل | Avocado with Yogurt & Honey | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-12` | أفوكادو فواكه قطع | Avocado with Fresh Fruit Chunks | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-13` | بلح جرجير عسل طاقة | Dates, Arugula & Honey Energy | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `pw-14` | باور فروتيلا رويال الحصري | Fruitella Royal Power | `power-fruitella` | `/images/products/avocado-nuts-mango-pair.jpg` | ✅ موثقة مطابقة |
| `ff-1` | رضعة الأسد | Lion Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ff-2` | رضعة القرد | Monkey Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ff-3` | رضعة الفيل | Elephant Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ff-4` | رضعة النمر | Tiger Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ff-5` | رضعة الحوت | Whale Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ff-6` | رضعة الكوالا | Koala Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ff-7` | رضعة لبن العصفور | Bird Milk Feeding | `forest-feedings` | `/images/products/fruit-cocktail-cup.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-1` | ميكس بطوط | Batot Cartoon Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-2` | ميكس فرافيرو | Farafiro Signature Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-3` | ميكس سبونج بوب | SpongeBob Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-4` | ميكس شيكو بانانا | Chico Banana Choco Shake | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-5` | ميكس ميكي ماوس | Mickey Mouse Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-6` | ميكس توم آند جيري | Tom & Jerry Duo Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-7` | ميكس أبو تريكة 22 | Aboutrika 22 Legend Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-8` | ميكس صاروخ فروتيلا | Rocket Mix Saroukh | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-9` | ميكس فروتيلا الحصري | Fruitella House Special Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-10` | ميكس بينا كولادا | Virgin Pina Colada | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-11` | ميكس جوجل | Google Power Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-12` | ميكس فيتامين سي | Citrus Vitamin C Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-13` | ميكس نص ضربة قطع | Nos Darba Half-Blended Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-14` | ميكس الشبح | The Ghost Special Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fm-15` | ميكس فيفا | Viva Celebration Mix | `fruitella-mixes` | `/images/products/fruit-salad-icecream.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `ic-1` | بولة آيس كريم (أبولة) | 1 Scoop Ice Cream | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `ic-2` | 2 بولة آيس كريم (2 أبولة) | 2 Scoops Ice Cream | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `ic-3` | 3 بولة آيس كريم (3 أبولة) | 3 Scoops Ice Cream | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `ic-4` | فتة آيس كريم فروتيلا | Fruitella Ice Cream Fatta | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `ic-5` | آيس كريم أمريكي صنداي | American Sundae Ice Cream | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `ic-6` | كأس الديناصور العملاق | The Dinosaur Giant Cup | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `ic-7` | عرايسي آيس كريم الملكي | Arayisi Royal Ice Cream | `ice-cream` | `/images/products/fruit-salad-icecream.jpg` | ✅ موثقة مطابقة |
| `mj-1` | موخيتو بلو بيري | Blueberry Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-2` | موخيتو توت أحمر | Raspberry Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-3` | موخيتو فراولة | Strawberry Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-4` | موخيتو تفاح أخضر | Green Apple Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-5` | موخيتو ليمون نعناع كلاسيك | Classic Lemon Mint Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-6` | موخيتو جيلي كولا | Jelly Cola Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-7` | موخيتو أناناس | Pineapple Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `mj-8` | موخيتو بول ميكس بيري | Red Bull Mix Berry Mojito | `mojito-world` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-1` | دايت الرشاقة | Diet Agility Blend | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-2` | دايت فتنس رياضي | Diet Fitness Booster | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-3` | دايت راني فريش | Diet Rani Fresh | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-4` | دايت جرين الأخضر | Diet Green Detox | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-5` | دايت عود فرنساوي | Diet French Silhouette | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-6` | دايت فروتيلا الأصلي | Original Fruitella Diet | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `dt-7` | دايت جديد فروتيلا | New Fruitella Diet | `fruitella-diet` | `/images/products/avocado-nuts-mango-pair.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `fp-1` | عبوة قصب عائلية | Family Sugarcane Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-2` | عبوة قصب بالبرتقال عائلية | Family Sugarcane with Orange | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-3` | عبوة قصب بالسوبيا عائلية | Family Sugarcane with Sobya | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-4` | عبوة قصب بالليمون عائلية | Family Sugarcane with Lemon | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-5` | عبوة قصب بالآيس كريم عائلية | Family Sugarcane with Ice Cream | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-6` | عبوة سوبيا عائلية | Family Sobya Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-7` | عبوة سوبيا بالمانجو عائلية | Family Mango Sobya Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-8` | عبوة تمر هندي عائلية | Family Tamarind Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-9` | عبوة خروب عائلية | Family Carob Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-10` | عبوة عناب عائلية | Family Ennab Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-11` | عبوة دوم عائلية | Family Doum Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-12` | عبوة دوم باللبن عائلية | Family Doum with Milk Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-13` | عبوة مانجو عائلية | Family Mango Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-14` | عبوة جوافة عائلية | Family Guava Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-15` | عبوة فراولة عائلية | Family Strawberry Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-16` | عبوة برتقال عائلية | Family Orange Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-17` | عبوة كيوي عائلية | Family Kiwi Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-18` | عبوة أفوكادو عائلية | Family Avocado Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-19` | عبوة أناناس عائلية | Family Pineapple Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-20` | عبوة بلح باللبن عائلية | Family Dates with Milk Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-21` | عبوة بطيخ عائلية | Family Watermelon Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-22` | عبوة ليمون عائلية | Family Lemon Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-23` | عبوة ليمون نعناع عائلية | Family Lemon Mint Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-24` | عبوة ليمون باللبن عائلية | Family Lemon with Milk Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-25` | عبوة موز باللبن عائلية | Family Banana with Milk Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-26` | عبوة كانتالوب عائلية | Family Cantaloupe Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-27` | عبوة فيتامين سي عائلية | Family Vitamin C Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-28` | عبوة يوسفي عائلية | Family Tangerine Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-29` | عبوة ميكس خلاط عائلية | Family Blender Mix Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `fp-30` | عبوة نص ضربة عائلية | Family Nos Darba Chunks Pack | `family-packs` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-1` | إسبريسو سينجل / دبل | Espresso Single / Double | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-2` | إسبريسو كوبا بالكريمة | Espresso Con Panna | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-3` | ماكياتو سينجل / دبل | Macchiato Single / Double | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-4` | كابتشينو إيطالي | Italian Cappuccino | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-5` | كافيه لاتيه ناعم | Caffè Latte | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-6` | فلات وايت أسترالي | Flat White | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-7` | أمريكانو ساخن | Hot Americano | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-8` | كورتادو إسباني | Spanish Cortado | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-9` | إسبانيش لاتيه ساخن | Hot Spanish Latte | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-10` | هوت لوتس لاتيه | Hot Lotus Biscoff Latte | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-11` | سولتد كاراميل لاتيه | Salted Caramel Latte | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-12` | بيستاشيو لاتيه ساخن | Hot Pistachio Latte | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-13` | موكا ساخنة | Hot Caffè Mocha | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-14` | وايت موكا ساخنة | Hot White Chocolate Mocha | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-15` | هوت شوكليت فاخر | Rich Hot Chocolate | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-16` | هوت أبل سيدر بالقرفة | Hot Apple Cider Cinnamon | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-17` | شاي أحمر كلاسيك | Classic Black Tea | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-18` | شاي أخضر نقي | Pure Green Tea | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-19` | شاي أخضر بالنعناع | Green Tea with Fresh Mint | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-20` | شاي لاتيه (كرك) | Tea Latte Karak | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-21` | قهوة تركي على الريحة / مضبوط | Turkish Coffee Single / Double | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-22` | قهوة فرنساوي باللبن | French Coffee with Milk | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-23` | قهوة بندق فواحة | Hazelnut Infused Coffee | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `hd-24` | قهوة بالكراميل | Caramel Infused Coffee | `hot-drinks` | `/images/brand/fruitella-logo.jpg` | 🛡️ شعار فروتيلا (Fallback) |
| `cd-1` | آيس لاتيه مثلج | Iced Latte | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-2` | آيس بيستاشيو لاتيه رويال | Iced Pistachio Latte Royal | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-3` | آيس أمريكانو | Iced Americano | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-4` | آيس لوتس لاتيه | Iced Lotus Biscoff Latte | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-5` | آيس سولتد كاراميل | Iced Salted Caramel Latte | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-6` | آيس كاراميل لاتيه | Iced Caramel Latte | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-7` | آيس موكا شوكولاتة | Iced Caffè Mocha | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cd-8` | آيس وايت موكا | Iced White Mocha | `cold-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-1` | ريد بول أصلي | Red Bull Energy Drink | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-2` | ريد بول شوجر فري | Red Bull Sugarfree | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-3` | ريد بول إسبريسو شوت | Red Bull Espresso Shot | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-4` | موخيتو ريد بول فراولة | Red Bull Strawberry Mojito | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-5` | موخيتو ريد بول خوخ | Red Bull Peach Mojito | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-6` | موخيتو ريد بول كيوي | Red Bull Kiwi Mojito | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sd-7` | موخيتو ريد بول بلو بيري | Red Bull Blueberry Mojito | `soft-drinks` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-1` | لاتيه فريبيه مثلج | Classic Latte Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-2` | كاراميل لاتيه فريبيه | Caramel Latte Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-3` | سولتد كاراميل لاتيه فريبيه | Salted Caramel Latte Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-4` | شوكولات فريبيه غني | Rich Chocolate Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-5` | شوكولات لاتيه فريبيه | Chocolate Latte Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-6` | أوريو فريبيه كوكيز | Oreo Cookies Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-7` | أوريو كوفي فريبيه | Oreo Coffee Mocha Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `cf-8` | إكسبرس فريبيه كينج | Express Signature Frappe | `cold-frappe` | `/images/products/signature-four-drinks.jpg` | 🥤 توضيحية من مشروبات الفرع |
| `sw-1` | وافل نوتيلا بلجيكي | Belgian Nutella Waffle | `sweets-desserts` | `/images/products/fruitella-signature-waffle.jpg` | ✅ موثقة مطابقة |
| `sw-2` | وافل لوتس مقرمش | Lotus Biscoff Waffle | `sweets-desserts` | `/images/products/fruitella-signature-waffle.jpg` | ✅ موثقة مطابقة |
| `sw-3` | وافل وايت شوكليت | White Chocolate Waffle | `sweets-desserts` | `/images/products/fruitella-signature-waffle.jpg` | ✅ موثقة مطابقة |
| `sw-4` | وافل نوتيلا أو لوتس بالآيس كريم | Waffle Nutella/Lotus with Ice Cream | `sweets-desserts` | `/images/products/fruitella-signature-waffle.jpg` | ✅ موثقة مطابقة |
| `sw-5` | وافل فواكه قطع وشوكولاتة | Fresh Fruits Waffle | `sweets-desserts` | `/images/products/fruitella-signature-waffle.jpg` | ✅ موثقة مطابقة |
| `sw-6` | ميني بان كيك فروتيلا | Fruitella Mini Pancakes | `sweets-desserts` | `/images/products/waffle-weekend-promo.jpg` | ✅ موثقة مطابقة |
| `sw-7` | مولتن كيك الشوكولاتة الذائبة | Lava Molten Cake | `sweets-desserts` | `/images/products/molten-cake.jpg` | ✅ موثقة مطابقة |
| `sw-8` | كيك ديسباسيتو البرازيلي | Despacito Chocolate Cake | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-9` | كريب نوتيلا أو لوتس | Nutella or Lotus Crepe | `sweets-desserts` | `/images/products/fruitella-signature-waffle.jpg` | ✅ موثقة مطابقة |
| `sw-10` | قشطوطة نوتيلا فاخرة | Nutella Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-11` | قشطوطة لوتس | Lotus Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-12` | قشطوطة بيستاشيو ملكية | Royal Pistachio Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-13` | قشطوطة نوتيلا وأوريو | Nutella & Oreo Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-14` | قشطوطة مكسرات محمصة | Mixed Nuts Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-15` | قشطوطة مانجو قطع | Fresh Mango Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-16` | قشطوطة فواكه مشكلة | Mixed Fruit Kashtouta | `sweets-desserts` | `/images/products/kashtouta.jpg` | ✅ موثقة مطابقة |
| `sw-17` | أرز باللبن سادة كلاسيك | Classic Plain Rice Pudding | `sweets-desserts` | `/images/products/rice-pudding.jpg` | ✅ موثقة مطابقة |
| `sw-18` | أرز باللبن فرن محمر | Baked Oven Rice Pudding | `sweets-desserts` | `/images/products/rice-pudding.jpg` | ✅ موثقة مطابقة |
| `sw-19` | طاجن أم علي بلدي بالسمن واللبن | Traditional Om Ali Hot Pot | `sweets-desserts` | `/images/products/om-ali.jpg` | ✅ موثقة مطابقة |
| `sw-20` | أرز باللبن بالنوتيلا | Rice Pudding with Nutella | `sweets-desserts` | `/images/products/rice-pudding.jpg` | ✅ موثقة مطابقة |
| `sw-21` | أرز باللبن باللوتس | Rice Pudding with Lotus | `sweets-desserts` | `/images/products/rice-pudding.jpg` | ✅ موثقة مطابقة |
| `sw-22` | أرز باللبن بالمكسرات الفاخرة | Rice Pudding with Premium Nuts | `sweets-desserts` | `/images/products/rice-pudding.jpg` | ✅ موثقة مطابقة |
| `sw-23` | أرز باللبن مانجو قطع | Rice Pudding with Mango Chunks | `sweets-desserts` | `/images/products/rice-pudding.jpg` | ✅ موثقة مطابقة |
