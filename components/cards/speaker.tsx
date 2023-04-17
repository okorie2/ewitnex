/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";

interface ISpeaker {
  img: string;
  name: string;
  role: string;
}

const Speaker = (props: ISpeaker) => {
  return (
    <div>
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
        <p css={{ fontSize: "0.75rem" }}>{props.role}</p>
      </div>
    </div>
  );
};

export default Speaker;
