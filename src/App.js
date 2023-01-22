import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Components/Navbar/Navbar';
import Image from './Components/Home/data/Image'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Image/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

