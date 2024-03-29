/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { screen } from "styles/theme";
import Image from "next/image";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Button } from "styles/components/button";
import { CheckSelect } from "fragments/eventFilter";
import { CssTextField } from "@/components/inputs/BasicTextField";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { SelectChangeEvent, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";

interface IContactOrganizerModal {
  isOpen: boolean;
  onRequestClose: () => void;
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

const ContactOrganizerModal = (props: IContactOrganizerModal) => {
  const [success, setSuccess] = useState(false);
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [data, setData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const handleChange = (e: 
    | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | SelectChangeEvent) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleNext = () => {
    setSuccess(true);
  };
  const handleClose = () => {
    if(success) {
        setSuccess(false)
    }
    props.onRequestClose()
  }
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
     {!isTablet &&  <div
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
      </div>}

      <div
        css={{
          height: "100vh",
          width: "33.3%",
          background: "#fff",
          position: "absolute",
          right: "0",
          top: "0",
          padding: "3% 2% 0",
          paddingRight:"0",
          color: "#000",
          [screen.desktopLg]: {
            width: isTablet ? "100vw" :"33.3%",
          },
          display: "grid",
          gridTemplateRows: isTablet ? "10vh 90vh":"10% 90%",
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
              <div css = {{width:"70%", textAlign:"center", marginBlock:"1.5rem", fontWeight:"550"}}>Your message has been succesfully submitted </div>
              <div
                  css={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "center",
                    marginBlock: "0.5rem",
                  }}
                >
                  <Button onClick={() => {props.onRequestClose(); setSuccess(false)}} height="52px">
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
          {isTablet && (
            <div
              css={{
                display: "flex",
                alignItems: "center",
                boxShadow: "#00000029 0px 0px 10px ",
                padding: "0% 5%",
                paddingTop: "1.125rem",
                height: "9vh",
                fontFamily: "'Poppins', sans-serif",
                position: "fixed",
                gap: "2rem",
                left: "0",
                right: "0",
                top: "0",
                width: "100vw",
                zIndex: "5",
                background: "#fff",
              }}
            >
              <div onClick={handleClose}>
                <Image
                  src="/assets/svgs/back.svg"
                  alt="back_arrow"
                  width={25}
                  height={18}
                />
              </div>
              <div>
                <h2 css={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Contact Organizer
                </h2>
              </div>
            </div>
          )}
            <p css={{ fontSize: "24px", fontWeight: "bold" }}>
              Contact Organizer
            </p>
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
                <HostEventTextField
                  type={"select"}
                  placeholder={"Regarding your event"}
                  label="Reason"
                  setValue = {handleChange}
                  value={data.reason}
                  options={[
                    {
                      label: "Regarding your event",
                      value: "Regarding your event",
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
                    display: "flex",
                    justifyContent: "center",
                    marginBlock: "2.5rem",
                  }}
                >
                  <Button onClick={handleNext} height="52px" width="100%">
                    <p
                      css={{
                        fontSize: "16px",
                        fontFamily: '"Nunito", sans-serif',
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

export default ContactOrganizerModal;
