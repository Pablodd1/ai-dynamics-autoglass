import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Check } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const InteractiveMap = () => {
  const { language } = useI18n()

  const serviceAreas = [
    { name: 'Miami', x: 50, y: 60, primary: true },
    { name: 'Miami Beach', x: 55, y: 50, primary: true },
    { name: 'Doral', x: 40, y: 55, primary: true },
    { name: 'Kendall', x: 45, y: 70, primary: true },
    { name: 'West Palm Beach', x: 70, y: 25, primary: true },
    { name: 'Palm Beach', x: 75, y: 20, primary: true },
    { name: 'Hialeah', x: 45, y: 50, primary: false },
    { name: 'Coral Gables', x: 48, y: 62, primary: false },
    { name: 'Aventura', x: 58, y: 45, primary: false },
    { name: 'Boca Raton', x: 72, y: 30, primary: false },
    { name: 'Delray Beach', x: 78, y: 35, primary: false },
    { name: 'Fort Lauderdale', x: 62, y: 40, primary: false },
  ]

  const stats = language === 'es' ? [
    { value: '35+', label: 'Ciudades Servidas' },
    { value: '50+', label: 'Códigos Postales' },
    { value: '30 min', label: 'Tiempo Promedio' },
    { value: '7/7', label: 'Días de Servicio' },
  ] : [
    { value: '35+', label: 'Cities Served' },
    { value: '50+', label: 'ZIP Codes' },
    { value: '30 min', label: 'Avg Response' },
    { value: '7/7', label: 'Service Days' },
  ]

  return (
    <section id="map" className="relative py-24 overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"
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
            {language === 'es' ? 'Cobertura' : 'Coverage Area'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {language === 'es' ? 'Nuestra ' : 'Our '}
            <span className="text-gradient">{language === 'es' ? 'Área de Servicio' : 'Service Area'}</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Servicio móvil en todo Miami-Dade y Palm Beach. ¡Vamos donde usted esté!'
              : 'Mobile service throughout Miami-Dade and Palm Beach. We come to you!'}
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[4/3] rounded-3xl glass-card overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                {/* Grid Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(251,191,36,0.3)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Area Coverage Zones */}
                <svg className="absolute inset-0 w-full h-full">
                  {/* Miami-Dade Zone */}
                  <motion.ellipse
                    cx="50%"
                    cy="60%"
                    rx="25%"
                    ry="30%"
                    fill="url(#miamiGradient)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  {/* Palm Beach Zone */}
                  <motion.ellipse
                    cx="72%"
                    cy="28%"
                    rx="18%"
                    ry="20%"
                    fill="url(#palmGradient)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                  <defs>
                    <radialGradient id="miamiGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="palmGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Location Markers */}
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    className="absolute"
                    style={{ left: `${area.x}%`, top: `${area.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="relative group cursor-pointer">
                      {/* Pulse Effect */}
                      {area.primary && (
                        <motion.div
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-amber-500"
                        />
                      )}
                      {/* Marker */}
                      <div className={`relative w-4 h-4 rounded-full ${
                        area.primary 
                          ? 'bg-amber-500 border-2 border-white' 
                          : 'bg-slate-500 border-2 border-slate-700'
                      }`} />
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="px-3 py-1 rounded-lg glass text-white text-sm whitespace-nowrap">
                          {area.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 200,300 Q 350,250 450,180"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 glass rounded-xl p-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="text-slate-300">{language === 'es' ? 'Área Principal' : 'Primary Area'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-500" />
                      <span className="text-slate-300">{language === 'es' ? 'Área Extendida' : 'Extended Area'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid - Bento Style */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card-hover p-4 rounded-2xl text-center"
                >
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Service Info */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">
                {language === 'es' ? 'Servicio Móvil' : 'Mobile Service'}
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: language === 'es' ? 'Viene a su ubicación' : 'Comes to your location' },
                  { icon: Clock, text: language === 'es' ? 'Servicio el mismo día' : 'Same-day service available' },
                  { icon: Check, text: language === 'es' ? 'Sin costo adicional' : 'No extra charge' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-amber-500" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.a
              href="tel:13059840456"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold"
            >
              <Phone className="w-5 h-5" />
              {language === 'es' ? 'Verificar Disponibilidad' : 'Check Availability'}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMap