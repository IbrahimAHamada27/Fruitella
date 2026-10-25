import { ProductCategory, Product, ProductAddon } from '../models/product.model';

export const FRUITELLA_CATEGORIES: ProductCategory[] = [
  {
    "id": "fresh-juices",
    "slug": "fresh-juices",
    "nameAr": "عصائر فريش",
    "nameEn": "Fresh Natural Juices",
    "descriptionAr": "عصائر طبيعية 100% معصورة طازجة يومياً بدون أي إضافات أو ألوان صناعية",
    "icon": "fa-solid fa-glass-water",
    "themeColor": "#15803d",
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "displayOrder": 1,
    "informationAr": [
      "اختار الحجم المتاح للصنف قبل إضافته للسلة؛ مش كل العصائر متوفرة بكل الأحجام (L، لتر، 4 لتر).",
      "لو بتفضّل طعم فاكهة واحدة، ابدأ بالعصائر المفردة، ولو بتحب خلط النكهات راجع قسم الميكسات.",
      "جميع العصائر فريش وطبيعية بالكامل بدون أي مواد حافظة أو ألوان صناعية."
    ],
    "itemCount": 22
  },
  {
    "id": "oriental-juices",
    "slug": "oriental-juices",
    "nameAr": "عصائر شرقية",
    "nameEn": "Oriental Juices",
    "descriptionAr": "قصب طبيعي، دوم، خروب، تمر هندي وعناب محضر بالطرق التراثية الأصيلة",
    "icon": "fa-solid fa-seedling",
    "themeColor": "#b45309",
    "image": "/images/brand/fruitella-logo.jpg",
    "displayOrder": 2,
    "informationAr": [
      "قسم العصائر الشرقية بيضم خيارات مختلفة عن عصائر الفاكهة المعتادة، زي القصب والدوم والخروب والعناب.",
      "راجع الحجم قبل الطلب؛ عبوة اللتر وعبوة 4 لتر مش متاحتين لكل الأصناف.",
      "إضافات زي اللبن أو البرتقال أو الزنجبيل تُختار فقط للأصناف اللي المنيو بيعرضها فعلًا."
    ],
    "itemCount": 14
  },
  {
    "id": "sobya-world",
    "slug": "sobya-world",
    "nameAr": "عالم السوبيا",
    "nameEn": "Sobya World",
    "descriptionAr": "سوبيا مثلجة وممزوجة بأشهى النكهات من المانجو واللوتس والنوتيلا والبيستاشيو",
    "icon": "fa-solid fa-droplet",
    "themeColor": "#0284c7",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 3,
    "informationAr": [
      "السوبيا الطبيعي هو الاختيار الأساسي، وباقي الأصناف بتقدم نكهات متنوعة حسب القائمة.",
      "لو بتختار بناءً على مكون معين، خصوصًا اللبن أو المكسرات أو الشوكولاتة، تأكد من المكونات مع المكان قبل الطلب.",
      "تتوفر أحجام L ولتر و4 لتر للسوبيا الطبيعي لتناسب التجمعات العائلية."
    ],
    "itemCount": 9
  },
  {
    "id": "mango-world",
    "slug": "mango-world",
    "nameAr": "عالم المانجو",
    "nameEn": "Mango World",
    "descriptionAr": "عصائر مانجو طازجة ومثلجة وبول آيس كريم وقطع مانجو مانش استوائية",
    "icon": "fa-solid fa-sun",
    "themeColor": "#ea580c",
    "image": "/images/products/mango-chunks-bowl.jpg",
    "displayOrder": 4,
    "informationAr": [
      "تقدر تقارن بين المانجو لوحدها والخلطات اللي فيها فواكه أخرى كالفراولة والأناناس والكيوي.",
      "المانجو بالآيس كريم والمانجو مع اللبن اختيارات مختلفة عن العصير الأساسي؛ راجع اسم الصنف والمكونات قبل الطلب.",
      "الأحجام الكبيرة متاحة لبعض المنتجات فقط، حسب جدول الأسعار المعتمد."
    ],
    "itemCount": 13
  },
  {
    "id": "smoothie-world",
    "slug": "smoothie-world",
    "nameAr": "عالم السموذي",
    "nameEn": "Smoothie World",
    "descriptionAr": "سموذي مثلج وغني بالفواكه الطبيعية المجروشة لانتعاش فوري",
    "icon": "fa-solid fa-blender",
    "themeColor": "#0369a1",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 5,
    "informationAr": [
      "كل الأسعار الظاهرة في هذه الصفحة مرتبطة بحجم L المنعش.",
      "لو محتار بين السموذي والعصير، يتميز السموذي بقوامه الكثيف المثلج والمجروش.",
      "نكهات الفواكه مستخلصة من ثمار فريش طبيعية لضمان النكهة المركزة."
    ],
    "itemCount": 7
  },
  {
    "id": "energy-world",
    "slug": "energy-world",
    "nameAr": "عالم الطاقة",
    "nameEn": "Energy World",
    "descriptionAr": "خلطات البنجر والجرجير والكيوي والفيتامينات الطبيعية المقوية للنشاط",
    "icon": "fa-solid fa-bolt",
    "themeColor": "#be123c",
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "displayOrder": 6,
    "informationAr": [
      "القسم بيضم خلطات فواكه ومكونات طبيعية متنوعة، مش مشروبات طاقة معلبة فقط.",
      "راجع المكونات المكتوبة للصنف قبل الطلب؛ اسم الميكس يعبر عن تركيبته الحقيقية.",
      "وصف «فيتامين سي» اسم للصنف في المنيو، يعبر عن خلطة غنية بالفواكه الحمضية الطبيعية."
    ],
    "itemCount": 10
  },
  {
    "id": "fruit-salad",
    "slug": "fruit-salad",
    "nameAr": "فروت سالاد فروتيلا",
    "nameEn": "Fruit Salad & Cups",
    "descriptionAr": "قطع فواكه طازجة، كوكتيلات، قنبلة فروتيلا وسلطات الفواكه بالآيس كريم",
    "icon": "fa-solid fa-bowl-food",
    "themeColor": "#059669",
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "displayOrder": 7,
    "informationAr": [
      "بعض أصناف الفاكهة الطازجة بتكون موسمية؛ تأكد من توافر الصنف قبل الطلب.",
      "الأصناف اللي فيها آيس كريم أو إضافات خاصة تختلف عن سلطة الفواكه الأساسية.",
      "قطع الفواكه المشكلة وقنبلة فروتيلا تقدم فريش ومقطعة عند الطلب مباشرة."
    ],
    "itemCount": 12
  },
  {
    "id": "boba-fruitella",
    "slug": "boba-fruitella",
    "nameAr": "بوبا فروتيلا",
    "nameEn": "Boba Fruitella",
    "descriptionAr": "مشروبات البوبا بحبيبات البوبا اللذيذة بنكهات الميلك شيك والموهيتو المنعش",
    "icon": "fa-solid fa-circle-dot",
    "themeColor": "#7c3aed",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 8,
    "informationAr": [
      "اختار نكهة البوبا حسب ذوقك: ميلك شيك كريمي، قهوة، أو موخيتو فوار ومنعش.",
      "أسعار هذه المجموعة ظاهرة بحجم موحد معتمد في المنيو.",
      "حبيبات البوبا اللذيذة تمنحك إحساساً ممتعاً بالمضغ مع كل رشفة."
    ],
    "itemCount": 10
  },
  {
    "id": "chocolate-lovers",
    "slug": "chocolate-lovers",
    "nameAr": "عشاق الشوكولاتة",
    "nameEn": "Chocolate Lovers",
    "descriptionAr": "مشروبات الأوريو، الجلاكسي، الكندر، والمارس وميكسات الشوكولاتة السوبر",
    "icon": "fa-solid fa-cookie-bite",
    "themeColor": "#451a03",
    "image": "/images/products/kashtouta.jpg",
    "displayOrder": 9,
    "informationAr": [
      "المنتجات بتختلف حسب نوع الشوكولاتة أو البسكويت المستخدم (أوريو، كيت كات، كيندر، مارس، جلاكسي).",
      "الأصناف اللي اسمها «سوبر» أو «تريبل» لها سعر ومقدار مضاعف من المكونات اللذيذة.",
      "لو عندك حساسية من المكسرات أو اللبن، اسأل عن المكونات الفعلية قبل الطلب."
    ],
    "itemCount": 18
  },
  {
    "id": "nuts-yogurt",
    "slug": "nuts-yogurt",
    "nameAr": "عالم المكسرات والزبادي",
    "nameEn": "Nuts & Yogurt World",
    "descriptionAr": "مشروبات الكاجو واللوز والبندق مع الفانيليا أو الشوكولاتة، وزبادي العسل والفواكه",
    "icon": "fa-solid fa-spoon",
    "themeColor": "#92400e",
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "displayOrder": 10,
    "informationAr": [
      "قسم المكسرات مناسب للي بيفضل نكهات البندق واللوز والكاجو وجوز الهند مع الحليب.",
      "مشروبات الزبادي تجمع بين الزبادي الطبيعي والفواكه الطازجة أو عسل النحل الصافي.",
      "الأسعار والأحجام في القسمين منفصلة ومحددة بدقة بالجنيه المصري."
    ],
    "itemCount": 11
  },
  {
    "id": "milkshakes",
    "slug": "milkshakes",
    "nameAr": "عالم الميلك شيك",
    "nameEn": "The World of Milkshakes",
    "descriptionAr": "ميلك شيك كريمي كثيف بالأوريو واللوتس والنوتيلا والبيستاشيو والسيريلاك",
    "icon": "fa-solid fa-martini-glass",
    "themeColor": "#be185d",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 11,
    "informationAr": [
      "الأسعار بتختلف حسب النكهة والحجم (كاس L الفردي وعبوة Liter للمشاركة).",
      "بعض النكهات مرتبطة بالشوكولاتة أو المكسرات أو البسكويت؛ راجع المكونات قبل الطلب.",
      "حجم اللتر مناسب للمشاركة، بينما كاس L مثالي للاستمتاع الفردي."
    ],
    "itemCount": 17
  },
  {
    "id": "power-fruitella",
    "slug": "power-fruitella",
    "nameAr": "باور فروتيلا",
    "nameEn": "Power Fruitella",
    "descriptionAr": "خلطات الأفوكادو الملكية، المكسرات المحمصة، العسل الجبلي، الحلاوة والبلح",
    "icon": "fa-solid fa-crown",
    "themeColor": "#166534",
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "displayOrder": 12,
    "informationAr": [
      "اختار بين الأفوكادو الأساسي والخلطات اللي فيها مكسرات أو فواكه أو زبادي أو عسل.",
      "المكونات المذكورة تحت كل اسم توضح تركيبة الخلطة (عسل، حلاوة طحينية، بلح، مكسرات).",
      "لو بتتجنب المكسرات أو منتجات الألبان، اسأل عن المكونات والتحضير قبل الطلب."
    ],
    "itemCount": 14
  },
  {
    "id": "forest-feedings",
    "slug": "forest-feedings",
    "nameAr": "رضعات الغابة",
    "nameEn": "Forest Feedings",
    "descriptionAr": "تشكيلة الرضعات الشهيرة القائمة على قاعدة السوبيا المخفوقة بالفواكه والفانيليا",
    "icon": "fa-solid fa-paw",
    "themeColor": "#854d0e",
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "displayOrder": 13,
    "informationAr": [
      "أسماء الرضعات مرتبطة بخلطات مختلفة بقاعدة السوبيا، فاختار بناءً على المكونات وليس الاسم فقط.",
      "سعر جميع أصناف الرضعات موحد (80 ج.م) للحجم المطبوع في المنيو.",
      "مزيج السوبيا بالفواكه أو الشوكولاتة يمنحها قواماً حلواً ودسماً مميزاً."
    ],
    "itemCount": 7
  },
  {
    "id": "fruitella-mixes",
    "slug": "fruitella-mixes",
    "nameAr": "ميكسات فروتيلا",
    "nameEn": "Fruitella Signature Mixes",
    "descriptionAr": "خلطات الكوكتيل الكرتونية والشهيرة مثل بطوط، سبونج بوب، أبو تريكة، وبينا كولادا",
    "icon": "fa-solid fa-wand-magic-sparkles",
    "themeColor": "#d97706",
    "image": "/images/products/fruit-salad-icecream.jpg",
    "displayOrder": 14,
    "informationAr": [
      "الميكسات بتختلف في تركيبة الفواكه والإضافات، لذلك راجع وصف ومكونات كل صنف.",
      "الأسعار مقسمة إلى كاس L وعبوة Liter في المنيو؛ اختار الحجم المناسب لرغبتك.",
      "يمكنك اختيار درجة الخفق (ضرب كامل ناعم أو نص ضربة قطع فواكه ملموسة)."
    ],
    "itemCount": 15
  },
  {
    "id": "ice-cream",
    "slug": "ice-cream",
    "nameAr": "عالم الآيس كريم",
    "nameEn": "Ice Cream World",
    "descriptionAr": "بولات آيس كريم طبيعي، فتة آيس كريم، الديناصور وعرايسي فروتيلا",
    "icon": "fa-solid fa-ice-cream",
    "themeColor": "#e11d48",
    "image": "/images/products/fruit-salad-icecream.jpg",
    "displayOrder": 15,
    "informationAr": [
      "حدد عدد البولات (أبولة، 2 أبولة، 3 أبولة) حسب الحصة المطلوبة.",
      "أطباق «فتة آيس كريم» و«الديناصور» هي أطباق حلويات مركبة غنية بالصلصات والفواكه.",
      "يحضر الآيس كريم من مكونات طبيعية فريش بنكهات الفواكه والشوكولاتة الأصلية."
    ],
    "itemCount": 7
  },
  {
    "id": "mojito-world",
    "slug": "mojito-world",
    "nameAr": "عالم الموخيتو",
    "nameEn": "Mojito World",
    "descriptionAr": "موخيتو منعش بالصودا الفوارة، النعناع الفريش، والليمون مع أشهى الفواكه",
    "icon": "fa-solid fa-martini-glass-citrus",
    "themeColor": "#0d9488",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 16,
    "informationAr": [
      "القسم بيقدم نكهات مختلفة من الموخيتو بالليمون والنعناع الفريش مع الصودا المنعشة.",
      "الأسعار الظاهرة تخص الحجم المنعش الواحد المذكور في المنيو.",
      "جرب موخيتو التوت الأزرق، التفاح الأخضر، أو موخيتو جيلي كولا المميز."
    ],
    "itemCount": 8
  },
  {
    "id": "fruitella-diet",
    "slug": "fruitella-diet",
    "nameAr": "دايت فروتيلا",
    "nameEn": "Fruitella Diet",
    "descriptionAr": "عصائر طبيعية خفيفة مخصصة للرشاقة واللياقة بدون سكر مضاف",
    "icon": "fa-solid fa-heart-pulse",
    "themeColor": "#15803d",
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "displayOrder": 17,
    "informationAr": [
      "أسماء المنتجات في هذا القسم كما تظهر في المنيو (الرشاقة، فتنس، راني، جرين، فرساوي).",
      "لو بتتبع نظامًا غذائيًا محددًا، يمكنك طلب العصير بدون سكر أو بسكر دايت ستيفيا مجاناً.",
      "العصائر محضرة من فواكه طبيعية نقية بدون أي محليات صناعية ضارة."
    ],
    "itemCount": 7
  },
  {
    "id": "family-packs",
    "slug": "family-packs",
    "nameAr": "العبوات العائلية",
    "nameEn": "Family Packs",
    "descriptionAr": "عبوات عائلية اقتصادية بحجم لتر و4 لتر للمناسبات والجمعات العائلية",
    "icon": "fa-solid fa-boxes-stacked",
    "themeColor": "#047857",
    "image": "/images/brand/fruitella-logo.jpg",
    "displayOrder": 18,
    "informationAr": [
      "العبوات العائلية مخصصة للأحجام الكبيرة (لتر أو 4 لتر) لتوفير اقتصادي ومثالي للمجموعات.",
      "السعر يتحدد حسب الصنف والحجم المتاح، وليس كل الأصناف لها خيار 4 لتر.",
      "تعبأ العبوات بإحكام فوري لضمان بقائها طازجة وباردة حتى وصولها إليك."
    ],
    "itemCount": 30
  },
  {
    "id": "hot-drinks",
    "slug": "hot-drinks",
    "nameAr": "المشروبات الساخنة",
    "nameEn": "Hot Drinks & Coffee",
    "descriptionAr": "إسبريسو، كابتشينو، فلات وايت، لاتيه، هوت شوكليت، قهوة تركي وفرنساوي وشاي",
    "icon": "fa-solid fa-mug-hot",
    "themeColor": "#78350f",
    "image": "/images/brand/fruitella-logo.jpg",
    "displayOrder": 19,
    "informationAr": [
      "اختار حجم المشروب حسب الرموز المطبوعة في المنيو (S للحجم الصغير، D للدبل، M للمتوسط).",
      "اللاتيه والكابتشينو والمشروبات بالشوكولاتة تحضر بالحليب الطبيعي الطازج.",
      "الإضافات والنكهات الإضافية (كراميل، فانيليا، بندق) متوفرة في قسم إضافة فليفر."
    ],
    "itemCount": 24
  },
  {
    "id": "cold-drinks",
    "slug": "cold-drinks",
    "nameAr": "كولد درينك",
    "nameEn": "Cold Coffee & Drinks",
    "descriptionAr": "آيس لاتيه، آيس بيستاشيو، آيس أمريكانو، وسولتد كراميل مثلج",
    "icon": "fa-solid fa-snowflake",
    "themeColor": "#0369a1",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 20,
    "informationAr": [
      "القسم مخصص للقهوة المثلجة المنعشة المحضرة بالإسبريسو والثلج والحليب البارد.",
      "تتنوع النكهات من الكلاسيك كالأمريكانو واللاتيه إلى نكهات البيستاشيو واللوتس والسولتد كراميل.",
      "لو هتضيف نكهة سيرب، راجع قسم إضافة فليفر المتاح بصفحة المنتج."
    ],
    "itemCount": 8
  },
  {
    "id": "soft-drinks",
    "slug": "soft-drinks",
    "nameAr": "سوفت درينك",
    "nameEn": "Soft Drinks & Energy",
    "descriptionAr": "عبوات ريدبول المنعشة وموخيتو الريدبول بنكهات الفراولة، الخوخ، البلوبيري والكيوي",
    "icon": "fa-solid fa-bottle-water",
    "themeColor": "#1e3a8a",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 21,
    "informationAr": [
      "يضم القسم مشروبات طاقة ريدبول الأصلية والشوجر فري وموخيتو الريدبول بنكهات الفواكه.",
      "موخيتو الريدبول يجمع بين عبوة الطاقة وقطع الليمون والنعناع وسيرب الفاكهة الطبيعي.",
      "تقدم المشروبات مثلجة وباردة لأقصى درجات الانتعاش."
    ],
    "itemCount": 7
  },
  {
    "id": "cold-frappe",
    "slug": "cold-frappe",
    "nameAr": "كولد فريبيه",
    "nameEn": "Cold Frappe",
    "descriptionAr": "فريبيه مثلج بالكراميل، الشوكولاتة، الأوريو، وسولتد كراميل مع الكريمة المخفوقة",
    "icon": "fa-solid fa-cloud",
    "themeColor": "#9a3412",
    "image": "/images/products/signature-four-drinks.jpg",
    "displayOrder": 22,
    "informationAr": [
      "القسم يجمع مشروبات الفريبيه المثلجة والمخفوقة بالقهوة والشوكولاتة والكراميل.",
      "تتميز الفريبيه بالقوام السميك والمثلج المزين بصلصات الشوكولاتة والكراميل الفاخرة.",
      "كل صنف مستقل بوصفته ونكهته الخاصة الموضحة في تفاصيل المنتج."
    ],
    "itemCount": 8
  },
  {
    "id": "sweets-desserts",
    "slug": "sweets-desserts",
    "nameAr": "الحلو من فروتيلا",
    "nameEn": "Sweets & Desserts",
    "descriptionAr": "وافل، ميني بان كيك، قشطوطة، مولتن كيك، ديسباسيتو، طواجن أم علي وأرز باللبن",
    "icon": "fa-solid fa-cake-candles",
    "themeColor": "#c026d3",
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "displayOrder": 23,
    "informationAr": [
      "راجع عدد القطع في الميني بان كيك قبل الطلب (12 قطعة أو 24 قطعة) لأن الحجم يحدد السعر.",
      "الأصناف اللي فيها نوتيلا أو لوتس أو بيستاشيو أو فواكه تختلف في السعر عن النسخ الأساسية.",
      "تخبز الحلويات وتجهز طازجة عند الطلب لضمان القرمشة والطراوة المثالية."
    ],
    "itemCount": 23
  }
];

export const FRUITELLA_PRODUCTS: Product[] = [
  {
    "id": "fj-1",
    "slug": "orange-juice",
    "nameAr": "عصير برتقال فريش",
    "nameEn": "Fresh Orange Juice",
    "descriptionAr": "برتقال طبيعي معصور طازج يومياً غني بفيتامين سي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 350,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "برتقال فريش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-2",
    "slug": "strawberry-juice",
    "nameAr": "عصير فراولة طبيعي",
    "nameEn": "Fresh Strawberry Juice",
    "descriptionAr": "فراولة بلدي طازجة معصورة بقوام طبيعي منعش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 95,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 350,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "فراولة طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-3",
    "slug": "guava-juice",
    "nameAr": "عصير جوافة بيور",
    "nameEn": "Pure Guava Juice",
    "descriptionAr": "جوافة طبيعية 100% غنية ومخفوقة عند الطلب",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 85,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 310,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "جوافة بيور"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-4",
    "slug": "guava-milk",
    "nameAr": "جوافة باللبن الطبيعي",
    "nameEn": "Guava with Fresh Milk",
    "descriptionAr": "جوافة طازجة مخفوقة بالحليب الطبيعي كامل الدسم",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 55,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 55,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 100,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "جوافة باللبن الطبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-5",
    "slug": "lemon-juice",
    "nameAr": "عصير ليمون فريش",
    "nameEn": "Fresh Lemon Juice",
    "descriptionAr": "عصير ليمون بلدي منعش ومحلى بنعومة",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "ليمون فريش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-6",
    "slug": "lemon-mint-juice",
    "nameAr": "ليمون نعناع مثلج",
    "nameEn": "Lemon Mint Juice",
    "descriptionAr": "ليمون ونعناع أخضر فريش مخفوق مع الثلج المجروش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 60,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": true,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "ليمون نعناع مثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-7",
    "slug": "lemon-milk",
    "nameAr": "ليمون باللبن",
    "nameEn": "Lemon with Milk",
    "descriptionAr": "مزيج كريمي منعش يجمع حموضة الليمون مع نعومة الحليب",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "ليمون باللبن"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-8",
    "slug": "watermelon-juice",
    "nameAr": "عصير بطيخ أحمر",
    "nameEn": "Fresh Watermelon Juice",
    "descriptionAr": "بطيخ أحمر سكري معصور ومثلج بدون ماء مضاف",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "بطيخ أحمر"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-9",
    "slug": "watermelon-mint",
    "nameAr": "بطيخ بالنعناع",
    "nameEn": "Watermelon with Mint",
    "descriptionAr": "بطيخ طازج ممزوج بأوراق النعناع الفريش المنعشة",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 55,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 55,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 100,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "بطيخ بالنعناع"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-10",
    "slug": "watermelon-strawberry-mint",
    "nameAr": "بطيخ فراولة نعناع",
    "nameEn": "Watermelon Strawberry Mint",
    "descriptionAr": "توليفة ثلاثية منعشة من البطيخ والفراولة والنعناع",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 60,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "بطيخ فراولة نعناع"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-11",
    "slug": "dates-milk",
    "nameAr": "بلح باللبن الطبيعي",
    "nameEn": "Dates with Fresh Milk",
    "descriptionAr": "تمر طازج مخفوق بالحليب الطبيعي المغذي والمشبع",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 55,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 55,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 100,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "بلح باللبن الطبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-12",
    "slug": "banana-milk",
    "nameAr": "موز باللبن",
    "nameEn": "Banana with Milk",
    "descriptionAr": "موز بلدي طازج مخفوق بالحليب الطبيعي البارد",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 50,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 95,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "موز باللبن"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-13",
    "slug": "strawberry-milk",
    "nameAr": "فراولة باللبن",
    "nameEn": "Strawberry with Milk",
    "descriptionAr": "فراولة طازجة مخفوقة بالحليب بنكهة كريمية مخملية",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 60,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "فراولة باللبن"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-14",
    "slug": "cantaloupe-juice",
    "nameAr": "عصير كانتالوب",
    "nameEn": "Fresh Cantaloupe Juice",
    "descriptionAr": "كانتالوب طبيعي طازج وبارد بقوام خفيف ومنعش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 85,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "كانتالوب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-15",
    "slug": "pomegranate-juice",
    "nameAr": "عصير رمان فريش",
    "nameEn": "Fresh Pomegranate Juice",
    "descriptionAr": "حب رمان طازج معصور بلونه الياقوتي الغني بمضادات الأكسدة",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 60,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "رمان فريش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-16",
    "slug": "kiwi-juice",
    "nameAr": "عصير كيوي طبيعي",
    "nameEn": "Fresh Kiwi Juice",
    "descriptionAr": "كيوي طبيعي معصور بقوام غني ومنعش",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 180,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 180,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "كيوي طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-17",
    "slug": "apple-juice",
    "nameAr": "عصير تفاح فريش",
    "nameEn": "Fresh Apple Juice",
    "descriptionAr": "عصير تفاح طبيعي معصور طازج بدون سكر مضاف",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 130,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "تفاح فريش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-18",
    "slug": "pineapple-juice",
    "nameAr": "عصير أناناس طبيعي",
    "nameEn": "Fresh Pineapple Juice",
    "descriptionAr": "أناناس طبيعي معصور بنكهة استوائية مركزة",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 210,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 210,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "أناناس طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fj-19",
    "slug": "grapes-juice",
    "nameAr": "عصير عنب موسمي",
    "nameEn": "Seasonal Grapes Juice",
    "descriptionAr": "عصير عنب طبيعي متوفر في موسم حصاده الصيفي",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 120,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 120,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "عنب موسمي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "fj-20",
    "slug": "peach-juice",
    "nameAr": "عصير خوخ فريش",
    "nameEn": "Fresh Peach Juice",
    "descriptionAr": "خوخ طبيعي بيور متوفر في موسم الصيف",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 130,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "خوخ فريش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "fj-21",
    "slug": "plum-juice",
    "nameAr": "عصير برقوق",
    "nameEn": "Fresh Plum Juice",
    "descriptionAr": "برقوق طبيعي بنكهة حامضة حلوة متوفر في موسمه",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 130,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "برقوق"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "fj-22",
    "slug": "prickly-pear-juice",
    "nameAr": "عصير تين شوكي",
    "nameEn": "Prickly Pear Juice",
    "descriptionAr": "تين شوكي بلدي مثلج متوفر في موسم الصيف",
    "categorySlug": "fresh-juices",
    "categoryNameAr": "عصائر فريش",
    "basePrice": 110,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "طبيعي 100%",
      "بدون مواد حافظة",
      "فريش"
    ],
    "ingredientsAr": [
      "تين شوكي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843458063_122230952276500364_261235849293952816_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "oj-1",
    "slug": "sugarcane-pure",
    "nameAr": "قصب طبيعي صافي",
    "nameEn": "Pure Natural Sugarcane",
    "descriptionAr": "قصب صعيدي معصور طازج على البارد وفوري",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 25,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 25,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 50,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 190,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب طبيعي صافي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-2",
    "slug": "sugarcane-milk",
    "nameAr": "قصب باللبن",
    "nameEn": "Sugarcane with Milk",
    "descriptionAr": "قصب طازج مخفوق بالحليب الطبيعي بنكهة غنية مميزة",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 35,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": true,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب باللبن"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-3",
    "slug": "sugarcane-orange",
    "nameAr": "قصب بالبرتقال",
    "nameEn": "Sugarcane with Orange",
    "descriptionAr": "مزيج حلاوة القصب مع انتعاش البرتقال البلدي",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 35,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب بالبرتقال"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-4",
    "slug": "sugarcane-ginger",
    "nameAr": "قصب بالزنجبيل",
    "nameEn": "Sugarcane with Ginger",
    "descriptionAr": "قصب فريش مضاف إليه زنجبيل طازج حار ومنعش",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب بالزنجبيل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-5",
    "slug": "sugarcane-pineapple",
    "nameAr": "قصب بالأناناس",
    "nameEn": "Sugarcane with Pineapple",
    "descriptionAr": "قصب طازج ممزوج بعصير الأناناس الاستوائي",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب بالأناناس"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-6",
    "slug": "sugarcane-sobia",
    "nameAr": "قصب بالسوبيا",
    "nameEn": "Sugarcane with Sobya",
    "descriptionAr": "خلطة فروتيلا المفضلة من القصب مع السوبيا المثلجة",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 35,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب بالسوبيا"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-7",
    "slug": "sugarcane-lemon",
    "nameAr": "قصب بالليمون",
    "nameEn": "Sugarcane with Lemon",
    "descriptionAr": "قصب طبيعي مع قطرات الليمون البلدي لكسر السكرية بانتعاش",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 35,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب بالليمون"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-8",
    "slug": "sugarcane-carrot",
    "nameAr": "قصب بالجزر",
    "nameEn": "Sugarcane with Carrot",
    "descriptionAr": "قصب طبيعي مع عصير الجزر الطازج الغني بفيتامين أ",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 40,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 40,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "قصب بالجزر"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-9",
    "slug": "tamarind-natural",
    "nameAr": "تمر هندي طبيعي",
    "nameEn": "Natural Tamarind",
    "descriptionAr": "تمر هندي طبيعي أسواني أصلي محضر على أصوله",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 35,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "تمر هندي طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-10",
    "slug": "karkadeh-ennab",
    "nameAr": "عناب أسواني مبرد",
    "nameEn": "Aswan Karkadeh Ennab",
    "descriptionAr": "عناب مركز من زهور الكركديه الأسوانية المثلجة",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 40,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 40,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 280,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "عناب أسواني مبرد"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-11",
    "slug": "carob-kharroub",
    "nameAr": "خروب طبيعي مثلج",
    "nameEn": "Natural Carob Kharroub",
    "descriptionAr": "خروب مجروش ومستخلص بالطريقة التراثية الغنية",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 40,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 40,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 280,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "خروب طبيعي مثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-12",
    "slug": "doum-juice",
    "nameAr": "عصير دوم طبيعي",
    "nameEn": "Natural Doum Juice",
    "descriptionAr": "دوم بلدي منقوع ومبرد بنكهته التراثية الفواحة",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 40,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 40,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "عصير دوم طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-13",
    "slug": "doum-milk",
    "nameAr": "دوم باللبن",
    "nameEn": "Doum with Milk",
    "descriptionAr": "دوم مركز مخفوق بالحليب الطبيعي بقوام كريمي",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 50,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 95,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "دوم باللبن"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "oj-14",
    "slug": "walnut-drink",
    "nameAr": "مشروب جوز الهند التراثي",
    "nameEn": "Coconut Walnut Drink",
    "descriptionAr": "مشروب شرقي تراثي غني بنكهة جوز الهند والمكسرات",
    "categorySlug": "oriental-juices",
    "categoryNameAr": "عصائر شرقية",
    "basePrice": 40,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 40,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": false,
    "isBestSeller": false,
    "tags": [
      "شرقي",
      "طبيعي",
      "تراثي"
    ],
    "ingredientsAr": [
      "مشروب جوز الهند التراثي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-1",
    "slug": "sobya-natural",
    "nameAr": "سوبيا طبيعي كلاسيك",
    "nameEn": "Classic Natural Sobya",
    "descriptionAr": "سوبيا فروتيلا الأصلية بحليب جوز الهند الطبيعي ونكهة الفانيليا",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 45,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 45,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 85,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 320,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-2",
    "slug": "sobya-mango",
    "nameAr": "سوبيا مانجو",
    "nameEn": "Mango Sobya",
    "descriptionAr": "سوبيا مثلجة ممزوجة بقطع وبيوريه مانجو فروتيلا الفاخرة",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-3",
    "slug": "sobya-banana",
    "nameAr": "سوبيا بالموز",
    "nameEn": "Banana Sobya",
    "descriptionAr": "سوبيا طازجة مخفوقة مع الموز البلدي والحليب",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-4",
    "slug": "sobya-mocha",
    "nameAr": "سوبيا موكا",
    "nameEn": "Mocha Sobya",
    "descriptionAr": "مزيج السوبيا اللذيذة مع لمسة قهوة الموكا والشوكولاتة",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 75,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-5",
    "slug": "sobya-strawberry",
    "nameAr": "سوبيا فراولة",
    "nameEn": "Strawberry Sobya",
    "descriptionAr": "سوبيا باردة مع الفراولة الفريش بلونها الوردي الجذاب",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-6",
    "slug": "sobya-lotus",
    "nameAr": "سوبيا لوتس",
    "nameEn": "Lotus Biscoff Sobya",
    "descriptionAr": "سوبيا كريمية غنية بصلصة وبسكويت اللوتس المقرمش",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-7",
    "slug": "sobya-pistachio",
    "nameAr": "سوبيا بيستاشيو رويال",
    "nameEn": "Royal Pistachio Sobya",
    "descriptionAr": "سوبيا فاخرة ممزوجة بصوص الفستق الحلبي الأصلي",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 95,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 180,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-8",
    "slug": "sobya-nutella",
    "nameAr": "سوبيا نوتيلا",
    "nameEn": "Nutella Sobya",
    "descriptionAr": "سوبيا غنية بشوكولاتة النوتيلا الأصلية المخفوقة",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 170,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sb-9",
    "slug": "sobya-fruit-chunks",
    "nameAr": "سوبيا فواكه قطع",
    "nameEn": "Sobya with Fruit Chunks",
    "descriptionAr": "سوبيا فروتيلا المثلجة مضاف إليها تشكيلة من قطع الفواكه الطازجة",
    "categorySlug": "sobya-world",
    "categoryNameAr": "عالم السوبيا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 170,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": false,
    "tags": [
      "سوبيا",
      "منعش",
      "مثلج"
    ],
    "ingredientsAr": [
      "سوبيا طبيعي",
      "حليب",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-1",
    "slug": "mango-fruitella-signature",
    "nameAr": "مانجو فروتيلا سبيشال",
    "nameEn": "Fruitella Signature Mango",
    "descriptionAr": "عصير مانجو كيت طبيعي بيور 100% بقوام ثقيل ونكهة استوائية مركزة",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 60,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 420,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-2",
    "slug": "mango-icecream",
    "nameAr": "مانجو آيس كريم",
    "nameEn": "Mango with Ice Cream",
    "descriptionAr": "عصير مانجو مثلج يعلوه بولة آيس كريم فانيليا غنية",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-3",
    "slug": "mango-banana",
    "nameAr": "مانجو موز عصير أو قطع",
    "nameEn": "Mango Banana Juice or Chunks",
    "descriptionAr": "مانجو استوائية ممزوجة مع الموز الطازج كعصير أو قطع",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-chunks-bowl.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-4",
    "slug": "mango-strawberry",
    "nameAr": "مانجو فراولة طبقات",
    "nameEn": "Layered Mango Strawberry",
    "descriptionAr": "طبقات المانجو الكثيفة مع عصير الفراولة البلدي الطازج",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-5",
    "slug": "mango-apple",
    "nameAr": "مانجو تفاح",
    "nameEn": "Mango Apple Blend",
    "descriptionAr": "مزيج المانجو الاستوائية مع عصير التفاح المنعش",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-6",
    "slug": "mango-pineapple",
    "nameAr": "مانجو أناناس",
    "nameEn": "Mango Pineapple Tropical",
    "descriptionAr": "توليفة استوائية حيوية تجمع المانجو الحلوة مع الأناناس",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 90,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 170,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-7",
    "slug": "mango-kiwi",
    "nameAr": "مانجو كيوي",
    "nameEn": "Mango Kiwi Twist",
    "descriptionAr": "مانجو غنية مع انتعاش الكيوي الأخضر الحامض حلو",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-8",
    "slug": "mango-watermelon",
    "nameAr": "مانجو بطيخ",
    "nameEn": "Mango Watermelon Cooler",
    "descriptionAr": "عصير مانجو مع البطيخ الأحمر البارد لانتعاش الصيف",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-9",
    "slug": "mango-chunks-cup",
    "nameAr": "كوب مانجو قطع فريش",
    "nameEn": "Fresh Mango Chunks Cup",
    "descriptionAr": "قطع مانجو طازجة مكعبات مع صوص مانجو نقي بالملعقة",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 65,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 65,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 120,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-chunks-bowl.jpg",
    "isFeatured": true,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-10",
    "slug": "mango-rocket",
    "nameAr": "مانجو جرجير",
    "nameEn": "Mango Arugula Twist",
    "descriptionAr": "خلطة مانجو مع أوراق الجرجير البلدي الغنية بالمعادن",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-11",
    "slug": "mango-milk",
    "nameAr": "مانجو باللبن",
    "nameEn": "Mango with Milk",
    "descriptionAr": "مانجو بيور مخفوقة بالحليب الطبيعي البارد لقوام مخملي",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mg-12",
    "slug": "mango-pomegranate",
    "nameAr": "مانجو حب رمان",
    "nameEn": "Mango with Pomegranate",
    "descriptionAr": "عصير مانجو مغطى بحبات الرمان الياقوتية المقرمشة",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "mg-13",
    "slug": "mango-yogurt-nuts",
    "nameAr": "مانجو زبادي مكسرات",
    "nameEn": "Mango Yogurt Nuts",
    "descriptionAr": "مانجو مع زبادي طبيعي ومكسرات محمصة مقرمشة",
    "categorySlug": "mango-world",
    "categoryNameAr": "عالم المانجو",
    "basePrice": 90,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 170,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/mango-cocktail-bar.jpg",
    "isFeatured": false,
    "tags": [
      "مانجو",
      "طبيعي",
      "استوائي"
    ],
    "ingredientsAr": [
      "مانجو كيت طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843449293_122230951970500364_8911570488052115153_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "sm-1",
    "slug": "mango-smoothie",
    "nameAr": "سموذي مانجو مثلج",
    "nameEn": "Iced Mango Smoothie",
    "descriptionAr": "سموذي مانجو كثيف ومثلج مجروش مع نكهة الفاكهة النقية",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "مانجو مثلج",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-2",
    "slug": "strawberry-smoothie",
    "nameAr": "سموذي فراولة فريش",
    "nameEn": "Strawberry Smoothie",
    "descriptionAr": "فراولة طبيعية مجروشة مع الثلج لقوام ناعم ومنعش",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "فراولة فريش",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-3",
    "slug": "watermelon-smoothie",
    "nameAr": "سموذي بطيخ مبرد",
    "nameEn": "Watermelon Smoothie",
    "descriptionAr": "سموذي بطيخ أحمر مجروش يروي العطش",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "بطيخ مبرد",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-4",
    "slug": "blueberry-smoothie",
    "nameAr": "سموذي توت أزرق رويال",
    "nameEn": "Blueberry Royal Smoothie",
    "descriptionAr": "توت أزرق نقي مجروش بنكهة استثنائية غنية بمضادات الأكسدة",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "توت أزرق رويال",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-5",
    "slug": "raspberry-smoothie",
    "nameAr": "سموذي توت أحمر",
    "nameEn": "Raspberry Smoothie",
    "descriptionAr": "توت أحمر طبيعي مجروش بنكهة حامضة منعشة ومثيرة",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "توت أحمر",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-6",
    "slug": "lemon-mint-smoothie",
    "nameAr": "سموذي ليمون نعناع",
    "nameEn": "Lemon Mint Slush Smoothie",
    "descriptionAr": "سموذي مثلج بالليمون والنعناع الفريش المنعش للغاية",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "ليمون نعناع",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sm-7",
    "slug": "kiwi-smoothie",
    "nameAr": "سموذي كيوي طبيعي",
    "nameEn": "Fresh Kiwi Smoothie",
    "descriptionAr": "كيوي طبيعي مجروش مع الثلج بقوام سميك وحيوي",
    "categorySlug": "smoothie-world",
    "categoryNameAr": "عالم السموذي",
    "basePrice": 105,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حجم L قياسي",
        "nameEn": "Standard L",
        "price": 105,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "سموذي",
      "مثلج",
      "مجروش"
    ],
    "ingredientsAr": [
      "كيوي طبيعي",
      "ثلج مجروش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-1",
    "slug": "beetroot-orange",
    "nameAr": "بنجر بالبرتقال",
    "nameEn": "Beetroot with Orange",
    "descriptionAr": "بنجر طازج غني بالحديد ممزوج بالبرتقال البلدي",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 65,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 65,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isBestSeller": true,
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "بنجر بالبرتقال"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-2",
    "slug": "beetroot-pomegranate",
    "nameAr": "بنجر بالرمان",
    "nameEn": "Beetroot with Pomegranate",
    "descriptionAr": "خلطة دم الغزال من البنجر والرمان الغنية بمضادات الأكسدة",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 75,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "بنجر بالرمان"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-3",
    "slug": "beetroot-strawberry",
    "nameAr": "بنجر بالفراولة",
    "nameEn": "Beetroot with Strawberry",
    "descriptionAr": "بنجر طازج مع فراولة بلدي لمذاق حلو متوازن وصحي",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 65,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 65,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "بنجر بالفراولة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-4",
    "slug": "arugula-milk",
    "nameAr": "جرجير باللبن والعسل",
    "nameEn": "Arugula with Milk & Honey",
    "descriptionAr": "أوراق جرجير طازجة مخفوقة بالحليب الطبيعي والعسل",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 50,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "جرجير باللبن والعسل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-5",
    "slug": "kiwi-orange",
    "nameAr": "كيوي بالبرتقال",
    "nameEn": "Kiwi with Orange Boost",
    "descriptionAr": "جرعة نشاط حيوية من الكيوي الفريش وعصير البرتقال",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 110,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 210,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "كيوي بالبرتقال"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-6",
    "slug": "kiwi-pineapple",
    "nameAr": "كيوي بالأناناس",
    "nameEn": "Kiwi with Pineapple",
    "descriptionAr": "مزيج استوائي نشط من الكيوي والأناناس المنعش",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 110,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 210,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "كيوي بالأناناس"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-7",
    "slug": "pineapple-orange",
    "nameAr": "أناناس بالبرتقال",
    "nameEn": "Pineapple with Orange",
    "descriptionAr": "أناناس طبيعي معصور مع البرتقال الطازج",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 110,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 210,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "أناناس بالبرتقال"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-8",
    "slug": "orange-ginger",
    "nameAr": "برتقال بالزنجبيل الفريش",
    "nameEn": "Orange with Fresh Ginger",
    "descriptionAr": "برتقال طبيعي مع الزنجبيل الحار لتعزيز النشاط والدفء",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "برتقال بالزنجبيل الفريش"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-9",
    "slug": "lemon-ginger",
    "nameAr": "ليمون بالزنجبيل",
    "nameEn": "Lemon with Fresh Ginger",
    "descriptionAr": "ليمون بلدي مع زنجبيل طازج لانتعاش وتنقية الجسم",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "ليمون بالزنجبيل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "en-10",
    "slug": "super-vitamin-c",
    "nameAr": "سوبر فيتامين سي",
    "nameEn": "Super Vitamin C Cocktail",
    "descriptionAr": "خلطة حمضية جبارة من البرتقال والليمون والجوافة والكيوي والعسل",
    "categorySlug": "energy-world",
    "categoryNameAr": "عالم الطاقة",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "isDefault": false,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "tags": [
      "طاقة",
      "صحي",
      "فيتامينات"
    ],
    "ingredientsAr": [
      "سوبر فيتامين سي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843658766_122230952348500364_4679362239902111917_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-1",
    "slug": "cocktail-cup",
    "nameAr": "كأس كوكتيل فواكه",
    "nameEn": "Fruit Cocktail Cup",
    "descriptionAr": "كأس كوكتيل من قطع الفواكه المشكلة مع عصير طبيعي",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 60,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "isBestSeller": true,
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-2",
    "slug": "super-cocktail-icecream",
    "nameAr": "سوبر كوكتيل بالآيس كريم",
    "nameEn": "Super Cocktail with Ice Cream",
    "descriptionAr": "كوكتيل فواكه طازج مغطى ببولة آيس كريم فانيليا وصلصة فواكه",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-3",
    "slug": "fruit-salad-bowl",
    "nameAr": "سلطة فواكه فروتيلا (فروت سالاد)",
    "nameEn": "Fruitella Fruit Salad",
    "descriptionAr": "طبق غني بقطع التفاح والموز والمانجو والكانتالوب والفراولة",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "isFeatured": true,
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-4",
    "slug": "fruit-salad-icecream",
    "nameAr": "فروت سالاد بالآيس كريم",
    "nameEn": "Fruit Salad with Ice Cream",
    "descriptionAr": "سلطة فواكه مشكلة تعلوها بولات آيس كريم طبيعي",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-5",
    "slug": "fruitella-bomb",
    "nameAr": "قنبلة فروتيلا الكلاسيكية",
    "nameEn": "Fruitella Signature Bomb",
    "descriptionAr": "مزيج القنبلة الشهير من فواكه مقطعة مع عصير مانجو وبسبوسة وقشطة",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "isBestSeller": true,
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-6",
    "slug": "super-fruitella-bomb",
    "nameAr": "سوبر قنبلة فروتيلا رويال",
    "nameEn": "Super Fruitella Royal Bomb",
    "descriptionAr": "قنبلة الحجم الملكي مع مكسرات محمصة وقشطة بلدي وآيس كريم",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "isFeatured": true,
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-7",
    "slug": "kiwi-chunks-cup",
    "nameAr": "كوب كيوي قطع",
    "nameEn": "Kiwi Chunks Cup",
    "descriptionAr": "قطع كيوي فريش مقطعة مكعبات طازجة بالملعقة",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-8",
    "slug": "watermelon-chunks-cup",
    "nameAr": "كوب بطيخ قطع مبرد",
    "nameEn": "Watermelon Chunks Cup",
    "descriptionAr": "قطع بطيخ أحمر مكعبات مثلجة وخالية من البذور",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 60,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-9",
    "slug": "special-banana-plate",
    "nameAr": "موز اسبيشال بالصوص والمكسرات",
    "nameEn": "Special Banana Dessert Plate",
    "descriptionAr": "موز مقطع ومتبل بالعسل والقشطة والشوكولاتة والمكسرات",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-10",
    "slug": "mixed-fruits-chunks",
    "nameAr": "كوب فواكه مشكلة قطع",
    "nameEn": "Mixed Fruit Chunks Cup",
    "descriptionAr": "تشكيلة متوازنة من مكعبات الفواكه الموسمية الطازجة",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fs-11",
    "slug": "pineapple-chunks-seasonal",
    "nameAr": "كوب أناناس قطع طبيعي",
    "nameEn": "Fresh Pineapple Chunks",
    "descriptionAr": "أناناس طبيعي مقطع مكعبات متوفر حسب الموسم",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "fs-12",
    "slug": "pomegranate-seeds-cup",
    "nameAr": "كوب رمان حب فريش",
    "nameEn": "Pomegranate Seeds Cup",
    "descriptionAr": "حبوب رمان طازجة مفروطة بالملعقة متوفرة حسب الموسم",
    "categorySlug": "fruit-salad",
    "categoryNameAr": "فروت سالاد فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "طبق قياسي",
        "nameEn": "Standard Plate",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-cocktail-bowl.jpg",
    "tags": [
      "فروت سالاد",
      "فواكه قطع",
      "طبيعي"
    ],
    "ingredientsAr": [
      "فواكه موسمية مشكلة",
      "عصير طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "needs_review",
    "availability": "available"
  },
  {
    "id": "bb-1",
    "slug": "boba-milkshake-blueberry",
    "nameAr": "بوبا ميلك شيك بلو بيري",
    "nameEn": "Boba Milkshake Blueberry",
    "descriptionAr": "ميلك شيك كريمي بالتوت الأزرق مع حبيبات البوبا المضغية اللذيذة",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-2",
    "slug": "boba-milkshake-coffee",
    "nameAr": "بوبا ميلك شيك كوفي",
    "nameEn": "Boba Milkshake Coffee",
    "descriptionAr": "ميلك شيك القهوة المثلجة ممزوج بحبيبات البوبا التايوانية",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-3",
    "slug": "boba-milkshake-mix-berry",
    "nameAr": "بوبا ميلك شيك ميكس بيري",
    "nameEn": "Boba Milkshake Mix Berry",
    "descriptionAr": "ميلك شيك التوت المشكل الغني مع كرات البوبا الطرية",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-4",
    "slug": "boba-milkshake-mango",
    "nameAr": "بوبا ميلك شيك مانجو",
    "nameEn": "Boba Milkshake Mango",
    "descriptionAr": "ميلك شيك المانجو الاستوائية الكثيفة مع حبيبات البوبا",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-5",
    "slug": "boba-milkshake-strawberry",
    "nameAr": "بوبا ميلك شيك فراولة",
    "nameEn": "Boba Milkshake Strawberry",
    "descriptionAr": "ميلك شيك الفراولة اللذيذ بحبيبات البوبا اللطيفة",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-6",
    "slug": "boba-mojito-jelly-cola",
    "nameAr": "بوبا موخيتو جيلي كولا",
    "nameEn": "Boba Mojito Jelly Cola",
    "descriptionAr": "موخيتو الصودا بنكهة الجيلي كولا وحبيبات البوبا المنعشة",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-7",
    "slug": "boba-mojito-passion-fruit",
    "nameAr": "بوبا موخيتو باشون فروت",
    "nameEn": "Boba Mojito Passion Fruit",
    "descriptionAr": "موخيتو الباشون فروت الاستوائي الفوار مع البوبا",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-8",
    "slug": "boba-mojito-lemon-mint",
    "nameAr": "بوبا موخيتو ليمون نعناع",
    "nameEn": "Boba Mojito Lemon Mint",
    "descriptionAr": "موخيتو الليمون والنعناع الفريش مع حبيبات البوبا",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-9",
    "slug": "boba-mojito-blueberry",
    "nameAr": "بوبا موخيتو بلو بيري",
    "nameEn": "Boba Mojito Blueberry",
    "descriptionAr": "موخيتو التوت الأزرق الفوار المزين بحبيبات البوبا",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "bb-10",
    "slug": "boba-mojito-green-apple",
    "nameAr": "بوبا موخيتو تفاح أخضر",
    "nameEn": "Boba Mojito Green Apple",
    "descriptionAr": "موخيتو التفاح الأخضر المقرمش والحامض مع حبيبات البوبا",
    "categorySlug": "boba-fruitella",
    "categoryNameAr": "بوبا فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس بوبا L",
        "nameEn": "Boba Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "بوبا",
      "ميلك شيك",
      "موخيتو"
    ],
    "ingredientsAr": [
      "حبيبات بوبا Boba",
      "صودا / حليب",
      "نكهة طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/843591924_122230952102500364_3712706342241472189_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-1",
    "slug": "oreo-drink",
    "nameAr": "مشروب أوريو كلاسيك",
    "nameEn": "Oreo Classic Shake",
    "descriptionAr": "بسكويت أوريو أصلي مخفوق بالحليب والآيس كريم والشوكولاتة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 95,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isBestSeller": true,
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-2",
    "slug": "borio-drink",
    "nameAr": "مشروب بوريو",
    "nameEn": "Borio Shake",
    "descriptionAr": "بسكويت بوريو المصري الكلاسيكي بالحليب وصوص الشوكولاتة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 95,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-3",
    "slug": "galaxy-drink",
    "nameAr": "مشروب جلاكسي حريري",
    "nameEn": "Smooth Galaxy Chocolate",
    "descriptionAr": "شوكولاتة جلاكسي الناعمة المذابة في الحليب والآيس كريم",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-4",
    "slug": "twinkies-drink",
    "nameAr": "مشروب توينكز",
    "nameEn": "Twinkies Cream Shake",
    "descriptionAr": "كعك التوينكز الكريمة اللذيذ ممزوج بالحليب والآيس كريم",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 95,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-5",
    "slug": "hohos-drink",
    "nameAr": "مشروب هوهوز",
    "nameEn": "Hohos Chocolate Shake",
    "descriptionAr": "كعك الهوهوز المغطى بالشوكولاتة ومخفوق بالكريمة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 95,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-6",
    "slug": "snickers-drink",
    "nameAr": "مشروب سنيكرز كراميل وفول",
    "nameEn": "Snickers Caramel Peanut Shake",
    "descriptionAr": "سنيكرز غنية بالفول السوداني والكراميل والشوكولاتة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-7",
    "slug": "mars-drink",
    "nameAr": "مشروب مارس بالكراميل",
    "nameEn": "Mars Caramel Chocolate Shake",
    "descriptionAr": "شوكولاتة مارس بنوجتها المميزة والكراميل السائل",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-8",
    "slug": "maltesers-drink",
    "nameAr": "مشروب مالتيزرز المقرمش",
    "nameEn": "Maltesers Crispy Shake",
    "descriptionAr": "كرات مالتيزرز المقرمشة بالحليب والشوكولاتة الغنية",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-9",
    "slug": "twix-drink",
    "nameAr": "مشروب تويكس أصابع",
    "nameEn": "Twix Biscuit & Caramel Shake",
    "descriptionAr": "أصابع تويكس البسكويت والكراميل والشوكولاتة المخفوقة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-10",
    "slug": "cadbury-drink",
    "nameAr": "مشروب كادبوري ديري ميلك",
    "nameEn": "Cadbury Dairy Milk Shake",
    "descriptionAr": "شوكولاتة كادبوري الإنجليزية الأصلية الغنية بالحليب",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-11",
    "slug": "kitkat-drink",
    "nameAr": "مشروب كيت كات ويفر",
    "nameEn": "KitKat Crisp Wafer Shake",
    "descriptionAr": "أصابع ويفر كيت كات المقرمشة بالشوكولاتة والآيس كريم",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-12",
    "slug": "ferrero-rocher-drink",
    "nameAr": "مشروب فيريرو روشيه الملكي",
    "nameEn": "Ferrero Rocher Royal Shake",
    "descriptionAr": "شوكولاتة فيريرو روشيه بالبندق المحمص وصلصة البندق",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isFeatured": true,
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-13",
    "slug": "kinder-drink",
    "nameAr": "مشروب كيندر بوينو",
    "nameEn": "Kinder Bueno Shake",
    "descriptionAr": "شوكولاتة كيندر بوينو بكريمة البندق الإيطالية اللذيذة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isFeatured": true,
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-14",
    "slug": "super-oreo",
    "nameAr": "سوبر أوريو إكسترا",
    "nameEn": "Super Oreo Extra Cookies",
    "descriptionAr": "أوريو مضاعف مع قطع بسكويت مقرمشة وصوص شوكولاتة كثيف",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-15",
    "slug": "super-borio",
    "nameAr": "سوبر بوريو إكسترا",
    "nameEn": "Super Borio Extra",
    "descriptionAr": "بوريو بحجم سوبر ومضاعف القطع والكريمة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-16",
    "slug": "super-twinkies",
    "nameAr": "سوبر توينكز",
    "nameEn": "Super Twinkies Shake",
    "descriptionAr": "توينكز مضاعف الحجم مع صوص كراميل وكريمة مخفوقة",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-17",
    "slug": "super-hohos",
    "nameAr": "سوبر هوهوز",
    "nameEn": "Super Hohos Shake",
    "descriptionAr": "هوهوز مضاعف مع صوص شوكولاتة كينج",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ch-18",
    "slug": "the-triple-chocolate",
    "nameAr": "التريبل شوكليت ميكس",
    "nameEn": "The Triple Chocolate Signature",
    "descriptionAr": "مزيج أسطوري يجمع 3 أنواع شوكولاتة عالمية مع الآيس كريم",
    "categorySlug": "chocolate-lovers",
    "categoryNameAr": "عشاق الشوكولاتة",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس شوكولاتة L",
        "nameEn": "Chocolate Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isBestSeller": true,
    "tags": [
      "شوكولاتة",
      "حلوى",
      "كريمي"
    ],
    "ingredientsAr": [
      "شوكولاتة أصلية",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-1",
    "slug": "cashew-drink",
    "nameAr": "كاجو فانيليا أو شوكولاتة",
    "nameEn": "Cashew Vanilla or Chocolate",
    "descriptionAr": "كاجو محمص فاخر مخفوق بالحليب واختيارك من الفانيليا أو الشوكولاتة",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس مكسرات L",
        "nameEn": "Standard L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "كاجو فانيليا أو شوكولاتة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-2",
    "slug": "hazelnut-drink",
    "nameAr": "بندق فانيليا أو شوكولاتة",
    "nameEn": "Hazelnut Vanilla or Chocolate",
    "descriptionAr": "بندق بلدي محمص مخفوق بالحليب ونكهة غنية",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس مكسرات L",
        "nameEn": "Standard L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "بندق فانيليا أو شوكولاتة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-3",
    "slug": "almond-drink",
    "nameAr": "لوز فانيليا أو شوكولاتة",
    "nameEn": "Almond Vanilla or Chocolate",
    "descriptionAr": "لوز محمص غني بالبروتين مخفوق بالحليب والآيس كريم",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس مكسرات L",
        "nameEn": "Standard L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "لوز فانيليا أو شوكولاتة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-4",
    "slug": "peanut-drink",
    "nameAr": "سوداني فانيليا أو شوكولاتة",
    "nameEn": "Peanut Vanilla or Chocolate",
    "descriptionAr": "فول سوداني محمص بنكهة زبدة الفول السوداني اللذيذة",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس مكسرات L",
        "nameEn": "Standard L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "سوداني فانيليا أو شوكولاتة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-5",
    "slug": "coconut-drink",
    "nameAr": "جوز هند فانيليا أو شوكولاتة",
    "nameEn": "Coconut Vanilla or Chocolate",
    "descriptionAr": "مشروب جوز الهند الاستوائي الناعم بالفانيليا أو الشوكولاتة",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس مكسرات L",
        "nameEn": "Standard L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "جوز هند فانيليا أو شوكولاتة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-6",
    "slug": "yogurt-honey",
    "nameAr": "زبادي عسل نحل طبيعي",
    "nameEn": "Yogurt with Pure Honey",
    "descriptionAr": "زبادي بلدي طازج مخفوق بعسل النحل الصافي المغذي",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isBestSeller": true,
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "زبادي عسل نحل طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-7",
    "slug": "yogurt-strawberry-mango",
    "nameAr": "زبادي فراولة أو مانجو",
    "nameEn": "Yogurt Strawberry or Mango",
    "descriptionAr": "زبادي طبيعي مخفوق بالفواكه الطازجة من المانجو أو الفراولة",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "زبادي فراولة أو مانجو"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-8",
    "slug": "yogurt-mixed-fruits",
    "nameAr": "زبادي فواكه مشكلة قطع",
    "nameEn": "Yogurt with Mixed Fruit Chunks",
    "descriptionAr": "زبادي مثلج مغطى بمكعبات الفواكه الطازجة والعسل",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 90,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 170,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "زبادي فواكه مشكلة قطع"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-9",
    "slug": "yogurt-berry",
    "nameAr": "زبادي توت أحمر وأزرق",
    "nameEn": "Berry Yogurt Shake",
    "descriptionAr": "زبادي طبيعي ممزوج بالتوت البري المنعش",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "زبادي توت أحمر وأزرق"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-10",
    "slug": "yogurt-cashew",
    "nameAr": "زبادي بالكاجو الملكي",
    "nameEn": "Royal Cashew Yogurt",
    "descriptionAr": "زبادي طبيعي مغذٍ مخفوق بالكاجو الفاخر والعسل",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 130,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 250,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "زبادي بالكاجو الملكي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ny-11",
    "slug": "yogurt-fruits-honey",
    "nameAr": "زبادي فواكه بالعسل",
    "nameEn": "Yogurt Fruits & Honey",
    "descriptionAr": "توليفة من الفواكه والزبادي وعسل النحل الصافي",
    "categorySlug": "nuts-yogurt",
    "categoryNameAr": "عالم المكسرات والزبادي",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "مكسرات",
      "زبادي",
      "صحي"
    ],
    "ingredientsAr": [
      "زبادي فواكه بالعسل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-1",
    "slug": "vanilla-milkshake",
    "nameAr": "ميلك شيك فانيليا",
    "nameEn": "Vanilla Milkshake",
    "descriptionAr": "ميلك شيك كلاسيكي كثيف بآيس كريم الفانيليا الطبيعي",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "فانيليا"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-2",
    "slug": "chocolate-milkshake",
    "nameAr": "ميلك شيك شوكولاتة",
    "nameEn": "Chocolate Milkshake",
    "descriptionAr": "ميلك شيك غني بالشوكولاتة البلجيكية والآيس كريم",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 80,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 150,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "شوكولاتة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-3",
    "slug": "mango-milkshake",
    "nameAr": "ميلك شيك مانجو",
    "nameEn": "Mango Milkshake",
    "descriptionAr": "ميلك شيك مانجو استوائية طبيعية مخفوقة بالآيس كريم",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "مانجو"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-4",
    "slug": "mocha-milkshake",
    "nameAr": "ميلك شيك موكا",
    "nameEn": "Mocha Milkshake",
    "descriptionAr": "ميلك شيك يجمع نكهة القهوة والشوكولاتة بالحليب",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "موكا"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-5",
    "slug": "caramel-milkshake",
    "nameAr": "ميلك شيك كراميل",
    "nameEn": "Caramel Milkshake",
    "descriptionAr": "ميلك شيك كريمي بصلصة الكراميل الغنية والآيس كريم",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "كراميل"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-6",
    "slug": "oreo-milkshake",
    "nameAr": "ميلك شيك أوريو",
    "nameEn": "Oreo Milkshake",
    "descriptionAr": "ميلك شيك الأوريو الأصلي مع فتات البسكويت المقرمش",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "أوريو"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-7",
    "slug": "borio-milkshake",
    "nameAr": "ميلك شيك بوريو",
    "nameEn": "Borio Milkshake",
    "descriptionAr": "ميلك شيك البوريو المصري الكلاسيكي اللذيذ",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "بوريو"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-8",
    "slug": "blueberry-milkshake",
    "nameAr": "ميلك شيك توت أزرق",
    "nameEn": "Blueberry Milkshake",
    "descriptionAr": "ميلك شيك التوت الأزرق المنعش بنكهة غنية وفاخرة",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "توت أزرق"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-9",
    "slug": "lotus-milkshake",
    "nameAr": "ميلك شيك لوتس",
    "nameEn": "Lotus Biscoff Milkshake",
    "descriptionAr": "ميلك شيك زبدة اللوتس وبسكويت اللوتس المقرمش",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "لوتس"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-10",
    "slug": "mix-berry-milkshake",
    "nameAr": "ميلك شيك ميكس بيري",
    "nameEn": "Mix Berry Milkshake",
    "descriptionAr": "توليفة من التوت المشكل مع الحليب والآيس كريم",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "ميكس بيري"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-11",
    "slug": "twinkies-milkshake",
    "nameAr": "ميلك شيك توينكز",
    "nameEn": "Twinkies Milkshake",
    "descriptionAr": "كعك توينكز مخفوق مع الحليب والآيس كريم بنعومة تامة",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "توينكز"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-12",
    "slug": "kiwi-milkshake",
    "nameAr": "ميلك شيك كيوي",
    "nameEn": "Kiwi Milkshake",
    "descriptionAr": "ميلك شيك الكيوي الطبيعي الحامض حلو المنعش",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 100,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 190,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "كيوي"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-13",
    "slug": "raspberry-milkshake",
    "nameAr": "ميلك شيك توت أحمر",
    "nameEn": "Raspberry Milkshake",
    "descriptionAr": "ميلك شيك التوت الأحمر بنكهة منعشة ولون وردي",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "توت أحمر"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-14",
    "slug": "nutella-milkshake",
    "nameAr": "ميلك شيك نوتيلا",
    "nameEn": "Nutella Milkshake",
    "descriptionAr": "ميلك شيك غارق بشوكولاتة النوتيلا الأصلية والبندق",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 90,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 170,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "نوتيلا"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-15",
    "slug": "pistachio-milkshake",
    "nameAr": "ميلك شيك بيستاشيو",
    "nameEn": "Pistachio Milkshake",
    "descriptionAr": "ميلك شيك الفستق الحلبي الفاخر مع صوص الفستق والآيس كريم",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 95,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 190,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "بيستاشيو"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-16",
    "slug": "cerelac-milkshake",
    "nameAr": "ميلك شيك سيريلاك زمان",
    "nameEn": "Cerelac Nostalgia Milkshake",
    "descriptionAr": "نكهة الطفولة المحبوبة من السيريلاك مع الحليب والآيس كريم",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "سيريلاك زمان"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ms-17",
    "slug": "strawberry-milkshake",
    "nameAr": "ميلك شيك فراولة",
    "nameEn": "Strawberry Milkshake",
    "descriptionAr": "ميلك شيك الفراولة الفريش مع الآيس كريم الطبيعي",
    "categorySlug": "milkshakes",
    "categoryNameAr": "عالم الميلك شيك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ميلك شيك",
      "كريمي",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طازج",
      "آيس كريم",
      "فراولة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/843839670_122230952210500364_2351817102767286306_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-1",
    "slug": "avocado-juice-plain",
    "nameAr": "عصير أفوكادو بيور",
    "nameEn": "Pure Avocado Juice",
    "descriptionAr": "أفوكادو طبيعي كريمي معصور طازج بدون إضافات",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 220,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-2",
    "slug": "avocado-single-nut",
    "nameAr": "أفوكادو كاجو أو بندق أو لوز",
    "nameEn": "Avocado with Cashew, Hazelnut or Almond",
    "descriptionAr": "أفوكادو كريمي مخفوق باختيارك من الكاجو أو البندق أو اللوز المحمص",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 140,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 270,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-3",
    "slug": "avocado-mixed-nuts",
    "nameAr": "أفوكادو مكسرات مشكلة",
    "nameEn": "Avocado Mixed Nuts Royal",
    "descriptionAr": "أفوكادو مخفوق بمزيج فاخر من الكاجو واللوز والبندق والعسل",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 140,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 270,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isBestSeller": true,
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-4",
    "slug": "super-avocado",
    "nameAr": "سوبر أفوكادو فروتيلا",
    "nameEn": "Super Avocado Power",
    "descriptionAr": "المكونات: أفوكادو، جرجير فريش، بلح، آيس كريم، عسل نحل جبلي",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 230,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "جرجير",
      "بلح",
      "آيس كريم",
      "عسل نحل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-5",
    "slug": "pineapple-power",
    "nameAr": "أناناس باور الملكي",
    "nameEn": "Royal Pineapple Power",
    "descriptionAr": "أناناس طبيعي مخفوق بمكونات الطاقة والعسل والآيس كريم",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 230,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-6",
    "slug": "viagra-blend",
    "nameAr": "مشروب فياجرا طبيعي",
    "nameEn": "Viagra Natural Energy Blend",
    "descriptionAr": "خلطة الطاقة الطبيعية الكلاسيكية بالعسل والجرجير والمكسرات",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-7",
    "slug": "super-viagra",
    "nameAr": "سوبر فياجرا فروتيلا",
    "nameEn": "Super Viagra Signature Blend",
    "descriptionAr": "المكونات: أفوكادو، جرجير، كيوي، حلاوة طحينية، آيس كريم، عسل",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 230,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isBestSeller": true,
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو",
      "جرجير",
      "كيوي",
      "حلاوة طحينية",
      "آيس كريم",
      "عسل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-8",
    "slug": "avocado-kiwi",
    "nameAr": "أفوكادو بالكيوي",
    "nameEn": "Avocado with Kiwi",
    "descriptionAr": "أفوكادو كريمي ممزوج بالكيوي الأخضر المنعش الغني بفيتامين سي",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 130,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 250,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-9",
    "slug": "avocado-mango",
    "nameAr": "أفوكادو بالمانجو",
    "nameEn": "Avocado with Mango",
    "descriptionAr": "مزيج الأفوكادو الدسم مع حلاوة المانجو الاستوائية",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 210,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-10",
    "slug": "avocado-dates",
    "nameAr": "أفوكادو بالبلح والحليب",
    "nameEn": "Avocado with Dates & Milk",
    "descriptionAr": "أفوكادو مع التمر واللبن وعسل النحل لطاقة تدوم طويلاً",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 220,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-11",
    "slug": "avocado-yogurt",
    "nameAr": "أفوكادو بالزبادي والعسل",
    "nameEn": "Avocado with Yogurt & Honey",
    "descriptionAr": "أفوكادو مع زبادي طبيعي وعسل نحل صافٍ لوجبة خفيفة وصحية",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 130,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 250,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-12",
    "slug": "avocado-fruit-chunks",
    "nameAr": "أفوكادو فواكه قطع",
    "nameEn": "Avocado with Fresh Fruit Chunks",
    "descriptionAr": "عصير أفوكادو كريمي يعلوه مكعبات الفواكه الطازجة والمكسرات",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 65,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 65,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-13",
    "slug": "dates-arugula-honey",
    "nameAr": "بلح جرجير عسل طاقة",
    "nameEn": "Dates, Arugula & Honey Energy",
    "descriptionAr": "خلطة تراثية مقوية من التمر وأوراق الجرجير وعسل النحل الصافي",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 150,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 290,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "أفوكادو طبيعي",
      "عسل نحل",
      "مكسرات"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "pw-14",
    "slug": "power-fruitella-royal",
    "nameAr": "باور فروتيلا رويال الحصري",
    "nameEn": "Fruitella Royal Power",
    "descriptionAr": "المكونات: كاجو، بندق، لوز، آيس كريم، حلاوة طحينية، عسل جبلي حر",
    "categorySlug": "power-fruitella",
    "categoryNameAr": "باور فروتيلا",
    "basePrice": 150,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 290,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "باور",
      "أفوكادو",
      "مكسرات",
      "عسل"
    ],
    "ingredientsAr": [
      "كاجو",
      "بندق",
      "لوز",
      "آيس كريم",
      "حلاوة طحينية",
      "عسل نحل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-1",
    "slug": "lion-feeding",
    "nameAr": "رضعة الأسد",
    "nameEn": "Lion Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، مانجو، فانيليا مثلجة",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isBestSeller": true,
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "مانجو",
      "فانيليا"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-2",
    "slug": "monkey-feeding",
    "nameAr": "رضعة القرد",
    "nameEn": "Monkey Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، مانجو، موز بلدي",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "مانجو",
      "موز"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-3",
    "slug": "elephant-feeding",
    "nameAr": "رضعة الفيل",
    "nameEn": "Elephant Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، شوكولاتة ناعمة، فانيليا",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "شوكولاتة",
      "فانيليا"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-4",
    "slug": "tiger-feeding",
    "nameAr": "رضعة النمر",
    "nameEn": "Tiger Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، فراولة فريش، فانيليا",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "isFeatured": true,
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "فراولة",
      "فانيليا"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-5",
    "slug": "whale-feeding",
    "nameAr": "رضعة الحوت",
    "nameEn": "Whale Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، كانتالوب فريش، فانيليا",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "كانتالوب",
      "فانيليا"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-6",
    "slug": "koala-feeding",
    "nameAr": "رضعة الكوالا",
    "nameEn": "Koala Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، بلح طازج، لبن حليب",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "بلح",
      "حليب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ff-7",
    "slug": "bird-milk-feeding",
    "nameAr": "رضعة لبن العصفور",
    "nameEn": "Bird Milk Feeding",
    "descriptionAr": "المكونات: سوبيا طبيعي، موز فريش، فانيليا مخفوقة",
    "categorySlug": "forest-feedings",
    "categoryNameAr": "رضعات الغابة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس رضعة الغابة",
        "nameEn": "Forest Cup",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-cocktail-cup.jpg",
    "tags": [
      "رضعات الغابة",
      "سوبيا",
      "ميكس"
    ],
    "ingredientsAr": [
      "سوبيا",
      "موز",
      "فانيليا"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-1",
    "slug": "mix-batot",
    "nameAr": "ميكس بطوط",
    "nameEn": "Batot Cartoon Mix",
    "descriptionAr": "المكونات: فراولة، موز، زبادي، آيس كريم فانيليا",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isBestSeller": true,
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "فراولة",
      "موز",
      "زبادي",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-2",
    "slug": "mix-farafiro",
    "nameAr": "ميكس فرافيرو",
    "nameEn": "Farafiro Signature Mix",
    "descriptionAr": "المكونات: مانجو، موز، بلح طازج، آيس كريم",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "مانجو",
      "موز",
      "بلح",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-3",
    "slug": "mix-spongebob",
    "nameAr": "ميكس سبونج بوب",
    "nameEn": "SpongeBob Mix",
    "descriptionAr": "المكونات: مانجو، فراولة، آيس كريم فانيليا بلون مبهج",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isFeatured": true,
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "مانجو",
      "فراولة",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-4",
    "slug": "mix-chico-banana",
    "nameAr": "ميكس شيكو بانانا",
    "nameEn": "Chico Banana Choco Shake",
    "descriptionAr": "المكونات: موز، شوكولاتة سائلة، بسكويت بوريو، لبن",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "موز",
      "شوكولاتة",
      "بوريو",
      "حليب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-5",
    "slug": "mix-mouse",
    "nameAr": "ميكس ميكي ماوس",
    "nameEn": "Mickey Mouse Mix",
    "descriptionAr": "المكونات: موز، فراولة، آيس كريم فانيليا",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "موز",
      "فراولة",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-6",
    "slug": "mix-tom-and-jerry",
    "nameAr": "ميكس توم آند جيري",
    "nameEn": "Tom & Jerry Duo Mix",
    "descriptionAr": "المكونات: مانجو، موز، فراولة، آيس كريم",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "مانجو",
      "موز",
      "فراولة",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-7",
    "slug": "mix-aboutrika",
    "nameAr": "ميكس أبو تريكة 22",
    "nameEn": "Aboutrika 22 Legend Mix",
    "descriptionAr": "المكونات: فراولة، أناناس استوائي، آيس كريم",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isBestSeller": true,
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "فراولة",
      "أناناس",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-8",
    "slug": "mix-saroukh",
    "nameAr": "ميكس صاروخ فروتيلا",
    "nameEn": "Rocket Mix Saroukh",
    "descriptionAr": "المكونات: أناناس، موز، مانجو، آيس كريم",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "أناناس",
      "موز",
      "مانجو",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-9",
    "slug": "mix-fruitella-special",
    "nameAr": "ميكس فروتيلا الحصري",
    "nameEn": "Fruitella House Special Mix",
    "descriptionAr": "المكونات: أناناس، تفاح أخضر، خوخ سكري",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isFeatured": true,
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "أناناس",
      "تفاح",
      "خوخ"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-10",
    "slug": "mix-pina-colada",
    "nameAr": "ميكس بينا كولادا",
    "nameEn": "Virgin Pina Colada",
    "descriptionAr": "المكونات: أناناس، برتقال، حليب جوز هند استوائي",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "أناناس",
      "برتقال",
      "جوز هند"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-11",
    "slug": "mix-google",
    "nameAr": "ميكس جوجل",
    "nameEn": "Google Power Mix",
    "descriptionAr": "المكونات: أناناس، مانجو، آيس كريم فانيليا",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 160,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "أناناس",
      "مانجو",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-12",
    "slug": "mix-vitamin-c",
    "nameAr": "ميكس فيتامين سي",
    "nameEn": "Citrus Vitamin C Mix",
    "descriptionAr": "المكونات: برتقال، جوافة، ليمون، عسل نحل طبيعي",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "برتقال",
      "جوافة",
      "ليمون",
      "عسل"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-13",
    "slug": "mix-nos-darba",
    "nameAr": "ميكس نص ضربة قطع",
    "nameEn": "Nos Darba Half-Blended Mix",
    "descriptionAr": "المكونات: ميكسات فواكه بيوريه ثقيل مع قطع فواكه ملموسة",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 75,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "فواكه مشكلة بيوريه",
      "قطع فواكه"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-14",
    "slug": "mix-shabah",
    "nameAr": "ميكس الشبح",
    "nameEn": "The Ghost Special Mix",
    "descriptionAr": "المكونات: تفاح، بلح، كيوي، لبن طبيعي",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 75,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "تفاح",
      "بلح",
      "كيوي",
      "حليب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fm-15",
    "slug": "mix-viva",
    "nameAr": "ميكس فيفا",
    "nameEn": "Viva Celebration Mix",
    "descriptionAr": "المكونات: بلح طازج، موز، لبن حليب، آيس كريم",
    "categorySlug": "fruitella-mixes",
    "categoryNameAr": "ميكسات فروتيلا",
    "basePrice": 75,
    "sizes": [
      {
        "id": "l",
        "nameAr": "حجم L",
        "nameEn": "Size L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 140,
        "volumeLabel": "1L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "ميكسات",
      "كوكتيل",
      "فروتيلا"
    ],
    "ingredientsAr": [
      "بلح",
      "موز",
      "حليب",
      "آيس كريم"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844340785_122230951760500364_8121428185696562876_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-1",
    "slug": "ice-cream-1-scoop",
    "nameAr": "بولة آيس كريم (أبولة)",
    "nameEn": "1 Scoop Ice Cream",
    "descriptionAr": "بولة واحدة من اختيارك من نكهات الآيس كريم الطبيعي الفاخر",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 30,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 30,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-2",
    "slug": "ice-cream-2-scoops",
    "nameAr": "2 بولة آيس كريم (2 أبولة)",
    "nameEn": "2 Scoops Ice Cream",
    "descriptionAr": "بولتان من الآيس كريم الطبيعي بنكهاتك المفضلة",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 60,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-3",
    "slug": "ice-cream-3-scoops",
    "nameAr": "3 بولة آيس كريم (3 أبولة)",
    "nameEn": "3 Scoops Ice Cream",
    "descriptionAr": "ثلاث بولات آيس كريم طبيعي مثلج بنكهات متنوعة",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isBestSeller": true,
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-4",
    "slug": "fattet-ice-cream",
    "nameAr": "فتة آيس كريم فروتيلا",
    "nameEn": "Fruitella Ice Cream Fatta",
    "descriptionAr": "طبق فتة الآيس كريم الشهير مع قطع الكيك والصلصات والمكسرات",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isFeatured": true,
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-5",
    "slug": "american-ice-cream",
    "nameAr": "آيس كريم أمريكي صنداي",
    "nameEn": "American Sundae Ice Cream",
    "descriptionAr": "صنداي آيس كريم على الطريقة الأمريكية مع الكريمة المخفوقة وصلصة الفدج",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-6",
    "slug": "the-dinosaur-cup",
    "nameAr": "كأس الديناصور العملاق",
    "nameEn": "The Dinosaur Giant Cup",
    "descriptionAr": "كأس عملاق من تشكيلة الآيس كريم والفواكه والبسكويت والشوكولاتة",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isFeatured": true,
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "ic-7",
    "slug": "arayisi-ice-cream",
    "nameAr": "عرايسي آيس كريم الملكي",
    "nameEn": "Arayisi Royal Ice Cream",
    "descriptionAr": "طبق عرايسي آيس كريم غني بالقشطة والمكسرات والعسل والفواكه",
    "categorySlug": "ice-cream",
    "categoryNameAr": "عالم الآيس كريم",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة آيس كريم",
        "nameEn": "Ice Cream Serving",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruit-salad-icecream.jpg",
    "isBestSeller": true,
    "tags": [
      "آيس كريم",
      "حلويات",
      "مثلج"
    ],
    "ingredientsAr": [
      "حليب طبيعي",
      "كريمة",
      "نكهات طبيعية"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-1",
    "slug": "mojito-blueberry",
    "nameAr": "موخيتو بلو بيري",
    "nameEn": "Blueberry Mojito",
    "descriptionAr": "صودا فوارة منعشة بالليمون والنعناع الفريش وسيرب التوت الأزرق",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-2",
    "slug": "mojito-raspberry",
    "nameAr": "موخيتو توت أحمر",
    "nameEn": "Raspberry Mojito",
    "descriptionAr": "موخيتو التوت الأحمر بنكهة حامضة منعشة مع الثلج المجروش",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-3",
    "slug": "mojito-strawberry",
    "nameAr": "موخيتو فراولة",
    "nameEn": "Strawberry Mojito",
    "descriptionAr": "فراولة فريش مقطعة مع النعناع والليمون والصودا المثلجة",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-4",
    "slug": "mojito-green-apple",
    "nameAr": "موخيتو تفاح أخضر",
    "nameEn": "Green Apple Mojito",
    "descriptionAr": "نكهة التفاح الأخضر المقرمش مع أوراق النعناع والليمون الفوار",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-5",
    "slug": "mojito-lemon-mint",
    "nameAr": "موخيتو ليمون نعناع كلاسيك",
    "nameEn": "Classic Lemon Mint Mojito",
    "descriptionAr": "الموخيتو الكلاسيكي العالمي بشرائح الليمون وأوراق النعناع والصودا",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-6",
    "slug": "mojito-jelly-cola",
    "nameAr": "موخيتو جيلي كولا",
    "nameEn": "Jelly Cola Mojito",
    "descriptionAr": "ابتكار فروتيلا المنعش بنكهة حلوى الجيلي كولا الفوارة",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-7",
    "slug": "mojito-pineapple",
    "nameAr": "موخيتو أناناس",
    "nameEn": "Pineapple Mojito",
    "descriptionAr": "موخيتو استوائي بشرائح الأناناس والليمون والصودا المثلجة",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "mj-8",
    "slug": "mojito-redbull-mix-berry",
    "nameAr": "موخيتو بول ميكس بيري",
    "nameEn": "Red Bull Mix Berry Mojito",
    "descriptionAr": "موخيتو ريدبول طاقة فوار مع التوت المشكل والليمون والنعناع",
    "categorySlug": "mojito-world",
    "categoryNameAr": "عالم الموخيتو",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس موخيتو L",
        "nameEn": "Mojito Cup L",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "موخيتو",
      "صودا",
      "منعش"
    ],
    "ingredientsAr": [
      "صودا فوارة",
      "نعناع فريش",
      "ليمون",
      "سيرب طبيعي"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-1",
    "slug": "diet-rashaka",
    "nameAr": "دايت الرشاقة",
    "nameEn": "Diet Agility Blend",
    "descriptionAr": "خلطة الرشاقة الخفيفة من فواكه طبيعية معصورة بدون سكر",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isBestSeller": true,
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-2",
    "slug": "diet-fitness",
    "nameAr": "دايت فتنس رياضي",
    "nameEn": "Diet Fitness Booster",
    "descriptionAr": "مشروب الفتنس الغني بالفيتامينات والمعادن المنشطة",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-3",
    "slug": "diet-rani",
    "nameAr": "دايت راني فريش",
    "nameEn": "Diet Rani Fresh",
    "descriptionAr": "عصير طبيعي نقي بقطع الفاكهة الطازجة الخفيفة",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-4",
    "slug": "diet-green",
    "nameAr": "دايت جرين الأخضر",
    "nameEn": "Diet Green Detox",
    "descriptionAr": "ديتوكس أخضر طبيعي من الكيوي والتفاح الأخضر والليمون والنعناع",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "isFeatured": true,
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-5",
    "slug": "diet-french-silhouette",
    "nameAr": "دايت عود فرنساوي",
    "nameEn": "Diet French Silhouette",
    "descriptionAr": "خلطة خفيفة ومحلاة طبيعياً بسكر ستيفيا لإنعاش الجسم",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-6",
    "slug": "diet-fruitella",
    "nameAr": "دايت فروتيلا الأصلي",
    "nameEn": "Original Fruitella Diet",
    "descriptionAr": "عصير فروتيلا الخفيف منتقى من أفضل الفواكه قليلة السعرات",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "dt-7",
    "slug": "diet-new-fruitella",
    "nameAr": "دايت جديد فروتيلا",
    "nameEn": "New Fruitella Diet",
    "descriptionAr": "أحدث خلطات دايت فروتيلا المنعشة والخالية تماماً من السكر المضاف",
    "categorySlug": "fruitella-diet",
    "categoryNameAr": "دايت فروتيلا",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس دايت L",
        "nameEn": "Diet Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/avocado-nuts-mango-pair.jpg",
    "tags": [
      "دايت",
      "بدون سكر",
      "صحي",
      "رشاقة"
    ],
    "ingredientsAr": [
      "فواكه طبيعية",
      "ستيفيا حسب الرغبة"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/845122706_122230952036500364_8381756902961745842_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-1",
    "slug": "family-sugarcane",
    "nameAr": "عبوة قصب عائلية",
    "nameEn": "Family Sugarcane Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من قصب للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 50,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 50,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 190,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة قصب عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-2",
    "slug": "family-sugarcane-orange",
    "nameAr": "عبوة قصب بالبرتقال عائلية",
    "nameEn": "Family Sugarcane with Orange",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من قصب بالبرتقال للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 70,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة قصب بالبرتقال عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-3",
    "slug": "family-sugarcane-sobia",
    "nameAr": "عبوة قصب بالسوبيا عائلية",
    "nameEn": "Family Sugarcane with Sobya",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من قصب بالسوبيا للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 70,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة قصب بالسوبيا عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-4",
    "slug": "family-sugarcane-lemon",
    "nameAr": "عبوة قصب بالليمون عائلية",
    "nameEn": "Family Sugarcane with Lemon",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من قصب بالليمون للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 70,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة قصب بالليمون عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-5",
    "slug": "family-sugarcane-icecream",
    "nameAr": "عبوة قصب بالآيس كريم عائلية",
    "nameEn": "Family Sugarcane with Ice Cream",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من قصب بالآيس كريم للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 90,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة قصب بالآيس كريم عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-6",
    "slug": "family-sobia",
    "nameAr": "عبوة سوبيا عائلية",
    "nameEn": "Family Sobya Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من سوبيا للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 85,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 85,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 320,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة سوبيا عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-7",
    "slug": "family-sobia-mango",
    "nameAr": "عبوة سوبيا بالمانجو عائلية",
    "nameEn": "Family Mango Sobya Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من سوبيا بالمانجو للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 120,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 120,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 440,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة سوبيا بالمانجو عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-8",
    "slug": "family-tamarind",
    "nameAr": "عبوة تمر هندي عائلية",
    "nameEn": "Family Tamarind Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من تمر هندي للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 70,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 70,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 270,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة تمر هندي عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-9",
    "slug": "family-carob",
    "nameAr": "عبوة خروب عائلية",
    "nameEn": "Family Carob Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من خروب للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 75,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 280,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة خروب عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-10",
    "slug": "family-ennab",
    "nameAr": "عبوة عناب عائلية",
    "nameEn": "Family Ennab Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من عناب للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 75,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 75,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 280,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة عناب عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-11",
    "slug": "family-doum",
    "nameAr": "عبوة دوم عائلية",
    "nameEn": "Family Doum Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من دوم للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 80,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 300,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة دوم عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-12",
    "slug": "family-doum-milk",
    "nameAr": "عبوة دوم باللبن عائلية",
    "nameEn": "Family Doum with Milk Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من دوم باللبن للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 95,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 95,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 320,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة دوم باللبن عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-13",
    "slug": "family-mango",
    "nameAr": "عبوة مانجو عائلية",
    "nameEn": "Family Mango Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من مانجو للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 110,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 420,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "isBestSeller": true,
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة مانجو عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-14",
    "slug": "family-guava",
    "nameAr": "عبوة جوافة عائلية",
    "nameEn": "Family Guava Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من جوافة للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 85,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 85,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 310,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة جوافة عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-15",
    "slug": "family-strawberry",
    "nameAr": "عبوة فراولة عائلية",
    "nameEn": "Family Strawberry Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من فراولة للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 95,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 95,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 350,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة فراولة عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-16",
    "slug": "family-orange",
    "nameAr": "عبوة برتقال عائلية",
    "nameEn": "Family Orange Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من برتقال للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 90,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 350,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة برتقال عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-17",
    "slug": "family-kiwi",
    "nameAr": "عبوة كيوي عائلية",
    "nameEn": "Family Kiwi Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من كيوي للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 180,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 180,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة كيوي عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-18",
    "slug": "family-avocado",
    "nameAr": "عبوة أفوكادو عائلية",
    "nameEn": "Family Avocado Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من أفوكادو للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 220,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 220,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة أفوكادو عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-19",
    "slug": "family-pineapple",
    "nameAr": "عبوة أناناس عائلية",
    "nameEn": "Family Pineapple Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من أناناس للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 210,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 210,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة أناناس عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-20",
    "slug": "family-dates-milk",
    "nameAr": "عبوة بلح باللبن عائلية",
    "nameEn": "Family Dates with Milk Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من بلح باللبن للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 100,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 100,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 380,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة بلح باللبن عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-21",
    "slug": "family-watermelon",
    "nameAr": "عبوة بطيخ عائلية",
    "nameEn": "Family Watermelon Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من بطيخ للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 90,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 320,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة بطيخ عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-22",
    "slug": "family-lemon",
    "nameAr": "عبوة ليمون عائلية",
    "nameEn": "Family Lemon Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من ليمون للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 80,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 80,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 300,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة ليمون عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-23",
    "slug": "family-lemon-mint",
    "nameAr": "عبوة ليمون نعناع عائلية",
    "nameEn": "Family Lemon Mint Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من ليمون نعناع للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 90,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 320,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة ليمون نعناع عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-24",
    "slug": "family-lemon-milk",
    "nameAr": "عبوة ليمون باللبن عائلية",
    "nameEn": "Family Lemon with Milk Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من ليمون باللبن للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 110,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 110,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 400,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة ليمون باللبن عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-25",
    "slug": "family-banana-milk",
    "nameAr": "عبوة موز باللبن عائلية",
    "nameEn": "Family Banana with Milk Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من موز باللبن للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 95,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 95,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 350,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة موز باللبن عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-26",
    "slug": "family-cantaloupe",
    "nameAr": "عبوة كانتالوب عائلية",
    "nameEn": "Family Cantaloupe Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من كانتالوب للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 85,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 85,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "4liter",
        "nameAr": "حجم 4 لتر",
        "nameEn": "4 Liters",
        "price": 320,
        "volumeLabel": "4L",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة كانتالوب عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-27",
    "slug": "family-vitamin-c",
    "nameAr": "عبوة فيتامين سي عائلية",
    "nameEn": "Family Vitamin C Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من فيتامين سي للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 130,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة فيتامين سي عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-28",
    "slug": "family-tangerine",
    "nameAr": "عبوة يوسفي عائلية",
    "nameEn": "Family Tangerine Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من يوسفي للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 90,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 90,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة يوسفي عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-29",
    "slug": "family-blender-mix",
    "nameAr": "عبوة ميكس خلاط عائلية",
    "nameEn": "Family Blender Mix Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من ميكس خلاط للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 130,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة ميكس خلاط عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "fp-30",
    "slug": "family-nos-darba",
    "nameAr": "عبوة نص ضربة عائلية",
    "nameEn": "Family Nos Darba Chunks Pack",
    "descriptionAr": "عبوة عائلية اقتصادية بحجم لتر أو 4 لتر من نص ضربة للمناسبات والجمعات",
    "categorySlug": "family-packs",
    "categoryNameAr": "العبوات العائلية",
    "basePrice": 130,
    "sizes": [
      {
        "id": "liter",
        "nameAr": "حجم لتر",
        "nameEn": "1 Liter",
        "price": 130,
        "volumeLabel": "1L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "عائلي",
      "لتر",
      "توفير",
      "حجم كبير"
    ],
    "ingredientsAr": [
      "عبوة نص ضربة عائلية"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788766524_122224677374500364_8901415176824020145_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-1",
    "slug": "espresso-single-double",
    "nameAr": "إسبريسو سينجل / دبل",
    "nameEn": "Espresso Single / Double",
    "descriptionAr": "إسبريسو إيطالي أصلي غني بالكريمة والنكهة القوية",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 50,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (سينجل)",
        "nameEn": "Single (S)",
        "price": 50,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "d",
        "nameAr": "حجم D (دبل)",
        "nameEn": "Double (D)",
        "price": 65,
        "volumeLabel": "D",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-2",
    "slug": "espresso-con-panna",
    "nameAr": "إسبريسو كوبا بالكريمة",
    "nameEn": "Espresso Con Panna",
    "descriptionAr": "شوت إسبريسو غني تعلوه طبقة من الكريمة المخفوقة الفاخرة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-3",
    "slug": "macchiato",
    "nameAr": "ماكياتو سينجل / دبل",
    "nameEn": "Macchiato Single / Double",
    "descriptionAr": "إسبريسو مع نقطة حليب ورغوة مخملية",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 60,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (سينجل)",
        "nameEn": "Single (S)",
        "price": 60,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "d",
        "nameAr": "حجم D (دبل)",
        "nameEn": "Double (D)",
        "price": 70,
        "volumeLabel": "D",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-4",
    "slug": "cappuccino",
    "nameAr": "كابتشينو إيطالي",
    "nameEn": "Italian Cappuccino",
    "descriptionAr": "توازن مثالي بين الإسبريسو والحليب المبخر والرغوة الكثيفة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 85,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (صغير)",
        "nameEn": "Small (S)",
        "price": 85,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "m",
        "nameAr": "حجم M (متوسط)",
        "nameEn": "Medium (M)",
        "price": 100,
        "volumeLabel": "M",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-5",
    "slug": "caffe-latte",
    "nameAr": "كافيه لاتيه ناعم",
    "nameEn": "Caffè Latte",
    "descriptionAr": "إسبريسو غني مع كمية سخية من الحليب المبخر الناعم",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (صغير)",
        "nameEn": "Small (S)",
        "price": 80,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "m",
        "nameAr": "حجم M (متوسط)",
        "nameEn": "Medium (M)",
        "price": 100,
        "volumeLabel": "M",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-6",
    "slug": "flat-white",
    "nameAr": "فلات وايت أسترالي",
    "nameEn": "Flat White",
    "descriptionAr": "دبل ريستريتو مع حليب ميكروفوم حريري",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (صغير)",
        "nameEn": "Small (S)",
        "price": 80,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "m",
        "nameAr": "حجم M (متوسط)",
        "nameEn": "Medium (M)",
        "price": 100,
        "volumeLabel": "M",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-7",
    "slug": "americano",
    "nameAr": "أمريكانو ساخن",
    "nameEn": "Hot Americano",
    "descriptionAr": "إسبريسو ممدد بالماء الساخن لنكهة قهوة سوداء نقية",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 70,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (صغير)",
        "nameEn": "Small (S)",
        "price": 70,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "m",
        "nameAr": "حجم M (متوسط)",
        "nameEn": "Medium (M)",
        "price": 90,
        "volumeLabel": "M",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-8",
    "slug": "cortado",
    "nameAr": "كورتادو إسباني",
    "nameEn": "Spanish Cortado",
    "descriptionAr": "نسبة متساوية تماماً 1:1 من الإسبريسو والحليب المبخر الدافئ",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-9",
    "slug": "spanish-latte-hot",
    "nameAr": "إسبانيش لاتيه ساخن",
    "nameEn": "Hot Spanish Latte",
    "descriptionAr": "إسبريسو مع الحليب المكثف المحلى والحليب المبخر الفاخر",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 125,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 125,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-10",
    "slug": "hot-lotus-latte",
    "nameAr": "هوت لوتس لاتيه",
    "nameEn": "Hot Lotus Biscoff Latte",
    "descriptionAr": "لاتيه ساخن ممزوج بزبدة وبسكويت اللوتس المقرمش",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 125,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 125,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-11",
    "slug": "salted-caramel-latte",
    "nameAr": "سولتد كاراميل لاتيه",
    "nameEn": "Salted Caramel Latte",
    "descriptionAr": "لاتيه دافئ بالكراميل المملح ونكهة غنية فاخرة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 125,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 125,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-12",
    "slug": "pistachio-latte-hot",
    "nameAr": "بيستاشيو لاتيه ساخن",
    "nameEn": "Hot Pistachio Latte",
    "descriptionAr": "إسبريسو مع صوص الفستق الحلبي الطبيعي والحليب المبخر",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 135,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 135,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isFeatured": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-13",
    "slug": "hot-mocha",
    "nameAr": "موكا ساخنة",
    "nameEn": "Hot Caffè Mocha",
    "descriptionAr": "إسبريسو وشوكولاتة بلجيكية وحليب مبخر ساخن",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-14",
    "slug": "hot-white-mocha",
    "nameAr": "وايت موكا ساخنة",
    "nameEn": "Hot White Chocolate Mocha",
    "descriptionAr": "إسبريسو مع الشوكولاتة البيضاء والحليب المبخر المخملي",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-15",
    "slug": "hot-chocolate",
    "nameAr": "هوت شوكليت فاخر",
    "nameEn": "Rich Hot Chocolate",
    "descriptionAr": "شوكولاتة بالحليب غنية ومكثفة ودافئة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 80,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S",
        "nameEn": "Small (S)",
        "price": 80,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "m",
        "nameAr": "حجم M",
        "nameEn": "Medium (M)",
        "price": 100,
        "volumeLabel": "M",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-16",
    "slug": "hot-apple-cider",
    "nameAr": "هوت أبل سيدر بالقرفة",
    "nameEn": "Hot Apple Cider Cinnamon",
    "descriptionAr": "عصير تفاح ساخن مع عيدان القرفة العطرية",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-17",
    "slug": "black-tea",
    "nameAr": "شاي أحمر كلاسيك",
    "nameEn": "Classic Black Tea",
    "descriptionAr": "شاي أسود فاخر مخمر ومقدم ساخناً",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 25,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 25,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-18",
    "slug": "green-tea",
    "nameAr": "شاي أخضر نقي",
    "nameEn": "Pure Green Tea",
    "descriptionAr": "أوراق الشاي الأخضر الطبيعي النقي والصحي",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 25,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 25,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-19",
    "slug": "green-tea-mint",
    "nameAr": "شاي أخضر بالنعناع",
    "nameEn": "Green Tea with Fresh Mint",
    "descriptionAr": "شاي أخضر مع أوراق النعناع الفريش العطرة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 30,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 30,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-20",
    "slug": "tea-latte",
    "nameAr": "شاي لاتيه (كرك)",
    "nameEn": "Tea Latte Karak",
    "descriptionAr": "شاي أسود مغلي بالحليب الطبيعي والهيل بنكهة شرقية",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 40,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 40,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-21",
    "slug": "turkish-coffee",
    "nameAr": "قهوة تركي على الريحة / مضبوط",
    "nameEn": "Turkish Coffee Single / Double",
    "descriptionAr": "بن تركي مطحون طازج ومطهو على الرمال الساخنة بوش كثيف",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 40,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S (سينجل)",
        "nameEn": "Single (S)",
        "price": 40,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "d",
        "nameAr": "حجم D (دبل)",
        "nameEn": "Double (D)",
        "price": 55,
        "volumeLabel": "D",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "isBestSeller": true,
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-22",
    "slug": "french-coffee",
    "nameAr": "قهوة فرنساوي باللبن",
    "nameEn": "French Coffee with Milk",
    "descriptionAr": "بن فاخر مع الحليب المبخر بنكهة فرنسية ناعمة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 60,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-23",
    "slug": "hazelnut-coffee",
    "nameAr": "قهوة بندق فواحة",
    "nameEn": "Hazelnut Infused Coffee",
    "descriptionAr": "قهوة غنية بنكهة البندق المحمص المطحون",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "hd-24",
    "slug": "caramel-coffee",
    "nameAr": "قهوة بالكراميل",
    "nameEn": "Caramel Infused Coffee",
    "descriptionAr": "قهوة تركية مع لمسة كراميل سكرية دافئة",
    "categorySlug": "hot-drinks",
    "categoryNameAr": "المشروبات الساخنة",
    "basePrice": 60,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب ساخن قياسي",
        "nameEn": "Standard Hot Cup",
        "price": 60,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/brand/fruitella-logo.jpg",
    "tags": [
      "ساخن",
      "قهوة",
      "شاي",
      "إسبريسو"
    ],
    "ingredientsAr": [
      "بن مميز / شاي",
      "حليب حسب الطلب"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-1",
    "slug": "iced-latte",
    "nameAr": "آيس لاتيه مثلج",
    "nameEn": "Iced Latte",
    "descriptionAr": "إسبريسو طازج مع حليب بارد وقطع ثلج لانتعاش الصباح",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 100,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 100,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-2",
    "slug": "iced-pistachio-latte",
    "nameAr": "آيس بيستاشيو لاتيه رويال",
    "nameEn": "Iced Pistachio Latte Royal",
    "descriptionAr": "إسبريسو مع صوص الفستق الحلبي الإيطالي والحليب البارد والثلج",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-3",
    "slug": "iced-americano",
    "nameAr": "آيس أمريكانو",
    "nameEn": "Iced Americano",
    "descriptionAr": "شوت إسبريسو مزدوج مع الماء البارد ومكعبات الثلج",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 70,
    "sizes": [
      {
        "id": "s",
        "nameAr": "حجم S",
        "nameEn": "Small (S)",
        "price": 70,
        "volumeLabel": "S",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "m",
        "nameAr": "حجم M",
        "nameEn": "Medium (M)",
        "price": 90,
        "volumeLabel": "M",
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-4",
    "slug": "iced-lotus-latte",
    "nameAr": "آيس لوتس لاتيه",
    "nameEn": "Iced Lotus Biscoff Latte",
    "descriptionAr": "إسبريسو وزبدة اللوتس بالحليب البارد وبسكويت لوتس مقرمش",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-5",
    "slug": "iced-salted-caramel",
    "nameAr": "آيس سولتد كاراميل",
    "nameEn": "Iced Salted Caramel Latte",
    "descriptionAr": "إسبريسو بارد مع صوص الكراميل المملح والحليب المثلج",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 125,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 125,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-6",
    "slug": "iced-caramel-latte",
    "nameAr": "آيس كاراميل لاتيه",
    "nameEn": "Iced Caramel Latte",
    "descriptionAr": "إسبريسو وحليب مثلج مع صوص الكراميل الذهبي الناعم",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 125,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 125,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-7",
    "slug": "iced-mocha",
    "nameAr": "آيس موكا شوكولاتة",
    "nameEn": "Iced Caffè Mocha",
    "descriptionAr": "مزيج الإسبريسو والشوكولاتة بالحليب البارد والثلج",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cd-8",
    "slug": "iced-white-mocha",
    "nameAr": "آيس وايت موكا",
    "nameEn": "Iced White Mocha",
    "descriptionAr": "شوكولاتة بيضاء ناعمة مع إسبريسو وحليب بارد ومكعبات ثلج",
    "categorySlug": "cold-drinks",
    "categoryNameAr": "كولد درينك",
    "basePrice": 130,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كوب بارد مثلج",
        "nameEn": "Iced Cup L",
        "price": 130,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "مثلج",
      "قهوة مثلجة",
      "آيس لاتيه"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب بارد",
      "ثلج"
    ],
    "dietary": {
      "isNatural": true,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-1",
    "slug": "redbull-original",
    "nameAr": "ريد بول أصلي",
    "nameEn": "Red Bull Energy Drink",
    "descriptionAr": "عبوة مشروب الطاقة ريدبول الأصلية المنعشة مبردة ومثلجة",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 85,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-2",
    "slug": "redbull-sugarfree",
    "nameAr": "ريد بول شوجر فري",
    "nameEn": "Red Bull Sugarfree",
    "descriptionAr": "ريد بول طاقة خالي تماماً من السكر والسعرات الحرارية",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": true,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-3",
    "slug": "redbull-espresso-shot",
    "nameAr": "ريد بول إسبريسو شوت",
    "nameEn": "Red Bull Espresso Shot",
    "descriptionAr": "عبوة ريدبول مثلجة مع شوت إسبريسو إيطالي طازج لطاقة مضاعفة",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 125,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 125,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-4",
    "slug": "mojito-redbull-strawberry",
    "nameAr": "موخيتو ريد بول فراولة",
    "nameEn": "Red Bull Strawberry Mojito",
    "descriptionAr": "ريدبول فوار مع الفراولة والنعناع والليمون ومكعبات الثلج",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-5",
    "slug": "mojito-redbull-peach",
    "nameAr": "موخيتو ريد بول خوخ",
    "nameEn": "Red Bull Peach Mojito",
    "descriptionAr": "ريدبول منعش مع نكهة الخوخ السكري وأوراق النعناع الفريش",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-6",
    "slug": "mojito-redbull-kiwi",
    "nameAr": "موخيتو ريد بول كيوي",
    "nameEn": "Red Bull Kiwi Mojito",
    "descriptionAr": "ريدبول بنكهة الكيوي الحامضة والمنعشة مع الليمون",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sd-7",
    "slug": "mojito-redbull-blueberry",
    "nameAr": "موخيتو ريد بول بلو بيري",
    "nameEn": "Red Bull Blueberry Mojito",
    "descriptionAr": "ريدبول ممزوج بالتوت الأزرق الملكي والثلج المجروش",
    "categorySlug": "soft-drinks",
    "categoryNameAr": "سوفت درينك",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "عبوة / كأس مبرد",
        "nameEn": "Chilled Serving",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "ريدبول",
      "طاقة",
      "غازي",
      "موخيتو"
    ],
    "ingredientsAr": [
      "ريدبول",
      "نعناع",
      "ليمون"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": false
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-1",
    "slug": "latte-frappe",
    "nameAr": "لاتيه فريبيه مثلج",
    "nameEn": "Classic Latte Frappe",
    "descriptionAr": "قهوة مثلجة مخفوقة بالكريمة والثلج المجروش بقوام كثيف",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 140,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 140,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-2",
    "slug": "caramel-latte-frappe",
    "nameAr": "كاراميل لاتيه فريبيه",
    "nameEn": "Caramel Latte Frappe",
    "descriptionAr": "فريبيه اللاتيه مع صوص الكراميل الغني وكريمة مخفوقة",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-3",
    "slug": "salted-caramel-latte-frappe",
    "nameAr": "سولتد كاراميل لاتيه فريبيه",
    "nameEn": "Salted Caramel Latte Frappe",
    "descriptionAr": "فريبيه بالكراميل المملح ونكهة غنية استثنائية",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-4",
    "slug": "chocolate-frappe",
    "nameAr": "شوكولات فريبيه غني",
    "nameEn": "Rich Chocolate Frappe",
    "descriptionAr": "فريبيه الشوكولاتة البلجيكية المثلج والمزين بصلصة الشوكولاتة",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 135,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 135,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-5",
    "slug": "chocolate-latte-frappe",
    "nameAr": "شوكولات لاتيه فريبيه",
    "nameEn": "Chocolate Latte Frappe",
    "descriptionAr": "مزيج فاخر يجمع القهوة والشوكولاتة بالثلج المجروش والكريمة",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-6",
    "slug": "oreo-frappe",
    "nameAr": "أوريو فريبيه كوكيز",
    "nameEn": "Oreo Cookies Frappe",
    "descriptionAr": "فريبيه الأوريو الأصلي مع فتات البسكويت المقرمش والكريمة",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isBestSeller": true,
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-7",
    "slug": "oreo-coffee-frappe",
    "nameAr": "أوريو كوفي فريبيه",
    "nameEn": "Oreo Coffee Mocha Frappe",
    "descriptionAr": "مزيج الأوريو مع شوت قهوة الإسبريسو والكريمة المخفوقة",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 150,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 150,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "cf-8",
    "slug": "express-frappe",
    "nameAr": "إكسبرس فريبيه كينج",
    "nameEn": "Express Signature Frappe",
    "descriptionAr": "فريبيه الإسبريسو المكثف الفاخر المخصص لعشاق القهوة المركزة",
    "categorySlug": "cold-frappe",
    "categoryNameAr": "كولد فريبيه",
    "basePrice": 160,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "كأس فريبيه L",
        "nameEn": "Frappe Cup L",
        "price": 160,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/signature-four-drinks.jpg",
    "isFeatured": true,
    "tags": [
      "فريبيه",
      "مثلج",
      "قهوة",
      "كريمة"
    ],
    "ingredientsAr": [
      "إسبريسو",
      "حليب",
      "ثلج مجروش",
      "كريمة"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/788385102_122224677386500364_2708389542535036758_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-1",
    "slug": "nutella-waffle",
    "nameAr": "وافل نوتيلا بلجيكي",
    "nameEn": "Belgian Nutella Waffle",
    "descriptionAr": "وافل طازج مقرمش من الخارج وطري من الداخل مغطى بغزارة بالنوتيلا",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "isBestSeller": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-2",
    "slug": "lotus-waffle",
    "nameAr": "وافل لوتس مقرمش",
    "nameEn": "Lotus Biscoff Waffle",
    "descriptionAr": "وافل طازج بصلصة وبسكويت اللوتس المقرمش والكراميل",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-3",
    "slug": "white-chocolate-waffle",
    "nameAr": "وافل وايت شوكليت",
    "nameEn": "White Chocolate Waffle",
    "descriptionAr": "وافل بلجيكي مغطى بالشوكولاتة البيضاء السويسرية الناعمة",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 95,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 95,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-4",
    "slug": "waffle-icecream",
    "nameAr": "وافل نوتيلا أو لوتس بالآيس كريم",
    "nameEn": "Waffle Nutella/Lotus with Ice Cream",
    "descriptionAr": "وافل ساخن مغطى بالنوتيلا أو اللوتس مع بولة آيس كريم فانيليا باردة",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 105,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 105,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "isFeatured": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-5",
    "slug": "fruit-waffle",
    "nameAr": "وافل فواكه قطع وشوكولاتة",
    "nameEn": "Fresh Fruits Waffle",
    "descriptionAr": "وافل طازج مزين بقطع الفراولة والمانجو والموز والشوكولاتة",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 120,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 120,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "isFeatured": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-6",
    "slug": "mini-pancake",
    "nameAr": "ميني بان كيك فروتيلا",
    "nameEn": "Fruitella Mini Pancakes",
    "descriptionAr": "حبات ميني بان كيك هشة وذهبية مخبوزة طازجة مع اختيارك من الصوصات",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 60,
    "sizes": [
      {
        "id": "12pcs",
        "nameAr": "12 قطعة",
        "nameEn": "12 Pieces",
        "price": 60,
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      },
      {
        "id": "24pcs",
        "nameAr": "24 قطعة",
        "nameEn": "24 Pieces",
        "price": 110,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/waffle-weekend-promo.jpg",
    "isBestSeller": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-7",
    "slug": "molten-cake",
    "nameAr": "مولتن كيك الشوكولاتة الذائبة",
    "nameEn": "Lava Molten Cake",
    "descriptionAr": "كيك الشوكولاتة الساخن بقلب الشوكولاتة الذائبة السائلة مع بولة آيس كريم",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/molten-cake.jpg",
    "isFeatured": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-8",
    "slug": "despacito-cake",
    "nameAr": "كيك ديسباسيتو البرازيلي",
    "nameEn": "Despacito Chocolate Cake",
    "descriptionAr": "كيكة شوكولاتة غنية مشربة بموس الشوكولاتة والجاناش الفاخر",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-9",
    "slug": "crepe-nutella-lotus",
    "nameAr": "كريب نوتيلا أو لوتس",
    "nameEn": "Nutella or Lotus Crepe",
    "descriptionAr": "كريب فرنسي رقيق محشو ومغطى بالنوتيلا أو اللوتس",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 50,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 50,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/fruitella-signature-waffle.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-10",
    "slug": "kashtouta-nutella",
    "nameAr": "قشطوطة نوتيلا فاخرة",
    "nameEn": "Nutella Kashtouta",
    "descriptionAr": "كيكة الحليب والقشطة الغنية المسقية بالكراميل والشوكولاتة نوتيلا",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 75,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 75,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isBestSeller": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-11",
    "slug": "kashtouta-lotus",
    "nameAr": "قشطوطة لوتس",
    "nameEn": "Lotus Kashtouta",
    "descriptionAr": "قشطوطة كيك الحليب بصلصة وبسكويت اللوتس المقرمش",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-12",
    "slug": "kashtouta-pistachio",
    "nameAr": "قشطوطة بيستاشيو ملكية",
    "nameEn": "Royal Pistachio Kashtouta",
    "descriptionAr": "قشطوطة غنية بكريمة الفستق الحلبي الأصلي وقطع الفستق المحمص",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isFeatured": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-13",
    "slug": "kashtouta-nutella-oreo",
    "nameAr": "قشطوطة نوتيلا وأوريو",
    "nameEn": "Nutella & Oreo Kashtouta",
    "descriptionAr": "مزيج القشطوطة مع شوكولاتة النوتيلا وبسكويت الأوريو المقرمش",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-14",
    "slug": "kashtouta-nuts",
    "nameAr": "قشطوطة مكسرات محمصة",
    "nameEn": "Mixed Nuts Kashtouta",
    "descriptionAr": "قشطوطة الحليب والقشطة مغطاة بتشكيلة غنية من المكسرات المحمصة",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 110,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 110,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-15",
    "slug": "kashtouta-mango",
    "nameAr": "قشطوطة مانجو قطع",
    "nameEn": "Fresh Mango Kashtouta",
    "descriptionAr": "قشطوطة مغطاة بقطع مانجو طبيعية فريش وصوص المانجو النقي",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "isBestSeller": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-16",
    "slug": "kashtouta-fruits",
    "nameAr": "قشطوطة فواكه مشكلة",
    "nameEn": "Mixed Fruit Kashtouta",
    "descriptionAr": "قشطوطة طازجة مزينة بمكعبات الفواكه الموسمية والعسل",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 90,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 90,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/kashtouta.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-17",
    "slug": "rice-pudding-plain",
    "nameAr": "أرز باللبن سادة كلاسيك",
    "nameEn": "Classic Plain Rice Pudding",
    "descriptionAr": "أرز باللبن بلدي بوش مكشكش غني ومحضر على الطريقة الأصيلة",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 35,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-18",
    "slug": "rice-pudding-oven",
    "nameAr": "أرز باللبن فرن محمر",
    "nameEn": "Baked Oven Rice Pudding",
    "descriptionAr": "طاجن أرز باللبن مخبوز في الفرن بوش ذهبي مكرمل شهي",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 35,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isBestSeller": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-19",
    "slug": "om-ali-pot",
    "nameAr": "طاجن أم علي بلدي بالسمن واللبن",
    "nameEn": "Traditional Om Ali Hot Pot",
    "descriptionAr": "رقاق مخبوز بالحليب الطبيعي والقشطة والمكسرات مقدم ساخناً من الفرن",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 35,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 35,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/om-ali.jpg",
    "isFeatured": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-20",
    "slug": "rice-pudding-nutella",
    "nameAr": "أرز باللبن بالنوتيلا",
    "nameEn": "Rice Pudding with Nutella",
    "descriptionAr": "أرز باللبن مضاف إليه طبقة سخية من شوكولاتة النوتيلا الذائبة",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-21",
    "slug": "rice-pudding-lotus",
    "nameAr": "أرز باللبن باللوتس",
    "nameEn": "Rice Pudding with Lotus",
    "descriptionAr": "أرز باللبن بكريمة وبسكويت اللوتس البلجيكي",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 70,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 70,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-22",
    "slug": "rice-pudding-nuts",
    "nameAr": "أرز باللبن بالمكسرات الفاخرة",
    "nameEn": "Rice Pudding with Premium Nuts",
    "descriptionAr": "أرز باللبن غني بالكاجو واللوز والبندق المحمص والزبيب وجوز الهند",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 85,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 85,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isBestSeller": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": true,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  },
  {
    "id": "sw-23",
    "slug": "rice-pudding-mango",
    "nameAr": "أرز باللبن مانجو قطع",
    "nameEn": "Rice Pudding with Mango Chunks",
    "descriptionAr": "أرز باللبن مثلج مغطى بقطع مانجو كيت فريش وصوص المانجو",
    "categorySlug": "sweets-desserts",
    "categoryNameAr": "الحلو من فروتيلا",
    "basePrice": 80,
    "sizes": [
      {
        "id": "regular",
        "nameAr": "حصة حلويات قياسية",
        "nameEn": "Dessert Portion",
        "price": 80,
        "volumeLabel": "L",
        "isDefault": true,
        "availability": "available",
        "extractionStatus": "verified"
      }
    ],
    "availableAddons": [
      {
        "id": "flavor-caramel",
        "nameAr": "إضافة سيرب كراميل",
        "nameEn": "Caramel Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-vanilla",
        "nameAr": "إضافة سيرب فانيليا",
        "nameEn": "Vanilla Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-hazelnut",
        "nameAr": "إضافة سيرب بندق",
        "nameEn": "Hazelnut Syrup",
        "price": 25,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "flavor-white-cream",
        "nameAr": "إضافة وايت كريم فاخر",
        "nameEn": "Premium White Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nuts",
        "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
        "nameEn": "Mixed Premium Nuts",
        "price": 40,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "nutella",
        "nameAr": "إضافة نوتيلا أصلية",
        "nameEn": "Nutella Drizzle",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "cream",
        "nameAr": "قشطة بلدي طبيعية",
        "nameEn": "Fresh Clotted Cream",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "boba",
        "nameAr": "حبيبات بوبا Boba Pearls",
        "nameEn": "Boba Pearls",
        "price": 30,
        "categoryId": "add-flavor",
        "availability": "available"
      },
      {
        "id": "honey",
        "nameAr": "عسل نحل طبيعي",
        "nameEn": "Pure Natural Honey",
        "price": 10,
        "categoryId": "add-flavor",
        "availability": "available"
      }
    ],
    "image": "/images/products/rice-pudding.jpg",
    "isFeatured": true,
    "tags": [
      "حلويات",
      "وافل",
      "قشطوطة",
      "أرز باللبن",
      "نوتيلا"
    ],
    "ingredientsAr": [
      "حليب بلدي",
      "سكر",
      "قشطة",
      "شوكولاتة / مكسرات"
    ],
    "dietary": {
      "isNatural": false,
      "isSugarFreeAvailable": false,
      "containsNuts": false,
      "containsDairy": true
    },
    "verifiedFromAsset": "raw_assets/844838847_122230951712500364_198089585914876509_n.jpg",
    "extractionStatus": "verified",
    "availability": "available"
  }
];

export const FRUITELLA_ADDONS: ProductAddon[] = [
  {
    "id": "flavor-caramel",
    "nameAr": "إضافة سيرب كراميل",
    "nameEn": "Caramel Syrup",
    "price": 25,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "flavor-vanilla",
    "nameAr": "إضافة سيرب فانيليا",
    "nameEn": "Vanilla Syrup",
    "price": 25,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "flavor-hazelnut",
    "nameAr": "إضافة سيرب بندق",
    "nameEn": "Hazelnut Syrup",
    "price": 25,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "flavor-white-cream",
    "nameAr": "إضافة وايت كريم فاخر",
    "nameEn": "Premium White Cream",
    "price": 30,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "nuts",
    "nameAr": "مكسرات فاخرة (كاجو ولوز وبندق)",
    "nameEn": "Mixed Premium Nuts",
    "price": 40,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "nutella",
    "nameAr": "إضافة نوتيلا أصلية",
    "nameEn": "Nutella Drizzle",
    "price": 30,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "cream",
    "nameAr": "قشطة بلدي طبيعية",
    "nameEn": "Fresh Clotted Cream",
    "price": 30,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "boba",
    "nameAr": "حبيبات بوبا Boba Pearls",
    "nameEn": "Boba Pearls",
    "price": 30,
    "categoryId": "add-flavor",
    "availability": "available"
  },
  {
    "id": "honey",
    "nameAr": "عسل نحل طبيعي",
    "nameEn": "Pure Natural Honey",
    "price": 10,
    "categoryId": "add-flavor",
    "availability": "available"
  }
];
