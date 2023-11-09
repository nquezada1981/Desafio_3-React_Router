import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import Personajes from './components/pages/Personajes/Personajes';
import Pokemon from './components/Pokemon/Pokemon';
import './App.css';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:namePokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App