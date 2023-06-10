import styled from "@emotion/styled";

export const TableContainer = styled.div`
    width: 97%;
    margin: 0  auto;
    overflow: auto;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    border-radius: 12px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.grey2};
    color: ${(props) => props.theme.color.tableBlack};
    box-shadow: 0px 0px 5px #00000029;
    position: relative;
    & thead {
        border-bottom: 1px solid  ${(props) => props.theme.color.grey};
    }
    & th,
    & td {
        padding: 0.5rem;
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
        border-bottom: 0.5px solid ${(props) => props.theme.color.grey2};;
        & td {
            font-size: 11.5px;
        padding-block: 0.5rem;
        vertical-align: top;
        }
    }
`