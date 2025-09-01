import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Smartphone,
  Cog,
  Laptop,
  Users,
  Zap,
  Rocket,
  Target,
  BarChart,
  Layers,
  Database,
  Cloud,
  Lock,
  Gauge,
  Handshake,
  DollarSign,
  TrendingUp,
  Building,
} from "lucide-react"
import GrowthChart from "./growth-chart"

const services = [
  {
    id: "website",
    title: "NOTFUN LTD",
    subtitle: "About Us",
    description:
      "NOTFUN LTD is a Cyprus-registered private investment holding company established in 2025. The company was formed to manage ownership structures, oversee dividend distribution, and support the growth of high-potential digital ventures across interactive entertainment and emerging technology sectors. Our role is to provide a flexible legal and financial framework for managing equity positions, ensuring capital efficiency, and reinvesting profits into innovative digital assets and intellectual property.",
    icon: <Globe className="w-8 h-8" />,
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Cyprus-registered holding company" },
      { icon: <Handshake className="w-5 h-5" />, text: "Ownership structure management" },
      { icon: <Target className="w-5 h-5" />, text: "Digital venture investments" },
      { icon: <Gauge className="w-5 h-5" />, text: "Capital efficiency optimization" },
    ],
    stats: [
      { label: "Founded", value: "2025" },
      { label: "Jurisdiction", value: "Cyprus" },
      { label: "Company Type", value: "Holding" },
    ],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
    accentColor: "text-blue-400",
  },
  {
    id: "mobile",
    title: "Our Portfolio",
    subtitle: "Portfolio",
    description:
      "NOTFUN LTD currently holds a majority equity stake in: NewFolderGames Ltd - A Cyprus-based interactive entertainment studio specializing in VR experiences and mobile gaming products. Since its founding in 2019, the company has developed a strong reputation for creativity, technical execution, and delivering immersive, commercially scalable products to a global audience. NewFolderGames actively develops original intellectual property and publishes titles for platforms including Meta Quest, iOS, and Android.",
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      { icon: <Users className="w-5 h-5" />, text: "Cyprus-based entertainment studio" },
      { icon: <Zap className="w-5 h-5" />, text: "VR experiences & mobile gaming" },
      { icon: <Lock className="w-5 h-5" />, text: "Original intellectual property" },
      { icon: <BarChart className="w-5 h-5" />, text: "Meta Quest, iOS, Android platforms" },
    ],
    stats: [
      { label: "Founded", value: "2019" },
      { label: "Platforms", value: "3+" },
      { label: "Specialization", value: "VR/Mobile" },
    ],
    gradient: "from-purple-500 via-pink-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-pink-400/10 to-purple-600/20",
    accentColor: "text-purple-400",
  },
  {
    id: "digital",
    title: "Our Mission",
    subtitle: "Mission & Values",
    description:
      "To deliver long-term shareholder value by maintaining lean corporate structure, strategic control over dividend flows, and active investment in cutting-edge entertainment technology. What We Value:",
    icon: <Laptop className="w-8 h-8" />,
    features: [
      { icon: <Cog className="w-5 h-5" />, text: "Technological innovation and user experience" },
      { icon: <Database className="w-5 h-5" />, text: "Scalable, IP-driven business models" },
      { icon: <Cloud className="w-5 h-5" />, text: "Transparent and compliant corporate governance" },
      { icon: <Layers className="w-5 h-5" />, text: "Long-term capital reinvestment strategies" },
    ],
    stats: [
      { label: "Approach", value: "Long-term" },
      { label: "Focus", value: "Innovation" },
      { label: "Governance", value: "Transparent" },
    ],
    gradient: "from-emerald-500 via-teal-400 to-emerald-600",
    bgGradient: "from-emerald-500/20 via-teal-400/10 to-emerald-600/20",
    accentColor: "text-emerald-400",
  },
]

const WebsiteUIGraphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 p-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/5" />
    
    {/* Header */}
    <div className="relative z-10 flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
        <span className="text-sm font-semibold text-blue-400">NOTFUN DASHBOARD</span>
      </div>
      <div className="text-xs text-gray-400">Live Data</div>
    </div>

    {/* Main Content Grid */}
    <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
      {/* Company Structure Card */}
      <motion.div
        className="bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-lg p-3 border border-blue-400/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-2 mb-2">
          <Building className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium text-blue-300">Structure</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">Type:</span>
            <span className="text-xs font-semibold text-white">Holding</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">Jurisdiction:</span>
            <span className="text-xs font-semibold text-white">Cyprus</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">Founded:</span>
            <span className="text-xs font-semibold text-white">2025</span>
          </div>
        </div>
      </motion.div>

      {/* Investment Focus Card */}
      <motion.div
        className="bg-gradient-to-br from-purple-500/20 to-pink-400/10 rounded-lg p-3 border border-purple-400/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-2 mb-2">
          <Target className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-medium text-purple-300">Focus</span>
        </div>
        <div className="space-y-1">
          <div className="text-xs text-gray-300">Interactive Entertainment</div>
          <div className="text-xs text-gray-300">Emerging Technology</div>
          <div className="text-xs text-gray-300">Digital Assets</div>
        </div>
      </motion.div>
    </div>

    {/* Portfolio Performance Chart */}
    <motion.div
      className="relative z-10 bg-gradient-to-br from-emerald-500/20 to-teal-400/10 rounded-lg p-3 border border-emerald-400/30 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center space-x-2 mb-3">
        <TrendingUp className="w-4 h-4 text-emerald-400" />
        <span className="text-xs font-medium text-emerald-300">Portfolio Growth</span>
      </div>
      
      {/* Simple Chart Bars */}
      <div className="flex items-end space-x-1 h-16">
        <div className="flex-1 bg-gradient-to-t from-emerald-400/60 to-emerald-600/40 rounded-t-sm" style={{ height: '40%' }} />
        <div className="flex-1 bg-gradient-to-t from-emerald-400/60 to-emerald-600/40 rounded-t-sm" style={{ height: '60%' }} />
        <div className="flex-1 bg-gradient-to-t from-emerald-400/60 to-emerald-600/40 rounded-t-sm" style={{ height: '80%' }} />
        <div className="flex-1 bg-gradient-to-t from-emerald-400/60 to-emerald-600/40 rounded-t-sm" style={{ height: '100%' }} />
        <div className="flex-1 bg-gradient-to-t from-emerald-400/60 to-emerald-600/40 rounded-t-sm" style={{ height: '120%' }} />
      </div>
      
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
        <span>Q5</span>
      </div>
    </motion.div>

    {/* Key Metrics Row */}
    <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
      <motion.div
        className="bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-lg p-2 text-center border border-blue-400/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-lg font-bold text-blue-400">100%</div>
        <div className="text-xs text-gray-400">Equity Control</div>
      </motion.div>
      
      <motion.div
        className="bg-gradient-to-br from-purple-500/20 to-pink-400/10 rounded-lg p-2 text-center border border-purple-400/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-lg font-bold text-purple-400">3+</div>
        <div className="text-xs text-gray-400">Sectors</div>
      </motion.div>
      
      <motion.div
        className="bg-gradient-to-br from-emerald-500/20 to-teal-400/10 rounded-lg p-2 text-center border border-emerald-400/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-lg font-bold text-emerald-400">∞</div>
        <div className="text-xs text-gray-400">Growth Potential</div>
      </motion.div>
    </div>

    {/* Floating Investment Cards - Horizontal Layout */}
    <div className="absolute bottom-4 left-4 right-4">
      <div className="flex space-x-3">
        <motion.div
          className="bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-lg p-3 border border-blue-400/40 backdrop-blur-sm shadow-lg flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -2, 0],
            rotateY: [0, 2, 0],
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotateY: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          style={{
            boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            transform: "perspective(1000px)",
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-blue-400">Dividend Flow</div>
              <div className="text-xs text-gray-300">Active Management</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-lg p-3 border border-purple-400/40 backdrop-blur-sm shadow-lg flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -2, 0],
            rotateY: [0, -2, 0],
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            y: { duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotateY: { duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          style={{
            boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            transform: "perspective(1000px)",
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-purple-400">Innovation Hub</div>
              <div className="text-xs text-gray-300">Tech Ventures</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-emerald-500/20 to-teal-400/20 rounded-lg p-3 border border-emerald-400/40 backdrop-blur-sm shadow-lg flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -2, 0],
            rotateY: [0, 2, 0],
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            y: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            rotateY: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          style={{
            boxShadow: "0 8px 32px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            transform: "perspective(1000px)",
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <Gauge className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-emerald-400">Capital Efficiency</div>
              <div className="text-xs text-gray-300">Optimized Returns</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
        animate={{
          y: [0, -12, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  </div>
)

const MobileUIGraphic = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-700 p-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-400/5" />

    <div className="relative z-10 h-full flex items-center justify-center">
      {/* VR Headset - Center */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-24 h-16 sm:w-32 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl relative shadow-2xl">
          {/* VR Headset Body */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
            {/* Lenses */}
            <div className="absolute top-2 sm:top-3 left-3 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80 shadow-lg">
              <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            </div>
            <div className="absolute top-2 sm:top-3 right-3 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80 shadow-lg">
              <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            </div>

            {/* Center Bridge */}
            <div className="absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-3 h-1 sm:w-4 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Head Strap */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-1 sm:w-4 sm:h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-l-full"></div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-1 sm:w-4 sm:h-1 bg-gradient-to-l from-pink-500 to-transparent rounded-r-full"></div>
        </div>
      </motion.div>

      {/* Multiple Platforms - Right Side */}
      <motion.div
        className="absolute right-1 top-[15%] sm:right-2 bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-purple-400/40 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, y: -20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateY: [0, 0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        style={{
          boxShadow: "0 8px 32px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs xl:text-sm font-bold text-purple-400 mb-1">MULTIPLE PLATFORMS</div>
            <div className="text-xs xl:text-sm text-gray-300">iOS, Android, PC, Switch</div>
          </div>
          <div className="block sm:hidden">
            <div className="text-xs font-bold text-purple-400">PLATFORMS</div>
          </div>
        </div>
      </motion.div>

      {/* VR Experience - Right Side */}
      <motion.div
        className="absolute right-1 top-[35%] sm:right-2 bg-gradient-to-r from-blue-500/20 to-purple-400/20 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-blue-400/40 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateX: [0, 0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotateX: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        style={{
          boxShadow: "0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-400 rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div>
            <div className="text-xs xl:text-sm font-bold text-blue-400 mb-1 hidden sm:block">VR GAMING COMPANY</div>
            <div className="text-xs font-bold text-blue-400 mb-1 block sm:hidden">VR GAMING</div>
            <div className="text-xs xl:text-sm text-gray-300">5+ Years Experience</div>
          </div>
        </div>
      </motion.div>

      {/* Downloads - Right Side */}
      <motion.div
        className="absolute right-1 top-[55%] sm:right-2 bg-gradient-to-r from-cyan-500/20 to-blue-400/20 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-cyan-400/40 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, y: -20, x: 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateY: [0, -0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        style={{
          boxShadow: "0 8px 32px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L9.9 15.9c.18.18.43.28.7.28.27 0 .52-.1.71-.29L14.9 12.3c.18-.18.29-.43.29-.7 0-.28-.11-.52-.29-.71l1.48 1.48C6.68 13.36 6 12.74 6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.85 0-1.66-.18-2.4-.5l1.9-1.9c.18-.18.29-.43.29.7 0 .28.11.52.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.29l1.48-1.48C19.68 10.34 20 11.13 20 12c0 4.42-3.58 8-8 8z" />
            </svg>
          </div>
          <div>
            <div className="text-sm xl:text-base font-bold text-cyan-400">1.5B+</div>
            <div className="text-xs xl:text-sm text-gray-300 hidden sm:block">Downloads</div>
          </div>
        </div>
      </motion.div>

      {/* #1 hits - Right Side */}
      <motion.div
        className="absolute right-1 top-[75%] sm:right-2 bg-gradient-to-r from-yellow-500/20 to-orange-400/20 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-yellow-400/40 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateX: [0, 0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 },
          rotateX: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 },
        }}
        style={{
          boxShadow: "0 8px 32px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <div className="text-sm xl:text-base font-bold text-yellow-400">25+</div>
            <div className="text-xs xl:text-sm text-gray-300 hidden sm:block">#1 hits in app stores</div>
          </div>
        </div>
      </motion.div>

      {/* I Am Cat - Left Side (Leader) */}
      <motion.div
        className="absolute left-1 top-[15%] sm:left-2 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-green-400/40 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateZ: [0, 0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
          rotateZ: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
        }}
        style={{
          boxShadow:
            "0 8px 32px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 215, 0, 0.3)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/512%20iamcat_icon_corr-5Ex5EMdYFr52DXuvESxQ7x6nbFlXPZ.png"
              alt="I Am Cat"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs xl:text-sm font-bold text-green-400 mb-1 flex items-center space-x-1">
              <span>I AM CAT</span>
            </div>
            <div className="text-xs xl:text-sm text-gray-300">4.9<span className="text-yellow-400">★</span> (63K users)</div>
          </div>
        </div>
      </motion.div>

      {/* I Am Security - Left Side */}
      <motion.div
        className="absolute left-1 top-[35%] sm:left-2 bg-gradient-to-r from-red-500/20 to-orange-400/20 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-red-400/40 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateZ: [0, -0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
          rotateZ: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
        }}
        style={{
          boxShadow:
            "0 8px 32px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 215, 0, 0.3)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/512X512%20i%20am%20security%20%281%29-MQncK9O2OJw7p8RmY56TiNHXqgVKe7.png"
              alt="I Am Security"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs xl:text-sm font-bold text-red-400 mb-1 flex items-center space-x-1">
              <span>I AM SECURITY</span>
            </div>
            <div className="text-xs xl:text-sm text-gray-300">4.8<span className="text-yellow-400">★</span> (42K users)</div>
          </div>
        </div>
      </motion.div>

      {/* Titans Clinic - Left Side */}
      <motion.div
        className="absolute left-1 top-[55%] sm:left-2 bg-gradient-to-r from-indigo-500/15 to-purple-400/15 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-indigo-400/30 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, x: 15, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateZ: [0, -0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 },
          rotateZ: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 },
        }}
        style={{
          boxShadow: "0 6px 24px rgba(99, 102, 241, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Square%201440%20x%201440%20%281%29-j1ligvdcdaM1uKWCQVv29MCqUJwTrs.png"
              alt="Titans Clinic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs xl:text-sm font-semibold text-indigo-400 mb-1">
              <span>TITANS CLINIC</span>
            </div>
            <div className="text-xs xl:text-sm text-gray-400">4.8<span className="text-yellow-400">★</span> (15K users)</div>
          </div>
        </div>
      </motion.div>

      {/* Fruit Salon - Left Side */}
      <motion.div
        className="absolute left-1 top-[75%] sm:left-2 bg-gradient-to-r from-teal-500/15 to-cyan-400/15 rounded-lg p-2 sm:p-2.5 xl:p-3 border border-teal-400/30 backdrop-blur-sm shadow-lg w-[230px] xl:w-[280px] h-[60px] xl:h-[70px]"
        initial={{ opacity: 0, x: -15, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -0.3, 0],
          rotateZ: [0, 0.2, 0],
        }}
        transition={{
          y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          rotateZ: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
        }}
        style={{
          boxShadow: "0 8px 32px rgba(20, 184, 166, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          transform: "perspective(1000px)",
        }}
      >
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="flex-shrink-0 w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fruit%20Salon%20512x512%20icon-gXdTTqbe83eZ71qVLyDyfjtHID41kz.png"
              alt="Fruit Salon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs xl:text-sm font-semibold text-teal-400 mb-1">
              <span>FRUIT SALON</span>
            </div>
            <div className="text-xs xl:text-sm text-gray-400">4.8<span className="text-yellow-400">★</span> (3K users)</div>
          </div>
        </div>
      </motion.div>

      {/* Chaotic floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 85 + 5}%`,
            top: `${Math.random() * 85 + 5}%`,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-cyan-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 85 + 5}%`,
            top: `${Math.random() * 85 + 5}%`,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`particle-green-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 85 + 5}%`,
            top: `${Math.random() * 85 + 5}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  </div>
)

const GamesPortfolio = () => (
  <motion.div id="games" key="games-section" className="w-full">
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="text-3xl sm:text-6xl 2xl:text-7xl font-bold text-white mb-4 leading-tight text-left">
          Our Portfolio
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* I Am Security */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div
            className="aspect-square rounded-lg transition-all duration-300 relative overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/512X512%20i%20am%20security-m3eBUJNmpunJkV7JD7A47UZ07Mljyh.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://newfolder.imediasolutions.ru/storage/2025/05/16/ac2887f1e01627fce5d54f45afcc75b5204bd9ec.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href="https://www.meta.com/ru-ru/experiences/i-am-security/26261730413412240/?srsltid=AfmBOoqE1GZ7y0REupOpDs_WxS-4pGP9uiMALPC0YxkjZt_MNuvu8mAs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile_15071740-7CQ6VXnFEigS7Jp7Hv4Dh8qgPez5pK.png"
                  alt="Meta"
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </a>
              <a
                href="https://store.steampowered.com/app/3068720/I_Am_Security/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 0.511 4.86 0.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.62 20.565 6.363 24.436 11.979 24c6.624-.439 11.647-5.998 11.647-12.553C23.626 5.006 18.605.001 11.979 0z" />
                </svg>
              </a>
              <a
                href="https://apps.apple.com/us/app/i-am-security-original-game/id6740168429"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.NewFolderGames.IAmSecurirty&hl=ru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.699 12l1.999-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Titans Clinic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group"
        >
          <div
            className="aspect-square rounded-lg transition-all duration-300 relative overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cover%20Square%201440%20x%201440%20%281%29-j1ligvdcdaM1uKWCQVv29MCqUJwTrs.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://newfolder.imediasolutions.ru/storage/2025/05/16/a011cd9f6657cd2a97cf185580622b7eb3ca22c8.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                             <a
                 href="https://www.meta.com/ru-ru/experiences/titans-clinic/6035422123217068/?srsltid=AfmBOoqaokzCMvwgBzkYkcuwOyru_ywstMtaEl4JkpJG-o9kYyzZq3DQ"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
               >
                 <img
                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile_15071740-7CQ6VXnFEigS7Jp7Hv4Dh8qgPez5pK.png"
                   alt="Meta"
                   className="w-5 h-5 filter brightness-0 invert"
                 />
               </a>
              <a
                href="https://store.steampowered.com/app/2596030/Fruit_Salon/?l=russian"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 0.511 4.86 0.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.62 20.565 6.363 24.436 11.979 24c6.624-.439 11.647-5.998 11.647-12.553C23.626 5.006 18.605.001 11.979 0z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Fruit Salon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="group"
        >
          <div
            className="aspect-square rounded-lg transition-all duration-300 relative overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fruit%20Salon%20512x512%20icon%20%281%29-oqZGrF8BkaMo4nGZMnW3XR64AtXn8d.png')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://newfolder.imediasolutions.ru/storage/2025/05/16/bf3f513acee34776e1b66741033f11963a647aba.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              <a
                href="https://www.meta.com/ru-ru/experiences/fruit-salon/25347135998263431/?srsltid=AfmBOoqaokzCMvwgBzkYkcuwOyru_ywstMtaEl4JkpJG-o9kYyzZq3DQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile_15071740-7CQ6VXnFEigS7Jp7Hv4Dh8qgPez5pK.png"
                  alt="Meta"
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </a>
              <a
                href="https://store.steampowered.com/app/2984260/Fruit_Salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 0.511 4.86 0.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.62 20.565 6.363 24.436 11.979 24c6.624-.439 11.647-5.998 11.647-12.553C23.626 5.006 18.605.001 11.979 0z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export function ServicesViewportSection() {
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveService(index)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(3) // 4-я точка для Contact
          }
        })
      },
      { threshold: 0.3 },
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactObserver.observe(contactSection)
    }

    return () => {
      observer.disconnect()
      contactObserver.disconnect()
    }
  }, [])

  const scrollToService = (index: number) => {
    if (index === 3) {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
      return
    }

    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  const DigitalSystemsUIGraphicComponent = GrowthChart

  const renderServiceUI = (index: number) => {
    switch (index) {
      case 0:
        return <WebsiteUIGraphic />
      case 1:
        return <MobileUIGraphic />
      case 2:
        return <DigitalSystemsUIGraphicComponent />
      default:
        return <WebsiteUIGraphic />
    }
  }

  return (
    <section ref={containerRef} className="relative py-20 2xl:py-24 px-4 sm:px-6 2xl:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => scrollToService(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                activeService === index ? "bg-white scale-150" : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-7xl 2xl:max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Handshake className="w-12 h-12 text-white" />
            <h2 className="text-3xl sm:text-6xl 2xl:text-7xl font-black leading-tight">
              <span className="text-white">About Us</span>
            </h2>
          </div>
          <p className="text-xl 2xl:text-2xl text-gray-400 max-w-3xl 2xl:max-w-5xl mx-auto leading-relaxed">
            Learn about our investment approach in interactive entertainment and emerging technology sectors through
            strategic equity management
          </p>
        </motion.div>
        <div className="relative">
          <div className="space-y-24">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="min-h-[60vh] flex items-center"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 2xl:gap-20 items-start" id={index === 0 ? "about-us-content" : index === 1 ? "portfolio" : ""}>
                  <motion.div
                    className={`space-y-6 lg:space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div>
                      <motion.div
                        className={`inline-flex items-center space-x-3 px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-white/10 mb-4 lg:mb-6`}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      >
                        <div className={service.accentColor}>{service.icon}</div>
                        <span className={`text-sm font-medium ${service.accentColor}`}>{service.subtitle}</span>
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-3 lg:mb-4 leading-tight text-balance">
                        {service.title}
                      </h3>

                      <p className="text-base lg:text-lg 2xl:text-xl text-gray-300 leading-relaxed mb-6 lg:mb-8 text-pretty text-justify">
                        {service.id === "mobile" ? (
                          <>
                            <span className="text-white">NOTFUN LTD</span> currently holds a majority equity stake in:{" "}
                            <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 bg-clip-text text-transparent font-bold">
                              NewFolderGames
                            </span>{" "}
                            Ltd - A Cyprus-based interactive entertainment studio specializing in VR experiences and
                            mobile gaming products. Since its founding in 2019, the company has developed a strong
                            reputation for creativity, technical execution, and delivering immersive, commercially
                            scalable products to a global audience.{" "}
                            <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 bg-clip-text text-transparent font-bold">
                              NewFolderGames
                            </span>{" "}
                            actively develops original intellectual property and publishes titles for platforms
                            including Meta Quest, iOS, and Android.
                          </>
                        ) : service.id === "website" ? (
                          <>
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold">
                              NOTFUN LTD
                            </span>{" "}
                            is a Cyprus-registered private investment holding company established in 2025. The company
                            was formed to manage ownership structures, oversee dividend distribution, and support the
                            growth of high-potential digital ventures across interactive entertainment and emerging
                            technology sectors. Our role is to provide a flexible legal and financial framework for
                            managing equity positions, ensuring capital efficiency, and reinvesting profits into
                            innovative digital assets and intellectual property.
                          </>
                        ) : (
                          service.description
                        )}
                      </p>
                    </div>
                    <div className="space-y-3 lg:space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className={service.accentColor}>{feature.icon}</div>
                          <span
                            className={`text-gray-300 text-2xs sm:text-sm lg:text-base text-pretty whitespace-nowrap sm:whitespace-normal`}
                          >
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 lg:gap-4 mt-auto">
                      {service.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: statIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`flex-1 min-w-0 text-center p-2 lg:p-4 bg-gradient-to-br ${service.bgGradient} rounded-xl border border-white/10`}
                        >
                          <div className={`text-lg sm:text-base lg:text-2xl font-bold ${service.accentColor} mb-1`}>
                            {stat.value}
                          </div>
                          <div className={`text-xs sm:text-sm text-gray-500`}>{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""} h-full min-h-[300px] lg:min-h-[480px] flex items-center justify-center`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {renderServiceUI(index)}
                  </motion.div>
                </div>
              </motion.div>
            ))}


            {/* Games Portfolio Section - moved above Our Mission */}
            <GamesPortfolio />

            <motion.div
              key={services[2].id}
              ref={(el) => (serviceRefs.current[2] = el)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="min-h-[60vh] flex items-center"
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 2xl:gap-20 items-start">
                <motion.div
                  className="space-y-6 lg:space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div>
                    <motion.div
                      className="inline-flex items-center space-x-3 px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-emerald-500/20 via-teal-400/10 to-emerald-600/20 rounded-full border border-white/10 mb-4 lg:mb-6"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    >
                      <div className="text-emerald-400">{services[2].icon}</div>
                      <span className="text-sm font-medium text-emerald-400">{services[2].subtitle}</span>
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-3 lg:mb-4 leading-tight text-balance">
                      {services[2].title}
                    </h3>
                    <p className="text-base lg:text-lg 2xl:text-xl text-gray-300 leading-relaxed mb-6 lg:mb-8 text-pretty text-justify">
                      {services[2].description}
                    </p>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    {services[2].features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="text-emerald-400">{feature.icon}</div>
                        <span
                          className={`text-gray-300 text-2xs sm:text-sm lg:text-base whitespace-nowrap sm:whitespace-normal`}
                        >
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 lg:gap-4 mt-auto">
                    {services[2].stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: statIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-1 min-w-0 text-center p-2 lg:p-4 bg-gradient-to-br from-emerald-500/20 via-teal-400/10 to-emerald-600/20 rounded-xl border border-white/10"
                      >
                        <div className={`text-lg sm:text-base lg:text-2xl font-bold text-emerald-400 mb-1`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs sm:text-sm text-gray-500`}>{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="h-full min-h-[300px] lg:min-h-[480px] flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {renderServiceUI(2)}
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
