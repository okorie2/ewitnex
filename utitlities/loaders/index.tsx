/** @jsxImportSource @emotion/react */

import Logo from "@/components/logo";
import styled, { keyframes, css } from "styled-components";

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
const style = css`
  animation: ${breatheAnimation} 1s linear infinite;
`;

const Div = styled.div`
  ${style}
  height: 100px;
  width: 100px;
`;

const Loader = () => {
  return (
    <div
      css={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        background: "white",
      }}
    >
      <Div>
        <Logo image={"/assets/pngs/logo.png"} width={100} height={100} />
      </Div>
    </div>
  );
};

export default Loader;
