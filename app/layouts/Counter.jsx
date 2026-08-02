import React from "react";
import Container from "../components/Container";

const Counter = () => {
  return (
    <section className="my-12 sm:my-20 lg:my-28">
      <Container>
        <div className="bg-[#F5F7F7] rounded-2xl sm:rounded-[20px] py-8 px-4 sm:px-8 lg:px-12">
          {/* Mobile View: 1 Column Stacked, Desktop View: 3 Column Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 md:divide-x-3 divide-[#D7DEDE]">
            {/* Stat 1 */}
            <div className="text-center pt-6 md:pt-0 first:pt-0 md:px-4 lg:px-6 flex flex-col justify-center">
              <h3 className="text-[#063231] text-4xl sm:text-6xl lg:text-[75px] xl:text-[80px] font-Oswald font-semibold leading-tight">
                8K<span className="text-[#F75709]">+</span>
              </h3>
              <h4 className="font-Oswald font-semibold text-lg sm:text-xl lg:text-2xl text-[#063231] mt-1 sm:mt-2">
                Years in business
              </h4>
              <p className="text-xs sm:text-base lg:text-lg text-[#063231]/80 mt-1 max-w-62.5 mx-auto">
                Creating the successful path
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center pt-6 md:pt-0 md:px-4 lg:px-6 flex flex-col justify-center">
              <h3 className="text-[#063231] text-4xl sm:text-6xl lg:text-[75px] xl:text-[80px] font-Oswald font-semibold leading-tight">
                340<span className="text-[#F75709]">+</span>
              </h3>
              <h4 className="font-Oswald font-semibold text-lg sm:text-xl lg:text-2xl text-[#063231] mt-1 sm:mt-2">
                Projects delivered
              </h4>
              <p className="text-xs sm:text-base lg:text-lg text-[#063231]/80 mt-1 max-w-62.5 mx-auto">
                with client satisfaction in 6 years
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center pt-6 md:pt-0 md:px-4 lg:px-6 flex flex-col justify-center">
              <h3 className="text-[#063231] text-4xl sm:text-6xl lg:text-[75px] xl:text-[80px] font-Oswald font-semibold leading-tight">
                28<span className="text-[#F75709]">+</span>
              </h3>
              <h4 className="font-Oswald font-semibold text-lg sm:text-xl lg:text-2xl text-[#063231] mt-1 sm:mt-2">
                Team members
              </h4>
              <p className="text-xs sm:text-base lg:text-lg text-[#063231]/80 mt-1 max-w-62.5 mx-auto">
                Working for your success
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Counter;
