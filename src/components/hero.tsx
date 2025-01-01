import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Business</h1>
          <p className="text-xl mb-6">Innovative marketing solutions to help you reach new heights.</p>
          <Button size="lg">Get Started</Button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/placeholder.svg?height=400&width=600" 
            alt="Marketing Strategy" 
            width={600}
            height={400}
            className="rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </section>
  )
}

