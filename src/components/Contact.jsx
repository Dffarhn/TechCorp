import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Clock, CheckCircle, Users } from 'lucide-react'

const Contact = () => {
  // WhatsApp number (replace with your actual WhatsApp number)
  const whatsappNumber = "+6285878997733" // Format: +62 for Indonesia
  
  const handleWhatsAppClick = (message = "") => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const whatsappFeatures = [
    {
      icon: <Clock className="text-yellow-400" size={32} />,
      title: "24/7 Available",
      description: "We're available round the clock to assist with your IT needs"
    },
    {
      icon: <Users className="text-yellow-400" size={32} />,
      title: "Personal Service",
      description: "One-on-one consultation tailored to your business requirements"
    }
  ]

  const quickMessages = [
    "Hi! I'm interested in your IT Consulting services. Can we discuss my project?",
    "Hello! I need help with Software Development. What's your process?",
    "Hi there! I'd like to know more about your System Integrations.",
    "Hello! Can you help me with ERP & CRM implementation?"
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative IT solutions? Let's discuss your project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* WhatsApp CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="bg-green-500/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                <MessageCircle className="text-green-400" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Chat with Us on WhatsApp
              </h3>
              <p className="text-gray-300 mb-8">
                Get instant responses and personalized IT solutions. Click the button below to start chatting with our experts!
              </p>
            </div>

            {/* Main WhatsApp CTA Button */}
            <motion.button
              onClick={() => handleWhatsAppClick("Hello! I'm interested in your IT services. Can we discuss my requirements?")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-6 rounded-full font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Start WhatsApp Chat
            </motion.button>

            {/* Quick Message Buttons */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-center mb-4">Or choose a quick message:</h4>
              <div className="grid gap-3">
                {quickMessages.map((message, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleWhatsAppClick(message)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-gray-800 rounded-lg text-left text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300 border border-gray-700 hover:border-green-500/50 text-sm"
                  >
                    {message}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose WhatsApp?
              </h3>
              <p className="text-gray-300 mb-8">
                Experience the fastest and most convenient way to get IT support and consultation.
              </p>
            </div>

            {/* WhatsApp Features Grid */}
            <div className="space-y-6">
              {whatsappFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 group-hover:border-green-500/50 transition-colors duration-300 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors duration-300 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Number Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-green-500/10 rounded-xl border border-green-500/20 text-center"
            >
              <h4 className="text-white font-semibold mb-2">Our WhatsApp Number</h4>
              <p className="text-green-400 text-xl font-bold mb-4">{whatsappNumber}</p>
              <p className="text-gray-300 text-sm">
                Save our number and start chatting anytime!
              </p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-black/50 rounded-xl border border-gray-800"
            >
              <h4 className="text-white font-semibold mb-4">Response Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-green-400">Instant Response</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-green-400">Within 1 Hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-yellow-400">Within 2 Hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
