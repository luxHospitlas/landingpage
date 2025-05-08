"use client";
import "./freeopdstyles.css";


export default function FreeOpdSection() {
    return (
        <div className="w-full">
            {/* <h2 className="mt-8 text-3xl font-semibold text-center text-indigo-900 mb-6">
                Get a Free Consultation
            </h2> */}

            <section
                className="freeopd-section w-[96%] md:w-[80%] mt-10 mx-auto my-4 p-10 rounded-xl shadow bg-cover bg-center"
            >
                <h2 className="freeopd-heading mt-8 text-2xl md:text-3xl font-semibold text-center text-white">
                    Get a Free Consultation
                </h2>
                <div className="flex flex-col items-center text-center">
                    <h2 className="freeopd-content text-xl md:text-3xl font-small text-white mt-8 mb-4">
                        Right treatment begins with an accurate opinion. <br />
                        Lux Hospitals offers Free OPD—Patient First, Always.
                    </h2>
                    <button
                        className=" freeopd-btn mb-4 mt-4 px-8 py-2 md:mb-8 md:mt-8 md:px-8 md:py-4 bg-white text-black text-xl font-medium rounded-full hover:bg-gray-100 transition transition-transform duration-300 hover:-translate-y-1 hover:bg-indigo-900 hover:text-white"
                        onClick={() => (window.location.href = "tel:917969084448")}
                    >
                        Book Now
                    </button>
                </div>
            </section>
        </div>
    );
}
