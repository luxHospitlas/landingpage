"use client"; // Add this since you're using client-side components
import { use } from "react";
import dynamic from "next/dynamic";
import Header from "@/app/components/header/header";
import Hero from "../../components/hero/hero";
import Second from "../../components/second/second";
import HospitalLocation from "../../components/HospitalLocation/hospitallocations";
import tableData from '../../fistula/fistuladata';
import FreeOpdSection from "@/app/components/FreeOPD/freeopd";
// import services from "../../piles/pilesdata";
import FooterComponent from "../../components/footer/footer";
import MobileStickyFooter from "../../components/mobilsticky";
const DoctorCard = dynamic(() =>
  import("../../components/topdoctors/ourdoctors")
);

const HospitalComparisond = dynamic(() =>
  import("../../components/dynamictable/dynamictables")
);
const Accreditations = dynamic(() =>
  import("../../components/Accreditions/accreditions")
);
const VideoSection = dynamic(() =>
  import("../../components/Videosection/videos")
);
const PatientTalks = dynamic(() =>
  import("../../components/Patienttalks/patients")
);
const Luxgpt = dynamic(() => import("../../components/luxgpt/luxgpt"));
import Faqs from "../../components/faqs/faq";
// import { proctologyDoctorsData } from "../../../public/data";

// Define Whatare component before using it
const Whatare = ({ whatAreH, whatAreP, whatHead, treatments = [] }) => {
  return (
    <section className="logo-fade  text-[#252B61] whatare">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-4">{whatAreH}</h2>
      <p className="text-gray-700 mb-6 leading-[2em] whatarepara">{whatAreP}</p>

      {/* Treatments Section */}
      <h3 className="text-lg md:text-xl font-bold mb-6">{whatHead}</h3>
      {/* Render treatments */}
      <div className="space-y-4">
        {treatments.map((treatment, index) => (
          <div key={index}>
            <ul className="list-disc list-outside pl-5 font-medium mb-0">
              <li>{treatment.title}</li>
            </ul>
            <p className="text-gray-700 mb-2 px-4 leading-[2em] whatarepara">
              {treatment.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const contentMap = {
  "best-kidney-stone-treatment-hyderabad": {
    heading: "Best Kidney Stone Treatment in Hyderabad",
    heroSection: {
      title: "Leading Hospital for Kidney Stone Treatment",
      descList: [
        "Laser + Laparoscopic Specialist Procedures",
        "NABH & ISO 9001 Certified Facility",
        "No Cuts. No Recurrence.",
        "30-Min Procedure with High Precision",
        "0% Interest EMI Available | 20,000+ Patients Treated"
      ]
    },
    locationSectionHeading:
      "LUX Hospitals – Kidney Stone Treatment | Laser + Laparoscopic Stone Removal Experts | 100% Insurance Coverage | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with over 10 years of experience in treating kidney stones, prostate issues, and other urological conditions using advanced techniques. Specializes in minimally invasive treatments with no cuts and faster recovery. Treated over 7,000 patients with successful outcomes.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ Years",
        description:
          "Urologist and Andrologist with 9 years of experience in kidney stone management and urological health. Specializes in advanced laser techniques and laparoscopic surgery, ensuring minimal pain and quick recovery for patients. He has successfully treated 4,000+ kidney stone patients.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Kidney Stone Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Kidney Stone?",
    whatAreP:
      "Kidney stones are hard, crystal-like deposits that form inside the kidneys due to excess minerals and salts in the urine. They can block urine flow, cause severe back or abdominal pain, and may lead to infections if untreated. At Lux Hospitals, our urology experts use advanced laser and laparoscopic procedures to remove kidney stones safely, with no visible cuts and minimal downtime. We personalise every treatment to ensure fast relief and complete stone clearance.",
    whatHead: "Top 4 Procedures for Kidney Stones",
    treatments: [
      {
        title: "Laser Lithotripsy",
        description:
          "A minimally invasive procedure that uses Holmium Laser to break kidney stones into tiny fragments, allowing them to pass naturally. No cuts, no stitches."
      },
      {
        title: "Retrograde Intrarenal Surgery (RIRS)",
        description:
          "A thin, flexible scope is inserted through the urinary tract to access the kidney. The stone is fragmented with a laser and removed. Ideal for small to medium stones."
      },
      {
        title: "Percutaneous Nephrolithotomy (PCNL)",
        description:
          "Suitable for large or complex stones. A small incision is made in the back to directly access and remove the stone using specialised tools."
      },
      {
        title: "Combination Approach",
        description:
          "In certain cases, a mix of laser lithotripsy and surgical techniques is used to ensure complete clearance, especially when multiple or large stones are present."
      }
    ],
    fheading: "FAQs on Kidney Stone Treatment",
    faqs: [
      {
        faqTitle: "What is kidney stone and how is it treated at Lux Hospitals?",
        faqAnswer:
          "Kidney stones are mineral deposits that form inside the kidney and can cause severe pain or blockages. At Lux Hospitals, we use advanced laser-based and keyhole procedures like Lithotripsy, RIRS, and PCNL for scarless, effective removal."
      },
      {
        faqTitle: "How experienced are the urologists at Lux Hospitals?",
        faqAnswer:
          "Our Urology team — including Dr. Priyank Ashokkumar Salecha and Dr. Aditya Potla — bring 9–10 years of specialised experience in treating kidney stones with advanced minimally invasive methods."
      },
      {
        faqTitle: "What advanced techniques are used in your treatments?",
        faqAnswer:
          "We use the latest in Holmium Laser, RIRS, and PCNL, tailored to stone size, location, and complexity. These ensure faster recovery, minimal pain, and complete removal of stones."
      },
      {
        faqTitle: "What can I expect during the recovery process?",
        faqAnswer:
          "Most patients can go home the same day or the next. Recovery is quick, with minimal restrictions. Our team provides complete post-op care and follow-up to ensure smooth healing."
      },
      {
        faqTitle: "How much does kidney stone treatment cost at Lux Hospitals?",
        faqAnswer:
          "Treatment costs depend on the procedure and complexity. We offer fixed-price packages, 100% insurance support, and 0% interest EMI to ensure affordability with no hidden charges."
      },
      {
        faqTitle: "How do I book a consultation for kidney stone treatment?",
        faqAnswer:
          "Just call 07969084442 or connect with us on WhatsApp. You’ll get a free consultation, treatment options tailored to your case, and a full explanation of the procedure and costs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert, scarless Kidney Stone Treatment at Lux Hospitals — with advanced care, experienced doctors, and full insurance coverage.",
      footernumber: "07969084442"
    }
  },
  "best-kidney-stone-surgery-hospital-hyderabad": {
    heading: "Best Hospital for Kidney Stone Surgery in Hyderabad",
    descList: [
      "Top Urologist for Kidney Stone Surgery",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Kidney Stone Surgery | Laser & Laparoscopic Stone Removal Experts | Advanced Urology Centre | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Kidney Stone Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData, // Add appropriate structured treatment comparison data here
    whatAreH: "What is Kidney Stone Surgery?",
    whatAreP:
      "Kidney stone surgery refers to procedures used to remove stones that are too large, painful, or stuck to pass on their own. These stones can block urine flow and cause intense pain, infection, or kidney damage. At Lux Hospitals, our expert urologists perform minimally invasive surgeries such as RIRS, PCNL, and URSL, using advanced laser and endoscopic techniques that eliminate the need for large incisions — ensuring faster recovery, less pain, and excellent outcomes.",
    whatHead: "Top 4 Procedures for Kidney Stone Surgery",
    treatments: [
      {
        title: "RIRS (Retrograde Intrarenal Surgery)",
        description:
          "A flexible scope is inserted through the urinary tract to reach the kidney. Laser energy breaks the stone into dust, which is flushed out. No cuts. High precision."
      },
      {
        title: "PCNL (Percutaneous Nephrolithotomy)",
        description:
          "Ideal for large or complex stones. A small puncture is made in the back to access and remove the stone directly. High clearance rate with short hospital stay."
      },
      {
        title: "URSL (Ureteroscopic Lithotripsy)",
        description:
          "Targets stones lodged in the ureter. A thin scope is inserted via the urethra to reach and break the stone using laser. Minimal pain, quick discharge."
      },
      {
        title: "Laser Lithotripsy",
        description:
          "Uses Holmium Laser to precisely break down kidney stones into passable fragments. Suitable for most small to medium stones. Completely non-invasive."
      }
    ],
    fheading: "FAQs on Kidney Stone Surgery",
    faqs: [
      {
        faqTitle: "What is kidney stone surgery and how is it done at Lux Hospitals?",
        faqAnswer:
          "Kidney stone surgery is used to remove stones that can’t pass naturally. At Lux Hospitals, we perform surgeries like RIRS, PCNL, and URSL using advanced lasers and minimally invasive tools to ensure safe, scarless stone removal."
      },
      {
        faqTitle: "How experienced are the urologists at Lux Hospitals?",
        faqAnswer:
          "Our urology team — including Dr. Priyank Ashok kumar Salecha and Dr. Aditya Potla — has over a decade of combined experience and has performed thousands of successful stone surgeries using endoscopic and laser methods."
      },
      {
        faqTitle: "What are the benefits of laser and keyhole kidney stone surgery?",
        faqAnswer:
          "These procedures offer faster recovery, minimal or no scarring, reduced risk of complications, and shorter hospital stays compared to traditional open surgeries."
      },
      {
        faqTitle: "How long is the recovery time after kidney stone surgery?",
        faqAnswer:
          "Most patients are discharged the same day or next day. Full recovery takes about 2–5 days, depending on the procedure. We provide complete aftercare and guidance."
      },
      {
        faqTitle: "What is the cost of kidney stone surgery at Lux Hospitals?",
        faqAnswer:
          "Surgery costs vary based on the stone size and procedure type. We offer fixed-cost packages, full cashless insurance support, and 0% EMI options to make treatment affordable."
      },
      {
        faqTitle: "How do I book a consultation for kidney stone surgery?",
        faqAnswer:
          "Simply call 07969084442 or message us on WhatsApp. We’ll schedule a free consultation, review your scan reports, and recommend the best surgical option with a detailed cost estimate."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get permanent relief from kidney stones with expert surgical care at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },

  "best-kidney-stone-removal-treatment-hyderabad": {
    heading: "Best Kidney Stone Removal Treatment in Hyderabad",
    descList: [
      "Top Urologist for Kidney Stone Treatment",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Kidney Stone Treatment | Laser & Laparoscopic Stone Removal Experts | Advanced Urology Centre | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Kidney Stone Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Add comparison data here if needed
    whatAreH: "What is Kidney Stone Treatment?",
    whatAreP:
      "Kidney stones are solid mineral deposits that form inside the kidneys and may cause intense pain, nausea, and urinary blockage. While small stones may pass on their own, larger or stubborn stones need specialised treatment. At Lux Hospitals, we offer scarless, precision-based kidney stone treatments like RIRS, PCNL, and URSL — performed by expert urologists using advanced laser and endoscopic techniques for fast relief and complete stone clearance.",
    whatHead: "Top 4 Procedures for Kidney Stone Treatment",
    treatments: [
      {
        title: "RIRS (Retrograde Intrarenal Surgery)",
        description:
          "A minimally invasive procedure where a flexible scope is passed through the urinary tract to access the kidney. The stone is broken using laser and removed without any incisions."
      },
      {
        title: "PCNL (Percutaneous Nephrolithotomy)",
        description:
          "Recommended for large or multiple stones. A small incision is made in the back to directly extract the stone using specialised instruments. High success rate, short recovery."
      },
      {
        title: "URSL (Ureteroscopic Lithotripsy)",
        description:
          "Ideal for stones in the ureter. A thin scope is inserted via the urethra, and laser energy is used to break the stone. The fragments are removed with precision."
      },
      {
        title: "Laser Lithotripsy",
        description:
          "Uses Holmium Laser to target and break stones into fine particles, which then pass naturally through urine. No cuts, no scars, and minimal discomfort."
      }
    ],
    fheading: "FAQs on Kidney Stone Treatment",
    faqs: [
      {
        faqTitle: "What is kidney stone treatment and how is it done at Lux Hospitals?",
        faqAnswer:
          "Kidney stone treatment involves breaking or removing stones using non-invasive methods. At Lux Hospitals, we use advanced techniques like RIRS, PCNL, and URSL to ensure complete, scarless stone clearance."
      },
      {
        faqTitle: "How experienced are the urologists at Lux Hospitals?",
        faqAnswer:
          "Our expert urologists — including Dr. Priyank Ashokkumar Salecha and Dr. Aditya Potla — bring 9–10 years of experience and have treated thousands of patients with modern, minimally invasive stone removal methods."
      },
      {
        faqTitle: "What technologies are used for kidney stone treatment?",
        faqAnswer:
          "We use Holmium Laser, high-definition endoscopes, and keyhole surgical tools. These techniques allow us to perform treatment with high precision, minimal pain, and quick recovery."
      },
      {
        faqTitle: "What is the typical recovery time after kidney stone treatment?",
        faqAnswer:
          "Most procedures are daycare or involve a short hospital stay. Patients resume normal activities in 2–3 days. Our team ensures complete follow-up and care during the recovery phase."
      },
      {
        faqTitle: "What is the cost of kidney stone treatment at Lux Hospitals?",
        faqAnswer:
          "Costs depend on the procedure and stone complexity. We offer fixed-price packages, cashless insurance, and 0% EMI options to ensure affordability and transparency."
      },
      {
        faqTitle: "How do I book a consultation for kidney stone treatment?",
        faqAnswer:
          "Booking is easy. Call 07969084442 or message us on WhatsApp. Our team will schedule your free consultation, assess your reports, and guide you through the right treatment plan."
      }
    ],
    footerComponent: {
      footerdesc:
        "Don’t let kidney pain slow you down. Get expert, scar-free Kidney Stone Treatment at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-kidney-stone-doctor-hyderabad": {
    heading: "Best Kidney Stone Doctor in Hyderabad",
    descList: [
      "Top Urologist for Kidney Stone Treatment",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Kidney Stone Doctor | Laser & Laparoscopic Stone Removal Experts | Endoscopic Urology Centre | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Kidney Stone Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Optional structured treatment comparison data
    whatAreH: "What is Kidney Stone?",
    whatAreP:
      "Kidney stones are small, hard mineral deposits that form in the kidneys due to excess calcium, oxalate, or other substances in the urine. They can cause intense pain, difficulty passing urine, or infections if not treated. At Lux Hospitals, our expert kidney stone doctors offer precise, scarless solutions using RIRS, PCNL, and URSL — all performed with high-end laser and endoscopic technology for fast relief, minimal discomfort, and no visible cuts.",
    whatHead: "Top 4 Procedures for Kidney Stone Treatment",
    treatments: [
      {
        title: "RIRS (Retrograde Intrarenal Surgery)",
        description:
          "A thin flexible scope is inserted through the urinary tract to reach the kidney. The stone is broken into dust using a laser and cleared without incisions."
      },
      {
        title: "PCNL (Percutaneous Nephrolithotomy)",
        description:
          "Ideal for large or multiple stones. A small puncture in the back allows direct access for stone removal. Short hospital stay. High success rate."
      },
      {
        title: "URSL (Ureteroscopic Lithotripsy)",
        description:
          "Suitable for stones located in the ureter. A scope is inserted via the urethra, and the stone is broken and extracted using laser technology."
      },
      {
        title: "Laser Lithotripsy",
        description:
          "Uses Holmium Laser to precisely break stones into tiny particles. Non-invasive, fast, and effective — with excellent outcomes."
      }
    ],
    fheading: "FAQs on Kidney Stone Doctors and Treatment",
    faqs: [
      {
        faqTitle: "Who is the best kidney stone doctor at Lux Hospitals?",
        faqAnswer:
          "Our leading urologists — Dr. Priyank Ashokkumar Salecha and Dr. Aditya Potla — are experienced in endoscopic and laser-based stone treatments, having helped thousands of patients become stone-free."
      },
      {
        faqTitle: "What makes Lux Hospitals a preferred choice for kidney stone care?",
        faqAnswer:
          "We offer cutting-edge procedures like RIRS and PCNL, expert doctors, plasma sterilisation, cashless insurance, and fixed-cost packages — all under one NABH & ISO-accredited roof."
      },
      {
        faqTitle: "What procedures are offered by your kidney stone doctors?",
        faqAnswer:
          "Our doctors specialise in RIRS, PCNL, URSL, and Laser Lithotripsy, selecting the best approach based on the size, location, and type of stone."
      },
      {
        faqTitle: "How long is the recovery after seeing a kidney stone doctor?",
        faqAnswer:
          "Most treatments are daycare with same-day discharge. Patients typically resume routine activities within 2–3 days. We provide complete post-op guidance and care."
      },
      {
        faqTitle: "What is the consultation process for kidney stone treatment?",
        faqAnswer:
          "Call 07969084442 or connect via WhatsApp to schedule your free consultation. Our doctors will review your reports and provide a tailored treatment plan and cost estimate."
      },
      {
        faqTitle: "Is the treatment covered by insurance?",
        faqAnswer:
          "Yes. We accept all major insurance policies, offer 0% EMI, and ensure 100% cashless approval wherever possible."
      }
    ],
    footerComponent: {
      footerdesc:
        "Meet the best kidney stone doctors in Hyderabad — and get treated with advanced, scarless laser procedures at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "kidney-stone-surgery-cost-hyderabad": {
    heading: "Kidney Stone Surgery Cost in Hyderabad",
    descList: [
      "Top Urologist for Kidney Stone Treatment",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Affordable Kidney Stone Surgery | Cashless Insurance | Fixed Cost Packages | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Kidney Stone Surgery Cost at Lux Hospitals"
      }
    ],
    tableData: tableData, // Add cost-related structured data here if available
    whatAreH: "What is the Cost of Kidney Stone Treatment?",
    whatAreP:
      "The cost of kidney stone treatment can vary depending on the size, location, and number of stones, as well as the technique used (RIRS, PCNL, URSL). At Lux Hospitals, we offer transparent, fixed-cost packages with no hidden charges. Our pricing includes hospital stay, procedure, surgeon fees, post-op care, and consultation. We also support cashless insurance and provide 0% interest EMI to make treatment financially stress-free.",
    whatHead: "Top 4 Procedures and Cost Considerations",
    treatments: [
      {
        title: "RIRS (Retrograde Intrarenal Surgery)",
        description:
          "Minimally invasive laser procedure. Cost depends on the number and size of stones. Covered by most insurances."
      },
      {
        title: "PCNL (Percutaneous Nephrolithotomy)",
        description:
          "Recommended for large or multiple stones. Slightly higher cost due to equipment and hospital stay. EMI and insurance options available."
      },
      {
        title: "URSL (Ureteroscopic Lithotripsy)",
        description:
          "Used for ureteric stones. Short procedure time and lower recovery cost. Usually done as a day-care surgery."
      },
      {
        title: "Laser Lithotripsy",
        description:
          "Suitable for small to mid-sized stones. Cost-effective and covered by most insurance plans."
      }
    ],
    // notes:
    //   "Note: Pricing starts from a base cost and is customised after a consultation and scan. Call for a detailed estimate.",
    fheading: "FAQs on Kidney Stone Surgery Cost",
    faqs: [
      {
        faqTitle: "What is the average cost of kidney stone surgery at Lux Hospitals?",
        faqAnswer:
          "Our kidney stone surgery packages are fixed and start from a basic range depending on the procedure type. All charges — including consultation, surgery, room, and post-op — are included with no hidden costs."
      },
      {
        faqTitle: "Is the treatment cost covered by insurance?",
        faqAnswer:
          "Yes. We accept all major insurance policies and offer full cashless processing. Our team will help you with pre-approvals and documentation."
      },
      {
        faqTitle: "Can I pay for the treatment in EMI?",
        faqAnswer:
          "Absolutely. We offer 0% interest EMI plans to make high-quality care accessible without financial burden."
      },
      {
        faqTitle: "What factors affect the cost of kidney stone treatment?",
        faqAnswer:
          "Stone size, location, number of stones, technique used (RIRS/PCNL/URSL), hospital stay duration, and insurance eligibility all contribute to the total cost."
      },
      {
        faqTitle: "How do I get a cost estimate before surgery?",
        faqAnswer:
          "Call 07969084442 or chat on WhatsApp. After reviewing your scan and reports, our team will share a complete treatment plan with a clear cost estimate — with or without insurance."
      },
      {
        faqTitle: "Are there any hidden or additional charges?",
        faqAnswer:
          "No. All our packages are transparent and inclusive. You’ll receive a written estimate after consultation with zero surprise costs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get advanced, affordable kidney stone surgery at Lux Hospitals — with fixed pricing, full insurance support, and EMI options.",
      footernumber: "07969084442"
    }
  },
  "best-kidney-stone-treatment-hyderabad": {
    heading: "Best Kidney Stone Treatment in Hyderabad",
    descList: [
      "Top Urologist for Kidney Stone Treatment",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationSectionHeading:
      "LUX Hospitals – Kidney Stone Treatment | Laser + Laparoscopic Stone Removal Experts | 100% Insurance Coverage | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Kidney Stone Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Kidney Stone?",
    whatAreP:
      "Kidney stones are hard, crystal-like deposits that form inside the kidneys due to excess minerals and salts in the urine. They can block urine flow, cause severe back or abdominal pain, and may lead to infections if untreated. At Lux Hospitals, our urology experts use advanced laser and laparoscopic procedures to remove kidney stones safely, with no visible cuts and minimal downtime. We personalise every treatment to ensure fast relief and complete stone clearance.",
    whatHead: "Top 4 Procedures for Kidney Stones",
    treatments: [
      {
        title: "Laser Lithotripsy",
        description:
          "A minimally invasive procedure that uses Holmium Laser to break kidney stones into tiny fragments, allowing them to pass naturally. No cuts, no stitches."
      },
      {
        title: "Retrograde Intrarenal Surgery (RIRS)",
        description:
          "A thin, flexible scope is inserted through the urinary tract to access the kidney. The stone is fragmented with a laser and removed. Ideal for small to medium stones."
      },
      {
        title: "Percutaneous Nephrolithotomy (PCNL)",
        description:
          "Suitable for large or complex stones. A small incision is made in the back to directly access and remove the stone using specialised tools."
      },
      {
        title: "Combination Approach",
        description:
          "In certain cases, a mix of laser lithotripsy and surgical techniques is used to ensure complete clearance, especially when multiple or large stones are present."
      }
    ],
    fheading: "FAQs on Kidney Stone Treatment",
    faqs: [
      {
        faqTitle: "What is kidney stone and how is it treated at Lux Hospitals?",
        faqAnswer:
          "Kidney stones are mineral deposits that form inside the kidney and can cause severe pain or blockages. At Lux Hospitals, we use advanced laser-based and keyhole procedures like Lithotripsy, RIRS, and PCNL for scarless, effective removal."
      },
      {
        faqTitle: "How experienced are the urologists at Lux Hospitals?",
        faqAnswer:
          "Our Urology team — including Dr. Priyank Ashokkumar Salecha and Dr. Aditya Potla — bring 9–10 years of specialised experience in treating kidney stones with advanced minimally invasive methods."
      },
      {
        faqTitle: "What advanced techniques are used in your treatments?",
        faqAnswer:
          "We use the latest in Holmium Laser, RIRS, and PCNL, tailored to stone size, location, and complexity. These ensure faster recovery, minimal pain, and complete removal of stones."
      },
      {
        faqTitle: "What can I expect during the recovery process?",
        faqAnswer:
          "Most patients can go home the same day or the next. Recovery is quick, with minimal restrictions. Our team provides complete post-op care and follow-up to ensure smooth healing."
      },
      {
        faqTitle: "How much does kidney stone treatment cost at Lux Hospitals?",
        faqAnswer:
          "Treatment costs depend on the procedure and complexity. We offer fixed-price packages, 100% insurance support, and 0% interest EMI to ensure affordability with no hidden charges."
      },
      {
        faqTitle: "How do I book a consultation for kidney stone treatment?",
        faqAnswer:
          "Just call 07969084442 or connect with us on WhatsApp. You’ll get a free consultation, treatment options tailored to your case, and a full explanation of the procedure and costs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert, scarless Kidney Stone Treatment at Lux Hospitals — with advanced care, experienced doctors, and full insurance coverage.",
      footernumber: "07969084442"
    }
  },
  "best-rirs-surgery-in-hyderabad": {
    heading: "Best RIRS Surgery in Hyderabad",
    descList: [
      "Top Urologist for RIRS Surgery",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationSectionHeading: "LUX Hospitals – RIRS Surgery | Scarless Kidney Stone Removal | Advanced Urology Centre | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "RIRS Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is RIRS Surgery?",
    whatAreP: "RIRS (Retrograde Intrarenal Surgery) is a modern, minimally invasive procedure used to treat kidney stones. A flexible scope is inserted through the urinary tract (without any cuts) to reach the kidney. Once the stone is located, a laser is used to break it into dust-like particles, which are then flushed out naturally.\nAt Lux Hospitals, our expert urologists perform RIRS using advanced Holmium laser systems — offering a scarless, pain-free experience with quick recovery and high success rates.",
    whatHead: "Top 4 Benefits of RIRS Surgery",
    treatments: [
      {
        title: "No Cuts or Stitches",
        description: "RIRS is performed entirely through natural urinary pathways — there’s no external incision, resulting in zero scars and faster healing."
      },
      {
        title: "Suitable for Small to Mid-sized Stones",
        description: "Perfect for stones located in hard-to-reach areas of the kidney that aren’t easily treated by conventional methods."
      },
      {
        title: "Quick Recovery & Daycare Procedure",
        description: "Most patients are discharged within 24 hours and return to normal activities in 2–3 days."
      },
      {
        title: "Safe for High-Risk or Recurrent Cases",
        description: "RIRS is ideal for patients who are not candidates for open or complex surgeries, and for those with recurring stones."
      }
    ],
    fheading: "FAQs on RIRS Surgery",
    faqs: [
      {
        faqTitle: "What is RIRS surgery and how is it done at Lux Hospitals?",
        faqAnswer: "RIRS is a laser-based procedure that removes kidney stones through a flexible scope inserted via the urinary tract. At Lux Hospitals, our urologists use advanced Holmium lasers for precise and scarless treatment."
      },
      {
        faqTitle: "How is RIRS different from other kidney stone procedures?",
        faqAnswer: "Unlike PCNL or open surgery, RIRS involves no incisions. It is completely endoscopic, making it safer, less painful, and quicker in terms of recovery."
      },
      {
        faqTitle: "Who is the right candidate for RIRS surgery?",
        faqAnswer: "RIRS is suitable for stones up to 2 cm in size, especially those in the kidney or upper ureter. It’s also ideal for patients looking for a daycare, scarless option."
      },
      {
        faqTitle: "What is the recovery process after RIRS?",
        faqAnswer: "Most patients are discharged the same day or next. There may be mild discomfort for 1–2 days, and you’ll be advised to stay hydrated. We offer complete post-op care and follow-up."
      },
      {
        faqTitle: "What is the cost of RIRS surgery at Lux Hospitals?",
        faqAnswer: "Costs vary depending on the size and location of the stone. We offer fixed-price packages, full insurance support, and 0% EMI options."
      },
      {
        faqTitle: "How do I book a consultation for RIRS?",
        faqAnswer: "Just call 07969084442 or message us on WhatsApp. Our team will arrange a free consultation, review your scan reports, and explain your treatment plan in detail."
      }
    ],
    footerComponent: {
      footerdesc: "Experience scar-free, advanced RIRS surgery at Lux Hospitals — with expert care, quick recovery, and complete insurance support.\n\nBook your free consultation today!",
      footernumber: "07969084442"
    }
  },

  "best-pcnl-procedure-in-hyderabad": {
    heading: "Best PCNL Procedure in Hyderabad",
    descList: [
      "Top Urologist for PCNL Surgery",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationSectionHeading: "LUX Hospitals – PCNL Procedure | Advanced Kidney Stone Removal | High-Precision Urology Centre | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "PCNL Procedure at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is PCNL Procedure?",
    whatAreP: "PCNL (Percutaneous Nephrolithotomy) is a minimally invasive surgery used to remove large or complex kidney stones. A small incision is made in the back to create a direct channel into the kidney. Through this access, a nephroscope is used to locate and extract the stones using advanced instruments.\nAt Lux Hospitals, our experienced urologists perform PCNL with high precision, ensuring maximum stone clearance, minimal discomfort, and quicker recovery, all while maintaining the highest standards of safety and care.",
    whatHead: "Top 4 Benefits of PCNL Procedure",
    treatments: [
      {
        title: "Ideal for Large & Complex Stones",
        description: "PCNL is the preferred treatment for stones larger than 2 cm or multiple stones that can’t be managed with laser alone."
      },
      {
        title: "Small Incision, Big Results",
        description: "Although it's a surgical procedure, the incision is only about 1 cm — allowing targeted removal with minimal trauma."
      },
      {
        title: "High Stone Clearance Rate",
        description: "Direct access to the kidney enables full removal in a single sitting, reducing the chance of recurrence."
      },
      {
        title: "Faster Recovery Compared to Open Surgery",
        description: "Most patients recover within a few days and experience significantly less pain than traditional methods."
      }
    ],
    fheading: "FAQs on PCNL Procedure",
    faqs: [
      {
        faqTitle: "What is PCNL and when is it needed?",
        faqAnswer: "PCNL is a keyhole surgery used to remove large or deep-seated kidney stones. It’s recommended when stones are too big or hard for laser treatment (RIRS or URSL) to handle effectively."
      },
      {
        faqTitle: "Is PCNL a safe procedure?",
        faqAnswer: "Yes. At Lux Hospitals, PCNL is performed using the latest imaging, endoscopy, and surgical equipment. Our team ensures complete pre-op evaluation and post-op support for a safe, smooth experience."
      },
      {
        faqTitle: "How is PCNL different from laser procedures like RIRS?",
        faqAnswer: "While laser procedures are done via the natural urinary tract, PCNL creates a direct path to the kidney for removing stones. It’s more effective for larger, multiple, or harder stones."
      },
      {
        faqTitle: "What’s the recovery time after PCNL?",
        faqAnswer: "Patients typically stay for 1–2 days and recover fully in about a week. Our doctors provide step-by-step post-surgery care and follow-up to ensure quick healing."
      },
      {
        faqTitle: "What is the cost of PCNL at Lux Hospitals?",
        faqAnswer: "PCNL costs depend on the case complexity but are offered under fixed-cost packages with cashless insurance and 0% EMI options. You’ll get a complete cost estimate after consultation."
      },
      {
        faqTitle: "How do I book a consultation for PCNL?",
        faqAnswer: "Call 07969084442 or send us a message on WhatsApp. We’ll schedule your free consultation, review your reports, and guide you through the safest, most effective treatment plan."
      }
    ],
    footerComponent: {
      footerdesc: "Get expert care for complex kidney stones with advanced PCNL Procedure at Lux Hospitals — safe, effective, and fully covered by insurance.\n\nBook your free consultation today!",
      footernumber: "07969084442"
    }
  },
  "best-ursl-treatment-in-hyderabad": {
    heading: "Best URSL Treatment in Hyderabad",
    descList: [
      "Top Urologist for URSL Procedure",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationSectionHeading: "LUX Hospitals – URSL Treatment | Advanced Ureter Stone Removal | Endoscopic Urology Specialists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "URSL Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is URSL Treatment?",
    whatAreP: "URSL (Ureteroscopic Lithotripsy) is a minimally invasive, endoscopic procedure used to treat stones located in the ureter — the tube connecting the kidney to the bladder. A thin scope is inserted through the natural urinary passage to reach the stone. Laser energy is then used to break it into fine pieces that are either removed or flushed out naturally.\nAt Lux Hospitals, our urologists perform URSL using high-precision Holmium laser systems, ensuring scarless, painless stone removal with rapid recovery.",
    whatHead: "Top 4 Benefits of URSL Treatment",
    treatments: [
      {
        title: "No Cuts, No Scars",
        description: "The entire procedure is done through the urethra — no incisions or stitches are needed."
      },
      {
        title: "Perfect for Ureter Stones",
        description: "URSL is the gold standard for stones stuck in the mid or lower ureter causing pain or obstruction."
      },
      {
        title: "Short Procedure, Quick Discharge",
        description: "The surgery takes about 30 minutes. Most patients are discharged the same day or the next morning."
      },
      {
        title: "High Success with Minimal Complications",
        description: "URSL is highly effective with minimal risk, making it one of the safest treatment options for ureteric stones."
      }
    ],
    fheading: "FAQs on URSL Treatment",
    faqs: [
      {
        faqTitle: "What is URSL and how is it performed at Lux Hospitals?",
        faqAnswer: "URSL is a laser-based procedure where a small scope is passed through the urethra to reach the ureter. Stones are broken using Holmium laser and removed safely. It’s completely scarless and performed under anaesthesia."
      },
      {
        faqTitle: "Who is the right candidate for URSL treatment?",
        faqAnswer: "URSL is ideal for patients with ureteric stones, especially when the stone is causing pain, blockage, or infection. It’s also suited for patients who prefer non-surgical, daycare options."
      },
      {
        faqTitle: "What’s the recovery like after URSL?",
        faqAnswer: "Patients usually recover within 2–3 days. Mild burning or urinary frequency may occur briefly. Complete post-procedure instructions and follow-up support are provided."
      },
      {
        faqTitle: "How much does URSL treatment cost at Lux Hospitals?",
        faqAnswer: "The cost depends on the stone size and location. Lux Hospitals offers fixed-cost packages, cashless insurance coverage, and 0% EMI plans."
      },
      {
        faqTitle: "Are there any risks or complications with URSL?",
        faqAnswer: "URSL is a low-risk procedure when performed by experienced urologists. Rarely, mild discomfort or temporary stent placement may be needed. Our team ensures thorough pre-op evaluation and post-op care."
      },
      {
        faqTitle: "How can I book a consultation for URSL?",
        faqAnswer: "Call 07969084442 or send us a WhatsApp message. We’ll schedule your free consultation, review your reports, and help you understand your best treatment option."
      }
    ],
    footerComponent: {
      footerdesc: "Get safe, scarless relief from ureteric stones with advanced URSL Treatment at Lux Hospitals.\n\nBook your free consultation today!",
      footernumber: "07969084442"
    }
  },
  "best-lithotripsy-treatment-hyderabad": {
    heading: "Best Lithotripsy Treatment in Hyderabad",
    descList: [
      "Top Urologist for Lithotripsy Procedure",
      "Expert in RIRS, PCNL & URSL",
      "30-Min Laser Procedure, No Cuts",
      "All Insurances Accepted (Cashless)",
      "0% EMI Option Available",
      "10,000+ Stone-Free Patients"
    ],
    locationSectionHeading: "LUX Hospitals – Lithotripsy Treatment | Non-Invasive Kidney Stone Removal | Advanced Urology Centre | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp",
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
        mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp",
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Andrologist",
        experience: "Experience: 9+ years",
        description:
          "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
        mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Lithotripsy Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Lithotripsy?",
    whatAreP: "Lithotripsy is a non-invasive or minimally invasive procedure used to break kidney or ureteric stones into smaller fragments, allowing them to pass naturally through urine. It can be performed using laser (laser lithotripsy) or shock wave energy (ESWL – Extracorporeal Shock Wave Lithotripsy) depending on the stone’s size and location.\nAt Lux Hospitals, our expert urologists use advanced Holmium laser systems to safely and precisely break down stones without surgery — offering quick, scarless recovery and long-term relief.",
    whatHead: "Top 4 Benefits of Lithotripsy Treatment",
    treatments: [
      {
        title: "Scarless & Painless",
        description: "Lithotripsy is either completely non-invasive (ESWL) or done through natural urinary pathways (laser) — no cuts, no stitches, minimal discomfort."
      },
      {
        title: "Quick & Effective",
        description: "The procedure usually takes under 30 minutes. Stone fragments pass through urine in the following days."
      },
      {
        title: "Outpatient or Daycare Option",
        description: "Most patients are discharged on the same day, with minimal post-procedure downtime."
      },
      {
        title: "Safe for Most Stone Types",
        description: "Lithotripsy works well for stones up to 2 cm in size and is suitable for patients who are unfit for surgery."
      }
    ],
    fheading: "FAQs on Lithotripsy Treatment",
    faqs: [
      {
        faqTitle: "What is lithotripsy and how is it done at Lux Hospitals?",
        faqAnswer: "Lithotripsy is a technique to break kidney stones into tiny pieces using laser or shock waves. At Lux Hospitals, we use Holmium laser lithotripsy as well as shock wave therapy (ESWL) based on the patient’s needs."
      },
      {
        faqTitle: "Is lithotripsy a painful procedure?",
        faqAnswer: "No. It is either completely painless or involves only mild sedation. Laser lithotripsy is done under anaesthesia, while ESWL doesn’t require any cuts or scopes."
      },
      {
        faqTitle: "Who is the right candidate for lithotripsy?",
        faqAnswer: "It’s ideal for patients with small to medium stones (less than 2 cm), especially those looking for a non-surgical treatment option with fast recovery."
      },
      {
        faqTitle: "How much does lithotripsy cost at Lux Hospitals?",
        faqAnswer: "The cost depends on the stone size and method used. We offer fixed-price packages, full insurance support, and 0% EMI options for affordability and transparency."
      },
      {
        faqTitle: "What’s the recovery like after lithotripsy?",
        faqAnswer: "Recovery is usually quick. Some mild discomfort may occur as the stone fragments pass through urine. We provide hydration guidance and follow-up support to ensure smooth passage."
      },
      {
        faqTitle: "How do I book a consultation for lithotripsy?",
        faqAnswer: "Just call 07969084442 or connect with us on WhatsApp. We’ll arrange your free consultation, evaluate your reports, and suggest the most suitable treatment plan."
      }
    ],
    footerComponent: {
      footerdesc: "Break free from kidney stones — safely and painlessly — with expert Lithotripsy Treatment at Lux Hospitals.\n\nBook your free consultation today!",
      footernumber: "07969084442"
    }
  },

  Fistula: {
    heading: "Get Relief from Piles Today",
    paragraph: "Lux Hospitals offers advanced treatment with quick recovery.",
  },
};

export default function ConditionPage({ params }) {
  const { slug } = use(params);

  const content = contentMap[slug] || {
    heading: "Lux Hospitals",
    paragraph: "Trusted care for all specialties.",
  };
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


  return (
    <>
      <Header
        PhoneNumber={"07969084442"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084442"}
      />
      <Hero heading={content.heading} descList={content.descList} />
      <Second services={services} />
      <FreeOpdSection />
      {content.doctors && (
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
            {content.doctors.map((cardData, ind) => (
              <div key={ind}>
                <DoctorCard
                  url={cardData.url}
                  name={cardData.name}
                  qualification={cardData.qualification}
                  designation={cardData.designation}
                  experience={cardData.experience}
                  description={cardData.description}
                  mobileNumberDoctor="tel:07969084442"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {content.tableContent?.[0] && (
        <HospitalComparisond theading={content.tableContent[0].theading} rows={tableData} ConditionVideo={"/KIDNEY STONE PAGES.mp4"} />
      )}
      <Accreditations />
      <VideoSection />
      {content.locationsectionheading && (
        <HospitalLocation
          locationsectionheading={content.locationsectionheading}
        />
      )}
      <PatientTalks />
      <Luxgpt />
      {content.whatAreH && (
        <Whatare
          whatAreH={content.whatAreH}
          whatAreP={content.whatAreP}
          whatHead={content.whatHead}
          treatments={content.treatments || []}
        />
      )}
      {content.faqs && (
        <Faqs
          fheading={content.fheading}
          faqs={content.faqs.map((faq) => ({
            faqquestion: faq.faqTitle,
            faqanswer: faq.faqAnswer,
          }))}
        />
      )}
      {content.footerComponent && (
        <FooterComponent
          footerdesc={content.footerComponent.footerdesc}
          footernumber={content.footerComponent.footernumber}
        />
      )}
      <MobileStickyFooter mobileNumber="tel:07969084442" />
    </>
  );
}
