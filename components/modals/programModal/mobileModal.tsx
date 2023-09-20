/** @jsxImportSource @emotion/react */

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import ContactOrganizerModal from "./contactOrganizerModal";
import ReportEventModal from "./reportEventModal";

const MobileModal = ({
  shown,
  setClose,
}: {
  shown: boolean;
  setClose: () => void;
}) => {
  const [active, setActive] = useState("");
  const [contactOrganizerModalOpen, setContactOrganizerModalOpen] =
    useState(false);
  const [reportEventModalOpen, setReportEventModalOpen] = useState(false);
  return (
    <>
      <ContactOrganizerModal
        isOpen={contactOrganizerModalOpen}
        onRequestClose={() =>
          setContactOrganizerModalOpen(!contactOrganizerModalOpen)
        }
      />
      <ReportEventModal
        isOpen={reportEventModalOpen}
        onRequestClose={() => setReportEventModalOpen(!reportEventModalOpen)}
        eventID={"Heal12548"}
      />
      <div
        css={{
          position: "absolute",
          width: "100vw",
          height: "58vh",
          marginTop: shown ? "-22vh" : "-100vh",
          background: "#000",
          opacity: "0.55",
          zIndex: 99,
        }}
        onClick={setClose}
      ></div>
      {shown && (
        <div
          css={{
            position: "absolute",
            width: "100vw",
            height: "35vh",
            marginTop: "35vh",
            background: "#fff",
            zIndex: 101,
            transition: "margin-top 1s",
            display: "grid",
            paddingInline: "1rem",
            paddingBlock: "1.5rem",
            fontFamily: '"Nunito", sans-serif',
            borderTop: "1px solid #AEAEAE",
            borderRadius: "20px 20px 0 0 ",
            borderBottom: "!px solid #00000029",
          }}
        >
          <div
            css={{
              width: "80%",
              marginTop: "1.2rem",
              ":hover": { color: "#7c35ab" },
              display: "flex",
              gap: "10%",
              cursor: "pointer",
              fontWeight:"600"
            }}
          >
            <Image
              src={"/assets/svgs/share.svg"}
              alt={""}
              width={20}
              height={20}
            />
            <p>Share Ticket</p>
          </div>
          <div
            css={{
              width: "80%",
              marginTop: "1.2rem",
              ":hover": { color: "#7c35ab" },
              display: "flex",
              gap: "10%",
              cursor: "pointer",
              fontWeight:"600"
            }}
            onClick={() => {
              setContactOrganizerModalOpen(true);
              setClose();
            }}
          >
            <Image
              src={"/assets/svgs/mail.svg"}
              alt={""}
              width={20}
              height={20}
            />
            <p>Contact Organizer</p>
          </div>
          <div
            css={{
              width: "80%",
              marginTop: "1.2rem",
              ":hover": { color: "#7c35ab" },
              display: "flex",
              gap: "10%",
              cursor: "pointer",
              fontWeight:"600"
            }}
            onClick={() => {
              setReportEventModalOpen(!reportEventModalOpen);
              setClose();
            }}
          >
            <Image
              src={"/assets/svgs/report-flag.svg"}
              alt={""}
              width={20}
              height={20}
            />
            <p>Report Event</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileModal;
