import React from "react";

const sizes = {
  texts: "text-[12px] font-normal not-italic",
  textxl: "text-[18px] font-normal not-italic sm:text-[15px]",
};

const Text = ({ children, className = "", size = "textxl", ...restProps }) => {
  const Component = "p";
  return (
    <Component className={`text-gray-700 font-poppins3 ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export default { Text };
