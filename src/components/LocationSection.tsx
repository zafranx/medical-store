'use client'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function LocationSection() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg"
      id="location"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{t('ourLocation')}</h3>
          <p className="text-gray-600">{t('visitUsAtStore')}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">{t('storeName')}</h4>
        <p className="text-gray-600 mb-4">
          {t('addressValue')}<br />
          Madhya Pradesh, India
        </p>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://maps.google.com/?q=Indra+Market,+Katra+Road,+Hospital+Chowk,+Rewa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Navigation className="w-4 h-4 mr-2" />
          {t('getDirections')}
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977!2d81.2958!3d24.5354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMyJzA3LjQiTiA4McKwMTcnNDQuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-2 gap-4 text-center"
      >
        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
          <h5 className="font-semibold text-gray-800">{t('freeDeliveryService')}</h5>
          <p className="text-sm text-gray-600">{t('within5km')}</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
          <h5 className="font-semibold text-gray-800">{t('quickService')}</h5>
          <p className="text-sm text-gray-600">{t('thirtyMinDelivery')}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}