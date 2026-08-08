import React from "react";
import Image from "next/image";
import Container from "../components/Container";

const teamData = [
  {
    id: 1,
    image: "/mOne.png",
    name: "Linda F. Collins",
    role: "SR Marketer",
  },
  {
    id: 2,
    image: "/mTwo.png",
    name: "Sandra D. Rainey",
    role: "Executive officer",
  },
  {
    id: 3,
    image: "/mThr.png",
    name: "Brooklyn simmons",
    role: "CEO & Founder",
  },
  {
    id: 4,
    image: "/mFor.png",
    name: "Patrick Stewart",
    role: "Finance advisor",
  },
];

const Members = () => {
  return (
    <section className="my-12 sm:my-20 lg:my-28">
      <Container className="text-center">
        {/* Section Header */}
        <p className="font-Oswald font-semibold text-sm sm:text-base text-[#F75709] uppercase tracking-wider">
          Our Team members
        </p>

        <h2 className="uppercase font-Oswald text-[#063231] font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] leading-tight max-w-full sm:max-w-175 mx-auto pt-2 pb-6 sm:pb-10">
          Get consulting from our best consultants
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="relative w-full max-w-70 sm:max-w-none aspect-305/370 rounded-xl overflow-hidden bg-[#F5F7F7]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="pt-3 sm:pt-4 text-xl sm:text-2xl text-[#063231] font-Oswald font-semibold uppercase">
                {member.name}
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-[#063231]/80 mt-0.5">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Members;
