'use client';

import Image from 'next/image';

const logos = [
  '/images/carousel/carousel1.png',
  '/images/carousel/carousel2.png',
  '/images/carousel/carousel3.png',
  '/images/carousel/carousel4.png',
  '/images/carousel/carousel5.png',
  '/images/carousel/carousel6.png',
  '/images/carousel/carousel7.png',
  '/images/carousel/carousel8.png',
];

export default function CarouselImages() {
  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden bg-transparent py-12">
      <div className="relative flex">
        <div className="flex animate-scroll gap-4 items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative overflow-hidden border-4 border-white"
              style={{ 
                width: '140px', 
                height: '180px',
                borderTopRightRadius: index % 2 === 0 ? '15px' : '0px',
                borderTopLeftRadius: index % 2 === 1 ? '15px' : '0px'
              }}
            >
              <Image
                src={logo}
                alt={`Partner logo ${(index % logos.length) + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
