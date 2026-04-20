import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQ = () => {
  const { language } = useI18n()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState('all')

  const faqs: FAQItem[] = language === 'es' ? [
    {
      question: '¿Cuánto cuesta reemplazar un parabrisas?',
      answer: 'El costo varía según el vehículo y el tipo de vidrio. En promedio, entre $250-$500 para vehículos estándar y $400-$800 para vehículos de lujo con ADAS. Con seguro completo, puede costarle $0. Ofrecemos cotización gratuita sin compromiso.',
      category: 'pricing'
    },
    {
      question: '¿Cuánto tiempo toma el servicio?',
      answer: 'La mayoría de los reemplazos de parabrisas toman 60-90 minutos. Las reparaciones de astillas se completan en 30 minutos. Para vehículos con calibración ADAS, el tiempo total es de 2-3 horas incluyendo la calibración.',
      category: 'service'
    },
    {
      question: '¿Mi seguro cubre el reemplazo del parabrisas?',
      answer: 'Sí, la mayoría de las pólizas de seguro completo cubren el reemplazo de parabrisas. En Florida, la ley requiere que las aseguradoras cubran el reemplazo de parabrisas sin deducible. Manejamos todo el papeleo por usted.',
      category: 'insurance'
    },
    {
      question: '¿Qué es la calibración ADAS y por qué la necesito?',
      answer: 'ADAS (Advanced Driver Assistance Systems) incluye características como asistencia de carril, frenado automático y crucero adaptativo. Después de reemplazar el parabrisas, las cámaras y sensores deben recalibrarse para funcionar correctamente. Usamos equipos de calidad de concesionario.',
      category: 'service'
    },
    {
      question: '¿Ofrecen garantía en su trabajo?',
      answer: 'Sí, ofrecemos garantía de por vida en todos los reemplazos de vidrio. Esto cubre filtraciones, defectos de instalación y problemas de ruido al viento. Siempre estamos aquí para hacer las correcciones necesarias sin costo adicional.',
      category: 'warranty'
    },
    {
      question: '¿Pueden reparar una astilla o grieta pequeña?',
      answer: 'Sí, podemos reparar astillas y grietas menores de 6 pulgadas si están lejos del borde y en el campo de visión del conductor. La reparación es más económica ($80-$150) y toma solo 30 minutos. Sin embargo, algunas grietas requieren reemplazo completo por seguridad.',
      category: 'service'
    },
    {
      question: '¿Trabajan con vehículos de lujo como Mercedes y BMW?',
      answer: 'Absolutamente. Somos especialistas certificados en vehículos de lujo incluyendo Mercedes, BMW, Audi, Tesla, Lexus y más. Usamos vidrio OEM y herramientas especializadas para garantizar la calidad de concesionario.',
      category: 'service'
    },
    {
      question: '¿Qué áreas de Florida sirven?',
      answer: 'Servimos todo el condado de Miami-Dade y Palm Beach, incluyendo Miami, Miami Beach, Doral, Kendall, West Palm Beach, Boca Raton, y áreas circundantes. Nuestro servicio móvil viene a su ubicación.',
      category: 'areas'
    }
  ] : [
    {
      question: 'How much does windshield replacement cost?',
      answer: 'Costs vary by vehicle and glass type. On average, $250-$500 for standard vehicles and $400-$800 for luxury vehicles with ADAS. With comprehensive insurance, it may cost you $0. We offer free quotes with no obligation.',
      category: 'pricing'
    },
    {
      question: 'How long does the service take?',
      answer: 'Most windshield replacements take 60-90 minutes. Rock chip repairs are completed in 30 minutes. For vehicles requiring ADAS calibration, total time is 2-3 hours including calibration.',
      category: 'service'
    },
    {
      question: 'Does my insurance cover windshield replacement?',
      answer: 'Yes, most comprehensive insurance policies cover windshield replacement. In Florida, the law requires insurers to cover windshield replacement with no deductible. We handle all the paperwork for you.',
      category: 'insurance'
    },
    {
      question: 'What is ADAS calibration and why do I need it?',
      answer: 'ADAS (Advanced Driver Assistance Systems) includes features like lane assist, automatic braking, and adaptive cruise control. After windshield replacement, cameras and sensors must be recalibrated to function properly. We use dealer-grade equipment.',
      category: 'service'
    },
    {
      question: 'Do you offer a warranty on your work?',
      answer: 'Yes, we offer a lifetime warranty on all glass replacements. This covers leaks, installation defects, and wind noise issues. We\'re always here to make any necessary corrections at no additional cost.',
      category: 'warranty'
    },
    {
      question: 'Can you repair a small chip or crack?',
      answer: 'Yes, we can repair chips and cracks under 6 inches if they\'re away from the edge and in the driver\'s line of sight. Repair is more affordable ($80-$150) and takes only 30 minutes. However, some cracks require full replacement for safety.',
      category: 'service'
    },
    {
      question: 'Do you work on luxury vehicles like Mercedes and BMW?',
      answer: 'Absolutely. We are certified specialists in luxury vehicles including Mercedes, BMW, Audi, Tesla, Lexus, and more. We use OEM glass and specialized tools to ensure dealership-quality results.',
      category: 'service'
    },
    {
      question: 'What areas of Florida do you serve?',
      answer: 'We serve all of Miami-Dade and Palm Beach counties, including Miami, Miami Beach, Doral, Kendall, West Palm Beach, Boca Raton, and surrounding areas. Our mobile service comes to your location.',
      category: 'areas'
    }
  ]

  const categories = [
    { id: 'all', label: language === 'es' ? 'Todas' : 'All' },
    { id: 'pricing', label: language === 'es' ? 'Precios' : 'Pricing' },
    { id: 'service', label: language === 'es' ? 'Servicio' : 'Service' },
    { id: 'insurance', label: language === 'es' ? 'Seguro' : 'Insurance' },
    { id: 'warranty', label: language === 'es' ? 'Garantía' : 'Warranty' },
  ]

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 mb-6"
          >
            <HelpCircle className="w-8 h-8 text-amber-500" />
          </motion.div>
          
          <span className="inline-block px-4 py-2 rounded-full glass border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            {language === 'es' ? 'Preguntas Frecuentes' : 'FAQ'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {language === 'es' ? 'Preguntas ' : 'Frequently '}
            <span className="text-gradient">{language === 'es' ? 'Frecuentes' : 'Asked Questions'}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Respuestas a las preguntas más comunes sobre nuestros servicios de vidrios para autos.'
              : 'Answers to the most common questions about our auto glass services.'}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900'
                  : 'glass text-slate-300 hover:border-amber-500/30 hover:text-amber-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <div
                  className={`glass-card-hover rounded-2xl overflow-hidden ${
                    openIndex === index ? 'border-amber-500/30' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-amber-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5">
                          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4" />
                          <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">
            {language === 'es' 
              ? '¿No encuentra la respuesta que busca?'
              : 'Can\'t find the answer you\'re looking for?'}
          </p>
          <a
            href="tel:13059840456"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            {language === 'es' ? 'Llámenos' : 'Call Us'} (305) 984-0456
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
