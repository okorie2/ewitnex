/** @jsxImportSource @emotion/react */

import React, {  useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import SettingsTextField, {
  SettingsPasswordTextField,
} from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { CheckSelect } from "fragments/eventFilter";
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
  const [passwordVisible, setPassowrdVisible] = useState(false)
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
        }}
      >
        <div
          css={{
            width: "100%",
            height: "95%",
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
          <form>
            <p css={{ fontSize: "24px", fontWeight: "bold" }}>
              Enter Bank Details
            </p>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "2rem",
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
              <div css={{ display: "flex", gap: "2rem" }}>
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
              <div css={{ width: "95%" }}>
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
              <div css={{ width: "95%", marginTop: "1rem" }}>
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
                  width: "95%",
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
                  width: "95%",
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
                  visible = {passwordVisible}
                  setVisible={setPassowrdVisible}
                  color="#000"
                />
              </div>
              <div
                css={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                  width:"95%"
                }}
              >
                <Button onClick={handleNext} height="52px">
                  <p
                    css={{
                      fontSize: "16px",
                      fontFamily: '"Nunito", sans-serif',
                      paddingInline: "6rem",
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
