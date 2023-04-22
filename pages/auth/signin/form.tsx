/** @jsxImportSource @emotion/react */

import BasicTextField from "@/components/inputs/BasicTextField";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { theme } from "styles/theme";

export default function Form() {
  return (
    <>
      <div>
        <form>
          <div css={{ marginBottom: "2.4rem" }}>
            <BasicTextField label="Email, Username Or Phone" type="text" />
          </div>
          <div css={{ marginBottom: "1.2rem" }}>
            <BasicTextField label="Password" type="password" />
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "3rem",
            }}
          >
            <p
              css={{
                fontWeight: 700,
                color: theme.background.primary,
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <div>
            <Link href="/dashboard">
              <ButtonFormFilled>SIGN IN</ButtonFormFilled>
            </Link>
          </div>
        </form>

        <p
          css={{
            margin: "2rem 0",
            textAlign: "center",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          OR
        </p>
        <div css={{ width: "100%" }}>
          <ButtonFormOutline>
            <p css={{ marginTop: "4px" }}>
              {" "}
              <Image
                src="/assets/svgs/google.svg"
                alt="appstore"
                width={21}
                height={21}
              />{" "}
            </p>{" "}
            <p>Continue With Google</p>
          </ButtonFormOutline>
        </div>
        <div css={{ marginTop: "2rem" }}>
          <p css={{ fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
            Don&apos; Have An Account?{" "}
            <span css={{ fontWeight: 700, color: theme.background.primary }}>
              <Link href="/auth/signup">Sign Up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
