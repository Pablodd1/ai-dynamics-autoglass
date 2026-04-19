import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Reviews = () => {
  const { t, language } = useLanguage()

  const reviews = [
    {
      name: 'Carlos Rodriguez',
      location: language === 'es' ? 'Miami, FL' : 'Miami, FL',
      rating: 5,
      text: language === 'es' 
        ? 'Se me rompió el parabrisas en la I-95. Llamé a las 2pm, llegaron a mi oficina a las 4pm. Terminaron en 45 minutos. ¡Servicio increíble!'
        : 'Cracked my windshield on I-95. Called at 2pm, they were at my office by 4pm. Done in 45 minutes. Incredible service!',
      service: language === 'es' ? 'Reemplazo de Parabrisas' : 'Windshield Replacement',
    },
    {
      name: 'Maria Gonzalez',
      location: language === 'es' ? 'West Palm Beach, FL' : 'West Palm Beach, FL',
      rating: 5,
      text: language === 'es'
        ? 'El mejor precio que encontré después de llamar a 5 tiendas. Vinieron a mi casa, hicieron un trabajo perfecto, y hasta limpiaron después. ¡Muy recomendado!'
        : 'Best price I found after calling 5 shops. They came to my house, did a perfect job, and even cleaned up after. Highly recommend!',
      service: language === 'es' ? 'Reemplazo de Vidrio Trasero' : 'Rear Glass Replacement',
    },
    {
      name: 'James Thompson',
      location: language === 'es' ? 'Coral Gables, FL' : 'Coral Gables, FL',
      rating: 5,
      text: language === 'es'
        ? 'Mi seguro intentó enviarme a su taller "preferido" con 2 semanas de espera. Autoglass-JM lo hizo al día siguiente y manejaron todo el papeleo.'
        : 'My insurance tried to send me to their "preferred" shop with a 2-week wait. Autoglass-JM did it next day and handled all the paperwork.',
      service: language === 'es' ? 'Reparación de Ventana' : 'Side Window Repair',
    },
    {
      name: 'Lisa Chen',
      location: language === 'es' ? 'Miami Beach, FL' : 'Miami Beach, FL',
      rating: 5,
      text: language === 'es'
        ? 'Una piedra golpeó mi Tesla. Me preocupaban los sensores pero supieron exactamente qué hacer. Calibración perfecta, el vidrio parece OEM.'
        : 'Got a rock chip on my Tesla. Was worried about the sensors but they knew exactly what to do. Perfect recalibration, glass looks OEM.',
      service: language === 'es' ? 'Reparación de Astilla' : 'Chip Repair',
    },
    {
      name: 'David Martinez',
      location: language === 'es' ? 'Hialeah, FL' : 'Hialeah, FL',
      rating: 5,
      text: language === 'es'
        ? 'Llamada de emergencia a altas horas de la noche - ¡contestaron! Arreglaron mi ventana rota a las 10pm para que pudiera asegurar mi carro. Salvavidas.'
        : 'Emergency late night call - they actually answered! Fixed my broken window at 10pm so I could secure my car. Lifesavers.',
      service: language === 'es' ? 'Servicio de Emergencia' : 'Emergency Service',
    },
    {
      name: 'Jennifer Adams',
      location: language === 'es' ? 'Kendall, FL' : 'Kendall, FL',
      rating: 5,
      text: language === 'es'
        ? 'Los usamos para nuestra flota de 12 vans de entrega. Configuraron un programa de mantenimiento y nos dan prioridad. Excelente para dueños de negocios.'
        : 'Used them for our fleet of 12 delivery vans. They set up a maintenance schedule and give us priority. Great for business owners.',
      service: language === 'es' ? 'Servicio de Flotas' : 'Fleet Service',
    },
  ]

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full mb-4">
            {t('reviews.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('reviews.title')}{' '}
            <span className="text-gradient">{t('reviews.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">&quot;{review.text}&quot;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                  <p className="text-xs text-accent mt-1">{review.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-lg">
            <div className="text-5xl font-bold text-gradient">4.9</div>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-1">
                {language === 'es' ? 'Basado en 2,847+ reseñas' : 'Based on 2,847+ reviews'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
