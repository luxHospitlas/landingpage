"use client";

import dynamic from "next/dynamic";

// Static imports
import Header from "@/app/components/header/header";
import Hero from "../components/hero/hero";
import Second from "../components/second/second";
import HospitalLocation from "../components/HospitalLocation/hospitallocations";
import FooterComponent from "../components/footer/footer";
import ConditionsWeTreat from "../components/whatwetreat/wetreat";
import Faqs from "../components/faqs/faq";
import Whatare from "../components/what/whatare";
import MobileStickyFooter from "../components/mobilsticky";

// Dynamic imports
const DoctorCard = dynamic(() => import("../components/topdoctors/ourdoctors"));
const HospitalComparison = dynamic(() =>
  import("../components/Treatmenttable/Hospitalcomparison")
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




export default function GeneralLaparoscopic() {
  const heroHeading =
    "Advanced General & Laparoscopic Surgery Hospital in Hyderabad";

  const defaultDescList = [
    "Minimally Invasive & Keyhole Surgeries",
    "Faster Recovery & Minimal Scarring",
    "Same-day Discharge for Select Procedures",
    "Cashless Insurance Accepted",
    "0% EMI Options Available",
    "Expert Surgeons & Advanced Operation Theatres",
  ];
  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book an Appointment",
      arrow: "/Arrow.svg",
      link: "tel:07969084449",
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
      link: "tel:07969084449",
    },
  ];

  const defaultLocationHeading =
    "Lux Hospitals – Best General & Laparoscopic Surgery Hospital in Hyderabad | Hernia, Gallbladder, Appendix & More";

  const whatAreH = "What Is General & Laparoscopic Surgery?";
  const whatAreP =
    "General & Laparoscopic Surgery focuses on the diagnosis and surgical treatment of a wide range of abdominal and soft tissue conditions. Laparoscopic (keyhole) techniques involve minimal incisions, faster recovery, and less postoperative pain. At Lux Hospitals, we offer safe, precise, and advanced surgical solutions for conditions like hernia, appendicitis, gallbladder stones, and more.";

  const whatHead = "Treatments We Provide";
  const treatments = [
    "Laparoscopic Hernia Repair",
    "Gallbladder Stone Removal (Cholecystectomy)",
    "Appendix Removal (Appendectomy)",
    "Laparoscopic Diagnostic Procedures",
    "Abscess Drainage & Minor Surgical Care",
  ];


  const fheading = "Frequently Asked Questions";
  const faqs = [
    {
      faqTitle: "When should I consult a general surgeon?",
      faqAnswer:
        "If you experience symptoms such as persistent abdominal pain, hernia bulge, gallstone attacks, appendicitis symptoms, or swelling that requires medical evaluation, you should consult a general surgeon.",
    },
    {
      faqTitle: "What conditions are treated in the General & Laparoscopic Surgery department?",
      faqAnswer:
        "We treat hernias, gallbladder stones, appendicitis, abscesses, and other abdominal and soft tissue conditions using both traditional and laparoscopic surgical methods.",
    },
    {
      faqTitle: "What is laparoscopic surgery and what are its benefits?",
      faqAnswer:
        "Laparoscopic surgery, also known as minimally invasive surgery, uses small incisions and a camera to perform procedures. It offers less pain, faster recovery, minimal scarring, and shorter hospital stays compared to open surgery.",
    },
    {
      faqTitle: "How long is the recovery time after laparoscopic surgery?",
      faqAnswer:
        "Recovery times are generally short. Most patients are discharged the same or next day and can return to normal activities within 3–7 days, depending on the procedure and overall health.",
    },
    {
      faqTitle: "Are general and laparoscopic surgeries covered by insurance?",
      faqAnswer:
        "Yes, most procedures such as hernia repair, gallbladder removal, and appendectomies are covered under major health insurance policies. Lux Hospitals also offers cashless insurance services.",
    },
    {
      faqTitle: "Why choose Lux Hospitals for general and laparoscopic surgery?",
      faqAnswer:
        "Lux Hospitals offers expert surgeons, state-of-the-art operation theatres, advanced laparoscopic equipment, and patient-focused care with options like EMI and insurance support.",
    },
  ];
  const conditionsData = [
    {
      src: "/Hernia.webp",
      alt: "Hernia",
      label: "Hernia",
    },
    {
      src: "/Gallblader V1.webp",
      alt: "Gallbladder Stones",
      label: "Gallbladder Stones",
    },
    {
      src: "/Appendix.webp",
      alt: "Appendix",
      label: "Appendix",
    },
    {
      src: "/Lipoma.webp",
      alt: "Lipoma",
      label: "Lipoma",
    },
    // Add more as needed
  ];

  return (
    <>
      <Header PhoneNumber={"07969084449"} mobilectatext={"Call Now"} mobileNumberHeader={"tel:07969084449"} />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
      <ConditionsWeTreat conditions={conditionsData} />;
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <section className="w-[90%]" style={{ margin: "auto" }}>
        <h2 className="doctors_heading text-xl font-bold text-center text-indigo-900 mb-4">
          Our Top Doctors
        </h2>
        <div className="doctors_container">
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp"
            name="Dr Abhishek Katha"
            qualification="MBBS, MS, FMAS, FISCP"
            designation="Piles Specialist"
            experience="Experience: 15+ years"
            description="Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
            mobileNumberDoctor="tel:07969084449"
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp"
            name="Dr. Samhitha Reddy"
            qualification="MBBS, MS, FMAS, FISCP, DMAS"
            designation="Piles Specialist"
            experience="Experience: 7+ years"
            description="Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
            mobileNumberDoctor="tel:07969084449"
          />
        </div>
      </section>
      <HospitalComparison theading={"Best General & Laparoscopic Hospital in Hyderabad"} ConditionVideo={"/tablevideo.mp4"} />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />

      {/* Corrected usage of Whatare and Faqs based on prop structure */}
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
        footerdesc="Visit the best General & Laparoscopic Surgery hospital in Hyderabad for advanced, minimally invasive treatment and expert surgical care!"
        footernumber="07969084449"
      />
      <MobileStickyFooter mobileNumber="tel:07969084449" />
    </>
  );
}


