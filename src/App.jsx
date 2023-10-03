import { useEffect , useState } from 'react'
import classes from './App.module.css';
import Search from './assets/search.svg';
import MovieCard from './component/MovieCard/MovieCard';
// c8fcec44
//GLOBAL VARIABLE
const API_URL = "https://www.omdbapi.com?apikey=c8fcec44" 
// const movie = 
//   {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "N/A"
// }

function App() {

    const [movies , setMovies] = useState([]);
    const [searchedMovie , setSearchedMovie] = useState("");


    const searchMovie = async (title)=>{
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json();
      setMovies(data.Search);
      console.log(data.Search);
    }
  
    const changeHandler = (event) => {
        setSearchedMovie(event.target.value);
    }
  
    useEffect(()=>{
    searchMovie();
    },[])
  
  return (
    <div className={classes.App}>
      <h1>MovieZila</h1>
      <div className={classes.Input}>
        <input
        placeholder='Search Movie'
        value={searchedMovie}
        onChange={(event)=>changeHandler(event)}
        />
      <img src={Search} alt="icon" onClick={()=>searchMovie(searchedMovie)}/>
      </div>

      <div className={classes.MegaContainer}>
      {
      movies?.length > 0 ? 
      (
        
          movies.map((movie) => (
            <MovieCard {...movie}/>
          ))
        
      ) : 
      (
      <div>
        <h2 style={{
          color:"white",
          padding:"10px",
          marginTop:"30px"
        }}>No Movie Found!</h2>
      </div>
      )
    }

      </div>
      
    </div>  
  )
}

export default App
