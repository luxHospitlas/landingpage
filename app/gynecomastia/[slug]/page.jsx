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
  "best-gynecomastia-doctor-hyderabad": {
    heading: "Best Gynecomastia Doctor in Hyderabad",
    descList: [
      "Leading Surgeon for Gynecomastia Treatment",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Gynecomastia Doctor | Male Breast Reduction Experts | Liposuction + Excision Specialists | Hyderabad",
      doctors: gynecomastiaDoctorsData,
    // doctors: [
    //   {
    //     url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Ram-Prabhu-1.webp",
    //     name: "Dr. M Ram Prabhu",
    //     qualification: "MBBS, MBBS, MS, MCh (Plastic Surgery)",
    //     designation: "Plastic Surgeon",
    //     experience: "Experience: 15+ years",
    //     description:
    //       "Plastic & Cosmetic Surgeon with 15+ years of experience. Specialises in gynecomastia, breast augmentation, liposuction, and tummy tuck. Has treated 6,000+ patients with a 99% success rate, offering customised solutions and consistent, natural results in aesthetic and reconstructive surgery."
    //   },
    //   {
    //     url: "https://test.luxhospitals.com/wp-content/uploads/2025/04/Dr.-Chandana-Guduru.webp",
    //     name: "Dr. Chandana Guduru",
    //     qualification: "MBBS, MS, MCh (Plastic Surgery)",
    //     designation: "Plastic Surgeon",
    //     experience: "Experience: 10+ years",
    //     description:
    //       "Plastic & Cosmetic Surgeon with 10+ years of experience. Specialises in breast augmentation, liposuction, tummy tuck, and gynecomastia. Holds a fellowship in Cosmetic Surgery (Dubai). Has performed 4,000+ procedures with a 99% success rate, known for natural-looking results."
    //   }
    // ],
    tableContent: [
      {
        theading: "Gynecomastia Treatment at Lux Hospitals"
      }
    ],
    tableData: [], // Add specific table data here if required
    whatAreH: "What is Gynecomastia?",
    whatAreP:
      "Gynecomastia is the enlargement of breast tissue in men due to hormonal imbalances, excess fat, genetics, or certain medications. It may affect one or both sides of the chest and often leads to emotional discomfort or self-consciousness. At Lux Hospitals, our expert gynecomastia surgeons use minimally invasive procedures to restore a firm, masculine chest with natural-looking results — safely, precisely, and discreetly.",
    whatHead: "Top 4 Procedures for Gynecomastia",
    treatments: [
      {
        title: "Liposuction",
        description:
          "A minimally invasive option for fat-dominant gynecomastia. Small cannulas are used to remove excess fat with virtually no visible scars."
      },
      {
        title: "Gland Excision (Mastectomy)",
        description:
          "Ideal when firm glandular tissue is present. The gland is removed through a keyhole incision to achieve a flat, defined chest contour."
      },
      {
        title: "Excision with Skin Tightening",
        description:
          "Used in severe or long-standing gynecomastia where skin laxity is present. This procedure removes both glandular tissue and excess skin for a tighter chest."
      },
      {
        title: "Combination Surgery",
        description:
          "A customised blend of liposuction and gland excision for optimal results in cases involving both fat and gland enlargement."
      }
    ],
    fheading: "FAQs on Gynecomastia Treatment Services",
    faqs: [
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
    ],
    footerComponent: {
      footerdesc:
        "Regain your confidence with expert, scarless Gynecomastia Treatment at Lux Hospitals. Book your free consultation today!",
      footernumber: "07969084446"
    }
  },
  "gynecomastia-surgery-cost-hyderabad": {
    heading: "Gynecomastia Surgery Cost in Hyderabad",
    descList: [
      "Affordable Male Chest Reduction Surgery",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Affordable Gynecomastia | Male Breast Reduction Experts | Liposuction + Excision Specialists | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Gynecomastia Treatment at Lux Hospitals"
      }
    ],
    tableData: [], // Add treatment comparison or pricing details here if needed
    whatAreH: "What is Gynecomastia?",
    whatAreP:
      "Gynecomastia is the enlargement of male breast tissue due to hormonal imbalance, excess fat, or genetics. It can affect one or both sides and often causes emotional discomfort. At Lux Hospitals, we offer affordable, minimally invasive procedures including liposuction and gland removal — performed by experienced surgeons using advanced techniques to deliver natural, lasting results.",
    whatHead: "Top 4 Procedures for Gynecomastia",
    treatments: [
      {
        title: "Liposuction",
        description:
          "A cost-effective, minimally invasive option for fat-dominant gynecomastia. Removes excess fat through tiny incisions, leaving no visible scars."
      },
      {
        title: "Gland Excision (Mastectomy)",
        description:
          "Recommended when gland tissue is prominent. The gland is removed through a small incision, giving a flat, contoured chest."
      },
      {
        title: "Excision with Skin Tightening",
        description:
          "Ideal for severe gynecomastia cases. This procedure removes both excess glandular tissue and sagging skin for a firmer chest appearance."
      },
      {
        title: "Combination Surgery",
        description:
          "A customised approach using both liposuction and gland excision. Offers the best results in cases involving both fat and gland enlargement."
      }
    ],
    fheading: "FAQs on Gynecomastia Surgery Cost & Treatment",
    faqs: [
      {
        faqTitle: "What is gynecomastia and how is it treated at Lux Hospitals?",
        faqAnswer:
          "Gynecomastia is a condition in which men develop enlarged chest tissue due to hormonal or fat imbalance. Lux Hospitals treats it with advanced, minimally invasive laser liposuction and gland removal for a sculpted, masculine look."
      },
      {
        faqTitle: "How experienced are the surgeons at Lux Hospitals?",
        faqAnswer:
          "Our Plastic Surgeons, including Dr. M Ram Prabhu and Dr. Chandana Guduru, bring 10–16+ years of experience in male chest surgeries, having helped thousands of men achieve natural results."
      },
      {
        faqTitle: "What advanced techniques do your surgeons use?",
        faqAnswer:
          "We use laser-assisted liposuction, gland excision, and skin tightening procedures tailored to the patient’s chest type — ensuring minimal scars and a quick recovery."
      },
      {
        faqTitle: "What can I expect during the recovery process?",
        faqAnswer:
          "Recovery is quick. Most men return to routine work in 2–3 days. Visible swelling reduces within a few weeks, with full results seen in 4–6 weeks."
      },
      {
        faqTitle: "How much does gynecomastia surgery cost at Lux Hospitals?",
        faqAnswer:
          "Surgery starts from ₹50,000. Final cost depends on the grade and procedure needed. We offer transparent, fixed packages with no hidden fees, along with 0% interest EMI options."
      },
      {
        faqTitle: "How do I book a consultation with a gynecomastia specialist?",
        faqAnswer:
          "Booking is simple. Call 07969084446 or Chat with us on WhatsApp to schedule a free consultation with one of our gynecomastia experts. You’ll receive a full evaluation, personalised treatment plan, and transparent cost estimate."
      }
    ],
    footerComponent: {
      footerdesc:
        "Restore your confidence with affordable Gynecomastia Surgery at Lux Hospitals. Book your free consultation today!",
      footernumber: "07969084446"
    }
  },
  "best-man-boobs-reduction-doctor-hyderabad": {
    heading: "Best Doctor for Man Boobs Reduction in Hyderabad",
    descList: [
      "Leading Surgeon for Man Boobs Reduction",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Man Boobs Treatment | Gynecomastia Doctor | Male Chest Reduction Experts | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Man Boobs Treatment at Lux Hospitals"
      }
    ],
    tableData: [], // Add pricing or comparison if applicable
    whatAreH: "What are Man Boobs (Gynecomastia)?",
    whatAreP:
      "Man boobs, medically known as gynecomastia, refer to the enlargement of breast tissue in men. This condition is often caused by hormonal imbalance, excess fat, certain medications, or genetics. It can affect one or both sides of the chest and often leads to embarrassment or low self-confidence. At Lux Hospitals, our experienced plastic surgeons use advanced, minimally invasive procedures to remove man boobs and restore a well-defined, masculine chest — with precision, safety, and long-lasting results.",
    whatHead: "Top 4 Procedures for Man Boobs Removal",
    treatments: [
      {
        title: "Liposuction",
        description:
          "Ideal for fat-dominant gynecomastia. This minimally invasive procedure removes excess fat through tiny incisions — leaving no visible scars."
      },
      {
        title: "Gland Excision (Mastectomy)",
        description:
          "Recommended when glandular tissue is present. The gland is removed through a small incision for a flat, sculpted chest."
      },
      {
        title: "Excision with Skin Tightening",
        description:
          "Used in severe or long-term cases of man boobs where sagging skin is also present. This method removes both gland and loose skin."
      },
      {
        title: "Combination Surgery",
        description:
          "A personalised approach that combines liposuction and gland removal — ideal for patients with both fat and glandular enlargement."
      }
    ],
    fheading: "FAQs on Man Boobs Treatment at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What are man boobs and how are they treated at Lux Hospitals?",
        faqAnswer:
          "Man boobs (gynecomastia) are caused by excess fat or glandular tissue in the male chest. At Lux Hospitals, we use laser liposuction and precision gland removal to eliminate man boobs and achieve a natural, masculine chest shape."
      },
      {
        faqTitle: "How experienced are the surgeons at Lux Hospitals?",
        faqAnswer:
          "Our senior plastic surgeons — Dr. M Ram Prabhu and Dr. Chandana Guduru — have over 10 years of experience treating gynecomastia and have helped hundreds of men get rid of man boobs effectively and safely."
      },
      {
        faqTitle: "What techniques are used to remove man boobs?",
        faqAnswer:
          "We use a combination of laser-assisted liposuction, gland excision, and skin tightening (if needed). These methods are minimally invasive, highly precise, and leave little to no visible scarring."
      },
      {
        faqTitle: "What is the recovery time after man boobs surgery?",
        faqAnswer:
          "Most patients return to work in 2–3 days. Swelling reduces within a few weeks, and full results are visible in 4–6 weeks. Our team provides detailed post-op care guidance."
      },
      {
        faqTitle: "What is the cost of man boobs removal at Lux Hospitals?",
        faqAnswer:
          "Gynecomastia surgery at Lux Hospitals starts from ₹50,000. Final pricing depends on the grade and type of correction required. We offer transparent packages and 0% interest EMI options."
      },
      {
        faqTitle: "How do I book a consultation for man boobs treatment?",
        faqAnswer:
          "Booking is simple. Call 07969084446 or chat with us on WhatsApp to schedule a free consultation. Our expert will evaluate your condition and recommend the best solution with a clear cost breakdown."
      }
    ],
    footerComponent: {
      footerdesc:
        "Say goodbye to man boobs with expert gynecomastia surgery at Lux Hospitals. Book your free consultation today!",
      footernumber: "07969084446"
    }
  },
  "best-man-breasts-reduction-doctor-hyderabad": {
    heading: "Best Doctor for Man Breasts Reduction in Hyderabad",
    descList: [
      "Trusted Surgeon for Man Breast Removal",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Man Breasts Treatment | Gynecomastia Surgery Experts | Male Chest Contouring | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Man Breasts Treatment at Lux Hospitals"
      }
    ],
    tableData: [], // Add pricing or service comparison here if needed
    whatAreH: "What are Man Breasts (Gynecomastia)?",
    whatAreP:
      "Man breasts, medically referred to as gynecomastia, is a condition where men develop enlarged breast tissue due to hormonal imbalance, excess fat, certain medications, or genetics. It can affect one or both sides and often leads to body image concerns. At Lux Hospitals, our expert plastic surgeons offer safe, minimally invasive treatments to reduce man breasts and sculpt a flatter, more masculine chest — with long-lasting results and minimal downtime.",
    whatHead: "Top 4 Procedures for Man Breasts Removal",
    treatments: [
      {
        title: "Liposuction",
        description:
          "A minimally invasive technique to remove excess fat using fine cannulas — best for fat-dominant man breasts with no visible scarring."
      },
      {
        title: "Gland Excision (Mastectomy)",
        description:
          "Used when dense glandular tissue is present. The tissue is removed through a small incision to achieve a well-contoured chest."
      },
      {
        title: "Excision with Skin Tightening",
        description:
          "Ideal for severe man breasts or cases with sagging skin. This procedure removes both gland and loose skin for a firmer chest profile."
      },
      {
        title: "Combination Surgery",
        description:
          "A customised mix of liposuction and gland excision — providing optimal results when both fat and gland enlargement are involved."
      }
    ],
    fheading: "FAQs on Man Breasts Treatment at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What are man breasts and how are they treated at Lux Hospitals?",
        faqAnswer:
          "Man breasts (gynecomastia) occur due to fat or gland buildup in the male chest. We treat them using laser-assisted liposuction and precision gland removal to restore a masculine chest shape."
      },
      {
        faqTitle: "How experienced are the surgeons at Lux Hospitals?",
        faqAnswer:
          "Our senior plastic surgeons — Dr. M Ram Prabhu and Dr. Chandana Guduru — have over a decade of experience in male chest contouring and have performed hundreds of man breast removal procedures."
      },
      {
        faqTitle: "What advanced techniques do you use to treat man breasts?",
        faqAnswer:
          "We offer laser liposuction, gland excision, and skin tightening techniques, depending on the case. All procedures are minimally invasive and designed for natural-looking results."
      },
      {
        faqTitle: "What can I expect after man breast surgery?",
        faqAnswer:
          "Recovery is typically smooth. Most patients return to work within 2–3 days. Swelling reduces within weeks, and full results are seen in 4–6 weeks."
      },
      {
        faqTitle: "How much does man breast removal cost at Lux Hospitals?",
        faqAnswer:
          "Surgery starts from ₹50,000. Final cost depends on the procedure type and severity. We provide fixed-price packages and offer 0% interest EMI for affordability."
      },
      {
        faqTitle: "How do I book a consultation for man breast correction?",
        faqAnswer:
          "Call 07969084446 or chat with us on WhatsApp to schedule a free consultation. You’ll receive a complete evaluation, personalised plan, and a clear cost estimate."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get rid of man breasts with expert gynecomastia surgery at Lux Hospitals. Book your free consultation today!",
      footernumber: "07969084446"
    }
  },
  "best-chest-fat-removal-doctor-hyderabad": {
    heading: "Best Doctor for Chest Fat Removal in Hyderabad",
    descList: [
      "Top Surgeon for Male Chest Fat Reduction",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Chest Fat Reduction | Male Chest Contouring | Liposuction + Gland Excision Experts | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Chest Fat Treatment at Lux Hospitals"
      }
    ],
    tableData: [], // Placeholder for service/pricing details
    whatAreH: "What is Chest Fat in Men?",
    whatAreP:
      "Chest fat in men — often confused with gynecomastia — refers to excess fat deposits in the chest area that result in a soft or enlarged appearance. It can be caused by obesity, hormonal changes, genetics, or a sedentary lifestyle. At Lux Hospitals, we identify whether the condition is fat-based or glandular and provide precise, minimally invasive treatments to sculpt a flatter, firmer chest with natural results.",
    whatHead: "Top 4 Procedures for Chest Fat Reduction",
    treatments: [
      {
        title: "Liposuction",
        description:
          "Ideal for soft, fat-dominant chest enlargement. This procedure removes excess fat using fine cannulas — leaving no visible scars."
      },
      {
        title: "Gland Excision",
        description:
          "Performed when glandular tissue is also involved. A small incision is used to remove the gland for a defined chest contour."
      },
      {
        title: "Skin Tightening with Excision",
        description:
          "Used when chest fat leads to loose skin. This technique removes both fat and excess skin for a tighter, more athletic look."
      },
      {
        title: "Combination Surgery",
        description:
          "Tailored to patients with both chest fat and gland tissue. Combines liposuction and excision for complete correction."
      }
    ],
    fheading: "FAQs on Chest Fat Removal at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What causes chest fat in men?",
        faqAnswer:
          "Chest fat can result from weight gain, hormonal imbalance, genetics, or lack of physical activity. It often builds up in the upper body and can resemble gynecomastia."
      },
      {
        faqTitle: "How do I know if it’s gynecomastia?",
        faqAnswer:
          "A consultation with our specialist is the best way to identify whether your condition is fat-based, glandular, or a combination. We use clinical assessment and, if needed, imaging for confirmation."
      },
      {
        faqTitle: "Is chest fat removal permanent?",
        faqAnswer:
          "Yes, once removed through liposuction or excision, fat and gland tissues do not return — especially when supported by a healthy lifestyle."
      },
      {
        faqTitle: "What is the recovery time after chest fat surgery?",
        faqAnswer:
          "Most patients return to regular activities in 2–3 days. Initial swelling goes down in a few weeks, with full results visible in 4–6 weeks."
      },
      {
        faqTitle: "How do I book a consultation for chest fat removal?",
        faqAnswer:
          "Call 07969084446 or chat with us on WhatsApp to schedule a free consultation. You’ll receive a detailed evaluation and a customised treatment plan from our expert team."
      }
    ],
    footerComponent: {
      footerdesc:
        "Get rid of stubborn chest fat with safe and expert treatment at Lux Hospitals. Book your consultation today!",
      footernumber: "07969084446"
    }
  },
  "best-gynecomastia-surgery-hyderabad": {
    heading: "Best Gynecomastia Surgery in Hyderabad",
    descList: [
      "Top Surgeons for Gynecomastia Surgery",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Gynecomastia Surgery | Male Breast Reduction | Laser Liposuction + Gland Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Gynecomastia Surgery at Lux Hospitals"
      }
    ],
    tableData: [], // Placeholder for service or pricing table if needed
    whatAreH: "What is Gynecomastia Surgery?",
    whatAreP:
      "Gynecomastia surgery is a medical procedure designed to reduce enlarged male breast tissue caused by hormonal changes, fat buildup, or glandular overgrowth. At Lux Hospitals, we offer advanced, minimally invasive surgery using laser-assisted liposuction and gland excision — providing a flat, masculine chest with minimal downtime and no visible scars.",
    whatHead: "Top 4 Procedures for Gynecomastia Surgery",
    treatments: [
      {
        title: "Liposuction",
        description:
          "Removes soft fatty tissue using small cannulas with no cuts or stitches. Ideal for fat-dominant gynecomastia."
      },
      {
        title: "Gland Excision (Mastectomy)",
        description:
          "Removes firm glandular tissue through a tiny incision, sculpting the chest to a flat, defined contour."
      },
      {
        title: "Skin Tightening with Excision",
        description:
          "Used when sagging skin is present. This method removes both tissue and excess skin for a tighter chest."
      },
      {
        title: "Combination Surgery",
        description:
          "Blends liposuction and gland excision — the most common and effective approach for treating mixed-type gynecomastia."
      }
    ],
    fheading: "FAQs on Gynecomastia Surgery at Lux Hospitals",
    faqs: [
      {
        faqTitle: "What is gynecomastia surgery and how is it performed at Lux Hospitals?",
        faqAnswer:
          "Gynecomastia surgery removes unwanted fat and glandular tissue from the chest to achieve a masculine appearance. We use laser liposuction and gland excision techniques tailored to your chest type."
      },
      {
        faqTitle: "How experienced are the surgeons at Lux Hospitals?",
        faqAnswer:
          "Our senior plastic surgeons — Dr. M Ram Prabhu and Dr. Chandana Guduru — have over a decade of experience in male chest contouring and have performed hundreds of successful gynecomastia surgeries."
      },
      {
        faqTitle: "Is the surgery painful?",
        faqAnswer:
          "No. It’s performed under local or general anesthesia. Mild soreness may occur post-surgery, but it is short-term and manageable with prescribed medication."
      },
      {
        faqTitle: "How long is the recovery after gynecomastia surgery?",
        faqAnswer:
          "Most men return to light activities in 2–3 days. Swelling subsides within a few weeks, and full results are visible in 4–6 weeks with proper care."
      },
      {
        faqTitle: "Are the results of gynecomastia surgery permanent?",
        faqAnswer:
          "Yes. Once the fat and gland are removed, they do not grow back. Maintaining a healthy lifestyle ensures long-lasting results."
      },
      {
        faqTitle: "How do I book a consultation for gynecomastia surgery?",
        faqAnswer:
          "Call 07969084446 or chat with us on WhatsApp to schedule a free consultation. Our team will assess your chest and provide a personalised plan."
      }
    ],
    footerComponent: {
      footerdesc:
        "Restore your confidence with expert gynecomastia surgery at Lux Hospitals. Book your consultation today!",
      footernumber: "07969084446"
    }
  },
  "best-gynecomastia-clinic-hyderabad": {
    heading: "Best Gynecomastia Clinic in Hyderabad",
    descList: [
      "Best Clinic for Gynecomastia Treatment",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading:
      "LUX Hospitals – Gynecomastia Clinic | Male Chest Correction Experts | Laser & Excision Specialists | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        theading: "Gynecomastia Treatment at Lux Hospitals"
      }
    ],
    tableData: [], // Placeholder if a detailed pricing or services table is needed
    whatAreH: "What is Gynecomastia?",
    whatAreP:
      "Gynecomastia is a condition where men develop excess breast tissue, leading to a chest that looks fuller or feminine. It can be caused by hormonal imbalances, excess fat, medications, or genetics. At Lux Hospitals — one of Hyderabad’s leading gynecomastia clinics — we use advanced techniques like laser liposuction and gland removal to correct the condition safely, discreetly, and permanently.",
    whatHead: "Top 4 Treatments at Our Gynecomastia Clinic",
    treatments: [
      {
        title: "Liposuction",
        description:
          "Removes excess fat through tiny incisions. Ideal for soft, fat-based gynecomastia with no visible scars."
      },
      {
        title: "Gland Excision (Mastectomy)",
        description:
          "Removes firm breast tissue through a hidden incision for a flat, masculine chest shape."
      },
      {
        title: "Skin Tightening with Excision",
        description:
          "Recommended for severe cases with sagging skin. Combines tissue removal with skin tightening for better chest definition."
      },
      {
        title: "Combination Surgery",
        description:
          "A customised procedure that blends both liposuction and gland removal for optimal results in mixed cases."
      }
    ],
    fheading: "FAQs on Gynecomastia Clinic Services",
    faqs: [
      {
        faqTitle: "What makes Lux Hospitals the best gynecomastia clinic in Hyderabad?",
        faqAnswer:
          "We offer a specialised clinic setup with experienced plastic surgeons, advanced equipment, and discreet care — all focused on male chest correction."
      },
      {
        faqTitle: "What treatment options are available at your gynecomastia clinic?",
        faqAnswer:
          "We provide laser liposuction, gland excision, and combination procedures tailored to your specific chest condition — all performed as daycare surgeries."
      },
      {
        faqTitle: "Is gynecomastia surgery done under local or general anesthesia?",
        faqAnswer:
          "It depends on the case. Most procedures are done under local anesthesia with mild sedation. For more complex corrections, general anesthesia may be used."
      },
      {
        faqTitle: "How long will it take to recover after surgery?",
        faqAnswer:
          "Most patients return to work in 2–3 days. Full results are visible in 4–6 weeks. Swelling and tightness gradually reduce with proper aftercare."
      },
      {
        faqTitle: "Can I walk in for a gynecomastia consultation?",
        faqAnswer:
          "We recommend scheduling your consultation in advance. Call 07969084446 or message us on WhatsApp to fix a convenient appointment."
      },
      {
        faqTitle: "Will there be visible scars after treatment?",
        faqAnswer:
          "No. Our clinic uses minimally invasive techniques with hidden or micro-incisions, leaving no noticeable scars on the chest."
      }
    ],
    footerComponent: {
      footerdesc:
        "Visit Lux Hospitals – Hyderabad’s trusted Gynecomastia Clinic for permanent chest correction. Book your consultation today!",
      footernumber: "07969084446"
    }
  },
  "best-gynecomastia-treatment-hyderabad": {
    heading: "Best Gynecomastia Treatment in Hyderabad",
    descList: [
      "Best Gynecomastia Treatment",
      "Laser + Liposuction Specialist",
      "Surgery from ₹50,000 Onwards",
      "No Scars. No Recurrence.",
      "30-Min Procedure, 100% Success",
      "0% Interest EMI | 2500+ Happy Patients"
    ],
    locationsectionheading: "LUX Hospitals – Gynecomastia Treatment | Male Chest Correction Experts | Laser Liposuction + Gland Removal | Hyderabad",
    doctors: gynecomastiaDoctorsData,
    tableContent: [
      {
        "theading": "Gynecomastia Treatment at Lux Hospitals"
      }
    ],
    tableData: [],
    whatAreH: "What is Gynecomastia?",
    whatAreP: "Gynecomastia is a condition in which men develop excess breast tissue, resulting in a fuller or feminine-looking chest. It can be caused by hormonal changes, weight gain, certain medications, or genetics. At Lux Hospitals, we offer advanced gynecomastia treatment using minimally invasive techniques like laser liposuction and gland excision — helping men regain a confident, masculine appearance with minimal downtime.",
    whatHead: "Top 4 Techniques for Gynecomastia Treatment",
    treatments: [
      {
        title: "Liposuction",
        description: "Best for fat-dominant gynecomastia. This technique removes chest fat through small cannulas, leaving no visible scars."
      },
      {
        title: "Gland Excision",
        description: "Removes firm glandular tissue via a hidden incision to restore a flatter chest contour."
      },
      {
        title: "Skin Tightening with Excision",
        description: "Used in advanced cases with loose skin. Both tissue and excess skin are removed for a tighter, sculpted chest."
      },
      {
        title: "Combination Procedure",
        description: "A personalised blend of liposuction and gland removal — ideal for patients with both fat and glandular enlargement."
      }
    ],
    fheading: "FAQs on Gynecomastia Treatment",
    faqs: [
      {
        faqTitle: "What is gynecomastia treatment and how is it done at Lux Hospitals?",
        faqAnswer: "Gynecomastia treatment involves removing excess fat and/or gland tissue from the male chest. At Lux Hospitals, we use a combination of laser liposuction and gland excision to deliver natural-looking, permanent results."
      },
      {
        faqTitle: "Will there be visible scars after treatment?",
        faqAnswer: "No. Our clinic uses minimally invasive techniques with hidden or micro-incisions, leaving no noticeable scars on the chest."
      },
      {
        faqTitle: "Are the treatments painful or risky?",
        faqAnswer: "Not at all. The procedures are minimally invasive, done under local or general anesthesia. Most patients report only mild discomfort for a few days."
      },
      {
        faqTitle: "How soon can I return to normal activities?",
        faqAnswer: "You can usually resume light activities within 2–3 days. Full results are visible in 4–6 weeks, with post-op care guided by our team."
      },
      {
        faqTitle: "Will the gynecomastia return after treatment?",
        faqAnswer: "No. Once the gland and fat are removed, they do not grow back. Maintaining a healthy lifestyle helps keep your results permanent."
      },
      {
        faqTitle: "How do I book a consultation for gynecomastia treatment?",
        faqAnswer: "Call 07969084446 or chat with us on WhatsApp to schedule a free consultation. Our specialists will assess your condition and guide you through the best treatment plan."
      }
    ],
    footerComponent: {
      footerdesc: "Get expert, scar-free gynecomastia treatment at Lux Hospitals. Book your consultation today!",
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
  const tableData = [

    { label: "Procedure Type", other: "Traditional Surgery", lux: "Laser + Liposuction" },
    { label: "Scarring", other: "Visible Scars", lux: "Scarless Finish" },
    { label: "Anesthesia", other: "General Anesthesia", lux: "Local Anesthesia" },
    { label: "Recovery Time", other: "1–2 Weeks", lux: "1–2 Days" },
    { label: "Pricing", other: "Starts ₹1L+", lux: "Starts ₹50,000" },
    { label: "Financing Options", other: "Rarely Available", lux: "0% EMI | Assured Pricing" },
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
        mobilectatext={"Free OPD"}
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
                  mobileNumberDoctor={cardData.mobileNumberDoctor}
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
      <MobileStickyFooter mobileNumber="tel:07969084446"/>
    </>
  );
}
