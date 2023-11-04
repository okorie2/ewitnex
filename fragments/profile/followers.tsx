/** @jsxImportSource @emotion/react */

import React from "react";
import { useMediaQuery } from '@mui/material';
import ProfileCard from "@/components/cards/profile";

const ProfileFollowers = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        height: isTablet ? "71vh":"calc(100vh - 165px)",
        gap: "1rem",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        paddingBottom:isTablet ? "5rem" : ""
      }}
    >
      {/* <ProfileCard
        image="/assets/pngs/followers1.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
      <ProfileCard
        image="/assets/pngs/followers2.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Following"
      /> */}
    </div>
  );
};

export default ProfileFollowers;
