/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ITicket } from "types/event";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { deleteTicket, getEventById } from "redux/event/thunkAction";
import UpdateTicketModal from "../modals/hostEventModal/updateTicketModal";

const Ticket = (props: ITicket) => {
  const [eventId, setEventId] = useState("");
  useEffect(() => {
    setEventId(localStorage.getItem("currenteventID") || "");
  }, []);
  const dispatch = useAppThunkDispatch();

  const deleteTicketFunc = () => {
    dispatch(deleteTicket({ eventId: eventId, ticketId: props.id })).then(
      (res) => {
        if (res.meta.requestStatus == "fulfilled") {
          dispatch(getEventById(eventId));
          props.setGetTickets &&
            props.setGetTickets((prevState: boolean) => !prevState);
        }
      }
    );
  };
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <UpdateTicketModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(!modalOpen)}
      setGetTickets={props?.setGetTickets}
      id = {props.id}
      eventId = {eventId}
    />
    <div>
      <div>
        <h3 css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
          {props.ticketName}
        </h3>
        <p css={{ fontSize: "0.875rem" }}>
          {props.ticketPrice === 0 ? "Free" : ` N${props.ticketPrice}`}
        </p>
        <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
          {props.ticketQty} Quantities
        </p>
      </div>
      <div css={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Image src="/assets/svgs/pencil.svg" alt="" width={21} height={21} />
        <div onClick={deleteTicketFunc} css={{ cursor: "pointer" }}>
          <Image
            src="/assets/svgs/trash.svg"
            alt=""
            width={17.88}
            height={22}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Ticket;
