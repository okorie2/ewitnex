/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";

interface IHostEventTimeDate {
  label: string;
  placeholder1: string;
  placeholder2: string;
  image1?: string;
  image2?: string;
  type?: string;
  input2: boolean;
  text2?: string;
}
const HostEventTimeDate = (props: IHostEventTimeDate) => {
  return (
    <div css={{ display: "grid", gap: "0.5rem", width: "100%" }}>
      <label
        css={{
          fontWeight: "bold",
          display: "flex",
          gap: "0.3rem",
          alignItems: "center",
        }}
      >
        {props.label}
      </label>
      <div
        css={{
          height: "3.3rem",
          width: "100%",
          border: `1px solid ${"#AEAEAE"}`,
          borderRadius: "10px",
          fontSize: "14px",
          fontFamily: "'Poppins', sans-serif",
          color: "#AEAEAE",
          display: "flex",
        }}
      >
        <div
          css={{
            width: "50%",
            padding: "1rem",
            border: "none",
            borderRight: `1px solid ${"#AEAEAE"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type={`${props.type}? ${props.type} : "text"`}
            placeholder={props.placeholder1}
            css={{
              border: "none",
            }}
          />
          <div>
            {props.image1 && (
              <Image src={props.image1} alt="" width={11.74} height={13.04} />
            )}
          </div>
        </div>

        <div
          css={{
            width: "50%",
            padding: "1rem",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.input2 && (
            <>
              <input
                type={`${props.type}? ${props.type} : "text"`}
                placeholder={props.placeholder2}
                css={{
                  border: "none",
                }}
              />
              {props.image2 && (
                <Image src={props.image2} alt="" width={17.83} height={17.83} />
              )}
            </>
          )}
          {props.text2 && (
            <>
              <p css={{ fontWeight: "bold", color: "#000" }}>
                {props.placeholder2}
              </p>
              <p css={{ fontWeight: "500", color: "#000" }}>
                {props.text2}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostEventTimeDate;
