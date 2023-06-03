/** @jsxImportSource @emotion/react */
import React from "react";

import { theme } from "styles/theme";
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
}

const TicketCard = (props: IManageEvent) => {
  return (
    <Link href={`/dashboard/manager/${props.id}?tab=Overview`}>
      <div
        css={{
          width: "100%",
          height: "140px",
          border: `1px solid ${theme.shadow.border2}`,
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "1.5rem",
          marginBlock: "1rem"
        }}
      >
        <div css={{ display: "grid", gridTemplateColumns: "25% 75%" }}>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "20%",
              fontWeight: "bold"
            }}
          >
            <p>{props.date}</p>
            <p>{props.month}</p>
          </div>
          <div css={{ display: "grid", gap: "5px" , fontWeight: "bold"}}>
            <p
              css={{
                fontSize: "1.1rem",
              }}
            >
              {props.title}
            </p>
            <div css = {{fontSize: "12px"}}>
                <span css ={{ color: theme.color.grey, marginRight: "2%"}}>{props.id}</span>
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
            width: "132px",
            height: "140px",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <Image
            src={props.image}
            alt=""
            fill
            css={{
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;
