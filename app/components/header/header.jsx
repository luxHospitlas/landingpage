"use client";

import Link from "next/link";
import "./headerstyles.css";

export default function Header({
  PhoneNumber,
  mobilectatext,
  mobileNumberHeader,
}) {
  const scrollToSection = (id) => {
    if (!id) {
      window.history.pushState(null, "", `#${id}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      window.scrollTo({
        top: element.offsetTop - 175,
        behavior: "smooth",
      });
    }
  };

  const handleCTAclick = (ctaLabel) => {
    console.log("CTA Clicked:", ctaLabel); // First confirmation
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cta_click",
      cta_label: ctaLabel,
    });
    console.log("DataLayer now:", window.dataLayer); // Second confirmation
  };

  return (
    <header className="header">
      <div className="header__logos">
        <a href="#">
          <img
            className="logo-fade header__logo"
            src="/LogoLux.png"
            alt="logo"
            width={140}
            height={60}
          />
        </a>
        <a href="#">
          <img
            className="logo-fade header__logotwo"
            src="/isoshadow.png"
            alt="logo"
          />
        </a>
        <a href="#">
          <img
            className="logo-fade header__logothree"
            src="/nabhshodow.png"
            alt="logo"
          />
        </a>
      </div>

      <nav className="header__menu">
        <ul>
          {[
            { link: "", value: "Home" },
            { link: "doctors", value: "Doctors" },
            { link: "reviews", value: "Reviews" },
            { link: "faqs", value: "FAQ's" },
            { link: "contact", value: "Contact" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.link)}
              style={{ cursor: "pointer" }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__cta">
        <a
          href={mobileNumberHeader}
          className="header_cta_type_one flex items-center gap-2"
        >
          <img
            src="/phone-call-icon svg.svg"
            alt="Call Icon"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span className="phone_number">{PhoneNumber}</span>
          <span
            suppressHydrationWarning
            data-cta="header cta call button"
            className="call_now gtm-cta"
            onClick={() => handleCTAclick("Book Appointment header right")}
          >
            {mobilectatext}
          </span>
        </a>
      </div>
    </header>
  );
}
