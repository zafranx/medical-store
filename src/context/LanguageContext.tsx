'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'hi' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  hi: {
    storeName: "राहुल मेडिकल स्टोर",
    storeTagline: "अंग्रेजी एवं आयुर्वेदिक दवाइयाँ",
    heroTitle: "राहुल मेडिकल स्टोर",
    heroSubtitle: "आपकी स्वास्थ्य की देखभाल हमारी प्राथमिकता",
    heroDescription: "अंग्रेजी एवं आयुर्वेदिक दवाइयाँ उपलब्ध",
    qualityMedicines: "गुणवत्ता दवाइयाँ",
    trustedPartner: "विश्वसनीय स्वास्थ्य साझेदार",
    englishAyurvedic: "अंग्रेजी एवं आयुर्वेदिक दवाइयाँ उपलब्ध",
    expertCare: "विशेषज्ञ देखभाल",
    professionalConsultation: "पेशेवर चिकित्सा परामर्श",
    callForAssistance: "सहायता के लिए +91 8719054515 पर कॉल करें",
    callNow: "अभी कॉल करें",
    ourProducts: "हमारे उत्पाद",
    productsDescription: "गुणवत्ता वाली दवाइयों की विस्तृत श्रृंखला",
    allopathicMedicines: "एलोपैथिक दवाइयाँ",
    allopathicDesc: "सभी प्रकार की अंग्रेजी दवाइयाँ",
    ayurvedicMedicines: "आयुर्वेदिक दवाइयाँ",
    ayurvedicDesc: "प्राकृतिक और हर्बल उपचार",
    healthSupplements: "स्वास्थ्य सप्लीमेंट",
    healthSupplementsDesc: "विटामिन और पोषण संबंधी सप्लीमेंट",
    babycare: "शिशु देखभाल",
    babycareDesc: "शिशु और माँ के लिए उत्पाद",
    ourServices: "हमारी सेवाएं",
    servicesDescription: "आपके स्वास्थ्य के लिए व्यापक सेवाएं",
    prescriptionMedicines: "प्रिस्क्रिप्शन दवाइयाँ",
    prescriptionDesc: "डॉक्टर के प्रिस्क्रिप्शन पर दवाइयाँ",
    freeConsultation: "मुफ्त परामर्श",
    freeConsultationDesc: "फोन पर मुफ्त चिकित्सा सलाह",
    homeDelivery: "होम डिलीवरी",
    emergencyService: "आपातकालीन सेवा",
    emergencyServiceDesc: "24/7 आपातकालीन दवा सेवा",
    contactUs: "संपर्क करें",
    getInTouch: "हमसे संपर्क करें",
    phone: "फोन",
    whatsapp: "व्हाट्सएप",
    instagram: "इंस्टाग्राम",
    ourLocation: "हमारा स्थान",
    locationAddress: "रीवा, मध्य प्रदेश",
    openingHours: "खुलने का समय: सुबह 8:00 - रात 10:00",
    allRightsReserved: "सर्वाधिकार सुरक्षित",
    audioIntroText:
      "नमस्कार! राहुल मेडिकल स्टोर में आपका स्वागत है। हम अंग्रेजी और आयुर्वेदिक दवाइयों की सेवा प्रदान करते हैं। किसी भी सहायता के लिए +91 8719054515 पर कॉल करें।",
    featuredProducts: "विशेष उत्पाद",
    qualityProductsDesc:
      "आपकी भलाई के लिए गुणवत्ता वाली दवाइयाँ और स्वास्थ्य उत्पाद",
    inquireNow: "अभी पूछताछ करें",
    allopathic: "एलोपैथिक",
    ayurvedic: "आयुर्वेदिक",
    supplements: "सप्लीमेंट",
    healthcare: "स्वास्थ्य देखभाल",
    medicalDevices: "चिकित्सा उपकरण",
    englishMedicines: "अंग्रेजी दवाइयाँ",
    englishMedicinesDesc:
      "सभी प्रकार की एलोपैथिक दवाइयाँ, ओटीसी दवाइयाँ और प्रिस्क्रिप्शन पूर्ति",
    ayurvedicMedicinesTitle: "आयुर्वेदिक दवाइयाँ",
    ayurvedicMedicinesDesc:
      "प्राकृतिक उपचार के लिए प्रामाणिक हर्बल और शास्त्रीय आयुर्वेदिक तैयारियाँ",
    homeDeliveryTitle: "होम डिलीवरी",
    homeDeliveryDesc: "रीवा क्षेत्र में तेज़ और विश्वसनीय दवा वितरण सेवा",
    twentyFourSevenService: "24/7 सेवा",
    twentyFourSevenServiceDesc: "आपातकालीन दवा उपलब्धता और परामर्श सेवाएं",
    comprehensiveSolutionsDesc:
      "आपकी स्वास्थ्य आवश्यकताओं के लिए संपूर्ण समाधान",
    getInTouchDesc: "किसी भी सहायता के लिए संपर्क करें",
    address: "पता",
    addressValue: "इंद्रा मार्केट, कटरा रोड, हॉस्पिटल चौक, रीवा",
    chatWithUs: "हमसे चैट करें",
    storeHours: "स्टोर का समय",
    mondayToSunday: "सोमवार - रविवार: सुबह 8:00 - रात 10:00",
    emergencyServices: "आपातकालीन सेवाएं 24/7 उपलब्ध",
    contactInformation: "संपर्क जानकारी",
    trustedPartnerDesc:
      "रीवा में आपका विश्वसनीय स्वास्थ्य साझेदार, वर्षों से गुणवत्ता दवाइयाँ और पेशेवर देखभाल प्रदान कर रहे हैं।",
    allopathicMedicinesFooter: "एलोपैथिक दवाइयाँ",
    ayurvedicMedicinesFooter: "आयुर्वेदिक दवाइयाँ",
    medicalConsultation: "चिकित्सा परामर्श",
    healthCheckup: "स्वास्थ्य जांच",
    madeWithLove: "बेहतर स्वास्थ्य सेवा के लिए प्यार से बनाया गया",
    copyrightText: "राहुल मेडिकल स्टोर। सर्वाधिकार सुरक्षित।",
    visitUsAtStore: "हमारे स्टोर पर आएं",
    getDirections: "दिशा निर्देश प्राप्त करें",
    freeDeliveryService: "मुफ्त डिलीवरी",
    within5km: "5 किमी के भीतर",
    quickService: "त्वरित सेवा",
    thirtyMinDelivery: "30 मिनट डिलीवरी",
  },
  en: {
    storeName: "Rahul Medical Store",
    storeTagline: "English & Ayurvedic Medicines",
    heroTitle: "Rahul Medical Store",
    heroSubtitle: "Your Health Care is Our Priority",
    heroDescription: "English & Ayurvedic Medicines Available",
    qualityMedicines: "Quality Medicines",
    trustedPartner: "Trusted Healthcare Partner",
    englishAyurvedic: "English & Ayurvedic Medicines Available",
    expertCare: "Expert Care",
    professionalConsultation: "Professional Medical Consultation",
    callForAssistance: "Call +91 8719054515 for assistance",
    callNow: "Call Now",
    ourProducts: "Our Products",
    productsDescription: "Wide range of quality medicines",
    allopathicMedicines: "Allopathic Medicines",
    allopathicDesc: "All types of English medicines",
    ayurvedicMedicines: "Ayurvedic Medicines",
    ayurvedicDesc: "Natural and herbal remedies",
    healthSupplements: "Health Supplements",
    healthSupplementsDesc: "Vitamins and nutritional supplements",
    babycare: "Baby Care",
    babycareDesc: "Products for baby and mother",
    ourServices: "Our Services",
    servicesDescription: "Comprehensive services for your health",
    prescriptionMedicines: "Prescription Medicines",
    prescriptionDesc: "Medicines on doctor's prescription",
    freeConsultation: "Free Consultation",
    freeConsultationDesc: "Free medical advice over phone",
    homeDelivery: "Home Delivery",
    emergencyService: "Emergency Service",
    emergencyServiceDesc: "24/7 emergency medicine service",
    contactUs: "Contact Us",
    getInTouch: "Get In Touch",
    phone: "Phone",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    ourLocation: "Our Location",
    locationAddress: "Rewa, Madhya Pradesh",
    openingHours: "Opening Hours: 8:00 AM - 10:00 PM",
    allRightsReserved: "All Rights Reserved",
    audioIntroText:
      "Welcome to Rahul Medical Store! We provide English and Ayurvedic medicines. For any assistance, call +91 8719054515.",
    featuredProducts: "Featured Products",
    qualityProductsDesc:
      "Quality medicines and healthcare products for your wellbeing",
    inquireNow: "Inquire Now",
    allopathic: "Allopathic",
    ayurvedic: "Ayurvedic",
    supplements: "Supplements",
    healthcare: "Healthcare",
    medicalDevices: "Medical Devices",
    englishMedicines: "English Medicines",
    englishMedicinesDesc:
      "All types of allopathic medicines, OTC drugs, and prescription fulfillment",
    ayurvedicMedicinesTitle: "Ayurvedic Medicines",
    ayurvedicMedicinesDesc:
      "Authentic herbal and classical Ayurvedic preparations for natural healing",
    homeDeliveryTitle: "Home Delivery",
    homeDeliveryDesc:
      "Fast and reliable medicine delivery service in Rewa area",
    twentyFourSevenService: "24/7 Service",
    twentyFourSevenServiceDesc:
      "Emergency medicine availability and consultation services",
    comprehensiveSolutionsDesc: "Comprehensive solutions for your health needs",
    getInTouchDesc: "Get in touch for any assistance",
    address: "Address",
    addressValue: "Indra Market, Katra Road, Hospital Chowk, Rewa",
    chatWithUs: "Chat with us",
    storeHours: "Store Hours",
    mondayToSunday: "Monday - Sunday: 8:00 AM - 10:00 PM",
    emergencyServices: "Emergency services available 24/7",
    contactInformation: "Contact Information",
    trustedPartnerDesc:
      "Your trusted healthcare partner in Rewa, providing quality medicines and professional care since years.",
    allopathicMedicinesFooter: "Allopathic Medicines",
    ayurvedicMedicinesFooter: "Ayurvedic Medicines",
    medicalConsultation: "Medical Consultation",
    healthCheckup: "Health Checkup",
    madeWithLove: "Made with love for better healthcare",
    copyrightText: "Rahul Medical Store. All rights reserved.",
    visitUsAtStore: "Visit Us at Store",
    getDirections: "Get Directions",
    freeDeliveryService: "Free Delivery Service",
    within5km: "Within 5 km",
    quickService: "Quick Service",
    thirtyMinDelivery: "30 Min Delivery",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('hi')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'hi' || saved === 'en')) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['hi']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
