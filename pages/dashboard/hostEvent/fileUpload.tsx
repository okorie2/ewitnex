/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import HostEventLayout from "./layout";
import Link from "next/link";
import { screen } from "styles/theme";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { Tooltip } from "@mui/material";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { IEventFiles } from "types/event";
import { useRouter } from "next/router";
import { fileUpload } from "redux/event/thunkAction";
import { TailSpin } from "react-loader-spinner";
import toast from "react-hot-toast";

const FileUpload = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const { fileUploadData } = useAppSelector(
    ({ hostEvent }) => hostEvent
  );
  const addPDFRef = useRef<HTMLInputElement>(null);
  const addCoverImageRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<IEventFiles>({
    coverImage: undefined,
    filePDF: undefined,
  });

  useEffect(() => {
    setFormData({...formData, ...fileUploadData})
  },[fileUploadData])

  const handleAddPDFClick = () => {
    if (addPDFRef.current != null) {
      addPDFRef.current.click();
    }
  };
  const handleAddCoverImageClick = () => {
    if (addCoverImageRef.current != null) {
      addCoverImageRef.current.click();
    }
  };
  const handlePDFFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileObj = event.target.files[0];
      setFormData({ ...formData, filePDF: fileObj });
      event.target.files = null;
    }
  };

  const handleCoverImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const fileObj = event.target.files[0];
      setFormData({ ...formData, coverImage: fileObj });
      event.target.files = null;
    }
  };

  const router = useRouter();
  const dispatch = useAppThunkDispatch();
  const { loading } = useAppSelector(({ hostEvent }) => hostEvent);
  const [eventID,setEventID] = useState("")
  useEffect(() => {
      setEventID(localStorage.getItem("currenteventID") || "");
  },[])

  useEffect(() => {
    if(localStorage.getItem("currenteventID") === null ){
        toast.error("No current event")
        router.push("/dashboard/hostEvent")
    }
  },[eventID])

  const handleNext = () => {
    // if(fileUploadData){
    //   router.push("/dashboard/hostEvent/eventLocation")
    // }else{
    dispatch(fileUpload({eventID, formData})).then((res) => {
      if (res.meta.requestStatus == "fulfilled") {
        router.push("/dashboard/hostEvent/eventLocation")
      }
    });
  };
  // }

  return (
    <HostEventLayout>
      <div css={{ width: isTablet ? "100vw" : "" }}>
        <div
          css={{
            height: "110px",
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
            <div>
              <h1 css={{ fontSize: "1.875rem" }}>Files Upload</h1>
              <p>Upload event files</p>
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
            maxHeight: isTablet ? "" : "calc(100vh - 110px)",
            width: "fit-content",
            padding: isTablet ? "1rem" : " 1.5rem 3.2rem",
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
              <Tooltip title="If you have a customize program that has already been designed, upload it as a PDF file. Your attendees will be able to view it on the event page">
                <Image
                  src="/assets/svgs/info2.svg"
                  alt=""
                  width={14.02}
                  height={14.02}
                />
              </Tooltip>
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
                  width: isTablet ? "90vw" : "376px",
                  height: "200px",
                  border: `1px dashed ${"#C0C0C0"}`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={handleAddPDFClick}
              >
                <div
                  css={{
                    color: "#AEAEAE",
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
                  {formData.filePDF ? (
                    <>
                      <p css={{ fontSize: "1rem" }}>{formData.filePDF.name}</p>
                      <p>Click to change uploaded file</p>
                    </>
                  ) : (
                    <>
                      <input
                        type="file"
                        css={{ display: "none" }}
                        onChange={handlePDFFileChange}
                        ref={addPDFRef}
                        accept=".pdf"
                      />

                      <p>
                        Tap or drag program to this area to upload. program must
                        be in PDF file format
                      </p>
                    </>
                  )}
                </div>
              </div>
              <p
                css={{
                  color: "#AEAEAE",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  width: isTablet ? "fit-content" : "",
                  marginInline: "auto",
                }}
              >
                or
              </p>
              <div
                css={{
                  width: isTablet ? "90vw" : "496px",
                  height: "200px",
                  border: `1px solid ${"#C0C0C0"}`,
                  borderRadius: "10px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  backgroundColor: "#F2F7FB",
                }}
              >
                <div
                  css={{
                    padding: "0.8rem 2.5rem 0.8rem 1.2rem",
                    display: "grid",
                    gap: isTablet ? "0.5rem" : "0.8rem",
                  }}
                >
                  <p
                    css={{
                      fontWeight: "bold",
                      fontSize: isTablet ? "0.8rem" : "",
                    }}
                  >
                    Create your program using our well designed template
                  </p>
                  <p
                    css={{
                      fontWeight: "500",
                      fontSize: "0.75rem",
                      color: "#707070",
                    }}
                  >
                    Don&apos;t worry about who will design it for you, just drag
                    and drop and replace tests with you own words
                  </p>
                  <Image
                    src="/assets/svgs/createTemplate.svg"
                    alt=""
                    width={isTablet ? 159 : 238}
                    height={isTablet ? 15 : 22}
                  />
                  <p css={{ fontWeight: "bold", color: "#548AF9" }}>
                    Coming Soon...
                  </p>
                </div>
                <Image
                  src="/assets/pngs/templatepic.png"
                  alt=""
                  width={isTablet ? 100 : 202}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div>
            <h4 css={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              Upload program cover photo
              <Tooltip title="This is like the profile picture for your event. This makes youe event stand out easily from other events and attendees can easily identify the event on the events page">
                <Image
                  src="/assets/svgs/info2.svg"
                  alt=""
                  width={14.02}
                  height={14.02}
                />
              </Tooltip>
            </h4>
            <div>
              <div
                css={{
                  width: isTablet ? "90vw" : "376px",
                  height: "200px",
                  border: `1px dashed ${"#C0C0C0"}`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
                onClick={handleAddCoverImageClick}
              >
                <div
                  css={{
                    color: "#AEAEAE",
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
                  {formData.coverImage ? (
                    <>
                      <p css={{ fontSize: "1rem" }}>
                        {formData.coverImage.name}
                      </p>
                      <p>Click to change uploaded file</p>
                    </>
                  ) : (
                    <>
                      <input
                        type="file"
                        css={{ display: "none" }}
                        onChange={handleCoverImageChange}
                        ref={addCoverImageRef}
                        accept="image/*"
                      />

                      <p>
                        Tap or drag files to this area to upload PNG, JPG files
                        format
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            css={{
              width: isTablet ? "100%" : "80%",
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
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
              onClick={handleNext}
            >
              {loading === "loading" ? (
                <TailSpin
                  height={15}
                  width={15}
                  color="#FFF"
                  ariaLabel="loading"
                  radius={"2"}
                />
              ) : (
                "SAVE AND CONTINUE"
              )}
            </button>
          </div>
        </div>
      </div>
    </HostEventLayout>
  );
};

export default FileUpload;
