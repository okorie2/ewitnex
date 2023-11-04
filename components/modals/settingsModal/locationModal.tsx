/** @jsxImportSource @emotion/react */
import SettingsTextField from "@/components/inputs/SettingsInput";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { Button } from "styles/components/button";
import { IUserDetails } from "types/user";

const LocationModal = ({ closeModal, setSuccess }: { closeModal: () => void, setSuccess: () => void }) => {
  const [location, setLocation] = useState("");
  const isTablet = useMediaQuery("(max-width: 780px)");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value);
  };
  const handleNext = () => {
    setSuccess()
  };

  const [user,setUser] = useState<IUserDetails>()
  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  },[])
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
          {isTablet ? "Change" : ""} Location
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
          label={"Search City"}
          name="Location"
          value={location}
          placeholder={user?.city.city || ""}
          setValue={handleChange}
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

export default LocationModal;
