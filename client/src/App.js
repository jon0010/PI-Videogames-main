import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home";
import VideogameDetail from "./components/VideogameDetail/VideogameDetail.jsx";
import FormVideogame from "./components/FormVideogame/FormVideogame.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/:id" element={<VideogameDetail />} />
        <Route exact path="/create" element={<FormVideogame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
