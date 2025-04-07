
import './herostyles.css';
// import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import React from 'react';  
export default function Hero ({ heading, paragraph }) {
   

    const heroContent = {
        heroImage : '/happy patient.avif',
        descList : [
            'Piles are swollen blood vessels in the rectum.',
            'Piles are very common but not something.',
            'We are a team of experienced doctors who.',
            'If you are suffering from piles.',
            'We are here to help you'
        ],
    }
    return (
        <>
        <section
    
        className= "hero_section">
            <h1 
                className="fade-up hero_title hero-title font-500 px-[5px]" 
                >
                {heading}
            </h1>
  
           <div className='hero_content flex flex-wrap'>
            <div className="left_hero">                 
                <Image  src={heroContent.heroImage} alt="Lazy loaded"  className="logo-fade hero_image"  fill />                 
            </div>
            <div className="right_hero">
                <p>{paragraph}</p>
                <ul className='list_items_hero' lazyload="true" >
                {heroContent.descList.map((desc, index) => (
                    <li className='list_item_hero hero-text' key={index}>{desc}</li>
                ))}
            </ul>
          
            
            </div>
           </div>
        </section>
        </>
    )
}