/** @jsxImportSource @emotion/react */
import Image from "next/image";
import {  useMediaQuery } from "@mui/material";

const EmptyFolderState = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <div
      css={{
        width: isTablet ? "80vw":"50vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: "1rem",
        // boxShadow: "0px 0px 10px #00000029",
        // border:"1px solid #BBB"
      }}
    >
      <Image
        src="/assets/pngs/emptyFolderState.png"
        alt="empty page"
        height={200}
        width={200}
        priority
      />
      <p css={{ fontWeight: "700", fontSize: isTablet ?"1.3rem":"1.5rem" }}>
        Uh oh, its a bit empty in here!
      </p>
      {children}
    </div>
  );
};

export default EmptyFolderState;
