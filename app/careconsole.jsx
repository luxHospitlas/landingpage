"use client";

import { useEffect } from "react";

export default function WhatsAppButton() {
  useEffect(() => {
    const btn = document.getElementById("whatsappBtn");
    if (btn) {
      btn.addEventListener("click", handleWhatsappConnection);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleWhatsappConnection);
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

// ✅ Handles the click, sends data to AWS, and opens WhatsApp
async function handleWhatsappConnection() {
  const data = {
    Form_Type: "WhatsApp",
    Website: typeof window !== "undefined" ? window.location.href : "",
  };

  console.log("Sending data to AWS:", data);

  try {
    const whatsappLink = await connectToAWS(data);
    console.log("Received:", whatsappLink);

    if (whatsappLink?.link) {
      openWhatsApp(whatsappLink.link);
    } else {
      console.warn("No link received from AWS.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// ✅ Safely opens WhatsApp link in a new tab (Safari-friendly)
function openWhatsApp(link) {
  const tempAnchor = document.createElement("a");
  tempAnchor.href = link;
  tempAnchor.target = "_blank";
  tempAnchor.rel = "noopener noreferrer"; // security best practice
  document.body.appendChild(tempAnchor);
  tempAnchor.click();
  document.body.removeChild(tempAnchor);
}

// ✅ Sends POST request to your AWS API
async function connectToAWS(data) {
  try {
    const response = await fetch(
      "https://nfxleyqx44.execute-api.ap-south-1.amazonaws.com/Prod/create-lead",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      return await response.json();
    } else {
      console.error(
        "AWS Response Error:",
        response.status,
        response.statusText
      );
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("An error occurred while connecting to AWS.");
    throw error;
  }
}
