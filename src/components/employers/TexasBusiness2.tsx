"use client";
import React from "react";

const TexasBusinessSection: React.FC = () => {
  return (
    <div className="relative">
    <section className=" relative w-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center ">
      {/* Background Image */}
      <div
        className="h-[306px] md:h-[606px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.texicare.com/wp-content/uploads/2024/02/Moving-Product-with-a-Forklift.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Content */}
      <div className="container w-full relative z-10 pl-4 flex flex-col justify-center h-full md:absolute md:top-8 md:left-0 md:h-full px-2 md:p-24">
        <h2 className="mt-12 font-extrabold text-[48px] leading-[1] md:text-[75px] md:leading-[75px] text-left text-[#001748] md:text-white md:mt-0 md:mb-0 ">
          We know Texas. <br /> We know Texas small business.
        </h2>
        <p className="mt-6 mb-24  md:mt-14 text-2xl md:text-[22px] md:leading-[33px] leading-relaxed text-left text-[#3B3B3B] md:text-white  ">
          Texicare was created by seasoned healthcare <br className="hidden md:block" /> professionals with a deep
          commitment to our state. <br className="hidden md:block" />
          We&apos;re a new company with big ambitions for Texas <br className="hidden md:block" /> small business.
        </p>
      </div>
    </section>
    </div>
  );
};

export default TexasBusinessSection;
