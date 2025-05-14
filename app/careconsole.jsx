"use client";

export async function handleWhatsappConnection(formType = "WhatsApp") {
  const data = {
    Form_Type: formType,
    Website: typeof window !== "undefined" ? window.location.href : "",
  };

  console.log("Sending data to AWS:", data);

  try {
    const whatsappLink = await connectToAWS(data);
    console.log("Received:", whatsappLink);

    if (whatsappLink?.link) {
      // openWhatsApp(whatsappLink.link);
       window.location.href = whatsappLink.link;
    } else {
      console.warn("No link received from AWS.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function openWhatsApp(link) {
  const tempAnchor = document.createElement("a");
  tempAnchor.href = link;
  tempAnchor.target = "_blank";
  document.body.appendChild(tempAnchor);
  tempAnchor.click();
  document.body.removeChild(tempAnchor);
}

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
      console.error("AWS Response Error:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("An error occurred while connecting to AWS.");
    throw error;
  }
}