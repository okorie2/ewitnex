/** @jsxImportSource @emotion/react */

import React, { FormEvent, useEffect, useState } from "react";
import BasicTextField, {
  PasswordTextField,
  PhoneTextField,
} from "@/components/inputs/BasicTextField";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import { ButtonFormFilled, ButtonFormOutline } from "styles/components/button";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import GenderType from "@/components/signupComponents/selectGender";
import Chip, { chipData } from "@/components/signupComponents/chip";
import { useRouter } from "next/router";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { signUp } from "redux/auth/thunkAction";
import { TailSpin } from "react-loader-spinner";
import ErrorSnackBar from "@/components/snackbars/error";
import SuccessSnackBar from "@/components/snackbars/success";


type ISignupFormLevels =
  | "whoYouAre"
  | "email"
  | "password"
  | "gender"
  | "location"
  | "username"
  | "interests";

export type IFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string;
  city: string;
  username: string;
  interests: string[];
};

export type ILocation = [{
  matching_full_name:string
}]

interface FormLevelProps {
  formLevel: ISignupFormLevels;
  setFormLevel: React.Dispatch<React.SetStateAction<ISignupFormLevels>>;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  formData: IFormData;
}

export default function Form() {
  const [formLevel, setFormLevel] =
    React.useState<ISignupFormLevels>("whoYouAre");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
    city: "",
    username: "",
    interests: [""],
  });


  const displayFormLevel = (formLevel: ISignupFormLevels) => {
    switch (formLevel) {
      case "whoYouAre":
        return (
          <WhoYouAre
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "email":
        return (
          <Email
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "password":
        return (
          <Password
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "gender":
        return (
          <Gender
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "location":
        return (
          <Location
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "username":
        return (
          <Username
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "interests":
        return (
          <Interests
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );

      default:
        return (
          <WhoYouAre
            formLevel={formLevel}
            setFormLevel={setFormLevel}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };

  return <>{displayFormLevel(formLevel)}</>;
}

const WhoYouAre = (props: FormLevelProps) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [formValues, setFormValues] = useState({
    firstName: props.formData.firstName || "",
    lastName: props.formData.lastName || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === "firstName") {
      handleFNameError();
    }
    if (name === "lastName") {
      handleLNameError();
    }
  };

  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");

  const handleFNameError = () => {
    if (formValues.firstName.length + 1 < 3) {
      setFNameError("This field requires at least 3 characters");
    }
    if (formValues.firstName.length + 1 > 2) {
      setFNameError("");
    }
  };
  const handleLNameError = () => {
    if (formValues.lastName.length + 1 < 3) {
      setLNameError("This field requires at least 3 characters");
    }
    if (formValues.lastName.length + 1 > 2) {
      setLNameError("");
    }
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setFormLevel("email");
    props.setFormData({
      ...props.formData,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    });
  };
  return (
    <div>
      <Link href="/">
        <div css={{ margin: "3rem 0", cursor: "pointer" }}>
          <button
            type="button"
            css={{
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "none",
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
            {!isTablet && (
              <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
            )}
          </button>
        </div>
      </Link>
      <div
        css={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.5rem",
          marginBottom: "4.3rem",
          fontWeight: isTablet ? 700 : 600,
        }}
      >
        <p>Lets Know</p>
        <p>Who You Are</p>
      </div>
      <form onSubmit={handleNext}>
        <div css={{ marginBottom: "2.4rem" }}>
          <BasicTextField
            label="First Name"
            value={formValues.firstName}
            setValue={handleChange}
            name="firstName"
            weight="bold"
            error={fNameError}
            pattern="[a-zA-Z]{3,}"
            required
          />
        </div>
        <div css={{ marginBottom: "2.4rem" }}>
          <BasicTextField
            weight="bold"
            label="Last Name"
            value={formValues.lastName}
            name="lastName"
            error={lNameError}
            setValue={handleChange}
            pattern="[a-zA-Z]{3,}"
            required
          />
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
      <div css={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <p css={{ fontFamily: "'Nunito', sans-serif", textAlign: "center" }}>
          Already Have An Account?
          <span
            css={{ fontWeight: 700, color: isTablet ? "#7C35AB" : "#f05e78" }}
          >
            <Link href="/auth/signin"> Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

const Email = (props: FormLevelProps) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [email, setEmail] = useState(props.formData.email || "");
  const [valid, setValid] = useState(true);
  const { loading } = useAppSelector(({ signUp }) => signUp);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(loading === "failed"){
      if(localStorage.getItem('error') && localStorage){
        const error = localStorage.getItem('error') || ""
        if(error.includes('mail')){
          setMessage(error)
          setSnackBarOpen(true)
        }
        localStorage.setItem('error', "")
      }
    }
  },[loading])

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false)
  };

  const validateEmail = (email: string) => {
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValid(validateEmail(email));
    setMessage("");
  };

  const handleNext = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (valid) {
      props.setFormLevel("password");
      props.setFormData({
        ...props.formData,
        email: email,
      });
    }
  };

  return (
    <div>
    <ErrorSnackBar open={snackBarOpen} message={message} handleClose = {handleSnackbarClose}/>
      <div css={{ margin: "3rem 0", cursor: "pointer" }}>
        <button
          type="button"
          onClick={() => props.setFormLevel("whoYouAre")}
          css={{
            fontFamily: "'Nunito', sans-serif",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
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
          {!isTablet && (
            <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
          )}
        </button>
      </div>
      <div
        css={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "1.5rem",
          marginBottom: "3.3rem",
          fontWeight: 600,
        }}
      >
        <p>What&apos;s Your Email Address?</p>
      </div>
      <form onSubmit = {handleNext}>
      <div css={{ marginBottom: "2.4rem" }}>
        <BasicTextField
          label="Email Address"
          value={email}
          weight="bold"
          name="email"
          setValue={handleChange}
          error={valid ? message ? "Email already exists":"" : "Provide a valid email"}
          required
        />
      </div>
      <ButtonFormFilled>CONTINUE</ButtonFormFilled>
      </form>
    </div>
  );
};

const Password = (props: FormLevelProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [valid, setValid] = useState(true);
  const { loading } = useAppSelector(({ signUp }) => signUp);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(loading === "failed"){
      if(localStorage.getItem('error') && localStorage){
        const error = localStorage.getItem('error') || ""
        if(error.includes('Phone')){
          setMessage(error)
          setSnackBarOpen(true)
        }
        localStorage.setItem('error', "")
      }
    }
  },[loading])

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false)
  };

  const [formDetails, setFormDetails] = useState({
    phoneNumber: props.formData.phoneNumber || "",
    password: "",
    confirmPassword: "",
  });
  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{13}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

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
      validatePasswordMatch(formDetails.password, formDetails.confirmPassword)
    );
  }, [formDetails.confirmPassword]);

  useEffect(() => {
    if (formDetails.phoneNumber.length >= 1) {
      setValid(validatePhoneNumber(formDetails.phoneNumber));
    }
  }, [formDetails.phoneNumber]);

  useEffect(() => {
    if (formDetails.password) {
      setPasswordValid(validatePassword(formDetails.password));
    }
  }, [formDetails.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("")
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormDetails({ ...formDetails, phoneNumber: value });
  };

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValid(validatePhoneNumber(formDetails.phoneNumber));
    setPasswordMatch(
      validatePasswordMatch(formDetails.password, formDetails.confirmPassword)
    );
    if (valid && passwordValid && passwordMatch) {
      props.setFormLevel("gender");
      props.setFormData({
        ...props.formData,
        phoneNumber: formDetails.phoneNumber,
        password: formDetails.password,
      });
    }
  };

  return (
    <>
    <ErrorSnackBar open={snackBarOpen} message={message} handleClose = {handleSnackbarClose}/>
      <div>
        <div css={{ margin: "3rem 0", cursor: "pointer" }}>
          <button
            type="button"
            onClick={() => props.setFormLevel("email")}
            css={{
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "none",
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
            {!isTablet && (
              <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
            )}
          </button>
        </div>
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            marginBottom: isTablet ? "2rem" : "4.3rem",
            p: {
              marginBottom: "1.3rem",
            },
          }}
        >
          <p css={{ fontWeight: "500" }}>Sign Up</p>
          <p
            css={css`
              font-size: 16px;
            `}
          >
            {" "}
            Using <b css={{ fontWeight: "700" }}>{props.formData.email}</b> To
            Sign Up
          </p>
        </div>

        <form onSubmit={(e) => handleNext(e)}>
          <div css={{ marginBottom: "2.4rem" }}>
            <PhoneTextField
              label="Phone Number"
              value={formDetails.phoneNumber}
              name="phoneNumber"
              setValue={handleChange}
              setPhoneValue={handlePhoneChange}
              error={
                message ? "Phone number already in use by another user" : valid? "": "Please enter a valid phone number using the format +(234) XXX XXX XXX X"
              }
              required
            />
          </div>
          <PasswordTextField
            label="Password"
            visible={passwordVisible}
            setVisible={setPasswordVisible}
            setValue={handleChange}
            name="password"
            value={formDetails.password}
            error={
              passwordValid
                ? ""
                : "Kindly ensure your password has at least one capital letter, small letter, numerical and special character. It must also be at least 8 letters long"
            }
            required
          />
          <Box height={35} />
          <PasswordTextField
            label="Confirm Password"
            visible={confirmPasswordVisible}
            setVisible={setConfirmPasswordVisible}
            setValue={handleChange}
            name="confirmPassword"
            value={formDetails.confirmPassword}
            error={passwordMatch ? "" : "Passwords do not match!"}
            required
          />
          <Box height={35} />

          <ButtonFormFilled>CONTINUE</ButtonFormFilled>
        </form>
      </div>
    </>
  );
};

const Gender = (props: FormLevelProps) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [selectedType, setSelectedType] = useState<
    "Male" | "Female" | "Preferred not to say"
  >();
  const handleNext = () => {
    if (selectedType) {
      props.setFormLevel("location");
      props.setFormData({
        ...props.formData,
        gender: selectedType,
      });
    }
  };
  return (
    <>
      <div>
        <div css={{ margin: "3rem 0", cursor: "pointer" }}>
          <button
            type="button"
            onClick={() => props.setFormLevel("password")}
            css={{
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "none",
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
            {!isTablet && (
              <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
            )}
          </button>
        </div>
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.5rem",
            marginBottom: isTablet ? "3rem" : "4.3rem",
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
  const isTablet = useMediaQuery("(max-width: 900px)");
  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setFormLevel("username");
    props.setFormData({
      ...props.formData,
      city: value,
    });
  };
  const [value, setValue] = useState(props.formData.city || "");
  const [cities, setCities] = useState<ILocation>();

  useEffect(() => {
    const searchedCities = async () => {
      const res = await fetch(
        `https://api.teleport.org/api/cities/?search=${value}`
      );
      const data = await res.json();
      setCities(data._embedded["city:search-results"]);
    };
    searchedCities();
  }, [value]);
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
            marginBottom: isTablet ? "2rem" : "4.3rem",
            fontWeight: "600",
            p: {
              marginBottom: "1.3rem",
            },
          }}
        >
          <p>What&apos;s your Location?</p>
          <p
            css={css`
              font-size: 16px;
              font-weight: "normal";
            `}
          >
            {" "}
            This will give you event feeds happening around you based on your
            location
          </p>
        </div>
        <form onSubmit={handleNext}>
          <BasicTextField
            label="Search City"
            value={value}
            weight="bold"
            setValue={(e) => setValue(e.target.value)}
            required
          />
          <Box height={isTablet ? 10 : cities ? 10 : 35} />

          {cities && value.length > 0 && (
            <div
              css={{
                height: "fit-content",
                maxHeight: "8rem",
                width: "100%",
                border: "1px solid #AEAEAE",
                paddingInline: "0",
                paddingBlock: "0.2rem",
                overflowY: "auto",
                marginBottom: "2rem",
              }}
            >
              {cities.map((city, idx) => (
                <p
                  key={idx}
                  css={{
                    fontFamily: "'Nunito', sans-serif",
                    padding: "0.5rem",
                    paddingLeft: "0.5rem",
                    fontSize: "1rem",
                    cursor: "pointer",
                    ":hover": {
                      background: "#7c35ab",
                      color: "#FFF",
                    },
                  }}
                  onClick={() => setValue(city?.matching_full_name)}
                >
                  {city?.matching_full_name}
                </p>
              ))}
            </div>
          )}

          <ButtonFormFilled>CONTINUE</ButtonFormFilled>
        </form>
      </div>
    </>
  );
};

const Username = (props: FormLevelProps) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setFormLevel("interests");
    props.setFormData({
      ...props.formData,
      username: value,
    });
  };
  const [value, setValue] = useState(props.formData.username || "");

  return (
    <>
      <div>
        <div css={{ margin: "3rem 0", cursor: "pointer" }}>
          <button
            type="button"
            onClick={() => props.setFormLevel("location")}
            css={{
              fontFamily: "'Nunito', sans-serif",
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "none",
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
            {!isTablet && (
              <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
            )}
          </button>
        </div>
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
        <form onSubmit={handleNext}>
          <BasicTextField
            label="Username"
            value={value}
            weight="bold"
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
            required
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
              flex-wrap: wrap;
              align-items: center;
            `}
          >
            {[" Blessed_1", "Bles_one", "B_one", "B_lone"].map(
              (name, index) => (
                <div
                  key={index}
                  onClick={() => setValue(name)}
                  css={css`
                    height: 31px;
                    border: 2px solid ${"#000"};
                    border-radius: 16px;
                    padding: 5px 15px;
                    font-size: 14px;
                    font-weight: 500;
                    color: ${"#AEAEAE"};
                    cursor: pointer;
                  `}
                >
                  {name}
                </div>
              )
            )}
          </div>
          <Box height={35} />

          <ButtonFormFilled>CONTINUE</ButtonFormFilled>
        </form>
      </div>
    </>
  );
};

const Interests = (props: FormLevelProps) => {
  const isTablet = useMediaQuery("(max-width: 900px)");
  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ signUp }) => signUp);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(loading === "failed"){
      if(localStorage.getItem('error') && localStorage){
        const error = localStorage.getItem('error') || ""
        if(error === "Email already exists"){
          props.setFormLevel("email")
        }
        if (error === "Phone number is already in use by another user"){
          props.setFormLevel('password')
        }
      }
    }
    if(loading === "successful"){
      setMessage("Signup successful")
        setSnackBarOpen(true)
    }
  },[loading])

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false)
  };
  
  const handleSubmit = () => {
    props.setFormData({
      ...props.formData,
      interests: selectedInterests,
    });
    dispatch(signUp(props.formData)).then((res) => {
      res.meta.requestStatus == "fulfilled" ? router.push("/auth/signin") : "";
    });
    // router.push("/dashboard/programs");
  };
  const [selectedInterests, setSelectedInterests] = useState([""]);
  const [chipDetails, setChiDetails] = useState(chipData);
  return (
    <div>
    <SuccessSnackBar open={snackBarOpen} message={message} handleClose = {handleSnackbarClose}/>
      <div css={{ margin: "3rem 0", cursor: "pointer" }}>
        <button
          type="button"
          onClick={() => props.setFormLevel("username")}
          css={{
            fontFamily: "'Nunito', sans-serif",
            cursor: "pointer",
            border: "none",
            outline: "none",
            background: "none",
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
          {!isTablet && (
            <p css={{ fontSize: "1rem", fontWeight: "500" }}>Back</p>
          )}
        </button>
      </div>

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
          width: 110%;
          flex-wrap: wrap;
        `}
      >
        <Chip
          arr={selectedInterests}
          setArr={setSelectedInterests}
          chipDetails={chipDetails}
          setChipDetails={setChiDetails}
        />
      </div>

      <Box height={35} />

      <ButtonFormFilled onClick={handleSubmit}>
        {loading === "loading" ? (
          <TailSpin
            height={15}
            width={15}
            color="#FFF"
            ariaLabel="loading"
            radius={"2"}
          />
        ) : (
          "SIGN UP"
        )}
      </ButtonFormFilled>
    </div>
  );
};
