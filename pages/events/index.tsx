/** @jsxImportSource @emotion/react */

import React from "react";
import EventCard from "@/components/cards/eventCard";
import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import { screen } from "styles/theme";
import Right from "public/assets/svgs/right_ar.svg";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Layout from "./layout";

export default function Index() {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <div>
      <Navbar />
      <Layout>
      <div css={{ padding: "4% 2.5%" , display:isTablet ? "flex": "none",  gap:"15px"}}>
          <div css={{ display: "flex", marginBottom: "0.8rem",  gap:"5px"}}>
            <p>All Events</p>
            <div><Image src={Right} alt="right" /></div>
          </div>
          <div>
            <p css={{ fontSize: "16px" }}>
              <b>123456</b>
            </p>
            <p css={{ color: "#707070" }}>events found</p>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            gap: "3px",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}
            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}
            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
          <div
            css={{
              width: "32%",
              [screen.desktop]: {
                width: isTablet ? "95%":"32%",
                marginInline:"auto"
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
              favourite = {false}

            />
          </div>
        </div>
      </Layout>
      <Lines />
      <PublicSiteFooter />
    </div>
  );
}
