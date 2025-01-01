import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'

const digitalMarketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility in search results and drive organic traffic",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Comprehensive website audit and optimization",
      "Keyword research and strategy",
      "On-page and technical SEO",
      "Content optimization and link building",
      "Local SEO optimization"
    ]
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Drive targeted traffic and generate leads through paid search campaigns",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Google Ads campaign management",
      "Keyword research and ad copy creation",
      "Landing page optimization",
      "Conversion tracking and optimization",
      "Regular performance reporting"
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience on social platforms",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management",
      "Paid social advertising",
      "Performance analytics and reporting"
    ]
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that attracts and retains your target audience",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Content strategy development",
      "Blog post creation",
      "Infographic design",
      "Video content production",
      "Content distribution"
    ]
  },
  {
    title: "Web Design & Development",
    description: "Create stunning, responsive websites that convert visitors into customers",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Custom website design",
      "Mobile-responsive development",
      "E-commerce solutions",
      "Website maintenance",
      "Performance optimization"
    ]
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive conversions through targeted email campaigns",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Email campaign strategy",
      "Newsletter design and creation",
      "Automated email sequences",
      "List segmentation",
      "A/B testing and optimization"
    ]
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Improve your website's performance and increase conversion rates",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "User experience analysis",
      "A/B testing",
      "Landing page optimization",
      "Funnel optimization",
      "Analytics and tracking setup"
    ]
  },
  {
    title: "Amazon Marketing",
    description: "Optimize your Amazon listings and increase sales on the platform",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Amazon SEO optimization",
      "PPC campaign management",
      "Product listing optimization",
      "Brand content enhancement",
      "Performance tracking"
    ]
  }
]

const brandStrategyServices = [
  {
    title: "Brand Identity Development",
    description: "Create a unique and memorable brand identity that resonates with your target audience",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Logo design and visual identity creation",
      "Brand voice and messaging development",
      "Brand guidelines and style guide",
      "Brand story and narrative crafting",
      "Brand architecture strategy"
    ]
  },
  {
    title: "Market Research and Analysis",
    description: "Gain valuable insights into your market, competitors, and target audience",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Comprehensive market analysis",
      "Competitor benchmarking",
      "Target audience profiling",
      "Consumer behavior analysis",
      "Trend forecasting and opportunity identification"
    ]
  },
  {
    title: "Brand Positioning Strategy",
    description: "Develop a unique position for your brand in the market to differentiate from competitors",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Brand positioning statement development",
      "Unique value proposition creation",
      "Competitive differentiation strategy",
      "Brand personality definition",
      "Brand promise articulation"
    ]
  },
  {
    title: "Brand Experience Design",
    description: "Create cohesive and memorable brand experiences across all customer touchpoints",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Customer journey mapping",
      "Touchpoint optimization",
      "Brand activation planning",
      "Experiential marketing strategies",
      "Brand loyalty program development"
    ]
  },
  {
    title: "Rebranding and Brand Refresh",
    description: "Revitalize your brand to stay relevant and appealing to your target audience",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Brand audit and assessment",
      "Rebranding strategy development",
      "Visual identity refresh",
      "Brand messaging update",
      "Relaunch campaign planning"
    ]
  },
  {
    title: "Brand Performance Measurement",
    description: "Track and analyze your brand's performance to ensure continued growth and success",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Brand equity measurement",
      "Brand awareness tracking",
      "Customer perception analysis",
      "Brand loyalty assessment",
      "ROI analysis for brand initiatives"
    ]
  }
]

const analyticsInsightsServices = [
  {
    title: "Web Analytics Implementation",
    description: "Set up and configure advanced web analytics to track user behavior and website performance",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Google Analytics 4 setup and configuration",
      "Custom event tracking",
      "Goal and conversion tracking",
      "E-commerce tracking implementation",
      "Cross-domain tracking setup"
    ]
  },
  {
    title: "Data Visualization and Reporting",
    description: "Transform complex data into actionable insights through clear and intuitive visualizations",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Custom dashboard creation",
      "Automated report generation",
      "Interactive data visualizations",
      "KPI tracking and monitoring",
      "Data storytelling and presentation"
    ]
  },
  {
    title: "Predictive Analytics",
    description: "Leverage advanced statistical techniques and machine learning to forecast trends and behaviors",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Customer churn prediction",
      "Demand forecasting",
      "Customer lifetime value analysis",
      "Predictive lead scoring",
      "Market trend analysis"
    ]
  },
  {
    title: "Customer Journey Analytics",
    description: "Gain a holistic view of your customer's interactions across all touchpoints",
    imageUrl: "/placeholder.svg?height=400&width=600",
    videoUrl: "#",
    features: [
      "Multi-channel attribution modeling",
      "Customer segmentation analysis",
      "Touchpoint optimization",
      "Cohort analysis",
      "Customer behavior pattern recognition"
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div id="digital-marketing" className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Digital Marketing Services</h1>
            <p className="text-xl text-gray-600">
              Grow Your Client Base With Data-Driven and Targeted Strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-32">
          <div id="brand-strategy" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Brand Strategy Services</h2>
            <p className="text-xl text-gray-600">
              Build a Strong, Memorable Brand That Connects With Your Audience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandStrategyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-32">
          <div id="analytics-insights" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Analytics & Insights Services</h2>
            <p className="text-xl text-gray-600">
              Transform Data into Actionable Insights to Drive Business Growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsInsightsServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

