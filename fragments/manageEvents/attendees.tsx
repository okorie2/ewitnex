/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { screen } from "styles/theme";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import AttendeesTable from "@/components/tables/attendees";
import MessageAttendeesModal from "@/components/modals/messageAttendees.tsx";

const Attendees = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [filterHovered, setFilterHovered] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  const [messageAttendeesModalOpen, setMessageAttendeesModalOpen] =
    useState(false);

  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };

  const handleAttendeesModalOpen = () => {
    setMessageAttendeesModalOpen(!messageAttendeesModalOpen);
  };
  return (
    <>
      <MessageAttendeesModal
        isOpen={messageAttendeesModalOpen}
        onRequestClose={handleAttendeesModalOpen}
      />
      <div
        css={{
          paddingRight: isTablet ? "" : "2rem",
        }}
      >
        {filterClicked && (
          <div
            css={{
              height: "100vh",
              width: "calc(100vw - 400px)",
              right: 0,
              zIndex: "1",
              position: "absolute",
              cursor: "pointer",
            }}
            onClick={handleClick}
          ></div>
        )}
        <div
          css={{
            padding: isTablet ? "0.5rem" : "1.2rem",
            display: isTablet ? "flex" : "grid",
            gridTemplateColumns: "27% 73%",
            flexDirection: "column-reverse",
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: isTablet ? "row" : "column",
              justifyContent: isTablet ? "left" : "center",
              fontWeight: "bold",
              paddingLeft: "1%",
              gap: isTablet ? "0.2rem" : "",
              marginBlock: isTablet ? "0.5rem" : "",
            }}
          >
            <p css={{ fontSize: "16px" }}>0</p>
            <p
              css={{
                color: "#707070",
                fontWeight: isTablet ? 700 : 600,
              }}
            >
              Attending
            </p>
          </div>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <div
              css={{
                borderRadius: "66px",
                backgroundColor: "#F5F5F5",
                width: isTablet ? "65%" : "50%",
                height: "2.825rem",
                display: "flex",
                alignItems: "center",
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
                placeholder="Search"
                type={"text"}
                css={{
                  borderRadius: "66px",
                  width: "100%",
                  outline: "none",
                  border: "none",
                  backgroundColor: "#F5F5F5",
                  height: "85%",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              />
            </div>
            <div
              css={{
                borderRadius: "50%",
                width: "46px",
                backgroundColor: "#F2F7FB",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={() => setFilterHovered(true)}
              onMouseLeave={() => setFilterHovered(false)}
              onClick={handleClick}
            >
              <Image
                src={"/assets/svgs/filter.svg"}
                alt={""}
                width={18}
                height={18}
              />
              {filterHovered && (
                <div
                  css={{
                    background: "#F5F5F5",
                    position: "absolute",
                    bottom: "-1.5rem",
                    left: "-0.5rem",
                    zIndex: 3,
                    padding: "1% 10%",
                    borderRadius: "5px",
                  }}
                >
                  <span css={{ fontSize: "12px" }}>Filter</span>
                </div>
              )}
              {filterClicked && (
                <div
                  css={{
                    background: "#FFF",
                    position: "absolute",
                    top: "3rem",
                    left: "-4.1rem",
                    zIndex: 5,
                    display: "grid",
                    gap: "5px",
                    padding: "20% 20%",
                    borderRadius: "10px",
                    width: "7rem",
                    fontSize: "13px",
                    fontWeight: "500",
                    boxShadow: `0px 0px 5px ${"#00000029"}`,
                  }}
                >
                  <p
                    css={{ ":hover": { fontWeight: "bold", color: "#7C35AB" } }}
                  >
                    Recent
                  </p>
                  <p
                    css={{ ":hover": { fontWeight: "bold", color: "#7C35AB" } }}
                  >
                    An Hour Ago
                  </p>
                  <p
                    css={{ ":hover": { fontWeight: "bold", color: "#7C35AB" } }}
                  >
                    Yesterday
                  </p>
                  <p
                    css={{ ":hover": { fontWeight: "bold", color: "#7C35AB" } }}
                  >
                    Custom Time
                  </p>
                </div>
              )}
            </div>
            <div
              css={{
                backgroundColor: "#7C35AB",
                color: "white",
                width: isTablet ? "46px" : "30%",
                padding: "0.75%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                gap: "7%",
                cursor: "pointer",
                borderRadius: isTablet ? "50%" : "",
              }}
              onClick={handleAttendeesModalOpen}
            >
              <Image
                src="/assets/svgs/chatbox.svg"
                alt=""
                height="20"
                width="20"
              />
              {!isTablet && <p>Message Attendees</p>}
            </div>
          </div>
        </div>
        <AttendeesTable />
        <div css={{ height: "2rem" }}></div>
      </div>
    </>
  );
};

export default Attendees;
