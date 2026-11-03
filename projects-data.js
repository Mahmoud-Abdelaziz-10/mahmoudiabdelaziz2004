/**
 * =====================================================================
 * MAHMOUD I ABDELAZIZ - LANDSCAPE & IRRIGATION ENGINEERING PORTFOLIO
 * PROJECTS DATA & BILINGUAL TRANSLATIONS FILE
 * =====================================================================
 * 
 * All files for each software are grouped into one collection:
 * - AutoCAD: All 28 technical drawings
 * - Realtime Landscaping: All 9 3D landscape renders
 * - SketchUp: All 21 3D architectural models
 * - Lumion: All 5 photorealistic visual renders
 */

const PORTFOLIO_DATA = {
  engineer: {
    name: "Mahmoud I Abdelaziz",
    nameAr: "محمود إبراهيم عبد العزيز",
    role: "Landscape & Irrigation Engineer",
    roleAr: "مهندس لاندسكيب وشبكات ري",
    status: "Recent Graduate | Design & Technical Drafting Specialist",
    statusAr: "خريج حديث | أخصائي تصميم ومخططات هندسية تنفيذية",
    bio: "Passionate Landscape & Irrigation Engineering graduate specializing in functional outdoor space design, 2D technical drafting, hydraulic irrigation network layout, and realistic 3D landscape visualization. Dedicated to sustainable water management, aesthetic hardscape/softscape harmony, and precision CAD drafting.",
    bioAr: "مهندس لاندسكيب وشبكات ري شغوف، خريج حديث متخصص في تصميم المساحات الخارجية الوظيفية، وإعداد المخططات التنفيذية ثنائية الأبعاد (2D CAD)، وتصميم شبكات الري وحساباتها الهيدروليكية، ونمذجة وتجسيد اللاندسكيب ثلاثي الأبعاد (3D Visualization). ملتزم بإدارة المياه المستدامة والتوازن بين العناصر الصلبة (Hardscape) والنباتية (Softscape).",
    location: "Available for Remote & On-Site Opportunities",
    locationAr: "متاح لفرص العمل الحضورية وعن بُعد",
    email: "mahmoud.i.abdelaziz.2004@gmail.com",
    phone: "+20 100 000 0000",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
    avatar: "images/profile/IMG-20260628-WA0450.jpg"
  },

  // Bilingual UI dictionary
  i18n: {
    en: {
      siteTitle: "Mahmoud I Abdelaziz | Landscape & Irrigation Engineer Portfolio",
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navSoftware: "Software",
      navContact: "Contact",
      navCta: "Get in Touch",
      langSwitchLabel: "العربية",

      heroBadge: "Recent Graduate Engineer",
      heroTitlePrefix: "Landscape & ",
      heroTitleAccent: "Irrigation",
      heroTitleSuffix: " Engineering Portfolio",
      heroSubtitle: "Fresh graduate engineer specializing in architectural landscape planning, hydraulic irrigation network distribution, precision 2D AutoCAD drafting, and realistic 3D spatial visualization.",
      btnViewProjects: "View Design Projects",
      btnContact: "Contact Engineer",

      specCad: "AutoCAD 2D Drafting",
      specIrrigation: "Hydraulic Irrigation Piping",
      specRealtime: "Realtime Landscaping",
      specSketchup: "SketchUp 3D Modeling",
      specLandscape: "Softscape & Hardscape",

      statProjects: "Software Portfolios",
      statImages: "Drawings & 3D Views",
      statHonest: "Honest Practice Work",
      statHonestVal: "100%",
      statTools: "Specialized CAD/3D Tools",

      aboutBadge: "Background & Approach",
      aboutTitle: "Engineering Precision Meets ",
      aboutTitleAccent: "Landscape Artistry",
      aboutSubtitle: "An honest presentation of foundational skills, technical drafting discipline, and engineering problem-solving as an aspiring professional.",
      aboutCardTitle: "Recent Graduate Engineer",
      aboutP1: "As a dedicated graduate in Landscape and Irrigation Engineering, I bridge the gap between creative outdoor spatial aesthetics and rigorous hydraulic infrastructure. My academic background and extensive practice projects have focused on developing buildable, sustainable, and water-efficient landscape designs.",
      aboutP2: "Every drawing and 3D visualization featured in this portfolio reflects hands-on training across residential villa concepts, 2D AutoCAD construction details, irrigation piping and zoning calculations, and 3D modeled garden walk-throughs.",
      aboutP3: "I am seeking entry-level engineering and drafting opportunities where I can apply my CAD proficiency, learn on active sites, and contribute to forward-thinking landscape developments.",

      pillar1Title: "2D Technical Drafting",
      pillar1Desc: "Clean AutoCAD layouts, dimensioned hardscape plans, construction details, and layer-standardized sheets ready for site execution.",
      pillar2Title: "Irrigation Hydraulics",
      pillar2Desc: "Mainline routing, lateral sizing, emitter flow rates, precipitation rate calculation, and zoning according to plant water needs.",
      pillar3Title: "3D Spatial Modeling",
      pillar3Desc: "Translating 2D landscape boundaries into SketchUp massing models, pergolas, retaining walls, and outdoor living structures.",
      pillar4Title: "Softscape Harmony",
      pillar4Desc: "Planting schedules, canopy layer hierarchy, specimen tree positioning, and climate-adapted species grouping.",

      skillsBadge: "Competencies",
      skillsTitle: "Technical Skills & ",
      skillsTitleAccent: "Software Toolkit",
      skillsSubtitle: "Proficiencies cultivated through academic curriculum, project coursework, and independent software training.",
      colSkillsTitle: "Engineering Competencies",
      colSoftwareTitle: "Software Proficiency",

      skillsList: [
        "Landscape Architectural Layout",
        "Irrigation Piping & Zoning",
        "Hydraulic Calculations (Friction Loss)",
        "Sprinkler Coverage Arc Drafting",
        "Drip Irrigation System Design",
        "Hardscape Paving & Edge Restraints",
        "Plant Palette & Planting Schedules",
        "Bill of Quantities (BOQ) Takeoffs"
      ],

      projectsBadge: "Portfolio Work",
      projectsTitle: "Featured ",
      projectsTitleAccent: "Design & Drafting",
      projectsTitleSuffix: " Work",
      projectsSubtitle: "All projects grouped by software. Click any software to inspect all associated technical drawings and 3D visualizations in full resolution.",
      searchPlaceholder: "Search by software (AutoCAD, SketchUp, Realtime Landscaping, Other Programs)...",
      
      tabAll: "All Software",
      tabAutocad: "AutoCAD",
      tabRealtime: "Realtime Landscaping",
      tabSketchup: "SketchUp",
      tabOther: "Other Programs",

      viewsCount: "Files",
      inspectBtn: "Inspect",
      noProjectsFound: "No files found",
      noProjectsHint: "Try selecting another software tab above.",

      editBannerTitle: "💡 Need to add or update your files?",
      editBannerDesc: "All software files are organized in projects-data.js and images/ folder. You can easily add more drawings or replace images anytime.",
      editBannerBtn: "View Instructions",

      contactBadge: "Get in Touch",
      contactTitle: "Let's Discuss ",
      contactTitleAccent: "Opportunities",
      contactSubtitle: "Open to entry-level landscape engineering positions, CAD drafting roles, and collaborative design projects.",
      contactEmailLabel: "Direct Email",
      contactLocationLabel: "Location & Mobility",
      contactLocationVal: "Available for On-Site & Remote Roles",
      contactStatusLabel: "Status",
      contactStatusVal: "Recent Graduate Engineer",

      formNameLabel: "Your Name",
      formNamePlaceholder: "e.g. Eng. Ahmed Salem",
      formEmailLabel: "Your Email",
      formEmailPlaceholder: "e.g. name@company.com",
      formSubjectLabel: "Subject",
      formSubjectPlaceholder: "e.g. Landscape Engineering Job Opportunity / Project Inquiry",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Write your message here...",
      formSubmitBtn: "Send Message via Email",
      formSuccessNotice: "Opening your email client to send this message directly to Mahmoud I Abdelaziz...",

      footerTagline: "Landscape & Irrigation Engineer. Dedicated to sustainable outdoor space design, hydraulic irrigation precision, and high-fidelity CAD drafting.",
      footerNavTitle: "Quick Navigation",
      footerSpecTitle: "Specializations",
      footerCopyright: "© 2026 Mahmoud I Abdelaziz. All rights reserved.",
      footerSubtext: "Landscape & Irrigation Engineering Portfolio"
    },

    ar: {
      siteTitle: "محمود إبراهيم عبد العزيز | معرض أعمال مهندس لاندسكيب وشبكات ري",
      navHome: "الرئيسية",
      navAbout: "عن المهندس",
      navSkills: "المهارات",
      navProjects: "المشاريع",
      navSoftware: "البرامج",
      navContact: "تواصل معي",
      navCta: "تواصل الآن",
      langSwitchLabel: "English",

      heroBadge: "مهندس خريج حديث",
      heroTitlePrefix: "معرض أعمال هندسة ",
      heroTitleAccent: "اللاندسكيب وشبكات الري",
      heroTitleSuffix: "",
      heroSubtitle: "مهندس خريج حديث متخصص في التخطيط المعماري للحدائق والمساحات الخضراء، وتوزيع شبكات الري وحساباتها الهيدروليكية، والمخططات التنفيذية الدقيقة ببرنامج أوتوكاد، والتجسيد ثلاثي الأبعاد الواقعي.",
      btnViewProjects: "استعراض المشاريع والتصميمات",
      btnContact: "تواصل مع المهندس",

      specCad: "مخططات أوتوكاد 2D التنفيذية",
      specIrrigation: "شبكات الري الهيدروليكية",
      specRealtime: "ريل تايم لاندسكيب Realtime",
      specSketchup: "نمذجة سكتش أب 3D SketchUp",
      specLandscape: "تنسيق الهاردسكيب والسوفتسكيب",

      statProjects: "حقائب البرامج",
      statImages: "مخطط وريندر ثلاثي الأبعاد",
      statHonest: "تصاميم تدريبية وأكاديمية واقعية",
      statHonestVal: "100%",
      statTools: "برامج هندسية متخصصة",

      aboutBadge: "الخلفية والمنهجية",
      aboutTitle: "الدقة الهندسية تلتقي مع ",
      aboutTitleAccent: "فن تنسيق المواقع",
      aboutSubtitle: "عرض واقعي وأمين للمهارات الأساسية، والانضباط في الرسم الهندسي التنفيذي، وحل المشكلات الهندسية كمهندس طموح.",
      aboutCardTitle: "مهندس خريج حديث",
      aboutP1: "بصفتي خريجاً متخصصاً في هندسة اللاندسكيب وشبكات الري، أجمع بين الناحية الجمالية الإبداعية للمساحات الخارجية والبنية التحتية الهيدروليكية الدقيقة. تركزت دراستي ومشاريعي التدريبية المكثفة على تطوير تصاميم لاندسكيب قابلة للتنفيذ الميداني ومستدامة وموفرة للمياه.",
      aboutP2: "كل مخطط ورسمة ثلاثية الأبعاد معروضة في هذا البورتفوليو تمثل عملاً حقيقياً وممارسة مكثفة تشمل تصاميم حدائق الفلل السكنية، وتفاصيل أوتوكاد التنفيذية الإنشائية، وحسابات أقطار ومحابس شبكات الري، والجولات الافتراضية ثلاثية الأبعاد.",
      aboutP3: "أتطلع لشغل وظائف هندسية ومكتب فني وموقع في بدايات مساري المهني، حيث يمكنني توظيف إتقاني لبرامج الـ CAD والتعلم في مواقع العمل والمساهمة في مشاريع لاندسكيب حديثة ومتميزة.",

      pillar1Title: "الرسم الهندسي التنفيذي (2D CAD)",
      pillar1Desc: "مخططات أوتوكاد منظمة بطبقات قياسية، شاملة الأبعاد للهاردسكيب، والتفاصيل الإنشائية الجاهزة للتنفيذ بالموقع.",
      pillar2Title: "هيدروليكا شبكات الري",
      pillar2Desc: "تخطيط الخطوط الرئيسية والفرعية، حساب الفواقد الاحتكاكية، اختيار الرشاشات والنقاطات، وتوزيع المحابس والمحطات حسب الاحتياجات المائية للنبات.",
      pillar3Title: "النمذجة ثلاثية الأبعاد (3D)",
      pillar3Desc: "تحويل حدود اللاندسكيب إلى كتل ثلاثية الأبعاد بسكتش أب، وتصميم البرجولات الخشبية، والجدران الاستنادية، ومناطق الجلوس الخارجية.",
      pillar4Title: "تناغم الغطاء النباتي (Softscape)",
      pillar4Desc: "جداول تصنيف النباتات، التدرج في ارتفاعات الأشجار والشجيرات ومغطيات التربة، ومراعاة الملاءمة المناخية واستهلاك المياه.",

      skillsBadge: "الجدارات والمهارات",
      skillsTitle: "المهارات الهندسية و",
      skillsTitleAccent: "حقيبة البرامج",
      skillsSubtitle: "كفاءات تم صقلها من خلال المناهج الأكاديمية والمشاريع الدراسية والتدريب الذاتي المستمر.",
      colSkillsTitle: "الكفاءات الهندسية",
      colSoftwareTitle: "إتقان البرمجيات الهندسية",

      skillsList: [
        "التخطيط المعماري وتوزيع اللاندسكيب",
        "تخطيط شبكات ومواسير الري وتقسيم المحابس",
        "الحسابات الهيدروليكية وفواقد الاحتكاك",
        "رسم وتوزيع دوائر تغطية الرشاشات بنسبة تداخل مثالية",
        "تصميم شبكات الري بالتنقيط للشجيرات والزهور",
        "مخططات رصف الهاردسكيب والبردورات",
        "اختيار النباتات وإعداد جداول الزراعة الكمية",
        "حصر الكميات (BOQ) والمقايسات التقديرية"
      ],

      projectsBadge: "أعمال البورتفوليو",
      projectsTitle: "مشاريع ",
      projectsTitleAccent: "التصميم والرسم الهندسي",
      projectsTitleSuffix: " حسب البرنامج",
      projectsSubtitle: "تم تجميع ملفات كل برنامج في مكان واحد متكامل. انقر على أي برنامج لاستعراض كافة لوحاته الهندسية ولقطاته ثلاثية الأبعاد بالحجم الكامل.",
      searchPlaceholder: "ابحث باسم البرنامج (AutoCAD، SketchUp، Realtime Landscaping، برامج أخرى)...",

      tabAll: "جميع البرامج",
      tabAutocad: "أوتوكاد",
      tabRealtime: "ريل تايم لاندسكيب",
      tabSketchup: "سكتش أب",
      tabOther: "برامج أخرى",

      viewsCount: "ملفاً",
      inspectBtn: "استعراض اللوحات",
      noProjectsFound: "لم يتم العثور على ملفات مطابقة",
      noProjectsHint: "اختر برنامجاً آخر من القائمة أعلاه.",

      editBannerTitle: "💡 هل ترغب في إضافة أو تعديل رسوماتك؟",
      editBannerDesc: "جميع ملفات البرامج مجمعة ومنظمة في projects-data.js ومجلد images. يمكنك إضافة رسومات جديدة في أي وقت بسهولة.",
      editBannerBtn: "عرض التعليمات",

      contactBadge: "تواصل معي",
      contactTitle: "دعنا نناقش ",
      contactTitleAccent: "فرص العمل والتعاون",
      contactSubtitle: "مستعد ومتحمس لفرص العمل كمهندس لاندسكيب، مهندس مكتب فني CAD، أو تصميم المشروعات المستقلة.",
      contactEmailLabel: "البريد الإلكتروني المباشر",
      contactLocationLabel: "الموقع ونظام العمل",
      contactLocationVal: "متاح للعمل الحضوري وعن بُعد",
      contactStatusLabel: "الحالة المهنية",
      contactStatusVal: "مهندس خريج حديث",

      formNameLabel: "الاسم الكريم",
      formNamePlaceholder: "مثال: م. أحمد سالم",
      formEmailLabel: "البريد الإلكتروني",
      formEmailPlaceholder: "name@company.com",
      formSubjectLabel: "موضوع الرسالة",
      formSubjectPlaceholder: "فرصة عمل / استفسار عن مشروع لاندسكيب",
      formMessageLabel: "نص الرسالة",
      formMessagePlaceholder: "اكتب رسالتك وتفاصيل المشروع أو الاستفسار هنا...",
      formSubmitBtn: "إرسال الرسالة عبر البريد الإلكتروني",
      formSuccessNotice: "جاري فتح برنامج البريد الإلكتروني لإرسال رسالتك مباشرة إلى المهندس محمود إبراهيم عبد العزيز...",

      footerTagline: "مهندس لاندسكيب وشبكات ري. ملتزم بتصميم المساحات الخارجية المستدامة، وحسابات الري الهيدروليكية الدقيقة، والمخططات التنفيذية عالية الجودة.",
      footerNavTitle: "روابط سريعة",
      footerSpecTitle: "التخصصات الرئيسية",
      footerCopyright: "© 2026 م. محمود إبراهيم عبد العزيز. جميع الحقوق محفوظة.",
      footerSubtext: "معرض أعمال هندسة اللاندسكيب وشبكات الري"
    }
  },

  projects: [
    /* -----------------------------------------------------------
     * 1. AUTOCAD DRAWINGS (ALL 28 SHEETS IN ONE PLACE)
     * ----------------------------------------------------------- */
    {
      id: "autocad-collection",
      software: "AutoCAD",
      category: "autocad",
      coverImage: "images/autocad/1.PNG",
      gallery: [
        "images/autocad/1.PNG",
        "images/autocad/2.PNG",
        "images/autocad/3.png",
        "images/autocad/4.PNG",
        "images/autocad/5.PNG",
        "images/autocad/6.jpg",
        "images/autocad/7.PNG",
        "images/autocad/8.PNG",
        "images/autocad/9.png",
        "images/autocad/10.PNG",
        "images/autocad/11.PNG",
        "images/autocad/12.png",
        "images/autocad/13.PNG",
        "images/autocad/14.PNG",
        "images/autocad/15.PNG",
        "images/autocad/16.PNG",
        "images/autocad/17.PNG",
        "images/autocad/18.PNG",
        "images/autocad/19.PNG",
        "images/autocad/20.PNG",
        "images/autocad/21.PNG",
        "images/autocad/22.PNG",
        "images/autocad/23.PNG",
        "images/autocad/24.PNG",
        "images/autocad/25.PNG",
        "images/autocad/26.PNG",
        "images/autocad/27.PNG",
        "images/autocad/28.PNG"
      ]
    },

    /* -----------------------------------------------------------
     * 2. REALTIME LANDSCAPING (ALL 9 RENDERS IN ONE PLACE)
     * ----------------------------------------------------------- */
    {
      id: "realtime-collection",
      software: "Realtime Landscaping",
      category: "realtime",
      coverImage: "images/realtime/1.PNG",
      gallery: [
        "images/realtime/1.PNG",
        "images/realtime/2.PNG",
        "images/realtime/3.PNG",
        "images/realtime/4.PNG",
        "images/realtime/5.png",
        "images/realtime/6.png",
        "images/realtime/7.png",
        "images/realtime/8.jpg",
        "images/realtime/9.png"
      ]
    },

    /* -----------------------------------------------------------
     * 3. SKETCHUP 3D MODELS (ALL 21 MODELS IN ONE PLACE)
     * ----------------------------------------------------------- */
    {
      id: "sketchup-collection",
      software: "SketchUp",
      category: "sketchup",
      coverImage: "images/sketchup/1.PNG",
      gallery: [
        "images/sketchup/1.PNG",
        "images/sketchup/2.PNG",
        "images/sketchup/3.PNG",
        "images/sketchup/4.PNG",
        "images/sketchup/5.PNG",
        "images/sketchup/6.PNG",
        "images/sketchup/7.PNG",
        "images/sketchup/8.PNG",
        "images/sketchup/9.PNG",
        "images/sketchup/10.PNG",
        "images/sketchup/11.PNG",
        "images/sketchup/12.PNG",
        "images/sketchup/13.png",
        "images/sketchup/14.PNG",
        "images/sketchup/15.png",
        "images/sketchup/16.PNG",
        "images/sketchup/17.jpg",
        "images/sketchup/18.PNG",
        "images/sketchup/19.PNG",
        "images/sketchup/20.jpg",
        "images/sketchup/21.PNG"
      ]
    },

    /* -----------------------------------------------------------
     * 4. OTHER PROGRAMS (ALL 5 VISUALIZATIONS IN ONE PLACE)
     * ----------------------------------------------------------- */
    {
      id: "other-collection",
      software: "Other Programs",
      softwareAr: "برامج أخرى",
      category: "other",
      coverImage: "images/other/1.jpg",
      gallery: [
        "images/other/1.jpg",
        "images/other/2.jpg",
        "images/other/3.jpg",
        "images/other/4.jpg",
        "images/other/5.jpg"
      ]
    }
  ]
};

// Make accessible to browser scripts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
