import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const Reviews = () => {
  const { t, language } = useI18n()

  const reviews = language === 'es' ? [
    {
      name: 'Carlos M.',
      location: 'Miami, FL',
      rating: 5,
      text: 'Servicio increíblemente rápido. Llegaron a mi oficina y reemplazaron el parabrisas en menos de una hora. Profesionales y limpios.',
      avatar: 'CM',
    },
    {
      name: 'María G.',
      location: 'West Palm Beach',
      rating: 5,
      text: 'Mi BMW necesitaba calibración ADAS después del reemplazo. Lo hicieron perfecto, mucho más barato que el concesionario.',
      avatar: 'MG',
    },
    {
      name: 'José R.',
      location: 'Doral, FL',
      rating: 5,
      text: 'Excelente servicio al cliente. Hablan español, manejaron todo con el seguro y no tuve que pagar nada de mi bolsillo.',
      avatar: 'JR',
    },
    {
      name: 'Ana L.',
      location: 'Miami Beach',
      rating: 5,
      text: 'Llamé por una astilla en mi parabrisas y vinieron el mismo día. La reparación quedó imperceptible. Muy recomendados.',
      avatar: 'AL',
    },
  ] : [
    {
      name: 'Michael T.',
      location: 'Miami, FL',
      rating: 5,
      text: 'Incredibly fast service. They came to my office and replaced my windshield in under an hour. Professional and clean work.',
      avatar: 'MT',
    },
    {
      name: 'Sarah K.',
      location: 'West Palm Beach',
      rating: 5,
      text: 'My BMW needed ADAS calibration after the replacement. They did it perfectly and much cheaper than the dealership.',
      avatar: 'SK',
    },
    {
      name: 'David R.',
      location: 'Doral, FL',
      rating: 5,
      text: 'Excellent customer service. They handled all the insurance paperwork and I paid nothing out of pocket. Lifetime warranty!',
      avatar: 'DR',
    },
    {
      name: 'Jennifer M.',
      location: 'Miami Beach',
      rating: 5,
      text: 'Called about a chip in my windshield and they came same day. The repair is invisible. Highly recommended!',
      avatar: 'JM',
    },
  ]

  return (
    <section id="reviews" className="relative py-24 bg-slate-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            {t('reviews.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-amber-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">{review.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-900 font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{review.name}</div>
                  <div className="text-xs text-slate-500">{review.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          {['Google', 'Yelp', 'Facebook', 'BBB'].map((platform) => (
            <div key={platform} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span className="text-sm text-slate-400">{platform}</span>
              <span className="text-sm font-bold text-white">4.9</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
