
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./routes/home"
import Detail from "./routes/detail";
import Latest from "./routes/latest";


export default function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="*" element={<p>Not Found Page...👻</p>} />
      </Routes>
    </BrowserRouter>
  );
}