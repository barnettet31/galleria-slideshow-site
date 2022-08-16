export const DisplayText = ({ children, otherStyles }) => (
  <h2
    className={` ${otherStyles} text-[100px] md:text-[200px] self-end lg:self-start leading-[64px] text-[#f3f3f3]`}
  >
    {children}
  </h2>
);
