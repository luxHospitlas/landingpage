"use client";
import Image from "next/image";
import  './accstyles.css';
import { useInView } from "react-intersection-observer";

const Accreditations = () => {
     const { ref, inView } = useInView({
             triggerOnce: true, 
             threshold: 0.1, 
         });
  return (
   
<>
<section
ref={ref}
className={`accreditions ${inView ? "fade-in" : "opacity-0"}`}>
    <h2 className="text-center font-bold text-3xl fonts_title">Accreditations</h2>
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
        <div className="bg-[#92BDF6] p-6 right_b-lg text-center">
          <p className="text-gray-700 font-medium font_small">
          Lux Hospitals is NABH certified, a mark of excellence in patient safety and care. We follow stringent healthcare protocols and maintain world-class hygiene standards.
          </p>
        </div>
        </div>
    </div>
    <div className="for_ISO flex">
        <div className="lrboxes_ISO_left">
        <div className="bg-[#A3DAC2] p-6 mt-6 border_radi text-center">
        <p className="text-gray-700 font-medium font_small">
        We are ISO 9001:2015 certified, ensuring the highest standards in quality management and patient care. This certification reflects our commitment to efficient processes and continuous improvement in healthcare services.

        </p>
      </div>
        </div>
        <div className="lrboxes_ISO mt-6">
        <div className="flex justify-center p-4">
          <Image
            src="/ISO.svg"
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
