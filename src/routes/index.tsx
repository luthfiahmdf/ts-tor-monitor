import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { CtaSection } from '@/components/landing-section/cta-section'
import { HeroSection } from '@/components/landing-section/hero-section'
import { FeatureSection } from '@/components/landing-section/feature-section'
import { HowItWorksSection } from '@/components/landing-section/how-its-works-sections'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex flex-col grid-background">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
    </div>
  )
}
