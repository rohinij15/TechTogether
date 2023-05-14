import logo from './logo.svg';
import './App.css';
import Login from './login';
import HomePage from './HomePage';
import Practice from './practice';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/practice' element={<Practice/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
