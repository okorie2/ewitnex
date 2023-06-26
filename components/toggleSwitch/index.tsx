/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { StyledToggle } from "styles/components/toggleSwitch";

const ToggleSwitch = ({isToggled, onToggle}: {
  isToggled: boolean
  onToggle: () => void
}) => {
  
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
