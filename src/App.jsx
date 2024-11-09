import Header from "./Header";
import Home from "./Home";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import News from "./News";
import Sports from "./Categories/Sports";
import Politics from "./Categories/Politics";
import Health from "./Categories/Health";
import Entertainment from "./Categories/Entertainment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App(){
    return(
        <BrowserRouter>
            <Header/>
              <Routes>
                 <Route path="/" element={<Home/>}/>
                 <Route path="/news" element={<News/>} />
                 <Route path="/ent" element={<Entertainment/>}/>
                 <Route path ="/sports" element={<Sports />}/>
                 <Route path ="/politics" element={<Politics/>}/>
                 <Route path ="/health" element={<Health/>}/>
              </Routes>
            <Subscribe/>
            <Footer/>
        </BrowserRouter>
    );
}
export default App;
