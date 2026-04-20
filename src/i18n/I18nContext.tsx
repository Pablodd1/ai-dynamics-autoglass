import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type Language = 'en' | 'es'

interface Translations {
  [key: string]: string | Translations
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    nav: {
      services: 'Services',
      whyUs: 'Why Choose Us',
      reviews: 'Reviews',
      areas: 'Service Areas',
      getQuote: 'Get Free Quote',
      callNow: 'Call Now',
    },
    // Hero
    hero: {
      badge: 'Same-Day Mobile Service Available',
      title1: 'Premium Auto Glass',
      title2: 'Replacement',
      title3: '& Repair',
      subtitle: 'Miami & West Palm Beach\'s trusted choice for windshield replacement, ADAS calibration, and luxury vehicle glass. Mobile service comes to you.',
      ctaPrimary: 'Get Instant Quote',
      ctaSecondary: 'Call (305) 984-0456',
      features: {
        sameDay: 'Same-Day Service',
        lifetime: 'Lifetime Warranty',
        insurance: 'Insurance Approved',
        adas: 'ADAS Certified',
      },
    },
    // Trust Bar
    trust: {
      rating: '4.9/5 Rating',
      reviews: '500+ Reviews',
      warranty: 'Lifetime Warranty',
      mobile: 'Mobile Service',
    },
    // Services
    services: {
      badge: 'Our Services',
      title: 'Complete Auto Glass Solutions',
      subtitle: 'From windshield replacement to ADAS calibration, we handle it all with precision and care.',
      windshield: {
        title: 'Windshield Replacement',
        desc: 'OEM & OEE quality glass with perfect fit guarantee. Same-day service available.',
        features: ['OEM Quality Glass', 'Same-Day Service', 'Mobile Installation', 'Perfect Fit Guarantee'],
      },
      repair: {
        title: 'Windshield Repair',
        desc: 'Professional chip and crack repair to prevent spreading and save money.',
        features: ['Rock Chip Repair', 'Crack Sealing', 'Prevents Spreading', 'Cost-Effective'],
      },
      adas: {
        title: 'ADAS Calibration',
        desc: 'Advanced Driver Assistance Systems calibration after windshield replacement.',
        features: ['Camera Calibration', 'Sensor Alignment', 'Lane Assist Reset', 'Dealer-Grade Tools'],
        badge: 'NEW',
      },
      sideWindow: {
        title: 'Side Window Replacement',
        desc: 'Fast replacement for driver, passenger, and rear side windows.',
        features: ['All Vehicle Types', 'Same-Day Service', 'Secure Installation', 'Tempered Glass'],
      },
      backGlass: {
        title: 'Back Glass Replacement',
        desc: 'Rear windshield replacement with defroster reconnection.',
        features: ['Defroster Reconnect', 'Heated Glass', 'Privacy Options', 'Expert Install'],
      },
      mirror: {
        title: 'Mirror Repair & Replace',
        desc: 'Side mirror and rearview mirror repair and replacement services.',
        features: ['Power Mirrors', 'Heated Mirrors', 'Auto-Dimming', 'Fold & Signal'],
      },
    },
    // Why Choose Us
    whyUs: {
      badge: 'Why Autoglass JM',
      title: 'The JM Difference',
      subtitle: 'What sets us apart from other auto glass companies in South Florida.',
      cards: {
        mobile: {
          title: 'Mobile Service',
          desc: 'We come to your home, office, or anywhere in Miami & West Palm Beach. No need to drive with a cracked windshield.',
        },
        adas: {
          title: 'ADAS Certified',
          desc: 'Advanced calibration for modern vehicles with lane assist, adaptive cruise, and collision avoidance systems.',
        },
        warranty: {
          title: 'Lifetime Warranty',
          desc: 'Every installation backed by our comprehensive lifetime warranty covering leaks, defects, and workmanship.',
        },
        insurance: {
          title: 'Insurance Experts',
          desc: 'We handle all insurance paperwork and direct billing. Most claims processed same day with $0 out-of-pocket.',
        },
        luxury: {
          title: 'Luxury Specialists',
          desc: 'Certified for Mercedes, BMW, Audi, Tesla, and all premium vehicles. Dealership-quality service without the price.',
        },
        speed: {
          title: 'Same-Day Service',
          desc: 'Most replacements completed in 60-90 minutes. Emergency repairs available 7 days a week.',
        },
      },
    },
    // Quote Form
    quote: {
      badge: 'Free Quote',
      title: 'Get Your Free Quote',
      subtitle: 'Fill out the form below and we\'ll get back to you within 15 minutes with a guaranteed price.',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        vehicle: 'Vehicle Year, Make & Model',
        service: 'Service Needed',
        serviceOptions: {
          select: 'Select Service',
          windshield: 'Windshield Replacement',
          repair: 'Windshield Repair',
          adas: 'ADAS Calibration',
          sideWindow: 'Side Window',
          backGlass: 'Back Glass',
          mirror: 'Mirror',
        },
        location: 'Service Location (City)',
        insurance: 'Insurance Company (Optional)',
        message: 'Additional Details',
        submit: 'Get My Free Quote',
        sending: 'Sending...',
        success: 'Quote Request Sent!',
        successMessage: 'We\'ll call you within 15 minutes with your guaranteed quote.',
      },
    },
    // Service Areas
    areas: {
      badge: 'Service Areas',
      title: 'We Serve All of South Florida',
      subtitle: 'Mobile auto glass service throughout Miami-Dade and Palm Beach counties.',
      mainCities: 'Primary Service Areas',
      allAreas: 'All Service Areas',
      zipcodes: 'We cover all zip codes in these areas',
    },
    // Reviews
    reviews: {
      badge: 'Customer Reviews',
      title: 'What Our Customers Say',
      subtitle: 'Rated 4.9/5 based on 500+ verified reviews from Google, Yelp, and Facebook.',
    },
    // CTA Section
    cta: {
      title: 'Need Emergency Auto Glass Service?',
      subtitle: 'We\'re available 7 days a week with same-day mobile service.',
      call: 'Call (305) 984-0456',
      quote: 'Get Free Quote Online',
      hours: 'Mon-Sun: 7AM - 8PM',
    },
    // Footer
    footer: {
      company: 'Company',
      services: 'Services',
      support: 'Support',
      contact: 'Contact',
      about: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      warranty: 'Lifetime Warranty',
      faq: 'FAQ',
      insurance: 'Insurance Help',
      track: 'Track Your Service',
      rights: 'All rights reserved.',
      tagline: 'Premium auto glass services in Miami & West Palm Beach.',
    },
  },
  es: {
    // Navigation
    nav: {
      services: 'Servicios',
      whyUs: 'Por Qué Elegirnos',
      reviews: 'Opiniones',
      areas: 'Áreas de Servicio',
      getQuote: 'Cotización Gratis',
      callNow: 'Llamar Ahora',
    },
    // Hero
    hero: {
      badge: 'Servicio Móvil Mismo Día Disponible',
      title1: 'Reemplazo y Reparación',
      title2: 'de Vidrios Premium',
      title3: '',
      subtitle: 'La opción confiable de Miami y West Palm Beach para reemplazo de parabrisas, calibración ADAS y vidrios de vehículos de lujo. Servicio móvil que va a usted.',
      ctaPrimary: 'Obtener Cotización',
      ctaSecondary: 'Llamar (305) 984-0456',
      features: {
        sameDay: 'Servicio Mismo Día',
        lifetime: 'Garantía de por Vida',
        insurance: 'Aseguranza Aceptada',
        adas: 'Certificados ADAS',
      },
    },
    // Trust Bar
    trust: {
      rating: '4.9/5 Calificación',
      reviews: '500+ Opiniones',
      warranty: 'Garantía de por Vida',
      mobile: 'Servicio Móvil',
    },
    // Services
    services: {
      badge: 'Nuestros Servicios',
      title: 'Soluciones Completas de Vidrios',
      subtitle: 'Desde reemplazo de parabrisas hasta calibración ADAS, lo manejamos todo con precisión y cuidado.',
      windshield: {
        title: 'Reemplazo de Parabrisas',
        desc: 'Vidrio de calidad OEM y OEE con garantía de ajuste perfecto. Servicio mismo día disponible.',
        features: ['Vidrio Calidad OEM', 'Servicio Mismo Día', 'Instalación Móvil', 'Garantía de Ajuste'],
      },
      repair: {
        title: 'Reparación de Parabrisas',
        desc: 'Reparación profesional de astillas y grietas para evitar propagación y ahorrar dinero.',
        features: ['Reparación de Astillas', 'Sellado de Grietas', 'Previene Propagación', 'Económico'],
      },
      adas: {
        title: 'Calibración ADAS',
        desc: 'Calibración de Sistemas Avanzados de Asistencia al Conductor después del reemplazo.',
        features: ['Calibración de Cámara', 'Alineación de Sensores', 'Reset de Asistencia', 'Herramientas de Calidad'],
        badge: 'NUEVO',
      },
      sideWindow: {
        title: 'Vidrios Laterales',
        desc: 'Reemplazo rápido de vidrios de conductor, pasajero y traseros.',
        features: ['Todo Tipo de Vehículos', 'Servicio Mismo Día', 'Instalación Segura', 'Vidrio Templado'],
      },
      backGlass: {
        title: 'Vidrio Trasero',
        desc: 'Reemplazo de parabrisas trasero con reconexión de desempañador.',
        features: ['Reconexión Desempañador', 'Vidrio Calentado', 'Opciones Privacidad', 'Instalación Experta'],
      },
      mirror: {
        title: 'Reparación de Espejos',
        desc: 'Servicio de reparación y reemplazo de espejos laterales y retrovisores.',
        features: ['Espejos Eléctricos', 'Espejos Calentados', 'Auto-Oscurecimiento', 'Plegable y Señal'],
      },
    },
    // Why Choose Us
    whyUs: {
      badge: 'Por Qué Autoglass JM',
      title: 'La Diferencia JM',
      subtitle: 'Lo que nos distingue de otras compañías de vidrios en el Sur de Florida.',
      cards: {
        mobile: {
          title: 'Servicio Móvil',
          desc: 'Vamos a su casa, oficina, o cualquier lugar en Miami y West Palm Beach. No necesita conducir con parabrisas dañado.',
        },
        adas: {
          title: 'Certificados ADAS',
          desc: 'Calibración avanzada para vehículos modernos con asistencia de carril, crucero adaptativo y sistemas anti-colisión.',
        },
        warranty: {
          title: 'Garantía de por Vida',
          desc: 'Cada instalación respaldada por nuestra garantía integral de por vida cubriendo filtraciones, defectos y mano de obra.',
        },
        insurance: {
          title: 'Expertos en Seguros',
          desc: 'Manejamos todo el papeleo de seguros y facturación directa. La mayoría de reclamos procesados el mismo día.',
        },
        luxury: {
          title: 'Especialistas en Lujo',
          desc: 'Certificados para Mercedes, BMW, Audi, Tesla y todos los vehículos premium. Calidad de concesionario sin el precio.',
        },
        speed: {
          title: 'Servicio Mismo Día',
          desc: 'La mayoría de reemplazos completados en 60-90 minutos. Reparaciones de emergencia disponibles 7 días a la semana.',
        },
      },
    },
    // Quote Form
    quote: {
      badge: 'Cotización Gratis',
      title: 'Obtenga su Cotización Gratis',
      subtitle: 'Complete el formulario y le responderemos en 15 minutos con un precio garantizado.',
      form: {
        name: 'Nombre Completo',
        phone: 'Número de Teléfono',
        email: 'Correo Electrónico',
        vehicle: 'Año, Marca y Modelo del Vehículo',
        service: 'Servicio Requerido',
        serviceOptions: {
          select: 'Seleccione Servicio',
          windshield: 'Reemplazo de Parabrisas',
          repair: 'Reparación de Parabrisas',
          adas: 'Calibración ADAS',
          sideWindow: 'Vidrio Lateral',
          backGlass: 'Vidrio Trasero',
          mirror: 'Espejo',
        },
        location: 'Ubicación del Servicio (Ciudad)',
        insurance: 'Compañía de Seguros (Opcional)',
        message: 'Detalles Adicionales',
        submit: 'Obtener Cotización Gratis',
        sending: 'Enviando...',
        success: '¡Solicitud Enviada!',
        successMessage: 'Le llamaremos dentro de 15 minutos con su cotización garantizada.',
      },
    },
    // Service Areas
    areas: {
      badge: 'Áreas de Servicio',
      title: 'Servimos Todo el Sur de Florida',
      subtitle: 'Servicio móvil de vidrios para autos en todos los condados de Miami-Dade y Palm Beach.',
      mainCities: 'Áreas Principales',
      allAreas: 'Todas las Áreas',
      zipcodes: 'Cubrimos todos los códigos postales en estas áreas',
    },
    // Reviews
    reviews: {
      badge: 'Opiniones de Clientes',
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Calificación 4.9/5 basada en 500+ opiniones verificadas de Google, Yelp y Facebook.',
    },
    // CTA Section
    cta: {
      title: '¿Necesita Servicio de Emergencia?',
      subtitle: 'Estamos disponibles 7 días a la semana con servicio móvil mismo día.',
      call: 'Llamar (305) 984-0456',
      quote: 'Obtener Cotización Online',
      hours: 'Lun-Dom: 7AM - 8PM',
    },
    // Footer
    footer: {
      company: 'Empresa',
      services: 'Servicios',
      support: 'Soporte',
      contact: 'Contacto',
      about: 'Sobre Nosotros',
      careers: 'Empleos',
      blog: 'Blog',
      warranty: 'Garantía de por Vida',
      faq: 'Preguntas Frecuentes',
      insurance: 'Ayuda con Seguros',
      track: 'Seguir su Servicio',
      rights: 'Todos los derechos reservados.',
      tagline: 'Servicios premium de vidrios en Miami y West Palm Beach.',
    },
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useCallback(
    (key: string): string | Translations => {
      const keys = key.split('.')
      let value: string | Translations = translations[language]

      for (const k of keys) {
        if (typeof value === 'object' && value !== null && k in value) {
          value = value[k]
        } else {
          return key
        }
      }

      return value
    },
    [language]
  )

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export type { Language }
