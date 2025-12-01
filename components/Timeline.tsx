'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const timelineItems = [
  {
    year: '2020',
    title: 'The Beginning',
    description:
      "Vivo's Balls started with a simple idea: provide golfers with high-quality used golf balls at affordable prices.",
  },
  {
    year: '2021',
    title: 'Quality First',
    description:
      'We established our rigorous inspection process, ensuring every ball meets our high standards for playability.',
  },
  {
    year: '2022',
    title: 'Premium Expansion',
    description:
      'Added premium Titleist Pro V1 and Pro V1x options to our lineup, catering to golfers seeking the best.',
  },
  {
    year: '2024',
    title: 'Growing Community',
    description:
      "Thousands of satisfied customers trust Vivo's Balls for their golf ball needs, from casual players to serious golfers.",
  },
]

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-center mb-16 neon-text"
        >
          Our Journey
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-neon-green/30" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-neon-green rounded-full border-4 border-dark-bg z-10" />

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all duration-300"
                  >
                    <div className="text-neon-green font-bold text-2xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


