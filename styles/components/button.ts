import styled from "@emotion/styled";
interface Props {
  background?: string;
}
export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.background ? props.background : props.theme.background.primary};
  border-radius: 56px;
  color: ${(props) => props.theme.common.white};
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;
