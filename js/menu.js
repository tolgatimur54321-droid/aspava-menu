/**
 * SİMA - QR Restoran Menüsü Veri & Yönetim Sistemi
 * 
 * Bu dosya menüdeki tüm ürünleri, 4 ana kategoriyi ve restoran bilgilerini barındırır.
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
    subtitle: "Yemeklerin yanına ferahlatıcı içecekler."
  }
];

// ==========================================
// 3. MERKEZİ ÜRÜN VERİ YAPISI (Tahmini Fiyatlar & Örnek Görseller)
// ==========================================
// NOT: Aşağıdaki fiyatlar ve görseller şimdilik tahmini/örnek olarak eklenmiştir.
// Gerçek menü geldiğinde fiyatları (örn. "30 TL") ve görsel yollarını (örn. "images/simit.jpg")
// doğrudan buradan değiştirebilirsiniz.
const menuData = {
  // 1. TAŞ FIRINDAN
  tasFirindan: [
    {
      name: "Simit",
      description: "Geleneksel lezzet, taş fırından.",
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
      description: "Susam, çörekotu ve daha fazlası.",
      price: "50 TL",
      image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Tereyağlı Simit",
      description: "Mis gibi tereyağı ile.",
      price: "45 TL",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Poğaça ve Çeşitleri",
      description: "Her damak tadına uygun, günlük taze.",
      price: "35 TL",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 2. ASPAVA
  aspava: [
    {
      name: "Pide",
      description: "Taş fırında pişen çıtır kıymalı ve kaşarlı pide.",
      price: "280 TL",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lahmacun",
      description: "İnce çıtır hamur, zırh kıyması, yeşillik ve limon ile.",
      price: "110 TL",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Adana",
      description: "Közde pişen nefis zırh kıyması kebabı, köz sebzelerle.",
      price: "380 TL",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Kanat",
      description: "Özel marineli közde ızgara tavuk kanat.",
      price: "320 TL",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Köfte",
      description: "Geleneksel lezzette zırh kasap köftesi.",
      price: "340 TL",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 3. TATLI
  tatli: [
    {
      name: "Künefe",
      description: "Sıcak şerbetli, halis peynirli ve bol Antep fıstıklı.",
      price: "180 TL",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80"
    }
  ],

  // 4. İÇECEKLER
  icecekler: [
    {
      name: "Kola",
      description: "Soğuk kutu meşrubat.",
      price: "55 TL",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fanta",
      description: "Soğuk kutu portakallı gazoz.",
      price: "55 TL",
      image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ayran",
      description: "Bol köpüklü taze yayık ayranı.",
      price: "40 TL",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fuse Tea",
      description: "Soğuk ferahlatıcı şeftali / limon buzlu çay.",
      price: "55 TL",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Soda",
      description: "Doğal zengin mineralli maden suyu.",
      price: "35 TL",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Su",
      description: "Doğal kaynak suyu.",
      price: "20 TL",
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
  if (noteTopRight) {
    noteTopRight.innerHTML = restaurantInfo.noteTopRight.replace(/\n/g, "<br>");
  }

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
