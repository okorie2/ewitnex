/** @jsxImportSource @emotion/react */
import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useEffect, useState } from "react";
import { Button } from "styles/components/button";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { IUserDetails } from "types/user";
import toast from "react-hot-toast";
import { useAppThunkDispatch } from "redux/store";
import { updateUser } from "redux/user/thunkAction";

const UserNameModal = ({
  closeModal,
  setSuccess,
}: {
  closeModal: () => void;
  setSuccess: () => void;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
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
          {isTablet ? "Change" : ""} Username
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
        <SettingsTextField
          label={"Username"}
          name="username"
          value={formDetails.username}
          placeholder={user?.username || ""}
          setValue={handleChange}
          withIcon={true}
          iconComponent={
            <div>
              <Image
                src={"/assets/svgs/reset.svg"}
                alt=""
                width={15}
                height={15}
              />
            </div>
          }
        />
        <div css={{ textAlign: "center", marginTop: "1rem" }}>
          <p css={{ fontSize: "16px", fontWeight: "bold" }}>
            SUGGESTED USERNAMES
          </p>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.5rem",
            }}
          >
            {suggested.map((item, idx) => (
              <Suggestion
                key={idx}
                suggestion={item}
                onClick={() =>
                  setFormDetails({ ...formDetails, username: item })
                }
              />
            ))}
          </div>
        </div>
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

export default UserNameModal;

const suggested = ["Blessed_1", "Bles_one", "B_one", "B_Lone"];

const Suggestion = ({
  suggestion,
  onClick,
}: {
  suggestion: string;
  onClick: () => void;
}) => {
  return (
    <div
      css={{
        padding: "5px",
        border: `2px solid ${"#000"}`,
        borderRadius: "16px",
        color: "#AEAEAE",
        fontWeight: "bold",
        fontSize: "12px",
        minWidth: "80px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <p>{suggestion}</p>
    </div>
  );
};
