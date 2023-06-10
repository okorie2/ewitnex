/** @jsxImportSource @emotion/react */
import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "styles/components/button";
import { theme } from "styles/theme";

const UserNameModal = () => {
  const [userName, setUserName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserName(value);
  };
  const handleNext = () => {};
  return (
    <div css={{ width: "100%", padding: "1rem" }}>
      <p css={{ fontSize: "24px", fontWeight: "bold" }}>Username</p>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "2rem",
        }}
      >
        <SettingsTextField
          label={"Username"}
          name="userName"
          value={userName}
          placeholder={"Blessed_one"}
          setValue={handleChange}
          withIcon={true}
          iconComponent={
            <div>
              <Image
                src={"/assets/svgs/reset.svg"}
                alt=""
                width={15}
                height={15}
              />
            </div>
          }
        />
        <div css={{ textAlign: "center", marginTop: "1rem" }}>
          <p css={{ fontSize: "16px", fontWeight: "bold" }}>
            SUGGESTED USERNAMES
          </p>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            {suggested.map((item, idx) => (
              <Suggestion
                key={idx}
                suggestion={item}
                onClick={() => setUserName(item)}
              />
            ))}
          </div>
        </div>
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

export default UserNameModal;

const suggested = ["Blessed_1", "Bles_one", "B_one", "B_Lone"];

const Suggestion = ({
  suggestion,
  onClick,
}: {
  suggestion: string;
  onClick: () => void;
}) => {
  return (
    <div
      css={{
        padding: "5px",
        border: `2px solid ${theme.common.black}`,
        borderRadius: "16px",
        color: theme.shadow.secondary,
        fontWeight: "bold",
        fontSize: "12px",
        minWidth: "80px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <p>{suggestion}</p>
    </div>
  );
};
