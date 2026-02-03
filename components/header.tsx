"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#why-choose", label: "Why Choose Us" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact Us" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)

      const sections = document.querySelectorAll("section[id]")
      const scrollY = window.pageYOffset

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionHeight = sectionElement.offsetHeight
        const sectionTop = sectionElement.offsetTop - 100
        const sectionId = section.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

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

    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-gradient-to-r from-brand-darker to-brand-dark transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              <h1 className="text-base font-bold text-brand-green-light sm:text-lg md:text-xl lg:text-2xl leading-tight">
                RELIABLE ISPAT UDYOG
              </h1>
              <p className="text-[10px] text-slate-300 sm:text-xs">A Complete Place for Steel</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeSection === link.href.replace("#", "")
                    ? "text-brand-green-light"
                    : "text-slate-200 hover:text-brand-green-light"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Larger touch target */}
          <button
            type="button"
            className="lg:hidden text-white p-3 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center active:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <div
          className={`lg:hidden fixed inset-0 top-[56px] sm:top-[64px] bg-brand-darker z-40 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto pb-safe">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-6 py-5 text-base font-medium border-b border-white/10 transition-all duration-300 min-h-[60px] active:bg-white/5 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-brand-green-light bg-white/5"
                    : "text-slate-200"
                }`}
                style={{
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight className="h-5 w-5 text-white/40" />
              </a>
            ))}
            
            {/* Mobile CTA */}
            <div className="p-6 mt-auto">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-full py-4 px-6 bg-brand-green text-white text-center font-semibold rounded-xl active:bg-brand-green-light transition-colors min-h-[56px] flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
