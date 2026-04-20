import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Clock, Shield, Star, ChevronDown, X, Camera } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import PhotoUploadQuote from './PhotoUploadQuote'

// Quote Modal Component
const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useI18n()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    vehicle: '',
    year: '',
    make: '',
    model: '',
    damage: '',
    zip: '',
    name: '',
    phone: '',
    email: '',
    insurance: '',
    location: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit form
      alert('Quote request submitted! We\'ll call you within 15 minutes.')
      onClose()
      setStep(1)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl z-50 overflow-hidden border border-amber-500/20 shadow-2xl shadow-amber-500/10"
          >
            <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{t('hero.ctaPrimary') as string}</h3>
                  <p className="text-slate-400 text-sm">Step {step} of 3</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Progress */}
              <div className="flex gap-2 mb-6">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-1 rounded-full transition-colors ${
                      s <= step ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Vehicle Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Year</label>
                        <select
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                          required
                        >
                          <option value="">Select</option>
                          {Array.from({ length: 25 }, (_, i) => 2026 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Make</label>
                        <select
                          value={formData.make}
                          onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                          required
                        >
                          <option value="">Select</option>
                          {['Acura', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Lexus', 'Mercedes', 'Nissan', 'Tesla', 'Toyota', 'Volkswagen', 'Other'].map(make => (
                            <option key={make} value={make}>{make}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Model</label>
                      <input
                        type="text"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                        placeholder="e.g., Camry, F-150, Model 3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Type of Damage</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Chip/Crack Repair', 'Full Replacement', 'Not Sure'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, damage: type })}
                            className={`px-4 py-3 rounded-xl border transition-all text-sm ${
                              formData.damage === type
                                ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                                : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Location */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                        placeholder="33001"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Service Location</label>
                      <div className="grid grid-cols-1 gap-3">
                        {['Home', 'Office/Work', 'Roadside/Emergency'].map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setFormData({ ...formData, location: loc })}
                            className={`px-4 py-3 rounded-xl border transition-all text-left ${
                              formData.location === loc
                                ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                                : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600'
                            }`}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                        placeholder="(305) 984-0456"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Insurance Company (Optional)</label>
                      <select
                        value={formData.insurance}
                        onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="">Select insurance (or none)</option>
                        {['State Farm', 'Geico', 'Progressive', 'Allstate', 'USAA', 'Liberty Mutual', 'Nationwide', 'Farmers', 'Travelers', 'Mercury', 'Other', 'No Insurance'].map(ins => (
                          <option key={ins} value={ins}>{ins}</option>
                        ))}
                      </select>
                    </div>
                  </motion.div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold hover:from-amber-400 hover:to-amber-500 transition-all"
                  >
                    {step === 3 ? 'Get My Quote' : 'Continue'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const Hero = () => {
  const { t } = useI18n()
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isPhotoQuoteOpen, setIsPhotoQuoteOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const trustBadges = [
    { icon: Star, label: t('trust.rating') as string, sublabel: t('trust.reviews') as string },
    { icon: Shield, label: t('trust.warranty') as string, sublabel: 'On All Work' },
    { icon: Clock, label: t('trust.mobile') as string, sublabel: '7 Days/Week' },
  ]

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Full Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1920&q=80"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Multiple overlay layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/30 via-transparent to-blue-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950" />
        </div>

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-amber-500/30 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-sm text-amber-400 font-medium">{t('hero.badge') as string}</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              >
                {t('hero.title1') as string}
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                  {t('hero.title2') as string}
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-slate-400">
                  {t('hero.title3') as string}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl"
              >
                {t('hero.subtitle') as string}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
                >
                  {t('hero.ctaPrimary') as string}
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <a
                  href="tel:13059840456"
                  className="group px-8 py-4 rounded-xl border-2 border-slate-600 text-white font-semibold text-lg hover:border-amber-500 hover:bg-amber-500/10 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {t('hero.ctaSecondary') as string}
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label as string}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl glass hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <badge.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{badge.label}</div>
                      <div className="text-xs text-slate-400">{badge.sublabel}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main Glass Card */}
                <div className="relative p-8 rounded-3xl glass-card shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Instant Quote</h3>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Live</span>
                    </div>

                    {/* Quick Form */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <select className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none">
                          <option>Year</option>
                          <option>2024</option>
                          <option>2023</option>
                        </select>
                        <select className="px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none">
                          <option>Make</option>
                          <option>Toyota</option>
                          <option>Honda</option>
                        </select>
                      </div>
                      <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-amber-500 focus:outline-none">
                        <option>Service Needed</option>
                        <option>Windshield Replacement</option>
                        <option>Windshield Repair</option>
                      </select>
                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold hover:from-amber-400 hover:to-amber-500 transition-all"
                      >
                        Get Price Now
                      </button>
                    </div>

                    {/* Photo Upload Option */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setIsPhotoQuoteOpen(true)}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition-all"
                      >
                        <Camera className="w-5 h-5" />
                        <span>Get Quote with Photo</span>
                        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">New</span>
                      </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-800"
                            />
                          ))}
                        </div>
                        <div className="text-sm text-slate-400">
                          <span className="text-white font-semibold">47 customers</span> got quotes today
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 p-4 rounded-2xl glass shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-white font-medium">Lifetime Warranty</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 p-3 rounded-xl glass shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="text-sm text-slate-300">60-90 min service</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-6 h-6 text-amber-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      
      {/* Photo Upload Quote Modal */}
      <PhotoUploadQuote isOpen={isPhotoQuoteOpen} onClose={() => setIsPhotoQuoteOpen(false)} />
    </>
  )
}

export default Hero