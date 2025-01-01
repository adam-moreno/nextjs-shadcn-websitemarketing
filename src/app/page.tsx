import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedServices } from '@/components/featured-services'
import { MarketingDashboard } from '@/components/marketing-dashboard'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedServices />
        <MarketingDashboard />
      </main>
      <Footer />
    </div>
  )
}

