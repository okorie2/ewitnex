/** @jsxImportSource @emotion/react */

import React from "react";
import { theme, screen } from "styles/theme";
import TicketTextField from "@/components/inputs/TicketTextField";
import { ButtonFormFilled } from "styles/components/button";

const EventTicketForm = () => {
  return (
    <form
      css={{
        width: "100%",
        height: "90%",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        display: "grid",
        paddingBottom: "2rem",
      }}
    >
      <div css={{ fontWeight: "bold", marginBottom: "2rem" }}>
        <h3 css={{ fontSize: "1.25rem", marginBottom: "1.125rem" }}>
          Ticket Information
        </h3>
        <p
          css={{
            fontSize: "0.875rem",
          }}
        >
          Ticket For
        </p>
        <p
          css={{
            marginBlock: "0.6rem 1.8rem",
          }}
        >
          DevFest Aba
        </p>
        <div
          css={{
            display: "grid",
            gap: "2rem",
          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
            <div>
              <p
                css={{
                  fontSize: "0.875rem",
                  marginBottom: "0.75rem",
                }}
              >
                Quantity
              </p>
              <p>2</p>
            </div>
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
      </div>
      <div css={{ marginBottom: "2rem" }}>
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
                gridTemplateColumns: "1fr",
                gap: "2rem",
              },
            }}
          >
            <TicketTextField label="First Name" value="Blessed" />
            <TicketTextField label="Last Name" value="Onoriode" />
          </div>
          <TicketTextField
            label="Email Address"
            value="blessingonoriode@gmail.com"
          />
          <TicketTextField
            label="Confirm Email"
            value="blessingonoriode@gmail.com"
          />
        </form>
      </div>
      <div css={{ marginBottom: "2rem" }}>
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
              border: `1px solid ${theme.shadow.border}`,
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
              border: `1px solid ${theme.shadow.border}`,
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
              border: `1px solid ${theme.shadow.border}`,
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
      <div css={{ marginBottom: "2rem" }}>
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
            <TicketTextField label="First Name" value="Blessed" />
            <TicketTextField label="Last Name" value="Onoriode" />
          </div>
          <TicketTextField
            label="Email Address"
            value="blessingonoriode@gmail.com"
          />
          <TicketTextField label="Username(Optional)" value="Blessed_1" />
        </form>
      </div>
      <div css={{ marginBottom: "2rem" }}>
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
            <TicketTextField label="First Name" value="" />
            <TicketTextField label="Last Name" value="" />
          </div>
          <TicketTextField label="Email Address" value="" />
          <TicketTextField label="Username(Optional)" value="" />
        </form>
      </div>
      <ButtonFormFilled css={{ marginTop: "2rem" }}>CHECK OUT</ButtonFormFilled>
    </form>
  );
};

export default EventTicketForm;
