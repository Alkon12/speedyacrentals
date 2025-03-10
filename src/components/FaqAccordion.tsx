'use client';
import { useState } from 'react';

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}


const faqItems: FaqItem[] = [
  {
    id: '1',
    number: '01',
    question: 'Do portable air conditioners need to be vented? And if so, where?',
    answer: 'Yes, like any air conditioning system, portable air conditioners have to be vented to cool a room effectively. Portable ACs pull in warm air from a room and cool it with an evaporator coil, condenser coil and refrigerant. This cool air is then transferred back into the room via the front of the unit while the remaining warm air and moisture are expelled from the back. If this warm air isn’t vented outside internal spaces will not cool down. \n\n Portable air conditioners come with an exhaust hose and can be vented through a window, door, ceiling and walls.'
  },
  {
    id: '2',
    number: '02',
    question: 'What happens to the water that is collected?',
    answer: 'Portable air conditioners extract moisture out of the air as well as heat. Some units have self-evaporative technology, so the water is vented through the exhaust hose along with the hot exhaust air. Other units have internal water reservoirs that collect water and must be emptied manually when full.'
  },
  {
    id: '3',
    number: '03',
    question: 'How noisy are portable air conditioners?',
    answer: 'Nearly all domestic appliances make some kind of noise. The same is true of portable air conditioners. Silent types do not exist so you will always hear something. However, advances in technology mean that modern units operate reasonably quietly. \n\n At Portable AC Rentals by WOLFE, our air conditioners have a maximum decibel level of 56dB.'
  },
  {
    id: '4',
    number: '04',
    question: 'What kind of power outlet is needed?',
    answer: 'This depends on the type of portable AC you hire, but typically you will want one that connects to a standard power outlet so you don’t have to make any additional electrical arrangements.\n\nPortable AC Rentals by WOLFE operate on a standard 10amp power outlet so there are no additional requirements. This makes it easier to plug the unit into different areas of your home or office if needed.\n\n'
  },
  {
    id: '5',
    number: '05',
    question: 'What is the right size portable air conditioner for my room?',
    answer: 'Finding the right portable air conditioner to give you the cooling you need depends on numerous factors such as the size of the room, insulation, ceiling height and the size of the windows.\n\nAs a standard guide, a typical 4.5kW unit can cool a room up to 30m2 so that should give you a good indicator of how many units you may need. In most instances, it is always best to consult with a professional who can help you determine the best size air conditioner for your specific cooling needs.'
  },
  {
    id: '6',
    number: '06',
    question: 'What kind of maintenance is needed?',
    answer: 'Every appliance needs to be properly looked after to maintain optimum performance. Treated well, portable air conditioners can last for years to come.  Key maintenance requirements include:\n\n Clean and replace the filters on a fortnightly or monthly basis, depending on usage.\n\n Regularly wipe down the exterior casing with a damp cloth. Avoid using chemicals or detergents.\n\n Routinely inspect the condenser coils, which can become dirty with a build-up of grease and grime.\n\n Always keep the exhaust hose as straight as possible.\n\n At Portable AC Rentals by WOLFE, we regularly clean and service all our residential, commercial and industrial air conditioners units so they are always in tiptop condition when you hire them.'
  },
  {
    id: '7',
    number: '07',
    question: 'Are portable air conditioners energy efficient?',
    answer: 'Some portable units are more energy-efficient than others. According to regulations introduced by the government, single duct portable air conditioners (units with a single hose) must meet Minimun Energy Performance Standards.'
  },
  {
    id: '8',
    number: '08',
    question: 'What are the best places for portable air conditioners?',
    answer: 'A portable air conditioner should ideally be placed on a hard level floor at least 30 to 40 centimetres away from obstructions such as furniture.\n\n An ideal position is close to a window and a power socket, so the hose and power cable don’t overstretch. The hose should be as short and straight as possible.\n\n Install portable units in rooms with low humidity. High humidity can increase the frequency of water draining if you don’t have an automated condensate pump.\n\n Never position a portable AC unit on a desk, chair or shelf. That’s an accident waiting to happen.\n\n Keep your portable unit away from sunny spots as it will have to work harder to keep the room cool and may not provide the cooling comfort you desire.'
  },
  {
    id: '9',
    number: '09',
    question: 'What happens if the unit stops functioning?',
    answer: 'If your portable AC stops functioning, the most likely explanation is lack of power. Therefore, check that it is correctly plugged in and the cord isn’t damaged. You can also check your fuse box to ensure nothing has tripped. If the unit is still not working after following these steps, give us a call at 626-422-2271'
  }
];

export default function FaqAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="stripes-view margin-bottom30" role="list">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="mb-6 border-b border-gray-200 last:border-b-0 pb-2"
            role="listitem"
          >
            <button
              className="w-full flex items-center text-left p-6 hover:bg-gray-50/50 transition-colors focus:outline-none group"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItem === item.id}
            >
              <div className="w-20 flex items-center justify-start text-blue-600 mr-6 flex-shrink-0">
                <span className="text-4xl font-bold">{item.number}</span>
              </div>
              <div data-hook="titleContainer">
                <div data-itemprop="name">
                  <h3 className="flex-1 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors question-title" id={`title_${item.id}`}>
                {item.question}
              </h3>
                </div>
              </div>
              <div data-hook="toggle-accordion-wrapper">
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openItem === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
              data-hook="content-wrapper"
            >
              <div className="p-6 pl-[104px] pr-12 bg-gray-50/20">
                {item.answer.split('\n\n').map((paragraph, index) => (
  <p key={index} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
    {paragraph}
  </p>
))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
