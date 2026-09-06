# SİMA - Sade & Premium QR Restoran Menüsü 🥐🥩

Bu proje, **SİMA** restoranı için özel olarak hazırlanmış, gereksiz karmaşıklıktan arındırılmış, hafif, hızlı ve mobil öncelikli bir **QR Menü** web sitesidir.

---

## 📱 Restoran Menü Yapısı (4 Ana Kategori)

1. **🌾 Taş Fırından:** Simit, Kaşarlı Simit, Karışık Simit, Tereyağlı Simit, Poğaça ve Çeşitleri
2. **🔥 Aspava:** Pide, Lahmacun, Adana, Kanat, Köfte
3. **🍰 Tatlı:** Künefe
4. **🥤 İçecekler:** Kola, Fanta, Ayran, Fuse Tea, Soda, Su

---

## 🚀 Tasarım ve Teknik Özellikler

- **Referans Tasarım Uyumu:** Sıcak krem/ivory zemin, koyu kahve serif tipografi, terakota el yazısı detayları ve taş fırın atmosferi.
- **Sadece QR Menü Odaklı:** Arama kutusu, gereksiz filtreler, üyelik veya sipariş kalabalığı olmadan doğrudan menüyü sunan yalın yapı.
- **Sabit (Sticky) 4 Kategori Çubuğu:** Ekranda kaydırdıkça üstte kalan ve tek dokunuşla ilgili kategoriye yumuşak kaydıran ergonomik navigasyon.
- **Yalın Ürün Kartları:** [ Fotoğraf ] + Ürün Adı + Kısa Açıklama + Fiyat Etiketi (`-- TL >`).
- **Saf Teknolojiler:** HTML5, CSS3 ve Vanilla JavaScript. Harici framework veya veritabanı gerektirmez.
- **GitHub Pages Uyumlu:** Statik dosya yapısı ile ücretsiz ve ömür boyu yayınlanabilir.

---

## 📁 Proje Dosya Yapısı

```text
MenuSite/
├── index.html           # Ana sayfa iskeleti, meta etiketleri ve fontlar
├── css/
│   └── style.css        # Sıcak restoran temalı mobil öncelikli stiller
├── js/
│   └── menu.js          # Sadece 4 kategori ve ürünlerin bulunduğu merkezi veri dosyası
├── images/
│   └── placeholder.svg  # Çevrimdışı/hatalı görsel durumunda yedek SVG
└── README.md            # Kullanım ve kurulum kılavuzu
```

---

## ✏️ Menüyü ve Fiyatları Nasıl Güncellerim?

Tüm menü içerikleri **`js/menu.js`** dosyasındaki `menuData` nesnesinden yönetilir.

### 1. Fiyat Değiştirme
`js/menu.js` dosyasını açın ve istediğiniz ürünün `price` alanını değiştirin:
```javascript
// Örnek:
name: "Simit",
description: "Geleneksel lezzet, taş fırından günlük taze.",
price: "25 TL", // Fiyatı buraya yazın
```

### 2. Yeni Ürün Ekleme
İlgili kategorinin listesine yeni bir ürün ekleyebilirsiniz:
```javascript
tasFirindan: [
  // ... mevcut ürünler ...
  {
    name: "Açma",
    description: "Yumuşacık zeytinli fırın açması.",
    price: "-- TL",
    image: "https://images.unsplash.com/... VEYA images/acma.jpg"
  }
]
```

### 3. Kendi Çektiğiniz Fotoğrafları Kullanma
Kendi fotoğraflarınızı `images/` klasörüne atıp ürünün `image` alanına yolunu yazabilirsiniz:
```javascript
image: "images/simit.jpg"
```

---

## 🌐 GitHub Pages Üzerinde Ücretsiz Canlıya Alma

1. [GitHub](https://github.com)'da yeni bir **Public** depo açın (örn: `sima-menu`).
2. `MenuSite` içindeki tüm dosyaları depoya yükleyin.
3. **Settings > Pages** bölümünden `Branch: main`, `Folder: / (root)` seçip **Save** butonuna tıklayın.
4. Siteniz 1-2 dakika içinde `https://kullaniciadiniz.github.io/sima-menu/` adresinde canlıya geçecektir.
