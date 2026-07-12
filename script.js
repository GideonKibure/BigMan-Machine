// ============================================================
// script.js
// MbeyaTech – Enhanced transitions, animations & scroll effects
// Default Language: Swahili (Kiswahili)
// ============================================================

// ---------- TRANSLATIONS ----------
const translations = {
  en: {
    heroTitle: "Building Innovative Machines for Industry and Communities",
    heroSub: "Manufacturing, Sales, Rentals, and Engineering Solutions",
    viewMachines: "View Machines",
    contactUs: "Contact Us",
    statMachines: "Machines Developed",
    statClients: "Clients Served",
    statSupport: "24/7 Support",
    aboutLabel: "About Us",
    aboutTitle: "Engineering the Future, from Mbeya",
    aboutStory:
      "<strong>Our story</strong> — Founded in Mbeya, we combine local expertise with global engineering standards. We design and manufacture machines that solve real problems for agriculture, construction, and small industries.",
    vision: "To be East Africa's most trusted industrial solutions provider.",
    mission: "Deliver durable, affordable machines and services that empower communities.",
    machinesLabel: "Our Machines",
    machinesTitle: "7 machines. Built to perform.",
    machinesSub: "Each machine is engineered for durability, efficiency, and real-world performance in Tanzanian conditions.",
    galleryLabel: "Gallery",
    galleryTitle: "See Our Machines in Action",
    gallerySub: "Watch videos and browse images of our machines operating in real-world conditions.",
    videosTitle: "Operation Videos",
    video1Title: "Brick Making Machine in Operation",
    video1Desc: "High-speed brick production at a construction site in Mbeya.",
    video2Title: "Grain Milling Machine Demo",
    video2Desc: "Processing maize and wheat for local farmers.",
    video3Title: "Solar Water Pumping System",
    video3Desc: "Efficient water supply for irrigation and community use.",
    imagesTitle: "Photo Gallery",
    servicesLabel: "Services",
    servicesTitle: "End‑to‑end engineering support",
    rentalsLabel: "Rentals",
    rentalsTitle: "Flexible machine rental",
    rentalDesc: "Short‑term or long‑term, we offer affordable rental plans with full technical support and delivery across Tanzania.",
    rentalPeriod: "Flexible periods",
    rentalPrice: "Affordable pricing",
    rentalSupport: "Technical support included",
    rentalDelivery: "Delivery available",
    rentalCta: "Request a Rental Quote",
    whyLabel: "Why Choose Us",
    whyTitle: "Built different. Built better.",
    testimonialLabel: "Testimonials",
    testimonialTitle: "What our clients say",
    contactLabel: "Contact",
    contactTitle: "Let's work together",
    namePlaceholder: "Full Name",
    phonePlaceholder: "Phone Number",
    emailPlaceholder: "Email Address",
    messagePlaceholder: "Message",
    sendMessage: "Send Message",
    address: "Mbeya, Tanzania",
    hours: "Mon–Fri: 8am – 6pm",
    mapLabel: "Interactive map (Mbeya)",
    footerRights: "All rights reserved.",
    buyNow: "Buy Now",
    rentNow: "Rent Now",
  },
  sw: {
    heroTitle: "Suluhisho za Uhandisi kwa Kesho na Jamii",
    heroSub: "Utengenezaji, Uuzaji, Ukodishaji, na Suluhisho za Uhandisi",
    viewMachines: "Tazama Mashine",
    contactUs: "Wasiliana Nasi",
    statMachines: "Mashine Zilizotengenezwa",
    statClients: "Wateja Waliopewa Huduma",
    statSupport: "Msaada 24/7",
    aboutLabel: "Kuhusu Sisi",
    aboutTitle: "Uhandisi wa Baadaye, kutoka Mbeya",
    aboutStory:
      "<strong>Hadithi yetu</strong> — Tulianzishwa Mbeya, tunachanganya utaalamu wa ndani na viwango vya kimataifa vya uhandisi. Tunabuni na kutengeneza mashine zinazosuluhisha matatizo halisi ya kilimo, ujenzi, na viwanda vidogo.",
    vision: "Kuwa mtoa suluhisho wa viwanda anayeaminika zaidi Afrika Mashariki.",
    mission: "Kutoa mashine na huduma za kudumu, za bei nafuu zinazowezesha jamii.",
    machinesLabel: "Mashine Zetu",
    machinesTitle: "Mashine Zimejengwa kufanya kazi.",
    machinesSub: "Kila mashine imeundwa kwa uimara, ufanisi, na utendaji wa hali halisi katika mazingira ya Tanzania.",
    galleryLabel: "Picha",
    galleryTitle: "Tazama Mashine Zetu Zikifanya Kazi",
    gallerySub: "Tazama video na picha za mashine zetu zikifanya kazi katika mazingira halisi.",
    videosTitle: "Video za Uendeshaji",
    video1Title: "Mashine ya Kutengeneza Matofali Ikifanya Kazi",
    video1Desc: "Uzalishaji wa matofali kwa kasi katika eneo la ujenzi Mbeya.",
    video2Title: "Mashine ya Kusaga Nafaka",
    video2Desc: "Kusaga mahindi na ngano kwa wakulima wa ndani.",
    video3Title: "Mfumo wa Kusukuma Maji kwa Jua",
    video3Desc: "Ugavi wa maji kwa ufanisi kwa umwagiliaji na matumizi ya jamii.",
    imagesTitle: "Picha",
    servicesLabel: "Huduma",
    servicesTitle: "Msaada kamili wa uhandisi",
    rentalsLabel: "Ukodishaji",
    rentalsTitle: "Ukodishaji wa mashine unaonyumbulika",
    rentalDesc: "Muda mfupi au mrefu, tunatoa mipango ya kukodisha bei nafuu na msaada kamili wa kiufundi na usafirishaji Tanzania.",
    rentalPeriod: "Vipindi vinavyonyumbulika",
    rentalPrice: "Bei nafuu",
    rentalSupport: "Msaada wa kiufundi umejumuishwa",
    rentalDelivery: "Usafirishaji unapatikana",
    rentalCta: "Omba Nukuu ya Kukodisha",
    whyLabel: "Kwa Nini Utuchague",
    whyTitle: "Tumejengwa tofauti. Tumejengwa bora.",
    testimonialLabel: "Maoni",
    testimonialTitle: "Wateja wetu wanasema nini",
    contactLabel: "Wasiliana",
    contactTitle: "Tufanyie kazi pamoja",
    namePlaceholder: "Jina Kamili",
    phonePlaceholder: "Nambari ya Simu",
    emailPlaceholder: "Barua pepe",
    messagePlaceholder: "Ujumbe",
    sendMessage: "Tuma Ujumbe",
    address: "Mbeya, Tanzania",
    hours: "Jumatatu–Ijumaa: 8am – 6pm",
    mapLabel: "Ramani inayoingiliana (Mbeya)",
    footerRights: "Haki zote zimehifadhiwa.",
    buyNow: "Nunua Sasa",
    rentNow: "Kodisha Sasa",
  },
};

// ---------- STATE ----------
let currentLang = "sw";
let testimonialIndex = 0;
let testimonialInterval = null;
let isTiltEnabled = true;
let scrollTimeout = null;
let mouseMoveTimeout = null;
let particlesEnabled = true;
let isMobileMenuOpen = false;

// ---------- DOM REFS ----------
const langToggle = document.getElementById("langToggle");
const footerLangToggle = document.getElementById("footerLangToggle");
const langIcon = document.getElementById("langIcon");
const langLabel = document.getElementById("langLabel");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const heroBg = document.getElementById("heroBg");
const machinesGrid = document.getElementById("machinesGrid");
const servicesGrid = document.getElementById("servicesGrid");
const whyGrid = document.getElementById("whyGrid");
const testimonialTrack = document.getElementById("testimonialTrack");
const carouselIndicators = document.getElementById("carouselIndicators");
const contactForm = document.getElementById("contactForm");
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const navOverlay = document.getElementById("navOverlay");

// ---------- MACHINE DATA ----------
const machinesData = [
  {
    id: 1,
    nameEn: "Brick Making Machine",
    nameSw: "Mashine ya Kutengeneza Matofali",
    descEn: "High-output brick production for construction.",
    descSw: "Uzalishaji wa matofali kwa kiwango cha juu kwa ujenzi.",
    features: ["15–20 bricks/min", "Diesel/Electric"],
    rentable: true,
    image: "https://images.unsplash.com/photo-1581092335870-84f45c5e75b6?w=400&q=80",
  },
  {
    id: 2,
    nameEn: "Feed Mixing Machine",
    nameSw: "Mashine ya Kuchanganya Chakula cha Wanyama",
    descEn: "Efficient mixing for livestock feed.",
    descSw: "Kuchanganya kwa ufanisi kwa chakula cha mifugo.",
    features: ["500kg/batch", "Stainless steel"],
    rentable: true,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&q=80",
  },
  {
    id: 3,
    nameEn: "Grain Milling Machine",
    nameSw: "Mashine ya Kusaga Nafaka",
    descEn: "Maize, wheat, and sorghum milling.",
    descSw: "Kusaga mahindi, ngano, na mtama.",
    features: ["1–2 tons/hour", "Low maintenance"],
    rentable: false,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
  },
  {
    id: 4,
    nameEn: "Peanut Processing Machine",
    nameSw: "Mashine ya Kusindika Karanga",
    descEn: "Shelling, roasting, and grinding.",
    descSw: "Kukoboa, kukaanga, na kusaga.",
    features: ["Multi-function", "Easy clean"],
    rentable: true,
    image: "https://images.unsplash.com/photo-1581092335870-84f45c5e75b6?w=400&q=80",
  },
  {
    id: 5,
    nameEn: "Charcoal Briquette Machine",
    nameSw: "Mashine ya Kutengeneza Briquette ya Mkaa",
    descEn: "Convert waste to high-energy briquettes.",
    descSw: "Badilisha taka kuwa briquette zenye nishati nyingi.",
    features: ["Eco-friendly", "High pressure"],
    rentable: true,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&q=80",
  },
  {
    id: 6,
    nameEn: "Water Pumping Machine",
    nameSw: "Mashine ya Kusukuma Maji",
    descEn: "Solar and diesel-powered water pumps.",
    descSw: "Pampu za maji za jua na dizeli.",
    features: ["Solar ready", "High lift"],
    rentable: true,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80",
  }
];

// ---------- SERVICES DATA ----------
const servicesData = [
  {
    icon: "fa-fire",
    nameEn: "Welding & Fabrication",
    nameSw: "Uchomeleaji na Utengenezaji",
    descEn: "Custom metal structures and fabrication.",
    descSw: "Miundo maalum ya chuma na utengenezaji.",
  },
  {
    icon: "fa-cogs",
    nameEn: "Machine Manufacturing",
    nameSw: "Utengenezaji wa Mashine",
    descEn: "Design and production of industrial machines.",
    descSw: "Kubuni na utengenezaji wa mashine za viwandani.",
  },
  {
    icon: "fa-tools",
    nameEn: "Machine Installation",
    nameSw: "Ufungaji wa Mashine",
    descEn: "On-site installation services.",
    descSw: "Huduma za ufungaji mahali pa kazi.",
  },
  {
    icon: "fa-wrench",
    nameEn: "Maintenance & Repair",
    nameSw: "Matengenezo na Urekebishaji",
    descEn: "Technical support and servicing.",
    descSw: "Msaada wa kiufundi na huduma.",
  }
];

// ---------- WHY CHOOSE DATA ----------
const whyData = [
  { icon: "fa-map-pin", labelEn: "Local Manufacturing", labelSw: "Utengenezaji wa Ndani" },
  { icon: "fa-gem", labelEn: "Quality Engineering", labelSw: "Uhandisi wa Ubora" },
  { icon: "fa-tag", labelEn: "Affordable Pricing", labelSw: "Bei Nafuu" },
  { icon: "fa-headset", labelEn: "Reliable Support", labelSw: "Msaada wa Kuaminika" },
  { icon: "fa-user-cog", labelEn: "Skilled Technicians", labelSw: "Mafundi wenye Ujuzi" },
  { icon: "fa-puzzle-piece", labelEn: "Custom Solutions", labelSw: "Suluhisho Maalum" },
];

// ---------- TESTIMONIALS DATA ----------
const testimonialsDataArr = [
  {
    name: "John M.",
    textEn: "The brick making machine doubled our production. Highly recommend!",
    textSw: "Mashine ya kutengeneza matofali imeongeza uzalishaji wetu mara mbili. Inapendekezwa sana!",
    stars: 5,
  },
  {
    name: "Grace K.",
    textEn: "Excellent after-sales support and the rental option saved our project.",
    textSw: "Msaada bora wa baada ya mauzo na chaguo la kukodisha liliokoa mradi wetu.",
    stars: 5,
  },
  {
    name: "David R.",
    textEn: "Reliable machines and professional team. They understand local needs.",
    textSw: "Mashine za kuaminika na timu ya kitaalamu. Wanaelewa mahitaji ya ndani.",
    stars: 4,
  },
];

// ---------- RENDER FUNCTIONS ----------
function renderMachines(lang) {
  const isEn = lang === "en";
  machinesGrid.innerHTML = machinesData
    .map(
      (m, index) => `
    <div class="machine-card stagger-item" style="transition-delay: ${index * 0.08}s" data-tilt>
      <div class="machine-image" style="background-image: url('${m.image}');">
        <div class="machine-icon-overlay">
          <i class="fas fa-cog"></i>
        </div>
      </div>
      <h3>${isEn ? m.nameEn : m.nameSw}</h3>
      <p>${isEn ? m.descEn : m.descSw}</p>
      <div class="machine-features">
        ${m.features.map((f) => `<span>${f}</span>`).join("")}
      </div>
      ${m.rentable ? '<span class="rental-badge">Available for rent</span>' : ""}
      <div class="machine-actions">
        <button class="btn btn-buy" data-key="buyNow">${isEn ? "Buy Now" : "Nunua Sasa"}</button>
        ${m.rentable ? `<button class="btn btn-rent" data-key="rentNow">${isEn ? "Rent Now" : "Kodisha Sasa"}</button>` : ""}
      </div>
    </div>
  `
    )
    .join("");
  observeElements();
  initTiltEffect();
}

function renderServices(lang) {
  const isEn = lang === "en";
  servicesGrid.innerHTML = servicesData
    .map(
      (s, index) => `
    <div class="service-card stagger-item" style="transition-delay: ${index * 0.1}s">
      <i class="fas ${s.icon}"></i>
      <h4>${isEn ? s.nameEn : s.nameSw}</h4>
      <p>${isEn ? s.descEn : s.descSw}</p>
      <div class="service-hover-line"></div>
    </div>
  `
    )
    .join("");
  observeElements();
}

function renderWhy(lang) {
  const isEn = lang === "en";
  whyGrid.innerHTML = whyData
    .map(
      (w, index) => `
    <div class="why-item stagger-item" style="transition-delay: ${index * 0.07}s">
      <div class="why-icon-wrapper">
        <i class="fas ${w.icon}"></i>
      </div>
      <h4>${isEn ? w.labelEn : w.labelSw}</h4>
    </div>
  `
    )
    .join("");
  observeElements();
}

function renderTestimonials(lang) {
  const isEn = lang === "en";
  testimonialTrack.innerHTML = testimonialsDataArr
    .map((t) => {
      const stars = "★".repeat(t.stars) + "☆".repeat(5 - t.stars);
      return `
      <div class="testimonial-slide">
        <div class="testimonial-stars">${stars}</div>
        <p>“${isEn ? t.textEn : t.textSw}”</p>
        <div class="testimonial-author">— ${t.name}</div>
        <div class="testimonial-quote-icon"><i class="fas fa-quote-right"></i></div>
      </div>
    `;
    })
    .join("");

  carouselIndicators.innerHTML = testimonialsDataArr
    .map(
      (_, i) =>
        `<button class="dot ${i === testimonialIndex ? "active" : ""}" data-index="${i}"></button>`
    )
    .join("");

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.dataset.index);
      setTestimonial(idx);
      resetTestimonialAuto();
    });
  });

  updateTestimonialPosition();
}

function updateTestimonialPosition() {
  const slides = testimonialTrack.querySelectorAll(".testimonial-slide");
  if (slides.length === 0) return;
  const slideWidth = slides[0].offsetWidth + 24;
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * slideWidth}px)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === testimonialIndex);
  });
}

function setTestimonial(idx) {
  const total = testimonialsDataArr.length;
  testimonialIndex = (idx + total) % total;
  updateTestimonialPosition();
}

function resetTestimonialAuto() {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
    testimonialInterval = null;
  }
  startTestimonialAuto();
}

function startTestimonialAuto() {
  if (testimonialInterval) clearInterval(testimonialInterval);
  testimonialInterval = setInterval(() => {
    setTestimonial(testimonialIndex + 1);
  }, 5000);
}

// ---------- TRANSLATION ----------
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    if (t[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        // handled by placeholder
      } else if (el.tagName === "BUTTON") {
        el.textContent = t[key];
        // Preserve icon if present
        const icon = el.querySelector("i");
        if (icon) {
          el.innerHTML = icon.outerHTML + " " + t[key];
        }
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  document.querySelectorAll("[data-key-placeholder]").forEach((el) => {
    const key = el.dataset.keyPlaceholder;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  renderMachines(lang);
  renderServices(lang);
  renderWhy(lang);
  renderTestimonials(lang);

  langIcon.textContent = lang === "en" ? "🇬🇧" : "🇹🇿";
  langLabel.textContent = lang === "en" ? "English" : "Swahili";
  footerLangToggle.innerHTML = lang === "en" ? "🇬🇧 English" : "🇹🇿 Swahili";
  currentLang = lang;
}

// ---------- LANGUAGE TOGGLE ----------
function toggleLanguage() {
  const newLang = currentLang === "en" ? "sw" : "en";
  applyTranslations(newLang);
}

if (langToggle) {
  langToggle.addEventListener("click", toggleLanguage);
}

if (footerLangToggle) {
  footerLangToggle.addEventListener("click", toggleLanguage);
}

// ---------- MOBILE NAVIGATION - FIXED ----------
function setMobileMenuState(open) {
  isMobileMenuOpen = open;
  navLinks.classList.toggle("open", open);
  hamburger.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";

  if (navOverlay) {
    navOverlay.classList.toggle("active", open);
  }
}

function toggleMobileMenu() {
  setMobileMenuState(!isMobileMenuOpen);
}

// Hamburger click
if (hamburger) {
  hamburger.addEventListener("click", toggleMobileMenu);
}

// Close mobile menu on overlay click
if (navOverlay) {
  navOverlay.addEventListener("click", () => setMobileMenuState(false));
}

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024 && isMobileMenuOpen) {
      setMobileMenuState(false);
    }
  });
});

// Close on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMobileMenuOpen) {
    setMobileMenuState(false);
  }
});

// ---------- CREATIVE SCROLL EFFECTS ----------
let lastScrollY = 0;
let ticking = false;
let scrollVelocity = 0;
let lastScrollTime = Date.now();

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const now = Date.now();
      const deltaTime = (now - lastScrollTime) / 1000;
      scrollVelocity = (scrollY - lastScrollY) / deltaTime;
      lastScrollTime = now;
      
      // Navbar background
      navbar.classList.toggle("scrolled", scrollY > 60);
      
      // Scroll progress with easing
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + "%";
      
      // Back to top with bounce effect
      backToTop.classList.toggle("visible", scrollY > 400);
      
      // Active nav link with smooth transition
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
      });
      
      // Parallax hero background with scale effect
      if (heroBg) {
        const bgImage = heroBg.querySelector('.hero-bg-image');
        if (bgImage) {
          const parallaxSpeed = 0.15;
          const scale = 1 + (scrollY * 0.0002);
          bgImage.style.transform = `translateY(${scrollY * parallaxSpeed}px) scale(${scale})`;
        }
      }
      
      // Floating icons parallax with rotation
      document.querySelectorAll(".floating-icon").forEach((icon, i) => {
        const speed = 0.08 + (i * 0.03);
        const rotation = scrollY * 0.02 * (i % 2 === 0 ? 1 : -1);
        icon.style.transform = `translateY(${scrollY * speed}px) rotate(${rotation}deg)`;
      });
      
      // Hero content parallax
      if (heroContent) {
        const opacity = Math.max(0.3, 1 - (scrollY / (window.innerHeight * 0.8)));
        const translateY = scrollY * 0.1;
        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(${translateY}px)`;
      }
      
      // Section reveal on scroll with velocity-based effects
      document.querySelectorAll(".section").forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        if (rect.top < windowHeight - revealPoint) {
          const progress = 1 - (rect.top / (windowHeight - revealPoint));
          const velocityEffect = Math.min(1, Math.abs(scrollVelocity) * 0.01);
          
          // Apply velocity-based parallax to section backgrounds
          const bgElements = section.querySelectorAll(".parallax-bg");
          bgElements.forEach((bg) => {
            const speed = 0.2 + velocityEffect * 0.3;
            bg.style.transform = `translateY(${rect.top * speed}px) scale(1.02)`;
          });
        }
      });
      
      lastScrollY = scrollY;
      ticking = false;
    });
    ticking = true;
  }
});

// ---------- MOUSE PARALLAX FOR HERO ----------
document.addEventListener("mousemove", (e) => {
  if (mouseMoveTimeout) return;
  mouseMoveTimeout = setTimeout(() => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    const floatingIcons = document.querySelectorAll(".floating-icon");
    floatingIcons.forEach((icon, i) => {
      const speed = 0.5 + i * 0.2;
      const rotate = x * 0.5;
      icon.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${rotate}deg)`;
    });
    
    // Subtle hero background shift
    if (heroBg) {
      const bgImage = heroBg.querySelector('.hero-bg-image');
      if (bgImage) {
        bgImage.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.02)`;
      }
    }
    
    mouseMoveTimeout = null;
  }, 16);
});

// ---------- BACK TO TOP ----------
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ---------- ENHANCED INTERSECTION OBSERVER ----------
let observerInstance = null;

function observeElements() {
  if (observerInstance) {
    observerInstance.disconnect();
  }

  const options = {
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px",
  };

  observerInstance = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // Add visible class with staggered timing
        if (el.classList.contains("stagger-item")) {
          const parent = el.closest('.machines-grid, .services-grid, .why-grid, .video-grid, .image-grid');
          if (parent) {
            const items = parent.querySelectorAll('.stagger-item');
            const index = Array.from(items).indexOf(el);
            setTimeout(() => {
              el.classList.add("visible");
              // Add extra animation effect
              el.style.animation = "staggerPop 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards";
            }, index * 80);
          } else {
            el.classList.add("visible");
          }
        } else {
          el.classList.add("visible");
        }
        
        // Trigger counter animation
        const statNum = el.querySelector(".stat-number");
        if (statNum && !statNum.dataset.animated) {
          animateCounter(statNum);
        }
        
        // Zoom effect with scale animation
        if (el.classList.contains("zoom-in")) {
          el.style.transform = "scale(1)";
          el.style.opacity = "1";
        }
        
        // Slide effects with elastic easing
        if (el.classList.contains("slide-left")) {
          el.style.transform = "translateX(0)";
          el.style.opacity = "1";
          el.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease";
        }
        if (el.classList.contains("slide-right")) {
          el.style.transform = "translateX(0)";
          el.style.opacity = "1";
          el.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease";
        }
        
        // Fade-up with elastic
        if (el.classList.contains("fade-up")) {
          el.style.transition = "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        }
      }
    });
  }, options);

  // Observe all elements with animation classes
  document.querySelectorAll(".fade-up, .fade-left, .fade-right, .zoom-in, .slide-left, .slide-right, .stagger-item, .stat-number").forEach((el) => {
    if (!el.classList.contains("visible")) {
      observerInstance.observe(el);
    }
  });
}

// ---------- COUNTER ANIMATION WITH EASING ----------
function animateCounter(el) {
  const target = parseInt(el.dataset.count) || 0;
  if (target === 0 || el.dataset.animated) return;
  el.dataset.animated = "true";
  
  let start = 0;
  const duration = 2500;
  const startTime = performance.now();
  
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const currentValue = Math.floor(easedProgress * target);
    
    el.textContent = currentValue;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      el.textContent = target;
      // Celebration pulse
      el.style.transform = "scale(1.3)";
      el.style.color = "#C1121F";
      setTimeout(() => {
        el.style.transform = "scale(1)";
        el.style.color = "";
      }, 400);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// ---------- 3D TILT EFFECT ----------
function initTiltEffect() {
  const cards = document.querySelectorAll("[data-tilt]");
  
  cards.forEach((card) => {
    let isHovering = false;
    
    card.addEventListener("mouseenter", () => {
      isHovering = true;
    });
    
    card.addEventListener("mousemove", (e) => {
      if (!isTiltEnabled || !isHovering) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      // Add glow effect based on mouse position
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      card.style.boxShadow = `0 25px 50px rgba(0,0,0,0.15), 0 0 30px rgba(193,18,31,0.05)`;
      card.style.setProperty('--glow-x', `${glowX}%`);
      card.style.setProperty('--glow-y', `${glowY}%`);
    });
    
    card.addEventListener("mouseleave", () => {
      isHovering = false;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
      card.style.boxShadow = "";
    });
  });
}

// Disable tilt on mobile
if (window.innerWidth < 768) {
  isTiltEnabled = false;
}

window.addEventListener("resize", () => {
  isTiltEnabled = window.innerWidth >= 768;
});

// ---------- CONTACT FORM ----------
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button[type=submit]");
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === "en" ? "Sending..." : "Inatumwa...");
  btn.disabled = true;
  btn.style.transform = "scale(0.95)";
  
  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 200);
  
  setTimeout(() => {
    const successMsg = currentLang === "en" ? "✅ Message sent! We'll reply soon." : "✅ Ujumbe umetumwa! Tutajibu hivi karibuni.";
    // Create success toast
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.innerHTML = successMsg;
    toast.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #1F2937;
      color: white;
      padding: 1rem 2rem;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      z-index: 10000;
      font-weight: 600;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      border-left: 4px solid #C1121F;
      max-width: 90%;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    }, 50);
    
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
      setTimeout(() => toast.remove(), 500);
    }, 4000);
    
    contactForm.reset();
    btn.innerHTML = original;
    btn.disabled = false;
  }, 1500);
});

// ---------- SMOOTH SCROLL WITH OFFSET ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      
      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    }
  });
});

// ---------- HERO TITLE TYPING EFFECT ----------
function typewriterEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;
  
  const originalText = heroTitle.textContent;
  const words = originalText.split(' ');
  heroTitle.textContent = '';
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  
  function typeWord() {
    if (wordIndex < words.length) {
      const word = words[wordIndex];
      if (charIndex < word.length) {
        currentWord += word[charIndex];
        heroTitle.textContent = words.slice(0, wordIndex).join(' ') + (wordIndex > 0 ? ' ' : '') + currentWord;
        charIndex++;
        setTimeout(typeWord, 30 + Math.random() * 40);
      } else {
        currentWord = '';
        charIndex = 0;
        wordIndex++;
        setTimeout(typeWord, 80);
      }
    } else {
      // Add highlight class to the last word
      const lastWord = heroTitle.innerHTML.split(' ').pop();
      if (lastWord) {
        heroTitle.innerHTML = heroTitle.innerHTML.replace(lastWord, `<span class="highlight">${lastWord}</span>`);
      }
    }
  }
  
  setTimeout(typeWord, 600);
}

// ---------- PARALLAX BACKGROUNDS ----------
function initParallaxSections() {
  document.querySelectorAll(".section").forEach((section) => {
    const bgElement = section.querySelector(".parallax-bg");
    if (bgElement) {
      section.classList.add("parallax-section");
    }
  });
}

// ---------- PARTICLE SYSTEM ----------
function createParticles() {
  if (!particlesEnabled) return;
  const container = document.querySelector(".hero");
  if (!container) return;
  
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = 2 + Math.random() * 4;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 15 + Math.random() * 20;
    const delay = Math.random() * 10;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      left: ${x}%;
      top: ${y}%;
      animation: floatParticle ${duration}s ease-in-out infinite;
      animation-delay: ${delay}s;
      pointer-events: none;
      z-index: 1;
    `;
    container.appendChild(particle);
  }
  
  // Add particle animation to style
  const style = document.createElement("style");
  style.textContent = `
    @keyframes floatParticle {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
      25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5); opacity: 0.8; }
      50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.5); opacity: 0.2; }
      75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.2); opacity: 0.6; }
    }
  `;
  document.head.appendChild(style);
}

// ---------- INIT ----------
function init() {
  applyTranslations("sw");
  
  setTimeout(() => {
    observeElements();
    initTiltEffect();
    typewriterEffect();
    initParallaxSections();
    createParticles();
  }, 100);
  
  startTestimonialAuto();
}

// DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// ---------- RESIZE HANDLER ----------
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateTestimonialPosition();
    
    // Reset mobile menu on desktop
    if (window.innerWidth >= 1024 && isMobileMenuOpen) {
      setMobileMenuState(false);
    }
  }, 200);
});

// ---------- PERFORMANCE OPTIMIZATION ----------
// Use passive event listeners for scroll
document.addEventListener("scroll", () => {}, { passive: true });

// ---------- ADDITIONAL STYLES ----------
const additionalStyles = document.createElement("style");
additionalStyles.textContent = `
  .particle {
    will-change: transform, opacity;
  }
  .stagger-item {
    will-change: transform, opacity;
  }
  .machine-card, .service-card, .why-item {
    will-change: transform;
  }
  
  /* Mobile menu specific styles */
  @media (max-width: 1023px) {
    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: min(92vw, 24rem);
      max-width: 24rem;
      height: 100vh;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%);
      padding: 0;
      box-shadow: -10px 0 50px rgba(0, 0, 0, 0.15);
      transition: right 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      overflow-y: auto;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      transform: none !important;
      opacity: 1 !important;
      pointer-events: none;
      border-radius: 0;
      border-left: 1px solid rgba(193, 18, 31, 0.12);
    }

    
    
    .nav-links.open {
      right: 0;
      pointer-events: auto;
    }
    
    .nav-links::before {
      content: '';
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--primary-light), var(--primary));
      z-index: 2;
      flex-shrink: 0;
    }
    
    .nav-links .mobile-menu-close {
      display: flex !important;
      position: sticky;
      top: 16px;
      right: 16px;
      margin-left: auto;
      margin-right: 16px;
      margin-top: 16px;
      width: 40px;
      height: 40px;
      background: var(--bg-light);
      border: none;
      border-radius: 50%;
      font-size: 1.2rem;
      color: var(--secondary);
      cursor: pointer;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: 3;
      flex-shrink: 0;
    }
    
    .nav-links .mobile-menu-close:hover {
      background: var(--primary);
      color: white;
      transform: rotate(90deg) scale(1.1);
      box-shadow: 0 4px 20px var(--primary-glow);
    }
    
    .nav-links .mobile-brand {
      display: flex !important;
      align-items: center;
      gap: 10px;
      padding: 0.5rem 1.5rem 0.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      flex-shrink: 0;
    }
    
    .nav-links .mobile-brand i {
      font-size: 1.5rem;
      color: var(--primary);
    }
    
    .nav-links .mobile-brand span {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--secondary);
    }
    
    .nav-links .mobile-brand .highlight {
      color: var(--primary);
    }
    
    .nav-links ul {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding: 0.5rem 0 1rem;
      flex: 1;
    }
    
    .nav-links li {
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      opacity: 0;
      transform: translateX(30px);
      transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    .nav-links.open li {
      opacity: 1;
      transform: translateX(0);
    }
    
    .nav-links.open li:nth-child(1) { transition-delay: 0.05s; }
    .nav-links.open li:nth-child(2) { transition-delay: 0.08s; }
    .nav-links.open li:nth-child(3) { transition-delay: 0.11s; }
    .nav-links.open li:nth-child(4) { transition-delay: 0.14s; }
    .nav-links.open li:nth-child(5) { transition-delay: 0.17s; }
    .nav-links.open li:nth-child(6) { transition-delay: 0.20s; }
    .nav-links.open li:nth-child(7) { transition-delay: 0.23s; }
    
    .nav-links li:last-child {
      border-bottom: none;
    }
    
    .nav-links a {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0.9rem 1.5rem;
      color: var(--secondary) !important;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 0;
      width: 100%;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
    }
    
    .nav-links a .nav-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(193, 18, 31, 0.08);
      border-radius: 8px;
      color: var(--primary);
      font-size: 0.9rem;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      flex-shrink: 0;
    }
    
    .nav-links a:hover .nav-icon,
    .nav-links a.active .nav-icon {
      background: var(--primary);
      color: white;
      box-shadow: 0 4px 15px var(--primary-glow);
      transform: scale(1.1);
    }
    
    .nav-links a .nav-text {
      flex: 1;
    }
    
    .nav-links a .nav-arrow {
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      color: var(--primary);
      font-size: 0.8rem;
    }
    
    .nav-links a:hover .nav-arrow,
    .nav-links a.active .nav-arrow {
      opacity: 1;
      transform: translateX(0);
    }
    
    .nav-links a.active {
      background: rgba(193, 18, 31, 0.06);
      color: var(--primary) !important;
      border-right: 3px solid var(--primary);
    }
    
    .nav-links a:hover {
      background: rgba(193, 18, 31, 0.04);
      padding-left: 1.8rem;
    }
    
    .nav-links .mobile-footer {
      display: flex !important;
      flex-direction: column;
      gap: 0.8rem;
      padding: 1rem 1.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      margin-top: auto;
      flex-shrink: 0;
    }
    
    .nav-links .mobile-footer .mobile-social {
      display: flex;
      gap: 0.8rem;
      justify-content: center;
    }
    
    .nav-links .mobile-footer .mobile-social a {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--bg-light);
      color: var(--secondary);
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-size: 1rem;
    }
    
    .nav-links .mobile-footer .mobile-social a:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 4px 20px var(--primary-glow);
    }
    
    .nav-links .mobile-footer .mobile-lang {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }
    
    .nav-links .mobile-footer .mobile-lang button {
      padding: 0.4rem 1.2rem;
      border: 2px solid var(--accent);
      border-radius: 30px;
      background: transparent;
      font-weight: 600;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      color: var(--secondary);
    }
    
    .nav-links .mobile-footer .mobile-lang button.active {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
      box-shadow: 0 4px 15px var(--primary-glow);
    }
    
    .nav-links .mobile-footer .mobile-lang button:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }
    
    .nav-overlay {
      display: block !important;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      pointer-events: none;
    }
    
    .nav-overlay.active {
      opacity: 1;
      pointer-events: auto;
    }
    
    .hamburger {
      display: flex !important;
    }
    
    .nav-actions .lang-toggle {
      display: none;
    }
  }
`;
document.head.appendChild(additionalStyles);