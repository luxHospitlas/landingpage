'use client';
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import './patistyles.css';

export default function PatientTalks() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    { id: 1, videoUrl: "/bg-video.mp4", name: "Sumetha" },
    { id: 2, videoUrl: "/bg-video.mp4", name: "Sumetha" },
    { id: 3, videoUrl: "/bg-video.mp4", name: "Sumetha" },
    { id: 4, videoUrl: "/bg-video.mp4", name: "Sumetha" },
  ];

  const scrollToSlide = (index) => {
    setActiveIndex(index);
    scrollRef.current?.scrollTo({
      left: index * 320,  // Adjust width as per your .video_box width
      behavior: "smooth",
    });
  };

  return (
    <section 
      ref={ref} 
      className={`text-center transition-opacity duration-500 patient_section ${inView ? "opacity-100" : "opacity-0"}`}
    >
      <h2 className="text-3xl sm:1xl font-bold text-gray-900 patienttalk_heading">Patients Love Us</h2>

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
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

const VideoCard = ({ testimonial }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="snap-center w-64 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden shadow-lg video_box"
    >
      {inView ? (
        <video src={testimonial.videoUrl} muted loop className="object-cover w-full h-[240px]" />
      ) : (
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
      <div className="p-4 text-center">
        <p className="text-gray-900 font-bold">{testimonial.name}</p>
      </div>
    </div>
  );
};
