/** @jsxImportSource @emotion/react */

import React from "react";

import { H2 } from "styles/components/typography";
import { useTheme } from "@emotion/react";
import EventCard from "@/components/cards/eventCard";
import Image from "next/image";
import { screen } from "styles/theme";

export default function UpcomingEventsFragment() {
  const theme = useTheme();
  return (
    <div css={{ padding: "2% 4%" }}>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: " 2%",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div>
          <H2>Upcoming Events</H2>
        </div>
        <div
          css={{
            color: theme.background.primary,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5%",
            width: "9%",
            cursor: "pointer",
            [screen.desktop]: {
              width: "14%",
            },
            [screen.lg]: {
              width: "13%",
            },
          }}
        >
          <p
            css={{
              fontSize: "1.125rem",
            }}
          >
            See All
          </p>
          <span css={{ marginTop: "4px" }}>
            <Image
              src="/assets/svgs/right.svg"
              alt="right"
              width={50}
              height={24}
            />
          </span>
        </div>
      </div>
      <div
        css={{
          display: "flex",
          gap: "3px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          css={{
            width: "24%",
            [screen.desktop]: {
              width: "32%",
            },
          }}
        >
          <EventCard
            label="Music"
            attendees="609"
            id="Tec542445"
            date="25 NOV. 2021, 10:00 AM"
            location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
            organizer="Connack Foundarion"
            priceRange="$500-$2K"
            title="Connack Foundation African Music Award Of The Year"
            img="/assets/pngs/card_img.png"
          />
        </div>
        <div
          css={{
            width: "24%",
            [screen.desktop]: {
              width: "32%",
            },
          }}
        >
          <EventCard
            label="Concert"
            attendees="609"
            date="3 DEC. 2022, 10:00 AM"
            id="Heal12548"
            location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
            organizer="Eko Atlantic"
            priceRange="$500-$2K"
            title="Medical Crusade with Doctor West"
            img="/assets/pngs/card_2.png"
          />
        </div>
        <div
          css={{
            width: "24%",
            [screen.desktop]: {
              width: "32%",
            },
          }}
        >
          <EventCard
            attendees="609"
            date="25 NOV. 2021, 10:00 AM"
            img="/assets/pngs/card_3.png"
            label="Wedding"
            location="The Dom, 22 Faulks Road, Aba, Abia"
            organizer="Ada and Obi"
            priceRange="Free"
            title="Ada weds Obi"
            id="Wed54254"
          />
        </div>
        <div
          css={{
            width: "24%",
            [screen.desktop]: {
              width: "32%",
            },
          }}
        >
          <EventCard
            attendees="609"
            date="3 DEC. 2022, 10:00 AM"
            id="Tec542445"
            img="/assets/pngs/card_4.png"
            label="Tech"
            location="IG Hub, 22 Faulks Road, Aba, Abia"
            organizer="GDG Aba"
            priceRange="$500-$2K"
            title="Google Developers Festival Aba"
          />
        </div>
      </div>
    </div>
  );
}
