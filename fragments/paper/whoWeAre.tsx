/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Phones from "public/assets/pngs/phones.png";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  preload: true,
});
export default function WhoWeArePaper() {
  const theme = useTheme();
  return (
    <div
      css={{
        backgroundImage: `linear-gradient(${theme.background.tertiary}, ${theme.background.primary})`,
        display: "flex",
        justifyContent: "space-between",
        fontFamily: poppins.style.fontFamily,
      }}
    >
      <div css={{ width: "37%", paddingTop: "7rem", paddingLeft: "4%" }}>
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
          width: "43vw",
          height: "27rem",
          [screen.desktop]: {
            width: "54vw",
          },
        }}
      >
        <Image src={Phones} alt="phones" fill />
      </div>
    </div>
  );
}
