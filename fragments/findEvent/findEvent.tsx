/** @jsxImportSource @emotion/react */

import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Button } from "styles/components/button";
import { screen } from "styles/theme";
import SearchSelect from "./searchSelect";

export default function FindEventFragment() {
  const desktop = useMediaQuery("(max-width:1024px)");
  const [searchData, setSearchData] = useState({
    location: "",
    eventType: "",
    category:"",
  })
  const handleSelectValue = (name: string , value: string) => {
    console.log("clicked")
    setSearchData({...searchData, [name]: value})
    console.log(searchData)
  }
  return (
    <div
      css={{
        width: "93%",
        margin: "auto",
        backgroundColor: "#fff",
        boxShadow: "#00000029 0px 0px 10px",
        borderRadius: "56px",
        marginTop: "2%",
        fontFamily: "'Poppins', sans-serif",
        height: "6.2rem",
        display: "flex",
        alignItems: "center",
        padding: "0 3rem",
        justifyContent: "space-between",
        [screen.desktop]: {
          gap: "3%",
          padding: "0 2rem",
        },
        [screen.lg]: {
          gap: "5%",
          padding: "0 2rem",
        },
      }}
    >
      <SearchSelect
        menuList={[
          "Abia",
          "Adamawa",
          "Akwa Ibom",
          "Anambra",
          "Bauchi",
          "Bayelsa",
          "Benue",
          "Borno",
          "Cross-River",
          "Delta",
          "Ebonyi",
          "Edo",
          "Ekiti",
          "Enugu",
          "Gombe",
          "Imo",
          "Jigawa",
          "Kaduna",
          "Katsina",
          "Kano",
          "Kebbi",
          "Kogi",
          "Kwara",
          "Lagos",
          "Nasarawa",
          "Niger",
          "Ogun",
          "Ondo",
          "Osun",
          "Oyo",
          "Plateau",
          "Rivers",
          "Sokoto",
          "Taraba",
          "Yobe",
          "Zamfara",
        ]}
        placeholder="Search events in"
        value = {searchData.location}
        handleSelect = {handleSelectValue}
        name = "location"
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "17vw" : "15vw"}
        paddingInline="0"
        height="24rem"
        width= "120%"
      />
      <SearchSelect
        menuList={[
          "Social",
          "Cultural",
          "Educational",
          "Fundraising",
          "Business",
          "Sports",
          "Political",
          "Religious",
          "Music",
          "Theatre",
          "Film",
          "Food and Drink",
          "Art",
          "Book",
          "Gaming",
          "Health and Wellness",
          "Outdoor",
        ]}
        placeholder="Event Type"
        name = "eventType"
        value = {searchData.eventType}
        handleSelect = {handleSelectValue}
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "9vw" : "10vw"}
        height="20rem"
        width="140%"
      />
      <SearchSelect
        menuList={[
          "0 - 50,000",
          "50,000 - 100,000",
          "100,000 - 500,000",
          "500,000 - 1,000,000",
          "1,000,000 - 5,000,000",
          "5,000,000 - 10,000,000",
        ]}
        placeholder="Price Range"
        name = "price"
        value= ""
        handleSelect = {() => {}}
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "10vw" : "11vw"}
        width="140%"
      />
      <SearchSelect
        menuList={[
          "Social",
          "Cultural",
          "Educational",
          "Fundraising",
          "Business",
          "Sports",
          "Political",
          "Religious",
          "Music",
          "Theatre",
          "Film",
          "Food and Drink",
          "Art",
          "Book",
          "Gaming",
          "Health and Wellness",
          "Outdoor",
        ]}
        placeholder="Category"
        name = "category"
        value = {searchData.category}
        handleSelect = {handleSelectValue}
        onChange={(e) => console.log(e.target.value)}
        inputWidth={desktop ? "11vw" : "9vw"}
        height="20rem"
        width="140%"
      />

      <Button
        css={{
          width: "13rem",
          [screen.desktop]: { width: "12rem" },
          [screen.lg]: {},
        }}
      >
        Find Event
      </Button>
    </div>
  );
}
