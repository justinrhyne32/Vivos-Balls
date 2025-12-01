'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, User, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-surface border border-neon-green/30 rounded-lg p-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-400 mb-2 flex items-center gap-2">
            <User size={16} />
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-dark-bg border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2 flex items-center gap-2">
            <Mail size={16} />
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-dark-bg border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2 flex items-center gap-2">
            <Phone size={16} />
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-dark-bg border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-2 flex items-center gap-2">
            <MessageSquare size={16} />
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-dark-bg border border-neon-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            isSubmitted
              ? 'bg-electric-green text-dark-bg'
              : 'bg-neon-green text-dark-bg hover:bg-electric-green'
          }`}
        >
          {isSubmitting ? (
            'Sending...'
          ) : isSubmitted ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-5 h-5"
              >
                ✓
              </motion.div>
              Message Sent!
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}



