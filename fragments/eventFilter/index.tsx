/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Filter from "public/assets/svgs/filter.svg";
import Down from "public/assets/svgs/down_ar.svg";
import Left from "public/assets/svgs/left_ar.svg";
import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import RoundCheckbox from "@/components/inputs/RoundCheckbox";

const EventFilter = ({
  open,
  setOpen,
  external,
}: {
  open: boolean;
  setOpen: () => void;
  external?: boolean;
}) => {
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [showMoreDate, setShowMoreDate] = useState(false);
  const [showMoreEvents, setShowMoreEvents] = useState(false);
  const [costType, setCostType] = useState("")
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
  const selectStyle : StylesConfig = {
    container : (styles, state) => ({...styles, borderColor: state.isFocused? "#7C35AB" : ""}),
    control : (styles, state) => ({...styles, borderColor: state.isFocused? "#7C35AB" : "#707070", ":hover": {border: "0.12rem solid #7C35AB"}})
  }
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

  return (
    <>
      {open ? (
        <div
          css={{
            backgroundColor: "#fff",
            borderLeft: `1px solid ${"#E4E4E4"}`,
            borderRight: `1px solid ${"#E4E4E4"}`,
            maxWidth: "258px",
            overflowY:"scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            maxHeight: "inherit"
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
              flexDirection: external ? "row-reverse" : "row",
              paddingInline: "1.5rem",
              borderBottom: `1px solid ${"#E4E4E4"}`,
              cursor: "pointer",
            }}
            onClick={setOpen}
          >
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
            <div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexDirection: external ? "row-reverse" : "row",
              }}
            >
              <p css={{ fontSize: "1.125", fontWeight: "bold" }}>Filters</p>
              <Image src={Filter} alt="filter" />
            </div>
          </div>
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
              <div onClick={() => setFocusedFilter("location")} css = {{cursor:"pointer"}}>
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
                styles = {selectStyle}
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
              <div onClick={() => setFocusedFilter("date")} css = {{cursor:"pointer"}}>
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
                <div>Insert calendar here</div>
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
                  cursor: "pointer"
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
              <div onClick={() => setFocusedFilter("price")} css = {{cursor:"pointer"}}>
                <Image src={Down} alt="down" />
              </div>
            )}
          </div>
          {focusedFilter === "price" && 
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
                <div>Insert Range here</div>
              )}
            </div>
          }
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
              <div onClick={() => setFocusedFilter("eventType")} css = {{cursor:"pointer"}}>
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
                  cursor: "pointer"
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
        </div>
      ) : (
        <div
          css={{
            maxWidth: "75px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            borderLeft: `1px solid ${"#E4E4E4"}`,
            borderRight: `1px solid ${"#E4E4E4"}`,
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              cursor: "pointer",
              marginTop: "2rem",
            }}
            onClick={setOpen}
          >
            <Image src={Filter} alt="filter" />
          </div>
        </div>
      )}
    </>
  );
};

export default EventFilter;

const CheckSelect = ({
  value,
  label,
  selected,
  handleClick,
}: {
  value: string;
  label: string;
  selected: string;
  handleClick: () => void;
}) => {
  return (
    <div
      css={{ display: "flex", gap: "1rem", marginBlock: "0.5rem" , cursor:"pointer"}}
      onClick={handleClick}
    >
      <RoundCheckbox checked={selected === value} />
      <p css={{ fontWeight: "500", color: "#707070" }}>{label}</p>
    </div>
  );
};
