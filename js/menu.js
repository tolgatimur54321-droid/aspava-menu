/**
 * SİMA - QR Restoran Menüsü Veri & Yönetim Sistemi
 * 
 * Bu dosya menüdeki tüm ürünleri, 4 ana kategoriyi ve restoran bilgilerini barındırır.
 * Yeni ürün eklemek, fiyatları değiştirmek veya görselleri güncellemek için
 * aşağıdaki `menuData` objesini düzenlemeniz yeterlidir.
 */

// ==========================================
// 1. RESTORAN BİLGİLERİ (Başlık & Sloganlar)
// ==========================================
const restaurantInfo = {
  name: "SİMA",
  tagline: "FIRIN • PİDE • IZGARA",
  slogan: "Lezzetin her hali, SİMA'da.",
  noteTopRight: "İyi Yemek Güzel İnsanları Buluşturur.",
  subNote: "Taş Fırının Eşsiz Lezzeti"
};

// ==========================================
// 2. KATEGORİLER (Sadece 4 Ana Kategori)
// ==========================================
const categories = [
  {
    id: "tasFirindan",
    name: "Taş Fırından",
    icon: "🌾",
    subtitle: "Taş fırından taze çıkan günlük lezzetler."
  },
  {
    id: "aspava",
    name: "Aspava",
    icon: "🔥",
    subtitle: "Köz ateşinde usta ellerden çıkan lezzetler."
  },
  {
    id: "tatli",
    name: "Tatlı",
    icon: "🍰",
    subtitle: "Yemeğin üstüne tatlı bir kapanış."
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
// Fiyatlar şimdilik varsayılan olarak "-- TL" dir.
// Gerçek menü geldiğinde `price` alanına örn. "140 TL" yazabilirsiniz.
const menuData = {
  // 1. TAŞ FIRINDAN
  tasFirindan: [
    {
      name: "Simit",
      description: "Geleneksel lezzet, taş fırından günlük taze.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kaşarlı Simit",
      description: "Bol kaşar ile fırında özel lezzet.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Karışık Simit",
      description: "Susam, çörekotu ve zengin tohum harmanı.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Tereyağlı Simit",
      description: "Halis köy tereyağı lezzetiyle fırından yeni çıkmış.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Poğaça ve Çeşitleri",
      description: "Her damak tadına uygun, peynirli, zeytinli ve sade günlük taze.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 2. ASPAVA
  aspava: [
    {
      name: "Pide",
      description: "Taş fırında taze pişen kıymalı ve kaşarlı çıtır pide.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lahmacun",
      description: "Özel zırh kıyması, ince çıtır hamur, yeşillik ve limon ile.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Adana",
      description: "Köz ateşinde usta ellerden çıkan zırh kıyması kebabı.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kanat",
      description: "Özel marineli, köz ateşinde nar gibi kızarmış tavuk kanat.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Köfte",
      description: "Özel kasap baharat harmanıyla hazırlanan ızgara köfte.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 3. TATLI
  tatli: [
    {
      name: "Künefe",
      description: "Sıcak şerbetli, halis tuzsuz peynirli ve bol Antep fıstıklı çıtır künefe.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 4. İÇECEKLER
  icecekler: [
    {
      name: "Kola",
      description: "Soğuk kutu kola.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fanta",
      description: "Soğuk kutu portakallı gazoz.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ayran",
      description: "Bol köpüklü, taze yayık ayranı.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fuse Tea",
      description: "Soğuk ferahlatıcı buzlu şeftali / limon çay.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Soda",
      description: "Doğal zengin mineralli maden suyu.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Su",
      description: "Doğal kaynak suyu.",
      price: "-- TL",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=400&q=80"
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
  if (noteTopRight) noteTopRight.textContent = restaurantInfo.noteTopRight;

  if (footerBrand) footerBrand.textContent = restaurantInfo.name;
  if (footerTagline) footerTagline.textContent = restaurantInfo.tagline;
}

/**
 * Üstteki 4 adet yatay kategori butonunu render eder
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
 * 4 kategorinin tamamını ve ürün kartlarını render eder
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
          <svg class="price-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
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
