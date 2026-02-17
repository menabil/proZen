import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const header = () => {
  return (
    <div>
      <Container>
        <Flex>
          <Flex>
            <FaLocationDot />
            <p> 2774 Oak Drive, Plattsburgh, New York</p>
          </Flex>
          <Flex>
            <Flex>
              <FaPhone />
              <p>518-564-3200</p>
            </Flex>
            <Flex>
              <MdMail />
              <p>hello@example.com</p>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default header;
