import Hero from '../components/hero/hero';

const contentMap = {
    piles: {
      heading: "Get Relief from Piles Today",
      paragraph: "Lux Hospitals offers advanced treatment with quick recovery.",
    },
    fistula: {
      heading: "Fistula Treatment at Lux Hospitals",
      paragraph: "Safe, expert-led care for lasting relief.",
    },
    fissure: {
      heading: "Say Goodbye to Painful Fissures",
      paragraph: "Quick, minimally invasive treatments for fast healing.",
    },
    pilonidal: {
      heading: "Effective Pilonidal Sinus Treatment",
      paragraph: "Painless laser surgery. Same-day discharge available.",
    },
    circumcision: {
      heading: "Laser Circumcision at Lux Hospitals",
      paragraph: "Quick, safe, and virtually painless procedure.",
    },
    hydrocele: {
      heading: "Hydrocele Treatment by Experts",
      paragraph: "Day care surgery. No visible scars. Fast recovery.",
    },
    varicocele: {
      heading: "Advanced Varicocele Surgery",
      paragraph: "Minimally invasive solutions for long-term comfort.",
    },
    hernia: {
      heading: "Hernia Repair Surgery at Lux Hospitals",
      paragraph: "Laparoscopic solutions for quick recovery and less pain.",
    },
  };
  

  export default function ConditionPage({ params }) {
    const { condition } = params;
    const content = contentMap[condition] || {
      heading: "Lux Hospitals",
      paragraph: "Trusted care for all specialties.",
    };
  
    return (
      <>
        <Hero heading={content.heading}  />
      </>
    );
  }