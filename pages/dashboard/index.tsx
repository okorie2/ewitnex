/** @jsxImportSource @emotion/react */

import React from "react";
import DashboardLayout from "./layout";
import Image from "next/image";
import { ButtonFormFilled } from "styles/components/button";
import { theme } from "styles/theme";
import DashboardHeader from "@/components/header/dashboardHeader";

const index = () => {
  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "2.7fr 1.3fr",
          height: "100%",
        }}
      >
        <div css={{ borderRight: `1px solid ${theme.shadow.border}` }}>
          <DashboardHeader />
          <div
            css={{
              color: theme.common.black,
              display: "grid",
              placeContent: "center",
              height: "100%",
            }}
          >
            <div
              css={{
                width: "65%",
                marginInline: "auto",
                textAlign: "center",
              }}
            >
              <Image
                src="/assets/svgs/timesand.svg"
                alt=""
                width="21"
                height="26"
              />
              <p css={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Coming Soon...
              </p>
              <p css={{ marginBlock: "1rem" }}>
                Check back later as this page feature is currently on
                development
              </p>
              <ButtonFormFilled>GO TO PROGRAMS</ButtonFormFilled>
            </div>
          </div>
        </div>
        <div>Slides</div>
      </div>
    </DashboardLayout>
  );
};

export default index;
