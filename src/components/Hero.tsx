import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Shield, 
  Clock, 
  Star,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1449965408869-e3a9c4e0-1e5a-4d7e-9e3a-4b0c8f0e9a6b?w=1920&q=80"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-highway-with-cars-34141-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-900/90" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Floating Glow Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-white/90 text-sm font-medium">#1 Rated Auto Glass in Miami</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Cracked Windshield?{' '}
              <span className="text-accent">We Come to You.</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Same-day mobile auto glass replacement & repair across Miami & West Palm Beach. 
              Free instant quote. Insurance approved. Lifetime warranty.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Clock, text: '30-Min Response' },
                { icon: Shield, text: 'Insurance Approved' },
                { icon: Star, text: '5-Star Rated' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/70 text-sm bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  {badge.text}
                </motion.div>
              ))}
            </div>

            {/* Primary CTAs - BIG & OBVIOUS */}
            <div className="flex flex-col gap-4 mb-6">
              <motion.a
                href="https://wa.me/13055551234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-5 rounded-2xl text-lg shadow-2xl shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Get WhatsApp Quote Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <div className="flex gap-4">
                <motion.a
                  href="tel:+13055551234"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-white hover:bg-gray-50 text-primary-900 font-bold px-6 py-4 rounded-2xl text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (305) 555-1234</span>
                </motion.a>

                <motion.a
                  href="mailto:quotes@autoglass-jm.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-4 rounded-2xl text-lg border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Quote</span>
                </motion.a>
              </div>
            </div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <MapPin className="w-4 h-4" />
              Serving Miami, Fort Lauderdale & West Palm Beach
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-white/70 text-sm">
                <span className="text-white font-semibold">2,847+</span> happy customers this year
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8 relative border border-white/20">
              <div className="absolute -top-4 -right-4 bg-accent text-white text-sm font-bold px-4 py-2 rounded-full animate-pulse">
                ⚡ 24/7 Available
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Need Help Now?</h3>
              <p className="text-white/70 mb-6">Choose how you want to reach us</p>

              {/* Contact Options */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/13055551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-white/60 text-sm">Fastest response - under 2 min</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="tel:+13055551234"
                  className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Call Now</div>
                    <div className="text-white/60 text-sm">(305) 555-1234</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:quotes@autoglass-jm.com"
                  className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-white/60 text-sm">Send photos for quote</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded-xl text-center">
                  <p className="text-3xl font-bold text-accent">5 min</p>
                  <p className="text-white/60 text-sm">Avg Response</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl text-center">
                  <p className="text-3xl font-bold text-accent">24/7</p>
                  <p className="text-white/60 text-sm">Emergency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
