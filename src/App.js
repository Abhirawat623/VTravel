import "./App.css";
import { Route,Routes } from "react-router-dom";
import { Home,SingleHotel,ResultPage } from "./pages/index";
function App() {
  return (
   <Routes> 
    <Route path="/" element={<Home />}/>
    <Route path='/hotels/:name/:address/:id/reserve'
     element={<SingleHotel/>}/>
    <Route path="/hotels/:address" element={<ResultPage />} />
   </Routes>
  

  );
}

export default App;
