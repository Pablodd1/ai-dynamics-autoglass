import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

const miamiAreas = [
  'Miami Beach', 'Downtown Miami', 'Brickell', 'Coral Gables', 'Coconut Grove',
  'Wynwood', 'Design District', 'Little Havana', 'Allapattah', 'Liberty City',
  'Overtown', 'Upper East Side', 'Midtown', 'Edgewater', 'Wynwood',
]

const browardAreas = [
  'Hollywood', 'Fort Lauderdale', 'Pembroke Pines', 'Miramar', 'Davie',
  'Plantation', 'Sunrise', 'Weston', 'Coral Springs', 'Deerfield Beach',
]

const palmBeachAreas = [
  'West Palm Beach', 'Palm Beach', 'Boca Raton', 'Delray Beach', 'Boynton Beach',
  'Lake Worth', 'Wellington', 'Jupiter', 'Palm Beach Gardens', 'Royal Palm Beach',
]

const ServiceAreas = () => {
  return (
    <section id="areas" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full mb-4">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We Cover <span className="text-gradient">All of South Florida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mobile auto glass service from Miami to West Palm Beach. We come to your location.
          </p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-br from-primary-100 to-accent/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              {/* Simplified map outline of South Florida */}
              <path
                d="M150 350 L200 200 L350 180 L450 150 L550 100 L650 80 L700 120 L750 200 L720 280 L650 320 L550 350 L400 380 L250 370 Z"
                stroke="#2563eb"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="250" cy="280" r="8" fill="#f59e0b" />
              <circle cx="400" cy="250" r="8" fill="#f59e0b" />
              <circle cx="600" cy="180" r="8" fill="#f59e0b" />
              <text x="230" y="310" fill="#1e3a8a" fontSize="14" fontWeight="bold">Miami</text>
              <text x="380" y="280" fill="#1e3a8a" fontSize="14" fontWeight="bold">Fort Lauderdale</text>
              <text x="580" y="210" fill="#1e3a8a" fontSize="14" fontWeight="bold">West Palm Beach</text>
            </svg>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {/* Miami-Dade */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Miami-Dade</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {miamiAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Broward */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Broward</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {browardAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Palm Beach */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Palm Beach</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {palmBeachAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">Don't see your area? We probably serve it anyway.</p>
          <a
            href="tel:13059840456"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
          >
            <Phone className="w-5 h-5" />
            Call to confirm (305) 984-0456
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceAreas
