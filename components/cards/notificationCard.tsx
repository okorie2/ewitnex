/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";

interface INotificationCard {
  uploaded: string;
  type: "message" | "action";
  actionType?: "Follow Back" | "Follow" | "View Receipt";
  messageType:
    | "witness"
    | "gainedFollower"
    | "hosted"
    | "soldTarget"
    | "eventReminder"
    | "payout"
    | "payoutProcess";
  initiator?: string;
  eventname?: string;
  eventID?: string;
  eventCategory?: string;
  time?: string;
}

const NotificationCard = (props: INotificationCard) => {
  return (
    <div
      css={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "49px 1fr",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        css={{
          background: "#E4E4E4",
          padding: "10%",
          textAlign: "center",
          color: "#707070",
          borderRadius: "6px",
          fontSize: "0.875rem",
          fontWeight: "bold",
          letterSpacing: "0.28px",
          height: "fit-content",
        }}
      >
        {props.messageType === "payout" ||
        props.messageType === "payoutProcess" ? (
          <>
            <p css={{ fontWeight:"normal" }}>{props.uploaded.split(" ")[1]}</p>
            <p css={{ fontSize: "1rem" }}>
              {props.uploaded.split(" ")[0]}
            </p>
            <p css={{ fontWeight:'normal' }}>{props.uploaded.split(" ")[2]}</p>
            <p css={{ fontSize: "0.5rem" }}>{props.time}</p>
          </>
        ) : (
          props.uploaded.split(" ").map((item) => <p key = {item}>{item}</p>)
        )}
      </div>
      <div
        css={{
          width: "87.5%",
          border: "1px solid #E4E4E4",
          borderRadius: "10px",
          display: "grid",
          gridTemplateColumns: "25% 75%",
          paddingBottom: "1.5rem",
          position: "relative",
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "0.6rem",
          }}
        >
          <div
            css={{
              height: "57px",
              width: "57px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/assets/pngs/francis-review.png"}
              alt=""
              height={57}
              width={57}
            />
          </div>
        </div>
        <div css={{ marginTop: "0.8rem", fontSize: "0.875rem" }}>
          {props.messageType === "witness" && (
            <>
              <p>
                <b>{props.initiator}</b> witnexed an event that you might want
                to see.
              </p>
              <p>
                <b>{props.eventname}</b> Event ID
                <b> {props.eventID}</b>
              </p>
            </>
          )}
          {props.messageType === "gainedFollower" && (
            <p>
              <b>{props.initiator}</b> just followed you
            </p>
          )}
          {props.messageType === "hosted" && (
            <p>
              <b>{props.initiator}</b> hosted a {props.eventCategory} event.
              <b> {props.eventname}</b> Event ID <b>{props.eventID}</b>
            </p>
          )}
          {props.messageType === "eventReminder" && (
            <p>
              An event you favorited <b>{props.eventname}</b> Event ID{" "}
              <b>{props.eventID}</b> will be starting in 2 hours time.
            </p>
          )}
          {props.messageType === "soldTarget" && (
            <p>
              Your hosted event <b>{props.eventname}</b> Event ID{" "}
              <b>{props.eventID}</b> has sold 100 tickets
            </p>
          )}
          {props.messageType === "payout" && (
            <p>
              <b>{props.eventname}</b> Event ID <b>{props.eventID}</b> ticket
              sales has been processed completely and paid to your account
            </p>
          )}
          {props.messageType === "payoutProcess" && <p><b>{props.eventname}</b> Event ID <b>{props.eventID}</b> is being processed for payment</p>}
          {props.type === "action" && (
            <div
              css={{
                position: "absolute",
                height: "39px",
                paddingInline: "0.8rem",
                backgroundColor: "#7c35ab",
                right: 10,
                bottom: -20,
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "550",
                marginBottom: "0.5rem",
              }}
            >
              <p>{props.actionType}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
