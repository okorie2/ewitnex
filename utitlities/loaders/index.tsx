/** @jsxImportSource @emotion/react */

import Logo from "@/components/logo";
import { TailSpin } from "react-loader-spinner";

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
      <TailSpin color={"#7c35ab"} width={150} height={150} />
    </div>
  );
};

export default Loader;
