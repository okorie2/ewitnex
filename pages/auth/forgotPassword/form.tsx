/** @jsxImportSource @emotion/react */

import React, { FormEvent, useEffect, useState } from "react";
import BasicTextField from "@/components/inputs/BasicTextField";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import ErrorSnackBar from "@/components/snackbars/error";
import SuccessSnackBar from "@/components/snackbars/success";
import PinInputGrid from "@/components/inputs/PinInput";

type IForgotPasswordFormLevels = "getOTP" | "validation";

interface FormLevelProps {
  formLevel: IForgotPasswordFormLevels;
  setFormLevel: React.Dispatch<React.SetStateAction<IForgotPasswordFormLevels>>;
  identifier: string;
  setIdentifier: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form() {
  const [formLevel, setFormLevel] =
    React.useState<IForgotPasswordFormLevels>("getOTP");
  const [identifier, setIdentifier] = useState("");
  const displayFormLevel = (formLevel: IForgotPasswordFormLevels) => {
    switch (formLevel) {
      case "getOTP":
        return (
          <GetOTP
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            identifier={identifier}
            setIdentifier={setIdentifier}
          />
        );
      case "validation":
        return (
          <Validation
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            identifier={identifier}
            setIdentifier={setIdentifier}
          />
        );
      default:
        return (
          <GetOTP
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            identifier={identifier}
            setIdentifier={setIdentifier}
          />
        );
    }
  };

  return <>{displayFormLevel(formLevel)}</>;
}

const GetOTP = (props: FormLevelProps) => {
  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ signIn }) => signIn);
  const [errorSnackBarOpen, setErrorSnackBarOpen] = useState(false);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [values, setValues] = useState({
    identifier: "",
  });

  useEffect(() => {
    if (loading === "failed") {
      if (localStorage.getItem("error") && localStorage) {
        const error = localStorage.getItem("error") || "";
        setMessage(error);
        setErrorSnackBarOpen(true);
        localStorage.setItem("error", "");
      }
    }
  }, [loading]);

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorSnackBarOpen(false);
    setSuccessSnackBarOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setIdentifier(values.identifier)
    // dispatch(signIn(values)).then((res) => {
    //   console.log(res, "resss");

    //   if (res.meta.requestStatus === "fulfilled") {
    //     setMessage("SignIn successful")
    //     setSuccessSnackBarOpen(true)
    //     router.push("/dashboard/programs");
    //   }
    // })
    props.setFormLevel("validation");
  };

  return (
    <>
      <ErrorSnackBar
        open={errorSnackBarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
      <SuccessSnackBar
        open={successSnackBarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
      <div>
        <p css={{ fontWeight: 400, marginBlock: "2rem" }}>
          Enter The Email or Phone Number used in creating your account to
          receive a Reset Code For reseting your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div css={{ marginBottom: "2.4rem" }}>
            <BasicTextField
              label="Email Or Phone"
              value={values.identifier}
              name={"identifier"}
              setValue={handleChange}
              error={""}
              required
            />
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
                "SEND CODE"
              )}
            </ButtonFormFilled>
          </div>
        </form>
      </div>
    </>
  );
};

const Validation = (props: FormLevelProps) => {
  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ signIn }) => signIn);
  const [errorSnackBarOpen, setErrorSnackBarOpen] = useState(false);
  const [successSnackBarOpen, setSuccessSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const PIN_LENGTH = 6;
  const [pin, setPin] = useState<Array<number | undefined>>(
    new Array(PIN_LENGTH)
  );

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  const [values, setValues] = useState("");

  useEffect(() => {
    setValues(pin.join());
    console.log(values);
  }, [pin]);

  useEffect(() => {
    if (loading === "failed") {
      if (localStorage.getItem("error") && localStorage) {
        const error = localStorage.getItem("error") || "";
        setMessage(error);
        setErrorSnackBarOpen(true);
        localStorage.setItem("error", "");
      }
    }
  }, [loading]);

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorSnackBarOpen(false);
    setSuccessSnackBarOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(signIn(values)).then((res) => {
    //   console.log(res, "resss");

    //   if (res.meta.requestStatus === "fulfilled") {
    //     setMessage("SignIn successful")
    //     setSuccessSnackBarOpen(true)
    //     router.push("/dashboard/programs");
    //   }
    // })
    router.push("/auth/resetPassword")
  };

  return (
    <>
      <ErrorSnackBar
        open={errorSnackBarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
      <SuccessSnackBar
        open={successSnackBarOpen}
        message={message}
        handleClose={handleSnackbarClose}
      />
      <div>
        <p css={{ fontWeight: 400, marginBlock: "2rem" }}>
          We sent a Password Reset Code to <b>{props.identifier}</b>
        </p>
        <form onSubmit={handleSubmit}>
          <div css={{ marginBottom: "2.4rem" }}>
            <p css = {{fontWeight:"700"}}>Enter Code</p>
            <PinInputGrid
              onPinChanged={onPinChanged}
              pin={pin}
              pinLength={PIN_LENGTH}
            />
            <p>Didn't receive an Email? <b>Resend</b></p>
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
                "CONFIRM"
              )}
            </ButtonFormFilled>
          </div>
        </form>
      </div>
    </>
  );
};
