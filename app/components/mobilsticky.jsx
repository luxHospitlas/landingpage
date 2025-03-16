import Image from "next/image";

const MobileStickyFooter = () => {
  return (
    <section className="fixed bottom-0 left-0 w-full max-w-full md:hidden bg-white shadow-md z-50 overflow-hidden">

      <div className="w-full flex justify-between items-stretch">
        {/* WhatsApp CTA */}
        <div className="flex-1 bg-purple-600 text-center py-3 ">
          <a href="https://wa.me/your-number" className="flex flex-col items-center text-white text-[12px] text-sm font-500" style={{
            rowGap:'5px'
          }}>
            <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            <span> WhatsApp</span>
          </a>
        </div>

        {/* Book Appointment CTA */}
        <div className="flex-1 bg-purple-600 text-center py-3">
          <a href="your-booking-link" className="flex flex-col items-center text-white text-[12px] font-500"style={{
            rowGap:'5px'
          }}>
            <Image src="/schedule.svg" alt="Book Appointment" width={24} height={24} />
            <span>Book An Appointment</span>
          </a>
        </div>

        {/* Online Consultation CTA */}
        <div className="flex-1 bg-purple-600 text-center py-3">
          <a href="your-online-consultation-link" className="flex flex-col  text-white items-center text-[12px] text-sm font-500"style={{
            rowGap:'5px'
          }}>
            <Image src="/telemedicine.svg" alt="Online Consultation" width={24} height={24} />
            <span>Online <br></br> Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileStickyFooter;
