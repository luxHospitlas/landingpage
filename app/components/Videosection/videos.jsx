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
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 videos.
      </video>

      <div className="video-overlay-content">
        <p>Designed for comfort, with spacious rooms and HEPA air filters.<br></br>
Premium amenities for a stress-free and hotel like stay.<br></br>
Ensuring top-tier infection control and patient care with plasma sterilisation 
and NABH protocols</p>
      </div>
    </section>
  );
}
