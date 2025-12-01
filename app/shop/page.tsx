import ProductGrid from '@/components/ProductGrid'

export default function Shop() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 neon-text text-center">
          Shop Premium Golf Balls
        </h1>
        <p className="text-xl text-gray-400 text-center mb-16">
          Choose from our selection of premium used golf balls
        </p>
        <ProductGrid />
      </div>
    </div>
  )
}



