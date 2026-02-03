"use client"

import { Factory, Star, Truck, BadgeDollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Factory,
    title: "10+ Years Experience",
    description: "Trusted steel supply & trading",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "SAIL, TATA, JSPL & more",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Fast & reliable service",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Prices",
    description: "Competitive market rates",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function FeaturesSnapshot() {
  return (
    <section id="features" className="bg-secondary py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-lg sm:rounded-xl bg-card p-4 sm:p-5 md:p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg active:scale-[0.98]"
            >
              <motion.div
                className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.25 }}
              >
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </motion.div>
              <h3 className="mb-1 sm:mb-2 text-sm sm:text-base md:text-lg font-semibold text-brand-green leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            asChild
            variant="outline"
            className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent transition-all duration-300 hover:scale-105 min-h-[48px] sm:min-h-[44px] px-6 sm:px-8 active:scale-[0.98]"
          >
            <a href="#about">Read More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
