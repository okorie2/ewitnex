/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import { Button } from "styles/components/button";


interface IViewBankDetailsModal {
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

const ViewBankDetailsModal = (props: IViewBankDetailsModal) => {
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
          width: "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "3% 2% 0",
          paddingRight:"0",
          color: "#000",
          [screen.desktopLg]: {
            width: "33.3%",
          },
          display: "grid",
          gridTemplateRows: "10% 90%",
        }}
      >
        <div>
          <p css={{ fontSize: "24px", fontWeight: "bold" }}>
            Payout Account Details
          </p>
        </div>
        <div
          css={{
            width: "100%",
            overflowY: "scroll",
            // "&::-webkit-scrollbar": {
            //   display: "none",
            // },
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#F5f5f5",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#AEAEAE",
              borderRadius: "8px",
              height: "1px",
              ":hover": {
                background: ` ${"#707070"}`,
              },
            },
          }}
        >
          <div
            css={{
              width: "95%",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div
              css={{
                display: "grid",
                gridTemplateRows: "55% 45%",
                height: "175px",
              }}
            >
              <div
                css={{
                  background: "#00d9b7",
                  borderRadius: "10px 10px 0 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/assets/svgs/view-bank.svg"
                  alt=""
                  height={60}
                  width={60}
                />
              </div>
              <div
                css={{
                  borderRadius: "0 0 10px 10px",
                  border: "1px solid #E4E4E4",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  letterSpacing: "0.36px",
                }}
              >
                <p>
                  First Bank <span css={{ fontWeight: "550" }}>| NGN</span>
                </p>
              </div>
            </div>
            <div>
              <label
                css={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Account Set Up For
              </label>
              <p
                css={{
                  color: "#707070",
                  fontSize: "16px",
                  marginTop: "0.6rem",
                }}
              >
                Payout of sales tickets and hall listings
              </p>
            </div>
            <div>
              <label
                css={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Account Details
              </label>
              <p
                css={{
                  fontSize: "16px",
                  marginBlock: "0.6rem",
                  fontWeight: "bold",
                }}
              >
                Status
              </p>
              <div css= {{marginBottom:"1rem", fontSize:"14px" }}>
                <p css = {{fontSize:"16px", color:"#707070", marginBottom:"5px"}}>Account Type</p>
                <p>Personal</p>
              </div>
              <div css= {{marginBottom:"1rem", fontSize:"14px" }}>
                <p css = {{fontSize:"16px", color:"#707070", marginBottom:"5px"}}>Bank Country</p>
                <p>Nigeria</p>
              </div>
              <div css= {{marginBottom:"1rem", fontSize:"14px" }}>
                <p css = {{fontSize:"16px", color:"#707070", marginBottom:"5px"}}>Bank Name</p>
                <p>First Bank</p>
              </div>
              <div css= {{marginBottom:"1rem", fontSize:"14px" }}>
                <p css = {{fontSize:"16px", color:"#707070", marginBottom:"5px"}}>Account Holder Name</p>
                <p>Jack Sparrow</p>
              </div>
              <div css= {{marginBottom:"1rem", fontSize:"14px" }}>
                <p css = {{fontSize:"16px", color:"#707070", marginBottom:"5px"}}>Account Number</p>
                <p>1234567890</p>
              </div>
              <div css= {{marginBottom:"1rem", fontSize:"14px" }}>
                <p css = {{fontSize:"16px", color:"#707070", marginBottom:"5px"}}>SWIFT / BIC</p>
                <p>NBNNGLASGCS</p>
              </div>
            </div>
            <div css = {{marginBlock:"1.5rem"}}>
            <Button onClick={handleNext} height="52px" background="#F05E78" width="100%">
                  <p
                    css={{
                      fontSize: "16px",
                      fontFamily: '"Nunito", sans-serif',
                      display:"flex",
                      gap:"1rem",
                      alignItems:"center"
                    }}
                  >
                    <Image  alt = "delete" src = "/assets/svgs/trash-white.svg" width = {20} height = {20}/>
                    DELETE ACCOUNT
                  </p>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewBankDetailsModal;
