/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import EventMessage from "@/components/messages/eventMessage";
import { useRouter } from "next/router";
import Image from "next/image";

const EventMessages = () => {
  const router = useRouter();
  const loggedIn = router.pathname === "/dashboard/programs/[id]";

  return (
    <div
      css={{
        boxShadow: `0px 0px 10px ${"#0000001A"}`,
        color: "#000",
        borderRadius: "10px",
        padding: "1rem 0",
        width: `${loggedIn ? "70%" : "60%"}`,
        marginInline: "auto",
        position: "relative",
        top: "3.5rem",
        height: `${loggedIn ? "70vh" : "60vh"}`,
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
          paddingInline: "1.25rem",
          height: "82%",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <EventMessage
          image="/assets/pngs/profile1.png"
          background={"#F5F5F5"}
          userName="Jiga Usaina"
          time="30m"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,"
          textColor={"#000"}
        />
        <EventMessage
          image="/assets/pngs/profilepic_2.png"
          background="#548AF9"
          userName="Blessed Onoriode"
          time="25m"
          text="This event is making sense, you people should keep it up!"
          textColor={"#fff"}
        />
        <EventMessage
          image="/assets/pngs/profilepic_3.png"
          background={"#F5F5F5"}
          userName="Franka Godbless"
          time="25m"
          text="This event is making sense, you people should keep it up!"
          textColor={"#000"}
        />
        <EventMessage
          image="/assets/pngs/speaker_2.png"
          background={"#F5F5F5"}
          userName="Jian Wilson"
          time="10m"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
          textColor={"#000"}
        />
        <EventMessage
          image="/assets/pngs/profilepic_2.png"
          background="#548AF9"
          userName="Blessed Onoriode"
          time="Now"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit"
          textColor={"#fff"}
        />
      </div>
      <hr
        css={{
          borderTop: `1px solid ${"#707070"}`,
          marginBlock: "1rem",
          opacity: "0.5",
        }}
      />
      <div css={{ paddingInline: "1.25rem" }}>
        {loggedIn && (
          <div
            css={{
              display: "flex",
              gap: "1.25rem",
              marginLeft: "auto",
              width: "93%",
            }}
          >
            <input
              type="text"
              css={{
                border: `1px solid ${"#E4E4E4"}`,
                color: "#000",
                borderRadius: "56px",
                padding: "0.75rem",
                backgroundColor: "#E4E4E4",
                height: "48px",
                width: "100%",
                fontSize: "0.875rem",
                fontFamily:"'Nunito', sans-serif"
              }}
            />
            <div
              css={{
                backgroundColor: "#7C35AB",
                width: "3rem",
                heigth: "3rem",
                borderRadius: "50%",
                display: "grid",
                placeContent: "center",
                cursor: "pointer",
              }}
            >
              <Image
                src="/assets/svgs/paper-plane.svg"
                alt=""
                width={22.83}
                height={21.88}
              />
            </div>
          </div>
        )}
        {!loggedIn && (
          <button
            type="button"
            css={{
              border: `1px solid ${"#707070"}`,
              color: "#fff",
              borderRadius: "56px",
              padding: "0.75rem",
              backgroundColor: "#707070",
              width: "100%",
              height: "48px",
              fontSize: "0.875rem",
            }}
          >
            <Link href="/auth/signin" css={{ color: "#00D9B7" }}>
              Sign in
            </Link>
            <span> to your account to join in the conversation</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventMessages;
