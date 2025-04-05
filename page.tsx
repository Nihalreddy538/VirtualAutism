import Hero from "@/components/hero"
import WhatIsSection from "@/components/what-is-section"
import SymptomsSection from "@/components/symptoms-section"
import SymptomsChecker from "@/components/symptoms-checker"
import AIChatbot from "@/components/ai-chatbot"
import EffectsSection from "@/components/effects-section"
import SolutionsSection from "@/components/solutions-section"
import ArticlesSection from "@/components/articles-section"
import VideoSection from "@/components/video-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

// Main page component
export default function Home() {
  return (
    <div>
      <Hero />
      <WhatIsSection />
      <SymptomsSection />
      <SymptomsChecker />
      <AIChatbot />
      <EffectsSection />
      <SolutionsSection />
      <ArticlesSection />
      <VideoSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

