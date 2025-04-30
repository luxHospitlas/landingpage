"use client";
import Image from "next/image";
import "./sstyles.css";
import React from "react";

export default function Second() {
  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book an Appointment",
      // bgColor: "bg-green-200",
      arrow: "/Arrow.svg",
      link: "tel:917969084448",
    },
    {
      image: "/cost extimation.avif",
      title: "Cost Estimation",
      // bgColor: "bg-yellow-200",
      arrow: "/Arrow.svg",
      link: "https://wa.me/917969084444",
    },
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-2.avif",
      title: "Get Second Opinion",
      description: "Essentials At Your Doorstep.",
      // bgColor: "bg-pink-200",
      arrow: "/Arrow.svg",
      link: "https://wa.me/917969084444",
    },
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-5.avif",
      title: "Insurance Coverage",
      // bgColor: "bg-blue-200",
      arrow: "/Arrow.svg",
      link: "tel:917969084448",
    },
  ];

  return (
    <section className="second_section grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          target="_blank"
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
      ))}
    </section>

  );
}
