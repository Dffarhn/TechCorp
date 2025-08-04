import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Fauzi",
      position: "Traveler Muslim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      comment: "HalalMate sangat membantu saat traveling! Fitur scan produk untuk cek kehalalan makanan sangat praktis. AI recommendation-nya akurat banget, jadi gak perlu bingung cari makanan halal di tempat baru.",
      rating: 5,
      company: "Pengguna HalalMate"
    },
    {
      id: 2,
      name: "Zakie Irdana",
      position: "Pelanggan Save Bite",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      comment: "Aplikasi Save Bite keren banget! Bisa dapet makanan enak dengan harga murah sebelum restoran tutup. UI-nya simple dan mudah dipakai. Jadi hemat budget tapi tetap bisa makan enak!",
      rating: 5,
      company: "Pengguna Save Bite"
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "Kasir Toko",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      comment: "POS Kasir ini super cepat dan mudah dipakai! Transaksi jadi lebih efisien, laporan penjualan real-time membantu banget untuk tracking stok. Interface-nya user-friendly sekali.",
      rating: 5,
      company: "Pengguna POS Kasir"
    },
    {
      id: 4,
      name: "Diana Sari",
      position: "Fashion Enthusiast",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      comment: "FitOutfit ini game changer! Virtual try-on feature-nya keren banget, bisa liat gimana outfit bakal keliatan sebelum beli. Rekomendasi personal color-nya juga akurat, jadi gak salah pilih warna lagi.",
      rating: 5,
      company: "Pengguna FitOutfit"
    },
    {
      id: 5,
      name: "Rudi Hartono",
      position: "Pelanggan Laundry",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      comment: "La Laundry app sangat memudahkan! Bisa order laundry online, tracking progress real-time, dan notifikasi ketika cucian sudah selesai. Gak perlu antri lagi di tempat laundry!",
      rating: 5,
      company: "Pengguna La Laundry"
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
            Kepercayaan dan kepuasan klien adalah prioritas utama kami. Berikut testimoni dari klien yang telah menggunakan aplikasi yang kami kembangkan.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
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
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
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
            Bergabunglah dengan klien-klien kami yang telah merasakan manfaat aplikasi mobile dan web yang inovatif
          </p>
          <motion.a
            href="https://wa.me/628992050001?text=Halo! Saya tertarik untuk memulai project dengan Anda. Bisa diskusi lebih lanjut?"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
