import "./App.css";
import { data } from "./data/data.js";
import { Home } from "./routes/home/home.component";
import { Artwork } from "./routes/artwork/artwork.component";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { constructRoutes } from "./utilities/string.utilities";
function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home artworks={data} />} />
        {data.map((art, index) => (
          <Route
            key={art.name + Math.random()}
            path={constructRoutes(art.name)}
            element={
              <Artwork
                art={art}
                nextItem={data[index + 1]}
                index={index}
                prevItem={data[index - 1]}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
