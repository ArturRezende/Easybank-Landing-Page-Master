import React from "react";

//main - components
import Hero from "./Hero";
import WhyEasyBank from "./WhyEasyBank";
import LatestArticles from "./LatestArticles";

const Main = (props) => {
  return (
    <main>
      <Hero />
      <WhyEasyBank />
      <LatestArticles />
    </main>
  );
};

export default Main;
