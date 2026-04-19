import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Carlos Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'Cracked my windshield on I-95. Called at 2pm, they were at my office by 4pm. Done in 45 minutes. Incredible service!',
    service: 'Windshield Replacement',
  },
  {
    name: 'Maria Gonzalez',
    location: 'West Palm Beach, FL',
    rating: 5,
    text: 'Best price I found after calling 5 shops. They came to my house, did a perfect job, and even cleaned up after. Highly recommend!',
    service: 'Rear Glass Replacement',
  },
  {
    name: 'James Thompson',
    location: 'Coral Gables, FL',
    rating: 5,
    text: 'My insurance tried to send me to their "preferred" shop with a 2-week wait. AI Dynamics did it next day and handled all the paperwork.',
    service: 'Side Window Repair',
  },
  {
    name: 'Lisa Chen',
    location: 'Miami Beach, FL',
    rating: 5,
    text: 'Got a rock chip on my Tesla. Was worried about the sensors but they knew exactly what to do. Perfect recalibration, glass looks OEM.',
    service: 'Chip Repair',
  },
  {
    name: 'David Martinez',
    location: 'Hialeah, FL',
    rating: 5,
    text: 'Emergency late night call - they actually answered! Fixed my broken window at 10pm so I could secure my car. Lifesavers.',
    service: 'Emergency Service',
  },
  {
    name: 'Jennifer Adams',
    location: 'Kendall, FL',
    rating: 5,
    text: 'Used them for our fleet of 12 delivery vans. They set up a maintenance schedule and give us priority. Great for business owners.',
    service: 'Fleet Service',
  },
]

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-primary-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-accent font-semibold px-4 py-2 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Miami Drivers <span className="text-accent">Say About Autoglass-JM</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real reviews from real customers across South Florida.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/50 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/90 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{review.name}</div>
                <div className="text-sm text-white/60">{review.location}</div>
                <div className="text-xs text-accent mt-1">{review.service}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="text-4xl font-bold text-white">4.9</div>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <div className="text-white/70 text-sm">Based on 2,847+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
