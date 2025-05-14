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




export default function Proctology() {
  const heroHeading =
    "Advanced Proctology Surgical Hospital in Hyderabad";

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
      link: "tel:917969084448",
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
      link: "tel:917969084448",
    },
  ];

  const defaultLocationHeading =
    "Lux Hospitals - Best Proctology & Advanced Surgical Hospital in Hyderabad | Piles, Fistula, Fissure and more Treatment";

  const whatAreH = "What Is Proctology?";
  const whatAreP =
    "Proctology is a branch of medicine that focuses on problems related to the rectum, anus, and colon. If you're experiencing pain while passing stool, bleeding, itching, swelling, or a lump near the anal area, it could be a sign of conditions like piles, fissures, or fistulas. These are more common than you think — and the good news is, they’re treatable with modern, painless procedures at Lux Hospitals.";
  const whatHead = "Treatment we provide";
  const treatments = [
    "Laser Treatment for Piles",
    "Laser Surgery for Fissures",
    "Minimally Invasive Fistula Treatment",
    "Stapler Hemorrhoidopexy",
    "Colorectal Surgeries",
  ];

  const fheading = "Frequently Asked Questions";
  const faqs = [
    {
      faqTitle: "What are the signs that I need to see a proctologist?",
      faqAnswer:
        "If you're experiencing pain during bowel movements, bleeding, itching, swelling, or notice a lump near the anus, it's important to consult a proctologist. These symptoms may indicate piles, fissures, or fistulas, which are best treated early.",
    },
    {
      faqTitle: "What conditions are treated in the Proctology department?",
      faqAnswer:
        "We treat piles, fissures, fistulas, rectal prolapse, colon polyps, and other anorectal and colorectal conditions using advanced, minimally invasive procedures.",
    },
    {
      faqTitle: "How long is the recovery after proctology surgery?",
      faqAnswer:
        "Most procedures offered at Lux Hospitals are day-care surgeries with minimal downtime. Patients typically return to normal activities within 2–5 days, depending on the treatment and individual recovery speed.",
    },
    {
      faqTitle: "Can anal fistula heal on its own?",
      faqAnswer:
        "No, an anal fistula typically does not heal on its own and requires medical treatment, often surgical intervention, to prevent infection or recurrence.",
    },
    {
      faqTitle: "Are the treatments covered by insurance?",
      faqAnswer:
        "Yes, most proctology treatments, including piles, fissures, and fistula procedures, are covered under major health insurance plans. Lux Hospitals also offers cashless insurance services.",
    },
    {
      faqTitle: "Why choose Lux Hospitals for proctology care?",
      faqAnswer:
        "Lux Hospitals offers advanced, minimally invasive treatments by expert surgeons with a high success rate. Facilities include cashless insurance, EMI options, and same-day discharge.",
    },
  ];

  return (
    <>
      <Header PhoneNumber={"07969084448"} mobilectatext={"Call Now"} mobileNumberHeader={"tel:07969084448"} />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
      <ConditionsWeTreat />
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <section className="w-[90%]" style={{ margin: "auto" }}>
        <h2 className="doctors_heading text-xl font-bold text-center text-indigo-900 mb-4">
          Our Top Doctors
        </h2>
        <div className="doctors_container">
          <DoctorCard
            url="/doctor.avif"
            name="Dr. Samhitha Reddy"
            qualification="MBBS, MS, FMAS, FISCP, DMAS"
            designation="Piles Specialist"
            experience="Experience: 8 years"
            description="Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
            mobileNumberDoctor="tel:07969084448"
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp"
            name="Dr Abhishek Katha"
            qualification="MBBS, MS, FMAS, FISCP"
            designation="Piles Specialist"
            experience="Experience: 9 years"
            description="Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
            mobileNumberDoctor="tel:07969084448"
          />
        </div>
      </section>
      <HospitalComparison theading={"Best Proctology Hospital in Hyderabad"} ConditionVideo={"/tablevideo.mp4"} />
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
        footerdesc="Visit the best Proctology hospital in Hyderabad for painless, advanced treatment and expert care!"
        footernumber="07969084448"
      />
      <MobileStickyFooter mobileNumber="tel:07969084448"/>
    </>
  );
}


