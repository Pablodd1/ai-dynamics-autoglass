import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.whyUs': 'Por Qué Nosotros',
    'nav.reviews': 'Opiniones',
    'nav.areas': 'Áreas',
    'nav.callNow': 'Llamar Ahora',

    // Hero
    'hero.badge': '#1 en Vidrios de Auto en Miami',
    'hero.title': '¿Parabrisas Roto?',
    'hero.titleHighlight': 'Vamos a Ti.',
    'hero.subtitle': 'Reemplazo y reparación de vidrios de auto el mismo día en Miami y West Palm Beach. Cotización gratis. Aprobado por seguros. Garantía de por vida.',
    'hero.badge1': 'Respuesta 30-Min',
    'hero.badge2': 'Aprobado Seguros',
    'hero.badge3': '5 Estrellas',
    'hero.ctaWhatsApp': 'Cotizar por WhatsApp',
    'hero.ctaCall': 'Llamar (305) 984-0456',
    'hero.ctaCallMobile': 'Llamar',
    'hero.ctaEmail': 'Cotizar por Email',
    'hero.ctaEmailMobile': 'Email',
    'hero.location': 'Servicio en Miami, Fort Lauderdale y West Palm Beach',
    'hero.contactCard.title': '¿Necesitas Ayuda?',
    'hero.contactCard.subtitle': 'Elige cómo contactarnos',
    'hero.contactCard.whatsapp': 'WhatsApp',
    'hero.contactCard.whatsappDesc': 'Respuesta más rápida - menos 2 min',
    'hero.contactCard.call': 'Llamar Ahora',
    'hero.contactCard.email': 'Email',
    'hero.contactCard.emailDesc': 'Envía fotos para cotizar',
    'hero.stats.response': 'Respuesta Prom',
    'hero.stats.emergency': 'Emergencias',
    'hero.badgeAvailable': '⚡ Disponible 24/7',

    // Services
    'services.badge': 'Nuestros Servicios',
    'services.title': 'Soluciones Profesionales',
    'services.titleHighlight': 'de Vidrios',
    'services.subtitle': 'Desde reparaciones menores hasta reemplazo completo. Servicio móvil en tu ubicación.',
    'services.windshield.title': 'Reemplazo de Parabrisas',
    'services.windshield.desc': 'Vidrios OEM y aftermarket con garantía de por vida. Servicio mismo día.',
    'services.windshield.price': 'Desde $199',
    'services.chip.title': 'Reparación de Astillas',
    'services.chip.desc': 'Reparación rápida de astillas y grietas menores antes de que se expandan.',
    'services.chip.price': 'Desde $89',
    'services.side.title': 'Ventanas Laterales',
    'services.side.desc': 'Reemplazo de ventanas laterales y cuartos para todos los modelos.',
    'services.side.price': 'Desde $149',
    'services.rear.title': 'Vidrio Trasero',
    'services.rear.desc': 'Reemplazo de medallón trasero con descongelador y antena.',
    'services.rear.price': 'Desde $249',
    'services.warranty': 'Garantía de por vida',
    'services.oem': 'Vidrio OEM',
    'services.mobile': 'Servicio móvil',
    'services.calibration': 'Calibración ADAS',
    'services.getQuote': 'Obtener Cotización',

    // Why Choose Us
    'why.badge': 'Por Qué Elegirnos',
    'why.title': 'La Diferencia',
    'why.titleHighlight': 'Autoglass-JM',
    'why.subtitle': 'Miles de conductores en Miami confían en nosotros. Aquí está por qué:',
    'why.stats.years': 'Años Experiencia',
    'why.stats.customers': 'Clientes Felices',
    'why.stats.rating': 'Rating Promedio',
    'why.stats.response': 'Min Respuesta',
    'why.feature1.title': 'Servicio Móvil',
    'why.feature1.desc': 'Vamos a tu ubicación - trabajo, casa o carretera. Cubrimos todo el sur de Florida.',
    'why.feature2.title': 'Aprobado Seguros',
    'why.feature2.desc': 'Trabajamos con todas las aseguradoras. Sin deducible en la mayoría de casos.',
    'why.feature3.title': 'Técnicos Expertos',
    'why.feature3.desc': 'Técnicos certificados con años de experiencia en vidrios de auto.',
    'why.feature4.title': 'Garantía de por Vida',
    'why.feature4.desc': 'Toda instalación incluye garantía de por vida contra fugas y defectos.',
    'why.feature5.title': 'Precios Competitivos',
    'why.feature5.desc': 'Cotizaciones justas sin costos ocultos. Precios transparentes.',
    'why.feature6.title': 'Calibración ADAS',
    'why.feature6.desc': 'Calibración especializada de sistemas ADAS después del reemplazo.',

    // Reviews
    'reviews.badge': 'Testimonios',
    'reviews.title': 'Lo Que Dicen',
    'reviews.titleHighlight': 'Nuestros Clientes',
    'reviews.subtitle': 'Más de 5,000 conductores satisfechos en Miami y Palm Beach',
    'reviews.verified': 'Cliente Verificado',
    'reviews.cta': 'Únete a Nuestros Clientes Satisfechos',
    'reviews.ctaButton': 'Obtener Cotización Gratis →',

    // Service Areas
    'areas.badge': 'Áreas de Servicio',
    'areas.title': 'Cobertura en Todo',
    'areas.titleHighlight': 'el Sur de Florida',
    'areas.subtitle': 'Servicio móvil de vidrios de auto desde Miami hasta West Palm Beach. Vamos a ti.',
    'areas.miami': 'Miami-Dade',
    'areas.broward': 'Broward',
    'areas.palmBeach': 'Palm Beach',
    'areas.cta': '¿No ves tu área? Probablemente también la cubrimos.',
    'areas.ctaButton': 'Llamar para confirmar (305) 984-0456',

    // Quote Form
    'form.badge': 'Cotización Gratis',
    'form.title': 'Obtén tu Cotización',
    'form.titleHighlight': 'en Minutos',
    'form.subtitle': 'Completa el formulario y te contactamos inmediatamente por tu método preferido.',
    'form.name': 'Nombre Completo',
    'form.namePlaceholder': 'Tu nombre',
    'form.phone': 'Teléfono',
    'form.phonePlaceholder': '(305) 123-4567',
    'form.email': 'Email',
    'form.emailPlaceholder': 'tu@email.com',
    'form.carMake': 'Marca del Auto',
    'form.carMakePlaceholder': 'Ej: Toyota, Honda, BMW',
    'form.carModel': 'Modelo',
    'form.carModelPlaceholder': 'Ej: Camry, Civic, X5',
    'form.carYear': 'Año',
    'form.carYearPlaceholder': '2020',
    'form.serviceType': 'Tipo de Servicio',
    'form.serviceSelect': 'Selecciona servicio',
    'form.serviceWindshield': 'Reemplazo Parabrisas',
    'form.serviceChip': 'Reparación Astilla/Grieta',
    'form.serviceSide': 'Ventana Lateral',
    'form.serviceRear': 'Vidrio Trasero',
    'form.serviceNotSure': 'No estoy seguro - Necesito diagnóstico',
    'form.contactMethod': '¿Cómo prefieres que te contactemos?',
    'form.contactWhatsApp': 'WhatsApp (Más rápido)',
    'form.contactPhone': 'Llamada telefónica',
    'form.contactEmail': 'Email',
    'form.message': 'Mensaje / Detalles del daño',
    'form.messagePlaceholder': 'Describe el daño, ubicación, etc. Puedes enviar fotos por WhatsApp o Email.',
    'form.submit': 'Enviar Cotización →',
    'form.submitting': 'Enviando...',
    'form.success.title': '¡Cotización Enviada!',
    'form.success.message': 'Te contactaremos en menos de 5 minutos por {method}.',
    'form.success.whatsapp': 'WhatsApp',
    'form.success.phone': 'teléfono',
    'form.success.email': 'email',

    // Footer
    'footer.description': 'El servicio móvil de vidrios #1 en Miami. Reemplazo y reparación de parabrisas en tu ubicación. Servicio mismo día, aprobado por seguros, garantía de por vida.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contact': 'Contáctanos',
    'footer.emergency': 'Línea 24/7',
    'footer.fastest': 'Respuesta más rápida',
    'footer.sendPhotos': 'Envía fotos',
    'footer.mobile': 'Servicio Móvil',
    'footer.hours': 'Lun - Sab: 7AM - 8PM',
    'footer.hoursSun': 'Dom: 9AM - 5PM',
    'footer.emergencyAvailable': 'Emergencias 24/7',
    'footer.rights': '© {year} Autoglass-JM. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.insurance': 'Info de Seguros',

    // Floating CTA
    'floating.call': 'Llamar',
    'floating.whatsapp': 'WhatsApp',
    'floating.email': 'Email',
    'floating.desktopTitle': 'Contactar',
    'floating.desktopSubtitle': 'Elige método',
    'floating.desktopWhatsApp': 'WhatsApp - Respuesta rápida',
    'floating.desktopCall': 'Llamar - (305) 984-0456',
    'floating.desktopEmail': 'Email - Envía fotos',

    // Language Toggle
    'lang.toggle': 'English',
    'lang.current': 'Español',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.whyUs': 'Why Us',
    'nav.reviews': 'Reviews',
    'nav.areas': 'Areas',
    'nav.callNow': 'Call Now',

    // Hero
    'hero.badge': '#1 Rated Auto Glass in Miami',
    'hero.title': 'Cracked Windshield?',
    'hero.titleHighlight': 'We Come to You.',
    'hero.subtitle': 'Same-day mobile auto glass replacement & repair across Miami & West Palm Beach. Free instant quote. Insurance approved. Lifetime warranty.',
    'hero.badge1': '30-Min Response',
    'hero.badge2': 'Insurance Approved',
    'hero.badge3': '5-Star Rated',
    'hero.ctaWhatsApp': 'Get WhatsApp Quote',
    'hero.ctaCall': 'Call (305) 984-0456',
    'hero.ctaCallMobile': 'Call Now',
    'hero.ctaEmail': 'Email Quote',
    'hero.ctaEmailMobile': 'Email',
    'hero.location': 'Serving Miami, Fort Lauderdale & West Palm Beach',
    'hero.contactCard.title': 'Need Help Now?',
    'hero.contactCard.subtitle': 'Choose how to reach us',
    'hero.contactCard.whatsapp': 'WhatsApp',
    'hero.contactCard.whatsappDesc': 'Fastest response - under 2 min',
    'hero.contactCard.call': 'Call Now',
    'hero.contactCard.email': 'Email',
    'hero.contactCard.emailDesc': 'Send photos for quote',
    'hero.stats.response': 'Avg Response',
    'hero.stats.emergency': 'Emergency',
    'hero.badgeAvailable': '⚡ 24/7 Available',

    // Services
    'services.badge': 'Our Services',
    'services.title': 'Professional Auto Glass',
    'services.titleHighlight': 'Solutions',
    'services.subtitle': 'From minor repairs to complete replacement. Mobile service at your location.',
    'services.windshield.title': 'Windshield Replacement',
    'services.windshield.desc': 'Complete OEM & aftermarket windshield replacement with lifetime warranty. Same-day service.',
    'services.windshield.price': 'From $199',
    'services.chip.title': 'Chip & Crack Repair',
    'services.chip.desc': 'Quick repair of small chips and cracks before they spread.',
    'services.chip.price': 'From $89',
    'services.side.title': 'Side Window Repair',
    'services.side.desc': 'Side window and quarter glass replacement for all makes & models.',
    'services.side.price': 'From $149',
    'services.rear.title': 'Rear Glass Replacement',
    'services.rear.desc': 'Back glass replacement with defroster and antenna integration.',
    'services.rear.price': 'From $249',
    'services.warranty': 'Lifetime warranty',
    'services.oem': 'OEM glass',
    'services.mobile': 'Mobile service',
    'services.calibration': 'ADAS calibration',
    'services.getQuote': 'Get Quote',

    // Why Choose Us
    'why.badge': 'Why Choose Us',
    'why.title': 'The Autoglass-JM',
    'why.titleHighlight': 'Difference',
    'why.subtitle': 'Thousands of Miami drivers trust us. Here\'s why:',
    'why.stats.years': 'Years Experience',
    'why.stats.customers': 'Happy Customers',
    'why.stats.rating': 'Average Rating',
    'why.stats.response': 'Min Response',
    'why.feature1.title': 'Mobile Service',
    'why.feature1.desc': 'We come to your location - work, home, or roadside. Covering all South Florida.',
    'why.feature2.title': 'Insurance Approved',
    'why.feature2.desc': 'We work with all insurance providers. Zero deductible on most glass claims.',
    'why.feature3.title': 'Expert Technicians',
    'why.feature3.desc': 'Certified technicians with years of auto glass experience.',
    'why.feature4.title': 'Lifetime Warranty',
    'why.feature4.desc': 'Every installation backed by our lifetime warranty against leaks and defects.',
    'why.feature5.title': 'Competitive Pricing',
    'why.feature5.desc': 'Fair quotes with no hidden fees. Transparent pricing guaranteed.',
    'why.feature6.title': 'ADAS Calibration',
    'why.feature6.desc': 'Specialized ADAS system calibration after windshield replacement.',

    // Reviews
    'reviews.badge': 'Testimonials',
    'reviews.title': 'What Our',
    'reviews.titleHighlight': 'Customers Say',
    'reviews.subtitle': 'Join over 5,000 satisfied drivers across Miami and Palm Beach',
    'reviews.verified': 'Verified Customer',
    'reviews.cta': 'Join Our Happy Customers',
    'reviews.ctaButton': 'Get Free Quote →',

    // Service Areas
    'areas.badge': 'Service Areas',
    'areas.title': 'We Cover All of',
    'areas.titleHighlight': 'South Florida',
    'areas.subtitle': 'Mobile auto glass service from Miami to West Palm Beach. We come to you.',
    'areas.miami': 'Miami-Dade',
    'areas.broward': 'Broward',
    'areas.palmBeach': 'Palm Beach',
    'areas.cta': 'Don\'t see your area? We probably serve it anyway.',
    'areas.ctaButton': 'Call to confirm (305) 984-0456',

    // Quote Form
    'form.badge': 'Free Quote',
    'form.title': 'Get Your Quote in',
    'form.titleHighlight': 'Minutes',
    'form.subtitle': 'Fill out the form and we\'ll contact you immediately via your preferred method.',
    'form.name': 'Full Name',
    'form.namePlaceholder': 'Your name',
    'form.phone': 'Phone',
    'form.phonePlaceholder': '(305) 123-4567',
    'form.email': 'Email',
    'form.emailPlaceholder': 'you@email.com',
    'form.carMake': 'Car Make',
    'form.carMakePlaceholder': 'Ex: Toyota, Honda, BMW',
    'form.carModel': 'Model',
    'form.carModelPlaceholder': 'Ex: Camry, Civic, X5',
    'form.carYear': 'Year',
    'form.carYearPlaceholder': '2020',
    'form.serviceType': 'Service Type',
    'form.serviceSelect': 'Select service',
    'form.serviceWindshield': 'Windshield Replacement',
    'form.serviceChip': 'Chip/Crack Repair',
    'form.serviceSide': 'Side Window',
    'form.serviceRear': 'Rear Glass',
    'form.serviceNotSure': 'Not Sure - Need Diagnosis',
    'form.contactMethod': 'How should we contact you?',
    'form.contactWhatsApp': 'WhatsApp (Fastest)',
    'form.contactPhone': 'Phone Call',
    'form.contactEmail': 'Email',
    'form.message': 'Message / Damage Details',
    'form.messagePlaceholder': 'Describe the damage, location, etc. You can send photos via WhatsApp or Email.',
    'form.submit': 'Send Quote →',
    'form.submitting': 'Sending...',
    'form.success.title': 'Quote Sent!',
    'form.success.message': 'We\'ll contact you within 5 minutes via {method}.',
    'form.success.whatsapp': 'WhatsApp',
    'form.success.phone': 'phone',
    'form.success.email': 'email',

    // Footer
    'footer.description': 'Miami\'s #1 mobile auto glass service. Windshield replacement & repair at your location. Same-day service, insurance approved, lifetime warranty.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.emergency': '24/7 Emergency',
    'footer.fastest': 'Fastest Response',
    'footer.sendPhotos': 'Send Photos',
    'footer.mobile': 'Mobile Service',
    'footer.hours': 'Mon - Sat: 7AM - 8PM',
    'footer.hoursSun': 'Sun: 9AM - 5PM',
    'footer.emergencyAvailable': '24/7 Emergency Available',
    'footer.rights': '© {year} Autoglass-JM. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.insurance': 'Insurance Info',

    // Floating CTA
    'floating.call': 'Call',
    'floating.whatsapp': 'WhatsApp',
    'floating.email': 'Email',
    'floating.desktopTitle': 'Contact Us',
    'floating.desktopSubtitle': 'Choose method',
    'floating.desktopWhatsApp': 'WhatsApp - Fastest',
    'floating.desktopCall': 'Call - (305) 984-0456',
    'floating.desktopEmail': 'Email - Send Photos',

    // Language Toggle
    'lang.toggle': 'Español',
    'lang.current': 'English',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
