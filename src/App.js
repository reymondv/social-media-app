import { useState } from 'react';
import './App.css';
import Header from './component/Header/index.js';
import Home from './component/Home/index.js';

function App() {
  const [user, setUser] = useState('John Doe');
  return (
    <div className='container'>
      <Header user={user} />
      <Home user={user} />
    </div>
  );
}

export default App;
