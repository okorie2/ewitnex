/** @jsxImportSource @emotion/react */

import React from "react";
import { theme, screen } from "styles/theme";
import Image from "next/image";
import OverviewChart from "@/components/charts/overviewChart";

const EventOverview = () => {
  return (
    <div>
      <div css={{ width: "100%", height: "166px", position: "relative" }}>
        <Image
          src="/assets/pngs/devFestAba2.png"
          alt="header-img"
          css={{
            borderRadius: " 0 0 10px 10px",
            objectFit: "cover",
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
            backgroundColor: theme.common.black,
            opacity: "50%",
            color: theme.common.white,
            borderRadius: " 0 0 10px 10px",
          }}
        ></div>
        <div
          css={{
            width: "100%",
            height: "166px",
            position: "absolute",
            color: theme.common.white,
            borderRadius: " 0 0 10px 10px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <h3>DevFest Aba</h3>
          <p css={{ fontSize: "0.75rem" }}>Sat, Nov. 25, 2022</p>
          <p css={{ fontSize: "0.75rem" }}> 10:00 AM - 2:00 PM</p>
        </div>
      </div>
      <div css={{ padding: "1.5rem" }}>
        <div css={{ display: "flex", gap: "2.5rem" }}>
          <div>
            <p css={{ fontSize: "0.875rem", fontWeight: "500" }}>Invite Link</p>
            <div
              css={{
                fontSize: "0.875rem",
                backgroundColor: theme.background.secondary,
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
              <p>https:ewitnex.com/devfest-aba-id-tec542445</p>
              <Image
                src="/assets/svgs/copy2.svg"
                alt=""
                width={11.13}
                height={12.6}
              />
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
                backgroundColor: theme.background.secondary,
                borderRadius: "5px",
                width: "fit-content",
                marginInline: "auto",
                paddingInline: "0.5rem",
                marginTop: "0.2rem",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <p>tec542445</p>
              <Image
                src="/assets/svgs/copy2.svg"
                alt=""
                width={11.13}
                height={12.6}
              />
            </div>
          </div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "2rem",
          }}
        >
          <div
            css={{
              border: "none",
              width: "22%",
              height: "174px",
              boxShadow: `0px 0px 5px ${theme.shadow.border3}`,
              borderRadius: "10px",
              padding: "1rem",
              display: "grid",
              gridTemplateRows: "30% auto",
              gap: "1rem",
            }}
          >
            <div>
              <p css={{ fontSize: "0.875rem", color: theme.common.black }}>
                To be paid out
              </p>
              <p
                css={{
                  fontSize: "1rem",
                  color: theme.color.lightGreen,
                  fontWeight: "bold",
                }}
              >
                5,050 USD
              </p>
            </div>
            <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
              Payment will be processed to your wallet 3-5 working days after
              event has been completed.
            </p>
          </div>
          <div
            css={{
              border: "none",
              width: "22%",
              height: "174px",
              boxShadow: `0px 0px 5px ${theme.shadow.border3}`,
              borderRadius: "10px",
              padding: "1rem",
              display: "grid",
              gridTemplateRows: "30% auto",
              gap: "1rem",
            }}
          >
            <div>
              <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
                Event Revenue (inc, VAT)
              </p>
              <p
                css={{
                  fontSize: "1rem",
                  color: theme.color.negative,
                  fontWeight: "bold",
                }}
              >
                6,150 USD
              </p>
            </div>
            <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
              Sum of all revenue across your publish events.
            </p>
          </div>
          <div
            css={{
              border: "none",
              width: "22%",
              height: "174px",
              boxShadow: `0px 0px 5px ${theme.shadow.border3}`,
              borderRadius: "10px",
              padding: "1rem",
              display: "grid",
              gridTemplateRows: "30% auto",
              gap: "1rem",
            }}
          >
            <div>
              <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
                Total Sold Tickets
              </p>
              <p
                css={{
                  fontSize: "1rem",
                  color: theme.common.black,
                  fontWeight: "bold",
                }}
              >
                48/100
              </p>
            </div>
            <div css={{ fontSize: "0.75rem", color: theme.color.grey }}>
              <p>VIP Tickets: 10/20</p>
              <p>Regular Tickets: 20/50</p>
              <p>Table of 5 Tickets: 3/10</p>
            </div>
          </div>
          <div
            css={{
              border: "none",
              width: "22%",
              height: "174px",
              boxShadow: `0px 0px 5px ${theme.shadow.border3}`,
              borderRadius: "10px",
              display: "grid",
              gap: "0.5rem",
            }}
          >
            <div css={{ padding: "1rem" }}>
              <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
                Event Views
              </p>
              <p
                css={{
                  fontSize: "1rem",
                  color: theme.common.black,
                  fontWeight: "bold",
                }}
              >
                200
              </p>
            </div>
            <ul
              css={{
                border: "none",
                borderBottom: `1px solid ${theme.color.grey2}`,
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
                <p css={{ fontSize: "0.75rem", color: theme.color.grey }}>
                  Attendees
                </p>
                <p
                  css={{
                    fontSize: "1rem",
                    color: theme.common.black,
                    fontWeight: "bold",
                  }}
                >
                  120
                </p>
              </div>
              <Image
                src="/assets/svgs/arrow-Right.svg"
                alt=""
                width={17.51}
                height={9.84}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 css={{ color: theme.color.tertiary }}>Ticket Trend</h3>
          <div
            css={{
              position: "relative",
              width: "100%",
              height: "483px",
              marginBlock: "1rem",
            }}
          >
            {/* <Image src="/assets/pngs/chart.png" alt="" fill /> */}
            <div css = {{
              // border: `1px solid ${theme.shadow.border2}`,
              boxShadow: `0px 0px 5px ${theme.shadow.border3}`,
              padding: "1rem",
            }}>
              <div css={{ display: "flex", gap: "2%", marginBottom: "2rem" }}>
                <div>
                  <div
                    css={{
                      fontSize: "14px",
                      color: theme.color.grey,
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
                        background: theme.color.lightGreen,
                        marginRight: "0.5rem",
                      }}
                    ></div>
                    <p>Sold</p>
                  </div>
                  <p css={{ fontWeight: "bold" }}>N254,000</p>
                </div>
                <div>
                  <div
                    css={{
                      fontSize: "14px",
                      color: theme.color.grey,
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
                        background: theme.color.negative,
                        marginRight: "0.5rem",
                      }}
                    ></div>
                    <p>Refunded</p>
                  </div>
                  <p css={{ fontWeight: "bold" }}>N54,000</p>
                </div>
                <div>
                  <div
                    css={{
                      fontSize: "14px",
                      color: theme.color.grey,
                      fontWeight: "550",
                    }}
                  >
                    Net Amount
                  </div>
                  <p css={{ fontWeight: "bold" }}>N200,000</p>
                </div>
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "80% 20%",
                  paddingInline: "4%",
                }}
              >
                <OverviewChart />
                <div
                  css={{
                    padding: "10%",
                    fontWeight: "600",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1%",
                    color: theme.common.black,
                  }}
                >
                  <p>VIP: 10/25</p>
                  <p>Regular: 30/60</p>
                  <p>Table of 5: 3/15</p>

                  <div css={{ marginTop: "2rem" }}>
                    <p css={{ color: theme.color.grey, fontSize: "13px" }}>
                      Total Tickets Sold
                    </p>
                    <p css={{ fontWeight: "bold" }}>48/100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;
