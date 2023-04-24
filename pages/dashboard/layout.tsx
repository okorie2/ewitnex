/** @jsxImportSource @emotion/react */

import React, { ReactNode, useState } from "react";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logo";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore((prevState) => !prevState);
  };
  return (
    <div
      css={{
        fontFamily: "'Poppins', sans-serif",
        display: "grid",
        gridTemplateColumns: "15% 85%",
        minHeight: "100vh",
      }}
    >
      <div
        css={{
          paddingBlock: "1rem 2rem",
          borderRight: `1px solid ${theme.shadow.border}`,
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        <div
          css={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div css={{ width: "60%", margin: "0 auto 2.5rem" }}>
              <Logo />
            </div>
            <ul
              css={{
                listStyleType: "none",
                display: "grid",
                gap: "1.5rem",
                width: "60%",
                marginInline: "auto",
              }}
            >
              <li>
                <Link
                  href="/dashboard"
                  css={{ display: "flex", gap: "0.5rem" }}
                >
                  <Image
                    src="/assets/svgs/home.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Feeds</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  css={{ display: "flex", gap: "0.5rem" }}
                >
                  <Image
                    src="/assets/svgs/user.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Programs</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  css={{ display: "flex", gap: "0.5rem" }}
                >
                  <Image
                    src="/assets/svgs/user.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Notifications</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  css={{ display: "flex", gap: "0.5rem" }}
                >
                  <Image
                    src="/assets/svgs/user.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
            {showMore && (
              <div
                css={{
                  marginTop: "2rem",
                }}
              >
                <hr
                  css={{
                    border: "none",
                    borderTop: `1px solid ${theme.shadow.border}`,
                  }}
                />
                <ul
                  css={{
                    listStyleType: "none",
                    display: "grid",
                    gap: "1.5rem",
                    marginBlock: "1.5rem",
                    width: "60%",
                    marginInline: "auto",
                  }}
                >
                  <li>
                    <Link
                      href="/dashboard"
                      css={{ display: "flex", gap: "0.5rem" }}
                    >
                      <Image
                        src="/assets/svgs/manager.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Manager</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      css={{ display: "flex", gap: "0.5rem" }}
                    >
                      <Image
                        src="/assets/svgs/ticket.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Tickets</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      css={{ display: "flex", gap: "0.5rem" }}
                    >
                      <Image
                        src="/assets/svgs/favourites.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Favourites</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      css={{ display: "flex", gap: "0.5rem" }}
                    >
                      <Image
                        src="/assets/svgs/wallet.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Wallet</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      css={{ display: "flex", gap: "0.5rem" }}
                    >
                      <Image
                        src="/assets/svgs/settings.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p>Settings</p>
                    </Link>
                  </li>
                </ul>
                <hr
                  css={{
                    border: "none",
                    borderTop: `1px solid ${theme.shadow.border}`,
                  }}
                />
                <Link
                  href="/dashboard"
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    width: "60%",
                    marginInline: "auto",
                    paddingBlock: "1rem",
                  }}
                >
                  <Image
                    src="/assets/svgs/settings.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p>Log out</p>
                </Link>
                <hr
                  css={{
                    border: "none",
                    borderTop: `1px solid ${theme.shadow.border}`,
                  }}
                />
              </div>
            )}
          </div>
          <div
            css={{
              display: "flex",
              gap: "0.5rem",
              width: "60%",
              marginInline: "auto",
              cursor: "pointer",
            }}
            onClick={handleToggle}
          >
            <Image src="/assets/svgs/user.svg" alt="" width={20} height={20} />
            <p>More</p>
          </div>
        </div>
      </div>
      <div
        css={{
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}
