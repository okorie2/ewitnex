/** @jsxImportSource @emotion/react */

import ProfileCard from "@/components/cards/profile";
import { useMediaQuery } from "@mui/material";
import React from "react";

const ProfileFollowing = () => {
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
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers11.png"
        name="Mark Franlyn"
        userName="markintoch"
        status="Following"
      />
    </div>
  );
};

export default ProfileFollowing;
