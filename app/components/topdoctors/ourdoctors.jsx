"use client";
import { useInView } from "react-intersection-observer";



const DoctorCard = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      
      <section className="w-[90%]" style={{
        margin:'auto'
      }}>
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-4">Our top doctors</h2>

      <div className="doctors_container">
      <div className="doctors_card_contanier w-full h-auto flex items-center doctors_row_two transition-transform duration-300 hover:-translate-y-1 ">
          <div className="left_doctor">
          <div className=" doctor_card bg-white rounded-3xl shadow-md w-72 text-center">
            <div className="bg-blue-100 flex items-center justify-center rounded-t-3xl p-3 inner_doctor">
              <img
              ref={ref}
                src="/doctor.avif"
                alt="Dr. Samhitha Reddy"
                className={` max-w-[250px] h-auto mb-[-10px] ${inView ? "opacity-100" : 'opacity-0'}`}
              />
            </div>
            <div className="p-4 content_cars">
              <h3 className="text-lg font-bold text-indigo-900 doctor_name">Dr Samhitha Reddy</h3>
              <p className="text-sm text-gray-600 mt-1 designation">MBBS.</p>
              <p className="text-sm text-gray-600 mt-1 designation">Proctologist</p>
              <p className="text-sm text-gray-600 mt-1 designation">Experience: 8 yeasrs</p>
              {/* <div className="flex items-center justify-center mt-2">
                <img
                ref={ref} 
                  src="https://test.luxhospitals.com/wp-content/uploads/2025/03/Raiting.svg"
                  alt="Star Rating"
                  className={`w-24 ${inView ? "opacity-100" : 'opacity-0'}`}
                />
                <span className="text-blue-400 text-sm ml-2">(102)</span>
              </div> */}
              <button className="dbutton mt-4 border border-indigo-900 text-indigo-900 font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white">
                Book an Appointment
              </button>
            </div>
          </div>
          </div>
          <div className="right_content">
          <div className="text-gray-600  leading-relaxed text-left md:text-center">
            <p className="extra_fonts right_align">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum. 
              {/* Sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              <span className="hidden_class">
              sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sunt in culpa qui officia deserunt mollit anim id est laborum.
              {/* sunt in culpa qui officia deserunt mollit anim id est laborum.  */}
              {/* Sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              </span>
            </p>
          </div>
          </div>
        </div>
        <div className="doctors_card_contanier w-full h-auto flex items-center doctors_row_two transition-transform duration-300 hover:-translate-y-1 ">
          <div className="left_doctor">
          <div className=" doctor_card bg-white rounded-3xl shadow-md w-72 text-center">
            <div className="bg-blue-100 flex items-center justify-center rounded-t-3xl p-3 inner_doctor">
              <img
              ref={ref}
                src="/doctor.avif"
                alt="Dr. Samhitha Reddy"
                className={` max-w-[250px] h-auto mb-[-10px] ${inView ? "opacity-100" : 'opacity-0'}`}
              />
            </div>
            <div className="p-4 content_cars">
              <h3 className="text-lg font-bold text-indigo-900 doctor_name">Dr Samhitha Reddy</h3>
              <p className="text-sm text-gray-600 mt-1 designation">MBBS.</p>
              <p className="text-sm text-gray-600 mt-1 designation">Proctologist</p>
              <p className="text-sm text-gray-600 mt-1 designation">Experience: 8 yeasrs</p>
              {/* <div className="flex items-center justify-center mt-2">
                <img
                ref={ref} 
                  src="https://test.luxhospitals.com/wp-content/uploads/2025/03/Raiting.svg"
                  alt="Star Rating"
                  className={`w-24 ${inView ? "opacity-100" : 'opacity-0'}`}
                />
                <span className="text-blue-400 text-sm ml-2">(102)</span>
              </div> */}
              <button className="dbutton mt-4 border border-indigo-900 text-indigo-900 font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white">
                Book an Appointment
              </button>
            </div>
          </div>
          </div>
          <div className="right_content">
          <div className="text-gray-600  leading-relaxed text-left md:text-center">
            <p className="extra_fonts right_align">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum. 
              {/* Sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              <span className="hidden_class">
              sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sunt in culpa qui officia deserunt mollit anim id est laborum.
              {/* sunt in culpa qui officia deserunt mollit anim id est laborum.  */}
              {/* Sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              </span>
            </p>
          </div>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default DoctorCard;
  