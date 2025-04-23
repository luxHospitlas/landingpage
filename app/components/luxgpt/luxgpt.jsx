"use client";
import "./luxgptstyles.css";
import Image from "next/image";

export default function Luxgpt() {
  return (
    <>
      <section className="Luxgpt_section">
        <div className="md:w-1/2 text-center md:text-left left_Container">
          <h2 className="text_luxgot font-500 text-white">
            <span className="text-yellow-400 ">LUXGPT</span> : Your One <br />
            <span className="gpttext_span_mobile text-white">Message Away<br></br> Companion</span>
            <span className="gpttext_span_desktop text-white">Message Away Companion</span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed luxgpt_para">
            Healthcare, Simplified—Everything You Need In One Place. From
            Sharing Medical Reports To Getting Answers About Insurance Or Doctor
            Consultations, Just Send A Quick Text Or Voice Note For Instant
            Support.
          </p>

          <div className="mt-6 flex items-center justify-center md:justify-start space-x-2 bg-white rounded-full px-4 py-2 w-fit">
            <input
              type="text"
              placeholder="Enter your enquiry here ..."
              className="bg-transparent text-gray-700 focus:outline-none"
            />
            <a
              href="https://wa.me/917969084444"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#964F9C] text-white p-2 rounded-full w-10 h-10">
                ➜
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0 second_box">
          <Image
            src="/AskGPTAnything.png"
            alt="LUXGPT Chat"
            className="w-[300px] h-[320px] rounded-xl object-fill gpt_image"
            width={500}
            height={320} // Updated height
          />
        </div>
      </section>
    </>
  );
}
