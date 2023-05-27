/** @jsxImportSource @emotion/react */
import React from "react";
import DashboardLayout from "pages/dashboard/layout";
import Image from "next/image";
import { theme } from "styles/theme";
import ManageEventTab from "./[tab]";
import Link from "next/link";
import { useRouter } from "next/router";

const ManageSingleEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ("overview" as string | undefined);
  return (
    <DashboardLayout>
      <div
        css={{
          borderLeft: `1px solid ${theme.shadow.border}`,
          marginLeft: "1.5rem",
          height: "100%",
        }}
      >
        <div
          css={{
            height: "80px",
            borderBottom: `1px solid ${theme.shadow.border}`,
            display: "grid",
            alignItems: "center",
            paddingInline: "1.5rem",
            color: theme.common.black,
          }}
        >
          <div css={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <Image
              src="/assets/svgs/arrow-left.svg"
              alt=""
              width={22}
              height={15}
            />
            <h2>DevFest Aba</h2>
          </div>
        </div>
        <div>
          <div
            css={{
              fontFamily: "'Nunito', sans-serif",
              display: "grid",
              gridTemplateColumns: "15% 85%",
              minHeight: "calc(100vh - 80px)",
            }}
          >
            <div
              css={{
                borderRight: `1px solid ${theme.shadow.border}`,
              }}
            >
              <div>
                <ul
                  css={{
                    listStyleType: "none",
                    width: "100%",
                  }}
                >
                  {manageEventTabs.map((item) => (
                    <TabNav
                      key={item}
                      isActive={Boolean(activeTab === item.split(" ").join(""))}
                      tab={item}
                      id={id?.toString()}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ManageEventTab />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageSingleEvent;

const manageEventTabs = ["Overview", "Ticket Sales", "Attendees"];

const TabNav: React.FC<{
  isActive: boolean;
  tab: string;
  id: string | undefined;
}> = ({ isActive, tab, id }) => {
  return (
    <li
      css={{
        fontSize: "1.125rem",
        fontWeight: "500",
        cursor: "pointer",
        width: "100%",
        color: isActive ? theme.common.black : theme.color.grey,
        borderLeft: isActive
          ? `2px solid ${theme.common.black}`
          : `2px solid ${theme.common.white}`,
      }}
      key={tab}
    >
      <Link
        href={`/dashboard/manager/${[id]}?tab=${tab.split(" ").join("")}`}
        css={{
          display: "inline-block",
          width: "100%",
          padding: "0.7rem 1.5rem",
        }}
      >
        {tab}
      </Link>
    </li>
  );
};
