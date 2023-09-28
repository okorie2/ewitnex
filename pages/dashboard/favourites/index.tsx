/** @jsxImportSource @emotion/react */

import { screen } from "styles/theme";
import DashboardLayout from "../layout/layout";
import { useState } from "react";
import {
  activeButtonStyle,
  inactiveButtonStyle,
} from "styles/components/ButtonToggleStyles";
import DashboardEventCard from "@/components/cards/dashboardEventCard";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import FeedsCard from "@/components/cards/feedsCard";

const Favourites = () => {
  const isTablet = useMediaQuery("(max-width: 780px)");
  const [showEvents, setShowEvents] = useState(true);
  const [showPosts, setShowPosts] = useState(false);
  const [activeTab, setActiveTab] = useState("events");

  const handleShowEvents = () => {
    setShowEvents(true);
    setShowPosts(false);
    setActiveTab("events");
  };
  const handleShowPosts = () => {
    setShowPosts(true);
    setShowEvents(false);
    setActiveTab("posts");
  };
  return (
    <DashboardLayout>
      <div css={{ maxHeight: "100vh", height: "100vh" }}>
        <div
          css={{
            borderLeft: isTablet ? "" : `1px solid ${"#E4E4E4"}`,
            marginLeft: isTablet ? "" : "1.5rem",
            height: "100%",
            maxHeight: "100vh",
          }}
        >
          <div
            css={{
              height: "80px",
              borderBottom: `1px solid ${"#E4E4E4"}`,
              display: isTablet ? "flex" : "grid",
              alignItems: "center",
              paddingInline: "1.5rem",
              color: "#000",
              gap: isTablet ? "1rem" : "",
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
            <h2>Favourites</h2>
          </div>
          <div
            css={{
              paddingInline: isTablet ? "0.8rem" : "1.5rem",
              maxHeight: "calc(100vh - 80px)",
              display: "grid",
              gridTemplateRows: "10% 90%",
            }}
          >
            <div css={{ zIndex: 10 }}>
              <div
                css={{
                  borderRadius: "16px",
                  backgroundColor: "#F2F7FB",
                  width: isTablet ? "100%" : "30%",
                  marginBlock: "1rem",
                  height: "2.7rem",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.2rem",
                }}
              >
                <button
                  onClick={handleShowEvents}
                  css={
                    activeTab === "events"
                      ? activeButtonStyle
                      : inactiveButtonStyle
                  }
                >
                  Events
                </button>
                <button
                  onClick={handleShowPosts}
                  css={
                    activeTab === "posts"
                      ? activeButtonStyle
                      : inactiveButtonStyle
                  }
                >
                  Posts
                </button>
              </div>
            </div>
            <div
              css={{
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  width: isTablet ? "100%" : "85%",
                  gap: "1rem",
                  padding: isTablet ? "2rem 0 5rem 0" : "1.125rem",
                  [screen.lg]: {
                    gridTemplateColumns: "1fr 1fr",
                  },
                  [screen.desktop]: {
                    gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
                  },
                }}
              >
                {isTablet ? (
                  <>
                    <div>
                      <FeedsCard
                        label="Music"
                        attendees="609"
                        id="Tec542445"
                        date="25 NOV. 2021, 10:00 AM"
                        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
                        organizer="Connack Foundarion"
                        priceRange="$500-$2K"
                        title="Connack Foundation African Music Award Of The Year"
                        img="/assets/pngs/card_img.png"
                        favourite = {true}
                      />
                    </div>
                    <div>
                      <FeedsCard
                        label="Concert"
                        attendees="609"
                        date="3 DEC. 2022, 10:00 AM"
                        id="Heal12548"
                        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
                        organizer="Eko Atlantic"
                        priceRange="$500-$2K"
                        title="Medical Crusade with Doctor West"
                        img="/assets/pngs/card_2.png"
                        favourite = {true}
                      />
                    </div>
                    <div>
                      <FeedsCard
                        label="Music"
                        attendees="609"
                        id="Tec542445"
                        date="25 NOV. 2021, 10:00 AM"
                        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
                        organizer="Connack Foundarion"
                        priceRange="$500-$2K"
                        title="Connack Foundation African Music Award Of The Year"
                        img="/assets/pngs/card_img.png"
                        favourite = {true}
                      />
                    </div>
                    <div>
                      <FeedsCard
                        label="Concert"
                        attendees="609"
                        date="3 DEC. 2022, 10:00 AM"
                        id="Heal12548"
                        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
                        organizer="Eko Atlantic"
                        priceRange="$500-$2K"
                        title="Medical Crusade with Doctor West"
                        img="/assets/pngs/card_2.png"
                        favourite = {true}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <DashboardEventCard
                        label="Concert"
                        attendees="609"
                        date="3 DEC. 2022, 10:00 AM"
                        favourite={true}
                        id="Heal12548"
                        location="Holikins Hotel, 22 Faulks Road, Aba, Abia"
                        organizer="Eko Atlantic"
                        priceRange="$500-$2K"
                        title="Medical Crusade with Doctor West"
                        img="/assets/pngs/card_2.png"
                      />
                    </div>
                    <div>
                      <DashboardEventCard
                        label="Tech"
                        attendees="609"
                        id="Tec542445"
                        favourite={true}
                        date="3 DEC. 2022, 10:00 AM"
                        location="IG Hub, 22 Faulks Road, Aba, Abia"
                        organizer="GDG Aba"
                        priceRange="$500-$2K"
                        title="Google Developers Festival Aba"
                        img="/assets/pngs/card_4.png"
                      />
                    </div>
                    <div>
                      <DashboardEventCard
                        label="Tech"
                        attendees="609"
                        id="Tec542445"
                        favourite={true}
                        date="3 DEC. 2022, 10:00 AM"
                        location="IG Hub, 22 Faulks Road, Aba, Abia"
                        organizer="GDG Aba"
                        priceRange="$500-$2K"
                        title="Google Developers Festival Aba"
                        img="/assets/pngs/card_4.png"
                      />
                    </div>
                    <div>
                      <DashboardEventCard
                        label="Tech"
                        attendees="609"
                        id="Tec542445"
                        favourite={true}
                        date="3 DEC. 2022, 10:00 AM"
                        location="IG Hub, 22 Faulks Road, Aba, Abia"
                        organizer="GDG Aba"
                        priceRange="$500-$2K"
                        title="Google Developers Festival Aba"
                        img="/assets/pngs/card_4.png"
                      />
                    </div>
                    <div>
                      <DashboardEventCard
                        label="Tech"
                        attendees="609"
                        id="Tec542445"
                        favourite={true}
                        date="3 DEC. 2022, 10:00 AM"
                        location="IG Hub, 22 Faulks Road, Aba, Abia"
                        organizer="GDG Aba"
                        priceRange="$500-$2K"
                        title="Google Developers Festival Aba"
                        img="/assets/pngs/card_4.png"
                      />
                    </div>
                    <div>
                      <DashboardEventCard
                        label="Tech"
                        attendees="609"
                        favourite={true}
                        id="Tec542445"
                        date="3 DEC. 2022, 10:00 AM"
                        location="IG Hub, 22 Faulks Road, Aba, Abia"
                        organizer="GDG Aba"
                        priceRange="$500-$2K"
                        title="Google Developers Festival Aba"
                        img="/assets/pngs/card_4.png"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Favourites;

{
  /* <div>
                <DashboardEventCard
                  label="Tech"
                  attendees="609"
                  id="Tec542445"
                  date="3 DEC. 2022, 10:00 AM"
                  location="IG Hub, 22 Faulks Road, Aba, Abia"
                  organizer="GDG Aba"
                  priceRange="$500-$2K"
                  title="Google Developers Festival Aba"
                  img="/assets/pngs/card_4.png"
                />
              </div> */
}

//   <div
//   css={{
//     borderLeft: `1px solid ${"#E4E4E4"}`,
//     marginLeft: "1.5rem",
//     height: "100%",
//     maxHeight: "100vh",
//   }}
// >
//   <div
//     css={{
//       height: "80px",
//       borderBottom: `1px solid ${"#E4E4E4"}`,
//       display: "grid",
//       alignItems: "center",
//       paddingInline: "1.5rem",
//       color: "#000",
//     }}
//   >
//     <h2>Favourites</h2>
//   </div>
//   <div
//     css={{
//       paddingInline: "1.5rem",
//       height: "calc(100vh - 80px)",
//       maxHeight: "calc(100vh - 80px)",
//       display: "grid",
//       gridTemplateRows: "10% 90%",
//       overflowY: "visible",
//           "&::-webkit-scrollbar": {
//             display: "none",
//           },
//     }}
//   >
//     <div>
//       <div
//         css={{
//           borderRadius: "16px",
//           backgroundColor: "#F2F7FB",
//           width: "30%",
//           marginBlock: "1rem",
//           height: "2.7rem",
//           display: "flex",
//           alignItems: "center",
//           padding: "0.2rem",
//         }}
//       >
//         <button
//           onClick={handleShowEvents}
//           css={
//             activeTab === "events"
//               ? activeButtonStyle
//               : inactiveButtonStyle
//           }
//         >
//           Events
//         </button>
//         <button
//           onClick={handleShowPosts}
//           css={
//             activeTab === "posts"
//               ? activeButtonStyle
//               : inactiveButtonStyle
//           }
//         >
//           Posts
//         </button>
//       </div>
//     </div>
//     <div>
//       <div
//         css={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           width: "100%",
//           gap: "1rem",
//           borderTop: "1px solid black",
//           overflowY: "scroll",
//           "&::-webkit-scrollbar": {
//             display: "none",
//           },
//           padding: "1.125rem",
//           [screen.lg]: {
//             gridTemplateColumns: "1fr 1fr",
//           },
//           [screen.desktop]: {
//             gridTemplateColumns: "1fr 1fr",
//           },
//         }}
//       >
//         <div>
//           <DashboardEventCard
//             label="Tech"
//             attendees="609"
//             id="Tec542445"
//             date="3 DEC. 2022, 10:00 AM"
//             location="IG Hub, 22 Faulks Road, Aba, Abia"
//             organizer="GDG Aba"
//             priceRange="$500-$2K"
//             title="Google Developers Festival Aba"
//             img="/assets/pngs/card_4.png"
//           />
//         </div>

//         <div>
//           <DashboardEventCard
//             label="Tech"
//             attendees="609"
//             id="Tec542445"
//             date="3 DEC. 2022, 10:00 AM"
//             location="IG Hub, 22 Faulks Road, Aba, Abia"
//             organizer="GDG Aba"
//             priceRange="$500-$2K"
//             title="Google Developers Festival Aba"
//             img="/assets/pngs/card_4.png"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
