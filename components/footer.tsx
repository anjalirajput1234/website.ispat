"use client"

import React from "react"

import Link from "next/link"
import { motion } from "framer-motion"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-brand-darker text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-brand-green-light">RELIABLE ISPAT UDYOG</h3>
            <p className="mt-1 text-sm sm:text-base text-white/80">A Complete Place for Steel</p>
            <p className="mt-2 text-xs sm:text-sm italic text-white/60">Quality | Trust | Service</p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-brand-green-light">Quick Links</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm sm:text-base text-white/80 transition-colors hover:text-brand-green-light py-1 min-h-[44px] sm:min-h-0 flex items-center justify-center sm:justify-start"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-brand-green-light">Contact Info</h4>
            <div className="space-y-2 text-sm sm:text-base text-white/80">
              <p>Raipur, Chhattisgarh</p>
              <p>+91 XXXXX XXXXX</p>
              <p>info@reliableispat.com</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 border-t border-white/10 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-white/60"
        >
          <p>&copy; {new Date().getFullYear()} Reliable Ispat Udyog. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
