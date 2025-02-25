import React from "react";
import { smallSphere, stars } from "../assets";
import Sections from "./Sections";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";
const Pricing = () => {
  return (
    <Sections className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex ">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 w-[60rem] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag="get started with Brainwave"
          title="Pay once, Use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Sections>
  );
};

export default Pricing;
