/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { H1 } from "styles/components/typography";
import { screen } from "styles/theme";
import Image from "next/image";

const AsAnAttendeeFragment = () => {
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
        paddingBlock: "5rem",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <p css = {{fontWeight: "600"}}>As An Attendee</p>
      <H1 size={"2.4rem"} color={"#000"} small>
        Discover Your Next Unforgettable <br /> <span css={{ color: "#00d9b7" }}>Event</span>{" "}
         With Ewitnex.
      </H1>
      <div css={{ width: "55%" }}>
        <p>
          Ewitnex offers a curated selection of exciting gatherings,
          conferences, concerts, and more, allowing you to easily find and
          attend the events that match your interests and passions.
        </p>
      </div>
      <div css = {{display: "flex", flexWrap: "wrap", gap: "0.8rem", width: "80%", justifyContent: "center", marginTop: "2rem"}}>
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
    const [seeAllHover, setSeeAllHover] = useState(false);
    return (
        <div
          css={{
            color: "#7C35AB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontFamily: '"Poppins", sans-serif',
            height: "54px",
            fontSize: "0.85rem",
            borderRadius: "27px",
            paddingInline: "2.5%",
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
    )
}