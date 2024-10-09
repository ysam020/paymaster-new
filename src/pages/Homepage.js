import React from "react";
import Banner from "../components/homepage/Banner";
import RatingSection from "../components/homepage/RatingSection";
import Features from "../components/homepage/Features";
import Partners from "../components/homepage/Partners";

function Homepage() {
  return (
    <div>
      <Banner />
      <RatingSection />
      <Features />
      <Partners />
    </div>
  );
}

export default Homepage;
