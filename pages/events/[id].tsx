/** @jsxImportSource @emotion/react */

import PublicSiteFooter from "@/components/footer/publicSite";
import Navbar from "@/components/header";
import { Lines } from "@/components/lines";
import Image from "next/image";
import React from "react";
import { theme } from "styles/theme";

const SingleEvent = () => {
  return (
    <div>
      <Navbar />
      <div
        css={{
          marginTop: "5rem",
          width: "90%",
          marginInline: "auto",
          paddingBottom: "5rem",
        }}
      >
        <div
          css={{
            boxShadow: " 0px 0px 10px #00000029",
            borderRadius: "20px",
            padding: "1rem 2.5rem",
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            marginInline: "auto",
            position: "relative",
            zIndex: "1",
            top: "1.5rem",
            backgroundColor: theme.common.white,
          }}
        >
          <p
            css={{
              padding: "0.38rem 0.75rem ",
              borderRadius: "1rem",
              background: "#00D9B7",
              color: theme.common.white,
            }}
          >
            Details
          </p>
          <p
            css={{
              padding: "0.38rem 0.75rem ",
              borderRadius: "1rem",
              background: "#F2F7FB",
              color: "#AEAEAE",
            }}
          >
            Activities
          </p>
          <p
            css={{
              padding: "0.38rem 0.75rem ",
              borderRadius: "1rem",
              background: "#F2F7FB",
              color: "#AEAEAE",
            }}
          >
            Messages
          </p>
          <p
            css={{
              padding: "0.38rem 0.75rem ",
              borderRadius: "1rem",
              background: "#F2F7FB",
              color: "#AEAEAE",
            }}
          >
            Tickets
          </p>
          <p
            css={{
              padding: "0.38rem 0.75rem ",
              borderRadius: "1rem",
              background: "#F2F7FB",
              color: "#AEAEAE",
            }}
          >
            Speakers
          </p>
          <p
            css={{
              padding: "0.38rem 0.75rem ",
              borderRadius: "1rem",
              background: "#F2F7FB",
              color: "#AEAEAE",
            }}
          >
            RSVPs
          </p>
        </div>
        <div>
          <div css={{ width: "100%", height: "394px", position: "relative" }}>
            <div
              css={{
                position: "absolute",
                top: "3%",
                left: "2%",
              }}
            >
              <div
                css={{
                  width: "93px",
                  height: "2.13rem",
                  backdropFilter: "brightness(50%) ",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  borderRadius: "10px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  backgroundColor: theme.common.white,
                  opacity: "75%",
                }}
              >
                concert
              </div>
            </div>
            <div
              css={{
                position: "absolute",
                top: "3%",
                right: "2%",
                height: "41px",
                width: "41px",
                borderRadius: "50%",
                backgroundColor: theme.common.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: "85%",
              }}
            >
              <Image
                src="/assets/svgs/ellipse.svg"
                alt="card_img"
                width={20.98}
                height={19.39}
              />
            </div>
            <img
              src="/assets/pngs/card_2.png"
              alt="header-img"
              css={{
                borderRadius: "10px",
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
            <div
              css={{
                width: "193px",
                height: "266px",
                borderRadius: "10px",
                backgroundColor: theme.common.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "-30%",
                left: "2%",
              }}
            >
              <img
                src="https://camo.githubusercontent.com/6674da7fef8660e18065348a928e7543dceb737629d6fe4f6557a88c42a269ed/68747470733a2f2f692e696d6775722e636f6d2f503231486b30752e706e67"
                alt="card_img"
                css={{ width: "193px", height: "266px", borderRadius: "10px" }}
              />
            </div>
            <div
              css={{
                height: "41px",
                width: "41px",
                borderRadius: "50%",
                backgroundColor: theme.common.white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "-5%",
                right: "2%",
              }}
            >
              <Image
                src="/assets/svgs/love.svg"
                alt="card_img"
                width={20.98}
                height={19.39}
              />
            </div>
          </div>
          <div>
            <div css={{ width: "82%", marginLeft: "auto", height: "424px" }}>
              Text 1
            </div>
            <div css={{ paddingInline: "2%", marginBottom: "2.5rem" }}>
              <div
                css={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  color: "#707070",
                }}
              >
                <img src="/assets/svgs/info.svg" />
                <p>About</p>
              </div>
              <div css={{ marginTop: "1.25rem" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo
              </div>
            </div>
            <div css={{ paddingInline: "2%" }}>
              <div
                css={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  color: "#707070",
                }}
              >
                <img src="/assets/svgs/speakers.svg" />
                <p>Speakers</p>
              </div>
              <div
                css={{
                  marginBlock: "1.25rem",
                  display: "flex",
                  gap: "1.38rem",
                }}
              >
                <div>
                  <div
                    css={{
                      width: "177px",
                      height: "194px",
                      background: "red",
                      borderRadius: "10px",
                    }}
                  >
                    <img src="" alt="" />
                  </div>
                  <div css={{ marginTop: "0.7rem" }}>
                    <h4 css={{ fontSize: "1rem" }}>John Bosko</h4>
                    <p css={{ fontSize: "0.75rem" }}>Software Engineer</p>
                  </div>
                </div>
                <div>
                  <div
                    css={{
                      width: "177px",
                      height: "194px",
                      background: "red",
                      borderRadius: "10px",
                    }}
                  >
                    <img src="" alt="" />
                  </div>
                  <div css={{ marginTop: "0.7rem" }}>
                    <h4 css={{ fontSize: "1rem" }}>John Bosko</h4>
                    <p css={{ fontSize: "0.75rem" }}>Software Engineer</p>
                  </div>
                </div>
                <div>
                  <div
                    css={{
                      width: "177px",
                      height: "194px",
                      background: "red",
                      borderRadius: "10px",
                    }}
                  >
                    <img src="" alt="" />
                  </div>
                  <div css={{ marginTop: "0.7rem" }}>
                    <h4 css={{ fontSize: "1rem" }}>John Bosko</h4>
                    <p css={{ fontSize: "0.75rem" }}>Software Engineer</p>
                  </div>
                </div>
                <div>
                  <div
                    css={{
                      width: "177px",
                      height: "194px",
                      background: "red",
                      borderRadius: "10px",
                    }}
                  >
                    <img src="" alt="" />
                  </div>
                  <div css={{ marginTop: "0.7rem" }}>
                    <h4 css={{ fontSize: "1rem" }}>John Bosko</h4>
                    <p css={{ fontSize: "0.75rem" }}>Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lines />
      <PublicSiteFooter />
    </div>
  );
};

export default SingleEvent;
