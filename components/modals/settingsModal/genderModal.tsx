/** @jsxImportSource @emotion/react */

import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "styles/components/button";
import GenderType from "@/components/signupComponents/selectGender";
import { Box } from "@mui/material";
import { IUserDetails } from "types/user";
import { useMediaQuery } from "@mui/material";
import { useAppThunkDispatch } from "redux/store";
import { updateUser } from "redux/user/thunkAction";

const GenderModal = ({
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

  const [selectedType, setSelectedType] = useState<
    "Male" | "Female" | "Preferred Not To Say"
  >();

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

  useEffect(() => {
    if (selectedType) {
      setFormDetails({ ...formDetails, gender: selectedType });
    }
  }, [selectedType]);
  const dispatch = useAppThunkDispatch();
  const handleNext = () => {
    dispatch(updateUser({ userId: user?._id || "", form: formDetails })).then(
      (res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setSuccess();
        }
      }
    );
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
        <p css={{ fontSize: "24px", fontWeight: "bold" }}>
          {isTablet ? "Change" : ""} Gender
        </p>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          paddingInline: isTablet ? "1rem" : "",
          marginTop: "2rem",
        }}
      >
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
          gender="Preferred Not To Say"
          setSelectedType={setSelectedType}
        />
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2.2rem",
          }}
        >
          <Button onClick={handleNext} height="52px" width="100%">
            <p
              css={{
                fontSize: "16px",
                fontFamily: '"Nunito", sans-serif',
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

export default GenderModal;
