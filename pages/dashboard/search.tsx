/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Filter from "public/assets/svgs/filter.svg";
import EventFilter from "fragments/eventFilter";

const Search = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  useEffect (() => {
    const html = document.querySelector('html')
    if (html) { 
      html.style.overflow = filterOpen ? "hidden" : "auto"
    }
  }, [filterOpen])
  return (
    <div
      css={{
        maxHeight: "100vh",
        width: "100vw",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      {filterOpen && (
        <EventFilter
          open={filterOpen}
          setOpen={() => setFilterOpen(!filterOpen)}
        />
      )}
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "#00000029 0px 0px 10px ",
          padding: "0% 5%",
          paddingTop: "1.125rem",
          height: "8vh",
          fontFamily: "'Poppins', sans-serif",
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          width: "100vw",
          background:"#fff"
        }}
      >
        <div onClick={() => router.back()}>
          <Image
            src="/assets/svgs/back.svg"
            alt="back_arrow"
            width={25}
            height={18}
          />
        </div>
        <div onClick={() => setFilterOpen(!filterOpen)}>
          <Image src={Filter} alt="fill" />
        </div>
      </div>
      <div
        css={{
          marginTop: "8vh",
          height: "92vh",
          display: "grid",
          gridTemplateRows: "10% 90%",
          padding: "0rem 1rem",
        }}
      >
        <div
          css={{
            borderBottom: "1px solid #AEAEAE",
            display: "grid",
            gridTemplateColumns: "5% 95%",
            placeItems: "end start",
            paddingBottom: "2%",
            paddingInline:"0.5rem",
            gap:"1rem"
          }}
        >
          <Image
            src="/assets/svgs/search.svg"
            width={24}
            height={25}
            alt="logo"
          />
          <input 
          placeholder="Search Ewitnex"
          css =  {{
            fontSize:"24px",
            fontWeight:"bold",
            paddingTop:"3%",
            width:"100%",
            border:"none"
          }}/>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Search;
