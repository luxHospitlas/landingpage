"use client";

import dynamic from "next/dynamic";

// Static imports
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Second from "../components/second/second";
import HospitalLocation from "../components/HospitalLocation/hospitallocations";
import FooterComponent from "../components/footer/footer";
import Faqs from "../components/faqs/faq";
import Whatare from "../components/what/whatare";
import MobileStickyFooter from "../components/mobilsticky";

// Dynamic imports
const DoctorCard = dynamic(() => import("../components/topdoctors/ourdoctors"));
// const HospitalComparison = dynamic(() =>
//   import("../components/Treatmenttable/Hospitalcomparison")
// );
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
    "Lux Hospitals - Best hospital for Piles in Hyderabad";

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
      title: "Book an Appointment",
      arrow: "/Arrow.svg",
      link: "tel:07969084448",
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
      link: "tel:07969084448",
    },
  ];

  const defaultLocationHeading =
    "Lux Hospitals - Piles Treatment | Expert Proctologists in Hyderabad | Advanced Laser Treatment";

  const whatAreH = "What is Piles?";
  const whatAreP =
    "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus. They cause discomfort, bleeding, itching, and pain during bowel movements. Piles can be internal or external and range from mild to severe.";
  const whatHead = "Treatment we provide";
  const treatments = [
    "Laser Treatment",
    "Rubber Band Ligation",
    "Sclerotherapy",
    "Surgical Hemorrhoidectomy",
  ];

  const fheading = "Frequently Asked Questions";
  const faqs = [
    {
      faqTitle: "What are the main causes of piles?",
      faqAnswer:
        "Piles are commonly caused by chronic constipation, prolonged sitting, obesity, pregnancy, and straining during bowel movements.",
    },
    {
      faqTitle: "Can poor diet contribute to piles?",
      faqAnswer:
        "Yes, a low-fiber diet and inadequate water intake can lead to hard stools, increasing the risk of developing piles.",
    },
    {
      faqTitle: "Are piles completely curable?",
      faqAnswer:
        "Yes, with the right treatment and lifestyle changes, piles can be effectively treated and cured. Advanced options like laser surgery offer long-term relief with minimal recurrence.",
    },
    {
      faqTitle: "Does insurance cover piles treatment at Lux Hospitals?",
      faqAnswer:
        "Yes, Lux Hospitals accept insurance for piles treatment. Most major health insurance policies are accepted, and the hospital provides assistance with claim processing to ensure a smooth experience.",
    },
    {
      faqTitle: "Why choose Lux Hospitals for piles treatment?",
      faqAnswer:
        "Lux Hospitals offers advanced, minimally invasive laser treatments, experienced proctologists, personalized care, and fast recovery in a patient-friendly environment.",
    },
    {
      faqTitle: "Who are the doctors for piles at Lux Hospitals?",
      faqAnswer:
        "Dr. Samhitha Reddy and Dr. Abhishek Katha are leading specialists in piles treatment at Lux Hospitals, known for their expertise in advanced laser procedures and compassionate care.",
    },
  ];
  const tableData = [
    { label: "Treatment Type", other: "Open Surgery", lux: "Laser + Harmonic" },
    { label: "Recovery Time", other: "7–10 Days", lux: "Same Day" },
    { label: "Pain & Bleeding", other: "Painful with Bleeding", lux: "Painless & Bloodless" },
    { label: "Insurance & EMI", other: "Not Always Cashless", lux: "All Insurances + 0% EMI" },
    { label: "Room Type", other: "General / Shared", lux: "Private Suite" },
    { label: "Cost Transparency", other: "Variable & Hidden Costs", lux: "Fixed & Transparent" },
  ];

  return (
    <>
      <Header
        PhoneNumber={"07969084448"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084448"}
      />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
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
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp"
            name="Dr. Samhitha Reddy"
            qualification="MBBS, MS, FMAS, FISCP, DMAS"
            designation="Piles Specialist"
            experience="Experieance:7+ years"
            description="Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
            mobileNumberDoctor="tel:07969084448"
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp"
            name="Dr Abhishek Katha"
            qualification="MBBS, MS, FMAS, FISCP"
            designation="Piles Specialist"
            experience="Experieance:15+ years"
            description="Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
            mobileNumberDoctor="tel:07969084448"
          />
        </div>
      </section>
      <HospitalComparisond theading={"Piles Treatment at Lux Hospitals"} rows={tableData} ConditionVideo={"public\piles final dr sam.webm"} />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
      {whatAreH && (
        <Whatare
          whatAreH={whatAreH}
          whatAreP={whatAreP}
          whatHead={whatHead}
          treatments={treatments.map((treatment) => ({
            title: treatment,
          }))}
        />
      )}

      {faqs.length > 0 && (
        <Faqs
          fheading={fheading}
          faqs={faqs.map((faq) => ({
            faqquestion: faq.faqTitle,
            faqanswer: faq.faqAnswer,
          }))}
        />
      )}
      <FooterComponent
        footerdesc="Visit the best piles hospital in Hyderabad for painless, advanced treatment and expert care!"
        footernumber="07969084448"
      />
      <MobileStickyFooter mobileNumber="tel:07969084448"/>

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}
