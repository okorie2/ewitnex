/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import CopySnackBar from "@/components/snackbars/copied";

interface IHostEventModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: { zIndex: "6", backgroundColor: "#00000099" },
  content: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "1rem",
    alignItems: "center",
    border: "none",
    fontFamily: "'Nunito', sans-serif",
    inset: "25px",
  },
};

const HostEventModal = (props: IHostEventModal) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
  const handleCopyClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setCopySnackBarOpen(false);
  };
  const [message, setMessage] = useState("");

  const handleCopy = async (textToCopy: string, alert: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(textToCopy);
    } else {
      document.execCommand("copy", true, textToCopy);
    }
    setCopySnackBarOpen(true);
    setMessage(alert);
  };

  const [eventCode, setEventCode] = useState("");
  useEffect(() => {
    setEventCode(localStorage.getItem("currenteventCode") || "");
  }, []);
  const [eventID, setEventID] = useState("");
  useEffect(() => {
    setEventID(localStorage.getItem("currenteventID") || "");
  }, []);
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={customStyles}
    >
      <CopySnackBar
        open={copySnackBarOpen}
        message={message}
        handleClose={handleCopyClose}
      />
      <div
        css={{
          height: "100%",
          width: "100%",
          background: "#fff",
          position: "absolute",
          padding: "1% 5%",
          color: "#000",
          [screen.desktopLg]: {
            width: "90vw",
          },
        }}
      >
        <div
          css={{
            textAlign: "center",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: isTablet ? "" : "space-around",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <div>
            <Image
              src="/assets/svgs/wineglass.svg"
              alt=""
              width={87.81}
              height={94.05}
            />
            <p
              css={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#00D9B7",
                marginTop: "0.5rem",
              }}
            >
              Cheers!you&apos;re live!
            </p>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr" : "25% 50% 25%",
              gap: "2rem",
              justifyContent: "space-evenly",
              marginTop: "2rem",
            }}
          >
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                css={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: "#00D9B7",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                  marginInline: "auto",
                }}
              >
                <p>1</p>
              </div>
              <h4>Review your event</h4>
              <p css={{ fontSize: "0.875rem" }}>
                Visit your event page to make sure everything looks alright
              </p>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                css={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: "#00D9B7",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                  marginInline: "auto",
                }}
              >
                <p>2</p>
              </div>
              <h4>Grab your event ID and Invite Link</h4>
              <p css={{ fontSize: "0.875rem" }}>
                Share with potential attendees
              </p>
              <p css={{ fontSize: "0.875rem", fontWeight: "700" }}>
                Invite Link
              </p>
              <div
                css={{
                  fontSize: "0.875rem",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "5px",
                  width: "fit-content",
                  marginInline: "auto",
                  paddingInline: "0.3rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <p>{`https:ewitnex.com/${eventID.split("").slice(0, 8).join("")}`}</p>
                <div
                  css={{ cursor: "pointer" }}
                  onClick={() =>
                    handleCopy(
                      `https:ewitnex.com/${eventCode}`,
                      "Invite Link copied"
                    )
                  }
                >
                  <Image
                    src="/assets/svgs/copy2.svg"
                    alt=""
                    width={11.13}
                    height={12.6}
                  />
                </div>
              </div>
              <p
                css={{
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                Event ID
              </p>
              <div
                css={{
                  fontSize: "0.875rem",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "5px",
                  width: "fit-content",
                  marginInline: "auto",
                  marginTop: "0.2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <p>{eventID.split("").slice(0, 12).join("")}</p>
                <div
                  css={{ cursor: "pointer" }}
                  onClick={() => handleCopy(`${eventCode}`, "Event ID copied")}
                >
                  <Image
                    src="/assets/svgs/copy2.svg"
                    alt=""
                    width={11.13}
                    height={12.6}
                  />
                </div>
              </div>
            </div>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                css={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: "#00D9B7",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "grid",
                  alignContent: "center",
                  justifyContent: "center",
                  marginInline: "auto",
                }}
              >
                <p>3</p>
              </div>
              <h4>Share and send invite</h4>
              <p css={{ fontSize: "0.875rem" }}>
                Share to family, friends and relatives through SMS and social
                medias
              </p>
            </div>
          </div>
          <div
            css={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Link
              href={`/dashboard/programs/${eventID}`}
              css={{
                fontSize: "1rem",
                color: "#7C35AB",
                fontWeight: "bold",
              }}
            >
              VIEW EVENT PAGE
            </Link>
            <Link href={`/dashboard/manager/${eventID}?tab=Overview`}>
              <button
                css={{
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#fff",
                  border: `1px solid ${"#7C35AB"}`,
                  height: "45px",
                  marginBlock: "1rem",
                  background: "#7C35AB",
                  borderRadius: "26px",
                  width: isTablet ? "70%" : "20%",
                  marginInline: "auto",
                  cursor: "pointer",
                }}
              >
                MANAGE EVENT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HostEventModal;
