/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { H1 } from "styles/components/typography";

const JoinRevolutionFragment = () => {
  return (
    <div
      css={{
        background: "#FEEDDC",
        padding: "3% 4%",
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div css={{ marginBlock: "0.5rem" }}>
        <H1 color={"#000"} small>
          <span css={{ color: "#00d9b7" }}>Join</span> the Revolution
        </H1>
      </div>
      <div>
        <p
          css={{
            width: "65%",
            letterSpacing: "0.32px",
            fontSize: "0.95rem",
            marginTop: "1rem",
          }}
        >
          Join the growing community of event attendees and organizers who trust
          Ewitnex to make their events seamless, paperless, efficient, and
          socially impactful.
        </p>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.8rem",
          marginTop: "2.5rem",
        }}
      >
        <Review 
            review={"I appreciate Ewitnex's commitment to sustainability. Going paperless with their ticketing system has not only reduced waste but also allowed us to track attendance and collect valuable data. It's a win-win for our organization and the environment."} 
            reviewer={"Jennifer"} 
            reviewerRole={"Event Organizer"} 
            reviewerImage = {"/assets/pngs/jennifer-review.png"}
        />
        <Review 
            review={"As an event attendee, Ewitnex has made my event experience incredibly smooth. From easily purchasing tickets to accessing event information and engaging with other participants, the platform has enhanced my overall event engagement and made it hassle-free"} 
            reviewer={"Francis"} 
            reviewerRole={"Event Attendee"} 
            reviewerImage = {"/assets/pngs/francis-review.png"}

        />
        <Review 
            review={"Ewitnex stands out from other event management platforms with its strong focus on social impact. The platform facilitates connections among event organizers and enables us to plan events that address important social issues. It's empowering to be part of a community that shares a common goal of making a positive difference through events"} 
            reviewer={"Maya"} 
            reviewerRole={"Event Organizer"} 
            reviewerImage = {"/assets/pngs/maya-review.png"}

        />
      </div>
    </div>
  );
};

export default JoinRevolutionFragment;

const Review = ({review, reviewer, reviewerRole, reviewerImage}:{
    review:string
    reviewer: string
    reviewerRole:string
    reviewerImage: string
}) => {
  return (
    <div
      css={{
        background: "#FFF",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px #00000029",
        padding: "2% 5.4%",
        height: "325px",
        position:"relative"
      }}
    >
      <div
        css={{
          display: "flex",
          gap: "0.75rem",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        <p>5.0</p>
        <Image
          src="/assets/svgs/review-stars.svg"
          alt="five stars"
          width={85}
          height={55}
        />
      </div>
      <p css = {{letterSpacing: "0.28px", fontSize: "0.855rem"}}>
        "{review}"
      </p>
      <div css = {{
        display:"flex",
        gap:"1rem",
        bottom:"5%",
        position:"absolute"
      }}>
        <div css = {{
            border: "2px solid #7C35AB",
            height: "61px",
            width: "61px",
            borderRadius:"50%",
            display:"flex",
            justifyContent: "center",
            alignItems:"center"
        }}>
        <Image 
            src = {reviewerImage}
            alt = {reviewer}
            height = {61}
            width = {61}
        />
        </div>: 
        <div css = {{display: "flex", flexDirection: "column", justifyContent: "center", gap:"2%"}}>
            <p css = {{fontWeight: "600", fontSize: "1.125rem"}}>{reviewer}</p>
            <p css =  {{fontSize: "0.875rem"}}>{reviewerRole}</p>
        </div>
      </div>
    </div>
  );
};
