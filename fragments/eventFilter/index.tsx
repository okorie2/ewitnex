/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Filter from "public/assets/svgs/filter.svg";
import Down from "public/assets/svgs/down_ar.svg";
import Left from "public/assets/svgs/left_ar.svg";

const EventFilter = ({
  open,
  setOpen,
  external,
}: {
  open: boolean;
  setOpen: () => void;
  external?: boolean;
}) => {
  return (
    <>
      {open ? (
        <div
          css={{
            backgroundColor: "#fff",
            borderLeft: `1px solid ${"#E4E4E4"}`,
            borderRight: `1px solid ${"#E4E4E4"}`,
            maxWidth: "258px",
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
              padding: "8% 1.5rem",
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
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 1.5rem",
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
            <Image src={Down} alt="down" />
          </div>
          <div
            css={{
              padding: "8% 1.5rem",
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
            <Image src={Down} alt="down" />
          </div>{" "}
          <div
            css={{
              padding: "8% 1.5rem",
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
            <Image src={Down} alt="down" />
          </div>
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
