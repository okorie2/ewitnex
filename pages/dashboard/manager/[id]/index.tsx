/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import DashboardLayout from "pages/dashboard/layout";
import Image from "next/image";
import ManageEventTab from "./[tab]";
import Link from "next/link";
import { useRouter } from "next/router";

const ManageSingleEvent = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const router = useRouter();
  const { id } = router.query;
  const activeTab = router.query?.tab || ("overview" as string | undefined);
  return (
    <DashboardLayout>
      <div
        css={{
          borderLeft: `1px solid ${"#E4E4E4"}`,
          marginLeft: "1.5rem",
          height: "100%",
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
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              justifyContent: "space-between",
              width: "97%",
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
            <div css={{ cursor: "pointer", position: "relative" }} onClick={handleMenuOpen}>
              <Image
                src={"/assets/svgs/ellipse.svg"}
                alt={""}
                width={20}
                height={20}
              />
              { isMenuOpen &&
                <div
                css={{
                  position: "absolute",
                  background: "#fff",
                  height: 155,
                  width: 230,
                  left: "-1000%",
                  right: "0",
                  zIndex: "2",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid #C0C0C0",
                }}
                >
                <div css={{ width: "70%", marginTop: "1.2rem" , ":hover": {fontWeight: "bold"}}}>
                  <p>Event Page</p>
                </div>
                <div css={{ width: "70%", marginTop: "1.2rem", ":hover": {fontWeight: "bold"} }}>
                  <p>Edit Event</p>
                </div>
                <div css={{ width: "70%", marginTop: "1.2rem", ":hover": {fontWeight: "bold"} }}>
                  <p>Cancel Event</p>
                </div>
              </div>
              }
            </div>
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
                borderRight: `1px solid ${"#E4E4E4"}`,
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
        color: isActive ? "#000" : "#AEAEAE",
        borderLeft: isActive ? `2px solid ${"#000"}` : `2px solid ${"#fff"}`,
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
