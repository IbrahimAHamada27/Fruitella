const fs = require('fs');
const path = require('path');

// 24 Categories with their verified metadata and "معلومات تهمك" (informationAr)
const categories = [
  {
    id: 'fresh-juices',
    slug: 'fresh-juices',
    nameAr: 'عصائر فريش',
    nameEn: 'Fresh Natural Juices',
    descriptionAr: 'عصائر طبيعية 100% معصورة طازجة يومياً بدون أي إضافات أو ألوان صناعية',
    icon: 'fa-solid fa-glass-water',
    themeColor: '#15803d',
    image: '/images/products/fruit-cocktail-cup.jpg',
    displayOrder: 1,
    informationAr: [
      'اختار الحجم المتاح للصنف قبل إضافته للسلة؛ تتوفر العصائر بأحجام L ولتر و4 لتر حسب القائمة.',
      'لو بتفضّل طعم فاكهة واحدة صافية، ابدأ بالعصائر المفردة، ولو بتحب مزج النكهات تصفح قسم الميكسات.',
      'جميع العصائر فريش بدون نكهات صناعية أو مواد حافظة، ويتم عصرها عند الطلب.'
    ]
  },
  {
    id: 'oriental-juices',
    slug: 'oriental-juices',
    nameAr: 'عصائر شرقية',
    nameEn: 'Oriental Juices',
    descriptionAr: 'قصب طبيعي، دوم، خروب، تمر هندي وعناب محضر بالطرق التراثية الأصيلة',
    icon: 'fa-solid fa-wheat-awn',
    themeColor: '#b45309',
    image: '/images/menu/menu-board-4.jpg',
    displayOrder: 2,
    informationAr: [
      'قسم العصائر الشرقية بيضم خيارات شعبية متميزة كالقصب الطبيعي والدوم والخروب والعناب والتمر الهندي.',
      'راجع الحجم قبل الطلب؛ عبوة اللتر وعبوة 4 لتر متاحين لأغلب الأصناف للمشاركة العائلية.',
      'إضافات زي اللبن أو البرتقال أو الزنجبيل متوفرة فقط للأصناف المعروضة بالمنيو.'
    ]
  },
  {
    id: 'sobya-world',
    slug: 'sobya-world',
    nameAr: 'عالم السوبيا',
    nameEn: 'Sobya World',
    descriptionAr: 'سوبيا مثلجة وممزوجة بأشهى النكهات من المانجو واللوتس والنوتيلا والبيستاشيو',
    icon: 'fa-solid fa-mug-saucer',
    themeColor: '#0284c7',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 3,
    informationAr: [
      'السوبيا الطبيعي هي الاختيار الكلاسيكي المنعش، وباقي الأصناف تقدم نكهات مبتكرة كالموكا واللوتس والبيستاشيو.',
      'لو عندك حساسية من منتجات الألبان أو المكسرات أو الشوكولاتة، راجع مكونات الصنف بدقة قبل الطلب.',
      'تتوفر السوبيا بحجمين (كاس L وعبوة لتر كاملة) لمناسباتكم الخاصة.'
    ]
  },
  {
    id: 'mango-world',
    slug: 'mango-world',
    nameAr: 'عالم المانجو',
    nameEn: 'Mango World',
    descriptionAr: 'عصائر مانجو طازجة ومثلجة وبول آيس كريم وقطع مانجو مانش استوائية',
    icon: 'fa-solid fa-lemon',
    themeColor: '#ea580c',
    image: '/images/products/mango-chunks-bowl.jpg',
    displayOrder: 4,
    informationAr: [
      'تقدر تقارن بين عصير المانجو البيور والخلطات الممزوجة بالفواكه الأخرى كالفراولة والأناناس والكيوي.',
      'المانجو بالآيس كريم والمانجو باللبن تقدم قواماً غنياً مختلفاً عن العصير الفريش العادي.',
      'الأحجام الكبيرة متوفرة لبعض أصناف المانجو وفق جدول الأسعار المعتمد.'
    ]
  },
  {
    id: 'smoothie-world',
    slug: 'smoothie-world',
    nameAr: 'عالم السموذي',
    nameEn: 'Smoothie World',
    descriptionAr: 'سموذي مثلج وغني بالفواكه الطبيعية المجروشة لانتعاش فوري',
    icon: 'fa-solid fa-blender',
    themeColor: '#0369a1',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 5,
    informationAr: [
      'جميع الأسعار المقيدة في هذا القسم تخص حجم L المنعش.',
      'يتميز السموذي بقوامه الكثيف والمثلج المجروش الممزوج ببيوريه الفاكهة الطبيعية.',
      'اختر نكهتك المفضلة من المانجو، التوت الأزرق، الكيوي أو الليمون نعناع.'
    ]
  },
  {
    id: 'energy-world',
    slug: 'energy-world',
    nameAr: 'عالم الطاقة',
    nameEn: 'Energy World',
    descriptionAr: 'خلطات البنجر والجرجير والكيوي والفيتامينات الطبيعية المقوية للنشاط',
    icon: 'fa-solid fa-bolt',
    themeColor: '#be123c',
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    displayOrder: 6,
    informationAr: [
      'القسم يضم خلطات فواكه وخضروات طبيعية غنية (مثل البنجر والجرجير والكيوي والزنجبيل).',
      'راجع مكونات الصنف المكتوبة بالبطاقة؛ اسم الميكس يعبر عن تركيبته الطبيعية.',
      'وصف «سوبر فيتامين سي» يعبر عن خلطة غنية بالفواكه الحمضية الطبيعية.'
    ]
  },
  {
    id: 'fruit-salad',
    slug: 'fruit-salad',
    nameAr: 'فروت سالاد فروتيلا',
    nameEn: 'Fruit Salad & Cups',
    descriptionAr: 'قطع فواكه طازجة، كوكتيلات، قنبلة فروتيلا وسلطات الفواكه بالآيس كريم',
    icon: 'fa-solid fa-bowl-food',
    themeColor: '#059669',
    image: '/images/products/fruitella-cocktail-bowl.jpg',
    displayOrder: 7,
    informationAr: [
      'بعض أصناف الفواكه الطازجة كالأناناس والرمان والمانجو تخضع لمواسم النضج الطبيعي.',
      'أطباق الفروت سالاد بالآيس كريم وقنبلة فروتيلا تتضمن إضافات خاصة غنية ومميزة.',
      'يتم تقطيع الفواكه طازجة فور طلب الصنف لضمان النضارة والقرمشة.'
    ]
  },
  {
    id: 'boba-fruitella',
    slug: 'boba-fruitella',
    nameAr: 'بوبا فروتيلا',
    nameEn: 'Boba Fruitella',
    descriptionAr: 'مشروبات البوبا بحبيبات البوبا اللذيذة بنكهات الميلك شيك والموهيتو المنعش',
    icon: 'fa-solid fa-circle-dot',
    themeColor: '#7c3aed',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 8,
    informationAr: [
      'اختار نكهة البوبا حسب ذوقك: ميلك شيك كريمي، قهوة مثلجة، أو موخيتو فوار ومنعش.',
      'جميع مشروبات البوبا تقدم بالحجم الموحد المعتمد بالمنيو.',
      'حبيبات البوبا اللذيذة تضيف تجربة مضغ استثنائية ونكهة ممتعة مع كل رشفة.'
    ]
  },
  {
    id: 'chocolate-lovers',
    slug: 'chocolate-lovers',
    nameAr: 'عشاق الشوكولاتة',
    nameEn: 'Chocolate Lovers',
    descriptionAr: 'مشروبات الأوريو، الجلاكسي، الكندر، والمارس وميكسات الشوكولاتة السوبر',
    icon: 'fa-solid fa-cookie-bite',
    themeColor: '#451a03',
    image: '/images/products/kashtouta.jpg',
    displayOrder: 9,
    informationAr: [
      'تعتمد المشروبات على الشوكولاتة والبسكويت الأصلي (أوريو، كيت كات، جلاكسي، كيندر، فيريرو روشيه).',
      'أصناف «سوبر» و«التريبل» تحتوي على قطع إضافية ومضاعفة من الشوكولاتة والكريمة.',
      'إذا كان لديك حساسية من مشتقات الحليب أو المكسرات، يرجى الاستفسار قبل الطلب.'
    ]
  },
  {
    id: 'nuts-yogurt',
    slug: 'nuts-yogurt',
    nameAr: 'عالم المكسرات والزبادي',
    nameEn: 'Nuts & Yogurt World',
    descriptionAr: 'مشروبات الكاجو واللوز والبندق مع الفانيليا أو الشوكولاتة، وزبادي العسل والفواكه',
    icon: 'fa-solid fa-cubes-stacked',
    themeColor: '#92400e',
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    displayOrder: 10,
    informationAr: [
      'قسم المكسرات يقدم نكهات غنية بالكاجو والبندق واللوز والفول السوداني مع الحليب.',
      'مشروبات الزبادي تجمع بين الزبادي الطبيعي والفواكه الطازجة وعسل النحل الصافي.',
      'تتوفر أحجام L ولتر لأغلب مشروبات الزبادي لتناسب وجبات الإفطار والعشاء الصحية.'
    ]
  },
  {
    id: 'milkshakes',
    slug: 'milkshakes',
    nameAr: 'عالم الميلك شيك',
    nameEn: 'The World of Milkshakes',
    descriptionAr: 'ميلك شيك كريمي كثيف بالأوريو واللوتس والنوتيلا والبيستاشيو والسيريلاك',
    icon: 'fa-solid fa-ice-cream',
    themeColor: '#be185d',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 11,
    informationAr: [
      'الأسعار موضحة بحجمين: كاس L الفردي وعبوة Liter الكبيرة للمشاركة.',
      'يتميز الميلك شيك بقوامه الكثيف والكريمي المحضر بالحليب والآيس كريم الفاخر.',
      'اختر من بين 17 نكهة متنوعة تشمل البسكويت والمكسرات والفواكه الطبيعية.'
    ]
  },
  {
    id: 'power-fruitella',
    slug: 'power-fruitella',
    nameAr: 'باور فروتيلا',
    nameEn: 'Power Fruitella',
    descriptionAr: 'خلطات الأفوكادو الملكية، المكسرات المحمصة، العسل الجبلي، الحلاوة والبلح',
    icon: 'fa-solid fa-crown',
    themeColor: '#166534',
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    displayOrder: 12,
    informationAr: [
      'اختار بين عصير الأفوكادو السادة والخلطات الملكية الغنية بالمكسرات والعسل الجبلي.',
      'مكونات الخلطات (سوبر أفوكادو، باور فروتيلا، سوبر فياجرا) موضحة تفصيلاً في بطاقة الصنف.',
      'إذا كنت تتجنب المكسرات أو مشتقات الألبان، يرجى التنبيه عند الطلب.'
    ]
  },
  {
    id: 'forest-feedings',
    slug: 'forest-feedings',
    nameAr: 'رضعات الغابة',
    nameEn: 'Forest Feedings',
    descriptionAr: 'تشكيلة الرضعات الشهيرة القائمة على قاعدة السوبيا المخفوقة بالفواكه والفانيليا',
    icon: 'fa-solid fa-paw',
    themeColor: '#854d0e',
    image: '/images/products/fruit-cocktail-cup.jpg',
    displayOrder: 13,
    informationAr: [
      'تتميز خلطات الرضعات بقاعدة السوبيا المعتمدة والممزوجة بالفواكه والفانيليا والشوكولاتة.',
      'سعر جميع أصناف الرضعات موحد (80 ج.م) للحجم المطبوع في المنيو.',
      'اختر الخلطة حسب مكونات الفاكهة المفضلة لديك (مانجو، موز، شوكولاتة، فراولة، كانتالوب).'
    ]
  },
  {
    id: 'fruitella-mixes',
    slug: 'fruitella-mixes',
    nameAr: 'ميكسات فروتيلا',
    nameEn: 'Fruitella Signature Mixes',
    descriptionAr: 'خلطات الكوكتيل الكرتونية والشهيرة مثل بطوط، سبونج بوب، أبو تريكة، وبينا كولادا',
    icon: 'fa-solid fa-wand-magic-sparkles',
    themeColor: '#d97706',
    image: '/images/products/fruit-salad-icecream.jpg',
    displayOrder: 14,
    informationAr: [
      'الميكسات تختلف في تركيبتها، وتفاصيل الفواكه والآيس كريم مدونة تحت كل صنف.',
      'تتوفر الميكسات بحجم L الفردي وبحجم Liter للمشاركة مع العائلة والأصدقاء.',
      'يمكنك اختيار قوام الخفق المفضل (ضرب كامل بيوريه أو نص ضربة بقطع الفواكه).'
    ]
  },
  {
    id: 'ice-cream',
    slug: 'ice-cream',
    nameAr: 'عالم الآيس كريم',
    nameEn: 'Ice Cream World',
    descriptionAr: 'بولات آيس كريم طبيعي، فتة آيس كريم، الديناصور وعرايسي فروتيلا',
    icon: 'fa-solid fa-ice-cream',
    themeColor: '#e11d48',
    image: '/images/products/fruit-salad-icecream.jpg',
    displayOrder: 15,
    informationAr: [
      'حدد عدد البولات (أبولة، 2 أبولة، 3 أبولة) حسب رغبتك عند الاختيار.',
      'أصناف مثل «فتة آيس كريم» و«الديناصور» هي أطباق حلويات مركبة وغنية بالصلصات.',
      'يحضر الآيس كريم من مكونات طبيعية طازجة وبنكهات فروتيلا المميزة.'
    ]
  },
  {
    id: 'mojito-world',
    slug: 'mojito-world',
    nameAr: 'عالم الموخيتو',
    nameEn: 'Mojito World',
    descriptionAr: 'موخيتو منعش بالصودا الفوارة، النعناع الفريش، والليمون مع أشهى الفواكه',
    icon: 'fa-solid fa-martini-glass-citrus',
    themeColor: '#0d9488',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 16,
    informationAr: [
      'القسم يقدم تشكيلة منعشة من الموخيتو بالنعناع وشرائح الليمون والصودا الفوارة.',
      'الأسعار الموضحة تخص الكاس المنعش المعتمد في القائمة الأصلية.',
      'يتوفر موخيتو بنكهات التوت والفراولة والتفاح وجيلي كولا وبول ميكس بيري.'
    ]
  },
  {
    id: 'fruitella-diet',
    slug: 'fruitella-diet',
    nameAr: 'دايت فروتيلا',
    nameEn: 'Fruitella Diet',
    descriptionAr: 'عصائر طبيعية خفيفة مخصصة للرشاقة واللياقة بدون سكر مضاف',
    icon: 'fa-solid fa-heart-pulse',
    themeColor: '#15803d',
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    displayOrder: 17,
    informationAr: [
      'أسماء الأصناف في هذا القسم كما هي مدونة بالقائمة المطبوعة (الرشاقة، فتنس، راني، جرين).',
      'العصائر خفيفة ومناسبة لمتبعي الحمية الغذائية، مع إمكانية طلبها بدون سكر أو بستيفيا.',
      'إذا كان لديك استفسار غذائي محدد، تواصل مع فريق العمل بالمحل للتأكد من المكونات.'
    ]
  },
  {
    id: 'family-packs',
    slug: 'family-packs',
    nameAr: 'العبوات العائلية',
    nameEn: 'Family Packs',
    descriptionAr: 'عبوات عائلية اقتصادية بحجم لتر و4 لتر للمناسبات والجمعات العائلية',
    icon: 'fa-solid fa-boxes-stacked',
    themeColor: '#047857',
    image: '/images/menu/menu-board-1.jpg',
    displayOrder: 18,
    informationAr: [
      'العبوات العائلية مخصصة للأحجام الكبيرة (لتر أو 4 لتر) لتوفير اقتصادي ومثالي للمجموعات.',
      'السعر يتحدد حسب الصنف والحجم المتاح؛ ليس كل الأصناف يتوفر منها حجم 4 لتر.',
      'يتم تعبئة العبوات وإحكام غلقها فور العصر لضمان وصولها طازجة ومبردة.'
    ]
  },
  {
    id: 'hot-drinks',
    slug: 'hot-drinks',
    nameAr: 'المشروبات الساخنة',
    nameEn: 'Hot Drinks & Coffee',
    descriptionAr: 'إسبريسو، كابتشينو، فلات وايت، لاتيه، هوت شوكليت، قهوة تركي وفرنساوي وشاي',
    icon: 'fa-solid fa-mug-hot',
    themeColor: '#78350f',
    image: '/images/brand/storefront-night.jpg',
    displayOrder: 19,
    informationAr: [
      'حدد حجم مشروبك حسب الرموز المطبوعة (S للسينجل/الصغير، D للدبل، M للمتوسط).',
      'تحضر مشروبات القهوة المختصة من حبوب بن ممتازة وحليب طبيعي طازج ومبخر.',
      'يمكنك إضافة نكهات الفانيليا، الكراميل، أو البندق من خيارات الإضافات.'
    ]
  },
  {
    id: 'cold-drinks',
    slug: 'cold-drinks',
    nameAr: 'كولد درينك',
    nameEn: 'Cold Coffee & Drinks',
    descriptionAr: 'آيس لاتيه، آيس بيستاشيو، آيس أمريكانو، وسولتد كراميل مثلج',
    icon: 'fa-solid fa-glass-water-droplet',
    themeColor: '#0369a1',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 20,
    informationAr: [
      'القسم مخصص للقهوة المثلجة المنعشة المحضرة بالإسبريسو والثلج والحليب البارد.',
      'تتنوع النكهات من الكلاسيك كالأمريكانو واللاتيه إلى نكهات البيستاشيو واللوتس والسولتد كراميل.',
      'يمكنك اختيار إضافة فليفر أو سيرب إضافي حسب الرغبة.'
    ]
  },
  {
    id: 'soft-drinks',
    slug: 'soft-drinks',
    nameAr: 'سوفت درينك',
    nameEn: 'Soft Drinks & Energy',
    descriptionAr: 'عبوات ريدبول المنعشة وموخيتو الريدبول بنكهات الفراولة، الخوخ، البلوبيري والكيوي',
    icon: 'fa-solid fa-bottle-water',
    themeColor: '#1e3a8a',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 21,
    informationAr: [
      'يضم القسم مشروبات طاقة ريدبول الأصلية، الشوجر فري، وموخيتو الريدبول المنعش.',
      'موخيتو الريدبول يمزج الطاقة بنكهات الفواكه وقطع الليمون والنعناع الفريش.',
      'يتم تقديم المشروبات مبردة ومثلجة بأعلى درجات الانتعاش.'
    ]
  },
  {
    id: 'cold-frappe',
    slug: 'cold-frappe',
    nameAr: 'كولد فريبيه',
    nameEn: 'Cold Frappe',
    descriptionAr: 'فريبيه مثلج بالكراميل، الشوكولاتة، الأوريو، وسولتد كراميل مع الكريمة المخفوقة',
    icon: 'fa-solid fa-cloud',
    themeColor: '#9a3412',
    image: '/images/products/signature-four-drinks.jpg',
    displayOrder: 22,
    informationAr: [
      'القسم يجمع مشروبات الفريبيه المثلجة والمخفوقة بالقهوة والشوكولاتة والبسكويت.',
      'تتميز الفريبيه بالقوام السميك والمثلج المزين بصلصات الشوكولاتة والكراميل الفاخرة.',
      'كل صنف مستقل بوصفته ونكهته الخاصة المحضرة بعناية.'
    ]
  },
  {
    id: 'sweets-desserts',
    slug: 'sweets-desserts',
    nameAr: 'الحلو من فروتيلا',
    nameEn: 'Sweets & Desserts',
    descriptionAr: 'وافل، ميني بان كيك، قشطوطة، مولتن كيك، ديسباسيتو، طواجن أم علي وأرز باللبن',
    icon: 'fa-solid fa-cake-candles',
    themeColor: '#c026d3',
    image: '/images/products/fruitella-signature-waffle.jpg',
    displayOrder: 23,
    informationAr: [
      'حدد عدد قطع الميني بان كيك المطلوبة (12 قطعة أو 24 قطعة) بناءً على رغبتك.',
      'أصناف القشطوطة والأرز باللبن متوفرة بنكهات النوتيلا، اللوتس، البيستاشيو، وقطع الفواكه.',
      'تخبز الحلويات وتجهز طازجة عند الطلب لضمان الطراوة والنكهة الغنية.'
    ]
  }
];

// Product generator logic will assemble all items according to Part 1, 2, 3
console.log('Categories ready:', categories.length);
