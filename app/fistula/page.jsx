"use client";

import dynamic from "next/dynamic";

// Static imports
import Hero from "../components/hero/hero";
import HospitalLocation from "../components/HospitalLocation/hospitallocations";

// Dynamic imports
const DoctorCard = dynamic(() => import("../components/topdoctors/ourdoctors"));
const HospitalComparison = dynamic(() =>
  import("../components/Treatmenttable/Hospitalcomparison")
);
const Second = dynamic(() => import("../components/second/second"));
const Accreditations = dynamic(() =>
  import("../components/Accreditions/accreditions")
);
const VideoSection = dynamic(() => import("../components/Videosection/videos"));
const PatientTalks = dynamic(() =>
  import("../components/Patienttalks/patients")
);
const Luxgpt = dynamic(() => import("../components/luxgpt/luxgpt"));

// const Faqs = dynamic(() => import("./components/faqs/faq"));

export default function Home() {
  // const pathname = usePathname();

  // Fallback hero text based on pathname
  const heroHeading =
    "Lux Hospitals - Advanced Surgerical hospital in Hyderabad";

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
