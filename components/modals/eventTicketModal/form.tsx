/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { screen } from "styles/theme";
import TicketTextField from "@/components/inputs/TicketTextField";
import { ButtonFormFilled } from "styles/components/button";
import HostEventTextField from "@/components/inputs/hostEventTextField";
import BasicTextField from "@/components/inputs/BasicTextField";

const EventTicketForm = ({setShowSummary}:{setShowSummary:() => void}) => {
  const[formDetails, setFormDetails] = useState({
    firstName:"",
    lastName:"",
    emailAddress:"",
    confirmEmailAddress:""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  return (
    <form
      css={{
        width: "100%",
        height: "90%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#F5f5f5",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#AEAEAE",
          borderRadius: "8px",
          height: "1px",
          ":hover": {
            background: ` ${"#707070"}`,
          },
        },
        display: "grid",
        paddingBottom: "2rem",
      }}
    >
      <div
        css={{
          fontWeight: "bold",
          marginBottom: "2rem",
          width: "90%",
          display: "grid",
          gap: "1.5rem",
        }}
      >
        <div>
          <h3 css={{ fontSize: "1.25rem", marginBottom: "1.125rem" }}>
            Ticket Information
          </h3>
          <p
            css={{
              marginBottom: "0.75rem",
              fontSize: "1rem",
            }}
          >
            Ticket For
          </p>
          <p>DevFest Aba</p>
        </div>
        <div>
          <p
            css={{
              fontSize: "0.875rem",
              marginBottom: "0.75rem",
            }}
          >
            Type
          </p>
          <p>Regular</p>
        </div>
        <div css={{ width: "47.5%" }}>
          <p
            css={{
              fontSize: "0.875rem",
              marginBottom: "0.75rem",
            }}
          >
            Quantity
          </p>
          <HostEventTextField
            type={"select"}
            placeholder={""}
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ]}
          />
        </div>
        <div>
          <p
            css={{
              fontSize: "0.875rem",
              marginBottom: "0.75rem",
            }}
          >
            Amount
          </p>
          <p>$1,000</p>
        </div>
      </div>
      <div css={{ marginBottom: "2rem" , width:"95%"}}>
        <h3
          css={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "1.125rem",
          }}
        >
          Contact Information
        </h3>
        <form css={{ display: "grid", gap: "2rem" }}>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              [screen.desktopLg]: {
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              },
            }}
          >
            <BasicTextField label="First Name" name = "firstName" value={formDetails.firstName} setValue={handleChange} weight="bold" />
            <BasicTextField label="Last Name" name = "lastName" value={formDetails.lastName} setValue={handleChange}  weight="bold"/>
          </div>
          <BasicTextField
            label="Email Address"
            value={formDetails.emailAddress}
            name="emailAddress"
            setValue={handleChange}
            weight = "bold"
          />
          <BasicTextField
             label="Confirm Email Address"
             value={formDetails.confirmEmailAddress}
             name="confirmEmailAddress"
             setValue={handleChange}
             weight = "bold"
          />
        </form>
      </div>
      <div css={{ marginBottom: "2rem" , width:"95%"}}>
        <h3
          css={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "1.125rem",
          }}
        >
          Payment Method
        </h3>
        <form css={{ display: "grid", gap: "1.5rem" }}>
          <div
            css={{
              border: `1px solid ${"#E4E4E4"}`,
              borderRadius: "10px",
              padding: "1.2rem 0.5rem 0.8rem",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            <input
              type="radio"
              id="wallet"
              name="payment_method"
              value="Wallet"
              checked
            />
            <label
              htmlFor="wallet"
              css={{ marginLeft: "1rem", fontWeight: "bold" }}
            >
              Wallet
            </label>
          </div>
          <div
            css={{
              border: `1px solid ${"#E4E4E4"}`,
              borderRadius: "10px",
              padding: "1.2rem 0.5rem 0.8rem",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            <div css={{ marginBottom: "2rem" }}>
              <input
                type="radio"
                id="card"
                name="payment_method"
                value="Card"
              />
              <label
                htmlFor="card"
                css={{ marginLeft: "1rem", fontWeight: "bold" }}
              >
                Credit or Debit Card
              </label>
            </div>

            <div
              css={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              <TicketTextField label="Card Holders Name" value="" />
              <TicketTextField label="Card Number" value="" type="number" />
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  [screen.desktopLg]: {
                    gridTemplateColumns: "1fr",
                  },
                }}
              >
                <TicketTextField label="Expiry Date" value="" type="number" />
                <TicketTextField label="CVV" value="" type="number" />
              </div>
            </div>
          </div>
          <div
            css={{
              border: `1px solid ${"#E4E4E4"}`,
              borderRadius: "10px",
              padding: "1.2rem 0.5rem 0.8rem",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            <input
              type="radio"
              id="bank_transfer"
              name="payment_method"
              value="Bank transfer"
            />
            <label
              htmlFor="bank_transfer"
              css={{ marginLeft: "1rem", fontWeight: "bold" }}
            >
              Bank Transfer
            </label>
          </div>
        </form>
      </div>
      <div css={{ marginBottom: "2rem", width:"95%" }}>
        <h3
          css={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Ticket 1
        </h3>
        <form css={{ display: "grid", gap: "2rem" }}>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              [screen.desktopLg]: {
                gridTemplateColumns: "1fr",
                gap: "2rem",
              },
            }}
          >
            <BasicTextField label="First Name"  value="Blessed" name = "" setValue={handleChange} weight = "bold"/>
            <BasicTextField label="Last Name" value="Onoriode" name = "" setValue={handleChange} weight = "bold"/>
          </div>
          <BasicTextField
            label="Email Address"
            value="blessingonoriode@gmail.com"
            name = "" 
            setValue={handleChange}
            weight = "bold"
          />
          <BasicTextField label="Username(Optional)" value="Blessed_1"  name = "" setValue={handleChange} weight = "bold"/>
        </form>
      </div>
      <div css={{ marginBottom: "2rem" , width:"95%"}}>
        <h3
          css={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Ticket 2
        </h3>
        <form css={{ display: "grid", gap: "2rem" }}>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              [screen.desktopLg]: {
                gridTemplateColumns: "1fr",
                gap: "2rem",
              },
            }}
          >
             <BasicTextField label="First Name"  value="" name = "" setValue={handleChange} weight = "bold"/>
            <BasicTextField label="Last Name" value="" name = "" setValue={handleChange} weight = "bold"/>
          </div>
          <BasicTextField
            label="Email Address"
            value=""
            name = "" 
            setValue={handleChange}
            weight = "bold"
          />
          <BasicTextField label="Username(Optional)" value=""  name = "" setValue={handleChange} weight = "bold"/>
        </form>
      </div>
      <ButtonFormFilled css={{ marginTop: "2rem" }} onClick={setShowSummary}>CHECK OUT</ButtonFormFilled>
    </form>
  );
};

export default EventTicketForm;
