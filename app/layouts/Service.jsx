import React from "react";
import Image from "next/image";
import Container from "../components/Container";
import Flex from "../components/Flex";

const servicesData = [
  {
    id: 1,
    icon: "/sOne.png",
    title: "Finance Planning",
    desc: "Our team prioritizes usability and accessibility to ensure that every visitor enjoys a seamless intuitive.",
  },
  {
    id: 2,
    icon: "/sTwo.png",
    title: "Business Strategy",
    desc: "Our team prioritizes usability and accessibility to ensure that every visitor enjoys a seamless intuitive.",
  },
  {
    id: 3,
    icon: "/sThr.png",
    title: "Digital marketing",
    desc: "Our team prioritizes usability and accessibility to ensure that every visitor enjoys a seamless intuitive.",
  },
  {
    id: 4,
    icon: "/sFor.png",
    title: "Investment Idea",
    desc: "Our team prioritizes usability and accessibility to ensure that every visitor enjoys a seamless intuitive.",
  },
];

const Service = () => {
  return (
    <section className="my-12 sm:my-20 lg:my-28">
      <Container>
        {/* Section Header */}
        <div className="text-center pb-6 sm:pb-10 font-Oswald uppercase">
          <p className="text-sm sm:text-base text-[#F75709] font-semibold tracking-wider">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] text-[#063231] font-semibold leading-tight max-w-full sm:max-w-150 mx-auto pt-2">
            Versatile Range <br className="hidden sm:block" /> of Business
            Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <Flex className="flex-wrap gap-5 sm:gap-6 lg:gap-8 justify-between">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[20px] bg-[#F5F7F7] w-full lg:w-[calc(50%-16px)] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="p-3.5 sm:p-4 bg-[#C3DF94] rounded-xl w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={44}
                    height={44}
                    className="w-8 sm:w-10 h-auto object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#063231] text-xl sm:text-2xl lg:text-[28px] font-semibold font-Oswald uppercase pb-2 sm:pb-3 pt-6 sm:pt-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-[#063231]/90 leading-relaxed max-w-full">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
