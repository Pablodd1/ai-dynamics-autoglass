import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronRight, Shield, Clock, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-white/90 text-sm font-medium">#1 Rated Auto Glass in Miami</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Cracked Windshield?{' '}
              <span className="text-accent">We Fix It Today.</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Same-day mobile auto glass service across Miami & West Palm Beach. 
              Free quote in 60 seconds. Insurance approved.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Clock, text: 'Same-Day Service' },
                { icon: Shield, text: 'Insurance Approved' },
                { icon: Star, text: '5-Star Rated' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  {badge.text}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/13055551234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Get WhatsApp Quote
                <ChevronRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="tel:+13055551234"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-3 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call (305) 555-1234
              </motion.a>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
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

          {/* Right Content - Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8 relative">
              <div className="absolute -top-4 -right-4 bg-accent text-white text-sm font-bold px-4 py-2 rounded-full">
                24/7 Available
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>

              <div className="space-y-4">
                {[
                  'Windshield Replacement',
                  'Chip & Crack Repair',
                  'Side Window Repair',
                  'Rear Glass Replacement',
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </div>
                    {service}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-white/80 text-sm mb-2">Average response time</p>
                <p className="text-3xl font-bold text-accent">Under 5 min</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
