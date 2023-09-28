/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import DashboardLayout from "../layout/layout";
import WalletTransactions from "fragments/wallet/walletTransactions";
import WalletCard from "public/assets/svgs/ewitnex-wallet-card.svg";
import PayoutAccount from "fragments/wallet/payoutAccount";
import WalletChart from "@/components/charts/walletChart";
import FundWalletModal from "@/components/modals/walletModal/fundWalletModal";
import WithdrawalModal from "@/components/modals/walletModal/withdrawalModal";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import {useRouter} from 'next/router'

const Wallet = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [fundWalletModalOpen, setFundWalletModalOpen] = useState(false);
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isTablet) {
      const refuseBackButton = () => {
        window.onpopstate = () => {
          router.push(router.pathname);
        };
      };
      if (fundWalletModalOpen || withdrawalModalOpen) {
        refuseBackButton();
      } else {
        window.onpopstate = () => {
          router.push("/dashboard/profile");
        };
      }
    }
  }, [fundWalletModalOpen, withdrawalModalOpen]);
  return (
    <>
      <DashboardLayout>
        <FundWalletModal
          isOpen={fundWalletModalOpen}
          onRequestClose={() => setFundWalletModalOpen(!fundWalletModalOpen)}
        />
        <WithdrawalModal
          isOpen={withdrawalModalOpen}
          onRequestClose={() => setWithdrawalModalOpen(!withdrawalModalOpen)}
        />
        <div>
          <div css={{}}>
            <div
              css={{
                borderLeft: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
                marginLeft: isTablet ? "" : "1.2rem",
                height: "100vh",
              }}
            >
              <div
                css={{
                  height: "80px",
                  borderBottom: `1px solid ${"#E4E4E4"}`,
                  display: isTablet ? "flex" : "grid",
                  alignItems: "center",
                  paddingInline: "1.5rem",
                  gap: isTablet ? "1rem" : "",
                  color: "#000",
                }}
              >
                {isTablet && (
                  <Link href="/dashboard/profile">
                    <div css={{ display: "flex" }}>
                      <Image
                        src="/assets/svgs/back.svg"
                        alt="back_arrow"
                        width={22}
                        height={15}
                      />
                    </div>
                  </Link>
                )}
                <h2>Wallet</h2>
              </div>
              <div
                css={{
                  height: "calc(100vh - 80px)",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  padding: isTablet ? "1rem" : " 0.8rem 1.5rem",
                  paddingRight: isTablet ? "" : "5rem",
                  display: isTablet ? "block" : "grid",
                  gridTemplateColumns: "40% 60%",
                  gap: "1.5rem",
                  maxWidth: isTablet ? "100vw" : "",
                }}
              >
                <div
                  css={{
                    boxShadow: isTablet ? "" : "0px 0px 5px #00000029",
                    borderRadius: isTablet ? "" : "10px",
                    overflowY: "hidden",
                    padding: isTablet ? "" : "1.2rem 1.5rem",
                    display: "grid",
                    gridTemplateRows: "45% 55%",
                    height: isTablet ? "fit-content" : "",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      css={{
                        width: isTablet ? "100%" : "101%",
                        height: isTablet ? "20vh" : "70%",
                        minHeight: isTablet ? "21vh" : "",
                        backgroundImage: `url(${WalletCard.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        color: "#FFF",
                        padding: "1.2rem 0",
                        paddingLeft: isTablet ? "1.5rem" : "2rem",
                        borderRadius: "10px",
                        position: "relative",
                      }}
                    >
                      <p>Wallet Balance</p>
                      <p
                        css={{
                          marginTop: isTablet ? "1rem" : "1.3rem",
                          fontWeight: "800",
                          fontSize: "1.2rem",
                        }}
                      >
                        <span>$</span>
                        <span>17892</span>
                        <span css={{ opacity: 0.5, fontWeight: "500" }}>
                          .50
                        </span>
                      </p>
                      <p
                        css={{
                          letterSpacing: "1.6px",
                          marginTop: "auto",
                          position: "absolute",
                          bottom: "10%",
                          fontWeight: "300",
                        }}
                      >
                        05080522123456987
                      </p>
                    </div>
                    <div
                      css={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: isTablet ? "1.5rem" : "1rem",
                      }}
                    >
                      <div
                        css={{
                          height: isTablet ? "45px" : "38px",
                          width: "47.5%",
                          background: "#7C35AB",
                          color: "#FFF",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "3px",
                          fontWeight: isTablet ? "500" : "bold",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          setFundWalletModalOpen(!fundWalletModalOpen)
                        }
                      >
                        Fund wallet
                      </div>
                      <div
                        css={{
                          height: isTablet ? "45px" : "38px",
                          width: "47.5%",
                          background: "#FFF",
                          color: "#7C35AB",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "3px",
                          border: "1px solid #7C35AB",
                          fontWeight: isTablet ? "500" : "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => setWithdrawalModalOpen(true)}
                      >
                        Withdraw
                      </div>
                    </div>
                    {!isTablet && (
                      <p
                        css={{
                          fontWeight: "bold",
                          fontSize: "1.3rem",
                          marginTop: "1.5rem",
                        }}
                      >
                        Transactions
                      </p>
                    )}
                  </div>
                  {!isTablet && <WalletTransactions />}
                </div>
                <div
                  css={{
                    display: "grid",
                    gridTemplateRows: isTablet ? "" : "250px 1fr",
                    gap: "1.5rem",
                  }}
                >
                  <PayoutAccount />
                  <div
                    css={{
                      boxShadow: "0px 0px 5px #00000029",
                      borderRadius: "10px",
                      padding: "1rem",
                      height: "400px",
                      overflowX:"hidden"
                    }}
                  >
                    <p
                      css={{
                        color: "#171725",
                        fontSize: isTablet ? "1rem" : "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      Statistics
                    </p>
                    <div
                      css={{
                        width: isTablet ? "55%" : "30%",
                        marginLeft: "auto",
                        marginTop: "-2%",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1.5rem",
                        fontSize: isTablet ? "0.875rem" : "",
                      }}
                    >
                      <div
                        css={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          background: "#00D9B7",
                          marginRight: "0.5rem",
                        }}
                      ></div>
                      <p>Income</p>
                      <div
                        css={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          background: "#F05E78",
                          marginRight: "0.5rem",
                          marginLeft: "1rem",
                        }}
                      ></div>
                      <p>Expense</p>
                    </div>
                    <div css = {{width:"100%", overflowX:"auto", "::-webkit-scrollbar": {display:"none"}}}>

                    <div css={{ width: isTablet ? "100vh" : "" }}>
                      <WalletChart />
                    </div>
                    </div>
                  </div>
                </div>
                {isTablet && (
                  <p
                    css={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginBlock: "1.5rem",
                    }}
                  >
                    Activities
                  </p>
                )}
                {isTablet && <WalletTransactions />}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Wallet;
