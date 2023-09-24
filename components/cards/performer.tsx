/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";

interface IPerformer {
  img: string;
  name: string;
  role: string;
  title: string;
}

const Performer = (props: IPerformer) => {
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
      <div css={{ display: "flex", gap: "1.8rem", marginTop: "0.5rem" }}>
        <Image src="/assets/svgs/pencil.svg" alt="" width={21} height={21} />
        <Image src="/assets/svgs/trash.svg" alt="" width={17.88} height={22} />
      </div>
    </div>
  );
};

export default Performer;
