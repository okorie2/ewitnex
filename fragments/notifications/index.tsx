/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NotificationCard from "@/components/cards/notificationCard";
import { SidebarItem } from "pages/dashboard/layout/layout";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import ProgramSvg from "public/assets/svgs/programs";
import HomeSvg from "public/assets/svgs/home";
import ProfileSvg from "public/assets/svgs/profile";
import LogoutSvg from "public/assets/svgs/logout";

const Notifications = ({
  shown,
  setClose,
}: {
  shown: boolean;
  setClose: () => void;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = shown ? "hidden" : "auto";
    }
  }, [shown]);
  return (
    <>
      <div
        css={{
          position: isTablet ? "fixed" : "absolute",
          width: isTablet ? "100vw" : "40vw",
          height: isTablet ? "100vh" : "",
          maxHeight: "100vh",
          borderRight: "1px solid #e4e4e4",
          marginLeft: shown ? "0" : "-100vw",
          background: "#fff",
          zIndex: 21,
          transition: "margin-left 1s",
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "101px 1fr",
          fontFamily: '"Nunito", sans-serif',
          top: isTablet ? "0" : "",
        }}
      >
        {!isTablet && (
          <div
            css={{
              borderRight: "1px solid #e4e4e4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              maxHeight: "100vh",
            }}
          >
            <div>
              <div css={{ marginTop: "1rem", textAlign: "center" }}>
                <Image
                  src="/assets/svgs/mini-logo.svg"
                  alt="logo"
                  height={50}
                  width={30}
                />
              </div>
              <ul
                css={{
                  listStyleType: "none",
                  display: "grid",
                  gap: "2.5rem",
                  width: "100%",
                  marginInline: "auto",
                  marginTop: "2.1rem",
                }}
              >
                <li css={{ textAlign: "center" }}>
                  <Link
                    href={"/dashboard"}
                    css={{
                      ":hover": {
                        color: "#7c35ab",
                        svg: {
                          path: {
                            fill: "#7c35ab",
                          },
                        },
                      },
                    }}
                  >
                    <HomeSvg />
                  </Link>
                </li>
                <li css={{ textAlign: "center" }}>
                  <Link
                    href="/dashboard/programs"
                    css={{
                      ":hover": {
                        color: "#7c35ab",
                        svg: {
                          path: {
                            fill: "#7c35ab",
                          },
                        },
                      },
                    }}
                  >
                    <ProgramSvg />
                  </Link>
                </li>
                <li
                  css={{ textAlign: "center", cursor: "pointer" }}
                  onClick={setClose}
                >
                  <Image
                    src={`/assets/svgs/notification-active.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
                </li>
                <li css={{ textAlign: "center" }}>
                  <Link
                    href="/dashboard/profile"
                    css={{
                      ":hover": {
                        color: "#7c35ab",
                        svg: {
                          path: {
                            fill: "#7c35ab",
                          },
                        },
                      },
                    }}
                  >
                    <ProfileSvg />
                  </Link>
                </li>
              </ul>
              {showMoreOptions && <MoreOptions />}
            </div>
            <div
              css={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => setShowMoreOptions(!showMoreOptions)}
            >
              <Image
                src="/assets/svgs/hamburger.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        )}
        <div
          css={{
            display: "grid",
            gridTemplateRows: "5rem 1fr",
          }}
        >
          <div
            css={{
              borderBottom: "1px solid #E4E4E4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              css={{
                fontSize: "24px",
                fontWeight: "bold",
                paddingLeft: isTablet ? "1.25rem" : "2.5rem",
                paddingTop: isTablet ? "0.875rem" : "1.5rem",
              }}
            >
              Notifications
            </p>
            {isTablet && (
              <div css={{ marginRight: "1.5rem", marginTop: "1.2rem" }}>
                <Link href={"/dashboard/search"}>
                  <Image
                    src="/assets/svgs/search.svg"
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </Link>
              </div>
            )}
          </div>
          <div
            css={{
              width: "100%",
              overflowY: "auto",
              height: isTablet ? "calc(100vh - 9rem)" : "calc(100vh - 80px)",
              paddingLeft: isTablet ? "1rem" : "2.5rem",
              paddingTop: "1rem",
              paddingBottom: "5rem",
              "&::-webkit-scrollbar": {
                visibility: "hidden",
              },
            }}
          >
            <NotificationCard
              uploaded="Just Now"
              type="message"
              messageType="witness"
              initiator="Daniel James"
              eventname="A Night With The Hokins"
              eventID="123456"
            />
            <NotificationCard
              uploaded="Just Now"
              type="message"
              messageType="witness"
              initiator="Daniel James"
              eventname="A Night With The Hokins"
              eventID="123456"
            />
            <NotificationCard
              uploaded="1 min ago"
              type="action"
              initiator="Mariam Jack"
              messageType="gainedFollower"
              actionType="Follow Back"
            />
            <NotificationCard
              uploaded={"4 min ago"}
              type={"message"}
              initiator="Blessed Onoreide"
              eventname="Blossom weds Christy"
              eventCategory="wedding"
              eventID="123456"
              messageType="hosted"
            />
            <NotificationCard
              uploaded={"1 hour ago"}
              type={"message"}
              messageType={"eventReminder"}
              eventname="DevFest Aba"
              eventID="123456"
            />
            <NotificationCard
              uploaded={"2 hours ago"}
              type={"message"}
              messageType={"soldTarget"}
              eventname="Pursue Peace"
              eventID="123456"
            />
            <NotificationCard
              uploaded={"2 hours ago"}
              type={"message"}
              messageType={"soldTarget"}
              eventname="Pursue Peace"
              eventID="123456"
            />
            <NotificationCard
              uploaded={"21 Aug 2023 "}
              type={"action"}
              messageType={"payout"}
              eventname="DevFest Aba"
              eventID="123456"
              actionType="View Receipt"
              time="11:29 AM"
            />
            <NotificationCard
              uploaded={"21 Aug 2023"}
              type={"message"}
              messageType={"payoutProcess"}
              time="11:28 AM"
              eventname="DevFest Aba"
              eventID="123456"
            />
          </div>
        </div>
      </div>
      {shown && (
        <div
          css={{
            position: "absolute",
            width: "60vw",
            height: "100vh",
            background: "transparent",
            marginLeft: "40vw",
          }}
          onClick={setClose}
        ></div>
      )}
    </>
  );
};

export default Notifications;

const MoreOptions = () => {
  return (
    <div
      css={{
        position: "absolute",
        top: "53.5%",
        width: "42%",
        height: "fit-content",
        background: "#fff",
        zIndex: "110",
        border: " 0.5px solid #AEAEAE",
      }}
    >
      <ul
        css={{
          listStyleType: "none",
          display: "grid",
          gap: "0.8rem",
          width: "65%",
          marginInline: "auto",
          paddingBlock: "2%",
        }}
      >
        <SidebarItem item={"manager"} activeItem={""} notification={true} />
        <SidebarItem item={"tickets"} activeItem={""} notification={true} />
        <SidebarItem item={"favourites"} activeItem={""} notification={true} />
        <SidebarItem item={"wallet"} activeItem={""} notification={true} />
        <SidebarItem item={"settings"} activeItem={""} notification={true} />
      </ul>
      <hr
        css={{
          border: "none",
          borderTop: `1px solid ${"#E4E4E4"}`,
        }}
      />
      <Link
        href="/dashboard"
        css={{
          display: "flex",
          gap: "1.5rem",
          width: "65%",
          marginInline: "auto",
          paddingBlock: "0.8rem",
          ":hover": {
            color: "#7c35ab",
            svg: {
              path: {
                fill: "#7c35ab",
              },
            },
          },
        }}
      >
        <LogoutSvg />
        <p>Log out</p>
      </Link>
    </div>
  );
};
