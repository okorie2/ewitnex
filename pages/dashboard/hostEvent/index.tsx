/** @jsxImportSource @emotion/react */
import React from "react";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { ButtonFormFilled } from "styles/components/button";
import HostEventLayout from "./layout";
import Link from "next/link";

const HostEvent = () => {
  return (
    <HostEventLayout>
      <div>
        <div
          css={{
            height: "110px",
            borderBottom: `1px solid ${"#E4E4E4"}`,
            display: "flex",
            alignItems: "center",
            paddingInline: "3.2rem",
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
            <div>
              <h1 css={{ fontSize: "1.875rem" }}>Event Program Info</h1>
              <p>Tell invitees the type of event you are hosting</p>
            </div>
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
          </div>
        </div>
        <form
          css={{
            maxHeight: "calc(100vh - 110px)",
            padding: " 1.5rem 3.2rem",
            display: "grid",
            gap: "1.5rem",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <HostEventTextField
            label="Event Title"
            placeholder="Name of event"
            type="text"
          />
          <div css={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}>
            <HostEventTextField
              label="Organised By"
              placeholder="Organiser's name"
              type="text"
              image="/assets/svgs/info2.svg"
            />
            <button
              css={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "#7C35AB",
                border: `1px solid ${"#7C35AB"}`,
                width: "123px",
                height: "38px",
                marginBottom: "0.5rem",
                background: "#fff",
              }}
            >
              Save Organizer
            </button>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
            }}
          >
            <HostEventTextField
              label="Event Type"
              placeholder="Select event"
              type="select"
              image="/assets/svgs/info2.svg"
            />
            <HostEventTextField
              label="Category"
              placeholder="Wedding"
              type="select"
              image="/assets/svgs/info2.svg"
            />
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
            }}
          >
            <HostEventTextField
              label="Audience"
              placeholder="Public"
              type="select"
              image="/assets/svgs/info2.svg"
            />
            <div></div>
          </div>
          <HostEventTextField
            label="About your event"
            placeholder="Description"
            type="textarea"
            image="/assets/svgs/info2.svg"
          />
          <div
            css={{
              width: "80%",
              marginLeft: "auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <button
              css={{
                fontSize: "1rem",
                fontWeight: "bold",
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
              SAVE TO DRAFT
            </button>
            <Link href="/dashboard/hostEvent/fileUpload">
              <ButtonFormFilled>SAVE & CONTINUE</ButtonFormFilled>
            </Link>
          </div>
        </form>
      </div>
    </HostEventLayout>
  );
};

export default HostEvent;
