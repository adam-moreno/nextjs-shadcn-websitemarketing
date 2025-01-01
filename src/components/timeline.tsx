import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Timeline() {
  const timelineItems = [
    {
      period: "3 Months",
      title: "Foundation Building",
      items: [
        "Website optimization and technical SEO",
        "Social media presence establishment",
        "Initial content strategy implementation",
        "Analytics setup and benchmark creation"
      ]
    },
    {
      period: "6 Months",
      title: "Growth Acceleration",
      items: [
        "Content production scaling",
        "Paid advertising optimization",
        "Email marketing automation",
        "Conversion rate optimization"
      ]
    },
    {
      period: "9 Months",
      title: "Market Expansion",
      items: [
        "Advanced SEO strategies",
        "Influencer partnership program",
        "Marketing automation enhancement",
        "Customer journey optimization"
      ]
    },
    {
      period: "12 Months",
      title: "Sustainable Growth",
      items: [
        "Multi-channel integration",
        "Brand authority building",
        "Advanced analytics implementation",
        "Long-term strategy refinement"
      ]
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {timelineItems.map((item, index) => (
        <Card key={index} className="text-center bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-2">
              <span className="text-3xl font-bold text-orange-500">{item.period}</span>
              <span className="text-xl text-pink-600">{item.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {item.items.map((listItem, itemIndex) => (
                <li key={itemIndex} className="flex items-center justify-center">
                  <span className="h-2 w-2 mr-2 bg-orange-400 rounded-full" />
                  <span className="text-gray-700">{listItem}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

