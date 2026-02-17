import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Container>
        <Flex className={"justify-between"}>
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
      </Container>
    </>
  );
};

export default Header;
