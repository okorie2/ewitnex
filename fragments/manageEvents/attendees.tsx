/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import {  screen } from "styles/theme";
import Image from "next/image";
import AttendeesTable from "@/components/tables/attendees";
import MessageAttendeesModal from "@/components/modals/messageAttendees.tsx";

const Attendees = () => {
  const [filterHovered, setFilterHovered] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  const [messageAttendeesModalOpen, setMessageAttendeesModalOpen] = useState(false)

  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };

  const handleAttendeesModalOpen = () => {
    setMessageAttendeesModalOpen(!messageAttendeesModalOpen);
  }
  return (
    <>
    <MessageAttendeesModal isOpen={messageAttendeesModalOpen} onRequestClose={handleAttendeesModalOpen} />
    <div
      css={{
        paddingRight: "2rem",
      }}
    >
      <div
        css={{
          padding: "1.2rem",
          display: "grid",
          gridTemplateColumns: "27% 73%",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontWeight: "bold",
            paddingLeft: "1%",
          }}
        >
          <p css = {{fontSize: "16px"}}>92</p>
          <p
            css={{
              color: "#707070",
              fontWeight: 600,
            }}
          >
            Attending
          </p>
        </div>
        <div css ={{display: "flex", justifyContent: "space-between"}}>
          <div
            css={{
              borderRadius: "66px",
              backgroundColor: "#F5F5F5",
              width: "50%",
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
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>Recent</p>
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>An Hour Ago</p>
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>Yesterday</p>
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>Custom Time</p>
              </div>
            )}
          </div>
          <div css = {{
            backgroundColor: "#7C35AB",
            color: "white",
            width: "30%",
            padding: "0.75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize:"13px",
            gap: "7%",
            cursor: "pointer",
          }}
          onClick={handleAttendeesModalOpen}
          >
            <Image 
              src = '/assets/svgs/chatbox.svg'
              alt=""
              height = "20"
              width = "20"
            />
            Message Attendees
          </div>
        </div>
      </div>
      <AttendeesTable />
      <div css = {{height: "2rem"}}></div>
    </div>
    </>
  );
};

export default Attendees;
