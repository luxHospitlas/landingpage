// NO "use client" here
import dynamic from "next/dynamic";

import Hero from "../components/hero/hero";
import Second from "../components/second/second";
import HospitalLocation from "../components/HospitalLocation/hospitallocations";
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

import Faqs from "../components/faqs/faq"; // still a client component
import { title } from "process";

const contentMap = {
  "external-hemorrhoids-doctor": {
    heading: "External Hemorrhoids Doctor",
    descList: [
      "Top External Hemorrhoids Doctor",
      "30-min procedure, same-day discharge",
      "All Cashless Insurance accepted",
      "Zero-interest EMI available",
      " Advanced Laser & Minimally Invasive Treatment",
    ],
    locationsectionheading:
      "LUX Hospitals - External Hemorrhoids Doctor | Piles Experts | Advanced Care | Hemorrhoids Specialists",
    doctors: [
      {
        name: "Dr. Samhitha Reddy",
        designation: "Piles Specialist",
        designationtwo: "piles Specialist",
        image: "/doctors/samhitha-reddy.webp",
      },
    ],
    tableContent: [
      {
        theading: "Best External Hemorrhoids Treatment at Lux Hospitals",
      },
    ],
    whatAreH: "What Are External Hemorrhoids?",
    whatAreP:
      "External hemorrhoids are swollen veins located under the skin around the anus",
    whatHead:
      "Top 3 Advanced Treatments for External Hemorrhoids at Lux Hospitals:",
    treatments: [
      {
        title: "Laser Hemorrhoidoplasty (LHP",
        description: "A minimally invasive procedure using laser energy",
      },
      {
        title: "Laser Hemorrhoidoplasty (LHP",
        description: "A minimally invasive procedure using laser energy",
      },
      {
        title: "Laser Hemorrhoidoplasty (LHP",
        description: "A minimally invasive procedure using laser energy",
      },
      {
        title: "Laser Hemorrhoidoplasty (LHP",
        description: "A minimally invasive procedure using laser energy",
      },
      {
        title: "Laser Hemorrhoidoplasty (LHP",
        description: "A minimally invasive procedure using laser energy",
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
  },
  piles: {
    heading: "Get Relief from Piles Today",
    paragraph: "Lux Hospitals offers advanced treatment with quick recovery.",
  },
};

export default function ConditionPage({ params }) {
  const { slug } = params;

  const content = contentMap[slug] || {
    heading: "Lux Hospitals",
    paragraph: "Trusted care for all specialties.",
  };

  return (
    <>
      <Hero heading={content.heading} descList={content.descList} />
      <Second />
      <HospitalLocation
        locationsectionheading={content.locationsectionheading}
      />
      <DoctorCard
        designation={content.doctors?.[0]?.designation}
        designationtwo={content.doctors?.[0]?.designationtwo}
      />
      <HospitalComparison theading={content.tableContent?.[0]?.theading} />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
      {/* render the whatare section here */}
      <Whatare
        whatAreH={content.whatAreH}
        whatAreP={content.whatAreP}
        whatHead={content.whatHead}
        treatments={content.treatments}
      />
      {content.faqs && (
        <Faqs
          fheading={content.fheading}
          faqs={content.faqs.map((faq) => ({
            faqquestion: faq.faqTitle,
            faqanswer: faq.faqAnswer,
          }))}
        />
      )}
    </>
  );
}

// Whatare Component
const Whatare = ({ whatAreH, whatAreP, whatHead, treatments }) => {
  return (
    <section className="logo-fade lg:px-20 text-[#252B61] whatare">
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
