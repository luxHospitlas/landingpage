"use client";

export default function FreeOpdSection() {
  return (
    <section className="w-[96%] md:w-[80%] mx-auto my-8 p-6 bg-[#99509F] rounded-xl shadow">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
        <h2 className="text-xl font-medium	 text-white text-center md:text-left flex-1">
        Right treatment begins with an accurate opinion.
        Lux Hospitals offers Free OPD—Patient First, Always.
        </h2>
        <div className="w-full md:w-auto md:ml-auto">
          <button
            className="px-6 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition w-full md:w-auto"
            onClick={() => window.location.href = 'tel:917969084448'}
          >
            Get Free OPD
          </button>
        </div>
      </div>
    </section>
  );a
}
