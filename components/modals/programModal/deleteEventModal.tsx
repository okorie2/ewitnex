/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Button } from "styles/components/button";
import { useMediaQuery } from "@mui/material";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { deleteEventById } from "redux/event/thunkAction";
import Link from "next/link";
import { IUserDetails } from "types/user";
import { TailSpin } from "react-loader-spinner";

interface IDeleteEventModal {
  isOpen: boolean;
  onRequestClose: () => void;
  eventName : string
}

const customStyles = {
  overlay: {
    backgroundColor: "#00000029",
    zIndex: "3",
    width: "100%",
    height: "100vh",
  },
  content: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: "#00000029",
    fontFamily: "'Nunito', sans-serif",
  },
};

const DeleteEventModal = (props: IDeleteEventModal) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [success, setSuccess] = useState(false);
  const dispatch = useAppThunkDispatch();

  const { loading } = useAppSelector(({ event }) => event);
  const [id, setId] = useState("")
  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("eventId") || ""))
  },[])

  const handleDeleteEvent = (id: string) => {
    dispatch(deleteEventById(id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setSuccess(true);
      }
    });
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={(e) => {
        e.stopPropagation();
        props.onRequestClose;
      }}
      style={customStyles}
    >
      <div
        css={{
          zIndex: "3",
          width: "100%",
          height: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={props.onRequestClose}
      ></div>
      <div
        css={{
          width: "467px",
          height: "295px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: isTablet ? "center" : "",
          padding: isTablet ? "1rem" : "2rem",
          boxShadow: "0px 1px 10px #00000029",
          borderRadius: "20px",
          zIndex: "5",
          position: "absolute",
          top: "25%",
          left: "35%",
        }}
        onClick={() => {}}
      >
        {success ? (
          <div>
            <p css ={{marginBlock:"3rem"}}>This event has been deleted.</p>
            <Link href="/dashboard/manager">
              <Button height="52px" width="100%">
                <p css={{ fontSize: "16px" }}>Go to Programs</p>
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <p
              css={{
                fontSize: isTablet ? "18px" : "24px",
                fontWeight: "bold",
                marginBlock: "1.5rem 3rem",
              }}
            >
              This Action Cannot Be Reversed
            </p>
            <div>
              <p>Are you sure you want to delete {props.eventName || ""}</p>
            </div>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: isTablet ? "40% 58%" : "1fr 1fr",
                gap: isTablet ? "3%" : "5%",
                marginTop: "3rem",
              }}
            >
              <Button height="52px" width="100%" onClick={props.onRequestClose}>
                <p css={{ fontSize: "16px" }}>Cancel</p>
              </Button>
              <Button
                height="52px"
                width="100%"
                background="#E4E4E4"
                color="#7C35AB"
                onClick={() => handleDeleteEvent(id)}
              >
                {loading === "loading" ? (
                  <>
                    <p css = {{marginRight:"1rem", fontSize: "16px"}}>Deleting</p>
                    <TailSpin
                      height={15}
                      width={15}
                      color="#7C35AB"
                      ariaLabel="loading"
                      radius={"2"}
                    />
                  </>
                ) : (
                  <p css={{ fontSize: "16px" }}>Delete Event</p>
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default DeleteEventModal;
