/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { H1 } from "styles/components/typography";

const WhyUseEwitnexFragment = () => {
  const isTablet = useMediaQuery("(max-width: 900px)" );
  return (
    <div
      css={{
        color: "#FFF",
        background: "#7C35AB",
        padding: isTablet ? "3rem 4%" :"3% 4%",
        fontFamily: '"Poppins", sans-serif',
        marginTop: isTablet ? "3rem" : "",
        width: isTablet ? "95%" : "",
        marginInline: isTablet ? "auto" : "",
        borderRadius: isTablet ? "20px" : "",
      }}
    >
      <Image src="/assets/pngs/logo_yt.png" alt="" height={30} width={70} />
      <div css={{ marginBlock: "0.5rem" }}>
        <H1 small size={ isTablet ? "2rem" : ""}>Why You Should Use Ewitnex</H1>
      </div>
      <div>
        <p
          css={{
            width: isTablet ? "100%":"73%",
            letterSpacing: "0.32px",
            fontSize: "0.95rem",
            marginTop: "1rem",
            fontWeight: "350",
          }}
        >
          By choosing Ewitnex, you gain access to a powerful event management
          solution that streamlines processes, reduces environmental impact, and
          creates memorable experiences. Join the growing community of event organizers who trust Ewitnex to make their events seamless, efficient, and socially impactful.
        </p>
      </div>
      <div
        css={{
          display: isTablet ? "flex": "grid",
          flexDirection:"column",
          gridTemplateColumns: "55% 45%",
          marginTop: "3rem",
        }}
      >
        <SectionFragment
          pWidth={isTablet ? "100%" : "80%"}
          img={"/assets/svgs/stars.svg"}
          title={"Seamless Event Management"}
          desc={
            "Ewitnex offers a comprehensive platform that simplifies every aspect of event management. From ticket sales to attendee engagement and logistics coordination, Ewitnex streamlines the entire process, saving you time and effort."
          }
        />
        <SectionFragment
          img={"/assets/svgs/phone.svg"}
          pWidth={"100%"}
          title={"Paperless Convenience"}
          desc={
            "With Ewitnex, say goodbye to traditional paper tickets. Our paperless solution eliminates the hassle of printing and distributing physical tickets, providing a convenient and eco-friendly alternative. Attendees can easily access and present their digital tickets, enhancing the check-in experience."
          }
        />
      </div>
      <div
        css={{
          display: isTablet ? "flex": "grid",
          flexDirection:"column",
          gridTemplateColumns: "55% 45%",
        }}
      >
        <SectionFragment
          img={"/assets/svgs/bullseye.svg"}
          pWidth={isTablet ? "100%" : "80%"}
          title={"Comprehensive Venue Search"}
          desc={
            "Finding the perfect venue for your event can be time-consuming and overwhelming. Ewitnex's comprehensive venue search tool simplifies the process. Save valuable time and energy by accessing a curated selection of venues that meet your specific requirements, all in one place."
          }
        />
        <SectionFragment
          img={"/assets/svgs/wand.svg"}
          pWidth={"100%"}
          title={"Inclusive and Engaging Experiences"}
          desc={
            "Ewitnex is committed to creating inclusive events and fostering engagement. Our platform offers features like personalized recommendations, networking opportunities, and cultural storytelling, ensuring attendees have a memorable and engaging experience that celebrates diversity."
          }
        />
      </div>
    </div>
  );
};

export default WhyUseEwitnexFragment;

const SectionFragment = ({
  img,
  title,
  desc,
  pWidth,
}: {
  img: string;
  title: string;
  desc: string;
  pWidth?: string;
}) => {
  const isTablet = useMediaQuery("(max-width: 900px)" );

  return (
    <div css={{ marginBottom: "3rem" }}>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FFF",
          width: "95px",
          height: "95px",
          borderRadius: "50%",
        }}
      >
        <Image src={img} alt="" width={40} height={40} />
      </div>
      <p
        css={{
          color: "#00d9b7",
          fontSize: isTablet ? "1rem" : "1.1rem",
          fontWeight: "600",
          marginTop: "1rem",
        }}
      >
        {title}
      </p>
      <p
        css={{
          width: pWidth ? pWidth : "80%",
          letterSpacing: "0.28px",
          fontSize:  isTablet ? "0.85rem" : "0.9rem",
          marginTop: "1rem",
          lineHeight: "1.5rem",
          fontWeight: "300",
        }}
      >
        {desc}
      </p>
    </div>
  );
};
