/** @jsxImportSource @emotion/react */

import React from "react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import { H1 } from "styles/components/typography";
import { SignInLeftcss } from "styles/pages/auth/SignInStyles";
import { screen } from "styles/theme";
import Form from "./form";
import { useMediaQuery } from "@mui/material";
import Logo from "@/components/logo";

export default function Signup() {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        {!isTablet && <SignInLeftcss>
          <div className="top">
            <Image src={"/assets/svgs/phones.svg"} alt="phones" fill priority/>
            <Logo image="/assets/pngs/logo_yt.png" />
          </div>

          <div className="btm">
            <div>
              <H1
                color={"#000"}
                css={{
                  display: "flex",
                  gap: "11px",
                  alignItems: "center",
                  textAlign: "left",
                  [screen.desktop]: {
                    gap: "2px",
                  },
                }}
              >
                <span css={{ fontSize: "1rem" }}>your</span> SOCIAL PAPERLESS
              </H1>
              <H1
                color={"#000"}
                css={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  textAlign: "left",
                  [screen.desktop]: {
                    gap: "14px",
                  },
                  [screen.lg]: {
                    gap: "1.5rem",
                  },
                }}
              >
                <span> EVENT </span> MANAGEMENT
              </H1>
              <H1
                color={"#000"}
                css={{
                  textAlign: "left",
                  marginLeft: "19.4rem",
                  fontSize: "1.25rem",
                  [screen.desktop]: {
                    marginLeft: "10rem",
                  },
                  [screen.lg]: {
                    marginLeft: "10.4rem",
                  },
                }}
              >
                PLATFORM
              </H1>
            </div>
            <div css={{ display: "flex", marginTop: "1.2rem", gap: "1rem" }}>
              <button>
                <Image
                  src="/assets/svgs/playstore.svg"
                  alt="playstore"
                  width={140}
                  height={41.18}
                />
              </button>
              <button>
                <Image
                  src="/assets/svgs/appstore.svg"
                  alt="appstore"
                  width={140}
                  height={41.18}
                />
              </button>
            </div>
          </div>
        </SignInLeftcss>}

        <div
          css={{
            width: "100%",
            maxHeight: "100vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <div css={{ width: isTablet ? "90%":"45%", margin: "auto" }}>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
