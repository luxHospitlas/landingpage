'use client';
import { useInView } from "react-intersection-observer";
import React from "react";
import "./vstyles.css"; 


export default function VideoSection() {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
  return (
    <section ref={ref} className= {` videos_section ${inView ? "fade-in" : "opacity-0"}`}>
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/luxvideo.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 videos.
      </video>

      <div className="video-overlay-content">
      <ul className="list_text list-outside text-white-700 space-y-2 text-left">
        <li>✔ Designed for comfort</li>
        <li>✔ Spacious rooms</li>
        <li>✔ HEPA air filters</li>
        <li>✔ Premium amenities</li>
        <li>✔ Hotel-like stay</li>
        <li>✔ Top-tier infection control and patient care with plasma sterilization</li>
        <li>✔ NABH protocols</li>
      </ul>

      </div>
    </section>
  );
}
