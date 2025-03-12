"use client";

import Footer from '@/components/sections/footer';
import Hero from '@/components/sections/hero';
import MissionStatement from '@/components/sections/missionStatement';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-40 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Image src="img/pointed-background.svg" alt="Klink logo" fill />
        <MissionStatement />
        <Image src="img/pointed-background.svg" alt="Klink logo" fill />
        <Footer />
      </main>
    </div>
  );
}