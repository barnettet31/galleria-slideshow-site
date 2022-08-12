export const Image = ({ path, altName, ...otherProps }) => (
  <img {...otherProps} src={path} alt={altName} />
);
