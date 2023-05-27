import { theme } from "styles/theme";

export const inactiveButtonStyle = {
    width: "50%",
    height: "100%",
    borderRadius: "66px",
    border: "none",
    backgroundColor: theme.background.secondary2,
    color: theme.color.grey,
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
  };
  
 export const activeButtonStyle = {
    width: "50%",
    height: "100%",
    borderRadius: "66px",
    border: "none",
    backgroundColor: theme.background.lightGreen,
    color: theme.common.white,
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
  };