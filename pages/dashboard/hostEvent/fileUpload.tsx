/** @jsxImportSource @emotion/react */

import React from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen, theme } from "styles/theme";
import Image from "next/image";

const FileUpload = () => {
  return (
    <HostEventLayout>
      <div>
        <div
          css={{
            height: "110px",
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
            <div>
              <h1 css={{ fontSize: "1.875rem" }}>Files Upload</h1>
              <p>Upload event files</p>
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
            maxHeight: "calc(100vh - 110px)",
            width: "fit-content",
            padding: " 1.5rem 3.2rem",
            display: "grid",
            gap: "1rem",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            [screen.lg]: {
              width: "100%",
            },
            [screen.desktop]: {
              width: "100%",
            },
          }}
        >
          <div>
            <h4 css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Upload your event program
              <Image
                src="/assets/svgs/info2.svg"
                alt=""
                width={14.02}
                height={14.02}
              />
            </h4>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "1.125rem",
                marginTop: "1rem",
                [screen.lg]: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                [screen.desktop]: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
              }}
            >
              <div
                css={{
                  width: "376px",
                  height: "200px",
                  border: `1px dashed ${theme.shadow.border2}`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
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
                    src="/assets/svgs/pdf.svg"
                    alt=""
                    width={26.44}
                    height={30.85}
                  />
                  <p>
                    Tap or drag program to this area to upload. program must be
                    in PDF file format
                  </p>
                </div>
              </div>
              <p
                css={{
                  color: theme.color.grey,
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                }}
              >
                or
              </p>
              <div
                css={{
                  width: "496px",
                  height: "200px",
                  border: `1px solid ${theme.shadow.border2}`,
                  borderRadius: "10px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  backgroundColor: theme.background.secondary2,
                }}
              >
                <div
                  css={{
                    padding: "0.8rem 2.5rem 0.8rem 1.2rem",
                    display: "grid",
                    gap: "0.8rem",
                  }}
                >
                  <p css={{ fontWeight: "bold" }}>
                    Create your program using our well designed template
                  </p>
                  <p
                    css={{
                      fontWeight: "500",
                      fontSize: "0.75rem",
                      color: theme.color.tertiary,
                    }}
                  >
                    Don&apos;t worry about who will design it for you, just drag
                    and drop and replace tests with you own words
                  </p>
                  <Image
                    src="/assets/svgs/createTemplate.svg"
                    alt=""
                    width={238}
                    height={22}
                  />
                  <p css={{ fontWeight: "bold", color: theme.color.blue }}>
                    Coming Soon...
                  </p>
                </div>
                <Image
                  src="/assets/pngs/templatepic.png"
                  alt=""
                  width={202}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Upload program cover photo
              <Image
                src="/assets/svgs/info2.svg"
                alt=""
                width={14.02}
                height={14.02}
              />
            </h4>
            <div>
              <div
                css={{
                  width: "376px",
                  height: "200px",
                  border: `1px dashed ${theme.shadow.border2}`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "1rem",
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
          </div>
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
            <Link href="/dashboard/hostEvent">
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
            <Link href="/dashboard/hostEvent/eventLocation">
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
    </HostEventLayout>
  );
};

export default FileUpload;
