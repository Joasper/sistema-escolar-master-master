import React from "react";
import { IoSchool } from "react-icons/io5";

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-3 ">
      <div
        className=" flex justify-center items-center h-4"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "rgba(28, 17, 41,0.81)",
          fontSize: "1.5rem",
          display: "flex",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IoSchool />
      </div>
    </div>
  );
};

export default Logo;
