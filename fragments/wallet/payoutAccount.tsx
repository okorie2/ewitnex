/** @jsxImportSource @emotion/react */
import AddBankModal from "@/components/modals/walletModal/addBankModal";
import ViewBankDetailsModal from "@/components/modals/walletModal/viewBankDetailsModal";
import Image from "next/image";

import { useState } from "react";

const PayoutAccount = () => {
  const [account, setAccount] = useState(false);
  const [addBankModalOpen, setAddBankModalOpen] = useState(false)
  const [viewBankDetailsModalOpen, setviewBankDetailsModalOpen] = useState(false)

  return (
    <>
  <AddBankModal isOpen={addBankModalOpen} onRequestClose={() => setAddBankModalOpen(false)} />
  <ViewBankDetailsModal isOpen={viewBankDetailsModalOpen} onRequestClose={() => setviewBankDetailsModalOpen(false)} />
    <div
      css={{
        boxShadow: "0px 0px 5px #00000029",
        borderRadius: "10px",
        padding: "1rem",
      }}
    >
      <p css={{ color: "#171725", fontSize: "1.3rem", fontWeight: "bold" }}>
        Payout Account
      </p>
      <div
        css={{
          height: "80%",
          background: account ? "" : "#E4e4e4",
          marginTop: "0.8rem",
          padding: "0.8rem",
          borderRadius: "10px",
          display: "grid",
          gridTemplateColumns: "20% 80%",
          boxShadow: account ? "0px 0px 5px #00000029" : "",
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            paddingTop:  "0.5rem",
          }}
          onClick = {() => setAccount(!account)}
        >
          {account ? (
            <Image
              src="/assets/svgs/bank.svg"
              alt="bank"
              height={66}
              width={66}
            />
          ) : (
            <Image
              src="/assets/svgs/add-bank.svg"
              alt="add bank"
              height={72}
              width={72}
            />
          )}
        </div>
        <div
          css={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "60% 40%",
            paddingLeft: "0.1rem",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: account ? "" : "center",
              fontSize: "1.125rem",
              fontWeight: "bold",
              letterSpacing:"0.36px"
            }}
          >
            {account ? (
              <div css={{ display: "flex", justifyContent: "space-between" , width:"100%", paddingTop:"0.5rem"}}>
                <div>
                <p>First Bank <span css = {{fontWeight:"550"}}>| NGN</span></p>
                <p css = {{fontSize:"0.875rem", color: "#707070", fontWeight:"normal"}}>Account Number</p>
                <p css = {{fontSize:"1rem",fontWeight:"normal"}}>1234567890</p>
                </div>
                <div
                    css={{
                      height: "38px",
                      width: "30%",
                      background: "#7C35AB",
                      color: "#FFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                      fontWeight: "550",
                      fontSize:"1rem",
                      cursor:"pointer"
                    }}
                    onClick={() => setviewBankDetailsModalOpen(!viewBankDetailsModalOpen)}
                  >
                    View Details
                  </div>
              </div>
            ) : (
                <div>
              <p css={{
                 display: "flex", 
                 alignItems: "center",
                 color: "#7c35ab",
                 cursor:"pointer"
              }}
              onClick={() => setAddBankModalOpen(!addBankModalOpen)}>
                Add Bank account
                <Image
                  src="/assets/svgs/right.svg"
                  alt="add bank"
                  height={20}
                  width={20}
                  style={{ marginLeft: "1.5rem" }}
                />
              </p>
              </div>
            )}
          </div>
          <div
            css={{
              borderTop: "1px solid #aeaeae",
              color: "#AEAEAE",
              paddingTop: "0.5rem",
            }}
          >
            <p>Payout Account {account ? "Added" : "not added"}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PayoutAccount;
