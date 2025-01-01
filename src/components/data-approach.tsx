import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react'

export function DataApproach() {
  const approaches = [
    {
      icon: BarChart3,
      title: "Data Collection",
      description: "We gather comprehensive data across all marketing channels, user behaviors, and customer interactions."
    },
    {
      icon: PieChart,
      title: "Analysis & Insights",
      description: "Our team analyzes patterns and trends to extract actionable insights that inform strategic decisions."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "We monitor key metrics in real-time to optimize campaigns and maximize ROI."
    },
    {
      icon: Users,
      title: "Audience Understanding",
      description: "Deep demographic and behavioral analysis helps us target the right audience with the right message."
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {approaches.map((item, index) => (
        <div key={index} className="text-white text-center">
          <div className="flex justify-center mb-6">
            <item.icon className="h-16 w-16" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-white/80 max-w-sm mx-auto">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

