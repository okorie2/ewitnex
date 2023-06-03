import styled from "@emotion/styled";

export const TableContainer = styled.div`
    width: 95%;
    margin: 0  auto;
    overflow: auto;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.color.grey2};
    box-shadow: 0px 0px 5px #00000029;
    position: relative;
    & thead {
        border-bottom: 1px solid  ${(props) => props.theme.color.grey};
    }
    & th {
        text-align: left;
        font-weight: bold;
    }
    & th,
    & td {
        padding: 0.3rem;
        padding-block: 0.6rem;
        font-size: 0.7rem;
    }
    & tbody tr {
        border-bottom: 0.5px solid ${(props) => props.theme.color.grey2};;
        & td {
            padding: 0.5rem;
        }
    }
`