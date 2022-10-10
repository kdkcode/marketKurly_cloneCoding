import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from"./Login";
import {dummy} from './movieDummy';
import Movie from './components/Movie';
import Movies from './pages/Movies';
import Tv from "./pages/Tv";
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import Header from './components/Header';
import MovieDetail from "./pages/MovieDetail";
import Help from "./pages/Help";
import Rules from "./pages/Rules";



function App() {
  return (
  <div class="root-wrap">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/help" element={<Help />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    
    </BrowserRouter>
  </div>






    // <div>
        
    //     <div className="app-container">
    //       {
    //         dummy.results.map((item) => {
    //           return(
    //             <Movie 
    //               title={item.title}
    //               poster_path={item.poster_path}
    //               vote_average={item.vote_average}
    //             />
    //           )
    //         })
    //       }
    //     </div>
    // </div>
  
      
 
  );
}

export default App;
