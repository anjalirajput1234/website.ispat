"use client"

import { motion } from "framer-motion"

export function SteelMascot() {
  return (
    <motion.div
      className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Main Steel Beam Body */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* I-Beam Shape */}
        <svg
          viewBox="0 0 80 120"
          className="w-full h-full drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Flange */}
          <motion.rect
            x="5"
            y="8"
            width="70"
            height="12"
            rx="2"
            fill="url(#steelGradient)"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          {/* Web (middle section) */}
          <motion.rect
            x="30"
            y="20"
            width="20"
            height="80"
            rx="1"
            fill="url(#steelGradientDark)"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ transformOrigin: "center top" }}
          />
          
          {/* Bottom Flange */}
          <motion.rect
            x="5"
            y="100"
            width="70"
            height="12"
            rx="2"
            fill="url(#steelGradient)"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
          
          {/* Face - Left Eye */}
          <motion.ellipse
            cx="32"
            cy="55"
            rx="4"
            ry="5"
            fill="#1e293b"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          {/* Face - Right Eye */}
          <motion.ellipse
            cx="48"
            cy="55"
            rx="4"
            ry="5"
            fill="#1e293b"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          
          {/* Eye Shine */}
          <circle cx="33" cy="53" r="1.5" fill="white" opacity="0.8" />
          <circle cx="49" cy="53" r="1.5" fill="white" opacity="0.8" />
          
          {/* Professional Smile */}
          <motion.path
            d="M 35 72 Q 40 78 45 72"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M 35 72 Q 40 78 45 72", "M 35 73 Q 40 79 45 73", "M 35 72 Q 40 78 45 72"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="30%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="steelGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-xl opacity-20 bg-brand-green-light rounded-full scale-150" />
    </motion.div>
  )
}
