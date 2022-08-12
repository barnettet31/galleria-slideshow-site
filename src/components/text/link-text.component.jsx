const linkSizes = {
  large: "text-[12px] leading-[15px] tracking-[2.5px]",
  small: "text-[9px] leading-[11px] tracking-[2px]",
};
export const LinkText = ({ size, children }) => {
  return (
    <p
      className={`text-dark-grey ${linkSizes[size]} hover:text-black cursor-pointer`}
    >
      {children}
    </p>
  );
};
