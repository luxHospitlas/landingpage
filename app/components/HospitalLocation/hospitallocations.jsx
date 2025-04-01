"use client";
import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import './hplstyles.css';
import { useInView } from "react-intersection-observer";

export default function HospitalLocation() {
    const { ref, inView } = useInView({
            triggerOnce: true, 
            threshold: 0.1, 
        });
  return (
    <section
    ref={ref}
    className= {`flex flex-col items-center hospital_location_section ${inView ? "fade-in" : "opacity-0"}`}>
      <h2 className="text-3xl font-bold text-center text-indigo-900">
        Our Hospital Location
      </h2>
      <div 
      className="border-grey-100 location_card shadow-lg"
      > 
      <div className="leftl-right">
        <img src="/location lux.png" alt="Description" className="w-full h-auto" />
      </div>
      <div className="leftl-lright">
      <div
      ref={ref}
      className="p-6 lg:w-[83%]">
          <h3 className= {`gmb_title text-lg font-500 text-gray-900 mb-3 ${inView ? "fade-in": "opcacity-0"}`}>
            LUX Hospitals - Colorectal | Surgical GI | Urology | Gynecology |
            Plastic Surgery | ENT | Orthopaedics
          </h3>

          {/* Google Review */}
          <div className="google_reviews flex text-gray-500 mt-2 mb-3">
            {/* Google Icon and Text */}
            <div className="flex items-center gap-2">
              {/* <img src="/google icon.avif" alt="Google" className="w-6 h-6" /> */}
              <div className="flex items-center">
            <span className="text-lg font-bold">4.5</span>  
            <div className="flex text-yellow-500 ml-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>
            </div>
            
            {/* Review Count */}
            <span className="font-medium review_count">634 Google Reviews</span>
          </div>

          {/* <div className="flex items-center">
            <span className="text-lg font-bold">4.5</span>
            <div className="flex text-yellow-500 ml-2">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div> */}

          {/* Address Info */}
          {/* <p className="mt-3 text-gray-700 flex items-start address_info">
            <FaMapMarkerAlt className="mr-2 text-gray-600" /> Plot no: 116, Lumbini Enclave Hitech city main road,
             Landmark:, near IKEA, Gachibowli, Hyderabad, Telangana 500081
          </p> */}
          <p className="mt-3 text-gray-700 flex items-start address_info">
            {/* <img src="/google map icon.webp" alt="Location" className="mr-1 w-5 h-5 " />  */}
            Plot no: 116, Lumbini Enclave Hitech city main road, Landmark: near IKEA, 
            Gachibowli, Hyderabad, Telangana 500081
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-4 w-full mobilectas">
            <button className="review_button flex items-center justify-center gap-2 bg-[#915097] text-white px-4 py-2 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#7e4483] flex-1">
              <FaMapMarkerAlt /> Get Direction
            </button>
            <button className="border flex gap-2 px-6 py-4 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-100 flex-1 justify-center">
            <img src="/google icon.avif" alt="Google Icon" className="w-7 h-7" />
              Reviews
            </button>
          </div>
        </div>
      </div>
      
      </div>
    </section>
  );
}
