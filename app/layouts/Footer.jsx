import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "next/image";
import fLogo from "../../public/fLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#063231] pt-30">
      <Container>
        <Flex className={"justify-between items-end pb-17.5"}>
          <div className="">
            <Image src={fLogo} alt="fLogo" />
            <p className="text-white text-lg leading-7.5 w-125 pt-2.5">
              At the core of our ethos lies a dedication to our clients. Your
              success is our shared triumph, and we're.
            </p>
          </div>
          <Flex className={"gap-x-2.5"}>
            <div className="bg-[#1F4746] w-11 h-11 relative rounded-xl cursor-pointer">
              <FaXTwitter className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white" />
            </div>
            <div className="bg-[#1F4746] w-11 h-11 relative rounded-xl cursor-pointer">
              <FaInstagram className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white" />
            </div>
            <div className="bg-[#1F4746] w-11 h-11 relative rounded-xl cursor-pointer">
              <FaLinkedinIn className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white" />
            </div>
            <div className="bg-[#1F4746] w-11 h-11 relative rounded-xl cursor-pointer">
              <FaFacebookF className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white" />
            </div>
          </Flex>
        </Flex>
        <Flex
          className={
            "py-16 border-t-2 border-b-2 border-[#294F4E] justify-between items-start"
          }
        >
          <div className="">
            <h6 className="pb-7.5 text-white font-bold text-xl leading-8 uppercase">
              Features
            </h6>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Advanced Analytics
            </p>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Advanced Analytics
            </p>
            <p className="text-white text-lg leading-6.5 pb-1.5">Auto Track</p>
            <p className="text-white text-lg leading-6.5">Data Insights</p>
          </div>
          <div className="">
            <h6 className="pb-7.5 text-white font-bold text-xl leading-8 uppercase">
              Menu
            </h6>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Article & Blog
            </p>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Documentation
            </p>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Learn Gulaly
            </p>
            <p className="text-white text-lg leading-6.5">Tutorials</p>
          </div>
          <div className="">
            <h6 className="pb-7.5 text-white font-bold text-xl leading-8 uppercase">
              Company
            </h6>
            <p className="text-white text-lg leading-6.5 pb-1.5">About Us</p>
            <p className="text-white text-lg leading-6.5 pb-1.5">Our Team</p>
            <p className="text-white text-lg leading-6.5 pb-1.5">Press</p>
          </div>
          <div className="">
            <h6 className="pb-7.5 text-white font-bold text-xl leading-8 uppercase">
              Resources
            </h6>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Blog and Article
            </p>
            <p className="text-white text-lg leading-6.5 pb-1.5">Community</p>
            <p className="text-white text-lg leading-6.5 pb-1.5">
              Documentation
            </p>
            <p className="text-white text-lg leading-6.5 pb-1.5">Tutorials</p>
          </div>
        </Flex>
        <p className="text-white text-lg leading-7.5 text-center pt-5 pb-10">
          ©2026 <span className="text-[#F75709]">Nabil</span>. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
