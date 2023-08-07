import styled from "@emotion/styled";

export const SignInLeftcss = styled.div`
  border: 3px solid ${(props) =>"#7C35AB"};
  max-height: 100vh;
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .top {
    position: relative;
    width: 47.5vw;
    flex-basis: 50%;
    height: 27vw;
    background:  #7c35ab;
    div {
      position: absolute;
      top: 2%;
      left: 5%;
    }
  }
  .btm {
    padding-block: 2%;
    height: calc(100vh - 28vw);
    padding-left: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* [screen.desktop]: {
                paddingTop: "3rem",
              
              },
              [screen.lg]: {
                paddingTop: "5rem",
              
              }, */
  }
`;
