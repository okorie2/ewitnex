/** @jsxImportSource @emotion/react */
import { Tooltip } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const LandingPageSearchInput = ({ placeholder }: { placeholder: string }) => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  return (
    <div
      css={{
        height: "64px",
        background: "#FFF",
        width: isTablet ? "100%" : "75%",
        borderRadius: "56px",
        paddingLeft: "5%",
        display: "grid",
        gridTemplateColumns: "55% 45%",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          height: "80%",
          marginBlock: "auto",
          fontFamily: '"Poppins", sans-serif',
          color: "#707070",
          fontSize: "16px",
          border: "none",
          outline: "none",
        }}
      />
      <Tooltip title="Coming Soon" style={{ opacity: 0.8 }}>
        <button
          type="button"
          css={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "90%",
            width: "90%",
            background: "#7c35ab",
            borderRadius: "56px",
            marginBlock: "auto",
            marginLeft: "7%",
            paddingInline: "3%",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <Image
            src="/assets/svgs/big-search.svg"
            alt=""
            width={30}
            height={30}
          />
          <p
            css={{
              fontSize: "1.4rem",
              fontWeight: "600",
              letterSpacing: "0.32px",
              color: "#FFF",
            }}
          >
            Search
          </p>
        </button>
      </Tooltip>
    </div>
  );
};

export default LandingPageSearchInput;
