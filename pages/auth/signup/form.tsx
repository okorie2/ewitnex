/** @jsxImportSource @emotion/react */

import React from "react";
import BasicTextField from "@/components/inputs/BasicTextField";
import Image from "next/image";
import Link from "next/link";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { theme } from "styles/theme";

export default function Form() {
  return (
    <>
      <div>
        <form>
          <div css={{ marginBottom: "2.4rem" }}>
            <BasicTextField label="First Name" type="text" />
          </div>
          <div css={{ marginBottom: "3.2rem" }}>
            <BasicTextField label="Last Name" type="text" />
          </div>

          <div>
            <ButtonFormFilled>CONTINUE</ButtonFormFilled>
          </div>
        </form>
        <p
          css={{
            margin: "3rem 0",
            textAlign: "center",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          OR
        </p>
        <div css={{ width: "100%" }}>
          <ButtonFormOutline>
            <p css={{ marginTop: "4px" }}>
              <Image
                src="/assets/svgs/google.svg"
                alt="appstore"
                width={21}
                height={21}
              />
            </p>
            <p>Get Started With Google</p>
          </ButtonFormOutline>
        </div>
        <div css={{ marginTop: "2rem" }}>
          <p css={{ fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
            Already Have An Account?
            <span css={{ fontWeight: 700, color: theme.background.primary }}>
              <Link href="/auth/signin">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
