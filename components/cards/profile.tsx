/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";

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
  color: "#fff",
  backgroundColor: "#7C35AB",
  cursor: "pointer",
};

const followingButtonStyle = {
  width: "5.8rem",
  height: "2.3rem",
  borderRadius: "25px",
  border: `1px solid ${"#7C35AB"}`,
  fontSize: "0.875rem",
  fontWeight: "bold",
  color: "#7C35AB",
  backgroundColor: "#fff",
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
              color: "#AEAEAE",
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
