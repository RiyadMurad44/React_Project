import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Components/login"; 
import Signup from "./Components/signup";
import './App.css'

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
