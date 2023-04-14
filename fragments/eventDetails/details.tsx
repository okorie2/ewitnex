/** @jsxImportSource @emotion/react */

import Image from "next/image";
import React from "react";
import { theme } from "styles/theme";

const EventDetails = () => {
  return (
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
            borderRadius: "10px 10px 0 0",
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
            css={{
              width: "193px",
              height: "266px",
              borderRadius: "10px",
              boxShadow: " 0px 0px 10px #00000029",
            }}
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
        <div css={{ width: "82%", marginLeft: "auto" }}>
          <h1
            css={{
              marginBlock: "1rem 0.5rem",
              fontSize: "2.5rem",
              fontWeight: "700",
            }}
          >
            Medical Crusade with Doctor West
          </h1>
          <div css={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p css={{ color: "#707070", fontSize: "1.125rem" }}>Heal12548</p>
            <img src="/assets/svgs/copy.svg" alt="" />
          </div>
          <div
            css={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "1.3fr 0.7fr",
            }}
          >
            <div>
              <div
                css={{
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                <div
                  css={{
                    padding: "1rem 0.5rem",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                >
                  <span>24</span> Days
                </div>
                <div
                  css={{
                    padding: "1rem 0.5rem",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                >
                  <span>7</span> Hours
                </div>
                <div
                  css={{
                    padding: "1rem 0.5rem",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                >
                  <span>54</span> Mins
                </div>
                <div
                  css={{
                    padding: "1rem 0.5rem",
                    border: "1px solid #707070",
                    borderRadius: "10px",
                  }}
                >
                  <span>20</span> Secs
                </div>
              </div>
              <div
                css={{
                  display: "grid",
                  gap: "0.5rem",
                  marginBlock: "1rem",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/svgs/calender.svg" alt="" />
                  <p css={{ color: "#707070" }}>Date and time</p>
                </div>
                <p
                  css={{
                    color: " #F05E78",
                    fontSize: "1.125rem",
                    fontWeight: "600",
                  }}
                >
                  3 DEC. 2022, 10:00 AM
                </p>
              </div>
              <div
                css={{
                  display: "grid",
                  gap: "0.5rem",
                  marginBlock: "1rem",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/svgs/location.svg" alt="" />
                  <p css={{ color: "#707070" }}>Location</p>
                </div>
                <p
                  css={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                  }}
                >
                  Holikins Hotel, 22 Faulks Road, Aba, Abia
                </p>
              </div>
            </div>
            <div css={{ marginRight: "2rem" }}>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/svgs/cost.svg" alt="" />
                  <p css={{ color: "#707070" }}>$500 - $2K</p>
                </div>
                <div
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/svgs/people.svg" alt="" />
                  <p css={{ color: "#707070" }}>609 Attending</p>
                </div>
              </div>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <div
                  css={{
                    display: "grid",
                    gap: "0.5rem",
                    marginBlock: "1rem",
                  }}
                >
                  <p css={{ color: "#707070" }}>Organized by</p>
                  <p
                    css={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                    }}
                  >
                    Eko Atlantic
                  </p>
                </div>
                <button
                  type="button"
                  css={{
                    border: "1px solid  #7C35AB",
                    color: " #7C35AB",
                    borderRadius: "56px",
                    padding: "0.75rem",
                    backgroundColor: theme.common.white,
                    width: "129px",
                    height: "42px",
                  }}
                >
                  Follow organizer
                </button>
              </div>
              <div
                css={{
                  display: "grid",
                  gap: "0.5rem",
                  marginBlock: "1rem",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <img src="/assets/svgs/audience.svg" alt="" />
                  <p css={{ color: "#707070" }}>Audience Type</p>
                </div>
                <p
                  css={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                  }}
                >
                  Public
                </p>
              </div>
            </div>
          </div>
        </div>
        <div css={{ paddingInline: "2%", marginBlock: "2.5rem" }}>
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
          <div css={{ marginTop: "1.25rem", lineHeight: "22px" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo
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
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/assets/pngs/card_2.png"
                  alt=""
                  css={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                  }}
                />
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
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/assets/pngs/card_2.png"
                  alt=""
                  css={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                  }}
                />
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
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/assets/pngs/card_2.png"
                  alt=""
                  css={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                  }}
                />
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
                  borderRadius: "10px",
                }}
              >
                <img
                  src="/assets/pngs/card_2.png"
                  alt=""
                  css={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                  }}
                />
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
  );
};

export default EventDetails;
