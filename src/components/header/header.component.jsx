import { Link, Outlet } from "react-router-dom";
import { LinkText } from "../text/link-text.component";
import { useMatch } from "react-router-dom";
import { data } from "../../data/data";
import { constructRoutes } from "../../utilities/string.utilities";
export const Header = () => {
  const home = useMatch("/") ? "Start" : "Stop";

  return (
    <div className="pt-10 px-10">
      <div className="flex justify-between border-b-med-grey border-b pb-9 items-center">
        <Link className="w-2/6" to="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/shared/logo.svg"}
            alt="logo"
          />
        </Link>
        <Link to={home === "Start" ? `/${constructRoutes(data[0].name)}` : "/"}>
          <LinkText size="large">{home} SlideShow</LinkText>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
