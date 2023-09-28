/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import SettingsTextField, {
  SettingsPasswordTextField,
} from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { useMediaQuery } from "@mui/material";
import { CheckSelect } from "fragments/eventFilter";
import Image from "next/image";
import StyledCheckbox from "@/components/inputs/StyledCheckbox";

interface IAddBankModal {
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

const AddBankModal = (props: IAddBankModal) => {
  const [bankType, setBankType] = useState("personal");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [confirmAccount, setConfirmAccount] = useState(false);
  const [passwordVisible, setPassowrdVisible] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    subject: "",
    name: "",
    bank: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };
  const isTablet = useMediaQuery("(max-width: 780px)");
  const handleClose = () => {
    props.onRequestClose();
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
          height: "100vh",
          width: isTablet ? "100vw" : "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: isTablet ? "0 0.5rem" : "3% 2% 0",
          paddingRight: isTablet ? "" : "0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "100vw" : "33.3%",
          },
        }}
      >
        <div
          css={{
            width: "100%",
            height: "95%",
            overflowY: "scroll",
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
                  Add Bank Account
                </h2>
              </div>
            </div>
          )}
          <form css={{ paddingBlock: isTablet ? "5rem" : "" }}>
            <p
              css={{
                fontSize: isTablet ? "20px" : "24px",
                fontWeight: "bold",
                borderBottom: isTablet ? "1px solid #AEAEAE" : "",
                paddingBlock: isTablet ? "1rem" : "",
              }}
            >
              Enter Bank Details
            </p>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: isTablet ? "1rem" : "2rem",
              }}
            >
              <label
                css={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                  marginBottom: "0.6rem",
                }}
              >
                Bank Account Type
              </label>
              <div
                css={{
                  display: "flex",
                  gap: isTablet ? "0rem" : "2rem",
                  flexDirection: isTablet ? "column" : "row",
                }}
              >
                <CheckSelect
                  value={"personal"}
                  label={"Personal"}
                  labelColor="#000"
                  selected={bankType}
                  handleClick={() => setBankType("personal")}
                />
                <CheckSelect
                  value={"business"}
                  labelColor="#000"
                  label={"Business"}
                  selected={bankType}
                  handleClick={() => setBankType("business")}
                />
              </div>
              <div css={{ width: isTablet ? "100%":"95%" }}>
                <HostEventTextField
                  label="Bank Country"
                  placeholder="NG"
                  type="select"
                  options={[
                    { value: "NG", label: "Nigeria" },
                    { value: "US", label: "United States of America" },
                  ]}
                />
              </div>
              <div css={{ width: isTablet ? "100%":"95%", marginTop: "1rem" }}>
                <HostEventTextField
                  label="Bank Account Currency"
                  placeholder="NGN"
                  type="select"
                  options={[
                    { value: "NGN", label: "NGN" },
                    { value: "USD", label: "USD" },
                  ]}
                />
              </div>
              <p
                css={{
                  fontSize: "19.5px",
                  fontWeight: "bold",
                  marginBlock: "10px",
                }}
              >
                Enter Account Details
              </p>
              <div
                css={{
                  borderTop: "1px solid #AEAEAE",
                  paddingTop: "1rem",
                  width: isTablet ? "100%":"95%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <HostEventTextField
                  label="Bank Name"
                  placeholder="nil"
                  type="select"
                  options={[
                    { value: "nil", label: "--" },
                    { value: "Access Bank", label: "Access Bank" },
                    { value: "UBA", label: "UBA" },
                  ]}
                />
                <SettingsTextField
                  label={"Account Number"}
                  name="subject"
                  value={bankDetails.subject}
                  placeholder={"e.g. 0002223334"}
                  setValue={handleChange}
                />
                <SettingsTextField
                  label={"Account Holder Name"}
                  name="name"
                  value={bankDetails.name}
                  disabled={true}
                  placeholder={""}
                  setValue={handleChange}
                />
                <SettingsTextField
                  label={"SWIFT / BIC"}
                  name="bic"
                  value={bankDetails.name}
                  placeholder={"NBNNGLASGCS"}
                  setValue={handleChange}
                />
              </div>
              <div
                css={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <StyledCheckbox
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                />
                <p>
                  I Agree to the{" "}
                  <span
                    css={{
                      textDecoration: "underline",
                      color: "#7c35ab",
                      fontWeight: "bold",
                    }}
                  >
                    Terms and Conditions
                  </span>
                </p>
              </div>
              <div
                css={{ display: "flex", gap: "0.6rem", alignItems: "center" }}
              >
                <StyledCheckbox
                  checked={confirmAccount}
                  onChange={() => setConfirmAccount(!confirmAccount)}
                />
                <p>I Confirm to the Bank Account Details above</p>
              </div>
              <p
                css={{
                  fontSize: "19.5px",
                  fontWeight: "bold",
                  marginBlock: "10px",
                }}
              >
                Confirm Ewitnex Account
              </p>
              <div
                css={{
                  borderTop: "1px solid #AEAEAE",
                  paddingTop: "1rem",
                  width: isTablet ? "100%":"95%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <SettingsPasswordTextField
                  label={"Confirm Password"}
                  value={bankDetails.password}
                  placeholder={"Enter Password"}
                  setValue={handleChange}
                  visible={passwordVisible}
                  setVisible={setPassowrdVisible}
                  color="#000"
                />
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                  width: isTablet ? "100%":"95%",
                }}
              >
                <Button onClick={handleNext} height="52px" width="100%">
                  <p
                    css={{
                      fontSize: "16px",
                      fontFamily: '"Nunito", sans-serif',
                    }}
                  >
                    ADD BANK ACCOUNT
                  </p>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AddBankModal;
