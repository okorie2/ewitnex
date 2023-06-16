/** @jsxImportSource @emotion/react */

import SettingsCard from "@/components/cards/settingsCard";
import React, { useState } from "react";
import Image from "next/image";
import { theme } from "styles/theme";
import SettingsFormCard from "@/components/cards/setingsFormCard";
import SettingsModal from "@/components/modals/settingsModal";

const PersonalInformation = () => {
  const [activeModal , setActiveModal] = useState("")
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)
  const handleSettingsModalOpen = (id:string) => {
    setSettingsModalOpen(!settingsModalOpen)
    setActiveModal(id)
  }
  return (
    <>
      <SettingsModal isOpen={settingsModalOpen} onRequestClose={() => handleSettingsModalOpen("")} activeModal={activeModal} />
    <div
      css={{
        height: "100vh",
      }}
    >
      <div
        css={{
          height: "80px",
          borderBottom: `1px solid ${"#E4E4E4"}`,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          paddingInline: "1.5rem",
          paddingRight: "2.5rem",
          color: "#000",
        }}
      >
        <h2>Personal Information</h2>
      </div>
      <div
        css={{
          height: "calc(100vh - 80px)",
          padding: "1.5rem",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <SettingsFormCard label={"Full Name"} cardTitle={"Blessed Onoriode"} onClick={() => handleSettingsModalOpen("fullName")}/>
        <SettingsFormCard label = {"Username"} cardTitle={"Blessed_one"} onClick={() => handleSettingsModalOpen("userName")}/>
        <SettingsFormCard label={"Phone Number"} cardTitle={"+234 9077728899"}  />
        <SettingsFormCard label={"Email Address"} cardTitle={"blessedonoriode@gmail.com"}  />
        <SettingsFormCard label={"Gender"} cardTitle={"Prefer not to say"} onClick={() => handleSettingsModalOpen("gender")} />
        <SettingsFormCard label={"Location"} cardTitle={"Lagos,Lagos,Nigeria"} onClick={() => handleSettingsModalOpen("location")}  />
      </div>
      
    </div>
    </>
  );
};

export default PersonalInformation;
