import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "../../components/image/image.component";
import { BodyText } from "../../components/text/body-text.component";
import { DisplayText } from "../../components/text/display-text.component";
import { HeadingText } from "../../components/text/heading-text.component";
import { SubHeading } from "../../components/text/subheading.component";
import { constructRoutes } from "../../utilities/string.utilities";

export const Artwork = ({ art, nextItem, prevItem }) => {
  const [dim, setDim] = useState(false);
  const handleToggleDim = () => setDim(!dim);
  return (
    <>
      <div className="flex flex-col space-around">
        <div className="flex flex-col pt-10 px-10 justify-between gap-[98px] mt-6 md:mt-10 lg:flex-row lg:gap-6 lg:mt-[100px]">
          <div className="relative lg:w-1/2">
            <Image
              path={process.env.PUBLIC_URL + art.images.hero.large}
              className="relative w-[375px] md:w-[475px]"
              altName={art.name}
            />
            <div
              onClick={handleToggleDim}
              className="group  py-3 5 px-4 w-[152px] cursor-pointer bg-black/75 hover:bg-white/25 flex gap-3.5 absolute top-4 left-4 md:bottom-4 md:top-[auto] items-center justify-center lg:bottom-8"
            >
              <Image
                path={
                  process.env.PUBLIC_URL + "/assets/shared/icon-view-image.svg"
                }
                className="w-3 h-3"
                altName="none"
              />
              <SubHeading size="small" otherStyles="text-white">
                VIEW IMAGE
              </SubHeading>
            </div>
            <div className="bg-white w-[80%] absolute px-6 py-4 md:pt-0 md:px-16 bottom-0 md:top-0 md:left-[222px] md:bottom-auto md:pr-1 md:w-[455px] lg:w-[445px] lg:left-96">
              <HeadingText
                otherStyles="text-left mb-6 md:text-[54px] md:leading-[64px] whitespace-normal md:w-1/2"
                size="medium"
              >
                {art.name}
              </HeadingText>
              <SubHeading size="large">{art.artist.name}</SubHeading>
            </div>
            <Image
              altName={art.artist.name}
              path={process.env.PUBLIC_URL + art.artist.image}
              className="absolute md:right-8 md:top-1/3  lg:left-[31.875rem] lg:top-[87.5%] w-16 md:w-auto"
            />
          </div>
          <div className="flex flex-col md:w-[90%] lg:w-1/2 z-10 self-center">
            <DisplayText otherStyles="text-right -mb-1 lg:text-[200px] lg:text-left lg:py-[10%] lg:-mb-14">
              {art.year}
            </DisplayText>
            <BodyText otherStyles="text-[#7d7d7d] md:w-[9] text-justify lg:w-1/2">
              {art.description}
            </BodyText>
            <a
              href={art.source}
              rel="noreferrer"
              target="_blank"
              className="text-[#7d7d7d] underline mt-20 lg:block hover:text-black"
            >
              Go To Source
            </a>
          </div>
        </div>
        <div className="w-screen border-t border-t-[#e5e5e5] py-6 px-6 mt-[123px] flex items-center justify-between ">
          <div>
            <p className="text-black text-[14px] leading-[17.36px] mb-2">
              {art.name}
            </p>
            <p className="text-black text-[10px] leading-[12px]">
              {art.artist.name}
            </p>
          </div>
          <div className="flex w-[10%] justify-center gap-9">
            <Link to={prevItem ? `../${constructRoutes(prevItem.name)}` : "/"}>
              <Image
                path={
                  process.env.PUBLIC_URL + "/assets/shared/icon-back-button.svg"
                }
                altName="none"
              />
            </Link>
            <Link to={nextItem ? `../${constructRoutes(nextItem.name)}` : "/"}>
              <Image
                path={
                  process.env.PUBLIC_URL + "/assets/shared/icon-next-button.svg"
                }
                altName="none"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          !dim ? "hidden" : "fixed"
        } top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black/80`}
      >
        <div className="flex flex-col gap-6 px-4">
          <div onClick={handleToggleDim} className="self-end">
            <SubHeading size="large" otherStyles="cursor-pointer ">
              Close
            </SubHeading>
          </div>
          <Image
            altName={art.name}
            path={process.env.PUBLIC_URL + art.images.gallery}
          />
        </div>
      </div>
    </>
  );
};
