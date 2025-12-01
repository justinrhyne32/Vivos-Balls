'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { Star } from 'lucide-react'

const standardProducts = [
  { id: '12-pack', name: '12 Pack', price: '$24.99', pack: 12 },
  { id: '24-pack', name: '24 Pack', price: '$44.99', pack: 24 },
  { id: '50-pack', name: '50 Pack', price: '$79.99', pack: 50 },
  { id: '100-pack', name: '100 Pack', price: '$139.99', pack: 100 },
]

const premiumProducts = [
  {
    id: 'pro-v1-12',
    name: 'Titleist Pro V1',
    subtitle: '12 Pack',
    price: '$49.99',
    pack: 12,
    premium: true,
  },
  {
    id: 'pro-v1-24',
    name: 'Titleist Pro V1',
    subtitle: '24 Pack',
    price: '$89.99',
    pack: 24,
    premium: true,
  },
]

export default function ProductGrid() {
  const [standardRef, standardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [premiumRef, premiumInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div>
      {/* Standard Products */}
      <section id="standard" ref={standardRef} className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={standardInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold mb-8 text-white"
        >
          Standard Used Golf Balls
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standardProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={standardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Products */}
      <section id="premium" ref={premiumRef} className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={premiumInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-8"
        >
          <Star className="text-neon-green" size={32} fill="currentColor" />
          <h2 className="text-4xl font-bold text-white">Premium Lines</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {premiumProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={premiumInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-dark-bg border-2 border-neon-green rounded-lg p-6 hover:border-electric-green hover:shadow-lg hover:shadow-neon-green/30 transition-all duration-300 relative overflow-hidden group">
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-neon-green text-dark-bg px-3 py-1 rounded-full text-xs font-bold">
                  PREMIUM
                </div>

                {/* Golf Ball Visual */}
                <div className="relative h-48 mb-6 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 relative shadow-xl"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">
                        PRO V1
                      </span>
                    </div>
                    {/* Dimples */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i / 8) * Math.PI * 2
                      const radius = 40
                      const x = Math.cos(angle) * radius
                      const y = Math.sin(angle) * radius
                      return (
                        <div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-gray-500"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      )
                    })}
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-1 text-white">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-400 mb-4">{product.subtitle}</p>
                <p className="text-3xl font-bold text-neon-green mb-4">
                  {product.price}
                </p>

                <button className="w-full py-3 bg-neon-green text-dark-bg font-semibold rounded-lg hover:bg-electric-green transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bulk Deals Section */}
      <section id="bulk" className="mt-20">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          Bulk Deals
        </motion.h2>
        <div className="bg-dark-surface border border-neon-green/30 rounded-lg p-8 text-center">
          <p className="text-xl text-gray-300 mb-4">
            Looking for larger quantities? Contact us for custom bulk pricing!
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-neon-green text-dark-bg font-semibold rounded-lg hover:bg-electric-green transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}



