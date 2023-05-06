/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import React from "react";

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
  const theme = useTheme();

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
              chip.selected ? "transparent" : theme.color.primary
            }`};
            border-radius: 16px;
            padding: 5px 15px;
            font-size: 14px;
            font-weight: 500;
            color: ${chip.selected ? theme.common.white : theme.color.primary};
            background: ${chip.selected ? theme.color.primary : "none"};
            cursor: pointer;
          `}
        >
          {chip.name}
        </button>
      ))}
    </>
  );
}
