'use client'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram } from 'lucide-react'

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">राहुल मेडिकल स्टोर</h1>
              <p className="text-sm text-gray-600">अंग्रेजी एवं आयुर्वेदिक दवाइयाँ</p>
            </div>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918719054515"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/rahulmedicalstore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+918719054515"
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">+91 8719054515</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}