/** @jsxImportSource @emotion/react */

import SettingsTextField from "@/components/inputs/SettingsInput";
import SuccessModal from "@/components/modals/settingsModal/successModal";
import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "styles/components/button";
import Image from 'next/image'
import Link from "next/link";
import {useRouter} from 'next/router'

const VerifyAccount = () => {
  const router = useRouter()
  const [success, setSuccess] = useState(false)
  const [formDetails, setFormDetails] = useState({
    OTP: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleNext = () => {
    setSuccess(true)
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
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        height: "100vh",
      }}
    >
      <SuccessModal isOpen={success} onRequestClose={() => setSuccess(false)} action={"accountVerification"} />
      <div
        css={{
          height: "80px",
          borderBottom: `1px solid ${"#E4E4E4"}`,
          display: isTablet ? "flex":"grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          paddingInline: "1.5rem",
          paddingRight: "2.5rem",
          color: "#000",
          gap:isTablet ? "1rem":""
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
        <h2>Verify Account</h2>
      </div>
      <div
        css={{
          height: "calc(100vh - 80px)",
          padding: "1.5rem",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div
          css={{
            width: isTablet ? "100%":"60%",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          <p>Enter the code that was sent to your email below</p>
          <SettingsTextField
            label={"Verification Code"}
            name="OTP"
            value={formDetails.OTP}
            placeholder={""}
            setValue={handleChange}
          />
          <p css={{ fontSize: "15px" }}>
            Didn't Receive An Email?{" "}
            <b css={{ fontWeight: "bolder", fontSize: "16px" }}>Resend</b>
          </p>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Button onClick={handleNext} height = "52px" width="100%">
              <p
                css={{
                  fontSize: "16px",
                  fontFamily: '"Nunito", sans-serif',
                  paddingInline: isTablet ? "":"7rem",
                }}
              >
                VERIFY ACCOUNT
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
