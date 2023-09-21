/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";
import ProfileFollowers from "./followers";
import ProfileFollowing from "./following";
import { useMediaQuery } from "@mui/material";

const FollowersFragment = ({
  _activeTab,
}: {
  _activeTab: "followers" | "following";
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(true);
  const [activeTab, setActiveTab] = useState(_activeTab);
  const handleShowFollowers = () => {
    setShowFollowers(true);
    setShowFollowing(false);
    setActiveTab("followers");
  };
  const handleShowFollowing = () => {
    setShowFollowing(true);
    setShowFollowers(false);
    setActiveTab("following");
  };
  useEffect(() => {
    setActiveTab(activeTab);
    if(activeTab === "followers"){
        handleShowFollowers()
    }
    if(activeTab === "following"){
        handleShowFollowing()
    }
  }, [activeTab]);
  return (
    <div
      css={{
        padding: isTablet ? "0.5rem" : "1rem 1rem",
        maxWidth: "500px",
        marginTop: isTablet ? "9vh" : "",
      }}
    >
      <div css={{ display: "grid", gap: "1.5rem" }}>
        <div
          css={{
            borderRadius: "16px",
            backgroundColor: "#F2F7FB",
            width: "100%",
            marginInline: "auto",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            padding: "0.2rem",
          }}
        >
          <button
            onClick={handleShowFollowers}
            css={
              activeTab === "followers"
                ? activeButtonStyle
                : inactiveButtonStyle
            }
          >
            1000K Followers
          </button>
          <button
            onClick={handleShowFollowing}
            css={
              activeTab === "following"
                ? activeButtonStyle
                : inactiveButtonStyle
            }
          >
            500K Following
          </button>
        </div>
        <div
          css={{
            borderRadius: "10px",
            border: `1.5px solid ${"#AEAEAE"}`,
            backgroundColor: "#fff",
            width: "100%",
            marginInline: "auto",
            height: "2.625rem",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
            gap: "2%",
          }}
        >
          <div css={{ marginTop: "3px" }}>
            <Image
              src="/assets/svgs/search.svg"
              width={14.42}
              height={14.41}
              alt="logo"
            />
          </div>
          <input
            placeholder="Search "
            type={"text"}
            css={{
              borderRadius: "66px",
              width: "100%",
              outline: "none",
              border: "none",
              backgroundColor: "#fff",
              height: "95%",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#AEAEAE",
            }}
          />
        </div>
        <div>
          {showFollowers && <ProfileFollowers />}
          {showFollowing && <ProfileFollowing />}
        </div>
      </div>
    </div>
  );
};

export default FollowersFragment;
