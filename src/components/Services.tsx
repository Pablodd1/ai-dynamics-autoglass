import { motion } from 'framer-motion'
import { Windshield, ShieldCheck, Microchip, Square, PanelBottom, ScanFace, ArrowRight, Check } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const Services = () => {
  const { t } = useI18n()

  const services = [
    {
      icon: Windshield,
      title: t('services.windshield.title') as string,
      description: t('services.windshield.desc') as string,
      features: t('services.windshield.features') as string[],
      gradient: 'from-amber-500 to-orange-600',
      popular: true,
    },
    {
      icon: ShieldCheck,
      title: t('services.repair.title') as string,
      description: t('services.repair.desc') as string,
      features: t('services.repair.features') as string[],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Microchip,
      title: t('services.adas.title') as string,
      description: t('services.adas.desc') as string,
      features: t('services.adas.features') as string[],
      gradient: 'from-purple-500 to-pink-600',
      badge: t('services.adas.badge') as string,
      isNew: true,
    },
    {
      icon: Square,
      title: t('services.sideWindow.title') as string,
      description: t('services.sideWindow.desc') as string,
      features: t('services.sideWindow.features') as string[],
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: PanelBottom,
      title: t('services.backGlass.title') as string,
      description: t('services.backGlass.desc') as string,
      features: t('services.backGlass.features') as string[],
      gradient: 'from-rose-500 to-red-600',
    },
    {
      icon: ScanFace,
      title: t('services.mirror.title') as string,
      description: t('services.mirror.desc') as string,
      features: t('services.mirror.features') as string[],
      gradient: 'from-indigo-500 to-violet-600',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">{t('services.badge') as string}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t('services.title') as string}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t('services.subtitle') as string}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
              <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 ${service.popular ? 'ring-2 ring-amber-500/20' : ''}`}>
                {service.badge && <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg">{service.badge}</div>}
                {service.popular && !service.badge && <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 text-xs font-bold shadow-lg">POPULAR</div>}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#quote" className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors group/link">
                  Get Quote<ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services