/** @jsxImportSource @emotion/react */

import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { screen } from "styles/theme";
import EventTicketForm from "@/components/modals/eventTicketModal/form";
import { Button, ButtonFormFilled } from "styles/components/button";
import SummaryFragment from "./summary";

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
  const [stage, setStage] = useState("form");

  const modalDetails = useMemo(() => {
    if (stage === "form")
      return <FormStage setStage={() => setStage("summary")} />;
    if (stage === "summary")
      return <Summary setStage={() => setStage("success")} />;
    if (stage === "success") return <Success closeModal={() => props.onRequestClose()} setStage={() => setStage("form")}/>;
  }, [stage]);
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
            width: "33.3%",
            background: "#fff",
            position: "absolute",
            right: "0",
            top: "0",
            padding: "2% 2% 0",
            paddingRight:"0",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            zIndex: "9",
            color: "#000",
            [screen.desktopLg]: {
              width: "33.3%",
            },
          }}
        >
          {modalDetails}
        </div>
      </div>
    </Modal>
  );
};

export default EventTicketModal;

const Success = ({closeModal, setStage}:{
  closeModal:() => void
  setStage: () => void
}) => {
  const handleNext = () => {
    closeModal()
    setStage()
  }
  return (
    <div
      css={{
        display: "grid",
        placeItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding:"2rem",
      }}
    >
      <Image
        alt="success"
        src={"/assets/svgs/success.svg"}
        height={107.14}
        width={106.72}
      />
      <p
        css={{
          marginTop: "1rem",
          fontSize: "1.3rem",
          color: "#00d9b7",
          fontWeight: "bold",
        }}
      >
        Transaction Successful
      </p>
      <div css={{ width: "100%", marginTop: "2rem" , paddingLeft:"0.5rem"}}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginTop: "1rem",
          }}
        >
          <p css={{ fontWeight: "bold" }}>Transaction type:</p>
          <p css={{ color: "#707070" }}>Ticket Purchase</p>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginTop: "1rem",
          }}
        >
          <p css={{ fontWeight: "bold" }}>Transaction ID:</p>
          <p css={{ color: "#707070" }}>EWX000123</p>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginTop: "1rem",
          }}
        >
          <p css={{ fontWeight: "bold" }}>Date:</p>
          <p css={{ color: "#707070" }}>20.24.22, 09:21 AM</p>
        </div>
      </div>
      <div css={{ marginBlock: "4rem" }}>
        <Button onClick={handleNext} height="52px">
          <p
            css={{
              fontSize: "16px",
              fontFamily: '"Nunito", sans-serif',
              paddingInline: "10rem",
            }}
          >
            OKAY
          </p>
        </Button>
      </div>
    </div>
  );
};

const Summary = ({ setStage }: { setStage: () => void }) => {
  return (
    <>
      <div
        css={{
          display: "grid",
          gridTemplateRows: "10% 90%",
          height: "80%",
        }}
      >
        <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>Summary</p>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <SummaryFragment />
          <div css = {{width:"95%"}}>
          <ButtonFormFilled onClick={setStage}>CONFIRM</ButtonFormFilled>
          </div>
        </div>
      </div>
    </>
  );
};

const FormStage = ({ setStage }: { setStage: () => void }) => {
  return (
    <>
      <div css={{ height: "10%" }}>
        <h2 css={{ fontSize: "1.5rem", fontWeight: "bold" }}>Place Order</h2>
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
      <EventTicketForm setShowSummary={setStage} />
    </>
  );
};
