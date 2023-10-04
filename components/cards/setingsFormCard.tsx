/** @jsxImportSource @emotion/react */

import React from "react";
import SettingsCard from "./settingsCard";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const SettingsFormCard = ({
  label,
  cardTitle,
  onClick,
  cardTitleImg
}: {
  label: string;
  cardTitle: string;
  cardTitleImg ?: React.ReactNode;
  onClick?: () => void;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        width: isTablet ? "100%":"60%",
        position: "relative",
        marginTop: "0.4rem",
        marginBottom: "1.9rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        css={{
          position: "absolute",
          fontSize: "14px",
          color: "#101010",
          top: "-16%",
          left: "3%",
          background: "white",
          paddingInline: "4%",
        }}
      >
        {label}
      </div>
      <SettingsCard
        cardTitle={cardTitle}
        cardTitleImg = {cardTitleImg}
        height={"51px"}
        noShadow={true}
        border="10px"
      >
        <Image
          src="/assets/svgs/elbow-Right.svg"
          alt=""
          width={25}
          height={25}
        />
      </SettingsCard>
    </div>
  );
};

export default SettingsFormCard;
