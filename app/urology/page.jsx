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
    "Lux Hospitals - Advanced Urology Surgical Hospital in Hyderabad";

  const defaultDescList = [
    "Expert Care for Kidney, Bladder & Prostate Conditions",
    "Minimally Invasive & Laser Urology Surgeries",
    "Same-day Discharge for Select Procedures",
    "Cashless Insurance Accepted",
    "0% EMI Options Available",
    "Experienced Urologists & Advanced Surgical Technology",
  ];
  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book an Appointment",
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

  const defaultLocationHeading =
    "Lux Hospitals – Best Urology & Advanced Surgical Hospital in Hyderabad | Kidney Stones, Prostate, Urinary Issues & More";

  const whatAreH = "What Is Urology?";
  const whatAreP =
    "Urology is the medical specialty focused on the urinary tract system in both men and women, as well as the male reproductive system. If you're experiencing symptoms like frequent urination, pain during urination, blood in urine, kidney stone pain, or prostate issues, it's time to consult a urologist. At Lux Hospitals, we offer advanced, minimally invasive solutions for all major urological conditions.";

  const whatHead = "Treatments We Provide";
  const treatments = [
    "Laser Treatment for Kidney Stones",
    "Prostate Enlargement (BPH) Surgery",
    "Ureteroscopy (URS) & PCNL",
    "Urinary Incontinence Management",
    "Urethral Stricture Treatment",
    "Male Infertility & Sexual Health Treatments",
  ];

  const fheading = "Frequently Asked Questions";
  const faqs = [
    {
      faqTitle: "What are the signs that I need to see a urologist?",
      faqAnswer:
        "You should see a urologist if you're experiencing symptoms such as frequent urination, burning or pain while urinating, blood in urine, difficulty passing urine, lower back or abdominal pain, or male reproductive health issues.",
    },
    {
      faqTitle: "What conditions are treated in the Urology department?",
      faqAnswer:
        "Our urology department treats kidney stones, urinary tract infections (UTIs), prostate enlargement (BPH), urinary incontinence, urethral strictures, male infertility, erectile dysfunction, and more.",
    },
    {
      faqTitle: "How are kidney stones treated at Lux Hospitals?",
      faqAnswer:
        "We offer advanced, minimally invasive treatments such as laser lithotripsy, URS (Ureteroscopy), and PCNL, depending on the size and location of the kidney stone.",
    },
    {
      faqTitle: "Can prostate enlargement be treated without open surgery?",
      faqAnswer:
        "Yes, most prostate enlargement cases are treated with minimally invasive techniques like laser prostatectomy, which reduce recovery time and improve outcomes.",
    },
    {
      faqTitle: "Are urology treatments covered by insurance?",
      faqAnswer:
        "Yes, most urology procedures including kidney stone treatment and prostate surgeries are covered under major health insurance plans. Lux Hospitals supports cashless insurance options.",
    },
    {
      faqTitle: "Why choose Lux Hospitals for urology care?",
      faqAnswer:
        "Lux Hospitals offers expert urologists, advanced diagnostic tools, minimally invasive surgical options, quick recovery, and full insurance support to ensure the best patient care experience.",
    },
  ];

  const conditionsData = [
    {
      src: "/Cirummsion.webp",
      alt: "Circumcision",
      label: "Circumcision",
    },
    {
      src: "/Enlarged prostate.webp",
      alt: "Enlarged Prostate",
      label: "Enlarged Prostate",
    },
    {
      src: "/kidney-stone.webp",
      alt: "Kidney Stones",
      label: "Kidney Stones",
    },
    {
      src: "/Urethral stricture Treatment.webp",
      alt: "Urethral Stricture",
      label: "Urethral Stricture",
    },
    // Add more as needed
  ];

  return (
    <>
      <Header PhoneNumber={"07969084442"} mobilectatext={"Call Now"} mobileNumberHeader={"tel:07969084442"} />
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
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp"
            name="Dr. Priyank Salecha"
            qualification="MBBS, MS, Mch (Urology)"
            designation="Urologist & Andrologist"
            experience="Experience: 10+ years"
            description="Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care."
            mobileNumberDoctor="tel:07969084442"
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp"
            name="Dr. Aditya Potla"
            qualification="MBBS, MS, M.Ch (Urology)"
            designation="Urologist & Andrologist"
            experience="Experience: 9+ years"
            description="Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health."
            mobileNumberDoctor="tel:07969084442"
          />
        </div>
      </section>
      <HospitalComparison theading={"Best Urology Hospital in Hyderabad"} ConditionVideo={"/KIDNEY STONE PAGES.mp4"} />
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
        footerdesc="Visit the best Urology hospital in Hyderabad for advanced, painless treatment and expert urological care!"
        footernumber="07969084442"
      />
      <MobileStickyFooter mobileNumber="tel:07969084442" />
    </>
  );
}


