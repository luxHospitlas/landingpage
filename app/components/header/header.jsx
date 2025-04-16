
import Link from "next/link";
import "./headerstyles.css";

export default function Header() {
   

    // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <header className="header">
            
            <div className="header__logos" >
                <a href="#"><img className="logo-fade header__logo" src="/lux logo final.avif" alt="logo"  width={140} height={60}/></a>
    <a href="#"><img className="logo-fade header__logotwo" src="https://luxhospitals.com/wp-content/uploads/2025/04/iso-gold-logo-NEW.png" alt="logo" /></a>
    <a href="#"><img className="logo-fade header__logothree" src="/TRAIL.svg" alt="logo" /></a>
            </div>

           
            <nav className="header__menu">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </nav>

          
            <div className="header__cta">
                <Link href="tel: 07969084448" className="header_cta_type_one"><span className="phone_number ">07969084448</span> <span className="call_now">Call Now</span></Link>
            </div>
        </header>
    );
}
