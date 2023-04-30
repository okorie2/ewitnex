/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { screen, theme } from "styles/theme";

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
            <li>
              <div></div>
              Event Program Info
            </li>
            <li>
              <div></div>
              Files Upload
            </li>
            <li>
              <div></div>
              Location, Date and Time
            </li>
            <li>
              <div></div>
              Speakers
            </li>
            <li>
              <div></div>
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
