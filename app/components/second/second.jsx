"use client";
import Image from 'next/image';
import './sstyles.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Second() {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const services = [
        {
            image: "/Book an appointment.avif",
            title: "Book Doctor Appointment",
            // description: "Connect Within 60 Seconds. Connect Within 60 Seconds.",
            bgColor: "bg-green-200",
            arrow: "/Arrow.svg"
        },
        {
            image: "/Get consultation.avif",
            title: " Online Consultation",
            // description: "Confirmed Appointments. Confirmed Appointments.",
            bgColor: "bg-yellow-200",
            arrow: "/Arrow.svg"
        },
        {
            image: "/secondopinion.avif",
            title: "Get Expert Second Opinion",
            description: "Essentials At Your Doorstep. Essentials At Your Doorstep.",
            bgColor: "bg-pink-200",
            arrow: "/Arrow.svg"
        },
        {
            image: "/Health insurence.avif",
            title: "Insurance and Estimation",
            // description: "Simple Pickup At Your Home. Simple Pickup At Your Home.",
            bgColor: "bg-blue-200",
            arrow: "/Arrow.svg"
        }
    ];
    

    return (
        <section
        
        className= "second_section grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 fade-in">
            {services.map((service, index) => (
                <div key={index}
                
                className="sessioncards rounded-xl overflow-hidden shadow-lg">
                    <div className="relative w-full h-40">
                    
                <Image
                ref={ref}
                src={service.image} 
                alt={service.title} 
                    layout="fill"
                    objectFit="cover"
                    className={`rounded-t-lg ${inView ? "fade-in" : "opacity-0"}`}
                    
    
                />
            

                    </div>
                    <div className=" flex content_Card items-center justify-center gap-2">
                        <div>
                            <h2 className="service_title font-semibold">{service.title}</h2>
                            
                        </div>
                        <div>
                            <Image className='arrowimg' src={service.arrow} alt="arrow-buttons" width={40} height={40}/>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
