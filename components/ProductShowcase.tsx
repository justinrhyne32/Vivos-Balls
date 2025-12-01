'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

const products = [
  { id: '12-pack', name: '12 Pack', price: '$24.99', pack: 12 },
  { id: '24-pack', name: '24 Pack', price: '$44.99', pack: 24 },
  { id: '50-pack', name: '50 Pack', price: '$79.99', pack: 50 },
  { id: '100-pack', name: '100 Pack', price: '$139.99', pack: 100 },
]

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="py-20 bg-dark-surface relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-4 neon-text"
        >
          Choose Your Pack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16"
        >
          All balls are cleaned, inspected, and ready to play
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



