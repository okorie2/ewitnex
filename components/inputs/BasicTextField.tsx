/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  label: string;
  type: "text" | "password";
}

export default function BasicTextField({ label, ...rest }: Props) {
  const theme = useTheme();
  const [labelDisplay, setLabelDisplay] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    value.length < 1 ? setLabelDisplay(false) : setLabelDisplay(true);
  }, [value]);

  return (
    <div
      css={{
        position: "relative",
        border: `1px solid ${theme.shadow.border2}`,
        borderRadius: "10px",
        background: theme.common.white,
        height: "51.2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      // onClick={() => setLabelDisplay(true)}
    >
      <label
        css={{
          position: "absolute",
          top: labelDisplay ? "-11px" : "25px",
          left: "2%",
          background: theme.common.white,
          padding: "0 4%",
          fontSize: "14px",
          fontFamily: "'Nunito', sans-serif",
          transition: "top 0.2s ease-in",
          opacity: labelDisplay ? 1 : 0,
          zIndex: labelDisplay ? 0 : -1,
        }}
      >
        {label}
      </label>
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          paddingLeft: "3%",
        }}
        type={rest.type}
        placeholder={labelDisplay ? "" : label}
        onChange={(e) => setValue(e.target.value)}
      />
      {rest.type === "password" && (
        <div css={{ width: "7%" }}>
          <Image
            src="/assets/svgs/eye_close.svg"
            alt="icon"
            width={13.39}
            height={6.55}
          />
        </div>
      )}
    </div>
  );
}
