/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { TextField, styled } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

interface Props {
  label: string;
  visible?: boolean;
  weight?:string;
  type?:string
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  withIcon?: boolean;
  iconComponent?: React.ReactNode;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  setPhoneValue?: (value:string) => void
  name?: string;
  pattern?:string
  required?:boolean
  error?:string
}

export default function BasicTextField({ label, name, ...rest }: Props) {
  const [labelDisplay, setLabelDisplay] = useState(false);

  useEffect(() => {
    rest.value.length < 1 ? setLabelDisplay(false) : setLabelDisplay(true);
  }, [rest.value]);

  return (
    <>
    <div
      css={{
        position: "relative",
        border: rest.error ? "1px solid red" :`1px solid ${"#C0C0C0"}`,
        borderRadius: "10px",
        background: "#fff",
        height: "51.2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      <label htmlFor={name}
        css={{
          position: "absolute",
          top: labelDisplay ? "-11px" : "25px",
          left: "2%",
          background: "#fff",
          padding: "0 4%",
          fontSize: "14px",
          fontFamily: "'Nunito', sans-serif",
          transition: "top 0.2s ease-in",
          opacity: labelDisplay ? 1 : 0,
          zIndex: labelDisplay ? 0 : -1,
        }}
      >
        {label}
      </label>
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          paddingLeft: "3%",
          fontFamily:'"Nunito", sans-serif',
          fontSize:"1rem",
          fontWeight: rest.weight ? rest.weight : "",
         
        }}
        type={rest.type ? rest.type : "text"}
        value={rest.value}
        name={name}
        placeholder={labelDisplay ? "" : label}
        onChange={(e) => rest.setValue(e)}
        id = {name}
        pattern={rest.pattern}
        required = {rest.required}
         />
      {rest.withIcon && <>{rest.iconComponent}</>}
    </div>
    {rest.error &&  <p css = {{color:"red",
          fontFamily:'"Nunito", sans-serif',
          fontSize:"0.9rem"
        }}>{rest.error}</p>}
    </>
  );
}

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7c35ab',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#7c35ab',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7c35ab',
    },
  },
});

export const PasswordTextField = ({ label, ...rest }: Props) => {
  const [labelDisplay, setLabelDisplay] = useState(false);
  useEffect(() => {
    rest.value.length < 1 ? setLabelDisplay(false) : setLabelDisplay(true);
  }, [rest.value]);
  return (
    <>
    <div
      css={{
        position: "relative",
        border: rest.error ? "1px solid red" : `1px solid ${"#C0C0C0"}`,
        borderRadius: "10px",
        background: "#fff",
        height: "51.2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      <label
        css={{
          position: "absolute",
          top: labelDisplay ? "-11px" : "25px",
          left: "2%",
          background: "#fff",
          padding: "0 4%",
          fontSize: "14px",
          fontFamily: "'Nunito', sans-serif",
          transition: "top 0.2s ease-in",
          opacity: labelDisplay ? 1 : 0,
          zIndex: labelDisplay ? 0 : -1,
        }}
      >
        {label}
      </label>
      <input
        css={{
          border: "none",
          outline: "none",
          background: "inherit",
          width: "100%",
          fontFamily: "'Nunito', sans-serif",
          height: "100%",
          borderRadius: "10px",
          paddingLeft: "3%",fontSize:"1rem",
          fontWeight: rest.weight ? rest.weight : "",
        }}
        type={rest.visible ? "text" : "password"}
        value={rest.value}
        name={rest.name}
        placeholder={labelDisplay ? "" : label}
        onChange={(e) => rest.setValue(e)}
        pattern={rest.pattern}
        required = {rest.required}
      />

      <div
        css={css`
          transform: ${rest.visible ? "rotate(180deg)" : "rotate(0deg)"};
          cursor: pointer;
        `}
        onClick={() =>
          (rest.setVisible as React.Dispatch<React.SetStateAction<boolean>>)(
            !rest.visible
          )
        }
      >
        <Image
          src="/assets/svgs/eye_close.svg"
          alt="icon"
          width={13.39}
          height={6.55}
        />
      </div>
    </div>
    {rest.error &&  <p css = {{color:"red",
    fontFamily:'"Nunito", sans-serif',
    fontSize:"0.9rem"
  }}>{rest.error}</p>}
  </>
  );
};

export function PhoneTextField({ label, name, ...rest }: Props) {
  const [labelDisplay, setLabelDisplay] = useState(false);
  useEffect(() => {
    rest.value.length < 1 ? setLabelDisplay(false) : setLabelDisplay(true);
  }, [rest.value]);
  const[input, setInput] = useState("")
  const handleChange = (value:string) => {
    setInput(value)
  }
  useEffect(() => {
    if(rest.setPhoneValue){
      rest.setPhoneValue(input)
    }
  },[input])
  return (
    <>
    <div
      css={{
        position: "relative",
        border: rest.error ? "1px solid red" :`1px solid ${"#C0C0C0"}`,
        borderRadius: "10px",
        background: "#fff",
        height: "51.2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "13px",
      }}
    >
      <label htmlFor={name}
        css={{
          position: "absolute",
          top: labelDisplay ? "-18px" : "25px",
          left: "2%",
          background: "#fff",
          padding: "0 4%",
          fontSize: "14px",
          fontFamily: "'Nunito', sans-serif",
          transition: "top 0.2s ease-in",
          opacity: labelDisplay ? 1 : 0,
          zIndex: labelDisplay ? 0 : -1,
        }}
      >
        {label}
      </label>
      <PhoneInput
        value={rest.value}
        placeholder={labelDisplay ? "" : label}
        country = "ng"
        onChange={handleChange}
        inputProps = {{
          name:"phone",
          required:true
        }}
        containerStyle = {{
          height: "100%",
          width:"90%",
          border: "none",
          borderRadius:"11px 0 0 11px",
          marginLeft:"0.75%"
        }}
        inputStyle = {{
          width:"100%",
          height: "100%",
          border: "none"
        }}
        buttonStyle = {{
          border:"none",
          borderRadius:"10px 0 0 10px"
        }}
        /> 
      {rest.withIcon && <>{rest.iconComponent}</>}
    </div>
        {/* <PhoneInput  placeholder = 'Phone Number' value = {value} onChange = {() => setValue} defaultCountry = "NG"/>? */}
    {rest.error &&  <p css = {{color:"red",
          fontFamily:'"Nunito", sans-serif',
          fontSize:"0.9rem"
        }}>{rest.error}</p>}
    </>
  );
}