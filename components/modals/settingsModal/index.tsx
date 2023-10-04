/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import NameModal from "./nameModal";
import UserNameModal from "./userNameModal";
import GenderModal from "./genderModal";
import LocationModal from "./locationModal";
import SuccessModal from "./successModal";

interface ISettingsModal {
  isOpen: boolean;
  onRequestClose: () => void;
  activeModal: string;
}

const customStyles = {
  overlay: {
    backgroundColor: "#00000029",
    zIndex: "3",
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

const SettingsModal = (props: ISettingsModal) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [success, setSuccess] = useState(false);
  const stateEvents = useMemo(() => {
    if (props.activeModal === "fullName") return <NameModal closeModal={props.onRequestClose} setSuccess = {()=>setSuccess(true)}/>;
    else if (props.activeModal === "userName") return <UserNameModal closeModal={props.onRequestClose} setSuccess = {()=>setSuccess(true)}/>;
    else if (props.activeModal === "gender") return <GenderModal closeModal={props.onRequestClose} setSuccess = {()=>setSuccess(true)}/>;
    else if (props.activeModal === "location") return <LocationModal closeModal={props.onRequestClose} setSuccess = {()=>setSuccess(true)}/>;
  }, [props.activeModal]);
  return (
    <>
    {success ? <>
      <SuccessModal isOpen={success} onRequestClose={() => setSuccess(false)} action={"saveChange"} />
    </>
    :
    <Modal
      isOpen={props.isOpen}
      onRequestClose={(e) => {
        e.stopPropagation();
        props.onRequestClose;
      }}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      {!isTablet && <div
        onClick={props.onRequestClose}
        css={{
          border: "none",
          background: "none",
          color: "#fff",
          fontSize: "1.125rem",
          cursor: "pointer",
          width: "67%",
          height: "90vh",
        }}
      >
        {/* <p>&#x2715; Close</p>  */}
      </div>}

      <div
        css={{
          height: "100vh",
          maxWidth: isTablet ? "100vw" :"33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: isTablet ? "":"2% 2% 0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "100vw" :"50%",
          },
        }}
      >
        <div
          css={{
            display: "grid",
            gap: "1rem",
            width: "100%",
            height: "90%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {stateEvents}
        </div>
      </div>
    </Modal>}
    </>
  );
};

export default SettingsModal;
