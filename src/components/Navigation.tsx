import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav.services') as string, href: '#services' },
    { label: t('nav.whyUs') as string, href: '#why-us' },
    { label: t('nav.reviews') as string, href: '#reviews' },
    { label: t('nav.areas') as string, href: '#areas' },
  ]

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-slate-900" />
            </div>
            <div className={`font-bold text-lg md:text-xl transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
              Autoglass<span className="text-amber-500">-JM</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  scrolled ? 'text-slate-300' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <a 
              href="tel:13059840456"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-sm font-bold hover:from-amber-400 hover:to-amber-500 transition-all"
            >
              <Phone className="w-4 h-4" />
              {t('nav.callNow') as string}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left py-2 text-slate-300 font-medium hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="tel:13059840456"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold"
              >
                <Phone className="w-4 h-4" />
                {t('nav.callNow') as string}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation