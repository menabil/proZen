import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <Container>
        <Flex className="flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-4 sm:mt-8 lg:mt-12">
          {/* Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/about.png"
              width={624}
              height={688}
              alt="About Company"
              className="w-full h-auto max-w-125 lg:max-w-none object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Text Content Area */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h5 className="text-sm sm:text-base text-[#F75709] font-Oswald font-semibold uppercase tracking-wider">
              About company
            </h5>

            <h3 className="py-2 sm:py-3 text-2xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#063231] font-Oswald font-semibold leading-tight uppercase">
              We committed to helping you achieve your goals
            </h3>

            <p className="text-sm sm:text-lg lg:text-xl text-[#063231] leading-relaxed my-4 sm:my-6">
              At the core of our ethos lies a dedication to our clients. Your
              success is our shared triumph, and we're unwavering in our
              commitment to delivering exceptional.
            </p>

            {/* CTA Link */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/" className="inline-block">
                <div className="text-white py-3.5 sm:py-4 px-6 sm:px-8 uppercase bg-[#063231] rounded-xl font-semibold text-sm sm:text-base font-Oswald tracking-wide hover:bg-[#F75709] transition-colors duration-300">
                  lets get in touch
                </div>
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
