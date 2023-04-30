/** @jsxImportSource @emotion/react */

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ILogo {
  image: string;
  width?: number;
  height?: number;
}

const Logo = (props: ILogo) => {
  return (
    <div>
      <Link href="/">
        <Image
          src={props.image}
          width={props.width ? props.width : 93}
          height={props.height ? props.height : 43.13}
          alt="logo"
          css={{ marginTop: "0.8rem" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
