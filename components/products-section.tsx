"use client"

import { motion } from "framer-motion"

const productCategories = [
  {
    title: "Primary Products",
    products: [
      { name: "MS TMT Bar", desc: "High-quality thermo-mechanically treated reinforcement bars for construction" },
      { name: "MS Beam", desc: "Structural steel beams for heavy-duty applications" },
      { name: "MS Angle", desc: "Equal and unequal angles in various sizes" },
      { name: "MS Channel", desc: "C-channel sections for structural applications" },
      { name: "MS Plate", desc: "Steel plates in different thicknesses and sizes" },
      { name: "MS Coil", desc: "Hot-rolled and cold-rolled steel coils" },
      { name: "MS Wire Rod", desc: "Quality wire rods for various industrial uses" },
    ],
  },
  {
    title: "Secondary Products",
    products: [
      { name: "MS Round Bar", desc: "Round bars in multiple diameters" },
      { name: "MS Square Bar", desc: "Square section bars for construction" },
      { name: "MS Structure Items", desc: "Various structural steel components" },
      { name: "MS Pipes & GI Pipes", desc: "Black and galvanized pipes" },
      { name: "Binding Wire", desc: "Construction binding wire" },
      { name: "HB Wire", desc: "Hard bright wire products" },
      { name: "Barbed Wire", desc: "Security fencing wire" },
    ],
  },
  {
    title: "Raw Materials",
    products: [
      { name: "MS Bloom", desc: "Semi-finished steel blooms" },
      { name: "MS Billets", desc: "Quality steel billets" },
      { name: "MS Scrap", desc: "Recycled steel scrap materials" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

export function ProductsSection() {
  return (
    <section id="products" className="bg-secondary py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl md:text-4xl">Our Products</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Comprehensive range of quality steel products
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10 md:mt-12 space-y-8 sm:space-y-10 md:space-y-12">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 sm:mb-6 rounded-md sm:rounded-lg bg-brand-green px-4 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl font-semibold text-white">
                {category.title}
              </h3>
              <motion.div
                className="grid gap-3 sm:gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.products.map((product) => (
                  <motion.div
                    key={product.name}
                    variants={itemVariants}
                    className="group rounded-md sm:rounded-lg border-l-4 border-brand-green bg-card p-4 sm:p-5 transition-all duration-300 hover:translate-x-1 hover:shadow-md active:scale-[0.98]"
                  >
                    <h4 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold text-brand-dark">{product.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
