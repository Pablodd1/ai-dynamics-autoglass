import { Phone, MessageCircle, MapPin, Clock, Instagram, Mail, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.whyUs'), href: '#why-us' },
    { label: t('nav.reviews'), href: '#reviews' },
    { label: t('nav.areas'), href: '#areas' },
  ]

  const services = [
    t('services.windshield.title'),
    t('services.chip.title'),
    t('services.side.title'),
    t('services.rear.title'),
    language === 'es' ? 'Servicios de Flotas' : 'Fleet Services',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Autoglass-JM" className="w-10 h-10" />
              <div className="font-bold text-xl">
                Autoglass<span className="text-accent">-JM</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/13059840456"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:13059840456" className="text-white hover:text-accent transition-colors">
                    (305) 984-0456
                  </a>
                  <p className="text-gray-500 text-sm">{t('footer.emergency')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="https://wa.me/13059840456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <p className="text-gray-500 text-sm">{t('footer.fastest')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:Jmautoglassllc@gmail.com" className="text-white hover:text-accent transition-colors">
                    Jmautoglassllc@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm">{t('footer.sendPhotos')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">{t('footer.mobile')}</p>
                  <p className="text-gray-500 text-sm">Miami - West Palm Beach</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">{t('footer.hours')}</p>
                  <p className="text-white">{t('footer.hoursSun')}</p>
                  <p className="text-gray-500 text-sm">{t('footer.emergencyAvailable')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {t('footer.rights').replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.insurance')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
