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
import ConditionsWeTreat from "../components/whatwetreat/wetreat";

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
    "Lux Hospitals – Best Hospital for Plastic & Cosmetic Surgery in Hyderabad";

  // if (pathname.includes("piles")) {
  //   heroHeading = "Get Relief from Piles Today";

  // } else if (pathname.includes("fistula")) {
  //   heroHeading = "Fistula Treatment at Lux Hospitals";

  // }

  // Dummy content
  const defaultDescList = [
    "Advanced Cosmetic & Reconstructive Procedures",
    "Minimal Scars & Quick Recovery Techniques",
    "Cashless Insurance Accepted (where applicable)",
    "0% EMI Options Available",
    "Expert Surgeons & State-of-the-Art Facilities",
  ];

  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book an Appointment",
      arrow: "/Arrow.svg",
      link: "tel:07969084446",
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
      link: "tel:07969084446",
    },
  ];

  const defaultLocationHeading =
    "Lux Hospitals – Plastic & Cosmetic Surgery | Expert Surgeons in Hyderabad | Advanced Aesthetic Procedures";

  const whatAreH = "What is Plastic & Cosmetic Surgery?";
  const whatAreP =
    "Plastic and cosmetic surgery involves surgical and non-surgical procedures aimed at enhancing appearance or restoring function. It includes treatments for aesthetic enhancement, trauma reconstruction, burns, congenital deformities, and more.";

  const whatHead = "Treatments We Provide";
  const treatments = [
    "Liposuction & Body Contouring",
    "Gynecomastia Surgery",
    "Breast Augmentation/Reduction",
    "Tummy Tuck (Abdominoplasty)",
    "Rhinoplasty (Nose Reshaping)",
    "Facelift & Eyelid Surgery",
  ];

  const fheading = "Frequently Asked Questions";
const faqs = [
  {
    faqTitle: "What procedures are offered in the Plastic & Cosmetic Surgery department?",
    faqAnswer:
      "We offer a wide range of procedures including rhinoplasty, liposuction, hair transplant, facelift, tummy tuck, gynecomastia surgery, and breast augmentation/reduction.",
  },
  {
    faqTitle: "Are minimally invasive techniques available for cosmetic procedures?",
    faqAnswer:
      "Yes, many of our cosmetic surgeries utilize minimally invasive and advanced laser techniques to reduce scarring and recovery time.",
  },
  {
    faqTitle: "Is plastic surgery safe and effective?",
    faqAnswer:
      "Plastic surgery is safe when performed by experienced surgeons using modern techniques. We prioritize patient safety and personalized treatment plans for the best outcomes.",
  },
  {
    faqTitle: "Does insurance cover cosmetic or reconstructive surgery at Lux Hospitals?",
    faqAnswer:
      "Coverage varies depending on the procedure and insurance policy. Reconstructive surgeries are often covered, while purely cosmetic procedures may not be. Our team assists with insurance queries and claims.",
  },
  {
    faqTitle: "Why choose Lux Hospitals for Plastic & Cosmetic Surgery?",
    faqAnswer:
      "Lux Hospitals offers expert surgeons, state-of-the-art facilities, advanced technology, and personalized care to ensure the best results and patient satisfaction.",
  },
  {
    faqTitle: "Who are the surgeons for Plastic & Cosmetic Surgery at Lux Hospitals?",
    faqAnswer:
      "Our team includes highly qualified and experienced plastic surgeons who specialize in both cosmetic and reconstructive procedures, providing compassionate care throughout your treatment journey.",
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
  const conditionsData = [
  {
    src: "/gynecomastia .webp",
    alt: "Gynecomastia",
    label: "Gynecomastia",
  },
  {
    src: "/liposuction .webp",
    alt: "Liposuction Surgery",
    label: "Liposuction Surgery",
  },
  {
    src: "/tummy tuck ΓÇï.webp",
    alt: "Tummy Tuck",
    label: "Tummy Tuck",
  },
  {
    src: "/breast-augmentation.webp",
    alt: "Breast Augmentation",
    label: "Breast Augmentation",
  },
  // Add more as needed
];

  return (
    <>
      <Header
        PhoneNumber={"07969084446"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084446"}
      />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
      {/* <ConditionsWeTreat /> */}
      <ConditionsWeTreat conditions={conditionsData} />;
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
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Ram-Prabhu-1.webp"
            name="Dr. M Ram Prabhu"
            qualification="MBBS, MBBS, MS, MCh (Plastic Surgery)"
            designation="Plastic Surgeon"
            experience="Experience: 15+ years"
            description="Plastic & Cosmetic Surgeon with 15+ years of experience. Specialises in gynecomastia, breast augmentation, liposuction, and tummy tuck. Has treated 6,000+ patients with a 99% success rate, offering customised solutions and consistent, natural results in aesthetic and reconstructive surgery."
            mobileNumberDoctor="tel:0796908446"
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Chandana-Guduru.webp"
            name="Dr. Chandana Guduru"
            qualification="MBBS, MS, MCh (Plastic Surgery)"
            designation="Plastic Surgeon"
            experience="Experience: 10+ years"
            description=
            "Plastic & Cosmetic Surgeon with 10+ years of experience. Specialises in breast augmentation, liposuction, tummy tuck, and gynecomastia. Holds a fellowship in Cosmetic Surgery (Dubai). Has performed 4,000+ procedures with a 99% success rate, known for natural-looking results."
            mobileNumberDoctor="tel:0796908446"
          />
        </div>
      </section>
      <HospitalComparisond theading={"Piles Treatment at Lux Hospitals"} rows={tableData} />
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
        footerdesc="Visit the best plastic and cosmetic surgery hospital in Hyderabad for advanced, safe procedures and expert aesthetic care!"
        footernumber="07969084446"
      />

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}
