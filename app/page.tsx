"use client";

import dynamic from "next/dynamic";


// Static imports
import Hero from "./components/hero/hero";
import Second from "./components/second/second";
import HospitalLocation from "./components/HospitalLocation/hospitallocations";

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
      <DoctorCard
        designation="Piles Specialist"
        designationtwo="Piles Specialist"
      />

      <HospitalComparison theading={"hospital"} />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
 
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
