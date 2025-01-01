import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Megaphone, PenTool, BarChart } from 'lucide-react'

const services = [
  {
    title: 'Digital Marketing',
    description: 'Reach your target audience with precision.',
    icon: Megaphone,
    link: '/services#digital-marketing'
  },
  {
    title: 'Brand Strategy',
    description: 'Build a strong, memorable brand identity.',
    icon: PenTool,
    link: '/services#brand-strategy'
  },
  {
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions for your business.',
    icon: BarChart,
    link: '/services#analytics-insights'
  },
]

export function FeaturedServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services.map((service, index) => (
            <Link key={index} href={service.link} passHref>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-2 text-blue-500" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/services" passHref>
            <Button size="lg">Learn More About Our Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

