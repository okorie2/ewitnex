/** @jsxImportSource @emotion/react */

import React from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen, theme } from "styles/theme";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import Image from "next/image";
import Speaker from "@/components/cards/speaker";

const Speakers = () => {
  return (
    <HostEventLayout>
      <div>
        <div
          css={{
            height: "150px",
            borderBottom: `1px solid ${theme.shadow.border}`,
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
            <div
              css={{
                width: "43%",
                [screen.desktopLg]: {
                  width: "50%",
                },
                [screen.desktop]: {
                  width: "70%",
                },
              }}
            >
              <h1 css={{ fontSize: "1.875rem" }}>Speakers</h1>
              <p>
                If your event is going to have speakers, select Yes and fill in
                speaker(s) details otherwise leave it at &quot;No&quot; and
                continue
              </p>
            </div>
            <div
              css={{
                display: "flex",
                gap: "2rem",
              }}
            >
              <p
                css={{
                  color: theme.color.primary,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Preview
              </p>
              <Link
                href="/dashboard"
                css={{
                  color: theme.color.negative,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Cancel
              </Link>
            </div>
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
          <form
            css={{
              padding: " 1.5rem 2.5rem",
              display: "grid",
              gap: "1.5rem",
              borderRight: `1px solid ${theme.shadow.border}`,
              height: "100%",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              [screen.lg]: {
                overflowY: "initial",
                borderBottom: `1px solid ${theme.shadow.border}`,
              },
              [screen.desktop]: {
                overflowY: "initial",
                borderBottom: `1px solid ${theme.shadow.border}`,
              },
            }}
          >
            <HostEventTextField
              label="Does this event have speakers and will like to be shown in the program?"
              placeholder="Yes"
              type="select"
            />
            <HostEventTextField
              label="Name of Speaker"
              placeholder="Enter full name"
              type="text"
            />
            <HostEventTextField
              label="Speakers Title"
              placeholder="Software Engineer at Ewitnex"
              type="text"
            />
            <HostEventTextField
              label="About Speaker"
              placeholder="Tell attendees more about this speaker"
              type="textarea"
            />
            <div>
              <p
                css={{
                  fontWeight: "bold",
                }}
              >
                Speaker&apos;s Image(Optional)
              </p>
              <div
                css={{
                  width: "155px",
                  height: "200px",
                  border: `1px dashed ${theme.shadow.border2}`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  css={{
                    color: theme.color.grey,
                    fontSize: "0.75rem",
                    width: "80%",
                  }}
                >
                  <Image
                    src="/assets/svgs/image.svg"
                    alt=""
                    width={26.44}
                    height={30.85}
                  />
                  <p>
                    Tap or drag files to this area to upload PNG, JPG files
                    format
                  </p>
                </div>
              </div>
            </div>

            <button
              css={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: theme.color.primary,
                border: `1px solid ${theme.color.primary}`,
                height: "52px",
                marginBottom: "0.5rem",
                background: theme.common.white,
                borderRadius: "26px",
                width: "45%",
                cursor: "pointer",
              }}
            >
              Add Speaker
            </button>
          </form>
          <div
            css={{
              padding: " 1.5rem 2.5rem",
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
              <div css={{ display: "flex", gap: "1.5rem" }}>
                <div>
                  <Speaker
                    name="John Bosko"
                    role="Software Engineer"
                    img="/assets/pngs/speaker5.png"
                  />
                  <div
                    css={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
                  >
                    <Image
                      src="/assets/svgs/pencil.svg"
                      alt=""
                      width={21}
                      height={21}
                    />
                    <Image
                      src="/assets/svgs/trash.svg"
                      alt=""
                      width={17.88}
                      height={22}
                    />
                  </div>
                </div>
                <div>
                  <Speaker
                    name="Jordan Mike"
                    role="Product Designer"
                    img="/assets/pngs/speaker6.png"
                  />
                  <div
                    css={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}
                  >
                    <Image
                      src="/assets/svgs/pencil.svg"
                      alt=""
                      width={21}
                      height={21}
                    />
                    <Image
                      src="/assets/svgs/trash.svg"
                      alt=""
                      width={17.88}
                      height={22}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p css={{ fontSize: "0.875rem" }}>
                  If this event has multiple speakers, click on the button below
                  to add another speaker
                </p>
                <button
                  css={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    fontFamily: "'Nunito', sans-serif",
                    color: theme.color.primary,
                    border: `1px solid ${theme.color.primary}`,
                    height: "43px",
                    marginBlock: "0.5rem",
                    background: theme.common.white,
                    borderRadius: "26px",
                    width: "52%",
                    cursor: "pointer",
                  }}
                >
                  + Add Another Speaker
                </button>
              </div>
            </div>
            <div
              css={{
                width: "80%",
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
                    color: theme.color.primary,
                    border: `1px solid ${theme.color.primary}`,
                    height: "52px",
                    marginBottom: "0.5rem",
                    background: theme.common.white,
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
                    color: theme.common.white,
                    border: `1px solid ${theme.color.primary}`,
                    height: "52px",
                    marginBottom: "0.5rem",
                    background: theme.color.primary,
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
