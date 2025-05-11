"use client"; // Add this since you're using client-side components
import { use } from "react";
import dynamic from "next/dynamic";
import Header from "@/app/components/header/header";
import Hero from "../../components/hero/hero";
import Second from "../../components/second/second";
import HospitalLocation from "../../components/HospitalLocation/hospitallocations";
import FooterComponent from "../../components/footer/footer";
import services from "../../piles/pilesdata";

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
import { proctologyDoctorsData } from "../../../public/data";
import { ImOpt } from "react-icons/im";

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
  "external-hemorrhoids-doctor": {
    heading: "External Hemorrhoids Doctor",

    descList: [
      "Top Doctor for External Hemorrhoids",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],

    // services: services,
    locationsectionheading:
      "LUX Hospitals - External Hemorrhoids Doctor | Piles Experts | Advanced Care | Hemorrhoids Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
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
  "piles-laser-treatment-cost-in-hyderabad": {
    heading: "Piles Laser Treatment Cost in Hyderabad",
    descList: [
      "Top Doctor for Piles Laser Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Treatment | Laser Therapy | Affordable Piles Care | Advanced Minimally Invasive Solutions",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles Laser Treatment?",
    whatAreP:
      "Piles laser treatment is a modern, effective solution that uses laser energy to treat hemorrhoids with minimal pain and quick recovery. The procedure offers faster healing compared to traditional treatments and ensures minimal discomfort.",
    whatHead: "Cost Range for Piles Laser Treatment in Hyderabad:",
    treatments: [
      {
        title: "Piles Laser Treatment in Hyderabad",
        description:
          "The cost for Piles laser treatment typically ranges between ₹25,000 to ₹60,000 based on the severity of the condition, the type of procedure chosen, and the healthcare provider. The final cost is influenced by factors such as the surgeon's expertise, hospital facilities, and whether additional treatments are required.",
      },
    ],
    fheading: "FAQs on Piles Laser Treatment Cost",
    faqs: [
      {
        faqTitle: "How much does Piles laser treatment cost in Hyderabad?",
        faqAnswer:
          "The cost ranges from ₹25,000 to ₹60,000, depending on the complexity of the treatment and hospital charges.",
      },
      {
        faqTitle: "Are there any hidden costs for laser piles treatment?",
        faqAnswer:
          "No, Lux Hospitals provides transparent pricing, and all costs will be discussed upfront. We offer no hidden charges.",
      },
      {
        faqTitle: "Is Piles laser treatment covered under insurance?",
        faqAnswer:
          "Yes, most major insurance plans cover laser treatment for piles. Lux Hospitals assists with cashless insurance claims.",
      },
      {
        faqTitle: "Can I pay for the treatment in installments?",
        faqAnswer:
          "Yes, Lux Hospitals offers zero-interest EMI options for your convenience.",
      },
      {
        faqTitle: "Is laser treatment for piles worth the cost?",
        faqAnswer:
          "Yes, laser treatment provides quick recovery, minimal pain, and a higher success rate with fewer complications compared to traditional surgery.",
      },
      {
        faqTitle:
          "Will the treatment cost be higher if the condition is severe?",
        faqAnswer:
          "Yes, in some cases, if the piles are advanced, the cost may vary slightly depending on the additional procedures required. Contact us today to get a personalized quotation and learn more about your treatment options.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Affordable and effective laser piles treatment with expert care. Book your consultation today!",
      footernumber: "07969084448",
    },
  },
  "best-piles-laser-treatment-in-hyderabad": {
    heading: "Best Piles Laser Treatment in Hyderabad",
    descList: [
      "Top Doctor for Piles Laser Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Treatment | Laser Therapy | Hemorrhoids Care | Minimally Invasive Experts",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles Laser Treatment?",
    whatAreP:
      "Piles laser treatment is a modern, non-surgical approach that uses focused laser energy to shrink swollen veins (hemorrhoids). This technique is highly effective for both internal and external piles, offering minimal pain, faster healing, and better outcomes than conventional treatments.",
    whatHead: "Top 3 Laser Treatments for Piles at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A safe and effective method to shrink piles tissue with precision, causing minimal discomfort.",
      },
      {
        title: "Laser Coagulation Technique",
        description:
          "Ideal for external hemorrhoids, this technique seals off blood vessels and reduces swelling quickly.",
      },
      {
        title: "Laser + DGHAL Combination Therapy",
        description:
          "For severe or recurrent piles, a combined laser and Doppler-guided ligation offers a complete solution with minimal recurrence.",
      },
    ],
    fheading: "FAQs on Piles Treatment",
    faqs: [
      {
        faqTitle: "Is laser treatment effective for all types of piles?",
        faqAnswer:
          "Yes, laser treatment works well for internal and external hemorrhoids and is recommended for most patients.",
      },
      {
        faqTitle: "How long does the laser procedure take?",
        faqAnswer:
          "The procedure usually takes 30 minutes and patients can go home the same day.",
      },
      {
        faqTitle: "Is the laser treatment painful?",
        faqAnswer:
          "Laser treatment is minimally painful with very little post-operative discomfort compared to traditional surgery.",
      },
      {
        faqTitle: "Can piles come back after laser treatment?",
        faqAnswer:
          "With proper care and lifestyle changes, recurrence is rare. Lux Hospitals also provides preventive care plans.",
      },
      {
        faqTitle: "Is this treatment covered under insurance?",
        faqAnswer:
          "Yes, most insurance providers cover laser piles treatment. Lux Hospitals offers complete assistance with cashless claims.",
      },
      {
        faqTitle: "Who performs the piles laser treatment at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading Piles Specialist, has expertise in performing advanced laser procedures for long-term relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get fast, painless piles relief with the best laser treatment in Hyderabad. Book now!",
      footernumber: "07969084448",
    },
  },
  "best-piles-laser-surgery-in-hyderabad": {
    heading: "Best Piles Laser Surgery in Hyderabad",
    descList: [
      "Top Doctor for Piles Laser Surgery",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Surgery | Laser Hemorrhoid Surgery | Painless Piles Removal | Advanced Piles Treatment",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles Laser Surgery?",
    whatAreP:
      "Piles laser surgery is a modern, minimally invasive procedure that uses focused laser energy to shrink and eliminate hemorrhoids. It is highly effective for both internal and external piles, offering a quick, painless, and bloodless solution with minimal recovery time.",
    whatHead: "Top Benefits of Piles Laser Surgery at Lux Hospitals:",
    treatments: [
      {
        title: "Minimally Invasive Procedure",
        description:
          "No cuts or stitches—laser technology ensures minimal discomfort and quick healing.",
      },
      {
        title: "Short Procedure & Recovery Time",
        description:
          "The entire treatment takes about 30 minutes, with same-day discharge and faster recovery.",
      },
      {
        title: "Highly Effective & Safe",
        description:
          "Laser surgery offers permanent relief with a lower chance of recurrence.",
      },
    ],
    fheading: "FAQs on Piles Laser Surgery",
    faqs: [
      {
        faqTitle: "What is piles laser surgery?",
        faqAnswer:
          "It is a non-invasive method to treat hemorrhoids using high-precision laser technology.",
      },
      {
        faqTitle: "Is laser surgery better than conventional piles surgery?",
        faqAnswer:
          "Yes, laser surgery is less painful, has minimal bleeding, and allows quicker recovery.",
      },
      {
        faqTitle: "How long is the recovery period after piles laser surgery?",
        faqAnswer:
          "Most patients resume normal activities within 2–3 days post-surgery.",
      },
      {
        faqTitle: "Is piles laser surgery covered under insurance?",
        faqAnswer:
          "Yes, Lux Hospitals provides cashless insurance facilities for piles laser surgery.",
      },
      {
        faqTitle: "Are there any side effects of piles laser surgery?",
        faqAnswer:
          "Laser surgery has minimal risks and fewer complications compared to traditional surgery.",
      },
      {
        faqTitle: "Who performs the laser surgery at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy, our experienced Piles Surgery Specialist, performs the procedure with precision and care.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get advanced piles laser surgery in Hyderabad for fast, pain-free recovery today!",
      footernumber: "07969084448",
    },
  },
  "top-piles-surgeon-in-hyderabad": {
    heading: "Top Piles Surgeon in Hyderabad",
    descList: [
      "Top Surgeon for Piles Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Surgeon | Hemorrhoids Surgeon | Advanced Piles Care | Laser Surgery Experts",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "Who Is a Piles Surgeon?",
    whatAreP:
      "A piles surgeon is a medical professional specialized in performing surgeries to treat hemorrhoids. At Lux Hospitals, our top piles surgeons are experts in minimally invasive and laser-assisted surgical techniques, ensuring faster recovery, reduced pain, and effective long-term relief.",
    whatHead: "Top Surgical Treatments by Our Piles Surgeon at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A cutting-edge, minimally invasive laser procedure that shrinks piles without cutting, offering quicker healing and minimal pain.",
      },
      {
        title: "Stapled Hemorrhoidopexy (SH)",
        description:
          "An effective technique to treat prolapsed piles using surgical staples, reducing discomfort and downtime.",
      },
      {
        title: "Hemorrhoidectomy",
        description:
          "A conventional surgical approach for severe hemorrhoid cases, performed under expert care with modern pain management techniques.",
      },
    ],
    fheading: "FAQs on Piles Surgeon",
    faqs: [
      {
        faqTitle: "What does a piles surgeon do?",
        faqAnswer:
          "A piles surgeon treats hemorrhoids through surgical and laser-based procedures for permanent relief.",
      },
      {
        faqTitle: "When is piles surgery recommended?",
        faqAnswer:
          "Surgery is recommended for severe or recurring hemorrhoids that do not respond to medication or lifestyle changes.",
      },
      {
        faqTitle: "Are piles surgeries painful?",
        faqAnswer:
          "With modern techniques like laser surgery, the procedure is almost painless and ensures a faster recovery.",
      },
      {
        faqTitle: "Is piles surgery covered under insurance?",
        faqAnswer:
          "Yes, Lux Hospitals accepts all major insurance plans and provides cashless facilities for piles surgery.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for piles surgery?",
        faqAnswer:
          "Our expert surgeons, advanced infrastructure, and patient-first care ensure a smooth and successful recovery.",
      },
      {
        faqTitle: "Who is the top piles surgeon in Hyderabad?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading Piles Surgeon at Lux Hospitals, is known for her expertise in advanced laser and surgical treatments.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get treated by the top piles surgeon in Hyderabad with advanced laser surgery today!",
      footernumber: "07969084448",
    },
  },
  "best-external-hemorrhoids-doctors-hyderabad": {
    heading: "Best External Hemorrhoids Doctors in Hyderabad",
    descList: [
      "Top Doctor for External Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - External Hemorrhoids Doctor | Piles Experts | Advanced Care | Hemorrhoids Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
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
  "best-hemorrhoids-laser-surgery-hyderabad": {
    heading: "Best Hemorrhoids Laser Surgery in Hyderabad",
    descList: [
      "Top Doctor for Hemorrhoids Laser Surgery",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - External Hemorrhoids Surgery | Piles Experts | Advanced Care | Hemorrhoids Treatment",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is External Hemorrhoids Surgery?",
    whatAreP:
      "External hemorrhoids surgery involves minimally invasive procedures like laser treatment to remove swollen veins around the anus. It provides faster recovery, less pain, and long-term relief from discomfort.",
    whatHead:
      "Top Surgical Treatments for External Hemorrhoids at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A painless, precise procedure using laser energy to shrink external hemorrhoids, ensuring minimal bleeding and quick healing.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical technique that ties off blood supply to external hemorrhoids, reducing their size naturally.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair, ideal for severe hemorrhoids with minimal post-operative discomfort.",
      },
    ],
    fheading: "FAQs on External Hemorrhoids Surgery",
    faqs: [
      {
        faqTitle: "What causes the need for external hemorrhoids surgery?",
        faqAnswer:
          "Surgery is needed when hemorrhoids become large, painful, or persist despite medications and lifestyle changes.",
      },
      {
        faqTitle: "How is external hemorrhoids surgery performed?",
        faqAnswer:
          "Minimally invasive methods like laser surgery remove hemorrhoids with precision, ensuring faster recovery and less pain.",
      },
      {
        faqTitle: "When should I consider external hemorrhoids surgery?",
        faqAnswer:
          "If hemorrhoids cause severe pain, bleeding, or discomfort, consult a specialist for the best treatment plan.",
      },
      {
        faqTitle: "Does insurance cover external hemorrhoids surgery?",
        faqAnswer:
          "Most insurance plans cover surgical treatment. Contact your provider to confirm coverage details.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for external hemorrhoids surgery?",
        faqAnswer:
          "Lux Hospitals offer advanced laser surgery with expert colorectal specialists for safe and effective treatment.",
      },
      {
        faqTitle: "Who is the best doctor for external hemorrhoids surgery?",
        faqAnswer:
          "For the best care, consult Dr. Samhitha Reddy, a leading External Hemorrhoids Doctor at Lux Hospitals with 8 years of experience. She will guide you through the most effective treatment plan.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert external hemorrhoids surgery at Lux Hospitals for safe, effective, and lasting relief!",
      footernumber: "07969084448",
    },
  },
  "best-hemorrhoids-laser-treatment-hyderabad": {
    heading: "Best Hemorrhoids Laser Treatment in Hyderabad",
    descList: [
      "Top Doctor for Hemorrhoids Laser Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - External Hemorrhoids Treatment | Advanced Care | Laser Surgery | Hemorrhoids Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is External Hemorrhoids Treatment?",
    whatAreP:
      "External hemorrhoids treatment involves non-surgical and surgical methods to relieve pain, swelling, and discomfort caused by swollen veins around the anus. Lux Hospitals offer cutting-edge treatments for long-term relief.",
    whatHead: "Top External Hemorrhoids Treatments at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive procedure that uses laser energy to shrink hemorrhoids, ensuring a painless recovery.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical method that blocks blood flow to hemorrhoids, helping them shrink naturally.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair, ideal for treating severe cases effectively.",
      },
    ],
    fheading: "FAQs on External Hemorrhoids Treatment",
    faqs: [
      {
        faqTitle: "What causes external hemorrhoids?",
        faqAnswer:
          "External hemorrhoids develop due to prolonged sitting, chronic constipation, obesity, and straining during bowel movements.",
      },
      {
        faqTitle: "Is surgery necessary for external hemorrhoids treatment?",
        faqAnswer:
          "Not always. Mild cases can be treated with lifestyle changes, while severe cases may require laser surgery.",
      },
      {
        faqTitle: "When should I seek external hemorrhoids treatment?",
        faqAnswer:
          "If you have persistent pain, bleeding, or swelling, consult a specialist for the right treatment plan.",
      },
      {
        faqTitle: "Is external hemorrhoids treatment covered by insurance?",
        faqAnswer:
          "Yes, most insurance plans cover advanced hemorrhoid treatments. Contact your provider for details.",
      },
      {
        faqTitle:
          "Why choose Lux Hospitals for external hemorrhoids treatment?",
        faqAnswer:
          "Lux Hospitals provide state-of-the-art treatment options, expert specialists, and personalized care for effective relief.",
      },
      {
        faqTitle: "Who is the best doctor for external hemorrhoids treatment?",
        faqAnswer:
          "Dr. Samhitha Reddy, one of the top specialists at Lux Hospitals with 8 years of experience, will guide you with the best treatment approach.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Book an appointment today for expert external hemorrhoids treatment and lasting relief!",
      footernumber: "07969084448",
    },
  },
  "top-hemorrhoids-clinic-in-hyderabad": {
    heading: "Top Hemorrhoids Clinic in Hyderabad",
    descList: [
      "Top Clinic for Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Top Hemorrhoids Clinic | Piles Experts | Advanced Care | Laser Treatment Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Are Hemorrhoids?",
    whatAreP:
      "Hemorrhoids are swollen blood vessels in the rectum or anus that cause discomfort, itching, pain, or bleeding, especially during bowel movements. They can occur due to factors such as excessive straining, chronic constipation, prolonged sitting, obesity, or pregnancy. Hemorrhoids are classified as internal or external, depending on their location, and while they can be uncomfortable, they are treatable with various methods, including non-surgical and laser procedures.",
    whatHead: "Top 3 Advanced Hemorrhoids Treatments at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive laser treatment that precisely targets and shrinks hemorrhoids with minimal discomfort and faster healing.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical procedure that cuts off the blood flow to hemorrhoids, effectively shrinking them without external incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination approach offering both artery ligation and tissue repair—ideal for advanced hemorrhoid cases with less post-operative pain.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Clinic",
    faqs: [
      {
        faqTitle: "What are hemorrhoids and what causes them?",
        faqAnswer:
          "Hemorrhoids are swollen veins in the lower rectum or anus. They can be caused by straining during bowel movements, chronic constipation, sitting for long periods, or pregnancy.",
      },
      {
        faqTitle: "What are the symptoms of hemorrhoids?",
        faqAnswer:
          "Common symptoms include rectal pain, itching, bleeding during bowel movements, swelling around the anus, and discomfort while sitting.",
      },
      {
        faqTitle: "Can hemorrhoids be cured permanently?",
        faqAnswer:
          "Yes, with proper treatment such as laser therapy or surgical intervention, hemorrhoids can be permanently resolved. However, lifestyle changes are essential to prevent recurrence.",
      },
      {
        faqTitle: "Does insurance cover hemorrhoid treatment?",
        faqAnswer:
          "Yes, most treatments at our hemorrhoids clinic are covered under major insurance plans. Please confirm with your provider.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for your hemorrhoids Treatment?",
        faqAnswer:
          "Lux Hospitals offer personalized care, skilled specialists, cutting-edge procedures, and a patient-first approach to ensure the best outcomes.",
      },
      {
        faqTitle:
          "Who is the best doctor at Lux Hospitals for hemorrhoids Treatment?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading hemorrhoids Specialist at Lux Hospitals, specializes in advanced laser and non-surgical treatments. Visit us for expert care and lasting relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care at the top hemorrhoids clinic in Hyderabad for painless, advanced treatment today!",
      footernumber: "07969084448",
    },
  },
  "best-hemorrhoids-doctor-in-hyderabad": {
    heading: "Best Hemorrhoids Doctor in Hyderabad",
    descList: [
      "Top Doctor for Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Best Hemorrhoids Doctor | Piles Specialist | Advanced Care | Laser Treatment Expert",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What are Hemorrhoids?",
    whatAreP:
      "Hemorrhoids are swollen veins around the anus or in the lower rectum that can cause pain, itching, bleeding, and discomfort, especially during bowel movements. Factors such as straining, constipation, prolonged sitting, and pregnancy contribute to their formation. They can be internal or external and are treatable with various advanced methods, including laser treatments, ensuring a faster recovery and minimal discomfort.",
    whatHead:
      "Top 3 Treatments for Hemorrhoids by the Best Doctor at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A non-invasive, laser-based procedure designed to shrink hemorrhoids, offering a quick recovery time and minimal post-procedure pain.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical procedure that cuts off the blood supply to hemorrhoids, effectively shrinking them without the need for external incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination approach that targets both the arteries supplying hemorrhoids and rectal tissue repair, providing long-lasting relief with reduced pain.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Treatment with the Best Doctor",
    faqs: [
      {
        faqTitle: "What are hemorrhoids and what causes them?",
        faqAnswer:
          "Hemorrhoids are swollen veins in the rectum or anus caused by factors like excessive straining, constipation, prolonged sitting, obesity, and pregnancy.",
      },
      {
        faqTitle: "What are the symptoms of hemorrhoids?",
        faqAnswer:
          "Common symptoms include rectal pain, itching, bleeding during bowel movements, swelling around the anus, and discomfort while sitting.",
      },
      {
        faqTitle: "Can hemorrhoids be treated permanently?",
        faqAnswer:
          "Yes, with advanced treatments like laser therapy or surgery, hemorrhoids can be permanently treated. However, adopting a healthier lifestyle can help prevent recurrence.",
      },
      {
        faqTitle:
          "Why should I consult the best hemorrhoids doctor at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is an experienced specialist in treating hemorrhoids with advanced techniques, ensuring personalized care and effective results for all patients.",
      },
      {
        faqTitle: "Does insurance cover hemorrhoids treatment?",
        faqAnswer:
          "Yes, most treatments for hemorrhoids are covered under major insurance plans. Please confirm with your insurance provider for specific coverage details.",
      },
      {
        faqTitle:
          "Who is the best doctor at the Lux Hospitals for hemorrhoids Treatment?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading hemorrhoids Specialist at Lux Hospitals, specializes in advanced laser and non-surgical treatments. Visit us for expert care and lasting relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care from the best hemorrhoids doctor in Hyderabad for painless, advanced treatment today!",
      footernumber: "07969084448",
    },
  },
  "best-hemorrhoids-hospital-in-hyderabad": {
    heading: "Best Hemorrhoids Hospital in Hyderabad",
    descList: [
      "Top Hospital for Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Best Hemorrhoids Hospital | Piles Experts | Advanced Care | Laser Treatment Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What are Hemorrhoids?",
    whatAreP:
      "Hemorrhoids are swollen veins located in the rectum or anus, causing pain, itching, bleeding, and discomfort during bowel movements. They can develop due to factors such as prolonged sitting, chronic constipation, excessive straining, obesity, or pregnancy. Hemorrhoids can be internal or external, and they are treatable with advanced techniques, including non-surgical and laser-based procedures.",
    whatHead: "Top 3 Treatments for Hemorrhoids at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive laser procedure that targets and shrinks hemorrhoids with minimal pain and quicker recovery time.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical procedure that cuts off blood flow to hemorrhoids, reducing their size without external cuts.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair, ideal for advanced cases with minimal post-operative pain.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Treatment at the Best Hospital",
    faqs: [
      {
        faqTitle: "What are hemorrhoids and what causes them?",
        faqAnswer:
          "Hemorrhoids are swollen blood vessels around the anus or rectum caused by factors like excessive straining, chronic constipation, and prolonged sitting.",
      },
      {
        faqTitle: "What are the common symptoms of hemorrhoids?",
        faqAnswer:
          "Symptoms include pain, itching, bleeding during bowel movements, and swelling around the anus.",
      },
      {
        faqTitle: "Can hemorrhoids be permanently cured?",
        faqAnswer:
          "Yes, hemorrhoids can be permanently treated with advanced procedures like laser therapy or surgery. However, lifestyle changes are essential to prevent recurrence.",
      },
      {
        faqTitle: "Are non-surgical treatments available for hemorrhoids?",
        faqAnswer:
          "Yes, Lux Hospitals offers effective non-surgical treatments like laser therapy and Doppler-guided procedures.",
      },
      {
        faqTitle: "Why should I choose Lux Hospitals for hemorrhoid treatment?",
        faqAnswer:
          "Lux Hospitals offers expert care from leading specialists, cutting-edge treatments, and personalized services for effective and quick recovery.",
      },
      {
        faqTitle:
          "Does insurance cover hemorrhoid treatments at Lux Hospitals?",
        faqAnswer:
          "Yes, most health insurance plans cover hemorrhoid treatments at Lux Hospitals. Check with your provider for specific details.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care at the best hemorrhoids hospital in Hyderabad for painless, advanced treatment today!",
      footernumber: "07969084448",
    },
  },
  "best-hemorrhoids-operation-in-hyderabad": {
    heading: "Best Hemorrhoids Operation in Hyderabad",
    descList: [
      "Top Doctor for Hemorrhoids Operation",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Best Hemorrhoids Operation | Expert Piles Surgery | Advanced Care | Laser Treatment Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What are Hemorrhoids and When is Surgery Required?",
    whatAreP:
      "Hemorrhoids are swollen blood vessels in the rectum or anus that cause discomfort, pain, itching, and bleeding. While many cases can be treated with non-surgical methods, surgery may be needed for severe or recurrent hemorrhoids. The operation is designed to remove or shrink hemorrhoids for long-term relief.",
    whatHead: "Top 3 Hemorrhoids Operations at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive procedure where laser energy is used to shrink hemorrhoids, ensuring a quick recovery with minimal pain and no visible incisions.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-invasive surgical technique that cuts off blood flow to hemorrhoids, helping them shrink and resolve without the need for traditional incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination procedure that involves both artery ligation and rectal tissue repair, ideal for advanced hemorrhoid cases, ensuring minimal post-surgery discomfort.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Surgery",
    faqs: [
      {
        faqTitle:
          "What are hemorrhoids, and when should surgery be considered?",
        faqAnswer:
          "Hemorrhoids are swollen veins around the anus or rectum, causing discomfort and bleeding. Surgery is usually considered for severe cases that do not improve with non-surgical treatments.",
      },
      {
        faqTitle: "What symptoms indicate I need hemorrhoids surgery?",
        faqAnswer:
          "If you experience persistent pain, bleeding, or recurrent hemorrhoids despite using non-surgical treatments, surgery may be required for long-term relief.",
      },
      {
        faqTitle: "Is hemorrhoid surgery painful?",
        faqAnswer:
          "Advanced treatments like Laser Hemorrhoidoplasty ensure minimal discomfort during and after the procedure, with most patients returning to daily activities within a few days.",
      },
      {
        faqTitle:
          "What makes Lux Hospitals the best choice for hemorrhoids surgery?",
        faqAnswer:
          "Lux Hospitals is known for its expert surgeons, advanced minimally invasive procedures, and personalized care that ensure the best outcomes for hemorrhoids surgery.",
      },
      {
        faqTitle: "Does insurance cover hemorrhoids surgery?",
        faqAnswer:
          "Yes, most insurance providers cover hemorrhoids surgery. Please check with your insurance provider for the specific coverage details.",
      },
      {
        faqTitle:
          "Who is the best doctor at the Lux Hospitals for hemorrhoids Treatment ?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading hemorrhoids Specialist at Lux Hospitals, specializes in advanced laser and non-surgical treatments. Visit us for expert care and lasting relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care for hemorrhoids surgery at Lux Hospitals today!",
      footernumber: "07969084448",
    },
  },
  "hemorrhoids-specialist-in-hyderabad": {
    heading: "Hemorrhoids Specialist in Hyderabad",
    descList: [
      "Top Specialist for Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Hemorrhoids Specialist | Piles Experts | Advanced Care | Laser Treatment Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatments at Lux Hospitals",
      },
    ],
    whatAreH: "What are Hemorrhoids?",
    whatAreP:
      "Hemorrhoids are swollen veins around the anus or rectum that can cause itching, pain, bleeding, and discomfort, especially during bowel movements. These can be caused by factors such as chronic constipation, excessive straining, prolonged sitting, or pregnancy. Hemorrhoids are either internal or external and can be effectively treated by a skilled hemorrhoids specialist through both non-surgical and surgical methods.",
    whatHead: "Top 3 Treatments for Hemorrhoids at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive treatment that uses laser technology to shrink hemorrhoids with minimal discomfort and faster recovery.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical method that cuts off the blood supply to hemorrhoids, reducing their size and discomfort without external incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair, ideal for advanced cases, providing excellent results with minimal post-operative discomfort.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Specialist in Hyderabad",
    faqs: [
      {
        faqTitle: "What causes hemorrhoids, and who should I consult?",
        faqAnswer:
          "Hemorrhoids are caused by factors like straining during bowel movements, chronic constipation, pregnancy, and obesity. You should consult a hemorrhoids specialist for the best treatment options.",
      },
      {
        faqTitle:
          "What are the symptoms that require seeing a hemorrhoids specialist?",
        faqAnswer:
          "Symptoms like pain, bleeding, itching, and swelling around the anus or rectum may require a consultation with a hemorrhoids specialist for proper diagnosis and treatment.",
      },
      {
        faqTitle: "Can hemorrhoids be treated without surgery?",
        faqAnswer:
          "Yes, many cases of hemorrhoids can be treated with non-surgical methods, including laser therapy and other minimally invasive techniques, offered by a hemorrhoids specialist.",
      },
      {
        faqTitle: "How long does it take to recover from hemorrhoid treatment?",
        faqAnswer:
          "Recovery time varies depending on the procedure, but most patients recover quickly, especially with minimally invasive treatments like laser therapy.",
      },
      {
        faqTitle:
          "Why should I choose a hemorrhoids specialist at Lux Hospitals?",
        faqAnswer:
          "Lux Hospitals offers expert care from experienced specialists, advanced treatment options, and a patient-first approach, ensuring the best outcomes for hemorrhoids treatment.",
      },
      {
        faqTitle:
          "Does insurance cover hemorrhoid treatments at Lux Hospitals?",
        faqAnswer:
          "Yes, most insurance plans cover hemorrhoid treatments. Please confirm with your provider for specific details.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care from the leading hemorrhoids specialist in Hyderabad for advanced, pain-free treatment today!",
      footernumber: "07969084448",
    },
  },
  "top-hemorrhoids-surgeon-in-hyderabad": {
    heading: "Top Hemorrhoids Surgeon in Hyderabad",
    descList: [
      "Top Surgeon for Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Top Hemorrhoids Surgeon | Expert Piles Surgeon | Advanced Care | Laser Treatment Specialist",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatments at Lux Hospitals",
      },
    ],
    whatAreH: "What are Hemorrhoids and When is Surgery Needed?",
    whatAreP:
      "Hemorrhoids are swollen veins in the anus or rectum that cause pain, itching, bleeding, and discomfort, particularly during bowel movements. While most cases can be treated with non-surgical methods, surgery may be necessary for advanced or recurrent hemorrhoids. A skilled hemorrhoids surgeon can remove or shrink hemorrhoids through minimally invasive techniques, ensuring long-lasting relief with minimal discomfort.",
    whatHead: "Top 3 Hemorrhoids Surgery Options at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive procedure that uses laser energy to shrink and remove hemorrhoids. It ensures quicker recovery and less pain compared to traditional methods.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical technique where the blood supply to the hemorrhoids is cut off using Doppler ultrasound, allowing them to shrink and resolve without the need for incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair, ideal for advanced cases of hemorrhoids. This procedure provides excellent results with minimal post-operative discomfort.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Surgery by a Top Surgeon",
    faqs: [
      {
        faqTitle: "What causes hemorrhoids, and when should I see a surgeon?",
        faqAnswer:
          "Hemorrhoids are caused by straining, chronic constipation, obesity, or prolonged sitting. You should see a surgeon if you experience severe symptoms like persistent bleeding or pain that does not improve with home treatments.",
      },
      {
        faqTitle: "Is hemorrhoid surgery painful?",
        faqAnswer:
          "With modern techniques such as laser surgery, hemorrhoid removal is relatively pain-free. Most patients experience minimal discomfort and recover quickly.",
      },
      {
        faqTitle: "How long is the recovery after hemorrhoid surgery?",
        faqAnswer:
          "Recovery time is minimal, especially with advanced methods like laser surgery. Many patients resume normal activities within a few days after surgery.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for hemorrhoid surgery?",
        faqAnswer:
          "Lux Hospitals offers advanced, minimally invasive treatments, skilled surgeons, and personalized care to ensure the best results and quick recovery for hemorrhoid patients.",
      },
      {
        faqTitle: "Does insurance cover hemorrhoid surgery?",
        faqAnswer:
          "Yes, most insurance plans cover hemorrhoid surgeries. You can confirm with your insurance provider for detailed coverage information.",
      },
      {
        faqTitle:
          "Who is the best doctor at Lux Hospitals for hemorrhoids treatment?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading Piles Specialist at Lux Hospitals, specializes in advanced laser and non-surgical treatments. Visit us for expert care and lasting relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care from the top hemorrhoids surgeon in Hyderabad for a pain-free, advanced treatment today!",
      footernumber: "07969084448",
    },
  },
  "hemorrhoids-laser-surgery-cost-hyderabad": {
    heading: "Hemorrhoids Laser Surgery Cost in Hyderabad",
    descList: [
      "Top Doctor for Hemorrhoids Laser Surgery",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Hemorrhoids Laser Surgery | Expert Piles Surgeons | Advanced Care | Affordable Treatment",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatments at Lux Hospitals",
      },
    ],
    whatAreH: "What is Hemorrhoids Laser Surgery?",
    whatAreP:
      "Hemorrhoids laser surgery is a minimally invasive procedure that uses laser energy to shrink or remove hemorrhoids, offering faster recovery times and minimal discomfort. This treatment is highly effective for patients with both internal and external hemorrhoids. It eliminates the need for traditional, painful surgical methods and is the preferred option for many due to its precision and reduced post-operative pain.",
    whatHead: "Cost of Hemorrhoids Laser Surgery in Hyderabad",
    treatments: [
      {
        title: "Severity of Hemorrhoids",
        description:
          "More advanced cases may require additional procedures, leading to higher costs.",
      },
      {
        title: "Type of Treatment",
        description:
          "Different laser treatments such as Laser Hemorrhoidoplasty (LHP) or Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL) may have different costs.",
      },
      {
        title: "Hospital Facilities",
        description:
          "The level of care, equipment, and expertise available at the hospital can influence the price.",
      },
      {
        title: "Doctor’s Expertise",
        description:
          "Experienced surgeons may charge a premium for their services.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Laser Surgery Cost in Hyderabad",
    faqs: [
      {
        faqTitle: "What is the cost of hemorrhoids laser surgery in Hyderabad?",
        faqAnswer:
          "The cost typically ranges from ₹30,000 to ₹70,000 depending on factors such as the severity of hemorrhoids, type of procedure, and the hospital's infrastructure.",
      },
      {
        faqTitle: "Is laser surgery covered by insurance?",
        faqAnswer:
          "Yes, many health insurance plans cover laser surgery for hemorrhoids. You should confirm the details with your insurance provider.",
      },
      {
        faqTitle:
          "What are hemorrhoids, and when should surgery be considered?",
        faqAnswer:
          "Hemorrhoids are swollen veins around the anus or rectum, causing discomfort and bleeding. Surgery is usually considered for severe cases that do not improve with non-surgical treatments.",
      },
      {
        faqTitle: "Is hemorrhoid surgery painful?",
        faqAnswer:
          "Advanced treatments like Laser Hemorrhoidoplasty ensure minimal discomfort during and after the procedure, with most patients returning to daily activities within a few days.",
      },
      {
        faqTitle:
          "Why choose Lux Hospitals for affordable hemorrhoid laser surgery?",
        faqAnswer:
          "Lux Hospitals provides advanced laser treatments with skilled surgeons, offering high-quality care at an affordable price, with financing options such as zero-interest EMIs.",
      },
      {
        faqTitle:
          "Who is the best doctor at Lux Hospitals for hemorrhoids treatment?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading Piles Specialist at Lux Hospitals, specializes in advanced laser and non-surgical treatments. Visit us for expert care and lasting relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get affordable, expert care with hemorrhoids laser surgery at Lux Hospitals for a pain-free recovery today!",
      footernumber: "07969084448",
    },
  },
  "hemorrhoids-treatment-in-hyderabad": {
    heading: "Hemorrhoids Treatment in Hyderabad",
    descList: [
      "Top Doctor for Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Hemorrhoids Treatment | Expert Piles Specialists | Advanced Care | Laser Treatment Options",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What is Hemorrhoids Treatment?",
    whatAreP:
      "Hemorrhoids treatment involves a variety of options depending on the severity of the condition. For mild cases, lifestyle changes and over-the-counter treatments like creams and suppositories may help. However, for more advanced or chronic hemorrhoids, medical interventions such as laser therapy, surgery, or minimally invasive procedures are often necessary.\nAt Lux Hospitals, we offer comprehensive care for hemorrhoids, including non-surgical and surgical treatments, ensuring a comfortable and effective recovery for our patients.",
    whatHead: "Top 3 Hemorrhoids Treatment Options at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A non-invasive, advanced treatment where a laser is used to shrink hemorrhoids, minimizing pain and providing quick recovery times.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical method that cuts off the blood supply to hemorrhoids using Doppler ultrasound, causing the hemorrhoids to shrink and resolve without the need for incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "This procedure combines artery ligation with tissue repair, making it effective for advanced hemorrhoids while minimizing post-surgery discomfort.",
      },
    ],
    fheading: "FAQs on Hemorrhoids Treatment in Hyderabad",
    faqs: [
      {
        faqTitle: "What are hemorrhoids and what causes them?",
        faqAnswer:
          "Hemorrhoids are swollen veins around the anus or rectum, caused by excessive straining, chronic constipation, pregnancy, obesity, or prolonged sitting.",
      },
      {
        faqTitle: "What are the symptoms of hemorrhoids?",
        faqAnswer:
          "Symptoms include rectal pain, itching, swelling, and bleeding during bowel movements.",
      },
      {
        faqTitle: "How can hemorrhoids be treated?",
        faqAnswer:
          "Hemorrhoids can be treated through lifestyle changes, medications, or medical procedures like laser treatment, artery ligation, or surgical removal, depending on the severity.",
      },
      {
        faqTitle: "What should I expect during hemorrhoids treatment?",
        faqAnswer:
          "Most procedures are quick and minimally invasive. With advanced techniques like laser therapy, recovery is fast, and patients often return to their normal activities within a few days.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for hemorrhoids treatment?",
        faqAnswer:
          "Lux Hospitals provides comprehensive treatment with the latest technologies, skilled specialists, and a patient-first approach, ensuring effective relief from hemorrhoids.",
      },
      {
        faqTitle:
          "Who is the best doctor at the Lux Hospitals for hemorrhoids treatment?",
        faqAnswer:
          "Dr. Samhitha Reddy, our leading Piles Specialist at Lux Hospitals, specializes in advanced laser and non-surgical treatments. Visit us for expert care and lasting relief.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care for hemorrhoids at Lux Hospitals for advanced treatment and a pain-free recovery today!",
      footernumber: "07969084448",
    },
  },
  "best-internal-hemorrhoids-surgery-hyderabad": {
    heading: "Best Internal Hemorrhoids Surgery in Hyderabad",
    descList: [
      "Top Doctor for Internal Hemorrhoids Surgery",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Internal Hemorrhoids Surgery | Expert Piles Surgeons | Advanced Care | Laser Treatment",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What is Internal Hemorrhoids Surgery?",
    whatAreP:
      "Internal hemorrhoids surgery is a procedure designed to treat hemorrhoids that occur inside the rectum. These hemorrhoids can cause symptoms like bleeding, pain, and discomfort, especially during bowel movements. Internal hemorrhoids surgery is necessary when conservative treatments, such as lifestyle changes, creams, or medications, are ineffective. The procedure may involve surgical excision, laser treatment, or non-invasive methods like Doppler-guided hemorrhoidal artery ligation (DGHAL). These surgeries aim to provide long-lasting relief from hemorrhoid symptoms while minimizing post-operative pain and recovery time.",
    whatHead: "Top 3 Internal Hemorrhoids Surgery Options at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive procedure using laser technology to shrink and remove internal hemorrhoids, offering faster recovery with minimal pain.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical treatment that targets the blood vessels feeding the internal hemorrhoids, reducing their size by cutting off blood flow without any incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination procedure that ties off the hemorrhoidal arteries while repairing the rectal tissue, effective for advanced internal hemorrhoids with less post-surgery discomfort.",
      },
    ],
    fheading: "FAQs on Internal Hemorrhoids Surgery in Hyderabad",
    faqs: [
      {
        faqTitle: "What are internal hemorrhoids and how are they treated?",
        faqAnswer:
          "Internal hemorrhoids are swollen veins inside the rectum. They are treated through surgical options like laser therapy, DGHAL, or HAL-RAR, depending on their severity.",
      },
      {
        faqTitle:
          "What symptoms indicate the need for internal hemorrhoids surgery?",
        faqAnswer:
          "Symptoms include rectal bleeding, persistent pain, prolapse (when hemorrhoids protrude outside the anus), and discomfort during bowel movements.",
      },
      {
        faqTitle: "Is internal hemorrhoids surgery painful?",
        faqAnswer:
          "Modern surgical options like laser hemorrhoidoplasty and DGHAL are minimally invasive, causing less pain and allowing for faster recovery compared to traditional surgery.",
      },
      {
        faqTitle:
          "How long is the recovery after internal hemorrhoids surgery?",
        faqAnswer:
          "Recovery typically takes a few days, especially with minimally invasive treatments like laser surgery, allowing you to return to normal activities quickly.",
      },
      {
        faqTitle:
          "Is insurance coverage available for internal hemorrhoids surgery?",
        faqAnswer:
          "Yes, most insurance plans cover surgery for hemorrhoids. It is advisable to check with your insurance provider for details on coverage.",
      },
      {
        faqTitle: "Why choose Lux Hospitals for internal hemorrhoids surgery?",
        faqAnswer:
          "Lux Hospitals offers advanced laser and minimally invasive treatments, with skilled specialists ensuring effective, long-lasting relief from internal hemorrhoids with minimal downtime.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care for internal hemorrhoids surgery at Lux Hospitals for lasting relief and a quick recovery today!",
      footernumber: "07969084448",
    },
  },
  "best-internal-hemorrhoids-treatment-hyderabad": {
    heading: "Best Internal Hemorrhoids Treatment in Hyderabad",
    descList: [
      "Top Doctor for Internal Hemorrhoids Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Internal Hemorrhoids Treatment | Expert Piles Specialists | Advanced Care | Laser Treatment Options",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Hemorrhoids Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What is Internal Hemorrhoids Treatment?",
    whatAreP:
      "Internal hemorrhoids are swollen blood vessels inside the rectum, which can cause discomfort, bleeding, itching, and pain, especially during bowel movements. Treatment for internal hemorrhoids depends on the severity of the condition. For mild cases, lifestyle changes such as increased fiber intake and using over-the-counter treatments might be enough. However, for moderate to severe cases, more advanced treatments are necessary. At Lux Hospitals, we offer a range of treatments for internal hemorrhoids, including minimally invasive laser therapy and advanced surgical options, ensuring a comfortable and quick recovery for our patients.",
    whatHead: "Top 3 Internal Hemorrhoids Treatment Options at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A non-invasive procedure using laser technology to shrink and remove internal hemorrhoids, offering a faster recovery time and minimal discomfort compared to traditional surgery.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A highly effective, non-surgical treatment that cuts off the blood supply to the hemorrhoids, causing them to shrink and resolve without the need for incisions.",
      },
      {
        title: "Hemorrhoidal Artery Ligation with Recto-Anal Repair (HAL-RAR)",
        description:
          "A combination of artery ligation and rectal tissue repair that is ideal for more advanced internal hemorrhoids while minimizing post-operative pain and speeding up recovery.",
      },
    ],
    fheading: "FAQs on Internal Hemorrhoids Treatment in Hyderabad",
    faqs: [
      {
        faqTitle: "What are internal hemorrhoids and how are they treated?",
        faqAnswer:
          "Internal hemorrhoids are swollen veins inside the rectum. They can be treated with minimally invasive treatments such as laser therapy, Doppler-guided artery ligation, or surgical procedures like HAL-RAR.",
      },
      {
        faqTitle:
          "How can I tell if I need treatment for internal hemorrhoids?",
        faqAnswer:
          "If you experience bleeding, persistent pain, or discomfort during bowel movements, you should consult with a hemorrhoids specialist to evaluate the need for treatment.",
      },
      {
        faqTitle: "Is internal hemorrhoids treatment painful?",
        faqAnswer:
          "Modern treatments such as laser therapy and DGHAL are minimally invasive, causing little to no pain and allowing for a quicker recovery compared to traditional surgical options.",
      },
      {
        faqTitle:
          "What is the recovery time for internal hemorrhoids treatment?",
        faqAnswer:
          "Recovery time depends on the procedure used. Non-invasive treatments like laser hemorrhoidoplasty typically have a shorter recovery time, often allowing patients to return to normal activities within a few days.",
      },
      {
        faqTitle: "Does insurance cover internal hemorrhoids treatment?",
        faqAnswer:
          "Yes, most insurance plans cover treatments for internal hemorrhoids. Be sure to check with your provider for coverage details.",
      },
      {
        faqTitle:
          "Why should I choose Lux Hospitals for internal hemorrhoids treatment?",
        faqAnswer:
          "Lux Hospitals offers personalized care, advanced treatments, and expert specialists to ensure effective, lasting relief from internal hemorrhoids with minimal discomfort.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Get expert care for internal hemorrhoids treatment at Lux Hospitals for fast recovery and lasting relief today!",
      footernumber: "07969084448",
    },
  },
  "top-piles-clinic-in-hyderabad": {
    heading: "Top Piles Clinic in Hyderabad",
    descList: [
      "Top Clinic for Piles Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals - Piles Clinic | Hemorrhoids Experts | Advanced Care | Laser Treatment Specialists",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus that can cause pain, bleeding, itching, or discomfort—especially during bowel movements. They are commonly caused by factors such as chronic constipation, prolonged sitting, straining, obesity, or pregnancy. Piles can be internal or external, and effective treatment depends on the type and severity. Lux Hospitals offers cutting-edge, non-surgical, and laser-assisted treatments that ensure minimal pain and faster recovery.",
    whatHead: "Top 3 Piles Treatments at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A minimally invasive laser procedure to shrink piles without cuts or stitches, ensuring quick healing and minimal discomfort.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical method that cuts off the blood flow to the piles, causing them to shrink naturally without external incisions.",
      },
      {
        title: "Stapled Hemorrhoidopexy (SH)",
        description:
          "A surgical procedure that repositions and staples the affected tissues, offering effective relief in advanced cases.",
      },
    ],
    fheading: "FAQs on Piles Clinic",
    faqs: [
      {
        faqTitle: "What causes piles?",
        faqAnswer:
          "Piles are commonly caused by prolonged straining during bowel movements, chronic constipation, obesity, or sitting for long periods.",
      },
      {
        faqTitle: "What are the symptoms of piles?",
        faqAnswer:
          "Symptoms include bleeding during bowel movements, itching, pain, swelling around the anus, and discomfort while sitting.",
      },
      {
        faqTitle: "Are piles curable without surgery?",
        faqAnswer:
          "Yes, early-stage piles can be treated using non-surgical methods like laser treatment or medication.",
      },
      {
        faqTitle: "Is laser treatment for piles safe?",
        faqAnswer:
          "Yes, laser piles treatment is safe, precise, and has faster recovery compared to traditional surgery.",
      },
      {
        faqTitle: "Does insurance cover piles treatment?",
        faqAnswer:
          "Most insurance plans cover piles treatment. Lux Hospitals accepts all major insurance for your convenience.",
      },
      {
        faqTitle: "Who is the best doctor for piles at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy, the leading Piles Specialist at Lux Hospitals, is known for her expertise in advanced laser treatments and personalized care.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Book your consultation at the top piles clinic in Hyderabad for fast, painless relief today!",
      footernumber: "07969084448",
    },
  },
  "best-piles-doctor-in-hyderabad": {
    heading: "Best Piles Doctor in Hyderabad",
    descList: [
      "Top Doctor for Piles Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Doctor | Hemorrhoids Specialist | Laser Piles Treatment | Advanced Proctology Care",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus that can cause pain, bleeding, itching, or discomfort—especially during bowel movements. They are commonly caused by factors such as chronic constipation, prolonged sitting, straining, obesity, or pregnancy. Piles can be internal or external, and effective treatment depends on the type and severity. Lux Hospitals offers cutting-edge, non-surgical, and laser-assisted treatments that ensure minimal pain and faster recovery.",
    whatHead:
      "Top 3 Treatments Offered by the Best Piles Doctor at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A modern, minimally invasive laser procedure for piles with minimal pain and fast recovery.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A safe, non-surgical method that reduces piles by cutting off their blood supply.",
      },
      {
        title: "Stapled Hemorrhoidopexy (SH)",
        description:
          "Effective for severe piles, this surgery repositions prolapsed tissues using a stapling device.",
      },
    ],
    fheading: "FAQs on Piles Doctor",
    faqs: [
      {
        faqTitle: "What are hemorrhoids and what causes them?",
        faqAnswer:
          "Hemorrhoids are swollen veins in the rectum or anus caused by factors like excessive straining, constipation, prolonged sitting, obesity, and pregnancy.",
      },
      {
        faqTitle: "What are the symptoms of hemorrhoids?",
        faqAnswer:
          "Common symptoms include rectal pain, itching, bleeding during bowel movements, swelling around the anus, and discomfort while sitting.",
      },
      {
        faqTitle: "Can a piles doctor treat piles without surgery?",
        faqAnswer:
          "Yes, early-stage piles can often be managed through medications and laser treatments without surgery.",
      },
      {
        faqTitle: "How do I know if I need surgery for piles?",
        faqAnswer:
          "If your piles are advanced or non-responsive to non-surgical methods, your piles doctor may recommend a minimally invasive surgery.",
      },
      {
        faqTitle:
          "Does insurance cover consultation and treatment by a piles doctor?",
        faqAnswer:
          "Yes, most insurance plans cover piles consultations and treatments. Check with your provider or hospital team for assistance.",
      },
      {
        faqTitle: "Who is the best piles doctor at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is the leading piles doctor at Lux Hospitals, known for her expertise in laser procedures and compassionate patient care.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Consult the best piles doctor in Hyderabad today for painless and advanced treatment!",
      footernumber: "07969084448",
    },
  },
  "best-piles-hospital-in-hyderabad": {
    heading: "Best Piles Hospital in Hyderabad",
    descList: [
      "Top Hospital for Piles Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Hospital | Hemorrhoids Specialists | Laser Treatment Experts | Advanced Piles Care",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus that can cause pain, bleeding, itching, or discomfort—especially during bowel movements. They are commonly caused by factors such as chronic constipation, prolonged sitting, straining, obesity, or pregnancy. Piles can be internal or external, and effective treatment depends on the type and severity. Lux Hospitals offers cutting-edge, non-surgical, and laser-assisted treatments that ensure minimal pain and faster recovery.",
    whatHead: "Top 3 Piles Treatments at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A cutting-edge, minimally invasive laser treatment to shrink piles with minimal pain and downtime.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "A non-surgical technique to cut off blood flow to hemorrhoids, leading to effective relief.",
      },
      {
        title: "Stapled Hemorrhoidopexy (SH)",
        description:
          "A surgical option ideal for prolapsed hemorrhoids, offering quicker healing and less postoperative pain.",
      },
    ],
    fheading: "FAQs on Piles Hospital",
    faqs: [
      {
        faqTitle: "What services are offered at a piles hospital?",
        faqAnswer:
          "A piles hospital offers diagnosis, laser and non-surgical treatments, dietary advice, and surgical options if needed.",
      },
      {
        faqTitle: "Why choose Lux Hospitals as the best piles hospital?",
        faqAnswer:
          "We offer advanced treatments, experienced specialists, same-day discharge, and complete insurance support.",
      },
      {
        faqTitle: "Is laser treatment available at Lux Hospitals?",
        faqAnswer:
          "Yes, we provide advanced laser procedures for both internal and external hemorrhoids.",
      },
      {
        faqTitle: "How long is the recovery after piles treatment?",
        faqAnswer:
          "Most patients return to normal activities within 2–3 days after minimally invasive treatments.",
      },
      {
        faqTitle:
          "Is insurance accepted at Lux Hospitals for piles procedures?",
        faqAnswer:
          "Yes, we accept all major insurance policies and offer cashless facilities.",
      },
      {
        faqTitle: "Who is the lead specialist at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy is the leading piles specialist, known for expertise in laser and non-surgical treatments.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Visit the best piles hospital in Hyderabad for painless, advanced treatment and expert care!",
      footernumber: "07969084448",
    },
  },
  "best-piles-operation-in-hyderabad": {
    heading: "Best Piles Operation in Hyderabad",
    descList: [
      "Top Doctor for Piles Operation",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Operation | Piles Specialists | Laser Surgery Experts | Advanced Piles Care",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus that can cause pain, bleeding, itching, or discomfort—especially during bowel movements. They are commonly caused by factors such as chronic constipation, prolonged sitting, straining, obesity, or pregnancy. Piles can be internal or external, and effective treatment depends on the type and severity. Lux Hospitals offers cutting-edge, non-surgical, and laser-assisted treatments that ensure minimal pain and faster recovery.",
    whatHead: "Top 3 Piles Operations at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A non-invasive, laser-based procedure that shrinks hemorrhoids with minimal bleeding and faster healing.",
      },
      {
        title: "Stapled Hemorrhoidopexy (SH)",
        description:
          "A surgical method ideal for prolapsed piles, using a stapling device to reposition and remove hemorrhoidal tissue.",
      },
      {
        title: "Conventional Hemorrhoidectomy",
        description:
          "In severe cases, traditional surgical removal is performed with precision and modern techniques for effective relief.",
      },
    ],
    fheading: "FAQs on Piles Operation",
    faqs: [
      {
        faqTitle: "When is a piles operation necessary?",
        faqAnswer:
          "Surgery is recommended when hemorrhoids are large, prolapsed, or don't respond to non-surgical treatments.",
      },
      {
        faqTitle: "Is piles operation painful?",
        faqAnswer:
          "With modern techniques like laser surgery, piles operations at Lux Hospitals are minimally painful and have quick recovery.",
      },
      {
        faqTitle: "What is the recovery time after piles operation?",
        faqAnswer:
          "Most patients can resume normal activities within 2–3 days, depending on the procedure.",
      },
      {
        faqTitle: "Is laser surgery better than traditional piles operation?",
        faqAnswer:
          "Yes, laser surgery offers less pain, no cuts, minimal bleeding, and quicker healing.",
      },
      {
        faqTitle: "Does insurance cover piles surgery at Lux Hospitals?",
        faqAnswer:
          "Yes, all major insurance plans are accepted with cashless options available.",
      },
      {
        faqTitle: "Who performs the piles operation at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy, our expert Piles Surgeon, performs all advanced procedures with utmost care and precision.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Book your piles operation at Lux Hospitals and experience painless recovery with expert care!",
      footernumber: "07969084448",
    },
  },
  "piles-specialist-in-hyderabad": {
    heading: "Piles Specialist in Hyderabad",
    descList: [
      "Top Specialist for Piles Treatment",
      "Laser + Harmonic Treatment for Quick Relief",
      "15-Min Daycare Procedure, No Cuts",
      "No Pain. No Recurrence",
      "100% Cure with Advanced Laser",
      "All Insurances Accepted (Cashless)",
      "0% EMI | 10,000+ Patients Treated",
    ],
    locationsectionheading:
      "LUX Hospitals – Piles Specialist | Hemorrhoids Expert | Advanced Piles Clinic | Laser Treatment Center",
    // doctors: proctologyDoctorsData,
    doctors: [
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Samhitha-Reddy-2.webp",
        name: "Dr. Samhitha Reddy",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:8 years",
        description:
          "Dr. Samhitha Reddy is a skilled Proctologist and Laparoscopic Surgeon experienced in treating colorectal and anorectal conditions. Trained at Osmania Hospital, she worked with top surgeons in India. She treated 5,000+ patients with 99% success and holds fellowships in FMAS, Colorectal, and MIS.",
      },
      {
        url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Abhishek-Katha-2.webp",
        name: "Dr Abhishek Katha",
        qualification: "MBBS, MS, FMAS, FISCP, DMAS",
        designation: "Piles Specialist",
        experience: "Experieance:9 years",
        description:
          "Dr. Abhishek Katha, an experienced General and Laparoscopic Surgeon, specialises in hernia, gallbladder, appendix, cyst, lipoma, and corn surgeries using minimally invasive methods. A former Apollo surgeon, he holds an FMAS fellowship in laparoscopic care.",
        // image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Piles Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Is Piles?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen and inflamed veins in the rectum or anus that can cause pain, bleeding, itching, or discomfort—especially during bowel movements. They are commonly caused by factors such as chronic constipation, prolonged sitting, straining, obesity, or pregnancy. Piles can be internal or external, and effective treatment depends on the type and severity. Lux Hospitals offers cutting-edge, non-surgical, and laser-assisted treatments that ensure minimal pain and faster recovery.",
    whatHead: "Top Treatments by Our Piles Specialist at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP)",
        description:
          "A modern, non-surgical approach that uses laser energy to shrink piles with minimal pain and faster recovery.",
      },
      {
        title: "Doppler-Guided Hemorrhoidal Artery Ligation (DGHAL)",
        description:
          "An advanced technique to cut off blood supply to piles without incisions, promoting natural shrinkage.",
      },
      {
        title: "Stapled Hemorrhoidopexy (SH)",
        description:
          "Ideal for prolapsed piles, this surgical technique uses staples to reposition and remove piles tissue effectively.",
      },
    ],
    fheading: "FAQs on Piles Specialist",
    faqs: [
      {
        faqTitle: "When is a piles operation necessary?",
        faqAnswer:
          "Surgery is recommended when hemorrhoids are large, prolapsed, or don't respond to non-surgical treatments.",
      },
      {
        faqTitle: "When should I see a piles specialist?",
        faqAnswer:
          "If you experience pain, bleeding, or swelling around the anal area, it’s time to consult a piles specialist.",
      },
      {
        faqTitle: "What is the recovery time after piles operation?",
        faqAnswer:
          "Most patients can resume normal activities within 2–3 days, depending on the procedure.",
      },
      {
        faqTitle: "Is laser surgery better than traditional piles operation?",
        faqAnswer:
          "Yes, laser surgery offers less pain, no cuts, minimal bleeding, and quicker healing.",
      },
      {
        faqTitle: "Does insurance cover piles surgery at Lux Hospitals?",
        faqAnswer:
          "Yes, all major insurance plans are accepted with cashless options available.",
      },
      {
        faqTitle: "Who performs the piles operation at Lux Hospitals?",
        faqAnswer:
          "Dr. Samhitha Reddy, our expert Piles Surgeon, performs all advanced procedures with utmost care and precision.",
      },
    ],
    footerComponent: {
      footerdesc:
        "Book a consultation with the best piles specialist in Hyderabad for pain-free and expert care today!",
      footernumber: "07969084448",
    },
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
    
  { label: "Treatment Type",other: "Open Surgery",lux: "Laser + Harmonic"},
  { label: "Recovery Time", other: "7–10 Days", lux: "Same Day" },
  { label: "Pain & Bleeding", other: "Painful with Bleeding", lux: "Painless & Bloodless" },
  { label: "Insurance & EMI", other: "Not Always Cashless", lux: "All Insurances + 0% EMI" },
  { label: "Room Type", other: "General / Shared", lux: "Private Suite" },
  { label: "Cost Transparency", other: "Variable & Hidden Costs", lux: "Fixed & Transparent" },
];

  return (
    <>
      <Header 
            PhoneNumber={"07969084448"}
            mobilectatext={"Call Now"}
            />
      <Hero heading={content.heading} descList={content.descList} />
      <Second services={services} />
      {content.locationsectionheading && (
        <HospitalLocation
          locationsectionheading={content.locationsectionheading}
        />
      )}
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
        <HospitalComparisond theading={content.tableContent[0].theading} rows={tableData} />
      )}
      <Accreditations />
      <VideoSection />
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
