/** @jsxImportSource @emotion/react */

import ManageEventCard from "@/components/cards/manageEventCard";


const Drafts = () => {
    return (
      <div css={{ display: "flex", gap: "1rem" }}>
        
        <ManageEventCard
          image="/assets/pngs/fionaGabe.png"
          title="FIona & Gabe"
          date="Sat, Nov. 25, 2022"
          time=" 10:00 AM - 2:00 PM"
          type="Wedding"
          attendees="0/500"
          id="Wed542445"
        />
        
      </div>
    );
  };
  
  export default Drafts