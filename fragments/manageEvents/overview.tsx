/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { screen } from "styles/theme";
import Image from "next/image";
import OverviewChart from "@/components/charts/overviewChart";
import CopySnackBar from "@/components/snackbars/copied";
import Link from "next/link";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { getEventById } from "redux/event/thunkAction";
import dayjs from "dayjs";
import { getTicketQuantity } from "utitlities/commonHelpers/getTicketQiuantity";

const EventOverview = ({ id }: { id: string }) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [copySnackBarOpen, setCopySnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleCopyClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setCopySnackBarOpen(false);
  };

  const handleCopy = async (textToCopy: string, alert: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(textToCopy);
    } else {
      document.execCommand("copy", true, textToCopy);
    }
    setCopySnackBarOpen(true);
    setMessage(alert);
  };

  const { loading, event } = useAppSelector(({ event }) => event);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    console.log(id);
    dispatch(getEventById(id?.toString() || ""));
  }, [id]);
  return (
    <>
      <CopySnackBar
        open={copySnackBarOpen}
        message={message}
        handleClose={handleCopyClose}
      />
      <div>
        <div css={{ width: "100%", height: "166px", position: "relative" }}>
          <Image
            src="/assets/pngs/devFestAba2.png"
            alt="header-img"
            css={{
              borderRadius: isTablet ? "0px" : " 0 0 10px 10px",
              objectFit: isTablet ? "fill" : "cover",
              objectPosition: "center",
              zIndex: "-1",
            }}
            fill
          />
          <div
            css={{
              width: "100%",
              height: "166px",
              position: "absolute",
              backgroundColor: "#000",
              opacity: "50%",
              color: "#fff",
              borderRadius: isTablet ? "0px" : " 0 0 10px 10px",
            }}
          ></div>
          <div
            css={{
              width: "100%",
              height: "166px",
              position: "absolute",
              color: "#fff",
              borderRadius: " 0 0 10px 10px",
              display: "grid",
              placeContent: "center",
              textAlign:"center"
            }}
          >
            <h3>{event.EventTitle}</h3>
            <p css={{ fontSize: "0.75rem" }}>
              {`${dayjs(event.location?.startDate).toString()}`.includes(
                "Invalid"
              )
                ? "Time: TBD"
                : `${
                    dayjs(event.location?.startDate).toString().split(" ")[0]
                  } ${
                    dayjs(event.location?.startDate).toString().split(" ")[1]
                  } ${
                    dayjs(event.location?.startDate).toString().split(" ")[2]
                  }. ${
                    dayjs(event.location?.startDate).toString().split(" ")[3]
                  }`}
            </p>
            <p css={{ fontSize: "0.75rem" }}>
              {" "}
              {`${
                `${dayjs(event.location?.startDate).toString()}`.includes(
                  "Invalid"
                )
                  ? "Date: TBD"
                  : `${dayjs(event.location?.startDate).format("hh:mm A")}`
              }${
                dayjs(event.location?.endDate)
                  .format("hh:mm A")
                  .toString()
                  .includes("Invalid")
                  ? ""
                  : `-${dayjs(event.location?.endDate).format("hh:mm A")}`
              }`}
            </p>
          </div>
        </div>
        <div css={{ padding: isTablet ? "1rem" : "1.5rem" }}>
          <div
            css={{
              display: isTablet ? "grid" : "flex",
              gap: isTablet ? "1.5rem" : "2.5rem",
            }}
          >
            <div>
              <p css={{ fontSize: "0.875rem", fontWeight: "500" }}>
                Invite Link
              </p>
              <div
                css={{
                  fontSize: "0.875rem",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "5px",
                  width: "fit-content",
                  paddingInline: "0.3rem",
                  marginTop: "0.2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <p>{`https:ewitnex.com/${event._id.split("").slice(0, 8).join("")}`}</p>
                <div
                  css={{ cursor: "pointer" }}
                  onClick={() =>
                    handleCopy(
                      `https:ewitnex.com/${event._id}`,
                      "Invite Link Copied!"
                    )
                  }
                >
                  <Image
                    src="/assets/svgs/copy2.svg"
                    alt=""
                    width={11.13}
                    height={12.6}
                  />
                </div>
              </div>
            </div>
            <div>
              <p
                css={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Event ID
              </p>
              <div
                css={{
                  fontSize: "0.875rem",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "5px",
                  width: "fit-content",
                  marginInline: isTablet ? "" : "auto",
                  paddingInline: "0.5rem",
                  marginTop: isTablet ? "0.3rem" : "0.2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <p>{event.eventCode.split("").slice(0, 12).join("")}</p>
                <div
                  css={{ cursor: "pointer" }}
                  onClick={() => handleCopy(`${event.eventCode}`, "Event ID Copied!")}
                >
                  <Image
                    src="/assets/svgs/copy2.svg"
                    alt=""
                    width={11.13}
                    height={12.6}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            css={{
              display: isTablet ? "grid" : "flex",
              justifyContent: "space-between",
              marginBlock: "2rem",
              gridTemplateColumns: "1fr 1fr",
              gap: isTablet ? "1rem" : "",
            }}
          >
            <div
              css={{
                border: "none",
                width: isTablet ? "100%" : "22%",
                height: "174px",
                boxShadow: `0px 0px 5px ${"#00000029"}`,
                borderRadius: "10px",
                padding: "1rem",
                display: "grid",
                gridTemplateRows: "30% auto",
                gap: "1rem",
              }}
            >
              <div>
                <p css={{ fontSize: "0.875rem", color: "#000" }}>
                  To be paid out
                </p>
                <p
                  css={{
                    fontSize: "1rem",
                    color: "#00D9B7",
                    fontWeight: "bold",
                  }}
                >
                  0 USD
                </p>
              </div>
              <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                Payment will be processed to your wallet 3-5 working days after
                event has been completed.
              </p>
            </div>
            <div
              css={{
                border: "none",
                width: isTablet ? "100%" : "22%",
                height: "174px",
                boxShadow: `0px 0px 5px ${"#00000029"}`,
                borderRadius: "10px",
                padding: "1rem",
                display: "grid",
                gridTemplateRows: "30% auto",
                gap: "1rem",
              }}
            >
              <div>
                <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                  Event Revenue (inc, VAT)
                </p>
                <p
                  css={{
                    fontSize: "1rem",
                    color: "#F05E78",
                    fontWeight: "bold",
                  }}
                >
                  0 USD
                </p>
              </div>
              <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                Sum of all revenue across your publish events.
              </p>
            </div>
            <div
              css={{
                border: "none",
                width: isTablet ? "100%" : "22%",
                height: "174px",
                boxShadow: `0px 0px 5px ${"#00000029"}`,
                borderRadius: "10px",
                padding: "1rem",
                display: "grid",
                gridTemplateRows: "30% auto",
                gap: "1rem",
              }}
            >
              <div>
                <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                  Total Sold Tickets
                </p>
                <p
                  css={{
                    fontSize: "1rem",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {`0/${getTicketQuantity(event)}`}
                </p>
              </div>
              <div css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                <p>VIP Tickets: 0/0</p>
                <p>Regular Tickets: 0/0</p>
                <p>Table of 5 Tickets: 0/0</p>
              </div>
            </div>
            <div
              css={{
                border: "none",
                width: isTablet ? "100%" : "22%",
                height: "174px",
                boxShadow: `0px 0px 5px ${"#00000029"}`,
                borderRadius: "10px",
                display: "grid",
                gap: "0.5rem",
              }}
            >
              <div css={{ padding: "1rem" }}>
                <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                  Event Views
                </p>
                <p
                  css={{
                    fontSize: "1rem",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  0
                </p>
              </div>
              <ul
                css={{
                  border: "none",
                  borderBottom: `1px solid #E4E4E4`,
                }}
              />
              <div
                css={{
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
                    Attendees
                  </p>
                  <p
                    css={{
                      fontSize: "1rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    0
                  </p>
                </div>
                <Link href="http://localhost:3000/dashboard/manager/tec542445?tab=Attendees">
                  <Image
                    src="/assets/svgs/arrow-Right.svg"
                    alt=""
                    width={17.51}
                    height={9.84}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 css={{ color: "#707070" }}>Ticket Trend</h3>
            <div
              css={{
                position: "relative",
                width: "100%",
                marginBlock: "1rem",
              }}
            >
              {/* <Image src="/assets/pngs/chart.png" alt="" fill /> */}
              <div
                css={{
                  // border: `1px solid ${"#C0C0C0"}`,
                  boxShadow: `0px 0px 5px ${"#00000029"}`,
                  padding: "1rem",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    gap: "2%",
                    marginBottom: "2rem",
                    justifyContent: isTablet ? "space-between" : "",
                  }}
                >
                  <div>
                    <div
                      css={{
                        fontSize: "14px",
                        color: "#AEAEAE",
                        fontWeight: "550",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1%",
                      }}
                    >
                      <div
                        css={{
                          height: "5px",
                          width: "25px",
                          borderRadius: "15px",
                          background: "#00D9B7",
                          marginRight: "0.5rem",
                        }}
                      ></div>
                      <p>Sold</p>
                    </div>
                    <p css={{ fontWeight: "bold" }}>N0</p>
                  </div>
                  <div>
                    <div
                      css={{
                        fontSize: "14px",
                        color: "#AEAEAE",
                        fontWeight: "550",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1%",
                      }}
                    >
                      <div
                        css={{
                          height: "5px",
                          width: "25px",
                          borderRadius: "15px",
                          background: "#F05E78",
                          marginRight: "0.5rem",
                        }}
                      ></div>
                      <p>Refunded</p>
                    </div>
                    <p css={{ fontWeight: "bold" }}>N0</p>
                  </div>
                  <div>
                    <div
                      css={{
                        fontSize: "14px",
                        color: "#AEAEAE",
                        fontWeight: "550",
                      }}
                    >
                      Net Amount
                    </div>
                    <p css={{ fontWeight: "bold" }}>N0</p>
                  </div>
                </div>
                <div
                  css={{
                    display: "grid",
                    gridTemplateColumns: isTablet ? "1fr" : "80% 20%",
                    overflowX: "auto",
                    "::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  <div css={{ width: isTablet ? "100vh" : "" }}>
                    <OverviewChart />
                  </div>
                  <div
                    css={{
                      padding: isTablet ? "5%" : "10%",
                      fontWeight: "600",
                      display: "flex",
                      flexDirection: isTablet ? "row" : "column",
                      gap: isTablet ? "2rem" : "1%",
                      color: "#000",
                    }}
                  >
                    <div css={{ display: "grid", gap: "0.5rem" }}>
                      <p>VIP: 0/0</p>
                      <p>Regular: 0/0</p>
                      <p>Table of 5: 0/0</p>
                    </div>
                    <div css={{ marginTop: isTablet ? "" : "2rem" }}>
                      <p css={{ color: "#AEAEAE", fontSize: "13px" }}>
                        Total Tickets Sold
                      </p>
                      <p css={{ fontWeight: "bold" }}>{`0/${getTicketQuantity(event)}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventOverview;
