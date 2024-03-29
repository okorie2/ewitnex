/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Image from "next/image";
import { H3, H4 } from "styles/components/typography";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

interface IFeedsCard {
  img: string;
  label: string;
  title: string;
  id: string;
  date: string;
  location: string;
  priceRange: string;
  attendees: string;
  organizer: string;
  favourite?: boolean;
  width?: string;
  eventCode:string
}

const FeedsCard = (props: IFeedsCard) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [_favourite, setFavourite] = useState(props.favourite);

  return (
    <div
      css={{
        height: isTablet ? "256px" : "237px",
        minWidth: isTablet ? "73vw" : "326px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "#00000029 0px 0px 5px",
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        marginLeft: "65.5px",
        position: "relative",
        marginTop: "0.5rem",
      }}
    >
      <div css={{ position: "absolute", left: "-65.5px", top: "-1rem" }}>
        <div
          css={{
            width: isTablet ? "110px" : "131px",
            height: "139px",
            position: "relative",
          }}
        >
          <Image
            src={props.img}
            alt="card_img"
            css={{ borderRadius: "10px", objectFit: "cover" }}
            fill
          />
        </div>
        <div
          css={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          <div
            css={{
              backdropFilter: "brightness(50%) ",
              fontSize: "12px",
              borderRadius: "5px",
              fontWeight: 500,
              textTransform: "capitalize",
              backgroundColor: "#fff",
              opacity: "75%",
              padding: "0.1rem 0.5rem",
            }}
          >
            {props.label}
          </div>
        </div>
      </div>
      <div></div>
      <div
        css={{
          display: isTablet ? "flex" : "block",
          flexDirection: "column",
          padding: isTablet ? "4% 3%" : "4% 6%",
          marginLeft:isTablet ? "-5%" : "-3%",
          gap: isTablet ? "0.2rem" : "",
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent:"space-between",
            width:"100%"
          }}
        >
          <Link href={`/dashboard/programs/${props.id}`}>
            <h4 css={{ width: isTablet ? "" : "100%" }}>
              {props.title.slice(0, 37)} {props.title.length > 37 && "..."}
            </h4>
          </Link>
          <div
            css={{
              height: "41px",
              width: "41px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              zIndex: "1",
            }}
            onClick={() => setFavourite(!_favourite)}
          >
            {_favourite ? (
              <Image
                src="/assets/svgs/filled-love.svg"
                alt="card_img"
                width={20.98}
                height={19.39}
              />
            ) : (
              <Image
                src="/assets/svgs/love.svg"
                alt="card_img"
                width={20.98}
                height={19.39}
              />
            )}
          </div>
        </div>
        <Link href={`/dashboard/programs/${props.id}`}>
          <p
            css={{
              color: "#AEAEAE",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            {props.eventCode.slice(0,12)}
          </p>
          <H4 color="#F05E78" css={{ marginTop: "0.5rem" }}>
            {props.date}
          </H4>
          <H4 css={{ width: "80%" }}> {props.location}</H4>
          <div
            css={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginTop: "0.5rem",
              color: "#707070",
              fontWeight: 500,
              fontSize: "0.75rem",
            }}
          >
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
              }}
            >
              <span>
                <Image
                  src="/assets/svgs/range.svg"
                  alt="card_img"
                  width={19}
                  height={19}
                />
              </span>
              <p>{props.priceRange}</p>
            </div>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem",
              }}
            >
              <span>
                <Image
                  src="/assets/svgs/people.svg"
                  alt="card_img"
                  width={19}
                  height={19}
                />
              </span>
              <p>{props.attendees} Attending</p>
            </div>
          </div>
          <p
            css={{
              marginTop: "0.5rem",
              color: "#707070",
              fontWeight: 500,
              fontSize: "0.75rem",
            }}
          >
            Organized by
          </p>
          <H4>{props.organizer}</H4>
        </Link>
      </div>
    </div>
  );
};

export default FeedsCard;
