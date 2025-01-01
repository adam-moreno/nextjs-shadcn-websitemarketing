export function ContentStrategy() {
  const strategies = [
    {
      title: "Research & Planning",
      points: [
        "Keyword research and topic clustering",
        "Competitor content analysis",
        "Content gap identification",
        "Editorial calendar development"
      ]
    },
    {
      title: "Content Creation",
      points: [
        "SEO-optimized blog posts and articles",
        "Engaging social media content",
        "Video and visual content",
        "Downloadable resources and guides"
      ]
    },
    {
      title: "Distribution & Promotion",
      points: [
        "Multi-channel content distribution",
        "Social media promotion strategy",
        "Email marketing campaigns",
        "Influencer partnerships"
      ]
    },
    {
      title: "Measurement & Optimization",
      points: [
        "Content performance tracking",
        "User engagement analysis",
        "SEO impact measurement",
        "Continuous improvement"
      ]
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {strategies.map((strategy, index) => (
        <div key={index} className="p-8 bg-purple-100 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-6 text-purple-600">{strategy.title}</h3>
          <ul className="space-y-4">
            {strategy.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-center justify-center">
                <span className="h-3 w-3 mr-3 bg-purple-400 rounded-full" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

