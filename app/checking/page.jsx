"use client";
import { useEffect } from "react";
import { handleWhatsappConnection } from "../../app/careconsole";

export default function CheckingPage() {
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      const btn = document.getElementById("whatsappBtn");
      if (btn) {
        btn.addEventListener("click", () => {
          handleWhatsappConnection("LuxGPT");
        });
      }

      return () => {
        if (btn) {
          btn.removeEventListener("click", () => {
            handleWhatsappConnection("LuxGPT");
          });
        }
      };
    }
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center md:justify-start space-x-2 bg-white rounded-full px-4 py-2 w-fit">
      <input
        type="text"
        id="messageInput"
        placeholder="Ask Me Anything"
        className="bg-transparent text-gray-700 focus:outline-none"
      />
      <button
        type="button"
        id="whatsappBtn"
        className="pointer-events-auto bg-[#964F9C] text-white p-2 rounded-full w-10 h-10"
      >
        ➜
      </button>
    </div>
  );
}
