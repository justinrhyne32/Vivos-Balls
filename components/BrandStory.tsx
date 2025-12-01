'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Target, Award, Zap } from 'lucide-react'

export default function BrandStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Target,
      title: 'Quality Inspection',
      description:
        'Every ball is carefully inspected to ensure it meets our high standards for playability.',
    },
    {
      icon: Award,
      title: 'Premium Options',
      description:
        'Choose from standard used balls or premium Titleist Pro V1 and Pro V1x options.',
    },
    {
      icon: Zap,
      title: 'Better Value',
      description:
        'Get elite quality golf balls at a fraction of the cost of new balls.',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-4 neon-text"
        >
          Why Vivo&apos;s Balls?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          We&apos;re passionate about providing golfers with high-quality used golf
          balls that deliver exceptional performance without breaking the bank.
          Every ball is cleaned, inspected, and ready to help you play your best
          game.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-surface border border-neon-green/30 rounded-lg p-8 text-center hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block mb-4"
                >
                  <Icon
                    size={48}
                    className="text-neon-green group-hover:text-electric-green transition-colors"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


