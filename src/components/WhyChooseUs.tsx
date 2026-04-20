import { motion } from 'framer-motion'
import { 
  Truck, 
  Cpu, 
  Award, 
  FileCheck, 
  Gem, 
  Zap,
  Check
} from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const WhyChooseUs = () => {
  const { t } = useI18n()

  const reasons = [
    {
      icon: Truck,
      title: t('whyUs.cards.mobile.title') as string,
      description: t('whyUs.cards.mobile.desc') as string,
      stat: 'Free',
      statLabel: 'Mobile Service',
    },
    {
      icon: Cpu,
      title: t('whyUs.cards.adas.title') as string,
      description: t('whyUs.cards.adas.desc') as string,
      stat: '100%',
      statLabel: 'Calibration Success',
      highlight: true,
    },
    {
      icon: Award,
      title: t('whyUs.cards.warranty.title') as string,
      description: t('whyUs.cards.warranty.desc') as string,
      stat: 'Lifetime',
      statLabel: 'Warranty',
    },
    {
      icon: FileCheck,
      title: t('whyUs.cards.insurance.title') as string,
      description: t('whyUs.cards.insurance.desc') as string,
      stat: '$0',
      statLabel: 'With Most Insurance',
    },
    {
      icon: Gem,
      title: t('whyUs.cards.luxury.title') as string,
      description: t('whyUs.cards.luxury.desc') as string,
      stat: 'Certified',
      statLabel: 'Luxury Specialists',
    },
    {
      icon: Zap,
      title: t('whyUs.cards.speed.title') as string,
      description: t('whyUs.cards.speed.desc') as string,
      stat: '60-90',
      statLabel: 'Minutes Average',
    },
  ]

  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            {t('whyUs.badge') as string}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('whyUs.title') as string}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('whyUs.subtitle') as string}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title as string}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                reason.highlight 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/30' 
                  : 'bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                reason.highlight 
                  ? 'bg-gradient-to-br from-amber-500 to-amber-600' 
                  : 'bg-slate-700/50 group-hover:bg-amber-500/20 transition-colors'
              }`}>
                <reason.icon className={`w-7 h-7 ${reason.highlight ? 'text-slate-900' : 'text-amber-500'}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{reason.description}</p>

              {/* Stat */}
              <div className="pt-6 border-t border-slate-700/50">
                <div className={`text-2xl font-bold ${reason.highlight ? 'text-amber-400' : 'text-white'}`}>
                  {reason.stat}
                </div>
                <div className="text-sm text-slate-500">{reason.statLabel}</div>
              </div>

              {/* Check marks */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4">Certified & Approved By</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['AGSC Certified', 'ASE Certified Techs', 'OEM Approved', 'BBB A+ Rated', 'Insurance Approved'].map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-slate-400">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
