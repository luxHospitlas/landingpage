"use client";
import { useInView } from "react-intersection-observer";



const DoctorCard = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
      
      <section className="w-[90%]" style={{
        margin:'auto'
      }}>
        <h2 className="text-2xl font-bold text-center text-indigo-900 mb-4">Our Top Doctors</h2>
          <div 
      ref={ref} 
      className={`flex flex-no-wrap justify-center items-center gap-8 mb-8 ${inView ? "opacity-100" : 'opacity-0'}`}>
        {/* Doctor Card */}
        <div className=" doctor_card bg-white rounded-xl shadow-md w-72 text-center transition-transform duration-300 hover:-translate-y-1 pb-5">
          <div className="bg-blue-100 flex items-center justify-center rounded-t-xl p-3">
            <img
            ref={ref}
              src="https://test.luxhospitals.com/wp-content/uploads/2025/03/dr-card.webp"
              alt="Dr. Samhitha Reddy"
              className={` max-w-[250px] h-auto mb-[-10px] ${inView ? "opacity-100" : 'opacity-0'}`}
            />
          </div>
          <div className="p-4">
            <h3 className="text-[14px] text-lg font-bold text-indigo-900">Dr Samhitha Reddy</h3>
            <p className="text-[12px] text-sm text-gray-600 mt-1">Gynacologist</p>
            <div className="flex items-center justify-center mt-2">
              <img
              ref={ref} 
                src="https://test.luxhospitals.com/wp-content/uploads/2025/03/Raiting.svg"
                alt="Star Rating"
                className={`w-24 ${inView ? "opacity-100" : 'opacity-0'}`}
              />
              <span className="text-blue-400 text-sm ml-2">(102)</span>
            </div>
            <button className="dbutton mt-4 border border-indigo-900 text-indigo-900 font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white">
              Book an Appointment
            </button>
          </div>
        </div>
        
        {/* Description Section */}
        <div className="max-w-md text-gray-600 text-sm leading-relaxed text-left md:text-center">
          <p className="extra_fonts">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div 
      ref={ref} 
      className={`flex flex-no-wrap flex-row-reverse justify-center items-center gap-8  ${inView ? "opacity-100" : 'opacity-0'}`}>
        {/* Doctor Card */}
        <div className="doctor_card bg-white rounded-xl shadow-md w-72 text-center transition-transform duration-300 hover:-translate-y-1 pb-5">
          <div className="bg-blue-100 flex items-center justify-center rounded-t-xl p-3">
            <img
            ref={ref}
              src="https://test.luxhospitals.com/wp-content/uploads/2025/03/dr-card.webp"
              alt="Dr. Samhitha Reddy"
              className={` max-w-[250px] h-auto mb-[-10px] ${inView ? "opacity-100" : 'opacity-0'}`}
            />
          </div>
          <div className="p-4">
            <h3 className="text-[14px] text-lg font-bold text-indigo-900">Dr Samhitha Reddy</h3>
            <p className="text-[12px] text-sm text-gray-600 mt-1">Gynacologist</p>
            <div className="flex items-center justify-center mt-2">
              <img
              ref={ref}
                src="https://test.luxhospitals.com/wp-content/uploads/2025/03/Raiting.svg"
                alt="Star Rating"
                className={`w-24 ${inView ? "opacity-100" : 'opacity-0'}`}
              />
              <span className="text-blue-400 text-sm ml-2">(102)</span>
            </div>
            <button className="dbutton mt-4 border border-indigo-900 text-indigo-900 font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white">
              Book an Appointment
            </button>
          </div>
        </div>
        
        {/* Description Section */}
        <div className="max-w-md text-gray-600 text-sm leading-relaxed text-left md:text-center">
          <p className="extra_fonts">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      </section>
    );
  };
  
  export default DoctorCard;
  