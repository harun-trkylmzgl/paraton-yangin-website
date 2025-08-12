document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

  // Dil seçeneklerini içeren nesne
  const translations = {
    "tr": {
      "home": "Ana Sayfa",
      "contact": "İletişim",
      "call": "0538 551 07 94",
      "product_title": "CNC Yangın Söndürme Sistemi",
      "description": "CNC makineleri için yangın söndürme sistemi, yangın risklerini minimize etmek amacıyla geliştirilmiştir.",
      "quality_assurance": "Kalite Garantisi",
      "quality_text": "Yüksek kaliteli ürünlerimiz, uluslararası kalite standartlarına uygun şekilde üretilmektedir.",
      "customer_support": "7/24 Müşteri Desteği",
      "customer_text": "Herhangi bir sorunla karşılaştığınızda, müşteri destek ekibimiz her zaman size yardımcı olmaya hazırdır.",
      "security_certificates": "Güvenlik Sertifikalarımız",
      "customer_reviews": "Müşteri Yorumları",
      "other_products": "Diğer Ürünler",
      "details_button": "Ayrıntılara Git",
      "fire_safety_title": "Paraton Yangın Mekanik Çözümleri",
      "footer_text": "Yangın güvenliği konusunda uzman ekibimizle hizmetinizdeyiz.",
      "location": "Ankara, Türkiye",
      "phone_number": "+90 538 551 07 94",
      "copyright": "&copy; 2025 <strong>Paraton</strong>. Tüm Hakları Saklıdır.",
      "fm200_features_title": "FM 200 Söndürme Sistemleri Özellikleri",
      "fm200_features_description": "Renksizdir, kokusuzdur ve yalıtkan bir söndürme ajanıdır. Ozon yok etme kat sayısı sıfırdır, Atmosferik ömrü 31-42 yıldır. Fiziksel olarak söndürme yapar. Gaz boşalması sonrası artık bırakmaz, temizliğe ihtiyaç yoktur, Gaz atmosfere yayılır. İnsan bulunan mekanlarda güvenle kullanılabilir. En yaygın kullanılan Halon 1301 alternatifidir. Ekonomiktir. Az yer kaplar. Boşalma süresi 10 saniyedir.",
      "cnc_fire_suppression": "CNC Yangın Söndürme",
      "fire_extinguisher": "Yangın Söndürme Tüpü",
      "hood_fire_suppression": "Davlumbaz Yangın Söndürme",
      "panel_fire_suppression": "Pano İçi Yangın Söndürme",
      "fire_cabinet": "Yangın Dolabı Ve Tesisatı",
      "camera_systems": "Kameral0ı Sistemler",
      "fm200_cu2": "FM-200 Ve C02",
      "sprink_systems": "Sprink Sistemleri",
      "reliable_services": "Güvenilir Hizmetler",
      "go_to_details": "Ayrıntılara Git"
    },
    "en": {
      "home": "Home",
      "contact": "Contact",
      "call": "+90 538 551 07 94",
      "product_title": "CNC Fire Suppression System",
      "description": "The fire suppression system for CNC machines is designed to minimize fire risks.",
      "quality_assurance": "Quality Assurance",
      "quality_text": "Our high-quality products are manufactured in accordance with international quality standards.",
      "customer_support": "24/7 Customer Support",
      "customer_text": "If you encounter any issues, our customer support team is always ready to assist you.",
      "security_certificates": "Our Security Certificates",
      "customer_reviews": "Customer Reviews",
      "other_products": "Other Products",
      "details_button": "Go to Details",
      "fire_safety_title": "Paraton Fire Mechanical Solutions",
      "footer_text": "We are at your service with our expert team in fire safety.",
      "location": "Ankara, Turkey",
      "phone_number": "+90 538 551 07 94",
      "copyright": "&copy; 2025 <strong>Paraton</strong>. All Rights Reserved.",
      "fm200_features_title": "FM 200 Fire Suppression System Features",
      "fm200_features_description": "It is colorless, odorless, and an insulating extinguishing agent. Its ozone depletion potential is zero, and its atmospheric lifetime is 31-42 years. It extinguishes physically. After gas discharge, it leaves no residue and requires no cleaning; the gas disperses into the atmosphere. It can be safely used in areas where people are present. It is the most widely used alternative to Halon 1301. It is economical and takes up little space. The discharge time is 10 seconds.",
      "cnc_fire_suppression": "CNC Fire Suppression",
      "fire_extinguisher": "Fire Extinguisher",
      "hood_fire_suppression": "Hood Fire Suppression",
      "panel_fire_suppression": "Panel Fire Suppression",
      "fire_cabinet": "Fire Cabinet and Installation",
      "camera_systems": "Camera Systems",
      "fm200_cu2": "FM-200 and Co2",
      "sprink_systems": "Sprinkler Systems",
      "reliable_services": "Reliable Services",
      "go_to_details": "Go to Details"
    },
    "de": {
      "home": "Startseite",
      "contact": "Kontakt",
      "call": "+90 538 551 07 94",
      "product_title": "CNC-Brandbekämpfungssystem",
      "description": "Das Brandschutzsystem für CNC-Maschinen wurde entwickelt, um Brandrisiken zu minimieren.",
      "quality_assurance": "Qualitätssicherung",
      "quality_text": "Unsere hochwertigen Produkte werden nach internationalen Qualitätsstandards hergestellt.",
      "customer_support": "24/7 Kundenservice",
      "customer_text": "Wenn Sie auf Probleme stoßen, steht Ihnen unser Kundendienstteam jederzeit zur Verfügung.",
      "security_certificates": "Unsere Sicherheitszertifikate",
      "customer_reviews": "Kundenbewertungen",
      "other_products": "Andere Produkte",
      "details_button": "Details anzeigen",
      "fire_safety_title": "Paraton Brandmechanische Lösungen",
      "footer_text": "Wir sind mit unserem Expertenteam im Bereich Brandschutz zu Ihrer Verfügung.",
      "location": "Ankara, Türkei",
      "phone_number": "+90 538 551 07 94",
      "copyright": "&copy; 2025 <strong>Paraton</strong>. Alle Rechte vorbehalten.",
      "fm200_features_title": "FM 200 Feuerlöschsystem Eigenschaften",
      "fm200_features_description": "Es ist farblos, geruchlos und ein isolierendes Löschmittel. Sein Ozonabbaupotenzial ist null, und seine atmosphärische Lebensdauer beträgt 31-42 Jahre. Es löscht physikalisch. Nach der Gasfreisetzung hinterlässt es keine Rückstände und erfordert keine Reinigung; das Gas verteilt sich in der Atmosphäre. Es kann sicher in Bereichen verwendet werden, in denen sich Menschen aufhalten. Es ist die am weitesten verbreitete Alternative zu Halon 1301. Es ist wirtschaftlich und nimmt wenig Platz ein. Die Entladezeit beträgt 10 Sekunden.",
      "cnc_fire_suppression": "CNC-Brandbekämpfungssystem",
      "fire_extinguisher": "Feuerlöscher",
      "hood_fire_suppression": "Abzugshaube Brandbekämpfung",
      "panel_fire_suppression": "Panel-Feuerlöschung",
      "fire_cabinet": "Feuerlöscher Schrank und Installation",
      "camera_systems": "Kamerasysteme",
      "fm200_cu2": "FM-200 und Cu2",
      "sprink_systems": "Sprinklersysteme",
      "reliable_services": "Zuverlässige Dienstleistungen",
      "go_to_details": "Zu Details"
    }
  };

  // Seçilen dili kaydetme ve uygulama
  function setLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute("data-lang-key");
      if (translations[lang][key]) {
        if (key === 'copyright') {
          element.innerHTML = translations[lang][key]; // HTML içeriği olarak ayarlıyoruz
        } else {
          element.textContent = translations[lang][key]; // Normal metin olarak ayarlıyoruz
        }
      }
    });
  }

  // Önceki dili yükle
  const savedLang = localStorage.getItem("selectedLanguage") || "tr";
  setLanguage(savedLang);

  // Dil butonlarına event listener ekle
  langButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLang = button.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });
});
