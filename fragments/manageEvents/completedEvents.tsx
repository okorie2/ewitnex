/** @jsxImportSource @emotion/react */

import ManageEventCard from "@/components/cards/manageEventCard";

const CompletedEvents = () => {
    return (
      <div css={{ display: "flex", gap: "1rem" }}>
        <ManageEventCard
          image="/assets/pngs/devFestAba.png"
          title="DevFest Aba"
          date="Sat, Nov. 25, 2022"
          time=" 10:00 AM - 2:00 PM"
          type="Conference"
          attendees="0/500"
          id="tec542445"
        />
      </div>
    );
  };
  

  export default CompletedEvents;