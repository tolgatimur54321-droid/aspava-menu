# SİMA - Sade & Premium QR Restoran Menüsü 🥐🥩🥖

Bu proje, **SİMA** restoranı için özel olarak hazırlanmış, hafif, hızlı ve mobil öncelikli bir **QR Menü** web sitesidir.

---

## 📱 Güncel Menü Yapısı (6 Kategori & Gerçek Menü Fiyatları)

### 1. 🌾 Taş Fırından
- **Simit:** 20 TL
- **Kaşarlı Simit:** 75 TL
- **Karışık Simit:** 75 TL
- **Tereyağlı Simit:** 30 TL
- **Poğaça ve Çeşitleri (Peynirli, Patatesli, Zeytinli, Sade):** 30 TL
- **Açma:** 35 TL

### 2. 🥩 Kebaplar
- **Adana Kebap:** 400 TL
- **Urfa Kebap:** 400 TL
- **Izgara Köfte:** 400 TL
- **Kanat:** 375 TL
- **Kiremit Köfte:** 450 TL
- **Kiremit Mantar:** 175 TL

### 3. 🥖 Pideler
- **Kıymalı Pide:** 320 TL
- **Kuşbaşılı Pide:** 375 TL
- **Kaşarlı Pide:** 375 TL
- **Karışık Pide (Kuşbaşı, Kıyma, Kaşar, Yumurta):** 420 TL
- **Kuşbaşılı Kaşarlı Pide:** 400 TL
- **Kıymalı Kaşarlı Pide:** 350 TL
- **Beyaz Peynirli Pide:** 300 TL
- **Lahmacun:** 200 TL
- **Antep Lahmacun:** 225 TL

### 4. 🥣 Çorba
- **Mercimek Çorbası (Ekmek ve limon eşliğinde):** 150 TL
- **Ezogelin Çorbası (Ekmek ve limon eşliğinde):** 150 TL

### 5. 🍰 Tatlı
- **Künefe:** 200 TL

### 6. 🥤 İçecekler
- **Cola:** 80 TL
- **Fanta:** 80 TL
- **M. Suyu Çeşitleri:** 40 TL
- **B. Ayran (Standart Kapalı Paket):** 70 TL
- **K. Ayran (Standart Kapalı Paket):** 40 TL
- **Şalgam:** 70 TL
- **Su:** 20 TL
- **Çay:** 25 TL
- **Soda:** 25 TL
- **Nescafe:** 50 TL

---

## 🚀 Tasarım & Quality of Life (QoL) Özellikleri

- **Görsel Büyütme Modalı (QoL):** Müşteriler ürün fotoğrafına dokunduğunda ürünün yüksek çözünürlüklü fotoğrafını, adını, açıklamasını ve fiyatını şık bir pencerede detaylı inceleyebilir.
- **Kategori Çeşit Sayacı (QoL):** Her kategori başlığının yanında o kategoride kaç çeşit ürün olduğunu belirten zarif bir rozet (örn. `6 Çeşit`, `9 Çeşit`).
- **Yüzen Başa Dön Butonu (QoL):** Sayfa aşağı kaydırıldığında yumuşakça beliren ve tek dokunuşla sayfanın en üstüne çıkaran akıllı buton.
- **Mobil Öncelikli & Yaşlı Dostu:** Fiyatlar büyük (`1.25rem`), kalın ve yüksek kontrastlıdır; tıklanabilir buton hissi vermez.
- **Yatay Kategori Çubuğu (Kusursuz ScrollSpy):** Kategoriler arasında yumuşak geçiş; tıklama ile elle kaydırma çakışmalarını önleyen kilitleme mekanizması.
- **Merkezi Veri Yönetimi:** Tüm ürünler, kategoriler ve fiyatlar tek bir JavaScript dosyasından (`js/menu.js`) saniyeler içinde düzenlenebilir.
- **Sıfır Bağımlılık & GitHub Pages Uyumlu:** Statik HTML5, CSS3 ve Vanilla JavaScript; hiçbir kurulum, derleme veya sunucu gerektirmez.

---

## ✏️ Menüyü ve Fotoğrafları Nasıl Güncellerim?

Tüm içerikler **`js/menu.js`** dosyasından yönetilir:

```javascript
// Örnek: Adana Kebap fiyatını veya fotoğrafını değiştirmek için:
{
  name: "Adana Kebap",
  description: "Közde pişen nefis zırh kıyması kebabı...",
  price: "400 TL",
  image: "images/items/adana-kebap.jpg"
}
```

---

## 🌐 GitHub Pages Üzerinde Yayına Alma

1. [GitHub](https://github.com)'a giriş yapıp deponuza dosyaları yükleyin.
2. **Settings > Pages** menüsünden `main` branch ve `/ (root)` seçip kaydedin.
3. Menünüz `https://kullaniciadiniz.github.io/...` adresinde anında ücretsiz yayına girecektir.
