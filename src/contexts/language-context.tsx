import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define available languages with Apple flag emojis
export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

// Comprehensive translations
const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.support": "Support",
    "nav.portfolio": "Portfolio",
    "nav.partnership": "Partnership",

    // CTA and Buttons
    "cta.consultation": "Free Consultation",
    "cta.explore": "Explore Services",
    "cta.learn_more": "Learn More",
    "cta.get_started": "Get Started",
    "cta.contact_us": "Contact Us",
    "cta.view_portfolio": "View Portfolio",

    // Hero Section
    "hero.title": "Innovative Solutions",
    "hero.subtitle": "Digital Technology & Mechanical Engineering",
    "hero.description":
      "Innovative solutions at the intersection of digital technology and mechanical engineering excellence.",
    "hero.typing_text": "Let's create tomorrow's technology",

    // Services Section
    "services.title": "Services We Offer",
    "services.subtitle": "Comprehensive solutions spanning digital innovation and mechanical excellence",
    "services.web.title": "Web Development",
    "services.web.description":
      "We create everything from simple to complex websites, with flexible plans and custom solutions tailored to your needs.",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.description": "Cross-platform mobile applications for iOS and Android",
    "services.mechanical.title": "Mechanical Development",
    "services.mechanical.description": "From initial concept to manufacturing-ready designs with precision engineering",
    "services.patent.title": "Patent Services",
    "services.patent.description": "Intellectual property protection for your innovations",
    "services.digital.title": "Digital Systems Architecture",
    "services.digital.description":
      "We design and implement scalable, secure, and efficient digital infrastructure to power your business operations and innovation.",

    // Contact Section
    "contact.title": "Ready to innovate?",
    "contact.description":
      "Let's discuss how we can bring your vision to life with cutting-edge technology and engineering excellence.",

    // Footer
    "footer.powered_by": "Powered by Weltivation",
    "footer.rights": "All rights reserved",

    // Process Steps
    "process.concept": "Concept Design",
    "process.modeling": "3D Modeling",
    "process.prototyping": "Prototyping",
    "process.testing": "Testing & Validation",
    "process.manufacturing": "Manufacturing Prep",
    "process.production": "Production Ready",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.process": "Proceso",
    "nav.contact": "Contacto",
    "nav.support": "Soporte",
    "nav.portfolio": "Portafolio",
    "nav.partnership": "Asociación",

    // CTA and Buttons
    "cta.consultation": "Consulta Gratuita",
    "cta.explore": "Explorar Servicios",
    "cta.learn_more": "Saber Más",
    "cta.get_started": "Comenzar",
    "cta.contact_us": "Contáctanos",
    "cta.view_portfolio": "Ver Portafolio",

    // Hero Section
    "hero.title": "Soluciones Innovadoras",
    "hero.subtitle": "Tecnología Digital e Ingeniería Mecánica",
    "hero.description":
      "Soluciones innovadoras en la intersección de la tecnología digital y la excelencia en ingeniería mecánica.",
    "hero.typing_text": "Creemos la tecnología del mañana",

    // Services Section
    "services.title": "Servicios Que Ofrecemos",
    "services.subtitle": "Soluciones integrales que abarcan la innovación digital y la excelencia mecánica",
    "services.web.title": "Desarrollo Web",
    "services.web.description":
      "Creamos desde sitios web simples hasta complejos, con planes flexibles y soluciones personalizadas adaptadas a sus necesidades.",
    "services.mobile.title": "Aplicaciones Móviles",
    "services.mobile.description": "Aplicaciones móviles multiplataforma para iOS y Android",
    "services.mechanical.title": "Desarrollo Mecánico",
    "services.mechanical.description":
      "Desde el concepto inicial hasta diseños listos para fabricación con ingeniería de precisión",
    "services.patent.title": "Servicios de Patentes",
    "services.patent.description": "Protección de propiedad intelectual para sus innovaciones",
    "services.digital.title": "Arquitectura de Sistemas Digitales",
    "services.digital.description":
      "Diseñamos e implementamos infraestructura digital escalable, segura y eficiente para impulsar sus operaciones comerciales e innovación.",

    // Contact Section
    "contact.title": "¿Listo para innovar?",
    "contact.description":
      "Hablemos sobre cómo podemos dar vida a su visión con tecnología de vanguardia y excelencia en ingeniería.",

    // Footer
    "footer.powered_by": "Desarrollado por Weltivation",
    "footer.rights": "Todos los derechos reservados",

    // Process Steps
    "process.concept": "Diseño Conceptual",
    "process.modeling": "Modelado 3D",
    "process.prototyping": "Prototipado",
    "process.testing": "Pruebas y Validación",
    "process.manufacturing": "Preparación de Fabricación",
    "process.production": "Listo para Producción",
  },
  fr: {
    // Navigation
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.process": "Processus",
    "nav.contact": "Contact",
    "nav.support": "Support",
    "nav.portfolio": "Portfolio",
    "nav.partnership": "Partenariat",

    // CTA and Buttons
    "cta.consultation": "Consultation Gratuite",
    "cta.explore": "Explorer les Services",
    "cta.learn_more": "En Savoir Plus",
    "cta.get_started": "Commencer",
    "cta.contact_us": "Nous Contacter",
    "cta.view_portfolio": "Voir le Portfolio",

    // Hero Section
    "hero.title": "Solutions Innovantes",
    "hero.subtitle": "Technologie Numérique et Ingénierie Mécanique",
    "hero.description":
      "Solutions innovantes à l'intersection de la technologie numérique et de l'excellence en ingénierie mécanique.",
    "hero.typing_text": "Créons la technologie de demain",

    // Services Section
    "services.title": "Services Que Nous Offrons",
    "services.subtitle": "Solutions complètes couvrant l'innovation numérique et l'excellence mécanique",
    "services.web.title": "Développement Web",
    "services.web.description":
      "Nous créons tout, des sites web simples aux complexes, avec des plans flexibles et des solutions personnalisées adaptées à vos besoins.",
    "services.mobile.title": "Applications Mobiles",
    "services.mobile.description": "Applications mobiles multiplateformes pour iOS et Android",
    "services.mechanical.title": "Développement Mécanique",
    "services.mechanical.description":
      "Du concept initial aux conceptions prêtes pour la fabrication avec une ingénierie de précision",
    "services.patent.title": "Services de Brevets",
    "services.patent.description": "Protection de la propriété intellectuelle pour vos innovations",
    "services.digital.title": "Architecture des Systèmes Numériques",
    "services.digital.description":
      "Nous concevons et mettons en œuvre une infrastructure numérique évolutive, sécurisée et efficace pour alimenter vos opérations commerciales et votre innovation.",

    // Contact Section
    "contact.title": "Prêt à innover?",
    "contact.description":
      "Discutons de la façon dont nous pouvons donner vie à votre vision avec une technologie de pointe et une excellence en ingénierie.",

    // Footer
    "footer.powered_by": "Propulsé par Weltivation",
    "footer.rights": "Tous droits réservés",

    // Process Steps
    "process.concept": "Conception Conceptuelle",
    "process.modeling": "Modélisation 3D",
    "process.prototyping": "Prototypage",
    "process.testing": "Tests et Validation",
    "process.manufacturing": "Préparation de Fabrication",
    "process.production": "Prêt pour la Production",
  },
  de: {
    // Navigation
    "nav.services": "Dienstleistungen",
    "nav.projects": "Projekte",
    "nav.process": "Prozess",
    "nav.contact": "Kontakt",
    "nav.support": "Support",
    "nav.portfolio": "Portfolio",
    "nav.partnership": "Partnerschaft",

    // CTA and Buttons
    "cta.consultation": "Kostenlose Beratung",
    "cta.explore": "Services Erkunden",
    "cta.learn_more": "Mehr Erfahren",
    "cta.get_started": "Loslegen",
    "cta.contact_us": "Kontaktieren Sie Uns",
    "cta.view_portfolio": "Portfolio Ansehen",

    // Hero Section
    "hero.title": "Innovative Lösungen",
    "hero.subtitle": "Digitale Technologie & Maschinenbau",
    "hero.description":
      "Innovative Lösungen an der Schnittstelle von digitaler Technologie und maschinenbaulicher Exzellenz.",
    "hero.typing_text": "Lassen Sie uns die Technologie von morgen schaffen",

    // Services Section
    "services.title": "Unsere Dienstleistungen",
    "services.subtitle": "Umfassende Lösungen, die digitale Innovation und mechanische Exzellenz umfassen",
    "services.web.title": "Webentwicklung",
    "services.web.description":
      "Wir erstellen alles von einfachen bis hin zu komplexen Websites mit flexiblen Plänen und maßgeschneiderten Lösungen für Ihre Bedürfnisse.",
    "services.mobile.title": "Mobile Apps",
    "services.mobile.description": "Plattformübergreifende mobile Anwendungen für iOS und Android",
    "services.mechanical.title": "Mechanische Entwicklung",
    "services.mechanical.description": "Vom ersten Konzept bis hin zu fertigungsreifen Designs mit Präzisionstechnik",
    "services.patent.title": "Patent-Dienstleistungen",
    "services.patent.description": "Schutz des geistigen Eigentums für Ihre Innovationen",
    "services.digital.title": "Digitale Systemarchitektur",
    "services.digital.description":
      "Wir entwerfen und implementieren skalierbare, sichere und effiziente digitale Infrastruktur, um Ihre Geschäftsabläufe und Innovation zu unterstützen.",

    // Contact Section
    "contact.title": "Bereit zu innovieren?",
    "contact.description":
      "Lassen Sie uns besprechen, wie wir Ihre Vision mit modernster Technologie und technischer Exzellenz zum Leben erwecken können.",

    // Footer
    "footer.powered_by": "Betrieben von Weltivation",
    "footer.rights": "Alle Rechte vorbehalten",

    // Process Steps
    "process.concept": "Konzeptdesign",
    "process.modeling": "3D-Modellierung",
    "process.prototyping": "Prototyping",
    "process.testing": "Testen & Validierung",
    "process.manufacturing": "Fertigungsvorbereitung",
    "process.production": "Produktionsbereit",
  },
  zh: {
    // Navigation
    "nav.services": "服务",
    "nav.projects": "项目",
    "nav.process": "流程",
    "nav.contact": "联系我们",
    "nav.support": "支持",
    "nav.portfolio": "作品集",
    "nav.partnership": "合作伙伴",

    // CTA and Buttons
    "cta.consultation": "免费咨询",
    "cta.explore": "探索服务",
    "cta.learn_more": "了解更多",
    "cta.get_started": "开始",
    "cta.contact_us": "联系我们",
    "cta.view_portfolio": "查看作品集",

    // Hero Section
    "hero.title": "创新解决方案",
    "hero.subtitle": "数字技术与机械工程",
    "hero.description": "在数字技术和机械工程卓越的交汇点提供创新解决方案。",
    "hero.typing_text": "让我们创造明天的技术",

    // Services Section
    "services.title": "我们提供的服务",
    "services.subtitle": "涵盖数字创新和机械卓越的综合解决方案",
    "services.web.title": "网站开发",
    "services.web.description": "我们创建从简单到复杂的网站，提供灵活的计划和量身定制的解决方案以满足您的需求。",
    "services.mobile.title": "移动应用",
    "services.mobile.description": "iOS和Android跨平台移动应用程序",
    "services.mechanical.title": "机械开发",
    "services.mechanical.description": "从初始概念到精密工程的制造就绪设计",
    "services.patent.title": "专利服务",
    "services.patent.description": "为您的创新提供知识产权保护",
    "services.digital.title": "数字系统架构",
    "services.digital.description": "我们设计和实施可扩展、安全、高效的数字基础设施，为您的业务运营和创新提供动力。",

    // Contact Section
    "contact.title": "准备创新了吗？",
    "contact.description": "让我们讨论如何用尖端技术和工程卓越将您的愿景变为现实。",

    // Footer
    "footer.powered_by": "由Weltivation提供支持",
    "footer.rights": "版权所有",

    // Process Steps
    "process.concept": "概念设计",
    "process.modeling": "3D建模",
    "process.prototyping": "原型制作",
    "process.testing": "测试与验证",
    "process.manufacturing": "制造准备",
    "process.production": "生产就绪",
  },
  ja: {
    // Navigation
    "nav.services": "サービス",
    "nav.projects": "プロジェクト",
    "nav.process": "プロセス",
    "nav.contact": "お問い合わせ",
    "nav.support": "サポート",
    "nav.portfolio": "ポートフォリオ",
    "nav.partnership": "パートナーシップ",

    // CTA and Buttons
    "cta.consultation": "無料相談",
    "cta.explore": "サービスを探索",
    "cta.learn_more": "詳細を見る",
    "cta.get_started": "始める",
    "cta.contact_us": "お問い合わせ",
    "cta.view_portfolio": "ポートフォリオを見る",

    // Hero Section
    "hero.title": "革新的なソリューション",
    "hero.subtitle": "デジタル技術と機械工学",
    "hero.description": "デジタル技術と機械工学の卓越性の交差点での革新的なソリューション。",
    "hero.typing_text": "明日のテクノロジーを創造しましょう",

    // Services Section
    "services.title": "私たちのサービス",
    "services.subtitle": "デジタル革新と機械的卓越性を包含する包括的なソリューション",
    "services.web.title": "ウェブ開発",
    "services.web.description":
      "シンプルから複雑なウェブサイトまで、お客様のニーズに合わせた柔軟なプランとカスタムソリューションを作成します。",
    "services.mobile.title": "モバイルアプリ",
    "services.mobile.description": "iOSとAndroid向けのクロスプラットフォームモバイルアプリケーション",
    "services.mechanical.title": "機械開発",
    "services.mechanical.description": "初期コンセプトから精密工学による製造準備完了設計まで",
    "services.patent.title": "特許サービス",
    "services.patent.description": "あなたの革新のための知的財産保護",
    "services.digital.title": "デジタルシステムアーキテクチャ",
    "services.digital.description":
      "ビジネス運営とイノベーションを支援するスケーラブルで安全かつ効率的なデジタルインフラストラクチャを設計・実装します。",

    // Contact Section
    "contact.title": "革新の準備はできましたか？",
    "contact.description": "最先端技術と工学的卓越性でお客様のビジョンを実現する方法について話し合いましょう。",

    // Footer
    "footer.powered_by": "Weltivationによって提供",
    "footer.rights": "全著作権所有",

    // Process Steps
    "process.concept": "コンセプトデザイン",
    "process.modeling": "3Dモデリング",
    "process.prototyping": "プロトタイピング",
    "process.testing": "テストと検証",
    "process.manufacturing": "製造準備",
    "process.production": "生産準備完了",
  },
}

type LanguageContextType = {
  currentLanguage: (typeof languages)[0]
  setLanguage: (code: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) setCurrentLanguage(lang)
    }
  }, [])

  const setLanguage = (code: string) => {
    const newLang = languages.find((l) => l.code === code)
    if (newLang) {
      setCurrentLanguage(newLang)
      localStorage.setItem("language", code)
      document.documentElement.lang = code
    }
  }

  // Translation function
  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage.code as keyof typeof translations] || translations.en
    return langTranslations[key as keyof typeof langTranslations] || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
