/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Right from "public/assets/svgs/right_ar.svg";
import { Tab } from "pages/dashboard/programs";
import EventFilter from "fragments/eventFilter";
import { useMediaQuery } from "@mui/material";

export default function Layout({ children }: { children: ReactNode }) {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [active, setActive] = useState("All");
  const [filterSectionOpen, setFilterSectionOpen] = useState(!isTablet);

  const handleActive = (tab: string) => {
    setActive(tab);
  };

  const handleFilterSectionOpen = () => {
    setFilterSectionOpen(!filterSectionOpen);
  };
  useEffect (() => {
    const html = document.querySelector('html')
    if (html) { 
      html.style.overflow = filterSectionOpen ? "hidden" : "auto"
    }
  }, [filterSectionOpen])
  const categories = [
    "All",
    "Music",
    "Technology",
    "Health",
    "Weddings",
    "Conference",
    "Sports/Fitness",
    "Community",
    "Government",
    "Holidays",
    "Hangouts",
  ];
  return (
    <div css={{ fontFamily: "'Poppins', sans-serif" , maxWidth: "100vw"}}>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          boxShadow: " 0px 0px 10px #00000029",
          backgroundColor: "#fff",
          justifyContent: "space-between",
          padding: "1% 2%",
          fontWeight: 500,
          position: "fixed",
          top: "5rem",
          height: "60px",
          left: 0,
          right: 0,
          zIndex: 1,
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category}
            tab={category}
            weight={"500"}
            active={active}
            onClick={handleActive}
          />
        ))}
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: filterSectionOpen ? isTablet ? "100vw 1fr":" 258px 1fr 10vw" :isTablet ?"60px 1fr": " 75px 1fr 10vw",
          height: "100%",
          maxHeight: "100vh",
          marginTop: "8.7rem",
        }}
      >
        <EventFilter
          open={filterSectionOpen}
          external = {true}
          setOpen={handleFilterSectionOpen}
        />
        <div css={{ padding: "2% 1%", maxHeight: "calc(100vh - 120px)", overflowY: "auto", "&::-webkit-scrollbar": {
            display: "none",
          }, }}>{children}</div>
        <div css={{ padding: "20% 0.5%" , display:isTablet ? "none": "block"}}>
          <div css={{ display: "flex", marginBottom: "0.8rem", alignItems: "center", gap:"5px"}}>
            <p>All Events</p>
            <Image src={Right} alt="right" />
          </div>
          <div>
            <p css={{ fontSize: "16px" }}>
              <b>123456</b>
            </p>
            <p css={{ color: "#707070" }}>events found</p>
          </div>
        </div>
      </div>
    </div>
  );
}
