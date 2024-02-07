import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const line = useRef(null);
  const topHalf = useRef(null);
  const bottomHalf = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial positions
    tl.set([topHalf.current, bottomHalf.current], { y: "0%" });
    tl.set(line.current, { scaleX: 0, transformOrigin: "left", opacity: 0 });

    // Animation sequence
    tl.to(line.current, { scaleX: 1, duration: 1, ease: "power1.inOut", opacity: 1 })
        .to(line.current, { scaleX: 0, duration: 1, ease: "power1.inOut", transformOrigin: "right", opacity: 1 })
        .to(topHalf.current, { y: "-100%", duration: 0.5, ease: "power1.inOut" })
        .to(bottomHalf.current, { y: "100%", duration: 0.5, ease: "power1.inOut" }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
      <div ref={topHalf} className="bg-black w-full h-1/2"></div>
      <div ref={line} className="w-full h-[1px] bg-neutral-400 absolute"></div>
      <div ref={bottomHalf} className="bg-black w-full h-1/2"></div>
    </div>
  );
};

export default Loader;
