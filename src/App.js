import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, SingleHotel, ResultPage, Login, SignUp,Payment,OrderSummary } from "./pages/index";
import {Wishlist} from "../src/components/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hotels/:name/:address/:id/reserve"
        element={<SingleHotel />}
      />
      <Route path="/hotels/:address" element={<ResultPage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirm-booking/stay/:id" element={<Payment />} />
      <Route path="/orderSummary" element={<OrderSummary/>}/>
    </Routes>
  );
}

export default App;
