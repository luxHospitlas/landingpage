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

  "best-circumcision-doctor-hyderabad": {
    heading: "Best Circumcision Doctor in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Circumcision Doctor | Laser & Stapler Experts | Urology & Andrology Specialists | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Circumcision Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What is Circumcision?",
    whatAreP:
      "Circumcision is the surgical removal of the foreskin (prepuce) covering the head of the penis. It is commonly performed for medical, religious, cultural, or personal hygiene reasons. At Lux Hospitals, we offer advanced, minimally invasive circumcision techniques that are safe, quick, and virtually painless. All procedures are done by experienced urologists in a sterile, NABH-accredited hospital setting — ensuring full privacy and comfort.",
    whatHead: "Top 2 Procedures for Circumcision",
    treatments: [
      {
        title: "Laser Circumcision",
        description:
          "Laser circumcision is a stitch-free, bloodless procedure that uses advanced laser technology to precisely remove the foreskin. It is performed under local anesthesia and is safe for children, teens, and adults. The technique offers faster healing, minimal discomfort, and excellent hygiene outcomes with almost no post-operative complications."
      },
      {
        title: "Stapler Circumcision",
        description:
          "Stapler circumcision uses a circular stapler device to cut and seal the foreskin in a single step. This modern technique ensures uniform healing, minimal pain, and excellent cosmetic results. The staples fall off naturally within 7–10 days, and the recovery is generally quick and smooth."
      }
    ],
    fheading: "FAQs on Circumcision",
    faqs: [
      {
        faqTitle: "What is circumcision and how is it done at Lux Hospitals?",
        faqAnswer:
          "Circumcision involves removing the foreskin of the penis for health, hygiene, or religious reasons. At Lux Hospitals, it’s performed using advanced laser or stapler methods for greater precision, faster recovery, and minimal discomfort."
      },
      {
        faqTitle: "How experienced are the doctors performing circumcision?",
        faqAnswer:
          "Our expert urologists — Dr. Priyank Ashokkumar Salecha and Dr. Aditya Potla — bring over 19 years of combined experience and have successfully treated 20,000+ patients using advanced techniques."
      },
      {
        faqTitle: "What techniques are used for circumcision at Lux Hospitals?",
        faqAnswer:
          "We specialize in laser and stapler circumcision. Both are minimally invasive, more hygienic, and offer quicker healing compared to traditional scalpel-based methods."
      },
      {
        faqTitle: "What can I expect during the recovery process?",
        faqAnswer:
          "Circumcision at Lux Hospitals is a daycare procedure — patients go home the same day. Recovery typically takes 5–7 days. You may experience mild swelling or soreness, and our team will provide detailed post-op instructions to support smooth healing."
      },
      {
        faqTitle: "How much does circumcision cost at Lux Hospitals?",
        faqAnswer:
          "Our circumcision packages start from ₹18,000, depending on the technique used. We offer fixed-price packages, 100% insurance coverage assistance, and interest-free EMI options for flexible payments."
      },
      {
        faqTitle: "How do I book a consultation with a circumcision specialist?",
        faqAnswer:
          "Booking is easy. Call 07969084442 or chat with us on WhatsApp. Our team will help you schedule a consultation, complete evaluation, and share a personalised treatment plan with transparent pricing."
      }
    ],
    footerComponent: {
      footerdesc:
        "Safe. Quick. Painless. Get expert circumcision treatment from Hyderabad’s most trusted urologists at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-circumcision-surgery-hyderabad": {
    heading: "Best Circumcision Surgery in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Circumcision Surgery | Laser & Stapler Procedures | Urology & Andrology Experts | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Circumcision Surgery at Lux Hospitals"
      }
    ],
    whatAreH: "What is Circumcision Surgery?",
    whatAreP:
      "Circumcision surgery is the medical removal of the foreskin covering the tip of the penis. It is commonly performed for reasons related to hygiene, medical conditions such as phimosis, infections, or personal and religious beliefs. At Lux Hospitals, we offer modern, scarless circumcision surgery using laser and stapler-based techniques. These advanced methods ensure faster healing, minimal discomfort, and no stitches. All surgeries are performed by expert urologists in a NABH-accredited facility with complete privacy and strict sterilization protocols.",
    whatHead: "Top 2 Techniques for Circumcision Surgery",
    treatments: [
      {
        title: "Laser Circumcision Surgery",
        description:
          "This stitch-free, bloodless technique uses laser energy to precisely remove the foreskin. It is a daycare procedure performed under local anesthesia, ideal for children and adults alike. The result is faster recovery, minimal pain, and reduced chances of infection or complications."
      },
      {
        title: "Stapler Circumcision Surgery",
        description:
          "This technique uses a specially designed stapler device to cut and seal the foreskin in a single step. It provides uniform wound healing, very little post-op pain, and excellent cosmetic results. The staples fall off on their own in 7–10 days, and most patients recover comfortably at home."
      }
    ],
    fheading: "FAQs on Circumcision Surgery",
    faqs: [
      {
        faqTitle: "What is circumcision surgery and when is it needed?",
        faqAnswer:
          "Circumcision surgery is the removal of the foreskin for reasons such as tight foreskin (phimosis), infections, hygiene issues, or personal choice. It’s commonly done in boys, teens, and adult men and can be preventive as well as corrective."
      },
      {
        faqTitle: "What methods of circumcision surgery do you offer?",
        faqAnswer:
          "We offer two advanced methods: laser circumcision and stapler circumcision. Both techniques are highly precise, require no stitches, and allow quick recovery."
      },
      {
        faqTitle: "How long does the surgery take and is it painful?",
        faqAnswer:
          "The procedure takes just 10–15 minutes. It’s done under local anesthesia, so you feel no pain during surgery. Post-surgical discomfort is minimal and easily manageable."
      },
      {
        faqTitle: "What is the recovery time after circumcision surgery?",
        faqAnswer:
          "You can go home the same day. Recovery usually takes 5–7 days. Mild swelling or soreness is normal and subsides quickly. Our team provides complete aftercare support and medication."
      },
      {
        faqTitle: "What is the cost of circumcision surgery at Lux Hospitals?",
        faqAnswer:
          "Our packages start from ₹18,000. We offer transparent pricing, fixed-cost surgery options, and interest-free EMI plans. All major insurance policies are accepted with full claim support."
      },
      {
        faqTitle: "How can I book an appointment for circumcision surgery?",
        faqAnswer:
          "Booking is simple. Call 07969084442 or message us on WhatsApp. Our care team will help you schedule a consultation, guide you through the process, and provide a personalised treatment plan with cost estimate."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get safe, quick, and scarless circumcision surgery from Hyderabad’s most trusted urology specialists at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-circumcision-hospital-hyderabad": {
    heading: "Best Circumcision Hospital in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Circumcision Hospital | Urology & Andrology Experts | Laser & Stapler Procedures | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Circumcision at Lux Hospitals"
      }
    ],
    whatAreH: "What is Circumcision?",
    whatAreP:
      "Circumcision is a surgical procedure that removes the foreskin (prepuce) covering the tip of the penis. It is performed for various reasons — medical (like phimosis or infections), cultural, religious, or hygiene-related. At Lux Hospitals, we specialize in providing modern, painless circumcision procedures in a clean, NABH-accredited hospital environment. With expert urologists, advanced equipment, and strict sterilization protocols, we ensure a safe, smooth experience for patients of all age groups.",
    whatHead: "Top 2 Circumcision Procedures at Lux Hospitals",
    treatments: [
      {
        title: "Laser Circumcision",
        description:
          "This advanced, stitchless procedure uses focused laser energy to precisely remove the foreskin. It is bloodless, painless, and suitable for children, teenagers, and adults. Recovery is rapid, and there is minimal post-operative discomfort. The surgery is performed under local anesthesia and typically completed in 10–15 minutes."
      },
      {
        title: "Stapler Circumcision",
        description:
          "Stapler circumcision is a cutting-edge technique where the foreskin is removed and sealed in a single motion using a medical stapler. This method ensures a uniform result, minimal pain, and excellent cosmetic appearance. The stapler clips fall off naturally in 7–10 days, and healing is usually complete within a week."
      }
    ],
    fheading: "FAQs on Circumcision at Lux Hospitals",
    faqs: [
      {
        faqTitle: "Why choose Lux Hospitals for circumcision?",
        faqAnswer:
          "Lux Hospitals offers expert-led circumcision in a hospital-grade setting with modern techniques, fast recovery, and complete patient privacy. With over 20,000 procedures completed, we are a trusted name in urology care."
      },
      {
        faqTitle: "Are laser and stapler circumcision better than traditional methods?",
        faqAnswer:
          "Yes. Both are advanced, minimally invasive options that cause less bleeding, involve no stitches, and promote faster recovery. They’re also more hygienic and cosmetically superior to traditional scalpel-based surgeries."
      },
      {
        faqTitle: "Will I be admitted to the hospital for this surgery?",
        faqAnswer:
          "No. Circumcision at Lux Hospitals is a daycare procedure. You’ll be discharged within a few hours after surgery and can return home the same day."
      },
      {
        faqTitle: "How long does recovery take after circumcision?",
        faqAnswer:
          "Most patients recover within 5–7 days. We provide clear post-surgery care instructions and medications to ensure a smooth and painless recovery."
      },
      {
        faqTitle: "What is the cost of circumcision at your hospital?",
        faqAnswer:
          "The procedure starts from ₹18,000. We offer fixed pricing with no hidden charges, full insurance support, and interest-free EMI options to make treatment accessible and affordable."
      },
      {
        faqTitle: "How do I book an appointment at Lux Hospitals?",
        faqAnswer:
          "Just call 07969084442 or message us on WhatsApp. Our team will schedule a consultation with a urologist and guide you through the entire process — from evaluation to surgery to follow-up care."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get safe, painless circumcision surgery from Hyderabad’s most trusted hospital for urology care. Schedule your consultation today.",
      footernumber: "07969084442"
    }
  },

  "affordable-circumcision-surgery-hyderabad": {
    heading: "Affordable Circumcision Surgery in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Circumcision Expert | Laser & Stapler | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Circumcision at Lux Hospitals"
      }
    ],
    whatAreH: "What is Circumcision Surgery?",
    whatAreP:
      "At Lux Hospitals, circumcision surgery starts from ₹30,000, based on the technique used (Laser or Stapler), patient’s age, and medical condition. We follow transparent, fixed pricing with no hidden charges, so you always know what you’re paying for. Our packages include consultation, surgery, anesthesia, medication, and post-op care. We also offer interest-free EMI plans and 100% insurance assistance, making expert treatment affordable for everyone.",
    whatHead: "Top 2 Circumcision Procedures",
    treatments: [
      {
        title: "Laser Circumcision",
        description:
          "A modern, stitchless, bloodless procedure that uses precision laser energy to remove the foreskin. It offers minimal discomfort, fast recovery, and is ideal for all age groups."
      },
      {
        title: "Stapler Circumcision",
        description:
          "This technique uses a disposable stapler device to remove and seal the foreskin in one motion. It ensures neat, uniform healing and excellent cosmetic results. Staples fall off on their own in 7–10 days."
      }
    ],
    fheading: "FAQs on Affordable Circumcision at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What is the cost of circumcision at Lux Hospitals?",
        faqAnswer:
          "Circumcision surgery starts from ₹30,000, depending on the technique used and case complexity. We provide all-inclusive packages with no extra or surprise charges."
      },
      {
        faqTitle: "Is the cost covered under insurance?",
        faqAnswer:
          "Yes. Circumcision is covered by insurance if it is medically necessary (e.g. due to phimosis, recurrent infections, or balanitis). Our team helps with claim filing and cashless approval for eligible policies."
      },
      {
        faqTitle: "What does the package include?",
        faqAnswer:
          "It includes doctor consultation, procedure (laser/stapler), anesthesia, operation theater charges, surgical consumables, medications, post-op kit, and follow-up care."
      },
      {
        faqTitle: "Are EMI options available for circumcision surgery?",
        faqAnswer:
          "Yes, we offer 0% interest EMI plans with easy monthly installments. Talk to our coordinator to choose a payment plan that fits your budget."
      },
      {
        faqTitle: "How long does the recovery take?",
        faqAnswer:
          "Recovery is quick — usually within 5–7 days. You can resume most normal activities within 48 hours. Our team provides complete recovery instructions and support."
      },
      {
        faqTitle: "How do I get an exact cost estimate for my case?",
        faqAnswer:
          "Call 07969084442 or chat with us on WhatsApp to book a consultation. Our doctors will assess your condition and give you a detailed, customised cost estimate."
      }
    ],
    footerComponent: {
      footerdesc:
        "Affordable. Transparent. Trusted.\nGet expert circumcision surgery at Lux Hospitals starting from ₹30,000. Book your consultation now with full insurance and EMI support.",
      footernumber: "07969084442"
    }
  },
  "affordable-stapler-circumcision-surgery-hyderabad": {
    heading: "Affordable Stapler Circumcision Surgery in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Stapler Circumcision Experts | Disposable Device Surgery | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Stapler Circumcision at Lux Hospitals"
      }
    ],
    whatAreH: "What is Stapler Circumcision?",
    whatAreP:
      "Stapler circumcision is an advanced, minimally invasive technique that uses a disposable circular stapler device to remove and seal the foreskin in a single step. This method ensures uniform healing, excellent cosmetic outcomes, and minimal post-op discomfort.\nAt Lux Hospitals, stapler circumcision surgery starts from ₹33,000, depending on the patient's age, anatomy, and complexity of the case. We follow transparent, fixed pricing with no hidden costs. Our stapler packages include consultation, procedure, anesthesia, stapler device, medications, and follow-up care — all covered under one price. We also provide interest-free EMI options and 100% insurance assistance, making quality care accessible to everyone.",
    whatHead: "Stapler Circumcision – Procedure & Benefits",
    treatments: [
      {
        title: "Procedure",
        description:
          "Stapler circumcision is performed under local anesthesia. The device cuts and seals the foreskin simultaneously, which minimizes bleeding, pain, and healing time. The staples fall off naturally in 7–10 days, and most patients return to normal activity within 48 hours."
      },
      {
        title: "Benefits",
        description:
          "This technique is especially preferred for adults and teens who want faster healing, minimal scarring, and superior hygiene outcomes. It is also suitable for cases of phimosis, infections, and chronic inflammation."
      }
    ],
    fheading: "FAQs on Stapler Circumcision at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What is the cost of stapler circumcision at Lux Hospitals?",
        faqAnswer:
          "Stapler circumcision starts from ₹32,000 and may vary based on the patient’s age and condition. We offer all-inclusive, fixed-cost packages."
      },
      {
        faqTitle: "Is stapler circumcision covered under insurance?",
        faqAnswer:
          "Yes. If the procedure is recommended for medical reasons such as phimosis or recurrent infections, most insurance policies will cover it. We offer full support for documentation and cashless claims."
      },
      {
        faqTitle: "What’s included in the stapler circumcision package?",
        faqAnswer:
          "The cost includes doctor consultation, stapler surgery, anesthesia, disposable device, surgical consumables, medications, post-op dressing kit, and follow-up care."
      },
      {
        faqTitle: "Are EMI options available?",
        faqAnswer:
          "Absolutely. We provide 0% interest EMI plans with flexible tenures to make the procedure budget-friendly. Our coordinator will help you choose a suitable plan."
      },
      {
        faqTitle: "What is the recovery time after stapler circumcision?",
        faqAnswer:
          "Patients recover quickly — most resume normal routine in 1–2 days. Staples fall off on their own in about a week, and full healing takes 5–7 days."
      },
      {
        faqTitle: "How can I get an exact cost estimate for my case?",
        faqAnswer:
          "Call 07969084442 or chat with us on WhatsApp. Our specialists will evaluate your condition and provide a customised, transparent price breakdown."
      }
    ],
    footerComponent: {
      footerdesc:
        "Fast. Safe. Scar-Free.\nGet stapler circumcision surgery at Lux Hospitals starting from ₹32,000 — with insurance support and easy EMI plans.",
      footernumber: "07969084442"
    }
  },
  "safe-stapler-circumcision-hyderabad": {
    heading: "Safe & Scar-Free Stapler Circumcision in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Stapler Circumcision Experts | Disposable Device Surgery | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Stapler Circumcision at Lux Hospitals"
      }
    ],
    whatAreH: "What is Stapler Circumcision?",
    whatAreP:
      "Stapler circumcision is a modern surgical technique used to treat phimosis, tight foreskin, and other penile skin conditions. It uses a specially designed disposable stapler device that removes and seals the foreskin in a single step. This method ensures clean results, faster healing, and minimal discomfort. At Lux Hospitals, stapler circumcision is performed by experienced urologists under strict sterilization in a NABH-accredited setup. The procedure is quick, stitch-free, and preferred for its excellent cosmetic outcomes.",
    whatHead: "Stapler Technique – Procedure & Benefits",
    treatments: [
      {
        title: "How It Works",
        description:
          "Stapler circumcision uses a disposable device that cuts and seals the foreskin at once, avoiding the need for stitches. The procedure is quick, precise, and performed under local anesthesia. The surgical staples fall off naturally within 7 to 10 days, and patients return home the same day."
      },
      {
        title: "Key Benefits",
        description:
          "The stapler method offers minimal pain, almost no bleeding, and very little scarring. Most patients recover within a week and resume normal activity in 1 to 2 days. The cosmetic results are excellent, making it a preferred choice for those seeking a smooth and efficient solution for foreskin-related conditions."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What is stapler circumcision and who needs it?",
        faqAnswer:
          "Stapler circumcision is a stitch-free procedure using a stapler device to remove the foreskin. It is ideal for phimosis, hygiene issues, or personal preference."
      },
      {
        faqTitle: "Is stapler surgery better than traditional methods?",
        faqAnswer:
          "Yes. It offers less pain, no stitches, faster healing, and a more uniform cosmetic result compared to traditional circumcision."
      },
      {
        faqTitle: "Is the stapler device safe?",
        faqAnswer:
          "Absolutely. It is a sterile, single-use device designed for safe and effective foreskin removal."
      },
      {
        faqTitle: "Will the staples need to be removed manually?",
        faqAnswer:
          "No. The surgical staples fall off naturally within 7–10 days."
      },
      {
        faqTitle: "How long is the recovery period?",
        faqAnswer:
          "Most patients recover within a week and return to regular activities in 1–2 days."
      },
      {
        faqTitle: "How can I schedule my stapler circumcision at Lux Hospitals?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp to book your consultation with our expert team."
      }
    ],
    footerComponent: {
      footerdesc:
        "Quick. Safe. Stitches-Free. Get stapler circumcision with expert care, modern devices, and fast recovery at Lux Hospitals, Hyderabad.",
      footernumber: "07969084442"
    }
  },
  "best-phimosis-treatment-hyderabad": {
    heading: "Best Phimosis Treatment in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Phimosis Specialists | Laser & Stapler Circumcision | Urology & Andrology Experts | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Phimosis Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What is Phimosis?",
    whatAreP:
      "Phimosis is a condition where the foreskin of the penis cannot be retracted over the head. This can lead to discomfort, difficulty in urination, pain during intercourse, and recurrent infections.\nAt Lux Hospitals, we offer safe and effective solutions for phimosis using modern, minimally invasive procedures such as laser and stapler circumcision. All treatments are performed by expert urologists in a sterile, NABH-accredited facility with complete privacy and post-care support.",
    whatHead: "Top 2 Surgical Techniques for Phimosis",
    treatments: [
      {
        title: "Laser Circumcision Surgery",
        description:
          "A quick and painless daycare procedure using precision laser technology to remove the tight foreskin without stitches. This method ensures minimal bleeding, low risk of infection, and fast recovery."
      },
      {
        title: "Stapler Circumcision Surgery",
        description:
          "This technique uses a medical stapler device that cuts and seals the foreskin in one smooth step. It offers uniform healing, excellent cosmetic outcomes, and minimal postoperative discomfort. Staples fall off naturally within 7–10 days."
      }
    ],
    fheading: "FAQs on Phimosis Treatment at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What is phimosis and why does it need treatment?",
        faqAnswer:
          "Phimosis is a condition in which the foreskin is too tight to be pulled back over the head of the penis. It can cause pain, hygiene issues, urinary problems, and increase the risk of infections if not treated."
      },
      {
        faqTitle: "How is phimosis treated at Lux Hospitals?",
        faqAnswer:
          "We treat phimosis using advanced, stitch-free techniques like laser and stapler circumcision. These methods are safe, quick, and offer permanent relief."
      },
      {
        faqTitle: "Is the procedure painful?",
        faqAnswer:
          "The treatment is done under local anesthesia, so there is no pain during the procedure. Post-surgical discomfort is mild and manageable with medication."
      },
      {
        faqTitle: "How long does the procedure and recovery take?",
        faqAnswer:
          "The surgery takes about 10–15 minutes and is done as a daycare procedure. Most patients recover within 5–7 days and can resume normal activities quickly."
      },
      {
        faqTitle: "Will insurance cover phimosis treatment?",
        faqAnswer:
          "Yes, phimosis treatment is covered by most health insurance plans. We offer full assistance with documentation and support for cashless claims."
      },
      {
        faqTitle: "How do I book an appointment for phimosis consultation?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp. Our team will help you schedule your consultation and guide you through the treatment process."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get fast, safe, and permanent relief from phimosis at Hyderabad’s most trusted urology hospital – Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "affordable-phimosis-surgery-hyderabad": {
    heading: "Affordable Phimosis Surgery in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Phimosis Surgery Experts | Laser & Stapler Circumcision | Urology & Andrology Experts | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Phimosis Surgery at Lux Hospitals"
      }
    ],
    whatAreH: "What is Phimosis?",
    whatAreP:
      "Phimosis is a condition where the foreskin becomes too tight to retract over the head of the penis, leading to pain, infection, or hygiene issues.\nAt Lux Hospitals, we offer safe, modern solutions through laser and stapler circumcision, performed by expert urologists in a NABH-accredited setup. These techniques ensure minimal discomfort, quick healing, and no stitches.\n\nFinal cost may vary based on age, medical history, and surgical method (laser/stapler). Get an exact quote after your consultation.",
    whatHead: "Surgical Options for Phimosis",
    treatments: [
      {
        title: "Laser Circumcision Surgery",
        description:
          "A stitchless, bloodless daycare procedure done under local anesthesia. Offers faster healing and minimal post-op discomfort. Suitable for teens and adults."
      },
      {
        title: "Stapler Circumcision Surgery",
        description:
          "Performed using a circular stapler device that cuts and seals the foreskin in one go. Provides consistent cosmetic results with very little recovery time. Staples fall off naturally within a week."
      }
    ],
    fheading: "FAQs on Phimosis Surgery at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What is the cost of phimosis surgery at Lux Hospitals?",
        faqAnswer:
          "At Lux Hospitals, we offer affordable surgery cost of phimosis. The final price depends on the chosen surgical technique and any additional care required. We offer interest-free EMI and insurance support."
      },
      {
        faqTitle: "What is included in the phimosis surgery package?",
        faqAnswer:
          "Our package includes consultation, procedure charges, anesthesia, medications, and follow-up visits—no hidden costs."
      },
      {
        faqTitle: "Is phimosis surgery covered by insurance?",
        faqAnswer:
          "Yes, phimosis is a medically necessary procedure and covered by most insurance policies. We provide full assistance for cashless approval and claim processing."
      },
      {
        faqTitle: "Can I pay in installments?",
        faqAnswer:
          "Absolutely. We offer 0% interest EMI plans to make treatment affordable for everyone."
      },
      {
        faqTitle: "How can I get an exact quote for my treatment?",
        faqAnswer:
          "Call us at 07969084442 to schedule a consultation. After evaluating your condition, our urologist will give you a personalised treatment plan with cost details."
      },
      {
        faqTitle: "Are there any additional or hidden charges?",
        faqAnswer:
          "No. We provide complete transparency in pricing. You will be informed of all charges upfront before the procedure."
      }
    ],
    footerComponent: {
      footerdesc:
        "Affordable, safe, and stitchless phimosis surgery with complete cost transparency – only at Lux Hospitals, Hyderabad.",
      footernumber: "07969084442"
    }
  },

  "best-phimosis-treatment-hyderabad": {
    heading: "Best Phimosis Treatment in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Phimosis Treatment | Laser & Stapler Circumcision | Urology & Andrology Experts | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Phimosis Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What is Phimosis?",
    whatAreP:
      "Phimosis is a condition where the foreskin is too tight to retract over the tip of the penis. This can cause pain, difficulty in urination, infections, and discomfort during sexual activity.\nAt Lux Hospitals, we provide safe and effective treatment for phimosis using advanced laser and stapler circumcision techniques. Our experienced urologists ensure a painless, stitch-free, daycare procedure with fast recovery and minimal discomfort.",
    whatHead: "Top 2 Surgical Techniques for Phimosis Treatment",
    treatments: [
      {
        title: "Laser Circumcision Surgery",
        description:
          "A precise, stitch-free method that uses laser technology to remove the tight foreskin. It is a quick daycare procedure with minimal bleeding and fast healing."
      },
      {
        title: "Stapler Circumcision Surgery",
        description:
          "This technique uses a medical stapler to simultaneously cut and seal the foreskin. It offers uniform healing, excellent cosmetic results, and minimal pain. Staples fall off naturally within 7–10 days."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What causes phimosis and why should it be treated?",
        faqAnswer:
          "Phimosis occurs when the foreskin cannot be retracted, causing pain, infections, and urinary difficulties. Treatment prevents complications and improves quality of life."
      },
      {
        faqTitle: "What treatment options are available at Lux Hospitals?",
        faqAnswer:
          "We offer laser and stapler circumcision surgeries that are safe, painless, and provide lasting results."
      },
      {
        faqTitle: "How long does the procedure take and is it painful?",
        faqAnswer:
          "The surgery lasts 10–15 minutes and is done under local anesthesia, so no pain is felt during the procedure. Post-op discomfort is mild and manageable."
      },
      {
        faqTitle: "What is the recovery time?",
        faqAnswer:
          "Most patients recover fully within 5–7 days and can resume normal activities quickly."
      },
      {
        faqTitle: "Is phimosis treatment covered by insurance?",
        faqAnswer:
          "Yes, we accept all major insurance plans and support cashless claims."
      },
      {
        faqTitle: "How do I book an appointment?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp. Our team will schedule your consultation and guide you through every step."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get fast, safe, and scarless phimosis treatment from Hyderabad’s trusted urology specialists at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-advanced-trusted-circumcision-techniques": {
    heading: "Best Advanced & Trusted Circumcision Techniques by Experts",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Precision Circumcision | Laser & Stapler Procedures | Urology & Andrology Experts | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Premium Circumcision at Lux Hospitals"
      }
    ],
    whatAreH: "What Makes Our Circumcision Techniques Special?",
    whatAreP:
      "At Lux Hospitals, we offer the latest, minimally invasive circumcision methods designed for maximum safety, comfort, and cosmetic excellence. Our procedures are ideal alternatives to traditional surgical approaches, providing:\n" +
      "Precision removal of the foreskin with minimal tissue trauma\n\n" +
      "Stitch-free procedures that promote faster healing\n\n" +
      "Minimal pain and reduced risk of infection\n\n" +
      "Quick, daycare surgeries allowing you to return home the same day\n\n" +
      "Performed by highly skilled urologists in a NABH-accredited hospital, our circumcision treatments deliver reliable, scarless outcomes with complete privacy.",
    whatHead: "Our Advanced Circumcision Procedures",
    treatments: [
      {
        title: "Laser Circumcision",
        description:
          "Using precise laser technology, this stitchless method ensures a bloodless surgery with rapid recovery and excellent cosmetic results. Suitable for all ages."
      },
      {
        title: "Stapler Circumcision",
        description:
          "This innovative technique utilizes a special stapler device to remove and seal the foreskin uniformly in a single step. It guarantees consistent healing and minimal discomfort, with staples naturally falling off within a week."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "Are these advanced circumcision techniques safe and effective?",
        faqAnswer:
          "Yes, our laser and stapler procedures are performed under strict sterilization and safety protocols, delivering excellent outcomes with minimal risks."
      },
      {
        faqTitle: "How long does the surgery take?",
        faqAnswer:
          "Each procedure typically lasts 10–15 minutes and is done as a daycare surgery with local anesthesia."
      },
      {
        faqTitle: "Is there any pain or discomfort during or after the procedure?",
        faqAnswer:
          "Local anesthesia ensures no pain during surgery. Post-operative discomfort is mild and manageable with medication."
      },
      {
        faqTitle: "When can I resume normal activities?",
        faqAnswer:
          "Most patients return to daily activities within 2–3 days, with full recovery by one week."
      },
      {
        faqTitle: "Do you accept insurance and offer financing?",
        faqAnswer:
          "Yes, all major insurance plans are accepted with cashless claims supported. We also provide 0% interest EMI options."
      },
      {
        faqTitle: "How do I book a consultation?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp to schedule your appointment and get expert guidance."
      }
    ],
    footerComponent: {
      footerdesc:
        "Experience advanced, scarless circumcision with Hyderabad’s trusted urology specialists at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "affordable-foreskin-surgery-cost-hyderabad": {
    heading: "Affordable Foreskin Surgery Cost in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Foreskin Surgery Cost | Laser & Stapler Circumcision | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Foreskin Surgery at Lux Hospitals"
      }
    ],
    whatAreH: "What is Foreskin Surgery?",
    whatAreP:
      "Foreskin surgery corrects issues such as phimosis, infections, or tight foreskin that cause discomfort or hygiene problems. We specialize in advanced, minimally invasive techniques using laser and stapler circumcision methods to provide safe, scar-free results.\n" +
      "For a precise cost estimate tailored to your condition, please schedule a consultation.",
    whatHead: "Surgical Techniques",
    treatments: [
      {
        title: "Laser Circumcision Surgery",
        description:
          "A stitch-free, bloodless daycare procedure with fast recovery and minimal discomfort. Ideal for patients seeking a quick and painless solution."
      },
      {
        title: "Stapler Circumcision Surgery",
        description:
          "This technique uses a disposable stapler device to remove and seal the foreskin in one step, ensuring uniform healing and excellent cosmetic outcomes."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What affects the cost of foreskin surgery?",
        faqAnswer:
          "The cost depends on the surgical technique used, the patient’s age, and the complexity of the condition."
      },
      {
        faqTitle: "Is insurance accepted for foreskin surgery?",
        faqAnswer:
          "Yes, most insurance plans cover medically necessary foreskin surgery. We provide full support for cashless claims and documentation."
      },
      {
        faqTitle: "Are EMI options available?",
        faqAnswer:
          "Yes, we offer 0% interest EMI plans with flexible tenures to make the procedure affordable."
      },
      {
        faqTitle: "What does the surgery package include?",
        faqAnswer:
          "The package includes consultation, surgery, anesthesia, surgical consumables, medications, and follow-up care."
      },
      {
        faqTitle: "How long does the procedure take and is it painful?",
        faqAnswer:
          "The procedure usually lasts 10–15 minutes under local anesthesia, causing no pain during surgery. Post-operative discomfort is minimal and manageable."
      },
      {
        faqTitle: "How can I get an exact cost estimate?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp to schedule a consultation. Our specialists will provide a detailed, personalized price breakdown."
      }
    ],
    footerComponent: {
      footerdesc:
        "Safe, affordable, and scarless foreskin surgery from Hyderabad’s trusted urology experts at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "expert-foreskin-treatment-hyderabad": {
    heading: "Expert Foreskin Treatment in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Foreskin Specialists | Laser & Stapler Circumcision | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Foreskin Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What is Foreskin Treatment?",
    whatAreP:
      "Foreskin treatment involves addressing conditions such as phimosis, balanitis, or tight foreskin that cause pain, infections, or difficulty with hygiene. At Lux Hospitals, we use advanced, minimally invasive laser and stapler circumcision techniques for effective treatment with minimal discomfort and rapid recovery.",
    whatHead: "Advanced Treatment Techniques",
    treatments: [
      {
        title: "Laser Circumcision Surgery",
        description:
          "This stitch-free, bloodless procedure uses laser technology for precise removal or correction of foreskin problems. It is a daycare procedure with fast healing and minimal pain."
      },
      {
        title: "Stapler Circumcision Surgery",
        description:
          "Using a disposable stapler device, this technique simultaneously cuts and seals the foreskin, ensuring uniform healing and excellent cosmetic outcomes."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What conditions does foreskin treatment address?",
        faqAnswer:
          "Phimosis, balanitis, recurrent infections, tight or painful foreskin, and hygiene issues."
      },
      {
        faqTitle: "Is foreskin treatment painful?",
        faqAnswer:
          "No, the procedure is performed under local anesthesia, and post-treatment discomfort is minimal and easily managed."
      },
      {
        faqTitle: "How long does the treatment take?",
        faqAnswer:
          "Treatment usually takes 10–15 minutes and is done as a daycare procedure."
      },
      {
        faqTitle: "What is the recovery time after treatment?",
        faqAnswer:
          "Most patients resume normal activities within 2–3 days with full healing in about a week."
      },
      {
        faqTitle: "Are laser and stapler techniques safe?",
        faqAnswer:
          "Yes, these advanced techniques are safe, effective, and minimize scarring and infection risks."
      },
      {
        faqTitle: "How do I book a consultation for foreskin treatment?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp to schedule your appointment and get expert advice."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert foreskin treatment with advanced laser and stapler techniques from Hyderabad’s trusted urology specialists at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "affordable-frenuloplasty-surgery-cost-hyderabad": {
    heading: "Affordable Frenuloplasty Surgery Cost in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Frenuloplasty | Urologists | Laser & Stapler Techniques | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Frenuloplasty Surgery at Lux Hospitals"
      }
    ],
    whatAreH: "What is Frenuloplasty?",
    whatAreP:
      "Frenuloplasty is a surgical procedure to correct a short or tight frenulum (the tissue connecting the underside of the penis to the foreskin) that causes discomfort or pain during erections or intercourse. At Lux Hospitals, we use advanced laser and stapler-based techniques to ensure precise, minimally invasive treatment with quick recovery.\n\n*Exact cost varies depending on patient condition and surgical method.",
    whatHead: "Surgical Techniques",
    treatments: [
      {
        title: "Laser Frenuloplasty",
        description:
          "A bloodless, stitch-free procedure that uses laser technology for precise correction with minimal pain and rapid healing."
      },
      {
        title: "Stapler Frenuloplasty",
        description:
          "Utilizes a specialized stapler device for simultaneous cutting and sealing of the frenulum, providing uniform healing and excellent cosmetic results."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What is the cost of frenuloplasty at Lux Hospitals?",
        faqAnswer:
          "Packages are offered at affordable cost based on individual condition and chosen technique."
      },
      {
        faqTitle: "Is frenuloplasty covered by insurance?",
        faqAnswer:
          "Yes, if the procedure is medically necessary, most insurance plans cover it. We provide full support for documentation and cashless claims."
      },
      {
        faqTitle: "What does the surgery package include?",
        faqAnswer:
          "Consultation, procedure charges, anesthesia, surgical consumables, medications, and follow-up care are included."
      },
      {
        faqTitle: "Are EMI options available?",
        faqAnswer:
          "Yes, 0% interest EMI plans with flexible tenures are offered to make payment easier."
      },
      {
        faqTitle: "How long does the procedure take?",
        faqAnswer:
          "The surgery takes about 10–15 minutes and is performed under local anesthesia."
      },
      {
        faqTitle: "How can I get a personalized cost estimate?",
        faqAnswer:
          "Call 07969084442 or WhatsApp us to book a consultation for a detailed price breakdown."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get safe, affordable, and expert frenuloplasty surgery from Hyderabad’s trusted urology specialists at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-frenuloplasty-surgery-hyderabad": {
    heading: "Best Frenuloplasty Surgery in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Frenuloplasty Treatment | Laser & Stapler Techniques | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Frenuloplasty Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What is Frenuloplasty?",
    whatAreP:
      "Frenuloplasty is a precise surgical procedure to correct a tight or short frenulum — the tissue connecting the underside of the penis to the foreskin — which can cause pain during erections or sexual activity. Our advanced laser and stapler techniques ensure minimal discomfort, no stitches, and quick recovery.",
    whatHead: "Advanced Treatment Techniques",
    treatments: [
      {
        title: "Laser Frenuloplasty",
        description:
          "A minimally invasive, stitch-free procedure using laser energy for accurate correction with reduced pain and faster healing."
      },
      {
        title: "Stapler Frenuloplasty",
        description:
          "This technique uses a specialized stapler device to cut and seal the frenulum simultaneously, providing uniform healing and excellent cosmetic results."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What issues does frenuloplasty treat?",
        faqAnswer:
          "It treats tight or short frenulum causing pain, discomfort, or tearing during sexual activity."
      },
      {
        faqTitle: "Is the procedure painful?",
        faqAnswer:
          "No, frenuloplasty is done under local anesthesia, and post-procedure discomfort is minimal and manageable."
      },
      {
        faqTitle: "How long does the treatment take?",
        faqAnswer:
          "The procedure typically takes 10–15 minutes and is done as a daycare surgery."
      },
      {
        faqTitle: "What is the recovery time?",
        faqAnswer:
          "Most patients resume normal activities within 2–3 days, with complete healing in about a week."
      },
      {
        faqTitle: "Are laser and stapler techniques safe?",
        faqAnswer:
          "Yes, both techniques are safe, effective, and minimize scarring and infection risks."
      },
      {
        faqTitle: "How do I book a consultation for frenuloplasty treatment?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp to schedule your appointment with our specialists."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get expert frenuloplasty treatment with advanced laser and stapler techniques from Hyderabad’s trusted urology experts at Lux Hospitals.",
      footernumber: "07969084442"
    }
  },
  "best-affordable-frenulum-surgery-cost-hyderabad": {
    heading: "Best Affordable Frenulum Surgery Cost in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Frenulum Surgery Experts | Laser & Stapler Frenuloplasty | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Frenulum Surgery at Lux Hospitals"
      }
    ],
    whatAreH: "What is Frenulum Surgery?",
    whatAreP:
      "Frenulum surgery (frenuloplasty) is performed to treat a short or tight frenulum that causes pain or tearing during sexual activity or erections. At Lux Hospitals, we use advanced laser and stapler techniques to deliver fast, scarless results with minimal discomfort and downtime.",
    whatHead: "Treatment Techniques",
    treatments: [
      {
        title: "Laser Frenuloplasty",
        description:
          "Minimally invasive, precise laser technique that ensures quick healing and minimal bleeding."
      },
      {
        title: "Stapler Frenuloplasty",
        description:
          "Uses a disposable stapler device to correct the frenulum with simultaneous cutting and sealing. Offers excellent cosmetic results and faster recovery."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What is the cost of frenulum surgery at Lux Hospitals?",
        faqAnswer:
          "Packages are affordable at Lux Hospitals and depend on clinical findings and surgical methods."
      },
      {
        faqTitle: "Will insurance cover this procedure?",
        faqAnswer:
          "Yes. If the condition is medically indicated (e.g., pain or tearing), most insurers will cover the cost. We support full documentation and cashless claims."
      },
      {
        faqTitle: "What’s included in the surgery cost?",
        faqAnswer:
          "The package includes doctor consultation, surgery, anesthesia, consumables, medications, dressing, and follow-up."
      },
      {
        faqTitle: "Are EMI options available?",
        faqAnswer:
          "Yes, we provide 0% interest EMI plans with flexible terms for affordability."
      },
      {
        faqTitle: "How long is the recovery after frenulum surgery?",
        faqAnswer:
          "Recovery is quick—most patients resume daily activities in 1–2 days, with complete healing in 5–7 days."
      },
      {
        faqTitle: "How can I get a personalised quote for my case?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp to schedule a consultation and receive a customised cost breakdown."
      }
    ],
    footerComponent: {
      footerdesc:
        "Affordable. Advanced. Expert Care. Get frenulum surgery at Lux Hospitals with transparent pricing, insurance support, and easy EMI plans.",
      footernumber: "07969084442"
    }
  },
  "best-frenulum-treatment-hyderabad": {
    heading: "Best Treatment for Frenulum in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Frenulum Expert | Laser & Stapler Frenuloplasty | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Frenulum Treatment at Lux Hospitals"
      }
    ],
    whatAreH: "What is Frenulum Treatment?",
    whatAreP:
      "Frenulum treatment (frenuloplasty) is a minor surgical procedure to correct a tight or short frenulum — the band of tissue connecting the underside of the penis to the foreskin. When this tissue is too short, it can cause pain during erections, difficulty in retracting the foreskin, and even tearing during intercourse. At Lux Hospitals, we offer advanced, scar-free solutions for frenulum correction using modern laser and stapler techniques. These methods ensure precision, minimal pain, and fast recovery — all performed as a safe daycare procedure.",
    whatHead: "Advanced Treatment Techniques",
    treatments: [
      {
        title: "Laser Frenuloplasty",
        description:
          "A stitch-free, bloodless procedure using precise laser energy to release the tight frenulum. It provides excellent healing outcomes with minimal post-operative discomfort."
      },
      {
        title: "Stapler Frenuloplasty",
        description:
          "This technique uses a specialized stapler device that simultaneously cuts and seals the frenulum. It ensures uniform wound healing and excellent cosmetic results, ideal for both teens and adults."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What problems does a tight frenulum cause?",
        faqAnswer:
          "A short frenulum can lead to pain during erections, restricted foreskin movement, tearing during sexual activity, and long-term discomfort."
      },
      {
        faqTitle: "What is frenuloplasty?",
        faqAnswer:
          "Frenuloplasty is a simple surgical procedure to lengthen or release the tight frenulum. It improves comfort, hygiene, and sexual function."
      },
      {
        faqTitle: "Is the treatment painful?",
        faqAnswer:
          "No. It is done under local anesthesia, ensuring a painless experience. Any post-op discomfort is minor and manageable with medications."
      },
      {
        faqTitle: "How long does the procedure take?",
        faqAnswer:
          "The entire treatment takes just 10–15 minutes and does not require hospital admission."
      },
      {
        faqTitle: "What is the recovery process like?",
        faqAnswer:
          "Most patients return to normal routine in 1–2 days. Full healing typically occurs within 5–7 days."
      },
      {
        faqTitle: "How do I book an appointment for frenulum treatment?",
        faqAnswer:
          "Call 07969084442 or send us a message on WhatsApp. Our care team will help you schedule a consultation and guide you through the process."
      }
    ],
    footerComponent: {
      footerdesc:
        "Relieve pain and discomfort with advanced frenulum treatment at Lux Hospitals — trusted care with expert urologists and faster healing.",
      footernumber: "07969084442"
    }
  },
  "advanced-penis-skin-removal-hyderabad": {
    heading: "Safe & Advanced Penis Skin Removal in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Penis Skin Removal | Laser & Stapler Procedures | Urology & Andrology Hospital | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Penis Skin Removal at Lux Hospitals"
      }
    ],
    whatAreH: "What is Penis Skin Removal?",
    whatAreP:
      "Penis skin removal typically refers to the surgical removal of excess or problematic foreskin. This is commonly performed to treat conditions such as phimosis (tight foreskin), balanitis (inflammation), hygiene issues, or for personal preference. At Lux Hospitals, we perform penis skin removal using advanced laser and stapler-based techniques. These procedures are minimally invasive, require no stitches, and allow same-day discharge with fast recovery and excellent cosmetic results.",
    whatHead: "Techniques for Skin Removal",
    treatments: [
      {
        title: "Laser Circumcision",
        description:
          "This method uses laser energy to remove excess foreskin with high precision and minimal bleeding. It is stitch-free, quick, and ideal for adults and adolescents seeking rapid healing."
      },
      {
        title: "Stapler Circumcision",
        description:
          "A modern technique that uses a disposable stapler device to cut and seal the foreskin simultaneously. The result is a clean, uniform removal with staples that fall off naturally in a few days."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "Who needs penis skin removal surgery?",
        faqAnswer:
          "It is usually recommended for patients with tight foreskin, repeated infections, difficulty in cleaning, or those seeking it for hygiene or cosmetic reasons."
      },
      {
        faqTitle: "What is the difference between laser and stapler methods?",
        faqAnswer:
          "Both are advanced, minimally invasive techniques. Laser is stitch-free, while stapler uses a device that cuts and seals simultaneously. Both offer fast recovery."
      },
      {
        faqTitle: "Is the procedure painful?",
        faqAnswer:
          "No. The procedure is done under local anesthesia, so there is no pain during surgery. Post-op discomfort is minimal and manageable."
      },
      {
        faqTitle: "How long does it take to recover?",
        faqAnswer:
          "Most patients return to normal activities within 1–2 days. Complete healing occurs within a week."
      },
      {
        faqTitle: "Is the procedure safe?",
        faqAnswer:
          "Yes. It is performed in a fully sterile, NABH-accredited hospital by experienced urologists, ensuring complete safety."
      },
      {
        faqTitle: "How can I book a consultation for skin removal?",
        faqAnswer:
          "Call 07969084442 or message us on WhatsApp. Our care team will assist you with appointment scheduling and consultation."
      }
    ],
    footerComponent: {
      footerdesc:
        "Quick. Safe. Scar-Free. Get expert foreskin removal with advanced laser & stapler techniques at Lux Hospitals in Hyderabad.",
      footernumber: "07969084442"
    }
  },
  "advanced-preputioplasty-surgery-hyderabad": {
    heading: "Advanced Preputioplasty Surgery in Hyderabad",
    descList: [
      "Expert in Laser & Stapler Circumcision",
      "15-Min Painless Daycare Procedure",
      "No Stitches. No Hospital Stay",
      "100% Safe & Effective",
      "All Insurances Accepted (Cashless)",
      "0% Interest EMI | 5,000+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Preputioplasty Surgery | Laser Foreskin Preservation | Urology & Andrology Experts | Hyderabad",
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Priyank-Ashokkumar-Salecha.webp", // Image to be added
        name: "Dr. Priyank Salecha",
        qualification: "MBBS, MS, Mch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 10+ years",
        description: "Urologist and Andrologist with 10+ years' expertise in kidney stones, prostate issues, varicocele, and circumcision. Specialises in microsurgery, penile prosthesis, and men’s health. Treated 7,000+ patients using advanced techniques and personalised care.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Aditya-Rao-1.webp", // Image to be added
        name: "Dr. Aditya Potla",
        qualification: "MBBS, MS, M.Ch (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Experience: 5+ Years",
        description: "Urologist with 9+ years’ experience. Expert in kidney stones, prostate issues, circumcision, and varicocele. Focused on minimally invasive surgery and personalised care. Treated 4,000+ patients for faster recovery and long-term urological health.",
      }
    ],
    tableContent: [
      {
        theading: "Preputioplasty at Lux Hospitals"
      }
    ],
    whatAreH: "What is Preputioplasty?",
    whatAreP:
      "Preputioplasty is a minimally invasive surgical procedure used to treat tight foreskin (phimosis) without completely removing the foreskin. It is a foreskin-preserving alternative to circumcision, ideal for individuals who want to retain the natural appearance of the penis while resolving medical symptoms like pain, difficulty retracting the foreskin, or recurrent infections. At Lux Hospitals, we offer preputioplasty using advanced laser techniques that ensure minimal discomfort, quick healing, and excellent cosmetic outcomes — all performed in a safe, private, and NABH-accredited setting.",
    whatHead: "Preputioplasty Procedure & Benefits",
    treatments: [
      {
        title: "Laser Preputioplasty",
        description:
          "Laser-assisted preputioplasty involves making small incisions in the tight foreskin to widen it, improving mobility and eliminating symptoms. The laser ensures precise cuts, minimal bleeding, and no need for stitches in most cases."
      }
    ],
    fheading: "FAQs Section",
    faqs: [
      {
        faqTitle: "What is the difference between preputioplasty and circumcision?",
        faqAnswer:
          "Circumcision removes the foreskin completely, while preputioplasty preserves it by releasing the tight area through small incisions."
      },
      {
        faqTitle: "Who is a good candidate for preputioplasty?",
        faqAnswer:
          "Patients with mild or moderate phimosis who want to retain their foreskin are ideal candidates for preputioplasty."
      },
      {
        faqTitle: "Is the procedure painful?",
        faqAnswer:
          "No. It is done under local anesthesia, making the treatment painless. Discomfort after the procedure is minimal and temporary."
      },
      {
        faqTitle: "How long does it take to recover?",
        faqAnswer:
          "Most patients resume normal activities within 1–2 days. Complete healing typically occurs within a week."
      },
      {
        faqTitle: "Are laser techniques used for preputioplasty?",
        faqAnswer:
          "Yes. We use advanced laser technology for better precision, minimal bleeding, and faster recovery."
      },
      {
        faqTitle: "How do I book a consultation for preputioplasty?",
        faqAnswer:
          "Call 07969084442 or send us a message on WhatsApp to book your appointment with our experienced urologists."
      }
    ],
    footerComponent: {
      footerdesc:
        "Preserve. Heal. Recover. Get safe and effective foreskin-preserving treatment with advanced laser preputioplasty at Lux Hospitals, Hyderabad.",
      footernumber: "07969084442"
    }
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

    { label: "Technique Used", other: "Conventional Cutting", lux: "Laser / Stapler Method" },
    { label: "Pain & Scarring", other: "Painful with Stitches", lux: "Painless, No Stitches" },
    { label: "Recovery", other: "1–2 Weeks", lux: "Quick, 1–2 Days" },
    { label: "Insurance Accepted", other: "Rarely Cashless", lux: "All Insurances Accepted" },
    { label: "EMI Options", other: "Not Offered", lux: "0% EMI" },
    { label: "Safety Protocols", other: "Basic Sterilization", lux: "Plasma Sterilization + Monitoring" },
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
        <HospitalComparisond theading={content.tableContent[0].theading} rows={tableData} ConditionVideo={"/fistulatablevideo.mp4"} />
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
