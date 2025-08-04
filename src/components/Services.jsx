import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Cloud, Code, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Users className="text-yellow-400" size={40} />,
      title: "IT Consulting",
      description: "Strategic IT consulting services to help your business leverage technology for growth, efficiency, and competitive advantage in the digital landscape.",
      features: ["Digital Strategy", "Technology Assessment", "IT Roadmap", "Process Optimization"]
    },
    {
      icon: <Code className="text-yellow-400" size={40} />,
      title: "Software Development",
      description: "Custom software development solutions tailored to your business needs, from web applications to enterprise systems using cutting-edge technologies.",
      features: ["Custom Applications", "Web Development", "Mobile Apps", "API Development"]
    },
    {
      icon: <Server className="text-yellow-400" size={40} />,
      title: "System Integration",
      description: "Integrasi sistem yang seamless untuk menghubungkan berbagai platform dan aplikasi bisnis Anda menjadi satu ekosistem yang terpadu.",
      features: ["API Integration", "Database Sync", "Real-time Data", "Scalable Architecture"]
    },
    {
      icon: <Cloud className="text-yellow-400" size={40} />,
      title: "Cloud Solutions",
      description: "Solusi cloud computing yang aman dan scalable untuk mengoptimalkan infrastruktur IT perusahaan dengan efisiensi maksimal.",
      features: ["AWS & Azure", "Auto Scaling", "High Availability", "Cost Optimization"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-black">
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan teknologi komprehensif untuk membantu bisnis Anda berkembang di era digital
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 h-full relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-yellow-400/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-yellow-400/20 group-hover:border-yellow-400/50 transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400/20 rounded-full border border-yellow-400/40"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-8 text-lg">
            Tertarik dengan layanan kami? Mari diskusikan kebutuhan proyek Anda
          </p>
          <motion.a
            href="https://wa.me/628992050001?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Anda%20dan%20ingin%20konsultasi%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            Get Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
