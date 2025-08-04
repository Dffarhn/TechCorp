import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, TrendingUp, Users, CheckCircle, Star, MessageCircle } from 'lucide-react'
  
const Hero = () => {
  // WhatsApp number for CTA
  const whatsappNumber = "+628992050001"
  
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in your premium IT solutions. Can we discuss my business requirements?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const trustIndicators = [
    { icon: <TrendingUp className="text-yellow-400" size={20} />, text: "99.9% Uptime" },
    { icon: <Users className="text-yellow-400" size={20} />, text: "10+ Clients" }
  ]

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #FFD700 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px'
        }} />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <Star className="text-yellow-400" size={18} />
              <span className="text-yellow-400 font-semibold text-sm tracking-wide">TRUSTED IT PARTNER SINCE 2019</span>
            </motion.div>

            {/* Main Headline - More Impactful */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight"
            >
              <span className="text-white block mb-2">Transform Your</span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent block mb-2">
                Business
              </span>
              <span className="text-gray-300 text-4xl md:text-5xl lg:text-6xl font-light block">
                with Enterprise IT
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Delivering world-class IT consulting, software development, and digital transformation solutions for forward-thinking enterprises.
              </p>
              
              {/* Services Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['IT Consulting', 'Software Development', 'System Integration', 'Cloud Solutions'].map((service, index) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                    className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm hover:border-yellow-400/50 transition-colors duration-300"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6"
            >
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-yellow-400/10 p-2 rounded-lg border border-yellow-400/20 group-hover:border-yellow-400/50 transition-colors duration-300">
                    {indicator.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {indicator.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MessageCircle size={24} />
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group border-2 border-yellow-400/50 text-yellow-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-yellow-400"
              >
                <span>Explore Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Premium Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 relative"
          >
            {/* Premium Dashboard Mockup */}
            <div className="relative">
              {/* Main Dashboard Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">enterprise-dashboard.pusatpelatihan.com</div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="text-green-400" size={16} />
                        <span className="text-green-400 text-sm font-semibold">System Status</span>
                      </div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="text-yellow-400" size={16} />
                        <span className="text-yellow-400 text-sm font-semibold">Performance</span>
                      </div>
                      <div className="text-2xl font-bold text-white">150%</div>
                      <div className="text-gray-400 text-xs">Efficiency</div>
                    </motion.div>
                  </div>

                  {/* Progress Bars */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Project Completion</span>
                        <span className="text-yellow-400 font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '94%' }}
                          transition={{ duration: 2, delay: 1.2 }}
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Client Satisfaction</span>
                        <span className="text-green-400 font-semibold">98%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '98%' }}
                          transition={{ duration: 2, delay: 1.4 }}
                          className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Live Activity */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm font-semibold">Live Activity</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-gray-400">
                        <span>• Database optimization completed</span>
                        <span>2 min ago</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>• Security scan passed</span>
                        <span>5 min ago</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>• New client onboarded</span>
                        <span>12 min ago</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl shadow-xl border border-yellow-300"
              >
                <Shield className="text-black" size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg border border-green-400"
              >
                <Award className="text-white" size={20} />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-8 bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full shadow-lg border border-blue-400"
              >
                <TrendingUp className="text-white" size={18} />
              </motion.div>

              {/* Premium Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-green-400/10 rounded-3xl blur-3xl -z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
