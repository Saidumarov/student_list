import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menyu1 from "./menyu/Menyu1";
import Menyu from "./menyu/Menyu";
import Mate from "./menyu/Mate";
import Data from "./menyu/Data";
import Jpg from "./menyu/Jpg";

function App() {
  return (
    <div>
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
