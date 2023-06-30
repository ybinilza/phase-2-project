import './App.css';
import Mainpageposter from './components/MainPagePoster/Mainpageposter';
import Navbar from './components/NavBar/Navbar';
import Searchbar from './components/SearchBar/Searchbar';
import Loginpage from './components/loginpage/Loginpage';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Mainpageposter/>
    </div>
  );
}

export default App;
