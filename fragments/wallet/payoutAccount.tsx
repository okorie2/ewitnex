/** @jsxImportSource @emotion/react */
import AddBankModal from "@/components/modals/walletModal/addBankModal";
import ViewBankDetailsModal from "@/components/modals/walletModal/viewBankDetailsModal";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/router";

import { useEffect, useState } from "react";

const PayoutAccount = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const router = useRouter();
  const [account, setAccount] = useState(false);
  const [addBankModalOpen, setAddBankModalOpen] = useState(false)
  const [viewBankDetailsModalOpen, setviewBankDetailsModalOpen] = useState(false)
  useEffect(() => {
    if (isTablet) {
      const refuseBackButton = () => {
        window.onpopstate = () => {
          router.push(router.pathname);
        };
      };
      if (addBankModalOpen || viewBankDetailsModalOpen) {
        refuseBackButton();
      } else {
        window.onpopstate = () => {
          router.push("/dashboard/profile");
        };
      }
    }
  }, [addBankModalOpen,viewBankDetailsModalOpen]);
  return (
    <>
  <AddBankModal isOpen={addBankModalOpen} onRequestClose={() => setAddBankModalOpen(false)} />
  <ViewBankDetailsModal isOpen={viewBankDetailsModalOpen} onRequestClose={() => setviewBankDetailsModalOpen(false)} />
    <div
      css={{
        boxShadow: isTablet ? "":"0px 0px 5px #00000029",
        borderRadius: isTablet ? "":"10px",
        padding: isTablet ?"":"1rem",
      }}
    >
      {!isTablet && <p css={{ color: "#171725", fontSize: "1.3rem", fontWeight: "bold" }}>
        Payout Account
      </p>}
      <div
        css={{
          height:isTablet ? "25vh":"80%",
          background: account ? "" : "#E4e4e4",
          marginTop: isTablet ? "1.5rem":"0.8rem",
          padding: "0.8rem",
          borderRadius: "10px",
          display: "grid",
          gridTemplateColumns: isTablet?"30% 70%":"20% 80%",
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
            gridTemplateRows:"60% 40%",
            paddingLeft: "0.1rem",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: account ? "" : "center",
              fontSize: isTablet ? "1rem":"1.125rem",
              fontWeight: "bold",
              letterSpacing:"0.36px"
            }}
          >
            {account ? (
              <div css={{ display: "flex", justifyContent: "space-between" , width:"100%", paddingTop:isTablet ? "1rem":"0.5rem"}}>
                <div onClick={isTablet ? () => {setviewBankDetailsModalOpen(!viewBankDetailsModalOpen)}:()=> {}}>
                <p>First Bank <span css = {{fontWeight:"550"}}>| NGN</span></p>
                <p css = {{fontSize:"0.875rem", color: "#707070", fontWeight:"normal"}}>Account Number</p>
                <p css = {{fontSize:"1rem",fontWeight:"normal"}}>1234567890</p>
                </div>
                {isTablet ? <>
                <div css ={{display:"flex", marginTop:"1rem"}} onClick={() => {setviewBankDetailsModalOpen(!viewBankDetailsModalOpen)}}>
                <Image
                  src="/assets/svgs/right_ar.svg"
                  alt="add bank"
                  height={13}
                  width={15}
                  style={{ marginLeft: "1.5rem" }}
                />
                </div>
                </>:<div
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
                  </div>}
              </div>
            ) : (
                <div>
              <p css={{
                 display: "flex", 
                 alignItems: "center",
                 color: "#7c35ab",
                 cursor:"pointer",
                 marginTop:isTablet ? "-1rem":""
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
              fontSize: isTablet ? "0.875rem":""
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
