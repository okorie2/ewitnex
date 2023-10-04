import { useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { screen } from "styles/theme";

export const TableContainer = styled.div`
  width: 97%;
  margin: 0 auto;
  overflow: auto;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  border-radius: 8px;
  /* box-shadow: 0px 4px 3px -3px #00000029; */
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: "none";
  }
  @media screen and (max-width: 780px) {
    border: 1px solid #e4e4e4;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: "none";
  }
  border: 1px solid #e4e4e4;
  box-shadow: 0px 0px 5px #00000029;
  padding-inline-start: 0.3rem;
  color: ${(props) => "#393939"};
  position: relative;
  & thead {
    border-bottom: 1px solid ${(props) => "#AEAEAE"};
  }
  & th,
  & td {
    padding-block: 0.6rem;
  }
  & th {
    text-align: left;
    font-weight: bold;
    font-size: 13px;
  }
  /* & th:first-child {
        text-align: center;
        padding-block: 0.5rem;
    } */
  & tbody tr {
    border-bottom: 0.5px solid #e4e4e4;
    & td {
      font-size: 11.5px;
      padding-block: 0.5rem;
      vertical-align: top;
    }
  }

  @media screen and (max-width: 780px) {
    width: 250vw;
    border: none;
  }
`;
