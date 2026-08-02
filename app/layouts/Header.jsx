"use client";

import React, { useState } from "react";
import {
  FaLocationDot,
  FaCaretDown,
  FaPhone,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Flex from "../components/Flex";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "Pages", href: "/", hasDropdown: true },
    { name: "Portfolio", href: "/", hasDropdown: true },
    { name: "Blog", href: "/", hasDropdown: true },
    { name: "Contact", href: "/", hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container className="px-3 sm:px-6">
        {/* Top Info Bar: Hidden on Small Screens, Flexed on Desktop */}
        <div className="hidden lg:block border-b border-white/10">
          <Flex className="justify-between items-center py-2.5 text-white text-xs xl:text-sm">
            <Flex className="items-center gap-x-2">
              <FaLocationDot className="text-[#C3DF94] shrink-0" />
              <p className="truncate">2774 Oak Drive, Plattsburgh, New York</p>
            </Flex>

            <Flex className="items-center gap-x-6">
              <Flex className="items-center gap-x-2">
                <FaPhone className="text-[#C3DF94] shrink-0" />
                <p>518-564-3200</p>
              </Flex>
              <Flex className="items-center gap-x-2">
                <MdEmail className="text-[#C3DF94] shrink-0" />
                <p>hello@example.com</p>
              </Flex>
            </Flex>
          </Flex>
        </div>

        {/* Main Header Navbar */}
        <div className="mt-2 lg:mt-3 bg-white rounded-xl sm:rounded-[20px] py-3 px-4 sm:px-6 shadow-md relative">
          <Flex className="justify-between items-center font-Oswald">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="logo"
                width={130}
                height={33}
                className="w-24 sm:w-28 lg:w-32.5 h-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-x-6 xl:gap-x-8 text-[#063231] uppercase font-semibold text-sm xl:text-base">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F75709] transition-colors"
                  >
                    <Flex className="items-center gap-x-1">
                      {link.name}
                      {link.hasDropdown && <FaCaretDown className="text-xs" />}
                    </Flex>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block shrink-0">
              <Link href="/">
                <div className="text-[#063231] py-3 px-6 uppercase bg-[#C3DF94] hover:bg-[#b0ce7f] transition-colors rounded-xl font-semibold text-sm font-Oswald tracking-wider">
                  lets get in touch
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger Icon Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#063231] text-2xl p-1 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <FaXmark /> : <FaBars />}
            </button>
          </Flex>

          {/* Mobile & Tablet Toggle Menu */}
          {isOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-y-3 font-Oswald">
              <ul className="flex flex-col gap-y-2 text-[#063231] uppercase font-semibold text-sm">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-1.5 flex items-center justify-between hover:text-[#F75709] transition-colors"
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && <FaCaretDown className="text-xs" />}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-2 pb-1">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <div className="text-center text-[#063231] py-2.5 px-4 uppercase bg-[#C3DF94] rounded-xl font-semibold text-xs tracking-wider">
                    lets get in touch
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
