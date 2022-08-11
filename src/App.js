import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/index.js';
import Home from './component/Home/index.js';
import View from './component/View/index.js';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:id' element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
