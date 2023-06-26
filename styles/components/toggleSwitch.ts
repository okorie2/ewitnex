import styled from "@emotion/styled";

type ToggleProps = {
    checked:boolean
}

export const StyledToggle = styled.label<ToggleProps>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  z-Index: 3;
  cursor: pointer;

  & input[type="checkbox"] {
    display: none;
  }
  .switch {
    position: absolute;
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 17px;
    border: 1px solid  #707070;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }

  .switch::before {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: #707070;
    border-radius: 50%;
    transition: transform 0.3s ease;
    
    /* content: ${(props) => props.checked ? "ON" : "OFF"}; */
  }

  & input[type="checkbox"]:checked + .switch::before {
    transform: translateX(30px);
    background-color: #34b283;
  }

  & input[type="checkbox"]:checked + .switch {
    background-color: #34b2834A;
  }
`;
