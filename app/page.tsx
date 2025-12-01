import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import BrandStory from '@/components/BrandStory'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <BrandStory />
      <CTA />
    </div>
  )
}



