import { useEffect, useRef, useState } from "react";
import "./patistyles.css";

export default function PatientTalks() {
  const scrollRef = useRef(null);
  const [progresses, setProgresses] = useState([]);

  const testimonials = [
    { id: 1, imageUrl: "/pati 1.png", name: "Sumetha" },
    { id: 2, imageUrl: "/pati 2.png", name: "Sumetha" },
    { id: 3, imageUrl: "/pati 3.png", name: "Sumetha" },
    { id: 4, imageUrl: "/pati 4.png", name: "Sumetha" },
    { id: 5, imageUrl: "/pati 5.png", name: "Sumetha" },
    { id: 6, imageUrl: "/pati 6.png", name: "Sumetha" },
    { id: 7, imageUrl: "/pati 7.png", name: "Sumetha" },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 320; // Adjust if different
      const totalCards = testimonials.length;

      const newProgress = Array(totalCards).fill(0);

      testimonials.forEach((_, index) => {
        const start = index * cardWidth;
        const end = start + cardWidth;

        if (scrollLeft >= end) {
          newProgress[index] = 100;
        } else if (scrollLeft >= start && scrollLeft < end) {
          const visiblePercent = ((scrollLeft - start) / cardWidth) * 100;
          newProgress[index] = Math.min(Math.max(visiblePercent, 0), 100);
        }
      });

      setProgresses(newProgress);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => container.removeEventListener("scroll", handleScroll);
  }, [testimonials]);

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
          {testimonials.map((testimonial) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Custom Progress Navigation */}
        <div className="progress-container">
          {testimonials.map((_, index) => (
            <div key={index} className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progresses[index] || 0}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const VideoCard = ({ testimonial }) => (
  <div className="snap-center w-80 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-lg video_box">
    <img
      src={testimonial.imageUrl}
      alt={testimonial.name}
      className="object-cover w-full h-full"
    />
  </div>
);
