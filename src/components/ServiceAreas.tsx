import { motion } from 'framer-motion'
import { MapPin, Check } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const ServiceAreas = () => {
  const { t, language } = useI18n()

  const mainAreas = language === 'es' ? [
    { name: 'Miami', zips: '33101-33199' },
    { name: 'Miami Beach', zips: '33139-33141' },
    { name: 'Doral', zips: '33122-33178' },
    { name: 'Kendall', zips: '33143-33186' },
    { name: 'West Palm Beach', zips: '33401-33422' },
    { name: 'Palm Beach', zips: '33480' },
  ] : [
    { name: 'Miami', zips: '33101-33199' },
    { name: 'Miami Beach', zips: '33139-33141' },
    { name: 'Doral', zips: '33122-33178' },
    { name: 'Kendall', zips: '33143-33186' },
    { name: 'West Palm Beach', zips: '33401-33422' },
    { name: 'Palm Beach', zips: '33480' },
  ]

  const otherAreas = language === 'es' ? [
    'Hialeah', 'Coral Gables', 'Aventura', 'Sunny Isles', 'Brickell', 
    'Wynwood', 'Design District', 'Little Havana', 'Coconut Grove',
    'Pinecrest', 'Palmetto Bay', 'Cutler Bay', 'Homestead',
    'Boca Raton', 'Delray Beach', 'Boynton Beach', 'Lake Worth'
  ] : [
    'Hialeah', 'Coral Gables', 'Aventura', 'Sunny Isles', 'Brickell', 
    'Wynwood', 'Design District', 'Little Havana', 'Coconut Grove',
    'Pinecrest', 'Palmetto Bay', 'Cutler Bay', 'Homestead',
    'Boca Raton', 'Delray Beach', 'Boynton Beach', 'Lake Worth'
  ]

  return (
    <section id="areas" className="relative py-24 bg-slate-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4">
            {t('areas.badge') as string}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('areas.title') as string}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t('areas.subtitle') as string}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              {t('areas.mainCities') as string}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {mainAreas.map((area) => (
                <div
                  key={area.name}
                  className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-500/30 transition-colors"
                >
                  <div className="font-semibold text-white">{area.name}</div>
                  <div className="text-sm text-slate-500">ZIP: {area.zips}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* All Other Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              {t('areas.allAreas') as string}
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-amber-500/30 hover:text-amber-400 transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">
              {t('areas.zipcodes') as string}
            </p>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-amber-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Mobile Service Coverage</h3>
          <p className="text-slate-400 mb-4">We come to you anywhere in Miami-Dade and Palm Beach counties</p>
          <a
            href="tel:13059840456"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold hover:from-amber-400 hover:to-amber-500 transition-all"
          >
            Call for Service Area Confirmation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceAreas
