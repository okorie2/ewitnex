/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import BasicTextField, {
  PasswordTextField,
} from "@/components/inputs/BasicTextField";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { theme } from "styles/theme";
import { Box } from "@mui/material";

import GenderType from "./components/selectGender";
import Chip, { chipData } from "./components/chip";
import { useRouter } from "next/router";

type ISignupFormLevels =
  | "whoYouAre"
  | "password"
  | "gender"
  | "location"
  | "username"
  | "interests";

interface FormLevelProps {
  formLevel: ISignupFormLevels;
  setFormLevel: React.Dispatch<React.SetStateAction<ISignupFormLevels>>;
}
export default function Form() {
  const [formLevel, setFormLevel] =
    React.useState<ISignupFormLevels>("whoYouAre");

  const [formDetails, setFormDetails] = React.useState({});

  const displayFormLevel = (formLevel: ISignupFormLevels) => {
    switch (formLevel) {
      case "whoYouAre":
        return <WhoYouAre formLevel={formLevel} setFormLevel={setFormLevel} />;

      case "password":
        return <Password formLevel={formLevel} setFormLevel={setFormLevel} />;
      case "gender":
        return <Gender formLevel={formLevel} setFormLevel={setFormLevel} />;
      case "location":
        return <Location formLevel={formLevel} setFormLevel={setFormLevel} />;
      case "username":
        return <Username formLevel={formLevel} setFormLevel={setFormLevel} />;
      case "interests":
        return <Interests formLevel={formLevel} setFormLevel={setFormLevel} />;

      default:
        return <WhoYouAre formLevel={formLevel} setFormLevel={setFormLevel} />;
    }
  };

  return <>{displayFormLevel(formLevel)}</>;
}

const WhoYouAre = (props: FormLevelProps) => {
  const handleNext = () => {
    props.setFormLevel("password");
  };
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <div css={{ margin: "3rem 0", cursor: "pointer" }}>
        <Image
          src="/assets/svgs/back.svg"
          alt="back_arrow"
          width={22}
          height={15}
        />
      </div>
      <div
        css={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.5rem",
          marginBottom: "4.3rem",
          fontWeight: 600,
        }}
      >
        <p>Lets Know</p>
        <p>Who You Are</p>
      </div>
      <form>
        <div css={{ marginBottom: "2.4rem" }}>
          <BasicTextField
            label="First Name"
            value={formValues.firstName}
            setValue={handleChange}
            name="firstName"
          />
        </div>
        <div css={{ marginBottom: "2.4rem" }}>
          <BasicTextField
            label="Last Name"
            value={formValues.lastName}
            name="lastName"
            setValue={handleChange}
          />
        </div>
        <div css={{ marginBottom: "2.4rem" }}>
          <BasicTextField
            label="Email Address"
            value={formValues.email}
            name="email"
            setValue={handleChange}
          />
        </div>

        <div css={{ marginBottom: "2.4rem" }}>
          <BasicTextField
            label="Phone Number"
            value={formValues.phoneNumber}
            name="phoneNumber"
            setValue={handleChange}
          />
        </div>

        <div>
          <ButtonFormFilled onClick={handleNext}>CONTINUE</ButtonFormFilled>
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
  );
};

const Password = (props: FormLevelProps) => {
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
    props.setFormLevel("gender");
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => props.setFormLevel("whoYouAre")}
          css={{
            margin: "3rem 0",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
          }}
        >
          <Image
            src="/assets/svgs/back.svg"
            alt="back_arrow"
            width={22}
            height={15}
          />
        </button>
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            marginBottom: "4.3rem",
            p: {
              marginBottom: "1.3rem",
            },
          }}
        >
          <p>Sign Up</p>
          <p
            css={css`
              font-size: 16px;
            `}
          >
            {" "}
            Using <b>blessedonoriode@gmail.com</b> To Sign Up
          </p>
        </div>

        <form>
          <PasswordTextField
            label="Password"
            visible={passwordVisible}
            setVisible={setPasswordVisible}
            setValue={handleChange}
            name="password"
            value={formDetails.password}
          />
          <Box height={35} />
          <PasswordTextField
            label="Confirm Password"
            visible={confirmPasswordVisible}
            setVisible={setConfirmPasswordVisible}
            setValue={handleChange}
            name="confirmPassword"
            value={formDetails.confirmPassword}
          />
          <Box height={35} />

          <ButtonFormFilled onClick={handleNext}>CONTINUE</ButtonFormFilled>
        </form>
      </div>
    </>
  );
};

const Gender = (props: FormLevelProps) => {
  const [selectedType, setSelectedType] = useState<
    "Male" | "Female" | "Preferred not to say"
  >();
  const handleNext = () => {
    if (selectedType) {
      props.setFormLevel("location");
    }
  };
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => props.setFormLevel("password")}
          css={{
            margin: "3rem 0",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
          }}
        >
          <Image
            src="/assets/svgs/back.svg"
            alt="back_arrow"
            width={22}
            height={15}
          />
        </button>
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            marginBottom: "4.3rem",
            fontWeight: "500",
            p: {
              marginBottom: "1.3rem",
            },
          }}
        >
          <p>What&apos;s your Gender?</p>
          <p
            css={css`
              font-size: 16px;
              font-weight: normal;
            `}
          >
            {" "}
            Select your gender
          </p>
        </div>
        <div>
          <GenderType
            selectedType={selectedType}
            gender="Male"
            setSelectedType={setSelectedType}
          />
          <Box height={22} />

          <GenderType
            selectedType={selectedType}
            gender="Female"
            setSelectedType={setSelectedType}
          />
          <Box height={22} />

          <GenderType
            selectedType={selectedType}
            gender="Preferred not to say"
            setSelectedType={setSelectedType}
          />
          <Box height={35} />

          <ButtonFormFilled onClick={handleNext}>CONTINUE</ButtonFormFilled>
        </div>
      </div>
    </>
  );
};

const Location = (props: FormLevelProps) => {
  const handleNext = () => {
    props.setFormLevel("username");
  };
  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => props.setFormLevel("gender")}
          css={{
            margin: "3rem 0",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
          }}
        >
          <Image
            src="/assets/svgs/back.svg"
            alt="back_arrow"
            width={22}
            height={15}
          />
        </button>
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            marginBottom: "4.3rem",
            fontWeight: "500",
            p: {
              marginBottom: "1.3rem",
            },
          }}
        >
          <p>What&apos;s your Location?</p>
          <p
            css={css`
              font-size: 16px;
              font-weight: normal;
            `}
          >
            {" "}
            This will give you event feeds happening around you based on your
            location
          </p>
        </div>
        <form>
          <BasicTextField
            label="Search City"
            value={value}
            setValue={(e) => setValue(e.target.value)}
          />
          <Box height={35} />

          <ButtonFormFilled onClick={handleNext}>CONTINUE</ButtonFormFilled>
        </form>
      </div>
    </>
  );
};

const Username = (props: FormLevelProps) => {
  const handleNext = () => {
    props.setFormLevel("interests");
  };
  const [value, setValue] = useState("gggg");

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => props.setFormLevel("location")}
          css={{
            margin: "3rem 0",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
          }}
        >
          <Image
            src="/assets/svgs/back.svg"
            alt="back_arrow"
            width={22}
            height={15}
          />
        </button>
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            marginBottom: "4.3rem",
            fontWeight: "500",
            p: {
              marginBottom: "1.3rem",
            },
          }}
        >
          <p>Pick A Username</p>
          <p
            css={css`
              font-size: 16px;
              font-weight: normal;
            `}
          >
            {" "}
            Username is your unique ID to look for you and to purchase ticket
            for you
          </p>
        </div>
        <form>
          <BasicTextField
            label="Username"
            value={value}
            withIcon
            setValue={(e) => setValue(e.target.value)}
            iconComponent={
              <button
                type="button"
                onClick={() => {}}
                css={css`
                  /* outline: none; */
                  border: none;
                  background: none;
                `}
              >
                {" "}
                <Image
                  src="/assets/svgs/reset.svg"
                  alt="reset-icon"
                  width={16.29}
                  height={18.21}
                />{" "}
              </button>
            }
          />
          <label
            css={css`
              font-family: "Poppins", sans-serif;
              margin-top: 9px;
              display: block;
            `}
          >
            Username Available
          </label>
          <Box height={35} />
          <p
            css={css`
              text-align: center;
              font-weight: bold;
              font-family: "Nunito", sans-serif;
            `}
          >
            SUGGESTED USERNAMES
          </p>
          <div
            css={css`
              display: flex;
              gap: 10px;
              margin-top: 19px;
            `}
          >
            {[" Blessed_1", "Bles_one", "B_one", "B_lone"].map(
              (name, index) => (
                <div
                  key={index}
                  onClick={() => setValue(name)}
                  css={css`
                    height: 31px;
                    border: 2px solid ${theme.common.black};
                    border-radius: 16px;
                    padding: 5px;
                    font-size: 14px;
                    font-weight: 500;
                    color: ${theme.shadow.secondary};
                    cursor: pointer;
                  `}
                >
                  {name}
                </div>
              )
            )}
          </div>
          <Box height={35} />

          <ButtonFormFilled onClick={handleNext}>CONTINUE</ButtonFormFilled>
        </form>
      </div>
    </>
  );
};

const Interests = (props: FormLevelProps) => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/dashboard");
  };

  const [chipDetails, setChiDetails] = useState(chipData);
  return (
    <div>
      <button
        type="button"
        onClick={() => props.setFormLevel("username")}
        css={{
          margin: "3rem 0",
          cursor: "pointer",
          border: "none",
          outline: "none",
          background: "none",
        }}
      >
        <Image
          src="/assets/svgs/back.svg"
          alt="back_arrow"
          width={22}
          height={15}
        />
      </button>

      <div
        css={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.5rem",
          marginBottom: "4.3rem",
          fontWeight: "500",
          p: {
            marginBottom: "1.3rem",
          },
        }}
      >
        <p>Select Categories You Are Interested In</p>
      </div>
      <div
        css={css`
          display: flex;
          gap: 10px;
          margin-top: 19px;
          width: 100%;
          flex-wrap: wrap;
        `}
      >
        <Chip chipDetails={chipDetails} setChipDetails={setChiDetails} />
      </div>

      <Box height={35} />

      <ButtonFormFilled onClick={handleSubmit}>SIGN UP</ButtonFormFilled>
    </div>
  );
};
