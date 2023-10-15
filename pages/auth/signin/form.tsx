/** @jsxImportSource @emotion/react */

import React, { FormEvent, useState } from "react";
import BasicTextField, {
  PasswordTextField,
} from "@/components/inputs/BasicTextField";
import Image from "next/image";
import Link from "next/link";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { signIn } from "redux/auth/thunkAction";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";

export type ISignInFormData = {
  identifier: string;
  password: string;
};

export default function Form() {
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ signIn }) => signIn);
  const router = useRouter();

  const [values, setValues] = useState<ISignInFormData>({
    identifier: "",
    password: "",
  });

  const modifyIdentifier = (str:string) => {
    if(str.split("")[0] === "0" && str.length>0){
      let tempArr
      tempArr = str.split("")
      tempArr.shift()
      return `234${tempArr.join()}`
    }else{
      return str
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn(values)).then((res) => {
      console.log(res, "resss");

      if (res.meta.requestStatus === "fulfilled") {
        router.push("/dashboard/programs");
      }
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div css={{ marginBottom: "2.4rem" }}>
            <BasicTextField
              label="Email, Username Or Phone"
              value={modifyIdentifier(values.identifier)}
              name={"identifier"}
              setValue={handleChange}
              required
            />
          </div>
          <div css={{ marginBottom: "1.2rem" }}>
            <PasswordTextField
              label="Password"
              value={values.password}
              name={"password"}
              setValue={handleChange}
              required
            />
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
                color: "#7C35AB",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <div>
            <ButtonFormFilled>
              {loading === "loading" ? (
                <TailSpin
                  height={20}
                  width={20}
                  color="#FFF"
                  ariaLabel="loading"
                  radius={"2"}
                />
              ) : (
                "SIGN IN"
              )}
            </ButtonFormFilled>
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
              />
            </p>
            <p>Continue With Google</p>
          </ButtonFormOutline>
        </div>
        <div css={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <p css={{ fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
            Don&apos;t Have An Account?{" "}
            <span css={{ fontWeight: 700, color: "#7C35AB" }}>
              <Link href="/auth/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
