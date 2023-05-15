/** @jsxImportSource @emotion/react */
import React from "react";
import { theme, screen } from "styles/theme";

interface ITicketTextField {
  label: string;
  value: string;
  type?: string;
}

const TicketTextField = (props: ITicketTextField) => {
  return (
    <div
      css={{
        display: "grid",
        position: "relative",
      }}
    >
      <label
        css={{
          position: "absolute",
          top: "-10px",
          left: "15px",
          padding: "3px 5px",
          backgroundColor: theme.background.white,
        }}
      >
        {props.label}
      </label>
      <input
        type={props.type ? props.type : "text"}
        value={props.value}
        css={{
          border: `1px solid ${theme.shadow.border}`,
          borderRadius: "10px",
          padding: "1.2rem 0.5rem 0.8rem",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default TicketTextField;
