/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import { Button } from "styles/components/button";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";

interface ISuccessModal {
  isOpen: boolean;
  onRequestClose: () => void;
  action: "passwordReset" | "accountVerification";
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

const SuccessModal = (props: ISuccessModal) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleNext = () => {
    if (props.action === "passwordReset") {
      setLoading(true);
      router.push("/auth/signin");
    }
    if (props.action === "accountVerification") {
      props.onRequestClose();
    }
  };
  const handleClick = () => {
    if (props.action === "accountVerification") {
      props.onRequestClose();
    }
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
        onClick={handleClick}
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
          paddingRight: "0",
          color: "#000",
          [screen.desktopLg]: {
            width: "33.3%",
          },
          display: "grid",
        }}
      >
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
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
              {props.action === "accountVerification"
                ? "Account Verified"
                : "Successful"}
            </p>
            <div
              css={{
                width: "70%",
                textAlign: "center",
                marginBlock: "1.5rem",
                fontWeight: "550",
              }}
            >
              {props.action === "accountVerification" ? (
                <p>Your account has been successfully verified</p>
              ) : (
                <p>Your password has been changed successfully</p>
              )}
            </div>
            <div
              css={{
                width: "95%",
                display: "flex",
                justifyContent: "center",
                marginBlock: "0.5rem",
              }}
            >
              <Button
                onClick={handleNext}
                height="52px"
                width="50%"
                border={
                  props.action === "accountVerification"
                    ? ""
                    : "1px solid #7c35ab"
                }
                color={props.action === "accountVerification" ? "" : "#7c35ab"}
                background={
                  props.action === "accountVerification" ? "" : "#fff"
                }
              >
                <p
                  css={{
                    fontSize: "16px",
                    fontFamily: '"Nunito", sans-serif',
                  }}
                >
                  {props.action === "accountVerification" ? "OKAY" : "SIGN IN"}
                </p>
                {loading && (
                  <TailSpin
                    height={15}
                    width={15}
                    color="#7c35ab"
                    ariaLabel="loading"
                    radius={"1"}
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
