import React from "react";
import Container from "../components/Container";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import testOne from "../../public/testOne.png";

const Testimoni = () => {
  return (
    <section>
      <Container>
        <div className="bg-[#F5F7F7] p-6 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[20px]">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            {/* Left Side: Header & Navigation */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between">
              <div>
                <p className="text-[#F75709] font-semibold font-Oswald text-sm sm:text-base leading-none tracking-wider uppercase">
                  TESTIMONIALS
                </p>
                <h2 className="text-[#063231] font-semibold font-Oswald text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] leading-tight max-w-full lg:max-w-85 uppercase pt-2 pb-6 lg:pb-12">
                  What are they saying about us?
                </h2>
              </div>

              {/* Slider Arrows */}
              <div className="flex gap-3">
                <button
                  aria-label="Previous Testimonial"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-[#D7DEDE] hover:border-[#F75709] border-2 flex items-center justify-center text-[#063231] text-lg sm:text-xl hover:bg-[#F75709] hover:text-white cursor-pointer transition-colors duration-300"
                >
                  <FaAngleLeft />
                </button>
                <button
                  aria-label="Next Testimonial"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-[#F75709] hover:border-[#D7DEDE] border-2 flex items-center justify-center bg-[#F75709] text-white hover:bg-transparent hover:text-[#063231] text-lg sm:text-xl cursor-pointer transition-colors duration-300"
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>

            {/* Right Side: Quote Content & Profile */}
            <div className="w-full lg:w-7/12 border-t-2 lg:border-t-0 lg:border-l-2 border-[#D7DEDE] pt-6 lg:pt-0 lg:pl-12 flex flex-col justify-between">
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-[#F75709] text-base sm:text-lg mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#063231] leading-relaxed max-w-full lg:max-w-145 pb-6 sm:pb-8">
                  "Guidance transformed the way we business. Their innovative
                  solutions and forward-thinking approach revitalized our
                  organization. The results speak for themselves, and we
                  couldn't be happier with the outcome. Trusting Guidance was a
                  wise investment in our future."
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={testOne}
                    alt="John Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold font-Oswald leading-snug text-[#063231] uppercase">
                    John Smith
                  </h3>
                  <p className="text-xs sm:text-sm text-[#063231]/80">
                    Head of Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimoni;
