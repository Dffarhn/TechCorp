import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Play, ArrowRight, X } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "HalalMate",
      description: "Aplikasi sistem rekomendasi makanan halal untuk traveler, dilengkapi fitur scan produk agar memastikan makanan oleh-oleh halal. Membantu menemukan makanan halal di seluruh dunia.",
      image: "/images/projects/halalmate/main.png",
      gallery: [
        "/images/projects/halalmate/main.png",
        "/images/projects/halalmate/gallery-1.png",
        "/images/projects/halalmate/gallery-2.png"
      ],
      category: "Mobile App",
      technologies: ["Flutter", "Golang", "Firebase", "OpenAI"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Save Bite",
      description: "Aplikasi untuk membantu restoran menjual stok makanan yang tersisa dengan flash sale sebelum toko tutup, agar mengurangi food waste dan tetap mendapatkan profit.",
      image: "/images/projects/savebite/main.jpg",
      gallery: [
        "/images/projects/savebite/main.jpg",
        "/images/projects/savebite/gallery-1.jpg",
        "/images/projects/savebite/gallery-2.jpg"
      ],
      category: "Mobile App",
      technologies: ["Kotlin", "Express.js", "Firebase"],
      status: "Completed"
    },
    {
      id: 3,
      title: "POS Kasir",
      description: "Aplikasi kasir yang mengutamakan kecepatan transaksi dan kemudahan penggunaan, dilengkapi laporan penjualan dan statistik untuk analisis bisnis.",
      image: "/images/projects/poskasir/main.jpg",
      gallery: [
        "/images/projects/poskasir/main.jpg",
        "/images/projects/poskasir/gallery-1.jpg",
        "/images/projects/poskasir/gallery-2.jpg"
      ],
      category: "Business Solutions",
      technologies: ["React", "Node.js", "MySQL"],
      status: "Completed"
    },
    {
      id: 4,
      title: "FitOutfit",
      description: "Asisten fashion berbasis AI yang membantu memilih outfit sesuai bentuk tubuh, tone kulit, dan jenis acara. Fitur termasuk virtual try-on, wardrobe assistant, dan rekomendasi personal color.",
      image: "/images/projects/fitoutfit/main.png",
      gallery: [
        "/images/projects/fitoutfit/main.png",
        "/images/projects/fitoutfit/gallery1.png",
        "/images/projects/fitoutfit/gallery2.png"
      ],
      category: "AI Solutions",
      technologies: ["Python", "TensorFlow", "React", "OpenAI"],
      status: "Completed"
    },
    {
      id: 5,
      title: "La Laundry",
      description: "Aplikasi manajemen laundry berbasis mobile untuk pengelolaan order dan customer, dibangun dengan React Native dan Appwrite sebagai backend.",
      image: "/images/projects/la-laundry/main.png",
      gallery: [
        "/images/projects/la-laundry/main.png",
        "/images/projects/la-laundry/gallery-1.png",
        "/images/projects/la-laundry/gallery-2.png"
      ],
      category: "Mobile App",
      technologies: ["React Native", "Appwrite"],
      status: "Completed"
    }
  ]


  const featuredProject = projects.find(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Showcase</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Jelajahi portofolio visual kami yang menampilkan inovasi teknologi dalam setiap detail
          </p>
        </motion.div>

        {/* Featured Project - Mobile Optimized */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <div className="relative group cursor-pointer" onClick={() => setSelectedProject(featuredProject)}>
              {/* Main Featured Image */}
              <div className="relative h-56 xs:h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm flex items-center shadow-lg">
                    <Play className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">FEATURED PROJECT</span>
                    <span className="sm:hidden">FEATURED</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                  <div className="bg-black/50 backdrop-blur-sm text-yellow-400 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-yellow-400/30">
                    {featuredProject.category}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 md:mb-6 max-w-2xl leading-relaxed line-clamp-3 sm:line-clamp-2 md:line-clamp-none">
                      {featuredProject.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                      {featuredProject.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.technologies.length > 3 && (
                        <span className="bg-yellow-400/20 backdrop-blur-sm text-yellow-400 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-yellow-400/30">
                          +{featuredProject.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25 flex items-center text-sm md:text-base"
                    >
                      <span className="hidden sm:inline">Explore Project</span>
                      <span className="sm:hidden">Explore</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Image Gallery Preview - Desktop Only */}
              <div className="absolute -bottom-6 left-8 right-8 hidden xl:flex gap-4">
                {featuredProject.gallery.slice(1, 4).map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex-1 h-20 rounded-xl overflow-hidden border-2 border-yellow-400/30 hover:border-yellow-400 transition-colors cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${featuredProject.title} preview ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mobile-Optimized Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Main Project Image */}
              <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <div className="bg-black/50 backdrop-blur-sm text-yellow-400 px-2 py-1 md:px-3 md:py-2 rounded-full text-xs font-semibold border border-yellow-400/30">
                    {project.category}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <div className={`px-2 py-1 md:px-3 md:py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Mobile Touch Overlay - Better mobile interaction */}
                <div className="absolute inset-0 bg-black/10 sm:bg-black/20 md:bg-transparent md:opacity-0 md:group-hover:opacity-100 md:group-hover:bg-black/60 transition-opacity duration-300" />

                {/* Hover Overlay with Actions - Desktop Only */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm items-center justify-center hidden md:flex"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 10 }}
                        className="flex space-x-3"
                      >
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
                        >
                          <Eye size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (0.1 * index) }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3 sm:line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-yellow-400/20 backdrop-blur-sm text-yellow-400 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium border border-yellow-400/30">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Explore Button */}
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center text-yellow-400 font-semibold text-xs md:text-sm group-hover:text-yellow-300 transition-colors"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />
              </div>

              {/* Image Gallery Thumbnails - Desktop Only */}
              <div className="hidden lg:flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.gallery.slice(1, 4).map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * imgIndex }}
                    className="flex-1 h-12 rounded-lg overflow-hidden border border-yellow-400/30 hover:border-yellow-400 transition-colors cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${project.title} preview ${imgIndex + 2}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Floating Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/5 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Image Gallery Modal - Mobile Optimized */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <div className="min-h-full flex items-center justify-center p-3 sm:p-4">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 10 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-gradient-to-br from-black via-gray-900 to-black rounded-xl sm:rounded-2xl lg:rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-yellow-400/30 shadow-2xl shadow-yellow-400/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header with Large Image */}
                  <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                    {/* Close Button - Mobile Optimized */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-black/90 transition-colors z-20 touch-manipulation shadow-lg"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                      <div className="text-yellow-400 text-xs sm:text-sm font-semibold mb-1">
                        {selectedProject.category}
                      </div>
                      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>

                  {/* Modal Content - Scrollable */}
                  <div className="overflow-y-auto max-h-[calc(90vh-10rem)] sm:max-h-[calc(90vh-12rem)]">
                    <div className="p-3 sm:p-4 lg:p-6">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                        Project Gallery
                      </h3>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {selectedProject.gallery.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-colors touch-manipulation"
                        >
                          <div className="aspect-video">
                            <img
                              src={img}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/20 sm:bg-black/30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-yellow-400 text-black p-1.5 sm:p-2 rounded-full"
                            >
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                            </motion.div>
                          </div>
                      </motion.div>
                    ))}
                      </div>

                      {/* Project Details - Mobile Optimized */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* About Section */}
                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">About This Project</h4>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4">
                            {selectedProject.description}
                          </p>
                        </div>
                        
                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-white mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-yellow-400/10 text-yellow-400 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs border border-yellow-400/30 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2 sm:space-y-3">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-2.5 sm:py-3 px-4 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25 flex items-center justify-center text-sm touch-manipulation"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live Demo
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full border-2 border-yellow-400 text-yellow-400 py-2.5 sm:py-3 px-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center text-sm touch-manipulation"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Source Code
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-10 py-5 rounded-full font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 text-lg"
          >
            Explore More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
