import logo from './logo.svg';
import './App.css';
import Login from './login';
import HomePage from './HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
       {/* <Route path='/login' element={<Login/>}/> */}
       <Route path='/' element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
