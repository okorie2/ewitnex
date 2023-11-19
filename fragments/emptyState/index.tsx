/** @jsxImportSource @emotion/react */
import Image from "next/image";

const EmptyState = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        width: "50vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: "1rem",
        // boxShadow: "0px 0px 10px #00000029",
        // border:"1px solid #BBB"
      }}
    >
      <Image
        src="/assets/pngs/mt-state.png"
        alt="empty page"
        height={200}
        width={200}
        priority
      />
      <p css={{ fontWeight: "700", fontSize: "1.5rem" }}>
        Uh oh, its a bit empty in here!
      </p>
      {children}
    </div>
  );
};

export default EmptyState;