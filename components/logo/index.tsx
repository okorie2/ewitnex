/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ILogo {
  image: string;
  width?: number;
  height?: number;
}

const Logo = (props: ILogo) => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if(token){
      setLoggedIn(true)
    }
  },[])
  return (
    <div>
      <Link href={loggedIn ? "/dashboard/programs":"/"}>
        <Image
          src={props.image}
          width={props.width ? props.width : 93}
          height={props.height ? props.height : 43.13}
          alt="logo"
          css={{ marginTop: "0.8rem" }}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
