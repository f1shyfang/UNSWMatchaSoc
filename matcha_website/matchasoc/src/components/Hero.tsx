import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // no-op animation placeholders to keep parity with existing GSAP usage
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/events/making-matcha-drink.jpg"
          alt="Traditional matcha tea ceremony setup with bamboo whisk and ceramic bowls"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 ref={titleRef} className="text-5xl lg:text-7xl font-extrabold leading-tight text-black/90">
              <span className="text-[#71B340]">Matcha</span> Society
              <br />
              <span ref={subtitleRef} className="text-3xl lg:text-4xl font-normal text-black/70">at UNSW</span>
            </h1>

            <p className="text-lg lg:text-xl text-black/70 max-w-lg">
              Join our vibrant community celebrating Japanese tea culture, mindfulness, and friendship. Experience the art of matcha with fellow students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 rounded-lg bg-[#71B340] hover:bg-[#598B2C] text-white font-semibold shadow-lg transition-all duration-300 text-center">
                Join Our Society
              </Link>
              <Link href="/about" className="px-6 py-3 rounded-lg border border-[#71B340] text-[#71B340] hover:bg-[#71B340] hover:text-white transition-all duration-300 text-center">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#A7D37A]/20 to-[#71B340]/30 blur-3xl absolute -top-10 -left-10"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#71B340]/10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#598B2C]"></span>
                    Weekly matcha tastings
                  </li>
                 
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#598B2C]"></span>
                     workshops
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#598B2C]"></span>
                    Social events & meetups
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
