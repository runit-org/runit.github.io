import Image from "next/image";
import heroImage from "../assets/hero3.jpg";
import { useEffect, useState } from "react";

export const Hero = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const determineBackgroundColor = () => {
    if (scrollPosition > 10) {
      return "ellipse(100% 100% at 0 100%)";
    } else {
      return "ellipse(50% 100% at 0 100%)";
    }
  };

  return (
    <div className={`App-hero ${props.height}`}>
      <div className="container">
        <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-5 sm:flex sm:items-center sm:justify-between">
          <div className="sm:w-1/2 w-full pr-0 sm:pr-10 md-pr-0">
            <h2 className="block mb-4 text-3xl text-secondary sm:text-5xl">
              {props.title}
            </h2>
            <p className="block">{props.desc}</p>
          </div>
          <div className="hidden justify-center mt-8 sm:flex lg:mt-0 w-full sm:w-1/2 lg:flex-shrink-0">
            <div className="relative">
              <div
                style={{ clipPath: determineBackgroundColor() }}
                className={`overflow-hidden transition-all ease-in-out duration-500 block w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] border rounded-full  bg-gradient-to-br to-primary from-themeLight`}
              />
              <Image
                priority={true}
                src={heroImage}
                alt="runit Logo"
                className={`${props.logoWidth} rounded-xl sm:drop-shadow-2xl absolute -top-24 left-8 md:-top-20 md:left-10 lg:-top-6 lg:left-24`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
