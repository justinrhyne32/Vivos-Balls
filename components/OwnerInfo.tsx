'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, User, MapPin } from 'lucide-react'

export default function OwnerInfo() {
  const contactInfo = [
    {
      icon: User,
      label: 'Owner',
      value: 'Matt Vivona',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mattyv313@gmail.com',
      link: 'mailto:mattyv313@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '203-536-4533',
      link: 'tel:203-536-4533',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Contact Information</h2>
        <p className="text-gray-400 mb-8">
          Get in touch with us directly. We're here to help with any questions
          about our products or to discuss custom bulk orders.
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-dark-surface border border-neon-green/30 rounded-lg p-6 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-green/20 rounded-lg">
                  <Icon className="text-neon-green" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white text-lg font-semibold hover:text-neon-green transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-white text-lg font-semibold">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-neon-green/10 to-electric-green/10 border border-neon-green/30 rounded-lg p-6 mt-8"
      >
        <h3 className="text-xl font-bold mb-2 text-white">Business Hours</h3>
        <p className="text-gray-300 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p className="text-gray-300 mb-1">Saturday: 10:00 AM - 4:00 PM</p>
        <p className="text-gray-300">Sunday: Closed</p>
      </motion.div>
    </motion.div>
  )
}



