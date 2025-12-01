'use client'

import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-neon-green/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold neon-text mb-4">Vivo&apos;s Balls</h3>
            <p className="text-gray-400 text-sm">
              Premium used golf balls. Elite quality. Better prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-green">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-green">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:mattyv313@gmail.com"
                  className="hover:text-neon-green transition-colors"
                >
                  mattyv313@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:203-536-4533"
                  className="hover:text-neon-green transition-colors"
                >
                  203-536-4533
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-green">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest deals
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-dark-bg border border-neon-green/30 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
              />
              <button
                type="submit"
                className="bg-neon-green text-dark-bg font-semibold py-2 rounded hover:bg-electric-green transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 pt-8 border-t border-neon-green/20 flex justify-center gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-neon-green transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-neon-green transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-neon-green transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neon-green/20 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vivo&apos;s Balls. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


