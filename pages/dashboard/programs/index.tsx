/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { useTheme } from "@emotion/react";

import DashboardLayout from "../layout/layout";
import DashboardHeader from "@/components/header/dashboardHeader";
import EventCard from "@/components/cards/eventCard";
import { Box, useMediaQuery } from "@mui/material";
import { screen } from "styles/theme";
import DashboardEventCard from "@/components/cards/dashboardEventCard";
import EventFilter from "fragments/eventFilter";
import FeedsCard from "@/components/cards/feedsCard";

const DashboardPrograms = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [active, setActive] = useState("All");
  const [filterSectionOpen, setFilterSectionOpen] = useState(true);

  const handleActive = (tab: string) => {
    setActive(tab);
  };

  const handleFilterSectionOpen = () => {
    setFilterSectionOpen(!filterSectionOpen);
  };

  const categories = [
    "All",
    "Music",
    "Technology",
    "Health",
    "Weddings",
    "Conference",
    "Sports/Fitness",
    "Community",
    "Hangouts",
  ];
  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: isTablet
            ? "1fr "
            : filterSectionOpen
            ? "1fr 258px"
            : "1fr 75px",
          height: "100%",
          maxHeight: "100vh",
          marginTop: isTablet ? "4rem" : "",
          fontFamily: "Poppins",
        }}
      >
        <div>
          <DashboardHeader />
          <div
            css={{
              height: "60px",
              boxShadow: "0px 0px 5px #00000029;",
              paddingInline: "1.5rem",
              width: isTablet ? "100vw" : "",
              display: "flex",
              alignItems: "center",
              overflowX: "auto",
              overflowY: "hidden",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category}
                tab={category}
                active={active}
                onClick={handleActive}
              />
            ))}
          </div>
          {isTablet && (
            <div
              css={{
                padding: "1rem 1rem 1rem 0.75rem",
                maxWidth: "100vw",
              }}
            >
              <div
                css={{
                  marginBlock: "0.5rem",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    css={{
                      fontSize: isTablet ? "20px" : "1.25rem",
                      color: "#707070",
                      fontWeight: isTablet ? "600" : "bold",
                    }}
                  >
                    Suggested Events
                  </p>
                  <p
                    css={{
                      fontSize: "1rem",
                      color: "#7C35AB",
                      fontWeight: "600",
                    }}
                  >
                    See all
                  </p>
                </div>
                <div
                  css={{
                    display: "flex",
                    gap: "2rem",
                    overflowX: "scroll",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    padding: "1rem 0.2rem 1rem 0",
                  }}
                >
                  <FeedsCard
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
                  <FeedsCard
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
              </div>
              <div
                css={{
                  marginBlock: "0.5rem",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    css={{
                      fontSize: isTablet ? "20px" : "1.25rem",
                      color: "#707070",
                      fontWeight: isTablet ? "600" : "bold",
                    }}
                  >
                    Online Events
                  </p>
                  <p
                    css={{
                      fontSize: "1rem",
                      color: "#7C35AB",
                      fontWeight: "600",
                    }}
                  >
                    See all
                  </p>
                </div>
                <div
                  css={{
                    display: "flex",
                    gap: "2rem",
                    overflowX: "scroll",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    padding: "1rem 0.2rem 1rem 0",
                  }}
                >
                  <FeedsCard
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
                  <FeedsCard
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
              </div>
            </div>
          )}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              height: isTablet ? "" : "calc(100vh - 130px)",
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
                gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
              },
            }}
          >
            {!isTablet ? (
              <>
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
              </>
            ) : (
              <>
                <div>
                  <FeedsCard
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
                <div>
                  <FeedsCard
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
                  <FeedsCard
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
                <div>
                  <FeedsCard
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
                <Box height={48}/>
              </>
            )}
          </div>
        </div>
        {!isTablet && (
          <EventFilter
            open={filterSectionOpen}
            setOpen={handleFilterSectionOpen}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPrograms;

export const Tab = ({
  tab,
  active,
  weight,
  onClick,
}: {
  tab: string;
  active: string;
  weight?: string;
  onClick: (tab: string) => void;
}) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <div
      css={{
        height: "inherit",
        borderBottom: tab === active ? "0.125rem solid #7C35AB" : "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isTablet ? "0.5% 1.5rem" : "0.5% 2%",
        fontWeight: weight ? weight : "bold",
        cursor: "pointer",
      }}
      onClick={() => onClick(tab)}
    >
      <p>{tab}</p>
    </div>
  );
};
