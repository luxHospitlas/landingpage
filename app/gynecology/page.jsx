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
    "Advanced Gynecology Surgical Hospital in Hyderabad";

  // if (pathname.includes("piles")) {
  //   heroHeading = "Get Relief from Piles Today";

  // } else if (pathname.includes("fistula")) {
  //   heroHeading = "Fistula Treatment at Lux Hospitals";

  // }

  // Dummy content
  const defaultDescList = [
    "Advanced Minimally Invasive Gynecology Surgeries",
    "Same-day Discharge, Fast Recovery",
    "Cashless Insurance Accepted",
    "0% EMI Options Available",
    "Expert Gynecologists & State-of-the-Art Facilities",
  ];

  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book an Appointment",
      arrow: "/Arrow.svg",
      link: "tel:07969084443",
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
      link: "tel:07969084443",
    },
  ];

  const defaultLocationHeading =
    "Lux Hospitals – Women's Health | Expert Gynecologists in Hyderabad | Advanced Laparoscopic Treatment";

  const whatAreH = "What is Gynecology?";
  const whatAreP =
    "Gynecology is the branch of medicine that focuses on the health of the female reproductive system, including the uterus, ovaries, fallopian tubes, and vagina. It deals with a wide range of conditions such as menstrual disorders, fibroids, ovarian cysts, PCOS, and more.";
  const whatHead = "Treatments We Provide";
  const treatments = [
    "Laparoscopic Hysterectomy",
    "Fibroid Removal (Myomectomy)",
    "Ovarian Cyst Removal",
    "PCOS Management",
    "Endometriosis Treatment",
    "Menstrual Disorder Management",
  ];

  const fheading = "Frequently Asked Questions";
  const faqs = [
    {
      faqTitle: "What conditions are treated in the Gynecology department at Lux Hospitals?",
      faqAnswer:
        "Lux Hospitals provides comprehensive care for conditions like fibroids, ovarian cysts, PCOS, endometriosis, menstrual disorders, and other reproductive health issues.",
    },
    {
      faqTitle: "What are the best treatment methods available for gynecological conditions?",
      faqAnswer:
        "Lux Hospitals offers advanced minimally invasive options such as laparoscopic and hysteroscopic surgeries, ensuring effective treatment with quicker recovery and minimal discomfort.",
    },
    {
      faqTitle: "Is good treatment available for complex gynecological problems?",
      faqAnswer:
        "Yes, our team is equipped to handle complex gynecological cases with personalized treatment plans, state-of-the-art technology, and a focus on patient safety and comfort.",
    },
    {
      faqTitle: "Is insurance accepted for gynecology treatments?",
      faqAnswer:
        "Yes, Lux Hospitals accepts cashless insurance from most major providers. Our team also assists patients with the claim and approval process for a smooth experience.",
    },
    {
      faqTitle: "Why is Lux Hospitals the best choice for gynecology care?",
      faqAnswer:
        "Lux Hospitals stands out for its expert gynecologists, modern infrastructure, minimally invasive surgical techniques, personalized care, and high patient satisfaction rates.",
    },
    {
      faqTitle: "Who are the gynecology specialists at Lux Hospitals?",
      faqAnswer:
        "Dr. Harshith Kakarla is one of our leading gynecology specialists, known for his expertise in advanced laparoscopic procedures and compassionate approach to women’s health.",
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
    src: "/Endometriosis Treatment .webp",
    alt: "Endometriosis ",
    label: "Endometriosis ",
  },
  {
    src: "/Medical Termination of Pregnancy.webp",
    alt: "Medical Termination of Pregnancy",
    label: "Pregnancy Termination",
  },
  {
    src: "/sexual dysfunction treatment .webp",
    alt: "Sexual Dysfunction",
    label: "Sexual Dysfunction",
  },
  {
    src: "/uterine polyp removal .webp",
    alt: "Uterine Polyp Removal",
    label: "Uterine Polyp Removal",
  },
  // Add more as needed
];

  return (
    <>
      <Header
        PhoneNumber={"07969084443"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084443"}
      />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
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
            url="https://luxhospitals.com/wp-content/uploads/2025/04/Dr.-pragnia-2.webp"
            name="Dr. Pragnia Poloju"
            qualification="MBBS, MS, MCH (Gynae Oncology)"
            designation="Gynecology Specialist"
            experience="Experieance:10+ years"
            description="Gynaecologist and Gynae Oncologist with 10+ years of experience. Holds MD, MS, and MCH from PGIMER and Kidwai. Expert in laparoscopic, robotic, and preventive oncology surgeries. Actively involved in research, publications, and national and international medical associations and forums."
            mobileNumberDoctor="tel:07969084443"
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Harshitha-Kakarla-1.webp"
            name="Dr. Harshitha Kakarla"
            qualification="MBBS, MS (Gynecology), FMAS"
            designation="Gynecology Specialist"
            experience="Experieance:10+ years"
            description="FMAS-certified gynaecologist and advanced laparoscopic surgeon with 10+ years’ experience. Specialises in hysteroscopy, laparoscopy, fertility treatments, IUGR, eclampsia, and has treated 7,000+ patients with exceptional success."
            mobileNumberDoctor="tel:07969084443"          
          />
        </div>
      </section>
      <HospitalComparisond theading={"Gynecology Treatments at Lux Hospitals"} rows={tableData} />
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
        footerdesc="Visit the best gynecology hospital in Hyderabad for advanced, minimally invasive treatment and expert women’s healthcare!"
        footernumber="07969084443"
      />

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}
