/** @jsxImportSource @emotion/react */

import Image from "next/image";

export const Lines = () => {
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
          src="/assets/pngs/lines.png"
          alt="line"
          css={{ objectFit: "cover" }}
          fill
        />
      </div>
    </>
  );
};
