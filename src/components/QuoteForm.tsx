import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react'

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
    contactMethod: 'whatsapp', // Default to WhatsApp
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
        contactMethod: 'whatsapp',
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
            Fill out the form or contact us directly. Multiple ways to reach us!
          </p>
        </motion.div>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <a
            href="https://wa.me/13059840456"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-400 text-white text-center py-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="tel:+13055551234"
            className="bg-white hover:bg-gray-50 text-primary-900 text-center py-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2"
          >
            <Phone className="w-6 h-6" />
            <span className="text-sm">Call</span>
          </a>
          <a
            href="mailto:quotes@autoglass-jm.com"
            className="bg-accent hover:bg-accent/90 text-white text-center py-4 rounded-xl font-semibold transition-all flex flex-col items-center gap-2"
          >
            <Mail className="w-6 h-6" />
            <span className="text-sm">Email</span>
          </a>
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
                We will get back to you within 5 minutes via your preferred contact method.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://wa.me/13055551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Or WhatsApp us directly
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {/* Preferred Contact Method */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred Contact Method *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                    { value: 'phone', label: 'Phone Call', icon: Phone },
                    { value: 'email', label: 'Email', icon: Mail },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`cursor-pointer border-2 rounded-xl p-4 text-center transition-all ${
                        formData.contactMethod === method.value
                          ? 'border-accent bg-accent/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.value}
                        checked={formData.contactMethod === method.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <method.icon className={`w-6 h-6 mx-auto mb-2 ${
                        formData.contactMethod === method.value ? 'text-accent' : 'text-gray-400'
                      }`} />
                      <span className="text-sm font-medium">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

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
                By submitting, you agree to be contacted via {formData.contactMethod} about your quote.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default QuoteForm

