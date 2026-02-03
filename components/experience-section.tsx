"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Truck, Factory } from "lucide-react"
import { motion } from "framer-motion"

const brands = ["SAIL", "TATA", "JSPL", "RINL"]

const infrastructure = [
  {
    icon: Building2,
    title: "Strong Infrastructure",
    description: "Well-equipped facilities for storage and handling",
  },
  {
    icon: Truck,
    title: "Logistics Network",
    description: "Efficient transport and delivery system",
  },
  {
    icon: Factory,
    title: "Industry Serving",
    description: "Catering to construction, manufacturing, and trading sectors",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function ExperienceSection() {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            let current = 0
            const target = 10
            const increment = target / 50
            const stepTime = 2000 / 50

            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                setCount(target)
                clearInterval(timer)
              } else {
                setCount(Math.ceil(current))
              }
            }, stepTime)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-gradient-to-br from-brand-darker to-brand-dark py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl"
        >
          Experience & Infrastructure
        </motion.h2>

        <div className="mt-8 sm:mt-10 md:mt-12 space-y-10 sm:space-y-12 md:space-y-16">
          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-brand-green-light xs:text-6xl sm:text-7xl md:text-8xl">
              {count}+
            </div>
            <p className="mt-2 text-base text-white/90 sm:text-lg md:text-xl">Years of Industry Experience</p>
          </motion.div>

          {/* Brands */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8 text-lg font-semibold text-brand-green-light sm:text-xl md:text-2xl"
            >
              Associated with Leading Brands
            </motion.h3>
            <motion.div
              className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand}
                  variants={itemVariants}
                  className="rounded-lg sm:rounded-xl border-2 border-brand-green-light/30 bg-white/10 p-4 sm:p-5 md:p-6 text-base font-bold text-brand-green-light transition-all duration-300 hover:scale-105 hover:border-brand-green-light hover:bg-white/15 active:scale-[0.98] sm:text-lg md:text-xl min-h-[60px] sm:min-h-[72px] flex items-center justify-center"
                >
                  {brand}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Infrastructure */}
          <motion.div
            className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {infrastructure.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="rounded-lg sm:rounded-xl bg-white/5 p-5 sm:p-6 text-center"
              >
                <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 md:h-16 sm:w-14 md:w-16 items-center justify-center text-brand-green-light">
                  <item.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
                </div>
                <h4 className="mb-1.5 sm:mb-2 text-base font-semibold text-brand-green-light sm:text-lg">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80 sm:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
