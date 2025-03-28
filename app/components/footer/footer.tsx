"use client";
import Image from 'next/image';
import Link from 'next/link';
import './footerstyles.css';
import { useInView } from "react-intersection-observer";

const data = {
  description: 'Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam. Vel massa commodo viverra.Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam',
  logo: '/lux logo final .png',
  forpatients: [
    { text: 'About Us', url: '#' },
    { text: 'FAQs', url: '#' },
    { text: 'Contact Us', url: '#' },
    { text: 'Blogs', url: '#' }
  ],
  centerofexcellence: [
    { text: 'Proctology', url: '#' },
    { text: 'Laparoscopic surgeries', url: '#' },
    { text: 'Urology', url: '#' },
    { text: 'Gynecology', url: '#' },
    { text: 'Plastic and Cosmetic Surgeries', url: '#' }
  ],
  // followus: [
  //   { text: 'Facebook', url: '#', img: '/youtube logo.png' },
  //   { text: 'Instagram', url: '#', img: '/youtube logo.png' },
  //   { text: 'LinkedIn', url: '#', img: '/youtube logo.png' },
  //   { text: 'YouTube', url: '#', img: '/youtube logo.png' }
  // ]
  contactus: {
    address: "Lux hospitals - Plot No. 116, Lumbini Enclave Hitech city main road, Gachibowli, Near IKEA, Hyderabad, 500081.",
    phone: "07969084444",
    email: "care@luxhospitals.com",
    website: "www.luxhospitals.com",
  }
};

const FooterComponent = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="footer bg-white" ref={ref}>
      <div className="inner_footer">
       
        <div className="column c_one">
          <Link href="#" className="footer_logo" >
            <Image src={data.logo} alt="Logo" width={200} height={60}  className={`logo-fade ${inView ? "fade-in" : "opacity-0"}`}/>
          </Link>
          <p className="text-gray-600 mt-2 footer_description">{data.description}</p>
        </div>

       
        <div className="inner_second_footer">
          <div className="column c_three">
            <h3 className="font-semibold mb-2">Center of Excellence</h3>
            <ul>
              {data.centerofexcellence.map((item, index) => (
                <li key={index} className="excellence_list">
                  <Link href={item.url}>
                    <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           {/* Contact Us Section */}
           <div className="column c_four">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-700 mb-[10px]">{data.contactus.address}</p>
            <p className="text-gray-700 mb-[10px]">📞 {data.contactus.phone}</p>
            <p className="text-gray-700 mb-[10px]">✉️ <Link href={`mailto:${data.contactus.email}`} className="hover:text-blue-500">{data.contactus.email}</Link></p>
            <p className="text-gray-700 mb-[10px]">🌐 <Link href={`https://luxhospitals.com/`} className="hover:text-blue-500">{data.contactus.website}</Link></p>
          </div>
          
        
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
