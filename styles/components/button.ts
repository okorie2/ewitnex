import styled from "@emotion/styled";
interface Props {
  background?: string;
  height?:string
  border?:string
  width?:string
  color?:string
  fontSize?:string
}

export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.background ? props.background :"#7C35AB"};
  border-radius: 56px;
  color: ${(props) => props.color ? props.color : "#fff"};
  height: ${(props) => props.height ? props.height : "64px"};
  width: ${(props) => props.width ? props.width : "fit-content"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize ? props.fontSize : "1.5rem"};
  font-weight: bold;
  font-family: Nunito, 'sans-serif';
  border:${(props) => props.border ? props.border : "none"};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  };
  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.fontSize ? props.fontSize : "1.3rem"};
  }
`;
export const ButtonFormFilled = styled.button`
  height: 52px;
  background: #7c35ab;
  border-radius: 26px;
  border: none;
  color: ${(props) => "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  };
  font-family: "Nunito", sans-serif;
`;

export const ButtonFormOutline = styled.button<Props>`
  height: 52px;
  width: ${(props) => props.width ? props.width : "100%"};
  background: transparent;
  border:  ${(props) => props.border ? props.border : "1px solid #707070"};
  border-radius: 26px;
  color: ${(props) => "#000"};
  display: flex;
  justify-content: center;
  gap: 7px;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  };
  font-family: "Open Sans", sans-serif;
`;
