import { motion } from 'framer-motion'
import { Phone, MessageSquare, X } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'

const FloatingCTA = () => {
  const { t } = useI18n()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile Floating Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 right-6 z-40 md:hidden"
      >
        <a
          href="tel:13059840456"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold shadow-lg shadow-amber-500/30"
        >
          <Phone className="w-5 h-5" />
          {t('nav.callNow') as string}
        </a>
      </motion.div>

      {/* Desktop Floating Actions */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 space-y-3"
          >
            <a
              href="tel:13059840456"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white hover:border-amber-500/50 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <div className="font-semibold text-sm">Call Now</div>
                <div className="text-xs text-slate-400">(305) 984-0456</div>
              </div>
            </a>
          </motion.div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30"
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <MessageSquare className="w-6 h-6 text-slate-900" />
          )}
        </motion.button>
      </div>
    </>
  )
}

export default FloatingCTA
