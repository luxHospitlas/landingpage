import React from "react";
import "./wwtstyles.css";
import Image from "next/image";

const ConditionsWeTreat = () => {
  return (
    <section className="py-10 bg-white text-center whatwetreat_section">
      <h2 className="text-2xl font-semibold text-indigo-900 mb-8">
        Conditions We Treat
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Piles / Hemorrhoids */}
        <div className="bg-white border border-black-200 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 content_box">
          <div className="mb-4">
            <Image
              src="/piles 1.png"
              alt="Piles / Hemorrhoids"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 font-medium text-base">
            Piles / Hemorrhoids
          </p>
        </div>

        {/* Anal Fistula */}
        <div className="bg-white border border-black-200 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 content_box">
          <div className="mb-4">
            <Image
              src="/anal fistula 1.png"
              alt="Anal Fistula"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 font-medium text-base">Anal Fistula</p>
        </div>

        {/* Anal Fissures */}
        <div className="bg-white border border-black-200 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 content_box">
          <div className="mb-4">
            <Image
              src="/Anal Fissures 1.png"
              alt="Anal Fissures"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 font-medium text-base">Anal Fissures</p>
        </div>

        {/* Perianal Abscess */}
        <div className="bg-white border border-black-200 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-200 content_box">
          <div className="mb-4">
            <Image
              src="/perianal abscess 1.png"
              alt="Perianal Abscess"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <p className="text-gray-700 font-medium text-base">
            Perianal Abscess
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConditionsWeTreat;
