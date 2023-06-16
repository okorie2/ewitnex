/** @jsxImportSource @emotion/react */

import React from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import EventTicketForm from "@/components/modals/eventTicketModal/form";

interface IEventTicketModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: { backgroundColor: "#00000029", zIndex: "3" },
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

const EventTicketModal = (props: IEventTicketModal) => {
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
          color: "#fff",
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
            maxWidth: "37%",
            background: "#fff",
            position: "absolute",
            right: "0",
            top: "0",
            padding: "2% 2% 0",
            overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
            zIndex: "9",
            color: "#000",
            [screen.desktopLg]: {
              width: "50%",
            },
          }}
        >
          <div css={{ height: "10%" }}>
            <h2 css={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Place Order
            </h2>
            <p
              css={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#AEAEAE",
                marginBlock: "0.5rem",
              }}
            >
              Devfest Aba
            </p>
          </div>
          <EventTicketForm />
        </div>
      </div>
    </Modal>
  );
};

export default EventTicketModal;
