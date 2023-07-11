/** @jsxImportSource @emotion/react */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WhoWeArePaper from "fragments/paper/whoWeAre";

export default function HomeSlide() {
  return (
    <Carousel
      showThumbs={false}
      showArrows = {false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          marginLeft: 20,
          marginTop: 50,
          display: "inline-flex",
          backgroundColor: "#FFF",
          border: "1px solid #7C35AB",
          cursor: "pointer",
          padding: "0.4%",
          borderRadius: "50%",
          zIndex: "99",
        };
        const style = isSelected
          ? { ...defStyle, backgroundColor: "#7C35AB" }
          : { ...defStyle };
        return (
          <div
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            data-value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          ></div>
        );
      }}
    >
      <div
        css={{
          display: "grid",
          gridTemplateRows: "90% 10%",
          marginTop: "0.125rem",
          height: "500px",
        }}
      >
        <WhoWeArePaper />
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateRows: "90% 10%",
          marginTop: "0.125rem",
          height: "500px",
        }}
      >
        <WhoWeArePaper />
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateRows: "90% 10%",
          marginTop: "0.125rem",
          height: "500px",
        }}
      >
        <WhoWeArePaper />
      </div>
      <WhoWeArePaper />
      <WhoWeArePaper />
    </Carousel>
  );
}

export const SignupSlides = () => {
  return <></>;
};
