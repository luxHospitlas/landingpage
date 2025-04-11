import "./herostyles.css";
// import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";
export default function Hero({ heading, descList }) {
  const heroContent = {
    heroImage: "/happy patient.avif",
  };
  return (
    <>
      <section className="hero_section">
        <h1 className="fade-up hero_title hero-title font-500 px-[5px]">
          {heading}
        </h1>

        <div className="hero_content flex flex-wrap">
          <div className="left_hero">
            <Image
              src={heroContent.heroImage}
              alt="Lazy loaded"
              className="logo-fade hero_image"
              fill
            />
          </div>
          <div className="right_hero">
            <ul className="list_items_hero" lazyload="true">
              <ul className="list_items_hero" lazyload="true">
                {descList && descList.length > 0 ? (
                  descList.map((desc, index) => (
                    <li className="list_item_hero hero-text" key={index}>
                      {desc}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="list_item_hero hero-text">
                      Trusted doctors at your service
                    </li>
                    <li className="list_item_hero hero-text">
                      Advanced treatment options available
                    </li>
                    <li className="list_item_hero hero-text">
                      All major insurances accepted
                    </li>
                  </>
                )}
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
