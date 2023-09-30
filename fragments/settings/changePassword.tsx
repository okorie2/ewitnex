/** @jsxImportSource @emotion/react */

import { SettingsPasswordTextField } from "@/components/inputs/SettingsInput";
import SuccessModal from "@/components/modals/settingsModal/successModal";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Button } from "styles/components/button";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'

const ChangePassword = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [success, setSuccess] = useState(false);
  const router = useRouter()
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
  const handleNext = () => {
    setSuccess(true);
  };
  useEffect(() => {
    if (isTablet) {
      const refuseBackButton = () => {
        window.onpopstate = () => {
          router.push(router.asPath);
        };
      };
      if (success) {
        refuseBackButton();
      } else {
        window.onpopstate = () => {
          router.push("/dashboard/settings");
        };
      }
    }
  }, [success]);
  return (
    <div
      css={{
        height: "100vh",
      }}
    >
      <SuccessModal
        isOpen={success}
        onRequestClose={() => setSuccess(false)}
        action={"passwordReset"}
      />
      <div
        css={{
          height: "80px",
          borderBottom: `1px solid ${"#E4E4E4"}`,
          display: isTablet ? "flex" : "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          paddingInline: "1.5rem",
          paddingRight: "2.5rem",
          gap: isTablet ? "1rem" : "",
          color: "#000",
        }}
      >
        {isTablet && (
          <Link href="/dashboard/settings">
            <div css={{ display: "flex" }}>
              <Image
                src="/assets/svgs/back.svg"
                alt="back_arrow"
                width={22}
                height={15}
              />
            </div>
          </Link>
        )}
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
        <div css={{ width: isTablet ? "100%":"60%" }}>
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
          </form>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button onClick={handleNext} height="52px" width="100%">
              <p
                css={{
                  fontSize: "16px",
                  fontFamily: '"Nunito", sans-serif',
                  paddingInline: isTablet ? "2rem":"6rem",
                }}
              >
                CHANGE PASSWORD
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
