/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import Modal from "react-modal";
import { theme, screen } from "styles/theme";

interface IEventTicket {
  title: string;
  id: string;
  label: string;
  date: string;
  location: string;
  type: string;
  price: string;
}

const customStyles = {
  overlay: { backgroundColor: theme.background.black, zIndex: "3" },
  content: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: theme.background.black,
  },
};

const EventTicket = (props: IEventTicket) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        css={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1.2fr",
          [screen.desktopLg]: {
            marginInline: "auto",
          },
          width: "374px",
          cursor: "pointer",
        }}
      >
        <div
          css={{
            fontFamily: "'Nunito', sans-serif",
            border: `0.5px solid ${theme.shadow.tertiary}`,
            borderRadius: "20px",
            borderRight: "none",
            height: "140px",
            padding: "1rem",
          }}
        >
          <p
            css={{
              fontSize: "1.25rem",
              fontWeight: "800",
              marginBottom: "0.5rem",
            }}
          >
            {props.title}
          </p>
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            <span
              css={{
                color: theme.color.grey,
                paddingRight: "5px",
              }}
            >
              {props.id}
            </span>
            {props.label}
          </p>
          <p
            css={{
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            {props.date}
          </p>
          <p
            css={{
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
          >
            {props.location}
          </p>
        </div>
        <div
          css={{
            border: "0.5px solid #707070",
            borderRadius: "20px",
            borderLeft: "none",
            height: "140px",
            padding: "1rem",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          <p
            css={{
              fontSize: "1.625rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "0.2rem",
            }}
          >
            {props.type}
          </p>
          <p
            css={{
              fontSize: "2.375rem",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "0.2rem",
            }}
          >
            {props.price}
          </p>
          <p
            css={{
              fontSize: "0.875rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Make Payment
          </p>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <button onClick={() => setIsOpen(false)}>CloseModal</button>
        <div>
          <div
            css={{
              height: "100vh",
              width: "36%",
              background: "white",
              position: "absolute",
              right: "0",
              top: "0",
              padding: "3%",
            }}
          >
            <h2 css={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Place Order
            </h2>
            <p
              css={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: theme.color.grey,
              }}
            >
              Devfest Aba
            </p>
            <form>
              <div>
                <h3 css={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Ticket Information
                </h3>
                <p>Ticket For</p>
                <p>DevFest Aba</p>
                <div>
                  <div>
                    <p>Type</p>
                    <p>Regular</p>
                  </div>
                  <div>
                    <p>Quantity</p>
                    <p>2</p>
                  </div>
                  <div>
                    <p>Amount</p>
                    <p>$1,000</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 css={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Contact Information
                </h3>
                <form>
                  <div>
                    <label>First Name</label>
                    <input type="text" value="Blessed" />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" value="Onoriode" />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="text" value="blessingonoriode@gmail.com" />
                  </div>
                </form>
              </div>
              <div>
                <h3 css={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Payment Method
                </h3>
                <form>
                  <div>
                    <input
                      type="radio"
                      id="wallet"
                      name="payment_method"
                      value="Wallet"
                    />
                    <label htmlFor="wallet">Wallet</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="card"
                      name="payment_method"
                      value="Card"
                    />
                    <label htmlFor="card">Credit or Debit Card</label>
                    <div>
                      <label>Card Holders Name</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>Card Number</label>
                      <input type="number" />
                    </div>
                    <div>
                      <label>Expiry Date</label>
                      <input type="number" />
                    </div>
                    <div>
                      <label>CVV</label>
                      <input type="number" />
                    </div>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="bank_transfer"
                      name="payment_method"
                      value="Bank transfer"
                    />
                    <label htmlFor="bank_transfer">Bank Transfer</label>
                  </div>
                </form>
              </div>
              <div>
                <h3 css={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Ticket 1
                </h3>
                <form>
                  <div>
                    <label>First Name</label>
                    <input type="text" value="Blessed" />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" value="Onoriode" />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="text" value="blessingonoriode@gmail.com" />
                  </div>
                  <div>
                    <label>Username(Optional)</label>
                    <input type="text" value="Blessed_1" />
                  </div>
                </form>
              </div>
              <div>
                <h3 css={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Ticket 2
                </h3>
                <form>
                  <div>
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Username(Optional)</label>
                    <input type="text" />
                  </div>
                </form>
              </div>
              <button>CHECK OUT</button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EventTicket;
