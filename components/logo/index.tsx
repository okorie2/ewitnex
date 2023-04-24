/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/assets/pngs/logo.png"
          width={93}
          height={43.13}
          alt="logo"
          css={{ marginTop: "0.8rem" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
