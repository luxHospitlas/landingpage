"use client";
import { useEffect } from "react";
import { handleWhatsappConnection } from "../../app/careconsole";
import $ from "jquery";

export default function CheckingPage() {
  useEffect(() => {
    $(function () {
      $("#whatsappBtn").on("click", function () {
        handleWhatsappConnection("LuxGPT");
      });
    });

    // Optional cleanup
    return () => {
      $("#whatsappBtn").off("click");
    };
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
