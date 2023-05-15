/** @jsxImportSource @emotion/react */

import ProfileCard from "@/components/cards/profile";
import React from "react";

const ProfileFollowing = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 165px)",
        gap: "1rem",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
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
