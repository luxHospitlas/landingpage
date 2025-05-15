"use client";
import { useRef, useState } from "react";
import "./patistyles.css";

export default function PatientTalks() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      imageUrl:
        "/pati 1.png",
      name: "Sumetha",
    },
    {
      id: 2,
      imageUrl:
        "/pati 2.png",
      name: "Sumetha",
    },
    {
      id: 3,
      imageUrl:
        "/pati 3.png",
      name: "Sumetha",
    },
    {
      id: 4,
      imageUrl:
        "/pati 4.png",
      name: "Sumetha",
    },
    {
      id: 5,
      imageUrl:
        "/pati 5.png",
      name: "Sumetha",
    },
    {
      id: 6,
      imageUrl:
        "/pati 6.png",
      name: "Sumetha",
    },
    {
      id: 7,
      imageUrl:
        "/pati 7.png",
      name: "Sumetha",
    },
  ];

  const scrollToSlide = (index) => {
    setActiveIndex(index);
    scrollRef.current?.scrollTo({
      left: index * 320, // Adjust width as per your .video_box width
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="text-center patient_section">
      <h2 className="text-xl sm:1xl font-bold text-indigo-900 patienttalk_heading">
        Patients Love Us
      </h2>

      <div className="relative mt-6">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide videos_boxex"
        >
          {testimonials.map((testimonial, index) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

const VideoCard = ({ testimonial }) => {
  return (
    <div className="snap-center w-64 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-lg video_box">
      <img
        src={testimonial.imageUrl}
        alt="Testimonial"
        className="object-cover w-full h-full"
      />
      {/* <div className="p-4 text-center">
        <p className="text-gray-900 font-bold">{testimonial.name}</p>
      </div> */}
    </div>
  );
};
