import { motion } from 'framer-motion'
import { MessageCircle, Phone, X } from 'lucide-react'
import { useState } from 'react'

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 z-50">
        <a
          href="tel:+13055551234"
          className="flex-1 bg-primary-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/13055551234"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>

      {/* Desktop Floating Buttons */}
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
              className="absolute bottom-full right-0 mb-4 space-y-3"
            >
              <a
                href="tel:+13055551234"
                className="flex items-center gap-3 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(305) 555-1234</span>
              </a>
              <a
                href="https://wa.me/13055551234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp Quote</span>
              </a>
            </motion.div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isExpanded ? 'bg-gray-800 rotate-45' : 'bg-accent hover:bg-accent-dark'
            }`}
          >
            {isExpanded ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <MessageCircle className="w-8 h-8 text-white" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Add padding to bottom on mobile for fixed bar */}
      <div className="md:hidden h-20" />
    </>
  )
}

export default FloatingCTA
