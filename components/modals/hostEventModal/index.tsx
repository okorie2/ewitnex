/** @jsxImportSource @emotion/react */

import React from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import Link from "next/link";

interface IHostEventModal {
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

const HostEventModal = (props: IHostEventModal) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={customStyles}
    >
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
      <div>
        <div
          css={{
            height: "100vh",
            maxWidth: "25%",
            background: "#fff",
            position: "absolute",
            right: "0",
            top: "0",
            padding: "2% 2% 0",
            color: "#000",
            [screen.desktopLg]: {
              width: "50%",
            },
          }}
        >
          <div
            css={{
              textAlign: "center",
              display: "grid",
              gap: "1rem",
              width: "100%",
              height: "90%",
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
                Yay!you&apos;re live!
              </p>
            </div>
            <div
              css={{
                width: "60%",
                marginInline: "auto",
                display: "grid",
                gap: "0.5rem",
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
                width: "95%",
                margin: " 1rem auto",
                display: "grid",
                gap: "0.5rem",
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
              <div>
                <h4
                  css={{
                    width: "53%",
                    marginInline: "auto",
                  }}
                >
                  Grab your event ID and Invite Link
                </h4>
                <p css={{ fontSize: "0.875rem" }}>
                  Share with potential attendees
                </p>
              </div>
              <div>
                <p css={{ fontSize: "0.875rem", fontWeight: "500" }}>
                  Invite Link
                </p>
                <div
                  css={{
                    fontSize: "0.875rem",
                    backgroundColor: "#F5F5F5",
                    borderRadius: "5px",
                    width: "fit-content",
                    paddingInline: "0.3rem",
                    marginTop: "0.2rem",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <p>https:ewitnex.com/devfest-aba-id-tec542445</p>
                  <Image
                    src="/assets/svgs/copy2.svg"
                    alt=""
                    width={11.13}
                    height={12.6}
                  />
                </div>
              </div>
              <div>
                <p
                  css={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
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
                    paddingInline: "0.5rem",
                    marginTop: "0.2rem",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <p>tec542445</p>
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
                width: "70%",
                marginInline: "auto",
                display: "grid",
                gap: "0.5rem",
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
            <div css={{ marginTop: "2rem" }}>
              <Link
                href={`/dashboard/programs/Heal12548`}
                css={{
                  fontSize: "1.125rem",
                  color: "#7C35AB",
                  fontWeight: "bold",
                }}
              >
                VIEW EVENT PAGE
              </Link>
              <button
                css={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "'Nunito', sans-serif",
                  color: "#fff",
                  border: `1px solid ${"#7C35AB"}`,
                  height: "52px",
                  marginBlock: "1rem",
                  background: "#7C35AB",
                  borderRadius: "26px",
                  width: "60%",
                  cursor: "pointer",
                }}
              >
                MANAGE EVENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HostEventModal;
