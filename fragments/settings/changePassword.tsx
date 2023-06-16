/** @jsxImportSource @emotion/react */

import { SettingsPasswordTextField } from "@/components/inputs/SettingsInput";
import React, { useState } from "react";
import { Button } from "styles/components/button";
import { theme } from "styles/theme";

const ChangePassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [formDetails, setFormDetails] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleNext = () => {};
  return (
    <div
      css={{
        height: "100vh",
      }}
    >
      <div
        css={{
          height: "80px",
          borderBottom: `1px solid ${"#E4E4E4"}`,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          paddingInline: "1.5rem",
          paddingRight: "2.5rem",
          color: "#000",
        }}
      >
        <h2>Change Password</h2>
      </div>
      <div
        css={{
          height: "calc(100vh - 80px)",
          padding: "1.2rem",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div css={{ width: "60%" }}>
          <form>
            <SettingsPasswordTextField
              label="Current Password"
              visible={passwordVisible}
              setVisible={setPasswordVisible}
              setValue={handleChange}
              name="password"
              value={formDetails.password}
              placeholder="Enter current password"
            />
            <SettingsPasswordTextField
              label="New Password"
              visible={confirmPasswordVisible}
              setVisible={setConfirmPasswordVisible}
              setValue={handleChange}
              name="confirmPassword"
              value={formDetails.confirmPassword}
              placeholder="Enter New Password"
            />
            <SettingsPasswordTextField
              label="Confirm New Password"
              visible={confirmPasswordVisible}
              setVisible={setConfirmPasswordVisible}
              setValue={handleChange}
              name="confirmPassword"
              value={formDetails.confirmPassword}
              placeholder="Enter New Password"
            />
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                marginTop: "4rem",
              }}
            >
              <Button onClick={handleNext} height = "52px">
                <p
                  css={{
                    fontSize: "16px",
                    fontFamily: '"Nunito", sans-serif',
                    paddingInline: "6rem",
                  }}
                >
                  CHANGE PASSWORD
                </p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
