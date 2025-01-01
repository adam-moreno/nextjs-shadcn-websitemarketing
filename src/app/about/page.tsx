import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Timeline } from '@/components/timeline'
import { ProcessSteps } from '@/components/process-steps'
import { DataApproach } from '@/components/data-approach'
import { ContentStrategy } from '@/components/content-strategy'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-gradient-to-r from-blue-600 to-purple-600">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Marketing strategy meeting"
            width={1920}
            height={1080}
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Driving Growth Through Data-Driven Marketing
              </h1>
              <p className="text-xl text-white/90">
                We combine creativity with analytics to deliver exceptional results for our clients
              </p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-blue-600">Our Process</h2>
              <ProcessSteps />
            </div>
          </div>
        </section>

        {/* Data-First Approach */}
        <section className="py-24 bg-gradient-to-r from-teal-500 to-green-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-12">Data-First Approach</h2>
              <DataApproach />
            </div>
          </div>
        </section>

        {/* Content Strategy */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 text-purple-600">Content Strategy</h2>
              <ContentStrategy />
            </div>
          </div>
        </section>

        {/* Marketing Timeline */}
        <section className="py-24 bg-gradient-to-r from-orange-400 to-pink-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Your Marketing Journey</h2>
              <Timeline />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/80 mb-8">
                Let&apos;s create a data-driven marketing strategy tailored to your goals
              </p>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

