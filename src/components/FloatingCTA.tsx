import { motion } from 'framer-motion'
import { MessageCircle, Phone, X, Mail } from 'lucide-react'
import { useState } from 'react'

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile Fixed Bottom Bar - Smart & Compact */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 flex gap-2 z-50 shadow-2xl safe-area-pb">
        <a
          href="tel:13059840456"
          className="flex-1 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all tap-highlight-none"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">Call</span>
        </a>
        <a
          href="https://wa.me/13059840456"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all tap-highlight-none"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </a>
        <a
          href="mailto:Jmautoglassllc@gmail.com"
          className="flex-1 bg-accent hover:bg-accent-dark active:bg-accent/80 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all tap-highlight-none"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm">Email</span>
        </a>
      </div>

      {/* Desktop Floating Menu */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="relative"
        >
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-full right-0 mb-4 space-y-3 min-w-[280px]"
            >
              <a
                href="https://wa.me/13059840456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-xl hover:bg-green-400 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <div>
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-sm text-white/80">Fastest response</div>
                </div>
              </a>
              <a
                href="tel:13059840456"
                className="flex items-center gap-3 bg-primary-600 text-white px-6 py-4 rounded-2xl shadow-xl hover:bg-primary-500 transition-all"
              >
                <Phone className="w-6 h-6" />
                <div>
                  <div className="font-bold">Call Now</div>
                  <div className="text-sm text-white/80">(305) 984-0456</div>
                </div>
              </a>
              <a
                href="mailto:Jmautoglassllc@gmail.com"
                className="flex items-center gap-3 bg-accent text-white px-6 py-4 rounded-2xl shadow-xl hover:bg-accent/90 transition-all"
              >
                <Mail className="w-6 h-6" />
                <div>
                  <div className="font-bold">Email Quote</div>
                  <div className="text-sm text-white/80">Send photos</div>
                </div>
              </a>
            </motion.div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isExpanded ? 'bg-gray-800' : 'bg-green-500 hover:bg-green-400'
            }`}
          >
            {isExpanded ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <div className="relative">
                <MessageCircle className="w-8 h-8 text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </div>
            )}
          </button>
        </motion.div>
      </div>

      {/* Safe area padding for mobile */}
      <div className="md:hidden h-20" />
    </>
  )
}

export default FloatingCTA
