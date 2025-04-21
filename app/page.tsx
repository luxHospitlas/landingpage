"use client";

import dynamic from "next/dynamic";


// Static imports
import Hero from "./components/hero/hero";
import Second from "./components/second/second";
import HospitalLocation from "./components/HospitalLocation/hospitallocations";
import FooterComponent from "./components/footer/footer";

// Dynamic imports
const DoctorCard = dynamic(() => import("./components/topdoctors/ourdoctors"));
const HospitalComparison = dynamic(
  () => import("./components/Treatmenttable/Hospitalcomparison")
);
const Accreditations = dynamic(
  () => import("./components/Accreditions/accreditions")
);
const VideoSection = dynamic(() => import("./components/Videosection/videos"));
const PatientTalks = dynamic(
  () => import("./components/Patienttalks/patients")
);
const Luxgpt = dynamic(() => import("./components/luxgpt/luxgpt"));
// const Footer = dynamic(() => import("./components/footer/footer"));

// const Faqs = dynamic(() => import("./components/faqs/faq"));

export default function Home() {
  // const pathname = usePathname();

  // Fallback hero text based on pathname
  const heroHeading = "Lux Hospitals - Advanced Surgerical hospital in Hyderabad";



  // if (pathname.includes("piles")) {
  //   heroHeading = "Get Relief from Piles Today";

  // } else if (pathname.includes("fistula")) {
  //   heroHeading = "Fistula Treatment at Lux Hospitals";

  // }

  // Dummy content
  const defaultDescList = [
    "Advanced Laser & Minimally Invasive Surgeries",
    "Same-day discharge & 30-minute procedures",
    "Cashless Insurance Accepted",
    "0% EMI Options Available",
    "Expert Doctors & State-of-the-Art Facilities",
  ];

  const defaultLocationHeading =
    "Lux Hospitals - Leading Center for Proctology & Advanced Surgery";



  return (
    <>
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second />
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <section
        className="w-[90%]"
        style={{
          margin: "auto",
        }}
      >
        <h2 className="doctors_heading text-xl font-bold text-center text-indigo-900 mb-4">
          Our Top Doctors
        </h2>
        <div className="doctors_container">
          <DoctorCard
            url="/doctor.avif"
            name="Dr. Samhitha Reddy"
            qualification="MBBS, MS, FMAS, FISCP, DMAS"
            designation="Piles Specialist"
            experience="Experieance:8 years"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sunt in culpa qui officia deserunt mollit anim id est laborum. Sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <DoctorCard url="/doctor.avif"
            name="Dr. Abhishake Katha"
            qualification="MBBS, MS, FMAS, FISCP"
            designation="Piles Specialist"
            experience="Experieance:9 years"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sunt in culpa qui officia deserunt mollit anim id est laborum. Sunt in culpa qui officia deserunt mollit anim id est laborum."
          />

        </div>
      </section>
      <HospitalComparison theading={"hospital"} />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
      <FooterComponent 
         footerdesc="Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam. Vel massa commodo viverra." 
         footernumber="Call Us Now for Consultation"
      />

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}

// import Hero from './components/hero/hero';
// import Faqs from './components/faqs/faq';
// import Whatare from './components/what/whatare';
// import Luxgpt from './components/luxgpt/luxgpt';
// import VideoSection from './components/Videosection/videos';
// import PatientTalks from './components/Patienttalks/patients';
// import Second from './components/second/second';
// import HospitalLocation from './components/HospitalLocation/hospitallocations';
// import HospitalComparison from './components/Treatmenttable/Hospitalcomparison';
// import Accreditations from './components/Accreditions/accreditions';
// import DoctorCard from './components/topdoctors/ourdoctors';
// export default function Home() {
//   return (
//     <>
//     <Hero />
//     <Second />
//     <HospitalLocation />
//     <DoctorCard />
//     <HospitalComparison />
//     <Accreditations />
//     <VideoSection />
//     <PatientTalks />
//     <Luxgpt />
//     <Whatare />
//     <Faqs />
//     </>
//   );
// }
