/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

const HostEventLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [activeStage, setActiveStage] = useState(1);
  const activeRoute = router.asPath;
  const isTablet = useMediaQuery("(max-width: 780px)");

  useEffect(() => {
    switch (activeRoute) {
      case "/dashboard/hostEvent": {
        setActiveStage(1);
      }
      break;
      case "/dashboard/hostEvent?editEvent=y":
        {
          setActiveStage(1);
        }
        break;
      case "/dashboard/hostEvent/fileUpload":
        {
          setActiveStage(2);
        }
        break;
      case "/dashboard/hostEvent/eventLocation":
        {
          setActiveStage(3);
        }
        break;
      case "/dashboard/hostEvent/speakers":
        {
          setActiveStage(4);
        }
        break;
      case "/dashboard/hostEvent/tickets":
        {
          setActiveStage(5);
        }
        break;
      default: {
        setActiveStage(1);
      }
    }
  }, [activeRoute]);

  return (
    <div
      css={{
        fontFamily: "'Nunito', sans-serif",
        display: "grid",
        gridTemplateColumns: isTablet ? "1fr" : "20% 80%",
        minHeight: "100vh",
      }}
    >
      {isTablet && (
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "#00000029 0px 0px 10px ",
            padding: "0% 3%",
            paddingTop: "0.5rem",
            height: "9vh",
            fontFamily: "'Poppins', sans-serif",
            position: "fixed",
            left: "0",
            right: "0",
            top: "0",
            width: "100vw",
            zIndex: "5",
            background: "#fff",
          }}
        >
          <div css={{ display: "flex", gap: "0.5rem" }}>
            <div
              onClick={() => router.back()}
              css={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src="/assets/svgs/back.svg"
                alt="back_arrow"
                width={25}
                height={18}
              />
            </div>
            <div>
              <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Creating Event
              </h2>
            </div>
          </div>
          <div>
            <div
              css={{
                display: "flex",
                gap: "0.6rem",
                fontSize: "0.9rem",
              }}
            >
              <p
                css={{
                  color: "#7C35AB",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Preview
              </p>
              <Link
                href="/dashboard"
                css={{
                  color: "#F05E78",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        css={{
          paddingBlock: isTablet ? "" : "2.5rem",
          paddingTop: isTablet ? "3rem" : "",
          borderRight: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
          fontSize: "1rem",
          fontWeight: "500",
          width: isTablet ? "100vw" : "",
        }}
      >
        <div
          css={{
            height: "45%",
            width: "fit-content",
            marginInline: "auto",
            display: "grid",
            justifyContent: "space-between",
          }}
        >
          {!isTablet && (
            <h3 css={{ fontSize: "1.125rem", fontWeight: "bold" }}>
              Hosting Event
            </h3>
          )}
          <ul
            css={{
              display: isTablet ? "flex" : "grid",
              marginTop: isTablet ? "2.5rem" : "2.5rem",
              listStyleType: "none",
              fontWeight: "300",
            }}
          >
            {hostEventTabs.map((item) => (
              <li
                css={{
                  color: activeStage >= item.stage ? "#7C35AB" : "#AEAEAE",
                  position: "relative",
                  display: isTablet ? "flex" : "block",
                }}
                key={item.name}
              >
                {activeStage >= item.stage && (
                  <div
                    css={{
                      position: "absolute",
                      height: "inherit",
                      width: "inherit",
                    }}
                  ></div>
                )}
                <Link
                  href={
                    activeStage === item.stage
                      ? item.secondHref
                      : item.href || ""
                  }
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    pointerEvents: activeStage > item.stage ? "auto" : "none",
                  }}
                >
                  {activeStage >= item.stage ? (
                    activeStage === item.stage ? (
                      <Image
                        src="/assets/svgs/tick-circle-purple.svg"
                        alt=""
                        width={25}
                        height={25}
                      />
                    ) : (
                      <Image
                        src="/assets/svgs/tick-circle-filled.svg"
                        alt=""
                        width={25}
                        height={25}
                      />
                    )
                  ) : (
                    <Image
                      src="/assets/svgs/tick-circle-grey.svg"
                      alt=""
                      width={25}
                      height={25}
                    />
                  )}

                  {!isTablet && item.name}
                </Link>
                {!isTablet && item.stage !== 5 && (
                  <div
                    css={{
                      borderLeft: "1px solid #AEAEAE",
                      height: "1.6rem",
                      marginLeft: "0.8rem",
                    }}
                  ></div>
                )}
                {isTablet && item.stage !== 5 && (
                  <div
                    css={{
                      borderTop: "1px solid #AEAEAE",
                      width: "2.5rem",
                      marginTop: "0.8rem",
                    }}
                  ></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HostEventLayout;

const hostEventTabs = [
  {
    name: "Event Program Info",
    href: "/dashboard/hostEvent?editEvent=y",
    stage: 1,
    secondHref: "/dashboard/hostEvent",
  },
  {
    name: "Files Upload",
    href: "/dashboard/hostEvent/fileUpload",
    stage: 2,
    secondHref: "/dashboard/hostEvent/fileUpload",
  },
  {
    name: "Location, Date and Time",
    href: "/dashboard/hostEvent/eventLocation",
    stage: 3,
    secondHref: "/dashboard/hostEvent/eventLocation",
  },
  {
    name: "Speakers",
    href: "/dashboard/hostEvent/speakers",
    stage: 4,
    secondHref: "/dashboard/hostEvent/speakers",
  },
  {
    name: "Tickets",
    href: "/dashboard/hostEvent/tickets",
    stage: 5,
    secondHref: "/dashboard/hostEvent/tickets",
  },
];
