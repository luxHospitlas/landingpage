import Doctordetailspagehero from "../../../components/doctorcomponents/doctorshero";
import { doctors } from "../../../lib/doctordetailsdata";
import ConditionsWeTreat from "../../../components/whatwetreat/wetreat";
import HospitalComparison from "../../../components/Treatmenttable/Hospitalcomparison";
import Faqs from "../../../components/faqs/faq";
import Dpatientloveuse from "../../../components/doctorcomponents/patientloveus";
import StarRating from "../../../components/doctorcomponents/StarRating";
export default function DoctorDetail({ params }) {
  const { department, drname } = params;

  const doctor = doctors.find(
    (doc) => doc.department === department && doc.slug === drname
  );

  if (!doctor) {
    return <div>Doctor not found</div>;
  }
  const content = {
    fheading: "Frequently Asked Questions",
    faqs: [
      {
        faqTitle: "What is the experience of Dr. Noah Bennett?",
        faqAnswer:
          "Dr. Noah Bennett has over 10 years of experience in endodontics.",
      },
      {
        faqTitle: "What are the common procedures performed by Dr. Bennett?",
        faqAnswer:
          "Dr. Bennett specializes in root canal treatments, retreatments, and other endodontic procedures.",
      },
      {
        faqTitle: "What are the common procedures performed by Dr. Bennett?",
        faqAnswer:
          "Dr. Bennett specializes in root canal treatments, retreatments, and other endodontic procedures.",
      },
      {
        faqTitle: "What are the common procedures performed by Dr. Bennett?",
        faqAnswer:
          "Dr. Bennett specializes in root canal treatments, retreatments, and other endodontic procedures.",
      },
      {
        faqTitle: "What are the common procedures performed by Dr. Bennett?",
        faqAnswer:
          "Dr. Bennett specializes in root canal treatments, retreatments, and other endodontic procedures.",
      },
      {
        faqTitle: "What are the common procedures performed by Dr. Bennett?",
        faqAnswer:
          "Dr. Bennett specializes in root canal treatments, retreatments, and other endodontic procedures.",
      },
    ],
  };
  const testimonials = [
    {
      name: "John D.",
      role: "Company CEO",
      image: "https://img.heroui.chat/avatar?w=200&h=200&u=john",
      rating: 4,
      review:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
    {
      name: "Ava A.",
      role: "Marketing Manager",
      image: "https://img.heroui.chat/avatar?w=200&h=200&u=ava",
      rating: 4,
      review:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
    {
      name: "James D.",
      role: "Small Business Owner",
      image: "https://img.heroui.chat/avatar?w=200&h=200&u=james",
      rating: 4,
      review:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
    {
      name: "Olivia I.",
      role: "Software Engineer",
      image: "https://img.heroui.chat/avatar?w=200&h=200&u=olivia",
      rating: 4,
      review:
        "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    },
  ];

  return (
    <>
      <Doctordetailspagehero doctor={doctor} />
      <ConditionsWeTreat />
      <HospitalComparison />
      <Dpatientloveuse testimonials={testimonials} StarRating={StarRating} />
      <Faqs
        fheading={content.fheading}
        faqs={content.faqs.map((faq) => ({
          faqquestion: faq.faqTitle,
          faqanswer: faq.faqAnswer,
        }))}
      />
    </>
  );
}
