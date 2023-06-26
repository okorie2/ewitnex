/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import Link from "next/link";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import { TextField } from "@mui/material";
import HostEventTextField from "@/components/inputs/hostEventTextField";

interface IMessageAttendeesModal {
  isOpen: boolean;
  onRequestClose: () => void;
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

const MessageAttendeesModal = (props: IMessageAttendeesModal) => {
  const [messageDetails, setMessageDetails] = useState({
    subject: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessageDetails({ ...messageDetails, [name]: value });
  };
  const handleNext = () => {};
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
          padding: "3% 2% 0",
          color: "#000",
          [screen.desktopLg]: {
            width: "50%",
          },
        }}
      >
        <div
          css={{
            width: "100%",
            height: "95%",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <p css={{ fontSize: "24px", fontWeight: "bold" }}>
            Messaging Attendees
          </p>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "2rem",
            }}
          >
            <SettingsTextField
              label={"Subject"}
              name="subject"
              value={messageDetails.subject}
              placeholder={"Enter Subject"}
              setValue={handleChange}
            />
            <HostEventTextField
              label={"Message"}
              type="textarea"
              name="message"
              color= "#000"
              height="16rem"
              value={messageDetails.message}
              placeholder={"Start writing your message"}
              setValue={handleChange}
            />
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Button onClick={handleNext} height="52px">
                <p
                  css={{
                    fontSize: "16px",
                    fontFamily: '"Nunito", sans-serif',
                    paddingInline: "7rem",
                  }}
                >
                  SAVE CHANGES
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MessageAttendeesModal;
