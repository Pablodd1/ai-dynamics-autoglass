import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <motion.button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 md:bottom-8 left-4 md:left-8 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-md shadow-lg hover:shadow-xl px-4 py-3 rounded-full border border-gray-200 transition-all"
    >
      <Globe className="w-5 h-5 text-primary-600" />
      <span className="font-medium text-gray-700">
        {language === 'es' ? 'English' : 'Español'}
      </span>
      <span className="text-xs text-gray-400 ml-1">
        ({t('lang.current')})
      </span>
    </motion.button>
  )
}

export default LanguageToggle
