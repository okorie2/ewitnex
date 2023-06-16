/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Image from "next/image";
import DashboardLayout from "../layout";
import { theme } from "styles/theme";
import SettingsCard from "@/components/cards/settingsCard";
import SettingsTab from "./[tab]";
import {useRouter} from "next/router";

const Settings = () => {
  const router = useRouter()
  const activeTab = router.query.tab || "personalnformation";
  
  return (
    <DashboardLayout>
      <div css={{ display: "grid", gridTemplateColumns: "40% 60%" }}>
        <div
          css={{
            height: "100vh",
          }}
        >
          <div
            css={{
              borderLeft: `1px solid ${"#E4E4E4"}`,
              boxShadow: `0px 0px 3px ${"#00000029"}`,
              marginLeft: "1.2rem",
              height: "100%",
              maxHeight: "100vh",
            }}
          >
            <div
              css={{
                height: "80px",
                borderBottom: `1px solid ${"#E4E4E4"}`,
                display: "grid",
                alignItems: "center",
                paddingInline: "1.5rem",
                color: "#000",
              }}
            >
              <h2>Settings</h2>
            </div>
            <div
              css={{
                height: "calc(100vh - 80px)",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                padding: "1.5rem",
              }}
            >
              <SettingsCard
                cardTitle={"Personal Information"}
                link={"/dashboard/settings/?tab=personalInformation"}
                activeTab={activeTab === "personalInformation"}
              >
                <Image
                  src="/assets/svgs/elbow-Right.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </SettingsCard>
              <SettingsCard cardTitle={"Notifications"}>

              </SettingsCard>
              <SettingsCard cardTitle={"Audience Notice"}>

              </SettingsCard>
              <SettingsCard
                cardTitle={"Change Password"}
                link={"/dashboard/settings/?tab=changePassword"}
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
                link={"/dashboard/settings/?tab=verifyAccount"}
                activeTab={activeTab === "verifyAccount"}
              >
                <Image
                  src="/assets/svgs/elbow-Right.svg"
                  alt=""
                  width={25}
                  height={25}
                />
              </SettingsCard>
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
        <SettingsTab />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
