import { motion } from 'framer-motion'
import { Car, Shield, Award, DollarSign, Settings, CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WhyChooseUs = () => {
  const { t } = useLanguage()

  const stats = [
    { value: '15+', label: t('why.stats.years') },
    { value: '5,000+', label: t('why.stats.customers') },
    { value: '4.9★', label: t('why.stats.rating') },
    { value: '5 min', label: t('why.stats.response') },
  ]

  const features = [
    {
      icon: Car,
      title: t('why.feature1.title'),
      description: t('why.feature1.desc'),
    },
    {
      icon: Shield,
      title: t('why.feature2.title'),
      description: t('why.feature2.desc'),
    },
    {
      icon: Award,
      title: t('why.feature3.title'),
      description: t('why.feature3.desc'),
    },
    {
      icon: CheckCircle,
      title: t('why.feature4.title'),
      description: t('why.feature4.desc'),
    },
    {
      icon: DollarSign,
      title: t('why.feature5.title'),
      description: t('why.feature5.desc'),
    },
    {
      icon: Settings,
      title: t('why.feature6.title'),
      description: t('why.feature6.desc'),
    },
  ]

  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full mb-4">
            {t('why.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('why.title')}{' '}
            <span className="text-gradient">{t('why.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">100% {t('why.feature4.title')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
