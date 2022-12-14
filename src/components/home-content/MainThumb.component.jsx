import { Link } from "react-router-dom";
import { Image } from "../image/image.component";
import { constructRoutes } from "../../utilities/string.utilities";
import { HeadingText } from "../text/heading-text.component";
import { SubHeading } from "../text/subheading.component";
export const MainThumb = ({ name, imageURL, text, artist }) => {
  return (
    <Link to={`/${constructRoutes(name)}`}>
      <div className="after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-black/[0.85] relative">
        <Image
          className="relative top-0 left-0 w-full h-full"
          path={process.env.PUBLIC_URL + imageURL}
          altName={name}
        />
        <div className="absolute bottom-0 z-10 w-full px-8 pb-8">
          <HeadingText size="medium" otherStyles="text-white">
            {text}
          </HeadingText>
          <SubHeading size="small" otherStyles="text-white">
            {artist}
          </SubHeading>
        </div>
      </div>
    </Link>
  );
};
