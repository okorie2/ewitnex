import styled from "@emotion/styled";

export const TableContainer = styled.div`
    width: 97%;
    margin: 0  auto;
    overflow: auto;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 3px -3px #00000029;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    border: 1px solid  #E4E4E4;
    box-shadow: 0px 0px 5px #00000029;
    color: ${(props) => "#393939"};
    position: relative;
    & thead {
        border-bottom: 1px solid  ${(props) => "#AEAEAE"};
    }
    & th,
    & td {
        padding: 0.3rem;
        padding-block: 0.7rem;
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
        border-bottom: 0.5px solid #E4E4E4;
        & td {
            font-size: 11.5px;
        padding-block: 0.5rem;
        vertical-align: top;
        }
    }
`