/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import { useMediaQuery } from "@mui/material";

interface Props {
  chipDetails: { name: string; selected: boolean }[];
  setChipDetails: React.Dispatch<
    React.SetStateAction<{ name: string; selected: boolean }[]>
  >;
}

export const chipData = [
  { name: "music", selected: false },
  { name: "news", selected: false },
  { name: "weddings", selected: false },
  { name: "tech", selected: false },
  { name: "birthdays", selected: false },
  { name: "anniversaries", selected: false },
  { name: "business", selected: false },
  { name: "vacations", selected: false },
  { name: "sports", selected: false },
  { name: "christianity", selected: false },
  { name: "tech", selected: false },
];

export default function Chip(props: Props) {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const handleSelectedChip = (name: string) => {
    const newChipDetails = props.chipDetails.map((chip) => {
      if (chip.name === name) {
        return { ...chip, selected: !chip.selected };
      }
      return chip;
    });

    props.setChipDetails(newChipDetails);
  };
  return (
    <>
      {props.chipDetails.map((chip, index) => (
        <button
          type="button"
          onClick={() => handleSelectedChip(chip.name)}
          key={index}
          css={css`
            height: 31px;
            border: ${`2px solid ${
              chip.selected ? "transparent" : "#7C35AB"
            }`};
            border-radius: 16px;
            padding: 5px 15px;
            font-size: 14px;
            font-weight: 500;
            color: ${chip.selected ? "#fff" : "#7C35AB"};
            background: ${chip.selected ? "#7C35AB" : "none"};
            cursor: pointer;
            font-family:"Open Sans";
            display:flex;
            justify-content:center;
            align-items:center;
            margin-block: ${isTablet ? "0.3rem":""}
          `}
        >
         <p>{chip.name}</p>
        </button>
      ))}
    </>
  );
}
