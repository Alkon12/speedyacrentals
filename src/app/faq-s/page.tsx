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
    <main className="bg-white dark:bg-black">
      <FaqsImage desktopSrc="/SERVICE/1.jpg" mobileSrc="/SERVICE/mobil1.jpeg" desktopHeight="h-[500px]" mobileHeight="h-[300px]" />
      <div className="text-center pt-12">
        <h1 className={`text-7xl font-bold text-[#0239E2] ${bebasNeue.className}`}>FAQ&apos;S</h1>
      </div>
      <FaqAccordion />
      <FaqsImage desktopSrc="/SERVICE/2.jpg" mobileSrc="/SERVICE/mobil2.jpeg" desktopHeight="h-[600px]" mobileHeight="h-[300px]" />
      <QuestionSection />
    </main>
  )
}
