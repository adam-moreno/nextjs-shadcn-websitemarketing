import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingContactForm } from "@/components/floating-contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Clock, Users } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 md:space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Help is here when you need it
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-xl">
                Support is available seven days a week. Contact our team, explore our resources,
                or connect with our community of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>
                    Get help via email with 24/7 support from our dedicated team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Chat with our support team in real-time during business hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Help Center</CardTitle>
                  <CardDescription>
                    Browse our comprehensive knowledge base and tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Community</CardTitle>
                  <CardDescription>
                    Connect with other users and share experiences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-20 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr,1fr] items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  &ldquo;The customer support is exceptional. They&apos;re always there when you need them.&rdquo;
                </h2>
                <p className="text-gray-500">
                  Sarah Johnson, CEO of TechStart
                </p>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Testimonial"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Floating Contact Form */}
        <FloatingContactForm />
      </main>
      <Footer />
    </>
  )
}

