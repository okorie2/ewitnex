/** @jsxImportSource @emotion/react */

import React from "react";
import HostEventLayout from "./layout";
import { ButtonFormFilled } from "styles/components/button";
import Link from "next/link";
import { screen, theme } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import HostEventTimeDate from "@/components/inputs/HostEventTimeDate";

const Speakers = () => {
  return (
    <HostEventLayout>
      <div>
        <div
          css={{
            height: "150px",
            borderBottom: `1px solid ${theme.shadow.border}`,
            display: "flex",
            alignItems: "center",
            paddingInline: "3.2rem",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              css={{
                width: "43%",
                [screen.desktopLg]: {
                  width: "50%",
                },
                [screen.desktop]: {
                  width: "70%",
                },
              }}
            >
              <h1 css={{ fontSize: "1.875rem" }}>Speakers</h1>
              <p>
                If your event is going to have speakers, select Yes and fill in
                speaker(s) details otherwise leave it at &quot;No&quot; and
                continue
              </p>
            </div>
            <div
              css={{
                display: "flex",
                gap: "2rem",
              }}
            >
              <p
                css={{
                  color: theme.color.primary,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Preview
              </p>
              <p
                css={{
                  color: theme.color.negative,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Cancel
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </HostEventLayout>
  );
};

export default Speakers;
