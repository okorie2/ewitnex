/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import { ButtonFormFilled } from "styles/components/button";
import Image from "next/image";
import HostEventLayout from "./layout";
import Link from "next/link";
import SettingsTextField from "@/components/inputs/SettingsInput";
import { Tooltip } from "@mui/material";

const HostEvent = () => {
  const [organizerInputOpen, setOrganizerInputOpen] = useState(false);
  const [data, setdata] = useState("");
  const [audienceState, setAudienceState] = useState("public")
  const [organizersArray, setOrganizersArray] = useState(["Blessed_one"]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setOrganizersArray([...organizersArray, data]);
      setdata("");
      setOrganizerInputOpen(false);
    }
  };

  const handleDeleteOrganizer = (id: string) => {
    const organizersArrayCopy = organizersArray;
    const filtered = organizersArrayCopy.filter(
      (organizer) => organizer !== id
    );
    setOrganizersArray(filtered);
  };

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
          <div css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <p
              css={{
                fontWeight: "bold",
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
              }}
            >
              Organized by
            </p>
            <Tooltip title="This describes a unique organizer and shows all of the events on one page">
              <Image
                src={"/assets/svgs/info2.svg"}
                alt=""
                width={14.02}
                height={14.02}
              />
            </Tooltip>
          </div>
          <div
            css={{
              display: "flex",
              gap: "1.2rem",
              alignItems: "center",
              marginTop: organizerInputOpen ? "-3.8%" : "-2.8%",
              paddingBlock: "1%",
              flexWrap: "wrap",
            }}
          >
            {organizersArray.map((organizer) => {
              return (
                <div
                  key = {organizer}
                  css={{
                    width: "250px",
                    position: "relative",
                    height: "48px",
                    paddingLeft: "2%",
                    display: "flex",
                    alignItems: "center",
                    border: `1px solid ${"#AEAEAE"}`,
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {organizer}
                  <div
                    css={{
                      position: "absolute",
                      padding: "2px 4px",
                      border: "1px solid #AEAEAE",
                      right: "-4%",
                      top: "33%",
                      borderRadius: "50%",
                      background: "white",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={() => handleDeleteOrganizer(organizer)}
                  >
                    <Image
                      src={"/assets/svgs/trash-red.svg"}
                      alt=""
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              );
            })}
            <div
              css={{
                width: "250px",
                maxWidth: "50%",
                position: "relative",
                display: organizerInputOpen ? "block" : "none",
                marginBottom: "-0.4%",
              }}
            >
              <SettingsTextField
                label={""}
                value={data}
                placeholder={"Organizer's Ewitnex username"}
                setValue={(e) => setdata(e.target.value)}
                handleKeyDown={handleKeyDown}
              />
              <div
                css={{
                  position: "absolute",
                  padding: "2px 4px",
                  border: "1px solid #AEAEAE",
                  right: "-4%",
                  top: "33%",
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => setOrganizerInputOpen(false)}
              >
                <Image
                  src={"/assets/svgs/trash-red.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <button
              css={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                color: "#7C35AB",
                border: `1px solid ${"#7C35AB"}`,
                minWidth: "172px",
                height: "38px",
                marginBottom: "0.4rem",
                background: "#fff",
              }}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setOrganizerInputOpen(true);
              }}
            >
              Add another organizer
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
              placeholder="none"
              type="select"
              image="/assets/svgs/info2.svg"
              tooltip="Select the type of event from this list. This helps ticket buyers find your event."
              options={[
                {value: "none", label: "Select event"},
                {value:"Social", label:"Social"},
                {value: "Cultural", label:"Cultural"},
                {value:"Educational", label:"Educational"},
                {value:"Fundraising", label:"Fundraising"},
                {value:"Business", label:"Business"},
                {value:"Sports", label:"Sports"},
                {value:"Political", label:"Political"},
                {value:"Religious", label:"Religion"},
                {value:"Movie", label:"Movie"},
                {value:"Theatre", label:"Theatre"},
              ]}
            />
            <HostEventTextField
              label="Category"
              placeholder="none"
              type="select"
              image="/assets/svgs/info2.svg"
              tooltip="Select an event category from this list. This helps ticket buyers find your event."
              options={[
                {value: "none", label: "Select category"},
                {value:"Wedding", label:"Wedding"},
                {value:"Tech",label:"Tech" },
                {value:"Sports and Fitness", label:"Sports and Fitness"},
                {value:"Conference", label:"Conference"},
                {value:"Music", label:"Music"},
              ]}
            />
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
            }}
          >
            <div>
              <div
                css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <p
                  css={{
                    fontWeight: "bold",
                    display: "flex",
                    gap: "0.3rem",
                    alignItems: "center",
                  }}
                >
                  Audience
                </p>
                <Tooltip title="A public event can be found in search and list of events">
                  <Image
                    src={"/assets/svgs/info2.svg"}
                    alt=""
                    width={14.02}
                    height={14.02}
                  />
                </Tooltip>
              </div>
              <div css = {{display: "flex", gap: "1rem", marginBlock:"0.5rem"}}>
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    width: "110px",
                    height: "50px",
                    background: audienceState === "public" ? "#7C35AB21 ": "",
                    border: audienceState === "public" ? "1px solid #7C35AB": "1px solid #AEAEAE",
                    color: audienceState === "public" ? "#7C35AB" : "#AEAEAE",
                    borderRadius: "10px",
                    cursor:"pointer"
                  }}
                  onClick = {() => setAudienceState("public")}
                >{
                  audienceState === "public" ? 
                  <Image
                    src="/assets/svgs/eye_open_purple.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  :
                  <Image
                    src="/assets/svgs/eye_open.svg"
                    alt=""
                    width={20}
                    height={20}
                  />}
                  <p>Public</p>
                </div>
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    width: "110px",
                    height: "50px",
                    background: audienceState === "private" ? "#7C35AB21 ": "",
                    border: audienceState === "private" ? "1px solid #7C35AB": "1px solid #AEAEAE",
                    color: audienceState === "private" ? "#7C35AB" : "#AEAEAE",
                    borderRadius: "10px",
                    cursor:"pointer"
                  }}
                  onClick = {() => setAudienceState("private")}
                >
                  { audienceState === "private" ?
                    <Image
                    src="/assets/svgs/eye_close_purple.svg"
                    alt=""
                    width={20}
                    height={20}
                  />:
                    <Image
                    src="/assets/svgs/eye_close.svg"
                    alt=""
                    width={20}
                    height={20}
                  />}
                  <p>Private</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <HostEventTextField
            label="About your event"
            placeholder="Description"
            type="textarea"
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
