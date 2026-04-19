import { Phone, MessageCircle, MapPin, Clock, Instagram, Mail, ChevronRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#areas' },
  ]

  const services = [
    'Windshield Replacement',
    'Chip Repair',
    'Side Window Repair',
    'Rear Glass Replacement',
    'Fleet Services',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="font-bold text-xl">
                AI <span className="text-accent">Dynamics</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Premium auto glass repair and replacement services across Miami and West Palm Beach. Mobile service, same-day repairs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/13055551234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+13055551234" className="text-white hover:text-accent transition-colors">
                    (305) 555-1234
                  </a>
                  <p className="text-gray-500 text-sm">24/7 Emergency Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="https://wa.me/13055551234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <p className="text-gray-500 text-sm">Fastest Response</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:quotes@autoglass-jm.com" className="text-white hover:text-accent transition-colors">
                    quotes@autoglass-jm.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Mobile Service</p>
                  <p className="text-gray-500 text-sm">Miami - West Palm Beach</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Mon - Sat: 7AM - 8PM</p>
                  <p className="text-white">Sunday: 9AM - 5PM</p>
                  <p className="text-gray-500 text-sm">24/7 Emergency Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Autoglass-JM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Insurance Info</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

