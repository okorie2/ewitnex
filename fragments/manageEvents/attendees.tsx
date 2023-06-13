/** @jsxImportSource @emotion/react */

import React from "react";
import { theme, screen } from "styles/theme";
import Image from "next/image";
import AttendeesTable from "@/components/tables/attendees";

const Attendees = () => {
  return (
    <div
      css={{
        paddingRight: "2rem",
      }}
    >
      <div
        css={{
          padding: "1.2rem",
          display: "grid",
          gridTemplateColumns: "27% 73%",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontWeight: "bold",
            paddingLeft: "1%",
          }}
        >
          <p>92</p>
          <p
            css={{
              color: theme.color.grey,
              fontWeight: 600,
            }}
          >
            Attending
          </p>
        </div>
        <div css ={{display: "flex", justifyContent: "space-between"}}>
          <div
            css={{
              borderRadius: "66px",
              backgroundColor: theme.background.secondary,
              width: "50%",
              height: "2.825rem",
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
                fontSize: "1rem",
                fontWeight: "400",
                color: theme.shadow.secondary,
              }}
            />
          </div>
          <div
            css={{
              borderRadius: "50%",
              width: "6.5%",
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
              width={20}
              height={20}
            />
          </div>
          <div css = {{
            backgroundColor: theme.background.primary,
            color: "white",
            width: "30%",
            padding: "0.75%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize:"13px"
          }}>
            Message Attendees
          </div>
        </div>
      </div>
      <AttendeesTable />
      <div css = {{height: "2rem"}}></div>
    </div>
  );
};

export default Attendees;
