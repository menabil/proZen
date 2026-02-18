import Image from "next/image";
import Container from "../components/Container";
import Flex from "../components/Flex";

const Service = () => {
  return (
    <div className="mt-32.5 mb-20.5">
      <Container>
        <div className="text-center pb-7.5 font-semibold font-Oswald uppercase">
          <p className="text-base text-[#F75709]">Our Services</p>
          <h3 className="text-[60px] text-[#063231] w-[596px] leading-16.5 mx-auto pt-2.5 pb-7.5">
            Versatile Range <br /> of Business Solutions
          </h3>
        </div>
        <Flex className={"flex flex-wrap gap-x-6 gap-y-7.5"}>
          <div className="py-10 px-7.5 rounded-[20px] bg-[#F5F7F7] w-159">
            <div className="p-4.5 bg-[#C3DF94] rounded-xl w-20">
              <Image
                src={"/sOne.png"}
                alt="sOne.png"
                width={"44"}
                height={"44"}
              />
            </div>
            <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald uppercase pb-2.5 pt-12.5">
              Finance Planning
            </h4>
            <p className="text-lg text-[#063231] leading-7.5 w-138.5">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>
          </div>
          <div className="py-10 px-7.5 rounded-[20px] bg-[#F5F7F7] w-159">
            <div className="p-4.5 bg-[#C3DF94] rounded-xl w-20">
              <Image
                src={"/sTwo.png"}
                alt="sTwo.png"
                width={"44"}
                height={"44"}
              />
            </div>
            <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald uppercase pb-2.5 pt-12.5">
              Business Strategy
            </h4>
            <p className="text-lg text-[#063231] leading-7.5 w-138.5">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>
          </div>
          <div className="py-10 px-7.5 rounded-[20px] bg-[#F5F7F7] w-159">
            <div className="p-4.5 bg-[#C3DF94] rounded-xl w-20">
              <Image
                src={"/sThr.png"}
                alt="sThr.png"
                width={"44"}
                height={"44"}
              />
            </div>
            <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald uppercase pb-2.5 pt-12.5">
              Digital marketing
            </h4>
            <p className="text-lg text-[#063231] leading-7.5 w-138.5">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>
          </div>
          <div className="py-10 px-7.5 rounded-[20px] bg-[#F5F7F7] w-159">
            <div className="p-4.5 bg-[#C3DF94] rounded-xl w-20">
              <Image
                src={"/sFor.png"}
                alt="sFor.png"
                width={"44"}
                height={"44"}
              />
            </div>
            <h4 className="text-[#063231] text-[28px] font-semibold font-Oswald uppercase pb-2.5 pt-12.5">
              Investment Idea
            </h4>
            <p className="text-lg text-[#063231] leading-7.5 w-138.5">
              Our team prioritizes usability and accessibility to ensure that
              every visitor enjoys a seamless intuitive.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
