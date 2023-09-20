/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Logo from "@/components/logo";
import Image from "next/image";
import { useRouter } from "next/router";
import Notification from "fragments/notifications";
import Link from "next/link";
import EventFilter from "fragments/eventFilter";
import ProfileMobileModal from "@/components/modals/profileMobileModal";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const forMobileDashboard = [
    "/dashboard",
    "/dashboard/programs",
    "/dashboard/notifications",
    "/dashboard/profile",
  ];
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = filterOpen ? "hidden" : "auto";
    }
  }, [filterOpen]);
  const [open, setOpen] = useState(false);
  const [profileMobileModalOpen, setProfileMobileModalOpen] = useState(false);
  const showMobileDashboard = () => {
    return forMobileDashboard.includes(router.route) && filterOpen === false;
  };
  return (
    <>
      {filterOpen && (
        <EventFilter
          open={filterOpen}
          setOpen={() => setFilterOpen(!filterOpen)}
        />
      )}
      <Notification shown={open} setClose={() => setOpen(false)} />
      <ProfileMobileModal
        shown={profileMobileModalOpen}
        setClose={() => setProfileMobileModalOpen(!profileMobileModalOpen)}
      />
      <div
        css={{
          maxHeight: "100vh",
          width: "100vw",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {showMobileDashboard() && open === false && (
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
                <div
                  onClick={() => {
                    setProfileMobileModalOpen(!profileMobileModalOpen);
                  }}
                >
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
        {showMobileDashboard() && profileMobileModalOpen === false && (
          <>
            <div
              css={{
                backgroundColor: "#fff",
                boxShadow: "#00000029 0px 0px 10px ",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
              <div
                css={{
                  position: "absolute",
                  height: "4rem",
                  width: "5rem",
                  background: "blue",
                  left: "39%",
                  top: "-1.8rem",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTop: "0.5px solid #707070",
                }}
              >
                <div
                  css={{
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "1px solid #7c35ab",
                  }}
                >
                  <Link href="/dashboard/hostEvent" css = {{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Image
                      src="/assets/svgs/host.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
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
          </>
        )}
      </div>
    </>
  );
};

export default MobileLayout;
