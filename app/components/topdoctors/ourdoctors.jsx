"use client";

const DoctorCard = ({
  url,
  name,
  qualification,
  designation,
  experience,
  description,
}) => {
  return (
    <div
    id="doctors"
      className="doctors_card_contanier w-full h-auto flex items-center doctors_row_two transition-transform duration-300 hover:-translate-y-1 "
    >
      <div className="left_doctor">
        <div className=" doctor_card bg-white  shadow-md w-72 text-center">
          <div className="bg-blue-100 flex items-center justify-center rounded-t-3xl p-3 inner_doctor">
            <img
              src={url}
              alt="Dr. Samhitha Reddy"
              className={` max-w-[250px] h-auto mb-[-12px] opacity-100 `}
            />
          </div>
          <div className="p-4 content_cars">
            <h3 className="text-lg font-bold text-indigo-900 doctor_name">
              {name}
            </h3>
            <p className="text-sm text-gray-600  designation">
              {" "}
              {qualification}
            </p>
            <p className="text-sm text-gray-600  designation">
              {designation}
            </p>
            <p className="text-sm text-gray-600  designation">
              {experience}
            </p>
            {/* <div className="flex items-center justify-center mt-2">
                <img
                ref={ref} 
                  src="https://test.luxhospitals.com/wp-content/uploads/2025/03/Raiting.svg"
                  alt="Star Rating"
                  className={w-24 ${inView ? "opacity-100" : 'opacity-0'}}
                />
                <span className="text-blue-400 text-sm ml-2">(102)</span>
              </div> */}
            <a href="https://wa.me/917969084444">
              <button className="dbutton mt-4 border border-indigo-900 text-indigo-900 font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-indigo-900 hover:text-white">
                Book an Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="right_content">
        <div className="text-gray-600  leading-relaxed text-left md:text-center">
          <p className="extra_fonts right_align doctor_desktop_description">
            {description}
            {/* <span className="hidden_class">
                {description}
              </span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
