/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Image from "next/image";
import TicketSalesTable from "@/components/tables/ticketSales";

const TicketSales = () => {
  const [activeView, setActiveView] = useState("All");
  const [filterHovered, setFilterHovered] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);

  const handleClick = () => {
    setFilterClicked(!filterClicked);
  };
  return (
    <div
      css={{
        paddingRight: "2rem",
      }}
    >
      <div
        css={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          css={{
            borderRadius: "24px",
            backgroundColor: "#F2F7FB",
            display: "grid",
            fontSize: "14px",
            padding: "0.3rem",
            color: "#AEAEAE",
            gridTemplateColumns: "33% 33% 34%",
            width: "45%",
          }}
        >
          {ticketViewDetails.map((ticketView) => (
            <TicketView
              key={ticketView.view}
              view={ticketView.view}
              amount={ticketView.amount}
              isActive={Boolean(activeView === ticketView.view)}
              onClick={() => setActiveView(ticketView.view)}
            />
          ))}
        </div>
        <div
          css={{
            display: "flex",
            width: "45%",
            justifyContent: "space-between",
          }}
        >
          <div
            css={{
              borderRadius: "66px",
              backgroundColor: "#F5F5F5",
              width: "80%",
              height: "2.575rem",
              display: "flex",
              alignItems: "center",
              paddingLeft: "17px",
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
              placeholder="Search"
              type={"text"}
              css={{
                borderRadius: "66px",
                width: "100%",
                outline: "none",
                border: "none",
                backgroundColor: "#F5F5F5",
                height: "85%",
                fontSize: "0.9rem",
                fontWeight: "400",
              }}
            />
          </div>
          <div
            css={{
              borderRadius: "50%",
              width: "46px",
              backgroundColor: "#F2F7FB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={() => setFilterHovered(true)}
            onMouseLeave={() => setFilterHovered(false)}
            onClick={handleClick}
          >
            <Image
              src={"/assets/svgs/filter.svg"}
              alt={""}
              width={18}
              height={18}
            />
            {filterHovered && (
              <div
                css={{
                  background: "#F5F5F5",
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-0.5rem",
                  zIndex: 3,
                  padding: "1% 10%",
                  borderRadius: "5px",
                }}
              >
                <span css={{ fontSize: "12px" }}>Filter</span>
              </div>
            )}
            {filterClicked && (
              <div
                css={{
                  background: "#FFF",
                  position: "absolute",
                  top: "3rem",
                  left: "-4.1rem",
                  zIndex: 5,
                  display: "grid",
                  gap: "5px",
                  padding: "20% 20%",
                  borderRadius: "10px",
                  width: "7rem",
                  fontSize: "13px",
                  fontWeight: "500",
                   boxShadow: `0px 0px 5px ${"#00000029"}`,
                }}
              >
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>Recent</p>
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>An Hour Ago</p>
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>Yesterday</p>
                <p css = {{":hover": {fontWeight:"bold", color: "#7C35AB"}}}>Custom Time</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <TicketSalesTable />
      <div css={{ height: "2rem" }}></div>
    </div>
  );
};

export default TicketSales;

const ticketViewDetails = [
  {
    view: "All",
    amount: 102,
  },
  {
    view: "Attending",
    amount: 92,
  },
  {
    view: "Refunded",
    amount: 10,
  },
];

const TicketView: React.FC<{
  isActive: boolean;
  view: string;
  amount: number;
  onClick: () => void;
}> = ({ isActive, view, amount, onClick }) => {
  return (
    <div
      css={{
        borderRadius: "18px",
        padding: "0.5rem",
        textAlign: "center",
        backgroundColor: isActive ? "#00D9B7" : "",
        color: isActive ? "white" : "",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {view}({amount})
    </div>
  );
};
