import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WhoWeArePaper from "fragments/paper/whoWeAre";

export default function HomeSlide() {
  return (
    <Carousel showThumbs={false}>
  
        <WhoWeArePaper />
  
      <WhoWeArePaper />
      <WhoWeArePaper />
    </Carousel>
  );
}

export const SignupSlides = () => {
  return <></>;
};
