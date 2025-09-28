'use client'
import { motion } from 'framer-motion'
import { Pill, Leaf, Truck, Clock } from 'lucide-react'

const services = [
  {
    icon: Pill,
    title: 'अंग्रेजी दवाइयाँ',
    description: 'All types of allopathic medicines, OTC drugs, and prescription fulfillment',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Leaf,
    title: 'आयुर्वेदिक दवाइयाँ',
    description: 'Authentic herbal and classical Ayurvedic preparations for natural healing',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Truck,
    title: 'होम डिलीवरी',
    description: 'Fast and reliable medicine delivery service in Rewa area',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: '24/7 सेवा',
    description: 'Emergency medicine availability and consultation services',
    color: 'from-red-500 to-red-600'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">हमारी सेवाएँ</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          आपकी स्वास्थ्य आवश्यकताओं के लिए संपूर्ण समाधान
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 floating`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}