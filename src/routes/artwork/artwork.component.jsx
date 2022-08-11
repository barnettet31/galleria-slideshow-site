export const Artwork = ({ art, nextItem }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl">{art.name}</p>
      <p className="text-xl">{nextItem?.name}</p>
    </div>
  );
};
