import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white">
                Autoglass<span className="text-amber-500">-JM</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm mb-6">{t('footer.tagline') as string}</p>
            <div className="space-y-2">
              <a href="tel:13059840456" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                (305) 984-0456
              </a>
              <a href="mailto:info@autoglassjm.com" className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@autoglassjm.com
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                Miami, FL
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.company') as string}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.about') as string}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.careers') as string}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.blog') as string}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.services') as string}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('services.windshield.title') as string}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('services.repair.title') as string}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('services.adas.title') as string}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('services.sideWindow.title') as string}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t('footer.support') as string}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.warranty') as string}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.faq') as string}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.insurance') as string}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{t('footer.track') as string}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Autoglass JM. {t('footer.rights') as string}
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500/20 hover:text-amber-500 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
