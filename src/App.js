import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from"./Login";
// import {dummy} from './movieDummy';
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
import { useState } from "react";
import styled from "styled-components";
import {dummy} from "./questionDummy";
import Question from "./components/Question";
import Place from "./components/Place";
import Checkbox from "./components/Checkbox";
import axios from "axios";

function App() {
  const API_KEY ="48fde5cb1c8c5362c0b994ee6c628243";
  const url = 'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}';
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});

  const searchWeather = async (e) =>{
    if(e.key === 'Enter'){
      try{
        const data = await axios({
          method: 'get',
          url: url
        })
        console.log(data);
        setResult(data);

      }catch(err){
        alert(err);
      }
    }
  }
// 이과목에 대해서 과목 담당 교수님의 승인이 있어야 가능
// 전공선택 => 행정처리 
  return (
    <AppWrap>
      <div className='appContentWrap'>
        <input 
          placeholder='도시를 입력하세요'
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          type='text'
          onKeyDown={searchWeather}

        />
        {
          Object.keys(result).lenght !== 0 && (
            <ResultWrap>
              <div className="city">{result.data.name}</div>
              <div className="temperature">
                {Math.round(result.data.main.temp)}
              </div>
              <div className="sky">{result.data.weather[0].main}</div>
            </ResultWrap>
          )
        }
        





      </div>
    </AppWrap>
    



  // <div class="root-wrap">



  //   <BrowserRouter>
  //     <Header/>
  //     <Checkbox text="위치"
  //     />
  //     <RootWrap>
  //       {dummy.map((item) => (
  //         <Question key={item.idx} title={item.title} questionList={item.questionList}/>
  //       ))}
  //     </RootWrap>

  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/movie" element={<Movies />} />
  //       <Route path="/movie/:title" element={<MovieDetail />} />
  //       <Route path="/tv" element={<Tv />} />
  //       <Route path="/person" element={<Celebrity />} />
  //       <Route path="/*" element={<NotFound />} />
  //       <Route path="/help" element={<Help />} />
  //       <Route path="/rules" element={<Rules />} />
  //       <Route path="/places" element={<Place />} />
  //     </Routes>
    
  //   </BrowserRouter>
  
  // </div>






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

export default App

// const RootWrap = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   width: 100%;
//   max-width: 500px;
//   left: 50%;
//   transform: translate(-50%, 0);
//   background-color: white;
//   padding: 20px;
// `; 

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px red solid;

  .appContentWrap{
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;

    padding: 20px;
  }
  input {
    padding: 16px;
    border : 2px black solid;
    border-radius: 16px;
  }
  `;

  const ResultWrap = styled.div`
    margin-top: 60px;
    padding: 10px;
    border: 1px black solid;
    border-radius: 8px;
  `;