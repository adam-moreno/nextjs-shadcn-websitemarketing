import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Your Marketing Agency',
  description: 'Comprehensive digital marketing services to help your business grow with data-driven strategies',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}

