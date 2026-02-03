"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    value: "Raipur, Chhattisgarh, India",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@reliableispat.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert(
      `Thank you, ${formData.name}! We have received your inquiry and will contact you soon at ${formData.phone}.`
    )

    setFormData({ name: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10)
    setFormData((prev) => ({ ...prev, phone: value }))
  }

  return (
    <section id="contact" className="bg-secondary py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl md:text-4xl">Contact Us</h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Get in touch with us for your steel requirements
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-10 md:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            className="space-y-3 sm:space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex items-start gap-3 sm:gap-4 rounded-lg sm:rounded-xl bg-card p-4 sm:p-5 shadow-sm active:scale-[0.99] transition-transform"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-brand-dark">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg sm:rounded-xl bg-card p-5 sm:p-6 md:p-8 shadow-sm"
          >
            <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl font-semibold text-brand-dark">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="h-12 sm:h-14 border-2 focus:border-brand-green text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  className="h-12 sm:h-14 border-2 focus:border-brand-green text-base"
                  inputMode="numeric"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Requirements"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  className="border-2 resize-none focus:border-brand-green text-base min-h-[120px] sm:min-h-[140px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-green py-5 sm:py-6 text-white hover:bg-brand-green-light text-base min-h-[52px] sm:min-h-[56px] active:scale-[0.98] transition-transform"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
