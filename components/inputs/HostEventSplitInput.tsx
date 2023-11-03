/** @jsxImportSource @emotion/react */
import React, { SetStateAction, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

interface IHostEventTimeDate {
  label: string;
  placeholder1: string;
  placeholder2: string;
  input2: boolean;
  disabled?: boolean;
  setParentValue: React.Dispatch<SetStateAction<string>>;
}
const HostEventTimeDate = (props: IHostEventTimeDate) => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [value, setValue] = React.useState<Dayjs | null>();
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>();
  useEffect(() => {
    props.setParentValue(
      `${value?.toString().split(" ").slice(0, 4).join(" ")}, ${timeValue
        ?.toString()
        .split(" ")
        .slice(4, 6)
        .join(" ")}`
    );
  }, [value, timeValue]);
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
          border: "1px solid #AEAEAE",
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
            border: "none",
            borderRight: "1px solid #AEAEAE",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "DatePicker",
                "MobileDatePicker",
                "DesktopDatePicker",
                "StaticDatePicker",
              ]}
              sx={{
                width: "100%",
              }}
            >
              <DatePicker
                views={["year", "month", "day"]}
                format="DD/MM/YYYY"
                value={value}
                slotProps={{
                  textField: { placeholder: props.placeholder1 },
                }}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  fieldset: {
                    border: "none",
                    width: "100%",
                  },
                  input: {
                    fontFamily: "Nunito, sans-serif",
                  },
                }}
                disabled={props.disabled}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div
          css={{
            width: "50%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.input2 && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["TimePicker", "TimePicker"]}
                sx={{
                  width: "100%",
                }}
              >
                <TimePicker
                  value={timeValue}
                  onChange={(newValue) => setTimeValue(newValue)}
                  slotProps={{
                    textField: { placeholder: props.placeholder2 },
                  }}
                  sx={{
                    width: "100%",
                    fieldset: {
                      border: "none",
                      width: "100%",
                    },
                    input: {
                      fontFamily: "Nunito, sans-serif",
                    },
                    "&.MuiFormControl-root.MuiTextField-root": {
                      minWidth: "100px",
                    },
                  }}
                  disabled={props.disabled}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostEventTimeDate;
