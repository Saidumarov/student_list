import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menyu1 from "./components/menyu/Menyu1";
import Menyu from "./components/menyu/Menyu";
import Mate from "./components/menyu/Mate";
import Data from "./components/menyu/Data";
import Jpg from "./components/Jpg";

function App() {
  return (
    <div>
      {/* <Menyu/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menyu />}>
            <Route index element={<Jpg />} />
            <Route path="/tarix" element={<Data />} />
            <Route path="/english" element={<Menyu1 />} />
            <Route path="matematika" element={<Mate />} />
            <Route path="IT" element={<Menyu1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
