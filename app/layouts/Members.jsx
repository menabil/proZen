// import React from "react";
// import Container from "../components/Container";
// import Image from "next/image";
// import Flex from "../components/Flex";

// const Members = () => {
//   return (
//     <div className="my-32.5">
//       <Container className={"text-center"}>
//         <p className="font-Oswald font-semibold text-base text-[#F75709] uppercase">
//           Our Team members
//         </p>
//         <h3 className="uppercase font-Oswald text-[#063231] mx-auto font-semibold text-[60px] leading-16.5 w-175 pt-2.5 pb-7.5">
//           Get consulting from our best consultants
//         </h3>
//         <Flex className={" pt-7.5"}>
//           <div className="w-1/4">
//             <Image
//               src={"/mOne.png"}
//               alt="mOne"
//               height={370}
//               width={305}
//               className="mx-auto"
//             />
//             <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
//               Linda F. Collins
//             </h5>
//             <p className="text-lg text-[#063231]">SR Marketer</p>
//           </div>
//           <div className="w-1/4">
//             <Image
//               src={"/mTwo.png"}
//               alt="mTwo"
//               height={370}
//               width={305}
//               className="mx-auto"
//             />
//             <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
//               Sandra D. Rainey
//             </h5>
//             <p className="text-lg text-[#063231]">Executive officer</p>
//           </div>
//           <div className="w-1/4">
//             <Image
//               src={"/mThr.png"}
//               alt="mThr"
//               height={370}
//               width={305}
//               className="mx-auto"
//             />
//             <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
//               Brooklyn simmons
//             </h5>
//             <p className="text-lg text-[#063231]">CEO & Founder</p>
//           </div>
//           <div className="w-1/4">
//             <Image
//               src={"/mFor.png"}
//               alt="mFor"
//               height={370}
//               width={305}
//               className="mx-auto"
//             />
//             <h5 className="pt-2.5 text-2xl text-[#063231] font-Oswald font-semibold uppercase">
//               Patrick Stewart
//             </h5>
//             <p className="text-lg text-[#063231]">Finance advisor</p>
//           </div>
//         </Flex>
//       </Container>
//     </div>
//   );
// };

// export default Members;


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
        
        <h2 className="uppercase font-Oswald text-[#063231] font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] leading-tight max-w-full sm:max-w-[700px] mx-auto pt-2 pb-6 sm:pb-10">
          Get consulting from our best consultants
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-none aspect-[305/370] rounded-xl overflow-hidden bg-[#F5F7F7]">
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