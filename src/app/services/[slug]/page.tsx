import { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params
  
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Service Details: {resolvedParams.slug}</h1>
      {/* Service details content would go here */}
    </div>
  )
}

// Optional: Add metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  return {
    title: `Service: ${resolvedParams.slug}`,
  }
}

