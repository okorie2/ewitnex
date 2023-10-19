/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppThunkDispatch } from "redux/store";
import { StyledToggle } from "styles/components/toggleSwitch";

const ToggleSwitch = ({isToggled, onToggle}: {
  isToggled: boolean
  onToggle: () => void
}) => {
  const dispatch = useAppThunkDispatch();
  // const { user } = useAppSelector(({ user }) => user);
  // useEffect(() => {
  //   if(isToggled){
  //     const getUserData = async () => {
  //       await dispatch(loadUser('')).then((res) => {
  //         if(res.meta.requestStatus === "fulfilled"){
  //           console.log("done", user)
  //         }
  //       })
  //     }
  //     getUserData()
  //   }
  // },[isToggled])

  return (
    <div>
      <StyledToggle checked = {isToggled}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" css = {{
          '&:before': {
            content: isToggled? `"ON"`:`"OFF"`
          }
        }}/>
      </StyledToggle>
    </div>
  );
};

export default ToggleSwitch;
