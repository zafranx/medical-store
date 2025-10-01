'use client'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, Volume2, VolumeX, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    if (typeof window === 'undefined') return

    if (isPlaying) {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      setIsPlaying(false)
    } else {
      if (window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(t('audioIntroText'))
        utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US'
        utterance.rate = 0.8
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        window.speechSynthesis.speak(utterance)
      }
    }
  }

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
              <h1 className="text-2xl font-bold text-gray-800">{t('storeName')}</h1>
              <p className="text-sm text-gray-600">{t('storeTagline')}</p>
            </div>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleAudio}
              className={`p-2 rounded-full transition-colors ${
                isPlaying
                  ? 'bg-red-600 text-white pulse-glow'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              aria-label="Toggle audio"
            >
              {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors flex items-center space-x-1"
                aria-label="Change language"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </motion.button>

              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-32 z-50"
                >
                  <button
                    onClick={() => {
                      setLanguage('hi')
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      language === 'hi' ? 'bg-gray-100 font-semibold' : ''
                    }`}
                  >
                    हिंदी (HI)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setShowLangMenu(false)
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      language === 'en' ? 'bg-gray-100 font-semibold' : ''
                    }`}
                  >
                    English (EN)
                  </button>
                </motion.div>
              )}
            </div>

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