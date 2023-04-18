/** @jsxImportSource @emotion/react */
import React from "react";
import { theme } from "styles/theme";
import Image from "next/image";

interface IEventMessage {
  image: string;
  background: string;
  userName: string;
  time: string;
  text: string;
  textColor: string;
}
const EventMessage = (props: IEventMessage) => {
  return (
    <div css={{ display: "flex", gap: "1rem" }}>
      <div>
        <Image src={props.image} alt="" width={55} height={55} />
      </div>
      <div
        css={{
          background: `${props.background}`,
          borderRadius: "10px",
          paddingInline: "0.7rem 1.3rem",
        }}
      >
        <div
          css={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <p
            css={{
              fontSize: "0.875rem",
              color: `${props.textColor}`,
              fontWeight: "600",
            }}
          >
            {props.userName}
          </p>
          <div
            css={{
              width: "4px",
              height: "4px",
              backgroundColor: `${
                props.textColor === theme.common.white
                  ? theme.background.grey2
                  : theme.background.tertiary2
              }`,
              borderRadius: "50%",
            }}
          />
          <p
            css={{
              fontSize: "0.75rem",
              color: `${
                props.textColor === theme.common.white
                  ? theme.color.grey2
                  : theme.color.tertiary
              }`,
            }}
          >
            {props.time}
          </p>
        </div>
        <p
          css={{
            fontSize: "0.75rem",
            color: `${props.textColor}`,
            marginBlock: "0.5rem 1rem",
          }}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default EventMessage;
