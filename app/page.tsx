"use client";

import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import MissionStatement from '@/components/sections/missionStatement';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-screen items-center justify-items-center min-h-screen p-40 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />

        <Image
          src="img/pointed-background.svg"
          alt="Pointed background"
          width={1778.9808349609375}
          height={570.3025512695312}
          className='mt-[-2.5rem]'
        />

        <MissionStatement />

        <Image
          src="img/pointed-background.svg"
          alt="Pointed background"
          width={1778.9808349609375}
          height={570.3025512695312}
          className='mt-[-10rem]'
        />

        <Footer />
      </main>
    </div>
  );
}