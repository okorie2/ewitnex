/** @jsxImportSource @emotion/react */

import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "styles/components/button";
import GenderType from "@/components/signupComponents/selectGender";
import { Box } from "@mui/material";

const GenderModal = () => {
  const [selectedType, setSelectedType] = useState<
    "Male" | "Female" | "Preferred not to say"
  >();

  const handleNext = () => {};
  return (
    <div css={{ width: "100%", padding: "1rem" }}>
      <p css={{ fontSize: "24px", fontWeight: "bold" }}>Gender</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "2rem",
        }}
      >
        <GenderType
          selectedType={selectedType}
          gender="Male"
          setSelectedType={setSelectedType}
        />
        <Box height={22} />

        <GenderType
          selectedType={selectedType}
          gender="Female"
          setSelectedType={setSelectedType}
        />
        <Box height={22} />

        <GenderType
          selectedType={selectedType}
          gender="Preferred not to say"
          setSelectedType={setSelectedType}
        />
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2.2rem",
          }}
        >
          <Button onClick={handleNext}>
            <p
              css={{
                fontSize: "16px",
                fontFamily: '"Nunito", sans-serif',
                paddingInline: "7rem",
              }}
            >
              SAVE CHANGES
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenderModal;
