import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { useLanguage } from './context/LanguageContext'
import LanguageToggle from './components/LanguageToggle'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import ServiceAreas from './components/ServiceAreas'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.whyUs'), id: 'why-us' },
    { label: t('nav.reviews'), id: 'reviews' },
    { label: t('nav.areas'), id: 'areas' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/logo.svg" 
                alt="Autoglass-JM" 
                className="w-10 h-10"
              />
              <div className={`font-bold text-lg md:text-xl transition-colors ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                Autoglass<span className="text-accent">-JM</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <a 
                href="tel:13059840456"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                {t('nav.callNow')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
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
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-gray-700 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <a 
                  href="tel:13059840456"
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                >
                  <Phone className="w-4 h-4" />
                  {t('nav.callNow')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <ServiceAreas />
        <QuoteForm />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
