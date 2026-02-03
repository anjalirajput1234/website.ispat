"use client"

import { Target, Eye, Check } from "lucide-react"
import { motion } from "framer-motion"

const expertise = [
  "10+ years of industry experience",
  "Complete range of Iron & Steel raw and finished products",
  "Trusted supplier network with major brands",
  "Professional team with deep industry knowledge",
  "Located in Raipur - Strategic steel trading hub",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-brand-dark sm:text-3xl md:text-4xl"
        >
          About Us
        </motion.h2>

        <div className="mt-8 sm:mt-10 md:mt-12 space-y-8 sm:space-y-10 md:space-y-12">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-brand-green">Who We Are</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground leading-relaxed">
              <p>
                Reliable Ispat Udyog is a leading supplier of Iron & Steel products based in
                Raipur, Chhattisgarh - the steel hub of Central India. With over 10 years of
                industry experience, we have established ourselves as a trusted name in steel
                trading and supply.
              </p>
              <p>
                We specialize in providing both raw materials and finished steel products to
                industries, construction companies, and traders across the region.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg sm:rounded-xl border-l-4 border-brand-green bg-secondary p-4 sm:p-6"
            >
              <div className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 text-brand-green flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground">
                To provide quality products & professional services with commitment and
                integrity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg sm:rounded-xl border-l-4 border-brand-green bg-secondary p-4 sm:p-6"
            >
              <div className="mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-brand-green flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-brand-dark">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground">
                Commitment to quality, teamwork & ultimate customer satisfaction.
              </p>
            </motion.div>
          </div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg sm:rounded-xl bg-brand-dark p-5 sm:p-6 md:p-8"
          >
            <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold text-brand-green-light">
              Our Expertise
            </h3>
            <motion.ul
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {expertise.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 border-b border-white/10 pb-3 sm:pb-4 text-sm sm:text-base text-white last:border-b-0 last:pb-0"
                >
                  <Check className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-brand-green-light" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
