const subHeadingSizes = {
  small: "text-[13px] leading-[17px]",
  large: "text-[15px] leading-[19px]",
};
export const SubHeading = ({ size, children, otherStyles }) => (
  <h3 className={`text-[#7d7d7d] ${subHeadingSizes[size]}  ${otherStyles}`}>
    {children}
  </h3>
);
