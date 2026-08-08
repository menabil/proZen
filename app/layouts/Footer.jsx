import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "next/image";
import Link from "next/link";
import fLogo from "../../public/fLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

// Social Links Data
const socialLinks = [
  { id: 1, icon: FaXTwitter, url: "#" },
  { id: 2, icon: FaInstagram, url: "#" },
  { id: 3, icon: FaLinkedinIn, url: "#" },
  { id: 4, icon: FaFacebookF, url: "#" },
];

// Footer Links Data
const footerData = [
  {
    title: "Features",
    links: [
      { name: "Advanced Analytics", url: "#" },
      { name: "Automation", url: "#" },
      { name: "Auto Track", url: "#" },
      { name: "Data Insights", url: "#" },
    ],
  },
  {
    title: "Menu",
    links: [
      { name: "Article & Blog", url: "#" },
      { name: "Documentation", url: "#" },
      { name: "Learn Gulaly", url: "#" },
      { name: "Tutorials", url: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", url: "#" },
      { name: "Our Team", url: "#" },
      { name: "Press", url: "#" },
      { name: "Careers", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog and Article", url: "#" },
      { name: "Community", url: "#" },
      { name: "Documentation", url: "#" },
      { name: "Tutorials", url: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#063231] pt-16 sm:pt-20 lg:pt-28">
      <Container>
        {/* Top Section: Logo, Description & Socials */}
        <Flex className="flex-col md:flex-row md:justify-between md:items-end gap-y-8 md:gap-y-0 pb-12 sm:pb-16 lg:pb-20">
          <div className="w-full md:w-auto text-center md:text-left">
            <Image
              src={fLogo}
              alt="fLogo"
              className="mx-auto md:mx-0"
              priority
            />
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-full md:max-w-112.5 lg:max-w-125 pt-4 mx-auto md:mx-0">
              At the core of our ethos lies a dedication to our clients. Your
              success is our shared triumph, and we're.
            </p>
          </div>

          <Flex className="gap-x-3 justify-center md:justify-end shrink-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.id}
                  href={social.url}
                  className="bg-[#1F4746] w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer hover:bg-[#F75709] transition-colors duration-300"
                  aria-label="Social Link"
                >
                  <Icon className="text-xl text-white" />
                </Link>
              );
            })}
          </Flex>
        </Flex>

        {/* Middle Section: Footer Links Grid */}
        <div className="py-12 sm:py-16 border-t-2 border-b-2 border-[#294F4E]">
          <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
            {footerData.map((section, index) => (
              <div key={index} className="text-center xs:text-left">
                <h6 className="pb-5 sm:pb-7 text-white font-bold text-lg sm:text-xl leading-snug uppercase tracking-wider">
                  {section.title}
                </h6>
                <ul className="space-y-2 sm:space-y-2.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-white/80 hover:text-[#F75709] text-base sm:text-lg leading-normal transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <p className="text-white/70 text-base sm:text-lg leading-normal text-center pt-6 pb-8 sm:pb-10">
          ©2026 <span className="text-[#F75709] font-medium">Nabil</span>. All
          rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
