/** @jsxImportSource @emotion/react */
import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const WalletTransactions = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        borderBottom: "1px solid #AEAEAE",
        gap: "14px",
        paddingBottom: isTablet ? "1rem":"0.5rem",
        height:isTablet ? "60vh":"inherit"
      }}
    >
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"credit"}
          amount={"50,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"debit"}
          amount={"5,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"credit"}
          amount={"5,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"debit"}
          amount={"5,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"credit"}
          amount={"5,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"debit"}
          amount={"5,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Transaction
          day={"May 4th 2022"}
          title={"DevFest Aba"}
          description={"Event Ticket Payout"}
          type={"credit"}
          amount={"5,050"}
          bank={"First Bank"}
          account={"1234567890"}
        />
        <Box height = {10}/>
      </div>
  );
};

export default WalletTransactions;

const Transaction = ({
  day,
  type,
  amount,
  title,
  description,
  bank,
  account,
}: {
  day: string;
  title: string;
  description: string;
  type: "credit" | "debit";
  amount: string;
  bank: string;
  account: string;
}) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "15% 60% 25%",
        height: "64px",
        marginBlock: "1rem",
      }}
    >
      <div
        css={{
          background: "#e4e4e4",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "column",
          paddingBlock: "4%",
          color: "#707070",
          fontSize: "0.75rem",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <p>{day.split(" ")[0]}</p>
        <p css={{ fontSize: "1rem" }}>0{day.split(" ")[1].split("")[0]}</p>
        <p>{day.split(" ")[2]}</p>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingInline: "5%",
          fontSize:isTablet ? "0.8rem":""
        }}
      >
        <p css={{ letterSpacing: "0.32px" }}>
          <span css={{ fontWeight: "bold" }}>{title}</span>
          <span> {description}</span>
        </p>
        <p css={{ fontSize: "0.75rem", color: "#707070" }}>
          <span css={{ fontWeight: "bold" }}>{bank} | NGN</span>
          <span>
            {"  "}
            {account}
          </span>
        </p>
      </div>
      <div>
        <p
          css={{
            color: type === "credit" ? "#00D9B7" : "#F05E78",
            fontSize: isTablet ? "0.7rem":"0.8rem",
            letterSpacing: "0.28px",
            fontWeight: "bold",
          }}
        >
          <span>{type === "credit" ? "+" : "-"}</span>
          {amount} NGN
        </p>
      </div>
    </div>
  );
};
