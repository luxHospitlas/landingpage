"use client";
import { useRef, useState, useEffect } from "react";
import "./patistyles.css";

export default function PatientTalks() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      imageUrl: "/pati 1.png",
      name: "Sumetha",
    },
    {
      id: 2,
      imageUrl: "/pati 2.png",
      name: "Sumetha",
    },
    {
      id: 3,
      imageUrl: "/pati 3.png",
      name: "Sumetha",
    },
    {
      id: 4,
      imageUrl: "/pati 4.png",
      name: "Sumetha",
    },
    {
      id: 5,
      imageUrl: "/pati 5.png",
      name: "Sumetha",
    },
    {
      id: 6,
      imageUrl: "/pati 6.png",
      name: "Sumetha",
    },
    {
      id: 7,
      imageUrl: "/pati 7.png",
      name: "Sumetha",
    },
  ];
  // Update activeIndex on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const scrollWidth = scrollRef.current.scrollWidth;
      const cardWidth = 320; // .video_box width
      const maxIndex = testimonials.length - 1;

      // If scrolled to (or past) the end, set to last index
      if (scrollLeft + containerWidth >= scrollWidth - 2) {
        setActiveIndex(maxIndex);
      } else {
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, [testimonials.length]);

  const scrollToSlide = (index) => {
    setActiveIndex(index);
    scrollRef.current?.scrollTo({
      left: index * 320,
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
        {/* absolute bottom-6 left-1/2 -translate-x-1/2 */}
        <div className=" flex items-center justify-center gap-2 z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-black w-6"
                  : "bg-black/30 hover:bg-black/50"
              }`}
              onClick={() => scrollToSlide(index)}
            />
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
