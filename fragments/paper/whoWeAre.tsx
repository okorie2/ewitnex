/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";

import Image from "next/image";
import Phones from "public/assets/svgs/phones.svg";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";

export default function WhoWeArePaper() {
  const theme = useTheme();
  return (
    <div
      css={{
        backgroundImage: `linear-gradient(${theme.background.tertiary}, ${theme.background.primary})`,
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "'Poppins', sans-serif",
        marginTop: "5rem",

        [screen.desktop]: {
          // marginTop: "7%",
          // height: "30vw",
        },
        [screen.lg]: {
          // marginTop: "8%",
        },
      }}
    >
      <div
        css={{
          width: "37%",
          paddingTop: "6.5rem",
          paddingLeft: "4%",
          [screen.desktop]: {
            paddingTop: "3rem",
            // height: "30vw",
          },
          [screen.lg]: {
            paddingTop: "5rem",
            // height: "30vw",
          },
        }}
      >
        <div>
          <H1
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
          <button
            css={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <Image
              src="/assets/svgs/playstore.svg"
              alt="playstore"
              width={140}
              height={41.18}
            />
          </button>
          <button
            css={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <Image
              src="/assets/svgs/appstore.svg"
              alt="appstore"
              width={140}
              height={41.18}
            />
          </button>
        </div>
      </div>
      <div
        css={{
          position: "relative",
          width: "47.5vw",
          height: "27vw",
          [screen.desktop]: {
            // width: "54vw",
            // height: "30vw",
          },
        }}
      >
        <Image src={Phones} alt="phones" fill />
      </div>
    </div>
  );
}
