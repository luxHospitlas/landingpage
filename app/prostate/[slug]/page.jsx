"use client"; // Add this since you're using client-side components
import { use } from "react";
import dynamic from "next/dynamic";
import Header from "@/app/components/header/header";
import Hero from "../../components/hero/hero";
import Second from "../../components/second/second";
import HospitalLocation from "../../components/HospitalLocation/hospitallocations";
import tableData from '../../fistula/fistuladata';
import FreeOpdSection from "@/app/components/FreeOPD/freeopd";
import Gentstalks from "../../components/Gentstalks/gentstalks";
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
  "best-prostate-treatment-in-hyderabad": {
    heading: "Best Prostate Treatment in Hyderabad",
    descList: [
      "Top Doctor for Prostate Treatment",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Prostate Treatment | Advanced Urology & Laser Surgery | Best Urologist | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 5+ Years",
        description: "Urologist with 5+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 3,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Prostate Enlargement (BPH)?",
    whatAreP:
      "Benign Prostatic Hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland that commonly affects men over 50. It causes urinary symptoms like frequent urination, weak flow, urgency, and difficulty emptying the bladder. At Lux Hospitals, we use advanced laser and endoscopic technologies for painless, stitch-less treatments with faster recovery and long-term relief.",
    whatHead: "Top 2 Treatments for Enlarged Prostate",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "The gold standard in prostate surgery. It removes obstructive prostate tissue using a high-powered laser, offering long-term results with minimal bleeding, no external cuts, and quick recovery."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "This traditional method involves the removal of excess prostate tissue using an endoscope. It’s an effective solution for larger prostate glands and offers a safe recovery."
      }
    ],
    fheading: "FAQs on Prostate Treatment",
    faqs: [
      {
        faqTitle: "What causes prostate enlargement?",
        faqAnswer:
          "Age-related hormonal changes are the most common cause, often starting after the age of 50."
      },
      {
        faqTitle: "Why choose Lux Hospitals for prostate treatment in Hyderabad?",
        faqAnswer:
          "Our expert urologists perform advanced laser procedures like HoLEP for faster, safer, and more effective results."
      },
      {
        faqTitle: "Is prostate surgery necessary for BPH?",
        faqAnswer:
          "Not always. But when symptoms are severe or medications fail, minimally invasive surgery like HoLEP is highly effective."
      },
      {
        faqTitle: "Is the procedure painful?",
        faqAnswer:
          "No. HoLEP and laser surgeries are performed under anesthesia and are designed for maximum comfort and minimal recovery time."
      },
      {
        faqTitle: "Is prostate treatment covered under insurance?",
        faqAnswer:
          "Yes, Lux Hospitals provides 100% cashless insurance coverage with all major health insurance providers."
      },
      {
        faqTitle: "Whom should I consult for prostate treatment?",
        faqAnswer:
          "Consult Dr. Aditya Potla or Dr. Priyank Ashokkumar Salecha at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Regain control of your life with advanced prostate treatment in Hyderabad at Lux Hospitals – fast, safe, and effective.",
      footernumber: "07969084442"
    }
  },
  "advanced-prostate-surgery-in-hyderabad": {
    heading: "Advanced Prostate Surgery Hospital in Hyderabad",
    descList: [
      "Top Doctor for Prostate Surgery",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Prostate Surgery Specialists | Advanced Urology & Laser Care | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 5+ Years",
        description:
          "Urologist with 5+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 3,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate this as needed
    whatAreH: "What is Prostate Surgery?",
    whatAreP:
      "Prostate surgery is a medical procedure performed to remove or reduce enlarged prostate tissue that is blocking urine flow. It's often recommended for patients with severe urinary symptoms due to Benign Prostatic Hyperplasia (BPH). At Lux Hospitals, we specialize in advanced laser-based procedures like HoLEP that are bloodless, stitch-free, and offer rapid recovery with minimal pain.",
    whatHead: "Top 2 Surgical Options for Enlarged Prostate",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "A cutting-edge laser procedure that removes obstructive prostate tissue through the urinary passage. It ensures complete tissue removal, minimal bleeding, and long-lasting results."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "A traditional but effective endoscopic surgery where excess tissue is removed using an electrical loop. Suitable for patients not eligible for laser options."
      }
    ],
    fheading: "FAQs on Prostate Surgery",
    faqs: [
      {
        faqTitle: "What are the causes of prostate enlargement requiring surgery?",
        faqAnswer:
          "Age-related hormonal changes lead to BPH, which can worsen over time and require surgical intervention if untreated."
      },
      {
        faqTitle: "Why choose Lux Hospitals for prostate surgery in Hyderabad?",
        faqAnswer:
          "We offer the latest laser and endoscopic surgeries performed by experienced urologists with a strong track record in BPH treatment."
      },
      {
        faqTitle: "Is prostate surgery necessary?",
        faqAnswer:
          "If medications fail and symptoms impact your lifestyle, surgery like HoLEP provides permanent relief with minimal downtime."
      },
      {
        faqTitle: "Is prostate surgery painful?",
        faqAnswer:
          "No. Procedures like HoLEP are done under anesthesia, are minimally invasive, and offer quick post-op recovery."
      },
      {
        faqTitle: "Is prostate surgery covered under insurance?",
        faqAnswer:
          "Yes, Lux Hospitals supports 100% cashless treatment with all major health insurance providers."
      },
      {
        faqTitle: "Whom should I consult for prostate surgery?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla  at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert prostate surgery in Hyderabad with advanced laser techniques and same-day recovery at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-prostate-laser-surgery-hyderabad": {
    heading: "Best Prostate Laser Surgery in Hyderabad",
    descList: [
      "Top Doctor for Prostate Laser Treatment",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Prostate Laser Treatment | Advanced Urology & Laser Surgery | Best Urologists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 5+ Years",
        description:
          "Urologist with 5+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 3,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Add actual table data as needed
    whatAreH: "What is Prostate Laser Treatment?",
    whatAreP:
      "Prostate Laser Treatment is a modern, minimally invasive method used to treat Benign Prostatic Hyperplasia (BPH) by removing excess prostate tissue with high-powered laser energy. At Lux Hospitals, we specialize in HoLEP, the most advanced laser technique that provides long-term relief without external cuts, stitches, or prolonged hospital stay.",
    whatHead: "Top 2 Laser Treatments for Enlarged Prostate",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "A highly precise laser procedure that removes the inner core of the prostate causing obstruction. It’s painless, bloodless, and offers same-day recovery with durable results."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "This traditional method involves the removal of excess prostate tissue using an endoscope. It’s an effective solution for larger prostate glands and offers a safe recovery."
      }
    ],
    fheading: "FAQs on Prostate Laser Treatment",
    faqs: [
      {
        faqTitle: "What causes the need for prostate laser treatment?",
        faqAnswer:
          "BPH, an age-related enlargement of the prostate, leads to urine flow problems and often requires laser intervention."
      },
      {
        faqTitle: "Why choose Lux Hospitals for prostate laser treatment in Hyderabad?",
        faqAnswer:
          "Our expert urologists specialize in advanced HoLEP laser surgeries that are pain-free, safe, and highly effective."
      },
      {
        faqTitle: "Is prostate laser treatment better than traditional surgery?",
        faqAnswer:
          "Yes. Laser options like HoLEP offer less bleeding, no stitches, and faster recovery compared to TURP."
      },
      {
        faqTitle: "Is the laser procedure painful?",
        faqAnswer:
          "No. It’s done under anesthesia and designed for maximum comfort with minimal post-operative discomfort."
      },
      {
        faqTitle: "Is prostate laser treatment covered under insurance?",
        faqAnswer:
          "Yes. We offer 100% cashless insurance acceptance with all major health plans."
      },
      {
        faqTitle: "Whom should I consult for prostate laser treatment?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Experience painless and precise prostate laser treatment in Hyderabad at Lux Hospitals with trusted specialists.",
      footernumber: "07969084442"
    }
  },

  "best-prostate-doctor-in-hyderabad": {
    heading: "Best Prostate Doctor in Hyderabad",
    descList: [
      "Best Prostate Doctor in Hyderabad",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Prostate Doctor | Advanced Urology & Laser Surgery | Top Urologist | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 5+ Years",
        description:
          "Urologist with 5+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 3,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Treatment by Top Doctors at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate actual treatment table data as needed
    whatAreH: "What is the Prostate?",
    whatAreP:
      "The prostate is a small, walnut-shaped gland located below the bladder in men. It surrounds the urethra and produces seminal fluid, which nourishes and transports sperm. As part of the male reproductive system, it also helps control urine flow. Prostate health is vital, especially as men age. At Lux Hospitals, our expert prostate doctors use the latest laser technologies like HoLEP to offer painless, stitch-free, and same-day treatments for prostate-related issues.",
    whatHead: "Top 2 Treatments For Prostate",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "A cutting-edge laser procedure that removes obstructive prostate tissue through the urinary passage. It ensures complete tissue removal, minimal bleeding, and long-lasting results."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "A traditional but effective endoscopic surgery where excess tissue is removed using an electrical loop. Suitable for patients not eligible for laser options."
      }
    ],
    fheading: "FAQs on Prostate Treatment",
    faqs: [
      {
        faqTitle: "What symptoms indicate I should see a prostate doctor?",
        faqAnswer:
          "If you experience frequent urination, weak stream, difficulty urinating, or night-time urgency, it’s time to consult a prostate doctor."
      },
      {
        faqTitle: "Why choose Lux Hospitals for prostate treatment in Hyderabad?",
        faqAnswer:
          "Our prostate doctors are laser specialists with thousands of successful surgeries and years of focused experience in prostate care."
      },
      {
        faqTitle: "Is prostate surgery necessary?",
        faqAnswer:
          "If medications fail and symptoms impact your lifestyle, surgery like HoLEP provides permanent relief with minimal downtime."
      },
      {
        faqTitle: "Is treatment for prostate painful?",
        faqAnswer:
          "No. Most treatments are minimally invasive, done under anesthesia, and ensure a smooth, pain-free recovery."
      },
      {
        faqTitle: "Is prostate surgery covered under insurance?",
        faqAnswer:
          "Yes, Lux Hospitals supports 100% cashless treatment with all major health insurance providers."
      },
      {
        faqTitle: "Whom should I consult for prostate treatment in Hyderabad?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Consult the best prostate doctor in Hyderabad today at Lux Hospitals for expert care and fast recovery.",
      footernumber: "07969084442"
    }
  },
  "advanced-prostate-treatment-hospital-hyderabad": {
    heading: "Advanced Prostate Treatment Hospital in Hyderabad",
    descList: [
      "Best Prostate Hospital in Hyderabad",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Prostate Hospital | Advanced Urology & Laser Surgery | Top Urologists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 9+ Years",
        description:
          "Urologist with 9+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 4,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate actual treatment table data as needed
    whatAreH: "What is Prostate Treatment?",
    whatAreP:
      "Prostate treatment refers to medical or surgical care provided for conditions like Benign Prostatic Hyperplasia (BPH), prostatitis, and prostate cancer. At Lux Hospitals – a leading prostate hospital in Hyderabad – we use cutting-edge laser and endoscopic techniques such as HoLEP to ensure painless, scar-free treatment with faster recovery, minimal complications, and same-day discharge.",
    whatHead: "Top 2 Treatments for Prostate Conditions",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "The most advanced laser surgery for BPH. It precisely removes excess prostate tissue using laser energy, offering long-term relief with no cuts or stitches."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "A conventional but effective surgical method using a resectoscope to trim prostate tissue. Ideal for patients who may not be suited for laser surgery."
      }
    ],
    fheading: "FAQs on Prostate Treatment",
    faqs: [
      {
        faqTitle: "What are the common causes of prostate problems?",
        faqAnswer:
          "Prostate enlargement (BPH) is mostly age-related, typically affecting men over 50 due to hormonal changes. Infections and inflammation can also cause issues."
      },
      {
        faqTitle: "Why is Lux Hospitals considered a top prostate hospital?",
        faqAnswer:
          "We combine expert doctors, advanced laser technology, and same-day discharge to provide superior prostate care and faster recovery."
      },
      {
        faqTitle: "What type of surgery is done at a prostate hospital?",
        faqAnswer:
          "At Lux Hospitals, we offer laser-based HoLEP surgery and traditional TURP – both are minimally invasive and safe."
      },
      {
        faqTitle: "When should I visit a hospital for prostate treatment?",
        faqAnswer:
          "If you experience frequent urination, a weak stream, or urinary retention, you should consult a prostate hospital for timely treatment."
      },
      {
        faqTitle: "Is prostate treatment at Lux Hospitals covered by insurance?",
        faqAnswer:
          "Yes, we offer 100% cashless insurance options with all major health insurance companies."
      },
      {
        faqTitle: "Whom should I consult for prostate treatment?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Find complete care at Hyderabad’s trusted prostate hospital — Lux Hospitals, where laser precision meets expert urology.",
      footernumber: "07969084442"
    }
  },
  "affordable-prostate-treatment-hyderabad": {
    heading: "Affordable Prostate Treatment in Hyderabad",
    descList: [
      "Affordable Prostate Treatment in Hyderabad",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Affordable Prostate Treatment | Advanced Urology & Laser Surgery | Top Urologists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 9+ Years",
        description:
          "Urologist with 9+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 4,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate actual treatment table data as needed
    whatAreH: "What is Prostate Treatment?",
    whatAreP:
      "Prostate treatment involves medical interventions for conditions such as Benign Prostatic Hyperplasia (BPH), prostatitis, or prostate cancer. At Lux Hospitals, we offer advanced laser surgeries like HoLEP, which are highly effective and minimally invasive, providing long-term relief without external cuts or stitches.",
    whatHead: "Top 2 Treatments for Prostate Conditions",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "HoLEP is a cutting-edge laser procedure that removes excess prostate tissue with minimal bleeding and no need for incisions. This provides long-term symptom relief and ensures a quick recovery."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "This traditional method involves the removal of excess prostate tissue using an endoscope. It’s an effective solution for larger prostate glands and offers a safe recovery."
      }
    ],
    fheading: "FAQs on Prostate Treatment",
    faqs: [
      {
        faqTitle: "What are the causes of prostate enlargement?",
        faqAnswer:
          "Age-related hormonal changes are the most common cause of prostate enlargement, particularly in men over 50, though other factors like inflammation or infections can also contribute."
      },
      {
        faqTitle: "Why is Lux Hospitals the preferred choice for prostate treatment?",
        faqAnswer:
          "Lux Hospitals combines advanced technology, experienced urologists, and affordable treatment options, making it one of the best places for prostate care in Hyderabad."
      },
      {
        faqTitle: "What type of surgery is done for prostate issues?",
        faqAnswer:
          "At Lux Hospitals, we offer minimally invasive laser surgeries like HoLEP and TURP, both of which are effective in treating prostate enlargement and providing long-term relief."
      },
      {
        faqTitle: "Is the treatment affordable at Lux Hospitals?",
        faqAnswer:
          "Yes, we offer affordable prostate treatment options using the latest technology, ensuring high-quality care at the lowest cost possible."
      },
      {
        faqTitle: "Is prostate treatment covered under insurance?",
        faqAnswer:
          "Yes, we accept all leading insurance providers and offer 100% cashless treatment, ensuring ease of access for all patients."
      },
      {
        faqTitle: "Whom should I consult for prostate treatment?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Affordable prostate treatment is now accessible at Lux Hospitals, providing expert care without compromising on quality.",
      footernumber: "07969084442"
    }
  },
  "best-prostate-bph-treatment-hyderabad": {
    heading: "Best BPH Treatment for Prostate in Hyderabad",
    descList: [
      "Leading Experts in BPH Treatment",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Best BPH Treatment | Advanced Urology & Laser Surgery | Top Urologists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 9+ Years",
        description:
          "Urologist with 9+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 4,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "BPH Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate actual treatment table data as needed
    whatAreH: "What is BPH Treatment?",
    whatAreP:
      "BPH (Benign Prostatic Hyperplasia) refers to the non-cancerous enlargement of the prostate gland, often causing urinary difficulties. At Lux Hospitals, we offer the best BPH treatment through advanced laser surgeries like HoLEP (Holmium Laser Enucleation of the Prostate), which ensures quick relief from symptoms and minimal recovery time.",
    whatHead: "Top 2 Treatments for BPH",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "A minimally invasive procedure that uses laser energy to remove excess prostate tissue, relieving symptoms like frequent urination and weak urine flow. It’s a bloodless, stitch-free procedure with long-lasting results."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "This traditional method involves the removal of excess prostate tissue using an endoscope. It’s an effective solution for larger prostate glands and offers a safe recovery."
      }
    ],
    fheading: "FAQs on BPH Treatment",
    faqs: [
      {
        faqTitle: "What causes BPH (Benign Prostatic Hyperplasia)?",
        faqAnswer:
          "BPH is primarily caused by hormonal changes that occur as men age. It is common in men over 50 and can lead to urinary problems due to the prostate pressing against the urethra."
      },
      {
        faqTitle: "Why choose Lux Hospitals for BPH treatment?",
        faqAnswer:
          "Lux Hospitals provides cutting-edge technology, experienced doctors, and a patient-centered approach to offer the best BPH treatments in Hyderabad with minimal recovery times."
      },
      {
        faqTitle: "What kind of surgery is involved in BPH treatment?",
        faqAnswer:
          "At Lux Hospitals, we offer minimally invasive surgeries like HoLEP and laser vaporization, which are highly effective and cause minimal discomfort and fast recovery."
      },
      {
        faqTitle: "Why should I seek treatment for BPH?",
        faqAnswer:
          "If BPH symptoms like frequent urination, weak flow, or difficulty emptying the bladder are affecting your daily life, seeking treatment is important for long-term relief and better quality of life."
      },
      {
        faqTitle: "Is BPH treatment covered under insurance?",
        faqAnswer:
          "Yes, we provide 100% cashless insurance services, accepting all major health insurance providers."
      },
      {
        faqTitle: "Whom should I consult for BPH treatment?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Choose Lux Hospitals for the best BPH treatment in Hyderabad and get back to enjoying a healthy life.",
      footernumber: "07969084442"
    }
  },

  "best-prostate-enlargement-treatment-hyderabad": {
    heading: "Best Prostate Enlargement Treatment in Hyderabad",
    descList: [
      "Doctors in Prostate Enlargement Treatment",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Best Prostate Enlargement Treatment | Advanced Urology & Laser Surgery | Top Urologists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 9+ Years",
        description:
          "Urologist with 9+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 4,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "Prostate Enlargement Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate actual treatment table data as needed
    whatAreH: "What is Prostate Enlargement?",
    whatAreP:
      "Prostate enlargement, also known as Benign Prostatic Hyperplasia (BPH), is a common condition in men, especially after the age of 50. The prostate gland grows larger, often leading to urinary difficulties like frequent urination, weak urine flow, and the feeling of incomplete bladder emptying. At Lux Hospitals, we specialize in offering Prostate Enlargement treatment using advanced laser techniques such as HoLEP, providing long-term relief with minimal discomfort and quick recovery.",
    whatHead: "Top 2 Treatments for Prostate Enlargement",
    treatments: [
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "HoLEP is the gold-standard treatment for prostate enlargement. It uses laser technology to precisely remove excess prostate tissue, offering long-term symptom relief with no cuts or stitches and minimal downtime."
      },
      {
        title: "TURP (Transurethral Resection of the Prostate)",
        description:
          "This traditional method involves the removal of excess prostate tissue using an endoscope. It’s an effective solution for larger prostate glands and offers a safe recovery."
      }
    ],
    fheading: "FAQs on Prostate Enlargement Treatment",
    faqs: [
      {
        faqTitle: "What causes prostate enlargement?",
        faqAnswer:
          "Prostate enlargement is primarily caused by hormonal changes that occur as men age. This results in the growth of prostate tissue, which can cause urinary issues."
      },
      {
        faqTitle: "Why choose Lux Hospitals for prostate enlargement treatment?",
        faqAnswer:
          "Lux Hospitals is known for its advanced technology, experienced doctors, and a patient-centered approach to providing the best prostate enlargement treatment with no cuts or stitches."
      },
      {
        faqTitle: "What kind of surgery is involved in prostate enlargement treatment?",
        faqAnswer:
          "At Lux Hospitals, we use HoLEP and laser vaporization, which are advanced, minimally invasive techniques that provide excellent results with faster recovery times compared to traditional surgeries."
      },
      {
        faqTitle: "Is the procedure painful?",
        faqAnswer:
          "No. HoLEP and laser surgeries are performed under anesthesia and are designed for maximum comfort and minimal recovery time."
      },
      {
        faqTitle: "Is prostate enlargement treatment covered under insurance?",
        faqAnswer:
          "Yes, we offer 100% cashless insurance coverage, working with all major health insurance providers to make your treatment hassle-free."
      },
      {
        faqTitle: "Whom should I consult for prostate enlargement treatment?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get the best care for prostate enlargement at Lux Hospitals with advanced, minimally invasive treatments.",
      footernumber: "07969084442"
    }
  },
  "best-prostate-turp-treatment-hyderabad": {
    heading: "Best TURP Treatment for Prostate in Hyderabad",
    descList: [
      "Leading Experts in TURP Surgery",
      "Leading Urologist for HoLEP & TURP",
      "Advanced Laser Surgery (HoLEP)",
      "30-Min Procedure, Quick Recovery",
      "100% Success Rate",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Patients Treated"
    ],
    locationsectionheading:
      "LUX Hospitals – Best TURP Surgery Center | Advanced Urology & Laser Surgery | Top Urologists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 10+ years",
        description:
          "Urologist and Andrologist with 10+ years of expertise in kidney stones, prostate conditions, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health procedures. Treated over 7,000 patients with successful outcomes using advanced techniques and personalised treatment plans.",
        // mobileNumberDoctor: "07969084442"
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Urologist & Prostate Expert",
        experience: "Experience: 9+ Years",
        description:
          "Urologist with 9+ years of experience. Skilled in managing kidney stones, prostate issues, circumcision, and varicocele. Focuses on minimally invasive surgery and personalised care. Treated 4,000+ patients through safe, outcome-focused interventions for quicker recovery and long-term urological health.",
        // mobileNumberDoctor: "07969084442"
      }
    ],
    tableContent: [
      {
        theading: "TURP Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData, // Populate actual treatment table data as needed
    whatAreH: "What is TURP Surgery?",
    whatAreP:
      "TURP (Transurethral Resection of the Prostate) is a surgical procedure used to treat Benign Prostatic Hyperplasia (BPH), a condition where the prostate gland becomes enlarged and obstructs the flow of urine. TURP involves the removal of excess prostate tissue through the urethra, using a resectoscope, to restore normal urine flow. At Lux Hospitals, we offer advanced TURP surgery that is minimally invasive, resulting in less pain, quicker recovery, and no need for external cuts or stitches.",
    whatHead: "Top 2 Treatments for TURP Surgery",
    treatments: [
      {
        title: "Laser TURP (Transurethral Resection of the Prostate)",
        description:
          "A modern variation of TURP, Laser TURP uses laser technology to vaporize excess prostate tissue. It offers a minimally invasive approach with less bleeding, faster recovery, and reduced risk of complications."
      },
      {
        title: "HoLEP (Holmium Laser Enucleation of the Prostate)",
        description:
          "HoLEP is the gold-standard treatment for prostate enlargement. It uses laser technology to precisely remove excess prostate tissue, offering long-term symptom relief with no cuts or stitches and minimal downtime."
      }
    ],
    fheading: "FAQs on TURP Surgery",
    faqs: [
      {
        faqTitle: "What causes the need for TURP surgery?",
        faqAnswer:
          "TURP surgery is typically recommended for men with Benign Prostatic Hyperplasia (BPH), a condition in which the prostate enlarges and obstructs the urethra, causing urinary issues like frequent urination, weak stream, and retention."
      },
      {
        faqTitle: "Why choose Lux Hospitals for TURP surgery?",
        faqAnswer:
          "Lux Hospitals is known for its advanced TURP surgery techniques, including both traditional and laser options. Our expert urologists ensure the best possible care with minimal recovery time."
      },
      {
        faqTitle: "How is TURP surgery performed?",
        faqAnswer:
          "TURP surgery involves inserting a resectoscope into the urethra to remove the excess prostate tissue that is blocking the urine flow. The procedure is minimally invasive, with no external incisions required."
      },
      {
        faqTitle: "Is TURP surgery an affordable treatment option?",
        faqAnswer:
          "Yes, TURP surgery at Lux Hospitals is an affordable treatment option, offering high-quality care with advanced technology at the lowest cost possible."
      },
      {
        faqTitle: "Is TURP surgery covered by insurance?",
        faqAnswer:
          "Yes, we provide 100% cashless insurance coverage for TURP surgery with all major health insurance providers."
      },
      {
        faqTitle: "Whom should I consult for TURP surgery?",
        faqAnswer:
          "Consult Dr. Priyank Salecha or Dr. Aditya Potla at Lux Hospitals — trusted specialists known for their precision, experience, and personalised surgical solutions tailored to your needs."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get the best care for TURP surgery at Lux Hospitals, where advanced techniques meet expert care for faster recovery.",
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
    
    { label: "Treatment Method",other: "TURP / Open",lux: "HoLEP Laser"},
    { label: "Hospital Stay", other: "3-5 Days", lux: "Same / Next Day" },
    { label: "Recovery Time", other: "10 Days", lux: "3–5 Days" },
    { label: "Laser Type", other: "Standard TURP", lux: "Advanced HoLEP Laser" },
    { label: "Pricing", other: "Variable", lux: "Fixed Package" },
    { label: "Insurance", other: "May Not Support Cashless", lux: "All Insurances Accepted" },
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
        <HospitalComparisond theading={content.tableContent[0].theading} rows={content.tableData} ConditionVideo={"/fistulatablevideo.mp4"} />
      )}
      <Accreditations />
      <VideoSection />
      {content.locationsectionheading && (
        <HospitalLocation
          locationsectionheading={content.locationsectionheading}
        />
      )}
      <Gentstalks />
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
