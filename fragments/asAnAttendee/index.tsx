/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const AsAnAttendeeFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  const optionList = ["Wedding","Birthday", "Sports","Political", "Political","Cultural", "Trade", "Musical" ]
  return (
    <div
      css={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBlock: isTablet ? "4rem":"5rem",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <p css = {{fontWeight: "600"}}>As An Attendee</p>
      <H1 color={"#000"} small>
        Discover Your Next Unforgettable {!isTablet && <br />} <span css={{ color: "#00d9b7" }}>Event</span>{" "}
         With Ewitnex.
      </H1>
      <div css={{ width: isTablet ? "95%":"55%", fontSize: isTablet ? "0.85rem":"" }}>
        <p>
          Ewitnex offers a curated selection of exciting gatherings,
          conferences, concerts, and more, allowing you to easily find and
          attend the {isTablet && <br/>}events that match your interests and{isTablet && <br/>} passions.
        </p>
      </div>
      <div css = {{display: "flex", flexWrap: isTablet ? "nowrap":"wrap", gap: "0.8rem", width: "80%", justifyContent: isTablet ? "" : "center", marginTop: "2rem", overflowX:"auto", paddingBottom: "1rem"}}>
        {
            optionList.map((option, idx) => <Option key ={idx} name = {option}/>)
        }
      </div>
    </div>
  );
};

export default AsAnAttendeeFragment;

const Option = ({name}:{
    name:string
}) => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  const [seeAllHover, setSeeAllHover] = useState(false);
    return (
      <Link href= "/events" style = {{width: isTablet ? "":"12rem"}}>
        <div
          css={{
            width: isTablet ? "180px":"",
            color: "#7C35AB",
            display: "flex",
            alignItems: isTablet ? "" : "center",
            justifyContent: "space-around",
            fontFamily: '"Poppins", sans-serif',
            height: isTablet ? "":"54px",
            fontSize: "0.85rem",
            borderRadius: "27px",
            paddingInline: isTablet ? "1rem" : "2.5%",
            paddingBlock: isTablet ? "0.5rem": "" ,
            fontWeight: "500",
            cursor: "pointer",
            border: "1px solid #7C35AB",
            ":hover": {
              color: "#FFF",
              background: "#7C35AB",
            }
          }}
          onMouseEnter={() => setSeeAllHover(true)}
          onMouseLeave={() => setSeeAllHover(false)}
        >
          <p css = {{marginRight: "0.4rem"}}>{name} events</p>
          {seeAllHover ? (
            <Image
              src={"/assets/svgs/elbow-right-white.svg"}
              alt="right"
              width={20}
              height={24}
            />
          ) : (
            <Image
              src={"/assets/svgs/elbow-right-purple.svg"}
              alt="right"
              width={20}
              height={24}
            />
          )}
        </div>
        </Link>
    )
}