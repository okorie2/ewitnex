import styled from "@emotion/styled";

export const SignInLeftcss = styled.div`
  border: 4px solid ${(props) =>"#7C35AB"};
  height: 100vh;
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
    background: transparent linear-gradient(180deg, #528ffe 0%, #7c35ab 100%) 0%
      0% no-repeat padding-box;
    div {
      position: absolute;
      top: 2%;
      left: 5%;
    }
  }
  .btm {
    flex-basis: 50%;
    padding-top: 6.5rem;
    padding-left: 4%;
    /* [screen.desktop]: {
                paddingTop: "3rem",
              
              },
              [screen.lg]: {
                paddingTop: "5rem",
              
              }, */
  }
`;
