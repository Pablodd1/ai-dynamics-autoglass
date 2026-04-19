import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const QuoteForm = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
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
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
    { value: 'windshield', label: t('form.serviceWindshield') },
    { value: 'chip', label: t('form.serviceChip') },
    { value: 'side', label: t('form.serviceSide') },
    { value: 'rear', label: t('form.serviceRear') },
    { value: 'not_sure', label: t('form.serviceNotSure') },
  ]

  const contactOptions = [
    { value: 'whatsapp', label: t('form.contactWhatsApp'), icon: MessageCircle, color: 'green' },
    { value: 'phone', label: t('form.contactPhone'), icon: Phone, color: 'primary' },
    { value: 'email', label: t('form.contactEmail'), icon: Mail, color: 'accent' },
  ]

  const getContactMethodName = (method: string) => {
    switch (method) {
      case 'whatsapp': return t('form.success.whatsapp')
      case 'phone': return t('form.success.phone')
      case 'email': return t('form.success.email')
      default: return method
    }
  }

  return (
    <section id="quote" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full mb-4">
            {t('form.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('form.title')}{' '}
            <span className="text-gradient">{t('form.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('form.subtitle')}
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border-2 border-green-200 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('form.success.title')}</h3>
            <p className="text-gray-600 text-lg">
              {t('form.success.message').replace('{method}', getContactMethodName(formData.contactMethod))}
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('form.namePlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('form.phonePlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              {/* Car Make */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.carMake')}</label>
                <input
                  type="text"
                  name="carMake"
                  value={formData.carMake}
                  onChange={handleChange}
                  placeholder={t('form.carMakePlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              {/* Car Model */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.carModel')}</label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  placeholder={t('form.carModelPlaceholder')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              {/* Car Year */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.carYear')}</label>
                <input
                  type="number"
                  name="carYear"
                  value={formData.carYear}
                  onChange={handleChange}
                  placeholder={t('form.carYearPlaceholder')}
                  min="1980"
                  max="2030"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.serviceType')}</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              >
                <option value="">{t('form.serviceSelect')}</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Contact Method */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">{t('form.contactMethod')}</label>
              <div className="grid grid-cols-3 gap-4">
                {contactOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.contactMethod === option.value
                        ? option.color === 'green' 
                          ? 'border-green-500 bg-green-50' 
                          : option.color === 'primary'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-accent bg-accent/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="contactMethod"
                      value={option.value}
                      checked={formData.contactMethod === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <option.icon className={`w-5 h-5 ${
                      option.color === 'green' 
                        ? 'text-green-500' 
                        : option.color === 'primary'
                          ? 'text-primary-500'
                          : 'text-accent'
                    }`} />
                    <span className="text-sm font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t('form.message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form.messagePlaceholder')}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {t('form.submit')}
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default QuoteForm
