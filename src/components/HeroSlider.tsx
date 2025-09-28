'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const banners = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'राहुल मेडिकल स्टोर',
    subtitle: 'आपकी स्वास्थ्य की देखभाल हमारी प्राथमिकता',
    description: 'अंग्रेजी एवं आयुर्वेदिक दवाइयाँ उपलब्ध'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Quality Medicines',
    subtitle: 'Trusted Healthcare Partner',
    description: 'English & Ayurvedic Medicines Available'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Expert Care',
    subtitle: 'Professional Medical Consultation',
    description: 'Call +91 8719054515 for assistance'
  }
]

export default function HeroSlider() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center text-center text-white"
              >
                <div className="max-w-4xl px-4">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {banner.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="text-xl md:text-2xl mb-2"
                  >
                    {banner.subtitle}
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="text-lg md:text-xl opacity-90"
                  >
                    {banner.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="mt-8"
                  >
                    <a
                      href="tel:+918719054515"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 pulse-glow"
                    >
                      अभी कॉल करें
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}