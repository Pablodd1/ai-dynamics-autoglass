import { motion } from 'framer-motion'
import { Windshield, Wrench, Shield, Clock, Car, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Windshield,
    title: 'Windshield Replacement',
    description: 'Complete OEM & aftermarket windshield replacement with lifetime warranty. Same-day service available.',
    price: 'From $199',
    features: ['Lifetime warranty', 'OEM quality glass', 'ADAS recalibration', 'Mobile service'],
  },
  {
    icon: Wrench,
    title: 'Chip & Crack Repair',
    description: 'Professional rock chip repair before it spreads. Save money with our quick fix solution.',
    price: 'From $79',
    features: ['Prevents spreading', '15-min repair', 'Insurance covers', 'Crystal clear finish'],
  },
  {
    icon: Car,
    title: 'Side Window Repair',
    description: 'Broken side window? We replace all car door windows and quarter glass panels.',
    price: 'From $149',
    features: ['All makes/models', 'Same-day service', 'Tint matching', 'Mobile repair'],
  },
  {
    icon: Shield,
    title: 'Rear Glass Replacement',
    description: 'Back windshield replacement with defroster grid restoration and proper sealing.',
    price: 'From $249',
    features: ['Defroster repair', 'Leak-proof seal', 'Heated glass options', 'Quick turnaround'],
  },
  {
    icon: Clock,
    title: 'Emergency Service',
    description: '24/7 emergency glass repair when you need it most. Fast response guaranteed.',
    price: 'Call for quote',
    features: ['24/7 availability', '30-min response', 'Safe temporary fixes', 'Full replacement'],
  },
  {
    icon: CheckCircle,
    title: 'Fleet Services',
    description: 'Corporate fleet maintenance programs with volume discounts and priority scheduling.',
    price: 'Custom pricing',
    features: ['Volume discounts', 'Priority scheduling', 'Monthly billing', 'Dedicated account'],
  },
]

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Auto Glass <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From minor chips to full replacements, we handle every type of auto glass repair with precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <span className="text-accent font-bold text-lg">{service.price}</span>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <a
                  href="https://wa.me/13055551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-100 hover:bg-primary-50 text-primary-700 font-semibold py-3 rounded-xl transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
