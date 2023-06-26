/** @jsxImportSource @emotion/react */
import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useState } from "react";
import { Button } from "styles/components/button";

const NameModal = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleNext = () => {};
  return (
    <div css={{ width: "100%", padding: "1rem" }}>
      <p css={{ fontSize: "24px", fontWeight: "bold" }}>Full Name</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "2rem",
        }}
      >
        <SettingsTextField
          label={"First Name"}
          name="firstName"
          value={formDetails.firstName}
          placeholder={"Blessed"}
          setValue={handleChange}
        />
        <SettingsTextField
          label={"Last Name"}
          name="lastName"
          value={formDetails.lastName}
          placeholder={"Onoriode"}
          setValue={handleChange}
        />
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button onClick={handleNext} height="52px">
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

export default NameModal;
