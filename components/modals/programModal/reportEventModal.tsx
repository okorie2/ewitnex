/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { Box } from "@mui/material";

interface IReportEventModal {
  isOpen: boolean;
  onRequestClose: () => void;
  eventID: string;
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

Modal.setAppElement("body");

const ReportEventModal = (props: IReportEventModal) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setData({ ...data, eventID: props.eventID });
  }, [props.eventID]);

  const [data, setData] = useState({
    name: "",
    email: "",
    eventID: props.eventID,
    reason: "",
    message: "",
  });
  console.log(data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleNext = () => {
    setSuccess(true);
  };
  const handleClose = () => {
    if (success) {
      setSuccess(false);
    }
    props.onRequestClose();
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={(e) => {
        e.stopPropagation();
        props.onRequestClose;
      }}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div
        onClick={handleClose}
        css={{
          border: "none",
          background: "none",
          color: "#fff",
          fontSize: "1.125rem",
          cursor: "pointer",
          width: "67%",
          height: "90vh",
        }}
      >
        {/* <p>&#x2715; Close</p>  */}
      </div>

      <div
        css={{
          height: "100vh",
          maxWidth: "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "3% 2% 0",
          color: "#000",
          [screen.desktopLg]: {
            width: "50%",
          },
          display: "grid",
          gridTemplateRows: "10% 90%",
        }}
      >
        {success ? (
          <div
            css={{
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="success"
              src={"/assets/svgs/success.svg"}
              height={107.14}
              width={106.72}
            />
            <p
              css={{
                marginTop: "1rem",
                fontSize: "1.3rem",
                color: "#00d9b7",
                fontWeight: "bold",
              }}
            >
              Submitted
            </p>
            <div
              css={{
                width: "70%",
                textAlign: "center",
                marginBlock: "1.5rem",
                fontWeight: "550",
              }}
            >
              Your message has been succesfully submitted and will be looked
              upon
            </div>
            <div
              css={{
                width: "95%",
                display: "flex",
                justifyContent: "center",
                marginBlock: "0.5rem",
              }}
            >
              <Button
                onClick={() => {
                  props.onRequestClose();
                  setSuccess(false);
                }}
                height="52px"
              >
                <p
                  css={{
                    fontSize: "16px",
                    fontFamily: '"Nunito", sans-serif',
                    paddingInline: "4rem",
                  }}
                >
                  OKAY
                </p>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p css={{ fontSize: "24px", fontWeight: "bold" }}>Report</p>
            <div
              css={{
                width: "100%",
                overflowY: "auto",
                // "&::-webkit-scrollbar": {
                //   display: "none",
                // },
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#F5f5f5",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#AEAEAE",
                  borderRadius: "8px",
                  height: "1px",
                  ":hover": {
                    background: ` ${"#707070"}`,
                  },
                },
              }}
            >
              <form css={{ width: "95%" }}>
                <SettingsTextField
                  label={"Your Name"}
                  name="name"
                  value={data.name}
                  placeholder={"Enter your name"}
                  setValue={handleChange}
                />
                <SettingsTextField
                  label={"Your Email"}
                  name="email"
                  value={data.email}
                  placeholder={"Enter your email"}
                  setValue={handleChange}
                />
                <SettingsTextField
                  label={"Event ID"}
                  name="eventID"
                  value={props.eventID}
                  placeholder={""}
                  setValue={handleChange}
                  disabled
                />
                <HostEventTextField
                  type={"select"}
                  placeholder={"Regarding event"}
                  label="Reason"
                  value={data.reason}
                  options={[
                    {
                      label: "Regarding event",
                      value: "Regarding event",
                    },
                  ]}
                />
                <Box height={"2rem"} />
                <HostEventTextField
                  label={"Message"}
                  type="textarea"
                  name="message"
                  color="#000"
                  height="8rem"
                  value={data.message}
                  placeholder={"Start writing your message"}
                  setValue={handleChange}
                />
                <div
                  css={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "center",
                    marginBlock: "2.5rem",
                  }}
                >
                  <Button onClick={handleNext} height="52px">
                    <p
                      css={{
                        fontSize: "16px",
                        fontFamily: '"Nunito", sans-serif',
                        paddingInline: "9rem",
                      }}
                    >
                      SUBMIT
                    </p>
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ReportEventModal;
