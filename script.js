/* ============================================================
   Portfolio - Joanna Abidé Ani
   Thème clair/sombre · Traduction FR/EN · CV FR/EN · Modales
   ============================================================ */
"use strict";

/* ============================================================
   TRADUCTIONS
   ============================================================ */
const translations = {
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.formation": "Formation",
        "nav.experience": "Expériences",
        "nav.skills": "Compétences",
        "nav.project": "Projet",
        "nav.contact": "Contact",

        "hero.eyebrow": "Bienvenue sur mon portfolio",
        "hero.title": 'Joanna Abidé <span class="gold">Ani</span>',
        "hero.role": "Étudiante en Gestion d'Entreprise &amp; Entrepreneuriat",
        "hero.script": "Rêver &nbsp;·&nbsp; Planifier &nbsp;·&nbsp; Entreprendre",
        "hero.cta1": 'Découvrir mon parcours <span class="arrow">→</span>',
        "hero.cta2": "Me contacter",
        "hero.cv": "📄 Télécharger mon CV",
        "hero.quote": "« Des idées aujourd'hui,<br>des projets demain. »",

        "about.title": 'À propos <span class="underline-gold">de moi</span>',
        "about.text": "Étudiante en 2<sup>ème</sup> année de Gestion d'Entreprise et Entrepreneuriat, je suis rigoureuse et polyvalente, passionnée par la conception de projets et le pilotage d'entreprise.",
        "about.chip1": "Lomé, Togo",
        "about.chip2": "2<sup>ème</sup>année (en cours)",
        "about.chip3": "Passionnée et motivée",
        "about.quote": "« Chaque projet est une opportunité d'apprendre, de grandir et de créer de la valeur. »",

        "formation.title": 'Forma<span class="underline-gold">tion</span>',
        "f1.date": "2024 - Aujourd'hui",
        "f1.title": "ISLA International Business School <small>- Lomé, Togo</small>",
        "f1.sub": "Licence en Business Management and Entrepreneurship (2<sup>ème</sup> année en cours)",
        "f1.details": "Droit &amp; Économie · Management &amp; Comptabilité · Méthodes quantitatives · Géopolitique &amp; Anthropologie des affaires",
        "f2.date": "2022 - 2024",
        "f2.title": "Lycée Technique La Maîtrise <small>- Lomé, Togo</small>",
        "f2.sub": "Baccalauréat Technique, Série G3 (Techniques Commerciales)",
        "f2.details": "Commerce &amp; Marketing · Comptabilité &amp; Mathématiques financières · Droit &amp; Économie · Administration des affaires",

        "xp.title": 'Expé<span class="underline-gold">riences</span>',
        "xp.link": 'Voir l\'attestation <span class="arrow">→</span>',
        "xp1.date": "Juil - Sept 2025",
        "xp1.title": "Kolata Consulting <small>- Lomé, Togo</small>",
        "xp1.role": "Stagiaire en Marketing &amp; Événementiel <em>(Projet : Hôtel École Lébéné)</em>",
        "xp1.l1": "Rédaction de fiches techniques, courriers de partenariat et dossiers de sponsoring <em>(Marathon culinaire Guinness World Record, Octobre Rose)</em>",
        "xp1.l2": "Coordination de 7 événements culturels, sportifs et professionnels",
        "xp1.l3": "Création de contenus, gestion du compte WhatsApp Business et collecte de plus de 190 contacts clients",
        "xp2.date": "21 - 30 Avril 2025",
        "xp2.title": "Hôtel École Lébéné <small>- Lomé, Togo</small>",
        "xp2.role": "Stagiaire au Service Marketing <em>(Festival de l'indépendance)</em>",
        "xp2.l1": "Cheffe d'équipe chargée de la communication et de la recherche d'exposants",
        "xp2.l2": "Visite de sponsors officiels",
        "xp2.l3": "Chargée d'accueil et vente de tickets",
        "xp3.date": "2023 - Aujourd'hui",
        "xp3.title": "Fairy Touch <small>- Lomé, Togo</small>",
        "xp3.role": "Fondatrice &amp; Créatrice <em>(Boutique en ligne de bijoux artisanaux)</em>",
        "xp3.l1": "Conception de bijoux et fixation des prix",
        "xp3.l2": "Communication digitale et relation client",
        "xp3.l3": "Suivi des commandes",
        "xp3.link": 'Découvrir le projet <span class="arrow">→</span>',

        "skills.title": 'Compé<span class="underline-gold">tences</span>',
        "skill1": "Gestion de projet",
        "skill2": "Marketing événementiel",
        "skill3": "Rédaction",
        "skill4": "Organisation",
        "skill5": "Esprit d'initiative",
        "skill6": "Travail en équipe",
        "skill7": "Pack Office<small>Excel · Word · PowerPoint</small>",

        "project.title": 'Projet <span class="underline-gold">entrepreneurial</span>',
        "project.sub": "Boutique en ligne de bijoux artisanaux",
        "project.text": "Création et vente de bijoux faits main, avec une communication digitale et une relation client active.",
        "project.cta": 'Voir le projet <span class="arrow">→</span>',
        "project.badge": "Cliquer pour voir les articles ✨",

        "lang.title": 'Lan<span class="underline-gold">gues</span>',
        "lang1.h": "Français",
        "lang1.p": "Langue maternelle / Langue d'études secondaires",
        "lang2.h": "Anglais",
        "lang2.p": "Niveau B2 (Test British Council)",

        "hobbies.title": 'Centres <span class="underline-gold">d\'intérêt</span>',
        "hobby1": "Entrepreneuriat &amp; boutique en ligne",
        "hobby2": "Badminton",
        "hobby3": "Roller",
        "hobby4": "Peinture",
        "hobby5": "Cuisine &amp; pâtisserie",

        "contact.title": 'Con<span class="underline-gold">tact</span>',
        "contact.intro": "N'hésitez pas à me contacter pour toute collaboration, question ou opportunité.",
        "contact.phone": "Téléphone",
        "contact.location": "Localisation",

        "footer.role": "Étudiante en Gestion d'Entreprise et Entrepreneuriat",
        "footer.script": "Parce que chaque effort compte 💛",
        "footer.copy": "Tous droits réservés",

        "modal.phone.title": "Comment souhaitez-vous me contacter ?",
        "modal.call": "📱 Appeler",
        "modal.whatsapp": "WhatsApp",

        "pm.sub": "Bijoux artisanaux faits main avec amour à Lomé ✨",
        "cap1": "Article 1",
        "cap2": "Article 2",
        "cap3": "Article 3",
        "cap4": "Article 4",
        "cap5": "Article 5",
        "cap6": "Article 6",
        "pm.cta.q": "Une envie, une commande, une question ?",
        "pm.cta.btn": 'Commander sur WhatsApp <span class="arrow">→</span>',
    },

    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.formation": "Education",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.project": "Project",
        "nav.contact": "Contact",

        "hero.eyebrow": "Welcome to my portfolio",
        "hero.title": 'Joanna Abidé <span class="gold">Ani</span>',
        "hero.role": "Business Management &amp; Entrepreneurship student",
        "hero.script": "Dream &nbsp;·&nbsp; Plan &nbsp;·&nbsp; Build",
        "hero.cta1": 'Discover my journey <span class="arrow">→</span>',
        "hero.cta2": "Get in touch",
        "hero.cv": "📄 Download my resume",
        "hero.quote": "« Ideas today,<br>projects tomorrow. »",

        "about.title": 'About <span class="underline-gold">me</span>',
        "about.text": "A second-year Business Management and Entrepreneurship student, I am thorough and versatile, passionate about designing projects and managing businesses.",
        "about.chip1": "Lomé, Togo",
        "about.chip2": "2<sup>nd</sup> year (ongoing)",
        "about.chip3": "Passionate and driven",
        "about.quote": "« Every project is a chance to learn, grow and create value. »",

        "formation.title": 'Edu<span class="underline-gold">cation</span>',
        "f1.date": "2024 - Present",
        "f1.title": "ISLA International Business School <small>- Lomé, Togo</small>",
        "f1.sub": "Bachelor's in Business Management and Entrepreneurship (2<sup>nd</sup> year, ongoing)",
        "f1.details": "Law &amp; Economics · Management &amp; Accounting · Quantitative Methods · Geopolitics &amp; Business Anthropology",
        "f2.date": "2022 - 2024",
        "f2.title": "Lycée Technique La Maîtrise <small>- Lomé, Togo</small>",
        "f2.sub": "Technical Baccalauréat, G3 track (Business Techniques)",
        "f2.details": "Trade &amp; Marketing · Accounting &amp; Financial Mathematics · Law &amp; Economics · Business Administration",

        "xp.title": 'Expe<span class="underline-gold">rience</span>',
        "xp.link": 'View certificate <span class="arrow">→</span>',
        "xp1.date": "Jul - Sep 2025",
        "xp1.title": "Kolata Consulting <small>- Lomé, Togo</small>",
        "xp1.role": "Marketing &amp; Events Intern <em>(Project: Hôtel École Lébéné)</em>",
        "xp1.l1": "Wrote technical sheets, partnership letters and sponsorship files <em>(Guinness World Record cooking marathon, Pink October)</em>",
        "xp1.l2": "Coordinated 7 cultural, sports and professional events",
        "xp1.l3": "Created content, managed the WhatsApp Business account and collected 190+ client contacts",
        "xp2.date": "April 21 - 30, 2025",
        "xp2.title": "Hôtel École Lébéné <small>- Lomé, Togo</small>",
        "xp2.role": "Marketing Department Intern <em>(Independence Festival)</em>",
        "xp2.l1": "Team lead in charge of communication and exhibitor outreach",
        "xp2.l2": "Official sponsor visits",
        "xp2.l3": "Welcome desk and ticket sales",
        "xp3.date": "2023 - Present",
        "xp3.title": "Fairy Touch <small>- Lomé, Togo</small>",
        "xp3.role": "Founder &amp; Creator <em>(Online handcrafted jewelry shop)</em>",
        "xp3.l1": "Jewelry design and pricing",
        "xp3.l2": "Digital communication and customer care",
        "xp3.l3": "Order follow-up",
        "xp3.link": 'Discover the project <span class="arrow">→</span>',

        "skills.title": 'Ski<span class="underline-gold">lls</span>',
        "skill1": "Project management",
        "skill2": "Event marketing",
        "skill3": "Writing",
        "skill4": "Organization",
        "skill5": "Initiative",
        "skill6": "Teamwork",
        "skill7": "Office Suite<small>Excel · Word · PowerPoint</small>",

        "project.title": 'Entrepreneurial <span class="underline-gold">project</span>',
        "project.sub": "Online handcrafted jewelry shop",
        "project.text": "Creating and selling handmade jewelry, with polished digital communication and active customer care.",
        "project.cta": 'View the project <span class="arrow">→</span>',
        "project.badge": "Click to view the items ✨",

        "lang.title": 'Lang<span class="underline-gold">uages</span>',
        "lang1.h": "French",
        "lang1.p": "Native language / language of secondary education",
        "lang2.h": "English",
        "lang2.p": "B2 level (British Council test)",

        "hobbies.title": 'Inter<span class="underline-gold">ests</span>',
        "hobby1": "Entrepreneurship &amp; online shop",
        "hobby2": "Badminton",
        "hobby3": "Roller skating",
        "hobby4": "Painting",
        "hobby5": "Cooking &amp; baking",

        "contact.title": 'Con<span class="underline-gold">tact</span>',
        "contact.intro": "Feel free to contact me for any collaboration, question or opportunity.",
        "contact.phone": "Phone",
        "contact.location": "Location",

        "footer.role": "Business Management and Entrepreneurship student",
        "footer.script": "Because every effort counts 💛",
        "footer.copy": "All rights reserved",

        "modal.phone.title": "How would you like to contact me?",
        "modal.call": "📱 Call",
        "modal.whatsapp": "WhatsApp",

        "pm.sub": "Handcrafted jewelry made with love in Lomé ✨",
        "cap1": "Item 1",
        "cap2": "Item 2",
        "cap3": "Item 3",
        "cap4": "Item 4",
        "cap5": "Item 5",
        "cap6": "Item 6",
        "pm.cta.q": "A wish, an order, a question?",
        "pm.cta.btn": 'Order on WhatsApp <span class="arrow">→</span>',
    },
};

/* Fichiers CV selon la langue */
const cvFiles = {
    fr: "assets/CV_Joanna_FR.pdf",
    en: "assets/CV_Joanna_EN.pdf",
};

/* ---------- Langue ---------- */
const langBtn = document.getElementById("langBtn");
const langIcon = document.getElementById("langIcon");
const cvBtn = document.getElementById("cvBtn");
let currentLang = localStorage.getItem("joanna-lang") || "fr";

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("joanna-lang", lang);
    document.documentElement.lang = lang;
    document.title = "Joanna Abidé Ani - Portfolio";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const value = translations[lang][key];
        if (value !== undefined) el.innerHTML = value;
    });

    // Le bouton CV télécharge la version de la bonne langue
    if (cvBtn) {
        cvBtn.href = cvFiles[lang];
        cvBtn.setAttribute("download", cvFiles[lang].split("/").pop());
    }

    // Le bouton affiche la langue vers laquelle on peut basculer
    langIcon.textContent = lang === "fr" ? "EN" : "FR";
    langBtn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
}

langBtn.addEventListener("click", () => {
    applyLang(currentLang === "fr" ? "en" : "fr");
});

applyLang(currentLang);

/* ---------- Thème clair / sombre ---------- */
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
let currentTheme = localStorage.getItem("joanna-theme") || "light";

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("joanna-theme", theme);
    document.documentElement.dataset.theme = theme;
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    themeBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"
    );
}

themeBtn.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
});

applyTheme(currentTheme);

/* ---------- Année automatique dans le footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Menu mobile ---------- */
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuBtn.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

// Fermer le menu quand on clique sur un lien
mainNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

/* ---------- Lien actif dans la navigation ---------- */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

/* ---------- Animations d'apparition (reveal) ---------- */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Barres de langues animées ---------- */
const langBars = document.querySelectorAll(".lang-bar span");
langBars.forEach((bar) => {
    const target = bar.style.width || "100%";
    bar.style.width = "0";
    bar.dataset.target = target;
});

const langObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                setTimeout(() => {
                    bar.style.width = bar.dataset.target;
                }, 200);
                langObserver.unobserve(bar);
            }
        });
    },
    { threshold: 0.4 }
);
langBars.forEach((bar) => langObserver.observe(bar));

/* ---------- Gestion des modales ---------- */
function openModal(modal) {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    const focusable = modal.querySelector("a.button, button:not(.modal-close)");
    if (focusable) focusable.focus();
}

function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
}

function setupModal(modalId, openers) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    openers.forEach((opener) => {
        if (opener) opener.addEventListener("click", () => openModal(modal));
    });

    // Fermeture : bouton ✕ ou clic sur le fond
    modal.querySelectorAll("[data-close]").forEach((closer) => {
        closer.addEventListener("click", () => closeModal(modal));
    });

    // Fermeture avec la touche Échap
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !modal.hidden) closeModal(modal);
    });

    // Refermer la modale après un clic sur Appeler / WhatsApp
    modal.querySelectorAll(".modal-actions a, .project-cta a").forEach((link) => {
        link.addEventListener("click", () => closeModal(modal));
    });
}

// Modale téléphone : choix Appel / WhatsApp
setupModal("phoneModal", [
    document.getElementById("phoneCard"),
    document.getElementById("footerPhone"),
]);

// Modale projet Fairy Touch (galerie d'articles)
setupModal("projectModal", [
    document.getElementById("openProject"),
    document.getElementById("openProject2"),
]);

/* ---------- Effet ripple léger sur les boutons ---------- */
document.querySelectorAll(".touch-effect").forEach((el) => {
    el.addEventListener("click", (event) => {
        const ripple = document.createElement("span");
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${event.clientX - rect.left - size / 2}px;
            top: ${event.clientY - rect.top - size / 2}px;
            background: rgba(255, 255, 255, 0.35);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
    });
});

// Keyframes du ripple (injectés pour garder le CSS propre)
const rippleStyle = document.createElement("style");
rippleStyle.textContent = "@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }";
document.head.appendChild(rippleStyle);
