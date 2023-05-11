/** @jsxImportSource @emotion/react */

import React from "react";
import ProfileCard from "@/components/cards/profile";

const ProfileFollowers = () => {
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
      />
      <ProfileCard
        image="/assets/pngs/followers3.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
      <ProfileCard
        image="/assets/pngs/followers4.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
      <ProfileCard
        image="/assets/pngs/followers5.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers6.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Following"
      />
      <ProfileCard
        image="/assets/pngs/followers7.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
      <ProfileCard
        image="/assets/pngs/followers8.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
      <ProfileCard
        image="/assets/pngs/followers9.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
      <ProfileCard
        image="/assets/pngs/followers10.png"
        name="Vivian Iheukwumere"
        userName="Vivilove"
        status="Follow"
      />
    </div>
  );
};

export default ProfileFollowers;
