"use client";
import Script from "next/script";
// import dynamic from "next/dynamic";

// const FooterComponent = dynamic(() => import("./components/footer/footer"), { ssr: false });
// const MobileStickyFooter = dynamic(() => import("./components/mobilsticky"), { ssr: false });

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script id="gtm-head" strategy="afterInteractive">
        {`
        
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5BCR427Z');


          `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5BCR427Z"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden",
          }}
        ></iframe>
      </noscript>
      {children}
      {/* <MobileStickyFooter mobileNumber="tel:07969084446"/> */}
    </>
  );
};

export default ClientLayout;
