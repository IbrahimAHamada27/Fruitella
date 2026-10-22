const fs = require('fs');
const path = require('path');

const FRUITELLA_ADDONS = [
  { id: 'flavor-caramel', nameAr: 'إضافة سيرب كراميل', nameEn: 'Caramel Syrup', price: 25, categoryId: 'add-flavor', availability: 'available' },
  { id: 'flavor-vanilla', nameAr: 'إضافة سيرب فانيليا', nameEn: 'Vanilla Syrup', price: 25, categoryId: 'add-flavor', availability: 'available' },
  { id: 'flavor-hazelnut', nameAr: 'إضافة سيرب بندق', nameEn: 'Hazelnut Syrup', price: 25, categoryId: 'add-flavor', availability: 'available' },
  { id: 'flavor-white-cream', nameAr: 'إضافة وايت كريم فاخر', nameEn: 'Premium White Cream', price: 30, categoryId: 'add-flavor', availability: 'available' },
  { id: 'nuts', nameAr: 'مكسرات فاخرة (كاجو ولوز وبندق)', nameEn: 'Mixed Premium Nuts', price: 40, categoryId: 'add-flavor', availability: 'available' },
  { id: 'nutella', nameAr: 'إضافة نوتيلا أصلية', nameEn: 'Nutella Drizzle', price: 30, categoryId: 'add-flavor', availability: 'available' },
  { id: 'cream', nameAr: 'قشطة بلدي طبيعية', nameEn: 'Fresh Clotted Cream', price: 30, categoryId: 'add-flavor', availability: 'available' },
  { id: 'boba', nameAr: 'حبيبات بوبا Boba Pearls', nameEn: 'Boba Pearls', price: 30, categoryId: 'add-flavor', availability: 'available' },
  { id: 'honey', nameAr: 'عسل نحل طبيعي', nameEn: 'Pure Natural Honey', price: 10, categoryId: 'add-flavor', availability: 'available' }
];

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
      'اختار الحجم المتاح للصنف قبل إضافته للسلة؛ مش كل العصائر متوفرة بكل الأحجام (L، لتر، 4 لتر).',
      'لو بتفضّل طعم فاكهة واحدة، ابدأ بالعصائر المفردة، ولو بتحب خلط النكهات راجع قسم الميكسات.',
      'جميع العصائر فريش وطبيعية بالكامل بدون أي مواد حافظة أو ألوان صناعية.'
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
      'قسم العصائر الشرقية بيضم خيارات مختلفة عن عصائر الفاكهة المعتادة، زي القصب والدوم والخروب والعناب.',
      'راجع الحجم قبل الطلب؛ عبوة اللتر وعبوة 4 لتر مش متاحتين لكل الأصناف.',
      'إضافات زي اللبن أو البرتقال أو الزنجبيل تُختار فقط للأصناف اللي المنيو بيعرضها فعلًا.'
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
      'السوبيا الطبيعي هو الاختيار الأساسي، وباقي الأصناف بتقدم نكهات متنوعة حسب القائمة.',
      'لو بتختار بناءً على مكون معين، خصوصًا اللبن أو المكسرات أو الشوكولاتة، تأكد من المكونات مع المكان قبل الطلب.',
      'تتوفر أحجام L ولتر و4 لتر للسوبيا الطبيعي لتناسب التجمعات العائلية.'
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
      'تقدر تقارن بين المانجو لوحدها والخلطات اللي فيها فواكه أخرى كالفراولة والأناناس والكيوي.',
      'المانجو بالآيس كريم والمانجو مع اللبن اختيارات مختلفة عن العصير الأساسي؛ راجع اسم الصنف والمكونات قبل الطلب.',
      'الأحجام الكبيرة متاحة لبعض المنتجات فقط، حسب جدول الأسعار المعتمد.'
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
      'كل الأسعار الظاهرة في هذه الصفحة مرتبطة بحجم L المنعش.',
      'لو محتار بين السموذي والعصير، يتميز السموذي بقوامه الكثيف المثلج والمجروش.',
      'نكهات الفواكه مستخلصة من ثمار فريش طبيعية لضمان النكهة المركزة.'
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
      'القسم بيضم خلطات فواكه ومكونات طبيعية متنوعة، مش مشروبات طاقة معلبة فقط.',
      'راجع المكونات المكتوبة للصنف قبل الطلب؛ اسم الميكس يعبر عن تركيبته الحقيقية.',
      'وصف «فيتامين سي» اسم للصنف في المنيو، يعبر عن خلطة غنية بالفواكه الحمضية الطبيعية.'
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
      'بعض أصناف الفاكهة الطازجة بتكون موسمية؛ تأكد من توافر الصنف قبل الطلب.',
      'الأصناف اللي فيها آيس كريم أو إضافات خاصة تختلف عن سلطة الفواكه الأساسية.',
      'قطع الفواكه المشكلة وقنبلة فروتيلا تقدم فريش ومقطعة عند الطلب مباشرة.'
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
      'اختار نكهة البوبا حسب ذوقك: ميلك شيك كريمي، قهوة، أو موخيتو فوار ومنعش.',
      'أسعار هذه المجموعة ظاهرة بحجم موحد معتمد في المنيو.',
      'حبيبات البوبا اللذيذة تمنحك إحساساً ممتعاً بالمضغ مع كل رشفة.'
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
      'المنتجات بتختلف حسب نوع الشوكولاتة أو البسكويت المستخدم (أوريو، كيت كات، كيندر، مارس، جلاكسي).',
      'الأصناف اللي اسمها «سوبر» أو «تريبل» لها سعر ومقدار مضاعف من المكونات اللذيذة.',
      'لو عندك حساسية من المكسرات أو اللبن، اسأل عن المكونات الفعلية قبل الطلب.'
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
      'قسم المكسرات مناسب للي بيفضل نكهات البندق واللوز والكاجو وجوز الهند مع الحليب.',
      'مشروبات الزبادي تجمع بين الزبادي الطبيعي والفواكه الطازجة أو عسل النحل الصافي.',
      'الأسعار والأحجام في القسمين منفصلة ومحددة بدقة بالجنيه المصري.'
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
      'الأسعار بتختلف حسب النكهة والحجم (كاس L الفردي وعبوة Liter للمشاركة).',
      'بعض النكهات مرتبطة بالشوكولاتة أو المكسرات أو البسكويت؛ راجع المكونات قبل الطلب.',
      'حجم اللتر مناسب للمشاركة، بينما كاس L مثالي للاستمتاع الفردي.'
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
      'اختار بين الأفوكادو الأساسي والخلطات اللي فيها مكسرات أو فواكه أو زبادي أو عسل.',
      'المكونات المذكورة تحت كل اسم توضح تركيبة الخلطة (عسل، حلاوة طحينية، بلح، مكسرات).',
      'لو بتتجنب المكسرات أو منتجات الألبان، اسأل عن المكونات والتحضير قبل الطلب.'
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
      'أسماء الرضعات مرتبطة بخلطات مختلفة بقاعدة السوبيا، فاختار بناءً على المكونات وليس الاسم فقط.',
      'سعر جميع أصناف الرضعات موحد (80 ج.م) للحجم المطبوع في المنيو.',
      'مزيج السوبيا بالفواكه أو الشوكولاتة يمنحها قواماً حلواً ودسماً مميزاً.'
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
      'الميكسات بتختلف في تركيبة الفواكه والإضافات، لذلك راجع وصف ومكونات كل صنف.',
      'الأسعار مقسمة إلى كاس L وعبوة Liter في المنيو؛ اختار الحجم المناسب لرغبتك.',
      'يمكنك اختيار درجة الخفق (ضرب كامل ناعم أو نص ضربة قطع فواكه ملموسة).'
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
      'حدد عدد البولات (أبولة، 2 أبولة، 3 أبولة) حسب الحصة المطلوبة.',
      'أطباق «فتة آيس كريم» و«الديناصور» هي أطباق حلويات مركبة غنية بالصلصات والفواكه.',
      'يحضر الآيس كريم من مكونات طبيعية فريش بنكهات الفواكه والشوكولاتة الأصلية.'
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
      'القسم بيقدم نكهات مختلفة من الموخيتو بالليمون والنعناع الفريش مع الصودا المنعشة.',
      'الأسعار الظاهرة تخص الحجم المنعش الواحد المذكور في المنيو.',
      'جرب موخيتو التوت الأزرق، التفاح الأخضر، أو موخيتو جيلي كولا المميز.'
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
      'أسماء المنتجات في هذا القسم كما تظهر في المنيو (الرشاقة، فتنس، راني، جرين، فرساوي).',
      'لو بتتبع نظامًا غذائيًا محددًا، يمكنك طلب العصير بدون سكر أو بسكر دايت ستيفيا مجاناً.',
      'العصائر محضرة من فواكه طبيعية نقية بدون أي محليات صناعية ضارة.'
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
      'السعر يتحدد حسب الصنف والحجم المتاح، وليس كل الأصناف لها خيار 4 لتر.',
      'تعبأ العبوات بإحكام فوري لضمان بقائها طازجة وباردة حتى وصولها إليك.'
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
      'اختار حجم المشروب حسب الرموز المطبوعة في المنيو (S للحجم الصغير، D للدبل، M للمتوسط).',
      'اللاتيه والكابتشينو والمشروبات بالشوكولاتة تحضر بالحليب الطبيعي الطازج.',
      'الإضافات والنكهات الإضافية (كراميل، فانيليا، بندق) متوفرة في قسم إضافة فليفر.'
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
      'لو هتضيف نكهة سيرب، راجع قسم إضافة فليفر المتاح بصفحة المنتج.'
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
      'يضم القسم مشروبات طاقة ريدبول الأصلية والشوجر فري وموخيتو الريدبول بنكهات الفواكه.',
      'موخيتو الريدبول يجمع بين عبوة الطاقة وقطع الليمون والنعناع وسيرب الفاكهة الطبيعي.',
      'تقدم المشروبات مثلجة وباردة لأقصى درجات الانتعاش.'
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
      'القسم يجمع مشروبات الفريبيه المثلجة والمخفوقة بالقهوة والشوكولاتة والكراميل.',
      'تتميز الفريبيه بالقوام السميك والمثلج المزين بصلصات الشوكولاتة والكراميل الفاخرة.',
      'كل صنف مستقل بوصفته ونكهته الخاصة الموضحة في تفاصيل المنتج.'
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
      'راجع عدد القطع في الميني بان كيك قبل الطلب (12 قطعة أو 24 قطعة) لأن الحجم يحدد السعر.',
      'الأصناف اللي فيها نوتيلا أو لوتس أو بيستاشيو أو فواكه تختلف في السعر عن النسخ الأساسية.',
      'تخبز الحلويات وتجهز طازجة عند الطلب لضمان القرمشة والطراوة المثالية.'
    ]
  }
];

// Helper to make sizes
function sizeL(priceL, priceLiter, price4L) {
  const sizes = [];
  if (priceL !== null && priceL !== undefined) {
    sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: priceL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  }
  if (priceLiter !== null && priceLiter !== undefined) {
    sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: priceLiter, volumeLabel: '1L', isDefault: sizes.length === 0, availability: 'available', extractionStatus: 'verified' });
  }
  if (price4L !== null && price4L !== undefined) {
    sizes.push({ id: '4liter', nameAr: 'حجم 4 لتر', nameEn: '4 Liters', price: price4L, volumeLabel: '4L', availability: 'available', extractionStatus: 'verified' });
  }
  return sizes;
}

function singleSize(price, labelAr = 'حجم L قياسي', labelEn = 'Standard L') {
  return [{ id: 'regular', nameAr: labelAr, nameEn: labelEn, price: price, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' }];
}

// Generate products array
const products = [];

// 1. Fresh Juices
const freshItems = [
  { slug: 'orange-juice', nameAr: 'عصير برتقال فريش', nameEn: 'Fresh Orange Juice', desc: 'برتقال طبيعي معصور طازج يومياً غني بفيتامين سي', pL: 45, pLiter: 90, p4L: 350 },
  { slug: 'strawberry-juice', nameAr: 'عصير فراولة طبيعي', nameEn: 'Fresh Strawberry Juice', desc: 'فراولة بلدي طازجة معصورة بقوام طبيعي منعش', pL: 50, pLiter: 95, p4L: 350 },
  { slug: 'guava-juice', nameAr: 'عصير جوافة بيور', nameEn: 'Pure Guava Juice', desc: 'جوافة طبيعية 100% غنية ومخفوقة عند الطلب', pL: 45, pLiter: 85, p4L: 310 },
  { slug: 'guava-milk', nameAr: 'جوافة باللبن الطبيعي', nameEn: 'Guava with Fresh Milk', desc: 'جوافة طازجة مخفوقة بالحليب الطبيعي كامل الدسم', pL: 55, pLiter: 100 },
  { slug: 'lemon-juice', nameAr: 'عصير ليمون فريش', nameEn: 'Fresh Lemon Juice', desc: 'عصير ليمون بلدي منعش ومحلى بنعومة', pL: 45, pLiter: 80 },
  { slug: 'lemon-mint-juice', nameAr: 'ليمون نعناع مثلج', nameEn: 'Lemon Mint Juice', desc: 'ليمون ونعناع أخضر فريش مخفوق مع الثلج المجروش', pL: 60, pLiter: 110, isBestSeller: true },
  { slug: 'lemon-milk', nameAr: 'ليمون باللبن', nameEn: 'Lemon with Milk', desc: 'مزيج كريمي منعش يجمع حموضة الليمون مع نعومة الحليب', pL: 50, pLiter: 90 },
  { slug: 'watermelon-juice', nameAr: 'عصير بطيخ أحمر', nameEn: 'Fresh Watermelon Juice', desc: 'بطيخ أحمر سكري معصور ومثلج بدون ماء مضاف', pL: 50, pLiter: 90 },
  { slug: 'watermelon-mint', nameAr: 'بطيخ بالنعناع', nameEn: 'Watermelon with Mint', desc: 'بطيخ طازج ممزوج بأوراق النعناع الفريش المنعشة', pL: 55, pLiter: 100 },
  { slug: 'watermelon-strawberry-mint', nameAr: 'بطيخ فراولة نعناع', nameEn: 'Watermelon Strawberry Mint', desc: 'توليفة ثلاثية منعشة من البطيخ والفراولة والنعناع', pL: 60, pLiter: 110 },
  { slug: 'dates-milk', nameAr: 'بلح باللبن الطبيعي', nameEn: 'Dates with Fresh Milk', desc: 'تمر طازج مخفوق بالحليب الطبيعي المغذي والمشبع', pL: 55, pLiter: 100 },
  { slug: 'banana-milk', nameAr: 'موز باللبن', nameEn: 'Banana with Milk', desc: 'موز بلدي طازج مخفوق بالحليب الطبيعي البارد', pL: 50, pLiter: 95 },
  { slug: 'strawberry-milk', nameAr: 'فراولة باللبن', nameEn: 'Strawberry with Milk', desc: 'فراولة طازجة مخفوقة بالحليب بنكهة كريمية مخملية', pL: 60, pLiter: 110 },
  { slug: 'cantaloupe-juice', nameAr: 'عصير كانتالوب', nameEn: 'Fresh Cantaloupe Juice', desc: 'كانتالوب طبيعي طازج وبارد بقوام خفيف ومنعش', pL: 45, pLiter: 85 },
  { slug: 'pomegranate-juice', nameAr: 'عصير رمان فريش', nameEn: 'Fresh Pomegranate Juice', desc: 'حب رمان طازج معصور بلونه الياقوتي الغني بمضادات الأكسدة', pL: 60, pLiter: 110 },
  { slug: 'kiwi-juice', nameAr: 'عصير كيوي طبيعي', nameEn: 'Fresh Kiwi Juice', desc: 'كيوي طبيعي معصور بقوام غني ومنعش', pLiter: 180 },
  { slug: 'apple-juice', nameAr: 'عصير تفاح فريش', nameEn: 'Fresh Apple Juice', desc: 'عصير تفاح طبيعي معصور طازج بدون سكر مضاف', pLiter: 130 },
  { slug: 'pineapple-juice', nameAr: 'عصير أناناس طبيعي', nameEn: 'Fresh Pineapple Juice', desc: 'أناناس طبيعي معصور بنكهة استوائية مركزة', pLiter: 210 },
  { slug: 'grapes-juice', nameAr: 'عصير عنب موسمي', nameEn: 'Seasonal Grapes Juice', desc: 'عصير عنب طبيعي متوفر في موسم حصاده الصيفي', pLiter: 120, status: 'needs_review' },
  { slug: 'peach-juice', nameAr: 'عصير خوخ فريش', nameEn: 'Fresh Peach Juice', desc: 'خوخ طبيعي بيور متوفر في موسم الصيف', pLiter: 130, status: 'needs_review' },
  { slug: 'plum-juice', nameAr: 'عصير برقوق', nameEn: 'Fresh Plum Juice', desc: 'برقوق طبيعي بنكهة حامضة حلوة متوفر في موسمه', pLiter: 130, status: 'needs_review' },
  { slug: 'prickly-pear-juice', nameAr: 'عصير تين شوكي', nameEn: 'Prickly Pear Juice', desc: 'تين شوكي بلدي مثلج متوفر في موسم الصيف', pLiter: 110, status: 'needs_review' }
];

freshItems.forEach((item, idx) => {
  const sizes = [];
  if (item.pL) sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  if (item.pLiter) sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', isDefault: sizes.length === 0, availability: 'available', extractionStatus: 'verified' });
  if (item.p4L) sizes.push({ id: '4liter', nameAr: 'حجم 4 لتر', nameEn: '4 Liters', price: item.p4L, volumeLabel: '4L', availability: 'available', extractionStatus: 'verified' });

  products.push({
    id: `fj-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'fresh-juices',
    categoryNameAr: 'عصائر فريش',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/fruit-cocktail-cup.jpg',
    isFeatured: idx < 3,
    isBestSeller: item.isBestSeller || idx === 0 || idx === 1,
    tags: ['طبيعي 100%', 'بدون مواد حافظة', 'فريش'],
    ingredientsAr: [item.nameAr.replace('عصير ', '')],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: item.nameAr.includes('لبن') },
    verifiedFromAsset: 'raw_assets/843458063_122230952276500364_261235849293952816_n.jpg',
    extractionStatus: item.status || 'verified',
    availability: 'available'
  });
});

// 2. Oriental Juices
const orientalItems = [
  { slug: 'sugarcane-pure', nameAr: 'قصب طبيعي صافي', nameEn: 'Pure Natural Sugarcane', desc: 'قصب صعيدي معصور طازج على البارد وفوري', pL: 25, pLiter: 50, p4L: 190, isBestSeller: true },
  { slug: 'sugarcane-milk', nameAr: 'قصب باللبن', nameEn: 'Sugarcane with Milk', desc: 'قصب طازج مخفوق بالحليب الطبيعي بنكهة غنية مميزة', pL: 35, pLiter: 70, p4L: 270 },
  { slug: 'sugarcane-orange', nameAr: 'قصب بالبرتقال', nameEn: 'Sugarcane with Orange', desc: 'مزيج حلاوة القصب مع انتعاش البرتقال البلدي', pL: 35, pLiter: 70, p4L: 270 },
  { slug: 'sugarcane-ginger', nameAr: 'قصب بالزنجبيل', nameEn: 'Sugarcane with Ginger', desc: 'قصب فريش مضاف إليه زنجبيل طازج حار ومنعش', pL: 45, pLiter: 90 },
  { slug: 'sugarcane-pineapple', nameAr: 'قصب بالأناناس', nameEn: 'Sugarcane with Pineapple', desc: 'قصب طازج ممزوج بعصير الأناناس الاستوائي', pL: 45, pLiter: 90 },
  { slug: 'sugarcane-sobia', nameAr: 'قصب بالسوبيا', nameEn: 'Sugarcane with Sobya', desc: 'خلطة فروتيلا المفضلة من القصب مع السوبيا المثلجة', pL: 35, pLiter: 70, p4L: 270 },
  { slug: 'sugarcane-lemon', nameAr: 'قصب بالليمون', nameEn: 'Sugarcane with Lemon', desc: 'قصب طبيعي مع قطرات الليمون البلدي لكسر السكرية بانتعاش', pL: 35, pLiter: 70 },
  { slug: 'sugarcane-carrot', nameAr: 'قصب بالجزر', nameEn: 'Sugarcane with Carrot', desc: 'قصب طبيعي مع عصير الجزر الطازج الغني بفيتامين أ', pL: 40, pLiter: 80 },
  { slug: 'tamarind-natural', nameAr: 'تمر هندي طبيعي', nameEn: 'Natural Tamarind', desc: 'تمر هندي طبيعي أسواني أصلي محضر على أصوله', pL: 35, pLiter: 70, p4L: 270 },
  { slug: 'karkadeh-ennab', nameAr: 'عناب أسواني مبرد', nameEn: 'Aswan Karkadeh Ennab', desc: 'عناب مركز من زهور الكركديه الأسوانية المثلجة', pL: 40, pLiter: 75, p4L: 280 },
  { slug: 'carob-kharroub', nameAr: 'خروب طبيعي مثلج', nameEn: 'Natural Carob Kharroub', desc: 'خروب مجروش ومستخلص بالطريقة التراثية الغنية', pL: 40, pLiter: 75, p4L: 280 },
  { slug: 'doum-juice', nameAr: 'عصير دوم طبيعي', nameEn: 'Natural Doum Juice', desc: 'دوم بلدي منقوع ومبرد بنكهته التراثية الفواحة', pL: 40, pLiter: 80 },
  { slug: 'doum-milk', nameAr: 'دوم باللبن', nameEn: 'Doum with Milk', desc: 'دوم مركز مخفوق بالحليب الطبيعي بقوام كريمي', pL: 50, pLiter: 95 },
  { slug: 'walnut-drink', nameAr: 'مشروب جوز الهند التراثي', nameEn: 'Coconut Walnut Drink', desc: 'مشروب شرقي تراثي غني بنكهة جوز الهند والمكسرات', pL: 40, pLiter: 80 }
];

orientalItems.forEach((item, idx) => {
  const sizes = [];
  if (item.pL) sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  if (item.pLiter) sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', isDefault: sizes.length === 0, availability: 'available', extractionStatus: 'verified' });
  if (item.p4L) sizes.push({ id: '4liter', nameAr: 'حجم 4 لتر', nameEn: '4 Liters', price: item.p4L, volumeLabel: '4L', availability: 'available', extractionStatus: 'verified' });

  products.push({
    id: `oj-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'oriental-juices',
    categoryNameAr: 'عصائر شرقية',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/menu/menu-board-4.jpg',
    isFeatured: idx === 0,
    isBestSeller: item.isBestSeller || idx === 1,
    tags: ['شرقي', 'طبيعي', 'تراثي'],
    ingredientsAr: [item.nameAr],
    dietary: { isNatural: true, isSugarFreeAvailable: false, containsNuts: item.nameAr.includes('جوز'), containsDairy: item.nameAr.includes('لبن') },
    verifiedFromAsset: 'raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 3. Sobya World
const sobyaItems = [
  { slug: 'sobya-natural', nameAr: 'سوبيا طبيعي كلاسيك', nameEn: 'Classic Natural Sobya', desc: 'سوبيا فروتيلا الأصلية بحليب جوز الهند الطبيعي ونكهة الفانيليا', pL: 45, pLiter: 85, p4L: 320, isBestSeller: true },
  { slug: 'sobya-mango', nameAr: 'سوبيا مانجو', nameEn: 'Mango Sobya', desc: 'سوبيا مثلجة ممزوجة بقطع وبيوريه مانجو فروتيلا الفاخرة', pL: 70, pLiter: 140 },
  { slug: 'sobya-banana', nameAr: 'سوبيا بالموز', nameEn: 'Banana Sobya', desc: 'سوبيا طازجة مخفوقة مع الموز البلدي والحليب', pL: 70, pLiter: 140 },
  { slug: 'sobya-mocha', nameAr: 'سوبيا موكا', nameEn: 'Mocha Sobya', desc: 'مزيج السوبيا اللذيذة مع لمسة قهوة الموكا والشوكولاتة', pL: 75, pLiter: 150 },
  { slug: 'sobya-strawberry', nameAr: 'سوبيا فراولة', nameEn: 'Strawberry Sobya', desc: 'سوبيا باردة مع الفراولة الفريش بلونها الوردي الجذاب', pL: 70, pLiter: 140 },
  { slug: 'sobya-lotus', nameAr: 'سوبيا لوتس', nameEn: 'Lotus Biscoff Sobya', desc: 'سوبيا كريمية غنية بصلصة وبسكويت اللوتس المقرمش', pL: 85, pLiter: 160 },
  { slug: 'sobya-pistachio', nameAr: 'سوبيا بيستاشيو رويال', nameEn: 'Royal Pistachio Sobya', desc: 'سوبيا فاخرة ممزوجة بصوص الفستق الحلبي الأصلي', pL: 95, pLiter: 180, isFeatured: true },
  { slug: 'sobya-nutella', nameAr: 'سوبيا نوتيلا', nameEn: 'Nutella Sobya', desc: 'سوبيا غنية بشوكولاتة النوتيلا الأصلية المخفوقة', pL: 85, pLiter: 170 },
  { slug: 'sobya-fruit-chunks', nameAr: 'سوبيا فواكه قطع', nameEn: 'Sobya with Fruit Chunks', desc: 'سوبيا فروتيلا المثلجة مضاف إليها تشكيلة من قطع الفواكه الطازجة', pL: 85, pLiter: 170 }
];

sobyaItems.forEach((item, idx) => {
  const sizes = [];
  if (item.pL) sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  if (item.pLiter) sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', isDefault: sizes.length === 0, availability: 'available', extractionStatus: 'verified' });
  if (item.p4L) sizes.push({ id: '4liter', nameAr: 'حجم 4 لتر', nameEn: '4 Liters', price: item.p4L, volumeLabel: '4L', availability: 'available', extractionStatus: 'verified' });

  products.push({
    id: `sb-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'sobya-world',
    categoryNameAr: 'عالم السوبيا',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured || idx === 0,
    isBestSeller: item.isBestSeller,
    tags: ['سوبيا', 'منعش', 'مثلج'],
    ingredientsAr: ['سوبيا طبيعي', 'حليب', 'جوز هند'],
    dietary: { isNatural: true, isSugarFreeAvailable: false, containsNuts: item.nameAr.includes('بيستاشيو'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 4. Mango World
const mangoItems = [
  { slug: 'mango-fruitella-signature', nameAr: 'مانجو فروتيلا سبيشال', nameEn: 'Fruitella Signature Mango', desc: 'عصير مانجو كيت طبيعي بيور 100% بقوام ثقيل ونكهة استوائية مركزة', pL: 60, pLiter: 110, p4L: 420, isBestSeller: true },
  { slug: 'mango-icecream', nameAr: 'مانجو آيس كريم', nameEn: 'Mango with Ice Cream', desc: 'عصير مانجو مثلج يعلوه بولة آيس كريم فانيليا غنية', pL: 80, pLiter: 160 },
  { slug: 'mango-banana', nameAr: 'مانجو موز عصير أو قطع', nameEn: 'Mango Banana Juice or Chunks', desc: 'مانجو استوائية ممزوجة مع الموز الطازج كعصير أو قطع', pL: 75, pLiter: 140 },
  { slug: 'mango-strawberry', nameAr: 'مانجو فراولة طبقات', nameEn: 'Layered Mango Strawberry', desc: 'طبقات المانجو الكثيفة مع عصير الفراولة البلدي الطازج', pL: 70, pLiter: 130 },
  { slug: 'mango-apple', nameAr: 'مانجو تفاح', nameEn: 'Mango Apple Blend', desc: 'مزيج المانجو الاستوائية مع عصير التفاح المنعش', pL: 80, pLiter: 150 },
  { slug: 'mango-pineapple', nameAr: 'مانجو أناناس', nameEn: 'Mango Pineapple Tropical', desc: 'توليفة استوائية حيوية تجمع المانجو الحلوة مع الأناناس', pL: 90, pLiter: 170 },
  { slug: 'mango-kiwi', nameAr: 'مانجو كيوي', nameEn: 'Mango Kiwi Twist', desc: 'مانجو غنية مع انتعاش الكيوي الأخضر الحامض حلو', pL: 85, pLiter: 160 },
  { slug: 'mango-watermelon', nameAr: 'مانجو بطيخ', nameEn: 'Mango Watermelon Cooler', desc: 'عصير مانجو مع البطيخ الأحمر البارد لانتعاش الصيف', pL: 70, pLiter: 130 },
  { slug: 'mango-chunks-cup', nameAr: 'كوب مانجو قطع فريش', nameEn: 'Fresh Mango Chunks Cup', desc: 'قطع مانجو طازجة مكعبات مع صوص مانجو نقي بالملعقة', pL: 65, pLiter: 120, isFeatured: true },
  { slug: 'mango-rocket', nameAr: 'مانجو جرجير', nameEn: 'Mango Arugula Twist', desc: 'خلطة مانجو مع أوراق الجرجير البلدي الغنية بالمعادن', pL: 70, pLiter: 130 },
  { slug: 'mango-milk', nameAr: 'مانجو باللبن', nameEn: 'Mango with Milk', desc: 'مانجو بيور مخفوقة بالحليب الطبيعي البارد لقوام مخملي', pL: 70, pLiter: 130 },
  { slug: 'mango-pomegranate', nameAr: 'مانجو حب رمان', nameEn: 'Mango with Pomegranate', desc: 'عصير مانجو مغطى بحبات الرمان الياقوتية المقرمشة', pL: 80, pLiter: 150, status: 'needs_review' },
  { slug: 'mango-yogurt-nuts', nameAr: 'مانجو زبادي مكسرات', nameEn: 'Mango Yogurt Nuts', desc: 'مانجو مع زبادي طبيعي ومكسرات محمصة مقرمشة', pL: 90, pLiter: 170, status: 'needs_review' }
];

mangoItems.forEach((item, idx) => {
  const sizes = [];
  if (item.pL) sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  if (item.pLiter) sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', isDefault: sizes.length === 0, availability: 'available', extractionStatus: 'verified' });
  if (item.p4L) sizes.push({ id: '4liter', nameAr: 'حجم 4 لتر', nameEn: '4 Liters', price: item.p4L, volumeLabel: '4L', availability: 'available', extractionStatus: 'verified' });

  products.push({
    id: `mg-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'mango-world',
    categoryNameAr: 'عالم المانجو',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/mango-chunks-bowl.jpg',
    isFeatured: item.isFeatured || idx === 0,
    isBestSeller: item.isBestSeller,
    tags: ['مانجو', 'طبيعي', 'استوائي'],
    ingredientsAr: ['مانجو كيت طبيعي'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: item.nameAr.includes('مكسرات'), containsDairy: item.nameAr.includes('لبن') || item.nameAr.includes('آيس') },
    verifiedFromAsset: 'raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg',
    extractionStatus: item.status || 'verified',
    availability: 'available'
  });
});

// 5. Smoothie World
const smoothieItems = [
  { slug: 'mango-smoothie', nameAr: 'سموذي مانجو مثلج', nameEn: 'Iced Mango Smoothie', desc: 'سموذي مانجو كثيف ومثلج مجروش مع نكهة الفاكهة النقية', price: 75, isBestSeller: true },
  { slug: 'strawberry-smoothie', nameAr: 'سموذي فراولة فريش', nameEn: 'Strawberry Smoothie', desc: 'فراولة طبيعية مجروشة مع الثلج لقوام ناعم ومنعش', price: 75 },
  { slug: 'watermelon-smoothie', nameAr: 'سموذي بطيخ مبرد', nameEn: 'Watermelon Smoothie', desc: 'سموذي بطيخ أحمر مجروش يروي العطش', price: 75 },
  { slug: 'blueberry-smoothie', nameAr: 'سموذي توت أزرق رويال', nameEn: 'Blueberry Royal Smoothie', desc: 'توت أزرق نقي مجروش بنكهة استثنائية غنية بمضادات الأكسدة', price: 80, isFeatured: true },
  { slug: 'raspberry-smoothie', nameAr: 'سموذي توت أحمر', nameEn: 'Raspberry Smoothie', desc: 'توت أحمر طبيعي مجروش بنكهة حامضة منعشة ومثيرة', price: 80 },
  { slug: 'lemon-mint-smoothie', nameAr: 'سموذي ليمون نعناع', nameEn: 'Lemon Mint Slush Smoothie', desc: 'سموذي مثلج بالليمون والنعناع الفريش المنعش للغاية', price: 75 },
  { slug: 'kiwi-smoothie', nameAr: 'سموذي كيوي طبيعي', nameEn: 'Fresh Kiwi Smoothie', desc: 'كيوي طبيعي مجروش مع الثلج بقوام سميك وحيوي', price: 105 }
];

smoothieItems.forEach((item, idx) => {
  products.push({
    id: `sm-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'smoothie-world',
    categoryNameAr: 'عالم السموذي',
    basePrice: item.price,
    sizes: singleSize(item.price),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['سموذي', 'مثلج', 'مجروش'],
    ingredientsAr: [item.nameAr.replace('سموذي ', ''), 'ثلج مجروش'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: false },
    verifiedFromAsset: 'raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 6. Energy World
const energyItems = [
  { slug: 'beetroot-orange', nameAr: 'بنجر بالبرتقال', nameEn: 'Beetroot with Orange', desc: 'بنجر طازج غني بالحديد ممزوج بالبرتقال البلدي', pL: 65, pLiter: 130, isBestSeller: true },
  { slug: 'beetroot-pomegranate', nameAr: 'بنجر بالرمان', nameEn: 'Beetroot with Pomegranate', desc: 'خلطة دم الغزال من البنجر والرمان الغنية بمضادات الأكسدة', pL: 75, pLiter: 150 },
  { slug: 'beetroot-strawberry', nameAr: 'بنجر بالفراولة', nameEn: 'Beetroot with Strawberry', desc: 'بنجر طازج مع فراولة بلدي لمذاق حلو متوازن وصحي', pL: 65, pLiter: 130 },
  { slug: 'arugula-milk', nameAr: 'جرجير باللبن والعسل', nameEn: 'Arugula with Milk & Honey', desc: 'أوراق جرجير طازجة مخفوقة بالحليب الطبيعي والعسل', pL: 50, pLiter: 90 },
  { slug: 'kiwi-orange', nameAr: 'كيوي بالبرتقال', nameEn: 'Kiwi with Orange Boost', desc: 'جرعة نشاط حيوية من الكيوي الفريش وعصير البرتقال', pL: 110, pLiter: 210 },
  { slug: 'kiwi-pineapple', nameAr: 'كيوي بالأناناس', nameEn: 'Kiwi with Pineapple', desc: 'مزيج استوائي نشط من الكيوي والأناناس المنعش', pL: 110, pLiter: 210 },
  { slug: 'pineapple-orange', nameAr: 'أناناس بالبرتقال', nameEn: 'Pineapple with Orange', desc: 'أناناس طبيعي معصور مع البرتقال الطازج', pL: 110, pLiter: 210 },
  { slug: 'orange-ginger', nameAr: 'برتقال بالزنجبيل الفريش', nameEn: 'Orange with Fresh Ginger', desc: 'برتقال طبيعي مع الزنجبيل الحار لتعزيز النشاط والدفء', pL: 80, pLiter: 150 },
  { slug: 'lemon-ginger', nameAr: 'ليمون بالزنجبيل', nameEn: 'Lemon with Fresh Ginger', desc: 'ليمون بلدي مع زنجبيل طازج لانتعاش وتنقية الجسم', pL: 80, pLiter: 150 },
  { slug: 'super-vitamin-c', nameAr: 'سوبر فيتامين سي', nameEn: 'Super Vitamin C Cocktail', desc: 'خلطة حمضية جبارة من البرتقال والليمون والجوافة والكيوي والعسل', pL: 85, pLiter: 160, isFeatured: true }
];

energyItems.forEach((item, idx) => {
  const sizes = [];
  if (item.pL) sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  if (item.pLiter) sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', isDefault: sizes.length === 0, availability: 'available', extractionStatus: 'verified' });

  products.push({
    id: `en-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'energy-world',
    categoryNameAr: 'عالم الطاقة',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['طاقة', 'صحي', 'فيتامينات'],
    ingredientsAr: [item.nameAr],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: item.nameAr.includes('لبن') },
    verifiedFromAsset: 'raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 7. Fruit Salad & Cups
const fruitSaladItems = [
  { slug: 'cocktail-cup', nameAr: 'كأس كوكتيل فواكه', nameEn: 'Fruit Cocktail Cup', desc: 'كأس كوكتيل من قطع الفواكه المشكلة مع عصير طبيعي', price: 60, isBestSeller: true },
  { slug: 'super-cocktail-icecream', nameAr: 'سوبر كوكتيل بالآيس كريم', nameEn: 'Super Cocktail with Ice Cream', desc: 'كوكتيل فواكه طازج مغطى ببولة آيس كريم فانيليا وصلصة فواكه', price: 80 },
  { slug: 'fruit-salad-bowl', nameAr: 'سلطة فواكه فروتيلا (فروت سالاد)', nameEn: 'Fruitella Fruit Salad', desc: 'طبق غني بقطع التفاح والموز والمانجو والكانتالوب والفراولة', price: 80, isFeatured: true },
  { slug: 'fruit-salad-icecream', nameAr: 'فروت سالاد بالآيس كريم', nameEn: 'Fruit Salad with Ice Cream', desc: 'سلطة فواكه مشكلة تعلوها بولات آيس كريم طبيعي', price: 100 },
  { slug: 'fruitella-bomb', nameAr: 'قنبلة فروتيلا الكلاسيكية', nameEn: 'Fruitella Signature Bomb', desc: 'مزيج القنبلة الشهير من فواكه مقطعة مع عصير مانجو وبسبوسة وقشطة', price: 100, isBestSeller: true },
  { slug: 'super-fruitella-bomb', nameAr: 'سوبر قنبلة فروتيلا رويال', nameEn: 'Super Fruitella Royal Bomb', desc: 'قنبلة الحجم الملكي مع مكسرات محمصة وقشطة بلدي وآيس كريم', price: 140, isFeatured: true },
  { slug: 'kiwi-chunks-cup', nameAr: 'كوب كيوي قطع', nameEn: 'Kiwi Chunks Cup', desc: 'قطع كيوي فريش مقطعة مكعبات طازجة بالملعقة', price: 150 },
  { slug: 'watermelon-chunks-cup', nameAr: 'كوب بطيخ قطع مبرد', nameEn: 'Watermelon Chunks Cup', desc: 'قطع بطيخ أحمر مكعبات مثلجة وخالية من البذور', price: 60 },
  { slug: 'special-banana-plate', nameAr: 'موز اسبيشال بالصوص والمكسرات', nameEn: 'Special Banana Dessert Plate', desc: 'موز مقطع ومتبل بالعسل والقشطة والشوكولاتة والمكسرات', price: 120 },
  { slug: 'mixed-fruits-chunks', nameAr: 'كوب فواكه مشكلة قطع', nameEn: 'Mixed Fruit Chunks Cup', desc: 'تشكيلة متوازنة من مكعبات الفواكه الموسمية الطازجة', price: 90 },
  { slug: 'pineapple-chunks-seasonal', nameAr: 'كوب أناناس قطع طبيعي', nameEn: 'Fresh Pineapple Chunks', desc: 'أناناس طبيعي مقطع مكعبات متوفر حسب الموسم', price: 120, status: 'needs_review' },
  { slug: 'pomegranate-seeds-cup', nameAr: 'كوب رمان حب فريش', nameEn: 'Pomegranate Seeds Cup', desc: 'حبوب رمان طازجة مفروطة بالملعقة متوفرة حسب الموسم', price: 70, status: 'needs_review' }
];

fruitSaladItems.forEach((item, idx) => {
  products.push({
    id: `fs-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'fruit-salad',
    categoryNameAr: 'فروت سالاد فروتيلا',
    basePrice: item.price,
    sizes: singleSize(item.price, 'طبق قياسي', 'Standard Plate'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/fruitella-cocktail-bowl.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['فروت سالاد', 'فواكه قطع', 'طبيعي'],
    ingredientsAr: ['فواكه موسمية مشكلة', 'عصير طبيعي'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: item.nameAr.includes('قنبلة') || item.nameAr.includes('مكسرات'), containsDairy: item.nameAr.includes('آيس') || item.nameAr.includes('قشطة') },
    verifiedFromAsset: 'raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg',
    extractionStatus: item.status || 'verified',
    availability: 'available'
  });
});

// 8. Boba Fruitella
const bobaItems = [
  { slug: 'boba-milkshake-blueberry', nameAr: 'بوبا ميلك شيك بلو بيري', nameEn: 'Boba Milkshake Blueberry', desc: 'ميلك شيك كريمي بالتوت الأزرق مع حبيبات البوبا المضغية اللذيذة', price: 110, isBestSeller: true },
  { slug: 'boba-milkshake-coffee', nameAr: 'بوبا ميلك شيك كوفي', nameEn: 'Boba Milkshake Coffee', desc: 'ميلك شيك القهوة المثلجة ممزوج بحبيبات البوبا التايوانية', price: 110 },
  { slug: 'boba-milkshake-mix-berry', nameAr: 'بوبا ميلك شيك ميكس بيري', nameEn: 'Boba Milkshake Mix Berry', desc: 'ميلك شيك التوت المشكل الغني مع كرات البوبا الطرية', price: 110 },
  { slug: 'boba-milkshake-mango', nameAr: 'بوبا ميلك شيك مانجو', nameEn: 'Boba Milkshake Mango', desc: 'ميلك شيك المانجو الاستوائية الكثيفة مع حبيبات البوبا', price: 110 },
  { slug: 'boba-milkshake-strawberry', nameAr: 'بوبا ميلك شيك فراولة', nameEn: 'Boba Milkshake Strawberry', desc: 'ميلك شيك الفراولة اللذيذ بحبيبات البوبا اللطيفة', price: 110 },
  { slug: 'boba-mojito-jelly-cola', nameAr: 'بوبا موخيتو جيلي كولا', nameEn: 'Boba Mojito Jelly Cola', desc: 'موخيتو الصودا بنكهة الجيلي كولا وحبيبات البوبا المنعشة', price: 100, isFeatured: true },
  { slug: 'boba-mojito-passion-fruit', nameAr: 'بوبا موخيتو باشون فروت', nameEn: 'Boba Mojito Passion Fruit', desc: 'موخيتو الباشون فروت الاستوائي الفوار مع البوبا', price: 100 },
  { slug: 'boba-mojito-lemon-mint', nameAr: 'بوبا موخيتو ليمون نعناع', nameEn: 'Boba Mojito Lemon Mint', desc: 'موخيتو الليمون والنعناع الفريش مع حبيبات البوبا', price: 100 },
  { slug: 'boba-mojito-blueberry', nameAr: 'بوبا موخيتو بلو بيري', nameEn: 'Boba Mojito Blueberry', desc: 'موخيتو التوت الأزرق الفوار المزين بحبيبات البوبا', price: 100 },
  { slug: 'boba-mojito-green-apple', nameAr: 'بوبا موخيتو تفاح أخضر', nameEn: 'Boba Mojito Green Apple', desc: 'موخيتو التفاح الأخضر المقرمش والحامض مع حبيبات البوبا', price: 100 }
];

bobaItems.forEach((item, idx) => {
  products.push({
    id: `bb-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'boba-fruitella',
    categoryNameAr: 'بوبا فروتيلا',
    basePrice: item.price,
    sizes: singleSize(item.price, 'كأس بوبا L', 'Boba Cup L'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['بوبا', 'ميلك شيك', 'موخيتو'],
    ingredientsAr: ['حبيبات بوبا Boba', 'صودا / حليب', 'نكهة طبيعية'],
    dietary: { isNatural: false, isSugarFreeAvailable: false, containsNuts: false, containsDairy: item.nameAr.includes('ميلك شيك') },
    verifiedFromAsset: 'raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 9. Chocolate Lovers
const chocolateItems = [
  { slug: 'oreo-drink', nameAr: 'مشروب أوريو كلاسيك', nameEn: 'Oreo Classic Shake', desc: 'بسكويت أوريو أصلي مخفوق بالحليب والآيس كريم والشوكولاتة', price: 95, isBestSeller: true },
  { slug: 'borio-drink', nameAr: 'مشروب بوريو', nameEn: 'Borio Shake', desc: 'بسكويت بوريو المصري الكلاسيكي بالحليب وصوص الشوكولاتة', price: 95 },
  { slug: 'galaxy-drink', nameAr: 'مشروب جلاكسي حريري', nameEn: 'Smooth Galaxy Chocolate', desc: 'شوكولاتة جلاكسي الناعمة المذابة في الحليب والآيس كريم', price: 120 },
  { slug: 'twinkies-drink', nameAr: 'مشروب توينكز', nameEn: 'Twinkies Cream Shake', desc: 'كعك التوينكز الكريمة اللذيذ ممزوج بالحليب والآيس كريم', price: 95 },
  { slug: 'hohos-drink', nameAr: 'مشروب هوهوز', nameEn: 'Hohos Chocolate Shake', desc: 'كعك الهوهوز المغطى بالشوكولاتة ومخفوق بالكريمة', price: 95 },
  { slug: 'snickers-drink', nameAr: 'مشروب سنيكرز كراميل وفول', nameEn: 'Snickers Caramel Peanut Shake', desc: 'سنيكرز غنية بالفول السوداني والكراميل والشوكولاتة', price: 120 },
  { slug: 'mars-drink', nameAr: 'مشروب مارس بالكراميل', nameEn: 'Mars Caramel Chocolate Shake', desc: 'شوكولاتة مارس بنوجتها المميزة والكراميل السائل', price: 120 },
  { slug: 'maltesers-drink', nameAr: 'مشروب مالتيزرز المقرمش', nameEn: 'Maltesers Crispy Shake', desc: 'كرات مالتيزرز المقرمشة بالحليب والشوكولاتة الغنية', price: 120 },
  { slug: 'twix-drink', nameAr: 'مشروب تويكس أصابع', nameEn: 'Twix Biscuit & Caramel Shake', desc: 'أصابع تويكس البسكويت والكراميل والشوكولاتة المخفوقة', price: 120 },
  { slug: 'cadbury-drink', nameAr: 'مشروب كادبوري ديري ميلك', nameEn: 'Cadbury Dairy Milk Shake', desc: 'شوكولاتة كادبوري الإنجليزية الأصلية الغنية بالحليب', price: 120 },
  { slug: 'kitkat-drink', nameAr: 'مشروب كيت كات ويفر', nameEn: 'KitKat Crisp Wafer Shake', desc: 'أصابع ويفر كيت كات المقرمشة بالشوكولاتة والآيس كريم', price: 120 },
  { slug: 'ferrero-rocher-drink', nameAr: 'مشروب فيريرو روشيه الملكي', nameEn: 'Ferrero Rocher Royal Shake', desc: 'شوكولاتة فيريرو روشيه بالبندق المحمص وصلصة البندق', price: 150, isFeatured: true },
  { slug: 'kinder-drink', nameAr: 'مشروب كيندر بوينو', nameEn: 'Kinder Bueno Shake', desc: 'شوكولاتة كيندر بوينو بكريمة البندق الإيطالية اللذيذة', price: 150, isFeatured: true },
  { slug: 'super-oreo', nameAr: 'سوبر أوريو إكسترا', nameEn: 'Super Oreo Extra Cookies', desc: 'أوريو مضاعف مع قطع بسكويت مقرمشة وصوص شوكولاتة كثيف', price: 140 },
  { slug: 'super-borio', nameAr: 'سوبر بوريو إكسترا', nameEn: 'Super Borio Extra', desc: 'بوريو بحجم سوبر ومضاعف القطع والكريمة', price: 140 },
  { slug: 'super-twinkies', nameAr: 'سوبر توينكز', nameEn: 'Super Twinkies Shake', desc: 'توينكز مضاعف الحجم مع صوص كراميل وكريمة مخفوقة', price: 140 },
  { slug: 'super-hohos', nameAr: 'سوبر هوهوز', nameEn: 'Super Hohos Shake', desc: 'هوهوز مضاعف مع صوص شوكولاتة كينج', price: 140 },
  { slug: 'the-triple-chocolate', nameAr: 'التريبل شوكليت ميكس', nameEn: 'The Triple Chocolate Signature', desc: 'مزيج أسطوري يجمع 3 أنواع شوكولاتة عالمية مع الآيس كريم', price: 150, isBestSeller: true }
];

chocolateItems.forEach((item, idx) => {
  products.push({
    id: `ch-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'chocolate-lovers',
    categoryNameAr: 'عشاق الشوكولاتة',
    basePrice: item.price,
    sizes: singleSize(item.price, 'كأس شوكولاتة L', 'Chocolate Cup L'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/kashtouta.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['شوكولاتة', 'حلوى', 'كريمي'],
    ingredientsAr: ['شوكولاتة أصلية', 'حليب', 'آيس كريم'],
    dietary: { isNatural: false, isSugarFreeAvailable: false, containsNuts: item.nameAr.includes('سنيكرز') || item.nameAr.includes('روشيه') || item.nameAr.includes('كيندر'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 10. Nuts & Yogurt World
const nutsYogurtItems = [
  { slug: 'cashew-drink', nameAr: 'كاجو فانيليا أو شوكولاتة', nameEn: 'Cashew Vanilla or Chocolate', desc: 'كاجو محمص فاخر مخفوق بالحليب واختيارك من الفانيليا أو الشوكولاتة', price: 130, isFeatured: true },
  { slug: 'hazelnut-drink', nameAr: 'بندق فانيليا أو شوكولاتة', nameEn: 'Hazelnut Vanilla or Chocolate', desc: 'بندق بلدي محمص مخفوق بالحليب ونكهة غنية', price: 130 },
  { slug: 'almond-drink', nameAr: 'لوز فانيليا أو شوكولاتة', nameEn: 'Almond Vanilla or Chocolate', desc: 'لوز محمص غني بالبروتين مخفوق بالحليب والآيس كريم', price: 130 },
  { slug: 'peanut-drink', nameAr: 'سوداني فانيليا أو شوكولاتة', nameEn: 'Peanut Vanilla or Chocolate', desc: 'فول سوداني محمص بنكهة زبدة الفول السوداني اللذيذة', price: 100 },
  { slug: 'coconut-drink', nameAr: 'جوز هند فانيليا أو شوكولاتة', nameEn: 'Coconut Vanilla or Chocolate', desc: 'مشروب جوز الهند الاستوائي الناعم بالفانيليا أو الشوكولاتة', price: 90 },
  { slug: 'yogurt-honey', nameAr: 'زبادي عسل نحل طبيعي', nameEn: 'Yogurt with Pure Honey', desc: 'زبادي بلدي طازج مخفوق بعسل النحل الصافي المغذي', pL: 70, pLiter: 140, isBestSeller: true },
  { slug: 'yogurt-strawberry-mango', nameAr: 'زبادي فراولة أو مانجو', nameEn: 'Yogurt Strawberry or Mango', desc: 'زبادي طبيعي مخفوق بالفواكه الطازجة من المانجو أو الفراولة', pL: 80, pLiter: 150 },
  { slug: 'yogurt-mixed-fruits', nameAr: 'زبادي فواكه مشكلة قطع', nameEn: 'Yogurt with Mixed Fruit Chunks', desc: 'زبادي مثلج مغطى بمكعبات الفواكه الطازجة والعسل', pL: 90, pLiter: 170 },
  { slug: 'yogurt-berry', nameAr: 'زبادي توت أحمر وأزرق', nameEn: 'Berry Yogurt Shake', desc: 'زبادي طبيعي ممزوج بالتوت البري المنعش', pL: 85, pLiter: 160 },
  { slug: 'yogurt-cashew', nameAr: 'زبادي بالكاجو الملكي', nameEn: 'Royal Cashew Yogurt', desc: 'زبادي طبيعي مغذٍ مخفوق بالكاجو الفاخر والعسل', pL: 130, pLiter: 250, isFeatured: true },
  { slug: 'yogurt-fruits-honey', nameAr: 'زبادي فواكه بالعسل', nameEn: 'Yogurt Fruits & Honey', desc: 'توليفة من الفواكه والزبادي وعسل النحل الصافي', pL: 85, pLiter: 160 }
];

nutsYogurtItems.forEach((item, idx) => {
  const sizes = [];
  if (item.price) {
    sizes.push({ id: 'regular', nameAr: 'كأس مكسرات L', nameEn: 'Standard L', price: item.price, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
  } else {
    sizes.push({ id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' });
    sizes.push({ id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', availability: 'available', extractionStatus: 'verified' });
  }

  products.push({
    id: `ny-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'nuts-yogurt',
    categoryNameAr: 'عالم المكسرات والزبادي',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['مكسرات', 'زبادي', 'صحي'],
    ingredientsAr: [item.nameAr],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: !item.nameAr.includes('زبادي عسل'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 11. Milkshakes
const milkshakeItems = [
  { slug: 'vanilla-milkshake', nameAr: 'ميلك شيك فانيليا', nameEn: 'Vanilla Milkshake', desc: 'ميلك شيك كلاسيكي كثيف بآيس كريم الفانيليا الطبيعي', pL: 80, pLiter: 150 },
  { slug: 'chocolate-milkshake', nameAr: 'ميلك شيك شوكولاتة', nameEn: 'Chocolate Milkshake', desc: 'ميلك شيك غني بالشوكولاتة البلجيكية والآيس كريم', pL: 80, pLiter: 150 },
  { slug: 'mango-milkshake', nameAr: 'ميلك شيك مانجو', nameEn: 'Mango Milkshake', desc: 'ميلك شيك مانجو استوائية طبيعية مخفوقة بالآيس كريم', pL: 85, pLiter: 160 },
  { slug: 'mocha-milkshake', nameAr: 'ميلك شيك موكا', nameEn: 'Mocha Milkshake', desc: 'ميلك شيك يجمع نكهة القهوة والشوكولاتة بالحليب', pL: 85, pLiter: 160 },
  { slug: 'caramel-milkshake', nameAr: 'ميلك شيك كراميل', nameEn: 'Caramel Milkshake', desc: 'ميلك شيك كريمي بصلصة الكراميل الغنية والآيس كريم', pL: 85, pLiter: 160 },
  { slug: 'oreo-milkshake', nameAr: 'ميلك شيك أوريو', nameEn: 'Oreo Milkshake', desc: 'ميلك شيك الأوريو الأصلي مع فتات البسكويت المقرمش', pL: 85, pLiter: 160, isBestSeller: true },
  { slug: 'borio-milkshake', nameAr: 'ميلك شيك بوريو', nameEn: 'Borio Milkshake', desc: 'ميلك شيك البوريو المصري الكلاسيكي اللذيذ', pL: 85, pLiter: 160 },
  { slug: 'blueberry-milkshake', nameAr: 'ميلك شيك توت أزرق', nameEn: 'Blueberry Milkshake', desc: 'ميلك شيك التوت الأزرق المنعش بنكهة غنية وفاخرة', pL: 85, pLiter: 160 },
  { slug: 'lotus-milkshake', nameAr: 'ميلك شيك لوتس', nameEn: 'Lotus Biscoff Milkshake', desc: 'ميلك شيك زبدة اللوتس وبسكويت اللوتس المقرمش', pL: 85, pLiter: 160, isFeatured: true },
  { slug: 'mix-berry-milkshake', nameAr: 'ميلك شيك ميكس بيري', nameEn: 'Mix Berry Milkshake', desc: 'توليفة من التوت المشكل مع الحليب والآيس كريم', pL: 85, pLiter: 160 },
  { slug: 'twinkies-milkshake', nameAr: 'ميلك شيك توينكز', nameEn: 'Twinkies Milkshake', desc: 'كعك توينكز مخفوق مع الحليب والآيس كريم بنعومة تامة', pL: 85, pLiter: 160 },
  { slug: 'kiwi-milkshake', nameAr: 'ميلك شيك كيوي', nameEn: 'Kiwi Milkshake', desc: 'ميلك شيك الكيوي الطبيعي الحامض حلو المنعش', pL: 100, pLiter: 190 },
  { slug: 'raspberry-milkshake', nameAr: 'ميلك شيك توت أحمر', nameEn: 'Raspberry Milkshake', desc: 'ميلك شيك التوت الأحمر بنكهة منعشة ولون وردي', pL: 85, pLiter: 160 },
  { slug: 'nutella-milkshake', nameAr: 'ميلك شيك نوتيلا', nameEn: 'Nutella Milkshake', desc: 'ميلك شيك غارق بشوكولاتة النوتيلا الأصلية والبندق', pL: 90, pLiter: 170, isBestSeller: true },
  { slug: 'pistachio-milkshake', nameAr: 'ميلك شيك بيستاشيو', nameEn: 'Pistachio Milkshake', desc: 'ميلك شيك الفستق الحلبي الفاخر مع صوص الفستق والآيس كريم', pL: 95, pLiter: 190, isFeatured: true },
  { slug: 'cerelac-milkshake', nameAr: 'ميلك شيك سيريلاك زمان', nameEn: 'Cerelac Nostalgia Milkshake', desc: 'نكهة الطفولة المحبوبة من السيريلاك مع الحليب والآيس كريم', pL: 85, pLiter: 160 },
  { slug: 'strawberry-milkshake', nameAr: 'ميلك شيك فراولة', nameEn: 'Strawberry Milkshake', desc: 'ميلك شيك الفراولة الفريش مع الآيس كريم الطبيعي', pL: 85, pLiter: 160 }
];

milkshakeItems.forEach((item, idx) => {
  const sizes = [
    { id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' },
    { id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', availability: 'available', extractionStatus: 'verified' }
  ];

  products.push({
    id: `ms-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'milkshakes',
    categoryNameAr: 'عالم الميلك شيك',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['ميلك شيك', 'كريمي', 'مثلج'],
    ingredientsAr: ['حليب طازج', 'آيس كريم', item.nameAr.replace('ميلك شيك ', '')],
    dietary: { isNatural: false, isSugarFreeAvailable: false, containsNuts: item.nameAr.includes('بيستاشيو') || item.nameAr.includes('نوتيلا'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 12. Power Fruitella
const powerItems = [
  { slug: 'avocado-juice-plain', nameAr: 'عصير أفوكادو بيور', nameEn: 'Pure Avocado Juice', desc: 'أفوكادو طبيعي كريمي معصور طازج بدون إضافات', pL: 110, pLiter: 220 },
  { slug: 'avocado-single-nut', nameAr: 'أفوكادو كاجو أو بندق أو لوز', nameEn: 'Avocado with Cashew, Hazelnut or Almond', desc: 'أفوكادو كريمي مخفوق باختيارك من الكاجو أو البندق أو اللوز المحمص', pL: 140, pLiter: 270 },
  { slug: 'avocado-mixed-nuts', nameAr: 'أفوكادو مكسرات مشكلة', nameEn: 'Avocado Mixed Nuts Royal', desc: 'أفوكادو مخفوق بمزيج فاخر من الكاجو واللوز والبندق والعسل', pL: 140, pLiter: 270, isBestSeller: true },
  { slug: 'super-avocado', nameAr: 'سوبر أفوكادو فروتيلا', nameEn: 'Super Avocado Power', desc: 'المكونات: أفوكادو، جرجير فريش، بلح، آيس كريم، عسل نحل جبلي', pL: 120, pLiter: 230, isFeatured: true, ing: ['أفوكادو', 'جرجير', 'بلح', 'آيس كريم', 'عسل نحل'] },
  { slug: 'pineapple-power', nameAr: 'أناناس باور الملكي', nameEn: 'Royal Pineapple Power', desc: 'أناناس طبيعي مخفوق بمكونات الطاقة والعسل والآيس كريم', pL: 120, pLiter: 230 },
  { slug: 'viagra-blend', nameAr: 'مشروب فياجرا طبيعي', nameEn: 'Viagra Natural Energy Blend', desc: 'خلطة الطاقة الطبيعية الكلاسيكية بالعسل والجرجير والمكسرات', pL: 70, pLiter: 140 },
  { slug: 'super-viagra', nameAr: 'سوبر فياجرا فروتيلا', nameEn: 'Super Viagra Signature Blend', desc: 'المكونات: أفوكادو، جرجير، كيوي، حلاوة طحينية، آيس كريم، عسل', pL: 120, pLiter: 230, isBestSeller: true, ing: ['أفوكادو', 'جرجير', 'كيوي', 'حلاوة طحينية', 'آيس كريم', 'عسل'] },
  { slug: 'avocado-kiwi', nameAr: 'أفوكادو بالكيوي', nameEn: 'Avocado with Kiwi', desc: 'أفوكادو كريمي ممزوج بالكيوي الأخضر المنعش الغني بفيتامين سي', pL: 130, pLiter: 250 },
  { slug: 'avocado-mango', nameAr: 'أفوكادو بالمانجو', nameEn: 'Avocado with Mango', desc: 'مزيج الأفوكادو الدسم مع حلاوة المانجو الاستوائية', pL: 110, pLiter: 210 },
  { slug: 'avocado-dates', nameAr: 'أفوكادو بالبلح والحليب', nameEn: 'Avocado with Dates & Milk', desc: 'أفوكادو مع التمر واللبن وعسل النحل لطاقة تدوم طويلاً', pL: 120, pLiter: 220 },
  { slug: 'avocado-yogurt', nameAr: 'أفوكادو بالزبادي والعسل', nameEn: 'Avocado with Yogurt & Honey', desc: 'أفوكادو مع زبادي طبيعي وعسل نحل صافٍ لوجبة خفيفة وصحية', pL: 130, pLiter: 250 },
  { slug: 'avocado-fruit-chunks', nameAr: 'أفوكادو فواكه قطع', nameEn: 'Avocado with Fresh Fruit Chunks', desc: 'عصير أفوكادو كريمي يعلوه مكعبات الفواكه الطازجة والمكسرات', pL: 65, pLiter: 130 },
  { slug: 'dates-arugula-honey', nameAr: 'بلح جرجير عسل طاقة', nameEn: 'Dates, Arugula & Honey Energy', desc: 'خلطة تراثية مقوية من التمر وأوراق الجرجير وعسل النحل الصافي', pL: 150, pLiter: 290 },
  { slug: 'power-fruitella-royal', nameAr: 'باور فروتيلا رويال الحصري', nameEn: 'Fruitella Royal Power', desc: 'المكونات: كاجو، بندق، لوز، آيس كريم، حلاوة طحينية، عسل جبلي حر', pL: 150, pLiter: 290, isFeatured: true, isBestSeller: true, ing: ['كاجو', 'بندق', 'لوز', 'آيس كريم', 'حلاوة طحينية', 'عسل نحل'] }
];

powerItems.forEach((item, idx) => {
  const sizes = [
    { id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' },
    { id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', availability: 'available', extractionStatus: 'verified' }
  ];

  products.push({
    id: `pw-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'power-fruitella',
    categoryNameAr: 'باور فروتيلا',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['باور', 'أفوكادو', 'مكسرات', 'عسل'],
    ingredientsAr: item.ing || ['أفوكادو طبيعي', 'عسل نحل', 'مكسرات'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: true, containsDairy: true },
    verifiedFromAsset: 'raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 13. Forest Feedings
const forestItems = [
  { slug: 'lion-feeding', nameAr: 'رضعة الأسد', nameEn: 'Lion Feeding', desc: 'المكونات: سوبيا طبيعي، مانجو، فانيليا مثلجة', price: 80, ing: ['سوبيا', 'مانجو', 'فانيليا'], isBestSeller: true },
  { slug: 'monkey-feeding', nameAr: 'رضعة القرد', nameEn: 'Monkey Feeding', desc: 'المكونات: سوبيا طبيعي، مانجو، موز بلدي', price: 80, ing: ['سوبيا', 'مانجو', 'موز'] },
  { slug: 'elephant-feeding', nameAr: 'رضعة الفيل', nameEn: 'Elephant Feeding', desc: 'المكونات: سوبيا طبيعي، شوكولاتة ناعمة، فانيليا', price: 80, ing: ['سوبيا', 'شوكولاتة', 'فانيليا'] },
  { slug: 'tiger-feeding', nameAr: 'رضعة النمر', nameEn: 'Tiger Feeding', desc: 'المكونات: سوبيا طبيعي، فراولة فريش، فانيليا', price: 80, ing: ['سوبيا', 'فراولة', 'فانيليا'], isFeatured: true },
  { slug: 'whale-feeding', nameAr: 'رضعة الحوت', nameEn: 'Whale Feeding', desc: 'المكونات: سوبيا طبيعي، كانتالوب فريش، فانيليا', price: 80, ing: ['سوبيا', 'كانتالوب', 'فانيليا'] },
  { slug: 'koala-feeding', nameAr: 'رضعة الكوالا', nameEn: 'Koala Feeding', desc: 'المكونات: سوبيا طبيعي، بلح طازج، لبن حليب', price: 80, ing: ['سوبيا', 'بلح', 'حليب'] },
  { slug: 'bird-milk-feeding', nameAr: 'رضعة لبن العصفور', nameEn: 'Bird Milk Feeding', desc: 'المكونات: سوبيا طبيعي، موز فريش، فانيليا مخفوقة', price: 80, ing: ['سوبيا', 'موز', 'فانيليا'] }
];

forestItems.forEach((item, idx) => {
  products.push({
    id: `ff-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'forest-feedings',
    categoryNameAr: 'رضعات الغابة',
    basePrice: item.price,
    sizes: singleSize(item.price, 'كأس رضعة الغابة', 'Forest Cup'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/fruit-cocktail-cup.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['رضعات الغابة', 'سوبيا', 'ميكس'],
    ingredientsAr: item.ing,
    dietary: { isNatural: true, isSugarFreeAvailable: false, containsNuts: false, containsDairy: true },
    verifiedFromAsset: 'raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 14. Fruitella Mixes
const fruitellaMixItems = [
  { slug: 'mix-batot', nameAr: 'ميكس بطوط', nameEn: 'Batot Cartoon Mix', desc: 'المكونات: فراولة، موز، زبادي، آيس كريم فانيليا', pL: 70, pLiter: 130, ing: ['فراولة', 'موز', 'زبادي', 'آيس كريم'], isBestSeller: true },
  { slug: 'mix-farafiro', nameAr: 'ميكس فرافيرو', nameEn: 'Farafiro Signature Mix', desc: 'المكونات: مانجو، موز، بلح طازج، آيس كريم', pL: 70, pLiter: 130, ing: ['مانجو', 'موز', 'بلح', 'آيس كريم'] },
  { slug: 'mix-spongebob', nameAr: 'ميكس سبونج بوب', nameEn: 'SpongeBob Mix', desc: 'المكونات: مانجو، فراولة، آيس كريم فانيليا بلون مبهج', pL: 70, pLiter: 130, ing: ['مانجو', 'فراولة', 'آيس كريم'], isFeatured: true },
  { slug: 'mix-chico-banana', nameAr: 'ميكس شيكو بانانا', nameEn: 'Chico Banana Choco Shake', desc: 'المكونات: موز، شوكولاتة سائلة، بسكويت بوريو، لبن', pL: 70, pLiter: 130, ing: ['موز', 'شوكولاتة', 'بوريو', 'حليب'] },
  { slug: 'mix-mouse', nameAr: 'ميكس ميكي ماوس', nameEn: 'Mickey Mouse Mix', desc: 'المكونات: موز، فراولة، آيس كريم فانيليا', pL: 70, pLiter: 130, ing: ['موز', 'فراولة', 'آيس كريم'] },
  { slug: 'mix-tom-and-jerry', nameAr: 'ميكس توم آند جيري', nameEn: 'Tom & Jerry Duo Mix', desc: 'المكونات: مانجو، موز، فراولة، آيس كريم', pL: 70, pLiter: 130, ing: ['مانجو', 'موز', 'فراولة', 'آيس كريم'] },
  { slug: 'mix-aboutrika', nameAr: 'ميكس أبو تريكة 22', nameEn: 'Aboutrika 22 Legend Mix', desc: 'المكونات: فراولة، أناناس استوائي، آيس كريم', pL: 85, pLiter: 160, ing: ['فراولة', 'أناناس', 'آيس كريم'], isBestSeller: true },
  { slug: 'mix-saroukh', nameAr: 'ميكس صاروخ فروتيلا', nameEn: 'Rocket Mix Saroukh', desc: 'المكونات: أناناس، موز، مانجو، آيس كريم', pL: 85, pLiter: 160, ing: ['أناناس', 'موز', 'مانجو', 'آيس كريم'] },
  { slug: 'mix-fruitella-special', nameAr: 'ميكس فروتيلا الحصري', nameEn: 'Fruitella House Special Mix', desc: 'المكونات: أناناس، تفاح أخضر، خوخ سكري', pL: 85, pLiter: 160, ing: ['أناناس', 'تفاح', 'خوخ'], isFeatured: true },
  { slug: 'mix-pina-colada', nameAr: 'ميكس بينا كولادا', nameEn: 'Virgin Pina Colada', desc: 'المكونات: أناناس، برتقال، حليب جوز هند استوائي', pL: 85, pLiter: 160, ing: ['أناناس', 'برتقال', 'جوز هند'] },
  { slug: 'mix-google', nameAr: 'ميكس جوجل', nameEn: 'Google Power Mix', desc: 'المكونات: أناناس، مانجو، آيس كريم فانيليا', pL: 85, pLiter: 160, ing: ['أناناس', 'مانجو', 'آيس كريم'] },
  { slug: 'mix-vitamin-c', nameAr: 'ميكس فيتامين سي', nameEn: 'Citrus Vitamin C Mix', desc: 'المكونات: برتقال، جوافة، ليمون، عسل نحل طبيعي', pL: 70, pLiter: 130, ing: ['برتقال', 'جوافة', 'ليمون', 'عسل'] },
  { slug: 'mix-nos-darba', nameAr: 'ميكس نص ضربة قطع', nameEn: 'Nos Darba Half-Blended Mix', desc: 'المكونات: ميكسات فواكه بيوريه ثقيل مع قطع فواكه ملموسة', pL: 75, pLiter: 140, ing: ['فواكه مشكلة بيوريه', 'قطع فواكه'] },
  { slug: 'mix-shabah', nameAr: 'ميكس الشبح', nameEn: 'The Ghost Special Mix', desc: 'المكونات: تفاح، بلح، كيوي، لبن طبيعي', pL: 75, pLiter: 140, ing: ['تفاح', 'بلح', 'كيوي', 'حليب'] },
  { slug: 'mix-viva', nameAr: 'ميكس فيفا', nameEn: 'Viva Celebration Mix', desc: 'المكونات: بلح طازج، موز، لبن حليب، آيس كريم', pL: 75, pLiter: 140, ing: ['بلح', 'موز', 'حليب', 'آيس كريم'] }
];

fruitellaMixItems.forEach((item, idx) => {
  const sizes = [
    { id: 'l', nameAr: 'حجم L', nameEn: 'Size L', price: item.pL, volumeLabel: 'L', isDefault: true, availability: 'available', extractionStatus: 'verified' },
    { id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.pLiter, volumeLabel: '1L', availability: 'available', extractionStatus: 'verified' }
  ];

  products.push({
    id: `fm-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'fruitella-mixes',
    categoryNameAr: 'ميكسات فروتيلا',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/fruit-salad-icecream.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['ميكسات', 'كوكتيل', 'فروتيلا'],
    ingredientsAr: item.ing,
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: item.desc.includes('آيس') || item.desc.includes('لبن') || item.desc.includes('زبادي') },
    verifiedFromAsset: 'raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 15. Ice Cream World
const iceCreamItems = [
  { slug: 'ice-cream-1-scoop', nameAr: 'بولة آيس كريم (أبولة)', nameEn: '1 Scoop Ice Cream', desc: 'بولة واحدة من اختيارك من نكهات الآيس كريم الطبيعي الفاخر', price: 30 },
  { slug: 'ice-cream-2-scoops', nameAr: '2 بولة آيس كريم (2 أبولة)', nameEn: '2 Scoops Ice Cream', desc: 'بولتان من الآيس كريم الطبيعي بنكهاتك المفضلة', price: 60 },
  { slug: 'ice-cream-3-scoops', nameAr: '3 بولة آيس كريم (3 أبولة)', nameEn: '3 Scoops Ice Cream', desc: 'ثلاث بولات آيس كريم طبيعي مثلج بنكهات متنوعة', price: 80, isBestSeller: true },
  { slug: 'fattet-ice-cream', nameAr: 'فتة آيس كريم فروتيلا', nameEn: 'Fruitella Ice Cream Fatta', desc: 'طبق فتة الآيس كريم الشهير مع قطع الكيك والصلصات والمكسرات', price: 120, isFeatured: true },
  { slug: 'american-ice-cream', nameAr: 'آيس كريم أمريكي صنداي', nameEn: 'American Sundae Ice Cream', desc: 'صنداي آيس كريم على الطريقة الأمريكية مع الكريمة المخفوقة وصلصة الفدج', price: 130 },
  { slug: 'the-dinosaur-cup', nameAr: 'كأس الديناصور العملاق', nameEn: 'The Dinosaur Giant Cup', desc: 'كأس عملاق من تشكيلة الآيس كريم والفواكه والبسكويت والشوكولاتة', price: 140, isFeatured: true },
  { slug: 'arayisi-ice-cream', nameAr: 'عرايسي آيس كريم الملكي', nameEn: 'Arayisi Royal Ice Cream', desc: 'طبق عرايسي آيس كريم غني بالقشطة والمكسرات والعسل والفواكه', price: 140, isBestSeller: true }
];

iceCreamItems.forEach((item, idx) => {
  products.push({
    id: `ic-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'ice-cream',
    categoryNameAr: 'عالم الآيس كريم',
    basePrice: item.price,
    sizes: singleSize(item.price, 'حصة آيس كريم', 'Ice Cream Serving'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/fruit-salad-icecream.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['آيس كريم', 'حلويات', 'مثلج'],
    ingredientsAr: ['حليب طبيعي', 'كريمة', 'نكهات طبيعية'],
    dietary: { isNatural: false, isSugarFreeAvailable: false, containsNuts: item.nameAr.includes('عرايسي') || item.nameAr.includes('فتة'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 16. Mojito World
const mojitoItems = [
  { slug: 'mojito-blueberry', nameAr: 'موخيتو بلو بيري', nameEn: 'Blueberry Mojito', desc: 'صودا فوارة منعشة بالليمون والنعناع الفريش وسيرب التوت الأزرق', price: 75, isBestSeller: true },
  { slug: 'mojito-raspberry', nameAr: 'موخيتو توت أحمر', nameEn: 'Raspberry Mojito', desc: 'موخيتو التوت الأحمر بنكهة حامضة منعشة مع الثلج المجروش', price: 75 },
  { slug: 'mojito-strawberry', nameAr: 'موخيتو فراولة', nameEn: 'Strawberry Mojito', desc: 'فراولة فريش مقطعة مع النعناع والليمون والصودا المثلجة', price: 75 },
  { slug: 'mojito-green-apple', nameAr: 'موخيتو تفاح أخضر', nameEn: 'Green Apple Mojito', desc: 'نكهة التفاح الأخضر المقرمش مع أوراق النعناع والليمون الفوار', price: 75, isFeatured: true },
  { slug: 'mojito-lemon-mint', nameAr: 'موخيتو ليمون نعناع كلاسيك', nameEn: 'Classic Lemon Mint Mojito', desc: 'الموخيتو الكلاسيكي العالمي بشرائح الليمون وأوراق النعناع والصودا', price: 75 },
  { slug: 'mojito-jelly-cola', nameAr: 'موخيتو جيلي كولا', nameEn: 'Jelly Cola Mojito', desc: 'ابتكار فروتيلا المنعش بنكهة حلوى الجيلي كولا الفوارة', price: 75 },
  { slug: 'mojito-pineapple', nameAr: 'موخيتو أناناس', nameEn: 'Pineapple Mojito', desc: 'موخيتو استوائي بشرائح الأناناس والليمون والصودا المثلجة', price: 75 },
  { slug: 'mojito-redbull-mix-berry', nameAr: 'موخيتو بول ميكس بيري', nameEn: 'Red Bull Mix Berry Mojito', desc: 'موخيتو ريدبول طاقة فوار مع التوت المشكل والليمون والنعناع', price: 110, isFeatured: true }
];

mojitoItems.forEach((item, idx) => {
  products.push({
    id: `mj-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'mojito-world',
    categoryNameAr: 'عالم الموخيتو',
    basePrice: item.price,
    sizes: singleSize(item.price, 'كأس موخيتو L', 'Mojito Cup L'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['موخيتو', 'صودا', 'منعش'],
    ingredientsAr: ['صودا فوارة', 'نعناع فريش', 'ليمون', 'سيرب طبيعي'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: false },
    verifiedFromAsset: 'raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 17. Fruitella Diet
const dietItems = [
  { slug: 'diet-rashaka', nameAr: 'دايت الرشاقة', nameEn: 'Diet Agility Blend', desc: 'خلطة الرشاقة الخفيفة من فواكه طبيعية معصورة بدون سكر', price: 90, isBestSeller: true },
  { slug: 'diet-fitness', nameAr: 'دايت فتنس رياضي', nameEn: 'Diet Fitness Booster', desc: 'مشروب الفتنس الغني بالفيتامينات والمعادن المنشطة', price: 90, isFeatured: true },
  { slug: 'diet-rani', nameAr: 'دايت راني فريش', nameEn: 'Diet Rani Fresh', desc: 'عصير طبيعي نقي بقطع الفاكهة الطازجة الخفيفة', price: 90 },
  { slug: 'diet-green', nameAr: 'دايت جرين الأخضر', nameEn: 'Diet Green Detox', desc: 'ديتوكس أخضر طبيعي من الكيوي والتفاح الأخضر والليمون والنعناع', price: 90, isFeatured: true },
  { slug: 'diet-french-silhouette', nameAr: 'دايت عود فرنساوي', nameEn: 'Diet French Silhouette', desc: 'خلطة خفيفة ومحلاة طبيعياً بسكر ستيفيا لإنعاش الجسم', price: 100 },
  { slug: 'diet-fruitella', nameAr: 'دايت فروتيلا الأصلي', nameEn: 'Original Fruitella Diet', desc: 'عصير فروتيلا الخفيف منتقى من أفضل الفواكه قليلة السعرات', price: 100 },
  { slug: 'diet-new-fruitella', nameAr: 'دايت جديد فروتيلا', nameEn: 'New Fruitella Diet', desc: 'أحدث خلطات دايت فروتيلا المنعشة والخالية تماماً من السكر المضاف', price: 100 }
];

dietItems.forEach((item, idx) => {
  products.push({
    id: `dt-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'fruitella-diet',
    categoryNameAr: 'دايت فروتيلا',
    basePrice: item.price,
    sizes: singleSize(item.price, 'كأس دايت L', 'Diet Cup L'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/avocado-nuts-mango-pair.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['دايت', 'بدون سكر', 'صحي', 'رشاقة'],
    ingredientsAr: ['فواكه طبيعية', 'ستيفيا حسب الرغبة'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: false },
    verifiedFromAsset: 'raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 18. Family Packs
const familyPackItems = [
  { slug: 'family-sugarcane', nameAr: 'عبوة قصب عائلية', nameEn: 'Family Sugarcane Pack', p1L: 50, p4L: 190, isBestSeller: true },
  { slug: 'family-sugarcane-orange', nameAr: 'عبوة قصب بالبرتقال عائلية', nameEn: 'Family Sugarcane with Orange', p1L: 70, p4L: 270 },
  { slug: 'family-sugarcane-sobia', nameAr: 'عبوة قصب بالسوبيا عائلية', nameEn: 'Family Sugarcane with Sobya', p1L: 70, p4L: 270 },
  { slug: 'family-sugarcane-lemon', nameAr: 'عبوة قصب بالليمون عائلية', nameEn: 'Family Sugarcane with Lemon', p1L: 70, p4L: 270 },
  { slug: 'family-sugarcane-icecream', nameAr: 'عبوة قصب بالآيس كريم عائلية', nameEn: 'Family Sugarcane with Ice Cream', p1L: 90 },
  { slug: 'family-sobia', nameAr: 'عبوة سوبيا عائلية', nameEn: 'Family Sobya Pack', p1L: 85, p4L: 320, isBestSeller: true },
  { slug: 'family-sobia-mango', nameAr: 'عبوة سوبيا بالمانجو عائلية', nameEn: 'Family Mango Sobya Pack', p1L: 120, p4L: 440 },
  { slug: 'family-tamarind', nameAr: 'عبوة تمر هندي عائلية', nameEn: 'Family Tamarind Pack', p1L: 70, p4L: 270 },
  { slug: 'family-carob', nameAr: 'عبوة خروب عائلية', nameEn: 'Family Carob Pack', p1L: 75, p4L: 280 },
  { slug: 'family-ennab', nameAr: 'عبوة عناب عائلية', nameEn: 'Family Ennab Pack', p1L: 75, p4L: 280 },
  { slug: 'family-doum', nameAr: 'عبوة دوم عائلية', nameEn: 'Family Doum Pack', p1L: 80, p4L: 300 },
  { slug: 'family-doum-milk', nameAr: 'عبوة دوم باللبن عائلية', nameEn: 'Family Doum with Milk Pack', p1L: 95, p4L: 320 },
  { slug: 'family-mango', nameAr: 'عبوة مانجو عائلية', nameEn: 'Family Mango Pack', p1L: 110, p4L: 420, isFeatured: true, isBestSeller: true },
  { slug: 'family-guava', nameAr: 'عبوة جوافة عائلية', nameEn: 'Family Guava Pack', p1L: 85, p4L: 310 },
  { slug: 'family-strawberry', nameAr: 'عبوة فراولة عائلية', nameEn: 'Family Strawberry Pack', p1L: 95, p4L: 350, isFeatured: true },
  { slug: 'family-orange', nameAr: 'عبوة برتقال عائلية', nameEn: 'Family Orange Pack', p1L: 90, p4L: 350 },
  { slug: 'family-kiwi', nameAr: 'عبوة كيوي عائلية', nameEn: 'Family Kiwi Pack', p1L: 180 },
  { slug: 'family-avocado', nameAr: 'عبوة أفوكادو عائلية', nameEn: 'Family Avocado Pack', p1L: 220, isFeatured: true },
  { slug: 'family-pineapple', nameAr: 'عبوة أناناس عائلية', nameEn: 'Family Pineapple Pack', p1L: 210 },
  { slug: 'family-dates-milk', nameAr: 'عبوة بلح باللبن عائلية', nameEn: 'Family Dates with Milk Pack', p1L: 100, p4L: 380 },
  { slug: 'family-watermelon', nameAr: 'عبوة بطيخ عائلية', nameEn: 'Family Watermelon Pack', p1L: 90, p4L: 320 },
  { slug: 'family-lemon', nameAr: 'عبوة ليمون عائلية', nameEn: 'Family Lemon Pack', p1L: 80, p4L: 300 },
  { slug: 'family-lemon-mint', nameAr: 'عبوة ليمون نعناع عائلية', nameEn: 'Family Lemon Mint Pack', p1L: 90, p4L: 320, isBestSeller: true },
  { slug: 'family-lemon-milk', nameAr: 'عبوة ليمون باللبن عائلية', nameEn: 'Family Lemon with Milk Pack', p1L: 110, p4L: 400 },
  { slug: 'family-banana-milk', nameAr: 'عبوة موز باللبن عائلية', nameEn: 'Family Banana with Milk Pack', p1L: 95, p4L: 350 },
  { slug: 'family-cantaloupe', nameAr: 'عبوة كانتالوب عائلية', nameEn: 'Family Cantaloupe Pack', p1L: 85, p4L: 320 },
  { slug: 'family-vitamin-c', nameAr: 'عبوة فيتامين سي عائلية', nameEn: 'Family Vitamin C Pack', p1L: 130 },
  { slug: 'family-tangerine', nameAr: 'عبوة يوسفي عائلية', nameEn: 'Family Tangerine Pack', p1L: 90 },
  { slug: 'family-blender-mix', nameAr: 'عبوة ميكس خلاط عائلية', nameEn: 'Family Blender Mix Pack', p1L: 130 },
  { slug: 'family-nos-darba', nameAr: 'عبوة نص ضربة عائلية', nameEn: 'Family Nos Darba Chunks Pack', p1L: 130 }
];

familyPackItems.forEach((item, idx) => {
  const sizes = [
    { id: 'liter', nameAr: 'حجم لتر', nameEn: '1 Liter', price: item.p1L, volumeLabel: '1L', isDefault: true, availability: 'available', extractionStatus: 'verified' }
  ];
  if (item.p4L) {
    sizes.push({ id: '4liter', nameAr: 'حجم 4 لتر', nameEn: '4 Liters', price: item.p4L, volumeLabel: '4L', availability: 'available', extractionStatus: 'verified' });
  }

  products.push({
    id: `fp-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: `عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من ${item.nameAr.replace('عبوة ', '').replace(' عائلية', '')} للمناسبات والجمعات`,
    categorySlug: 'family-packs',
    categoryNameAr: 'العبوات العائلية',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/menu/menu-board-1.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['عائلي', 'لتر', 'توفير', 'حجم كبير'],
    ingredientsAr: [item.nameAr],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: false, containsDairy: item.nameAr.includes('لبن') || item.nameAr.includes('آيس') },
    verifiedFromAsset: 'raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 19. Hot Drinks
const hotDrinkItems = [
  { slug: 'espresso-single-double', nameAr: 'إسبريسو سينجل / دبل', nameEn: 'Espresso Single / Double', desc: 'إسبريسو إيطالي أصلي غني بالكريمة والنكهة القوية', sizes: [
    { id: 's', nameAr: 'حجم S (سينجل)', nameEn: 'Single (S)', price: 50, volumeLabel: 'S', isDefault: true },
    { id: 'd', nameAr: 'حجم D (دبل)', nameEn: 'Double (D)', price: 65, volumeLabel: 'D' }
  ], isBestSeller: true },
  { slug: 'espresso-con-panna', nameAr: 'إسبريسو كوبا بالكريمة', nameEn: 'Espresso Con Panna', desc: 'شوت إسبريسو غني تعلوه طبقة من الكريمة المخفوقة الفاخرة', price: 70 },
  { slug: 'macchiato', nameAr: 'ماكياتو سينجل / دبل', nameEn: 'Macchiato Single / Double', desc: 'إسبريسو مع نقطة حليب ورغوة مخملية', sizes: [
    { id: 's', nameAr: 'حجم S (سينجل)', nameEn: 'Single (S)', price: 60, volumeLabel: 'S', isDefault: true },
    { id: 'd', nameAr: 'حجم D (دبل)', nameEn: 'Double (D)', price: 70, volumeLabel: 'D' }
  ]},
  { slug: 'cappuccino', nameAr: 'كابتشينو إيطالي', nameEn: 'Italian Cappuccino', desc: 'توازن مثالي بين الإسبريسو والحليب المبخر والرغوة الكثيفة', sizes: [
    { id: 's', nameAr: 'حجم S (صغير)', nameEn: 'Small (S)', price: 85, volumeLabel: 'S', isDefault: true },
    { id: 'm', nameAr: 'حجم M (متوسط)', nameEn: 'Medium (M)', price: 100, volumeLabel: 'M' }
  ], isBestSeller: true },
  { slug: 'caffe-latte', nameAr: 'كافيه لاتيه ناعم', nameEn: 'Caffè Latte', desc: 'إسبريسو غني مع كمية سخية من الحليب المبخر الناعم', sizes: [
    { id: 's', nameAr: 'حجم S (صغير)', nameEn: 'Small (S)', price: 80, volumeLabel: 'S', isDefault: true },
    { id: 'm', nameAr: 'حجم M (متوسط)', nameEn: 'Medium (M)', price: 100, volumeLabel: 'M' }
  ]},
  { slug: 'flat-white', nameAr: 'فلات وايت أسترالي', nameEn: 'Flat White', desc: 'دبل ريستريتو مع حليب ميكروفوم حريري', sizes: [
    { id: 's', nameAr: 'حجم S (صغير)', nameEn: 'Small (S)', price: 80, volumeLabel: 'S', isDefault: true },
    { id: 'm', nameAr: 'حجم M (متوسط)', nameEn: 'Medium (M)', price: 100, volumeLabel: 'M' }
  ], isFeatured: true },
  { slug: 'americano', nameAr: 'أمريكانو ساخن', nameEn: 'Hot Americano', desc: 'إسبريسو ممدد بالماء الساخن لنكهة قهوة سوداء نقية', sizes: [
    { id: 's', nameAr: 'حجم S (صغير)', nameEn: 'Small (S)', price: 70, volumeLabel: 'S', isDefault: true },
    { id: 'm', nameAr: 'حجم M (متوسط)', nameEn: 'Medium (M)', price: 90, volumeLabel: 'M' }
  ]},
  { slug: 'cortado', nameAr: 'كورتادو إسباني', nameEn: 'Spanish Cortado', desc: 'نسبة متساوية تماماً 1:1 من الإسبريسو والحليب المبخر الدافئ', price: 70 },
  { slug: 'spanish-latte-hot', nameAr: 'إسبانيش لاتيه ساخن', nameEn: 'Hot Spanish Latte', desc: 'إسبريسو مع الحليب المكثف المحلى والحليب المبخر الفاخر', price: 125, isFeatured: true },
  { slug: 'hot-lotus-latte', nameAr: 'هوت لوتس لاتيه', nameEn: 'Hot Lotus Biscoff Latte', desc: 'لاتيه ساخن ممزوج بزبدة وبسكويت اللوتس المقرمش', price: 125 },
  { slug: 'salted-caramel-latte', nameAr: 'سولتد كاراميل لاتيه', nameEn: 'Salted Caramel Latte', desc: 'لاتيه دافئ بالكراميل المملح ونكهة غنية فاخرة', price: 125 },
  { slug: 'pistachio-latte-hot', nameAr: 'بيستاشيو لاتيه ساخن', nameEn: 'Hot Pistachio Latte', desc: 'إسبريسو مع صوص الفستق الحلبي الطبيعي والحليب المبخر', price: 135, isFeatured: true },
  { slug: 'hot-mocha', nameAr: 'موكا ساخنة', nameEn: 'Hot Caffè Mocha', desc: 'إسبريسو وشوكولاتة بلجيكية وحليب مبخر ساخن', price: 120 },
  { slug: 'hot-white-mocha', nameAr: 'وايت موكا ساخنة', nameEn: 'Hot White Chocolate Mocha', desc: 'إسبريسو مع الشوكولاتة البيضاء والحليب المبخر المخملي', price: 120 },
  { slug: 'hot-chocolate', nameAr: 'هوت شوكليت فاخر', nameEn: 'Rich Hot Chocolate', desc: 'شوكولاتة بالحليب غنية ومكثفة ودافئة', sizes: [
    { id: 's', nameAr: 'حجم S', nameEn: 'Small (S)', price: 80, volumeLabel: 'S', isDefault: true },
    { id: 'm', nameAr: 'حجم M', nameEn: 'Medium (M)', price: 100, volumeLabel: 'M' }
  ], isBestSeller: true },
  { slug: 'hot-apple-cider', nameAr: 'هوت أبل سيدر بالقرفة', nameEn: 'Hot Apple Cider Cinnamon', desc: 'عصير تفاح ساخن مع عيدان القرفة العطرية', price: 70 },
  { slug: 'black-tea', nameAr: 'شاي أحمر كلاسيك', nameEn: 'Classic Black Tea', desc: 'شاي أسود فاخر مخمر ومقدم ساخناً', price: 25 },
  { slug: 'green-tea', nameAr: 'شاي أخضر نقي', nameEn: 'Pure Green Tea', desc: 'أوراق الشاي الأخضر الطبيعي النقي والصحي', price: 25 },
  { slug: 'green-tea-mint', nameAr: 'شاي أخضر بالنعناع', nameEn: 'Green Tea with Fresh Mint', desc: 'شاي أخضر مع أوراق النعناع الفريش العطرة', price: 30 },
  { slug: 'tea-latte', nameAr: 'شاي لاتيه (كرك)', nameEn: 'Tea Latte Karak', desc: 'شاي أسود مغلي بالحليب الطبيعي والهيل بنكهة شرقية', price: 40 },
  { slug: 'turkish-coffee', nameAr: 'قهوة تركي على الريحة / مضبوط', nameEn: 'Turkish Coffee Single / Double', desc: 'بن تركي مطحون طازج ومطهو على الرمال الساخنة بوش كثيف', sizes: [
    { id: 's', nameAr: 'حجم S (سينجل)', nameEn: 'Single (S)', price: 40, volumeLabel: 'S', isDefault: true },
    { id: 'd', nameAr: 'حجم D (دبل)', nameEn: 'Double (D)', price: 55, volumeLabel: 'D' }
  ], isBestSeller: true },
  { slug: 'french-coffee', nameAr: 'قهوة فرنساوي باللبن', nameEn: 'French Coffee with Milk', desc: 'بن فاخر مع الحليب المبخر بنكهة فرنسية ناعمة', price: 60 },
  { slug: 'hazelnut-coffee', nameAr: 'قهوة بندق فواحة', nameEn: 'Hazelnut Infused Coffee', desc: 'قهوة غنية بنكهة البندق المحمص المطحون', price: 70 },
  { slug: 'caramel-coffee', nameAr: 'قهوة بالكراميل', nameEn: 'Caramel Infused Coffee', desc: 'قهوة تركية مع لمسة كراميل سكرية دافئة', price: 60 }
];

hotDrinkItems.forEach((item, idx) => {
  let sizes = [];
  if (item.sizes) {
    sizes = item.sizes.map(s => ({ ...s, availability: 'available', extractionStatus: 'verified' }));
  } else {
    sizes = singleSize(item.price, 'كوب ساخن قياسي', 'Standard Hot Cup');
  }

  products.push({
    id: `hd-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'hot-drinks',
    categoryNameAr: 'المشروبات الساخنة',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/brand/storefront-night.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['ساخن', 'قهوة', 'شاي', 'إسبريسو'],
    ingredientsAr: ['بن مميز / شاي', 'حليب حسب الطلب'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: item.nameAr.includes('بندق') || item.nameAr.includes('بيستاشيو'), containsDairy: item.nameAr.includes('لاتيه') || item.nameAr.includes('كابتشينو') || item.nameAr.includes('فرنساوي') || item.nameAr.includes('شوكليت') },
    verifiedFromAsset: 'raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 20. Cold Drinks
const coldDrinkItems = [
  { slug: 'iced-latte', nameAr: 'آيس لاتيه مثلج', nameEn: 'Iced Latte', desc: 'إسبريسو طازج مع حليب بارد وقطع ثلج لانتعاش الصباح', price: 100, isBestSeller: true },
  { slug: 'iced-pistachio-latte', nameAr: 'آيس بيستاشيو لاتيه رويال', nameEn: 'Iced Pistachio Latte Royal', desc: 'إسبريسو مع صوص الفستق الحلبي الإيطالي والحليب البارد والثلج', price: 140, isFeatured: true },
  { slug: 'iced-americano', nameAr: 'آيس أمريكانو', nameEn: 'Iced Americano', desc: 'شوت إسبريسو مزدوج مع الماء البارد ومكعبات الثلج', sizes: [
    { id: 's', nameAr: 'حجم S', nameEn: 'Small (S)', price: 70, volumeLabel: 'S', isDefault: true },
    { id: 'm', nameAr: 'حجم M', nameEn: 'Medium (M)', price: 90, volumeLabel: 'M' }
  ]},
  { slug: 'iced-lotus-latte', nameAr: 'آيس لوتس لاتيه', nameEn: 'Iced Lotus Biscoff Latte', desc: 'إسبريسو وزبدة اللوتس بالحليب البارد وبسكويت لوتس مقرمش', price: 130, isFeatured: true },
  { slug: 'iced-salted-caramel', nameAr: 'آيس سولتد كاراميل', nameEn: 'Iced Salted Caramel Latte', desc: 'إسبريسو بارد مع صوص الكراميل المملح والحليب المثلج', price: 125, isBestSeller: true },
  { slug: 'iced-caramel-latte', nameAr: 'آيس كاراميل لاتيه', nameEn: 'Iced Caramel Latte', desc: 'إسبريسو وحليب مثلج مع صوص الكراميل الذهبي الناعم', price: 125 },
  { slug: 'iced-mocha', nameAr: 'آيس موكا شوكولاتة', nameEn: 'Iced Caffè Mocha', desc: 'مزيج الإسبريسو والشوكولاتة بالحليب البارد والثلج', price: 130 },
  { slug: 'iced-white-mocha', nameAr: 'آيس وايت موكا', nameEn: 'Iced White Mocha', desc: 'شوكولاتة بيضاء ناعمة مع إسبريسو وحليب بارد ومكعبات ثلج', price: 130 }
];

coldDrinkItems.forEach((item, idx) => {
  let sizes = [];
  if (item.sizes) {
    sizes = item.sizes.map(s => ({ ...s, availability: 'available', extractionStatus: 'verified' }));
  } else {
    sizes = singleSize(item.price, 'كوب بارد مثلج', 'Iced Cup L');
  }

  products.push({
    id: `cd-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'cold-drinks',
    categoryNameAr: 'كولد درينك',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['مثلج', 'قهوة مثلجة', 'آيس لاتيه'],
    ingredientsAr: ['إسبريسو', 'حليب بارد', 'ثلج'],
    dietary: { isNatural: true, isSugarFreeAvailable: true, containsNuts: item.nameAr.includes('بيستاشيو'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 21. Soft Drinks
const softDrinkItems = [
  { slug: 'redbull-original', nameAr: 'ريد بول أصلي', nameEn: 'Red Bull Energy Drink', desc: 'عبوة مشروب الطاقة ريدبول الأصلية المنعشة مبردة ومثلجة', price: 85, isBestSeller: true },
  { slug: 'redbull-sugarfree', nameAr: 'ريد بول شوجر فري', nameEn: 'Red Bull Sugarfree', desc: 'ريد بول طاقة خالي تماماً من السكر والسعرات الحرارية', price: 110 },
  { slug: 'redbull-espresso-shot', nameAr: 'ريد بول إسبريسو شوت', nameEn: 'Red Bull Espresso Shot', desc: 'عبوة ريدبول مثلجة مع شوت إسبريسو إيطالي طازج لطاقة مضاعفة', price: 125, isFeatured: true },
  { slug: 'mojito-redbull-strawberry', nameAr: 'موخيتو ريد بول فراولة', nameEn: 'Red Bull Strawberry Mojito', desc: 'ريدبول فوار مع الفراولة والنعناع والليمون ومكعبات الثلج', price: 110, isBestSeller: true },
  { slug: 'mojito-redbull-peach', nameAr: 'موخيتو ريد بول خوخ', nameEn: 'Red Bull Peach Mojito', desc: 'ريدبول منعش مع نكهة الخوخ السكري وأوراق النعناع الفريش', price: 110 },
  { slug: 'mojito-redbull-kiwi', nameAr: 'موخيتو ريد بول كيوي', nameEn: 'Red Bull Kiwi Mojito', desc: 'ريدبول بنكهة الكيوي الحامضة والمنعشة مع الليمون', price: 110 },
  { slug: 'mojito-redbull-blueberry', nameAr: 'موخيتو ريد بول بلو بيري', nameEn: 'Red Bull Blueberry Mojito', desc: 'ريدبول ممزوج بالتوت الأزرق الملكي والثلج المجروش', price: 110, isFeatured: true }
];

softDrinkItems.forEach((item, idx) => {
  products.push({
    id: `sd-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'soft-drinks',
    categoryNameAr: 'سوفت درينك',
    basePrice: item.price,
    sizes: singleSize(item.price, 'عبوة / كأس مبرد', 'Chilled Serving'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['ريدبول', 'طاقة', 'غازي', 'موخيتو'],
    ingredientsAr: ['ريدبول', 'نعناع', 'ليمون'],
    dietary: { isNatural: false, isSugarFreeAvailable: item.slug.includes('sugarfree'), containsNuts: false, containsDairy: false },
    verifiedFromAsset: 'raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 22. Cold Frappe
const coldFrappeItems = [
  { slug: 'latte-frappe', nameAr: 'لاتيه فريبيه مثلج', nameEn: 'Classic Latte Frappe', desc: 'قهوة مثلجة مخفوقة بالكريمة والثلج المجروش بقوام كثيف', price: 140, isBestSeller: true },
  { slug: 'caramel-latte-frappe', nameAr: 'كاراميل لاتيه فريبيه', nameEn: 'Caramel Latte Frappe', desc: 'فريبيه اللاتيه مع صوص الكراميل الغني وكريمة مخفوقة', price: 150 },
  { slug: 'salted-caramel-latte-frappe', nameAr: 'سولتد كاراميل لاتيه فريبيه', nameEn: 'Salted Caramel Latte Frappe', desc: 'فريبيه بالكراميل المملح ونكهة غنية استثنائية', price: 150, isFeatured: true },
  { slug: 'chocolate-frappe', nameAr: 'شوكولات فريبيه غني', nameEn: 'Rich Chocolate Frappe', desc: 'فريبيه الشوكولاتة البلجيكية المثلج والمزين بصلصة الشوكولاتة', price: 135 },
  { slug: 'chocolate-latte-frappe', nameAr: 'شوكولات لاتيه فريبيه', nameEn: 'Chocolate Latte Frappe', desc: 'مزيج فاخر يجمع القهوة والشوكولاتة بالثلج المجروش والكريمة', price: 150 },
  { slug: 'oreo-frappe', nameAr: 'أوريو فريبيه كوكيز', nameEn: 'Oreo Cookies Frappe', desc: 'فريبيه الأوريو الأصلي مع فتات البسكويت المقرمش والكريمة', price: 120, isBestSeller: true },
  { slug: 'oreo-coffee-frappe', nameAr: 'أوريو كوفي فريبيه', nameEn: 'Oreo Coffee Mocha Frappe', desc: 'مزيج الأوريو مع شوت قهوة الإسبريسو والكريمة المخفوقة', price: 150 },
  { slug: 'express-frappe', nameAr: 'إكسبرس فريبيه كينج', nameEn: 'Express Signature Frappe', desc: 'فريبيه الإسبريسو المكثف الفاخر المخصص لعشاق القهوة المركزة', price: 160, isFeatured: true }
];

coldFrappeItems.forEach((item, idx) => {
  products.push({
    id: `cf-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'cold-frappe',
    categoryNameAr: 'كولد فريبيه',
    basePrice: item.price,
    sizes: singleSize(item.price, 'كأس فريبيه L', 'Frappe Cup L'),
    availableAddons: FRUITELLA_ADDONS,
    image: '/images/products/signature-four-drinks.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['فريبيه', 'مثلج', 'قهوة', 'كريمة'],
    ingredientsAr: ['إسبريسو', 'حليب', 'ثلج مجروش', 'كريمة'],
    dietary: { isNatural: false, isSugarFreeAvailable: false, containsNuts: false, containsDairy: true },
    verifiedFromAsset: 'raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// 23. Sweets from Fruitella
const sweetsItems = [
  { slug: 'nutella-waffle', nameAr: 'وافل نوتيلا بلجيكي', nameEn: 'Belgian Nutella Waffle', desc: 'وافل طازج مقرمش من الخارج وطري من الداخل مغطى بغزارة بالنوتيلا', price: 90, isBestSeller: true },
  { slug: 'lotus-waffle', nameAr: 'وافل لوتس مقرمش', nameEn: 'Lotus Biscoff Waffle', desc: 'وافل طازج بصلصة وبسكويت اللوتس المقرمش والكراميل', price: 90 },
  { slug: 'white-chocolate-waffle', nameAr: 'وافل وايت شوكليت', nameEn: 'White Chocolate Waffle', desc: 'وافل بلجيكي مغطى بالشوكولاتة البيضاء السويسرية الناعمة', price: 95 },
  { slug: 'waffle-icecream', nameAr: 'وافل نوتيلا أو لوتس بالآيس كريم', nameEn: 'Waffle Nutella/Lotus with Ice Cream', desc: 'وافل ساخن مغطى بالنوتيلا أو اللوتس مع بولة آيس كريم فانيليا باردة', price: 105, isFeatured: true },
  { slug: 'fruit-waffle', nameAr: 'وافل فواكه قطع وشوكولاتة', nameEn: 'Fresh Fruits Waffle', desc: 'وافل طازج مزين بقطع الفراولة والمانجو والموز والشوكولاتة', price: 120, isFeatured: true },
  { slug: 'mini-pancake', nameAr: 'ميني بان كيك فروتيلا', nameEn: 'Fruitella Mini Pancakes', desc: 'حبات ميني بان كيك هشة وذهبية مخبوزة طازجة مع اختيارك من الصوصات', sizes: [
    { id: '12pcs', nameAr: '12 قطعة', nameEn: '12 Pieces', price: 60, isDefault: true, availability: 'available', extractionStatus: 'verified' },
    { id: '24pcs', nameAr: '24 قطعة', nameEn: '24 Pieces', price: 110, availability: 'available', extractionStatus: 'verified' }
  ], isBestSeller: true },
  { slug: 'molten-cake', nameAr: 'مولتن كيك الشوكولاتة الذائبة', nameEn: 'Lava Molten Cake', desc: 'كيك الشوكولاتة الساخن بقلب الشوكولاتة الذائبة السائلة مع بولة آيس كريم', price: 85, isFeatured: true },
  { slug: 'despacito-cake', nameAr: 'كيك ديسباسيتو البرازيلي', nameEn: 'Despacito Chocolate Cake', desc: 'كيكة شوكولاتة غنية مشربة بموس الشوكولاتة والجاناش الفاخر', price: 85 },
  { slug: 'crepe-nutella-lotus', nameAr: 'كريب نوتيلا أو لوتس', nameEn: 'Nutella or Lotus Crepe', desc: 'كريب فرنسي رقيق محشو ومغطى بالنوتيلا أو اللوتس', price: 50 },
  { slug: 'kashtouta-nutella', nameAr: 'قشطوطة نوتيلا فاخرة', nameEn: 'Nutella Kashtouta', desc: 'كيكة الحليب والقشطة الغنية المسقية بالكراميل والشوكولاتة نوتيلا', price: 75, isBestSeller: true },
  { slug: 'kashtouta-lotus', nameAr: 'قشطوطة لوتس', nameEn: 'Lotus Kashtouta', desc: 'قشطوطة كيك الحليب بصلصة وبسكويت اللوتس المقرمش', price: 80 },
  { slug: 'kashtouta-pistachio', nameAr: 'قشطوطة بيستاشيو ملكية', nameEn: 'Royal Pistachio Kashtouta', desc: 'قشطوطة غنية بكريمة الفستق الحلبي الأصلي وقطع الفستق المحمص', price: 110, isFeatured: true },
  { slug: 'kashtouta-nutella-oreo', nameAr: 'قشطوطة نوتيلا وأوريو', nameEn: 'Nutella & Oreo Kashtouta', desc: 'مزيج القشطوطة مع شوكولاتة النوتيلا وبسكويت الأوريو المقرمش', price: 90 },
  { slug: 'kashtouta-nuts', nameAr: 'قشطوطة مكسرات محمصة', nameEn: 'Mixed Nuts Kashtouta', desc: 'قشطوطة الحليب والقشطة مغطاة بتشكيلة غنية من المكسرات المحمصة', price: 110 },
  { slug: 'kashtouta-mango', nameAr: 'قشطوطة مانجو قطع', nameEn: 'Fresh Mango Kashtouta', desc: 'قشطوطة مغطاة بقطع مانجو طبيعية فريش وصوص المانجو النقي', price: 90, isBestSeller: true },
  { slug: 'kashtouta-fruits', nameAr: 'قشطوطة فواكه مشكلة', nameEn: 'Mixed Fruit Kashtouta', desc: 'قشطوطة طازجة مزينة بمكعبات الفواكه الموسمية والعسل', price: 90 },
  { slug: 'rice-pudding-plain', nameAr: 'أرز باللبن سادة كلاسيك', nameEn: 'Classic Plain Rice Pudding', desc: 'أرز باللبن بلدي بوش مكشكش غني ومحضر على الطريقة الأصيلة', price: 35 },
  { slug: 'rice-pudding-oven', nameAr: 'أرز باللبن فرن محمر', nameEn: 'Baked Oven Rice Pudding', desc: 'طاجن أرز باللبن مخبوز في الفرن بوش ذهبي مكرمل شهي', price: 35, isBestSeller: true },
  { slug: 'om-ali-pot', nameAr: 'طاجن أم علي بلدي بالسمن واللبن', nameEn: 'Traditional Om Ali Hot Pot', desc: 'رقاق مخبوز بالحليب الطبيعي والقشطة والمكسرات مقدم ساخناً من الفرن', price: 35, isFeatured: true },
  { slug: 'rice-pudding-nutella', nameAr: 'أرز باللبن بالنوتيلا', nameEn: 'Rice Pudding with Nutella', desc: 'أرز باللبن مضاف إليه طبقة سخية من شوكولاتة النوتيلا الذائبة', price: 70 },
  { slug: 'rice-pudding-lotus', nameAr: 'أرز باللبن باللوتس', nameEn: 'Rice Pudding with Lotus', desc: 'أرز باللبن بكريمة وبسكويت اللوتس البلجيكي', price: 70 },
  { slug: 'rice-pudding-nuts', nameAr: 'أرز باللبن بالمكسرات الفاخرة', nameEn: 'Rice Pudding with Premium Nuts', desc: 'أرز باللبن غني بالكاجو واللوز والبندق المحمص والزبيب وجوز الهند', price: 85, isBestSeller: true },
  { slug: 'rice-pudding-mango', nameAr: 'أرز باللبن مانجو قطع', nameEn: 'Rice Pudding with Mango Chunks', desc: 'أرز باللبن مثلج مغطى بقطع مانجو كيت فريش وصوص المانجو', price: 80, isFeatured: true }
];

sweetsItems.forEach((item, idx) => {
  let sizes = [];
  if (item.sizes) {
    sizes = item.sizes.map(s => ({ ...s, availability: 'available', extractionStatus: 'verified' }));
  } else {
    sizes = singleSize(item.price, 'حصة حلويات قياسية', 'Dessert Portion');
  }

  products.push({
    id: `sw-${idx + 1}`,
    slug: item.slug,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    descriptionAr: item.desc,
    categorySlug: 'sweets-desserts',
    categoryNameAr: 'الحلو من فروتيلا',
    basePrice: sizes[0].price,
    sizes: sizes,
    availableAddons: FRUITELLA_ADDONS,
    image: item.slug.includes('waffle') ? '/images/products/fruitella-signature-waffle.jpg' :
           item.slug.includes('kashtouta') ? '/images/products/kashtouta.jpg' :
           item.slug.includes('molten') ? '/images/products/molten-cake.jpg' :
           item.slug.includes('om-ali') ? '/images/products/om-ali.jpg' :
           item.slug.includes('rice-pudding') ? '/images/products/rice-pudding.jpg' :
           '/images/menu/desserts-grid.jpg',
    isFeatured: item.isFeatured,
    isBestSeller: item.isBestSeller,
    tags: ['حلويات', 'وافل', 'قشطوطة', 'أرز باللبن', 'نوتيلا'],
    ingredientsAr: ['حليب بلدي', 'سكر', 'قشطة', 'شوكولاتة / مكسرات'],
    dietary: { isNatural: false, isSugarFreeAvailable: false, containsNuts: item.nameAr.includes('مكسرات') || item.nameAr.includes('بيستاشيو') || item.nameAr.includes('نوتيلا'), containsDairy: true },
    verifiedFromAsset: 'raw_assets/844838847_122230951712500364_198089585914876509_n.jpg',
    extractionStatus: 'verified',
    availability: 'available'
  });
});

// Update category item counts
categories.forEach(cat => {
  cat.itemCount = products.filter(p => p.categorySlug === cat.slug).length;
});

console.log(`Generated ${categories.length} categories and ${products.length} products.`);

// Generate the TypeScript file content
const output = `import { Product, ProductCategory, ProductAddon } from '../models/product.model';

export const FRUITELLA_ADDONS: ProductAddon[] = ${JSON.stringify(FRUITELLA_ADDONS, null, 2)};

export const FRUITELLA_CATEGORIES: ProductCategory[] = ${JSON.stringify(categories, null, 2)};

export const FRUITELLA_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};
`;

const targetPath = path.join(__dirname, '../src/app/core/data/fruitella-menu.data.ts');
fs.writeFileSync(targetPath, output, 'utf8');
console.log('Successfully written to:', targetPath);
