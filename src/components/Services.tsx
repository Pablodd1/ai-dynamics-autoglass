import { motion } from 'framer-motion'
import { CarFront, Wrench, Car, CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: CarFront,
      title: t('services.windshield.title'),
      description: t('services.windshield.desc'),
      price: t('services.windshield.price'),
      features: [t('services.warranty'), t('services.oem'), t('services.mobile'), t('services.calibration')],
    },
    {
      icon: Wrench,
      title: t('services.chip.title'),
      description: t('services.chip.desc'),
      price: t('services.chip.price'),
      features: [t('services.warranty'), t('services.mobile')],
    },
    {
      icon: Car,
      title: t('services.side.title'),
      description: t('services.side.desc'),
      price: t('services.side.price'),
      features: [t('services.warranty'), t('services.oem')],
    },
    {
      icon: CarFront,
      title: t('services.rear.title'),
      description: t('services.rear.desc'),
      price: t('services.rear.price'),
      features: [t('services.warranty'), t('services.oem'), t('services.mobile')],
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full mb-4">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}{' '}
            <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Price */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <span className="text-accent font-bold text-lg">{service.price}</span>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#quote"
                className="btn-primary w-full text-center block"
              >
                {t('services.getQuote')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
