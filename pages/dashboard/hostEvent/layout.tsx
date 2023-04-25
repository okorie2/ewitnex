/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { theme } from "styles/theme";
import Image from "next/image";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { ButtonFormFilled } from "styles/components/button";

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
          paddingBlock: "0 2rem",
          borderRight: `1px solid ${theme.shadow.border}`,
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        side bar
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HostEventLayout;
