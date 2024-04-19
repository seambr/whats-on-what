import React from "react";

function ServiceAvailibilityLogos({ availibility, rounded }) {
  return (
    <>
      {availibility.map((e) => (
        <img
          src={`../logos/${e.toLowerCase()}-icon.svg`}
          alt={e}
          key={e}
          style={{
            borderRadius: rounded ? "12px" : 0,
            bottom: "0",
          }}
          draggable={false}
        />
      ))}
    </>
  );
}

export default ServiceAvailibilityLogos;
