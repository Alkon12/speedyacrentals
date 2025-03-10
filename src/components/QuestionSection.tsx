import Image from 'next/image';
import ContactButton from './ContactButton';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function QuestionSection() {
  return (
    <section className="bg-[#001457] text-white min-h-[400px] py-10 px-10 md:py-20 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className={`text-2xl md:text-7xl font-black text-[#0439E0] tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] ${bebasNeue.className}`} 
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          DO YOU STILL HAVE A QUESTION?
        </h2>
        
        <p className="text-xl font-bold text-gray-200 max-w-2xl mx-auto leading-relaxed">
          If you can&apos;t find an answer to your question in our FAQ&apos;s, you can always
          contact us. We will answer you shortly!
        </p>

        <div className="flex justify-center">
          <div className="relative w-[200px] h-[100px]">
            <Image
              src="/Se-habla-español.avif"
              alt="Se Habla Español"
              fill
              className="object-contain"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }}
            />
          </div>
        </div>
        <ContactButton sizeClass="py-2 md:py-1 px-8 md:px-12"/>
      </div>
    </section>
  );
}

