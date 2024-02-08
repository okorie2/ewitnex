/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { useRouter } from "next/router";
import Slider from "@mui/material/Slider";
import Filter from "public/assets/svgs/filter.svg";
import Down from "public/assets/svgs/down_ar.svg";
import Left from "public/assets/svgs/left_ar.svg";
import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import RoundCheckbox from "@/components/inputs/RoundCheckbox";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useMediaQuery } from "@mui/material";
import { Button } from "styles/components/button";

function valuetext(value: number) {
  return `${value * 1000}`;
}

const EventFilter = ({
  open,
  setOpen,
  external,
}: {
  open: boolean;
  setOpen: () => void;
  external?: boolean;
}) => {
  const router = useRouter();
  const loggedIn = router.pathname === "/dashboard/programs";
  const isTablet = useMediaQuery("(max-width: 900px)");
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);
  const [actualPriceRange, setActualPriceRange] = useState(priceValue);
  const [showMoreDate, setShowMoreDate] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState(false);
  const [costType, setCostType] = useState("");
  const [focusedFilter, setFocusedFilter] = useState("");
  const theoptions = [
    { value: "any", label: "--" },
    { value: "Abia", label: "Abia" },
    { value: "Adamawa", label: "Adamawa" },
    { value: "Akwa Ibom", label: "Akwa Ibom" },
    { value: "Anambra", label: "Anambra" },
    { value: "Bauchi", label: "Bauchi" },
    { value: "Bayelsa", label: "Bayelsa" },
    { value: "Benue", label: "Benue" },
    { value: "Borno", label: "Borno" },
    { value: "Cross-River", label: "Cross-River" },
    { value: "Delta", label: "Delta" },
    { value: "Ebonyi", label: "Ebonyi" },
    { value: "Edo", label: "Edo" },
    { value: "Ekiti", label: "Ekiti" },
    { value: "Enugu", label: "Enugu" },
    { value: "Gombe", label: "Gombe" },
    { value: "Imo", label: "Imo" },
    { value: "Jigawa", label: "Jigawa" },
    { value: "Kaduna", label: "Kaduna" },
    { value: "Katsina", label: "Katsina" },
    { value: "Kano", label: "Kano" },
    { value: "Kebbi", label: "Kebbi" },
    { value: "Kogi", label: "Kogi" },
    { value: "Kwara", label: "Kwara" },
    { value: "Lagos", label: "Lagos" },
    { value: "Nasarawa", label: "Nasarawa" },
    { value: "Niger", label: "Niger" },
    { value: "Ogun", label: "Ogun" },
    { value: "Ondo", label: "Ondo" },
    { value: "Osun", label: "Osun" },
    { value: "Oyo", label: "Oyo" },
    { value: "Plateau", label: "Plateau" },
    { value: "Rivers", label: "Rivers" },
    { value: "Sokoto", label: "Sokoto" },
    { value: "Taraba", label: "Taraba" },
    { value: "Yobe", label: "Yobe" },
    { value: "Zamfara", label: "Zamfara" },
    { value: "Abuja", label: "Abuja" },
  ];
  const selectStyle: StylesConfig = {
    container: (styles, state) => ({
      ...styles,
      borderColor: state.isFocused ? "#7C35AB" : "",
    }),
    control: (styles, state) => ({
      ...styles,
      borderColor: state.isFocused ? "#7C35AB" : "#707070",
      ":hover": { border: "0.12rem solid #7C35AB" },
    }),
    menuList: (styles) => ({
      ...styles,
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#F5f5f5",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#AEAEAE",
        borderRadius: "10px",
        height: "5px",
        ":hover": {
          background: ` ${"#707070"}`,
        },
      },
    }),
    option: (styles, state) => ({
      ...styles,
      background: state.isSelected ? "#7C35AB" : "",
    }),
  };
  const events = [
    "All",
    "Social",
    "Cultural",
    "Educational",
    "Fundraising",
    "Business",
    "Sports",
    "Political",
    "Religious",
    "Music",
    "Theatre",
    "Film",
    "Food and Drink",
    "Art",
    "Book",
    "Gaming",
    "Health and Wellness",
    "Outdoor",
  ];

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };
  useEffect(() => {
    setActualPriceRange([priceValue[0] * 1000, priceValue[1] * 1000]);
  }, [priceValue]);

  return (
    <div
      css={{
        backgroundColor: "#fff",
        borderLeft: `1px solid ${"#E4E4E4"}`,
        borderRight: `1px solid ${"#E4E4E4"}`,
        fontFamily: "'Poppins', sans-serif",
        maxWidth: open
          ? isTablet
            ? "100vw"
            : "258px"
          : isTablet
          ? "80px"
          : "75px",
        width: open
          ? isTablet
            ? "100vw"
            : "258px"
          : isTablet
          ? "80px"
          : "75px",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        maxHeight: isTablet ? "100vh" : "inherit",
        height: isTablet ? "100vh" : "",
        position: isTablet ? "absolute" : "relative",
        paddingBottom: isTablet ? (loggedIn ? "20rem" : "5rem") : "",
        zIndex: "32",
        transition: "width 325ms cubic-bezier(0, 0, 0.2, 1) 0ms",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: isTablet ? "left" : "space-between",
          height: "80px",
          flexDirection: external ? "row-reverse" : "row",
          paddingInline: "1.5rem",
          borderBottom: open ? `1px solid ${"#E4E4E4"}` : "",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
        }}
        onClick={isTablet ? () => {} : setOpen}
      >
        {open && !isTablet && (
          <>
            {external ? (
              <Image src={Left} alt="left" />
            ) : (
              <Image
                src="/assets/svgs/elbow-right-light.svg"
                alt=""
                width={15}
                height={15}
              />
            )}
          </>
        )}
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexDirection: external ? "row-reverse" : "row",
          }}
        >
          {isTablet && loggedIn && (
            <div onClick={setOpen} css={{ marginTop: "0.5rem" }}>
              <Image
                src={"/assets/svgs/back.svg"}
                alt="close"
                width={25}
                height={25}
              />
            </div>
          )}
          {open && (
            <p css={{ fontSize: "1.125", fontWeight: "bold" }}>Filters</p>
          )}
          <div
            css={{
              padding: "0rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isTablet ? (
              <>
                {!loggedIn &&
                  (open ? (
                    <div css={{ marginTop: "0.5rem" }} onClick={setOpen}>
                      <Image
                        src={"/assets/svgs/close.svg"}
                        alt="close"
                        width={45}
                        height={45}
                      />
                    </div>
                  ) : (
                    <div css={{ marginTop: "0.5rem" }} onClick={setOpen}>
                      <Image src={Filter} alt="fill" />
                    </div>
                  ))}
              </>
            ) : (
              <Image src={Filter} alt="fill" />
            )}
          </div>
        </div>
      </div>
      <div css={{ overflowY: "auto" }}>
        {open && (
          <>
            <div
              css={{
                padding: "8% 2rem",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Image
                  src="/assets/svgs/location-light.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p css={{ fontWeight: "700" }}>Location</p>
              </div>
              {focusedFilter === "location" ? (
                <div
                  onClick={() => setFocusedFilter("")}
                  css={{
                    transform: "rotate(180deg)",
                    cursor: "pointer",
                    marginTop: "-2%",
                  }}
                >
                  <Image src={Down} alt="down" />
                </div>
              ) : (
                <div
                  onClick={() => setFocusedFilter("location")}
                  css={{ cursor: "pointer" }}
                >
                  <Image src={Down} alt="down" />
                </div>
              )}
            </div>
            {focusedFilter === "location" && (
              <div css={{ paddingInline: "1.5rem", marginTop: "-5%" }}>
                {/* <HostEventTextField type={"text"} placeholder={""} height="20px"/> */}
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={theoptions[0]}
                  isSearchable={true}
                  name="location"
                  options={theoptions}
                  styles={selectStyle}
                />
              </div>
            )}
            <div
              css={{
                padding: "8% 2rem",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Image
                  src="/assets/svgs/calender3.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p css={{ fontWeight: "700" }}>Date</p>
              </div>
              {focusedFilter === "date" ? (
                <div
                  onClick={() => {
                    setFocusedFilter("");
                    setShowMoreDate(false);
                  }}
                  css={{
                    transform: "rotate(180deg)",
                    cursor: "pointer",
                    marginTop: "-2%",
                  }}
                >
                  <Image src={Down} alt="down" />
                </div>
              ) : (
                <div
                  onClick={() => setFocusedFilter("date")}
                  css={{ cursor: "pointer" }}
                >
                  <Image src={Down} alt="down" />
                </div>
              )}
            </div>
            {focusedFilter === "date" && (
              <div css={{ paddingInline: "2rem", marginTop: "-5%" }}>
                <CheckSelect
                  value={"today"}
                  label={"Today"}
                  selected={selectedDateRange}
                  handleClick={() => setSelectedDateRange("today")}
                />
                <CheckSelect
                  value={"yesterday"}
                  label={"Yesterday"}
                  selected={selectedDateRange}
                  handleClick={() => setSelectedDateRange("yesterday")}
                />
                <CheckSelect
                  value={"weekend"}
                  label={"This weekend"}
                  selected={selectedDateRange}
                  handleClick={() => setSelectedDateRange("weekend")}
                />
                <CheckSelect
                  value={"custom"}
                  label={"Pick a date"}
                  selected={selectedDateRange}
                  handleClick={() => setSelectedDateRange("custom")}
                />
                {selectedDateRange === "custom" && (
                  <div
                    css={{
                      width: "110%",
                      marginLeft: "-5%",
                      marginBottom: "5%",
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker
                          defaultValue={dayjs("2022-04-17")}
                          sx={{
                            "& .MuiStack-root": {
                              "& .MuiTextField-root": {
                                minWidth: "160px",
                              },
                            },
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                )}
                {showMoreDate && (
                  <>
                    <CheckSelect
                      value={"week"}
                      label={"This Week"}
                      selected={selectedDateRange}
                      handleClick={() => setSelectedDateRange("week")}
                    />
                    <CheckSelect
                      value={"biweekly"}
                      label={"Next Two Weeks"}
                      selected={selectedDateRange}
                      handleClick={() => setSelectedDateRange("biweekly")}
                    />
                    <CheckSelect
                      value={"month"}
                      label={"This Month"}
                      selected={selectedDateRange}
                      handleClick={() => setSelectedDateRange("month")}
                    />
                    <CheckSelect
                      value={"year"}
                      label={"This Year"}
                      selected={selectedDateRange}
                      handleClick={() => setSelectedDateRange("year")}
                    />
                  </>
                )}
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    color: "#7C35AB",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowMoreDate(!showMoreDate)}
                >
                  <p>View {showMoreDate ? "less" : "more"}</p>
                  {showMoreDate ? (
                    <Image
                      src="/assets/svgs/elbow-up-purple.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                  ) : (
                    <Image
                      src="/assets/svgs/elbow-down-purple.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                  )}
                </div>
              </div>
            )}

            <div
              css={{
                padding: "8% 2rem",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Image
                  src="/assets/svgs/dollar-circle.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p css={{ fontWeight: "700" }}>Price</p>
              </div>
              {focusedFilter === "price" ? (
                <div
                  onClick={() => setFocusedFilter("")}
                  css={{
                    transform: "rotate(180deg)",
                    cursor: "pointer",
                    marginTop: "-2%",
                  }}
                >
                  <Image src={Down} alt="down" />
                </div>
              ) : (
                <div
                  onClick={() => setFocusedFilter("price")}
                  css={{ cursor: "pointer" }}
                >
                  <Image src={Down} alt="down" />
                </div>
              )}
            </div>
            {focusedFilter === "price" && (
              <div css={{ paddingInline: "2rem", marginTop: "-5%" }}>
                <CheckSelect
                  value={"free"}
                  label={"Free"}
                  selected={costType}
                  handleClick={() => setCostType("free")}
                />
                <CheckSelect
                  value={"paid"}
                  label={"Paid"}
                  selected={costType}
                  handleClick={() => setCostType("paid")}
                />
                {costType === "paid" && (
                  <div>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={priceValue}
                      onChange={handleChange}
                      valueLabelDisplay="off"
                      getAriaValueText={valuetext}
                      color="secondary"
                      sx={{
                        "& .MuiSlider-thumb": {
                          height: 24,
                          width: 24,
                          backgroundColor: "#fff",
                          border: "1px solid #AEAEAE",
                          boxShadow:
                            "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
                          "&:focus, &:hover, &.Mui-active": {
                            boxShadow:
                              "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
                            // Reset on touch devices, it doesn't add specificity
                            "@media (hover: none)": {
                              boxShadow:
                                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
                            },
                          },
                        },
                      }}
                    />
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: "-5%",
                      }}
                    >
                      <div
                        css={{
                          border: "1px solid #707070",
                          borderRadius: "4px",
                          height: "60px",
                          padding: "3% 4%",
                          fontSize: "0.9rem",
                        }}
                      >
                        <p>Minimum</p>
                        <p
                          css={{
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            marginTop: "10%",
                          }}
                        >
                          N<span>{actualPriceRange[0]}</span>
                        </p>
                      </div>

                      <div
                        css={{
                          border: "1px solid #707070",
                          borderRadius: "4px",
                          height: "60px",
                          padding: "3% 4%",
                          fontSize: "0.9rem",
                        }}
                      >
                        <p>Maximum</p>
                        <p
                          css={{
                            fontSize: "0.7rem",
                            fontWeight: "bold",
                            marginTop: "10%",
                          }}
                        >
                          N<span>{actualPriceRange[1]}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div
              css={{
                padding: "8% 2rem",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Image
                  src="/assets/svgs/brochure.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p css={{ fontWeight: "700" }}>Event Type</p>
              </div>
              {focusedFilter === "eventType" ? (
                <div
                  onClick={() => {
                    setFocusedFilter("");
                    setShowMoreEvents(false);
                  }}
                  css={{
                    transform: "rotate(180deg)",
                    cursor: "pointer",
                    marginTop: "-2%",
                  }}
                >
                  <Image src={Down} alt="down" />
                </div>
              ) : (
                <div
                  onClick={() => setFocusedFilter("eventType")}
                  css={{ cursor: "pointer" }}
                >
                  <Image src={Down} alt="down" />
                </div>
              )}
            </div>
            {focusedFilter === "eventType" && (
              <div css={{ paddingInline: "2rem", marginTop: "-5%" }}>
                {showMoreEvents
                  ? events.map((eventType) => (
                      <CheckSelect
                        value={eventType}
                        label={eventType}
                        selected={selectedEvent}
                        handleClick={() => setSelectedEvent(eventType)}
                      />
                    ))
                  : events
                      .slice(0, 3)
                      .map((eventType) => (
                        <CheckSelect
                          value={eventType}
                          label={eventType}
                          selected={selectedEvent}
                          handleClick={() => setSelectedEvent(eventType)}
                        />
                      ))}
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    color: "#7C35AB",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowMoreEvents(!showMoreEvents)}
                >
                  <p>View {showMoreEvents ? "less" : "more"}</p>
                  {showMoreEvents ? (
                    <Image
                      src="/assets/svgs/elbow-up-purple.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                  ) : (
                    <Image
                      src="/assets/svgs/elbow-down-purple.svg"
                      alt=""
                      width={12}
                      height={12}
                    />
                  )}
                </div>
              </div>
            )}
            {isTablet && (
              <div
                css={{
                  position: "fixed",
                  width: "100vw",
                  height: "6.5rem",
                  bottom: 0,
                  left: 0,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderTop: "1px solid #00000029",
                  background: "#fff",
                  zIndex: 32,
                }}
              >
                <Button
                  background="#fff"
                  border="1px solid #000"
                  color="#000"
                  height="52px"
                  width="8rem"
                  fontSize="1rem"
                  onClick={setOpen}
                >
                  CANCEL
                </Button>
                <Button
                  width="10rem"
                  height="52px"
                  fontSize="1rem"
                  onClick={setOpen}
                >
                  APPLY FILTER
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
    // {/* ) : (
    //   <div
    //     css={{
    //       maxWidth: "75px",
    //       display: "flex",
    //       alignItems: "flex-start",
    //       justifyContent: "center",
    //       borderLeft: `1px solid ${"#E4E4E4"}`,
    //       borderRight: `1px solid ${"#E4E4E4"}`,
    //     }}
    //   >
    //     <div
    //       css={{
    //         display: "flex",
    //         alignItems: "center",
    //         gap: "1rem",
    //         cursor: "pointer",
    //         marginTop: "1rem",
    //         background: isTablet ? "#E4E4E4" : "",
    //         padding: "0.75rem",
    //         borderRadius: "8px",
    //       }}
    //       onClick={setOpen}
    //     >
    //       <Image src={Filter} alt="filter" priority />
    //     </div>
    //   </div>
    // )} */}
  );
};

export default EventFilter;

export const CheckSelect = ({
  value,
  label,
  selected,
  labelColor,
  border,
  handleClick,
}: {
  value: string;
  label: string;
  selected: string;
  border?: string;
  labelColor?: string;
  handleClick: () => void;
}) => {
  return (
    <div
      css={{
        display: "flex",
        gap: "1rem",
        marginBlock: "0.5rem",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <RoundCheckbox
        checked={selected === value}
        border={border ? border : "#707070"}
      />
      <p
        css={{ fontWeight: "500", color: labelColor ? labelColor : "#707070" }}
      >
        {label}
      </p>
    </div>
  );
};
