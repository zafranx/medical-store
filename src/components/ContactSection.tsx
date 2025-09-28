'use client'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8719054515',
    href: 'tel:+918719054515',
    color: 'text-blue-600'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/918719054515',
    color: 'text-green-600'
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@rahulmedicalstore',
    href: 'https://instagram.com/rahulmedicalstore',
    color: 'text-pink-600'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'इंद्रा मार्केट, कटरा रोड, हॉस्पिटल चौक, रीवा',
    href: '#location',
    color: 'text-red-600'
  }
]

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
          <p className="text-gray-600">Get in touch for any assistance</p>
        </div>
      </div>

      <div className="space-y-4">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ x: 10, scale: 1.02 }}
            viewport={{ once: true }}
            className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
          >
            <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-white group-hover:shadow-md transition-all duration-300`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-medium text-gray-800">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl"
      >
        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 text-blue-600 mr-2" />
          <h4 className="font-semibold text-gray-800">Store Hours</h4>
        </div>
        <p className="text-sm text-gray-600">
          Monday - Sunday: 8:00 AM - 10:00 PM<br />
          Emergency services available 24/7
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-2 gap-4"
      >
        <a
          href="https://wa.me/918719054515"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </a>
        <a
          href="tel:+918719054515"
          className="flex items-center justify-center py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </a>
      </motion.div>
    </motion.div>
  )
}