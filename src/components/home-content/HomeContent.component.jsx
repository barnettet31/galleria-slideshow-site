import { MainThumb } from "./MainThumb.component";
export const HomeContent = ({ artwork }) => {
  return (
    <main className="py-10">
      <section className="hidden lg:grid lg:gap-10 lg:grid-cols-4 px-6">
        <div className="flex flex-col justify-between gap-10">
          <MainThumb
            name={artwork[0].name}
            imageURL={artwork[0].images.gallery}
            text={artwork[0].name}
            artist={artwork[0].artist.name}
          />
          <MainThumb
            name={artwork[4].name}
            imageURL={artwork[4].images.gallery}
            text={artwork[4].name}
            artist={artwork[4].artist.name}
          />
          <MainThumb
            name={artwork[8].name}
            imageURL={artwork[8].images.gallery}
            text={artwork[8].name}
            artist={artwork[8].artist.name}
          />
          <MainThumb
            name={artwork[11].name}
            imageURL={artwork[11].images.gallery}
            text={artwork[11].name}
            artist={artwork[11].artist.name}
          />
        </div>
        <div className="flex flex-col justify-between gap-10">
          <MainThumb
            name={artwork[1].name}
            imageURL={artwork[1].images.gallery}
            text={artwork[1].name}
            artist={artwork[1].artist.name}
          />{" "}
          <MainThumb
            name={artwork[5].name}
            imageURL={artwork[5].images.gallery}
            text={artwork[5].name}
            artist={artwork[5].artist.name}
          />{" "}
          <MainThumb
            name={artwork[9].name}
            imageURL={artwork[9].images.gallery}
            text={artwork[9].name}
            artist={artwork[9].artist.name}
          />{" "}
          <MainThumb
            name={artwork[12].name}
            imageURL={artwork[12].images.gallery}
            text={artwork[12].name}
            artist={artwork[12].artist.name}
          />
        </div>
        <div className="flex flex-col justify-between gap-10">
          <MainThumb
            name={artwork[2].name}
            imageURL={artwork[2].images.gallery}
            text={artwork[2].name}
            artist={artwork[2].artist.name}
          />
          <MainThumb
            name={artwork[6].name}
            imageURL={artwork[6].images.gallery}
            text={artwork[6].name}
            artist={artwork[6].artist.name}
          />{" "}
          <MainThumb
            name={artwork[10].name}
            imageURL={artwork[10].images.gallery}
            text={artwork[10].name}
            artist={artwork[10].artist.name}
          />{" "}
          <MainThumb
            name={artwork[13].name}
            imageURL={artwork[13].images.gallery}
            text={artwork[13].name}
            artist={artwork[13].artist.name}
          />
        </div>
        <div className="flex flex-col justify-between gap-10">
          <MainThumb
            name={artwork[3].name}
            imageURL={artwork[3].images.gallery}
            text={artwork[3].name}
            artist={artwork[3].artist.name}
          />
          <MainThumb
            name={artwork[7].name}
            imageURL={artwork[7].images.gallery}
            text={artwork[7].name}
            artist={artwork[7].artist.name}
          />
          <MainThumb
            name={artwork[11].name}
            imageURL={artwork[11].images.gallery}
            text={artwork[11].name}
            artist={artwork[11].artist.name}
          />
          <MainThumb
            imageURL={artwork[14].images.gallery}
            name={artwork[14].name}
            text={artwork[14].name}
            artist={artwork[14].artist.name}
          />
        </div>
      </section>
      <section className="hidden md:grid md:grid-cols-2 md:gap-10 lg:hidden px-6">
        <div className="flex flex-col justify-between">
          <MainThumb
            name={artwork[0].name}
            imageURL={artwork[0].images.gallery}
            text={artwork[0].name}
            artist={artwork[0].artist.name}
          />
          <MainThumb
            name={artwork[2].name}
            imageURL={artwork[2].images.gallery}
            text={artwork[2].name}
            artist={artwork[2].artist.name}
          />
          <MainThumb
            name={artwork[4].name}
            imageURL={artwork[4].images.gallery}
            text={artwork[4].name}
            artist={artwork[4].artist.name}
          />
          <MainThumb
            name={artwork[6].name}
            imageURL={artwork[6].images.gallery}
            text={artwork[6].name}
            artist={artwork[6].artist.name}
          />
          <MainThumb
            name={artwork[8].name}
            imageURL={artwork[8].images.gallery}
            text={artwork[8].name}
            artist={artwork[8].artist.name}
          />
          <MainThumb
            name={artwork[10].name}
            imageURL={artwork[10].images.gallery}
            text={artwork[10].name}
            artist={artwork[10].artist.name}
          />
          <MainThumb
            name={artwork[12].name}
            imageURL={artwork[12].images.gallery}
            text={artwork[12].name}
            artist={artwork[12].artist.name}
          />
        </div>
        <div className="flex flex-col justify-between gap-10">
          <MainThumb
            name={artwork[1].name}
            imageURL={artwork[1].images.gallery}
            text={artwork[1].name}
            artist={artwork[1].artist.name}
          />
          <MainThumb
            name={artwork[3].name}
            imageURL={artwork[3].images.gallery}
            text={artwork[3].name}
            artist={artwork[3].artist.name}
          />
          <MainThumb
            name={artwork[5].name}
            imageURL={artwork[5].images.gallery}
            text={artwork[5].name}
            artist={artwork[5].artist.name}
          />
          <MainThumb
            name={artwork[7].name}
            imageURL={artwork[7].images.gallery}
            text={artwork[7].name}
            artist={artwork[7].artist.name}
          />
          <MainThumb
            name={artwork[9].name}
            imageURL={artwork[9].images.gallery}
            text={artwork[9].name}
            artist={artwork[9].artist.name}
          />
          <MainThumb
            name={artwork[11].name}
            imageURL={artwork[11].images.gallery}
            text={artwork[11].name}
            artist={artwork[11].artist.name}
          />
          <MainThumb
            name={artwork[13].name}
            imageURL={artwork[13].images.gallery}
            text={artwork[13].name}
            artist={artwork[13].artist.name}
          />
          <MainThumb
            name={artwork[14].name}
            imageURL={artwork[14].images.gallery}
            text={artwork[14].name}
            artist={artwork[14].artist.name}
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:hidden lg:hidden px-6">
        <div className="flex flex-col justify-between gap-10">
          {artwork.map((art) => (
            <MainThumb
              name={art.name}
              imageURL={art.images.gallery}
              text={art.name}
              artist={art.artist.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
