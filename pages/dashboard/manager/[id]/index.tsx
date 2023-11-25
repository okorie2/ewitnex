/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import DashboardLayout from "pages/dashboard/layout/layout";
import Image from "next/image";
import ManageEventTab from "./[tab]";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEventById } from "redux/event/thunkAction";
import DeleteEventModal from "@/components/modals/programModal/deleteEventModal";

const ManageSingleEvent = () => {
  const [activeMenuBar, setActiveMenuBar] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const router = useRouter();
  let { id } = router.query;
  useEffect(() => {
    if (id) {
      sessionStorage.setItem("eventId", JSON.stringify(id));
    }
  }, [id]);
  const activeTab = router.query?.tab || ("overview" as string | undefined);
  const isTablet = useMediaQuery("(max-width: 780px)");
  const { loading, event } = useAppSelector(({ event }) => event);
  const dispatch = useAppThunkDispatch();

  useEffect(() => {
    const eventId = JSON.parse(sessionStorage.getItem("eventId") || "");
    dispatch(getEventById(eventId?.toString() || ""));
  }, []);

  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);
  return (
    <>
      <DeleteEventModal
        isOpen={deleteModal}
        onRequestClose={handleDeleteModal}
        eventName={event.EventTitle}
      />
      <DashboardLayout>
        <div
          css={{
            borderLeft: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
            marginLeft: isTablet ? "" : "1.5rem",
            height: "100%",
            width: isTablet ? "100vw" : "",
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
              <div
                css={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
              >
                <Link href="/dashboard/manager">
                  <Image
                    src="/assets/svgs/arrow-left.svg"
                    alt=""
                    width={22}
                    height={15}
                  />
                </Link>
                <h2>{event.EventTitle || ""}</h2>
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
                        },
                      }}
                      onMouseEnter={() => setActiveMenuBar("event")}
                      onMouseLeave={() => setActiveMenuBar("")}
                    >
                      {activeMenuBar === "event" ? (
                        <Image
                          src={"/assets/svgs/brochure-purple.svg"}
                          alt={""}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src={"/assets/svgs/brochure.svg"}
                          alt={""}
                          width={20}
                          height={20}
                        />
                      )}
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
                        },
                      }}
                      onMouseEnter={() => setActiveMenuBar("edit")}
                      onMouseLeave={() => setActiveMenuBar("")}
                    >
                      {activeMenuBar === "edit" ? (
                        <Image
                          src={"/assets/svgs/pencil_purple.svg"}
                          alt={""}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src={"/assets/svgs/pencil_.svg"}
                          alt={""}
                          width={20}
                          height={20}
                        />
                      )}
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
                        },
                      }}
                      onMouseEnter={() => setActiveMenuBar("cancel")}
                      onMouseLeave={() => setActiveMenuBar("")}
                      onClick = {handleDeleteModal}
                    >
                      {activeMenuBar === "cancel" ? (
                        <Image
                          src={"/assets/svgs/trash-light-purple.svg"}
                          alt={""}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Image
                          src={"/assets/svgs/trash-light.svg"}
                          alt={""}
                          width={20}
                          height={20}
                        />
                      )}
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
                display: isTablet ? "" : "grid",
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
                      display: isTablet ? "flex" : "",
                    }}
                  >
                    {manageEventTabs.map((item) => (
                      <TabNav
                        key={item}
                        isActive={Boolean(
                          activeTab === item.split(" ").join("")
                        )}
                        tab={item}
                        id={id?.toString()}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <ManageEventTab id={id?.toString() || ""} />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ManageSingleEvent;

const manageEventTabs = ["Overview", "Ticket Sales", "Attendees"];

const TabNav: React.FC<{
  isActive: boolean;
  tab: string;
  id: string | undefined;
}> = ({ isActive, tab, id }) => {
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <li
      css={{
        fontSize: isTablet ? "1rem" : "1.125rem",
        fontWeight: isActive ? (isTablet ? "600" : "500") : "500",
        cursor: "pointer",
        width: "100%",
        color: isActive ? "#000" : "#AEAEAE",
        borderLeft: isTablet
          ? ""
          : isActive
          ? `2px solid ${"#000"}`
          : `2px solid ${"#fff"}`,
        borderBottom: isTablet
          ? isActive
            ? `3px solid ${"#000"}`
            : `3px solid ${"#AEAEAE"}`
          : "",
      }}
      key={tab}
    >
      <Link
        href={`/dashboard/manager/${[id]}?tab=${tab.split(" ").join("")}`}
        css={{
          display: "inline-block",
          width: "100%",
          padding: isTablet ? "1rem 0rem" : "0.7rem 1.5rem",
          textAlign: isTablet ? "center" : "left",
        }}
      >
        {tab}
      </Link>
    </li>
  );
};
