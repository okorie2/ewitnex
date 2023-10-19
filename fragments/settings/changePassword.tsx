/** @jsxImportSource @emotion/react */

import { SettingsPasswordTextField } from "@/components/inputs/SettingsInput";
import SuccessModal from "@/components/modals/settingsModal/successModal";
import React, { FormEvent, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Button } from "styles/components/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { updatePassword } from "redux/settings/thunkAction";

export type IUpdatePassword = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { loading } = useAppSelector(({ updatePassword }) => updatePassword);
  const [message, setMessage] = useState("");
  const [formDetails, setFormDetails] = useState<IUpdatePassword>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useAppThunkDispatch();
  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*_=+-]).{8,16}$/;
    return passwordPattern.test(password);
  };

  const validatePasswordMatch = (str1: string, str2: string) => {
    return str1 === str2;
  };

  useEffect(() => {
    setPasswordMatch(
      validatePasswordMatch(formDetails.newPassword, formDetails.confirmPassword)
    );
  }, [formDetails.confirmPassword]);

  useEffect(() => {
    if (formDetails.newPassword) {
      setPasswordValid(validatePassword(formDetails.newPassword));
    }
  }, [formDetails.newPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("")
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.removeItem("error");
    setPasswordMatch(
      validatePasswordMatch(formDetails.newPassword, formDetails.confirmPassword)
    );
    if (passwordValid && passwordMatch) {
      dispatch(updatePassword(formDetails)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setSuccess(true);
          localStorage.removeItem('user')
          localStorage.removeItem('token')
        }
      });
    }
  };

  useEffect(() => {
    if (loading === "failed") {
      if (localStorage.getItem("error") && localStorage) {
        const error = localStorage.getItem("error") || "";
        setMessage(error);
      }
    }
  }, [loading]);

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
        <div css={{ width: isTablet ? "100%" : "60%" }}>
          <form onSubmit={handleNext}>
            <SettingsPasswordTextField
              label="Current Password"
              visible={passwordVisible}
              setVisible={setPasswordVisible}
              setValue={handleChange}
              name="oldPassword"
              value={formDetails.oldPassword}
              placeholder="Enter current password"
              error={message.includes("old") ? message : ""}
            />
            <SettingsPasswordTextField
              label="New Password"
              visible={confirmPasswordVisible}
              setVisible={setConfirmPasswordVisible}
              setValue={handleChange}
              name="newPassword"
              value={formDetails.newPassword}
              placeholder="Enter New Password"
              error = {
                passwordValid
                ? ""
                : "Kindly ensure your password has at least one capital letter, small letter, numerical and special character. It must also be at least 8 letters long"}
            />
            <SettingsPasswordTextField
              label="Confirm New Password"
              visible={confirmPasswordVisible}
              setVisible={setConfirmPasswordVisible}
              setValue={handleChange}
              name="confirmPassword"
              value={formDetails.confirmPassword}
              placeholder="Enter New Password"
              error = {message.includes("match") ? "Passwords does not match": passwordMatch ? "" : "Passwords do not match!"}
            />
            <div
              css={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Button height="52px" width="100%">
                <p
                  css={{
                    fontSize: "16px",
                    fontFamily: '"Nunito", sans-serif',
                    paddingInline: isTablet ? "2rem" : "6rem",
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
