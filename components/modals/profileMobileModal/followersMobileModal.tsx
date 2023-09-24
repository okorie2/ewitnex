/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import FollowersFragment from "fragments/profile/followersFragment";

interface IFollowersModal {
  isOpen: boolean;
  onRequestClose: () => void;
  activeTab:"followers"| "following";
}

const customStyles = {
  overlay: {
    backgroundColor: "#00000029",
    zIndex: "34",
    width: "100%",
    height: "100vh",
  },
  content: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: "#00000029",
    fontFamily: "'Nunito', sans-serif",
  },
};

Modal.setAppElement("body");

const FollowersModal = (props: IFollowersModal) => {
  const isTablet = useMediaQuery("(max-width: 780px)");

  const handleClose = () => {
    props.onRequestClose();
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={(e) => {
        e.stopPropagation();
        props.onRequestClose;
      }}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div
        css={{
          height: "100vh",
          width: "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "3% 2% 0",
          paddingRight: "0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "100vw" : "33.3%",
          },
          display: "grid",
          gridTemplateRows:  "1fr",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            boxShadow: "#00000029 0px 0px 10px ",
            padding: "0% 5%",
            paddingTop: "1.125rem",
            height: "9vh",
            fontFamily: "'Poppins', sans-serif",
            position: "fixed",
            gap: "2rem",
            left: "0",
            right: "0",
            top: "0",
            width: "100vw",
            zIndex: "5",
            background: "#fff",
          }}
        >
          <div onClick={handleClose}>
            <Image
              src="/assets/svgs/back.svg"
              alt="back_arrow"
              width={25}
              height={18}
            />
          </div>
          <div>
            <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>Blessed_one</h2>
          </div>
        </div>
        <div
          css={{
            width: "100%",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
           
          }}
        >
          <FollowersFragment _activeTab = {props.activeTab}/>
        </div>
      </div>
    </Modal>
  );
};

export default FollowersModal;
