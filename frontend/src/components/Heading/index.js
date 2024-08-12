import React from "react";

const sizes = {
  heading3x1: "text-[45px] font-bold lg:text-[45px] md:text-[41px] sm:text-[38px]",
  headings: "text-[15px] font-semibold",
  heading2xl: "text-[32px] font-semibold lg:text-[32px] md:text-[30px] sm:text-[27px]",
  textmd: "text-[14px] font-medium",
  text2xl: "text-[24px] font-medium lg:text-[24px] md:text-[22px] sm:text-[20px]",
  headingmd: "text-[18px] font-semibold sm:text-[15px]",
  text3xl: "text-[40px] font-medium lg:text-[40px] md:text-[38px] sm:text-[34px]",
  headingxl: "text-[30px] font-semibold lg:text-[30px] md:text-[28px] sm:text-[25px]",
  heading4xl: "text-[48px] font-semibold lg:text-[48px] md:text-[44px] sm:text-[40px]",
  headinglg: "text-[24px] font-semibold lg:text-[24px] md:text-[22px] sm:text-[20px]",
  text4xl: "text-[83px] font-medium lg:text-[83px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headingmd", as: Component = "h6", ...restProps }) => {
  return (
    <Component className={`text-black-900 font-poppins3 ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
