/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

const EventSpeakers = () => {
  const router = useRouter();
  const loggedIn = router.pathname === "/dashboard/programs/[id]";
  const isTablet = useMediaQuery("(max-width: 900px)");

  return (
    <div
      css={{
        boxShadow: `0px 0px 10px ${"#0000001A"}`,
        color: "#000",
        borderRadius: "10px",
        padding: "1.25rem 1.25rem 2rem",
        width: `${isTablet ? "100vw":loggedIn ? "70%" : "60%"}`,
        marginInline: "auto",
        position: "relative",
        top: isTablet ? "0":"3.5rem",
        height: `${loggedIn ? "70vh" : "60vh"}`,
        marginBottom:isTablet ? "-5rem" : "",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        div: {
          display:isTablet ? "flex" : "block",
          flexDirection:"column",
          alignItems:'center'
        }
      }}
    >
      <div>
        <div
          css={{
            width: "185px",
            height: "185px",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <Image src="/assets/pngs/speaker_2.png" alt="speaker-img" fill />
        </div>
        <div css={{ marginTop: "0.7rem" }}>
          <h4 css={{ fontSize: "1rem", fontWeight: "700" }}>John Bosko</h4>
          <p
            css={{
              fontSize: "0.875rem",
              marginTop: "0.3rem",
              fontWeight: "500",
            }}
          >
            Software Engineer
          </p>
        </div>
        <p
          css={{
            marginTop: "0.5rem",
            lineHeight: "21px",
            fontSize: "0.875rem",
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p
          css={{
            lineHeight: "21px",
            fontSize: "0.875rem",
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo
        </p>
      </div>
      <hr
        css={{
          borderTop: `1px solid ${"#707070"}`,
          marginBlock: "1.5rem",
          opacity: "0.5",
        }}
      />
      <div>
        <div
          css={{
            width: "185px",
            height: "185px",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <Image src="/assets/pngs/speaker_3.png" alt="speaker-img" fill />
        </div>
        <div css={{ marginTop: "0.7rem" }}>
          <h4 css={{ fontSize: "1rem", fontWeight: "700" }}>John Bosko</h4>
          <p
            css={{
              fontSize: "0.875rem",
              marginTop: "0.3rem",
              fontWeight: "500",
            }}
          >
            Software Engineer
          </p>
        </div>
        <p
          css={{
            marginTop: "0.5rem",
            lineHeight: "21px",
            fontSize: "0.875rem",
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo
        </p>
      </div>
    </div>
  );
};

export default EventSpeakers;
