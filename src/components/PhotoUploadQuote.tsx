import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { Upload, X, Camera, CheckCircle, ChevronRight, ChevronLeft, Car, Calendar, User, Phone, Mail, MapPin, FileText } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

interface PhotoUploadQuoteProps {
  isOpen: boolean
  onClose: () => void
}

const PhotoUploadQuote = ({ isOpen, onClose }: PhotoUploadQuoteProps) => {
  const { language } = useI18n()
  const [step, setStep] = useState(1)
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [formData, setFormData] = useState({
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    damageType: '',
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    preferredDate: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Simulate photo upload
    const newPhotos = [...uploadedPhotos, `photo-${Date.now()}`]
    setUploadedPhotos(newPhotos)
  }, [uploadedPhotos])

  const handleFileSelect = useCallback(() => {
    const newPhotos = [...uploadedPhotos, `photo-${Date.now()}`]
    setUploadedPhotos(newPhotos)
  }, [uploadedPhotos])

  const removePhoto = (index: number) => {
    setUploadedPhotos(uploadedPhotos.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setStep(1)
      setUploadedPhotos([])
      setFormData({
        vehicleYear: '',
        vehicleMake: '',
        vehicleModel: '',
        damageType: '',
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        preferredDate: '',
        notes: '',
      })
    }, 3000)
  }

  const damageTypes = language === 'es' ? [
    { id: 'chip', label: 'Astilla/Rajadura', icon: '💥' },
    { id: 'crack', label: 'Grieta', icon: '📏' },
    { id: 'shattered', label: 'Destruido', icon: '💔' },
    { id: 'unknown', label: 'No estoy seguro', icon: '❓' },
  ] : [
    { id: 'chip', label: 'Chip/Crack', icon: '💥' },
    { id: 'crack', label: 'Long Crack', icon: '📏' },
    { id: 'shattered', label: 'Shattered', icon: '💔' },
    { id: 'unknown', label: 'Not Sure', icon: '❓' },
  ]

  const totalSteps = 4

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border-amber-500/20"
        >
          {/* Success State */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {language === 'es' ? '¡Cotización Enviada!' : 'Quote Submitted!'}
              </h3>
              <p className="text-slate-400 mb-4">
                {language === 'es' 
                  ? 'Le contactaremos en 15 minutos con su precio garantizado.'
                  : 'We\'ll contact you within 15 minutes with your guaranteed price.'}
              </p>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="sticky top-0 z-10 glass-dark border-b border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {language === 'es' ? 'Cotización con Fotos' : 'Photo Quote'}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {language === 'es' ? 'Paso' : 'Step'} {step} {language === 'es' ? 'de' : 'of'} {totalSteps}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-2 mt-4">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${
                        i + 1 <= step ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Step 1: Photo Upload */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-8 h-8 text-amber-500" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {language === 'es' ? 'Suba Fotos del Daño' : 'Upload Damage Photos'}
                      </h4>
                      <p className="text-slate-400">
                        {language === 'es' 
                          ? 'Las fotos nos ayudan a darle una cotización más precisa'
                          : 'Photos help us give you a more accurate quote'}
                      </p>
                    </div>

                    {/* Upload Area */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={handleFileSelect}
                      className={`relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                        isDragging
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-slate-600 hover:border-amber-500/50 hover:bg-white/5'
                      }`}
                    >
                      <Upload className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                        isDragging ? 'text-amber-500' : 'text-slate-500'
                      }`} />
                      <p className="text-white font-medium mb-2">
                        {language === 'es' ? 'Arrastre fotos aquí' : 'Drag photos here'}
                      </p>
                      <p className="text-sm text-slate-400">
                        {language === 'es' ? 'o haga clic para seleccionar' : 'or click to select'}
                      </p>
                    </div>

                    {/* Uploaded Photos */}
                    {uploadedPhotos.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {uploadedPhotos.map((photo, index) => (
                          <motion.div
                            key={photo}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square rounded-xl bg-slate-800 overflow-hidden group"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                              <Camera className="w-8 h-8 text-slate-600" />
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                removePhoto(index)
                              }}
                              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Damage Type */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {language === 'es' ? 'Tipo de Daño' : 'Damage Type'}
                      </h4>
                      <p className="text-slate-400">
                        {language === 'es' ? 'Seleccione el tipo de daño en su vidrio' : 'Select the type of damage to your glass'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {damageTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setFormData({ ...formData, damageType: type.id })}
                          className={`p-4 rounded-2xl border-2 transition-all ${
                            formData.damageType === type.id
                              ? 'border-amber-500 bg-amber-500/20'
                              : 'border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          <div className="text-3xl mb-2">{type.icon}</div>
                          <div className="text-white font-medium text-sm">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Vehicle Info */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                        <Car className="w-8 h-8 text-blue-500" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {language === 'es' ? 'Información del Vehículo' : 'Vehicle Information'}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-400 mb-2">
                          {language === 'es' ? 'Año' : 'Year'}
                        </label>
                        <select
                          value={formData.vehicleYear}
                          onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                        >
                          <option value="">{language === 'es' ? 'Seleccionar' : 'Select'}</option>
                          {Array.from({ length: 25 }, (_, i) => 2026 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-2">
                          {language === 'es' ? 'Marca' : 'Make'}
                        </label>
                        <select
                          value={formData.vehicleMake}
                          onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                        >
                          <option value="">{language === 'es' ? 'Seleccionar' : 'Select'}</option>
                          {['Acura', 'Audi', 'BMW', 'Chevrolet', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Kia', 'Lexus', 'Mercedes', 'Nissan', 'Tesla', 'Toyota', 'Volkswagen'].map(make => (
                            <option key={make} value={make}>{make}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        {language === 'es' ? 'Modelo' : 'Model'}
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        placeholder={language === 'es' ? 'ej. Camry, F-150, Model 3' : 'e.g., Camry, F-150, Model 3'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Info */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                        <User className="w-8 h-8 text-purple-500" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-400 mb-2">
                          <User className="w-4 h-4 inline mr-1" />
                          {language === 'es' ? 'Nombre' : 'Name'} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          {language === 'es' ? 'Teléfono' : 'Phone'} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(305) 984-0456"
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-400 mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          {language === 'es' ? 'Email' : 'Email'}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-400 mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {language === 'es' ? 'Código ZIP' : 'ZIP Code'}
                        </label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {language === 'es' ? 'Fecha Preferida' : 'Preferred Date'}
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        <FileText className="w-4 h-4 inline mr-1" />
                        {language === 'es' ? 'Notas Adicionales' : 'Additional Notes'}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder={language === 'es' ? 'Cualquier información adicional sobre el daño...' : 'Any additional information about the damage...'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8 pt-6 border-t border-white/10">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-white/5 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      {language === 'es' ? 'Atrás' : 'Back'}
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (step < totalSteps) {
                        setStep(step + 1)
                      } else {
                        handleSubmit()
                      }
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold hover:from-amber-400 hover:to-amber-500 transition-all"
                  >
                    {step === totalSteps 
                      ? (language === 'es' ? 'Enviar Cotización' : 'Submit Quote')
                      : (language === 'es' ? 'Continuar' : 'Continue')
                    }
                    {step < totalSteps && <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PhotoUploadQuote