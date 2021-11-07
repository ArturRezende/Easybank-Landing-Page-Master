import React from "react";
import { HeroBg } from "./style-main/Hero";

//images
import ImgHero from "./img/image-mockups.png";

const SectionHero = (props) => {
  return (
    <HeroBg className="hero">
      {/* hero - description */}
      <div className="hero__description">
        <h1>
          <span>Next generation</span>
          <span>digital banking</span>
        </h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button type="button" className="request-invite">
          Request Invite
        </button>
      </div>

      {/* hero - image */}
      <div className="hero__img">
        <img src={ImgHero} alt="hero-img-easybank" />
      </div>
    </HeroBg>
  );
};

export default SectionHero;
