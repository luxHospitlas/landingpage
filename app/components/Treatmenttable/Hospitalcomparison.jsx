"use client";

import React from "react";
import "./tablestyles.css";

export default function HospitalComparison({ theading }) {
  return (
    <section className="w-[95%] md:w-[96%] mx-auto my-10 fade-in">
      <h2 className="table_heading text-center text-xl font-bold text-indigo-900">
        {theading}
      </h2>

      <div className="tablevideo fade-in mt-6 gap-6">
        {/* VIDEO SECTION */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full h-[239px] rounded-lg shadow-md"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/desktop lp video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* TABLE SECTION */}
        <div className="w-full lg:w-1/2 overflow-x-auto">
          <table className="w-full border-collapse border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-300 text-gray-800">
                <th
                  className="table_head text-left py-[10px]"
                  style={{ background: "#F0DA69" }}
                ></th>
                <th
                  className="table_head text-center font-semibold py-[10px]"
                  style={{ background: "#F0DA69" }}
                >
                  Other Hospital
                </th>
                <th
                  className="table_head text-center font-semibold py-[10px]"
                  style={{ background: "#F0DA69" }}
                >
                  Lux Hospitals
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Cost
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  Variable
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  FIXED
                </td>
              </tr>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Sterilization
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  Autoclave / ETO
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  PLASMA STERILIZATION
                </td>
              </tr>
              <tr className="border">
                <td
                  className="table_head font-semibold text-black-600 text-center"
                  style={{ background: "#FAF3D2" }}
                >
                  Insurance
                </td>
                <td className="table_head text-center" style={{ background: "#F9F0C3" }}>
                  80-85% Coverage
                </td>
                <td
                  className="table_head text-center font-500"
                  style={{ background: "#F6E8A5" }}
                >
                  100% COVERAGE
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
