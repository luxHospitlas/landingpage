
import Link from "next/link";
import "./headerstyles.css";

export default function Header() {
   

    // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <header className="header">
            
            <div className="header__logos" >
                <a href="#"><img className="logo-fade header__logo" src="/lux logo final.avif" alt="logo"  width={140} height={60}/></a>
    <a href="#"><img className="logo-fade header__logotwo" src="/ISO.svg" alt="logo" /></a>
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
                <Link href="#" className="header_cta_type_one">+91123456789</Link>
            </div>
        </header>
    );
}
