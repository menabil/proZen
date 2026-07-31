import React from "react";
import Container from "../components/Container";
import Link from "next/link";
import Flex from "../components/Flex";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[url(/banner.png)] bg-cover bg-center pt-12 sm:pt-20 lg:pt-30 pb-12 sm:pb-16 lg:pb-0 overflow-hidden">
      <Container>
        <Flex className="flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="uppercase font-Oswald font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] text-white leading-tight lg:leading-[1.1] max-w-full lg:max-w-[600px]">
              Innovative <span className="text-[#C3DF94]">business</span>{" "}
              solutions for everyone
            </h1>

            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-full lg:max-w-125 pt-3 sm:pt-4 pb-6 sm:pb-8">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href="/" className="inline-block">
                <div className="text-white py-3.5 sm:py-4 px-6 sm:px-8 uppercase bg-[#F75709] rounded-xl font-semibold text-sm sm:text-base font-Oswald tracking-wide hover:bg-[#e04c00] transition-colors duration-300">
                  lets get in touch
                </div>
              </Link>
            </div>
          </div>

          {/* Right Hero Image Area */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-6 lg:mt-0">
            {/* Main Hero Image */}
            <div className="relative max-w-[320px] sm:max-w-112.5 lg:max-w-none w-full flex justify-center">
              <Image
                src="/hero.png"
                alt="hero"
                height={904}
                width={688}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Decorative Shape (Visible on Tablet & Desktop) */}
              <Image
                src="/bannerShap.png"
                alt="bannerShap"
                height={178}
                width={130}
                className="absolute top-4 sm:top-10 left-0 w-12 sm:w-20 lg:w-32 h-auto pointer-events-none"
              />

              {/* Floating Card 1 - ROI */}
              <div className="backdrop-blur-lg px-4 sm:px-6 py-3 sm:py-5 rounded-2xl text-white bg-white/10 border border-white/20 w-36 sm:w-48 lg:w-54 absolute bottom-4 sm:bottom-12 -left-2 sm:-left-6 lg:-left-10 shadow-lg">
                <h4 className="font-Oswald text-2xl sm:text-4xl lg:text-[50px] font-semibold leading-tight">
                  92%
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
                  Return on investment
                </p>
              </div>

              {/* Floating Card 2 - Clients */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 px-4 sm:px-6 py-3 sm:py-5 rounded-2xl text-white w-40 sm:w-52 lg:w-60 absolute top-12 sm:top-24 lg:top-36 -right-2 sm:-right-4 lg:right-0 shadow-lg">
                <h4 className="font-Oswald text-2xl sm:text-4xl lg:text-[50px] font-semibold leading-tight">
                  21.1K
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
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
