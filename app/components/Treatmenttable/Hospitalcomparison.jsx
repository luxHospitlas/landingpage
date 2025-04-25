"use client";

import React from "react";
import "./tablestyles.css";

export default function HospitalComparison({ theading }) {
  return (
    <section className="w-[95%] md:w-[96%] mx-auto my-10 fade-in">
      <h2 className="table_heading text-center text-xl font-bold text-indigo-900 ">
        {theading}
      </h2>

      <div className={`overflow-x-auto mt-6 fade-in `}>
        <table className="w-full border-collapse border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-300 text-gray-800">
              <th
                className="table_head text-left py-[10px]"
                style={{
                  background: " #F0DA69",
                }}
              ></th>
              <th
                className="table_head text-center font-semibold py-[10px]"
                style={{
                  background: " #F0DA69",
                }}
              >
                Other Hospital
              </th>
              <th
                className="table_head text-center  font-semibold py-[10px]"
                style={{
                  background: " #F0DA69",
                }}
              >
                Lux Hospitals
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td
                className="table_head font-semibold text-black-600"
                style={{
                  background: "#FAF3D2",
                  textAlign: "center",
                }}
              >
                Cost
              </td>
              <td
                className="table_head text-center "
                style={{
                  background: "#F9F0C3",
                }}
              >
                Variable
              </td>
              <td
                className="table_head text-center font-500"
                style={{
                  background: "#F6E8A5",
                }}
              >
                FIXED
              </td>
            </tr>
            <tr className="border">
              <td
                className="table_head font-semibold text-black-600"
                style={{
                  background: "#FAF3D2",
                  textAlign: "center",
                }}
              >
                Sterilization
              </td>
              <td
                className="table_head text-center"
                style={{
                  background: "#F9F0C3",
                }}
              >
                Autoclave / ETO
              </td>
              <td
                className="table_head text-center  font-500"
                style={{
                  background: "#F6E8A5",
                }}
              >
                PLASMA STERILIZATION
              </td>
            </tr>
            <tr className="border">
              <td
                className="table_head font-semibold text-black-600"
                style={{
                  background: "#FAF3D2",
                  textAlign: "center",
                }}
              >
                Insurance
              </td>
              <td
                className="table_head text-center"
                style={{
                  background: "#F9F0C3",
                }}
              >
                80-85% Coverage
              </td>
              <td
                className="table_head text-center  font-500"
                style={{
                  background: "#F6E8A5",
                }}
              >
                100% COVERAGE
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
