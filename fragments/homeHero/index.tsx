/** @jsxImportSource @emotion/react */

import { Button } from "styles/components/button";
import { H1 } from "styles/components/typography";
import Image from "next/image";
import Link from "next/link";
import { screen } from "styles/theme";

const HomeHero = () => {
  return (
    <div
      css={{
        height: "420px",
        backgroundColor: "#7C35AB33",
        paddingInline: "3%",
        marginTop: "5rem",
        display: "grid",
        fontFamily: '"Poppins", sans-serif',
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div css={{
        display: "flex",
        flexDirection: "column",
        marginTop: "3rem"
      }}>
        <div>
        <H1
          small
          css={{
            display: "flex",
            gap: "11px",
            color: "#7C35AB",
            alignItems: "center",
            textAlign: "left",
            [screen.desktop]: {
              gap: "2px",
            },
          }}
        >
          Socially
          <span css={{ color: "#000" }}>Connected.</span> Paperless.
        </H1>
        <H1
          small
          css={{
            display: "flex",
            gap: "11px",
            color: "#000",
            alignItems: "center",
            textAlign: "left",
            [screen.desktop]: {
              gap: "2px",
            },
          }}
        >
          Unforgettable Events
        </H1>
        </div>
        <p css={{ letterSpacing: "0.32px", fontSize: "15px" , marginTop: "1rem", marginBottom: "2rem"}}>
          We believe that events should be socially connected, eco-friendly, and{" "}
          <br /> truly memorable. Allowing you to seamlessly plan, organize, and
          engage <br /> with your attendees. Discover the power of a paperless
          future, where <br /> technology meets community, and events become
          unforgettable
        </p>
        <Link href = "/auth/signup" style = {{width: "13rem"}}>
        <Button
        css={{
          width: "13rem",
          [screen.desktop]: { width: "12rem" },
          [screen.lg]: {},
        }}
      >
        Get Started
      </Button>
      </Link>
      </div>
      <div css = {{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
        <div css ={{textAlign: "right"}}>
            <Image  src = "/assets/pngs/heroimg1.png" alt = "wedding event" height= {276} width = {177} style = {{borderRadius: "20px", marginTop: "8rem", marginRight: "-14%"}}/>
        </div>
        <div css ={{textAlign: "right", marginRight: "-10%"}}>
        <Image  src = "/assets/pngs/heroimg2.png" alt = "lagos carnival" height= {236} width = {177} quality = {100} style = {{borderRadius: "20px", marginTop: "3.5rem", objectFit: "cover"}}/>
        <Image  src = "/assets/pngs/heroimg3.png" alt = "event hall" height= {175} width = {177} quality = {100} style = {{borderRadius: "20px", marginTop: "0.3rem", objectFit: "cover"}}/>
        </div>
        <div css ={{textAlign: "right"}}>
        <Image  src = "/assets/pngs/heroimg4.png" alt = "lagos carnival" height= {256} width = {177} quality = {100} style = {{borderRadius: "20px", marginTop: "1.5rem", objectFit: "cover"}}/>
        <Image  src = "/assets/pngs/heroimg5.png" alt = "lagos carnival" height= {256} width = {177} quality = {100} style = {{borderRadius: "20px", marginTop: "0.33rem", objectFit: "cover"}}/>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
