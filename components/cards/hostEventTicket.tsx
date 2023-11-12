/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ITicket } from "types/event";

const Ticket = (props: ITicket) => {
  return (
    <div>
      <div>
        <h3 css={{ fontWeight: "bold", fontSize: "1.125rem" }}>
          {props.ticketName}
        </h3>
        <p css={{ fontSize: "0.875rem" }}>N{props.ticketPrice}</p>
        <p css={{ fontSize: "0.75rem", color: "#AEAEAE" }}>
          {props.ticketQty} Quantities
        </p>
      </div>
      <div css={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <Image src="/assets/svgs/pencil.svg" alt="" width={21} height={21} />
        <Image src="/assets/svgs/trash.svg" alt="" width={17.88} height={22} />
      </div>
    </div>
  );
};

export default Ticket;
