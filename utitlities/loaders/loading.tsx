/** @jsxImportSource @emotion/react */
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div
        css={{
          height: "65vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TailSpin color={"#7c35ab"} width={100} height={100} />
      </div>
    </>
  );
};
export default Loading;
