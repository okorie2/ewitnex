/** @jsxImportSource @emotion/react */
import Image from "next/image";
import {  useMediaQuery } from "@mui/material";

const EmptyNotification = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useMediaQuery("(max-width: 780px)");

  return (
    <div
      css={{
        width: isTablet ? "80vw":"100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: "1rem",
        marginLeft:isTablet ? "0.5rem":"-1rem"
        // boxShadow: "0px 0px 10px #00000029",
        // border:"1px solid #BBB"
      }}
    >
      <Image
        src="/assets/pngs/empty-notification.png"
        alt="empty page"
        height={300}
        width={410}
        priority
      />
      <p css={{ fontWeight: "700",fontSize: isTablet ?"1.3rem":"1.5rem" }}>
        Uh-oh, no notifications found!
      </p>
      <div css = {{textAlign:"center"}}>

        {children}
      </div>
    </div>
  );
};

export default EmptyNotification;
