import React from "react";
import Buttoncart from "./buttoncart"; // Corrected component name and import path
import plans from "../assets/JSON fILES/plan.json";
import Slider from "react-slick";

type PlanCategory = {
  title: string;
  description: string;
};

type PlansObject = {
  [key: string]: PlanCategory[];
};

const Plans = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    rtl: true
  };

  return (
    <div className="my-12">
      <Slider {...settings}>
        {Object.keys(plans).map((planKey: keyof PlansObject, index) => (
          <div key={`${planKey}-${index}`} className="shadow-xl rounded-lg w-20 mb-12">
            <div className="relative flex justify-center overflow-hidden">
              <img
                src="/plans.png"
                alt="footerimage"
                width={408}
                height={113.34}
                className="rounded-t-lg"
              />
              <h1 className="absolute top-[60%] px-6 text-white font-black">
                {planKey}
              </h1>
            </div>
            <div>
              <div className="text-black flex flex-col gap-1 py-2 font-large">
                {(plans as PlansObject)[planKey].map((item, index) => (
                  <div key={`${planKey}-${index}`} className="flex mx-auto">
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center hover:scale-105">
                <Buttoncart />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Plans;
