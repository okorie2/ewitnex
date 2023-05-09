/** @jsxImportSource @emotion/react */

import React from "react";
import Modal from "react-modal";
import { theme, screen } from "styles/theme";
import Image from "next/image";
import Link from "next/link";

interface IHostEventModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: { backgroundColor: theme.background.black, zIndex: "3" },
  content: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: theme.background.black,
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
          color: theme.common.white,
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
            background: theme.common.white,
            position: "absolute",
            right: "0",
            top: "0",
            padding: "2% 2% 0",
            color: theme.common.black,
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
                  color: theme.color.lightGreen,
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
                  backgroundColor: theme.background.lightGreen,
                  color: theme.common.white,
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
                width: "90%",
                margin: " 1rem auto",
                display: "grid",
                gap: "0.5rem",
              }}
            >
              <div
                css={{
                  width: "38px",
                  height: "38px",
                  backgroundColor: theme.background.lightGreen,
                  color: theme.common.white,
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
                    width: "58%",
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
                <p
                  css={{
                    fontSize: "0.875rem",
                    backgroundColor: theme.background.secondary,
                    borderRadius: "5px",
                    width: "fit-content",
                    marginInline: "auto",
                    paddingInline: "0.5rem",
                    marginTop: "0.2rem",
                  }}
                >
                  https:ewitnex.com/devfest-aba-id-tec542445
                </p>
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
                <p
                  css={{
                    fontSize: "0.875rem",
                    backgroundColor: theme.background.secondary,
                    borderRadius: "5px",
                    width: "fit-content",
                    marginInline: "auto",
                    paddingInline: "0.5rem",
                    marginTop: "0.2rem",
                  }}
                >
                  tec542445
                </p>
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
                  backgroundColor: theme.background.lightGreen,
                  color: theme.common.white,
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
                href=""
                css={{
                  fontSize: "1.125rem",
                  color: theme.color.primary,
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
                  color: theme.common.white,
                  border: `1px solid ${theme.color.primary}`,
                  height: "52px",
                  marginBlock: "1rem",
                  background: theme.color.primary,
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
