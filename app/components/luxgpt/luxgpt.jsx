"use client";
import "./luxgptstyles.css";
import Image from "next/image";
import { handleWhatsappConnection } from '../../careconsole';


// function sendToWhatsApp() {
//   const message = document.getElementById('messageInput')?.value || '';
//   console.log('Message:', message); // Check if it logs correctly
//   const phoneNumber = '917969084444';
//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   window.open(whatsappURL, '_blank');
//   document.getElementById('messageInput').value = '';
// }

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
              id="messageInput"
              placeholder="Ask Me Anything"
              className="bg-transparent text-gray-700 focus:outline-none"
            />
              <button onClick={() => handleWhatsappConnection("LuxGPT")} className="bg-[#964F9C] text-white p-2 rounded-full w-10 h-10">
                ➜
              </button>
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
