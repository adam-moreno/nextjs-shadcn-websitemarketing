import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Terramore</h3>
            <p className="text-sm">Your trusted partner in innovative marketing solutions.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/services#digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/services#brand-strategy">Brand Strategy</Link></li>
              <li><Link href="/services#analytics-insights">Analytics & Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>123 Marketing St.</li>
              <li>Cityville, State 12345</li>
              <li>contact@terramore.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center">
          © 2024 Terramore. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

