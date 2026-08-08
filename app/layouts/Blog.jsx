// import React from "react";
// import Container from "../components/Container";
// import Image from "next/image";
// import bOne from "../../public/bOne.png";
// import Flex from "../components/Flex";

// const Blog = () => {
//   return (
//     <section>
//       <Container className={"py-32.5"}>
//         <div className="text-center">
//           <p className="font-Oswald font-semibold text-base text-[#F75709] uppercase">
//             recent posts
//           </p>
//           <h3 className="uppercase font-Oswald text-[#063231] mx-auto font-semibold text-[60px] leading-16.5 w-138 pt-2.5 pb-7.5">
//             Read our latest news and articles
//           </h3>
//         </div>
//         <Flex className={"gap-x-7 justify-center"}>
//           <div className="border-2 border-[#D7DEDE] rounded-[20px] w-fit group">
//             <Image src={bOne} alt="bOne" className="overflow-hidden" />
//             <div className="px-6 pt-2.5 pb-7.5">
//               <Flex className="text-[#063231] text-base gap-x-3">
//                 <p>June 16, 2024</p>
//                 <p className="border-l-3 border-[#063231] pl-3">Business</p>
//               </Flex>
//               <h5 className="w-91.5 text-[#063231] text-[28px] font-Oswald font-semibold leading-8.5 uppercase pt-2.5 pb-7.5">
//                 Building Your Own Personal Learning Curriculum
//               </h5>
//               <a
//                 href="#"
//                 className="text-[#F75709] text-base font-Oswald font-semibold leading-5 uppercase group-hover:underline duration-300"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//           <div className="border-2 border-[#D7DEDE] rounded-[20px] w-fit group">
//             <Image src={bOne} alt="bOne" className="overflow-hidden" />
//             <div className="px-6 pt-2.5 pb-7.5">
//               <Flex className="text-[#063231] text-base gap-x-3">
//                 <p>June 16, 2024</p>
//                 <p className="border-l-3 border-[#063231] pl-3">Business</p>
//               </Flex>
//               <h5 className="w-91.5 text-[#063231] text-[28px] font-Oswald font-semibold leading-8.5 uppercase pt-2.5 pb-7.5">
//                 Building Your Own Personal Learning Curriculum
//               </h5>
//               <a
//                 href="#"
//                 className="text-[#F75709] text-base font-Oswald font-semibold leading-5 uppercase group-hover:underline duration-300"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//           <div className="border-2 border-[#D7DEDE] rounded-[20px] w-fit group">
//             <Image src={bOne} alt="bOne" className="overflow-hidden" />
//             <div className="px-6 pt-2.5 pb-7.5">
//               <Flex className="text-[#063231] text-base gap-x-3">
//                 <p>June 16, 2024</p>
//                 <p className="border-l-3 border-[#063231] pl-3">Business</p>
//               </Flex>
//               <h5 className="w-91.5 text-[#063231] text-[28px] font-Oswald font-semibold leading-8.5 uppercase pt-2.5 pb-7.5">
//                 Building Your Own Personal Learning Curriculum
//               </h5>
//               <a
//                 href="#"
//                 className="text-[#F75709] text-base font-Oswald font-semibold leading-5 uppercase group-hover:underline duration-300"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         </Flex>
//       </Container>
//     </section>
//   );
// };

// export default Blog;

import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import Link from "next/link";
import bOne from "../../public/bOne.png";

const posts = [
  {
    id: 1,
    title: "Building Your Own Personal Learning Curriculum",
    date: "June 16, 2024",
    category: "Business",
    image: bOne,
    link: "#",
  },
  {
    id: 2,
    title: "Building Your Own Personal Learning Curriculum",
    date: "June 16, 2024",
    category: "Business",
    image: bOne,
    link: "#",
  },
  {
    id: 3,
    title: "Building Your Own Personal Learning Curriculum",
    date: "June 16, 2024",
    category: "Business",
    image: bOne,
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-Oswald font-semibold text-sm sm:text-base text-[#F75709] uppercase tracking-wider">
            Recent Posts
          </p>
          <h2 className="uppercase font-Oswald text-[#063231] font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] leading-tight max-w-full sm:max-w-[552px] mx-auto pt-2">
            Read our latest news and articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-items-center">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-2 border-[#D7DEDE] rounded-[20px] overflow-hidden w-full max-w-[366px] flex flex-col group transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full aspect-[366/240] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center text-[#063231] text-xs sm:text-sm gap-x-3 mb-2.5">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#063231]" />
                    <span>{post.category}</span>
                  </div>

                  <h3 className="text-[#063231] text-xl sm:text-2xl font-Oswald font-semibold leading-tight uppercase mb-6 group-hover:text-[#F75709] transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>

                <div>
                  <Link
                    href={post.link}
                    className="inline-block text-[#F75709] text-sm sm:text-base font-Oswald font-semibold uppercase group-hover:underline underline-offset-4"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
