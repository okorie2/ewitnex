/** @jsxImportSource @emotion/react */
import React from "react";
import { theme } from "styles/theme";
import Image from "next/image";

interface IHostEventTimeDate {
  label: string;
  placeholder: string;
}
const HostEventTimeDate = (props: IHostEventTimeDate) => {
  return (
    <div css={{ display: "grid", gap: "0.5rem", width: "100%" }}>
      <label
        css={{
          fontWeight: "bold",
          display: "flex",
          gap: "0.3rem",
          alignItems: "center",
        }}
      >
        {props.label}
      </label>
      <div
        css={{
          height: "3.3rem",
          width: "100%",
          border: `1px solid ${theme.shadow.secondary}`,
          borderRadius: "10px",
          fontSize: "14px",
          fontFamily: "'Poppins', sans-serif",
          color: theme.color.grey,
          display: "flex",
        }}
      >
        <div
          css={{
            width: "50%",
            padding: "1rem",
            border: "none",
            borderRight: `1px solid ${theme.shadow.secondary}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            placeholder={`${props.placeholder} Date`}
            css={{
              border: "none",
            }}
          />
          <Image
            src="/assets/svgs/calender2.svg"
            alt=""
            width={11.74}
            height={13.04}
          />
        </div>

        <div
          css={{
            width: "50%",
            padding: "1rem",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            placeholder={`${props.placeholder} Time`}
            css={{
              border: "none",
            }}
          />
          <Image
            src="/assets/svgs/time.svg"
            alt=""
            width={17.83}
            height={17.83}
          />
        </div>
      </div>
    </div>
  );
};

export default HostEventTimeDate;
