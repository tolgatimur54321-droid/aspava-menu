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
      description: "Bol susamlı, çıtır gevrek geleneksel taş fırın simidi.",
      price: "20 TL",
      image: "images/items/simit.jpg"
    },
    {
      name: "Kaşarlı Simit",
      description: "Taş fırında eriyen bol kaşar peyniriyle fırınlanmış sıcak lezzet.",
      price: "75 TL",
      image: "images/items/kasarli-simit.jpg"
    },
    {
      name: "Karışık Simit",
      description: "Taş fırında eriyen kaşar peyniri, domates, biber ve zeytin ile zengin karışık fırın lezzeti.",
      price: "75 TL",
      image: "images/items/karisik-simit.jpg"
    },
    {
      name: "Tereyağlı Simit",
      description: "Halis tereyağı lezzetiyle fırından yeni çıkmış çıtır simit.",
      price: "30 TL",
      image: "images/items/tereyagli-simit.jpg"
    },
    {
      name: "Poğaça ve Çeşitleri",
      description: "Peynirli, patatesli, zeytinli ve sade günlük taze taş fırın poğaçası.",
      price: "30 TL",
      image: "images/items/pogaca.jpg"
    },
    {
      name: "Açma",
      description: "Yumuşacık dokusu ve tereyağlı lezzetiyle günlük taze taş fırın açması.",
      price: "35 TL",
      image: "images/items/acma.jpg"
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
    },
    {
      name: "Kiremit Köfte",
      description: "Taş fırında tereyağlı domates sosu ve eriyen kaşar peyniriyle fırınlanan kiremitte köfte.",
      price: "450 TL",
      image: "images/items/kiremit-kofte.jpg"
    },
    {
      name: "Kiremit Mantar",
      description: "Taş fırında tereyağı, sarımsak ve kaşar peyniri ile güveçte fırınlanmış taze mantar.",
      price: "175 TL",
      image: "images/items/kiremit-mantar.jpg"
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
      description: "Özel marine kuşbaşı et, zırh kıyması, bol kaşar peyniri ve taze yumurta ile çıtır taş fırın lezzeti.",
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
      name: "Mercimek Çorbası",
      description: "Özel tereyağlı sosu, yanında taş fırın taze ekmek ve limon ile servis edilir.",
      price: "150 TL",
      image: "images/items/corba.jpg"
    },
    {
      name: "Ezogelin Çorbası",
      description: "Geleneksel mercimek, bulgur ve nane harmanı; yanında taş fırın taze ekmek ve limon ile.",
      price: "150 TL",
      image: "images/items/ezogelin.jpg"
    }
  ],

  // 5. TATLI
  tatli: [
    {
      name: "Künefe",
      description: "Sıcak şerbetli ve halis tuzsuz peynirli çıtır künefe.",
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
      description: "Standart kapalı paket soğuk taze ayran.",
      price: "70 TL",
      image: "images/items/buyuk-ayran.jpg"
    },
    {
      name: "K. Ayran",
      description: "Standart kapalı paket soğuk taze ayran.",
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

    // Kategori Başlık Bloğu (QoL: Ürün Sayısı Rozeti Eklendi)
    section.innerHTML = `
      <div class="category-header">
        <div class="category-header-main">
          <div class="category-title-group">
            <span class="cat-icon">${cat.icon}</span>
            <h2 class="cat-title">${cat.name}</h2>
          </div>
          <span class="cat-count-badge">${products.length} Çeşit</span>
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
        <div class="product-image-box" title="Fotoğrafı büyütmek için dokunun">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            class="product-img"
            onerror="this.onerror=null; this.src='images/placeholder.svg';"
          />
          <span class="zoom-badge">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
        </div>
        <div class="product-price-box">
          <span class="product-price">${product.price}</span>
        </div>
      `;

      // QoL: Fotoğrafa tıklayınca tam boy modal aç
      const imgBox = card.querySelector(".product-image-box");
      if (imgBox) {
        imgBox.addEventListener("click", () => {
          openImageModal(product);
        });
      }

      productsList.appendChild(card);
    });

    menuContainer.appendChild(section);
  });
}

// ==========================================
// 5. GÖRSEL BÜYÜTME MODALI (Quality of Life)
// ==========================================
function openImageModal(product) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalDesc = document.getElementById("modal-desc");

  if (!modal || !modalImg) return;

  modalImg.src = product.image;
  modalImg.alt = product.name;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = product.price;
  if (modalDesc) modalDesc.textContent = product.description;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal(e) {
  if (e) e.stopPropagation();
  const modal = document.getElementById("image-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ESC tuşuna basınca modalı kapat
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImageModal();
});

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

  // QoL: Başa Dön Butonu Görünürlük Kontrolü
  const btt = document.getElementById("back-to-top");
  if (btt) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        btt.classList.add("visible");
      } else {
        btt.classList.remove("visible");
      }
    }, { passive: true });
  }
}
