/** @jsxImportSource @emotion/react */

import { useMediaQuery } from "@mui/material";
import Image from "next/image";

export const Lines = () => {
  const isTablet = useMediaQuery("(max-width: 900px)" );

  return (
    <>
      <div
        css={{
          width: "100%",
          height: "27px",
          position: "relative",
          marginBottom: "4%",
        }}
      >
        <Image
          src={isTablet ? "/assets/svgs/line-mobile.svg":"/assets/pngs/lines.png"}
          alt="line"
          css={{ objectFit: "cover" }}
          fill
        />
      </div>
    </>
  );
};
