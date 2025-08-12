document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "tr": {
            "home": "Ana Sayfa",
            "contact": "İletişim",
            "get_offer": "Teklif Al",
            "call": "+90 538 551 07 94",
            "fire_safety": "Yangına Karşı Önlem, Hayata Verilen Değerdir!",
            "details": "Detaylara Git",
            "how_can_we_help": "Size Nasıl Yardımcı olabiliriz?",
            "contact_us": "Bize Ulaşın",
            "footer_text": "Yangın güvenliği konusunda uzman ekibimizle hizmetinizdeyiz.",
            "footer_location": "Ankara, Türkiye",
            "copyright": "&copy; 2025 <strong>Paraton</strong>. Tüm Hakları Saklıdır.",
            "product_titles": {
                "cnc-yangin": "CNC Yangın Söndürme",
                "yangin-tupu": "Yangın Söndürme Tüpü",
                "davlumbaz-yangin": "Davlumbaz Yangın Söndürme",
                "pano-ici-yangin": "Pano İçi Yangın Söndürme",
                "yangin-dolabi": "Yangın Dolabı Ve Tesisatı",
                "kamerali-sistemler": "Kameralı Sistemler",
                "fm200-cu2": "FM-200 Ve Co2",
                "sprink-sistemleri": "Sprink Sistemleri",
                "dolum-hizmeti": "Dolum Hizmeti",
                "hidrant-sistemi": "Hidrant Sistemi",
                "trafo-yangin": "Trafo Yangın Söndürme",
                "tozlu-kopuklu": "Tozlu Ve Köpüklü Söndürme"
            },
            "special_product_btn": "Harness & Kablaj", // Translation for special product button
            "contact_page": {
                "name": "Adınız Soyadınız",
                "email": "E-posta Adresiniz",
                "phone": "Telefon Numarası",
                "message": "Mesajınız",
                "send_message": "Mesaj Gönder",
                "thank_you": "Mesajınız için teşekkür ederiz! En kısa sürede size dönüş yapılacaktır."
            }
        },
        "en": {
            "home": "Home",
            "contact": "Contact",
            "get_offer": "Get a Quote",
            "call": "+90 538 551 07 94",
            "fire_safety": "Fire Prevention is a Value for Life!",
            "details": "Go to Details",
            "how_can_we_help": "How Can We Help You?",
            "contact_us": "Contact Us",
            "footer_text": "We are at your service with our expert fire safety team.",
            "footer_location": "Ankara, Turkey",
            "copyright": "&copy; 2025 <strong>Paraton</strong>. All Rights Reserved.",
            "product_titles": {
                "cnc-yangin": "CNC Fire Suppression",
                "yangin-tupu": "Fire Extinguisher",
                "davlumbaz-yangin": "Hood Fire Suppression",
                "pano-ici-yangin": "Panel Fire Suppression",
                "yangin-dolabi": "Fire Cabinet and Installation",
                "kamerali-sistemler": "Camera Systems",
                "fm200-cu2": "FM-200 and Co2",
                "sprink-sistemleri": "Sprinkler Systems",
                "dolum-hizmeti": "Filling Service",
                "hidrant-sistemi": "Hydrant System",
                "trafo-yangin": "Transformer Fire Suppression",
                "tozlu-kopuklu": "Powder and Foam Extinguishing"
            },
            "special_product_btn": "Wiring Harness", // Translation for special product button
            "contact_page": {
                "name": "Your Name",
                "email": "Your Email",
                "phone": "Phone Number",
                "message": "Your Message",
                "send_message": "Send Message",
                "thank_you": "Thank you for your message! We will get back to you shortly."
            }
        },
        "de": {
            "home": "Startseite",
            "contact": "Kontakt",
            "get_offer": "Angebot Einholen",
            "call": "+90 538 551 07 94",
            "fire_safety": "Feuerschutz ist ein Wert für das Leben!",
            "details": "Details anzeigen",
            "how_can_we_help": "Wie können wir Ihnen helfen?",
            "contact_us": "Kontaktieren Sie uns",
            "footer_text": "Wir stehen Ihnen mit unserem Expertenteam für Brandschutz zur Verfügung.",
            "footer_location": "Ankara, Türkei",
            "copyright": "&copy; 2025 <strong>Paraton</strong>. Alle Rechte vorbehalten.",
            "product_titles": {
                "cnc-yangin": "CNC-Feuerlöschung",
                "yangin-tupu": "Feuerlöscher",
                "davlumbaz-yangin": "Dunstabzugshauben-Feuerlöschung",
                "pano-ici-yangin": "Schaltschrank-Feuerlöschung",
                "yangin-dolabi": "Feuerlöscher-Schrank und Installation",
                "kamerali-sistemler": "Kamerasysteme",
                "fm200-cu2": "FM-200 und Co2",
                "sprink-sistemleri": "Sprinklersysteme",
                "dolum-hizmeti": "Befüllservice",
                "hidrant-sistemi": "Hydranten-System",
                "trafo-yangin": "Transformator-Feuerlöschung",
                "tozlu-kopuklu": "Pulver- und Schaumlöschung"
            },
            "special_product_btn": "Kabelbaum", // Translation for special product button
            "contact_page": {
                "name": "Ihr Name",
                "email": "Ihre E-Mail",
                "phone": "Telefonnummer",
                "message": "Ihre Nachricht",
                "send_message": "Nachricht senden",
                "thank_you": "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden."
            }
        }
    };

    const langButtons = document.querySelectorAll(".lang-btn");
    const storedLang = localStorage.getItem("lang") || "tr";

    function setLanguage(lang) {
        // Navbar Metinleri
        document.querySelector(".nav ul li a[title='Ana Sayfa']").textContent = translations[lang].home;
        document.querySelector(".nav ul li a[title='İletişim']").textContent = translations[lang].contact;
        document.querySelector(".teklif-btn").textContent = translations[lang].get_offer;
        document.querySelector(".call-button span:last-child").textContent = translations[lang].call;
        document.querySelector(".banner-content h1").textContent = translations[lang].fire_safety;
        document.querySelector(".detay-btn").textContent = translations[lang].details;
        document.querySelector(".adv h2").textContent = translations[lang].how_can_we_help;
        document.querySelector(".adv-contact").textContent = translations[lang].contact_us;

        // Footer Metinleri
        const footerLinks = document.querySelectorAll(".footer-menu a");
        footerLinks.forEach((link) => {
            const key = link.getAttribute("data-translate"); // data-translate değerini al
            if (translations[lang][key]) {
                link.textContent = translations[lang][key]; // Çeviriyi uygula
            }
        });

        document.querySelector(".footer-left p[data-translate='footer_text']").textContent = translations[lang].footer_text;
        document.querySelector(".footer-left span[data-translate='location']").textContent = translations[lang].footer_location;
        document.querySelector(".footer-bottom p[data-translate='copyright']").innerHTML = translations[lang].copyright;

    // Ürün Başlıkları
    document.querySelectorAll(".product-item h3").forEach((item) => {
        const link = item.querySelector("a");
        const productKey = link.getAttribute("href").split("/")[2].replace('.html', '');
        console.log("Ürün Key:", productKey); // Key'i kontrol et
        if (translations[lang].product_titles[productKey]) {
            link.textContent = translations[lang].product_titles[productKey];
        }
    });
        // Detay Butonları
        document.querySelectorAll(".product-btn").forEach((button) => {
            button.textContent = translations[lang].details;
        });

        // Special Product Button
        const specialProductButton = document.querySelector(".special-product-btn");
        if (specialProductButton) {
            specialProductButton.textContent = translations[lang].special_product_btn;
        }

        localStorage.setItem("lang", lang); // Dil seçimini kaydet
    }

    setLanguage(storedLang); // Sayfa açıldığında kaydedilen dili yükle

    langButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });
});
window.addEventListener('load', function() {
    var video = document.querySelector('.banner-video');

    // Sayfa yüklendikten sonra videoyu başlat
    if (video) {
        video.play();
    }

    // Videonun tam ekran olmasını engelle
    video.addEventListener('click', function() {
        // Hiçbir şey yapmıyoruz, böylece tıklanabilir olmuyor
    });

    // Sayfa dışı video durumu kontrolü
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            video.pause();
        } else {
            video.play();
        }
    });
});
