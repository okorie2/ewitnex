/** @jsxImportSource @emotion/react */

import HostEventTextField from "@/components/inputs/hostEventTextField";
import { Box, SelectChangeEvent, useMediaQuery } from "@mui/material";
import { screen } from "styles/theme";
import Image from "next/image";
import { ChangeEvent, FormEvent, RefObject, useEffect, useState } from "react";
import { IReqTicket, IReqUpdateTicket } from "types/event";
import { addPerformer, updateTicket } from "redux/event/thunkAction";
import { useAppThunkDispatch, useAppSelector } from "redux/store";
import { TailSpin } from "react-loader-spinner";

const UpdateTicketForm = ({
  setGetTickets,
  handleModalClose,
  id,
}: {
  setGetTickets?: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalClose?: () => void;
  id: string;
  eventId: string
}) => {
  const [ticketType, setTicketType] = useState("Paid");
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [formData, setFormData] = useState<IReqUpdateTicket>({
    ticket: [
      {
        ticketType: "",
        ticketName: "",
        ticketPrice: 0,
        ticketQty: 0,
        ticketHandle: "",
        ticketRefund: "",
      },
    ],
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      ticket: [{ ...formData.ticket[0], [name]: value }],
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      ticket: [{ ...formData.ticket[0], ticketType: ticketType }],
    });
  }, [ticketType]);

  const dispatch = useAppThunkDispatch();
  const { loading, event: selectEvent } = useAppSelector(({ event }) => event);
  const [selectedTicket, setSelectedTicket] = useState({
    ticketType: "",
    ticketName: "",
    ticketPrice: 0,
    ticketQty: 0,
    ticketHandle: "",
    ticketRefund: "",
  });
  useEffect(() => {
    let tickets = selectEvent.tickets;
    const selected = tickets.filter((ticket) => ticket._id === id);
    setSelectedTicket(selected[0]);
  }, [selectEvent]);

  useEffect(() => {
    setFormData({
      ticket: [
        {
          ticketType: selectedTicket.ticketType,
          ticketName: selectedTicket.ticketName,
          ticketPrice: selectedTicket.ticketPrice,
          ticketQty: selectedTicket.ticketQty,
          ticketHandle: selectedTicket.ticketHandle,
          ticketRefund: selectedTicket.ticketRefund,
        },
      ],
    });
  }, [selectedTicket]);

  const handleNext = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      updateTicket({ eventID: selectEvent._id, ticketId: id, form: formData })
    ).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        setFormData({
          ticket: [
            {
              ticketType: "",
              ticketName: "",
              ticketPrice: 0,
              ticketQty: 0,
              ticketHandle: "",
              ticketRefund: "",
            },
          ],
        });
        setGetTickets && setGetTickets((prevState: boolean) => !prevState);

        handleModalClose && handleModalClose();
      }
    });
  };
  return (
    <form
      onSubmit={handleNext}
      css={{
        padding: isTablet ? "0rem" : " 1.5rem 2.5rem",
        display: "grid",
        gap: "1.5rem",
        borderRight: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
        height: "100%",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        [screen.lg]: {
          overflowY: "initial",
          borderBottom: `1px solid ${"#E4E4E4"}`,
        },
        [screen.desktop]: {
          overflowY: "initial",
          borderBottom: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
        },
      }}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <p
          css={{
            fontWeight: "bold",
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          Choose Ticket Type
        </p>
      </div>
      <div css={{ display: "flex", gap: "1rem", marginTop: "-3%" }}>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: isTablet ? "100px" : "110px",
            height: "50px",
            background: ticketType === "Paid" ? "#7C35AB21 " : "",
            border:
              ticketType === "Paid" ? "1px solid #7C35AB" : "1px solid #AEAEAE",
            color: ticketType === "Paid" ? "#7C35AB" : "#AEAEAE",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setTicketType("Paid")}
        >
          <p>Paid</p>
        </div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: isTablet ? "100px" : "110px",
            height: "50px",
            background: ticketType === "Free" ? "#7C35AB21 " : "",
            border:
              ticketType === "Free" ? "1px solid #7C35AB" : "1px solid #AEAEAE",
            color: ticketType === "Free" ? "#7C35AB" : "#AEAEAE",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setTicketType("Free")}
        >
          <p>Free</p>
        </div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: isTablet ? "100px" : "110px",
            height: "50px",
            background: ticketType === "Donation" ? "#7C35AB21 " : "",
            border:
              ticketType === "Donation"
                ? "1px solid #7C35AB"
                : "1px solid #AEAEAE",
            color: ticketType === "Donation" ? "#7C35AB" : "#AEAEAE",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setTicketType("Donation")}
        >
          <p>Donation</p>
        </div>
      </div>
      <div css={{ marginTop: "-4.5%" }}>
        <HostEventTextField
          label=""
          placeholder="Name ticket e.g VIP"
          type="text"
          name={"ticketName"}
          value={formData.ticket[0].ticketName}
          setValue={handleChange}
        />
      </div>
      <div
        css={{
          width: "100%",
          border: "0.124rem solid #AEAEAE",
          borderRadius: "10px",
          fontSize: "14px",
          fontFamily: "'Poppins', sans-serif",
          marginTop: "-3%",
          display: "flex",
        }}
      >
        <div
          css={{
            borderRight: "0.124rem solid #AEAEAE",
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            placeholder="Price (NGN)"
            value={
              formData.ticket[0].ticketPrice === 0
                ? ""
                : formData.ticket[0].ticketPrice
            }
            name="ticketPrice"
            onChange={handleChange}
            inputMode="numeric"
            disabled={ticketType !== "Paid"}
            css={{
              height: "3.3rem",
              width: "90%",
              padding: "1rem",
              border: `none`,
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "'Poppins', sans-serif",
            }}
          />
        </div>
        <div
          css={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            fontWeight: "500",
          }}
        >
          <p>Fee (NGN)</p>
          <p>
            N{ticketType === "Paid" ? 300 : ticketType === "Donation" ? 100 : 0}
          </p>
        </div>
      </div>
      <p css={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
        You will be charged N
        {ticketType === "Paid" ? 300 : ticketType === "Donation" ? 100 : 0} + 3%
        ticket service fee and 3% payment processing fee of the price inputed
        per ticket sold to attendees
      </p>
      <HostEventTextField
        label=""
        placeholder="Enter ticket quantity"
        type="text"
        name="ticketQty"
        value={
          formData.ticket[0].ticketQty === 0 ? "" : formData.ticket[0].ticketQty
        }
        setValue={handleChange}
      />
      <HostEventTextField
        label="Who want to handle the fee?"
        placeholder="pass"
        type="select"
        name="ticketHandle"
        options={[
          {
            value: "i want to pass the fees to the attendees",
            label: "I want to pass the fees to the attendees",
          },
          { value: "absorb", label: "I want to absorb the fees" },
        ]}
        value={formData.ticket[0].ticketHandle}
        setValue={handleChange}
      />
      <div>
        <HostEventTextField
          label="Can attendees ask for a refund?"
          placeholder="refundable"
          type="select"
          options={[
            {
              value: "Yes, ticket is refundable",
              label: "Yes, ticket is refundable",
            },
            {
              value: "No, ticket is non-refundable",
              label: "No, ticket is non-refundable",
            },
          ]}
          value={formData.ticket[0].ticketRefund}
          name="ticketRefund"
          setValue={handleChange}
        />
        <p css={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
          A refund will lead to you getting your payment 3 to 5 working days to
          your wallet after your events have ended.
        </p>
      </div>

      <button
        css={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#7C35AB",
          border: `1px solid ${"#7C35AB"}`,
          height: "45px",
          marginBottom: isTablet ? "2rem" : "0.5rem",
          background: "#fff",
          borderRadius: "26px",
          width: isTablet ? "100%" : "45%",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading === "loading" ? (
          <TailSpin
            height={15}
            width={15}
            color="#7c35ab"
            ariaLabel="loading"
            radius={"2"}
          />
        ) : (
          "Add Ticket"
        )}
      </button>
      {isTablet && <Box height={"0.125rem"} />}
    </form>
  );
};

export default UpdateTicketForm;
