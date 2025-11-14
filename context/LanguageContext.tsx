'use client'

import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from 'react';

// === translations inline ===
export const translations = {
  en: {
    // Nav
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_pricing: "Pricing",
    nav_contact: "Contact", // Added from your navLinks
    nav_start_project: "Start Your Project",

    // Hero
    hero_title: "Websites that Boost Your Business in Romania",
    hero_subtitle: "We turn your ideas into fast, modern, and optimized websites to attract more customers. From design to launch, we handle everything.",
    hero_button: "See Packages & Prices",

    // Services
    services_title: "Our ",
    service_title_1:"Services",
    services_subtitle: "Everything you need for a successful online presence.",
    service_1_title: "Responsive Design",
    service_1_desc: "Sites that work perfectly on mobile phones, tablets, and desktops.",
    service_2_title: "High Performance",
    service_2_desc: "Speed optimization for the best user experience and Google ranking.",
    service_3_title: "Basic SEO",
    service_3_desc: "Initial setup so your clients can find your site on Google.",

    //results
    results_1_desc: "Projects Delivered",
    results_2_desc: "Client Satisfaction",
    results_3_desc: "Years of Experience",
    results_4_desc: "Support Available",

    // ... all your other keys
    approach_my:"My",
    approach_title: " approach",
    approach_1_title: "Planning & Strategy.",
    approach_1_desc: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    approach_2_title: "Development & Progress Update.",
    approach_2_desc: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    approach_3_title: "Development & Launch.",
    approach_3_desc: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    approach_p_title: "Planning & Strategy.",
    description_1:"We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    link_1: "#planning-strategy",
    img_1:"app.svg",
    title_2: "Devlopement & Progress Update.",
    description_2:"Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    link_2: "#development-progress",
    title_3: "Developement & lunch.",
    description_3:"This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    link_3: "#development-launch",


    // Work (Portfolio)
    work_title: "Our",
    work_title_1:"Work",
    work_subtitle: "Check out some of the projects we are proud to have created.",

    // Pricing
    pricing_title: "Transparent",
    pricing_title_1: "Pricing",
    pricing_subtitle: "A simple package to put your business on the digital map.",
    pricing_package_title: "Basic Package",
    pricing_package_desc: "Ideal for small businesses and professionals",
    pricing_tag: "one-time payment",
    pricing_feature_1: "Up to 5 pages website",
    pricing_feature_2: "100% Responsive Design",
    pricing_feature_3: "Contact Form",
    pricing_feature_4: "Basic SEO",
    pricing_feature_5: "Fast Delivery",
    pricing_button_main: "Pay Now & Get Started",
    pricing_button_alt: "Partial Payments",
    currency: "$",

    // Contact
    contact_title: "Let's Talk!",
    contact_subtitle: "Send a message and let's turn your idea into reality. Response within 24 hours.",
    form_placeholder_name: "Your Name",
    form_placeholder_email: "Your Email",
    form_placeholder_message: "Tell us a little about your project...",
    form_button_send: "Send Message",

    // Footer
    footer_copyright: "© 2025 NexusWeb. All rights reserved.",
    footer_subtitle: "Creating the future of the web in Romania.",
    services_title_1:"Web design",
    services_title_2:"web development",
    services_title_3:"SEO optimization",
    services_title_4:"Maintenance",
    links_title_1:"Home",
    links_title_2:"Services",
    links_title_3:"Pricing",
    links_title_4:"Contact",
    nexus_desc:"Crafting the future of digital experiences with passion and innovation",
    
    //selctionPage
    start_project: "Start Your Project",
    desc_1: "This project is a high-performance, statically-generated website for a boutique coffee shop, \"The Daily Grind.\" The primary objective was to build a visually appealing, fast-loading, and SEO-friendly site. Built as a Jamstack application using Next.js 13 (App Router) for Static Site Generation (SSG), it is incredibly fast, secure, and indexable. It features TypeScript for robust code, Tailwind CSS for a utility-first responsive UI, and GSAP for professional micro-interactions and page transitions.",
    desc_2: "\"Athletix\" is a high-performance, headless e-commerce store built to deliver a best-in-class, app-like user experience with instant page loads. The core architecture is a Jamstack application, decoupling the front-end presentation layer from the back-end commerce engine. The site is built with Next.js using the App Router, leveraging a hybrid rendering strategy (SSG/SSR) for optimal SEO and up-to-date stock information. The UI is constructed with Tailwind CSS for a utility-first, responsive design system. Global state (like the shopping cart) is managed efficiently using Zustand, and all commerce operations are handled via a headless API (like Shopify Storefront API or Medusa.js) with payments processed securely via Stripe.",
    desc_3: "\"MediConnect\" is a professional, secure, and accessible website designed to build patient trust for a modern medical clinic. The site is built using Next.js with Static Site Generation (SSG) to ensure rapid load times, strong SEO for medical services, and a high-security posture (vital for patient privacy). Content is managed through a headless CMS (like Contentful or Sanity), allowing staff to update doctor profiles and health blogs easily. The project features a clean, responsive UI built with Tailwind CSS, focusing on readability and accessibility (WCAG compliance), and includes a secure API route for handling patient appointment requests.",
    desc_4: "This project is a full-stack real estate portal designed for performance and complex data handling. The front-end is a Single Page Application (SPA) built with React and TypeScript, featuring advanced, client-side filtering for property listings and integration with the Mapbox GL JS API to display properties geographically. The back-end is a custom RESTful API built with Node.js, Express, and a PostgreSQL database (using the Prisma ORM) to manage complex relational data for listings, agents, and user-saved properties."
  },
  fr: {
    // Nav
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_pricing: "Tarifs",
    nav_contact: "Contact",
    nav_start_project: "Commencer Votre Projet",

    // Hero
    hero_title: "Des Sites Web qui Boostent Votre Activité en Roumanie",
    hero_subtitle: "Nous transformons vos idées en sites web rapides, modernes et optimisés pour attirer plus de clients. De la conception au lancement, nous nous occupons de tout.",
    hero_button: "Voir les Forfaits et Prix",

    // Services
    services_title: "Nos ",
    service_title_1:"Services",
    services_subtitle: "Tout ce dont vous avez besoin pour une présence en ligne réussie.",
    service_1_title: "Design Réactif",
    service_1_desc: "Des sites qui fonctionnent parfaitement sur mobiles, tablettes et ordinateurs.",
    service_2_title: "Haute Performance",
    service_2_desc: "Optimisation de la vitesse pour la meilleure expérience utilisateur et le classement Google.",
    service_3_title: "SEO de Base",
    service_3_desc: "Configuration initiale pour que vos clients puissent trouver votre site sur Google.",
     
    //results
    results_1_desc: "Projets livrés",
    results_2_desc: "Satisfaction client",
    results_3_desc: "Années d'expérience",
    results_4_desc: " Support disponible",


    // ... all your other keys
     approach_my:"Mon",
   approach_title: " approche",
    approach_1_title: "Planification et Stratégie.",
  approach_1_desc: "Nous collaborerons pour définir les objectifs de votre site, le public cible et les fonctionnalités clés. Nous discuterons de la structure du site, de la navigation et des besoins en contenu.",
  approach_2_title: "Développement et Suivi.",
  approach_2_desc: "Une fois le plan validé, je lance ma playlist lofi et je plonge dans le code. Des premières ébauches au code final, je vous tiens informé à chaque étape.",
  approach_3_title: "Développement et Lancement.",
  approach_3_desc: "C'est ici que la magie opère ! Sur la base du design approuvé, je traduirai tout en code fonctionnel, construisant votre site web de A à Z.",
  // ...

    // Work (Portfolio)
    work_title: "Notre ",
    work_title_1:"Travail",
    work_subtitle: "Découvrez quelques-uns des projets que nous sommes fiers d'avoir créés.",

    // Pricing
    pricing_title: "Tarification ",
    pricing_title_1: "Transparente",
    pricing_subtitle: "Un forfait simple pour positionner votre entreprise sur la carte numérique.",
    pricing_package_title: "Forfait de Base",
    pricing_package_desc: "Idéal pour les petites entreprises et les professionnels",
    pricing_tag: "paiement unique",
    pricing_feature_1: "Site web jusqu'à 5 pages",
    pricing_feature_2: "100% Design Réactif",
    pricing_feature_3: "Formulaire de Contact",
    pricing_feature_4: "SEO de Base",
    pricing_feature_5: "Livraison Rapide",
    pricing_button_main: "Payer Maintenant et Commencer",
    pricing_button_alt: "Paiements Partiels",
    currency: "€",

    // Contact
    contact_title: "Parlons-en!",
    contact_subtitle: "Envoyez un message et transformons votre idée en réalité. Réponse sous 24 heures.",
    form_placeholder_name: "Votre Nom",
    form_placeholder_email: "Votre Email",
    form_placeholder_message: "Parlez-nous un peu de votre projet...",
    form_button_send: "Envoyer le Message",

    // Footer
    footer_copyright: "© 2025 NexusWeb. Tous droits réservés.",
    footer_subtitle: "Créer l'avenir du web en Roumanie.",
    services_title_1:"Conception web",
services_title_2:"développement web",
services_title_3:"Optimisation SEO",
services_title_4:"Maintenance",
links_title_1:"Accueil",
links_title_2:"Services",
links_title_3:"Tarifs",
links_title_4:"Contact",
nexus_desc:"Façonner l'avenir des expériences numériques avec passion et innovation",

   //selctionPage
  start_project: "Commencez votre projet",
  
  desc_1: "Ce projet est un site web haute performance, généré statiquement pour un café-boutique, \"The Daily Grind\". L'objectif principal était de construire un site visuellement attrayant, à chargement rapide et optimisé pour le SEO. Construit comme une application Jamstack avec Next.js 13 (App Router) pour la génération de site statique (SSG), il est incroyablement rapide, sécurisé et indexable. Il utilise TypeScript pour un code robuste, Tailwind CSS pour une interface utilisateur responsive 'utility-first', et GSAP pour des micro-interactions et des transitions de page professionnelles.",
  
  desc_2: "\"Athletix\" est une boutique e-commerce 'headless' haute performance, conçue pour offrir une expérience utilisateur de premier ordre, similaire à une application, avec des chargements de page instantanés. L'architecture de base est une application Jamstack, découplant la couche de présentation front-end du moteur de commerce back-end. Le site est construit avec Next.js (App Router), exploitant une stratégie de rendu hybride (SSG/SSR) pour un SEO optimal et des informations de stock à jour. L'interface utilisateur est construite avec Tailwind CSS pour un système de design 'utility-first' et responsive. L'état global (comme le panier d'achat) est géré efficacement avec Zustand, et toutes les opérations commerciales sont gérées via une API 'headless' (comme Shopify Storefront API ou Medusa.js) avec des paiements traités de manière sécurisée via Stripe.",
  
  desc_3: "\"MediConnect\" est un site web professionnel, sécurisé et accessible, conçu pour renforcer la confiance des patients envers une clinique médicale moderne. Le site est construit avec Next.js et la génération de site statique (SSG) pour garantir des temps de chargement rapides, un SEO solide pour les services médicaux et un haut niveau de sécurité (essentiel pour la confidentialité des patients). Le contenu est géré via un CMS 'headless' (comme Contentful ou Sanity), permettant au personnel de mettre à jour facilement les profils des médecins et les blogs santé. Le projet dispose d'une interface utilisateur épurée et responsive, construite avec Tailwind CSS, axée sur la lisibilité et l'accessibilité (conformité WCAG), et comprend une route API sécurisée pour gérer les demandes de rendez-vous des patients.",
  
  desc_4: "Ce projet est un portail immobilier 'full-stack' conçu pour la performance et la gestion de données complexes. Le front-end est une application à page unique (SPA) construite avec React et TypeScript, dotée d'un filtrage avancé côté client pour les annonces immobilières et d'une intégration avec l'API Mapbox GL JS pour afficher les propriétés géographiquement. Le back-end est une API RESTful personnalisée construite avec Node.js, Express, et une base de données PostgreSQL (utilisant l'ORM Prisma) pour gérer les données relationnelles complexes des annonces, des agents et des propriétés sauvegardées par les utilisateurs."
},
  ro: {
    // Nav
    nav_services: "Servicii",
    nav_portfolio: "Portofoliu",
    nav_pricing: "Prețuri",
    nav_contact: "Contact",
    nav_start_project: "Începe Proiectul",

    // Hero
    hero_title: "Site-uri Web care Îți Propulsează Afacerea în România",
    hero_subtitle: "Transformăm ideile tale în site-uri web rapide, moderne și optimizate pentru a atrage mai mulți clienți. De la design la lansare, ne ocupăm de tot.",
    hero_button: "Vezi Pachete și Prețuri",

    // Services
    services_title: "Serviciile",
    service_title_1:"Noastre",
    services_subtitle: "Tot ce ai nevoie pentru o prezență online de succes.",
    service_1_title: "Design Responsiv",
    service_1_desc: "Site-uri care funcționează perfect pe telefoane mobile, tablete și desktop-uri.",
    service_2_title: "Performanță Ridicată",
    service_2_desc: "Optimizarea vitezei pentru cea mai bună experiență a utilizatorului și clasare Google.",
    service_3_title: "SEO de Bază",
    service_3_desc: "Configurare inițială pentru ca clienții tăi să îți poată găsi site-ul pe Google.",

    //resluts 
     results_1_desc: "Proiecte livrate",
     results_2_desc: "Satisfacția clienților",
     results_3_desc: "Ani de experiență",
     results_4_desc: " Suport disponibil",

    // ... all your other keys
     approach_my:"Abordarea",
  approach_title: " mea",
  approach_1_title: "Planificare și Strategie.",
  approach_1_desc: "Vom colabora pentru a stabili obiectivele site-ului, publicul țintă și funcționalitățile cheie. Vom discuta lucruri precum structura site-ului, navigația și cerințele de conținut.",
  approach_2_title: "Dezvoltare și Actualizări.",
  approach_2_desc: "Odată ce suntem de acord asupra planului, pornesc playlist-ul meu lofi și mă apuc de codat. De la schițe inițiale la cod finisat, te țin la curent la fiecare pas.",
  approach_3_title: "Dezvoltare și Lansare.",
  approach_3_desc: "Aici se întâmplă magia! Pe baza designului aprobat, voi traduce totul în cod funcțional, construind site-ul tău web de la zero.",
  // ...

    // Work (Portfolio)
    work_title: "Munca ",
    work_title_1:"Noastră",
    work_subtitle: "Vedeți câteva dintre proiectele pe care suntem mândri că le-am creat.",

    // Pricing
    pricing_title: "Prețuri ",
    pricing_title_1: "Transparente",
    pricing_subtitle: "Un pachet simplu pentru a-ți plasa afacerea pe harta digitală.",
    pricing_package_title: "Pachet de Bază",
    pricing_package_desc: "Ideal pentru afaceri mici și profesioniști",
    pricing_tag: "plată unică",
    pricing_feature_1: "Website de până la 5 pagini",
    pricing_feature_2: "100% Design Responsiv",
    pricing_feature_3: "Formular de Contact",
    pricing_feature_4: "SEO de Bază",
    pricing_feature_5: "Livrare Rapidă",
    pricing_button_main: "Plătește Acum și Începe",
    pricing_button_alt: "Plăți Parțiale",
    currency:"LEI",

    // Contact
    contact_title: "Hai să Vorbim!",
    contact_subtitle: "Trimite un mesaj și haideți să transformăm ideea ta în realitate. Răspuns în 24 de ore.",
    form_placeholder_name: "Numele Tău",
    form_placeholder_email: "Emailul Tău",
    form_placeholder_message: "Spune-ne puțin despre proiectul tău...",
    form_button_send: "Trimite Mesajul",

    // Footer
    footer_copyright: "© 2025 NexusWeb. Toate drepturile rezervate.",
    footer_subtitle: "Creând viitorul web-ului în România.",
    services_title_1:"Design web",
services_title_2:"dezvoltare web",
services_title_3:"Optimizare SEO",
services_title_4:"Mentenanță",
links_title_1:"Acasă",
links_title_2:"Servicii",
links_title_3:"Prețuri",
links_title_4:"Contact",
nexus_desc:"Modelând viitorul experiențelor digitale cu pasiune și inovație",

  //selctionPage
  start_project: "Începe proiectul tău",
  
  desc_1: "Acest proiect este un site web de înaltă performanță, generat static, pentru o cafenea de tip boutique, \"The Daily Grind\". Obiectivul principal a fost construirea unui site atractiv vizual, cu încărcare rapidă și optimizat SEO. Construit ca o aplicație Jamstack folosind Next.js 13 (App Router) pentru Generarea Statică a Site-ului (SSG), este incredibil de rapid, securizat și indexabil. Folosește TypeScript pentru un cod robust, Tailwind CSS pentru o interfață responsivă \"utility-first\" și GSAP pentru micro-interacțiuni profesionale și tranziții de pagină.",
  
  desc_2: "\"Athletix\" este un magazin de e-commerce 'headless' de înaltă performanță, construit pentru a oferi o experiență de utilizator de top, asemănătoare unei aplicații, cu încărcări instantanee ale paginilor. Arhitectura de bază este o aplicație Jamstack, decuplând stratul de prezentare front-end de motorul de comerț back-end. Site-ul este construit cu Next.js folosind App Router, valorificând o strategie de redare hibridă (SSG/SSR) pentru un SEO optim și informații actualizate despre stoc. Interfața este construită cu Tailwind CSS pentru un sistem de design responsiv \"utility-first\". Starea globală (cum ar fi coșul de cumpărături) este gestionată eficient folosind Zustand, iar toate operațiunile de comerț sunt gestionate printr-un API 'headless' (cum ar fi Shopify Storefront API sau Medusa.js) cu plăți procesate securizat prin Stripe.",
  
  desc_3: "\"MediConnect\" este un site web profesional, securizat și accesibil, conceput pentru a construi încrederea pacienților într-o clinică medicală modernă. Site-ul este construit folosind Next.js cu Generare Statică a Site-ului (SSG) pentru a asigura timpi de încărcare rapizi, un SEO puternic pentru serviciile medicale și o postură de securitate ridicată (vitală pentru confidențialitatea pacienților). Conținutul este gestionat printr-un CMS 'headless' (precum Contentful sau Sanity), permițând personalului să actualizeze ușor profilurile medicilor și blogurile de sănătate. Proiectul include o interfață curată și responsivă, construită cu Tailwind CSS, axată pe lizibilitate și accesibilitate (conformitate WCAG), și include o rută API securizată pentru gestionarea cererilor de programare ale pacienților.",
  
  desc_4: "Acest proiect este un portal imobiliar full-stack, conceput pentru performanță și gestionarea datelor complexe. Front-end-ul este o aplicație pe o singură pagină (SPA) construită cu React și TypeScript, cu filtrare avansată pe partea clientului pentru listările de proprietăți și integrare cu API-ul Mapbox GL JS pentru a afișa proprietățile geografic. Back-end-ul este un API RESTful personalizat, construit cu Node.js, Express și o bază de date PostgreSQL (folosind Prisma ORM) pentru a gestiona date relaționale complexe pentru listări, agenți și proprietăți salvate de utilizatori."
}
};
// === /translations ===

export type LanguageKey = keyof typeof translations;
export type TranslationKey = keyof typeof translations['en'];

// Context shape
interface LanguageContextType {
  language: LanguageKey;
  setLanguage: (language: LanguageKey) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Keep name LanguageProvider and accept children
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // rename internal setter to avoid shadowing when we expose `setLanguage` below
  const [language, setLanguageState] = useState<LanguageKey>('en');

  useEffect(() => {
    const saved = localStorage.getItem('nexusweb_lang') as LanguageKey | null;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  // Expose `setLanguage` as requested (wrapper that also saves to localStorage).
  // Using useCallback for stable reference.
  const setLanguage = useCallback((lang: LanguageKey) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('nexusweb_lang', lang);
    } catch {
      // ignore localStorage errors in SSR or private mode
    }
  }, []);

  // translate function (stable across renders)
  const t = useCallback((key: TranslationKey): string => {
    const langData = (translations[language] || translations['en']) as Record<string, string>;
    // return key if missing from translations to avoid undefined
    return langData[key] ?? (translations['en'] as Record<string, string>)[key] ?? String(key);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to consume the context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
