import Hero from "../components/hero/hero";

const contentMap = {
  "best-piles-lady-doctor-in-hyderabad": {
    heading: "Best Piles Lady Doctor in Hyderabad",
    point: "Expert Piles Treatment by Dr. Samhitha Reddy",
    tablehead: "Types of Piles Treatments",
    insurance:
      "Check if piles treatment is covered under your health insurance policy for a hassle-free procedure.",
    getEstimate:
      "The price of piles treatment depends on severity, type of procedure, hospital charges, and post-treatment care.",
    whatAreH: "What Is Piles Treatment?",
    whatAreP:
      "Piles, also known as hemorrhoids, are swollen veins in the rectum or anus that cause pain, itching, bleeding, and discomfort. At Lux Hospitals, expert doctor Dr. Samhitha Reddy provides advanced treatment options, including laser surgery, stapler hemorrhoidectomy, and minimally invasive procedures for effective and long-term relief.",
    whatHead: "Types of Piles Treatments",
    treatments: [
      {
        title: "Laser Treatment",
        description: "Minimally invasive, less pain, faster recovery.",
      },
      {
        title: "Stapler Hemorrhoidectomy",
        description: "Removes excess tissue and repositions hemorrhoids.",
      },
      {
        title: "Open Hemorrhoidectomy",
        description: "Recommended for severe cases, involves surgical removal.",
      },
      {
        title: "Doppler-Guided Ligation",
        description: "Cuts off blood supply to hemorrhoids for shrinkage.",
      },
    ],
    faqs: [
      {
        faqTitle: "What are the symptoms of piles?",
        faqAnswer:
          "Pain, itching, swelling, and bleeding during bowel movements are common symptoms.",
      },
      {
        faqTitle: "Can piles be treated without surgery?",
        faqAnswer:
          "Yes, early piles can be treated non-surgically. Severe cases may require surgery for effective relief from pain, bleeding, and complications.",
      },
      {
        faqTitle: "How long does it take to recover from piles surgery?",
        faqAnswer:
          "Laser piles surgery allows recovery within 2–5 days, while traditional surgery may take 2–3 weeks.",
      },
      {
        faqTitle:
          "Where can I find the best lady doctor for piles treatment in Hyderabad?",
        faqAnswer:
          "Dr. Samhitha Reddy at Lux Hospitals is an expert in painless piles treatment.",
      },
      {
        faqTitle: "How much does piles treatment cost in Hyderabad?",
        faqAnswer:
          "The cost ranges from ₹20,000 – ₹80,000, depending on the treatment type and hospital facilities.",
      },
      {
        faqTitle: "Is piles treatment covered by insurance?",
        faqAnswer:
          "Yes, most health insurance plans cover piles treatment. Contact Lux Hospitals for claim assistance.",
      },
    ],
  },

  "top-piles-female-doctor-in-hyderabad": {
    heading: "Top Piles Female Doctor in Hyderabad",
    point: "Expert Piles Treatment by Dr. Samhitha Reddy",
    tablehead: "Types of Piles Treatments",
    insurance:
      "Check if piles treatment is covered under your health insurance policy for a hassle-free procedure.",
    getEstimate:
      "The price of piles treatment depends on severity, type of procedure, hospital charges, and post-treatment care.",
    whatAreH: "What Is Piles Treatment?",
    whatAreP:
      "Piles, or hemorrhoids, are swollen veins in the rectum or anus, causing pain, itching, bleeding, and discomfort. At Lux Hospitals, top specialist Dr. Samhitha Reddy provides advanced treatments like laser surgery, stapler hemorrhoidectomy, and minimally invasive procedures for long-lasting relief.",
    whatHead: "Types of Piles Treatments",
    treatments: [
      {
        title: "Laser Treatment",
        description: "Minimally invasive, faster recovery, and less pain.",
      },
      {
        title: "Stapler Hemorrhoidectomy",
        description: "Removes excess tissue and repositions hemorrhoids.",
      },
      {
        title: "Open Hemorrhoidectomy",
        description: "Suitable for severe cases, involves surgical removal.",
      },
      {
        title: "Doppler-Guided Ligation",
        description: "Cuts off blood supply to hemorrhoids for shrinkage.",
      },
    ],
    faqs: [
      {
        faqTitle: "What are the symptoms of piles?",
        faqAnswer:
          "Pain, itching, swelling, and bleeding during bowel movements are common symptoms.",
      },
      {
        faqTitle: "Can piles be treated without surgery?",
        faqAnswer:
          "Early piles can be managed with medications and lifestyle changes. Severe cases may require surgery.",
      },
      {
        faqTitle: "How long is the recovery after piles surgery?",
        faqAnswer:
          "Laser treatment allows recovery in 2–5 days, while traditional surgery may take 2–3 weeks.",
      },
      {
        faqTitle:
          "Who is the top female doctor for piles treatment in Hyderabad?",
        faqAnswer:
          "Dr. Samhitha Reddy at Lux Hospitals specializes in painless piles treatment.",
      },
      {
        faqTitle: "What is the cost of piles treatment in Hyderabad?",
        faqAnswer:
          "The cost varies from ₹20,000 – ₹80,000, based on the procedure and hospital facilities.",
      },
      {
        faqTitle: "Is piles treatment covered by insurance?",
        faqAnswer:
          "Yes, most health insurance plans cover it. Contact Lux Hospitals for assistance with claims.",
      },
    ],
  },

  //... Add other objects similarly corrected (omitted here for brevity)

  // Default fallback content
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
      <Hero heading={content.heading} />
    </>
  );
}
