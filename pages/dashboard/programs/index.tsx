/** @jsxImportSource @emotion/react */

import React from "react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import Filter from "public/assets/svgs/filter.svg";
import Down from "public/assets/svgs/down_ar.svg";
import DashboardLayout from "../layout";
import DashboardHeader from "@/components/header/dashboardHeader";
import EventCard from "@/components/cards/eventCard";
import { screen } from "styles/theme";
import DashboardEventCard from "@/components/cards/dashboardEventCard";

const DashboardPrograms = () => {
  const theme = useTheme();

  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 258px",
          height: "100%",
          maxHeight: "100vh",
        }}
      >
        <div>
          <DashboardHeader />
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              height: "calc(100vh - 80px)",
              gap: "1rem",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              padding: "1.125rem",
              [screen.lg]: {
                gridTemplateColumns: "1fr 1fr",
              },
              [screen.desktop]: {
                gridTemplateColumns: "1fr 1fr",
              },
            }}
          >
            <div>
              <DashboardEventCard
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
            <div>
              <DashboardEventCard
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
            <div>
              <DashboardEventCard
                label="Tech"
                attendees="609"
                id="Tec542445"
                date="3 DEC. 2022, 10:00 AM"
                location="IG Hub, 22 Faulks Road, Aba, Abia"
                organizer="GDG Aba"
                priceRange="$500-$2K"
                title="Google Developers Festival Aba"
                img="/assets/pngs/card_4.png"
              />
            </div>
            <div>
              <DashboardEventCard
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
            <div>
              <DashboardEventCard
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
            <div>
              <DashboardEventCard
                label="Tech"
                attendees="609"
                id="Tec542445"
                date="3 DEC. 2022, 10:00 AM"
                location="IG Hub, 22 Faulks Road, Aba, Abia"
                organizer="GDG Aba"
                priceRange="$500-$2K"
                title="Google Developers Festival Aba"
                img="/assets/pngs/card_4.png"
              />
            </div>
            <div>
              <DashboardEventCard
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
            <div>
              <DashboardEventCard
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
            <div>
              <DashboardEventCard
                label="Tech"
                attendees="609"
                id="Tec542445"
                date="3 DEC. 2022, 10:00 AM"
                location="IG Hub, 22 Faulks Road, Aba, Abia"
                organizer="GDG Aba"
                priceRange="$500-$2K"
                title="Google Developers Festival Aba"
                img="/assets/pngs/card_4.png"
              />
            </div>
          </div>
        </div>
        <div
          css={{
            backgroundColor: theme.common.white,
            borderLeft: `1px solid ${theme.shadow.border}`,
            maxWidth: "258px",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "1.5rem",
              height: "80px",
              paddingInline: "2rem",
              borderBottom: `1px solid ${theme.shadow.border}`,
            }}
          >
            <Image src={Filter} alt="filter" />
            <p css={{ fontSize: "1.125", fontWeight: "bold" }}>Filters</p>
          </div>
          <div
            css={{
              padding: "8% 2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p css={{ fontWeight: "700" }}>Location</p>
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p css={{ fontWeight: "700" }}>Date</p>
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p css={{ fontWeight: "700" }}>Event Type</p>
            <Image src={Down} alt="down" />
          </div>{" "}
          <div
            css={{
              padding: "8% 2rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p css={{ fontWeight: "700" }}>Price</p>
            <Image src={Down} alt="down" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPrograms;
