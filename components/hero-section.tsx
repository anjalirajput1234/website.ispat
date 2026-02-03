"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Package, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const heroImages = [
  { src: "/images/steel-rods.jpg", alt: "Premium Steel TMT Rods" },
  { src: "/images/steel-beams.jpg", alt: "Industrial Steel Beams" },
  { src: "/images/steel-structure.jpg", alt: "Steel Construction Framework" },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5500) // 5.5 seconds per image

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-width Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].src || "/placeholder.svg"}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay for text readability - 45% opacity */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
      </div>

      {/* Main Content - Above background */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <motion.div
          className="text-center lg:text-left max-w-3xl lg:max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-brand-green/80 backdrop-blur-sm rounded-full border border-brand-green-light/30">
              Trusted Since 2014 | Raipur, Chhattisgarh
            </span>
          </motion.div>
          
          {/* Main Heading - Clean single baseline */}
          <motion.h1
            variants={headingVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="inline-block whitespace-nowrap">RELIABLE</span>{" "}
            <span className="inline-block whitespace-nowrap">ISPAT</span>{" "}
            <span className="inline-block whitespace-nowrap">UDYOG</span>
          </motion.h1>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 sm:h-1.5 bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green rounded-full mt-4 sm:mt-6 mx-auto lg:mx-0 max-w-[180px] sm:max-w-[250px] md:max-w-[320px]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Tagline - Lighter weight with delay */}
          <motion.p
            variants={taglineVariants}
            className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-brand-green-light"
          >
            A Complete Place for Steel
          </motion.p>
          
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Leading suppliers of premium quality Iron & Steel products with over 10 years of trusted experience in the industry.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
          >
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-light text-white font-semibold px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-green/30 min-h-[56px] sm:min-h-[60px]"
              >
                <a href="#contact">
                  <Phone className="mr-2.5 h-5 w-5 sm:h-6 sm:w-6" />
                  Contact Us
                </a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-brand-dark font-semibold px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 min-h-[56px] sm:min-h-[60px]"
              >
                <a href="#products">
                  <Package className="mr-2.5 h-5 w-5 sm:h-6 sm:w-6" />
                  View Products
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="w-10 h-10 sm:w-auto sm:h-auto flex items-center justify-center touch-target"
            aria-label={`View image ${index + 1}`}
          >
            <span 
              className={`block rounded-full transition-all duration-500 ease-out ${
                currentImageIndex === index
                  ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-brand-green shadow-lg shadow-brand-green/40"
                  : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/80"
              }`} 
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a 
          href="#features" 
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs sm:text-sm mb-2 font-medium tracking-wider uppercase hidden sm:block">
            Explore
          </span>
          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  )
}
