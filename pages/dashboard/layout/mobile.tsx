/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Logo from "@/components/logo";
import Image from "next/image";
import { useRouter } from "next/router";
import Notification from "fragments/notifications";
import Link from "next/link";
import EventFilter from "fragments/eventFilter";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const forMobileDashboard = [
    "/dashboard",
    "/dashboard/programs",
    "/dashboard/notifications",
    "/dashboard/profile",
  ];
  useEffect (() => {
    const html = document.querySelector('html')
    if (html) { 
      html.style.overflow = filterOpen ? "hidden" : "auto"
    }
  }, [filterOpen])
  const [open, setOpen] = useState(false);
  const showMobileDashboard = forMobileDashboard.includes(router.route);
  return (
    <>
      {filterOpen && (
        <EventFilter
          open={filterOpen}
          setOpen={() => setFilterOpen(!filterOpen)}
        />
      )}
      <Notification shown={open} setClose={() => setOpen(false)} />
      <div
        css={{
          maxHeight: "100vh",
          width: "100vw",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {showMobileDashboard && open === false && (
          <div
            css={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "#00000029 0px 0px 10px ",
              padding: "0% 3.5%",
              height: "9vh",
              fontFamily: "'Poppins', sans-serif",
              position: "fixed",
              left: "0",
              right: "0",
              top: "0",
              zIndex: "2",
              width: "100vw",
            }}
          >
            {router.route === "/dashboard" ? (
              <Logo image="/assets/pngs/logo.png" />
            ) : (
              <p css={{ fontSize: "20px", fontWeight: 700 }}>
                {router.route[11].toUpperCase() + router.route.substring(12)}
              </p>
            )}
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginTop: "0.5rem",
              }}
            >
              <Link href={"/dashboard/search"}>
                <Image
                  src="/assets/svgs/search.svg"
                  width={20}
                  height={20}
                  alt="logo"
                />
              </Link>
              {router.route.includes("programs") && (
                <div onClick={() => setFilterOpen(!filterOpen)}>
                  <Image
                    src={"/assets/svgs/filter.svg"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </div>
              )}
              {router.route.includes("profile") && (
                <div>
                  <Image
                    src={"/assets/svgs/hamburger.svg"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {children}
        {showMobileDashboard && (
          <div
            css={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "#00000029 0px 0px 10px ",
              height: "4.5rem",
              fontFamily: "'Poppins', sans-serif",
              position: "fixed",
              left: "0",
              right: "0",
              bottom: "0",
              zIndex: "31",
              width: "100vw",
              paddingInline: "5%",
            }}
          >
            <Link href={"/dashboard"}>
              <Image
                src="/assets/svgs/home.svg"
                alt=""
                width={20}
                height={20}
              />
            </Link>
            <Link href="/dashboard/programs">
              <Image
                src={`/assets/svgs/programs.svg`}
                alt=""
                width={20}
                height={20}
              />
            </Link>
            <div onClick={() => setOpen(!open)}>
              <Image
                src={`/assets/svgs/notification.svg`}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <Link href="/dashboard/profile">
              <Image
                src={`/assets/svgs/profile.svg`}
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileLayout;
