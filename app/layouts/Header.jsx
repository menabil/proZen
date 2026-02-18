import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Container
        className={"fixed top-0 left-1/2 -translate-x-1/2 w-full z-10"}
      >
        <Flex className={"justify-between py-3 text-white"}>
          <Flex className={"gap-x-2"}>
            <FaLocationDot />
            <p> 2774 Oak Drive, Plattsburgh, New York</p>
          </Flex>
          <Flex className={"gap-x-10"}>
            <Flex className={"gap-x-2"}>
              <FaPhone />
              <p> 518-564-3200</p>
            </Flex>
            <Flex className={"gap-x-2"}>
              <MdEmail />
              <p>hello@example.com</p>
            </Flex>
          </Flex>
        </Flex>
        <div className="mt-5 bg-white rounded-[20px] py-4.5 px-5">
          <Flex className={"justify-between font-Oswald"}>
            <Flex className="">
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  alt="/logo.png"
                  width={130}
                  height={33}
                />
              </Link>
              <ul className="flex gap-x-7.5 text-[#063231] uppercase font-semibold ml-15">
                <li>
                  <Link href={"/"}>
                    <Flex>
                      Home
                      <FaCaretDown />
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Flex>
                      pages
                      <FaCaretDown />
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Flex>
                      portfolio
                      <FaCaretDown />
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <Flex>
                      blog
                      <FaCaretDown />
                    </Flex>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>contact</Link>
                </li>
              </ul>
            </Flex>{" "}
            <Link href={"/"}>
              <div className="text-[#063231] py-5 px-7.5 uppercase bg-[#C3DF94] rounded-xl font-semibold text-base">
                lets get in touch
              </div>
            </Link>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Header;
