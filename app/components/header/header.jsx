"use client";

import Link from "next/link";
import "./headerstyles.css";

export default function Header() {


    const scrollToSection = (id) => {

        if (!id) {
            window.history.pushState(null, '', `#${id}`);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            window.history.pushState(null, '', `#${id}`);
            window.scrollTo({
                top: element.offsetTop - 175,
                behavior: 'smooth',
            });
        }
    };
    

    return (
        <header className="header">

            <div className="header__logos" >
                <a href="#"><img className="logo-fade header__logo" src="/LogoLux.png" alt="logo" width={140} height={60} /></a>
                <a href="#"><img className="logo-fade header__logotwo" src="/isoshadow.png" alt="logo" /></a>
                <a href="#"><img className="logo-fade header__logothree" src="/nabhshodow.png" alt="logo" /></a>
            </div>


            <nav className="header__menu">
                <ul>
                    {[{ link: "", value: "Home" }, { link: "doctors", value: "Doctors" }, { link: "reviews", value: "Reviews" }, { link: "faqs", value: "FAQ's" }, { link: "contact", value: "Contact" }].map((item, index) => (
                        <li key={index} onClick={() => scrollToSection(item.link)} style={{ "cursor": "pointer" }}>
                            {item.value}
                        </li>
                    ))}
                </ul>
            </nav>


            <div className="header__cta">
                <Link href="tel:07969084448" className="header_cta_type_one flex items-center gap-2">
                    <img src="/phone-call-icon svg.svg" alt="Call Icon" className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="phone_number">07969084448</span>
                    <span className="call_now">Call Now</span>
                </Link>
            </div>
        </header>
    );
}


