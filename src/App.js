import './App.css';
import Mainpageposter from './components/MainPagePoster/Mainpageposter';
import Navbar from './components/NavBar/Navbar';
import Searchbar from './components/SearchBar/Searchbar';
import Topratedmovies from './components/TopRatedMovies/Topratedmovies';
import Loginpage from './components/loginpage/Loginpage';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Topratedmovies/>
    </div>
  );
}

export default App;
