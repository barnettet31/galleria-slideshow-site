import { Link } from "react-router-dom";
import { constructRoutes } from "../../utilities/string.utilities";
import { Image } from "../../components/image/image.component";
export const Home = ({ artworks }) => {
  return (
    <div className="grid gap-10 grid-flow-columns grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {artworks.map((art) => (
        <Link
          key={art.name + Math.random()}
          to={`/${constructRoutes(art.name)}`}
        >
          <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.85)]">
            <Image
              path={process.env.PUBLIC_URL + art.images.gallery}
              altText={art.name}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
