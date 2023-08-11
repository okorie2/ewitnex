/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Image from "next/image";
import NotificationCard from "@/components/cards/notificationCard";
import { SidebarItem } from "pages/dashboard/layout";
import Link from "next/link";

const Notifications = ({
  shown,
  setClose,
}: {
  shown: boolean;
  setClose: () => void;
}) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  return (
    <>
      <div
        css={{
          position: "absolute",
          width: "40vw",
          maxHeight: "100vh",
          borderRight: "1px solid #e4e4e4",
          marginLeft: shown ? "0" : "-100vw",
          background: "#fff",
          zIndex: 101,
          transition: "margin-left 1s",
          display: "grid",
          gridTemplateColumns: "101px 1fr",
          fontFamily: '"Nunito", sans-serif',
        }}
      >
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
                <Link href={"/dashboard"}>
                  <Image
                    src="/assets/svgs/home.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li css={{ textAlign: "center" }}>
                <Link href="/dashboard/programs">
                  <Image
                    src={`/assets/svgs/programs.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
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
                <Link href="/dashboard/profile">
                  <Image
                    src={`/assets/svgs/profile.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
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
        <div
          css={{
            display: "grid",
            gridTemplateRows: "80px 1fr",
          }}
        >
          <p
            css={{
              fontSize: "24px",
              fontWeight: "bold",
              borderBottom: "1px solid #E4E4E4",
              paddingLeft: "2.5rem",
              paddingTop: "1.5rem",
            }}
          >
            Notifications
          </p>
          <div
            css={{
              width: "100%",
              overflowY: "auto",
              height: "calc(100vh - 80px)",
              paddingLeft: "2.5rem",
              paddingTop: "1rem",
             
              "&::-webkit-scrollbar": {
                  visibility:"hidden",
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
        }}
      >
        <Image src="/assets/svgs/logout.svg" alt="" width={20} height={20} />
        <p>Log out</p>
      </Link>
    </div>
  );
};
