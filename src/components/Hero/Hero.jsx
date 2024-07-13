import React from "react";
import HeroImg from "../../assets/hero.png";
import heroBg from "../../assets/heroBg.png";
import PrimaryButton from "../shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${heroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={BgStyle} className="relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 
            place-items-center min-h-[600px]"
           >
            <div className="space-y-7 text-dark order-2 sm:order-1">
              <h1 data-aos="fade-up" className="text-5xl ">
                Fresh & Healthy <br />
                Meal Plan {""}
                <span
                  className="text-secondary 
                    font-cursive text-7xl"
                >
                  Delivery
                </span>
                {""}
                <br /> in Alimosho
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
                Delicious Meal Delivered To Your Door From N200:00 per Day!!!
              </p>
              <div data-aos="fade-up" data-aos-delay="500">
                <PrimaryButton />
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="relative z-30 order-1 sm:order-2"
            >
              <img
                src={HeroImg}
                alt="hero-image"
                className="w-full sm:scale-125 sm-translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;