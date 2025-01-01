export function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We begin with a comprehensive analysis of your business, market position, and competitors. Our team conducts in-depth research to understand your unique challenges and opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on our findings, we create a customized marketing strategy that aligns with your business objectives. This includes detailed action plans, timelines, and KPI targets."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our team executes the strategy across all chosen channels, ensuring consistent messaging and brand voice while maintaining the highest quality standards."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "We continuously track performance metrics and make data-driven adjustments to optimize your campaigns for maximum ROI."
    },
    {
      number: "05",
      title: "Reporting & Communication",
      description: "Regular updates and detailed reports keep you informed of progress, results, and strategic recommendations for ongoing improvement."
    }
  ]

  return (
    <div className="space-y-16">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="text-5xl font-bold text-blue-200 mb-4">{step.number}</div>
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

