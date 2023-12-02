/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ICreateEvent, IPerformer } from "types/event";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { deletePerformer, getEventById } from "redux/event/thunkAction";
import { IUserDetails } from "types/user";
import { useRouter } from "next/router";
import UpdateSpeakerModal from "../modals/hostEventModal/updateSpeakerModal";

const Performer = (props: IPerformer) => {
  const [eventId, setEventId] = useState("");
  const router = useRouter();
  const { event } = useAppSelector(({ event }) => event);
  

  useEffect(() => {
    if(router.pathname.includes("hostEvent")){
      setEventId(localStorage.getItem("currenteventID") || "");
    }else {
      setEventId(event._id || "")
    }
  }, [event]);
  const [user, setUser] = useState<IUserDetails>();
  const [createEventData, setCreateEventData] = useState<ICreateEvent>();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || "{}"));
    setCreateEventData(
      JSON.parse(localStorage.getItem("createEventData") || "{}")
    );
  }, []);

  const dispatch = useAppThunkDispatch();
  const deletePerformerFunc = () => {
    dispatch(
      deletePerformer({ eventId: event._id, performerId: props.id })
    ).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        dispatch(getEventById(eventId));
        props.setGetPerformers &&
          props.setGetPerformers((prevState: boolean) => !prevState);
      }
    });
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <UpdateSpeakerModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(!modalOpen)}
        setGetPerformers={props?.setGetPerformers}
        id = {props.id}
      />
      <div
        css={{
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <div
          css={{
            width: "177px",
            height: "194px",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <Image
            src={props.img || ""}
            alt=""
            css={{
              objectPosition: "center",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            fill
          />
        </div>
        <div css={{ marginTop: "0.7rem" }}>
          <h4 css={{ fontSize: "1rem" }}>{props.name}</h4>
          <div
            css={{ display: "flex", fontSize: "0.75rem", alignItems: "center" }}
          >
            <p>{props.title}</p>
            <div
              css={{
                background: "#000",
                height: "0.3rem",
                width: "0.3rem",
                borderRadius: "50%",
                marginInline: "0.4rem",
              }}
            ></div>
            <p>{props.role}</p>
          </div>
        </div>
        {router.pathname.includes("host") ||
          (event.OrganizedBy || createEventData?.organizedBy === user?._id && (
            <div css={{ display: "flex", gap: "1.8rem", marginTop: "0.5rem" }}>
              <div
                onClick={() => setModalOpen(!modalOpen)}
                css={{ cursor: "pointer" }}
              >
                <Image
                  src="/assets/svgs/pencil.svg"
                  alt=""
                  width={21}
                  height={21}
                  priority
                />
              </div>
              <div onClick={deletePerformerFunc} css={{ cursor: "pointer" }}>
                <Image
                  src="/assets/svgs/trash.svg"
                  alt=""
                  width={17.88}
                  height={22}
                  priority
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Performer;
