/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import HostEventSplitInput from "@/components/inputs/HostEventSplitInput";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import StyledCheckbox from "@/components/inputs/StyledCheckbox";

const EventLocation = () => {
  const [locationType, setLocationType] = useState("venue");
  const [undecided, setUndecided] = useState(false);
  return (
    <HostEventLayout>
      <div>
        <div
          css={{
            height: "150px",
            borderBottom: `1px solid ${"#E4E4E4"}`,
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
                  color: "#7C35AB",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Preview
              </p>
              <Link
                href="/dashboard"
                css={{
                  color: "#F05E78",
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
          <div css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <p
              css={{
                fontWeight: "bold",
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
              }}
            >
              Location
            </p>
            <Tooltip title="Spread awareness about your event among attendees and ensure they are well informed about the designated venue">
              <Image
                src={"/assets/svgs/info2.svg"}
                alt=""
                width={14.02}
                height={14.02}
              />
            </Tooltip>
          </div>
          <div css={{ display: "flex", gap: "1rem", marginTop: "-1%" }}>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                width: "110px",
                height: "50px",
                background: locationType === "venue" ? "#7C35AB21 " : "",
                border:
                  locationType === "venue"
                    ? "1px solid #7C35AB"
                    : "1px solid #AEAEAE",
                color: locationType === "venue" ? "#7C35AB" : "#AEAEAE",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => setLocationType("venue")}
            >
              <p>Venue</p>
            </div>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                width: "110px",
                height: "50px",
                background: locationType === "online" ? "#7C35AB21 " : "",
                border:
                  locationType === "online"
                    ? "1px solid #7C35AB"
                    : "1px solid #AEAEAE",
                color: locationType === "online" ? "#7C35AB" : "#AEAEAE",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => setLocationType("online")}
            >
              <p>Online</p>
            </div>
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <p
              css={{
                fontWeight: "bold",
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
              }}
            >
              Address
            </p>
            <Tooltip title="Spread for the event address/venue. You can also enter an address manually">
              <Image
                src={"/assets/svgs/info2.svg"}
                alt=""
                width={14.02}
                height={14.02}
              />
            </Tooltip>
          </div>
          <div
            css={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-end",
              marginTop: "-1.5%",
            }}
          >
            <div
              css={{
                borderRadius: "10px",
                width: "100%",
                height: "3.3rem",
                display: "flex",
                alignItems: "center",
                border: `1px solid ${"#AEAEAE"}`,
                paddingLeft: "17px",
                gap: "2%",
              }}
            >
              <div css={{ marginTop: "3px" }}>
                <Image
                  src="/assets/svgs/search.svg"
                  width={14.42}
                  height={14.41}
                  alt="logo"
                />
              </div>
              <input
                placeholder="Search for the address or venue"
                type={"text"}
                css={{
                  height: "3.2rem",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </div>
            <p
              css={{
                color: "#AEAEAE",
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
                color: "#7C35AB",
                border: `1px solid ${"#7C35AB"}`,
                width: "250px",
                height: "38px",
                marginBottom: "0.5rem",
                background: "#fff",
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
              [screen.lg]: {
                gridTemplateColumns: "1fr",
              },
              [screen.desktop]: {
                gridTemplateColumns: "1fr",
              },
            }}
          >
            {undecided === false && (
              <>
                <HostEventSplitInput
                  label="Start At"
                  placeholder1="Start Date"
                  placeholder2="Start time"
                  input2={true}
                />
                <HostEventSplitInput
                  label="End At"
                  placeholder1="End Date"
                  placeholder2="End time"
                  input2={true}
                />
              </>
            )}
          </div>
          <div css={{ display: "flex", alignItems: "center" }}>
            <StyledCheckbox
              checked={undecided}
              onChange={() => setUndecided(!undecided)}
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
                  color: "#7C35AB",
                  border: `1px solid ${"#7C35AB"}`,
                  height: "52px",
                  marginBottom: "0.5rem",
                  background: "#fff",
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
                  color: "#fff",
                  border: `1px solid ${"#7C35AB"}`,
                  height: "52px",
                  marginBottom: "0.5rem",
                  background: "#7C35AB",
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
