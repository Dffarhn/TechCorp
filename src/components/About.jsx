import React from 'react'
import { motion } from 'framer-motion'
import { Target, Shield, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="text-yellow-400" size={32} />,
      title: "Innovation",
      description: "Kami selalu menghadirkan solusi teknologi terdepan dan inovatif untuk memenuhi kebutuhan bisnis yang terus berkembang."
    },
    {
      icon: <Shield className="text-yellow-400" size={32} />,
      title: "Reliability",
      description: "Kepercayaan klien adalah prioritas utama. Kami berkomitmen memberikan layanan yang dapat diandalkan dengan kualitas terbaik."
    },
    {
      icon: <Target className="text-yellow-400" size={32} />,
      title: "Integrity",
      description: "Integritas dalam setiap aspek kerja kami, dari proses pengembangan hingga layanan purna jual yang profesional."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
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
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Visi & Misi Perusahaan
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-3">Visi</h4>
                <p className="text-gray-300 leading-relaxed">
                  Menjadi perusahaan teknologi terdepan yang memberikan solusi inovatif dan berkualitas tinggi untuk mendukung transformasi digital bisnis di Indonesia.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-yellow-400 mb-3">Misi</h4>
                <ul className="text-gray-300 leading-relaxed space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Mengembangkan solusi teknologi yang user-friendly dan efisien
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Memberikan layanan konsultasi IT yang komprehensif dan profesional
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Membangun kemitraan jangka panjang dengan klien melalui kepercayaan dan kualitas
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Berkontribusi pada kemajuan teknologi dan digitalisasi di Indonesia
                  </li>
                </ul>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Our Core Values
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "10+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-black/30 rounded-xl border border-gray-800"
            >
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
