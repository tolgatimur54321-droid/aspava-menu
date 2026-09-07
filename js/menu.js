/**
 * SİMA - QR Restoran Menüsü Veri & Yönetim Sistemi
 * 
 * Bu dosya menüdeki tüm ürünleri, kategorileri ve restoran bilgilerini barındırır.
 * Fiyatları, ürün isimlerini, açıklamaları ve fotoğrafları bu dosyadan kolayca güncelleyebilirsiniz.
 */

// ==========================================
// 1. RESTORAN BİLGİLERİ (Başlık & Sloganlar)
// ==========================================
const restaurantInfo = {
  name: "SİMA",
  tagline: "FIRIN • PİDE • IZGARA",
  slogan: "Lezzetin her hali, SİMA'da.",
  noteTopRight: "İyi Yemek\nGüzel İnsanları\nBuluşturur.",
  subNote: "Taş Fırının Eşsiz Lezzeti"
};

// ==========================================
// 2. KATEGORİLER
// ==========================================
const categories = [
  {
    id: "tasFirindan",
    name: "Taş Fırından",
    icon: "🌾",
    subtitle: "Taş fırından taze çıkan günlük unlu mamuller."
  },
  {
    id: "kebaplar",
    name: "Kebaplar",
    icon: "🥩",
    subtitle: "Köz ateşinde pişen nefis zırh kebapları ve ızgaralar."
  },
  {
    id: "pideler",
    name: "Pideler",
    icon: "🥖",
    subtitle: "Taş fırından çıtır çıtır pide ve lahmacun çeşitleri."
  },
  {
    id: "corba",
    name: "Çorba",
    icon: "🥣",
    subtitle: "Geleneksel usulde kaynayan sıcak ve şifalı çorba."
  },
  {
    id: "tatli",
    name: "Tatlı",
    icon: "🍰",
    subtitle: "Yemeğin üstüne tatlı ve sıcak bir kapanış."
  },
  {
    id: "icecekler",
    name: "İçecekler",
    icon: "🥤",
    subtitle: "Yemeklerin yanına eşlik eden ferahlatıcı içecekler."
  }
];

// ==========================================
// 3. MERKEZİ ÜRÜN VERİ YAPISI (menuData)
// ==========================================
const menuData = {
  // 1. TAŞ FIRINDAN
  tasFirindan: [
    {
      name: "Simit",
      description: "Geleneksel lezzet, taş fırından günlük taze.",
      price: "25 TL",
      image: "images/items/simit.jpg"
    },
    {
      name: "Kaşarlı Simit",
      description: "Bol kaşar ile fırında özel lezzet.",
      price: "55 TL",
      image: "images/items/kasarli-simit.jpg"
    },
    {
      name: "Karışık Simit",
      description: "Susam, çörekotu ve zengin tohum harmanı.",
      price: "50 TL",
      image: "images/items/karisik-simit.jpg"
    },
    {
      name: "Tereyağlı Simit",
      description: "Halis tereyağı lezzetiyle fırından yeni çıkmış.",
      price: "45 TL",
      image: "images/items/tereyagli-simit.jpg"
    },
    {
      name: "Poğaça ve Çeşitleri",
      description: "Her damak tadına uygun, peynirli, zeytinli ve sade günlük taze.",
      price: "35 TL",
      image: "images/items/pogaca.jpg"
    }
  ],

  // 2. KEBAPLAR
  kebaplar: [
    {
      name: "Adana Kebap",
      description: "Közde pişen nefis zırh kıyması kebabı, köz sebzeler ve tırnak pide ile.",
      price: "400 TL",
      image: "images/items/adana-kebap.jpg"
    },
    {
      name: "Urfa Kebap",
      description: "Özel baharat harmanıyla yoğrulmuş acısız zırh kıyması kebabı.",
      price: "400 TL",
      image: "images/items/urfa-kebap.jpg"
    },
    {
      name: "Izgara Köfte",
      description: "Özel kasap harcıyla yoğrulmuş geleneksel lezzette ızgara köfte.",
      price: "400 TL",
      image: "images/items/izgara-kofte.jpg"
    },
    {
      name: "Kanat",
      description: "Özel marineli köz ateşinde nar gibi kızarmış çıtır tavuk kanat.",
      price: "375 TL",
      image: "images/items/kanat.jpg"
    }
  ],

  // 3. PİDELER
  pideler: [
    {
      name: "Kıymalı Pide",
      description: "Taş fırında taze pişen tereyağlı kıymalı çıtır pide.",
      price: "320 TL",
      image: "images/items/kiymali-pide.jpg"
    },
    {
      name: "Kuşbaşılı Pide",
      description: "Özel marine dana eti, domates ve biber harcıyla taş fırında pişirilir.",
      price: "375 TL",
      image: "images/items/kusbasili-pide.jpg"
    },
    {
      name: "Kaşarlı Pide",
      description: "Bol eriyen kaşar peyniri ve tereyağı kenarlı çıtır pide.",
      price: "375 TL",
      image: "images/items/kasarli-pide.jpg"
    },
    {
      name: "Karışık Pide",
      description: "Kuşbaşı et, kıyma, sucuk ve bol kaşar peynirinin enfes buluşması.",
      price: "420 TL",
      image: "images/items/karisik-pide.jpg"
    },
    {
      name: "Kuşbaşılı Kaşarlı Pide",
      description: "Özel marine kuşbaşı dana eti ve eriyen kaşar peyniri bir arada.",
      price: "400 TL",
      image: "images/items/kusbasili-kasarli-pide.jpg"
    },
    {
      name: "Kıymalı Kaşarlı Pide",
      description: "Baharatlı lezzetli kıyma harcı ve bol uzayan kaşar peyniri.",
      price: "350 TL",
      image: "images/items/kiymali-kasarli-pide.jpg"
    },
    {
      name: "Beyaz Peynirli Pide",
      description: "Halis yöresel beyaz peynir ve taze maydanoz harcıyla nefis fırın lezzeti.",
      price: "300 TL",
      image: "images/items/beyaz-peynirli-pide.jpg"
    },
    {
      name: "Lahmacun",
      description: "İncecik çıtır hamur, zırh kıyması, taze yeşillik ve limon eşliğinde.",
      price: "200 TL",
      image: "images/items/lahmacun.jpg"
    },
    {
      name: "Antep Lahmacun",
      description: "Özel sarımsaklı ve baharatlı Antep usulü çıtır lahmacun.",
      price: "225 TL",
      image: "images/items/antep-lahmacun.jpg"
    }
  ],

  // 4. ÇORBA
  corba: [
    {
      name: "Çorba",
      description: "Köy tereyağlı özel sosu ve limon ile günlük taze sıcak çorba.",
      price: "150 TL",
      image: "images/items/corba.jpg"
    }
  ],

  // 5. TATLI
  tatli: [
    {
      name: "Künefe",
      description: "Sıcak şerbetli, halis tuzsuz peynirli ve bol Antep fıstıklı çıtır künefe.",
      price: "200 TL",
      image: "images/items/kunefe.jpg"
    }
  ],

  // 6. İÇECEKLER
  icecekler: [
    {
      name: "Cola",
      description: "Soğuk kutu meşrubat.",
      price: "80 TL",
      image: "images/items/cola.jpg"
    },
    {
      name: "Fanta",
      description: "Soğuk kutu portakallı gazoz.",
      price: "80 TL",
      image: "images/items/fanta.jpg"
    },
    {
      name: "M. Suyu Çeşitleri",
      description: "Soğuk ferahlatıcı kutu meyve suları ve buzlu çay.",
      price: "40 TL",
      image: "images/items/meyve-suyu.jpg"
    },
    {
      name: "B. Ayran",
      description: "Bol köpüklü büyük boy taze yayık ayran.",
      price: "70 TL",
      image: "images/items/buyuk-ayran.jpg"
    },
    {
      name: "K. Ayran",
      description: "Taze ferahlatıcı küçük boy ayran.",
      price: "40 TL",
      image: "images/items/kucuk-ayran.jpg"
    },
    {
      name: "Şalgam",
      description: "Geleneksel mayalanmış acılı / acısız şalgam suyu.",
      price: "70 TL",
      image: "images/items/salgam.jpg"
    },
    {
      name: "Su",
      description: "Doğal kaynak suyu.",
      price: "20 TL",
      image: "images/items/su.jpg"
    },
    {
      name: "Çay",
      description: "Taze demlenmiş sıcak ince belli bardak çay.",
      price: "25 TL",
      image: "images/items/cay.jpg"
    },
    {
      name: "Soda",
      description: "Doğal zengin mineralli maden suyu.",
      price: "25 TL",
      image: "images/items/soda.jpg"
    },
    {
      name: "Nescafe",
      description: "Sıcak lezzetli hazır kahve.",
      price: "50 TL",
      image: "images/items/nescafe.jpg"
    }
  ]
};

// ==========================================
// 4. UYGULAMA MANTIĞI & ARAYÜZ OLUŞTURMA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initHeaderAndFooter();
  renderCategoryNavigation();
  renderAllSections();
  setupCategoryScrollSpy();
});

/**
 * Başlık, slogan ve alt bilgi metinlerini doldurur
 */
function initHeaderAndFooter() {
  document.title = `${restaurantInfo.name} - ${restaurantInfo.tagline} | Menü`;

  const brandName = document.getElementById("brand-name");
  const brandTagline = document.getElementById("brand-tagline");
  const sloganText = document.getElementById("slogan-text");
  const noteTopRight = document.getElementById("note-top-right");

  const footerBrand = document.getElementById("footer-brand");
  const footerTagline = document.getElementById("footer-tagline");

  if (brandName) brandName.textContent = restaurantInfo.name;
  if (brandTagline) brandTagline.textContent = restaurantInfo.tagline;
  if (sloganText) sloganText.textContent = restaurantInfo.slogan;
  if (noteTopRight) {
    noteTopRight.innerHTML = restaurantInfo.noteTopRight.replace(/\n/g, "<br>");
  }

  if (footerBrand) footerBrand.textContent = restaurantInfo.name;
  if (footerTagline) footerTagline.textContent = restaurantInfo.tagline;
}

/**
 * Üstteki yatay kategori butonlarını render eder
 */
function renderCategoryNavigation() {
  const categoryNav = document.getElementById("category-nav");
  if (!categoryNav) return;

  categoryNav.innerHTML = "";

  categories.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = `category-pill ${index === 0 ? "active" : ""}`;
    btn.dataset.category = cat.id;
    btn.setAttribute("aria-label", `${cat.name} kategorisine git`);

    btn.innerHTML = `
      <span class="category-icon">${cat.icon}</span>
      <span class="category-name">${cat.name}</span>
    `;

    btn.addEventListener("click", () => {
      scrollToCategory(cat.id);
    });

    categoryNav.appendChild(btn);
  });
}

/**
 * Tüm kategorileri ve ürün kartlarını render eder
 */
function renderAllSections() {
  const menuContainer = document.getElementById("menu-container");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  categories.forEach(cat => {
    const products = menuData[cat.id] || [];
    if (products.length === 0) return;

    const section = document.createElement("section");
    section.className = "category-section";
    section.id = `section-${cat.id}`;

    // Kategori Başlık Bloğu
    section.innerHTML = `
      <div class="category-header">
        <div class="category-header-main">
          <span class="cat-icon">${cat.icon}</span>
          <h2 class="cat-title">${cat.name}</h2>
        </div>
        <div class="category-sub-row">
          <p class="cat-subtitle">${cat.subtitle}</p>
          <div class="cat-divider-line"></div>
        </div>
      </div>
      <div class="products-list"></div>
    `;

    const productsList = section.querySelector(".products-list");

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      card.innerHTML = `
        <div class="product-image-box">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            class="product-img"
            onerror="this.onerror=null; this.src='images/placeholder.svg';"
          />
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
        </div>
        <div class="product-price-box">
          <span class="product-price">${product.price}</span>
        </div>
      `;

      productsList.appendChild(card);
    });

    menuContainer.appendChild(section);
  });
}

// ==========================================
// 5. KAYDIRMA (SCROLL) & SCROLLSPY KONTROLÜ
// ==========================================
let isClickScrolling = false;
let clickScrollTimeout = null;

// Mobil dokunma veya mouse tekerleği algılandığında kilidi hemen aç
window.addEventListener("touchstart", () => {
  isClickScrolling = false;
  clearTimeout(clickScrollTimeout);
}, { passive: true });

window.addEventListener("wheel", () => {
  isClickScrolling = false;
  clearTimeout(clickScrollTimeout);
}, { passive: true });

// Modern tarayıcılarda kaydırma bittiğinde kilidi kaldır
if ("onscrollend" in window) {
  window.addEventListener("scrollend", () => {
    isClickScrolling = false;
    clearTimeout(clickScrollTimeout);
  });
}

/**
 * İlgili kategoriye yumuşak kaydırma
 */
function scrollToCategory(categoryId) {
  const targetSection = document.getElementById(`section-${categoryId}`);
  if (!targetSection) return;

  // Tıklama ile kaydırma başladığında ScrollSpy'ı geçici olarak kilitle
  isClickScrolling = true;
  clearTimeout(clickScrollTimeout);

  // Hedef butonu hemen aktif yap ve ortala
  setActiveCategoryButton(categoryId);

  const headerOffset = 80; // Sabit kategori barı payı
  const elementPosition = targetSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  // Kaydırma süresi boyunca (900ms) ScrollSpy'ın aradaki kategorilere zıplamasını engelle
  clickScrollTimeout = setTimeout(() => {
    isClickScrolling = false;
  }, 900);
}

/**
 * Aktif kategori butonunu vurgular ve ekranda ortalar
 */
function setActiveCategoryButton(categoryId) {
  const buttons = document.querySelectorAll(".category-pill");
  const navContainer = document.getElementById("category-nav");

  buttons.forEach(btn => {
    if (btn.dataset.category === categoryId) {
      const wasActive = btn.classList.contains("active");
      btn.classList.add("active");

      // Yalnızca aktiflik yeni değiştiyse kategori çubuğunu kaydır (titremeyi önler)
      if (navContainer && !wasActive) {
        const leftPos = btn.offsetLeft - (navContainer.clientWidth / 2) + (btn.clientWidth / 2);
        navContainer.scrollTo({ left: leftPos, behavior: "smooth" });
      }
    } else {
      btn.classList.remove("active");
    }
  });
}

/**
 * Sayfa elle kaydırıldıkça hangi kategorinin görünür olduğunu izleyen ScrollSpy
 */
function setupCategoryScrollSpy() {
  let isThrottled = false;

  window.addEventListener("scroll", () => {
    // Kullanıcı bir kategori butonuna tıkladıysa ScrollSpy araya girmez
    if (isClickScrolling) return;

    if (isThrottled) return;
    isThrottled = true;

    requestAnimationFrame(() => {
      if (isClickScrolling) {
        isThrottled = false;
        return;
      }

      const sections = document.querySelectorAll(".category-section");
      if (!sections.length) {
        isThrottled = false;
        return;
      }

      // Sayfa en aşağıya indiğinde (son kategori için)
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50) {
        const lastId = sections[sections.length - 1].id.replace("section-", "");
        setActiveCategoryButton(lastId);
        isThrottled = false;
        return;
      }

      // Kategori tespit çizgisi (sticky header payı)
      const detectionPoint = window.pageYOffset + 95;
      let currentCategory = "";

      sections.forEach(section => {
        if (detectionPoint >= section.offsetTop) {
          currentCategory = section.id.replace("section-", "");
        }
      });

      if (currentCategory) {
        setActiveCategoryButton(currentCategory);
      }

      isThrottled = false;
    });
  }, { passive: true });
}
