import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import Image from "next/image";
import testOne from "../../public/testOne.png";

const Testimoni = () => {
  return (
    <section>
      <Container>
        <div className="bg-[#F5F7F7] p-25 rounded-[20px]">
          <Flex className={"justify-between"}>
            <div className="">
              <p className="text-[#F75709] font-semibold font-Oswald text-base leading-4">
                TESTIMONIALS
              </p>
              <h3 className="text-[#063231] font-semibold font-Oswald text-[60px] leading-16.5 w-80 uppercase pb-30 pt-3">
                What are they saying about us?
              </h3>
              <Flex className={"gap-x-3"}>
                <div className="w-13 h-13 rounded-full border-[#D7DEDE] hover:border-[#F75709] border-2 relative text-[#063231] text-2xl hover:bg-[#F75709] hover:text-white cursor-pointer duration-300">
                  <FaAngleLeft className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
                <div className="w-13 h-13 rounded-full hover:border-[#D7DEDE] border-[#F75709] border-2 relative hover:text-[#063231] hover:bg-transparent text-2xl bg-[#F75709] text-white cursor-pointer duration-300">
                  <FaAngleRight className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
                </div>
              </Flex>
            </div>
            <div className="border-l-2 border-[#D7DEDE] pl-18">
              <Flex className={"gap-x-1 text-[#F75709]"}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Flex>
              <p className="text-2xl font-extrabold text-[#063231] leading-9 w-145 pt-1 pb-12.5">
                "Guidance transformed the way we business. Their innovative
                solutions and forward-thinking approach revitalized our
                organization. The results for themselves, and we couldn't be
                happier with the outcome. Trusting Guidance was a wise
                investment in our future."
              </p>
              <Image src={testOne} />
              <p className="text-xl font-semibold font-Oswald leading-8 text-[#063231] ">
                John Smith
              </p>
              <p className="text-lg leading-5 text-[#063231] ">
                Head of Developer
              </p>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Testimoni;
