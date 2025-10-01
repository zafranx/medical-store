'use client'
import { motion } from 'framer-motion'
import { Pill, Leaf, Truck, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Pill,
      titleKey: 'englishMedicines',
      descriptionKey: 'englishMedicinesDesc',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Leaf,
      titleKey: 'ayurvedicMedicinesTitle',
      descriptionKey: 'ayurvedicMedicinesDesc',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      titleKey: 'homeDeliveryTitle',
      descriptionKey: 'homeDeliveryDesc',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      titleKey: 'twentyFourSevenService',
      descriptionKey: 'twentyFourSevenServiceDesc',
      color: 'from-red-500 to-red-600'
    }
  ]
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('ourServices')}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t('comprehensiveSolutionsDesc')}
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
              {t(service.titleKey)}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {t(service.descriptionKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}