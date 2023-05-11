/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import { theme } from "styles/theme";

interface IProfileCard {
  image: string;
  name: string;
  userName: string;
  status: string;
}

const followButtonStyle = {
  width: "5.8rem",
  height: "2.3rem",
  borderRadius: "25px",
  border: "none",
  fontSize: "0.875rem",
  fontWeight: "bold",
  color: theme.common.white,
  backgroundColor: theme.color.primary,
  cursor: "pointer",
};

const followingButtonStyle = {
  width: "5.8rem",
  height: "2.3rem",
  borderRadius: "25px",
  border: `1px solid ${theme.color.primary}`,
  fontSize: "0.875rem",
  fontWeight: "bold",
  color: theme.color.primary,
  backgroundColor: theme.common.white,
  cursor: "pointer",
};

const ProfileCard = (props: IProfileCard) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div css={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Image src={props.image} alt="" width={45} height={45} />
        <div>
          <p css={{ fontWeight: "bold" }}>{props.name}</p>
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "500",
              color: theme.color.grey,
            }}
          >
            {props.userName}
          </p>
        </div>
      </div>
      <button
        css={
          props.status === "Follow" ? followButtonStyle : followingButtonStyle
        }
      >
        {props.status}
      </button>
    </div>
  );
};

export default ProfileCard;
