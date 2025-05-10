"use client";
import "./freeopdstyles.css";
import { handleWhatsappConnection } from '../../careconsole';


export default function FreeOpdSection() {
    return (
        <div className="w-full">
            {/* <h2 className="mt-8 text-3xl font-semibold text-center text-indigo-900 mb-6">
                Get a Free Consultation
            </h2> */}

            <section
                className="freeopd-section w-[96%] md:w-[80%] my-8 mx-auto  rounded-xl shadow bg-[#1a1a1a]"
            >
                <div className="flex  md:p-0 flex-col md:flex-row items-center justify-between gap-8">

                    {/* Text Content Section */}
                    <div className="freeoldcontetdiv w-full px-2 pt-10 md:p-10 md:w-1/2 text-center">
                        <h2 className="freeopd-heading mt-4 text-2xl md:text-3xl font-semibold text-white">
                            Get a Free Consultation
                        </h2>
                        <h2 className="freeopd-content text-xl md:text-xl font-medium text-white mt-6 mb-4 leading-relaxed">
                            Right treatment begins with an accurate opinion. <br />
                            Lux Hospitals offers Free OPD—Patient First, Always.
                        </h2>
                        <button
                            className="freeopd-btn mt-4 px-8 py-3 bg-white text-black text-lg font-medium rounded-full hover:bg-indigo-900 hover:text-white transition-transform duration-300 hover:-translate-y-1"
                            onClick={(e) => {
                                e.preventDefault();
                                handleWhatsappConnection("FreeOPD");
                            }}
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/FreeOPDAnimated.png"
                            alt="Free OPD"
                            className="w-full max-w-sm"
                        />
                    </div>

                </div>
            </section>


        </div>
    );
}
