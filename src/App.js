import './App.css';
import {data} from  './data/data.js'
import { Home } from './routes/home/home.component';
import { Artwork } from './routes/artwork/artwork.component';
import {Routes, Route} from 'react-router-dom';
import { constructRoutes } from './utilities/string.utilities';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home artworks={data}/>} />
      {data.map(art=>
        <Route key={art.name+Math.random()} path={constructRoutes(art.name)} element={<Artwork art={art}/>}/>
      )}
    </Routes>
);
}

export default App;