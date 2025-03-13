
const Animations = () => {
  // const lottieRef = useRef(null);

  return (
    <div className="absolute w-491 h-788 md:w-full h-screen overflow-hidden top-375 z-1">
      {/* Background video */}
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
      {/*
      <div className="absolute inset-0 flex justify-center items-center">
        <Lottie lottieRef={lottieRef} animationData={animationData} className="w-1/2 h-auto" />
      </div>
      */}
    </div>
  );
};

export default Animations;