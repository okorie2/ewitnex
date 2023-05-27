/** @jsxImportSource @emotion/react */
import React from "react";

import { theme } from "styles/theme";
import Image from "next/image";
import Link from "next/link";

interface IManageEvent {
  image: string;
  title: string;
  date: string;
  time: string;
  type: string;
  attendees: string;
  id: string;
}

const ManageEventCard = (props: IManageEvent) => {
  return (
    <Link href={`/dashboard/manager/${props.id}?tab=Overview`}>
      <div
        css={{
          width: "335px",
          height: "140px",
          border: `1px solid ${theme.shadow.border2}`,
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
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
        <div css={{ display: "grid", gap: "5px" }}>
          <p
            css={{
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            {props.title}
          </p>
          <div>
            <p
              css={{
                fontSize: "0.625rem",
                fontWeight: "500",
              }}
            >
              {props.date}
            </p>
            <p
              css={{
                fontSize: "0.625rem",
                fontWeight: "500",
              }}
            >
              {props.time}
            </p>
          </div>

          <p
            css={{
              fontSize: "0.69rem",
              fontWeight: "500",
              color: theme.color.grey,
            }}
          >
            {props.type}
          </p>
          <p
            css={{
              fontSize: "0.8rem",
              fontWeight: "500",
            }}
          >
            {props.attendees}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ManageEventCard;
