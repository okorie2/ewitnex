/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H2 } from "styles/components/typography";
import { Button, ButtonFormOutline } from "styles/components/button";

const Onboarding = () => {
  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        css={{
          height: "89.5vh",
          width: "50vw",
          boxShadow: "0px 0px 10px #00000029",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Image
            src="/assets/pngs/logo.png"
            alt="logo"
            height={43.13}
            width={93}
          />
        </div>
        <div css={{ margin: "2rem 0", cursor: "pointer" }}>
          <Link
            href="/"
            css={{
              display: "flex",
              gap: "0.7rem",
              alignItems: "center",
            }}
          >
            <Image
              src="/assets/svgs/back.svg"
              alt="back_arrow"
              width={22}
              height={15}
            />
            <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
          </Link>
        </div>
        <div css={{ width: "60%", margin: "0 auto", textAlign: "center" }}>
          <H2 space={"0.48px"} small>
            Creating events bring people together
          </H2>
          <div
            css={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <Link href="/auth/signin">
              <Button fontSize="1rem" width="100%" height="52px">
                SIGN IN TO CREATE AN EVENT
              </Button>
            </Link>
            <p css={{ letterSpacing: "0.32px" }}>DONT HAVE AN ACCOUNT?</p>
            <Link href="/auth/signup">
              <Button
                fontSize="1rem"
                width="100%"
                height="52px"
                background="#fff"
                color="#7c35ab"
                border="1px solid #7c35ab"
              >
                SIGN UP TO GET STARTED
              </Button>
            </Link>
          </div>
        </div>
        <p css={{ marginBlock: "3%" }}>OR</p>
        <ButtonFormOutline width="fit-content" border="none">
          <p css={{ marginTop: "4px" }}>
            {" "}
            <Image
              src="/assets/svgs/google.svg"
              alt="appstore"
              width={21}
              height={21}
            />
          </p>
          <p>Continue With Google</p>
        </ButtonFormOutline>
      </div>
    </div>
  );
};

export default Onboarding;
