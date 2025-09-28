'use client'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">राहुल मेडिकल स्टोर</h3>
                <p className="text-gray-400 text-sm">अंग्रेजी एवं आयुर्वेदिक दवाइयाँ</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted healthcare partner in Rewa, providing quality medicines and professional care since years.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-red-400" />
                <span>+91 8719054515</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-red-400 mt-1" />
                <span>इंद्रा मार्केट, कटरा रोड<br />हॉस्पिटल चौक, रीवा</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-red-400" />
                <span>8:00 AM - 10:00 PM (Daily)</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Allopathic Medicines</li>
              <li>• Ayurvedic Medicines</li>
              <li>• Home Delivery</li>
              <li>• Medical Consultation</li>
              <li>• Emergency Services</li>
              <li>• Health Checkup</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> for better healthcare
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Rahul Medical Store. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}