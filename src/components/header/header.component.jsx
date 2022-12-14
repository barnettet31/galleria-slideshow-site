import { Link, Outlet } from "react-router-dom";
import { LinkText } from "../text/link-text.component";
import { useMatch } from "react-router-dom";
import { data } from "../../data/data";
import { constructRoutes } from "../../utilities/string.utilities";
export const Header = () => {
  const home = useMatch("/") ? "Start" : "Stop";

  return (
    <div className="">
      <header className="flex items-center justify-between px-10 pt-10 border-b border-b-med-grey pb-9">
        <Link className="w-2/6" to="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/shared/logo.svg"}
            alt="logo"
          />
        </Link>
        <Link to={home === "Start" ? `/${constructRoutes(data[0].name)}` : "/"}>
          <LinkText size="large">{home} SlideShow</LinkText>
        </Link>
      </header>
      <Outlet />
    </div>
  );
};
