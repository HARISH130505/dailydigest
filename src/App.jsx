import Header from "./Header";
import Home from "./Home";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import News from "./News";
import Sports from "./Categories/Sports";
import Entertainment from "./Categories/Entertainment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App(){
    return(
        <div>
            <Header/>
            <BrowserRouter>
              <Routes>
                 <Route index element={<Home/>}/>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/news" element={<News/>} />
                 <Route path="/entertainment" element={<Entertainment/>}/>
                 <Route path ="/sports" element={Sports}/>
              </Routes>
            </BrowserRouter>
            <Subscribe/>
            <Footer/>
        </div>
    );
}
export default App;
