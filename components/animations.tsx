import animationData from "@/utils/animation.json";
import Lottie from "lottie-react";
import Image from 'next/image';
import { useRef } from "react";

const Animations = () => {
  const lottieRef = useRef(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://klink-cdn.klink.finance/ecosystem/klink_coin.webm" type="video/webm" />
        <source src="/video/klink_coin.mp4" type="video/mp4" />
      </video>

      {/* Lottie animation on top of it, hence `animationData` is provided empty */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Lottie lottieRef={lottieRef} animationData={animationData} className="w-1/2 h-auto" />
      </div>

      {/* Alternative: WebP animation on top of it instead of Lottie */}
      <Image
        src="https://klink-cdn.klink.finance/ecosystem/klink_coin.webp"
        className="absolute top-0 left-0 w-1/2 h-auto mx-auto opacity-80"
        alt="Animated Hero Overlay"
      />
    </div>
  );
};

export default Animations;