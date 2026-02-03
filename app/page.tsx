"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSnapshot } from "@/components/features-snapshot"
import { ProductHighlights } from "@/components/product-highlights"
import { ExperienceBanner } from "@/components/experience-banner"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <FeaturesSnapshot />
        <ProductHighlights />
        <ExperienceBanner />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </PageTransition>
  )
}
