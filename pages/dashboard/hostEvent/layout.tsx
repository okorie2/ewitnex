/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React, { ReactNode } from "react";
import { theme } from "styles/theme";

const HostEventLayout = ({ children }: { children: ReactNode }) => {
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
          borderRight: `1px solid ${theme.shadow.border}`,
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
              color: theme.color.grey,
              fontWeight: "300",
            }}
          >
            <li css={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/assets/svgs/tick-circle-purple.svg"
                alt=""
                width={25}
                height={25}
              />
              Event Program Info
            </li>
            <li css={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/assets/svgs/tick-circle-grey.svg"
                alt=""
                width={25}
                height={25}
              />
              Files Upload
            </li>
            <li css={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/assets/svgs/tick-circle-grey.svg"
                alt=""
                width={25}
                height={25}
              />
              Location, Date and Time
            </li>
            <li css={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/assets/svgs/tick-circle-grey.svg"
                alt=""
                width={25}
                height={25}
              />
              Speakers
            </li>
            <li css={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Image
                src="/assets/svgs/tick-circle-grey.svg"
                alt=""
                width={25}
                height={25}
              />
              Tickets
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HostEventLayout;
