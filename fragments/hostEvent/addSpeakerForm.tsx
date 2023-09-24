/** @jsxImportSource @emotion/react */

import HostEventTextField from "@/components/inputs/hostEventTextField";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { RefObject, useRef, useState } from "react";

const AddSpeakerForm = ({
  speakerRef,
}: {
  speakerRef?: RefObject<HTMLInputElement>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newSpeakerRef, setNewSpeakerRef] = useState(speakerRef);
  const isTablet = useMediaQuery("(max-width: 780px)");
  const handleImageClick = () => {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    event.target.files = null;
  };
  return (
    <form>
      <div css={{ display: "grid", gap: "1.5rem" }}>
        <HostEventTextField
          label="Name of performer"
          placeholder="Enter full name"
          type="text"
          ref={newSpeakerRef}
        />
        <HostEventTextField
          label="Performer Title"
          placeholder="Software Engineer at Ewitnex"
          type="text"
        />
        <HostEventTextField
          label="Performing Role"
          placeholder="Host"
          type="select"
          options={[
            { value: "Host", label: "Host" },
            { value: "Speaker", label: "Speaker" },
            { value: "Artiste", label: "Artiste" },
            { value: "Preacher", label: "Preacher" },
            { value: "Anchor", label: "Anchor" },
            { value: "Celebrant", label: "Celebrant" },
            { value: "Comedian", label: "Comedian" },
            { value: "Others", label: "Others" },
          ]}
        />
        <HostEventTextField
          label="About Performer"
          placeholder="Tell attendees more about this speaker"
          type="textarea"
        />
        <div>
          <p
            css={{
              fontWeight: "bold",
            }}
          >
            Performer&apos;s Image(Optional)
          </p>
          <div
            css={{
              width: "155px",
              height: "200px",
              border: `1px dashed ${"#C0C0C0"}`,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "0.5rem",
              ":hover": {
                border: `1px dashed ${"#7C35AB"}`,
              },
            }}
          >
            <div
              css={{
                color: "#AEAEAE",
                fontSize: "0.75rem",
                width: "80%",
                cursor: "pointer",
              }}
              onClick={handleImageClick}
            >
              <input
                type="file"
                css={{ display: "none" }}
                onChange={handleFileChange}
                ref={inputRef}
              />
              <Image
                src="/assets/svgs/image.svg"
                alt=""
                width={26.44}
                height={30.85}
              />
              <p>
                Tap or drag files to this area to upload PNG, JPG files format
              </p>
            </div>
          </div>
        </div>
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
            width: isTablet ? "80%":"45%",
            cursor: "pointer",
          }}
        >
          Add Performer
        </button>
      </div>
    </form>
  );
};

export default AddSpeakerForm;
