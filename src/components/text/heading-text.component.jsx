const headingSizes = {
  small: "text-sm",
  medium: "text-lg",
  large: "text-xl",
};
export const HeadingText = ({ size, children }) => {
  return <h2 className={`text-black ${headingSizes[size]}`}>{children}</h2>;
};
