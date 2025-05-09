import React from "react";
import { Icon } from "@iconify/react";
import "./dstyles.css";

export default function Doctordetailspagehero({ doctor }) {
  return (
    <section>
      <div className="doctorhero flex items-stretch justify-center">
        <div className="doctorhero__left">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-full">
              <div className="doctorhero__img-container">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctorhero__img object-cover mb-2"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1 text-center">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                {doctor.designation}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-700 mb-6">
                <Icon icon="lucide:briefcase" className="w-5 h-5" />
                <span>Experience:{doctor.experience}</span>
              </div>
              <button
                className="w-full h-[45px] text-white rounded-lg mb-4 bg-[#99509F]"
                size="lg"
              >
                Book an Appointment
              </button>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-gray-700">Have Insurance?</span>
                <button className="p-0">Get Free OPD</button>
              </div>
            </div>
          </div>
        </div>
        <div className="doctorhero__right">
          <div className="p-6">
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Introduction:
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Noah Bennett is an experienced endodontist who specializes
                in saving teeth through root canal treatments and other advanced
                procedures. With a calm demeanor and a focus on patient comfort,
                Dr. Bennett has built a reputation for delivering precise and
                pain-free care.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Experience:
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Bennett has treated complex endodontic cases, often saving
                teeth that would otherwise require extraction. His expertise and
                gentle approach make him a trusted choice for patients needing
                advanced care.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="lucide:check"
                    className="w-5 h-5 text-purple-600"
                  />
                  Performed over 2,000 successful root canal treatments
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="lucide:check"
                    className="w-5 h-5 text-purple-600"
                  />
                  Certified in microsurgical endodontics
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="lucide:check"
                    className="w-5 h-5 text-purple-600"
                  />
                  Member of the American Association of Endodontists
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="lucide:check"
                    className="w-5 h-5 text-purple-600"
                  />
                  Published case studies on root preservation techniques
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="lucide:check"
                    className="w-5 h-5 text-purple-600"
                  />
                  Recognized for excellence in patient-centered care
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
