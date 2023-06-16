/** @jsxImportSource @emotion/react */

import React from "react";
import DashboardLayout from "./layout";
import Image from "next/image";
import { ButtonFormFilled } from "styles/components/button";
import DashboardHeader from "@/components/header/dashboardHeader";
import FeedsCard from "@/components/cards/feedsCard";
import Link from "next/link";

const Feeds = () => {
  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "2.7fr 1.3fr",
          height: "100%",
          maxHeight: "100vh",
        }}
      >
        <div
          css={{
            borderRight: `1px solid ${"#E4E4E4"}`,
            height: "100%",
          }}
        >
          <DashboardHeader />
          <div
            css={{
              color: "#000",
              display: "grid",
              placeContent: "center",
              height: "calc(100% - 80px)",
            }}
          >
            <div
              css={{
                width: "65%",
                marginInline: "auto",
                textAlign: "center",
              }}
            >
              <Image
                src="/assets/svgs/timesand.svg"
                alt=""
                width="21"
                height="26"
              />
              <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Coming Soon...
              </p>
              <p css={{ marginBlock: "1rem" }}>
                Check back later as this page feature is currently on
                development
              </p>
              <Link href="/dashboard/programs">
                <ButtonFormFilled>GO TO PROGRAMS</ButtonFormFilled>
              </Link>
            </div>
          </div>
        </div>
        <div
          css={{
            padding: "1rem 1.5rem",
            maxWidth: "500px",
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
              }}
            >
              <p
                css={{
                  fontSize: "1.25rem",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Suggested Events
              </p>
              <p
                css={{
                  fontSize: "1.125rem",
                  color: "#7C35AB",
                  fontWeight: "bold",
                }}
              >
                See All
              </p>
            </div>
            <div
              css={{
                display: "flex",
                gap: "1.5rem",
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
            <div css={{ display: "flex", justifyContent: "space-between" }}>
              <p
                css={{
                  fontSize: "1.25rem",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Online Events
              </p>
              <p
                css={{
                  fontSize: "1.125rem",
                  color: "#7C35AB",
                  fontWeight: "bold",
                }}
              >
                See All
              </p>
            </div>
            <div
              css={{
                display: "flex",
                gap: "1.5rem",
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
      </div>
    </DashboardLayout>
  );
};

export default Feeds;
