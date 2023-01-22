/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { Nunito, Poppins } from "@next/font/google";
import Image from "next/image";
import React from "react";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { H1 } from "styles/components/typography";
import { SignInLeftcss } from "styles/pages/auth/SignInStyles";
import { screen } from "styles/theme";
import Form from "./form";

export default function Signup() {
  const theme = useTheme();
  return (
    <>
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        <SignInLeftcss>
          <div className="top">
            <Image src={"/assets/svgs/phones.svg"} alt="phones" fill />
            <div>
              <Image
                src="/assets/svgs/logo_yt.svg"
                alt="logo"
                width={93}
                height={43.13}
              />
            </div>
          </div>

          <div className="btm">
            <div>
              <H1
                color={theme.common.black}
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
                color={theme.common.black}
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
                color={theme.common.black}
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
        </SignInLeftcss>

        <div css={{ width: "100%" }}>
          <div css={{ width: "45%", margin: "auto" }}>
            <div css={{ margin: "3rem 0", cursor: "pointer" }}>
              <Image
                src="/assets/svgs/back.svg"
                alt="back_arrow"
                width={22}
                height={15}
              />
            </div>
            <div
              css={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1.5rem",
                marginBottom: "4.3rem",
                fontWeight: 600,
              }}
            >
              <p>Lets Know</p>
              <p>Who You Are</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
