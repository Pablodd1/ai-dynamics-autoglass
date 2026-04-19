import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, MessageCircle } from 'lucide-react'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    carModel: '',
    carYear: '',
    serviceType: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        carMake: '',
        carModel: '',
        carYear: '',
        serviceType: '',
        message: '',
      })
    }, 5000)
  }

  const serviceOptions = [
    'Windshield Replacement',
    'Chip/Crack Repair',
    'Side Window Repair',
    'Rear Glass Replacement',
    'Not Sure - Need Diagnosis',
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/10 text-accent font-semibold px-4 py-2 rounded-full mb-4">
            Get a Quote
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fix Your Glass?
          </h2>
          <p className="text-xl text-white/70">
            Fill out the form or WhatsApp us for an instant quote. Response in under 5 minutes.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {isSubmitted ? (
            <div className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
              <p className="text-gray-600 mb-6">
                We'll get back to you within 5 minutes. Check your phone for a WhatsApp message from us.
              </p>
              <a
                href="https://wa.me/13055551234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Or message us directly on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="(305) 555-1234"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Car Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Car Make *
                  </label>
                  <input
                    type="text"
                    name="carMake"
                    required
                    value={formData.carMake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Toyota, Honda, BMW..."
                  />
                </div>

                {/* Car Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Car Model *
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    required
                    value={formData.carModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Camry, Civic, X5..."
                  />
                </div>

                {/* Car Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Car Year *
                  </label>
                  <input
                    type="number"
                    name="carYear"
                    required
                    min="1990"
                    max="2026"
                    value={formData.carYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="2020"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Describe the damage, preferred time, or any special requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                Get My Free Quote
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                By submitting, you agree to receive SMS/WhatsApp messages about your quote.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteForm
