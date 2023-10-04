/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Image from "next/image";
import DashboardLayout from "../layout/layout";
import SettingsCard from "@/components/cards/settingsCard";
import SettingsTab from "./[tab]";
import { useRouter } from "next/router";
import DeleteModal from "@/components/modals/settingsModal/deleteModal";
import ToggleSwitch from "@/components/toggleSwitch";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const Settings = () => {
  const router = useRouter();
  const isTablet = useMediaQuery("(max-width: 780px)");
  const activeTab =  router.query.tab || "personalnformation";
  const [notificationsActive, setNotificationsActive] = useState(false);
  const [audienceNoticeActive, setAudienceNoticeActive] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const handleNotificationsActive = () => {
    setNotificationsActive(!notificationsActive);
  };

  const handleAudienceNoticeActive = () => {
    setAudienceNoticeActive(!audienceNoticeActive);
  };

  return (
    <DashboardLayout>
      <DeleteModal
        isOpen={deleteModalOpen}
        onRequestClose={handleDeleteModalOpen}
      />
      <div css={{ display: "grid", gridTemplateColumns: isTablet ? "1fr":"40% 60%" }}>
        <div
          css={{
            height: "100vh",
          }}
        >
          <div
            css={{
              borderLeft: isTablet ? "":`1px solid ${"#E4E4E4"}`,
              borderRight: isTablet ? "":`1px solid ${"#E4E4E4"}`,
              marginLeft: isTablet ? "":"1.2rem",
              height: "100%",
              maxHeight: "100vh",
            }}
          >
            <div
              css={{
                height: "80px",
                borderBottom: `1px solid ${"#E4E4E4"}`,
                display:isTablet ? "flex" : "grid",
                alignItems: "center",
                paddingInline: "1.5rem",
                  gap: isTablet ? "1rem" : "",
                  color: "#000",
              }}
            >
              {isTablet && (
                  <Link href="/dashboard/profile">
                    <div css={{ display: "flex" }}>
                      <Image
                        src="/assets/svgs/back.svg"
                        alt="back_arrow"
                        width={22}
                        height={15}
                      />
                    </div>
                  </Link>
                )}
              <h2>Settings</h2>
            </div>
            <div
              css={{
                height: "calc(100vh - 80px)",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                padding: isTablet ? "1rem":"1.5rem",
              }}
            >
              <SettingsCard
                cardTitle={"Personal Information"}
                link={isTablet ? "/dashboard/settings/mobile/?tab=personalInformation":"/dashboard/settings/?tab=personalInformation"}
                activeTab={activeTab === "personalInformation"}
              >
                <Image
                  src="/assets/svgs/elbow-Right.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </SettingsCard>
              <div css={{ position: "relative" }}>
                <SettingsCard cardTitle={"Notifications"}>
                  <div></div>
                </SettingsCard>
                <div
                  css={{
                    position: "absolute",
                    top: "30%",
                    right: "5%",
                  }}
                >
                  <ToggleSwitch
                    isToggled={notificationsActive}
                    onToggle={handleNotificationsActive}
                  />
                </div>
              </div>
              <div css={{ position: "relative" }}>
                <SettingsCard cardTitle={"Audience Notice"}>
                  <div></div>
                </SettingsCard>
                <div
                  css={{
                    position: "absolute",
                    top: "30%",
                    right: "5%",
                  }}
                >
                  <ToggleSwitch
                    isToggled={audienceNoticeActive}
                    onToggle={handleAudienceNoticeActive}
                  />
                </div>
              </div>

              <SettingsCard
                cardTitle={"Change Password"}
                link={isTablet ? "/dashboard/settings/mobile/?tab=changePassword":"/dashboard/settings/?tab=changePassword"}
                activeTab={activeTab === "changePassword"}
              >
                <Image
                  src="/assets/svgs/elbow-Right.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </SettingsCard>
              <SettingsCard
                cardTitle={"Account Verification"}
                link={isTablet ? "/dashboard/settings/mobile/?tab=verifyAccount":"/dashboard/settings/?tab=verifyAccount"}
                activeTab={activeTab === "verifyAccount"}
              >
                <Image
                  src="/assets/svgs/elbow-Right.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </SettingsCard>
              <div css={{ cursor: "pointer" }} onClick={handleDeleteModalOpen}>
                <SettingsCard cardTitle={"Delete Account"}>
                  <Image
                    src="/assets/svgs/elbow-Right.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </SettingsCard>
              </div>
            </div>
          </div>
        </div>
        {!isTablet && <SettingsTab />}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
