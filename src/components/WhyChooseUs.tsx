import { motion } from 'framer-motion'
import { Shield, Clock, ThumbsUp, Award, Phone, Car } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Every installation comes with our comprehensive lifetime warranty against leaks, defects, and workmanship issues.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Most repairs completed within hours. We come to your location so you don\'t waste time at a shop.',
  },
  {
    icon: ThumbsUp,
    title: 'Insurance Approved',
    description: 'We work with all major insurance companies. Direct billing available - zero hassle for you.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Our team is AGSC certified with 15+ years combined experience. Your car is in expert hands.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Emergencies don\'t wait for business hours. Call us anytime, day or night, for urgent repairs.',
  },
  {
    icon: Car,
    title: 'Mobile Service',
    description: 'We bring the shop to you. Home, office, or roadside - we repair where you need us.',
  },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50K+', label: 'Windshields Fixed' },
  { value: '4.9', label: 'Star Rating' },
  { value: '30min', label: 'Avg Response' },
]

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-gradient">AI Dynamics</span> Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We\'re not just another glass shop. We\'re your neighbors, committed to keeping Miami\'s drivers safe.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">100% Satisfaction Guarantee</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Not happy with our work? We\'ll make it right - no questions asked, no extra cost. 
            That\'s the AI Dynamics promise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
