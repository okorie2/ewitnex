import styled from "@emotion/styled";

interface Props {
  small?: boolean;
}

export const H1 = styled.h1<Props>`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: ${"'Poppins', sans-serif"};
  text-transform: ${(props) => (props.small ? "none" : "uppercase")};
  color: ${(props) => (props.color ? props.color : props.theme.common.white)};
  @media screen and (max-width: 1340px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => (props.color ? props.color : props.theme.common.black)};
  font-weight: bold;
  font-family: ${"'Poppins', sans-serif"};
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => (props.color ? props.color : props.theme.common.black)};
  font-weight: bold;
  font-family: ${"'Poppins', sans-serif"};
`;

export const H4 = styled.h4`
  font-size: 0.875rem;
  color: ${(props) => (props.color ? props.color : props.theme.common.black)};
  font-weight: 600;
  font-family: ${"'Poppins', sans-serif"};
`;
