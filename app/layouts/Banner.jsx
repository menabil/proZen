import React from "react";
import Container from "../components/Container";
import Link from "next/link";
import Flex from "../components/Flex";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[url(/banner.png)] bg-cover bg-center pt-22 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-20 overflow-hidden min-h-screen flex items-center">
      <Container>
        <Flex className="flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="uppercase font-Oswald font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white leading-tight lg:leading-[1.1] max-w-full lg:max-w-150">
              Innovative <span className="text-[#C3DF94]">business</span>{" "}
              solutions for everyone
            </h1>

            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-full lg:max-w-125 pt-3 sm:pt-4 pb-6 sm:pb-8 mx-auto lg:mx-0">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href="/" className="inline-block">
                <div className="text-white py-3.5 sm:py-4 px-6 sm:px-8 uppercase bg-[#F75709] rounded-xl font-semibold text-sm sm:text-base font-Oswald tracking-wide hover:bg-[#e04c00] transition-colors duration-300 shadow-md">
                  lets get in touch
                </div>
              </Link>
            </div>
          </div>

          {/* Right Hero Image Area */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-6 lg:mt-0 px-2 sm:px-6">
            {/* Main Hero Image Container */}
            <div className="relative max-w-70 xs:max-w-[320px] sm:max-w-112.5 lg:max-w-none w-full flex justify-center">
              <Image
                src="/hero.png"
                alt="hero"
                height={904}
                width={688}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Decorative Shape */}
              <Image
                src="/bannerShap.png"
                alt="bannerShap"
                height={178}
                width={130}
                className="absolute top-2 sm:top-6 left-0 w-8 sm:w-16 lg:w-28 h-auto pointer-events-none"
              />

              {/* Floating Card 1 - ROI */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-white w-28 xs:w-32 sm:w-44 lg:w-52 absolute bottom-2 sm:bottom-8 -left-2 sm:-left-4 lg:-left-8 shadow-lg">
                <h4 className="font-Oswald text-xl sm:text-3xl lg:text-4xl font-semibold leading-none">
                  92%
                </h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 mt-1">
                  Return on investment
                </p>
              </div>

              {/* Floating Card 2 - Clients */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-white w-32 xs:w-36 sm:w-48 lg:w-56 absolute top-8 sm:top-16 lg:top-24 -right-2 sm:-right-4 lg:right-0 shadow-lg">
                <h4 className="font-Oswald text-xl sm:text-3xl lg:text-4xl font-semibold leading-none">
                  21.1K
                </h4>
                <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 mt-1">
                  Happy clients worldwide
                </p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
