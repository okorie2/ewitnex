/** @jsxImportSource @emotion/react */
import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useEffect, useState } from "react";
import { Button } from "styles/components/button";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { IUserDetails } from "types/user";
import { useAppDispatch, useAppThunkDispatch } from "redux/store";
import { updateUser } from "redux/user/thunkAction";
import toast from "react-hot-toast";

const NameModal = ({
  closeModal,
  setSuccess,
}: {
  closeModal: () => void;
  setSuccess: () => void;
}) => {
  const [user, setUser] = useState<IUserDetails>();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }, []);

  const [formDetails, setFormDetails] = useState({
    email: "",
    username: "",
    gender: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (user) {
      setFormDetails({
        ...formDetails,
        email: user.email,
        username: user.username,
        gender: user.gender,
        phoneNumber: user.phoneNumber.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const dispatch = useAppThunkDispatch()
  const handleNext = () => {
    dispatch(updateUser({userId: user?._id || "", form: formDetails})).then((res) => {
      if(res.meta.requestStatus === "fulfilled"){
        setSuccess();
      }
    })
  };
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <div css={{ width: "100%", padding: isTablet ? "" : "1rem" }}>
      <div
        css={{
          display: isTablet ? "flex" : "grid",
          alignItems: "center",
          gap: isTablet ? "1rem" : "",
          borderBottom: isTablet ? "1px solid #E4E4E4" : "",
          padding: isTablet ? "1rem" : "",
          width: isTablet ? "100vw" : "",
        }}
      >
        {isTablet && (
          <div css={{ display: "flex" }} onClick={closeModal}>
            <Image
              src="/assets/svgs/back.svg"
              alt="back_arrow"
              width={22}
              height={15}
            />
          </div>
        )}
        <p css={{ fontSize: "24px", fontWeight: "bold" }}>Full Name</p>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "2rem",
          paddingInline: isTablet ? "1rem" : "",
        }}
      >
        <SettingsTextField
          label={"First Name"}
          name="firstName"
          value={formDetails.firstName}
          placeholder={user?.firstName || ""}
          setValue={handleChange}
        />
        <SettingsTextField
          label={"Last Name"}
          name="lastName"
          value={formDetails.lastName}
          placeholder={user?.lastName || ""}
          setValue={handleChange}
        />
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
                paddingInline: isTablet ? "" : "7rem",
              }}
            >
              SAVE CHANGES
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
