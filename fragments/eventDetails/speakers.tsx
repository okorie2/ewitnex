/** @jsxImportSource @emotion/react */ import React from "react";
import { theme } from "styles/theme";
import Image from "next/image";

const EventSpeakers = () => {
  return (
    <div
      css={{
        boxShadow: `0px 0px 10px ${theme.shadow.border4}`,
        color: theme.common.black,
        borderRadius: "10px",
        padding: "1.25rem 1.25rem 2rem",
        width: "60%",
        marginInline: "auto",
        position: "relative",
        top: "3.5rem",
        maxHeight: "60vh",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
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
      <ul
        css={{
          borderTop: `1px solid ${theme.shadow.tertiary}`,
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
