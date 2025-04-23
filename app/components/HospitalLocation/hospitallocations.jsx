"use client";
import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./hplstyles.css";

export default function HospitalLocation({ locationsectionheading }) {
  return (
    <section className="flex flex-col items-center hospital_location_section">
      <h2 className="Location_heading font-bold text-center text-indigo-900">
        Our Hospital Location
      </h2>
      <div className="border-grey-100 location_card shadow-lg">
        <div className="leftl-right">
          <img
            src="/mapsgoogle.avif"
            alt="Description"
            className="w-full h-auto"
          />
        </div>
        <div className="leftl-lright">
          <div className="p-6 lg:w-[83%]">
            <h3 className="gmb_title text-lg font-500 text-gray-900 mb-3">
              {locationsectionheading}
            </h3>

            {/* Google Review */}
            <div className="google_reviews flex text-gray-500 mt-2 mb-3">
              {/* Google Icon and Text */}
              <div className="flex items-center gap-2">
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
              <span className="font-medium review_count">
                634 Google Reviews
              </span>
            </div>

            {/* Address Info */}
            <p className="mt-3 text-gray-700 flex items-start address_info">
              Plot no: 116, Lumbini Enclave Hitech city main road, Landmark:
              near IKEA, Gachibowli, Hyderabad, Telangana 500081
            </p>

            {/* Buttons */}
            <div className="mt-4 flex gap-4 w-full mobilectas">
            <a
                href="https://maps.app.goo.gl/evEJmyVJqMArfBoG7"
                target="_blank"
                rel="noopener noreferrer"
                className="review_button flex items-center justify-center gap-2 bg-[#915097] text-white px-4 py-2 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#7e4483] flex-1"
              >
                <FaMapMarkerAlt /> Get Direction
              </a>

              <a
                href="https://maps.app.goo.gl/evEJmyVJqMArfBoG7"
                target="_blank"
                rel="noopener noreferrer"
                className="border flex gap-2 px-6 py-4 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-gray-100 flex-1 justify-center"
              >
                <img
                  src="/iconG.avif"
                  alt="Google Icon"
                  className="w-7 h-7"
                />
                Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
