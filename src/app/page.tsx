import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import ProductShowcase from '@/components/ProductShowcase'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import LocationSection from '@/components/LocationSection'
import AudioIntro from '@/components/AudioIntro'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AudioIntro />
      <Header />
      
      <section className="relative">
        <HeroSlider />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesSection />
        <ProductShowcase />
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <ContactSection />
          <LocationSection />
        </div>
      </div>

      <Footer />
    </main>
  )
}