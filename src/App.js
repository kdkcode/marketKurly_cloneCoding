import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import About from "./components/About";
import Navbar from "./components/Navbar/Navbar";
import Login from"./Login";

function App() {
  return (
    <div>
        <Login />
    </div>
    
   
  // <Router>
      
  //   <Navbar />

  //   <Routes>
  //     <Route path="/" component={Home} exact>
  //       <Home />
  //     </Route>
  //     <Route path="/about" component={About} exact>
  //       <About />
  //     </Route>
  //     <Route path="/skills" component={Skills} exact>
  //       <Skills />
  //     </Route>
  //     <Route path="/contact" component={Contact} exact>
  //       <Contact />
  //     </Route>
  //     <Route path="/signup" component={Signup} exact>
  //       <Signup />
  //     </Route>

  //   </Routes>
  
  // </Router>
  );
}

export default App;
