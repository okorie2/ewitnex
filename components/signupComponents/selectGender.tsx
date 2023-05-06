/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import Image from "next/image";
import React from "react";

interface Props {
  gender: "Male" | "Female" | "Preferred not to say";
  selectedType: "Male" | "Female" | "Preferred not to say" | undefined;
  setSelectedType: React.Dispatch<
    React.SetStateAction<"Male" | "Female" | "Preferred not to say" | undefined>
  >;
}
export default function GenderType(props: Props) {
  const theme = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => props.setSelectedType(props.gender)}
        tabIndex={0}
        css={css`
          border: 1px solid ${theme.shadow.border2};
          border-radius: 10px;
          height: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;
          background: ${props.selectedType === props.gender
            ? "#7C35AB1A"
            : "transparent"};
        `}
      >
        <p>{props.gender}</p>
        {props.selectedType === props.gender && (
          <div>
            <Image
              src="/assets/svgs/selected_dot.svg"
              alt="back_arrow"
              width={28}
              height={28}
            />
          </div>
        )}
      </button>
    </>
  );
}
