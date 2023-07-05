/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const HostEventLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [activeStage, setActiveStage] = useState(1);
  const activeRoute = router.asPath;

  useEffect(() => {
    switch (activeRoute) {
      case "/dashboard/hostEvent":
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
        gridTemplateColumns: "20% 80%",
        minHeight: "100vh",
      }}
    >
      <div
        css={{
          paddingBlock: "2.3rem",
          borderRight: `1px solid ${"#E4E4E4"}`,
          fontSize: "1rem",
          fontWeight: "500",
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
          <h3 css={{ fontSize: "1.125rem", fontWeight: "bold" }}>
            Hosting Event
          </h3>
          <ul
            css={{
              display: "grid",
              marginTop: "2.5rem",
              listStyleType: "none",
              fontWeight: "300",
            }}
          >
            {hostEventTabs.map((item) => (
              <li
                css={{
                  color: activeStage >= item.stage ? "#7C35AB" : "#AEAEAE",
                  position: "relative",
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
                  href={item.href || ""}
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    pointerEvents: activeStage >= item.stage ? "auto" : "none",
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

                  {item.name}
                </Link>
                {item.stage !== 5 && (
                  <div
                    css={{
                      borderLeft: "1px solid #AEAEAE",
                      height: "1.6rem",
                      marginLeft: "0.8rem",
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
  { name: "Event Program Info", href: "/dashboard/hostEvent", stage: 1 },
  { name: "Files Upload", href: "/dashboard/hostEvent/fileUpload", stage: 2 },
  {
    name: "Location, Date and Time",
    href: "/dashboard/hostEvent/eventLocation",
    stage: 3,
  },
  { name: "Speakers", href: "/dashboard/hostEvent/speakers", stage: 4 },
  { name: "Tickets", href: "/dashboard/hostEvent/tickets", stage: 5 },
];
