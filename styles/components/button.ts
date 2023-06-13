import styled from "@emotion/styled";
interface Props {
  background?: string;
  height?:string
}

export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.background ? props.background : props.theme.background.primary};
  border-radius: 56px;
  color: ${(props) => props.theme.common.white};
  height: ${(props) => props.height ? props.height : "64px"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
export const ButtonFormFilled = styled.button`
  height: 52px;
  background: transparent linear-gradient(180deg, #528ffe 0%, #7c35ab 100%) 0%
    0% no-repeat padding-box;
  border-radius: 26px;
  border: none;
  color: ${(props) => props.theme.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;

  font-family: "Nunito", sans-serif;
`;

export const ButtonFormOutline = styled.button`
  height: 52px;
  width: 100%;
  background: transparent;
  border: 1px solid ${(props) => props.theme.shadow.tertiary};
  border-radius: 26px;
  color: ${(props) => props.theme.common.black};
  display: flex;
  justify-content: center;
  gap: 7px;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  font-family: "Open Sans", sans-serif;
`;
