'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingBag, Star, Package } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Simple 3D golf ball using canvas
    let rotation = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2 - 100
      const radius = 80

      // Draw golf ball with dimples
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)
      
      // Ball base
      const gradient = ctx.createRadialGradient(-20, -20, 0, 0, 0, radius)
      gradient.addColorStop(0, '#ffffff')
      gradient.addColorStop(1, '#e0e0e0')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, Math.PI * 2)
      ctx.fill()

      // Dimples
      ctx.fillStyle = '#c0c0c0'
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2
        const dimpleX = Math.cos(angle) * (radius * 0.6)
        const dimpleY = Math.sin(angle) * (radius * 0.6)
        ctx.beginPath()
        ctx.arc(dimpleX, dimpleY, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
      rotation += 0.02
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg" />
      
      {/* Parallax golf course texture */}
      <div
        className="absolute inset-0 opacity-10 parallax"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300ff88\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* 3D Golf Ball Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10"
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 neon-text"
        >
          Premium Used Golf Balls.
          <br />
          <span className="text-white">Elite Quality.</span>
          <br />
          <span className="text-neon-green">Better Prices.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          High-quality used golf balls in excellent condition. Premium Pro V1
          and Pro V1x available.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/shop"
            className="group relative px-8 py-4 bg-neon-green text-dark-bg font-bold rounded-lg hover:bg-electric-green transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/50 flex items-center gap-2"
          >
            <ShoppingBag size={20} />
            Shop Now
          </Link>
          <Link
            href="/shop#premium"
            className="group relative px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold rounded-lg hover:bg-neon-green hover:text-dark-bg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Star size={20} />
            Premium Pro V1 Packs
          </Link>
          <Link
            href="/shop#bulk"
            className="group relative px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold rounded-lg hover:bg-neon-green hover:text-dark-bg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Package size={20} />
            Bulk Deals
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


