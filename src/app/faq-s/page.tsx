import FaqsImage from "@/components/FaqsImage";
import FaqAccordion from "@/components/FaqAccordion";
import QuestionSection from "@/components/QuestionSection";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function FAQs() {
  return (
    <main className="min-h-screen bg-white">
      <FaqsImage desktopSrc="/herofaqs.avif" mobileSrc="/herofaqsmobil.avif" desktopHeight="h-[500px]" mobileHeight="h-[400px]" />
      <div className="text-center pt-12">
        <h1 className={`text-7xl font-bold text-[#0239E2] ${bebasNeue.className}`}>FAQ&apos;S</h1>
      </div>
      <FaqAccordion />
      <FaqsImage desktopSrc="/footerfaqs.avif" mobileSrc="/footerfaqsmobil.avif" desktopHeight="h-[600px]" mobileHeight="h-[400px]" />
      <QuestionSection />
    </main>
  )
}
