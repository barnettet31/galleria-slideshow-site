const headingSizes = {
  small: "text-sm",
  medium: "text-lg",
  large: "text-xl",
};
export const HeadingText = ({ size, children, otherStyles }) => {
  return (
    <h2 className={`${otherStyles} ${headingSizes[size]} `}>{children}</h2>
  );
};
