"use client"; // Add this since you're using client-side components
import { use } from "react";
import dynamic from "next/dynamic";
import Header from "@/app/components/header/header";
import Hero from "../../components/hero/hero";
import Second from "../../components/second/second";
import HospitalLocation from "../../components/HospitalLocation/hospitallocations";
import FooterComponent from "../../components/footer/footer";
// import services from "../../piles/pilesdata";
import Gentstalks from "../../components/Gentstalks/gentstalks";
import FreeOpdSection from "../../components/FreeOPD/freeopd";
import gynecomastiaDoctorsData from "../../gynecomastia/gynecodata";
import MobileStickyFooter from "../../components/mobilsticky";
// import tableData from '../../fistula/fistuladata';

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
import { doctors } from "@/app/lib/doctordetailsdata";

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
  "best-liposuction-hospital-hyderabad": {
    heading: "Best Liposuction Hospital in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Liposuction",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Liposuction Surgery | Body Fat Removal | Laser & VASER Liposuction | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Liposuction at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Liposuction?",
    whatAreP: "Liposuction is a surgical procedure that removes unwanted fat from areas like the abdomen, thighs, arms, back, or chin. It helps contour your body and improve shape. At Lux Hospitals, we use the latest Laser and VASER technologies that melt and remove fat with minimal pain, no visible scars, and faster recovery. The surgery is done as a short, daycare procedure and results are seen in just a few weeks.",
    whatHead: "Top 4 Liposuction Procedures",
    treatments: [
      {
        title: "Laser Liposuction",
        description: "Uses laser energy to break down fat, tighten skin, and reduce swelling for a smoother result."
      },
      {
        title: "VASER Liposuction",
        description: "Ultrasound technology targets stubborn fat areas precisely, giving more definition and a sculpted look."
      },
      {
        title: "360° Body Contouring",
        description: "Fat is removed from multiple areas (like abdomen, sides, back) in one session to reshape the entire body."
      },
      {
        title: "Mini Liposuction",
        description: "Focused treatment for small fat pockets like under the chin, arms, or knees with fast results."
      }
    ],
    fheading: "FAQs on Liposuction",
    faqs: [
      {
        faqTitle: "How is liposuction performed at Lux Hospitals?",
        faqAnswer: "The procedure involves using laser or ultrasound energy to loosen fat, which is then removed through tiny openings. It's quick, safe, and minimally invasive."
      },
      {
        faqTitle: "Will there be pain or side effects?",
        faqAnswer: "No major pain. The surgery is done under anesthesia. You may feel mild soreness for a couple of days, which is easily manageable."
      },
      {
        faqTitle: "Will I have visible scars?",
        faqAnswer: "No. The cuts are very small (2–3 mm) and usually hidden in body folds. They heal quickly without leaving marks."
      },
      {
        faqTitle: "How fast is the recovery?",
        faqAnswer: "You can return to light work in 1–2 days. Full recovery takes around a week depending on the treated area."
      },
      {
        faqTitle: "Are the results permanent?",
        faqAnswer: "Yes. The removed fat does not come back. But healthy eating and regular activity help maintain your new shape."
      },
      {
        faqTitle: "What is the cost of liposuction?",
        faqAnswer: "Starts at ₹60,000. EMI options are available at 0% interest to make it affordable."
      },
      {
        faqTitle: "How can I book a consultation?",
        faqAnswer: "Call 07969084446 or chat with us on WhatsApp. Our team will schedule your consultation with a specialist."
      }
    ],
    footerComponent: {
      footerdesc: "Looking for a trusted liposuction hospital in Hyderabad? Lux Hospitals offers safe, advanced fat removal with visible results and expert care.",
      footernumber: "07969084446"
    }
  },
  "best-affordable-liposuction-hyderabad": {
    heading: "Best Affordable Liposuction in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Liposuction",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Liposuction | Expert Plastic Surgeons | Laser Fat Removal | VASER Body Sculpting | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Liposuction at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Liposuction?",
    whatAreP: "Liposuction is a cosmetic surgery that removes extra fat from areas like the stomach, thighs, arms, back, or chin. It helps you shape your body and improve your appearance. At Lux Hospitals, we offer affordable liposuction using the latest Laser and VASER technologies. The procedure is safe, scarless, and ensures faster recovery. The starting cost is ₹60,000, and the exact price depends on the area treated, the technique used, and your body type. EMI options at 0% interest are available to make it more affordable.",
    whatHead: "Top 4 Liposuction Procedures",
    treatments: [
      {
        title: "Laser Liposuction",
        description: "Uses laser energy to break down fat, tighten skin, and reduce swelling for a smoother result."
      },
      {
        title: "VASER Liposuction",
        description: "Ultrasound technology targets stubborn fat areas precisely, giving more definition and a sculpted look."
      },
      {
        title: "360° Body Contouring",
        description: "Fat is removed from multiple areas (like abdomen, sides, back) in one session to reshape the entire body."
      },
      {
        title: "Mini Liposuction",
        description: "Focused treatment for small fat pockets like under the chin, arms, or knees with fast results."
      }
    ],
    fheading: "FAQs on Liposuction",
    faqs: [
      {
        faqTitle: "What factors affect the cost of liposuction?",
        faqAnswer: "Cost depends on the area treated, type of technology used (Laser or VASER), and the number of sessions needed."
      },
      {
        faqTitle: "Is liposuction affordable at Lux Hospitals?",
        faqAnswer: "Yes. Our treatments start at ₹60,000, with transparent pricing and 0% interest EMI options."
      },
      {
        faqTitle: "Are there hidden charges?",
        faqAnswer: "No. The cost includes consultation, surgery, anesthesia, and post-op care — no surprise charges."
      },
      {
        faqTitle: "How long does the procedure take?",
        faqAnswer: "It typically takes 30 to 60 minutes depending on the treatment area and type of procedure."
      },
      {
        faqTitle: "Will the results last?",
        faqAnswer: "Yes. Once fat cells are removed, they don’t come back. Staying active and eating well helps maintain the results."
      },
      {
        faqTitle: "How do I know which liposuction plan is best for me?",
        faqAnswer: "Our doctors will assess your goals and body type to recommend the right procedure during your consultation."
      }
    ],
    footerComponent: {
      footerdesc: "Know your exact liposuction cost with a consultation at Lux Hospitals. Safe, affordable, and tailored to your body goals.",
      footernumber: "07969084446"
    }
  },
  "best-liposuction-doctors-hyderabad": {
    heading: "Best Liposuction Doctors in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Liposuction Doctors in Hyderabad",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Liposuction Doctors | Expert Plastic Surgeons | Laser Fat Removal | VASER Body Sculpting | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Liposuction at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What Does a Liposuction Doctor Do?",
    whatAreP: "A liposuction doctor is a qualified plastic surgeon who specializes in removing stubborn fat from specific areas of the body. At Lux Hospitals, our experienced liposuction doctors use modern tools like Laser and VASER liposuction to give patients safe, scar-free, and long-lasting results. Whether it’s fat around the tummy, arms, thighs, or chin — our doctors ensure the best results with minimal downtime and maximum comfort.",
    whatHead: "Top 4 Liposuction Procedures",
    treatments: [
      {
        title: "Laser Liposuction",
        description: "Our doctors use laser energy to melt fat and tighten the skin — giving smoother and faster results."
      },
      {
        title: "VASER Liposuction",
        description: "A precise ultrasound-based method that targets deep fat for sculpting and muscle definition."
      },
      {
        title: "360° Body Contouring",
        description: "Our doctors treat multiple areas (abdomen, sides, back) in one session for full-body shaping."
      },
      {
        title: "Mini Liposuction",
        description: "Small fat areas like under the chin or arms are treated with high precision for a natural look."
      }
    ],
    fheading: "FAQs on Liposuction Doctors",
    faqs: [
      {
        faqTitle: "Why choose a liposuction doctor at Lux Hospitals?",
        faqAnswer: "Our surgeons are highly trained and have performed hundreds of successful liposuction procedures with modern techniques."
      },
      {
        faqTitle: "Are the doctors certified and experienced?",
        faqAnswer: "Yes. Both Dr. Ram Kumar and Dr. Chandana Guduru are board-certified with over 25 years of combined experience in plastic and cosmetic surgery."
      },
      {
        faqTitle: "Can I choose which doctor will do my procedure?",
        faqAnswer: "Yes. During your consultation, you’ll meet the doctor and can freely discuss your expectations."
      },
      {
        faqTitle: "Is the treatment done in the same hospital?",
        faqAnswer: "Yes. All procedures are done at Lux Hospitals using advanced operation theatres and post-care facilities."
      },
      {
        faqTitle: "How long is the recovery after surgery?",
        faqAnswer: "Most patients go home the same day and return to work within 1–2 days depending on the area treated."
      },
      {
        faqTitle: "What is the consultation process?",
        faqAnswer: "Call 07969084446 to book a visit. Our doctors will assess your needs and suggest the best plan."
      }
    ],
    footerComponent: {
      footerdesc: "Get expert consultation from the best liposuction doctors in Hyderabad at Lux Hospitals. Safe treatment. Advanced technology. Trusted care.",
      footernumber: "07969084446"
    }
  },
  "best-body-contouring-in-hyderabad": {
    heading: "Best Body Contouring in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Body Shaping",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Body Contouring | Fat Removal & Skin Tightening | Laser + VASER Techniques | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Body Contouring at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Body Contouring?",
    whatAreP: "Body contouring is a cosmetic procedure that reshapes and tightens specific areas of the body by removing excess fat and improving body shape. At Lux Hospitals, we use advanced Laser and VASER liposuction technologies to remove stubborn fat safely and enhance body definition. It’s ideal for people who have lost weight or want better body proportions. Our techniques focus on both fat removal and skin tightening — with minimal downtime and no visible scars.",
    whatHead: "Top 4 Body Contouring Procedures",
    treatments: [
      {
        title: "360° Body Contouring",
        description: "Removes fat from multiple areas like the tummy, waist, and back to reshape the full body."
      },
      {
        title: "Laser Liposuction + Skin Tightening",
        description: "Melts fat and tightens skin, especially helpful for mild sagging in areas like the tummy or arms."
      },
      {
        title: "Arm and Thigh Sculpting",
        description: "Targets stubborn fat in upper arms and thighs to create a slimmer, toned shape."
      },
      {
        title: "Tummy + Flank Combo",
        description: "Removes fat from the abdomen and sides in one go for a flat, well-defined waist."
      }
    ],
    fheading: "FAQs on Body Contouring",
    faqs: [
      {
        faqTitle: "What is body contouring and who is it for?",
        faqAnswer: "It’s a reshaping procedure for people who want to remove fat or tighten skin after weight loss or pregnancy."
      },
      {
        faqTitle: "Is the procedure safe?",
        faqAnswer: "Yes. It’s done using Laser and VASER devices by experienced plastic surgeons in a sterile surgical setup."
      },
      {
        faqTitle: "Which body areas can be treated?",
        faqAnswer: "Common areas include the tummy, sides, arms, thighs, back, and under the chin."
      },
      {
        faqTitle: "How much time does it take to recover?",
        faqAnswer: "Most patients return to light work in 1–2 days. Full recovery usually takes a week."
      },
      {
        faqTitle: "What’s the starting price?",
        faqAnswer: "Starts at ₹60,000. Final cost depends on area and technique. We offer EMI options at 0% interest."
      },
      {
        faqTitle: "Will the results last long?",
        faqAnswer: "Yes. Once fat is removed, it doesn’t grow back. A healthy lifestyle helps maintain the results."
      }
    ],
    footerComponent: {
      footerdesc: "Get a confident, sculpted look with safe body contouring at Lux Hospitals. Book your consultation today.",
      footernumber: "07969084446"
    }
  },
  "affordable-double-chin-removal-hyderabad": {
    heading: "Affordable Double Chin Removal in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Double Chin Liposuction",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Double Chin Removal | Chin Liposuction | Laser Fat Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Double Chin Removal at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Double Chin Removal and How Much Does It Cost?",
    whatAreP: "Double chin removal is a cosmetic treatment that removes excess fat under the chin to improve jawline and facial definition. At Lux Hospitals, we use advanced Laser and VASER liposuction techniques that are minimally invasive, leave no visible scars, and have fast recovery. The starting cost is ₹60,000, and the total price may vary based on fat volume, skin type, and technique used. We also offer 0% interest EMI to make the treatment more affordable.",
    whatHead: "Top 4 Double Chin Procedures",
    treatments: [
      {
        title: "Laser Chin Liposuction",
        description: "Melts fat using laser energy while tightening the skin for a smooth, defined chin."
      },
      {
        title: "VASER Chin Sculpting",
        description: "Targets deeper fat layers with ultrasound for sharper jawlines and long-lasting results."
      },
      {
        title: "Mini Liposuction (Chin Focused)",
        description: "Quick, precise removal of small fat pockets with no visible scars or stitches."
      },
      {
        title: "Chin + Neck Combo Treatment",
        description: "Removes fat from the chin and tightens the neck area for a youthful appearance."
      }
    ],
    fheading: "FAQs on Double Chin Removal",
    faqs: [
      {
        faqTitle: "How much does double chin removal cost?",
        faqAnswer: "Starts at ₹60,000. Final pricing depends on fat volume and the technique chosen (Laser or VASER)."
      },
      {
        faqTitle: "Is the treatment painful or risky?",
        faqAnswer: "No. It’s done under anesthesia. Patients may feel mild soreness for a day or two."
      },
      {
        faqTitle: "How long does the procedure take?",
        faqAnswer: "Usually 30–45 minutes. It’s a daycare procedure — you can go home the same day."
      },
      {
        faqTitle: "When can I see visible results?",
        faqAnswer: "Initial results are visible within a week. Full results appear in 3–4 weeks as swelling reduces."
      },
      {
        faqTitle: "Will the fat come back?",
        faqAnswer: "No. Once removed, fat cells do not grow back. A healthy lifestyle keeps results long-lasting."
      },
      {
        faqTitle: "How do I know if I’m the right fit for this?",
        faqAnswer: "Our doctors will assess your chin structure and fat type and suggest the best procedure during consultation."
      }
    ],
    footerComponent: {
      footerdesc: "Know your exact double chin removal cost with a consultation at Lux Hospitals. Affordable. Safe. Visible Results.",
      footernumber: "07969084446"
    }
  },
  "best-double-chin-surgery-hyderabad": {
    heading: "Best Double Chin Surgery in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Double Chin Surgery",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Double Chin Surgery | Plastic Surgeons | Chin Liposuction | Laser Fat Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Double Chin Surgery at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Double Chin Surgery?",
    whatAreP: "Double chin surgery is a cosmetic procedure that removes extra fat and tightens skin under the chin. It improves facial definition and enhances your jawline. At Lux Hospitals, we use Laser and VASER liposuction technologies that are minimally invasive, scar-free, and offer faster healing. The treatment is done as a short daycare procedure under anesthesia. This surgery is ideal for anyone looking to get rid of a bulky or sagging chin with long-lasting, natural results.",
    whatHead: "Top 4 Double Chin Surgery Options",
    treatments: [
      {
        title: "Laser Chin Liposuction",
        description: "Uses laser energy to melt fat and tighten skin, improving chin definition."
      },
      {
        title: "VASER Chin Contouring",
        description: "Targets deep fat using ultrasound for sharper jawline results with minimal swelling."
      },
      {
        title: "Chin Liposuction + Skin Tightening",
        description: "Combines fat removal with mild skin tightening for better shape and structure."
      },
      {
        title: "Chin + Neck Combo Surgery",
        description: "Removes fat and tightens both chin and neck area for a complete lower face makeover."
      }
    ],
    fheading: "FAQs on Double Chin Surgery",
    faqs: [
      {
        faqTitle: "Who should consider double chin surgery?",
        faqAnswer: "If you have excess chin fat, sagging skin, or a less-defined jawline, this procedure is suitable."
      },
      {
        faqTitle: "Is the surgery painful?",
        faqAnswer: "No. It’s performed under local or general anesthesia. Mild discomfort may last for a day or two."
      },
      {
        faqTitle: "How long is the procedure and recovery?",
        faqAnswer: "It takes around 30–45 minutes. You can go home the same day and return to routine in 1–2 days."
      },
      {
        faqTitle: "Will there be any scars?",
        faqAnswer: "No. The cuts are very small and hidden under the chin — they heal naturally without visible marks."
      },
      {
        faqTitle: "Are the results permanent?",
        faqAnswer: "Yes. The removed fat doesn’t return. With proper care and a healthy lifestyle, results last for years."
      },
      {
        faqTitle: "What is the cost of double chin surgery?",
        faqAnswer: "Starts at ₹60,000. Final cost depends on the fat volume and the technique used. EMI available at 0% interest."
      }
    ],
    footerComponent: {
      footerdesc: "Get a sharper jawline and defined look with double chin surgery at Lux Hospitals. Call us today to know more or book your appointment.",
      footernumber: "07969084446"
    }
  },
  "best-double-chin-removal-hyderabad": {
    heading: "Best Double Chin Removal in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Double Chin Removal",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Double Chin Removal | Chin Liposuction | Laser Fat Reduction | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Double Chin Removal at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Double Chin Removal?",
    whatAreP: "Double chin removal is a cosmetic procedure that eliminates excess fat below the chin to create a sharper jawline and more balanced facial profile. At Lux Hospitals, we perform this treatment using advanced Laser and VASER liposuction techniques. These are minimally invasive, require no stitches, and offer fast recovery without visible scars. The procedure is ideal for people who want to get rid of stubborn fat under the chin and achieve long-lasting, natural-looking results.",
    whatHead: "Top 4 Double Chin Removal Procedures",
    treatments: [
      {
        title: "Laser Chin Liposuction",
        description: "Laser energy is used to break down fat and tighten skin under the chin for a more defined look."
      },
      {
        title: "VASER Chin Contouring",
        description: "Uses ultrasound energy to precisely remove fat and sculpt the lower face and jawline."
      },
      {
        title: "Mini Liposuction (Chin Focused)",
        description: "Targets small fat pockets under the chin with minimal recovery and visible results."
      },
      {
        title: "Chin + Neck Combo Removal",
        description: "Fat is removed from both chin and neck areas in a single session for full lower face contouring."
      }
    ],
    fheading: "FAQs on Double Chin Removal",
    faqs: [
      {
        faqTitle: "What is the difference between double chin removal and regular liposuction?",
        faqAnswer: "Double chin removal is a targeted liposuction done under the chin using finer tools to remove fat precisely and tighten the area."
      },
      {
        faqTitle: "Is it painful or risky?",
        faqAnswer: "No. It is done under anesthesia. Mild swelling may occur, but it goes away within a few days."
      },
      {
        faqTitle: "How long does the treatment take?",
        faqAnswer: "It takes 30–45 minutes. It’s a daycare procedure and you can go home the same day."
      },
      {
        faqTitle: "How soon will I see results?",
        faqAnswer: "Results are visible within 7–10 days. Full results appear in 3–4 weeks once swelling subsides."
      },
      {
        faqTitle: "Will there be scars or cuts?",
        faqAnswer: "No. The procedure involves very small incisions under the chin that heal naturally without visible marks."
      },
      {
        faqTitle: "What is the cost for double chin removal?",
        faqAnswer: "Starts at ₹60,000. Final cost depends on fat volume and method used. EMI available at 0% interest."
      }
    ],
    footerComponent: {
      footerdesc: "Say goodbye to your double chin with advanced removal techniques at Lux Hospitals. Natural look. Long-lasting results. Trusted surgeons.",
      footernumber: "07969084446"
    }
  },
  // "best-double-chin-removal-hyderabad": {
  //   heading: "Best Double Chin Removal in Hyderabad",
  //   descList: [
  //     "Expert in Body Contouring Surgery",
  //     "Top Surgeons for Double Chin Removal",
  //     "Laser + Liposuction Specialist",
  //     "Starts at ₹60,000 Only",
  //     "30-Min Procedure. No Downtime",
  //     "No Scars. Visible Results",
  //     "0% Interest EMI | 2500+ Patients Transformed"
  //   ],
  //   locationsectionheading: "LUX Hospitals – Double Chin Removal | Chin Liposuction | Laser Fat Reduction | Hyderabad",
  //   doctors: gynecomastiaDoctorsData,
  //   tableContent: [
  //     {
  //       theading: "Double Chin Removal at Lux Hospitals"
  //     }
  //   ],
  //   // tableData: tableData,
  //   whatAreH: "What is Double Chin Removal?",
  //   whatAreP: "Double chin removal is a cosmetic procedure that eliminates excess fat below the chin to create a sharper jawline and more balanced facial profile. At Lux Hospitals, we perform this treatment using advanced Laser and VASER liposuction techniques. These are minimally invasive, require no stitches, and offer fast recovery without visible scars. The procedure is ideal for people who want to get rid of stubborn fat under the chin and achieve long-lasting, natural-looking results.",
  //   whatHead: "Top 4 Double Chin Removal Procedures",
  //   treatments: [
  //     {
  //       title: "Laser Chin Liposuction",
  //       description: "Laser energy is used to break down fat and tighten skin under the chin for a more defined look."
  //     },
  //     {
  //       title: "VASER Chin Contouring",
  //       description: "Uses ultrasound energy to precisely remove fat and sculpt the lower face and jawline."
  //     },
  //     {
  //       title: "Mini Liposuction (Chin Focused)",
  //       description: "Targets small fat pockets under the chin with minimal recovery and visible results."
  //     },
  //     {
  //       title: "Chin + Neck Combo Removal",
  //       description: "Fat is removed from both chin and neck areas in a single session for full lower face contouring."
  //     }
  //   ],
  //   fheading: "FAQs on Double Chin Removal",
  //   faqs: [
  //     {
  //       faqTitle: "What is the difference between double chin removal and regular liposuction?",
  //       faqAnswer: "Double chin removal is a targeted liposuction done under the chin using finer tools to remove fat precisely and tighten the area."
  //     },
  //     {
  //       faqTitle: "Is it painful or risky?",
  //       faqAnswer: "No. It is done under anesthesia. Mild swelling may occur, but it goes away within a few days."
  //     },
  //     {
  //       faqTitle: "How long does the treatment take?",
  //       faqAnswer: "It takes 30–45 minutes. It’s a daycare procedure and you can go home the same day."
  //     },
  //     {
  //       faqTitle: "How soon will I see results?",
  //       faqAnswer: "Results are visible within 7–10 days. Full results appear in 3–4 weeks once swelling subsides."
  //     },
  //     {
  //       faqTitle: "Will there be scars or cuts?",
  //       faqAnswer: "No. The procedure involves very small incisions under the chin that heal naturally without visible marks."
  //     },
  //     {
  //       faqTitle: "What is the cost for double chin removal?",
  //       faqAnswer: "Starts at ₹60,000. Final cost depends on fat volume and method used. EMI available at 0% interest."
  //     }
  //   ],
  //   footerComponent: {
  //     footerdesc: "Say goodbye to your double chin with advanced removal techniques at Lux Hospitals. Natural look. Long-lasting results. Trusted surgeons.",
  //     footernumber: "07969084446"
  //   }
  // },
  "best-tummy-tuck-surgery-hyderabad": {
    heading: "Best Tummy Tuck Surgery in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Tummy Tuck Surgery",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Tummy Tuck Surgery | Abdominal Reshaping | Skin & Fat Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Tummy Tuck Surgery at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Tummy Tuck Surgery?",
    whatAreP: "Tummy tuck surgery (Abdominoplasty) is a cosmetic procedure that removes excess skin and fat from the abdomen and tightens weakened muscles to give a flat and firm stomach. At Lux Hospitals, we use advanced surgical techniques that ensure minimal scarring, fast healing, and natural results. It’s ideal for individuals who have loose skin after pregnancy or major weight loss. The procedure helps restore abdominal shape and improve posture and confidence. It is done under anesthesia and generally requires a short recovery period.",
    whatHead: "Top 4 Tummy Tuck Surgery Options",
    treatments: [
      {
        title: "Mini Tummy Tuck",
        description: "Focuses on the lower belly below the navel — ideal for those with mild skin loosening or a small pouch."
      },
      {
        title: "Full Tummy Tuck",
        description: "Removes fat and tightens muscles across the entire abdomen — perfect for post-pregnancy or weight loss."
      },
      {
        title: "Extended Tummy Tuck",
        description: "Targets the tummy, waist, and sides together to shape the full lower torso."
      },
      {
        title: "Tummy Tuck + Liposuction Combo",
        description: "Combines fat removal with muscle repair for a more sculpted and defined look."
      }
    ],
    fheading: "FAQs on Tummy Tuck Surgery",
    faqs: [
      {
        faqTitle: "Who should consider tummy tuck surgery?",
        faqAnswer: "Anyone with loose abdominal skin, weakened muscles, or stubborn belly fat that doesn’t go with exercise."
      },
      {
        faqTitle: "Will it leave a scar?",
        faqAnswer: "Yes, but the incision is placed low near the bikini line and fades over time."
      },
      {
        faqTitle: "How long does the procedure take?",
        faqAnswer: "The surgery takes about 1.5 to 2 hours depending on the case."
      },
      {
        faqTitle: "What’s the recovery time?",
        faqAnswer: "Initial recovery takes 1 week. Full results are seen in 4–6 weeks."
      },
      {
        faqTitle: "Is the result permanent?",
        faqAnswer: "Yes. The skin and fat removed won’t return. Healthy habits help maintain the outcome."
      },
      {
        faqTitle: "How much does tummy tuck surgery cost?",
        faqAnswer: "Starts at ₹60,000. Cost varies based on technique and fat volume. 0% EMI options are available."
      }
    ],
    footerComponent: {
      footerdesc: "Flatten your belly and regain your shape with safe and advanced tummy tuck surgery at Lux Hospitals. Experienced surgeons. Trusted results.",
      footernumber: "07969084446"
    }
  },
  "affordable-tummy-tuck-surgery-hyderabad": {
    heading: "Affordable Tummy Tuck Surgery in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Tummy Tuck",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Tummy Tuck Surgery | Expert Plastic Surgeons | Abdominoplasty | Fat & Skin Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Tummy Tuck Surgery at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Tummy Tuck?",
    whatAreP: "Tummy tuck surgery (Abdominoplasty) is a cosmetic procedure to remove loose skin, extra fat, and tighten abdominal muscles for a flatter, firmer stomach. At Lux Hospitals, tummy tuck is performed using advanced, minimally invasive methods that ensure faster healing, no visible scars, and long-lasting results. The cost of tummy tuck surgery starts at ₹60,000, and varies depending on the technique, extent of fat/skin removal, and body type. We also offer 0% interest EMI options to make the procedure more accessible.",
    whatHead: "Top 4 Tummy Tuck Procedures",
    treatments: [
      {
        title: "Mini Tummy Tuck",
        description: "Ideal for fat and loose skin below the navel. Short recovery time, starts from ₹60,000."
      },
      {
        title: "Full Tummy Tuck",
        description: "Tightens the full abdominal area. Removes more fat and repairs muscle separation."
      },
      {
        title: "Extended Tummy Tuck",
        description: "Targets abdomen, waist, and flanks — best for major fat or skin excess after weight loss."
      },
      {
        title: "Tummy Tuck with Liposuction",
        description: "Combines fat removal and skin tightening for best cosmetic results and definition."
      }
    ],
    fheading: "FAQs on Tummy Tuck Surgery",
    faqs: [
      {
        faqTitle: "What factors affect the cost of a tummy tuck?",
        faqAnswer: "Cost depends on the type of procedure (mini/full/extended), body type, fat volume, and surgical approach."
      },
      {
        faqTitle: "Is tummy tuck covered under insurance?",
        faqAnswer: "No. It’s a cosmetic procedure and not covered by insurance in most cases."
      },
      {
        faqTitle: "Are there any hidden charges?",
        faqAnswer: "No. All costs — including surgery, anesthesia, and follow-ups — are clearly explained before scheduling."
      },
      {
        faqTitle: "Can I pay in instalments?",
        faqAnswer: "Yes. We offer 0% interest EMI options to make payment more convenient."
      },
      {
        faqTitle: "How long does the surgery take?",
        faqAnswer: "Usually 1.5–2.5 hours, depending on the procedure."
      },
      {
        faqTitle: "What’s included in the ₹60,000 starting cost?",
        faqAnswer: "Basic tummy tuck procedure, surgeon fees, anesthesia, hospital charges, and post-surgical care."
      }
    ],
    footerComponent: {
      footerdesc: "Know your tummy tuck surgery cost in advance. Clear pricing, expert surgeons, and visible results — only at Lux Hospitals.",
      footernumber: "07969084446"
    }
  },
  "best-tummy-tuck-treatment-hyderabad": {
    heading: "Best Tummy Tuck Treatment in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Tummy Tuck",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Tummy Tuck Treatment | Abdominal Reshaping | Skin & Fat Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Tummy Tuck Treatment at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Tummy Tuck?",
    whatAreP: "Tummy tuck, also known as Abdominoplasty, is a cosmetic surgery that removes excess fat and sagging skin from the stomach area while tightening the abdominal muscles. At Lux Hospitals, we perform tummy tuck procedures using advanced surgical techniques that ensure minimal scarring, faster healing, and a more defined waistline. This treatment is ideal for people who’ve lost weight, gone through pregnancy, or are struggling with loose skin and belly fat that doesn’t improve with diet or exercise.",
    whatHead: "Top 4 Tummy Tuck Procedures",
    treatments: [
      {
        title: "Mini Tummy Tuck",
        description: "Removes fat and loose skin from the lower belly. Quick procedure and faster recovery."
      },
      {
        title: "Full Tummy Tuck",
        description: "Treats the entire abdominal area. Removes excess skin and fat, tightens muscles for a flatter tummy."
      },
      {
        title: "Extended Tummy Tuck",
        description: "Removes fat from the tummy, waistline, and love handles — for a more sculpted look."
      },
      {
        title: "Tummy Tuck + Liposuction Combo",
        description: "Combines skin tightening with fat removal in one session for enhanced body contour."
      }
    ],
    fheading: "FAQs on Tummy Tuck Treatment",
    faqs: [
      {
        faqTitle: "What is the purpose of tummy tuck treatment?",
        faqAnswer: "To remove stubborn belly fat, loose skin, and restore a flat stomach by tightening the muscles."
      },
      {
        faqTitle: "Is this treatment safe?",
        faqAnswer: "Yes. It’s done under anesthesia by experienced plastic surgeons using safe surgical techniques."
      },
      {
        faqTitle: "How long is the recovery?",
        faqAnswer: "Most patients resume light activity within 1 week. Full recovery takes about 4–6 weeks."
      },
      {
        faqTitle: "Can tummy tuck be combined with liposuction?",
        faqAnswer: "Yes. Many patients opt for both together to get better shaping results."
      },
      {
        faqTitle: "Is the treatment painful?",
        faqAnswer: "Mild soreness may occur after surgery, which is manageable with medication. Pain is minimal."
      },
      {
        faqTitle: "What is the cost of tummy tuck treatment?",
        faqAnswer: "Starts at ₹60,000. Price depends on the extent of fat/skin removal and the procedure type. EMI available."
      }
    ],
    footerComponent: {
      footerdesc: "Restore your shape and confidence with safe tummy tuck treatment at Lux Hospitals. Flat tummy. Fast recovery. Natural results.",
      footernumber: "07969084446"
    }
  },
  "best-tummy-tuck-doctors-hyderabad": {
    heading: "Best Tummy Tuck Doctors in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Tummy Tuck",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Tummy Tuck Doctors | Abdominoplasty Experts | Skin & Fat Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Tummy Tuck Surgery at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Tummy Tuck?",
    whatAreP: "Tummy tuck, also known as Abdominoplasty, is a cosmetic surgery that removes excess fat and sagging skin from the stomach area while tightening the abdominal muscles. At Lux Hospitals, tummy tuck surgeries are performed by experienced plastic surgeons using advanced techniques that ensure minimal scarring, faster healing, and natural-looking results. This treatment is ideal for people who’ve lost weight, gone through pregnancy, or struggle with stubborn belly fat and loose skin that doesn’t improve with diet or exercise.",
    whatHead: "Top 4 Tummy Tuck Procedures",
    treatments: [
      {
        title: "Mini Tummy Tuck",
        description: "Removes fat and loose skin from the lower belly. Quick procedure and faster recovery."
      },
      {
        title: "Full Tummy Tuck",
        description: "Treats the entire abdominal area. Removes excess skin and fat, tightens muscles for a flatter tummy."
      },
      {
        title: "Extended Tummy Tuck",
        description: "Removes fat from the tummy, waistline, and love handles — for a more sculpted look."
      },
      {
        title: "Tummy Tuck + Liposuction Combo",
        description: "Combines skin tightening with fat removal in one session for enhanced body contour."
      }
    ],
    fheading: "FAQs on Tummy Tuck Doctors & Surgery",
    faqs: [
      {
        faqTitle: "Why choose Lux Hospitals for tummy tuck surgery?",
        faqAnswer: "Our doctors are certified plastic surgeons with 25+ years of combined experience and specialize in body contouring."
      },
      {
        faqTitle: "Will I meet the surgeon before the procedure?",
        faqAnswer: "Yes. Every patient has a detailed consultation directly with the surgeon performing the treatment."
      },
      {
        faqTitle: "Can I choose my doctor?",
        faqAnswer: "Absolutely. Patients can choose between available expert surgeons based on preference and availability."
      },
      {
        faqTitle: "Is the surgery painful?",
        faqAnswer: "Mild soreness is common post-surgery, but it is manageable with medication. The procedure itself is done under anesthesia."
      },
      {
        faqTitle: "How long is the recovery?",
        faqAnswer: "Most patients resume light activity in 1 week. Full recovery usually takes 4–6 weeks."
      },
      {
        faqTitle: "What is the cost of tummy tuck surgery by expert doctors?",
        faqAnswer: "Starts at ₹60,000. Price varies based on the procedure type and extent of fat/skin removal. EMI available."
      }
    ],
    footerComponent: {
      footerdesc: "Get treated by top tummy tuck doctors in Hyderabad at Lux Hospitals. Trusted expertise. Visible results. Safe procedures.",
      footernumber: "07969084446"
    }
  },
  "best-tummy-tuck-removal-hyderabad": {
    heading: "Best Tummy Tuck Removal in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Tummy Tuck",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Tummy Tuck Removal | Abdominal Fat & Skin Removal | Body Shaping | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Tummy Tuck Removal at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Tummy Tuck?",
    whatAreP: "Tummy tuck, also known as Abdominoplasty, is a cosmetic surgery that removes excess fat and sagging skin from the stomach area while tightening the abdominal muscles. At Lux Hospitals, tummy tuck procedures are done using advanced surgical techniques by experienced doctors. The result is a flatter stomach, better posture, and improved confidence. Tummy tuck removal focuses on eliminating the stubborn fat and skin folds that don’t go away even after weight loss or pregnancy.",
    whatHead: "Top 4 Tummy Tuck Procedures",
    treatments: [
      {
        title: "Mini Tummy Tuck",
        description: "Removes fat and loose skin from the lower belly. Quick procedure and faster recovery."
      },
      {
        title: "Full Tummy Tuck",
        description: "Treats the entire abdominal area. Removes excess skin and fat, tightens muscles for a flatter tummy."
      },
      {
        title: "Extended Tummy Tuck",
        description: "Removes fat from the tummy, waistline, and love handles — for a more sculpted look."
      },
      {
        title: "Tummy Tuck + Liposuction Combo",
        description: "Combines skin tightening with fat removal in one session for enhanced body contour."
      }
    ],
    fheading: "FAQs on Tummy Tuck Removal",
    faqs: [
      {
        faqTitle: "What is tummy tuck removal?",
        faqAnswer: "It refers to the removal of loose belly skin and fat using tummy tuck surgery. It improves body shape and abdominal tone."
      },
      {
        faqTitle: "Who needs this treatment?",
        faqAnswer: "Anyone with sagging skin or stubborn belly fat that doesn’t reduce with diet or exercise — often after pregnancy or major weight loss."
      },
      {
        faqTitle: "Is the surgery painful?",
        faqAnswer: "The procedure is done under anesthesia. Mild soreness post-surgery is normal and manageable with medication."
      },
      {
        faqTitle: "How long is the recovery?",
        faqAnswer: "Most patients resume light activity in 1 week. Full recovery usually takes 4–6 weeks."
      },
      {
        faqTitle: "Will the fat or skin return?",
        faqAnswer: "No. Once removed, it won’t return. Long-lasting results are maintained with a healthy lifestyle."
      },
      {
        faqTitle: "What is the cost of tummy tuck removal?",
        faqAnswer: "Starts at ₹60,000. Final cost depends on how much fat/skin is removed and the technique used. EMI available."
      }
    ],
    footerComponent: {
      footerdesc: "Get rid of sagging belly skin with safe and effective tummy tuck removal at Lux Hospitals. Flat stomach. Lasting results. Trusted surgeons.",
      footernumber: "07969084446"
    }
  },
  // "best-tummy-tuck-removal-hyderabad": {
  //   heading: "Best Tummy Tuck Removal in Hyderabad",
  //   descList: [
  //     "Expert in Body Contouring Surgery",
  //     "Top Surgeons for Tummy Tuck",
  //     "Laser + Liposuction Specialist",
  //     "Starts at ₹60,000 Only",
  //     "30-Min Procedure. No Downtime",
  //     "No Scars. Visible Results",
  //     "0% Interest EMI | 2500+ Patients Transformed"
  //   ],
  //   locationsectionheading: "LUX Hospitals – Tummy Tuck Removal | Abdominal Fat & Skin Removal | Body Shaping | Hyderabad",
  //   doctors: gynecomastiaDoctorsData,
  //   tableContent: [
  //     {
  //       theading: "Tummy Tuck Removal at Lux Hospitals"
  //     }
  //   ],
  //   // tableData: tableData,
  //   whatAreH: "What is Tummy Tuck?",
  //   whatAreP: "Tummy tuck, also known as Abdominoplasty, is a cosmetic surgery that removes excess fat and sagging skin from the stomach area while tightening the abdominal muscles. At Lux Hospitals, tummy tuck procedures are done using advanced surgical techniques by experienced doctors. The result is a flatter stomach, better posture, and improved confidence. Tummy tuck removal focuses on eliminating the stubborn fat and skin folds that don’t go away even after weight loss or pregnancy.",
  //   whatHead: "Top 4 Tummy Tuck Procedures",
  //   treatments: [
  //     {
  //       title: "Mini Tummy Tuck",
  //       description: "Removes fat and loose skin from the lower belly. Quick procedure and faster recovery."
  //     },
  //     {
  //       title: "Full Tummy Tuck",
  //       description: "Treats the entire abdominal area. Removes excess skin and fat, tightens muscles for a flatter tummy."
  //     },
  //     {
  //       title: "Extended Tummy Tuck",
  //       description: "Removes fat from the tummy, waistline, and love handles — for a more sculpted look."
  //     },
  //     {
  //       title: "Tummy Tuck + Liposuction Combo",
  //       description: "Combines skin tightening with fat removal in one session for enhanced body contour."
  //     }
  //   ],
  //   fheading: "FAQs on Tummy Tuck Removal",
  //   faqs: [
  //     {
  //       faqTitle: "What is tummy tuck removal?",
  //       faqAnswer: "It refers to the removal of loose belly skin and fat using tummy tuck surgery. It improves body shape and abdominal tone."
  //     },
  //     {
  //       faqTitle: "Who needs this treatment?",
  //       faqAnswer: "Anyone with sagging skin or stubborn belly fat that doesn’t reduce with diet or exercise — often after pregnancy or major weight loss."
  //     },
  //     {
  //       faqTitle: "Is the surgery painful?",
  //       faqAnswer: "The procedure is done under anesthesia. Mild soreness post-surgery is normal and manageable with medication."
  //     },
  //     {
  //       faqTitle: "How long is the recovery?",
  //       faqAnswer: "Most patients resume light activity in 1 week. Full recovery usually takes 4–6 weeks."
  //     },
  //     {
  //       faqTitle: "Will the fat or skin return?",
  //       faqAnswer: "No. Once removed, it won’t return. Long-lasting results are maintained with a healthy lifestyle."
  //     },
  //     {
  //       faqTitle: "What is the cost of tummy tuck removal?",
  //       faqAnswer: "Starts at ₹60,000. Final cost depends on how much fat/skin is removed and the technique used. EMI available."
  //     }
  //   ],
  //   footerComponent: {
  //     footerdesc: "Get rid of sagging belly skin with safe and effective tummy tuck removal at Lux Hospitals. Flat stomach. Lasting results. Trusted surgeons.",
  //     footernumber: "07969084446"
  //   }
  // },
  "best-tummy-tuck-hospital-hyderabad": {
    heading: "Best Tummy Tuck Hospital in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Tummy Tuck",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Tummy Tuck Hospital | Abdominoplasty Experts | Body Shaping & Skin Tightening | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Tummy Tuck Surgery at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Tummy Tuck?",
    whatAreP: "Tummy tuck, also called Abdominoplasty, is a cosmetic surgery that removes extra fat and loose skin from the abdominal area and also tightens weakened muscles. At Lux Hospitals, tummy tuck procedures are done in a fully equipped, modern facility by expert plastic surgeons. With advanced techniques and a strong safety record, we ensure excellent outcomes and fast recovery. The procedure is ideal for both men and women dealing with belly sagging after weight loss, aging, or pregnancy.",
    whatHead: "Top 4 Tummy Tuck Procedures",
    treatments: [
      {
        title: "Mini Tummy Tuck",
        description: "Removes fat and loose skin from the lower belly. Quick procedure and faster recovery."
      },
      {
        title: "Full Tummy Tuck",
        description: "Treats the entire abdominal area. Removes excess skin and fat, tightens muscles for a flatter tummy."
      },
      {
        title: "Extended Tummy Tuck",
        description: "Removes fat from the tummy, waistline, and love handles — for a more sculpted look."
      },
      {
        title: "Tummy Tuck + Liposuction Combo",
        description: "Combines skin tightening with fat removal in one session for enhanced body contour."
      }
    ],
    fheading: "FAQs on Tummy Tuck at Lux Hospitals",
    faqs: [
      {
        faqTitle: "Why is Lux Hospitals considered the best for tummy tuck surgery?",
        faqAnswer: "We offer modern operation theaters, experienced surgeons, advanced equipment, and personalized care from consultation to recovery."
      },
      {
        faqTitle: "Is tummy tuck done as a daycare procedure?",
        faqAnswer: "In most cases, yes. Patients can go home the same day or stay overnight if needed."
      },
      {
        faqTitle: "Will I need stitches or dressing changes?",
        faqAnswer: "Yes, small sutures are used. Our team provides post-op care including follow-ups for dressing and healing."
      },
      {
        faqTitle: "How long does recovery take?",
        faqAnswer: "Most patients resume light activity in 1 week. Full recovery takes 4–6 weeks."
      },
      {
        faqTitle: "Are hospital facilities equipped for cosmetic surgery?",
        faqAnswer: "Yes. We follow strict sterilization, safety, and monitoring standards for all cosmetic surgeries."
      },
      {
        faqTitle: "What is the cost of tummy tuck at Lux Hospitals?",
        faqAnswer: "Starts at ₹60,000. Cost depends on the procedure and area covered. EMI options available."
      }
    ],
    footerComponent: {
      footerdesc: "Experience advanced tummy tuck surgery at one of the best cosmetic hospitals in Hyderabad — Lux Hospitals. Trusted care. Expert surgeons. Modern facilities.",
      footernumber: "07969084446"
    }
  },
  "best-liposuction-treatment-hyderabad": {
    heading: "Best Liposuction Treatment in Hyderabad",
    descList: [
      "Expert in Body Contouring Surgery",
      "Top Surgeons for Liposuction",
      "Laser + Liposuction Specialist",
      "Starts at ₹60,000 Only",
      "30-Min Procedure. No Downtime",
      "No Scars. Visible Results",
      "0% Interest EMI | 2500+ Patients Transformed"
    ],
    locationsectionheading: "LUX Hospitals – Liposuction Treatment | Fat Removal Surgery | Body Contouring | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Liposuction Treatment at Lux Hospitals"
      }
    ],
    // tableData: tableData,
    whatAreH: "What is Liposuction?",
    whatAreP: "Liposuction is a cosmetic surgery that removes stubborn fat from targeted areas like the stomach, thighs, arms, back, and chin to reshape and contour the body. At Lux Hospitals, we use modern Laser and VASER liposuction techniques that ensure precise fat removal, minimal downtime, and no visible scars. This treatment is ideal for individuals who are otherwise healthy but have fat deposits that do not go away with exercise or diet.",
    whatHead: "Top 4 Liposuction Procedures",
    treatments: [
      {
        title: "Laser Liposuction",
        description: "Uses laser energy to melt fat and tighten skin for smoother, more refined results."
      },
      {
        title: "VASER Liposuction",
        description: "Ultrasound-assisted technique that targets deep fat precisely while preserving surrounding tissues."
      },
      {
        title: "360° Body Contouring",
        description: "Fat is removed from multiple areas like the tummy, waist, and back in one session for total reshaping."
      },
      {
        title: "Mini Liposuction",
        description: "Focuses on small fat pockets like under the chin, arms, or inner thighs — quick and effective."
      }
    ],
    fheading: "FAQs on Liposuction Treatment at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What is the purpose of liposuction treatment?",
        faqAnswer: "To remove localized fat deposits and improve body shape in specific areas that don’t respond to exercise."
      },
      {
        faqTitle: "Is liposuction safe?",
        faqAnswer: "Yes. It is performed under anesthesia using advanced techniques and handled by experienced surgeons."
      },
      {
        faqTitle: "How long is the recovery?",
        faqAnswer: "Most patients return to normal activity in 2–3 days. Full recovery may take 1–2 weeks depending on the area."
      },
      {
        faqTitle: "Will there be any visible scars?",
        faqAnswer: "No. The incisions are very small (2–3 mm) and placed in hidden areas. They heal without noticeable marks."
      },
      {
        faqTitle: "Is liposuction a weight loss procedure?",
        faqAnswer: "No. It’s meant for body shaping, not weight loss. Ideal for people close to their target weight."
      },
      {
        faqTitle: "What is the cost of liposuction treatment?",
        faqAnswer: "Starts at ₹60,000. Final cost depends on area, fat volume, and technique used. EMI available."
      }
    ],
    footerComponent: {
      footerdesc: "Get smooth, sculpted results with safe and advanced liposuction treatment at Lux Hospitals. Quick recovery. Visible contour. Trusted care.",
      footernumber: "07969084446"
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
  const tableData  = [

    { label: "Fat Removal Technique", other: "Surgical Liposuction", lux: "Laser-Assisted Liposuctionn" },
    { label: "Downtime", other: "7–10 Days", lux: "Back to Work in 1–2 Days" },
    { label: "Scarring", other: "Scarring Common", lux: "Local Anesthesia" },
    { label: "Technology", other: "Conventional Equipment", lux: "Advanced LipoTech System" },
    { label: "Room Type", other: "General / Sharing", lux: "Private Suite" },
    { label: "Financing", other: "EMI Not Offered", lux: "0% EMI | Fixed Package" },
  ];
  const services = [
    {
      image: "https://luxhospitals.com/wp-content/uploads/2025/04/converted-3.avif",
      title: "Book Free Appointment",
      arrow: "/Arrow.svg",
      link: "tel:07969084446",
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
      link: "tel:07969084446",
    },
  ];

  return (
    <>
      <Header
        PhoneNumber={"07969084446"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084446"}
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
                  mobileNumberDoctor="tel:07969084446"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      {content.tableContent?.[0] && (
        <HospitalComparisond theading={content.tableContent[0].theading} rows={tableData} ConditionVideo="/dr ram prabhu gyncomastia final version.webm" />
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
      <MobileStickyFooter mobileNumber="tel:07969084446" />
    </>
  );
}
