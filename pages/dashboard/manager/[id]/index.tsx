/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import DashboardLayout from "pages/dashboard/layout";
import Image from "next/image";
import ManageEventTab from "./[tab]";
import Link from "next/link";
import { useRouter } from "next/router";

const ManageSingleEvent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
        {isMenuOpen && (
          <div
            css={{
              height: "100vh",
              width: "calc(100vw - 400px)",
              right: 0,
              zIndex: "1",
              position: "absolute",
              cursor: "pointer",
            }}
            onClick={handleMenuOpen}
          ></div>
        )}
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
              <Link href="/dashboard/manager">
                <Image
                  src="/assets/svgs/arrow-left.svg"
                  alt=""
                  width={22}
                  height={15}
                />
              </Link>
              <h2>DevFest Aba</h2>
            </div>
            <div
              css={{ cursor: "pointer", position: "relative" }}
              onClick={handleMenuOpen}
            >
              <Image
                src={"/assets/svgs/ellipse.svg"}
                alt={""}
                width={20}
                height={20}
              />
              {isMenuOpen && (
                <div
                  css={{
                    position: "absolute",
                    background: "#fff",
                    height: 140,
                    width: 230,
                    left: "-1000%",
                    right: "0",
                    top: "100%",
                    zIndex: "5",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    border: "1px solid #C0C0C0",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      gap: "16px",
                      width: "100%",
                      alignItems: "center",
                      padding: "12px 16px",
                      borderRadius: "8px 8px 0 0",
                      ":hover": { 
                        color: "#7C35AB",
                        background: "#F5F5F5" 
                      },
                    }}
                  >
                    <Image
                      src={"/assets/svgs/brochure.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                    <p>Event Page</p>
                  </div>
                  <div
                    css={{
                      display: "flex",
                      gap: "16px",
                      width: "100%",
                      alignItems: "center",
                      padding: "12px 16px",
                      ":hover": { 
                        color: "#7C35AB",
                        background: "#F5F5F5" 
                      },
                    }}
                  >
                    <Image
                      src={"/assets/svgs/pencil_.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                    <p>Edit Event</p>
                  </div>
                  <div
                    css={{
                      display: "flex",
                      gap: "16px",
                      width: "100%",
                      alignItems: "center",
                      padding: "12px 16px",
                      borderRadius: "0 0 8px 8px",
                      ":hover": { 
                        color: "#7C35AB",
                        background: "#F5F5F5" 
                      },
                    }}
                  >
                    <Image
                      src={"/assets/svgs/trash-light.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                    <p>Cancel Event</p>
                  </div>
                </div>
              )}
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
