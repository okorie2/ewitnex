/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SidebarItem } from "pages/dashboard/layout/layout";

const ProfileMobileModal = ({
  shown,
  setClose,
}: {
  shown: boolean;
  setClose: () => void;
}) => {
  const [active, setActive] = useState("");
  useEffect (() => {
    const html = document.querySelector('html')
    if (html) { 
      html.style.overflow = shown ? "hidden" : "auto"
    }
  }, [shown])
  return (
    <>
      {shown && (
        <>
      <div
        css={{
          position: "absolute",
          width: "100vw",
          height: "60vh",
          marginTop: shown ? "-9vh" : "-100vh",
          background: "#000",
          opacity: "0.55",
          zIndex: 99,
        }}
        onClick={setClose}
      ></div>
        <div
          css={{
            position: "absolute",
            bottom:0,
            width: "100vw",
            height: "50vh",
            marginTop: "35vh",
            background: "#fff",
            zIndex: 101,
            transition: "margin-top 1s",
            display: "grid",
            paddingBlock: "1.5rem",
            fontFamily: '"Nunito", sans-serif',
            borderTop: "1px solid #AEAEAE",
            borderRadius: "20px 20px 0 0 ",
            borderBottom: "!px solid #00000029",
          }}
        >
          <ul
            css={{
              listStyleType: "none",
              display: "grid",
              gap: "1rem",
              width: "85%",
              marginInline: "auto",
              paddingBlock: "2rem 1rem",
            }}
          >
            <SidebarItem item={"manager"} activeItem={""} notification={true} />
            <SidebarItem item={"tickets"} activeItem={""} notification={true} />
            <SidebarItem
              item={"favourites"}
              activeItem={""}
              notification={true}
            />
            <SidebarItem item={"wallet"} activeItem={""} notification={true} />
            <SidebarItem
              item={"settings"}
              activeItem={""}
              notification={true}
            />
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
              width: "100%",
              marginInline: "auto",
              paddingBlock: "1.8rem",
              background: "#fff",
              paddingInline: "7.5%",
            }}
          >
            <Image
              src="/assets/svgs/logout.svg"
              alt=""
              width={20}
              height={20}
            />
            <p>Log out</p>
          </Link>
        </div>
      </>)}
    </>
  );
};

export default ProfileMobileModal;
