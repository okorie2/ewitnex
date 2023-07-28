/** @jsxImportSource @emotion/react */
import Image from "next/image";

const LandingPageSearchInput = ({placeholder}:{
    placeholder:string
}) => {
  return (
    <div
      css={{
        height: "64px",
        background: "#FFF",
        width: "75%",
        borderRadius: "56px",
        paddingLeft: "5%",
        display: "grid",
        gridTemplateColumns: "55% 45%",
      }}
    >
      <input 
       type = "text"
       placeholder = {placeholder}
       style = {{
        height: "80%",
        marginBlock: "auto",
        fontFamily: '"Poppins", sans-serif',
        color: "#707070",
        fontSize: "16px",
        border: "none",
        outline: "none",
       }}
      />
      <div
        css={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "90%",
          width: "90%",
          background: "#7c35ab",
          borderRadius: "56px",
          marginBlock: "auto",
          marginLeft: "7%",
          paddingInline: "3%"
        }}
      >
        <Image
          src="/assets/svgs/big-search.svg"
          alt=""
          width={30}
          height={30}
        />
        <p css = {{fontSize: "1.4rem", fontWeight: "600", letterSpacing: "0.32px", color: "#FFF"}}>Search</p>
      </div>
    </div>
  );
};

export default LandingPageSearchInput;
