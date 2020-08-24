import React from "react";

const Backgound = ({ children, background = null }) => {
  if (background)
    return (
      <div
        style={{
          padding: "2rem",
          backgroundImage: `url("${background}")`, //"url(" + { background } + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
    );
  return (
    <div style={{ background: "#252525", padding: "2rem" }}>{children}</div>
  );
};

export default Backgound;
