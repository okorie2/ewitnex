/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import SettingsTextField, {
  SettingsPasswordTextField,
} from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import { useMediaQuery } from "@mui/material";
import { CheckSelect } from "fragments/eventFilter";
import BasicTextField, {
  CssTextField,
} from "@/components/inputs/BasicTextField";
import { Box } from "@mui/material";

interface IWithdrawalModal {
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

const WithdrawalModal = (props: IWithdrawalModal) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [success, setSuccess] = useState(false);
  const [withdrawalType, setWithdrawalType] = useState("partial");
  const [data, setData] = useState({
    amount: "",
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
  useEffect(() => {
    if (withdrawalType === "full") {
      setData({ ...data, amount: "17892.50" });
    }
  }, [withdrawalType]);
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
          width: isTablet ? (success ? "85%" : "100vw") : "33.3%",
          background: "#fff",
          position: isTablet ? (success ? "relative" : "absolute") : "absolute",
          right: "0",
          top: "0",
          padding: isTablet ? "0 0.5rem" : "3% 2% 0",
          paddingRight: isTablet ? "" : "0",
          borderRadius: isTablet ? "18px" : "",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? (success ? "90vw" : "100vw") : "33.3%",
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
              <p css={{ fontSize: "0.875rem" }}>Sent to payout account</p>
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
                <p css={{ color: "#707070" }}>Withdrawal</p>
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
                <p css={{ fontWeight: "bold" }}>Account Name:</p>
                <p css={{ color: "#707070" }}>Jack Sparrow</p>
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  marginTop: "1rem",
                }}
              >
                <p css={{ fontWeight: "bold" }}>Account Number:</p>
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
            <div
              css={{
                marginBlock: isTablet ? "3.5rem" : "2.5rem",
                width: isTablet ? "100%" : "",
              }}
            >
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
            <p css={{ fontSize: "24px", fontWeight: "bold" }}>Withdrawal</p>
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
                      Withdrawal
                    </h2>
                  </div>
                </div>
              )}
              <form css={{ width: isTablet ? "100%" : "95%" }}>
                <div
                  css={{
                    marginBlock: "0.8rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.125rem",
                  }}
                >
                  <CheckSelect
                    value={"partial"}
                    labelColor="#000"
                    label={"Partial Withdrawal"}
                    selected={withdrawalType}
                    handleClick={() => setWithdrawalType("partial")}
                  />
                  <CheckSelect
                    value={"full"}
                    label={"Full Withdrawal"}
                    labelColor="#000"
                    selected={withdrawalType}
                    handleClick={() => setWithdrawalType("full")}
                  />
                </div>
                <SettingsTextField
                  label={"How much do you want to withdraw?"}
                  name="amount"
                  value={data.amount.toLocaleString()}
                  placeholder={"Enter Amount"}
                  type="number"
                  setValue={handleChange}
                  disabled={withdrawalType === "full"}
                />
                <p css={{ marginTop: "-2%" }}>
                  Total amount in wallet:
                  <span css={{ fontWeight: "bold" }}> $17892.50</span>
                </p>
                <div css={{ marginBlock: "3rem" }}>
                  <p css={{ fontWeight: "bold" }}>Paying to this account</p>
                  <div
                    css={{
                      height: "160px",
                      marginTop: "0.8rem",
                      marginLeft: "1%",
                      padding: "0.8rem",
                      borderRadius: "10px",
                      display: "grid",
                      gridTemplateColumns: "20% 1fr",
                      gap: "1rem",
                      boxShadow: "0px 0px 5px #00000029",
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/assets/svgs/bank.svg"
                        alt="bank"
                        height={66}
                        width={66}
                      />
                    </div>
                    <div
                      css={{
                        height: "100%",
                        display: "grid",
                        gridTemplateRows: "60% 40%",
                      }}
                    >
                      <div
                        css={{
                          fontSize: "1.125rem",
                          fontWeight: "bold",
                          letterSpacing: "0.36px",
                        }}
                      >
                        <p>
                          First Bank{" "}
                          <span css={{ fontWeight: "550" }}>| NGN</span>
                        </p>
                        <p
                          css={{
                            fontSize: "0.875rem",
                            color: "#707070",
                            fontWeight: "normal",
                          }}
                        >
                          Account Number
                        </p>
                        <p css={{ fontSize: "1rem", fontWeight: "normal" }}>
                          1234567890
                        </p>
                      </div>
                      <div
                        css={{
                          borderTop: "1px solid #aeaeae",
                          color: "#AEAEAE",
                          paddingTop: "0.5rem",
                        }}
                      >
                        <p>Payout Account Added</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  css={{
                    marginBlock: "1.5rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button onClick={handleNext} height="52px" width="100%">
                    <p
                      css={{
                        fontSize: "16px",
                        fontFamily: '"Nunito", sans-serif',
                      }}
                    >
                      WITHDRAW
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

export default WithdrawalModal;
