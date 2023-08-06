/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import SettingsTextField, {
  SettingsPasswordTextField,
} from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
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
  const [success, setSuccess] = useState(false);
  const [withdrawalType, setWithdrawalType] = useState("full");
  const [data, setData] = useState({
    amount: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
          display: "grid",
          gridTemplateRows: "10% 90%",
        }}
      >
        {success ? (
          <div
            css={{
              display: "grid",
              placeItems: "center",
              justifyContent:"space-between",
              width: "95%",
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
            <div css={{ textAlign: "center", marginTop: "2.5rem" }}>
              <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>$10,892.50</p>
              <p css={{ fontSize: "0.875rem" }}>Sent to payout account</p>
            </div>
            <div css = {{borderTop:"1px solid #AEAEAE", width:"100%", marginTop:"1.5rem"}}>
              <div css = {{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                marginTop:"1rem"
              }}>
                <p css = {{fontWeight:"bold"}}>Transaction Type:</p>
                <p css = {{color:"#707070"}}>Withdrawal</p>
              </div>
              <div css = {{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                marginTop:"1rem"
              }}>
                <p css = {{fontWeight:"bold"}}>Transaction ID:</p>
                <p css = {{color:"#707070"}}>EWX000123</p>
            </div>
            <div css = {{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                marginTop:"1rem"
              }}>
                <p css = {{fontWeight:"bold"}}>Account Name:</p>
                <p css = {{color:"#707070"}}>Jack Sparrow</p>
            </div>
            <div css = {{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                marginTop:"1rem"
              }}>
                <p css = {{fontWeight:"bold"}}>Account Number:</p>
                <p css = {{color:"#707070"}}>1234567890</p>
            </div>
            <div css = {{
                display:"grid",
                gridTemplateColumns:"1fr 1fr",
                marginTop:"1rem"
              }}>
                <p css = {{fontWeight:"bold"}}>Date:</p>
                <p css = {{color:"#707070"}}>20.24.22, 09:21 AM</p>
            </div>
            </div>
            <div css={{ marginBlock: "2.5rem" }}>
              <Button
                onClick={() => {
                  props.onRequestClose();
                  setSuccess(false);
                }}
                height="52px"
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
              <form css={{ width: "95%" }}>
                <div
                  css={{
                    marginBlock: "0.8rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.125rem",
                  }}
                >
                  <CheckSelect
                    value={"full"}
                    label={"Full Withdrawal"}
                    labelColor="#000"
                    selected={withdrawalType}
                    handleClick={() => setWithdrawalType("full")}
                  />
                  <CheckSelect
                    value={"partial"}
                    labelColor="#000"
                    label={"Partial Withdrawal"}
                    selected={withdrawalType}
                    handleClick={() => setWithdrawalType("partial")}
                  />
                </div>
                <SettingsTextField
                  label={"How much do you want to withdraw?"}
                  name="amount"
                  value={data.amount}
                  placeholder={"Enter Amount"}
                  setValue={handleChange}
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
                <div css={{ marginBlock: "1.5rem" }}>
                  <Button onClick={handleNext} height="52px">
                    <p
                      css={{
                        fontSize: "16px",
                        fontFamily: '"Nunito", sans-serif',
                        paddingInline: "9rem",
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
