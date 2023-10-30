/** @jsxImportSource @emotion/react */

import React, { useRef, useState } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import Image from "next/image";
import { SelectChangeEvent, useMediaQuery } from "@mui/material";
import Speaker from "@/components/cards/performer";
import AddSpeakerForm from "fragments/hostEvent/addSpeakerForm";
import AddSpeakerModal from "@/components/modals/hostEventModal/addSpeakerModal";

const Speakers = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const newSpeakerRef = useRef<HTMLInputElement>(null);
  const [addSpeakerModalOpen, setAddSpeakerModalOpen] = useState(false);
  const [willBePerformers, setWillBePerformers] = useState("Yes");
  const [performers, setPerformers] = useState([])

  const handleNewSpeakerClick = () => {
    if (willBePerformers) {
      if (isTablet) {
        setAddSpeakerModalOpen(!addSpeakerModalOpen);
      } else {
        if (newSpeakerRef.current != null) {
          newSpeakerRef.current.focus();
        }
      }
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setWillBePerformers(e.target.value);
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  return (
    <HostEventLayout>
      <AddSpeakerModal
        isOpen={addSpeakerModalOpen}
        onRequestClose={() => setAddSpeakerModalOpen(!addSpeakerModalOpen)} speakerRef={newSpeakerRef}
      />
      <div css={{ width: isTablet ? "100vw" : "" }}>
        <div
          css={{
            height: isTablet ? "170px" : "150px",
            borderBottom: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
            display: "flex",
            alignItems: "center",
            paddingInline: isTablet ? "1rem" : "3.2rem",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div
              css={{
                width: "43%",
                [screen.desktopLg]: {
                  width: "50%",
                },
                [screen.desktop]: {
                  width: isTablet ? "100%" : "70%",
                },
              }}
            >
              <h1 css={{ fontSize: isTablet ? "1.8rem" : "1.875rem" }}>
                Performers
              </h1>
              <p css={{ fontSize: isTablet ? "1rem" : "" }}>
                If your event is going to have speakers, select Yes and fill in
                performer(s) details otherwise leave it at &quot;No&quot; and
                continue
              </p>
            </div>
            {!isTablet && (
              <div
                css={{
                  display: "flex",
                  gap: "2rem",
                }}
              >
                <p
                  css={{
                    color: "#7C35AB",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Preview
                </p>
                <Link
                  href="/dashboard"
                  css={{
                    color: "#F05E78",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </Link>
              </div>
            )}
          </div>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "calc(100vh - 150px)",
            [screen.lg]: {
              gridTemplateColumns: "1fr",
            },
            [screen.desktop]: {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <div
            css={{
              padding: isTablet ? "0rem 1rem" : " 1.5rem 2.5rem",
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
            <HostEventTextField
              label="Does this event have performers and will like to be shown in the program?"
              placeholder="Yes"
              type="select"
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              setValue={handleChange}
              value={willBePerformers}
            />
            {!isTablet && willBePerformers === "Yes" && (
              <AddSpeakerForm speakerRef={newSpeakerRef}  />
            )}
          </div>
          <div
            css={{
              padding: isTablet ? "1rem" : " 1.5rem 2.5rem",
              height: "100%",
              display: "grid",
              justifyContent: "space-between",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              [screen.lg]: {
                overflowY: "initial",
              },
              [screen.desktop]: {
                overflowY: "initial",
              },
            }}
          >
            <div
              css={{
                width: "70%",
                display: "grid",
                gap: "1rem",
                [screen.lg]: {
                  width: "100%",
                  gap: "2rem",
                },
                [screen.desktop]: {
                  width: "100%",
                  gap: "2rem",
                },
              }}
            >
              <div
                css={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: isTablet ? "wrap" : "nowrap",
                }}
              >
                <div>
                  <Speaker
                    name="John Bosko"
                    title="Software Engineer"
                    role="Speaker"
                    img="/assets/pngs/speaker5.png"
                  />
                </div>
                <div>
                  <Speaker
                    name="Jordan Mike"
                    title="Product Designer"
                    role="Artiste"
                    img="/assets/pngs/speaker6.png"
                  />
                </div>
              </div>
              <div>
                <p css={{ fontSize: "0.875rem" }}>
                  If this event has multiple performers, click on the button
                  below to add another performer
                </p>
                <button
                  css={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#7C35AB",
                    border: `1px solid ${"#7C35AB"}`,
                    height: "43px",
                    marginBlock: "0.5rem",
                    background: "#fff",
                    borderRadius: "26px",
                    width: isTablet ? "80%" : "52%",
                    cursor: "pointer",
                  }}
                  onClick={handleNewSpeakerClick}
                >
                  + Add Another Performer
                </button>
              </div>
            </div>
            <div
              css={{
                width: isTablet ? "100%" : "80%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBlock: "auto 1rem",
                [screen.lg]: {
                  marginBlock: "1rem",
                },
                [screen.desktop]: {
                  marginBlock: "1rem",
                },
              }}
            >
              <Link href="/dashboard/hostEvent/eventLocation">
                <button
                  css={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#7C35AB",
                    border: `1px solid ${"#7C35AB"}`,
                    height: "52px",
                    marginBottom: "0.5rem",
                    background: "#fff",
                    borderRadius: "26px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  SAVE & RETURN
                </button>
              </Link>
              <Link href="/dashboard/hostEvent/tickets">
                <button
                  css={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "'Nunito', sans-serif",
                    color: "#fff",
                    border: `1px solid ${"#7C35AB"}`,
                    height: "52px",
                    marginBottom: "0.5rem",
                    background: "#7C35AB",
                    borderRadius: "26px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  SAVE & CONTINUE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HostEventLayout>
  );
};

export default Speakers;
