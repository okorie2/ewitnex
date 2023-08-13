/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from "react";
import Image from "next/image";
import DashboardLayout from "../layout";
import WalletTransactions from "fragments/wallet/walletTransactions";
import WalletCard from "public/assets/svgs/ewitnex-wallet-card.svg";
import PayoutAccount from "fragments/wallet/payoutAccount";
import WalletChart from "@/components/charts/walletChart";
import FundWalletModal from "@/components/modals/walletModal/fundWalletModal";
import WithdrawalModal from "@/components/modals/walletModal/withdrawalModal";

const Wallet = () => {
  const [fundWalletModalOpen, setFundWalletModalOpen] = useState(false);
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
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
                borderLeft: `1px solid ${"#E4E4E4"}`,
                marginLeft: "1.2rem",
                height: "100vh",
              }}
            >
              <div
                css={{
                  height: "80px",
                  borderBottom: `1px solid ${"#E4E4E4"}`,
                  display: "grid",
                  alignItems: "center",
                  paddingInline: "1.5rem",
                  color: "#000",
                }}
              >
                <h2>Wallet</h2>
              </div>
              <div
                css={{
                  height: "calc(100vh - 80px)",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  padding: " 0.8rem 1.5rem",
                  paddingRight: "5rem",
                  display: "grid",
                  gridTemplateColumns: "40% 60%",
                  gap: "1.5rem",
                }}
              >
                <div
                  css={{
                    boxShadow: "0px 0px 5px #00000029",
                    borderRadius: "10px",
                    overflowY: "hidden",
                    padding: "1.2rem 1.5rem",
                    display: "grid",
                    gridTemplateRows: "45% 55%",
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
                        width: "101%",
                        height: "70%",
                        backgroundImage: `url(${WalletCard.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        color: "#FFF",
                        padding: "1.2rem 0",
                        paddingLeft:"2rem",
                        borderRadius: "10px",
                        position: "relative",
                      }}
                    >
                      <p>Wallet Balance</p>
                      <p
                        css={{
                          marginTop: "1.3rem",
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
                        marginTop: "1rem",
                      }}
                    >
                      <div
                        css={{
                          height: "38px",
                          width: "47.5%",
                          background: "#7C35AB",
                          color: "#FFF",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "3px",
                          fontWeight: "bold",
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
                          height: "38px",
                          width: "47.5%",
                          background: "#FFF",
                          color: "#7C35AB",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "3px",
                          border: "1px solid #7C35AB",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => setWithdrawalModalOpen(true)}
                      >
                        Withdraw
                      </div>
                    </div>
                    <p
                      css={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        marginTop: "1.5rem",
                      }}
                    >
                      Transactions
                    </p>
                  </div>
                  <WalletTransactions />
                </div>
                <div
                  css={{
                    display: "grid",
                    gridTemplateRows: "250px 1fr",
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
                    }}
                  >
                    <p
                      css={{
                        color: "#171725",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      Statistics
                    </p>
                    <div
                      css={{
                        width: "30%",
                        marginLeft: "auto",
                        marginTop: "-2%",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "1.5rem",
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
                    <WalletChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Wallet;
