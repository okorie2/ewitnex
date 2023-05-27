import * as React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

interface ITooltipComp {
  image: string;
}

const TooltipComp = (props: ITooltipComp) => {
  return (
    <Tooltip title="info" placement="top" arrow>
      <Image src={props.image} alt="" width={14.02} height={14.02} />
    </Tooltip>
  );
};

export default TooltipComp;
