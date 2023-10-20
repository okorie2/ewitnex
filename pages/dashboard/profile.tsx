/** @jsxImportSource @emotion/react */

import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import DashboardLayout from "./layout/layout";
import Image from "next/image";
import DashboardHeader from "@/components/header/dashboardHeader";
import { useMediaQuery } from "@mui/material";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { Button } from "styles/components/button";
import FollowersModal from "@/components/modals/profileMobileModal/followersMobileModal";
import FollowersFragment from "fragments/profile/followersFragment";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { IUserDetails } from "types/user";

const Profile = () => {
  const [editable, setEditable] = useState(false);
  const [followersModalOpen, setFollowersModalOpen] = useState(false);
  const [bioData, setBioData] = useState("");
  const [saveHoverState, setSaveHoverState] = useState(false);
  const [imageHoverState, setImageHoverState] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [activeTab , setActiveTab] = useState<"followers"|"following">("followers")

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = followersModalOpen ? "hidden" : "auto";
    }
  }, [followersModalOpen]);

  const handleImageClick = () => {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    event.target.files = null;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBioData(event.currentTarget.value);
  };

  const [user,setUser] = useState<IUserDetails>()
  
  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  },[])

  

  return (
    <DashboardLayout>
      <FollowersModal
        isOpen={followersModalOpen}
        onRequestClose={() => setFollowersModalOpen(!followersModalOpen)}
        activeTab={activeTab}
      />
      <div
        css={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "2.7fr 1.3fr",
          height: "100%",
          maxHeight: "100vh",
          marginTop: isTablet ? "4rem" : "",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <div
          css={{
            borderRight: `1px solid ${"#E4E4E4"}`,
            height: "100%",
            width: isTablet ? "100vw" : "",
          }}
        >
          <DashboardHeader />
          <div
            css={{
              color: "#000",
              height: isTablet ? "85vh" : "calc(100% - 80px)",
              padding: "1.5rem",
            }}
          >
            <div css={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
              <div
                css={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <div
                  css={{ position: "relative" }}
                  onMouseEnter={() => setImageHoverState(true)}
                  onMouseLeave={() => setImageHoverState(false)}
                >
                  <Image
                    src="/assets/pngs/marve.png"
                    alt=""
                    width={113}
                    height={113}
                    css={{ borderRadius: "50%" }}
                  />
                  {imageHoverState && (
                    <div
                      css={{
                        color: "#fff",
                        background: "rgba(0,0,0,0.5)",
                        position: "absolute",
                        top: "0rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        height: "113px",
                        width: "113px",
                        borderRadius: "50%",
                      }}
                      onClick={handleImageClick}
                    >
                      <input
                        type="file"
                        css={{ display: "none" }}
                        onChange={handleFileChange}
                        ref={inputRef}
                      />
                      <Image
                        src="/assets/svgs/profile-edit.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>Edit</p>
                    </div>
                  )}
                </div>
                <div css={{ display: "grid", gap: "1rem" }}>
                  <div
                    css={{ display: "flex", gap: "2rem" }}
                  >
                    <div onClick={() => {
                      setFollowersModalOpen(!followersModalOpen);
                      setActiveTab("followers")
                    }}>
                      <p
                        css={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        1000k
                      </p>
                      <p css={{ fontSize: "0.875rem", fontWeight: "bold" }}>
                        Followers
                      </p>
                    </div>
                    <div onClick={() => {
                      setFollowersModalOpen(!followersModalOpen);
                      setActiveTab("following")
                    }}>
                      <p
                        css={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                        }}
                      >
                        500k
                      </p>
                      <p css={{ fontSize: "0.875rem", fontWeight: "bold" }}>
                        Following
                      </p>
                    </div>
                  </div>
                  {isTablet && (
                    <div>
                      <Button width="90%" height="40px" fontSize="1rem">
                        Following
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p
                  css={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  {`${user?.firstName} ${user?.lastName}`}
                </p>
                <div>
                  <p css={{ color: "#AEAEAE", fontWeight: "500" }}>
                    <span css={{ fontSize: isTablet ? "1.05rem" : "1.125rem" }}>
                      {user?.username}
                    </span>{" "}
                    - <span css={{ fontSize: "0.875rem" }}>{user?.city ? user.city.city : ""}</span>
                  </p>
                </div>
              </div>
            </div>
            <div css={{ fontSize: "0.875rem" }}>
              <div css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <p css={{ fontWeight: "bolder" }}>Want to say something?</p>
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {editable ? (
                    <div
                      css={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        width: "8rem",
                      }}
                      onMouseEnter={() => setSaveHoverState(true)}
                      onMouseLeave={() => setSaveHoverState(false)}
                      onClick={() => {
                        setEditable(false);
                      }}
                    >
                      <Image
                        src={`/assets/svgs/floppy-save.svg`}
                        alt=""
                        width={20}
                        height={20}
                      />
                      {saveHoverState && (
                        <span
                          css={{
                            color: "#7C35AB",
                            padding: "0.5% 1%",
                            background: "#F2F7FB",
                            fontWeight: "bold",
                          }}
                        >
                          Save changes
                        </span>
                      )}
                    </div>
                  ) : (
                    <div onClick={() => setEditable(true)}>
                      <Image
                        src={`/assets/svgs/pencil_.svg`}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <HostEventTextField
                  label={""}
                  type="textarea"
                  name="bio"
                  color="#000"
                  height="16rem"
                  value={bioData}
                  placeholder={bioData}
                  disabled={!editable}
                  background="transparent"
                  padding={editable ? "0.5rem" : "0"}
                  border={editable ? undefined : "none"}
                  // setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //   setBioData(e.target.value)
                  // }
                  setValue={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        {!isTablet && <FollowersFragment _activeTab = {activeTab}/>}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
