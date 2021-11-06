import React from "react";

//images
import Hero from "./img/image-mockups.png";

const SectionHero = (props) => {
  return (
    <section>
      <img src={Hero} alt="hero" style={{ width: "100%" }} />
    </section>
  );
};

export default SectionHero;
