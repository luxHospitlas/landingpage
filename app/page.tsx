"use client";
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation'
// Static imports (always needed immediately)
import Hero from './components/hero/hero';
import Second from './components/second/second';
import HospitalLocation from './components/HospitalLocation/hospitallocations';

// Dynamic imports (lazy-loaded for better performance)
const DoctorCard = dynamic(() => import('./components/topdoctors/ourdoctors'));
const HospitalComparison = dynamic(() => import('./components/Treatmenttable/Hospitalcomparison'));
const Accreditations = dynamic(() => import('./components/Accreditions/accreditions'));
const VideoSection = dynamic(() => import('./components/Videosection/videos'));
const PatientTalks = dynamic(() => import('./components/Patienttalks/patients'));
const Luxgpt = dynamic(() => import('./components/luxgpt/luxgpt'));
const Whatare = dynamic(() => import('./components/what/whatare'));
const Faqs = dynamic(() => import('./components/faqs/faq'));

export default function Home() {
  const pathname = usePathname();

  let heroHeading = "Default Heading";
  let heroParagraph = "Default paragraph content.";

  if(pathname.includes('piles')) {
    heroHeading = "Get Relief from Piles Today";
    heroParagraph = "Lux Hospitals offers advanced treatment with quick recovery.";
  } else if(pathname.includes('fistula')) {
    heroHeading = "Fistula Treatment at Lux Hospitals";
    heroParagraph = "Safe, expert-led care for lasting relief.";
  }
  return (
    <>
      <Hero  heading={heroHeading} paragraph={heroParagraph} />
      <Second />
      <HospitalLocation />
      <DoctorCard />
      <HospitalComparison />
      <Accreditations />
      <VideoSection />
      <PatientTalks />
      <Luxgpt />
      <Whatare />
      <Faqs />
    </>
  );
}



// import Hero from './components/hero/hero';
// import Faqs from './components/faqs/faq';
// import Whatare from './components/what/whatare';
// import Luxgpt from './components/luxgpt/luxgpt';
// import VideoSection from './components/Videosection/videos';
// import PatientTalks from './components/Patienttalks/patients';
// import Second from './components/second/second';
// import HospitalLocation from './components/HospitalLocation/hospitallocations';
// import HospitalComparison from './components/Treatmenttable/Hospitalcomparison';
// import Accreditations from './components/Accreditions/accreditions';
// import DoctorCard from './components/topdoctors/ourdoctors';
// export default function Home() {
//   return (
//     <>
//     <Hero />
//     <Second />
//     <HospitalLocation />
//     <DoctorCard />
//     <HospitalComparison />
//     <Accreditations />
//     <VideoSection />
//     <PatientTalks />
//     <Luxgpt />
//     <Whatare />
//     <Faqs />
//     </>
//   );
// }
