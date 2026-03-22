import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`group rounded-full px-7 py-3 text-center text-[14px] font-semibold transition-all duration-200 sm:text-[16px] ${
          active
            ? "bg-richblack-5 text-white shadow-soft hover:-translate-y-0.5 hover:bg-richblack-25 hover:shadow-card"
            : "border border-richblack-600 bg-white text-richblack-5 hover:-translate-y-0.5 hover:border-richblack-400 hover:shadow-soft"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
