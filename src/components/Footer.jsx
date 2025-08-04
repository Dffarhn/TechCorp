import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'

const Footer = () => {
  // WhatsApp number (same as in Contact component)
  const whatsappNumber = "+628992050001"
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsAppClick = (message = "") => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'IT Consulting', href: '#services' },
    { name: 'Software Development', href: '#services' },
    { name: 'System Integrations', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' }
  ]

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                pusatpelatihan.com
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Empowering businesses with innovative IT solutions. We specialize in IT consulting, software development, System Integrations, and ERP & CRM implementations.
              </p>
            </div>
            
            {/* WhatsApp Contact */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MessageCircle className="text-green-400 mr-3" size={16} />
                <span className="text-sm">{whatsappNumber}</span>
              </div>
              <motion.button
                onClick={() => handleWhatsAppClick("Hello! I found your website and I'm interested in your IT services.")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Get Instant Support
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Need immediate assistance? Chat with our IT experts on WhatsApp for instant support and consultation.
              </p>
            </div>

            {/* WhatsApp CTA Button */}
            <motion.button
              onClick={() => handleWhatsAppClick("Hi! I need help with my IT requirements. Can we discuss?")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-semibold hover:from-green-400 hover:to-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Start WhatsApp Chat
            </motion.button>

            {/* WhatsApp Features */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Instant Response</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>24/7 Available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} pusatpelatihan.com. All rights reserved. Built with ❤️ in Indonesia.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      </div>
    </footer>
  )
}

export default Footer
