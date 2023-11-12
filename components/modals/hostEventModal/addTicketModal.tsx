/** @jsxImportSource @emotion/react */

import React, { RefObject, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import { CheckSelect } from "fragments/eventFilter";
import { CssTextField } from "@/components/inputs/BasicTextField";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import AddTicketForm from "fragments/hostEvent/addTicketForm";

interface IAddTicketModal {
  isOpen: boolean;
  onRequestClose: () => void;
  ticketRef : RefObject<HTMLInputElement>
  setGetTickets : React.Dispatch<React.SetStateAction<boolean>>
}

const customStyles = {
  overlay: {
    backgroundColor: "#00000029",
    zIndex: "6",
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

const AddTicketModal = (props: IAddTicketModal) => {
  const [success, setSuccess] = useState(false);
  const isTablet = useMediaQuery("(max-width: 780px)");
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };
  const handleNext = () => {
  };
  const handleClose = () => {
    props.onRequestClose()
  }
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
     {!isTablet &&  <div
        onClick={handleClose}
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
          width: "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "3% 2% 0",
          paddingRight:"0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "100vw" :"33.3%",
          },
          display: "grid",
          gridTemplateRows: isTablet ? "1fr":"10% 90%",
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
                zIndex: "32",
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
                <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Add Ticket
                </h2>
              </div>
            </div>
            <div
              css={{
                width: "100%",
                overflowY: "auto",
                paddingInline:"0.5rem",
                marginTop:"11vh",
                "&::-webkit-scrollbar": {
                  display: "none",
                },

              }}
            >
              <AddTicketForm ticketRef={props.ticketRef} setGetTickets = {props.setGetTickets} handleModalClose={handleClose}/>
            </div>
      </div>
    </Modal>
  );
};

export default AddTicketModal;
