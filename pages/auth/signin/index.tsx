/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
// import { Nunito, Poppins } from "@next/font/google";
import Image from "next/image";
import React from "react";
import { H1 } from "styles/components/typography";
import { SignInLeftcss } from "styles/pages/auth/SignInStyles";
import { screen } from "styles/theme";
import Form from "./form";
import { useMediaQuery } from "@mui/material";
import Logo from "@/components/logo";

// const nunito = Nunito({
//   weight: ["400", "500", "600"],
//   style: "normal",
//   subsets: ["latin"],
//   preload: true,
// });
export default function Signin() {
  const isTablet = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        {!isTablet&&<SignInLeftcss>
          <div className="top">
            <Image src={"/assets/svgs/phones.svg"} alt="phones" fill />
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
        </SignInLeftcss>
}
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
          <div css={{ width:isTablet?"90%": "45%", margin: "auto" }}>
            <div css={{ margin: isTablet ?"1.5rem 0":"3rem 0", cursor: "pointer" }}>
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
                marginBottom: isTablet?"3rem":"4.3rem",
              }}
            >
              <p css={{ fontWeight: 600, fontSize: "1.5rem" }}>Welcome Back,</p>
              <p css={{ fontWeight: 400, marginTop: "2rem" }}>
                Enter An option, The Email, Username Or Phone Number Used During
                Sign Up To Sign In
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
