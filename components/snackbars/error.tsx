import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorSnackBar = ({open, message, handleClose}:{
    open:boolean
    message:string
    handleClose: () => void
}) => {

  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin ={{vertical:"bottom", horizontal:"right"}}>
        <Alert onClose={handleClose}  sx={{ width: "100%" }} severity ="error">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ErrorSnackBar;
