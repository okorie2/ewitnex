/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import { Button } from "styles/components/button";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

interface ISuccessModal {
  isOpen: boolean;
  onRequestClose: () => void;
  action: "passwordReset" | "accountVerification" | "saveChange";
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
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleNext = () => {
    if (props.action === "passwordReset") {
      setLoading(true);
      router.push("/auth/signin");
    }
    if (props.action === "accountVerification") {
      if (isTablet) {
        router.push("/dashboard");
      } else {
        props.onRequestClose();
      }
    }
    if (props.action === "saveChange") {
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
      {!isTablet && (
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
      )}

      <div
        css={{
          height: isTablet ? "60vh" : "100vh",
          width: isTablet ? "90vw" : "33.3%",
          background: "#fff",
          position: isTablet ? "relative" : "absolute",
          right: "0",
          top: "0",
          padding: isTablet ? "0 0.5rem" : "3% 2% 0",
          paddingRight: isTablet ? "" : "0",
          borderRadius: isTablet ? "18px" : "",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "90vw" : "33.3%",
            marginInline: isTablet ? "auto" : "",
            marginTop: isTablet ? "30vw" : "",
          },
          display: "grid",
        }}
      >
        <div
          css={{
            width: "100%",
            overflowY: "scroll",
            display: isTablet ? "flex" : "",
            alignItems: isTablet ? "center" : "",
            justifyContent: isTablet ? "center" : "",
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
          <div
            css={{
              height: isTablet ? "" : "80vh",
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
                width: isTablet ? "" : "70%",
                textAlign: "center",
                marginBlock: "1.5rem",
                fontWeight: "550",
              }}
            >
              {props.action === "accountVerification" ? (
                <p>Your account has been successfully verified</p>
              ) : (
                <>
                  <p>
                    {props.action === "saveChange"
                      ? "Your changes have been saved"
                      : "Your password has been changed successfully"}
                  </p>
                  <p>
                    {props.action === "saveChange"
                      ? "It may take some time to reflect across the application"
                      : ""}
                  </p>
                </>
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
                  {props.action === "accountVerification" ||
                  props.action === "saveChange"
                    ? "OKAY"
                    : "LOG IN"}
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
