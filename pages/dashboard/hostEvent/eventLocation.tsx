/** @jsxImportSource @emotion/react */

import React from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen, theme } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import HostEventSplitInput from "@/components/inputs/HostEventSplitInput";
import Image from "next/image";

const EventLocation = () => {
  return (
    <HostEventLayout>
      <div>
        <div
          css={{
            height: "150px",
            borderBottom: `1px solid ${theme.shadow.border}`,
            display: "flex",
            alignItems: "center",
            paddingInline: "3.2rem",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              css={{
                width: "43%",
                [screen.desktopLg]: {
                  width: "50%",
                },
                [screen.desktop]: {
                  width: "70%",
                },
              }}
            >
              <h1 css={{ fontSize: "1.875rem" }}>Location, Date and Time</h1>
              <p>
                Tell us where your event will take place and create your date
                and time for your event telling attendees when its going to
                start and ends
              </p>
            </div>
            <div
              css={{
                display: "flex",
                gap: "2rem",
              }}
            >
              <p
                css={{
                  color: theme.color.primary,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Preview
              </p>
              <Link
                href="/dashboard"
                css={{
                  color: theme.color.negative,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
        <form
          css={{
            maxHeight: "calc(100vh - 150px)",
            padding: " 1.5rem 3.2rem",
            display: "grid",
            gap: "1.5rem",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <HostEventTextField
            label="Location"
            placeholder="Venue"
            type="select"
            image="/assets/svgs/info2.svg"
          />
          <div
            css={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-end",
            }}
          >
            <HostEventTextField
              label="Address"
              placeholder="Search location"
              type="text"
              image="/assets/svgs/info2.svg"
            />
            <p
              css={{
                color: theme.color.grey,
                fontSize: "1.125rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              or
            </p>
            <button
              css={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: theme.color.primary,
                border: `1px solid ${theme.color.primary}`,
                width: "250px",
                height: "38px",
                marginBottom: "0.5rem",
                background: theme.common.white,
              }}
            >
              Enter location manually
            </button>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
            }}
          >
            <HostEventTextField
              label="Venue Type"
              placeholder=""
              type="select"
              image="/assets/svgs/info2.svg"
            />
            <div></div>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              [screen.lg]: {
                gridTemplateColumns: "1fr",
              },
              [screen.desktop]: {
                gridTemplateColumns: "1fr",
              },
            }}
          >
            <HostEventSplitInput
              label="Start At"
              placeholder1="Start Date"
              placeholder2="Start Time"
              image1="/assets/svgs/calender2.svg"
              image2="/assets/svgs/time.svg"
              input2={true}
            />
            <HostEventSplitInput
              label="End At"
              placeholder1="End Date"
              placeholder2="End Time"
              image1="/assets/svgs/calender2.svg"
              image2="/assets/svgs/time.svg"
              input2={true}
            />
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              name="undecided"
              value="date undecided"
              css={{ border: `5px solid ${theme.background.primary}` }}
            />
            <label
              htmlFor="undecided"
              css={{
                fontSize: "0.875rem",
                fontWeight: "600",
                marginLeft: "0.5rem",
              }}
            >
              Time & Date - To be decided
            </label>
          </div>
          <button
            css={{
              fontSize: "0.875rem",
              fontWeight: "bold",
              color: theme.color.primary,
              border: `1px solid ${theme.color.primary}`,
              width: "215px",
              height: "38px",
              marginBottom: "0.5rem",
              background: theme.common.white,
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Image
                src="/assets/svgs/calendar-purple.svg"
                alt=""
                width={11}
                height={13}
              />
              <p>Enter location manually</p>
            </div>
          </button>
          <div
            css={{
              width: "80%",
              marginLeft: "auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <Link href="/dashboard/hostEvent/fileUpload">
              <button
                css={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                  color: theme.color.primary,
                  border: `1px solid ${theme.color.primary}`,
                  height: "52px",
                  marginBottom: "0.5rem",
                  background: theme.common.white,
                  borderRadius: "26px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                SAVE & RETURN
              </button>
            </Link>
            <Link href="/dashboard/hostEvent/speakers">
              <button
                css={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                  color: theme.common.white,
                  border: `1px solid ${theme.color.primary}`,
                  height: "52px",
                  marginBottom: "0.5rem",
                  background: theme.color.primary,
                  borderRadius: "26px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                SAVE & CONTINUE
              </button>
            </Link>
          </div>
        </form>
      </div>
    </HostEventLayout>
  );
};

export default EventLocation;
