/** @jsxImportSource @emotion/react */

import React from "react";
import SettingsCard from "./settingsCard";
import Image from "next/image";

const SettingsFormCard = ({
  label,
  cardTitle,
  onClick
}: {
  label: string;
  cardTitle: string;
  onClick?: () => void;
}) => {
  return (
    <div
      css={{
        width: "60%",
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
