'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: string
    pack: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="bg-dark-bg border border-neon-green/30 rounded-lg p-6 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-neon-green/5 pointer-events-none"
        />
      )}

      {/* Golf Ball Visual */}
      <div className="relative h-48 mb-6 flex items-center justify-center">
        <motion.div
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-white to-gray-300 relative shadow-lg"
        >
          {/* Dimples */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2
              const radius = 40
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gray-400"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )
            })}
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-gray-400">
          {product.pack} Balls
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
      <p className="text-3xl font-bold text-neon-green mb-4">{product.price}</p>

      {/* Quality Check Icons */}
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
        <CheckCircle size={16} className="text-neon-green" />
        <span>Cleaned</span>
        <CheckCircle size={16} className="text-neon-green ml-2" />
        <span>Inspected</span>
        <CheckCircle size={16} className="text-neon-green ml-2" />
        <span>Ready to Play</span>
      </div>

      {/* Add to Cart Button */}
      <motion.button
        onClick={handleAddToCart}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
          isAdded
            ? 'bg-electric-green text-dark-bg'
            : 'bg-neon-green text-dark-bg hover:bg-electric-green'
        }`}
      >
        {isAdded ? (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-5 h-5"
            >
              ✓
            </motion.div>
            Added!
          </>
        ) : (
          <>
            <ShoppingCart size={20} />
            Add to Cart
          </>
        )}
      </motion.button>
    </motion.div>
  )
}



