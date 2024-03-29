/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Image from "next/image";
import React from "react";

interface Props {
  gender: "Male" | "Female" | "Preferred Not To Say";
  selectedType: "Male" | "Female" | "Preferred Not To Say" | undefined;
  setSelectedType: React.Dispatch<
    React.SetStateAction<"Male" | "Female" | "Preferred Not To Say" | undefined>
  >;
}
export default function GenderType(props: Props) {

  return (
    <>
      <button
        type="button"
        onClick={() => props.setSelectedType(props.gender)}
        tabIndex={0}
        css={css`
          border: 1px solid ${"#C0C0C0"};
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
        <p css = {{
          fontWeight: "bold",
          fontFamily:'"Nunito", sans-serif',
          fontSize:"1rem"
        }}>{props.gender}</p>
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
