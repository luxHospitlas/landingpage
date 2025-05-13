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
import Gentstalks from "../components/Gentstalks/gentstalks";
import FreeOpdSection from "../components/FreeOPD/freeopd";

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
      "Leading Surgeon for Gynecomastia Treatment",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure with High Precision",
      "0% Interest EMI Available | 2,500+ Happy Patients"
  ];

  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book Free Appointment",
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
    "LUX Hospitals – Gynecomastia Doctor | Male Breast Reduction Experts | Liposuction + Excision Specialists | Hyderabad";

  const whatAreH = "What is Gynecomastia?";
  const whatAreP =
    "Gynecomastia is the enlargement of breast tissue in men due to hormonal imbalances, excess fat, genetics, or certain medications. It may affect one or both sides of the chest and often leads to emotional discomfort or self-consciousness. At Lux Hospitals, our expert gynecomastia surgeons use minimally invasive procedures to restore a firm, masculine chest with natural-looking results — safely, precisely, and discreetly.";
  const whatHead = "Top 4 Procedures for Gynecomastia";
  const treatments = [
    "Liposuction",
    "Gland Excision (Mastectomy)",
    "Excision with Skin Tightening",
    "Combination Surgery",
  ];

  const fheading = "FAQs on Gynecomastia Treatment Services";
  const faqs = [
    {
        faqTitle: "What is gynecomastia and how is it treated at Lux Hospitals?",
        faqAnswer:
          "Gynecomastia is a condition where men develop enlarged breast tissue due to hormonal imbalances, excess fat, or genetics. At Lux Hospitals, we offer advanced, minimally invasive treatments like laser-assisted liposuction and gland excision to restore a natural, masculine chest."
      },
      {
        faqTitle: "How experienced are the surgeons at Lux Hospitals?",
        faqAnswer:
          "Our senior Plastic Surgeons — including Dr. M Ram Prabhu and Dr. Chandana Guduru — have over a decade of experience in male chest contouring and have successfully performed hundreds of gynecomastia procedures."
      },
      {
        faqTitle: "What advanced techniques do your surgeons use?",
        faqAnswer:
          "We use a combination of laser liposuction, glandular excision, and skin tightening procedures based on each patient’s needs. These techniques ensure minimal scarring, short recovery time, and a sculpted chest with lasting results."
      },
      {
        faqTitle: "What can I expect during the recovery process?",
        faqAnswer:
          "Recovery is usually quick — most patients return to work within 2–3 days. Swelling subsides within a few weeks, and results become fully visible in 4–6 weeks. We provide post-op care instructions and follow-ups to support your healing."
      },
      {
        faqTitle: "How much does gynecomastia surgery cost at Lux Hospitals?",
        faqAnswer:
          "Our packages start from ₹50,000 and vary based on the complexity of the procedure. We offer fixed-price packages with no hidden charges, and 0% interest EMI options are available for flexible payments."
      },
      {
        faqTitle: "How do I book a consultation with a gynecomastia specialist?",
        faqAnswer:
          "Booking is simple. Call 07969084446 or chat with us on WhatsApp to schedule a free consultation with one of our gynecomastia experts. You’ll receive a complete evaluation, personalised treatment plan, and a transparent cost estimate."
      }
  ];
  const tableData = [

    { label: "Procedure Type", other: "Traditional Surgery", lux: "Laser + Liposuction" },
    { label: "Scarring", other: "Visible Scars", lux: "Scarless Finish" },
    { label: "Anesthesia", other: "General Anesthesia", lux: "Local Anesthesia" },
    { label: "Recovery Time", other: "1–2 Weeks", lux: "1–2 Days" },
    { label: "Pricing", other: "Starts ₹1L+", lux: "Starts ₹50,000" },
    { label: "Financing Options", other: "Rarely Available", lux: "0% EMI | Assured Pricing" },
  ];

  return (
    <>
      <Header
        PhoneNumber={"07969084448"}
        mobilectatext={"Free OPD"}
      />
      <Hero heading={heroHeading} descList={defaultDescList} />
      <Second services={services} />
      <FreeOpdSection/>
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
          />
          <DoctorCard
            url="https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Chandana-Guduru.webp"
            name="Dr. Chandana Guduru"
            qualification="MBBS, MS, MCh (Plastic Surgery)"
            designation="Plastic Surgeon"
            experience="Experience: 10+ years"
            description=
            "Plastic & Cosmetic Surgeon with 10+ years of experience. Specialises in breast augmentation, liposuction, tummy tuck, and gynecomastia. Holds a fellowship in Cosmetic Surgery (Dubai). Has performed 4,000+ procedures with a 99% success rate, known for natural-looking results."
          />
        </div>
      </section>
      <HospitalComparisond theading={"Gynecomastia Treatment at Lux Hospitals"} rows={tableData} />
      <Accreditations />
      <VideoSection />
      <HospitalLocation locationsectionheading={defaultLocationHeading} />
      <Gentstalks />
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

      {/* <Faqs  fheading={"heading"}
        faqquestion={"title"}
        faqanswer={"answer"}
      /> */}
    </>
  );
}
