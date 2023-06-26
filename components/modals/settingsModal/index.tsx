/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import Link from "next/link";
import NameModal from "./nameModal";
import UserNameModal from "./userNameModal";
import GenderModal from "./genderModal";
import LocationModal from "./locationModal";

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
  const stateEvents = useMemo(() => {
    if (props.activeModal === "fullName") return <NameModal />;
    else if (props.activeModal === "userName") return <UserNameModal />;
    else if (props.activeModal === "gender") return <GenderModal />;
    else if (props.activeModal === "location") return <LocationModal />;
  }, [props.activeModal]);
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
      </div>

      <div
        css={{
          height: "100vh",
          maxWidth: "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "2% 2% 0",
          color: "#000",
          [screen.desktopLg]: {
            width: "50%",
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
    </Modal>
  );
};

export default SettingsModal;
