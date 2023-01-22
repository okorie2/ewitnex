/** @jsxImportSource @emotion/react */

import { Interpolation, Theme, useTheme } from "@emotion/react";

import Image from "next/image";
import React from "react";
import { H3, H4 } from "styles/components/typography";
import Card_img from "public/assets/pngs/card_img.png";
import { screen } from "styles/theme";

interface IEventCard {
  img: string;
  label: string;
  title: string;
  id: string;
  date: string;
  location: string;
  priceRange: string;
  attendees: string;
  organizer: string;
  width?: string;
}

export default function EventCard(props: IEventCard) {
  const theme = useTheme();
  return (
    <div
      css={{
        height: "500px",
        width: props.width || "100%",
        borderRadius: "10px",
        backgroundColor: theme.common.white,
        boxShadow: "#00000029 0px 0px 10px",
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "5%",
        // [screen.desktop]: {
        //   width:
        // },
      }}
    >
      <div css={{ position: "relative", width: "100%", height: "171px" }}>
        <Image
          src={props.img}
          alt="card_img"
          css={{ borderRadius: "10px", objectFit: "cover" }}
          fill
        />
        <div
          css={{
            // backgroundColor: theme.common.white,
            position: "absolute",
            top: "3%",
            right: "2%",
          }}
        >
          <div
            css={{
              width: "93px",
              height: "2.13rem",
              backdropFilter: "brightness(50%) ",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              borderRadius: "10px",
              fontWeight: 500,
              textTransform: "capitalize",
              backgroundColor: theme.common.white,
              opacity: "75%",
            }}
          >
            {props.label}
          </div>
        </div>
        <div
          css={{
            height: "41px",
            width: "41px",
            borderRadius: "50%",
            backgroundColor: theme.common.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "-9%",
            right: "3%",
          }}
        >
          <Image
            src="/assets/svgs/love.svg"
            alt="card_img"
            width={20.98}
            height={19.39}
          />
        </div>
      </div>
      <div css={{ padding: "4% 6%" }}>
        <H3>{props.title}</H3>
        <p
          css={{
            color: theme.shadow.secondary,
            fontSize: "0.875rem",
            fontWeight: 600,
            marginTop: "2%",
          }}
        >
          {props.id}
        </p>
        <H4 color={theme.color.negative} css={{ marginTop: "1.2rem" }}>
          2{props.date}
        </H4>
        <H4 css={{ marginTop: "4%" }}> {props.location}</H4>
        <div
          css={{
            display: "flex",
            gap: "4%",
            alignItems: "center",
            marginTop: "0.8rem",
            color: theme.shadow.tertiary,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          <p
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              {" "}
              <Image
                src="/assets/svgs/range.svg"
                alt="card_img"
                width={19}
                height={19}
                css={{ borderRadius: "10px" }}
              />
            </span>
            {props.priceRange}
          </p>
          <p>{props.attendees} Attending</p>
        </div>
        <p
          css={{
            marginTop: "1.5rem",
            color: theme.shadow.tertiary,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          Organized by
        </p>
        <H4>{props.organizer}</H4>
      </div>
    </div>
  );
}
