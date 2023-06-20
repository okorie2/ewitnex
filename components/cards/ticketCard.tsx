/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

interface IManageEvent {
  image: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  type: string;
  address: string;
  id: string;
  active: string;
  onClick: (id: string) => void;
}

const TicketCard = (props: IManageEvent) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (props.id === props.active) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props.active, props.id]);

  return (
    <div
      css={{
        width: "100%",
        height: "140px",
        border: isActive
          ? `0.5px solid ${"#00D9B7"}`
          : `1px solid ${"#C0C0C0"}`,
        borderRight: "none",
        borderRadius: "20px",
        display: "grid",
        gridTemplateColumns: "65% 35%",
        alignItems: "center",
        // gap: "1.5rem",
        cursor: "pointer",
        // marginBlock: "1.2rem",
        position: "relative",
        boxShadow: isActive ? `0px 1px 10px #0000002E;` : `none`,
      }}
      onClick={() => props.onClick(props.id)}
    >
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "25% 75%",
          height: "fit-content",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20%",
            fontWeight: "bold",
          }}
        >
          <p>{props.date}</p>
          <p>{props.month}</p>
        </div>
        <div css={{ display: "grid", gap: "5px", fontWeight: "bold" }}>
          <p
            css={{
              fontSize: "1.1rem",
            }}
          >
            {props.title}
          </p>
          <div css={{ fontSize: "12px" }}>
            <span css={{ color: "#AEAEAE", marginRight: "2%" }}>
              {props.id}
            </span>
            <span>{props.type}</span>
          </div>
          <div>
            <p
              css={{
                fontSize: "0.75rem",
              }}
            >
              {props.day} at {props.time}
            </p>
          </div>
          <p
            css={{
              fontSize: "0.8rem",
            }}
          >
            {props.address}
          </p>
        </div>
      </div>
      <div
        css={{
          height: "102%",
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Image
          src={props.image}
          alt=""
          fill
          css={{
            borderRadius: "20px",
            objectFit: "cover",
            marginTop: "-1px",
          }}
        />
      </div>
    </div>
  );
};

export default TicketCard;
