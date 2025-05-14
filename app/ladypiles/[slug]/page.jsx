"use client"; // Add this since you're using client-side components
import { use } from "react";
import dynamic from "next/dynamic";
import Header from "@/app/components/header/header";
import Hero from "../../components/hero/hero";
import Second from "../../components/second/second";
import HospitalLocation from "../../components/HospitalLocation/hospitallocations";
import FooterComponent from "../../components/footer/footer";
import services from "../../piles/pilesdata";
import LadyTalks from "../../components/Ladytalks/ladytalks";
import MobileStickyFooter from "../../components/mobilsticky";

const DoctorCard = dynamic(() =>
  import("../../components/topdoctors/ourdoctors")
);
// const HospitalComparison = dynamic(() =>
//   import("../../components/Treatmenttable/Hospitalcomparison")
// );
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
// import { ImOpt } from "react-icons/im";

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
  // "external-hemorrhoids-doctor": {
  //   heading: "External Hemorrhoids Doctor",

  //   descList: [
  //     "Top Doctor for External Hemorrhoids",
  //     "Laser + Harmonic Treatment for Quick Relief",
  //     "15-Min Daycare Procedure, No Cuts",
  //     "No Pain. No Recurrence",
  //     "100% Cure with Advanced Laser",
  //     "All Insurances Accepted (Cashless)",
  //     "0% EMI | 10,000+ Patients Treated",
  //   ],

  //   // services: services,
  //   locationsectionheading:
  //     "LUX Hospitals - External Hemorrhoids Doctor | Piles Experts | Advanced Care | Hemorrhoids Specialists",
  //   // doctors: proctologyDoctorsData,
  //   doctors: [
  //     {
  //       url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
  //       name: "Dr. Samhitha Reddy",
  //       qualification: "MBBS, MS, FMAS, FISCP, DMAS",
  //       designation: "Hemorrhoids Specialist",
  //       experience: "Experieance:8 years",
  //       description:
  //         "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
  //     },
  //     {
  //       url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
  //       name: "Dr Abhishek Katha",
  //       qualification: "MBBS, MS, FMAS, FISCP, DMAS",
  //       designation: "Hemorrhoids Specialist",
  //       experience: "Experieance:9 years",
  //       description:
  //         "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
  //       // image: "/doctors/samhitha-reddy.webp",
  //     },
  //   ],
  //   tableContent: [
  //     {
  //       theading: "Best External Hemorrhoids Treatment at Lux Hospitals",
  //     },
  //   ],
  //   whatAreH: "What Are External Hemorrhoids?",
  //   whatAreP:
  //     "External hemorrhoids are swollen veins located under the skin around the anus, causing pain, itching, and discomfort. They may form due to prolonged sitting, straining during bowel movements, or chronic constipation.",
  //   whatHead:
  //     "Top 3 Advanced Treatments for External Hemorrhoids at Lux Hospitals:",
  //   treatments: [
  //     {
  //       title: "Laser Hemorrhoidoplasty (LHP)",
  //       description:
  //         "A minimally invasive procedure using laser energy to shrink external hemorrhoids, ensuring quicker recovery and minimal pain.",
  //     },
  //     {
  //       title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
  //       description:
  //         "A non-surgical method that ties off hemorrhoidal arteries, cutting blood supply to external hemorrhoids and reducing discomfort.",
  //     },
  //     {
  //       title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
  //       description:
  //         "A combination of artery ligation and rectal tissue repair, effective for advanced cases while minimizing post-operative pain.",
  //     },
  //   ],
  //   fheading: "FAQs on External Hemorrhoids",
  //   faqs: [
  //     {
  //       faqTitle: "What causes external hemorrhoids?",
  //       faqAnswer:
  //         "External hemorrhoids develop due to excessive straining, prolonged sitting, chronic constipation, obesity, and pregnancy.",
  //     },
  //     {
  //       faqTitle: "Is surgery necessary for external hemorrhoids?",
  //       faqAnswer:
  //         "Surgery is only needed for severe cases. Minimally invasive options like laser treatment are highly effective.",
  //     },
  //     {
  //       faqTitle: "When should I see a doctor for external hemorrhoids?",
  //       faqAnswer:
  //         "If you experience persistent pain, bleeding, or swelling, consult an external hemorrhoids doctor for expert treatment.",
  //     },
  //     {
  //       faqTitle: "Does insurance cover external hemorrhoid treatment?",
  //       faqAnswer:
  //         "Most health insurance plans cover external hemorrhoid procedures. Check with your provider for details.",
  //     },
  //     {
  //       faqTitle: "Why choose Lux Hospitals for external hemorrhoid treatment?",
  //       faqAnswer:
  //         "Lux Hospitals offer advanced treatments, expert specialists, and personalized care for effective recovery.",
  //     },
  //     {
  //       faqTitle: "Whom should I consult for external hemorrhoids treatment?",
  //       faqAnswer:
  //         "For the best care, consult Dr. Samhitha Reddy, a leading External Hemorrhoids Doctor at Lux Hospitals with 8 years of experience. She will guide you through the most effective treatment plan.",
  //     },
  //   ],
  //   footerComponent: {
  //     footerdesc:
  //       "Get expert care from the best external hemorrhoids doctor for a pain-free, advanced treatment today!",
  //     footernumber: "07969084448",
  //   },
  // },
  "best-lady-piles-doctor-hyderabad": {
    heading: "Best Lady Doctor for Piles in Hyderabad",

    descList: [
      "Top Lady Doctor for Piles Treatment",
      "Laser + Harmonic Procedure for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Women Treated",
    ],

    locationsectionheading:
      "LUX Hospitals – Piles Lady Doctor | Female Piles Specialist | Proctology Experts | Hyderabad",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],

    whatAreH: "What are Piles?",
    whatAreP:
      "Piles, or hemorrhoids, are swollen veins in the rectum or anus that can cause pain, itching, or bleeding during bowel movements. In women, they’re often triggered by pregnancy, hormonal changes, or chronic constipation. At Lux Hospitals, our experienced lady piles specialist provides discreet, compassionate care in a private setting — ensuring comfort, trust, and effective treatment tailored to women’s needs.",

    whatHead: "Top 3 Treatments for Piles",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A cutting-edge laser treatment that targets and shrinks piles with minimal discomfort and faster recovery.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-incisional procedure that blocks blood flow to hemorrhoids using ultrasound guidance — no stitches, no visible scars.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "An advanced solution for women with recurring or severe piles, offering long-term relief and improved anal tone.",
      },
    ],

    fheading: "FAQs on Piles",

    faqs: [
      {
        faqTitle: "What causes piles, and why consult a doctor?",
        faqAnswer:
          "Piles, also known as hemorrhoids, are often caused by pregnancy, chronic constipation, prolonged sitting, straining during bowel movements, and obesity. Consulting a female piles doctor ensures privacy, comfort, and a more sensitive approach to women’s health concerns.",
      },
      {
        faqTitle: "Is surgery the only treatment option for piles?",
        faqAnswer:
          "Not always. At Lux Hospitals, our lady piles specialist offers advanced, minimally invasive options such as laser treatment — providing quick relief, minimal pain, and faster recovery without traditional surgery.",
      },
      {
        faqTitle: "When should I see a doctor for piles?",
        faqAnswer:
          "If you experience pain, itching, bleeding, or discomfort during bowel movements, it’s important to consult a doctor early. Timely diagnosis by our lady piles specialist helps prevent complications and ensures a smoother recovery.",
      },
      {
        faqTitle: "Is piles treatment at Lux Hospitals covered by insurance?",
        faqAnswer:
          "Yes. Lux Hospitals accepts all major health insurance plans with cashless options. Our team will assist you with verification and guide you through the claims process.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for piles treatment?",
        faqAnswer:
          "We combine expert care with the latest laser technology, offer same-day discharge, and ensure complete privacy with experienced female doctors — all to provide safe, respectful, and effective treatment for women.",
      },
      {
        faqTitle: "Who is the best female piles doctor at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is one of the leading female piles specialists in Hyderabad. She is known for her expertise in laser piles treatment and her compassionate, patient-focused approach.",
      },
    ],

    footerComponent: {
      footerdesc:
        "Get personalized care from the best Lady Doctor for Piles in Hyderabad at Lux Hospitals today!",
      footernumber: "07969084448",
    },
  },
  "best-female-piles-doctor-in-hyderabad": {
    heading: "Best Female Doctor for Piles in Hyderabad",

    descList: [
      "Top Female Doctor for Piles",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Women Treated",
    ],

    locationsectionheading:
      "LUX Hospitals – Female Piles Doctor | Women’s Proctology Care | Laser Piles Specialist | Expert Female Surgeons",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],

    whatAreH: "What are Piles?",
    whatAreP:
      "Piles, or hemorrhoids, are swollen veins in the rectum or anus that can cause pain, itching, or bleeding during bowel movements. In women, piles are often triggered by pregnancy, hormonal changes, or chronic constipation. At Lux Hospitals, our experienced female piles specialist provides compassionate, discreet care in a private setting — ensuring comfort, trust, and effective treatment.",

    whatHead: "Top 3 Treatments for Piles",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A cutting-edge laser procedure that targets and shrinks piles with minimal discomfort, quick recovery, and no external wounds.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical treatment that blocks blood supply to the piles using ultrasound guidance — no cuts, no stitches, and no scars.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "An advanced option for women with severe or recurring piles, offering long-term relief and improved anal tone.",
      },
    ],

    fheading: "FAQs on Piles",

    faqs: [
      {
        faqTitle: "What causes piles, and why consult a doctor?",
        faqAnswer:
          "Piles, or hemorrhoids, are commonly caused by pregnancy, straining during bowel movements, chronic constipation, obesity, and hormonal changes. Consulting a female doctor ensures a private, sensitive, and comfortable approach to your treatment.",
      },
      {
        faqTitle: "Is surgery the only treatment option for piles?",
        faqAnswer:
          "Not necessarily. At Lux Hospitals, our female piles specialist offers minimally invasive options like advanced laser treatment— a pain-free, stitch-free alternative with faster recovery and same-day discharge.",
      },
      {
        faqTitle: "When should I see a doctor for piles?",
        faqAnswer:
          "If you’re experiencing pain, bleeding, itching, or discomfort during bowel movements, it’s best to seek medical advice early. Timely diagnosis by a doctor can prevent complications and improve treatment outcomes.",
      },
      {
        faqTitle: "Is piles treatment at Lux Hospitals covered by insurance?",
        faqAnswer:
          "Yes. We accept all major health insurance plans and offer cashless services. Our support team will assist you with insurance verification and claim processing.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for piles treatment?",
        faqAnswer:
          "Lux Hospitals offers expert-led laser piles treatment, private consultation rooms, same-day discharge, and a women-only care environment — all under the guidance of experienced female specialists.",
      },
      {
        faqTitle: "Who is the best female piles doctor at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is one of Hyderabad’s most trusted female piles doctors, known for her laser treatment expertise and compassionate, patient-first approach to care.",
      },
    ],

    footerComponent: {
      footerdesc:
        "Get advanced care from the top Female Piles Doctor in Hyderabad at Lux Hospitals today!",
      footernumber: "07969084448",
    },
  },
  "best-hemorrhoids-female-doctor-hyderabad": {
    heading: "Best Female Doctor for Hemorrhoids in Hyderabad",

    descList: [
      "Top Female Doctor for Hemorrhoids",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Women Treated",
    ],

    locationsectionheading:
      "LUX Hospitals – Female Hemorrhoids Doctor | Women’s Anorectal Care | Laser Hemorrhoid Specialist | Expert Female Surgeons",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Hemorrhoid Treatment at Lux Hospitals",
      },
    ],

    whatAreH: "What are Hemorrhoids?",
    whatAreP:
      "Hemorrhoids, commonly referred to as piles, are swollen veins in the lower rectum or anus that can cause pain, itching, bleeding, or discomfort during bowel movements. In women, they are often triggered by pregnancy, hormonal changes, or chronic constipation. At Lux Hospitals, our experienced female hemorrhoids doctor offers compassionate and discreet care in a private setting — prioritizing your comfort, dignity, and complete recovery.",

    whatHead: "Top 3 Treatments for Hemorrhoids",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "An advanced laser procedure that precisely targets hemorrhoids, offering rapid relief, minimal discomfort, and faster healing without external wounds.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical procedure that uses ultrasound to block blood flow to hemorrhoids — with no cuts, stitches, or scarring.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "Recommended for women with severe or recurring hemorrhoids, this method restores anal tone and offers long-term relief.",
      },
    ],

    fheading: "FAQs on Hemorrhoids",

    faqs: [
      {
        faqTitle: "What causes hemorrhoids, and why consult a doctor?",
        faqAnswer:
          "Hemorrhoids are typically caused by pregnancy, chronic constipation, straining during bowel movements, or a sedentary lifestyle. Consulting a female doctor ensures comfort, privacy, and a more empathetic approach to sensitive health concerns.",
      },
      {
        faqTitle: "Do hemorrhoids always require surgery?",
        faqAnswer:
          "Not always. At Lux Hospitals, our female specialist offers minimally invasive options such as advanced laser procedures that provide quick relief without the need for traditional surgery.",
      },
      {
        faqTitle: "When should I see a doctor for hemorrhoids?",
        faqAnswer:
          "If you experience symptoms like pain, itching, swelling, or bleeding during bowel movements, it’s best to consult early. Timely diagnosis helps prevent complications and supports a smoother recovery.",
      },
      {
        faqTitle: "Is hemorrhoid treatment at Lux Hospitals covered by insurance?",
        faqAnswer:
          "Yes. Lux Hospitals supports cashless treatment with all major insurance providers. Our team will assist you with policy verification and claims.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for hemorrhoid treatment?",
        faqAnswer:
          "We combine advanced laser technology with expert female doctors, same-day discharge, and a private, respectful environment — ensuring safe and effective care tailored for women.",
      },
      {
        faqTitle: "Who is the best female hemorrhoids doctor at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is one of Hyderabad’s most trusted female hemorrhoids specialists. She is known for her expertise in laser procedures and her compassionate, patient-focused approach to care.",
      },
    ],

    footerComponent: {
      footerdesc:
        "Get expert care from Hyderabad’s leading Female Hemorrhoids Doctor at Lux Hospitals today!",
      footernumber: "07969084448",
    },
  },

  "best-female-doctors-external-hemorrhoids-treatment": {
    heading: "Best Female Doctors for External Hemorrhoids Treatment",

    descList: [
      "Hemorrhoids Treatment by Female Doctor",
      "Laser + Harmonic Technology for Precise Relief",
      "15-Min Daycare Procedure, No Stitches",
      "No Pain. No Recurrence.",
      "100% Cure with Laser Technology",
      "Cashless Insurance Accepted",
      "0% EMI | 10,000+ Patients Treated"
    ],

    locationsectionheading: "LUX Hospitals – External Hemorrhoids Treatment | Laser Surgery for External Piles | Women’s Anorectal Care | Proctology Experts",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "External Hemorrhoid Treatment at Lux Hospitals"
      }
    ],

    whatAreH: "What are Hemorrhoids?",

    whatAreP: "External hemorrhoids are swollen veins that form around the anus, often visible and painful. They can cause discomfort while sitting, itching, bleeding, or swelling. Women may be more prone due to pregnancy, straining during bowel movements, or prolonged sitting. At Lux Hospitals, we offer advanced, non-invasive treatments for external hemorrhoids with privacy-focused, compassionate care — ensuring lasting relief and patient comfort.",
  
    whatHead: "Top 3 Treatments for Hemorrhoids",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description: "A precise, minimally invasive laser treatment that reduces the external hemorrhoidal tissue without cutting — resulting in faster healing and minimal pain."
      },
      {
        title: "Infrared Coagulation (IRC)",
        description: "This quick outpatient procedure uses infrared light to shrink small external hemorrhoids — ideal for early-stage cases and mild symptoms."
      },
      {
        title: "Excision with Local Anaesthesia (when required)",
        description: "For thrombosed or severely painful external hemorrhoids, our surgeons may perform a simple excision under local anaesthesia — quick, safe, and highly effective for immediate relief."
      }
    ],

    fheading: "FAQs on External Hemorrhoids Treatment",

    faqs: [
      {
        faqTitle: "What causes external hemorrhoids?",
        faqAnswer: "They are often caused by prolonged straining, pregnancy, obesity, or sitting for long hours. Chronic constipation and lifestyle factors can also contribute."
      },
      {
        faqTitle: "How do I know if I have external hemorrhoids?",
        faqAnswer: "You may feel a painful lump around the anus, experience itching, swelling, or bleeding after passing stools. If you notice these symptoms, consult a specialist promptly."
      },
      {
        faqTitle: "Are external hemorrhoids always treated surgically?",
        faqAnswer: "No. Many cases can be managed with non-surgical laser treatments or infrared coagulation. Surgery is only considered when there’s severe pain or thrombosis."
      },
      {
        faqTitle: "Is external hemorrhoid treatment covered by insurance?",
        faqAnswer: "Yes. Lux Hospitals accepts all major insurance plans with cashless options. Our team will assist you with coverage and claims processing."
      },
      {
        faqTitle: "Why choose Lux Hospitals for external hemorrhoid care?",
        faqAnswer: "We provide advanced laser-based treatments, experienced proctology surgeons, same-day discharge, and private care environments — all designed for patient safety and satisfaction."
      },
      {
        faqTitle: "Who is the best doctor for external hemorrhoids at Lux Hospitals?",
        faqAnswer: "Dr. Samhitha Reddy is a renowned proctology expert in Hyderabad, with specialised expertise in treating external hemorrhoids using the latest laser techniques."
      }
    ],

    footerComponent: {
      footerdesc: "Get fast, safe, and effective External Hemorrhoids Treatment at Lux Hospitals in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "best-womens-piles-doctor-hyderabad": {
    heading: "Best Women’s Piles Doctor in Hyderabad",

    descList: [
      "Piles Treatment by Women’s Specialist",
      "Laser + Harmonic Procedure for Quick Relief",
      "15-Min Daycare Treatment, No Cuts",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "All Major Insurance Plans Accepted (Cashless)",
      "0% EMI | 10,000+ Women Treated"
    ],

    locationsectionheading:
      "LUX Hospitals – Women’s Piles Doctor | Female Anorectal Specialist | Laser Piles Expert | Hyderabad",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals"
      }
    ],

    whatAreH: "What are Piles?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen veins in the rectum or anus that can cause pain, bleeding, itching, or discomfort during bowel movements. In women, common causes include pregnancy, hormonal changes, chronic constipation, or sitting for long periods. At Lux Hospitals, our dedicated women’s piles doctor offers compassionate, confidential care in a private setting — helping you recover with confidence, comfort, and dignity.",

    whatHead: "Top 3 Treatments for Piles",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A modern, pain-free laser procedure that precisely targets and shrinks piles. It ensures faster healing, minimal discomfort, and same-day discharge."
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A stitch-free, scar-free technique that uses ultrasound to block blood supply to the piles — a gentle, non-surgical solution ideal for women."
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "Best suited for advanced or recurrent cases, this technique improves rectal tone and provides lasting relief — especially beneficial for women post-childbirth."
      }
    ],

    fheading: "FAQs on Women’s Piles Treatment",

    faqs: [
      {
        faqTitle: "What causes piles, and why consult a women’s specialist?",
        faqAnswer:
          "Piles are often triggered by pregnancy, straining during bowel movements, constipation, or a sedentary lifestyle. Consulting a female doctor ensures comfort, trust, and open communication — especially for sensitive health concerns."
      },
      {
        faqTitle: "Do piles always require surgery?",
        faqAnswer:
          "Not always. At Lux Hospitals, our women’s piles specialist offers several minimally invasive and laser-based treatment options that are safe, effective, and do not involve surgery."
      },
      {
        faqTitle: "When should I see a doctor for piles?",
        faqAnswer:
          "If you’re experiencing pain, itching, bleeding, or discomfort during bowel movements, it’s best to seek early medical attention. Timely treatment by our female specialist can help prevent complications and ensure faster recovery."
      },
      {
        faqTitle: "Is piles treatment covered under insurance?",
        faqAnswer:
          "Yes. We accept all major health insurance providers with cashless options. Our support team will assist with policy verification and the claim process."
      },
      {
        faqTitle: "Why choose Lux Hospitals for women’s piles treatment?",
        faqAnswer:
          "At Lux Hospitals, you receive advanced laser care, same-day discharge, and the assurance of experienced female doctors — all in a private, respectful environment tailored for women."
      },
      {
        faqTitle: "Who is the best female piles doctor at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is one of the most trusted female piles doctors in Hyderabad. She is highly regarded for her expertise in laser procedures and her compassionate, patient-first approach to care."
      }
    ],

    footerComponent: {
      footerdesc:
        "Get expert care from Hyderabad’s most trusted Women’s Piles Doctor at Lux Hospitals today!",
      footernumber: "07969084448"
    }
  },
  "best-piles-treatment-females-hyderabad": {
    heading: "Best Piles Treatment for Females in Hyderabad",

    descList: [
      "Piles Treatment by Female Doctor",
      "Laser + Harmonic Procedure for Quick Relief",
      "15-Min Daycare Treatment, No Cuts",
      "No Pain. No Recurrence.",
      "100% Cure with Modern Laser Technology",
      "All Major Insurance Plans Accepted (Cashless)",
      "0% EMI | 10,000+ Women Treated"
    ],

    locationsectionheading: "LUX Hospitals – Piles Female Treatment | Women’s Anorectal Health | Laser Piles Specialist | Expert Female Surgeons",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals"
      }
    ],

    whatAreH: "What are Piles?",
    whatAreP:
      "Piles, or hemorrhoids, are swollen veins in the rectum or anus that cause discomfort, itching, bleeding, or pain during bowel movements. Women are more likely to develop piles due to pregnancy, hormonal changes, chronic constipation, and long sitting hours. At Lux Hospitals, we offer female-only care with advanced, minimally invasive piles treatment — provided in a private, respectful, and recovery-focused setting.",

    whatHead: "Top 3 Treatments for Piles",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description: "A stitch-free, minimally invasive laser procedure that targets piles directly. It ensures quick recovery, minimal pain, and same-day discharge."
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description: "This advanced, incision-less procedure uses ultrasound to stop blood supply to piles — no cuts, no stitches, and minimal downtime."
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description: "Ideal for women with advanced or recurring piles, this technique improves anal tone and offers long-term relief with minimal trauma."
      }
    ],

    fheading: "FAQs on Piles Treatment for Females",

    faqs: [
      {
        faqTitle: "What causes piles in women?",
        faqAnswer: "Common causes include pregnancy, constipation, straining during bowel movements, prolonged sitting, and hormonal changes — all of which increase pressure in the anal veins."
      },
      {
        faqTitle: "Do all piles cases require surgery?",
        faqAnswer: "No. Most women respond well to minimally invasive treatments like laser procedures, which are safe, effective, and offer faster recovery with fewer complications."
      },
      {
        faqTitle: "When should I see a doctor for piles?",
        faqAnswer: "If you're experiencing symptoms like pain, bleeding, itching, or swelling near the anus, early consultation can help avoid complications and lead to faster relief."
      },
      {
        faqTitle: "Is piles treatment covered under insurance?",
        faqAnswer: "Yes. Lux Hospitals accepts all major health insurance providers with cashless options. Our team will guide you through the verification and claims process."
      },
      {
        faqTitle: "Why choose Lux Hospitals for piles female treatment?",
        faqAnswer: "We offer modern laser technology, same-day procedures, female-only care, and expert female specialists — all in a private and respectful setting designed for women."
      },
      {
        faqTitle: "Who is the best female piles doctor at Lux Hospitals?",
        faqAnswer: "Dr. Samhitha Reddy is one of Hyderabad’s top female piles doctors. She is known for her precision in laser piles procedures and her compassionate, patient-focused approach."
      }
    ],

    footerComponent: {
      footerdesc: "Experience safe, effective, and minimally invasive Piles Treatment for Females at Lux Hospitals. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "best-women-piles-treatmen-hyderabad": {
    heading: "Best Women’s Piles Treatment in Hyderabad",

    descList: [
      "Piles Treatment for Women by Female Doctors",
      "Laser + Harmonic Procedure for Fast Relief",
      "15-Min Daycare Treatment, No Stitches",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "Cashless Insurance Accepted",
      "0% EMI | 10,000+ Women Treated"
    ],

    locationsectionheading: "LUX Hospitals – Women’s Piles Treatment | Female Anorectal Specialists | Laser Piles Experts | Hyderabad",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals"
      }
    ],

    whatAreH: "What are Piles?",
    whatAreP:
      "Piles, or hemorrhoids, are swollen veins in the rectum or anus that cause discomfort, itching, bleeding, or pain during bowel movements. Women are more likely to develop piles due to pregnancy, hormonal changes, chronic constipation, and long sitting hours. At Lux Hospitals, we offer female-only care with advanced, minimally invasive piles treatment — provided in a private, respectful, and recovery-focused setting.",

    whatHead: "Top 3 Treatments for Piles",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description: "A highly advanced, stitch-free, minimally invasive laser procedure that directly targets piles — ensuring faster recovery, reduced discomfort, and same-day discharge."
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description: "A precision-guided, non-incisional method using ultrasound to cut off blood flow to piles — with no stitches, cuts, or scarring."
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description: "Ideal for chronic or recurring piles in women, this technique improves rectal tone and offers long-term relief — especially effective post-pregnancy."
      }
    ],

    fheading: "FAQs on Women’s Piles Treatment",

    faqs: [
      {
        faqTitle: "What causes piles in women?",
        faqAnswer: "Women often develop piles due to pregnancy, straining during bowel movements, constipation, and hormonal changes. These factors increase pressure on rectal veins, leading to hemorrhoids."
      },
      {
        faqTitle: "Can piles be treated without surgery?",
        faqAnswer: "Yes. Many women benefit from minimally invasive laser procedures offered at Lux Hospitals, which are painless, safe, and require no stitches."
      },
      {
        faqTitle: "When should a woman see a doctor for piles?",
        faqAnswer: "If you notice symptoms like pain, bleeding, itching, or discomfort during bowel movements, it's best to consult early. Timely diagnosis can prevent complications and speed up recovery."
      },
      {
        faqTitle: "Is piles treatment covered under insurance?",
        faqAnswer: "Absolutely. We accept all major health insurance policies and provide cashless options. Our staff will help verify and process your insurance smoothly."
      },
      {
        faqTitle: "Why choose Lux Hospitals for women’s piles treatment?",
        faqAnswer: "We offer advanced laser technology, expert female doctors, same-day procedures, and a private consultation environment — all tailored to deliver safe and respectful care for women."
      },
      {
        faqTitle: "Who is the best doctor for women’s piles treatment at Lux Hospitals?",
        faqAnswer: "Dr. Samhitha Reddy is one of Hyderabad’s leading female piles doctors. She is known for her skill in minimally invasive laser procedures and her compassionate, patient-first approach to women’s health."
      }
    ],

    footerComponent: {
      footerdesc: "Book your consultation for safe, effective Women’s Piles Treatment at Lux Hospitals today!",
      footernumber: "07969084448"
    }
  },
  // "best-hospital-female-hemorrhoids-treatment-hyderabad": {
  //   heading: "Best Hospital for Female Hemorrhoids Treatment in Hyderabad",
  //   descList: [
  //     "Top Doctor for Hemorrhoids Laser Treatment",
  //     "Laser + Harmonic Treatment for Quick Relief",
  //     "15-Min Daycare Procedure, No Cuts",
  //     "No Pain. No Recurrence",
  //     "100% Cure with Advanced Laser",
  //     "All Insurances Accepted (Cashless)",
  //     "0% EMI | 10,000+ Patients Treated",
  //   ],
  //   locationsectionheading:
  //     "LUX Hospitals - External Hemorrhoids Treatment | Advanced Care | Laser Surgery | Hemorrhoids Specialists",
  //   // doctors: proctologyDoctorsData,
  //   doctors: [
  //     {
  //       url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
  //       name: "Dr. Samhitha Reddy",
  //       qualification: "MBBS, MS, FMAS, FISCP, DMAS",
  //       designation: "Hemorrhoids Specialist",
  //       experience: "Experieance:8 years",
  //       description:
  //         "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
  //     },
  //     {
  //       url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
  //       name: "Dr Abhishek Katha",
  //       qualification: "MBBS, MS, FMAS, FISCP, DMAS",
  //       designation: "Hemorrhoids Specialist",
  //       experience: "Experieance:9 years",
  //       description:
  //         "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
  //       // image: "/doctors/samhitha-reddy.webp",
  //     },
  //   ],
  //   tableContent: [
  //     {
  //       theading: "Hemorrhoids Treatment at Lux Hospitals",
  //     },
  //   ],
  //   whatAreH: "What Is External Hemorrhoids Treatment?",
  //   whatAreP:
  //     "External hemorrhoids treatment involves non-surgical and surgical methods to relieve pain, swelling, and discomfort caused by swollen veins around the anus. Lux Hospitals offer cutting-edge treatments for long-term relief.",
  //   whatHead: "Top External Hemorrhoids Treatments at Lux Hospitals:",
  //   treatments: [
  //     {
  //       title: "Laser Hemorrhoidoplasty (LHP)",
  //       description:
  //         "A minimally invasive procedure that uses laser energy to shrink hemorrhoids, ensuring a painless recovery.",
  //     },
  //     {
  //       title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
  //       description:
  //         "A non-surgical method that blocks blood flow to hemorrhoids, helping them shrink naturally.",
  //     },
  //     {
  //       title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
  //       description:
  //         "A combination of artery ligation and rectal tissue repair, ideal for treating severe cases effectively.",
  //     },
  //   ],
  //   fheading: "FAQs on External Hemorrhoids Treatment",
  //   faqs: [
  //     {
  //       faqTitle: "What causes external hemorrhoids?",
  //       faqAnswer:
  //         "External hemorrhoids develop due to prolonged sitting, chronic constipation, obesity, and straining during bowel movements.",
  //     },
  //     {
  //       faqTitle: "Is surgery necessary for external hemorrhoids treatment?",
  //       faqAnswer:
  //         "Not always. Mild cases can be treated with lifestyle changes, while severe cases may require laser surgery.",
  //     },
  //     {
  //       faqTitle: "When should I seek external hemorrhoids treatment?",
  //       faqAnswer:
  //         "If you have persistent pain, bleeding, or swelling, consult a specialist for the right treatment plan.",
  //     },
  //     {
  //       faqTitle: "Is external hemorrhoids treatment covered by insurance?",
  //       faqAnswer:
  //         "Yes, most insurance plans cover advanced hemorrhoid treatments. Contact your provider for details.",
  //     },
  //     {
  //       faqTitle:
  //         "Why choose Lux Hospitals for external hemorrhoids treatment?",
  //       faqAnswer:
  //         "Lux Hospitals provide state-of-the-art treatment options, expert specialists, and personalized care for effective relief.",
  //     },
  //     {
  //       faqTitle: "Who is the best doctor for external hemorrhoids treatment?",
  //       faqAnswer:
  //         "Dr. Samhitha Reddy, one of the top specialists at Lux Hospitals with 8 years of experience, will guide you with the best treatment approach.",
  //     },
  //   ],
  //   footerComponent: {
  //     footerdesc:
  //       "Book an appointment today for expert external hemorrhoids treatment and lasting relief!",
  //     footernumber: "07969084448",
  //   },
  // },
  "best-hospital-female-hemorrhoids-treatment-hyderabad": {
    heading: "Best Hospital for Female Hemorrhoids Treatment in Hyderabad",

    descList: [
      "Best Female Hemorrhoids Treatment",
      "Laser + Harmonic Procedure for Fast Relief",
      "15-Min Daycare Treatment, No Stitches",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "Cashless Insurance Accepted",
      "0% EMI | 10,000+ Women Treated"
    ],

    locationsectionheading: "LUX Hospitals – Female Hemorrhoids Treatment | Women’s Anorectal Specialists | Laser Hemorrhoid Experts | Private & Respectful Care",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What are Hemorrhoids?",

    whatAreP: "Hemorrhoids, commonly known as piles, are swollen veins in the anus or rectum that can cause pain, itching, bleeding, or discomfort during bowel movements. Women are more vulnerable due to pregnancy, hormonal changes, chronic constipation, or sitting for extended periods. At Lux Hospitals, we provide specialised female hemorrhoids treatment led by experienced lady doctors — ensuring private, gentle, and effective care for women at every stage of life.",

    whatHead: "Top 3 Treatments for Hemorrhoids",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description: "A precise, stitch-free laser procedure that shrinks hemorrhoids safely and effectively, with minimal pain and fast recovery."
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description: "A non-surgical technique that uses ultrasound to block blood flow to hemorrhoids — no cuts, no stitches, just effective relief."
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description: "Ideal for women with recurring or advanced hemorrhoids, this treatment improves both relief and long-term anal support."
      }
    ],

    fheading: "FAQs on Female Hemorrhoids Treatment",

    faqs: [
      {
        faqTitle: "What causes hemorrhoids in women?",
        faqAnswer: "Common causes include pregnancy, straining during bowel movements, obesity, hormonal shifts, and chronic constipation. Women are especially prone due to physiological and lifestyle factors."
      },
      {
        faqTitle: "Can hemorrhoids be treated without surgery?",
        faqAnswer: "Yes. At Lux Hospitals, we offer advanced laser-based treatments that are minimally invasive, pain-free, and highly effective — often completed as a daycare procedure."
      },
      {
        faqTitle: "When should a woman see a doctor for hemorrhoids?",
        faqAnswer: "If you experience pain, itching, swelling, bleeding, or a visible lump near the anus, it’s important to consult early. Timely care prevents worsening of symptoms."
      },
      {
        faqTitle: "Is hemorrhoid treatment covered under insurance?",
        faqAnswer: "Absolutely. We accept all major insurance providers and offer full support for cashless claims. Our team will assist you with the documentation process."
      },
      {
        faqTitle: "Why choose Lux Hospitals for female hemorrhoids treatment?",
        faqAnswer: "We combine modern laser technology, experienced female doctors, a private consultation environment, and same-day discharge — all focused on women’s comfort and care."
      },
      {
        faqTitle: "Who is the best doctor for female hemorrhoids at Lux Hospitals?",
        faqAnswer: "Dr. Samhitha Reddy is a leading expert in female anorectal care, renowned for her gentle approach and laser expertise in treating hemorrhoids."
      }
    ],

    footerComponent: {
      footerdesc: "Book your consultation for safe, advanced Female Hemorrhoids Treatment at Lux Hospitals today!",
      footernumber: "07969084448"
    }
  },
  "best-ladies-piles-hospital-hyderabad": {
    heading: "Best Piles Hospital for Ladies in Hyderabad",

    descList: [
      "Best Doctor for Piles Treatment",
      "Laser + Harmonic Procedure for Fast Relief",
      "15-Min Daycare Treatment, No Stitches",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "Cashless Insurance Accepted",
      "0% EMI | 10,000+ Women Treated"
    ],

    locationsectionheading: "LUX Hospitals – Piles Hospital for Ladies | Female Anorectal Specialists | Laser Piles Experts | Hyderabad",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals"
      }
    ],

    whatAreH: "What are Piles?",

    whatAreP: "Piles, or hemorrhoids, are swollen veins in the rectum or anus that cause discomfort, pain, itching, or bleeding during bowel movements. In women, piles are more common due to pregnancy, hormonal changes, chronic constipation, or prolonged sitting. At Lux Hospitals, we provide dedicated piles treatment exclusively for women — led by experienced lady doctors in a respectful, private, and comfortable environment.",

    whatHead: "Top 3 Treatments for Piles",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description: "A minimally invasive, stitch-free laser procedure that precisely targets piles — providing quick relief, less pain, and same-day recovery."
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description: "A non-incisional technique that uses ultrasound guidance to cut off blood supply to the hemorrhoids — with no cuts, no stitches, and faster healing."
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description: "Recommended for women with severe or recurring piles, this procedure restores rectal tone and function while offering long-term relief."
      }
    ],

    fheading: "FAQs on Piles Treatment for Ladies",

    faqs: [
      {
        faqTitle: "Why are women more likely to get piles?",
        faqAnswer: "Piles in women are often caused by pregnancy, hormonal changes, chronic constipation, or a sedentary lifestyle — all of which increase pressure in the rectal veins."
      },
      {
        faqTitle: "Can I be treated without surgery?",
        faqAnswer: "Yes. At Lux Hospitals, our doctors offer advanced, minimally invasive laser treatments that are safe, effective, and virtually painless."
      },
      {
        faqTitle: "When should I visit a piles hospital for treatment?",
        faqAnswer: "If you notice symptoms like bleeding, pain, itching, or a lump near the anus, it's best to consult early. Timely care helps prevent complications."
      },
      {
        faqTitle: "Is the treatment covered under insurance?",
        faqAnswer: "Yes. Lux Hospitals accepts all major health insurance plans with cashless claim support. Our team will assist you with verification and approvals."
      },
      {
        faqTitle: "Why choose Lux Hospitals as the best piles hospital for ladies?",
        faqAnswer: "We offer specialized care for women with expert female doctors, minimally invasive laser procedures, private consultation spaces, and same-day discharge — all in a supportive and respectful environment."
      },
      {
        faqTitle: "Who is the best lady doctor for piles at Lux Hospitals?",
        faqAnswer: "Dr. Samhitha Reddy is one of Hyderabad’s leading lady doctors for piles. She is known for her expertise in laser piles procedures and her gentle, patient-first approach to women’s health."
      }
    ],

    footerComponent: {
      footerdesc: "Looking for a trusted Piles Hospital for Ladies in Hyderabad? Visit Lux Hospitals today for expert, compassionate care.",
      footernumber: "07969084448"
    }
  },
  "best-women-piles-hospital-hyderabad": {
    heading: "Best Piles Hospital for Women in Hyderabad",

    descList: [
      "Best Piles Doctor for Women",
      "Laser + Harmonic Procedure for Fast Relief",
      "15-Min Daycare Treatment, No Cuts or Stitches",
      "No Pain. No Recurrence.",
      "100% Cure with Advanced Laser Technology",
      "Cashless Insurance Accepted",
      "0% EMI | 10,000+ Women Treated"
    ],

    locationsectionheading: "LUX Hospitals – Piles Hospital for Women | Female Anorectal Specialists | Laser Piles Experts | Hyderabad",

    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experience: 8 years",
        description: "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
        mobileNumberDoctor: "tel:07969084448"
      }
    ],

    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What are Piles?",

    whatArePs: "Piles, also known as hemorrhoids, are swollen veins in the rectum or anus that cause discomfort, pain, itching, or bleeding during bowel movements. Women are especially prone due to pregnancy, hormonal changes, prolonged sitting, and chronic constipation. At Lux Hospitals, we offer advanced, women-only piles treatment delivered by experienced female doctors — in a discreet, private, and respectful setting designed for your comfort and confidence.",

    whatHead: "Top 3 Treatments for Piles in Women",

    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description: "A safe, stitch-free, minimally invasive laser procedure that provides quick relief with minimal discomfort and same-day discharge."
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description: "A non-incisional procedure that uses ultrasound to block blood flow to the hemorrhoids — with no cuts, no stitches, and a faster recovery."
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description: "Recommended for women with severe or recurring piles, this advanced procedure improves rectal tone and offers long-lasting relief."
      }
    ],

    fheading: "FAQs on Piles Treatment for Women",

    faqs: [
      {
        faqTitle: "Why are women more prone to piles?",
        faqAnswer: "Women are more likely to develop piles due to pregnancy, constipation, straining during bowel movements, hormonal shifts, and prolonged sitting."
      },
      {
        faqTitle: "Can piles be treated without surgery?",
        faqAnswer: "Yes. Most cases can be managed with minimally invasive, laser-based treatments that are safe, effective, and allow same-day discharge."
      },
      {
        faqTitle: "When should a woman visit a piles hospital?",
        faqAnswer: "If you experience symptoms such as pain, bleeding, itching, or swelling near the anus, it’s best to consult early. Timely treatment helps prevent worsening of the condition."
      },
      {
        faqTitle: "Is the treatment covered by insurance?",
        faqAnswer: "Yes. Lux Hospitals accepts all major health insurance plans and offers cashless treatment options. Our team assists with verification and approvals."
      },
      {
        faqTitle: "Why choose Lux Hospitals for women’s piles treatment?",
        faqAnswer: "We offer advanced laser procedures, experienced female doctors, same-day treatment, and a private environment — making Lux the preferred piles hospital for women."
      },
      {
        faqTitle: "Who is the best piles doctor for women at Lux Hospitals?",
        faqAnswer: "Dr. Samhitha Reddy is one of Hyderabad’s leading female piles specialists. She is known for her expertise in laser procedures and her compassionate, patient-first approach to women’s care."
      }
    ],

    footerComponent: {
      footerdesc: "Visit Lux Hospitals — the most trusted Piles Hospital for Women in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
    }
  },

  piles: {
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
  const tableData = [
    { label: "Treatment Type", other: "Open Surgery", lux: "Laser + Harmonic" },
    { label: "Recovery Time", other: "7–10 Days", lux: "Same Day" },
    {
      label: "Pain & Bleeding",
      other: "Painful with Bleeding",
      lux: "Painless & Bloodless",
    },
    {
      label: "Insurance & EMI",
      other: "Not Always Cashless",
      lux: "All Insurances + 0% EMI",
    },
    { label: "Room Type", other: "General / Shared", lux: "Private Suite" },
    {
      label: "Cost Transparency",
      other: "Variable & Hidden Costs",
      lux: "Fixed & Transparent",
    },
  ];

  return (
    <>
      <Header PhoneNumber={"07969084448"} mobilectatext={"Call Now"} mobileNumberHeader={"tel:07969084448"} />
      <Hero heading={content.heading} descList={content.descList} />
      <Second services={services} />
      {content.locationsectionheading && (
        <HospitalLocation
          locationsectionheading={content.locationsectionheading}
        />
      )}
      {content.doctors && (
        <section
          className="w-[95%] sm:w-[60%]"
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
                  mobileNumberDoctor="tel:07969084448"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      {content.tableContent?.[0] && (
        <HospitalComparisond
          theading={content.tableContent[0].theading}
          rows={tableData}
          ConditionVideo={"/tablevideo.mp4"}
        />
      )}
      <Accreditations />
      <VideoSection />
      <LadyTalks />
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
      <MobileStickyFooter mobileNumber="tel:07969084448"/>
    </>
  );
}
