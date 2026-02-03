"use client"

import {
  Package,
  Zap,
  CheckCircle,
  Truck,
  Handshake,
  Users,
  Ship,
  DollarSign,
  Star,
} from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Package,
    title: "Wide Range of Products",
    description: "Complete steel solutions under one roof with extensive product portfolio",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Fast turnaround on all inquiries and orders with dedicated support",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Premium quality guaranteed products from trusted manufacturers",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Reliable logistics and timely dispatch to meet your deadlines",
  },
  {
    icon: Handshake,
    title: "Transparent Dealings",
    description: "Honest and clear business practices with no hidden charges",
  },
  {
    icon: Users,
    title: "Experienced Staff",
    description: "Professional team with deep industry expertise and knowledge",
  },
  {
    icon: Ship,
    title: "Transport Service",
    description: "Own transport facility available for smooth delivery",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Best market rates without compromising on quality",
  },
  {
    icon: Star,
    title: "100% Customer Satisfaction",
    description: "Customer-first approach with commitment to your success",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-card py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl md:text-4xl">Why Choose Us</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Your trusted partner in steel solutions</p>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group rounded-lg sm:rounded-xl bg-secondary p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg active:scale-[0.98]"
            >
              <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-brand-green">
                <reason.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-1.5 sm:mb-2 text-sm sm:text-base font-semibold text-brand-dark">{reason.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
