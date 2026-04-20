import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import bOne from "../../public/bOne.png";
import Flex from "../components/Flex";

const Blog = () => {
  return (
    <section>
      <Container className={"py-32.5"}>
        <div className="text-center">
          <p className="font-Oswald font-semibold text-base text-[#F75709] uppercase">
            recent posts
          </p>
          <h3 className="uppercase font-Oswald text-[#063231] mx-auto font-semibold text-[60px] leading-16.5 w-138 pt-2.5 pb-7.5">
            Read our latest news and articles
          </h3>
        </div>
        <Flex className={"gap-x-7 justify-center"}>
          <div className="border-2 border-[#D7DEDE] rounded-[20px] w-fit group">
            <Image src={bOne} alt="bOne" className="overflow-hidden" />
            <div className="px-6 pt-2.5 pb-7.5">
              <Flex className="text-[#063231] text-base gap-x-3">
                <p>June 16, 2024</p>
                <p className="border-l-3 border-[#063231] pl-3">Business</p>
              </Flex>
              <h5 className="w-91.5 text-[#063231] text-[28px] font-Oswald font-semibold leading-8.5 uppercase pt-2.5 pb-7.5">
                Building Your Own Personal Learning Curriculum
              </h5>
              <a
                href="#"
                className="text-[#F75709] text-base font-Oswald font-semibold leading-5 uppercase group-hover:underline duration-300"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="border-2 border-[#D7DEDE] rounded-[20px] w-fit group">
            <Image src={bOne} alt="bOne" className="overflow-hidden" />
            <div className="px-6 pt-2.5 pb-7.5">
              <Flex className="text-[#063231] text-base gap-x-3">
                <p>June 16, 2024</p>
                <p className="border-l-3 border-[#063231] pl-3">Business</p>
              </Flex>
              <h5 className="w-91.5 text-[#063231] text-[28px] font-Oswald font-semibold leading-8.5 uppercase pt-2.5 pb-7.5">
                Building Your Own Personal Learning Curriculum
              </h5>
              <a
                href="#"
                className="text-[#F75709] text-base font-Oswald font-semibold leading-5 uppercase group-hover:underline duration-300"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="border-2 border-[#D7DEDE] rounded-[20px] w-fit group">
            <Image src={bOne} alt="bOne" className="overflow-hidden" />
            <div className="px-6 pt-2.5 pb-7.5">
              <Flex className="text-[#063231] text-base gap-x-3">
                <p>June 16, 2024</p>
                <p className="border-l-3 border-[#063231] pl-3">Business</p>
              </Flex>
              <h5 className="w-91.5 text-[#063231] text-[28px] font-Oswald font-semibold leading-8.5 uppercase pt-2.5 pb-7.5">
                Building Your Own Personal Learning Curriculum
              </h5>
              <a
                href="#"
                className="text-[#F75709] text-base font-Oswald font-semibold leading-5 uppercase group-hover:underline duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
