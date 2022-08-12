const subHeadingSizes = {
  small: "text-[13px] leading-[17px]",
  large: "text-[15px] leading-[19px] font-bold",
};
export const SubHeading = ({ size, children }) => (
  <h3 className={`text-dark-gray ${subHeadingSizes[size]} hover:text-black`}>
    {children}
  </h3>
);
