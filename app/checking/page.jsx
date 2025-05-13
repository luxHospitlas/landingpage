"use client";
import { useEffect } from "react";
import { handleWhatsappConnection } from "../../app/careconsole";
import $ from "jquery";

export default function CheckingPage() {
  useEffect(() => {
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", function () {
        handleWhatsappConnection("LuxGPT");
      });
    }

    return () => {
      if (whatsappBtn) {
        whatsappBtn.removeEventListener("click", handleWhatsappConnection);
      }
    };
  }, []);

  return (
    <div
      className="mt-6 flex items-center justify-center md:justify-start space-x-2 bg-white rounded-full px-4 py-2 w-fit"
      id="whatsappBtn"
    >
      <div className="w-[40px] h-[40px] bg-black">
        <span>➜</span>
      </div>
    </div>
  );
}
