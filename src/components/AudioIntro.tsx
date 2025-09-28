'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, X } from 'lucide-react'

export default function AudioIntro() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element with a text-to-speech like intro
    // In a real implementation, you would have an actual audio file
    audioRef.current = new Audio()
    
    // Simulate audio intro - in production, replace with actual audio file
    const playIntro = () => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(
          'नमस्कार! राहुल मेडिकल स्टोर में आपका स्वागत है। हम अंग्रेजी और आयुर्वेदिक दवाइयों की सेवा प्रदान करते हैं।'
        )
        utterance.lang = 'hi-IN'
        utterance.rate = 0.8
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        
        speechSynthesis.speak(utterance)
      }
    }

    // Auto-play attempt (most browsers block this)
    const timer = setTimeout(() => {
      try {
        playIntro()
      } catch (error) {
        console.log('Auto-play blocked')
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel()
      }
    }
  }, [])

  const toggleAudio = () => {
    if (isPlaying) {
      speechSynthesis.cancel()
      setIsPlaying(false)
    } else {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(
          'नमस्कार! राहुल मेडिकल स्टोर में आपका स्वागत है। हम अंग्रेजी और आयुर्वेदिक दवाइयों की सेवा प्रदान करते हैं। किसी भी सहायता के लिए +91 8719054515 पर कॉल करें।'
        )
        utterance.lang = 'hi-IN'
        utterance.rate = 0.8
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        
        speechSynthesis.speak(utterance)
      }
    }
  }

  return (
    <>
      {/* Audio Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-20 right-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
            isPlaying 
              ? 'bg-red-600 text-white pulse-glow' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
          aria-label={isPlaying ? 'Stop audio intro' : 'Play audio intro'}
        >
          {isPlaying ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </motion.button>
      </motion.div>

      {/* Notification Banner */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-red-600 text-white p-3"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5" />
                <p className="text-sm font-medium">
                  🎵 Audio intro available - Click the audio button to listen to our store introduction
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowNotification(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close notification"
              >
                <X size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}