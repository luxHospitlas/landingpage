"use client";

// import dynamic from "next/dynamic";

// const FooterComponent = dynamic(() => import("./components/footer/footer"), { ssr: false });
// const MobileStickyFooter = dynamic(() => import("./components/mobilsticky"), { ssr: false });

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      {/* <MobileStickyFooter mobileNumber="tel:07969084446"/> */}
    </>
  );
};

export default ClientLayout;
