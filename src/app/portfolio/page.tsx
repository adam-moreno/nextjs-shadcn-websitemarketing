import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PortfolioCard } from '@/components/portfolio-card'

const portfolioItems = [
  {
    id: "1",
    name: "Evergreen Botanicals",
    description: "A premium skincare brand that needed a complete digital transformation. We helped them establish a strong online presence and increase their e-commerce sales through targeted marketing campaigns.",
    image: "/placeholder.svg?height=600&width=800",
    category: "E-commerce",
    services: ["Web Design", "SEO", "Social Media Marketing", "Email Marketing"],
    results: [
      { label: "Increase in Sales", value: "+156%" },
      { label: "Social Growth", value: "12K+" },
      { label: "ROI", value: "312%" },
      { label: "Conversion Rate", value: "4.8%" }
    ],
    link: "#"
  },
  {
    id: "2",
    name: "Urban Pulse Fitness",
    description: "A boutique fitness studio chain looking to expand their digital footprint and attract new members through virtual classes and personalized training programs.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Health & Fitness",
    services: ["Brand Strategy", "Content Marketing", "PPC", "Web Development"],
    results: [
      { label: "New Members", value: "2.5K+" },
      { label: "Lead Cost", value: "-45%" },
      { label: "Engagement", value: "+88%" },
      { label: "Revenue Growth", value: "167%" }
    ],
    link: "#"
  },
  {
    id: "3",
    name: "TechFlow Solutions",
    description: "A B2B software company that needed to improve their lead generation and establish thought leadership in the competitive tech industry.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Technology",
    services: ["Content Strategy", "SEO", "LinkedIn Marketing", "Marketing Automation"],
    results: [
      { label: "Qualified Leads", value: "+203%" },
      { label: "Organic Traffic", value: "85K+" },
      { label: "Conversion Rate", value: "3.2%" },
      { label: "ROI", value: "425%" }
    ],
    link: "#"
  },
  {
    id: "4",
    name: "Artisan & Co.",
    description: "A handcrafted furniture manufacturer looking to reach high-end customers and showcase their unique pieces through digital channels.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Luxury Retail",
    services: ["Website Design", "Photography", "Social Media", "PPC"],
    results: [
      { label: "Online Sales", value: "+234%" },
      { label: "Avg. Order Value", value: "$4.2K" },
      { label: "Social Reach", value: "45K+" },
      { label: "CTR", value: "4.1%" }
    ],
    link: "#"
  },
  {
    id: "5",
    name: "Fresh Feast Delivery",
    description: "A meal prep delivery service that needed to scale their business and optimize their digital marketing efforts in a competitive market.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Food & Beverage",
    services: ["Brand Identity", "Web Development", "Email Marketing", "PPC"],
    results: [
      { label: "Monthly Orders", value: "15K+" },
      { label: "Customer LTV", value: "+178%" },
      { label: "Email ROI", value: "410%" },
      { label: "Market Share", value: "23%" }
    ],
    link: "#"
  },
  {
    id: "6",
    name: "Summit Financial",
    description: "A financial advisory firm seeking to modernize their brand and attract younger clients through digital channels.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Finance",
    services: ["Brand Refresh", "Content Marketing", "SEO", "Social Media"],
    results: [
      { label: "New Clients", value: "+145%" },
      { label: "Lead Quality", value: "+89%" },
      { label: "Brand Mentions", value: "5.2K+" },
      { label: "ROI", value: "289%" }
    ],
    link: "#"
  },
  {
    id: "7",
    name: "Wanderlust Gear",
    description: "An outdoor equipment manufacturer looking to increase their direct-to-consumer sales and build a community around their brand.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Outdoor & Recreation",
    services: ["E-commerce", "Community Management", "Influencer Marketing", "PPC"],
    results: [
      { label: "Online Revenue", value: "+312%" },
      { label: "Social Growth", value: "89K+" },
      { label: "Engagement Rate", value: "5.8%" },
      { label: "ROAS", value: "4.2x" }
    ],
    link: "#"
  },
  {
    id: "8",
    name: "Bright Minds Academy",
    description: "An online education platform that needed to increase enrollment and improve their digital learning experience.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Education",
    services: ["UX Design", "Content Strategy", "Email Marketing", "Analytics"],
    results: [
      { label: "Enrollment", value: "+167%" },
      { label: "Completion Rate", value: "92%" },
      { label: "Student SAT", value: "4.8/5" },
      { label: "Revenue", value: "+234%" }
    ],
    link: "#"
  },
  {
    id: "9",
    name: "GreenScape Properties",
    description: "A sustainable real estate developer that needed to showcase their eco-friendly projects and attract environmentally conscious buyers.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Real Estate",
    services: ["Web Design", "Virtual Tours", "Content Marketing", "PPC"],
    results: [
      { label: "Lead Gen", value: "+189%" },
      { label: "Virtual Tours", value: "12K+" },
      { label: "Conversion Rate", value: "3.9%" },
      { label: "ROI", value: "356%" }
    ],
    link: "#"
  },
  {
    id: "10",
    name: "Paws & Care",
    description: "A premium pet care service provider looking to expand their digital presence and streamline their booking process.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Pet Services",
    services: ["Brand Strategy", "Web Development", "Local SEO", "Social Media"],
    results: [
      { label: "Bookings", value: "+223%" },
      { label: "Local Rankings", value: "Top 3" },
      { label: "Reviews", value: "4.9★" },
      { label: "Growth", value: "178%" }
    ],
    link: "#"
  }
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl text-gray-600">
              Discover how we&apos;ve helped businesses achieve their digital marketing goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

