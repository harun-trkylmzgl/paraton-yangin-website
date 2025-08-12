document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        "tr": {
            "contact": "İletişim",
            "call": "0538 551 07 94",
            "contact_us": "Bize Ulaşın",
            "footer_text": "Yangın güvenliği konusunda uzman ekibimizle hizmetinizdeyiz.",
            "footer_location": "Ankara, Türkiye",
            "company_name": "Paraton Yangın Mekanik Çözümleri",
            "email_contact": "info@paratonyangin.com",
            "home": "Ana Sayfa",
            "full_name": "İsim Soyisim",
            "phone_number": "Telefon",
            "email_address": "E-posta adresinizi girin",
            "message": "Mesajınızı buraya yazın",
            "details": "Gönder",
            "copyright": `&copy; 2025 <strong>Paraton</strong>. Tüm Hakları Saklıdır.`
        },
        "en": {
            "contact": "Contact",
            "call": "+90 538 551 07 94",
            "contact_us": "Contact Us",
            "footer_text": "We are at your service with our expert fire safety team.",
            "footer_location": "Ankara, Turkey",
            "company_name": "Paraton Fire Mechanical Solutions",
            "email_contact": "info@paratonyangin.com",
            "home": "Home",
            "full_name": "Full Name",
            "phone_number": "Phone",
            "email_address": "Enter your email address",
            "message": "Write your message here",
            "details": "Submit",
            "copyright": `&copy; 2025 <strong>Paraton</strong>. All Rights Reserved.`
        },
        "de": {
            "contact": "Kontakt",
            "call": "+90 538 551 07 94",
            "contact_us": "Kontaktieren Sie uns",
            "footer_text": "Wir stehen Ihnen mit unserem Expertenteam für Brandschutz zur Verfügung.",
            "footer_location": "Ankara, Türkei",
            "company_name": "Paraton Brandschutzmechanische Lösungen",
            "email_contact": "info@paratonyangin.com",
            "home": "Startseite",
            "full_name": "Vollständiger Name",
            "phone_number": "Telefon",
            "email_address": "Geben Sie Ihre E-Mail-Adresse ein",
            "message": "Schreiben Sie hier Ihre Nachricht",
            "details": "Absenden",
            "copyright": `&copy; 2025 <strong>Paraton</strong>. Alle Rechte vorbehalten.`
        }
    };

    const langButtons = document.querySelectorAll(".lang-btn");
    const storedLang = localStorage.getItem("lang") || "tr";

    function setLanguage(lang) {
        document.querySelector("title").textContent = translations[lang].contact + " | Paraton - Yangın Mekanik Çözümleri";

        // Navigasyon Menüsü
        document.querySelectorAll("[data-translate='home']").forEach(el => el.textContent = translations[lang].home);
        document.querySelectorAll("[data-translate='contact']").forEach(el => el.textContent = translations[lang].contact);
        document.querySelector("[data-translate='call']").textContent = translations[lang].call;
        document.querySelector("[data-translate='contact_us']").textContent = translations[lang].contact_us;

        // İletişim Formu
        document.querySelector("[data-translate='full_name']").textContent = translations[lang].full_name;
        document.querySelector("[data-translate='phone_number']").textContent = translations[lang].phone_number;
        document.querySelector("[data-translate='email_address']").textContent = translations[lang].email_address;
        document.querySelector("[data-translate='message']").textContent = translations[lang].message;
        document.querySelector("[data-translate='details']").textContent = translations[lang].details;

        // ** Placeholder çevirileri **
        document.querySelector("input[name='name']")?.setAttribute("placeholder", translations[lang].full_name);
        document.querySelector("input[name='phone']")?.setAttribute("placeholder", translations[lang].phone_number);
        document.querySelector("input[name='email']")?.setAttribute("placeholder", translations[lang].email_address);
        document.querySelector("textarea[name='message']")?.setAttribute("placeholder", translations[lang].message);

        // Footer
        document.querySelector("[data-translate='company_name']").textContent = translations[lang].company_name;
        document.querySelectorAll("[data-translate='footer_text']").forEach(el => el.textContent = translations[lang].footer_text);
        document.querySelector("[data-translate='footer_location']").textContent = translations[lang].footer_location;
        document.querySelector("[data-translate='email_contact']").textContent = translations[lang].email_contact;

        // ** Copyright kısmında <strong> etiketini koruma **
        let copyrightEl = document.querySelector("[data-translate='copyright']");
        if (copyrightEl) {
            copyrightEl.innerHTML = translations[lang].copyright;
        }

        // LocalStorage'a kaydet
        localStorage.setItem("lang", lang);
    }

    // Sayfa yüklendiğinde dil ayarını uygula
    setLanguage(storedLang);

    // Dil değişim butonları
    langButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Sayfanın yenilenmesini engeller

        let formData = new FormData(this);
        let messageBox = document.getElementById("formMessage");
        let messageText = document.getElementById("formText");
        let messageIcon = document.getElementById("formIcon");

        // Form verilerini AJAX ile gönderiyoruz
        fetch("contact-form-handler.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text()) // Sunucudan gelen yanıt
        .then(data => {
            messageBox.classList.remove("hidden", "error");
            messageBox.classList.add("success");

            messageIcon.innerHTML = "✔"; // Yeşil tik
            messageText.innerText = "Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapılacaktır.";
            
            document.getElementById("contactForm").reset(); // Formu sıfırla
        })
        .catch(error => {
            messageBox.classList.remove("hidden", "success");
            messageBox.classList.add("error");

            messageIcon.innerHTML = "✖"; // Kırmızı çarpı
            messageText.innerText = "Mesaj gönderilemedi! Lütfen tekrar deneyin.";
        });
    });
});
