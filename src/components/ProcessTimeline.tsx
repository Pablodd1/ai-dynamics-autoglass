import { motion } from 'framer-motion'
import { Clock, MapPin, Wrench, Shield, CheckCircle2, Car } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const ProcessTimeline = () => {
  const { language } = useI18n()

  const steps = language === 'es' ? [
    {
      icon: Car,
      title: 'Solicite su Cotización',
      description: 'Llámenos o complete nuestro formulario en línea. Le responderemos en 15 minutos con un precio garantizado.',
      time: '0-15 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Programe su Servicio',
      description: 'Elija una fecha y hora conveniente. Ofrecemos servicio el mismo día y horarios flexibles que se adaptan a su agenda.',
      time: '15-30 min',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Servicio Móvil a su Ubicación',
      description: 'Nuestros técnicos certificados llegan a su casa, oficina o ubicación en Miami o West Palm Beach.',
      time: '30-60 min',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Wrench,
      title: 'Instalación Profesional',
      description: 'Reemplazo experto de vidrio con adhesivos de calidad OEM. La mayoría de trabajos se completan en 60-90 minutos.',
      time: '60-90 min',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Calibración ADAS (si aplica)',
      description: 'Para vehículos modernos, calibramos cámaras y sensores con equipos de calidad de concesionario.',
      time: '+60 min',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: CheckCircle2,
      title: 'Garantía de por Vida',
      description: 'Su instalación está respaldada por nuestra garantía de por vida. Puede conducir con total confianza.',
      time: 'Inmediato',
      color: 'from-indigo-500 to-violet-500'
    }
  ] : [
    {
      icon: Car,
      title: 'Request Your Quote',
      description: 'Call us or fill out our online form. We\'ll respond within 15 minutes with a guaranteed price.',
      time: '0-15 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Schedule Your Service',
      description: 'Choose a convenient date and time. We offer same-day service and flexible scheduling to fit your calendar.',
      time: '15-30 min',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Mobile Service to Your Location',
      description: 'Our certified technicians arrive at your home, office, or anywhere in Miami or West Palm Beach.',
      time: '30-60 min',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Expert glass replacement with OEM-quality adhesives. Most jobs completed in 60-90 minutes.',
      time: '60-90 min',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'ADAS Calibration (if applicable)',
      description: 'For modern vehicles, we calibrate cameras and sensors using dealer-grade equipment.',
      time: '+60 min',
      color: 'from-rose-500 to-red-500'
    },
    {
      icon: CheckCircle2,
      title: 'Lifetime Warranty',
      description: 'Your installation is backed by our lifetime warranty. Drive away with complete confidence.',
      time: 'Immediate',
      color: 'from-indigo-500 to-violet-500'
    }
  ]

  return (
    <section id="process" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            {language === 'es' ? 'Nuestro Proceso' : 'Our Process'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {language === 'es' ? 'Cómo ' : 'How It '}
            <span className="text-gradient">{language === 'es' ? 'Funciona' : 'Works'}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'De la cotización a la instalación final: un proceso simple y sin estrés.'
              : 'From quote to final installation: a simple, stress-free process.'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-900 transform -translate-x-1/2 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute inset-0 rounded-full bg-amber-500"
                  />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card-hover p-6 rounded-2xl"
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                            {language === 'es' ? 'Paso' : 'Step'} {index + 1}
                          </span>
                          <span className="text-xs text-slate-500">• {step.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span className="text-white font-semibold">
                {language === 'es' ? 'Servicio el Mismo Día Disponible' : 'Same-Day Service Available'}
              </span>
            </div>
            <div className="w-px h-6 bg-slate-700" />
            <a
              href="tel:13059840456"
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors"
            >
              (305) 984-0456
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessTimeline
