import { motion } from 'framer-motion'
import { Check, Star, Shield, Zap, Phone } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const Pricing = () => {
  const { language } = useI18n()

  const plans = language === 'es' ? [
    {
      name: 'Reparación de Astilla',
      price: '$80',
      unit: '- $150',
      description: 'Reparación de pequeñas astillas y grietas',
      features: [
        'Reparación en 30 minutos',
        'Previene propagación',
        'Garantía de por vida',
        'Servicio móvil incluido',
        'Ideal para daños menores'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      icon: Zap
    },
    {
      name: 'Reemplazo Estándar',
      price: '$250',
      unit: '- $400',
      description: 'Vidrio OEE de calidad para vehículos estándar',
      features: [
        'Vidrio OEE de calidad',
        'Instalación en 60-90 min',
        'Garantía de por vida',
        'Servicio móvil incluido',
        'La mayoría de seguros aceptados'
      ],
      popular: true,
      color: 'from-amber-500 to-orange-500',
      icon: Star
    },
    {
      name: 'Premium + ADAS',
      price: '$400',
      unit: '- $800',
      description: 'Vidrio OEM + calibración ADAS para vehículos modernos',
      features: [
        'Vidrio OEM original',
        'Calibración ADAS incluida',
        'Tecnología dealer-grade',
        'Especialistas en lujo',
        'Garantía extendida'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500',
      icon: Shield
    }
  ] : [
    {
      name: 'Chip Repair',
      price: '$80',
      unit: '- $150',
      description: 'Repair small chips and cracks before they spread',
      features: [
        '30-minute repair time',
        'Prevents spreading',
        'Lifetime warranty',
        'Mobile service included',
        'Best for minor damage'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      icon: Zap
    },
    {
      name: 'Standard Replacement',
      price: '$250',
      unit: '- $400',
      description: 'Quality OEE glass for standard vehicles',
      features: [
        'Quality OEE glass',
        '60-90 min installation',
        'Lifetime warranty',
        'Mobile service included',
        'Most insurance accepted'
      ],
      popular: true,
      color: 'from-amber-500 to-orange-500',
      icon: Star
    },
    {
      name: 'Premium + ADAS',
      price: '$400',
      unit: '- $800',
      description: 'OEM glass + ADAS calibration for modern vehicles',
      features: [
        'Original OEM glass',
        'ADAS calibration included',
        'Dealer-grade technology',
        'Luxury specialists',
        'Extended warranty'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500',
      icon: Shield
    }
  ]

  const insuranceNote = language === 'es' 
    ? '💡 Con seguro completo, su costo puede ser $0. ¡Verificamos su cobertura gratis!'
    : '💡 With comprehensive insurance, your cost could be $0. We verify your coverage for free!'

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            {language === 'es' ? 'Precios Transparentes' : 'Transparent Pricing'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {language === 'es' ? 'Precios ' : 'Simple '}
            <span className="text-gradient">{language === 'es' ? 'Claros' : 'Pricing'}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Sin cargos ocultos. Cotización gratuita. Garantía de mejor precio.'
              : 'No hidden fees. Free quote. Best price guarantee.'}
          </p>
        </motion.div>

        {/* Pricing Cards - Bento Grid Style */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 text-sm font-bold shadow-lg">
                    {language === 'es' ? 'Más Popular' : 'Most Popular'}
                  </div>
                </div>
              )}

              <div className={`h-full p-8 rounded-3xl transition-all duration-500 ${
                plan.popular 
                  ? 'glass-card border-amber-500/30 shadow-2xl shadow-amber-500/10' 
                  : 'glass-card-hover'
              }`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-xl text-slate-400">{plan.unit}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-400 hover:to-amber-500'
                      : 'glass hover:border-amber-500/50 text-white'
                  }`}
                >
                  {language === 'es' ? 'Obtener Cotización' : 'Get Quote'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass border-green-500/30">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-slate-300">{insuranceNote}</p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: Phone, text: language === 'es' ? 'Cotización Gratis' : 'Free Quote' },
            { icon: Shield, text: language === 'es' ? 'Garantía de por Vida' : 'Lifetime Warranty' },
            { icon: Star, text: language === 'es' ? 'Precio Garantizado' : 'Price Match Guarantee' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400">
              <badge.icon className="w-4 h-4 text-amber-500" />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing