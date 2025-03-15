import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from "./Pages/Signup";
import Login from "./Pages/Login"
import Home from './Pages/Home';
import AddImage from './Pages/AddImage';
import './App.css'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/AddImage" element={<AddImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
