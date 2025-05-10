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
  "fistula-Treatment-Hyderabad": {
    heading: "Fistula Treatment in Hyderabad",
    descList: [
      "Top External Hemorrhoids Doctor",
      "30-min procedure, same-day discharge",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available",
      "Advanced Laser & Minimally Invasive Treatment",
    ],
    // services: services,
    locationsectionheading:
      "LUX Hospitals - External Hemorrhoids Doctor | Piles Experts | Advanced Care | Hemorrhoids Specialists",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Best External Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    // tableData: [
    //   { label: "Cost", other: "Variable", lux: "FIXED" },
    //   {
    //     label: "Sterilization",
    //     other: "Autoclave / ETO",
    //     lux: "PLASMA STERILIZATION",
    //   },
    //   { label: "Insurance", other: "80-85% Coverage", lux: "100% COVERAGE" },
    //   { label: "Recurrence Chances", other: "5-10%", lux: "0-1%" },
    //   { label: "Recovery", other: "24-48 Hours", lux: "12-24 Hours" },
    //   { label: "Rooms", other: "Sharing / Single Room", lux: "SUITE ROOM" },
    // ],
    tableData: tableData,
    whatAreH: "What Are External Hemorrhoids?",
    whatAreP:
      "External hemorrhoids are swollen veins located under the skin around the anus, causing pain, itching, and discomfort. They may form due to prolonged sitting, straining during bowel movements, or chronic constipation.",
    whatHead:
      "Top 3 Advanced Treatments for External Hemorrhoids at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive procedure using laser energy to shrink external hemorrhoids, ensuring quicker recovery and minimal pain.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical method that ties off hemorrhoidal arteries, cutting blood supply to external hemorrhoids and reducing discomfort.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair, effective for advanced cases while minimizing post-operative pain.",
      },
    ],
    fheading: "FAQs on External Hemorrhoids",
    faqs: [
      {
        faqTitle: "What causes external hemorrhoids?",
        faqAnswer:
          "External hemorrhoids develop due to excessive straining, prolonged sitting, chronic constipation, obesity, and pregnancy.",
      },
      {
        faqTitle: "Is surgery necessary for external hemorrhoids?",
        faqAnswer:
          "Surgery is only needed for severe cases. Minimally invasive options like laser treatment are highly effective.",
      },
      {
        faqTitle: "When should I see a doctor for external hemorrhoids?",
        faqAnswer:
          "If you experience persistent pain, bleeding, or swelling, consult an external hemorrhoids doctor for expert treatment.",
      },
      {
        faqTitle: "Does insurance cover external hemorrhoid treatment?",
        faqAnswer:
          "Most health insurance plans cover external hemorrhoid procedures. Check with your provider for details.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for external hemorrhoid treatment?",
        faqAnswer:
          "Lux Hospitals offer advanced treatments, expert specialists, and personalized care for effective recovery.",
      },
      {
        faqTitle: "Whom should I consult for external hemorrhoids treatment?",
        faqAnswer:
          "For the best care, consult Dr. Samhitha Reddy, a leading External Hemorrhoids Doctor at Lux Hospitals with 8 years of experience. She will guide you through the most effective treatment plan.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care from the best external hemorrhoids doctor for a pain-free, advanced treatment today!",
      footernumber: "07969084448",
    },
  },
  "best-anal-fistula-surgery-hyderabad": {
    heading: "Best Anal Fistula Surgery in Hyderabad",
    descList: [
      // "Advanced, Painless Anal Fistula Surgery for Fast Recovery",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals - Best Anal Fistula Surgery | Fistula Experts | Advanced Care | Laser Treatment Specialists",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Anal Fistula Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Anal Fistula Surgery?",
    whatAreP:
      "An anal fistula is a small, infected tunnel that connects the skin near the anus to the inside of the rectum. It usually develops after an anal abscess that did not heal properly. Left untreated, it can lead to persistent pain, swelling, pus discharge, and repeated infections. At Lux Hospitals, we offer advanced Anal Fistula Surgery options that ensure quick recovery, minimal discomfort, and reduced chances of recurrence.",
    whatHead: "Top 4 Treatments for Anal Fistula at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Fistula Surgery",
        description:
          "A minimally invasive treatment that uses laser energy to seal the fistula tract. It offers painless recovery, quicker healing, and minimal recurrence rates."
      },
      {
        title: "Fistulotomy",
        description:
          "A traditional surgical method where the entire fistula tract is opened and cleaned, allowing it to heal from the inside out."
      },
      {
        title: "Seton Placement",
        description:
          "A specialized treatment for complex fistulas, where a surgical thread (seton) is placed to help drain infection and promote gradual healing."
      },
      {
        title: "LIFT Procedure (Ligation of Intersphincteric Fistula Tract)",
        description:
          "An advanced technique that treats fistulas while preserving the anal sphincter muscles, minimizing the risk of incontinence."
      }
    ],
    fheading: "FAQs on Anal Fistula",
    faqs: [
      {
        faqTitle: "What causes an anal fistula?",
        faqAnswer:
          "Anal fistulas usually result from an untreated anal abscess that creates a tunnel between the skin and rectum. Conditions like Crohn’s disease, infections, and trauma can also cause fistulas."
      },
      {
        faqTitle: "Is surgery necessary for treating anal fistula?",
        faqAnswer:
          "Yes, most anal fistulas require surgical intervention for permanent healing. At Lux Hospitals, we offer minimally invasive options like laser surgery for faster and painless recovery."
      },
      {
        faqTitle: "When should I undergo anal fistula surgery?",
        faqAnswer:
          "If you experience persistent pain, swelling, pus discharge, or recurrent infections near the anus, you should consider undergoing anal fistula surgery promptly to avoid complications."
      },
      {
        faqTitle: "Is insurance accepted for anal fistula treatment at Lux Hospitals?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans for anal fistula surgeries. Please check with your insurer for eligibility."
      },
      {
        faqTitle: "Why choose Lux Hospitals for anal fistula surgery?",
        faqAnswer:
          "Lux Hospitals provides expert treatment from top specialists, advanced laser technologies, and personalized care plans, ensuring the best outcomes for patients."
      },
      {
        faqTitle: "Whom should I consult for anal fistula surgery?",
        faqAnswer:
          "You should consult Dr. Samhitha Reddy and Dr. Abhishek Katha, one of the best fistula specialists at Lux Hospitals, who will guide you through the most effective and minimally invasive treatment options."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert care for anal fistula surgery in Hyderabad with advanced treatments at Lux Hospitals today!",
      footernumber: "07969084448"
    }
  },
  "top-fistula-clinic-in-hyderabad": {
    heading: "Top Fistula Clinic in Hyderabad",
    descList: [
      // "Leading Clinic for Painless Fistula Care",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals - Top Fistula Clinic | Fistula Experts | Advanced Care | Laser Treatment Specialists",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Fistula Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Treatment?",
    whatAreP:
      "A fistula is a small, infected tunnel that forms between the skin and the rectum, typically caused by an abscess that didn’t heal properly. Left untreated, it can lead to pain, swelling, recurrent infections, and pus discharge. At Lux Hospitals' specialized Fistula Clinic, we provide advanced, minimally invasive treatments designed for faster recovery, minimal discomfort, and reduced recurrence risk.",
    whatHead: "Top 4 Treatments for Fistula at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Fistula Surgery",
        description:
          "A cutting-edge procedure using laser energy to close the fistula tract with minimal pain and faster healing."
      },
      {
        title: "Fistulotomy",
        description:
          "A traditional technique where the fistula tract is surgically opened, cleaned, and left to heal naturally."
      },
      {
        title: "Seton Placement",
        description:
          "Ideal for complex fistulas, a surgical thread (seton) is inserted to help drain infection and promote gradual healing."
      },
      {
        title: "LIFT Procedure (Ligation of Intersphincteric Fistula Tract)",
        description:
          "An advanced method that closes the fistula while preserving the anal muscles, reducing the risk of incontinence."
      }
    ],
    fheading: "FAQs on Fistula Treatment",
    faqs: [
      {
        faqTitle: "What causes a fistula near the anus?",
        faqAnswer:
          "Fistulas usually develop due to an untreated anal abscess. Conditions like infections, Crohn's disease, or trauma can also lead to fistula formation."
      },
      {
        faqTitle: "Is surgery necessary for treating a fistula?",
        faqAnswer:
          "Yes, most fistulas require surgical management for complete healing. Our Fistula Clinic offers minimally invasive options like laser surgery for quicker, pain-free recovery."
      },
      {
        faqTitle: "When should I visit a fistula clinic?",
        faqAnswer:
          "If you notice persistent pain, swelling, pus discharge, or recurrent abscesses around the anus, you should visit a fistula clinic promptly for evaluation and treatment."
      },
      {
        faqTitle: "Is insurance accepted for fistula treatment at Lux Hospitals?",
        faqAnswer:
          "Yes, we accept all major cashless insurance plans. You can check with your provider or our team for your plan's eligibility."
      },
      {
        faqTitle: "Why choose Lux Hospitals for fistula treatment?",
        faqAnswer:
          "Lux Hospitals provides expert care from top specialists, the latest laser technologies, personalized treatment plans, and a patient-centric approach for the best outcomes."
      },
      {
        faqTitle: "Whom should I consult for fistula treatment?",
        faqAnswer:
          "You should consult Dr. Samhitha Reddy and Dr. Abhishek Katha, two of the best fistula specialists at Lux Hospitals, who will guide you through the most effective treatment options."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert care at the top fistula clinic in Hyderabad with advanced, minimally invasive treatments today!",
      footernumber: "07969084448"
    }
  },

  "best-fistula-doctor-in-hyderabad": {
    heading: "Best Fistula Doctor in Hyderabad",
    descList: [
      // "Expert Care from Top Fistula Doctor",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals - Best Fistula Doctor | Fistula Experts | Advanced Care | Laser Treatment Specialists",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specializes in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistula Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Treatment?",
    whatAreP:
      "A fistula is a small, infected tunnel that forms between the skin and the rectum, typically caused by an abscess that didn’t heal properly. Left untreated, it can lead to pain, swelling, recurrent infections, and pus discharge. At Lux Hospitals' specialized Fistula Clinic, we provide advanced, minimally invasive treatments designed for faster recovery, minimal discomfort, and reduced recurrence risk.",
    whatHead: "Top Treatments Offered by Fistula Doctors at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Fistula Surgery",
        description:
          "A highly effective, minimally invasive laser procedure for painless recovery and quicker healing."
      },
      {
        title: "Fistulotomy",
        description:
          "A conventional surgical method where the fistula tract is opened and cleaned to heal naturally."
      },
      {
        title: "Seton Placement",
        description:
          "Used for complex fistulas, involving a surgical thread to maintain drainage and promote gradual healing."
      },
      {
        title: "LIFT Procedure (Ligation of Intersphincteric Fistula Tract)",
        description:
          "An advanced surgery that closes the fistula while preserving the anal muscles, reducing the risk of incontinence."
      }
    ],
    fheading: "FAQs on Fistula Treatment",
    faqs: [
      {
        faqTitle: "How long does fistula laser surgery take?",
        faqAnswer:
          "The procedure takes approximately 30 minutes and is usually done as a daycare surgery with same-day discharge."
      },
      {
        faqTitle: "Is it necessary to see a specialist for fistula treatment?",
        faqAnswer:
          "Yes, anal fistulas require specialized care to prevent complications. At Lux Hospitals, our fistula doctors use advanced technologies for better outcomes."
      },
      {
        faqTitle: "When should I consult a fistula doctor?",
        faqAnswer:
          "If you notice continuous pain, pus discharge, swelling, or recurring abscesses near your anus, consult a fistula doctor immediately."
      },
      {
        faqTitle: "Is insurance accepted for fistula surgery at Lux Hospitals?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans for fistula treatments."
      },
      {
        faqTitle: "Why choose Lux Hospitals for fistula care?",
        faqAnswer:
          "We offer specialized care by experienced fistula doctors, state-of-the-art laser treatments, and personalized recovery plans, ensuring the best possible outcomes."
      },
      {
        faqTitle: "Who are the best fistula doctors at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha are among the leading fistula doctors at Lux Hospitals, providing expert care with advanced minimally invasive procedures."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get treated by the best fistula doctors in Hyderabad at Lux Hospitals. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "best-fistula-hospital-in-hyderabad": {
    heading: "Best Fistula Hospital in Hyderabad",
    descList: [
      // "Trusted Hospital for Fistula Treatment and Care",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals - Best Fistula Hospital | Laser Fistula Surgery | Trusted Experts | Advanced Facilities",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specializes in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistula Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Treatment?",
    whatAreP:
      "A fistula is a small, infected tunnel that forms between the skin and the rectum, typically caused by an abscess that didn’t heal properly. Left untreated, it can lead to pain, swelling, recurrent infections, and pus discharge. At Lux Hospitals' specialized Fistula Clinic, we provide advanced, minimally invasive treatments designed for faster recovery, minimal discomfort, and reduced recurrence risk.",
    whatHead: "Top Fistula Treatments Offered at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Fistula Surgery",
        description:
          "A painless and precise treatment using laser energy to close the fistula tract with minimal tissue damage."
      },
      {
        title: "Fistulotomy",
        description:
          "A traditional method where the fistula tract is surgically opened and cleaned, allowing natural healing."
      },
      {
        title: "Seton Placement",
        description:
          "Used for complex or deep fistulas to drain infection gradually and encourage healing without cutting."
      },
      {
        title: "LIFT Procedure (Ligation of Intersphincteric Fistula Tract)",
        description:
          "An advanced technique preserving sphincter muscles, offering a safer and highly effective solution for fistulas."
      }
    ],
    fheading: "FAQs on Fistula Hospital Services",
    faqs: [
      {
        faqTitle: "What makes Lux Hospitals the best fistula hospital?",
        faqAnswer:
          "We provide expert care through highly experienced proctologists, advanced laser treatments, personalized care plans, and excellent post-surgery recovery support."
      },
      {
        faqTitle: "Is hospitalization needed for fistula surgery?",
        faqAnswer:
          "At Lux Hospitals, most fistula surgeries, including laser treatments, are performed as day-care procedures with same-day discharge."
      },
      {
        faqTitle: "Are laser treatments available for fistula at Lux Hospitals?",
        faqAnswer:
          "Yes, Lux Hospitals specializes in laser fistula treatments for faster, painless recovery and minimal risk of recurrence."
      },
      {
        faqTitle: "Does Lux Hospitals accept insurance for fistula surgeries?",
        faqAnswer:
          "Yes, we accept all major cashless insurance plans for fistula surgery and treatment procedures."
      },
      {
        faqTitle: "When should I visit a fistula hospital?",
        faqAnswer:
          "If you experience persistent anal pain, swelling, pus discharge, or repeated abscesses, you should consult a fistula hospital immediately."
      },
      {
        faqTitle: "Which doctors treat fistulas at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha are leading fistula specialists at Lux Hospitals, offering personalized treatment plans using the latest techniques."
      }
    ],
    footerComponent: {
      footerdesc:
        "Experience expert fistula care at Lux Hospitals in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "minimally-invasive-fistula-laser-surgery": {
    heading: "Minimally Invasive Fistula Laser Surgery",
    descList: [
      // "Painless Laser Surgery for Fistula Treatment",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Fistula Laser Surgery Experts | Top Fistula Hospital | Painless Recovery | Advanced Facilities",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistula Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Laser Surgery?",
    whatAreP:
      "Fistula Laser Surgery is a minimally invasive technique that uses focused laser energy to close the abnormal fistula tract from the inside — without any cuts, stitches, or major wounds. It is highly effective, causes very little pain, and offers faster healing compared to traditional surgery. At Lux Hospitals, we specialize in laser-assisted treatments that ensure quicker recovery, minimal bleeding, and excellent long-term results. A laser fiber is gently inserted into the fistula, sealing it while preserving the surrounding healthy tissues.",
    whatHead: "Benefits of Laser Surgery for Fistula:",
    treatments: [
      {
        title: "Painless and Bloodless Procedure",
        description:
          "Laser surgery minimizes tissue damage, making the procedure almost painless with very little or no bleeding."
      },
      {
        title: "Minimal Downtime – Resume Work in 1–2 Days",
        description:
          "Most patients recover quickly and are able to return to their normal routine within 24 to 48 hours."
      },
      {
        title: "Lower Risk of Incontinence or Complications",
        description:
          "Because the laser targets only the fistula tract without affecting the anal muscles, there is a very low risk of bowel control issues."
      },
      {
        title: "Same-day Discharge with Higher Success Rates",
        description:
          "The procedure usually takes 30 minutes and patients are discharged the same day, with higher chances of permanent healing compared to traditional methods."
      }
    ],
    fheading: "FAQs on Fistula Laser Surgery",
    faqs: [
      {
        faqTitle: "Is laser surgery better than traditional fistula surgery?",
        faqAnswer:
          "Yes, laser surgery offers a minimally invasive alternative with faster healing, less pain, and a reduced risk of recurrence or complications."
      },
      {
        faqTitle: "How long does fistula laser surgery take?",
        faqAnswer:
          "The procedure takes approximately 30 minutes and is usually done as a daycare surgery with same-day discharge."
      },
      {
        faqTitle: "Is laser fistula surgery painful?",
        faqAnswer:
          "No, laser surgery is nearly painless. Most patients report minimal discomfort and quick recovery."
      },
      {
        faqTitle: "Will insurance cover laser fistula surgery at Lux Hospitals?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans. Our team will assist you with the claim process."
      },
      {
        faqTitle: "How soon can I resume normal activities after surgery?",
        faqAnswer:
          "Most patients can return to normal activities within 1–2 days after the procedure."
      },
      {
        faqTitle: "Who performs laser surgery at Lux Hospitals?",
        faqAnswer:
          "Our experienced specialists, Dr. Samhitha Reddy and Dr. Abhishek Katha, are trained in advanced laser techniques for safe and effective fistula treatment."
      }
    ],
    footerComponent: {
      footerdesc:
        "Book your painless and quick fistula laser surgery at Lux Hospitals today!",
      footernumber: "07969084448"
    }
  },
  "best-fistula-operation-in-hyderabad": {
    heading: "Best Fistula Operation in Hyderabad",
    descList: [
      // "Safe and Effective Fistula Surgical Procedures",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Best Fistula Operation | Laser Surgery Experts | Fast & Safe Recovery | Advanced Facilities",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistula Operation at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Operation?",
    whatAreP:
      "A fistula operation is a surgical procedure to treat an abnormal tunnel (fistula) that forms between the rectum and the skin around the anus. If left untreated, it can cause pus discharge, swelling, severe pain, and recurring infections. At Lux Hospitals, we use cutting-edge laser technology for fistula operations that are minimally invasive, almost painless, and ensure quicker recovery.",
    whatHead: "Top 4 Fistula Treatments at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Fistula Surgery",
        description:
          "A precision laser closes the fistula tract with minimal pain, blood loss, and tissue damage."
      },
      {
        title: "Fistulotomy",
        description:
          "Traditional surgery that opens the tract completely to allow it to heal from within."
      },
      {
        title: "Seton Placement",
        description:
          "Used for complex fistulas, where a medical thread drains the infection over time for gradual healing."
      },
      {
        title: "LIFT Procedure",
        description:
          "Preserves anal muscles while sealing the fistula, reducing the risk of incontinence."
      }
    ],
    fheading: "FAQs on Fistula Operation",
    faqs: [
      {
        faqTitle: "Is fistula operation necessary?",
        faqAnswer:
          "Yes, a fistula usually does not heal on its own and requires surgical treatment to prevent infections and complications."
      },
      {
        faqTitle: "How long does a fistula operation take?",
        faqAnswer:
          "The surgery typically takes around 30 minutes and is performed as a daycare procedure with same-day discharge."
      },
      {
        faqTitle: "Is fistula operation painful?",
        faqAnswer:
          "No, the procedure is performed under anesthesia, and minimally invasive techniques like laser surgery ensure minimal pain and discomfort."
      },
      {
        faqTitle: "Will insurance cover my fistula operation at Lux Hospitals?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans, and our team will assist you with the claim process."
      },
      {
        faqTitle: "How soon can I resume normal activities after surgery?",
        faqAnswer:
          "Most patients recover within 1–2 days and can return to daily activities with minimal restrictions."
      },
      {
        faqTitle: "Who performs fistula operations at Lux Hospitals?",
        faqAnswer:
          "Our experienced specialists, Dr. Samhitha Reddy and Dr. Abhishek Katha, are experts in advanced laser and minimally invasive fistula surgeries for safe and effective treatment."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get a fast, painless fistula operation at Lux Hospitals in Hyderabad. Book now!",
      footernumber: "07969084448"
    }
  },
  "best-fistula-treatment-in-hyderabad": {
    heading: "Best Fistula Treatment in Hyderabad",
    descList: [
      // "Expert Fistula Treatment Options for Faster Recovery",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Best Fistula Treatment | Laser Surgery Experts | Advanced Care | Quick and Painless Recovery",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistula Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Treatment?",
    whatAreP:
      "Fistula treatment focuses on healing anorectal fistulas, which are abnormal channels connecting the anus and skin. These conditions, if untreated, can lead to severe infections and discomfort.\nAt Lux Hospitals, we offer comprehensive treatment options, including advanced laser surgery and traditional methods, to effectively close the fistula tract with minimal pain and fast recovery.",
    topTreatmentsH: "Top Fistula Treatments at Lux Hospitals:",
    topTreatments: [
      "Laser Fistula Surgery: A minimally invasive laser procedure offering precise treatment with quicker recovery times and reduced risk of complications.",
      "Fistulotomy: A traditional approach that involves surgically opening the fistula tract to allow for natural healing.",
      "Seton Placement: A technique used for complex fistulas, where a surgical thread is placed to promote gradual healing without cutting.",
      "LIFT Procedure (Ligation of Intersphincteric Fistula Tract): A surgical procedure that preserves the anal muscles while treating the fistula, reducing the risk of incontinence."
    ],
    fheading: "FAQs on Fistula Treatment",
    faqs: [
      {
        faqTitle: "What is the best treatment for fistula?",
        faqAnswer:
          "Laser Fistula Surgery is considered one of the best treatments due to its precision, minimal recovery time, and low recurrence rate."
      },
      {
        faqTitle: "How long does fistula treatment take?",
        faqAnswer:
          "Laser treatment takes approximately 30 minutes, and patients are typically discharged on the same day."
      },
      {
        faqTitle: "Is fistula treatment painful?",
        faqAnswer:
          "No, laser treatments are nearly painless and offer quick healing with minimal post-surgical discomfort."
      },
      {
        faqTitle: "Is fistula treatment covered by insurance?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans to cover your fistula treatment."
      },
      {
        faqTitle: "How soon can I get back to work after fistula surgery?",
        faqAnswer:
          "Most patients resume normal activities within 1–2 days after laser surgery."
      },
      {
        faqTitle: "Who are the leading fistula specialists at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha are experts in providing personalized, advanced fistula treatments."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get the best fistula treatment in Hyderabad at Lux Hospitals. Book your consultation now!",
      footernumber: "07969084448"
    }
  },

  "top-fistula-surgeon-in-hyderabad": {
    heading: "Top Fistula Surgeon in Hyderabad",
    descList: [
      // "Leading Surgeons Specializing in Fistula Treatment",
      "Top Surgeon for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Best Fistula Surgeon | Fistula Experts | Advanced Technologies | Advanced Care",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistula Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistula Treatment?",
    whatAreP:
      "A fistula is a small, infected tunnel that forms between the skin and the rectum, typically caused by an abscess that didn’t heal properly. Left untreated, it can lead to pain, swelling, recurrent infections, and pus discharge. At Lux Hospitals' specialized Fistula Clinic, we provide advanced, minimally invasive treatments designed for faster recovery, minimal discomfort, and reduced recurrence risk.",
    whatHead: "Top Treatments Offered by Fistula Doctors at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Fistula Surgery",
        description:
          "A highly effective, minimally invasive laser procedure for painless recovery and quicker healing."
      },
      {
        title: "Fistulotomy",
        description:
          "A conventional surgical method where the fistula tract is opened and cleaned to heal naturally."
      },
      {
        title: "Seton Placement",
        description:
          "Used for complex fistulas, involving a surgical thread to maintain drainage and promote gradual healing."
      },
      {
        title: "LIFT Procedure (Ligation of Intersphincteric Fistula Tract)",
        description:
          "An advanced surgery that closes the fistula while preserving the anal muscles, reducing the risk of incontinence."
      }
    ],
    fheading: "FAQs on Fistula Treatment",
    faqs: [
      {
        faqTitle: "How long does fistula laser surgery take?",
        faqAnswer:
          "The procedure takes approximately 30 minutes and is usually done as a daycare surgery with same-day discharge."
      },
      {
        faqTitle: "Is laser fistula surgery painful?",
        faqAnswer:
          "No, laser surgery is nearly painless. Most patients report minimal discomfort and quick recovery."
      },
      {
        faqTitle: "When should I consult a fistula Surgeon?",
        faqAnswer:
          "If you notice continuous pain, pus discharge, swelling, or recurring abscesses near your anus, consult a fistula doctor immediately."
      },
      {
        faqTitle: "Is insurance accepted for fistula surgery at Lux Hospitals?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans for fistula treatments."
      },
      {
        faqTitle: "Why choose Lux Hospitals for fistula care?",
        faqAnswer:
          "We offer specialized care by experienced fistula doctors, state-of-the-art laser treatments, and personalized recovery plans, ensuring the best possible outcomes."
      },
      {
        faqTitle: "Who are the best fistula Surgeon at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha are among the leading fistula doctors at Lux Hospitals, providing expert care with advanced minimally invasive procedures."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get treated by the best fistula Surgeon in Hyderabad at Lux Hospitals. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "fistuloctomy-surgery-for-fistula-hyderabad": {
    heading: "Fistuloctomy Surgery for Fistula in Hyderabad",
    descList: [
      // "Advanced Fistuloctomy Surgery for Fistula Relief",
      "Top doctor for TROPIS procedure for Fistula",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Fistuloctomy Surgery Experts | Trusted Fistula Care | Laser & Traditional Treatments | Quick and Painless Recovery",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Fistuloctomy Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Fistuloctomy Surgery?",
    whatAreP:
      "Fistuloctomy surgery is a traditional procedure used to treat anal fistulas. It involves surgically opening and cleaning the fistula tract, allowing it to heal naturally. This method is often used when laser treatments are not suitable for complex or deeper fistulas. Fistuloctomy ensures a thorough treatment, promoting long-term healing with minimal risk of recurrence.",
    whatHead: "Key Benefits of Fistulotomy Surgery:",
    treatments: [
      {
        title: "Complete Removal of Fistula Tract",
        description:
          "A thorough cleaning of the fistula ensures complete removal of the infected tissue for effective healing."
      },
      {
        title: "Proven Long-term Results",
        description:
          "Especially suitable for complex fistulas that may not respond well to minimally invasive methods like laser surgery."
      },
      {
        title: "Prevents Recurrence",
        description:
          "Significantly lowers the risk of future fistula formation or infection by fully addressing the root cause."
      },
      {
        title: "Experienced Surgeons",
        description:
          "Performed by highly skilled surgeons using advanced techniques to ensure safety and minimize complications."
      }
    ],

    fheading: "FAQs on Fistuloctomy Surgery for Fistula",
    faqs: [
      {
        faqTitle: "How long does fistuloctomy surgery take?",
        faqAnswer:
          "The procedure typically takes around 30–60 minutes, and patients can be discharged the same day."
      },
      {
        faqTitle: "Is fistuloctomy surgery painful?",
        faqAnswer:
          "While there may be some post-surgical discomfort, the procedure itself is performed under anesthesia, making it virtually painless."
      },
      {
        faqTitle: "Is fistuloctomy surgery covered by insurance?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans for fistuloctomy surgery."
      },
      {
        faqTitle: "How long does it take to recover from fistuloctomy surgery?",
        faqAnswer:
          "Patients can expect to return to normal activities within 1–2 weeks, though recovery time may vary based on the complexity of the fistula."
      },
      {
        faqTitle: "Who performs fistuloctomy surgery at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha, leading fistula surgeons, perform fistuloctomy surgeries using advanced techniques for better outcomes."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert fistuloctomy surgery for fistulas at Lux Hospitals in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "top-perianal-abscess-doctor-hyderabad": {
    heading: "Top Perianal Abscess Doctor in Hyderabad",
    descList: [
      // "Leading Perianal Abscess Doctor for Expert Diagnosis and Care",
      "Top doctor for TROPIS procedure for Perianal Abscess",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Leading Perianal Abscess Doctors | Trusted Specialists | Advanced Treatments | Perianal Abscess Specialists",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Perianal Abscess Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is a Perianal Abscess?",
    whatAreP:
      "A perianal abscess is a painful, pus-filled infection that forms near the anus. It usually occurs when small glands around the anal area become blocked and infected, leading to swelling, redness, and severe discomfort. If not treated in time, the abscess can grow, burst, or lead to further complications like an anal fistula. Early medical attention is essential to drain the abscess and prevent recurrence.",
      whatHead: "Top Treatments Offered by Perianal Abscess Doctors at Lux Hospitals:",
      treatments: [
        {
          title: "Incision and Drainage (I&D)",
          description:
            "A quick surgical procedure to drain the pus and relieve pain, performed under anaesthesia for patient comfort."
        },
        {
          title: "Fistula Surgery",
          description:
            "Recommended for patients who develop a fistula following an abscess, ensuring complete healing and preventing recurrence."
        },
        {
          title: "Laser Treatment",
          description:
            "Minimally invasive laser techniques that offer quicker recovery, reduced discomfort, and minimal scarring."
        },
        {
          title: "Antibiotic Therapy",
          description:
            "Used for mild cases; involves prescribed antibiotics and warm compresses to manage infection and reduce inflammation."
        }
      ],
    fheading: "FAQs on Perianal Abscess",
    faqs: [
      {
        faqTitle: "What does a perianal abscess doctor treat?",
        faqAnswer:
          "A perianal abscess doctor specialises in treating infections and abscesses around the anus, providing both surgical and non-surgical treatments for quick recovery."
      },
      {
        faqTitle: "When should I consult a perianal abscess doctor?",
        faqAnswer:
          "If you experience symptoms such as anal pain, swelling, fever, or pus discharge near the anus, you should consult a specialist immediately."
      },
      {
        faqTitle: "Is perianal abscess treatment painful?",
        faqAnswer:
          "Treatment, including drainage or surgery, is performed under anaesthesia, making it virtually painless during the procedure. Post-surgical discomfort is manageable with pain medication."
      },
      {
        faqTitle: "How long does it take to recover from perianal abscess treatment?",
        faqAnswer:
          "Most patients recover within 1–2 weeks, with minimal downtime and same-day discharge."
      },
      {
        faqTitle: "Is insurance accepted for perianal abscess treatment?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans, ensuring hassle-free treatment."
      },
      {
        faqTitle: "Who are the top perianal abscess doctors at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha are expert perianal abscess doctors at Lux Hospitals, offering advanced care and treatments for the best outcomes."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert care for perianal abscess treatment at Lux Hospitals in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "best-perianal-abscess-surgery-hyderabad": {
    heading: "Best Perianal Abscess Surgery in Hyderabad",
    descList: [
      // "Advanced Perianal Abscess Surgery for Fast, Painless Recovery",
      "Top doctor for TROPIS procedure for Perianal Abscess",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Top Perianal Abscess Surgery | Trusted Surgeons | Advanced Treatment Options | Expert Surgeons",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Perianal Abscess Surgery at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Perianal Abscess Surgery?",
    whatAreP:
      "Perianal abscess surgery is a surgical procedure performed to treat abscesses that form near the anus due to bacterial infection in the anal glands. This condition can cause severe pain, swelling, and pus formation. If left untreated, the abscess may lead to complications such as a fistula. Surgical intervention is essential to drain the abscess, alleviate pain, and promote healing.\nAt Lux Hospitals, we offer advanced techniques for perianal abscess surgery, including both traditional methods and minimally invasive approaches, ensuring faster recovery and better outcomes for our patients.",
      whatHead: "Top Treatments for Perianal Abscess Surgery at Lux Hospitals:",
      treatments: [
        {
          title: "Incision and Drainage (I&D)",
          description:
            "A quick and effective surgical procedure that drains the pus and relieves pressure in the abscess for immediate relief."
        },
        {
          title: "Fistula Surgery",
          description:
            "Performed when an abscess leads to a fistula, this surgery ensures complete healing and helps prevent future complications."
        },
        {
          title: "Laser Surgery",
          description:
            "A minimally invasive technique using advanced laser technology to precisely drain abscesses, resulting in faster recovery and less discomfort."
        },
        {
          title: "Antibiotics and Post-surgery Care",
          description:
            "Medications are provided after surgery to treat any residual infection and support optimal healing."
        }
      ],      
    fheading: "FAQs on Perianal Abscess Surgery",
    faqs: [
      {
        faqTitle: "Is perianal abscess surgery painful?",
        faqAnswer:
          "The procedure is performed under anaesthesia, making it pain-free during surgery. Post-surgery pain is typically manageable with prescribed medications."
      },
      {
        faqTitle: "How long does perianal abscess surgery take?",
        faqAnswer:
          "Most surgeries take about 30–45 minutes, and many can be performed as daycare procedures with same-day discharge."
      },
      {
        faqTitle: "What is the recovery time for perianal abscess surgery?",
        faqAnswer:
          "Most patients recover within 1–2 weeks, with minimal discomfort. You can return to your normal activities in just a few days."
      },
      {
        faqTitle: "Is insurance accepted for perianal abscess surgery at Lux Hospitals?",
        faqAnswer:
          "Yes, we accept all major cashless insurance plans, ensuring a hassle-free experience for our patients."
      },
      {
        faqTitle: "Who performs perianal abscess surgeries at Lux Hospitals?",
        faqAnswer:
          "Our experienced surgeons, Dr. Samhitha Reddy and Dr. Abhishek Katha, are specialists in perianal abscess surgery, providing safe and effective treatments."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert care and the best perianal abscess surgery at Lux Hospitals in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
    }
  },
  "advanced-perianal-abscess-treatment-hyderabad": {
    heading: "Advanced Perianal Abscess Treatment in Hyderabad",
    descList: [
      // "Effective Treatment for Lasting Relief from Perianal Abscesses",
      "Top doctor for TROPIS procedure for Perianal Abscess",
      "Expert in TROPIS, LIFT, VAAFT & LASER Surgery",
      "30-min procedure, same-day discharge",
      "100% Cure with advanced LASERS",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available"
    ],
    locationsectionheading:
      "LUX Hospitals – Leading Perianal Abscess Treatment | Advanced Care | Trusted Experts | Advanced Facilities",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS."
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr. Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Fistula Specialist",
        experience: "Experience: 9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care."
      }
    ],
    tableContent: [
      {
        theading: "Perianal Abscess Treatment at Lux Hospitals"
      }
    ],
    tableData: tableData,
    whatAreH: "What is Perianal Abscess Treatment?",
    whatAreP:
      "Perianal abscess treatment involves procedures aimed at draining the infected fluid that accumulates near the anus, typically due to a bacterial infection in the anal glands. Left untreated, this condition can lead to increased pain, pus discharge, and even fistulas. The goal of treatment is to relieve symptoms, prevent further complications, and ensure full recovery.\nAt Lux Hospitals, we provide state-of-the-art treatments for perianal abscesses, combining advanced surgical methods with minimally invasive techniques to ensure quicker recovery and minimal discomfort.",
      whatHead: "Top Perianal Abscess Treatments Offered at Lux Hospitals:",
      treatments: [
        {
          title: "Incision and Drainage (I&D)",
          description:
            "The most common treatment where the abscess is surgically opened, drained, and cleaned to promote faster and complete healing."
        },
        {
          title: "Laser Treatment",
          description:
            "A minimally invasive laser-based procedure that efficiently drains abscesses, shortens healing time, and reduces discomfort."
        },
        {
          title: "Fistula Surgery",
          description:
            "Recommended if an untreated abscess leads to a fistula; this surgery repairs the tract and promotes full recovery."
        },
        {
          title: "Antibiotic Therapy",
          description:
            "Prescribed after surgery to control infection and accelerate the healing process."
        }
      ],
      
    fheading: "FAQs on Perianal Abscess Treatment",
    faqs: [
      {
        faqTitle: "How is a perianal abscess treated?",
        faqAnswer:
          "The treatment typically involves incision and drainage, laser therapy, or fistula surgery depending on the severity of the abscess and any related conditions."
      },
      {
        faqTitle: "Is perianal abscess treatment painful?",
        faqAnswer:
          "The procedure is generally performed under local or general anaesthesia, ensuring that the surgery itself is painless. Post-surgery discomfort is minimal and manageable."
      },
      {
        faqTitle: "What is the recovery time for perianal abscess treatment?",
        faqAnswer:
          "Recovery usually takes about 1-2 weeks. Many patients can return to their regular activities in just a few days with minimal downtime."
      },
      {
        faqTitle: "Does Lux Hospitals accept insurance for perianal abscess treatment?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major cashless insurance plans, making the treatment process easier for patients."
      },
      {
        faqTitle: "Who are the specialists for perianal abscess treatment at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy and Dr. Abhishek Katha are leading specialists in perianal abscess treatments at Lux Hospitals, offering effective care using advanced techniques."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get advanced perianal abscess treatment from top experts at Lux Hospitals in Hyderabad. Book your consultation today!",
      footernumber: "07969084448"
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
  

  return (
    <>
      <Header 
            PhoneNumber={"07969084448"}
            mobilectatext={"Free OPD"}
            />
      <Hero heading={content.heading} descList={content.descList} />
      <Second services={services} />
      <FreeOpdSection/>
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
                />
              </div>
            ))}
          </div>
        </section>
      )}
      
      {content.tableContent?.[0] && (
        <HospitalComparisond
          theading={content.tableContent[0].theading}
          rows={content.tableData}
        />
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
    </>
  );
}
