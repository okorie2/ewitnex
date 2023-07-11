/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";

interface ISpeaker {
  img: string;
  name: string;
  role: string;
  title: string;
}

const Speaker = (props: ISpeaker) => {
  return (
    <div
      css={{
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        css={{
          width: "177px",
          height: "194px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Image
          src={props.img}
          alt=""
          css={{
            objectPosition: "center",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          fill
        />
      </div>
      <div css={{ marginTop: "0.7rem" }}>
        <h4 css={{ fontSize: "1rem" }}>{props.name}</h4>
        <div
          css={{ display: "flex", fontSize: "0.75rem", alignItems: "center" }}
        >
          <p>{props.title}</p>
          <div
            css={{
              background: "#000",
              height: "0.3rem",
              width: "0.3rem",
              borderRadius: "50%",
              marginInline: "0.4rem",
            }}
          ></div>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
