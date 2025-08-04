import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = ({ isModalOpen = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // WhatsApp number for CTA
  const whatsappNumber = "+6285878997733"
  
  const handleWhatsAppClick = () => {
    const message = "Hello! I found your website and I'm interested in your IT services. Can we discuss my requirements?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: isModalOpen ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 w-full overflow-hidden"
    >
      <div className="max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 w-full">
        <div className="flex justify-between items-center h-14 sm:h-16 w-full min-w-0">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 min-w-0"
          >
            <a href="#home" className="text-xl sm:text-2xl font-bold text-yellow-400 truncate">
              pusatpelatihan.com
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-6 flex-1 justify-center max-w-xs lg:max-w-md">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium whitespace-nowrap text-xs lg:text-sm"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Get In Touch Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block bg-yellow-400 text-black px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 text-xs lg:text-sm whitespace-nowrap flex-shrink-0"
          >
            Contact
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors p-1 touch-manipulation"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-3 border-t border-gray-800 w-full overflow-hidden"
          >
            <div className="flex flex-col space-y-3 w-full">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2 px-1 block w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 w-fit mt-2 touch-manipulation"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
