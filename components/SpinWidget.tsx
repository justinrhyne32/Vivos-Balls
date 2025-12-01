'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, X } from 'lucide-react'

export default function SpinWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [discountCode, setDiscountCode] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const discounts = ['SAVE10', 'SAVE15', 'SAVE20', 'BALLS5', 'GOLF10']

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 200
    canvas.height = 200

    const drawBall = (rot: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate(rot)

      // Ball
      const gradient = ctx.createRadialGradient(-20, -20, 0, 0, 0, 80)
      gradient.addColorStop(0, '#ffffff')
      gradient.addColorStop(1, '#e0e0e0')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, 80, 0, Math.PI * 2)
      ctx.fill()

      // Dimples
      ctx.fillStyle = '#c0c0c0'
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2
        const x = Math.cos(angle) * 50
        const y = Math.sin(angle) * 50
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }

    drawBall(rotation)
  }, [rotation])

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setDiscountCode(null)

    // Random rotation
    const spins = 5 + Math.random() * 5
    const targetRotation = rotation + spins * Math.PI * 2
    const randomDiscount =
      discounts[Math.floor(Math.random() * discounts.length)]

    // Animate rotation
    let currentRotation = rotation
    const increment = (targetRotation - rotation) / 60

    const animate = () => {
      currentRotation += increment
      setRotation(currentRotation)

      if (currentRotation < targetRotation) {
        requestAnimationFrame(animate)
      } else {
        setRotation(targetRotation)
        setIsSpinning(false)
        setDiscountCode(randomDiscount)
      }
    }

    animate()
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-neon-green rounded-full flex items-center justify-center shadow-lg hover:bg-electric-green transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Gift className="text-dark-bg" size={24} />
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-electric-green rounded-full flex items-center justify-center text-xs font-bold text-dark-bg">
          !
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-surface border-2 border-neon-green rounded-lg p-8 max-w-md w-full relative"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>

                <h2 className="text-3xl font-bold mb-4 neon-text text-center">
                  Spin for a Discount!
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  Spin the golf ball to reveal your discount code
                </p>

                <div className="flex justify-center mb-8">
                  <canvas
                    ref={canvasRef}
                    className="border-2 border-neon-green rounded-full"
                  />
                </div>

                <div className="text-center mb-6">
                  <motion.button
                    onClick={handleSpin}
                    disabled={isSpinning}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      isSpinning
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-neon-green text-dark-bg hover:bg-electric-green'
                    }`}
                  >
                    {isSpinning ? 'Spinning...' : 'Spin Now!'}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {discountCode && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-neon-green/20 border border-neon-green rounded-lg p-6 text-center"
                    >
                      <p className="text-gray-300 mb-2">Your discount code:</p>
                      <p className="text-3xl font-bold text-neon-green">
                        {discountCode}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        Use this code at checkout!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}



