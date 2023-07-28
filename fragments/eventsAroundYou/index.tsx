/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H2 } from "styles/components/typography";
import EventCard from "@/components/cards/eventCard";
import Image from "next/image";
import { screen } from "styles/theme";

export default function EventsAroundYouFragment() {
  const [seeAllHover, setSeeAllHover] = useState(false);
  const [scrollRightHover, setScrollRightHover] = useState(false);
  return (
    <div css={{ padding: "2% 4%", marginTop: "3rem" }}>
      <div
        css={{
          marginBottom: " 2%",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div>
          <H2>Events Around You</H2>
        </div>
        <div
          css={{
            width: "73%",
            letterSpacing: "0.32px",
            fontSize: "0.95rem",
            marginTop: "1rem",
          }}
        >
          <p>
            Discover local happenings, concerts, weddings, workshops hangouts,
            and more, all in one place, ensuring you never miss out on the
            vibrant experiences in your vicinity.
          </p>
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
            favourite={false}
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
            favourite={false}
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
            favourite={false}
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
            favourite={false}
            img="/assets/pngs/card_4.png"
            label="Tech"
            location="IG Hub, 22 Faulks Road, Aba, Abia"
            organizer="GDG Aba"
            priceRange="$500-$2K"
            title="Google Developers Festival Aba"
          />
        </div>
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <div
          css={{
            color: "#7C35AB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: '"Poppins", sans-serif',
            width: "12%",
            height: "46px",
            fontSize: "0.85rem",
            fontWeight: "550",
            cursor: "pointer",
            border: "1px solid #7C35AB",
            ":hover": {
              color: "#FFF",
              background: "#7C35AB",
            },
            [screen.desktop]: {
              width: "17%",
            },
            [screen.lg]: {
              width: "16%",
            },
          }}
          onMouseEnter={() => setSeeAllHover(true)}
          onMouseLeave={() => setSeeAllHover(false)}
        >
          <p>See all events</p>
          {seeAllHover ? (
            <Image
              src={"/assets/svgs/elbow-right-white.svg"}
              alt="right"
              width={20}
              height={24}
            />
          ) : (
            <Image
              src={"/assets/svgs/elbow-right-purple.svg"}
              alt="right"
              width={20}
              height={24}
            />
          )}
        </div>
        <div css={{ display: "flex", gap: "1rem" }}>
          <div
            css={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              border: "1px solid #AEAEAE",
              transform: "rotate(180deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.3,
            }}
          >
            <Image
              src="/assets/svgs/elbow-right-light.svg"
              alt=""
              width={12}
              height={12}
            />
          </div>
          <div
            css={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              border: "1px solid #AEAEAE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ":hover": {
                background: "#7C35AB",
              },
            }}
            onMouseEnter={() => setScrollRightHover(true)}
            onMouseLeave={() => setScrollRightHover(false)}
          >
            {scrollRightHover ? (
              <Image
                src="/assets/svgs/elbow-right-white.svg"
                alt=""
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/svgs/elbow-right-light.svg"
                alt=""
                width={12}
                height={12}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
