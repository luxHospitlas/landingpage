"use client";
import Image from "next/image";
import "./accstyles.css";

const Accreditations = () => {
  return (
    <>
      <section className="accreditions">
        <h2 className="Accreditations_heading text-center font-bold text-xl fonts_title text-indigo-900">
          Accreditations
        </h2>
        <div className="for_nabh">
          <div className="lrboxes">
            <div className="flex justify-center p-6">
              <Image
                src="/TRAIL.svg"
                alt="NABH Certified"
                width={200}
                height={200}
                className="image_certi object-contain"
                priority
              />
            </div>
          </div>
          <div className="lrboxes_right">
            <div className=" p-6 right_b-lg text-center">
              <p className="text-gray-700 font-medium font_small">
                Lux Hospitals is NABH certified, a mark of excellence in patient
                safety and care. We follow stringent healthcare protocols and
                maintain world-class hygiene standards.
              </p>
            </div>
          </div>
        </div>
        <div className="for_ISO flex">
          <div className="lrboxes_ISO_left">
            <div className=" p-6 mt-6 border_radi text-center">
              <p className="text-gray-700 font-medium font_small">
                We are ISO 9001:2015 certified, ensuring the highest standards
                in quality management and patient care. This certification
                reflects our commitment to efficient processes and continuous
                improvement in healthcare services.
              </p>
            </div>
          </div>
          <div className="lrboxes_ISO">
            <div className="flex justify-center p-4">
              <Image
                src="/iso-gold-logo-NEW-2.png"
                alt="ISO Certified"
                width={150}
                height={150}
                className="image_certi object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accreditations;
