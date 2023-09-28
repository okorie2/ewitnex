/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import { CheckSelect } from "fragments/eventFilter";
import { CssTextField } from "@/components/inputs/BasicTextField";

interface IFundWalletModal {
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
    height: "100vh",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: "#00000029",
    fontFamily: "'Nunito', sans-serif",
  },
};

Modal.setAppElement("body");

const FundWalletModal = (props: IFundWalletModal) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [success, setSuccess] = useState(false);
  const [fundType, setFundType] = useState("card");

  const [data, setData] = useState({
    amount: "",
    name: "",
    card: "",
    expDate: "",
    ccv: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleClose = () => {
    props.onRequestClose();
  };
  const handleNext = () => {
    setSuccess(true);
  };
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
      {!isTablet && (
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
      )}

      <div
        css={{
          height: isTablet ? (success ? "90vh" : "100vh") : "100vh",
          maxWidth: isTablet ? (success ? "100%" : "100vw") : "33.3%",
          background: "#fff",
          position: isTablet ? (success ? "relative" : "absolute") : "absolute",
          right: "0",
          top: "0",
          borderRadius: isTablet ? "18px" : "",
          padding: isTablet ? "0 0.5rem" : "3% 2% 0",
          paddingRight: isTablet ? "" : "0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? (success ? "100vw" : "100vw") : "50%",
          },
          display: "grid",
          gridTemplateRows: success ? "1fr" : "10% 90%",
        }}
      >
        {success ? (
          <div
            css={{
              display: isTablet ? "block" : "grid",
              textAlign: isTablet ? "center" : "left",
              placeItems: "center",
              justifyContent: "space-between",
              width: isTablet ? "85%" : "95%",
            }}
          >
            <Image
              alt="success"
              src={"/assets/svgs/success.svg"}
              height={107.14}
              width={106.72}
              style={{ marginTop: isTablet ? "2rem" : "" }}
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
            <div css={{ textAlign: "center", marginTop: "2.5rem" }}>
              <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>$10,892.50</p>
              <p css={{ fontSize: "0.875rem" }}>{isTablet ? "Funded to wallet":"Added to wallet balance"}</p>
            </div>
            <div
              css={{
                borderTop: "1px solid #AEAEAE",
                width: isTablet ? "90%" : "100%",
                marginTop: "1.5rem",
                textAlign: "left",
                fontSize: isTablet ? "0.875rem" : "",
                marginInline: isTablet ? "auto" : "",
              }}
            >
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  marginTop: "1rem",
                }}
              >
                <p css={{ fontWeight: "bold" }}>Transaction Type:</p>
                <p css={{ color: "#707070" }}>Wallet Funding</p>
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
                <p css={{ fontWeight: "bold" }}>Funding Method:</p>
                <p css={{ color: "#707070" }}>Card</p>
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  marginTop: "1rem",
                }}
              >
                <p css={{ fontWeight: "bold" }}>Card Number:</p>
                <p css={{ color: "#707070" }}>1234567890</p>
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
            <div css={{ marginBlock: isTablet ? "3.5rem" : "2.5rem",
                width: isTablet ? "100%" : "", }}>
              <Button
                onClick={() => {
                  props.onRequestClose();
                  setSuccess(false);
                }}
                height="52px"
                width={"100%"}
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
        ) : (
          <>
            <p css={{ fontSize: "24px", fontWeight: "bold" }}>Fund Account</p>
            <div
              css={{
                width: "100%",
                overflowY: "auto",
                // "&::-webkit-scrollbar": {
                //   display: "none",
                // },
                "&::-webkit-scrollbar": {
                  display: isTablet ? "none" : "",
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
                  <div onClick={handleClose} css={{ display: "flex" }}>
                    <Image
                      src="/assets/svgs/close-plain.svg"
                      alt="back_arrow"
                      width={25}
                      height={28}
                    />
                  </div>
                  <div>
                    <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      Fund Wallet
                    </h2>
                  </div>
                </div>
              )}
              <form css={{ width: isTablet ? "100%" : "95%" }}>
                <SettingsTextField
                  label={"How much do you want to fund?"}
                  name="amount"
                  value={data.amount}
                  placeholder={"e.g. 0002223334"}
                  setValue={handleChange}
                />
                <p css={{ marginTop: "-2%" }}>
                  Total amount in wallet:
                  <span css={{ fontWeight: "bold" }}> $17892.50</span>
                </p>
                <div>
                  <p
                    css={{
                      fontSize: "19.5px",
                      fontWeight: "bold",
                      margin: "25px 0",
                    }}
                  >
                    Payment Method
                  </p>
                  <div
                    css={{
                      border: "1px solid #C0C0C0",
                      paddingInline: "1rem",
                      borderRadius: "10px",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <CheckSelect
                      value={"card"}
                      labelColor="#000"
                      label={"Credit or Debit Card"}
                      selected={fundType}
                      border="#000"
                      handleClick={() => setFundType("card")}
                    />
                    {fundType === "card" && (
                      <div
                        css={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          marginBlock: "1.25rem",
                        }}
                      >
                        <CssTextField
                          label={"Card Holder Name"}
                          name="name"
                          value={data.name}
                          onChange={handleChange}
                          color="secondary"
                        />
                        <CssTextField
                          label={"Card Number"}
                          name="card"
                          value={data.card}
                          onChange={handleChange}
                          color="secondary"
                        />
                        <div
                          css={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1rem",
                          }}
                        >
                          <CssTextField
                            label={"Expiry date"}
                            name="expDate"
                            value={data.expDate}
                            onChange={handleChange}
                            color="secondary"
                          />
                          <CssTextField
                            label={"CCV"}
                            type="password"
                            name="ccv"
                            value={data.ccv}
                            onChange={handleChange}
                            color="secondary"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    css={{
                      border: "1px solid #C0C0C0",
                      paddingInline: "1rem",
                      borderRadius: "10px",
                    }}
                  >
                    <CheckSelect
                      value={"transfer"}
                      labelColor="#000"
                      label={"Bank Transfer"}
                      selected={fundType}
                      handleClick={() => setFundType("transfer")}
                    />
                  </div>
                </div>
                <div css={{ marginBlock: "2rem", width: "100%" }}>
                  <Button onClick={handleNext} height="52px" width="100%">
                    <p
                      css={{
                        fontSize: "16px",
                        fontFamily: '"Nunito", sans-serif',
                      }}
                    >
                      FUND ACCOUNT
                    </p>
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default FundWalletModal;
