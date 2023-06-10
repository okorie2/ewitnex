/** @jsxImportSource @emotion/react */

import React, { useMemo } from "react";
import Modal from "react-modal";
import { theme, screen } from "styles/theme";
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
  overlay: { backgroundColor: theme.background.black, zIndex: "3" },
  content: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: theme.background.black,
    fontFamily: "'Nunito', sans-serif",
  },
};

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
      onRequestClose={props.onRequestClose}
      style={customStyles}
    >
      <button
        onClick={props.onRequestClose}
        css={{
          border: "none",
          background: "none",
          color: theme.common.white,
          fontSize: "1.125rem",
          cursor: "pointer",
        }}
      >
        &#x2715; Close
      </button>
      <div>
        <div
          css={{
            height: "100vh",
            maxWidth: "33.3%",
            background: theme.common.white,
            position: "absolute",
            right: "0",
            top: "0",
            padding: "2% 2% 0",
            color: theme.common.black,
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
      </div>
    </Modal>
  );
};

export default SettingsModal;