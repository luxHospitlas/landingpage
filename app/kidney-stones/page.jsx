"use client";

import dynamic from "next/dynamic";

// Static imports
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Second from "../components/second/second";
import HospitalLocation from "../components/HospitalLocation/hospitallocations";
import FooterComponent from "../components/footer/footer";
import FreeOpdSection from "../components/FreeOPD/freeopd";
import MobileStickyFooter from "../components/mobilsticky";


// Dynamic imports
const DoctorCard = dynamic(() => import("../components/topdoctors/ourdoctors"));
const HospitalComparisond = dynamic(() =>
  import("../components/dynamictable/dynamictables")
);
const Accreditations = dynamic(() =>
  import("../components/Accreditions/accreditions")
);
const VideoSection = dynamic(() => import("../components/Videosection/videos"));
const PatientTalks = dynamic(() =>
  import("../components/Patienttalks/patients")
);
const Luxgpt = dynamic(() => import("../components/luxgpt/luxgpt"));
// const Footer = dynamic(() => import("./components/footer/footer"));

// const Faqs = dynamic(() => import("./components/faqs/faq"));

export default function Home() {
  // const pathname = usePathname();

  // Fallback hero text based on pathname
  const heroHeading =
    "Lux Hospitals - Advanced Surgerical hospital in Hyderabad";

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

  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book Free Appointment",
      arrow: "/Arrow.svg",
      link: "tel:07969084442",
    },
    {
      image: "/cost extimation.avif",
      title: "Cost Estimation",
      arrow: "/Arrow.svg",
      link: "whatsapp",
    },
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-2.avif",
      title: "Second Opinion",
      arrow: "/Arrow.svg",
      link: "whatsapp",
    },
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-5.avif",
      title: "Insurance Coverage",
      arrow: "/Arrow.svg",
      link: "tel:07969084442",
    },
  ];

  const tableData = [
    
    { label: "Surgery Type",other: "Open / PCNL",lux: "RIRS / URSL / Laser"},
    { label: "Hospital Stay", other: "3–5 Days", lux: "Same Day Discharge" },
    { label: "Pain & Recovery", other: "Painful & Slow", lux: "Painless & Quick" },
    { label: "Stone Clearance Rate", other: "75–80%", lux: "98%+" },
    { label: "Technology", other: "Old Gen Laser / None", lux: "Latest Laser Tech" },
    { label: "Insurance Coverage", other: "May Not Support Cashless", lux: "All Major Insurances" },
  ];
  const defaultLocationHeading =
    "Lux Hospitals - Leading Center for Proctology & Advanced Surgery";

  return (
    <>
      <Header 
      PhoneNumber={"07969084442"}
      mobilectatext={"Free OPD"}
      mobileNumberHeader={"tel:07969084442"}
      />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
      <FreeOpdSection/>
      {/* <HospitalLocation locationsectionheading={defaultLocationHeading} /> */}
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
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp"
            name="Dr. Samhitha Reddy"
            qualification="MBBS, MS, FMAS, FISCP, DMAS"
            designation="Piles Specialist"
            experience="Experieance:8 years"
            description="Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp"
            name="Dr Abhishek Katha"
            qualification="MBBS, MS, FMAS, FISCP"
            designation="Piles Specialist"
            experience="Experieance:9 years"
            description="Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
          />
        </div>
      </section>
      
      <HospitalComparisond theading={"hospital dynamic data"} rows={tableData} ConditionVideo={"/fistulatablevideo.mp4"} />
      <Accreditations />
      <VideoSection />
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <PatientTalks />
      <Luxgpt />
      <FooterComponent
        footerdesc="Visit the best piles hospital in Hyderabad for painless, advanced treatment and expert care!"
        footernumber="07969084448"
      />
      <MobileStickyFooter mobileNumber="tel:07969084442" />

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}
