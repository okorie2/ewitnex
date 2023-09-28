/** @jsxImportSource @emotion/react */

import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import Link from "next/link";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import { useMediaQuery } from "@mui/material";
import { TextField } from "@mui/material";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import TicketDetailsFragment from "fragments/tickets/ticketDetailsFragment";

interface ITicketDetailsModal {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedEvent:string
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

const TicketDetailsModal = (props: ITicketDetailsModal) => {
  const [messageDetails, setMessageDetails] = useState({
    subject: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessageDetails({ ...messageDetails, [name]: value });
  };
  const isTablet = useMediaQuery("(max-width: 780px)");
  const handleClose = () => {
    props.onRequestClose()
  }
  
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
      </div> }
      <div
        css={{
          height: "100vh",
          maxWidth:  isTablet ? "100vw" :"33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "3% 2% 0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "100vw" :"50%",
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
          {isTablet && (
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
                gap: "1.5rem",
                left: "0",
                right: "0",
                top: "0",
                width: "100vw",
                zIndex: "5",
                background: "#fff",
              }}
            >
              <div onClick={handleClose} css = {{display:"flex"}}>
                <Image
                  src="/assets/svgs/back.svg"
                  alt="back_arrow"
                  width={25}
                  height={18}
                />
              </div>
              <div>
                <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Ticket Details
                </h2>
              </div>
            </div>
          )}
              <TicketDetailsFragment selectedEvent={props.selectedEvent}/>
        </div>
      </div>
    </Modal>
  );
};

export default TicketDetailsModal;
