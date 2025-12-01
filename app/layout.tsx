import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SpinWidget from '@/components/SpinWidget'

export const metadata: Metadata = {
  title: "Vivo's Balls - Premium Used Golf Balls",
  description: 'Elite quality used golf balls at better prices. Premium Pro V1 and Pro V1x available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SpinWidget />
      </body>
    </html>
  )
}

