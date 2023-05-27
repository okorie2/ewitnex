/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import DashboardLayout from "./layout";
import Image from "next/image";
import { theme } from "styles/theme";
import DashboardHeader from "@/components/header/dashboardHeader";
import ProfileFollowing from "fragments/profile/following";
import ProfileFollowers from "fragments/profile/followers";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";

const Profile = () => {
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(true);
  const [activeTab, setActiveTab] = useState("followers");

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

  return (
    <DashboardLayout>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "2.7fr 1.3fr",
          height: "100%",
          maxHeight: "100vh",
        }}
      >
        <div
          css={{
            borderRight: `1px solid ${theme.shadow.border}`,
            height: "100%",
          }}
        >
          <DashboardHeader />
          <div
            css={{
              color: theme.common.black,
              height: "calc(100% - 80px)",
              padding: "1.5rem",
            }}
          >
            <div css={{ display: "grid", gap: "1rem", marginBottom: "1rem" }}>
              <div css={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                <Image
                  src="/assets/pngs/marve.png"
                  alt=""
                  width={113}
                  height={113}
                  css={{ borderRadius: "50%" }}
                />
                <div>
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
                <div>
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
              <div>
                <p
                  css={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  Blessed Onoriode
                </p>
                <div>
                  <p css={{ color: theme.color.grey, fontWeight: "500" }}>
                    <span css={{ fontSize: "1.125rem" }}>Blessed_one</span> -{" "}
                    <span css={{ fontSize: "0.875rem" }}>Delta, Nigeria</span>
                  </p>
                </div>
              </div>
            </div>
            <div css={{ fontSize: "0.875rem" }}>
              <div css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <p css={{ fontWeight: "bold" }}>Want to say something?</p>
                <Image
                  src="/assets/svgs/pencil_.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, erat,
                sed di At et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren,{" "}
                <span css={{ fontWeight: "bold" }}>...see more</span>
              </p>
            </div>
          </div>
        </div>
        <div
          css={{
            padding: "1rem 1.5rem",
            maxWidth: "500px",
          }}
        >
          <div css={{ display: "grid", gap: "1.5rem" }}>
            <div
              css={{
                borderRadius: "16px",
                backgroundColor: theme.background.secondary2,
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
                border: `1.5px solid ${theme.shadow.secondary}`,
                backgroundColor: theme.common.white,
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
                  backgroundColor: theme.common.white,
                  height: "95%",
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: theme.shadow.secondary,
                }}
              />
            </div>
            <div>
              {showFollowers && <ProfileFollowers />}
              {showFollowing && <ProfileFollowing />}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
