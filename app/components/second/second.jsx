"use client";
import Image from "next/image";
import "./sstyles.css";
import React from "react";
import { handleWhatsappConnection } from "../../careconsole"; // adjust path if needed

export default function Second({ services }) {
  // const services = [
  //   {
  //     image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
  //     title: "Book an Appointment",
  //     arrow: "/Arrow.svg",
  //     link: "tel:917969084448",
  //   },
  //   {
  //     image: "/cost extimation.avif",
  //     title: "Cost Estimation",
  //     arrow: "/Arrow.svg",
  //     link: "whatsapp", // dynamic link
  //   },
  //   {
  //     image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-2.avif",
  //     title: "Second Opinion",
  //     arrow: "/Arrow.svg",
  //     link: "whatsapp", // dynamic link
  //   },
  //   {
  //     image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-5.avif",
  //     title: "Insurance Coverage",
  //     arrow: "/Arrow.svg",
  //     link: "tel:917969084448",
  //   },
  // ];

  return (
    <section className="second_section grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service, index) => {
        const isWhatsApp = service.link === "whatsapp";

        return (
          <a
            key={index}
            href={isWhatsApp ? "#" : service.link}
            onClick={(e) => {
              if (isWhatsApp) {
                e.preventDefault();
                handleWhatsappConnection(service.title);
              }
            }}
            target={isWhatsApp ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="block"
          >
            <div className="sessioncards rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-40">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="image_div_sessioncard rounded-t-lg"
                />
              </div>
              <div className="flex content_Card items-center justify-center gap-2">
                <h2 className="service_title font-semibold">{service.title}</h2>
                <Image
                  className="arrowimg"
                  src={service.arrow}
                  alt="arrow-button"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
}
