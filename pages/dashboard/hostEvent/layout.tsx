/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { theme } from "styles/theme";

const HostEventLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
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
              gap: "1rem",
              listStyleType: "none",
              fontWeight: "300",
            }}
          >
            {hostEventTabs.map((item) => (
              <li
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color:
                    router.asPath === item.href
                      ? "#7C35AB"
                      : "#AEAEAE",
                }}
                key={item.name}
              >
                {router.asPath === item.href ? (
                  <Image
                    src="/assets/svgs/tick-circle-purple.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                ) : (
                  <Image
                    src="/assets/svgs/tick-circle-grey.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                )}

                {item.name}
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
  { name: "Event Program Info", href: "/dashboard/hostEvent" },
  { name: "Files Upload", href: "/dashboard/hostEvent/fileUpload" },
  {
    name: "Location, Date and Time",
    href: "/dashboard/hostEvent/eventLocation",
  },
  { name: "Speakers", href: "/dashboard/hostEvent/speakers" },
  { name: "Tickets", href: "/dashboard/hostEvent/tickets" },
];
