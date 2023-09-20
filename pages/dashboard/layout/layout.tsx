/** @jsxImportSource @emotion/react */

import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@/components/logo";
import { useMediaQuery } from "@mui/material";
import Notification from "fragments/notifications";
import MobileLayout from "./mobile";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const router = useRouter();
  const active = useMemo(() => {
    let route = router.route;
    if (route.includes("manager")) {
      route = "/dashboard/manager";
    }
    if (route.includes("programs")) {
      route = "/dashboard/programs";
    }
    switch (route) {
      case "/dashboard":
        {
          return "feeds";
        }
        break;
      case "/dashboard/programs":
        {
          return "programs";
        }
        break;
      case "/dashboard/notifications":
        {
          return "notifications";
        }
        break;
      case "/dashboard/profile":
        {
          return "profile";
        }
        break;
      case "/dashboard/manager":
        {
          return "manager";
        }
        break;
      case "/dashboard/tickets":
        {
          return "tickets";
        }
        break;
      case "/dashboard/favourites":
        {
          return "favourites";
        }
        break;
      case "/dashboard/wallet":
        {
          return "wallet";
        }
        break;
      case "/dashboard/settings":
        {
          return "settings";
        }
        break;
      default: {
        return "feeds";
      }
    }
  }, [router.route]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const ISSERVER = typeof window === "undefined";
  const [showMore, setShowMore] = useState(() => {
    if (ISSERVER) return false;
    if (sessionStorage.getItem("sidebarState") && sessionStorage) {
      return sessionStorage.getItem("sidebarState") === "true";
    } else {
      sessionStorage.setItem("sidebarState", "true");
      return true;
    }
  });

  useEffect(() => {
    sessionStorage.setItem("sidebarState", showMore.toString());
  }, [showMore]);

  const handleToggle = () => {
    setShowMore((prevState) => !prevState);
  };
  const [open, setOpen] = useState(false);
  const [feedsHovered, setFeedsHovered] = useState(false);
  const [notificationsHovered, setNotificationsHovered] = useState(false);

  return (
    <>
      {isClient &&
        (!isTablet ? (
          <>
            {<Notification shown={open} setClose={() => setOpen(false)} />}
            <div
              css={{
                fontFamily: "'Nunito', sans-serif",
                display: "grid",
                gridTemplateColumns: "15% 85%",
                minHeight: "100vh",
              }}
            >
              <div
                css={{
                  paddingBlock: "0 2rem",
                  borderRight: `1px solid ${"#E4E4E4"}`,
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                <div
                  css={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div css={{ width: "60%", margin: "0 auto 2.5rem" }}>
                      <Logo image="/assets/pngs/logo.png" />
                    </div>
                    <ul
                      css={{
                        listStyleType: "none",
                        display: "grid",
                        gap: "2.5rem",
                        width: "60%",
                        marginInline: "auto",
                        fontSize: "1.125rem",
                      }}
                    >
                      <li
                        onMouseEnter={() => setFeedsHovered(true)}
                        onMouseLeave={() => setFeedsHovered(false)}
                      >
                        <Link
                          href="/dashboard"
                          css={{
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "center",
                          }}
                        >
                          {active === "feeds" ? (
                            <Image
                              src="/assets/svgs/home-active.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          ) : (
                            <Image
                              src="/assets/svgs/home.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          )}
                          <p
                            css={{
                              color:
                                active === "feeds" || feedsHovered
                                  ? "#7C35AB"
                                  : "#000",
                            }}
                          >
                            Feeds
                          </p>
                        </Link>
                      </li>
                      <SidebarItem item={"programs"} activeItem={active} />
                      <li
                        onMouseEnter={() => setNotificationsHovered(true)}
                        onMouseLeave={() => setNotificationsHovered(false)}
                      >
                        <div
                          css={{
                            display: "flex",
                            gap: "0.5rem",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setOpen(true);
                            setShowMore(false);
                          }}
                        >
                          <Image
                            src="/assets/svgs/notification.svg"
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p
                            css={{
                              color: notificationsHovered ? "#7c35ab" : "",
                            }}
                          >
                            Notifications
                          </p>
                        </div>
                      </li>
                      <SidebarItem item={"profile"} activeItem={active} />
                    </ul>
                    {showMore && (
                      <div
                        css={{
                          marginTop: "2rem",
                        }}
                      >
                        <hr
                          css={{
                            border: "none",
                            borderTop: `1px solid ${"#E4E4E4"}`,
                          }}
                        />
                        <ul
                          css={{
                            listStyleType: "none",
                            display: "grid",
                            gap: "2rem",
                            marginBlock: "1.5rem",
                            width: "60%",
                            marginInline: "auto",
                          }}
                        >
                          <SidebarItem item={"manager"} activeItem={active} />
                          <SidebarItem item={"tickets"} activeItem={active} />
                          <SidebarItem
                            item={"favourites"}
                            activeItem={active}
                          />
                          <SidebarItem item={"wallet"} activeItem={active} />
                          <SidebarItem item={"settings"} activeItem={active} />
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
                            gap: "0.5rem",
                            width: "60%",
                            marginInline: "auto",
                            paddingBlock: "1rem",
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
                        <hr
                          css={{
                            border: "none",
                            borderTop: `1px solid ${"#E4E4E4"}`,
                            marginBottom: "0.5rem",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    css={{
                      display: "flex",
                      gap: "0.5rem",
                      width: "60%",
                      marginInline: "auto",
                      cursor: "pointer",
                      color: "#7C35AB;",
                    }}
                    onClick={handleToggle}
                  >
                    <Image
                      src="/assets/svgs/hamburger.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <p>{showMore ? "Less" : "More"}</p>
                    <div css={{ marginLeft: "1.5rem" }}>
                      {showMore ? (
                        <Image
                          src="/assets/svgs/elbow-down-purple.svg"
                          alt=""
                          width={12}
                          height={12}
                        />
                      ) : (
                        <Image
                          src="/assets/svgs/elbow-up-purple.svg"
                          alt=""
                          width={12}
                          height={12}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                css={{
                  minHeight: isTablet ?"":"100vh",
                }}
              >
                {children}
              </div>
            </div>
          </>
        ) : (
          <>
            <MobileLayout>{children}</MobileLayout>
          </>
        ))}
    </>
  );
}

export const SidebarItem = ({
  item,
  activeItem,
  notification,
}: {
  item: string;
  activeItem: string;
  notification?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      css={{ paddingBlock: notification ? "2.5%" : "" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={`/dashboard/${item}`}
        css={{
          display: "flex",
          gap: notification ? "1.5rem" : "0.5rem",
          alignItems: "center",
        }}
      >
        {activeItem === item ? (
          <Image
            src={`/assets/svgs/${item}-active.svg`}
            alt=""
            width={20}
            height={20}
            priority
          />
        ) : (
          <Image
            src={`/assets/svgs/${item}.svg`}
            alt=""
            width={20}
            height={20}
          />
        )}
        <p css={{ color: activeItem === item || hovered ? "#7C35AB" : "#000" }}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      </Link>
    </li>
  );
};

// if (sessionStorage.getItem("sidebarState") && sessionStorage) {
//   if (active === "feeds" || active === "programs" || active === "profile") {
//     sessionStorage.setItem("sidebarState", "false");
//     return false;
//   } else {
//     return sessionStorage.getItem("sidebarState") === "true";
//   }
// } else {
//   if (active === "feeds" || active === "programs" || active === "profile") {
//     sessionStorage.setItem("sidebarState", "false");
//     return false;
//   } else {
//     sessionStorage.setItem("sidebarState", "true");
//     return true;
//   }
// }
