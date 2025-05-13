"use client";
import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const btn = document.getElementById("whatsappBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        alert("Button clicked!");
      });
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className="flex justify-center mt-10">
      <button
        id="whatsappBtn"
        type="button"
        className="bg-[#964F9C] text-white p-2 rounded-full w-10 h-10 pointer-events-auto z-50"
      >
        ➜
      </button>
    </div>
  );
}
