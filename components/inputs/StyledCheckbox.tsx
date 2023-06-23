import React, { ChangeEvent } from 'react'
import Checkbox from '@mui/material/Checkbox';

const StyledCheckbox = ({checked, indeterminate, onChange}: {
  checked: boolean
  indeterminate?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <Checkbox 
    checked={checked}
    indeterminate = {indeterminate}
    onChange={onChange}
    size="small"
    sx={{
      color: "#7C35AB",
      '&.Mui-checked': {
        color: "#7C35AB",
      }
    }}
    />
  )
}

export default StyledCheckbox