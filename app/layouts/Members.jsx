import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import Flex from "../components/Flex";

const Members = () => {
  return (
    <div className="my-32.5">
      <Container className={"text-center"}>
        <p className="font-Oswald font-semibold text-base text-[#F75709] uppercase">
          Our Team members
        </p>
        <h3 className="uppercase font-Oswald text-[#063231] mx-auto font-semibold text-[60px] leading-[66px] w-[700px] pt-2.5 pb-7.5">
          Get consulting from our best consultants
        </h3>
        <Flex className={" pt-7.5"}>
          <div className="w-1/4">
            <Image
              src={"/mOne.png"}
              height={370}
              width={305}
              className="mx-auto"
            />
            <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
              Linda F. Collins
            </h5>
            <p className="text-lg text-[#063231]">SR Marketer</p>
          </div>
          <div className="w-1/4">
            <Image
              src={"/mTwo.png"}
              height={370}
              width={305}
              className="mx-auto"
            />
            <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
              Sandra D. Rainey
            </h5>
            <p className="text-lg text-[#063231]">Executive officer</p>
          </div>
          <div className="w-1/4">
            <Image
              src={"/mThr.png"}
              height={370}
              width={305}
              className="mx-auto"
            />
            <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
              Brooklyn simmons
            </h5>
            <p className="text-lg text-[#063231]">CEO & Founder</p>
          </div>
          <div className="w-1/4">
            <Image
              src={"/mFor.png"}
              height={370}
              width={305}
              className="mx-auto"
            />
            <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
              Patrick Stewart
            </h5>
            <p className="text-lg text-[#063231]">Finance advisor</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Members;
