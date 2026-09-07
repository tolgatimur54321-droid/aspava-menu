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
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kaşarlı Simit",
      description: "Bol kaşar ile fırında özel lezzet.",
      price: "55 TL",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Karışık Simit",
      description: "Susam, çörekotu ve zengin tohum harmanı.",
      price: "50 TL",
      image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Tereyağlı Simit",
      description: "Halis tereyağı lezzetiyle fırından yeni çıkmış.",
      price: "45 TL",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Poğaça ve Çeşitleri",
      description: "Her damak tadına uygun, peynirli, zeytinli ve sade günlük taze.",
      price: "35 TL",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 2. KEBAPLAR
  kebaplar: [
    {
      name: "Adana Kebap",
      description: "Közde pişen nefis zırh kıyması kebabı, köz sebzeler ve tırnak pide ile.",
      price: "400 TL",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Urfa Kebap",
      description: "Özel baharat harmanıyla yoğrulmuş acısız zırh kıyması kebabı.",
      price: "400 TL",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Izgara Köfte",
      description: "Özel kasap harcıyla yoğrulmuş geleneksel lezzette ızgara köfte.",
      price: "400 TL",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kanat",
      description: "Özel marineli köz ateşinde nar gibi kızarmış çıtır tavuk kanat.",
      price: "375 TL",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 3. PİDELER
  pideler: [
    {
      name: "Kıymalı Pide",
      description: "Taş fırında taze pişen tereyağlı kıymalı çıtır pide.",
      price: "320 TL",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kuşbaşılı Pide",
      description: "Özel marine dana eti, domates ve biber harcıyla taş fırında pişirilir.",
      price: "375 TL",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kaşarlı Pide",
      description: "Bol eriyen kaşar peyniri ve tereyağı kenarlı çıtır pide.",
      price: "375 TL",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Karışık Pide",
      description: "Kuşbaşı et, kıyma, sucuk ve bol kaşar peynirinin enfes buluşması.",
      price: "420 TL",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kuşbaşılı Kaşarlı Pide",
      description: "Özel marine kuşbaşı dana eti ve eriyen kaşar peyniri bir arada.",
      price: "400 TL",
      image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kıymalı Kaşarlı Pide",
      description: "Baharatlı lezzetli kıyma harcı ve bol uzayan kaşar peyniri.",
      price: "350 TL",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Beyaz Peynirli Pide",
      description: "Halis yöresel beyaz peynir ve taze maydanoz harcıyla nefis fırın lezzeti.",
      price: "300 TL",
      image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lahmacun",
      description: "İncecik çıtır hamur, zırh kıyması, taze yeşillik ve limon eşliğinde.",
      price: "200 TL",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Antep Lahmacun",
      description: "Özel sarımsaklı ve baharatlı Antep usulü çıtır lahmacun.",
      price: "225 TL",
      image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 4. ÇORBA
  corba: [
    {
      name: "Çorba",
      description: "Köy tereyağlı özel sosu ve limon ile günlük taze sıcak çorba.",
      price: "150 TL",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 5. TATLI
  tatli: [
    {
      name: "Künefe",
      description: "Sıcak şerbetli, halis tuzsuz peynirli ve bol Antep fıstıklı çıtır künefe.",
      price: "200 TL",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 6. İÇECEKLER
  icecekler: [
    {
      name: "Cola",
      description: "Soğuk kutu meşrubat.",
      price: "80 TL",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fanta",
      description: "Soğuk kutu portakallı gazoz.",
      price: "80 TL",
      image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "M. Suyu Çeşitleri",
      description: "Soğuk ferahlatıcı kutu meyve suları ve buzlu çay.",
      price: "40 TL",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "B. Ayran",
      description: "Bol köpüklü büyük boy taze yayık ayran.",
      price: "70 TL",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "K. Ayran",
      description: "Taze ferahlatıcı küçük boy ayran.",
      price: "40 TL",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Şalgam",
      description: "Geleneksel mayalanmış acılı / acısız şalgam suyu.",
      price: "70 TL",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Su",
      description: "Doğal kaynak suyu.",
      price: "20 TL",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Çay",
      description: "Taze demlenmiş sıcak ince belli bardak çay.",
      price: "25 TL",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Soda",
      description: "Doğal zengin mineralli maden suyu.",
      price: "25 TL",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Nescafe",
      description: "Sıcak lezzetli hazır kahve.",
      price: "50 TL",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
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
      setActiveCategoryButton(cat.id);
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

/**
 * İlgili kategoriye yumuşak kaydırma
 */
function scrollToCategory(categoryId) {
  const targetSection = document.getElementById(`section-${categoryId}`);
  if (!targetSection) return;

  const headerOffset = 90; // Sabit kategori barı payı
  const elementPosition = targetSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

/**
 * Aktif kategori butonunu vurgular ve ekranda ortalar
 */
function setActiveCategoryButton(categoryId) {
  const buttons = document.querySelectorAll(".category-pill");
  const navContainer = document.getElementById("category-nav");

  buttons.forEach(btn => {
    if (btn.dataset.category === categoryId) {
      btn.classList.add("active");
      if (navContainer) {
        const leftPos = btn.offsetLeft - (navContainer.clientWidth / 2) + (btn.clientWidth / 2);
        navContainer.scrollTo({ left: leftPos, behavior: "smooth" });
      }
    } else {
      btn.classList.remove("active");
    }
  });
}

/**
 * Sayfa kaydırıldıkça hangi kategorinin görünür olduğunu izleyen ScrollSpy
 */
function setupCategoryScrollSpy() {
  let isThrottled = false;

  window.addEventListener("scroll", () => {
    if (isThrottled) return;
    isThrottled = true;

    setTimeout(() => {
      const sections = document.querySelectorAll(".category-section");
      const scrollPosition = window.pageYOffset + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.id.replace("section-", "");

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveCategoryButton(id);
        }
      });

      isThrottled = false;
    }, 60);
  }, { passive: true });
}
