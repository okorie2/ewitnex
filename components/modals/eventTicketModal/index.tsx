/** @jsxImportSource @emotion/react */

import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import EventTicketForm from "@/components/modals/eventTicketModal/form";
import { Button, ButtonFormFilled } from "styles/components/button";
import SummaryFragment from "./summary";
import { useRouter } from "next/router";

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
  const isTablet = useMediaQuery("(max-width: 780px)");
  useEffect (() => {
    const html = document.querySelector('html')
    if (html) { 
      html.style.overflow = props.isOpen ? "hidden" : "auto"
    }
  }, [props.isOpen])

  const modalDetails = useMemo(() => {
    if (stage === "form")
      return <FormStage setStage={() => setStage("summary")} />;
    if (stage === "summary")
      return <Summary setStage={() => setStage("success")} />;
    if (stage === "success")
      return (
        <Success
          closeModal={() => props.onRequestClose()}
          setStage={() => setStage("form")}
        />
      );
  }, [stage]);

  const pageHeader = useMemo(() => {
    if (stage === "form") return "Place Order";
    if (stage === "summary") return "Summary";
  }, [stage]);

  const handleBack = () => {
    if(stage === "summary"){
      setStage("form")
    }else if (stage === "success"){
      setStage("form")
      props.onRequestClose()
    }else {
      props.onRequestClose()
    }
  }
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={customStyles}
    >
      {!isTablet && (
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
      )}
      <div>
        <div
          css={{
            height: "100vh",
            width: isTablet ? "" : "33.3%",
            background: "#fff",
            position: "absolute",
            right: "0",
            top: "0",
            padding: isTablet ? "":"2% 2% 0",
            paddingRight: "0",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            zIndex: "9",
            color: "#000",
            [screen.desktopLg]: {
              width: isTablet ? "100vw" : "33.3%",
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
                gap: "2rem",
                left: "0",
                right: "0",
                top: "0",
                width: "100vw",
                zIndex: "5",
                background: "#fff",
              }}
            >
              <div onClick={handleBack}>
                <Image
                  src="/assets/svgs/back.svg"
                  alt="back_arrow"
                  width={25}
                  height={18}
                />
              </div>
              <div>
                <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {pageHeader}
                </h2>
                <p
                  css={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#AEAEAE",
                  }}
                >
                  Devfest Aba
                </p>
              </div>
            </div>
          )}
          {modalDetails}
        </div>
      </div>
    </Modal>
  );
};

export default EventTicketModal;

export const Success = ({
  closeModal,
  setStage,
}: {
  closeModal: () => void;
  setStage: () => void;
}) => {
  const handleNext = () => {
    closeModal();
    setStage();
  };
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <div
      css={{
        display: "grid",
        placeItems: "center",
        justifyContent: "space-between",
        width: isTablet ? "100vw" : "100%",
        padding: isTablet ? "" : "2rem",
        marginTop: isTablet ? "9vh" : "",
        marginInline:isTablet ? "auto" :"",
        paddingBlock:"2rem"

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
      <div
        css={{
          width: isTablet ? "90%" : "100%",
          marginTop: "2rem",
          paddingLeft: "0.5rem",
        }}
      >
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
      <div css={{ marginBlock: "4rem", width:isTablet ? "100vw":"", display:'flex', justifyContent:"center" }}>
        <Button
          onClick={handleNext}
          height="52px"
          width={isTablet ? "85%" : ""}
        >
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

export const Summary = ({ setStage }: { setStage: () => void }) => {
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <>
      <div
        css={{
          display: "grid",
          gridTemplateRows: isTablet ? "1fr" : "10% 90%",
          height: isTablet ? "91vh" : "80%",
          marginTop: isTablet ? "9vh" : "",
          width:isTablet ? "90%":"",
          marginInline:isTablet ? "auto" :"",
          paddingBlock:"2rem"
        }}
      >
        {!isTablet && (
          <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>Summary</p>
        )}
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <SummaryFragment />
          <div css={{ width: "95%" }}>
            <ButtonFormFilled onClick={setStage}>CONFIRM</ButtonFormFilled>
          </div>
        </div>
      </div>
    </>
  );
};

export const FormStage = ({ setStage }: { setStage: () => void }) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <>
      <div
        css={{
          height: isTablet ? "" : "10%",
          marginTop: isTablet ? "9vh" : "",
        }}
      >
        {!isTablet && (
          <>
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
          </>
        )}
      </div>
      <EventTicketForm setShowSummary={setStage} />
    </>
  );
};
