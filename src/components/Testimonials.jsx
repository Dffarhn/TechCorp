import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO, PT. Digital Nusantara",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      comment: "TechCorp telah membantu kami mentransformasi bisnis dengan solusi e-commerce yang luar biasa. Tim mereka sangat profesional dan responsif terhadap kebutuhan kami.",
      rating: 5,
      company: "PT. Digital Nusantara"
    },
    {
      id: 2,
      name: "Sari Wijaya",
      position: "CTO, Fintech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      comment: "Aplikasi mobile banking yang dikembangkan TechCorp sangat memukau. Keamanan tinggi, performa cepat, dan UI/UX yang sangat user-friendly. Highly recommended!",
      rating: 5,
      company: "Fintech Solutions"
    },
    {
      id: 3,
      name: "Dr. Ahmad Rahman",
      position: "Direktur, RS. Sehat Sentosa",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      comment: "Sistem manajemen rumah sakit dari TechCorp sangat membantu operasional harian kami. Integrasi yang seamless dan support yang excellent. Terima kasih TechCorp!",
      rating: 5,
      company: "RS. Sehat Sentosa"
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #FFD700 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami. Berikut testimoni dari beberapa klien yang telah bekerja sama dengan kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 h-full relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (0.1 * index) }}
                  viewport={{ once: true }}
                  className="absolute top-6 right-6 text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors duration-300"
                >
                  <Quote size={40} />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + (0.1 * i) }}
                      viewport={{ once: true }}
                    >
                      <Star className="text-yellow-400 fill-current" size={20} />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-300 leading-relaxed mb-6 relative z-10"
                >
                  "{testimonial.comment}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center relative z-10"
                >
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/30 group-hover:border-yellow-400 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300" />
                  </div>

                  {/* Client Details */}
                  <div className="ml-4">
                    <h4 className="text-white font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-yellow-400 text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent group-hover:via-yellow-400/50 transition-colors duration-500" />
              </div>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Bergabunglah dengan klien-klien kami yang telah merasakan manfaat solusi teknologi terbaik
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
