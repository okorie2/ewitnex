/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
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
  const [active, setActive] = useState("All");
  const [filterSectionOpen, setFilterSectionOpen] = useState(true)

  const handleActive = (tab: string) => {
    setActive(tab);
  };

  const handleFilterSectionOpen = () => {
    setFilterSectionOpen(!filterSectionOpen)
  }
  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: filterSectionOpen ?  "1fr 258px" : "1fr 75px",
          height: "100%",
          maxHeight: "100vh",
        }}
      >
        <div>
          <DashboardHeader />
          <div
            css={{
              height: "50px",
              width: "100%",
              boxShadow: "0px 0px 5px #00000029;",
              paddingInline: "1.5rem",
              display: "flex",
              justifyContent: "flex-start",
              cursor: "pointer",
            }}
          >
            <Tab tab={"All"} active={active} onClick={handleActive} />
            <Tab tab={"Music"} active={active} onClick={handleActive} />
            <Tab tab={"Technology"} active={active} onClick={handleActive} />
            <Tab tab={"Health"} active={active} onClick={handleActive} />
            <Tab tab={"Weddings"} active={active} onClick={handleActive} />
            <Tab tab={"Conference"} active={active} onClick={handleActive} />
            <Tab
              tab={"Sports & Fitness"}
              active={active}
              onClick={handleActive}
            />
            <Tab tab={"Community"} active={active} onClick={handleActive} />
            {!filterSectionOpen && 
              <Tab tab={"Hangouts"} active={active} onClick={handleActive} />
            }
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              height: "calc(100vh - 130px)",
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
        {
          filterSectionOpen ? 
        <div
          css={{
            backgroundColor: "#fff",
            borderLeft: `1px solid ${"#E4E4E4"}`,
            maxWidth: "258px",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
              paddingInline: "1.5rem",
              borderBottom: `1px solid ${"#E4E4E4"}`,
              cursor: "pointer"
            }}
            onClick = {handleFilterSectionOpen}
          >
            <Image
              src="/assets/svgs/elbow-right-light.svg"
              alt=""
              width={15}
              height={15}
            />
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <p css={{ fontSize: "1.125", fontWeight: "bold" }}>Filters</p>
              <Image src={Filter} alt="filter" />
            </div>
          </div>
          <div
            css={{
              padding: "8% 1.5rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Image
                src="/assets/svgs/location-light.svg"
                alt=""
                width={20}
                height={20}
              />
              <p css={{ fontWeight: "700" }}>Location</p>
            </div>
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 1.5rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <Image
                src="/assets/svgs/calender3.svg"
                alt=""
                width={20}
                height={20}
              />
              <p css={{ fontWeight: "700" }}>Date</p>
            </div>
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 1.5rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Image
                src="/assets/svgs/brochure.svg"
                alt=""
                width={20}
                height={20}
              />
            <p css={{ fontWeight: "700" }}>Event Type</p>
            </div>
            <Image src={Down} alt="down" />
          </div>{" "}
          <div
            css={{
              padding: "8% 1.5rem",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Image
                src="/assets/svgs/dollar-circle.svg"
                alt=""
                width={20}
                height={20}
              />
              <p css={{ fontWeight: "700" }}>Price</p>
            </div>
            <Image src={Down} alt="down" />
          </div>
        </div>
        :
        <div css = {{
          maxWidth: "75px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          borderLeft: `1px solid ${"#E4E4E4"}`,
        }}>
          <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                marginTop: "2rem"
              }}
              onClick = {handleFilterSectionOpen}
            >
              <Image src={Filter} alt="filter" />
            </div>
        </div>
        }
      </div>
    </DashboardLayout>
  );
};

export default DashboardPrograms;

export const Tab = ({
  tab,
  active,
  onClick,
}: {
  tab: string;
  active: string;
  onClick: (tab: string) => void;
}) => {
  return (
    <div
      css={{
        height: "inherit",
        borderBottom: tab === active ? "0.125rem solid #7C35AB" : "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2%",
        fontWeight: "bold",
      }}
      onClick={() => onClick(tab)}
    >
      {tab}
    </div>
  );
};
