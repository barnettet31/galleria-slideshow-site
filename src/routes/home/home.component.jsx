import { Link } from "react-router-dom"
import { constructRoutes } from "../../utilities/string.utilities"

export  const Home = ({artworks})=>{
  
    return (
        <div className="flex flex-col justify-center items-center">
    <h1 className="text-3xl">Hello Test</h1>
    {artworks.map(art=><Link key={art.name + Math.random()} to={constructRoutes(art.name)}>{art.name}</Link>
    )}
    </div>
    )

}