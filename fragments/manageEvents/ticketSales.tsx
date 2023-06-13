/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { theme, screen } from "styles/theme";
import Image from "next/image";
import TicketSalesTable from "@/components/tables/ticketSales";

const TicketSales = () => {
  const [activeView, setActiveView] = useState("All");
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
          justifyContent: "space-between"
        }}
      >
        <div
          css={{
            borderRadius: "24px",
            backgroundColor: theme.background.secondary2,
            display: "grid",
            fontSize: "14px",
            padding: "0.3rem",
            color: theme.color.grey,
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
        <div css = {{
          display: "flex",
          width: "45%",
          justifyContent: "space-between",
          paddingRight: "2%"
        }}>
        <div
          css={{
            borderRadius: "66px",
            backgroundColor: theme.background.secondary,
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
              backgroundColor: theme.background.secondary,
              height: "85%",
              fontSize: "0.9rem",
              fontWeight: "400",
              color: theme.shadow.secondary,
            }}
          />
        </div>
        <div
            css={{
              borderRadius: "50%",
              width: "12%",
              backgroundColor: theme.background.secondary,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.7,
            }}
          >
            <Image
              src={"/assets/svgs/filter.svg"}
              alt={""}
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
      <TicketSalesTable />
      <div css = {{height: "2rem"}}></div>
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
        backgroundColor: isActive ? theme.background.lightGreen : "",
        color: isActive ? "white" : "",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {view}({amount})
    </div>
  );
};
