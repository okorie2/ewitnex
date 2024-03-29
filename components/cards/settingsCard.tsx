/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React from "react";

const SettingsCard = ({
  cardTitle,
  children,
  link,
  height,
  cardTitleImg,
  border,
  activeTab,
  noShadow,
}: {
  cardTitle: string;
  children: React.ReactNode;
  cardTitleImg?: React.ReactNode;
  link?: string;
  height?: string;
  border?: string;
  activeTab?: boolean;
  noShadow?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link href={link || ""} passHref>
      <a
        css={{
          pointerEvents: link ? "auto" : "none",
        }}
      >
        <div
          css={{
            width: "100%",
            height: height || "60px",
            borderRadius: border || `20px`,
            boxShadow: noShadow ? "" : `0px 0px 5px ${"#00000029"}`,
            border: noShadow
              ? `1px solid ${"#AEAEAE"}`
              : activeTab
              ? "1px solid #00D9B7"
              : "",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div
            css={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingTop: "0.4rem",
            }}
          >
            {
              cardTitleImg &&
              <div css = {{display: "flex", alignItems: "center", marginRight: "1rem"}}>
                {cardTitleImg}
              </div>
            }
            {cardTitle}
          </div>
          <div css={{ display: "flex" }}>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default SettingsCard;
