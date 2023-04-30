/** @jsxImportSource @emotion/react */

import React from "react";
import Speaker from "@/components/cards/speaker";
import { theme, screen } from "styles/theme";
import Image from "next/image";

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
        <Image
          src="/assets/pngs/card_2.png"
          alt="header-img"
          css={{
            borderRadius: "10px 10px 0 0",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "-1",
          }}
          fill
        />
        <div
          css={{
            width: "193px",
            height: "266px",
            borderRadius: "10px",
            backgroundColor: theme.common.white,
            boxShadow: `0px 0px 10px ${theme.shadow.border3}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "-30%",
            left: "2%",
          }}
        >
          <Image
            src="/assets/pngs/gdg.png"
            alt="card_img"
            css={{
              borderRadius: "10px",
            }}
            fill
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
        <div
          css={{
            width: "82%",
            marginLeft: "auto",
            [screen.desktopLg]: {
              width: "70%",
            },
            [screen.desktop]: {
              width: "96%",
              marginTop: "8rem",
            },
          }}
        >
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
            <p
              css={{
                color: theme.color.tertiary,
                fontSize: "1.125rem",
                fontWeight: "600",
              }}
            >
              Heal12548
            </p>
            <Image src="/assets/svgs/copy.svg" alt="" width={24} height={24} />
          </div>
          <div
            css={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "1.3fr 0.7fr",
              [screen.desktopLg]: {
                gridTemplateColumns: "auto ",
                gap: "2rem",
              },
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
                    display: "grid",
                    placeContent: "center",
                    width: "86px",
                    height: "60px",
                    border: `1px solid ${theme.shadow.border}`,
                    background: `linear-gradient(60deg, ${theme.background.primary},${theme.background.white})`,
                    borderRadius: "5px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      placeContent: "center",
                      width: "82px",
                      height: "55.61px",
                      border: `1px solid ${theme.shadow.tertiary}`,
                      borderRadius: "5px",
                      backgroundColor: theme.background.white,
                    }}
                  >
                    <p
                      css={{
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        alignItems: "center",
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                        24
                      </span>
                      Days
                    </p>
                  </div>
                </div>
                <div
                  css={{
                    display: "grid",
                    placeContent: "center",
                    width: "86px",
                    height: "60px",
                    border: `1px solid ${theme.shadow.border}`,
                    background: `linear-gradient(120deg, ${theme.background.primary},${theme.background.white},${theme.background.white})`,
                    borderRadius: "5px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      placeContent: "center",
                      width: "82px",
                      height: "55.61px",
                      border: `1px solid ${theme.shadow.tertiary}`,
                      borderRadius: "5px",
                      backgroundColor: theme.background.white,
                    }}
                  >
                    <p
                      css={{
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        alignItems: "center",
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                        7
                      </span>
                      Hours
                    </p>
                  </div>
                </div>
                <div
                  css={{
                    display: "grid",
                    placeContent: "center",
                    width: "86px",
                    height: "60px",
                    border: `1px solid ${theme.shadow.border}`,
                    background: `linear-gradient(90deg, ${theme.background.primary},${theme.background.white})`,
                    borderRadius: "5px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      placeContent: "center",
                      width: "82px",
                      height: "55.61px",
                      border: `1px solid ${theme.shadow.tertiary}`,
                      borderRadius: "5px",
                      backgroundColor: theme.background.white,
                    }}
                  >
                    <p
                      css={{
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        alignItems: "center",
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                        54
                      </span>
                      Mins
                    </p>
                  </div>
                </div>
                <div
                  css={{
                    display: "grid",
                    placeContent: "center",
                    width: "86px",
                    height: "60px",
                    border: `1px solid ${theme.shadow.border}`,
                    background: `linear-gradient(60deg, ${theme.background.primary},${theme.background.white})`,
                    borderRadius: "5px",
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      placeContent: "center",
                      width: "82px",
                      height: "55.61px",
                      border: `1px solid ${theme.shadow.tertiary}`,
                      borderRadius: "5px",
                      backgroundColor: theme.background.white,
                    }}
                  >
                    <p
                      css={{
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        alignItems: "center",
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      <span css={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                        20
                      </span>
                      Secs
                    </p>
                  </div>
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
                  <Image
                    src="/assets/svgs/calender.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p css={{ color: theme.color.tertiary }}>Date and time</p>
                </div>
                <p
                  css={{
                    color: theme.color.negative,
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
                  <Image
                    src="/assets/svgs/location.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p css={{ color: theme.color.tertiary }}>Location</p>
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
                  <Image
                    src="/assets/svgs/cost.svg"
                    alt=""
                    width={25.5}
                    height={21.6}
                  />
                  <p css={{ color: theme.color.tertiary }}>$500 - $2K</p>
                </div>
                <div
                  css={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/assets/svgs/people.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p css={{ color: theme.color.tertiary }}>609 Attending</p>
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
                  <p css={{ color: theme.color.tertiary }}>Organized by</p>
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
                    border: `1px solid ${theme.color.primary}`,
                    color: theme.color.primary,
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
                  <Image
                    src="/assets/svgs/audience.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p css={{ color: theme.color.tertiary }}>Audience Type</p>
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
              color: theme.color.tertiary,
            }}
          >
            <Image src="/assets/svgs/info.svg" alt="" width={24} height={24} />
            <p>About</p>
          </div>
          <div css={{ marginTop: "1.25rem" }}>
            <p css={{ lineHeight: "22px" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
        </div>
        <div css={{ paddingInline: "2%" }}>
          <div
            css={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              color: theme.color.tertiary,
            }}
          >
            <Image
              src="/assets/svgs/speakers.svg"
              alt=""
              width={24}
              height={24}
            />
            <p>Speakers</p>
          </div>
          <div
            css={{
              marginBlock: "1.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.38rem",
            }}
          >
            <Speaker
              img="/assets/pngs/speaker1.png"
              name="John Bosko"
              role="Software Engineer"
            />
            <Speaker
              img="/assets/pngs/speaker2.png"
              name="John Bosko"
              role="Software Engineer"
            />
            <Speaker
              img="/assets/pngs/speaker3.png"
              name="John Bosko"
              role="Software Engineer"
            />
            <Speaker
              img="/assets/pngs/speaker4.png"
              name="John Bosko"
              role="Software Engineer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
